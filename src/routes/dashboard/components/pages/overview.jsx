import React                        from 'react';
import {NavLink}                    from 'react-router-dom';
import {LineChart, PieChart, Pie, Cell, AreaChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend, Area, ResponsiveContainer, ReferenceLine} from'recharts'

class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        mainViewWidth: 0,
        mainViewHeight: 0,
        overviewPlanLabelHeight: 0,
        dashChartChangerActive: {
            day: '',
            week: '',
            month: 'chartChangerActive',
        },
        transactions: []
      }
    }

    render() { 
        var data = [
            {
                date: '1 Jan', Transactions: 10
            },
            {
                date: '2 Jan', Transactions: 15
            },
            {
                date: '3 Jan', Transactions: 5
            },
            {
                date: '4 Jan', Transactions: 44
            },
            {
                date: '5 Jan', Transactions: 14
            },
            {
                date: '6 Jan', Transactions: 61
            },
            {
                date: '7 Jan', Transactions: 58
            },
        ]

        const data2 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
          ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({
            cx, cy, midAngle, innerRadius, outerRadius, percent, index,
          }) => {
             const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          };
        return (
            <>
                <div id="dashOverview">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="labelAllWhite" style={{minHeight: this.state.overviewPlanLabelHeight}}>
                                    <div>
                                        <b>Welcome {this.props.user.first_name+' '+this.props.user.last_name}</b>
                                        <div className="small mt15_">
                                            <LastLoggedIn data={this.props.user.last_logged_in} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div id="overviewPlanLabel" className="labelAll">
                                    <UserPlan data={this.props.user} />
                                </div>
                            </div>
                            <div className="col-xs-12 text-right">
                                <div className="chartChanger">
                                    <span onClick={()=>{this.setState({dashChartChangerActive: {day: 'chartChangerActive', week: '', month: ''}});this.chartChangerActive('day')}} className={this.state.dashChartChangerActive.day}>Day</span>
                                    <span onClick={()=>{this.setState({dashChartChangerActive: {day: '', week: 'chartChangerActive', month: ''}});this.chartChangerActive('week')}} className={this.state.dashChartChangerActive.week}>Week</span>
                                    <span onClick={()=>{this.setState({dashChartChangerActive: {day: '', week: '', month: 'chartChangerActive'}});this.chartChangerActive('month')}} className={this.state.dashChartChangerActive.month}>Month</span>
                                    {/* onclick change states */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <div className="chartContainer">
                                    <div className="chartTitle">Transactions <span className="rotate_ pull-right fas fa-sync"></span></div>
                                    <AreaChart 
                                        width={this.state.mainViewWidth}
                                        height={this.state.mainViewHeight}
                                        data={this.state.transactions}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E7E7E7" />
                                        <XAxis dataKey="date" stroke="#005AC6" />
                                        <YAxis stroke="#005AC6" />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="Transactions" stroke="#005AC6" fill="#005AC6" />
                                    </AreaChart>
                                </div>
                            </div>
                            {/* <div className="col-xs-12 col-md-4">
                                <div className="chartContainer row">
                                    <div className="chartTitle">Revenue <span className="rotate_ pull-right fas fa-sync"></span></div>
                                    <div className="labelAll">
                                        <div className="title2 mb15_">Total</div>
                                        <div>938,398.930239 USD</div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>BTC</td>
                                                        <td>2.44983443 BTC</td>
                                                        <td>23,892 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>ETH</td>
                                                        <td>22.44983443 ETH</td>
                                                        <td>12,892 USD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>  
        );
    }


  
    
  
    
    
    componentDidMount() {
        this.chartChangerActive('month')
        this.chartResize();
        window.addEventListener("resize", this.chartResize.bind(this));
    }

    componentDidUpdate(){
        if(this.state.mainViewWidth === 0 || this.state.mainViewWidth === null)
        this.setState({
            mainViewWidth: (document.querySelector('.chartContainer').offsetWidth * 0.95),
            mainViewHeight: (document.getElementById('dashboardMainView').offsetHeight * 0.3),
            overviewPlanLabelHeight: document.getElementById('overviewPlanLabel').offsetHeight
        })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.chartResize.bind(this));
    }

    chartResize(){
        this.setState({
            mainViewWidth: (document.querySelector('.chartContainer').offsetWidth * 0.95),
            mainViewHeight: (document.getElementById('dashboardMainView').offsetHeight * 0.3),
            overviewPlanLabelHeight: document.getElementById('overviewPlanLabel').offsetHeight
        })
    }

    chartChangerActive(a){
        var i = 0;
        var arr = [];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if(a === 'day'){
            arr = []
            i = 0
            for(i; i < this.props.user.transactions.day.length; i++){
                arr.push({
                    date: this.props.user.transactions.day[i].hour+':00',
                    Transactions: this.props.user.transactions.day[i].count
                })
            }
            this.setState({
                transactions: arr,
            })
        }
        if(a === 'week'){
            arr = []
            i = 0
            for(i; i < this.props.user.transactions.week.length; i++){
                arr.push({
                    date: this.props.user.transactions.week[i].day+' '+months[this.props.user.transactions.week[i].month - 1],
                    Transactions: this.props.user.transactions.week[i].count
                })
            }
            this.setState({
                transactions: arr,
            })
        }
        if(a === 'month'){
            arr = []
            i = 0
            for(i; i < this.props.user.transactions.month.length; i++){
                arr.push({
                    date: this.props.user.transactions.month[i].day+' '+months[this.props.user.transactions.month[i].month - 1],
                    Transactions: this.props.user.transactions.month[i].count
                })
            }
            this.setState({
                transactions: arr,
            })
        }
    }

}

export default Main;


class LastLoggedIn extends React.Component {
    render(){
        if(this.props.data.date){
            return <small>Last logged in {this.props.data.date} from {this.props.data.ip}</small>
        }
        return <></>
    }
}

class UserPlan extends React.Component {
    render(){
        if(this.props.data.plan !== 'Pro'){
            var upgrade = <NavLink to="/dashboard#Plans">Upgrade</NavLink>
        }
        return (
            <>
                <div className="title2 mb15_">{this.props.data.plan} plan</div>
                {upgrade}
            </>
        )
    }
}