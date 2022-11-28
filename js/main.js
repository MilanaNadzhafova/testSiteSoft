/**
 * Функция при нажатии на бургер и в целом для него
 */
document.querySelector(".header__burger").onclick = function () {
  document.querySelector(".header__burger").classList.toggle("active");
  document.querySelector(".header__menu").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
};

/**
 * настройка комбобокса (убираем поиск)
 */
const systemType = new Choices(document.querySelector("#system-type"), {
  searchEnabled: false,
});

/**
 *
 * @param {object} this параметр текущей ссылки
 *
 * функция для добавления модификатора active при нажатии на пункт меню + анимация
 */
function addActiveClass(item) {
  $(".header__link").removeClass("header__link_active");
  $(item).addClass("header__link_active");
  elementClick = $(item).attr("href");
  // вычитаем высоту «шапки»
  destination = $(elementClick).offset.top - 145;
  if (
    navigator.userAgent.indexOf("Chrome") ||
    navigator.userAgent.indexOf("Safari")
  )
    $("body").animate({ scrollTop: destination }, 1100);
  else $("html").animate({ scrollTop: destination }, 1100);
}
