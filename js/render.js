const kebabai = [
    // {
    //     size: 'didelis/mazas',
    //     main: 'jautiena/vistiena',
    //     sauce: 'cesnakinis/mix/pikantiskas',
    // },
    {
        size: 'didelis',
        main: 'jautiena',
        sauce: 'cesnakinis',
    },
    {
        size: 'mazas',
        main: 'vistiena',
        sauce: 'mix',
    },
    {
        size: 'mazas',
        main: 'nesvarbu',
        sauce: 'pikantiskas',
    },
];

//pirma raide didele - paimam stringo [0] dedam uppercase ir darom slice(1) - praskipinam viena raide
function formatWord(str) {
    const up = str[0].toUpperCase() + str.slice(1);
    return up;
}
//arrow nes tik vienas statement
// const formatWord = s => s[0].toUpperCase() + s.slice(1);

let HTML = '';


//konstruojam html rezultata - galim norima elementa ideti i span ir jau cia js-e pridedam jam class - siuo atveju raudonos raides 'sauce'
for (const kebabas of kebabai) {
    HTML += `<li>${formatWord(kebabas.size)} su ${kebabas.main} ir <span class="red">${kebabas.sauce}</span></li>`;
}

const kebabaiDOM = document.querySelector('#kebabai > ul');

//gimdymas rezultato
kebabaiDOM.innerHTML = HTML;


//kreipiames i teva ne i visa document todel galim pasirinkt konkreciai ==li==
const liDOM = kebabaiDOM.querySelectorAll('li');
console.log(liDOM);

for (const singleKebebasDOM of liDOM) {
    singleKebebasDOM.classList.add('big');
}
