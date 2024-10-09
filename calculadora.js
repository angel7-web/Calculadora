const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

/////////////variable para almacenar numeros en memoria
let memoria = 0;

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    ///////////////////////////para limpiar pantalla
    if (boton.id === "C") {
      pantalla.textContent = "0";
      return;
    }

    ////////////////////////para borrar ultimo numero
    if (boton === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    // Función MC
    if (boton.id === "MC") {
      memoria = 0; // Limpiar memoria
      return;
    }

    // Función MR
    if (boton.id === "MR") {
      pantalla.textContent = memoria; // Mostrar el valor en memoria
      return;
    }

    // Función M+
    if (boton.id === "Mplus") {
      memoria += parseFloat(pantalla.textContent); // Sumar el valor actual a la memoria
      return;
    }

    // Función M-
    if (boton.id === "Mminus") {
      memoria -= parseFloat(pantalla.textContent); // Restar el valor actual de la memoria
      return;
    }

    ////////////////////////// Mostrar el símbolo de raíz cuadrada
    if (boton.id === "raiz") {
      if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
        pantalla.textContent = "√";
      } else {
        pantalla.textContent += "√";
      }
      return;
    }

    // Añadir el símbolo de recíproco (1/x)
    if (boton.id === "reciproco") {
      pantalla.textContent += "1/"; // Agrega el símbolo '1/' a la pantalla
      return;
    }

    // Calcular resultado al presionar el botón "igual"
    if (boton.id === "igual") {
      try {
        // Verificar si hay una operación de recíproco
        if (pantalla.textContent.startsWith("1/")) {
          const numeroReciproco = pantalla.textContent.split("/")[1];
          const resultadoReciproco = 1 / parseFloat(numeroReciproco);
          pantalla.textContent = isNaN(resultadoReciproco)
            ? "Error!"
            : resultadoReciproco;
        } else if (pantalla.textContent.includes("√")) {
          const numeroRaiz = pantalla.textContent.split("√")[1];
          const resultadoRaiz = Math.sqrt(parseFloat(numeroRaiz));
          pantalla.textContent = isNaN(resultadoRaiz)
            ? "Error!"
            : resultadoRaiz;
        } else {
          pantalla.textContent = eval(pantalla.textContent);
        }
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    /////////////////////////////////////////////para concatenar
    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
