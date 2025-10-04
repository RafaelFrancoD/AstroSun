// ... (Dentro da função window.addEventListener('load', ... )
setTimeout(function() {
    loadingScreen.style.opacity = '0'; 
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 500); // 500ms é o tempo da transição (fade-out)
}, 1000); // <-- ESTE É O TEMPO DE EXIBIÇÃO EM MILISSEGUNDOS

// Se quiser que a imagem fique 3.5 segundos:
// Altere 2500 para 3500.