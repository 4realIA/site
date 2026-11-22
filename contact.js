// Builds the email link at runtime so the address isn't sitting in the HTML for scrapers.
(function () {
  var slot = document.getElementById("email-slot");
  if (!slot) return;
  var user = ["BigA", "hello"].join(".");
  var host = ["outlook", "com"].join(".");
  var addr = user + "@" + host;
  var a = document.createElement("a");
  a.className = "button";
  a.href = "mailto:" + addr + "?subject=" + encodeURIComponent("Hello from dmd4life.tech");
  a.textContent = "Email me";
  a.title = addr;
  slot.replaceWith(a);
})();
