// Dijital Saati Güncelleme
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('tr-TR', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

// İnteraktif Bar ve Titreme Efekti
const boostBtn = document.getElementById('boost-btn');
const focusBar = document.getElementById('focus-bar');
const canImg = document.getElementById('can-img');

let focusLevel = 0;

boostBtn.addEventListener('click', () => {
    // Odaklanmayı artır (Her tıklamada %10 - %20 arası artış)
    const boostAmount = Math.floor(Math.random() * 10) + 10; 
    focusLevel += boostAmount;
    
    // Yüzde 100'ü geçmesin
    if (focusLevel >= 100) {
        focusLevel = 100;
        boostBtn.textContent = "🚀 SINAV KAZANILDI! 🚀";
        boostBtn.style.backgroundColor = "#4CAF50";
        boostBtn.style.boxShadow = "0 4px 0 #2E7D32";
        focusBar.style.background = "#4CAF50";
    }

    // Barı güncelle
    focusBar.style.width = focusLevel + '%';

    // Fotoğrafı deli gibi titret
    canImg.classList.add('shaking');
    
    // Titremeyi 0.4 saniye sonra durdur
    setTimeout(() => {
        canImg.classList.remove('shaking');
    }, 400);
});