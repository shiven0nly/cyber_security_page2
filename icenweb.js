document.addEventListener("DOMContentLoaded", function () {
  // Modal Handling =>
  function setupModal(modalId, openBtnId, closeSelector) {
    var modal = document.getElementById(modalId);
    var openBtn = document.getElementById(openBtnId);
    var closeBtn = modal ? modal.querySelector(closeSelector) : null;

    if (modal && openBtn && closeBtn) {
      openBtn.onclick = function () {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      };
      closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "";
      };
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }
      });
    }
  }

  // Modal Setup
  setupModal("myModal", "learn-more", ".closeBtn");
  setupModal("youModal", "write", ".closeBtn");

  // Close Button =>
  document.querySelectorAll(".closeBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      let modal = btn.closest(".modal, .youmodal");
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  });

  // Signin Redirection =>
  var signinBtn = document.getElementById("signin");
  if (signinBtn) {
    signinBtn.addEventListener("click", function () {
      alert("Sign in Successful!");
      window.location.href = "icenweb2.html";
    });
  }

  //  Login Button=>
  var loginButtons = document.querySelectorAll(".btn-demo");
  loginButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.open("icenlogin.html");
    });
  });
});
