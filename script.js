
const colors = ['turquoise', 'gold', 'brown', 'lightblue', 'purple', 'orange'];


const textElement = document.getElementById('text');


let colorIndex = 0;
setInterval(() => {
    textElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Retourne à 0 lorsque la fin du tableau est atteinte
}, 1000); // Change la couleur toutes les 1 seconde
