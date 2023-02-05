let cl = console.log;


let countryData = document.getElementById("countryData");
const btnSortName = document.getElementById('btnSortName');
const btnSortCapital = document.getElementById('btnSortCapital');
const btnSortPopulation = document.getElementById('btnSortPopulation');
const searchBox = document.getElementById('searchBox');
const arrowForName = document.getElementById('arrowForName');
const arrowForCap = document.getElementById('arrowForCap');
const arrowForPop = document.getElementById('arrowForPop');

let setorder = 'desc';
let test = 'hard';
let flag = 'true';

listOfCountries(countries)

const onSortClick = (eve) => {
    if (setorder === 'asc') {
        countries.sort((countryA, countryB) => {
            if (countryA.name.toLowerCase() < countryB.name.toLowerCase()) return -1;
            if (countryA.name.toLowerCase() > countryB.name.toLowerCase()) return 1;
            return 0;
        });
        setorder = 'desc';
    } else {
        countries.sort((countryA, countryB) => {
            if (countryB.name.toLowerCase() < countryA.name.toLowerCase()) return -1;
            if (countryB.name.toLowerCase() > countryA.name.toLowerCase()) return 1;
            return 0;
        });
        setorder = 'asc';
    }
    toggleArrowForName();
    listOfCountries(countries);
};
const onCapitalClick = (eve) => {
    if (flag === 'true') {
        countries.sort((countryA, countryB) => {
            if (countryA.capital < countryB.capital) return -1;
            if (countryA.capital > countryB.capital) return 1;
            return 0;
        });
        flag = 'false';
    } else {
        countries.sort((countryA, countryB) => {
            if (countryB.capital < countryA.capital) return -1;
            if (countryB.capital > countryA.capital) return 1;
            return 0;
        });
        flag = 'true';
    }
    toggleArrowForCap();
    listOfCountries(countries);
};

const onPopulationClick = (eve) => {
    if (test === 'hard') {
        countries.sort((countryA, countryB) => {
            if (countryA.population < countryB.population) return -1;
            if (countryA.population > countryB.population) return 1;
            return 0;
        });
        test = 'easy';
    } else {
        countries.sort((countryA, countryB) => {
            if (countryB.population < countryA.population) return -1;
            if (countryB.population > countryA.population) return 1;
            return 0;
        });
        test = 'hard';
    }
    toggleArrowForPop();
    listOfCountries(countries);
};

const onTypeSearch = (eve) => {
    if (!eve.target.value) return;
    let newArray = countries.filter((country) => {
        if (country.capital == undefined) return;
        if (country.languages == undefined) return;
        let languages = country.languages.join(" ");
        return (
            country.name.toLowerCase().includes(eve.target.value.toLowerCase()) ||
            country.capital.toLowerCase().includes(eve.target.value.toLowerCase())||
            languages.toLowerCase().includes(eve.target.value.toLowerCase())
            );
    });
    listOfCountries(newArray);
};


function listOfCountries(arr) {
    let result = "";
    arr.forEach(function (country) {
        result += `<div class="col-lg-3 col-md-6 col-xs-12">
        <div class="card mb-3">
        <figure class="countryCard">
            <img src="${country.flag}" class="img-fluid" alt="${country.name} Flag">
            <figcaption class="countryDetails m-4">
                <h3 class="text-center countryName">${country.name}</h3>
                <p>
                    <strong>Capital</strong>: ${country.capital} <br>
                    <strong>Language</strong>: ${country.languages} <br>
                    <strong>Population</strong>: ${country.population}
                </p>
            </figcaption>
        </figure>
       </div>
       </div>`
    })
    countryData.innerHTML = result;
}

function toggleArrowForName() {
    arrowForName.classList.toggle('fa-arrow-up-z-a')
    arrowForName.classList.toggle('fa-arrow-down-a-z')
}
function toggleArrowForCap() {
    arrowForCap.classList.toggle('fa-arrow-up-z-a')
    arrowForCap.classList.toggle('fa-arrow-down-a-z')
}
function toggleArrowForPop() {
    arrowForPop.classList.toggle('fa-arrow-up-wide-short')
    arrowForPop.classList.toggle('fa-arrow-up-short-wide')
}

btnSortName.addEventListener('click', onSortClick)
btnSortCapital.addEventListener('click', onCapitalClick)
btnSortPopulation.addEventListener('click', onPopulationClick)
searchBox.addEventListener('input', onTypeSearch)
