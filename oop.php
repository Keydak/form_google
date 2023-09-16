<?php

class hewan {
    public $nama = "nama";
    public $warna = "warna";
    public $jenis_kelamin = "ga tau";
    public $pemilik = "orang";
    public $makanan = "mangan";
    
    function __construct($nama , $warna , $jenis_kelamin , $pemilik , $makanan)
    {
        $this->nama = $nama;
        $this->warna = $warna;
        $this->jenis_kelamin = $jenis_kelamin;
        $this->pemilik = $pemilik;
        $this->makanan = $makanan; 
    }
    function hayuk(){
        return "$this->warna , $this->jenis_kelamin";
    }
    function pale(){
        return "$this->pemilik , $this->makanan";
    }
}


class displayhewan{
    function cetak(hewan $hewan){
        $str = "{$hewan->nama} , {$hewan->hayuk()}, {$hewan->pale()}";
        return $str;
    }
}
$hewan1 = new hewan("kuluk" , "gadang" , "batang" , "gunawan" , "tikus");
$IsiDisplayHewan1 = new displayhewan();
$hewan2 = new hewan("koala" , "belang" , "batang" , "koh" , "ayam");
$IsiDisplayHewan2 = new displayhewan();



echo "Hewan 1 : "  , $IsiDisplayHewan1->cetak($hewan1);
echo "<br>";

echo "Hewan 2 : " , $IsiDisplayHewan2->cetak($hewan2);
echo "<br>";


class game {
    public $nama = "nama";
    public $penulis = "penulis";
    public $pembuat = "pembuat";
    public $harga = 0;
    public $playing = "0 jam";
    
    function __construct($nama , $penulis , $pembuat , $harga , $playing)
    {
        $this->nama = $nama;
        $this->penulis = $penulis;
        $this->pembuat = $pembuat;
        $this->harga = $harga;
        $this->playing = $playing; 
    }
    function hayuk(){
        return "$this->penulis , $this->pembuat $this->harga";
    }
    function pale(){
        return " $this->playing";
    }
}

class displaygame{
    function cetakgame(game $game){
        $hasil = "{$game->nama} | {$game->hayuk()} , {$game->pale()}";
        return $hasil;
    }
}

$game1 = new game("Uncharted" , "Neil Druckman" , "sony Computer (banyak gimik)" , "(Rp.250000)" , "50 jam" );
$IsiDisplayGame1 = new displaygame();
echo "game : " ,  $IsiDisplayGame1->cetakgame($game1);


echo "<hr>";
echo "<hr>";
echo "<hr>";



class device {
    public $nama = "nama";
    public $listrik = "?";
    public $biaya = "biaya";
    public $harga = "harga";
    public $fitur = "fitur? kurang tau";
    public $perjam = "?";
    public $pemakaian = "?";
    public $OS;
    
    function __construct($nama , $listrik , $biaya , $harga , $fitur , $perjam ,$pemakaian ,$OS)
    {
        $this->nama = $nama;
        $this->listrik = $listrik;
        $this->biaya = $biaya;
        $this->harga = $harga;
        $this->fitur = $fitur; 
        $this->perjam = $perjam;
        $this->pemakaian = $pemakaian;
        $this->OS = $OS;
        
    }
    function hayuk(){
        return "$this->listrik , $this->biaya";
    }
    function pale(){
        return "$this->harga , $this->fitur";
    }
    function lengkap(){
        $str = "{$this->nama} , {$this->hayuk()}, {$this->pale()} , {$this->perjam} ";
        if ($this->OS == "komputer") {
            $str .= ", {$this->pemakaian}";
        }
        return $str;
    }
    }



class displaydevice{
    function cetak(device $device){
        $str = "{$device->nama} , {$device->hayuk()}, {$device->pale()} , {$device->perjam} ";
    }
}

$device1 = new device("PC" , "Boros" , "gacor" , "13jt", "banyak", "550W (tergantung PSU)" , "stay only" , "komputer");
$device2 = new device("HP" , "TIdak terlalu" , "no" , "4jt", "dikit" , "15W (tergantung batok charge)","everywhere" ,"android" );
