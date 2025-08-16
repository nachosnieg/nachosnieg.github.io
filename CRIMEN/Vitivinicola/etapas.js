const etapasHTML = `
<section class="panel intro">
    <div>
      <h2>Breve descripción del caso</h2>
      <p>
En el corazón vitivinícola de Mendoza, la prestigiosa "Viña de las Sombras" está de luto. Su patriarca, Alejandro Valtieri, un hombre tan robusto y complejo como sus vinos de autor, ha sido encontrado muerto en su cava personal durante la noche de la cosecha anual. Valtieri, a punto de anunciar un cambio drástico en el futuro de su imperio de Malbec, yace junto a una copa de vino volcada y una antiquísima herramienta de viticultor.
      </p>
      <p>
La escena del crimen parece tranquila, casi ceremonial, pero el informe forense preliminar sugiere un veneno potente y de acción rápida. La familia y los empleados más cercanos, reunidos en la casona de la finca, son ahora los principales sospechosos. Cada uno tenía un motivo para desear el fin del patriarca. Tu misión es desentrañar una red de secretos familiares, ambiciones desmedidas y viejas traiciones para encontrar al culpable.

        Tu tarea: reconstruir el arma, la hora, el móvil y el culpable. Cuidado: hay pistas falsas y giros.
      </p>
    </div>
    <div class="panel">
      <h3>Cómo se juega</h3>
      <ol>
        <li>Lee la <strong>Etapa 1</strong> (abajo). Abre las evidencias (detalles, transcripciones, documentos).</li>
        <li>Responde la pregunta exacta al final. Ejemplo de formato: <span class="pill mono">CUCHILLO</span> o <span class="pill mono">21:17</span>.</li>
        <li>Si aciertas, se muestra la siguiente etapa automáticamente.</li>
        <li>En la <strong>Etapa 4</strong> deberás responder: <em>¿Quién es el asesino?</em> Si aciertas, verás la conclusión.</li>
      </ol>
      <p class="watermark">Consejo: escribe sin tildes si dudas (el sistema acepta variantes).</p>
    </div>
  </section>




 <section id="stage1" class="panel">
   <h2>Etapa 1 · Cosecha de Engaños</h2>
   <p><strong>Pregunta:</strong> ¿Cuál fue el método exacto (objeto y sustancia) utilizado para envenenar a Valtieri?</p>
   <div class="divider"></div>
   <div class="grid">
     <div class="col-8">
       <h3>Evidencia clave</h3>
       <details open>
         <summary>Informe de la Policía Científica (Lugar del hecho)</summary>
         <div class="doc">
Lugar: Cava personal de Alejandro Valtieri, Viña de las Sombras, Luján de Cuyo.
Fecha: Domingo, 07:30 hs.
Hallado por: Franco Díaz (Enólogo principal).
Descripción: La víctima, Alejandro Valtieri (72), yace en su sillón de cuero favorito. Viste ropa de campo de alta gama. En la mesa de cata a su lado, hay una botella de "Valtieri Gran Reserva 2012" descorchada y una copa de cristal rota en el suelo, con restos de vino tinto. Se observa una leve coloración azulada en los labios de la víctima. No hay signos de violencia. En la mano derecha de la víctima reposa un antiguo <strong>catavinos de plata</strong>, una copa de cata tradicional. La puerta de la cava estaba cerrada con llave desde adentro.
Objetos incautados: 1) Botella y restos de la copa de cristal; 2) El catavinos de plata; 3) Un sobre lacrado con la inscripción "TESTAMENTO ANEXO - NO ABRIR"; 4) Un diario personal de la víctima.
         </div>
       </details>
       <details>
         <summary>Informe preliminar de toxicología</summary>
         <div class="doc">
Causa de muerte: Intoxicación por inhibidor de la acetilcolinesterasa.
Observaciones: La sustancia es un compuesto organofosforado modificado, similar a los pesticidas de última generación, pero alterado químicamente para ser inodoro, incoloro y de absorción extremadamente rápida por contacto con las mucosas. El análisis del vino en la copa rota dio negativo para cualquier toxina. La muerte fue casi instantánea.
         </div>
       </details>
       <details>
         <summary>Declaración de Franco Díaz (Enólogo)</summary>
         <div class="doc">
"Don Alejandro era un ritualista. Todas las noches, antes de cenar, bajaba a la cava a 'conversar con sus vinos'. Cataba siempre la misma cosecha, la de 2012, pero no usaba una copa de cristal, sino su catavinos de plata, una herencia familiar. Decía que 'la plata no miente'. Lo encontré esta mañana cuando no subió a desayunar. La puerta estaba cerrada, tuve que usar la llave maestra. Ayer por la tarde lo noté muy tenso, discutió fuerte con su hijo Mateo."
         </div>
       </details>
        <details>
         <summary>Página del diario de Alejandro Valtieri (de ayer)</summary>
         <div class="doc">
"La cosecha de este año será la última de las mentiras. Mateo cree que puede manejar la viña con sus ideas de marketing, pero no entiende el alma de esta tierra. Sofía me desprecia, pero no sabe el secreto que guardo para ella. E Isabella... pobre Isabella, cree que el amor se compra con barricas nuevas. Esta noche, en la cena, revelaré el anexo de mi testamento. La verdad, como el buen vino, a veces es amarga. Usaré la copa de mi abuelo para brindar por el nuevo comienzo, o por el final."
         </div>
       </details>
     </div>
     <div class="col-4">
       <h3>Sospechosos (fichas breves)</h3>
       <div class="cards">
         <div class="card"><strong>Mateo Valtieri</strong><br><span class="muted">Hijo y Heredero</span><p>Ambicioso y moderno. Chocaba constantemente con las ideas traditionalistas de su padre. Ansiaba tomar el control total de la bodega.</p></div>
         <div class="card"><strong>Sofía Valtieri</strong><br><span class="muted">Hija Artista (desheredada)</span><p>Pintora que renunció a su parte de la herencia hace años. Tenía una relación conflictiva y distante con su padre. Volvió a la finca hace una semana.</p></div>
         <div class="card"><strong>Isabella Rossi de Valtieri</strong><br><span class="muted">Tercera Esposa</span><p>Mucho más joven que Alejandro. Ex sommelier. Muchos la consideran una oportunista. Controla las finanzas de la casa.</p></div>
         <div class="card"><strong>Franco Díaz</strong><br><span class="muted">Enólogo y mano derecha</span><p>Leal a Don Alejandro, pero frustrado por no poder experimentar con nuevas técnicas. Conoce cada secreto químico y cada rincón de la finca.</p></div>
       </div>
       <details style="margin-top:12px">
         <summary>Mensaje de WhatsApp (Isabella a un contacto desconocido, 20:15 hs)</summary>
         <div class="doc">
"Está decidido. Esta noche se acaba. Su obsesión con el pasado nos va a arruinar a todos. Prepará todo como hablamos. El brindis de siempre será el último."
         </div>
       </details>
     </div>
   </div>
   <div class="q">
     <label for="a1">Respuesta exacta (objeto + sustancia):</label>
     <input id="a1" placeholder="Ej.: BOTELLA CON VENENO" />
     <button onclick="check(1)">Comprobar y desbloquear Etapa 2</button>
	 <button class="btn-give-up" onclick="giveUp(1)">Me rindo</button>
     <div id="f1" class="hint">Pista: La víctima no bebía de la copa rota. El veneno no se ingirió, se absorbió. El arma es el objeto que la víctima siempre usaba, impregnado con la sustancia que solo un experto conocería.</div>
     <div id="m1" class="hint"></div>

   </div>
 </section>

 <section id="stage2" class="panel hidden">
   <h2>Etapa 2 · La Hora del Silencio</h2>
   <p><strong>Pregunta:</strong> ¿A qué hora exacta murió Alejandro Valtieri?</p>
   <div class="divider"></div>
   <div class="two">
     <div>
       <details open>
         <summary>Registro de llamadas del teléfono de la víctima</summary>
         <div class="doc">
- 21:10: Llamada entrante de "SOFÍA" (Duración: 1m 32s)
- 21:25: Llamada saliente a "ESCRIBANO GIMÉNEZ" (Duración: 8m 45s)
- 21:40: Llamada entrante de "FRANCO DÍAZ" (Duración: 0m 55s)
- 21:44: Llamada saliente a "MATEO" (No contestada)
- 21:45: Llamada entrante de "NÚMERO PRIVADO". La llamada se corta abruptamente a los 3 segundos. No hay más actividad.
         </div>
       </details>
       <details>
         <summary>Informe del sistema de riego automático</summary>
         <div class="doc">
El sistema de riego para los viñedos que rodean la casona principal está programado para activarse automáticamente todos los días a las <strong>21:45 hs</strong>. El ruido de las bombas y los aspersores es considerable y se puede oír claramente desde la cava, cuyo sistema de ventilación da a esa zona.
         </div>
       </details>
     </div>
     <div>
       <details open>
         <summary>Interrogatorios sobre la hora del crimen</summary>
         <div class="doc">
<strong>Mateo Valtieri:</strong> "Estuve en mi oficina en el ala oeste de la casa, revisando balances. A eso de las diez menos cuarto, mi padre me llamó, pero no llegué a atender. Supuse que era para discutir de nuevo. No lo vi en toda la noche."
<strong>Sofía Valtieri:</strong> "Lo llamé a las nueve y diez para decirle que no participaría de su cena-espectáculo. Discutimos, como siempre. Luego salí a caminar por los viñedos para pintar la luna. Volví a la casa pasada la medianoche."
<strong>Isabella Rossi:</strong> "Alejandro bajó a la cava a las nueve, como siempre. Yo me quedé en la biblioteca preparando mis cosas para un viaje. A las 22:00, extrañada porque no subía para la cena, bajé y la puerta estaba cerrada. Pensé que se había quedado dormido. No quise molestarlo."
<strong>Franco Díaz:</strong> "Lo llamé a menos veinte para confirmar la molienda de mañana. Parecía apurado. Me cortó rápido. Luego, cerca de las diez, fui a la sala de bombas para hacer un ajuste manual en el sistema de riego. Todo funcionaba con normalidad."
         </div>
       </tde-duro-que-yo-no-fui-el-culpable-del-asesinato-de-mi-padre-y-que-no-sabia-que-era-el-asesino">
       <details>
         <summary>Relato de un personal de seguridad</summary>
         <div class="doc">
"Vi a Don Alejandro a través de la ventana de la cava cerca de las 22:15 hs. Estaba sentado en su sillón, con la copa en la mano. Parecía dormido o muy concentrado. No le di importancia. Hago esa ronda todas las noches."
         </div>
       </details>
     </div>
   </div>
   <div class="q">
     <label for="a2">Respuesta exacta (hora de muerte en formato 24h):</label>
     <input id="a2" placeholder="Ej.: 22:30" />
     <button onclick="check(2)">Comprobar y desbloquear Etapa 3</button>
	 <button class="btn-give-up" onclick="giveUp(2)">Me rindo</button>
     <div id="f2" class="hint">Pista: La tecnología no miente. Un evento automático y ruidoso interrumpió la última comunicación de la víctima. Lo que el guardia vio después era una puesta en escena.</div>
     <div id="m2" class="hint"></div>
	 
   </div>
 </section>

 <section id="stage3" class="panel hidden">
   <h2>Etapa 3 · Legado de Sombras</h2>
   <p><strong>Pregunta:</strong> ¿Cuál fue el verdadero móvil del crimen?</p>
   <div class="divider"></div>
   <div class="grid">
     <div class="col-6">
       <details open>
         <summary>Testamento de Alejandro Valtieri (versión oficial)</summary>
         <div class="doc">
"...dejo el control total y la propiedad de Viña de las Sombras, incluyendo todas sus marcas y activos, a mi único hijo, Mateo Valtieri. A mi esposa, Isabella Rossi, le corresponde por ley el usufructo vitalicio de la casona principal y una pensión mensual sustancial. A mi hija, Sofía Valtieri, le reitero mi afecto, pero respeto su decisión de renunciar a su herencia, por lo que no figura en este reparto de bienes." (Fechado hace 5 años).
         </div>
       </details>
       <details>
         <summary>Estudio de Títulos de Propiedad (contratado por Valtieri)</summary>
         <div class="doc">
Informe histórico sobre la parcela "La Escondida", el corazón de los viñedos más antiguos de la finca. El estudio revela una irregularidad en la venta original de 1952. Las tierras parecen haber sido adquiridas de forma fraudulenta por el abuelo de Alejandro Valtieri a la familia Díaz. Legalmente, la propiedad de esa parcela podría ser disputada y revertida a los herederos legítimos: <strong>Franco Díaz</strong>.
         </div>
       </details>
     </div>
     <div class="col-6">
       <details open>
         <summary>Contenido del "Testamento Anexo" (sobre lacrado)</summary>
         <div class="doc">
"Enmienda a mi voluntad final: Habiendo descubierto una terrible injusticia cometida por mi familia, declaro mi intención de restituir la parcela 'La Escondida' a su legítimo dueño, Franco Díaz, como reparación histórica. Además, como un gesto de amor paternal que no supe dar en vida, lego a mi hija Sofía la totalidad de mis acciones personales en la empresa, dándole un asiento en el directorio y poder de decisión. Esta decisión anula y reemplaza cualquier disposición anterior sobre dichos activos. Mateo conservará la dirección ejecutiva, pero deberá gobernar en consenso." (Firmado y certificado ayer por la mañana).
         </div>
       </details>
       <details>
         <summary>Transcripción de conversación (grabada por Sofía en su móvil, ayer)</summary>
         <div class="doc">
<strong>Sofía:</strong> ¿Así que ahora quieres darme lo que me quitaste? ¿Justo cuando tus viñedos perfectos se asientan sobre tierra robada?
<strong>Alejandro:</strong> Hija, intento arreglar las cosas...
<strong>Sofía:</strong> ¡No! Intentas limpiar tu conciencia. Leí el informe del agrimensor que dejaste sobre tu escritorio. Vas a destruir a Franco, ¿no es así? Le darás la tierra, pero revelarás que su abuelo fue un peón que se dejó estafar, manchando su apellido para siempre. ¡Tu generosidad siempre es una forma de poder!
         </div>
       </details>
     </div>
   </div>
   <div class="q">
     <label for="a3">Respuesta exacta (móvil del crimen):</label>
     <input id="a3" placeholder="Ej.: VENGANZA / DINERO / ..." />
     <button onclick="check(3)">Comprobar y desbloquear Etapa 4</button>
	 <button class="btn-give-up" onclick="giveUp(3)">Me rindo</button>
     <div id="f3" class="hint">Pista: El móvil no es simplemente heredar la viña. Es algo más complejo relacionado con el honor familiar y lo que la "generosidad" de la víctima estaba a punto de destruir.</div>
     <div id="m3" class="hint"></div>
	 
   </div>
 </section>

 <section id="stage4" class="panel hidden">
   <h2>Etapa 4 · El Sabor de la Traición</h2>
   <p><strong>Pregunta final:</strong> ¿Quién es el asesino?</p>
   <div class="divider"></div>
   <div class="grid">
     <div class="col-6">
       <details open>
         <summary>Análisis del Laboratorio Químico de la Finca</summary>
         <div class="doc">
El compuesto organofosforado utilizado en el crimen es una variante experimental en la que Franco Díaz había estado trabajando. Su objetivo era crear un pesticida de "barrera", que se aplicara en superficies para evitar plagas, en lugar de rociarlo. El registro del laboratorio muestra que la última muestra de este compuesto fue retirada por Franco Díaz hace dos días para "pruebas de campo".
         </div>
       </details>
       <details>
         <summary>Análisis forense del catavinos de plata</summary>
         <div class="doc">
El interior del catavinos fue cubierto con una fina película del veneno. Se encontraron huellas dactilares parciales de Alejandro Valtieri en el exterior. En la base, sin embargo, hay una huella casi completa, superpuesta a las de la víctima, perteneciente a <strong>Franco Díaz</strong>. La huella fue dejada al presionar con fuerza el objeto sobre una superficie para impregnarlo.
         </div>
       </details>
     </div>
     <div class="col-6">
       <details open>
         <summary>Interrogatorio final a Franco Díaz</summary>
         <div class="doc">
<strong>— Sus huellas están en el arma homicida. El veneno es su creación. ¿Por qué, Franco? Él iba a devolverle sus tierras.</strong>
— Él no iba a devolverme nada. Iba a humillarme. Descubrí el anexo de su testamento.
<strong>— ¿Y decidió matarlo para quedarse con todo?</strong>
— (Ríe amargamente) No entienden. Mi abuelo no fue estafado. Él vendió esas tierras a los Valtieri para salvarnos de una deuda de honor. Fue un sacrificio. Don Alejandro, en su arrogancia, iba a "reparar" la historia, pintando a mi abuelo como un tonto o un cómplice y a él mismo como un santo. Iba a destruir el único legado que mi familia tenía: nuestro honor.
<strong>— ¿Y qué pasó esa noche?</strong>
— Fui a la cava a enfrentarlo. Le rogué que no lo hiciera. Se negó. Dijo que la verdad debía saberse, *su* verdad. Mientras discutíamos, preparó su catavinos para su estúpido ritual. En un momento de descuido, tomé el frasco que llevaba conmigo y lo impregné. Él no se dio cuenta. Lo dejé allí sabiendo lo que pasaría. Luego, para asegurar la coartada, bajé a la sala de bombas y adelanté el riego manualmente a las 21:45 para que coincidiera con la llamada que sabía que iba a recibir. Yo mismo llamé al guardia de seguridad con un teléfono anónimo para que mirara por la ventana y viera el "cuerpo dormido", que yo mismo acomodé. Lo único que no planeé fue la llamada de un número privado que lo interrumpió.
         </div>
       </details>
     </div>
   </div>
   <div class="q">
     <label for="a4">Respuesta exacta (nombre y apellido del culpable):</label>
     <input id="a4" placeholder="Ej.: NOMBRE APELLIDO" />
     <button onclick="check(4)">Comprobar y ver Conclusión</button>
	 <button class="btn-give-up" onclick="giveUp(4)">Me rindo</button>
     <div id="f4" class="hint">Pista: El asesino no es quien busca poder o dinero, sino quien intentaba proteger un legado intangible que la víctima estaba a punto de destruir con su propia versión de la verdad.</div>
     <div id="m4" class="hint"></div>
	 
   </div>
 </section>

 <section id="end" class="panel hidden">
   <h2>Conclusión del caso "El Último Malbec"</h2>
   <p>
     El método del asesinato fue una combinación de conocimiento íntimo y acceso. Se utilizó un <strong>pesticida organofosforado experimental</strong>, aplicado como una película invisible dentro del <strong>catavinos de plata</strong> personal de Alejandro Valtieri. Al realizar su cata ritual, la mucosa de su boca absorbió el veneno, causándole la muerte instantánea.
   </p>
   <p>
     La hora de la muerte fue precisamente las <strong>21:45 hs</strong>. Aunque el asesino intentó crear una línea de tiempo falsa, la interrupción de la última llamada de Valtieri coincidió exactamente con el momento en que el ruidoso sistema de riego fue activado, delatando el momento exacto del crimen.
   </p>
   <p>
     El móvil no fue la herencia ni las tierras en sí mismas, sino <strong>la defensa del honor familiar</strong>. Alejandro Valtieri planeaba restituir las tierras robadas a la familia Díaz, pero al hacerlo, iba a revelar una versión de la historia que humillaba al abuelo de Franco, presentándolo como un tonto estafado. Franco lo asesinó para impedir que esa "verdad" destructora saliera a la luz y manchara su apellido.
   </p>
   <p>
     El culpable es <strong>Franco Díaz</strong>. El leal enólogo, el hombre que conocía la tierra y sus secretos químicos mejor que nadie. Su creación fue el arma, su conocimiento de la finca le permitió manipular la escena y la hora, y su motivo, proteger el sacrificio de su abuelo, fue el motor del crimen. Un acto de lealtad familiar llevado al extremo más oscuro.
   </p>
   <p class="muted stamp">Fin · Imprime esta página si deseas jugarla en mesa. (Los campos de respuesta no aparecerán en impresión.)</p>
 </section>
`;