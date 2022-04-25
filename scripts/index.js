// Store the wallet amount to your local storage with key "amount"

function redirect() {
  //   localStorage.setItem("amount", document.getElementById("amount").value);
  window.location.href = "movies.html";
}

function addmoney() {
  let amount = +document.querySelector("#amount").value;

  amount = amount + Number(localStorage.getItem("amount") || 0);
  localStorage.setItem("amount", amount);
  document.querySelector("#wallet").innerHTML = amount;
  document.querySelector("#amount").value = "";
}
