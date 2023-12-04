const buttonElem = document.querySelector(".go");
const qr1_t1_t = document.querySelector('.modal');
const qr1_t1_f = document.querySelector('.modal2');


go1.onclick = function() {
    var val = document.getElementById('input_phone_text').value;
    if (val === inp || val === inp_m){
        qr1_t1_t.style.cssText = `
        display: flex;
        visibility = 'visible';
        opacity = 1;
        transition: opacity 300ms ease-in-out;
    `;
    
   // const openModal = () => {
    //    qr1_t1_t.style.visibility = 'visible';
   //     qr1_t1_t.style.opacity = 1;
   // };
    
  //  buttonElem.addEventListener('click', openModal);
    } else{
        qr1_t1_f.style.cssText = `
        display: flex;
        visibility = 'visible';
        opacity = 1;
        transition: opacity 300ms ease-in-out;
    `}
    
};