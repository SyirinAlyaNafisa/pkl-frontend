// Memanggil modul readline bawaan Node.js untuk input dari terminal
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menanyakan angka pertama
rl.question("Masukkan angka pertama: ", (input1) => {
  // Menanyakan operator (+, -, *, /)
  rl.question("Pilih operator (+, -, *, /): ", (operator) => {
    // Menanyakan angka kedua
    rl.question("Masukkan angka kedua: ", (input2) => {
      // Ubah input dari teks (string) menjadi angka (Number)
      const angka1 = Number(input1);
      const angka2 = Number(input2);
      let hasil;

      // Proses perhitungan
      if (operator === "+") {
        hasil = angka1 + angka2;
      } else if (operator === "-") {
        hasil = angka1 - angka2;
      } else if (operator === "*") {
        hasil = angka1 * angka2;
      } else if (operator === "/") {
        if (angka2 === 0) {
          hasil = "Error: Tidak bisa membagi dengan angka 0!";
        } else {
          hasil = angka1 / angka2;
        }
      } else {
        hasil = "Operator tidak valid!";
      }

      // Tampilkan hasil di terminal
      console.log(`Hasilnya adalah: ${hasil}`);

      // Tutup program readline
      rl.close();
    });
  });
});
