document.addEventListener("DOMContentLoaded", function() {
  function openGitHub() {
    window.open("https://adeoluabiodun.github.io/introduction.html", "_blank");
  }

  function openLinkedIn() {
    window.open("https://www.linkedin.com/in/adeolu-abiodun-42a858279/", "_blank");
  }

  const links = document.querySelectorAll(".custom-list a");

  links.forEach((link) => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const href = link.getAttribute("href");

      if (href === "https://adeoluabiodun.github.io/introduction.html") {
        openGitHub();
      } else if (href === "https://www.linkedin.com/in/adeolu-abiodun-42a858279/") {
        openLinkedIn();
      } else {
        window.location.href = href;
      }
    });
  });
});


//Function to set the cookie
        function setCookie(name, value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days*24*60*60*1000));
            const expires = "expires="+ d.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }
        function getCookie(name) {
            const cname = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(cname) === 0) {
                    return c.substring(cname.length, c.length);
                }
            }
            return "";
        }

        // Function to handle form submission
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const background = document.getElementById('background').value;
            const professional = document.getElementById('professional').value;
            const courses = document.getElementById('courses').value;
            const computer = document.getElementById('computer').value;
            const funny = document.getElementById('funny').value;
            const contactMethod = document.querySelector('input[name="contact"]:checked').value;
            const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value);

            setCookie('interests', interests.join(','), 7);

            // Create a result HTML
            const resultHTML = `
                <h2>Submitted Information</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Personal Background:</strong> ${background}</p>
                <p><strong>Professional Experience:</strong> ${professional}</p>
                <p><strong>Courses I am Taking and Why:</strong> ${courses}</p>
                <p><strong>Primary Computer Platform:</strong> ${computer}</p>
                <p><strong>Funny/Interesting Item:</strong> ${funny}</p>
                <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
                <p><strong>Interests:</strong> ${interests.join(', ')}</p>
            `;

            // Replace the form with the result
            document.getElementById('form-container').innerHTML = resultHTML;
        }

        // Function to populate interests from cookie on page load
        function populateInterests() {
            const interests = getCookie('interests');
            if (interests) {
                const interestsArray = interests.split(',');
                interestsArray.forEach(interest => {
                    const checkbox = document.querySelector(`input[name="interests"][value="${interest}"]`);
                    if (checkbox) {
                        checkbox.checked = true;
                    }
                });
            }
        }

        window.onload = function() {
            populateInterests();
            document.getElementById('introduction-form').addEventListener('submit', handleFormSubmit);
        };
