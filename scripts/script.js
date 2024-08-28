document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".custom-list a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const href = link.getAttribute("href");

      if (href === "https://adeoluabiodun.github.io/introduction.html") {
        openGitHub();
      } else if (href === "https://www.linkedin.com/in/adeolu-abiodun-42a858279/") {
        openLinkedIn();
      }
    });
  });

  function openGitHub() {
    window.open("https://adeoluabiodun.github.io/introduction.html", "_blank");
  }

  function openLinkedIn() {
    window.open("https://www.linkedin.com/in/adeolu-abiodun-42a858279/", "_blank");
  }
});
