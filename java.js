// ===== TYPING EFFECT (RALLENTATO E FLUIDO) =====
const roles = ["Branding", "Video Making", "Social Media"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typingLoop() {
    const currentRole = roles[roleIndex];
    
    // 1. Logica di aggiunta/rimozione caratteri
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // 2. Aggiorna il testo a video
    typingElement.textContent = currentRole.substring(0, charIndex);

    // 3. GESTIONE VELOCITÀ (Regola questi numeri per il feeling che preferisci)
    let typingSpeed = 200; // PIÙ LENTO: era 150, ora 200ms per ogni lettera scansionata

    if (isDeleting) {
        typingSpeed = 100; // Cancellazione più veloce della scrittura, ma non troppo (era 50)
    }

    // 4. Gestione delle pause (Il segreto della leggibilità)
    if (!isDeleting && charIndex === currentRole.length) {
        // Pausa quando la parola è scritta tutta: 3 secondi per far leggere bene l'utente
        typingSpeed = 3000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Pausa quando la parola è stata cancellata del tutto prima di iniziare la nuova
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 800; // Pausa di quasi un secondo prima della prossima parola
    }

    setTimeout(typingLoop, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typingLoop);

// Avvio corretto al caricamento
document.addEventListener("DOMContentLoaded", () => {
    typingLoop();
});

// Avvio corretto al caricamento
document.addEventListener("DOMContentLoaded", () => {
    typingLoop();
});

// Avvio typing
document.addEventListener("DOMContentLoaded", typingLoop);

// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("glass-nav", "shadow-xl", "top-2");
  } else {
    nav.classList.remove("glass-nav", "shadow-xl", "top-2");
  }
});

// ===== SCROLL BUTTON =====
// Rimuovi tutte le ripetizioni di addEventListener e tieni solo questa alla fine:
document.addEventListener("DOMContentLoaded", () => {
    typingLoop(); // Avvia l'effetto scrittura
});

// Funzione scroll migliorata per precisione
function scrollToSection() {
    const target = document.getElementById("servizi");
    const offset = 20; // Un piccolo margine per non appiccicare la nav al contenuto
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// ===== MODAL LOGIC =====
function openModal(title) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").innerText = title;
  modal.classList.remove("hidden");
  document.body.style.overflow = 'hidden'; // Blocca scroll pagina
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  document.body.style.overflow = 'auto'; // Riabilita scroll
}

// Chiudi modal cliccando fuori dal contenuto
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    closeModal();
  }
}

