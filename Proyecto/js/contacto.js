document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (name && email && subject && message) {
      // Si todos los campos están completos
      Swal.fire({
        icon: "success",
        title: "Formulario enviado",
        text: "Tu mensaje ha sido enviado correctamente.",
      }).then((result) => {
        if (result.isConfirmed) {
          form.reset();
        }
      });
    } else {
      form.reset();
    }
  });
});
