const lang = {
    en: {
        hour: "HOUR",
        hours: "HOURS",
        minute: "MINUTE",
    }
};
window.addEventListener('DOMContentLoaded', init());
var $h = document.querySelector('.hour'),
$m = document.querySelector('.minute'),
$s = document.querySelector('.second'),
$y = document.querySelector('.yahoo'),
$cs = document.querySelector('.clocks');
function init (){
    doSomeMagic();
    document.querySelector('.button-close').addEventListener('click', function(){
        $y.classList.add("d-none");
        $cs.classList.remove('d-none');
    });
}

function doSomeMagic(){
    var date = new Date,
    seconds = 59 - date.getSeconds(),
    minutes = 59 - date.getMinutes(),
    hours = 16 - date.getHours();

    var time = setInterval(function(){
        if(seconds > 0){
            seconds -= 1;
        }else{
            if(hours === 0 && minutes === 0){
                seconds = 0;
            }else{
                seconds = 59;
            }
            if(minutes > 0){
                minutes -= 1;
            }else{
                if(hours === 0 && minutes === 0){
                    minutes = 0;
                }else{
                    minutes = 59;
                }
                if(hours > 0){
                    hours -= 1;
                }
            }
        }

        if(seconds == 1){
            $s.querySelector('span:last-child').innerHTML = 'SECOND';
        }else{
            $s.querySelector('span:last-child').innerHTML = 'SECONDS';
        }

        if(minutes == 1){
            $m.querySelector('span:last-child').innerHTML = 'MINUTE';
        }else{
            $m.querySelector('span:last-child').innerHTML = 'MINUTES';
        }

        if(hours == 1){
            $h.querySelector('span:last-child').innerHTML = 'HOUR';
        }else{
            $h.querySelector('span:last-child').innerHTML = 'HOURS';
        }

        $s.querySelector('span:first-child').innerHTML = parseNumber(seconds);
        $m.querySelector('span:first-child').innerHTML = parseNumber(minutes);
        $h.querySelector('span:first-child').innerHTML = parseNumber(hours);
        if(hours == 0 && minutes == 0 && seconds == 0){
            $y.classList.remove('d-none');
            $cs.classList.add('d-none');
        }

        if(new Date().getHours() == 17){
            clearInterval(time);
        }
    }, 1000);
}

function parseNumber (str) {
    var num = parseInt(str);
    if(num < 10){
        return '0' + num;
    }
    return num;
}

// // service worker
// if ('serviceWorker' in navigator && 'PushManager' in window) {
//     console.log('Service Worker and Push is supported');
  
//     navigator.serviceWorker.register('sw.js')
//     .then(function(swReg) {
//       console.log('Service Worker is registered', swReg);
  
//       swRegistration = swReg;
//       initializeUI();
//     })
//     .catch(function(error) {
//       console.error('Service Worker Error', error);
//     });
// } else {
//     console.warn('Push messaging is not supported');
//     pushButton.textContent = 'Push Not Supported';
// }

// function initializeUI() {
//     // Set the initial subscription value
//     swRegistration.pushManager.getSubscription()
//     .then(function(subscription) {
//       isSubscribed = !(subscription === null);
  
//       if (isSubscribed) {
//         console.log('User IS subscribed.');
//       } else {
//         console.log('User is NOT subscribed.');
//       }
  
//       updateBtn();
//     });
// }

// function updateBtn() {
//     if (isSubscribed) {
//       pushButton.textContent = 'Disable Push Messaging';
//     } else {
//       pushButton.textContent = 'Enable Push Messaging';
//     }
  
//     pushButton.disabled = false;
// }
  