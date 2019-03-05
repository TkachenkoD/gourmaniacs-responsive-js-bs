function ListShop(options){
  var containerDiv; //div for btn(List of Shops)
  var containerP; // p for list of shops(goes from obj in script.js)

function pasteDiv(){
  if(!containerDiv)
    // render();
    renderButton();
    return containerDiv;
}

function renderButton(){
  containerDiv  = document.createElement('div');
  var btnShop = document.createElement('span');
  btnShop.textContent = options.title;
  containerDiv.appendChild(btnShop);
  btnShop.addEventListener('click', toggleFunc);
  // it has to start toggleFunc
}

function toggleFunc(){
  //it toggles - open?close functions
  if(containerDiv.classList.contains("hide"))
    closeList();
  else
    openList();
}

function openList(){
  if(!document.querySelector("#listP")){
    render();
  }else{
    containerDiv.classList.add('hide');
  }
}

function closeList(){
  containerDiv.classList.remove('hide');
}

function render(){
 containerP  = document.createElement('p');
 containerP.setAttribute("id", "listP");
 containerP.innerHTML += '<p>'+ options.kyiv + '</p>';
 containerP.innerHTML +=  '<p>'+ options.lviv + '</p>';
 containerP.innerHTML +=  '<p>'+ options.odessa + '</p>';
 containerP.innerHTML +=  '<p>'+ options.dnipro + '</p>';
 containerDiv.appendChild(containerP);
}

  this.pasteDiv = pasteDiv;
};
