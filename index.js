// Event listner for Contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let link =
      "https://prod-03.centralindia.logic.azure.com:443/workflows/0ea7bf7ed1464b6b873b794f67baab62/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Mx_iYMdN3gpiEX-rw0NFCvdcUWLwttURtvfJtnAJYFI";
    let data = { name, email, message };
    jQuery.ajax({
      url: link,
      data: JSON.stringify(data),
      type: "POST",
      processData: false,
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      complete: function (xhr, textStatus) {
        if (xhr.status == "202") {
          document.getElementById("contact-form").reset();
          console.log(xhr.status, "form submitted successfully");
          document.getElementById("success").classList.remove("hidden");
          setTimeout(function () {
            document.getElementById("success").classList.add("hidden");
          }, 5000);
        } else {
          console.log(xhr.status, "an error occured.");
          document.getElementById("error").classList.remove("hidden");
          setTimeout(function () {
            document.getElementById("error").classList.add("hidden");
          }, 5000);
        }
      },
    });
  });

//Event Listner for Dark-light toggle

document.getElementById("theme-toggle").addEventListener("click", function () {
  let darkIcn = document.getElementById("theme-toggle-dark-icon");
  let lightIcn = document.getElementById("theme-toggle-light-icon");

  if (darkIcn.classList.contains("hidden")) {
    // Current is in darkmode
    darkIcn.classList.remove("hidden");
    lightIcn.classList.add("hidden");
    document.documentElement.classList.remove("dark");
  } else {
    lightIcn.classList.remove("hidden");
    darkIcn.classList.add("hidden");
    document.documentElement.classList.add("dark");
  }
});

//Add Transition
setTimeout(function () {
  document.body.classList.add(
    "transition-colors",
    "duration-500",
    "ease-in-out"
  );
}, 1);
