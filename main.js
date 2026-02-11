
let calculateButton = document.getElementById("calculateButton");
let dollars = document.getElementById("dollars");
let quarters = document.getElementById("quarters");
let dimes = document.getElementById("dimes");
let nickels = document.getElementById("nickels");
let pennies = document.getElementById("pennies");
let totalBack;
function changeBack(saleTotal, amountPaid) {
  return amountPaid - saleTotal;
}



calculateButton.onclick = function () {
  let saleTotal = Number(document.getElementById("saleTotal").value);
  let amountPaid = Number(document.getElementById("amountPaid").value);
  
  totalBack = Math.round(changeBack(saleTotal, amountPaid) * 100);
  let dollarBack = Math.floor(totalBack / 100);
  totalBack = totalBack % 100;

  let quarterBack = Math.floor(totalBack / 25);
  totalBack = totalBack % 25;

  let dimesBack = Math.floor(totalBack / 10);
  totalBack = totalBack % 10;

  let nickelsBack = Math.floor(totalBack / 5);
  totalBack = totalBack % 5;

  let penniesBack = Math.floor(totalBack / 1);
  totalBack = totalBack % 1;
  


 dollars.textContent = `Dollars ${dollarBack}`;
 quarters.textContent = `Quarters ${quarterBack}`;
 dimes.textContent = `Dimes ${dimesBack}`;
 nickels.textContent = `Nickels ${nickelsBack}`;
 pennies.textContent = `Pennies ${penniesBack}`;
};
