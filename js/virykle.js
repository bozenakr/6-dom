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
}


virykle(4);