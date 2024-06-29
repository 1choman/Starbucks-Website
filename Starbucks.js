function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function openNewPage() {
    var formPage = window.open("", "_blank");

    

    formPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Starbucks</title>
            <link rel="stylesheet" href="form-style.css">
            <link rel="icon" href="Starbucks_logo.png" type="image/png">
        </head>
        <body>
            <h1>Order Now Instantly Elevate Your Experience</h1>
            <form action="submit.php" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="drink">Choose Your Ice Drink:</label>
                <select id="drink" name="drink">
                    <option value="Peppermint White Chocolate Crème Frappuccino">Peppermint White Chocolate Crème Frappuccino</option>
                    <option value="Peppermint White Chocolate Frappuccino">Peppermint White Chocolate Frappuccino</option>
                    <option value="White Chocolate Mocha Frappuccino">White Chocolate Mocha Frappuccino</option>
                    <option value="Peppermint">Peppermint White Chocolate Crème Frappuccino</option>
                </select><br><br>
                <label for="payment">Choose Your Payment Method:</label>
                <select id="payment" name="payment">
                    <option value="visacard">Visa Card</option>
                    <option value="qicard">Qi Card</option>
                    <option value="fastpay">FastPay</option>
                </select><br><br>
                <button type="submit">Order Now</button>
            </form>
        </body>
        </html>
    `);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const modeToggle = document.getElementById('modeToggle');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
}
