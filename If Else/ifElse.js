var noAngkot = 1;
var jumlahAngkot = 10;

while (noAngkot <= jumlahAngkot){
    if (noAngkot <= 4 || noAngkot === 6){
        console.log('Angkot No . ' + noAngkot +' beroperasi dengan baik.');
    }
    else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot No . ' + noAngkot +' sedang lembur.');
    }
    else {
        console.log('Angkot No . ' + noAngkot +' sedang tidak dapat beroperasi.');
    }
    noAngkot++;
}