function Popup(options){
  var content = {
    curd1:{
      title1: "Fresh Lemon Curd",
      article1: "<img src='./IMG/curd3.jpg '>",
      descpiption: "Деликатесный заварной крем из лимонов. Его подают как самостоятельный десерт или используют в качестве начинки для пирогов. Лимонный курд очень густой и нежный, с приятной бархатистой текстурой и кисло-сладким вкусом."
  },
    salt1:{
      title1: "Кулинарная соль",
      article1: "<img src='./IMG/spice2.jpg '>",
      descpiption: "Соль с частицами специй, трав, обладающие специфическим, в той или иной мере устойчивым ароматом и вкусом, традиционно добавляемые в пищу в малых дозах, в основном, с целью улучшения вкусовых качеств продуктов"
  },
    salt2:{
      title1: "Grapefruit Curd",
      article1: "<img src='./IMG/curdBig.jpg '>",
      descpiption: "Плоды грейпфрута схожи с плодами апельсина, но их мякоть кислее и с привкусом горечи. Курд изготавливают из сока. Эфирные масла грейпфрута используют в кондитерском и ликеро-водочном производстве, а также в парфюмерии для изготовления разнообразных одеколонов и туалетных вод"
  },
    salt3:{
      title1: "Biltong - вяленое мясо",
      article1: "<img src='./IMG/biltongDecor.jpg '>",
      descpiption: "Южноафриканская разновидность вяленого мяса. Производится из филе говядины, но встречается и из других сортов мяса: дичи, страусятины, антилопы, буйвола. Маринуется в уксусе, в смеси соли, коричневого сахара, кориандра, чёрного перца, после чего сушится в специальных помещениях"
  }
  };

  var newDiv; // div for a popup window

  var htmlEl = options.targetedNode;
  htmlEl.addEventListener('click', setListner);

  function setListner(event){
    var clickedDiv = event.target;
    var dI = clickedDiv.getAttribute('data-item');
    if(!dI)return;
    renderDiv(dI);
  }

  function renderDiv(atr){
    newDiv = document.createElement('div');
    var newDiv2 = document.createElement('div');
    var btn = document.createElement('button');

    // var newP = document.createElement('p');
    newDiv.classList.add('popup');
    newDiv2.classList.add('popup-inner');
    newDiv2.innerHTML += '<h3>' + content[atr]['title1'] + '</h3>';
    newDiv2.innerHTML += '<p>' +content[atr]['article1']+ '</p>';
    newDiv2.innerHTML += '<p>' + content[atr]['descpiption'] + '</p>';
    btn.classList.add('btn-order');
    btn.innerHTML = "<a href=https://react-gourmaniacs-store.netlify.com>" + "СДЕЛАТЬ ЗАКАЗ" + "</a>" ;
    // htmlEl.appendChild(newDiv);
    document.body.appendChild(newDiv);
    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(btn);
    newDiv.addEventListener('click', function(){
      document.body.removeChild(newDiv);
    })
  };
}
