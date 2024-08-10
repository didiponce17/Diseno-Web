// Mapa de Bolsillo
document.getElementById("mapaBtn").addEventListener("click", function () {
  Swal.fire({
    title: "Mapa de Bolsillo",
    text: 'Haciendo clic en "Aceptar" abrirás el Mapa de Bolsillo en una nueva pestaña.',
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("pdf/articulo1.pdf", "_blank");
    }
  });
});

// Itinerario
document.getElementById("itinerarioBtn").addEventListener("click", function () {
  Swal.fire({
    title: "Itinerario",
    text: 'Haciendo clic en "Aceptar" abrirás el Itinerario en una nueva pestaña.',
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("pdf/articulo2.pdf", "_blank");
    }
  });
});

// Reserva Ahora
document.getElementById("reservaBtn").addEventListener("click", function () {
  const numPersonas = document.getElementById("numPersonas").value;
  const fechaLlegada = document.getElementById("fechaLlegada").value;
  const fechaSalida = document.getElementById("fechaSalida").value;

  if (!numPersonas || !fechaLlegada || !fechaSalida) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor, llena todos los campos antes de continuar.",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "¡Reservación realizada!",
      text: "Su reservación ha sido recibida.",
    });
  }
});
