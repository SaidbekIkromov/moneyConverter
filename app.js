let output=document.getElementById('output');
output.style.visibility='hidden';
let currencyInput=document.getElementById('currencyInput');
currencyInput.addEventListener('input',function(e){
   let currentInput=Number(e.target.value);
//    console.log(currentInput) ;
    if(currentInput>0){
        output.style.visibility='visible';
        let rublOutput=document.getElementById('rublOutput');
        rublOutput.innerHTML=Math.floor((currentInput/143.45)*100)/100;
        let dollarOutput=document.getElementById('dollarOutput');
        dollarOutput.innerHTML=Math.floor((currentInput/10670)*100)/100;
        let euroOutput=document.getElementById('euroOutput');
        euroOutput.innerHTML=Math.floor((currentInput/12570)*100)/100;
        let poundOutput=document.getElementById('poundOutput');
        poundOutput.innerHTML=Math.floor((currentInput/14790)*100)/100;
    }
    else{
        alert('Iltimos faqat 0 va manfiy son kiritmang');
        let cur=document.getElementById('currencyInput');
        cur.value='';
        output.style.visibility='hidden';
    }
})