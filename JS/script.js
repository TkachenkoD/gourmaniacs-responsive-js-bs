window.onload = function(){

var popupWindow = new Popup({targetedNode:document.querySelector('#portfolio')});
var listOfShops = new ListShop({
  title: "Наши магазины",
  kyiv: ["В Киеве: Контрактовая площадь, 1",
                  " Хрещатик, 2"],
  lviv: ["Во Львове: Площадь Рынок, 1",
                  " Городоцкого, 2"],
odessa: ["В Одессе: Площадь Моряков, 11",
            " Бульвар Морской, 21"],
dnipro: ["В Днепре: ул. Верхняя, 11",
          "Центральная, 2"]
});
//
 var shopDiv = document.querySelector('#shops');
shopDiv.appendChild(listOfShops.pasteDiv());
// document.body.appendChild(listOfShops.pasteDiv());


}
