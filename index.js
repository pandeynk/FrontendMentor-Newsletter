const handleSubscribe = function () {
  const emailEl = document.getElementById("email");
  const errorTextEl = document.getElementById("errorText");
  const newsletterDialogEl = document.getElementById("newsletterDialog");
  const successDialogEl = document.getElementById("successDialog");
  const emailTextEl = document.getElementById("emailText");

  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailEl.value)) {
    emailEl.className = "";
    errorTextEl.style.display = "none";
    newsletterDialogEl.style.display = "none";
    successDialogEl.style.display = "block";
    emailTextEl.innerText = emailEl.value;
    emailEl.value = "";
  } else {
    emailEl.className = "error";
    errorTextEl.style.display = "block";
  }
};

const handleDismiss = function () {
  const emailEl = document.getElementById("email");
  const errorTextEl = document.getElementById("errorText");
  const newsletterDialogEl = document.getElementById("newsletterDialog");
  const successDialogEl = document.getElementById("successDialog");

  emailEl.className = "";
  errorTextEl.style.display = "none";
  newsletterDialogEl.style.display = "flex";
  successDialogEl.style.display = "none";
};
