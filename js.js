let n = 11, m = 7;

let modulus = 2 ** m;

if (n === 0) console.log ("0");
if (n === 1) console.log ("1");

let i = 2,a = 0, b = 1, sum;

while (i <= n){
    sum = (a+b) % modulus;
    a = b;
    b = sum;
    i++;
}

console.log (+b);