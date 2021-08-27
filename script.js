let output=document.getElementById('output')
output.style.visibility='hidden';
let currencyInput=document.getElementById('currencyInput');
currencyInput.addEventListener('input',function(e){
    let currentInput=Number(e.target.value);
    // console.log(currencyInput)
    if(currentInput>0){
        output.style.visibility='visible';
        let rublOutput=document.getElementById('rublOutput');
        rublOutput.innerHTML=currentInput/143.45;
    }
})