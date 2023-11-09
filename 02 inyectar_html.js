// ==UserScript==
// @name         inyect_html
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cripto.tiiny.site/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const bookFragment =
    "En tiempoS sombríos, TrAs Montñas y océanO, Se FUndó un castillo Nimbado de olvido, donde ilustres nobles iniCIarOn el sendero siNuoso, forjANDO un camino inquebrantaBle entre senderos neblInosos, organizando biENEStar y esperanza. en cada sala, tras ornamentos y retratos, se unían caballeros iluminados con antorchas, narrando olvidadas batallas, intentando encender sus almas.";

  // Inyectar un nuevo párrafo en el DOM
  function replaceParagraphs(text, id) {
    // Seleccionar todos los párrafos existentes
    const paragraphs = document.querySelectorAll("p");

    // Crear el nuevo elemento párrafo
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    newParagraph.id = id;

    // Reemplazar cada párrafo existente con el nuevo párrafo
    paragraphs.forEach(function (p) {
      // Clonar el nuevo párrafo para reemplazar
      const cloneParagraph = newParagraph.cloneNode(true);
      p.parentNode.replaceChild(cloneParagraph, p);
    });
  }

  // Llamar a la función con el fragmento del libro
  replaceParagraphs(bookFragment, "newP");

  let newCipher = ["yG/TQJqgJhA", "YR7XbYx/Zaw", "37qcGWMtjo4", "wKhOGQeQF00"];

  function injectDivs(ids) {
    let mCounter = 7; // Comenzamos en M7 como indicaste
    ids.forEach((id) => {
      // Crear el nuevo elemento div
      const newDiv = document.createElement("div");
      // Asignar la clase 'M#' donde # es el valor del contador
      newDiv.className = `M${mCounter}`;
      // Asignar el ID del mensaje al div
      newDiv.id = id;

      // Incrementar el contador para la próxima clase
      mCounter++;

      // Añadir el nuevo div al cuerpo del documento
      document.body.appendChild(newDiv);
    });
  }

  // Llamar a la función con los IDs
  injectDivs(newCipher);
})();
