console.log("hola amorcito");

const fechaObjetivo = new Date("2025-09-20T19:00:00").getTime();

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      // Si ya pasó la fecha
      document.getElementById("dias").innerText = "0";
      document.getElementById("horas").innerText = "0";
      document.getElementById("minutos").innerText = "0";
      document.getElementById("segundos").innerText = "0";
      clearInterval(intervalo);
      return;
    }

    // Cálculos de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar en el DOM
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
  }

  // Actualiza cada segundo
  const intervalo = setInterval(actualizarCuentaRegresiva, 1000);

  // Llamada inicial
  actualizarCuentaRegresiva();