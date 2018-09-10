// const link = document.querySelector('a');

// link.textContent = '🙈Мережа Mozilla Developer';

// link.href = 'https://t.me/programmingmentor';



if (Math.random() <= 0.5 ) {
    const link = document.querySelector('a');
    link.textContent = '🙈Programming Mentor';
    link.href = 'https://t.me/programmingmentor';
}


const section = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';


section.appendChild(para);
section.appendChild(para);
para.appendChild(document.createTextNode('Hello World!'));
section.appendChild(para.cloneNode(true));


// const btn = document.createElement('button');
// btn.textContent = 'Delete paragraph';
// section.appendChild(btn);
// btn.addEventListener('click', e => {
//     const par = document.querySelector('p');
//     if (par) {
//         par.parentNode.removeChild(par);
//     }
// });


const btn = document.createElement('button');
btn.textContent = 'Delete paragraph';
section.appendChild(btn);
btn.addEventListener('click', e => {
    const pars = document.querySelectorAll('p');
    const par = pars[pars.length-1];
    if (par) {
        par.parentNode.removeChild(par);
    }
});

const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(),
            1000);


