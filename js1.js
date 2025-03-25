const checkbox = document.getElementById('termsCheckbox');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('detailsForm');

checkbox.addEventListener('change', function () {
    submitButton.disabled = !this.checked;
});

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    window.location.href = "third-page.html"; 
});


    document.getElementById("detailsForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        const firstName = document.querySelector('input[name="first_name"]').value;
        const lastName = document.querySelector('input[name="last_name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;

        
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);

        window.location.href = "third-page.html"; 
    });

