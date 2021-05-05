let newc = document.querySelector('#newc');
let newr = document.querySelector('#newr');
let newd = document.querySelector('#newd');
let totalc = document.querySelector('#totalc');
let totalr = document.querySelector('#totalr');
let totald = document.querySelector('#totald');
const btn = document.querySelector('.btn');


window.onload = function(){
var api = 'https://api.covid19api.com/summary' ;

fetch(api)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
    let newConfirmed = data.Global.NewConfirmed;
    let newRecovered = data.Global.NewRecovered;
    let newDeaths = data.Global.NewDeaths;
    let totalConfirmed = data.Global.TotalConfirmed;
    let totalRecovered = data.Global.TotalRecovered;
    let totalDeaths = data.Global.TotalDeaths; 

    newc.innerHTML = newConfirmed;
    newr.textContent = newRecovered;
    newd.textContent = newDeaths;
    totalc.textContent = totalConfirmed;
    totalr.textContent = totalRecovered;
    totald.textContent = totalDeaths;
    });
}


