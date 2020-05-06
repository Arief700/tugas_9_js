const myTest = () => {
  let motor = {
    merk: "vario",
    warna: "putih",
    kualitas: true,
    model: [150, 175, 200],
    toko: {
      kota: "bandung",
      provinsi: "jawa barat"
    }
  }
  for (let x in motor) {
    console.log(motor[x]);
  }
}

myTest()
