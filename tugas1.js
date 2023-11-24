let nama = 'putra'
console.log(nama.split(''))
console.log(nama)

if (typeof nama === 'string'){
    // a, r, t, u, p
    let temp = ''
    for (i = 1; i <= nama.length; i++) {
        temp = nama[i - 1] + temp;
    }
    console.log(temp)
    
    if (temp === nama){
        console.log('Palindrome')
    } else {
        console.log('Tidak Palindrome')
    }
    
} else {
    console.log('Data tidak berupa string')
}