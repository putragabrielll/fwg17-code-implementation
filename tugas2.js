let kalimat = "saya belajar javascript";

console.log(kalimat.length);
console.log(kalimat[22]);
// console.log(kalimat.length - 1);

// temp = javascript
temp = "";
// temp2 = javascpript belajar saya 
temp2 = "";
kalimat = kalimat + " "
if (typeof kalimat == "string") {
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == " ") {
        temp2 = temp + " " + temp2;
        temp = "";
        } else {
        temp = temp + kalimat[i];
        }
        // if (i == kalimat.length - 1) {
        // temp2 = temp + " " + temp2;
        // }
    }
} else {
    return console.log("Masukkan tipe data string");
}
console.log(temp2);
