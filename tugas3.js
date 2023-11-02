const FazzFood = (harga, promo, jarak, pajak) => {
    let diskon = 0;
    let layanan = 0;
    if (pajak === true) {
      layanan = harga * 0.05;
    }

    let ongkir = 5000
    if (jarak > 2){
        const kilo = jarak - 2
        ongkir = 5000 + kilo * 3000;
    }

    if (promo === 'FAZZFOOD50' && harga >= 50000) {
        if (harga * 0.5 >= 50000) {
            diskon = 50000;
        } else {
          diskon = harga * 0.5;
        }

    } else if (promo === 'DITRAKTIR60' && harga >= 25000){
        
        if (harga * 0.6 >= 30000) {
            diskon = 30000;
        } else {
          diskon = harga * 0.6;
        }
    }

    return console.log(`
        Harga = ${harga}
        Potongan = ${diskon}
        Biaya Antar = ${ongkir}
        Pajak = ${layanan}
        Sub Total = ${harga - diskon + ongkir + layanan}
        `);
}

FazzFood(75000, "FAZZFOOD50", 5, true);