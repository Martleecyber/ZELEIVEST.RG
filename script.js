document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }

    // Initial mining rate
    let miningRate = 1; // Starting rate in Naira
    let increment = 0.01; // Increment rate in Naira per second

    // Update mining rate every second
    setInterval(() => {
        miningRate += increment;
        document.getElementById('rate').textContent = `₦${miningRate.toFixed(2)} per hour`;
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const profilePic = localStorage.getItem('profilePic');

    if (username) {
        document.getElementById('username').textContent = username;
        document.getElementById('nav-username').textContent = username;
    }

    if (profilePic) {
        document.getElementById('main-profile-pic').src = profilePic;
        document.getElementById('nav-profile-pic').src = profilePic;
    }

    // Initial mining rate
    let miningRate = 1; // Starting rate in Naira
    let increment = 0.01; // Increment rate in Naira per second

    // Update mining rate every second
    setInterval(() => {
        miningRate += increment;
        document.getElementById('rate').textContent = `₦${miningRate.toFixed(2)} per hour`;
    }, 1000);
})



if (username) {
    document.getElementById('username').textContent = username;
    document.getElementById('nav-username').textContent = username;
}

if (walletBalance !== null) {
    document.getElementById('wallet-balance').textContent = walletBalance;
} else {
    document.getElementById('wallet-balance').textContent = 0;
}

if (profilePic) {
    document.getElementById('main-profile-pic').src = profilePic;
    document.getElementById('nav-profile-pic').src = profilePic;
}

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const walletBalance = localStorage.getItem('walletBalance');

    if (username) {
        document.getElementById('username').textContent = username;
        document.getElementById('nav-username').textContent = username;
    }

    if (walletBalance !== null) {
        document.getElementById('wallet-balance').textContent = walletBalance;
        document.getElementById('wallet-balance-detail').textContent = walletBalance;
    }

    document.getElementById('payment-completed-button').addEventListener('click', function() {
        const spinner = document.getElementById('loading-spinner');
        const successTick = document.getElementById('success-tick');

        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none';
            successTick.style.display = 'block';
        }, 60000); // 1 minute
    });

    document.getElementById('investment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const investmentAmount = parseFloat(document.getElementById('investment-amount').value);
        const accountHolderName = document.getElementById('account-holder-name').value;
        if (investmentAmount > parseFloat(localStorage.getItem('walletBalance'))) {
            alert('Insufficient funds in wallet!');
        } else {
            let currentBalance = parseFloat(localStorage.getItem('walletBalance'));
            currentBalance -= investmentAmount;
            localStorage.setItem('walletBalance', currentBalance);
            document.getElementById('wallet-balance').textContent = currentBalance;
            document.getElementById('wallet-balance-detail').textContent = currentBalance;
            alert(`Investment started for ${accountHolderName} with amount ${investmentAmount} Naira`);
        }
    });
});