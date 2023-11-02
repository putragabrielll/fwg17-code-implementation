let kalimat = "saya belajar javascript";

console.log(kalimat.length);
console.log(kalimat[22]);
// console.log(kalimat.length - 1);

// temp = javascript
temp = "";
// temp2 = javascpript belajar saya 
temp2 = "";
if (typeof kalimat == "string") {
    // kalimat = kalimat + " "
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == " ") {
        temp2 = temp + " " + temp2;
        temp = "";
        } else {
        temp = temp + kalimat[i];
        }
        if (i == kalimat.length - 1) {
        temp2 = temp + " " + temp2;
        }
    }
} else {
    return console.log("Masukkan tipe data string");
}
console.log(temp2);



console.log(typeof ('' + 113))
console.log('2' + 113)
'2113'

console.log(typeof (113 - ''))
console.log(113 - '2')
2113