console.log('JavaScript is working!');

// showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt("Please enter namine Panjenengan:");
    if (userName != ''){
        document.getElementById('welcome-user').innerHTML = userName;
    }
}