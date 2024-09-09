const qrText=document.getElementById('text')
const sizes=document.getElementById('sizes')
const generateBtn=document.getElementById('generateBtn')
const downloadBtn=document.getElementById('downloadBtn')
const qrContainer=document.querySelector('.qrbody')


let size=sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   isEmpty()
})
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
isEmpty()
    // generateQRCode();
})
function isEmpty(){
    // if(qrText.value.length>0){

    //     generateQRCode();
    // }
    // else{
    //     alert('Please enter some text to generate QR Code ')
    // }
    qrText.value.length > 0 ? generateQRCode() : alert('Please enter some text to generate QR Code')
}
function generateQRCode(){
    qrContainer.innerHTML='';
    new QRCode(qrContainer,{
        text:qrText.value,
    height:size,
    width:size,
    colorLight:'#fff',
    colorDark:"#000"

    })
}
downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qrbody img');
    if(img!=null){
        let imgAtrr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);

    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)

    }
})