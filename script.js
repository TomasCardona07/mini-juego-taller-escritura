/* ===== DATOS: puedes editar o agregar preguntas aquí ===== */
const CATEGORIAS = [
  {
    id: 'ade', nombre: 'Adecuación', icono: '🎯', color: '#e8a317',
    def: 'Es la propiedad del texto que lo ajusta a la situación comunicativa: quién escribe, a quién, para qué, por qué medio y con qué registro (formal o informal).',
    clave: 'Pregúntate: ¿a quién le escribo y en qué situación?',
    preguntas: [
      { sit: 'Vas a pedirle permiso a la directora del colegio para salir temprano el viernes.',
        ops: ['Oye directora, déjame salir temprano el viernes, ¿vale?',
              'Estimada directora: me dirijo a usted para solicitarle respetuosamente permiso para retirarme temprano el viernes.',
              'Directora, necesito salir temprano el viernes xq tengo cita 😅'],
        ok: 1, exp: 'El destinatario es una autoridad, así que se necesita registro formal: saludo respetuoso, trato de "usted" y lenguaje cuidado. Las otras opciones son demasiado coloquiales.' },
      { sit: 'Le escribes por WhatsApp a tu mejor amigo para invitarlo al cine.',
        ops: ['Por medio de la presente, le invito cordialmente a asistir a una función cinematográfica.',
              '¡Hola, Juan! ¿Vamos al cine el sábado? Estrenan la peli que querías ver.',
              'Distinguido señor Juan Pérez: se le convoca a una proyección el sábado.'],
        ok: 1, exp: 'Entre amigos y por chat, el registro informal es lo adecuado. Un texto muy formal sonaría raro y frío para esa situación.' },
      { sit: 'Debes escribir una frase para un informe de ciencias que se entregará al profesor.',
        ops: ['Uf, el agua hierve como loca cuando está bien caliente.',
              'El agua hierve a 100 °C al nivel del mar.',
              'Oigan, ¿sabían que el agua hierve? ¡Qué chimba!'],
        ok: 1, exp: 'Un informe escolar pide lenguaje objetivo, preciso y sin expresiones coloquiales. Solo la segunda opción se adecúa al tipo de texto.' }
    ]
  },
  {
    id: 'coh', nombre: 'Coherencia', icono: '🧩', color: '#2b7de9',
    def: 'Es la propiedad que da sentido global al texto: todas las ideas giran en torno a un mismo tema, tienen un orden lógico y no se contradicen.',
    clave: 'Pregúntate: ¿tiene sentido y todo habla del mismo tema?',
    preguntas: [
      { sit: 'Tema del párrafo: "Los beneficios del ejercicio". ¿Qué oración NO pertenece?',
        ops: ['Mejora la salud del corazón.', 'Ayuda a dormir mejor.', 'Mi tía vende empanadas en el mercado.', 'Reduce el estrés.'],
        ok: 2, exp: 'La oración sobre las empanadas rompe la unidad temática. Un texto coherente mantiene todas sus ideas relacionadas con el tema central.' },
      { sit: 'Ordena estas oraciones. (1) Por eso es importante reciclar. (2) Cada día producimos toneladas de basura. (3) Gran parte de ella contamina ríos y mares. ¿Qué orden es coherente?',
        ops: ['1 - 2 - 3', '2 - 3 - 1', '3 - 1 - 2'],
        ok: 1, exp: 'Primero el problema (2), luego su consecuencia (3) y al final la conclusión (1). La coherencia exige una progresión lógica de las ideas.' },
      { sit: '¿Cuál de estos textos es coherente?',
        ops: ['Me encanta el invierno porque hace mucho calor y puedo ir a la playa.',
              'Me encanta el verano porque hace calor y puedo ir a la playa.',
              'Me encanta el verano porque llueve todo el día y hace frío.'],
        ok: 1, exp: 'Las otras opciones se contradicen: el invierno no es calor de playa y el verano no es frío y lluvia. Sin contradicciones hay coherencia.' }
    ]
  },
  {
    id: 'cohe', nombre: 'Cohesión', icono: '🔗', color: '#8e4ddb',
    def: 'Es la conexión gramatical entre las partes del texto, lograda con conectores, pronombres, sinónimos y signos de puntuación que unen oraciones y párrafos.',
    clave: 'Pregúntate: ¿las oraciones están bien "pegadas" entre sí?',
    preguntas: [
      { sit: 'Completa: "Llegué tarde a clase, ___ el profesor no me dejó entrar."',
        ops: ['aunque', 'por eso', 'sin embargo'],
        ok: 1, exp: '"Por eso" es un conector de consecuencia: llegar tarde causó que no me dejaran entrar.' },
      { sit: '¿Qué versión está mejor cohesionada, sin repeticiones innecesarias?',
        ops: ['Pedro tiene un perro. Pedro lleva al perro al parque porque a Pedro le gusta el perro.',
              'Pedro tiene un perro. Lo lleva al parque porque le encanta pasear con él.',
              'Pedro perro tiene parque lleva gusta.'],
        ok: 1, exp: 'Los pronombres ("lo", "le", "él") sustituyen palabras ya mencionadas y enlazan las oraciones. Es un mecanismo de cohesión.' },
      { sit: 'Completa: "Estudié mucho; ___, no aprobé el examen."',
        ops: ['además', 'sin embargo', 'por lo tanto'],
        ok: 1, exp: '"Sin embargo" expresa contraste: esperaba aprobar, pero ocurrió lo contrario.' }
    ]
  },
  {
    id: 'eta', nombre: 'Etapas de escritura', icono: '🛠️', color: '#e0527a',
    def: 'Escribir es un proceso con tres etapas: PLANIFICACIÓN (pensar qué, para quién y cómo), TEXTUALIZACIÓN (redactar el borrador) y REVISIÓN (releer, corregir y mejorar).',
    clave: 'Pregúntate: ¿estoy pensando, escribiendo o corrigiendo?',
    preguntas: [
      { sit: 'Haces una lluvia de ideas y un esquema con los puntos que tratarás. ¿En qué etapa estás?',
        ops: ['Planificación', 'Textualización', 'Revisión'], ok: 0,
        exp: 'Organizar ideas antes de escribir es planificación.' },
      { sit: 'Redactas el primer borrador, convirtiendo tus ideas en oraciones y párrafos. ¿En qué etapa estás?',
        ops: ['Planificación', 'Textualización', 'Revisión'], ok: 1,
        exp: 'Poner las ideas por escrito en forma de texto es textualización.' },
      { sit: 'Relees tu texto, corriges la ortografía y mejoras los conectores. ¿En qué etapa estás?',
        ops: ['Planificación', 'Textualización', 'Revisión'], ok: 2,
        exp: 'Evaluar y corregir lo ya escrito es revisión. En ella puedes volver a revisar adecuación, coherencia y cohesión.' },
      { sit: 'Defines para quién escribes y con qué propósito. ¿En qué etapa estás?',
        ops: ['Planificación', 'Textualización', 'Revisión'], ok: 0,
        exp: 'Decidir destinatario y propósito es parte de la planificación y determina la adecuación del texto.' }
    ]
  }
];

/* ===== ESTADO ===== */
const pantalla = document.getElementById('pantalla');
let ci, qi, puntos, racha, aciertos, respondida;
const total = CATEGORIAS.reduce((s, c) => s + c.preguntas.length, 0);

const mezclar = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);

function actualizarMarcador() {
  document.getElementById('puntos').textContent = puntos;
  document.getElementById('racha').textContent = racha;
  const hechas = CATEGORIAS.slice(0, ci).reduce((s, c) => s + c.preguntas.length, 0) + (respondida ? qi + 1 : qi);
  document.getElementById('progreso-relleno').style.width = (hechas / total * 100) + '%';
}

/* ===== PANTALLAS ===== */
function inicio() {
  ci = 0; qi = 0; puntos = 0; racha = 0; aciertos = {}; respondida = false;
  CATEGORIAS.forEach(c => aciertos[c.id] = 0);
  pantalla.style.setProperty('--color', '#ffd166');
  pantalla.innerHTML = `
    <h2>¿Escribes bien o escribes "bonito"?</h2>
    <p>Un buen texto cumple tres propiedades y se construye en tres etapas. Aprende cada una y pon a prueba lo que sabes.</p>
    <div class="rejilla">
      ${CATEGORIAS.map(c => `<div class="tarjeta" style="--c:${c.color}"><b>${c.icono} ${c.nombre}</b>${c.clave}</div>`).join('')}
    </div>
    <p class="sub">${total} preguntas · cada acierto suma 100 puntos y la racha da bonus.</p>
    <button class="btn" id="empezar">Empezar</button>`;
  document.getElementById('empezar').onclick = leccion;
  actualizarMarcador();
}

function leccion() {
  const c = CATEGORIAS[ci];
  pantalla.style.setProperty('--color', c.color);
  pantalla.innerHTML = `
    <span class="etiqueta">Aprende primero</span>
    <h2>${c.icono} ${c.nombre}</h2>
    <div class="caja"><p>${c.def}</p></div>
    <p class="sub">💡 ${c.clave}</p>
    <button class="btn" id="seguir">Ir a las preguntas</button>`;
  document.getElementById('seguir').onclick = () => { qi = 0; pregunta(); };
  actualizarMarcador();
}

function pregunta() {
  const c = CATEGORIAS[ci], p = c.preguntas[qi];
  respondida = false;
  const orden = p.ops.map((t, i) => ({ t, i }));
  const lista = c.id === 'eta' ? orden : mezclar(orden);
  pantalla.style.setProperty('--color', c.color);
  pantalla.innerHTML = `
    <span class="etiqueta">${c.icono} ${c.nombre} · pregunta ${qi + 1} de ${c.preguntas.length}</span>
    <p class="situacion">${p.sit}</p>
    <div class="opciones">
      ${lista.map(o => `<button class="opcion" data-i="${o.i}">${o.t}</button>`).join('')}
    </div>
    <div id="retro"></div>`;
  pantalla.querySelectorAll('.opcion').forEach(b => b.onclick = () => responder(+b.dataset.i));
  actualizarMarcador();
}

function responder(i) {
  if (respondida) return;
  respondida = true;
  const c = CATEGORIAS[ci], p = c.preguntas[qi], bien = i === p.ok;
  pantalla.querySelectorAll('.opcion').forEach(b => {
    b.disabled = true;
    if (+b.dataset.i === p.ok) b.classList.add('correcta');
    else if (+b.dataset.i === i) b.classList.add('incorrecta');
  });
  if (bien) { racha++; aciertos[c.id]++; puntos += 100 + (racha > 1 ? 10 * racha : 0); }
  else racha = 0;
  const ultima = ci === CATEGORIAS.length - 1 && qi === c.preguntas.length - 1;
  document.getElementById('retro').innerHTML = `
    <div class="retro ${bien ? 'bien' : 'mal'}">
      <strong>${bien ? '¡Correcto! ✅' : 'Casi... ❌'}</strong>${p.exp}
    </div>
    <button class="btn" id="siguiente">${ultima ? 'Ver resultados' : 'Siguiente'}</button>`;
  document.getElementById('siguiente').onclick = siguiente;
  document.getElementById('siguiente').focus();
  actualizarMarcador();
}

function siguiente() {
  const c = CATEGORIAS[ci];
  if (qi < c.preguntas.length - 1) { qi++; pregunta(); }
  else if (ci < CATEGORIAS.length - 1) { ci++; respondida = false; leccion(); }
  else final();
}

function final() {
  document.getElementById('progreso-relleno').style.width = '100%';
  const buenas = Object.values(aciertos).reduce((a, b) => a + b, 0);
  const pct = Math.round(buenas / total * 100);
  const msg = pct >= 85 ? '¡Excelente! Dominas las propiedades del texto.'
            : pct >= 60 ? '¡Buen trabajo! Repasa las categorías más bajas.'
            : 'Vas en camino. Vuelve a jugar y lee bien la retroalimentación.';
  pantalla.style.setProperty('--color', '#ffd166');
  pantalla.innerHTML = `
    <h2>Resultados 🏆</h2>
    <p class="gran">${puntos} puntos</p>
    <p>${buenas} de ${total} correctas (${pct}%). ${msg}</p>
    ${CATEGORIAS.map(c => `
      <div class="resultado" style="--c:${c.color}">
        <span class="nombre">${c.icono} ${c.nombre}</span>
        <div class="fondo"><div style="width:${aciertos[c.id] / c.preguntas.length * 100}%"></div></div>
        <span>${aciertos[c.id]}/${c.preguntas.length}</span>
      </div>`).join('')}
    <button class="btn" id="otra">Jugar otra vez</button>`;
  document.getElementById('otra').onclick = inicio;
}

inicio();
