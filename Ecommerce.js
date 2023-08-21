function cardEvent(){
      const shiftText1 = document.getElementById('Accessories-1');
      const firstItemText = document.getElementById('first-card');
      const firstCardValue = firstItemText.innerText;
      shiftText1.innerText = firstCardValue;

      const productPrice = document.getElementById('product-price1');
      const onlyProductValue = productPrice.innerText;
      const firstProductFloating = parseFloat(onlyProductValue);
      const totalPrice = document.getElementById('total-price');
      totalPrice.innerText = firstProductFloating;  
}
            
function cardEvent2(){
      const shiftText1 = document.getElementById('Accessories-2');
      const firstItemText = document.getElementById('second-card');
      const firstCardValue = firstItemText.innerText;
      shiftText1.innerText = firstCardValue;
      
      const productPrice = document.getElementById('product-price1');
      const onlyProductValue = productPrice.innerText;
      const stringToNumber = parseFloat(onlyProductValue);
      const totalPrice = document.getElementById('total-price');
      totalPrice.innerText = stringToNumber;
      

      const productPrice2 = document.getElementById('product-price2');
      const onlyProduct2Value = productPrice2.innerText;
      const stringToNumber2 = parseFloat(onlyProduct2Value);
      const towProductsTotal = stringToNumber + stringToNumber2;
      
      totalPrice.innerText = towProductsTotal;
}
function cardEvent3(){
      const shiftText1 = document.getElementById('Accessories-3');
      const firstItemText = document.getElementById('third-card');
      const firstCardValue = firstItemText.innerText;
      shiftText1.innerText = firstCardValue;
      return shiftText1;
}
                        // only product price
      