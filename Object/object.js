const motorcycle = {merk : "Yamaha",type : "R15", color : "matte black", }; //objects

//cetak object tidak perlu menggunakan + di dalam ()
console.log (motorcycle.merk);

//untuk menghubungkan ke html
document.getElementById("motor").innerHTML = "The motorcycle type is " + motorcycle.merk;