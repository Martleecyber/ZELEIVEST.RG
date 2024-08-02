document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }

    // Function to update wallet balance on the page
    function updateWalletBalance() {
        const walletBalance = localStorage.getItem('walletBalance') || '500';
        document.getElementById('wallet-balance').textContent = `₦${walletBalance}`;
    }

    // Function to increment wallet balance by 1 Naira every second
    function incrementWalletBalance() {
        let walletBalance = parseInt(localStorage.getItem('walletBalance') || '500', 10);
        if (walletBalance < 3400) {
            walletBalance += 1;
            localStorage.setItem('walletBalance', walletBalance.toString());
            updateWalletBalance();
        }
    }

    // Set wallet balance to 500 if not already set
    if (!localStorage.getItem('walletBalance')) {
        localStorage.setItem('walletBalance', '500');
    }

    // Update wallet balance on page load
    updateWalletBalance();

    // Set interval to increment wallet balance every second (1000 milliseconds)
    setInterval(incrementWalletBalance, 1000);

    // Harvest profit button functionality
    document.getElementById('harvest-profit').addEventListener('click', function() {
        const spinner = document.createElement('div');
        spinner.id = 'loading-spinner';
        spinner.textContent = 'Loading...';
        document.body.appendChild(spinner);

        setTimeout(() => {
            document.body.removeChild(spinner);
            let walletBalance = parseInt(localStorage.getItem('walletBalance') || '500', 10);
            const profit = 500; // Example profit value
            walletBalance += profit;
            localStorage.setItem('walletBalance', walletBalance.toString());
            updateWalletBalance();
            alert(`Profit of ₦${profit} has been added to your wallet.`);
        }, 5000); // 1 minute
    });

    // Initial mining rate
    let miningRate = 1; // Starting rate in Naira
    let increment = 0.01; // Increment rate in Naira per second

    // Update mining rate every second
    setInterval(() => {
        miningRate += increment;
        document.getElementById('rate').textContent = `₦${miningRate.toFixed(2)} per hour`;
    }, 1000);
});
