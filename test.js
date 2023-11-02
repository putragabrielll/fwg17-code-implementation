// Tugas 3 lama sebelum di optimasi
const FazzFood = (harga, promo, jarak, pajak) => {
    if (promo === 'FAZZFOOD50' && harga >= 50000) {
        
        if (harga * 0.5 >= 50000) {
            diskon = 50000;
        } else {
          diskon = harga * 0.5;
        }

        if (jarak <= 2){
            ongkir = 5000
        } else {
            kilo = jarak - 2
            ongkir = 5000 + kilo * 3000;
        }

        if (pajak === true){
            layanan = harga * 0.05
        } else {
            layanan = harga * 0
        }

        return console.log(`
        Harga = ${harga}
        Potongan = ${diskon}
        Biaya Antar = ${ongkir}
        Pajak = ${layanan}
        Sub Total = ${(harga - diskon) + ongkir + layanan}
        `);

    } else if (promo === 'DITRAKTIR60' && harga >= 25000){
        
        if (harga * 0.6 >= 30000) {
            diskon = 30000;
        } else {
          diskon = harga * 0.6;
        }

        if (jarak <= 2){
            ongkir = 5000
        } else {
            kilo = jarak - 2
            ongkir = 5000 + kilo * 3000;
        }

        if (pajak === true){
            layanan = harga * 0.05
        } else {
            layanan = harga * 0
        }

        return console.log(`
        Harga = ${harga}
        Potongan = ${diskon}
        Biaya Antar = ${ongkir}
        Pajak = ${layanan}
        Sub Total = ${(harga - diskon) + ongkir + layanan}
        `);
    } else {
        let diskon = harga * 0;

        if (jarak <= 2){
            ongkir = 5000
        } else {
            kilo = jarak - 2
            ongkir = 5000 + kilo * 3000;
        }

        if (pajak === true){
            layanan = harga * 0.05
        } else {
            layanan = harga * 0
        }

        return console.log(`
        Harga = ${harga}
        Potongan = ${diskon}
        Biaya Antar = ${ongkir}
        Pajak = ${layanan}
        Sub Total = ${(harga - diskon) + ongkir + layanan}
        `);
    }

}

FazzFood(120000, "FAZZFOOD50", 5, true);