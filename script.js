document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

function paymentNotice(method) {
  alert(method + " checkout will be connected to your payment link.");
  return false;
}
