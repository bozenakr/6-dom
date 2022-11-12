// // const h1DOM = document.getElementById('main-title');
// const ulDOM = document.getElementsByTagName('ul')[0];
// const liDOM = ulDOM.getElementsByTagName('li');


// const h1Text = h1DOM.innerText;
// console.log(h1Text);

// h1DOM.innerText = 'Labas vakaras, Lietuva'; //keicia html ne console



const liDOM = document.querySelectorAll('ul > li');


for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText);
}

console.log(liDOM);


for (const liElement of liDOM) {
    liElement.classlist.add('red');
}

