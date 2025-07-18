

showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt("Please enter namine Panjenengan:");
    // If the user clicks "Cancel", userName will be null
    if (userName != ''){
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');
    

    if (nameInput.value === '') {
        alert('Please enter namine Panjenengan')
    } else {
        document.getElementById('message-output').innerHTML = 'Matur sembah nuwon, ${name-Input} sampun diisi';
        nameInput.value = ''; // Clear the input field after submission 
    }
}