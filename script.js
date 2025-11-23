const canvas = document.getElementById("cartaCanvas");
const ctx = canvas.getContext("2d");
const papel3d = document.getElementById("papel3d");
const papelMsg = document.getElementById("papelMsg");
const closeBtn = document.getElementById("closeBtn");
const subtitle = document.getElementById("subtitle");
const bgFade = document.getElementById("bgFade");

const openSound = document.getElementById("openSound");
const closeSound = document.getElementById("closeSound");
const bgMusic = document.getElementById("bgMusic");

let open = false;

// ✨ Carta cerrada morada
function drawCarta() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Cuerpo blanco
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(50, 80, 300, 150);

  // Borde morado
  ctx.strokeStyle = "#fc40cdff";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 80, 300, 150);

  // Tapa superior morada pastel
  ctx.fillStyle = "#d7b3ff";
  ctx.beginPath();
  ctx.moveTo(50, 80);
  ctx.lineTo(200, 180);
  ctx.lineTo(350, 80);
  ctx.closePath();
  ctx.fill();
}

drawCarta();

// Texto de la carta
let mensaje = `❤️‍🩹Hola  espero que te tomes un tiempo leendo esta carta💜,

Es difícil encontrar las palabras adecuadas en momentos como este, pero siento unanecesidad profunda de expresar lo que llevo dentro. Tal vez no fuimos nada 
pero fuiste la única personas que mi corazón sintio ese amor, halo mejor solo fui yo el que me ilusione contigo,cuando solo fuistes amable comigo,
y pues tu halo mejor por mis malas acciones y siento que tú ya no quieras saber más de mí, pero antes
de alejarme quiero pedirte lo más sincero de mi corazón. halo mejor no me supe expresar muy bien pero
esto salió de mi corazón por eso no esta de todo expresado pero eso fue lo que me nasio de mi para ti.

Y también quiero❤️‍🩹 decirte algo que tal vez nunca te expliqué bien…
A veces no te saludo, no porque no quiera, y mucho menos porque ya no me importes. 
En verdad me encantaría saludarte, acercarme y hablar contigo como lo Asia antes , pero mi 
corazón intenta olvidarte, intenta soltar ese amor que siente por ti… ❤️‍🩹aunque mi mente no puede dejar 
de recordar tu sonrisa, tus ojos tan hermosos y esos momentos en los que me hiciste reír o yo te hacía 
reír.pero ,Eso de dejar de ablarte la verdad no quiero ,quiero seguir ablando contigo pero esque mi 
 corazon quiere olvidar ese amor que siente
Recuerdo con cariño la amistad que tuvimos en ese tiempo en el que fuimos compañeros de salón.

Y sé que tu sonrisa, tus ojos y tu corazón han pasado por varias decepciones. Personas que no 
supieron valorarte, que no entendieron el tesoro que tenían frente a ellos.
Porque tú no eres un simple trofeo… eres un diamante precioso.
Y sí, me da risa —y a la vez tristeza— pensar en esas personas que tuvieron un 
diamante tan valioso como tú y no supieron cuidarlo.

Tal vez no me creas esta parte,pero yo soy de esas personas que :
Siempre he dicho que cuando una mujer decide que hasta aquí, yo respeto la  decisión. 
No importa si ha pasado un mes,❤️‍🩹 dos, o solo una semana. Agradezco el tiempo compartido, 
y siempre estoy dispuesto a seguir siendo un buen amigo. pero nadie me cree esa frase que llevo 
en la mente todos los días algunos si me cren porque me bieron lla vivir esa frase  pero que le asemos 
somos jovenes no adultos falta un año para ser adulto pero jejeje que le asemos asi son las cosas.

Una vez más… este fue mi ultimo mensaje para ti lla no me veras mandandote ❤️‍🩹videos o mensajes etc. 
alomejor en este tiempo que nos queda en la escuela te boy aber desde lejos para no incomodarte y 
quiero que sepas que no estoy enojado contigo simplemente quiero olvidar el amor que siento por ti 
alomer por hay te salude o cualquier cosa pero poco a poco boy ❤️‍🩹olvidando ese amor. tal ves por en un 
tiempo nos topemos lla sea en la calle, pero siempre te recordare y nunca te olvidare ni  dejare de 
alblar contigo  auque sea un rato o todo el dia.
este es mi ultimo mensaje con amor tu conpañero Carlitos`;

// Máquina de escribir
function escribirTexto(texto, elemento, velocidad = 90) {  // ← 💜 velocidad más lenta
  elemento.innerHTML = "";
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.innerHTML += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, velocidad);
}

// ❤️‍🩹 Corazones vendados flotando
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");

  corazon.innerHTML = "❤️‍🩹";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.bottom = "0px";

  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 4000);
}

// Abrir carta
canvas.addEventListener("click", () => {
  if (!open) {
    open = true;

    gsap.to(canvas, { y: -80, opacity: 0, duration: 1 });

    setTimeout(() => {
      papel3d.classList.add("visible");
      escribirTexto(mensaje, papelMsg, 120); // 💜 lento

      bgFade.classList.add("bg-fade-dark");
      closeBtn.classList.add("visible");
      subtitle.style.opacity = 0;

      openSound.play();
      bgMusic.play();

      setInterval(crearCorazon, 400);

    }, 800);
  }
});

// Cerrar carta
closeBtn.addEventListener("click", () => {
  open = false;

  papel3d.classList.remove("visible");
  bgFade.classList.remove("bg-fade-dark");
  closeBtn.classList.remove("visible");

  gsap.to(canvas, { y: 0, opacity: 1, duration: 1 });

  subtitle.style.opacity = 1;

  closeSound.play();
  bgMusic.pause();
});
