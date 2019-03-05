var x = location.hostname;

if(x.match(
()
  'mysite',
)){}


const arrayOfHostNames = [ "(.*\.)?tsn\.ua", "(.*\.)?112\.ua",  "(.*\.)?unian\.(ua|net)"] ;

  for (var i = 0; i < arrayOfHostNames.length; i++){
    if (!!location.hostname.match(arrayOfHostNames[i])) {whoIsWho(arrayOfHostNames[i]); break;}
  }

    function whoIsWho(options){
      //data
      var content = {
        ["(.*\.)?tsn\.ua"] : {
         name: "Коломойский",
          img: "<img src='./IMG/kolmoiskiy.jpg '>",
          descpiption: "owner of 1+1 media group......"
      },
      ["(.*\.)?112\.ua"] : {
       name: "Mededchuk",
        img: "<img src='./IMG/medevedchuk.jpg '>",
        descpiption: "owner of 112 group......"
        },
      };
      if(!options)return;
      renderDiv(options);
    //render
      var newDiv; // div for a popup window
      function renderDiv(atr){
        newDiv = document.createElement('div');

        newDiv.classList.add('popup');// if need style.css))
        newDiv.innerHTML += '<h3>' + content[atr]['name'] + '</h3>';
        newDiv.innerHTML += '<p>' +content[atr]['img']+ '</p>';
        newDiv.innerHTML += '<p>' + content[atr]['descpiption'] + '</p>';
          newDiv.style.cssText="color: red; position: fixed;  top: 60px;  left: 20px;  z-index: 10000;  width: 140px;  height: 170px; opacity: 50%; background: black; border: 5px solid green; "
        document.body.appendChild(newDiv);

        newDiv.addEventListener('click', function(){
          document.body.removeChild(newDiv);
          // if you need to close popup

        })
      };
    }
