export function variables(b){
   var a = {
        name:              'AQUA pay',
        accountsApi:       'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/v1',
        api:               'http://localhost:8383',
        host:              'http://localhost:4646'
   }

   return a[b]
}