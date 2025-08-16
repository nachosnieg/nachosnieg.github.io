const etapasHTML = `
<section class="panel intro">
    <div>
      <h2>Breve descripción del caso</h2>
      <p>
En la noche del 12 de junio de 2023, el histórico Tren de las Sierras que realiza el recorrido Córdoba-Cruz del Eje desapareció misteriosamente durante 47 minutos entre las estaciones de Cosquín y La Cumbre. Cuando reapareció, el empresario ferroviario Santiago Ledesma (52 años) había desaparecido sin dejar rastro de su vagón privado, el "Cóndor Plateado".
      </p>
      <p>
El caso se complica cuando se descubre que Ledesma estaba en medio de negociaciones conflictivas para privatizar parte de la red ferroviaria, enfrentándose a sindicatos, competidores y hasta su propia familia. El vagón desaparecido reapareció 3 días después en un ramal abandonado, con manchas de sangre y un extraño símbolo tallado en la madera: un círculo con una cruz invertida.
      </p>
      <p>
Tu misión es descubrir qué le ocurrió a Ledesma, quién está detrás de su desaparición y resolver el misterio del tren fantasma. Cuidado: cada testigo oculta algo, y las pistas te llevarán por caminos inesperados.
      </p>
    </div>
    <div class="panel">
      <h3>Cómo se juega</h3>
      <ol>
        <li>Lee la <strong>Etapa 1</strong> (abajo). Analiza todas las evidencias.</li>
        <li>Responde la pregunta exacta al final. Ejemplo: <span class="pill mono">CUCHILLO</span> o <span class="pill mono">22:30</span>.</li>
        <li>Si aciertas, se desbloquea la siguiente etapa automáticamente.</li>
        <li>En la <strong>Etapa 6</strong> deberás responder: <em>¿Quién es el culpable?</em></li>
      </ol>
      <p class="watermark">Consejo: algunas respuestas pueden requerir interpretación cruzada de documentos.</p>
    </div>
  </section>

  <section id="stage1" class="panel">
    <h2>Etapa 1 · La Desaparición</h2>
    <p><strong>Pregunta:</strong> ¿Qué objeto clave desapareció junto con Ledesma?</p>
    <div class="divider"></div>
    <div class="grid">
      <div class="col-8">
        <h3>Evidencia clave</h3>
        <details open>
          <summary>Informe de la Policía Ferroviaria</summary>
          <div class="doc">
Lugar: Tramo Cosquín-La Cumbre, Tren de las Sierras.
Fecha: 12/06/2023, entre 23:30 y 00:17.
Reporte inicial: El tren completo desapareció de los radares por 47 minutos. Al reaparecer, faltaba el vagón "Cóndor Plateado" (nº 7). Reapareció 3 días después en el ramal abandonado a Estación Juárez Celman. No había señales de forcejeo en los acoples. El sistema de frenos mostraba manipulación experta.
          </div>
        </details>
        <details>
          <summary>Declaración del Maquinista</summary>
          <div class="doc">
"Noté una brusca desaceleración cerca del túnel N°4. Según protocolo, revisé los instrumentos pero todo parecía normal. El tren respondía bien. Solo al llegar a La Cumbre notamos que faltaba el vagón de Ledesma. Lo extraño es que el sistema no registra desconexiones. Era como si nunca hubiera estado allí."
          </div>
        </details>
        <details>
          <summary>Inventario del vagón desaparecido</summary>
          <div class="doc">
- Maletín ejecutivo con documentos (recuperado vacío).
- Computadora portátil (no encontrada).
- <strong>Bréleera</strong> (caja fuerte portátil) con mecanismo de autodestrucción (no encontrada).
- Botella de whisky Macallan 18 (encontrada rota).
- Reloj de pared antiguo (detenido a las 23:45).
          </div>
        </details>
        <details>
          <summary>Registro de cámaras de seguridad</summary>
          <div class="doc">
23:15 - Ledesma ingresa a su vagón con una carpeta.
23:20 - Un asistente lleva café al vagón (identificado como Pablo Ríos).
23:30 - Última imagen de Ledesma sentado en su escritorio.
23:45 - Breve falla en las cámaras (3 segundos).
00:17 - El tren reaparece en cámaras, falta el vagón 7.
          </div>
        </details>
        <details>
          <summary>Email de Ledesma a su abogado</summary>
          <div class="doc">
"Asunto: Protocolo Cóndor
Si algo me pasa, la bréleera contiene los documentos del 'Proyecto Esmeralda'. Solo tú y Mariana conocen la combinación. Cuidado con el círculo invertido."
          </div>
        </details>
      </div>
      <div class="col-4">
        <h3>Sospechosos iniciales</h3>
        <div class="cards">
          <div class="card"><strong>Mariana Ledesma</strong><br><span class="muted">Esposa</span><p>En proceso de divorcio. Heredaría el 60% de las acciones. Fue vista cerca de la estación esa noche.</p></div>
          <div class="card"><strong>Pablo Ríos</strong><br><span class="muted">Asistente personal</span><p>Último en ver a Ledesma. Tiene antecedentes por fraude. Acceso total a la agenda.</p></div>
          <div class="card"><strong>Oscar "El Turco" Farías</strong><br><span class="muted">Sindicalista</span><p>Amenazó a Ledesma por los despidos. Su hermano es experto en sistemas ferroviarios.</p></div>
          <div class="card"><strong>Dra. Valeria Montes</strong><br><span class="muted">Médico</span><p>Atendió a Ledesma por estrés. Tenían una relación secreta. Especialista en toxinas.</p></div>
          <div class="card"><strong>Ignacio "Nacho" Ledesma</strong><br><span class="muted">Hijo</span><p>Desheredado. Fue visto en Cosquín esa noche. Experto en informática.</p></div>
          <div class="card"><strong>Roberto Echegaray</strong><br><span class="muted">Competidor</span><p>Dueño de FerroSur. Ofreció comprar la empresa semanas antes.</p></div>
        </div>
      </div>
    </div>
    <div class="q">
      <label for="a1">Respuesta exacta (objeto desaparecido):</label>
      <input id="a1" placeholder="Ej.: CUCHILLO" />
      <button onclick="check(1)">Comprobar y desbloquear Etapa 2</button>
      <button class="btn-give-up" onclick="giveUp(1)">Me rindo</button>
      <div id="f1" class="hint">Pista: Busca en el inventario qué objeto tenía mecanismo de seguridad y contenía documentos importantes.</div>
      <div id="m1" class="hint"></div>
    </div>
  </section>

  <section id="stage2" class="panel hidden">
    <h2>Etapa 2 · El Tiempo Perdido</h2>
    <p><strong>Pregunta:</strong> ¿A qué hora exacta ocurrió la desaparición?</p>
    <div class="divider"></div>
    <div class="two">
      <div>
        <details open>
          <summary>Registro de telemetría del tren</summary>
          <div class="doc">
23:30 - Velocidad normal (60 km/h).
23:42 - Leve reducción de velocidad (58 km/h).
23:45 - Falla en sistema GPS (47 minutos).
00:17 - Reaparición en radares, velocidad 55 km/h.
Análisis: El vagón fue desconectado durante la falla. Se necesitaría acceso al panel central.
          </div>
        </details>
        <details>
          <summary>Declaración de Pablo Ríos</summary>
          <div class="doc">
"El jefe estaba revisando los contratos del Proyecto Esmeralda. Me pidió café y que lo dejara solo. Cuando volví a las 23:40, la puerta estaba cerrada con llave. Escuché voces dentro, pero no distinguí de quién era. A las 23:50 revisé otra vez y todo estaba en silencio. Pensé que se había dormido."
          </div>
        </details>
        <details>
          <summary>Informe meteorológico</summary>
          <div class="doc">
23:00 - Condiciones normales.
23:45 - Tormenta eléctrica breve (3 minutos) en zona del túnel N°4.
Posible interferencia electromagnética.
          </div>
        </details>
      </div>
      <div>
        <details open>
          <summary>Diario personal de Ledesma</summary>
          <div class="doc">
"10/06: Mariana sabe lo de Valeria. Amenazó con llevarse todo. Debo acelerar el Proyecto Esmeralda.
11/06: El Turco no aceptará los despidos. Dice que 'el círculo está completo'. ¿Una amenaza?
12/06: Reunión con Echegaray a las 23:30 en el tren. Si no firma, activaré el Protocolo Cóndor."
          </div>
        </details>
        <details>
          <summary>Registro de llamadas</summary>
          <div class="doc">
- 22:00: Llamada de Mariana (2 min, tono elevado).
- 22:30: Mensaje de Valeria: "Necesito hablar, es urgente. No vayas a esa reunión."
- 23:00: Llamada a número desconocido (1 min).
- 23:25: Última llamada recibida (Echegaray): "Estoy llegando."
          </div>
        </details>
        <details>
          <summary>Reloj de pulsera de Ledesma</summary>
          <div class="doc">
Encontrado en el vagón. Detenido a las 23:45 por impacto fuerte. Huellas de Pablo Ríos y desconocidas.
          </div>
        </details>
      </div>
    </div>
    <div class="q">
      <label for="a2">Respuesta exacta (hora de la desaparición en formato 24h):</label>
      <input id="a2" placeholder="Ej.: 22:30" />
      <button onclick="check(2)">Comprobar y desbloquear Etapa 3</button>
      <button class="btn-give-up" onclick="giveUp(2)">Me rindo</button>
      <div id="f2" class="hint">Pista: Busca la coincidencia entre la falla técnica, el reloj detenido y el momento en que el asistente notó silencio.</div>
      <div id="m2" class="hint"></div>
    </div>
  </section>

  <section id="stage3" class="panel hidden">
    <h2>Etapa 3 · El Círculo Invertido</h2>
    <p><strong>Pregunta:</strong> ¿Cuál fue el verdadero móvil del crimen?</p>
    <div class="divider"></div>
    <div class="grid">
      <div class="col-6">
        <details open>
          <summary>Contenido de la bréleera (recuperado)</summary>
          <div class="doc">
- Contratos del "Proyecto Esmeralda": Venta encubierta de ramales a FerroSur con sobreprecio (firmados por Ledesma y Echegaray).
- Testamento ológrafo: Deshereda a Ignacio y deja todo a una fundación controlada por Valeria.
- Foto antigua (1985): Grupo de 6 personas incluyendo a Ledesma padre y un joven con símbolo de círculo invertido.
- Nota: "Ellos saben la verdad sobre el accidente de 1989. El círculo se cierra."
          </div>
        </details>
        <details>
          <summary>Declaración de Ignacio Ledesma</summary>
          <div class="doc">
"Mi padre estaba obsesionado con ese símbolo desde que éramos niños. El 'círculo invertido' era una sociedad secreta de ferroviarios en los 80. Cubrieron el accidente que mató a 12 personas en el ramal a Juárez Celman. Mi abuelo era parte. Papá descubrió que Echegaray y El Turco también estaban involucrados. Por eso el Proyecto Esmeralda: era su chantaje."
          </div>
        </details>
      </div>
      <div class="col-6">
        <details open>
          <summary>Email de Valeria Montes</summary>
          <div class="doc">
Asunto: Urgente - No vayas
"Santiago: Descubrí que Mariana sabe del testamento. Peor, Echegaray no es quien dice ser. Es el hijo de Ramón Echegaray, el maquinista del accidente de 1989. Te está tendiendo una trampa. El Turco trabaja para él. No vayas a esa reunión."
          </div>
        </details>
        <details>
          <summary>Registro de entrada a estación</summary>
          <div class="doc">
23:15 - Roberto Echegaray ingresa con maletín.
23:25 - Hombre con gorra y barba (¿Ignacio?) muestra credencial de prensa.
23:40 - Mujer con pañuelo (¿Mariana?) accede por puerta trasera.
          </div>
        </details>
        <details>
          <summary>Informe de la bréleera</summary>
          <div class="doc">
El mecanismo de autodestrucción fue activado pero interrumpido. Contenía un compartimento oculto vacío. Huellas de Ledesma, Echegaray y... Mariana.
          </div>
        </details>
      </div>
    </div>
    <div class="q">
      <label for="a3">Respuesta exacta (móvil del crimen en una palabra):</label>
      <input id="a3" placeholder="Ej.: VENGANZA" />
      <button onclick="check(3)">Comprobar y desbloquear Etapa 4</button>
      <button class="btn-give-up" onclick="giveUp(3)">Me rindo</button>
      <div id="f3" class="hint">Pista: No fue solo por dinero. Busca en los documentos qué evento del pasado conecta a varios sospechosos.</div>
      <div id="m3" class="hint"></div>
    </div>
  </section>

  <section id="stage4" class="panel hidden">
    <h2>Etapa 4 · El Ramal Olvidado</h2>
    <p><strong>Pregunta:</strong> ¿Cómo lograron hacer desaparecer el vagón?</p>
    <div class="divider"></div>
    <div class="grid">
      <div class="col-6">
        <details open>
          <summary>Diagrama del sistema ferroviario</summary>
          <div class="doc">
El tramo Cosquín-La Cumbre tiene un desvío oculto (no registrado en mapas oficiales) que lleva al antiguo ramal Juárez Celman, cerrado desde 1989. El cambio de vía se activa manualmente desde un panel escondido en el túnel N°4. Solo personal experto lo conoce.
          </div>
        </details>
        <details>
          <summary>Informe de ingeniería</summary>
          <div class="doc">
El vagón fue desconectado usando un método antiguo: liberación neumática de los ganchos de acople. Requiere acceso al panel central y conocimiento exacto del momento (durante la desaceleración). Las marcas muestran que fue planeado: alguien sabía exactamente cuándo y cómo hacerlo.
          </div>
        </details>
        <details>
          <summary>Declaración de ex empleado</summary>
          <div class="doc">
"En los 80, usábamos ese desvío para maniobras especiales. Después del accidente, lo sellaron, pero algunos sabíamos cómo activarlo. El Turco y su hermano trabajaban en mantenimiento. Santiago también sabía, su padre se lo enseñó."
          </div>
        </details>
      </div>
      <div class="col-6">
        <details open>
          <summary>Registro de teléfonos</summary>
          <div class="doc">
23:00 - Llamada de Ignacio a número desconocido (rastreado a antena cerca del túnel N°4).
23:40 - Mensaje cifrado desde el tren: "FUG-A activado" (¿código ferroviario antiguo?).
23:45 - Llamada de Mariana a abogado: "Es ahora".
          </div>
        </details>
        <details>
          <summary>Huellas en el panel de control</summary>
          <div class="doc">
Encontradas en el panel oculto del túnel:
- Huellas de El Turco.
- Marcas de guantes quirúrgicos (como los que usa Valeria).
- Fibra de pañuelo de seda (como el de Mariana).
          </div>
        </details>
        <details>
          <summary>Nota encontrada en el vagón</summary>
          <div class="doc">
"El círculo se cierra. Como en 1989, un Ledesma pagará por los 12. La bréleera es la prueba."
Firma: "Los Hijos del Círculo Invertido".
          </div>
        </details>
      </div>
    </div>
    <div class="q">
      <label for="a4">Respuesta exacta (método usado en una palabra):</label>
      <input id="a4" placeholder="Ej.: EXPLOSIVO" />
      <button onclick="check(4)">Comprobar y desbloquear Etapa 5</button>
      <button class="btn-give-up" onclick="giveUp(4)">Me rindo</button>
      <div id="f4" class="hint">Pista: Busca en los documentos cómo se desvió el vagón sin que el tren principal se detuviera.</div>
      <div id="m4" class="hint"></div>
    </div>
  </section>

  <section id="stage5" class="panel hidden">
    <h2>Etapa 5 · La Estación Fantasma</h2>
    <p><strong>Pregunta:</strong> ¿Dónde está escondido el cuerpo?</p>
    <div class="divider"></div>
    <div class="grid">
      <div class="col-6">
        <details open>
          <summary>Registro de búsqueda</summary>
          <div class="doc">
El vagón fue encontrado en el ramal abandonado a Estación Juárez Celman, pero no había rastro del cuerpo. El análisis forense mostró:
- Manchas de sangre tipo A+ (coincide con Ledesma).
- Restos de tierra especial (similar a la de las viejas carboneras).
- Fibra azul (como el uniforme de FerroSur).
          </div>
        </details>
        <details>
          <summary>Declaración de antiguo maquinista</summary>
          <div class="doc">
"La estación Juárez Celman tiene túneles secretos que llevan a las antiguas carboneras. En los 80, los usaban para contrabando. Solo accesibles desde el sótano de la estación o... desde el vagón presidencial del Ferrocarril Belgrano, que tenía una trampilla oculta."
          </div>
        </details>
        <details>
          <summary>Plano del vagón</summary>
          <div class="doc">
El "Cóndor Plateado" fue adaptado del antiguo vagón presidencial. Tiene un compartimento secreto bajo el piso, accionado por un mecanismo en el reloj de pared. El compartimento estaba vacío, pero con rastros recientes de uso.
          </div>
        </details>
      </div>
      <div class="col-6">
        <details open>
          <summary>Informe geológico</summary>
          <div class="doc">
Las carboneras abandonadas tienen un sistema de túneles inestables. Recientemente, uno colapsó cerca de la entrada este. Análisis térmico muestra una cavidad a 5m de profundidad con objeto metálico grande (¿bréleera?).
          </div>
        </details>
        <details>
          <summary>Diario de Valeria</summary>
          <div class="doc">
"12/06: Santiago me dijo que si algo pasaba, buscará en 'la cafetería de los recuerdos'. No entendí, pero recordé que en nuestro primer viaje juntos paramos en una estación abandonada donde tomamos café. ¿Juárez Celman?"
          </div>
        </details>
        <details>
          <summary>Fotos satelitales</summary>
          <div class="doc">
13/06 - Movimiento de tierra cerca de la carbonera este.
14/06 - Figura humana cerca del túnel colapsado (¿Mariana?).
15/06 - Vehículo de FerroSur estacionado en zona prohibida.
          </div>
        </details>
      </div>
    </div>
    <div class="q">
      <label for="a5">Respuesta exacta (lugar del cuerpo en una palabra):</label>
      <input id="a5" placeholder="Ej.: BODEGA" />
      <button onclick="check(5)">Comprobar y desbloquear Etapa 6</button>
      <button class="btn-give-up" onclick="giveUp(5)">Me rindo</button>
      <div id="f5" class="hint">Pista: Busca en los documentos qué lugar secreto conecta con el vagón y tiene relación con café.</div>
      <div id="m5" class="hint"></div>
    </div>
  </section>

  <section id="stage6" class="panel hidden">
    <h2>Etapa 6 · La Verdad Oculta</h2>
    <p><strong>Pregunta final:</strong> ¿Quién es el culpable?</p>
    <div class="divider"></div>
    <div class="grid">
      <div class="col-6">
        <details open>
          <summary>Confesión de Mariana Ledesma</summary>
          <div class="doc">
"Lo planeamos con Echegaray y El Turco. Santiago iba a dejarme sin nada. Cuando descubrí que Valeria heredaría todo, contacté a Echegaray. Él quería venganza por su padre. Usamos el desvío secreto que el hermano de El Turco conocía. Yo activé el mecanismo desde el túnel. Pero no lo matamos... solo lo encerramos en el compartimento secreto para que firmara nuevos documentos. Algo salió mal, el vagón se descontroló."
          </div>
        </details>
        <details>
          <summary>Análisis forense final</summary>
          <div class="doc">
El cuerpo fue encontrado en la carbonera este. Causa de muerte: asfixia por derrumbe. En su bolsillo:
- Foto de 1989 mostrando a Ledesma padre y otros cubriendo el accidente.
- Nota: "Mariana, no fuiste tú. Fue Valeria. Ella es la hija del maquinista Ramón. El círculo está completo."
          </div>
        </details>
      </div>
      <div class="col-6">
        <details open>
          <summary>Declaración de Valeria Montes</summary>
          <div class="doc">
"Soy Valeria Echegaray. Mi padre murió en el accidente que los Ledesma cubrieron. Me convertí en médica para estar cerca de Santiago. Mariana me contactó, no sabía quién era realmente. Cuando descubrí que ella planeaba matarlo, modifiqué el plan. El compartimento secreto tenía ventilación limitada. Con la tormenta, el túnel se inundó. No quería que muriera... solo que confesara."
          </div>
        </details>
        <details>
          <summary>Evidencia concluyente</summary>
          <div class="doc">
- Huellas de Valeria en el mecanismo de ventilación del compartimento.
- Email de Valeria a Echegaray: "Será como en 1989, pero esta vez ellos sufrirán."
- Testamento verdadero encontrado en la bréleera: todo iba para Ignacio.
- Símbolo del círculo invertido tallado en el cuerpo (post mortem).
          </div>
        </details>
      </div>
    </div>
    <div class="q">
      <label for="a6">Respuesta exacta (nombre y apellido del culpable):</label>
      <input id="a6" placeholder="Ej.: NOMBRE APELLIDO" />
      <button onclick="check(6)">Comprobar y ver Conclusión</button>
      <button class="btn-give-up" onclick="giveUp(6)">Me rindo</button>
      <div id="f6" class="hint">Pista: El culpable no es quien parece tener el motivo más obvio, sino quien manipuló los eventos desde el principio con un plan de venganza a largo plazo.</div>
      <div id="m6" class="hint"></div>
    </div>
  </section>

  <section id="end" class="panel hidden">
    <h2>Conclusión del caso "El Misterio del Tren Fantasma"</h2>
    <p>
      La desaparición de Santiago Ledesma comenzó con la <strong>bréleera</strong>, la caja fuerte portátil que contenía documentos comprometedores sobre el accidente de 1989 y el Proyecto Esmeralda. Este objeto fue el catalizador de toda la trama.
    </p>
    <p>
      El crimen ocurrió exactamente a las <strong>23:45</strong>, durante la tormenta eléctrica que cubrió el desvío del vagón al ramal abandonado. El momento fue elegido cuidadosamente para coincidir con la interferencia electromagnética.
    </p>
    <p>
      El móvil fue la <strong>retribución</strong> por el accidente de 1989 que los Ledesma habían encubierto, dejando a familias sin justicia. Lo que parecía un simple crimen por dinero escondía una compleja red de venganza generacional.
    </p>
    <p>
      El método <strong>fuga</strong> (término ferroviario para desvío no autorizado) fue ejecutado con precisión técnica, aprovechando conocimientos internos del sistema ferroviario que solo unos pocos poseían.
    </p>
    <p>
      El cuerpo fue escondido en la <strong>cafetería</strong> de la estación abandonada, un lugar simbólico que conectaba el pasado y el presente de esta tragedia.
    </p>
    <p>
      La culpable es <strong>Valeria Montes</strong>, realmente Valeria Echegaray, hija del maquinista injustamente culpado por el accidente de 1989. Durante años planeó su venganza, acercándose a Ledesma como su médica y amante, manipulando a Mariana y a los demás para que ejecutaran su plan sin saber que ella era la verdadera arquitecta.
    </p>
    <p class="muted stamp">Fin · Imprime esta página si deseas conservar el caso.</p>
  </section>
`;