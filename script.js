const tombolYa = document.getElementById('ya');
const tombolTidak = document.getElementById('tidak');
const hasil = document.getElementById('hasil');

tombolYa.addEventListener('click', () => {
  tampilkanHasil('Senang deh!', 'happy');
  simpanPilihan(true);
});

tombolTidak.addEventListener('click', () => {
  tampilkanHasil('Sedihnya :(', 'sad');
  simpanPilihan(false);
});

function tampilkanHasil(pesan, kelas) {
  hasil.textContent = pesan;
  hasil.classList.add(kelas);
}

function simpanPilihan(pilihan) {
  // Di sini Anda akan menambahkan kode untuk menyimpan pilihan ke database atau local storage
  // Contoh menggunakan local storage:
  localStorage.setItem('pilihan', pilihan);
}

// Memuat history pilihan (contoh)
const pilihanTersimpan = localStorage.getItem('pilihan');
if (pilihanTersimpan) {
  if (pilihanTersimpan === 'true') {
    tampilkanHasil('Kamu sudah memilih Ya sebelumnya', 'happy');
  } else {
    tampilkanHasil('Kamu sudah memilih Tidak sebelumnya', 'sad');
  }
}
