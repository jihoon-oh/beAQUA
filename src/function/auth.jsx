import {variables} from './variables'
import {getCookie, setCookie, eraseCookie} from './cookies'
setCookie('token', '8afbd9ac23b7a5e3a1559afd140a80ee197a5b2ea6618fcffef75295410386b7', (9999))
export function auth_(){
   return fetch(variables('accountsApi')+'/auth/token/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json',},
         body: JSON.stringify({
            token:            getCookie('token'),
            access_token:     getCookie('access_token')                            
         })
      })
      .then(response => response.json())
      .then(data => {
         if(data.status === 'success'){
            if(data.type === 'token'){
               setCookie('token',data.token,(9999))
            } else if(data.type === 'access_token'){
               setCookie('access_token',data.access_token,(9999))
               return 'logged_in'
            } else if(data.type === 'logged_in'){
               return 'logged_in'
            } else if(data.type === 0){
               eraseCookie('access_token');
               eraseCookie('access_token');
               auth_()
            }
         }
      })
      .catch(() => {
         setTimeout(() => {
            auth_()
         }, 3000);
      });
}