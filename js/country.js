var countrylist = [
    {
        country: "India"
    }
]


let newc = document.querySelector('#newc');
let newr = document.querySelector('#newr');
let newd = document.querySelector('#newd');
let totalc = document.querySelector('#totalc');
let totalr = document.querySelector('#totalr');
let totald = document.querySelector('#totald');
const btn = document.querySelector('.submit');



btn.onclick = function(){
var api = 'https://api.covid19api.com/summary' ;


fetch(api)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        var inputValue = document.getElementById("myInput").value.toLowerCase();
        console.log(inputValue);
        let  i;
        let newData;
       for(i=0;i<data.Countries.length;i++){
             newData =  data.Countries[i];

           // Multiple If- Conditions.....
           if(inputValue == "afghanistan"){
               newData = data.Countries[0];
           }
           if(inputValue == "argentina"){
            newData = data.Countries[6];
        }
        if(inputValue == "australia"){
            newData = data.Countries[8];
        }
        if(inputValue == "austria"){
            newData = data.Countries[9];
        }
        if(inputValue == "bahrain"){
            newData = data.Countries[12];
        }
        if(inputValue == "bangladesh"){
            newData = data.Countries[13];
        }
        if(inputValue == "barbados"){
            newData = data.Countries[14];
        }
        if(inputValue == "belarus"){
            newData = data.Countries[15];
        }
        if(inputValue == "belgium"){
            newData = data.Countries[16];
        }
        if(inputValue == "bhutan"){
            newData = data.Countries[19];
        }
        if(inputValue == "brazil"){
            newData = data.Countries[23];
        }
        if(inputValue == "bulgaria"){
            newData = data.Countries[25];
        }
        if(inputValue == "combodia"){
            newData = data.Countries[28];
        }
        if(inputValue == "canada"){
            newData = data.Countries[30];
        }
        if(inputValue == "chile"){
            newData = data.Countries[34];
        }
        if(inputValue == "china"){
            newData = data.Countries[35];
        }
        if(inputValue == "colombia"){
            newData = data.Countries[36];
        }
        if(inputValue == "costa rica"){
            newData = data.Countries[40];
        }
        if(inputValue == "cuba"){
            newData = data.Countries[42];
        }
        if(inputValue == "czech republic"){
            newData = data.Countries[44];
        }
        if(inputValue == "denmark"){
            newData = data.Countries[46];
        }
        if(inputValue == "egypt"){
            newData = data.Countries[51];
        }
        if(inputValue == "fiji"){
            newData = data.Countries[57];
        }
        if(inputValue == "finland"){
            newData = data.Countries[58];
        }
        if(inputValue == "france"){
            newData = data.Countries[59];
        }
        if(inputValue == "georgia"){
            newData = data.Countries[62];
        }
        if(inputValue == "germany"){
            newData = data.Countries[63];
        }
        if(inputValue == "ghana"){
            newData = data.Countries[64];
        }
        if(inputValue == "greece"){
            newData = data.Countries[65];
        }
        if(inputValue == "Guatemala"){
            newData = data.Countries[67];
        }
        if(inputValue == "guyana"){
            newData = data.Countries[70];
        }
        if(inputValue == "haiti"){
            newData = data.Countries[71];
        }
        if(inputValue == "hungary"){
            newData = data.Countries[74];
        }
        if(inputValue == "iceland"){
            newData = data.Countries[75];
        }
        if(inputValue == "india"){
            newData = data.Countries[76];
        }
        if(inputValue == "indonesia"){
            newData = data.Countries[77];
        }
        if(inputValue == "iran"){
            newData = data.Countries[78];
        }
        if(inputValue == "iraq"){
            newData = data.Countries[79];
        }
        if(inputValue == "ireland"){
            newData = data.Countries[80];
        }
        if(inputValue == "israel"){
            newData = data.Countries[81];
        }
        if(inputValue == "italy"){
            newData = data.Countries[82];
        }
        if(inputValue == "jamaica"){
            newData = data.Countries[83];
        }
        if(inputValue == "japan"){
            newData = data.Countries[84];
        }
        if(inputValue == "jordan"){
            newData = data.Countries[85];
        }
        if(inputValue == "kazakhstan"){
            newData = data.Countries[86];
        }
        if(inputValue == "kenya"){
            newData = data.Countries[87];
        }
        if(inputValue == "south korea"){
            newData = data.Countries[88];
        }
        if(inputValue == "kuwait"){
            newData = data.Countries[89];
        }
        if(inputValue == "lebanon"){
            newData = data.Countries[93];
        }
        if(inputValue == "luxembourg"){
            newData = data.Countries[99];
        }
        if(inputValue == "madagascar"){
            newData = data.Countries[101];
        }
        if(inputValue == "malaysia"){
            newData = data.Countries[103];
        }
        if(inputValue == "maldives"){
            newData = data.Countries[104];
        }
        if(inputValue == "mauritius"){
            newData = data.Countries[109];
        }
        if(inputValue == "mexico"){
            newData = data.Countries[110];
        }
        if(inputValue == "morocco"){
            newData = data.Countries[116];
        }
        if(inputValue == "myanmar"){
            newData = data.Countries[118];
        }
        if(inputValue == "namibia"){
            newData = data.Countries[119];
        }
        if(inputValue == "nepal"){
            newData = data.Countries[120];
        }
        if(inputValue == "netherlands"){
            newData = data.Countries[121];
        }
        if(inputValue == "new zealand"){
            newData = data.Countries[122];
        }
        if(inputValue == "nigeria"){
            newData = data.Countries[125];
        }
        if(inputValue == "norway"){
            newData = data.Countries[126];
        }
        if(inputValue == "oman"){
            newData = data.Countries[127];
        }
        if(inputValue == "pakistan"){
            newData = data.Countries[128];
        }
        if(inputValue == "panama"){
            newData = data.Countries[130];
        }
        if(inputValue == "peru"){
            newData = data.Countries[133];
        }
        if(inputValue == "philippines"){
            newData = data.Countries[134];
        }
        if(inputValue == "poland"){
            newData = data.Countries[135];
        }
        if(inputValue == "portugal"){
            newData = data.Countries[136];
        }
        if(inputValue == "qatar"){
            newData = data.Countries[137];
        }
        if(inputValue == "romania"){
            newData = data.Countries[139];
        }
        if(inputValue == "russia"){
            newData = data.Countries[140];
        }
        if(inputValue == "saudi arabia"){
            newData = data.Countries[148];
        }
        if(inputValue == "singapore"){
            newData = data.Countries[153];
        }
        if(inputValue == "south africa"){
            newData = data.Countries[158];
        }
        if(inputValue == "spain"){
            newData = data.Countries[160];
        }
        if(inputValue == "sri lanka"){
            newData = data.Countries[161];
        }

        if(inputValue == "sweden"){
            newData = data.Countries[165];
        }
        if(inputValue == "switzerland"){
            newData = data.Countries[166];
        }
        if(inputValue == "taiwan"){
            newData = data.Countries[168];
        }
        if(inputValue == "thailand"){
            newData = data.Countries[171];
        }
        if(inputValue == "turkey"){
            newData = data.Countries[176];
        }
        if(inputValue == "ukraine"){
            newData = data.Countries[178];
        }
        if(inputValue == "uae"){
            newData = data.Countries[179];
        }
        if(inputValue == "uk"){
            newData = data.Countries[180];
        }
        if(inputValue == "usa"){
            newData = data.Countries[181];
        }
        if(inputValue == "vietnam"){
            newData = data.Countries[186];
        }

       }   
       
    
         let newConfirmed = newData.NewConfirmed;
    let newRecovered = newData.NewRecovered;
    let newDeaths = newData.NewDeaths;
    let totalConfirmed = newData.TotalConfirmed;
    let totalRecovered = newData.TotalRecovered;
    let totalDeaths = newData.TotalDeaths;
     newc.innerHTML = newConfirmed;
    newr.textContent = newRecovered;
    newd.textContent = newDeaths;
    totalc.textContent = totalConfirmed;
    totalr.textContent = totalRecovered;
    totald.textContent = totalDeaths;
    

    
    });
}


