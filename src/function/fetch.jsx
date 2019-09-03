import {variables}                           from './variables'
import {auth_}                               from './auth'
import {getCookie, eraseCookie}              from './cookies'
import {toast}                               from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function user_(){
   return fetch(variables('api')+'/data/user/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json',},
      body: JSON.stringify({
         token:            getCookie('token'),
         access_token:     getCookie('access_token')                            
      })
   })
   .then(response => response.json())
   .then(data => {
      if(data.status === 'success'){
         return data
      } else if(data.status === 'error'){
         //error
         window.location.href = '/'
      } else if(data.status === 'logged_out'){
         eraseCookie('access_token');
         eraseCookie('token');
         auth_()
         window.location.href = '/'
      }
   })
   .catch(() => {
      //error
   });
}

export function post_(btn = null, url, error, params){
   return fetch(variables('api')+url, {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json',},
      body: params                          
   })
   .then(response => response.json())
   .then(data => {
      if(btn){
         btn.disabled = false;
      }
      if(data.status === 'success'){
         if(url === '/plans/makePayment/' || url === '/create/onlinePayment/' || url === '/create/invoicePayment/'){
            return data.hash
         }
         if(url === '/create/submitSendingAddress/'){
            return data
         }
         toast.success(data.message, {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
         return data.status
      } else if(data.status === 'error'){
         toast.error(data.message, {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
      } else {
         toast.error(error, {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
      }
   })
   .catch(() => {
      if(btn){
         btn.disabled = false;
      }
      toast.error(error, {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
   });
}

export function currency_(a){
   return fetch(variables('api')+'/data/'+a+'currency/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json',},
      body: JSON.stringify({
         token:            getCookie('token'),
         access_token:     getCookie('access_token')                            
      })
   })
   .then(response => response.json())
   .then(data => {
      if(data.status === 'success'){
         return data
      } else if(data.status === 'logged_out'){
         eraseCookie('access_token');
         eraseCookie('token');
         auth_()
         window.location.href = '/'
      }
   })
   .catch(() => {
      //error
   });
} 

export function transactions_(a = null, b = null, c = 'dateDESC', d = 'All', count = 0){
   return fetch(variables('api')+'/data/transactions/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({
         token:               getCookie('token'),
         access_token:        getCookie('access_token'),                     
         time_frame:          a,
         date:                b,
         order:               c,
         show:                d,
         count:               count
      })
   })
   .then(response => response.json())
   .then(data => {
         if(data.status === 'success'){
            return data.transactions
         } else if(data.status === 'logged_out'){
         // window.location.href = '/'
         }
   })
   .catch(() => {
         // window.location.href = '/'
   });
}