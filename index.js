let btn = document.querySelector('.btn');
let otpshow = document.querySelector('.otp');

btn.addEventListener('click',()=>{
    let otp='';
    let length=6;

    for(let i=0;i<length;i++){
        otp+=Math.floor(Math.random()*10);
    }
    // delaying 1 sec for otp


                   
    otpshow.innerHTML = '<span></span>';
    setTimeout(()=>{
        otpshow.innerHTML = otp;
    },1000);
})
