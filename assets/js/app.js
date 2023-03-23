let cl = console.log;
const countryContainer = document.getElementById("countryContainer");
const search = document.getElementById("search")
const nameBtn = document.getElementById("nameBtn")
const nameDecending = document.getElementById("nameDecending")
const capitalBtn = document.getElementById("capitalBtn")
const populationDecending = document.getElementById("populationDecending")
const capitalDecending = document.getElementById("capitalDecending")
const popilationDecending = document.getElementById("popilationDecending")
const countriesCount = document.getElementById("countriesCount")
const countriesCounts = document.getElementById("countriesCounts")
const populationBtn = document.getElementById("populationBtn")
const languageBtn = document.getElementById("languageBtn")
const populationChart = document.getElementById("populationChart")
const langChart = document.getElementById("langChart")



const temaplating = (arr)=>{
    let cardResult = ``
arr.forEach((obj) => {
    // cl(obj)
    cardResult += `
    <div class="card-size m-3">
    <div class="card shadow mb-2 bg-white rounded">
        <figure class="countryCard">
            <div class=" mx-auto img-card shadow p-1 mb-4 bg-white rounded col-8">
                <img src="${obj.flag}"
                    alt="">
            </div>
            <figcaption>
                <div class="country-detailes">
                    <h6 class="text-uppercase  mx-3 text-warning text-center"> ${obj.name}</h6>
                    <div class="country-data ml-3">
                        <span class="text-secondary"><strong> Capital:</strong> ${obj.capital}</span><br>
                        <span class="text-secondary"><strong> Languages:</strong> ${obj.languages}</span> <br>
                        <span class="text-secondary"><strong> Population:</strong> ${obj.population}</span>
                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
</div>
    `
})
countryContainer.innerHTML = cardResult;
}
temaplating(countries)

const onSearchHandler = (eve) => {
    let details = eve.target.value;
    // cl(details)
    let names = countries.filter(country => {
        return (country.name.toLowerCase().includes(details))
    });
    // names = countries.filter(cap => {
    //   return(cap.capital === details)
    // })

    cl(names.length)
    // cl(names)
    temaplating(names)
    countriesCount.classList.add("d-none")
    countriesCounts.innerHTML=`currently, we have ${names.length} countries.`
    
}

let flag = true;

function accending(){
  countries.sort((a, b) =>{
    if((a.name.toLowerCase() > b.name.toLowerCase())){
    return 1
    }else{
    return -1
    }
  })
}
    function decending(){
      countries.sort((a, b) =>{
        if((a.name.toLowerCase() < b.name.toLowerCase())){
        return 1
        }else{
        return -1
        }
      })
  }
  function onCapitalAccending(){
    countries.sort((a, b) =>{
      if((a.capital > b.capital)){
        return 1
        }else{
        return -1
        }
    }).flat()
}
function onCapitalDecending(){
    countries.sort((a, b) =>{
      if((a.capital < b.capital)){
        return 1
        }else{
        return -1
        }
    }).flat()
}

function onPopulationDecending(){
    countries.sort((n1, n2) => n2.population - n1.population)
    cl(countries)
    
}
function onPopulationAccending(){
  countries.sort((n1, n2) => n1.population - n2.population)
  cl(countries)
  
}

const onNameBtnDcending = (eve) => {
  if(flag === true){
    decending()
    flag = false
  }else{
    accending()
    flag = true
  }
    temaplating(countries)
    nameDecending.classList.toggle("d-none")

}

const onCapitalBtnDcending = (eve) =>{
  if(flag === true){
    onCapitalDecending()
    flag = false
  }else{
    onCapitalAccending()
    flag = true
  }
 
    temaplating(countries)
    capitalDecending.classList.toggle("d-none")
}

const onPopulationBtnDcending = (eve) =>{
    if(flag === true){
      onPopulationDecending()
      flag = false
    }else{
      onPopulationAccending()
      flag = true
    }
    temaplating(countries)
    popilationDecending.classList.toggle("d-none")
}

const onPopulationBtn = (eve) =>{
    langChart.classList.add("d-none")
    populationChart.classList.remove("d-none")
}
const onLanguageBtn = (eve) =>{
  populationChart.classList.add("d-none")
  langChart.classList.remove("d-none")
}


search.addEventListener("keyup", onSearchHandler)
nameBtn.addEventListener("click", onNameBtnDcending)
capitalBtn.addEventListener("click", onCapitalBtnDcending)
populationDecending.addEventListener("click", onPopulationBtnDcending)
populationBtn.addEventListener("click", onPopulationBtn)
languageBtn.addEventListener("click", onLanguageBtn)