function generateQr(){

let inputBoxElement = document.querySelector(".input-box");

document.getElementById("qr-image").src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBoxElement.value}`;

}