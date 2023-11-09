// ==UserScript==
// @name         bcrypt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cripto.tiiny.site/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==

// ==/UserScript==

(function () {
  "use strict";
  // Tu código va aquí
  var paragraphs = document.querySelectorAll("p"); // Selecciona todos los elementos <p> en la página
  let key = "";

  paragraphs.forEach(function (p) {
    // Obtiene todas las letras mayúsculas del texto del párrafo y las concatena
    key += p.textContent.match(/[A-Z]/g).join("");
  });

  console.log("La contraseña es:", key);

  // Tu código va aquí
  var cipher = [];
  var divs = document.querySelectorAll('div[class^="M"]'); // Selecciona todos los divs cuya clase comience con 'M'.

  divs.forEach(function (div) {
    cipher.push(div.id); // Agrega el ID de cada div al array.
  });
  console.log(cipher);

  const parsedKey = CryptoJS.enc.Utf8.parse(key);

  function decryptStrings(encryptedStrings, _key) {
    return encryptedStrings.map((encryptedString) => {
      // Decode from Base64
      const decodedCipherText = CryptoJS.enc.Base64.parse(encryptedString);
      // Decrypt the ciphertext
      const decryptedData = CryptoJS.TripleDES.decrypt(
        { ciphertext: decodedCipherText },
        _key,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      // Return the decrypted string
      return decryptedData.toString(CryptoJS.enc.Utf8);
    });
  }
  // Decrypt all strings in the array
  const decryptedStrings = decryptStrings(cipher, parsedKey);
  // Output or use the decrypted strings
  console.log(decryptedStrings);

  // Flatten the array of decrypted strings and separate them by a space
  const decryptedText = decryptedStrings.join(" ");

  // Find the paragraph and replace its content with the decrypted text
  const paragraph = document.querySelector("p");
  if (paragraph) {
    paragraph.textContent = decryptedText;
  } else {
    console.error("No paragraph found to replace text");
  }
})();
