const urutan = (x) => {
    let perbaikanData = x.toString().split('0') // merubah ke string terlebih dahulu lalu di split()
    let temp = ''
    for (let i = 0; i < perbaikanData.length; i++){
        let hasil = perbaikanData[i].split('').sort().join('') // perbaikanData dengan index ke i akan di split() lagi lalu di sort() dan setelah di urutkan maka akan di gabungkan kembali dengan method join()
        temp += hasil // akan menambakan ke variable penampung temp
    }
    return temp
}
console.log(urutan(5956560159466056))