
function showApiText()
{
    fetch('https://charbel-api.herokuapp.com/hi')
  .then(response => response.json())
  .then(data => {

    var myUl = document.getElementById("myul");

    for (var i=0; i< data.length; i++)
    {
     var myLi = document.createElement("li");
     myLi.innerHTML = data[i].ID + ': '+data[i].Name;
      myUl.appendChild(myLi);
    }
    console.log(data);
  });


}



