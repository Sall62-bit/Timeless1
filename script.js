// tahun dinamis
document.getElementById('year').textContent = new Date().getFullYear();

// perbaiki id: tanpa spasi
const tombolSapa = document.getElementById('sapaButton');

if (tombolSapa) {
  tombolSapa.addEventListener('click', () => {
    // Pesan bisa kamu ganti sesukamu
    alert('Halo! Semoga harimu produktif. 🚀');
  });
}
