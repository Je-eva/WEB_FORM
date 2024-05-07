function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass1').value;
    const confirmPassword = document.getElementById('pass2').value;

    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = 'Registration successful!';
        successMessage.style.color = '#27ae60'; // Green color for success message
    }
    
    setTimeout(function(){
        location.reload();
    }, 5000);

    return true;
}
