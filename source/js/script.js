/* в этот файл добавляет скрипты*/
// Мобильное меню
const mainMenu = document.querySelector(".navbar__main-menu");
if (mainMenu) {
  mainMenu.classList.add("navbar__main-menu--close");

  function openCloseMenu() {
    const buttonMainMenu = document.querySelector(".navbar__button-main-menu");
    mainMenu.classList.toggle("navbar__main-menu--close");
    buttonMainMenu.classList.toggle("navbar__button-main-menu--close");
  }
}

// Слайдер
const slider = document.querySelector(".slider");
const sliderList = slider.querySelectorAll(".slider__item"); // Список слайдов

if (sliderList.length > 0) {
  // Проверка наличия слайдов
  const buttonDesktopList = slider.querySelectorAll(".slider__control-button");
  const bgColor = ["#f3ebe1", "#eae6fc", "#e5e6e8"]; // Цвета под изображение n-по порядку
  let count = 0; // Счетчик слайдеров

  function handlerSlider(event) {
    // Против часовой стрелки, нажата левая кнопка
    if (event.target.className === "slider__control-left") {
      if (count > 0 && count < sliderList.length) {
        sliderList[count].classList.toggle("slider__item--hide");
        sliderList[count - 1].classList.toggle("slider__item--hide");
        count--;
      } else {
        sliderList[count].classList.toggle("slider__item--hide");
        count = sliderList.length - 1;
        sliderList[count].classList.toggle("slider__item--hide");
      }
    }
    // По часовой стрелки, нажата правая кнопка
    if (event.target.className === "slider__control-right") {
      if (count < sliderList.length - 1) {
        sliderList[count].classList.toggle("slider__item--hide");
        sliderList[count + 1].classList.toggle("slider__item--hide");
        count++;
      } else {
        sliderList[count].classList.toggle("slider__item--hide");
        count = 0;
        sliderList[count].classList.toggle("slider__item--hide");
      }
    }
    // Замена основного фона
    slider.style.backgroundColor = bgColor[count];
  }

  // Добавил JS классы-идентификаторы с числом в конце строки
  buttonDesktopList.forEach((item, index) =>
    item.classList.add(`js-index-${index}`)
  );

  function handlerSliderDesktop(event) {
    const regex = /(\d+$){1,}/g;
    itemSlider = event.target.className.match(regex); // Забираю последнее число из класса как идентификатор для count

    sliderList[count].classList.toggle("slider__item--hide");
    sliderList[Number(itemSlider[0])].classList.toggle("slider__item--hide");
    count = Number(itemSlider[0]);
    // Замена основного фона
    slider.style.backgroundColor = bgColor[count];
  }
}
