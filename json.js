// плавный скролл к секции
function scrollToSection(id) {
  var section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// отправка формы (без сервера)
var bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Заявка отправлена. Администратор свяжется с вами.");
    bookingForm.reset();
  });
}
