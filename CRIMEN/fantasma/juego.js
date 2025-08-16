document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('contenido-juego');
  if (container) {
    container.innerHTML = etapasHTML;
  }
});

/**
 * Normaliza una cadena de texto para la comparación.
 */
function norm(s) {
  return (s || "")
    .toString()
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * Comprueba la respuesta del usuario para una etapa específica.
 * @param {number} stage El número de la etapa (1-4).
 */
function check(stage) {
  const inp = document.getElementById('a' + stage);
  const msg = document.getElementById('m' + stage);
  const val = norm(inp.value);

  const decodedAnswers = ENCODED_ANSWERS[stage].map(encoded => norm(atob(encoded)));
  
  let ok = false;

  if (stage === 1) {
    ok = decodedAnswers.some(a => val.includes(a) || val === a);
  } else {
    ok = decodedAnswers.some(a => val === a);
  }

  if (ok) {
    msg.innerHTML = '<span class="ok">✔ Correcto.</span>';
    const next = document.getElementById(stage < 4 ? 'stage' + (stage + 1) : 'end');
    if (next) {
      next.classList.remove('hidden');
      setTimeout(() => next.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  } else {
    const hints = {
      1: 'Piensa en el té, la visión amarillenta y lo que <em>no</em> está en el abre‑cartas.',
      2: 'El reloj mojado y los mensajes de 21:12–21:21 acotan la ventana.',
      3: 'El correo y el codicilo cambian los créditos; el anexo habla de “picar”.',
      4: 'Quien pidió reiniciar cámaras, llevó el té y tenía motivo directo.'
    };
    msg.innerHTML = '<span class="bad">✖ Incorrecto.</span> ';
  }
}

/**
 * Muestra la respuesta correcta para la etapa actual.
 * @param {number} stage El número de la etapa (1-4).
 */
function giveUp(stage) {
  const msg = document.getElementById('m' + stage);
  // Decodifica y muestra la primera respuesta de la lista como la principal.
  const correctAnswer = atob(ENCODED_ANSWERS[stage][0]);
  msg.innerHTML = `La respuesta correcta es: <strong class="ok">${correctAnswer}</strong>`;
}