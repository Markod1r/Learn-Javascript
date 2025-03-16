const profile = {
    firstName : "Marcois",
    lastName : "Makalew",
    id : "323100",
    fullname : function (){ //methods
        return this.firstName + " " + this.lastName; //this refers to the profile object
    }
};

let show = profile.fullname (); 
console.log (show);


console.log("\n");
//cara menggunakan toUpperCase()
const contoh = {
    firstName : "Marcois",
    lastName : "Makalew",
    id : "323100",
    fullname : function (){ //methods
        return (this.firstName + " " + this.lastName).toUpperCase(); //this refers to the profile object
    }
};
console.log(contoh.fullname());


console.log("\n");
//output objects with loop
const person = {
    nama: "Marco",
    umur : "17",
    asal : "bekasi"
}
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
console.log (text);


console.log("\n");
//Using objects values 
const person2 = {
    nama: "Marco",
    umur : "17",
    asal : "bekasi"
}
const person3 = Object.values(person2); //object.values(nama object yang ingin di copy properties nya ke person 3)
console.log("isi object person 3 adalah " + person3);


console.log("\n");
//using object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
let text2 = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text2 += fruit + ": " + amount + "\t";
}
console.log (text2);