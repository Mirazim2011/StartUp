const elBorderBottom1 = document.querySelector(".site-header__item-link1");
const elBorderBottom2 = document.querySelector(".site-header__item-link2");
const elBorderBottom3 = document.querySelector(".site-header__item-link3");
const elBorderBottom4 = document.querySelector(".site-header__item-link4");

elBorderBottom1.onclick = () => {
  elBorderBottom1.style.borderBottom = "3px solid #fff";
  elBorderBottom2.style.borderBottom = "none";
  elBorderBottom3.style.borderBottom = "none";
  elBorderBottom4.style.borderBottom = "none";
};
elBorderBottom2.onclick = () => {
  elBorderBottom2.style.borderBottom = "3px solid #fff";
  elBorderBottom1.style.borderBottom = "none";
  elBorderBottom3.style.borderBottom = "none";
  elBorderBottom4.style.borderBottom = "none";
};
elBorderBottom3.onclick = () => {
  elBorderBottom3.style.borderBottom = "3px solid #fff";
  elBorderBottom2.style.borderBottom = "none";
  elBorderBottom1.style.borderBottom = "none";
  elBorderBottom4.style.borderBottom = "none";
};
elBorderBottom4.onclick = () => {
  elBorderBottom4.style.borderBottom = "3px solid #fff";
  elBorderBottom2.style.borderBottom = "none";
  elBorderBottom3.style.borderBottom = "none";
  elBorderBottom1.style.borderBottom = "none";
};