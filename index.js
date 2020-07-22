document.querySelector("#productPlus").addEventListener("click", function(){
    //findout display value;
    const displayValue = document.querySelector("#display").value;
    const displayValueConvert = parseFloat(displayValue);
   // console.log(displayValueConvert)
   // alert(displayValueConvert)

    const displayValueChange = displayValueConvert + 1;
    document.querySelector("#display").value = displayValueChange;

    // const price = document.querySelector("#productAmount").innerText;
    // const priceConvert = parseFloat(price);

    const result = displayValueConvert * 1219 + 1219;
    document.querySelector("#productAmount").innerText = result;
})
document.querySelector("#productMinus").addEventListener("click", function(){
    const difindValue = document.querySelector("#display").value;
    const minusProduct = difindValue -1;
    document.querySelector("#display").value = minusProduct;
    const finalResult = difindValue * 1219 -1219;
    document.querySelector("#productAmount").innerText = finalResult;

})