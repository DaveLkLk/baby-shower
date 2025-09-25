console.log("hola amorcito");

const fechaObjetivo = new Date("2025-09-27T19:00:00").getTime();

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      document.getElementById("dias").innerText = "0";
      document.getElementById("horas").innerText = "0";
      document.getElementById("minutos").innerText = "0";
      document.getElementById("segundos").innerText = "0";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
  }
  const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
  actualizarCuentaRegresiva();

  const btn = document.getElementById("music");
  const audio = document.getElementById("bg-music");
  const modalClose = document.getElementById("modal-close");
  const modal = document.getElementById("modal");
  const modalConfirmar = document.getElementById("modal-confirmar");

    audio.muted = true;

    btn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        btn.classList.toggle("active");
    });

    const btnShop = document.getElementById("shopp");
    btnShop.addEventListener("click", () => {
        window.open('https://www.thingstogetme.com/1787507aac228', '_blank');
    });

    document.addEventListener("DOMContentLoaded", () => {
      modal.classList.add("active");
    });
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
        audio.muted = false;
        btn.classList.add("active");
    });
    modalConfirmar.addEventListener("click", () => {
        modal.classList.remove("active");
        audio.muted = false;
        btn.classList.add("active");
    })