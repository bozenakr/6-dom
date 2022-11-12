// const ulDOM = document.getElementsByTagName('ul')[0];
// const liDOM = ulDOM.getElementsByTagName('li');


// const h1Text = h1DOM.innerText;
// console.log(h1Text);

// h1DOM.innerText = 'Labas vakaras, Lietuva'; //keicia html ne console



// // const liDOM = document.querySelectorAll('ul > li');


// for (let i = 0; i < liDOM.length; i++) {
//     console.log(liDOM[i].innerText);
// }


// =============prideda class==========
// for (const liElement of liDOM) {
//     liElement.classList.add('red');
// }

// // console.log(liDOM);

// =============atima class==========
// for (const liElement of liDOM) {
//     liElement.classList.remove('red');
// }

// ===duoda kas neturejo, atima kas turejo class==========
// for (const liElement of liDOM) {
//     liElement.classList.toggle('red');
// }


//html class prideta main-title, surandam ir pagal Id ppridedam ('red')
const h1DOM = document.getElementById('main-title');
h1DOM.classList.add('red');


