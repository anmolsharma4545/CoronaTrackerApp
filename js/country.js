
let newc = document.querySelector('#newc');
let newr = document.querySelector('#newr');
let newd = document.querySelector('#newd');
let totalc = document.querySelector('#totalc');
let totalr = document.querySelector('#totalr');
let totald = document.querySelector('#totald');
const btn = document.querySelector('.submit');

window.addEventListener('DOMContentLoaded', () =>{
    alert(' Enter Country name in Camel-case Only (First letter Big).');
})
btn.onclick = function(){
var api = 'https://api.covid19api.com/summary' ;


fetch(api)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        var inputValue = document.getElementById("myInput").value;
        // Filtering Data //
        const newData = data.Countries.filter(item =>{
            return item.Country == `${inputValue}`;
        })
       
    let newConfirmed = newData[0].NewConfirmed;
    let newRecovered = newData[0].NewRecovered;
    let newDeaths = newData[0].NewDeaths;
    let totalConfirmed = newData[0].TotalConfirmed;
    let totalRecovered = newData[0].TotalRecovered;
    let totalDeaths = newData[0].TotalDeaths;
     newc.innerHTML = newConfirmed;
    newr.textContent = newRecovered;
    newd.textContent = newDeaths;
    totalc.textContent = totalConfirmed;
    totalr.textContent = totalRecovered;
    totald.textContent = totalDeaths;
    

    
    });
}


