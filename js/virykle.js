
//html duodam taga style - gali buti tuscias
//cia aprasom funkcija kuri keis spalvas random

function updateColors() {
    const styleDOM = document.querySelector('head > style');
    const randomColor = () => Math.floor(Math.random() * 256);
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();
    const CSS = `:root {
                        --color: rgb(${r}, ${g}, ${b});
                    }`;
    styleDOM.innerHTML = CSS;
}

//html piesimas
function virykle(size) {
    const DOM = document.getElementById('virykle');

    //<div class="skyle"></div> *4
    //<div class="jungiklis"></div> *4

    //galima 2 atskiru ciklus bet galim ir i viena - efektyviau
    let skylesHTML = '';
    let jungikliaiHTML = '';
    for (let i = 0; i < size; ++i) {
        skylesHTML += '<div class="skyle"></div>';
        jungikliaiHTML += '<div class="jungiklis"></div>';
    }

    const HTML = `<div class="top">${skylesHTML}</div>
        <div class="bottom">${jungikliaiHTML}</div>`;

    DOM.innerHTML = HTML;
    DOM.classList.add('virykle');


    //skyliu kiekio formatavimas
    const rowSize = Math.ceil(Math.sqrt(size));
    const viryklesWidth = rowSize * 100 + (rowSize + 1) * 10;
    DOM.style.width = viryklesWidth + 'px';
    //100 - kiekvienos skyles plotis 
    //10 tarpas tarp skyliu
    //n = rowsize-1 - kiek tarpu == vienas maziau nei skyliu kiekis
    //darom math sqr is skyliu kiekio tada math ceil - kad apvalintu i virsu



    //kvieciam tuos elementus kuriuos sukurem - ju nera html - skyles ir jungikliai
    const allSkylesDOM = DOM.querySelectorAll('.skyle');
    const allJungikliaiDOM = DOM.querySelectorAll('.jungiklis');
    // console.log(allSkylesDOM); tikrinam ar randa ka sukurem
    // console.log(allJungikliaiDOM); tikrinam ar randa ka sukurem

    //negalim eventListener pridet prie viso masyvo, kvieciam elementa masyvo ir tada pridedam - 

    // allJungikliaiDOM[0].addEventListener('click', () => {
    //     console.log('jungiam...');
    // })
    // allJungikliaiDOM[1].addEventListener('click', () => {
    //     console.log('jungiam...');
    // })
    // allJungikliaiDOM[2].addEventListener('click', () => {
    //     console.log('jungiam...');
    // })


    //vietoj to, kad kviesti kiekviena elementa sukuriam cikla
    //ciklas eina nurpdyta kieki kartu per individualius jungiklius ir kai and jungiklio 'click' prideda jam klase 'ijungta'
    for (let i = 0; i < size; ++i) {
        allJungikliaiDOM[i].addEventListener('click', () => {
            allJungikliaiDOM[i].classList.toggle('ijungta');
            allSkylesDOM[i].classList.toggle('ijungta');
            updateColors();
        })
    }
}

virykle(4);