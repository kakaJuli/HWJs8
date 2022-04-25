let title = document.createElement('title');
title.innerHTML = 'DOM';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');


document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let p  = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';


document.body.appendChild(h1);
document.body.appendChild(p);

let divMain = document.createElement('div');
//divMain.innerHTML = 'text';
divMain.classList.add('blockMain');
document.body.appendChild(divMain);


let divLeft = document.createElement('div');
//divLeft.innerHTML = 'text1';
divLeft.classList.add('blockLeft');
divMain.appendChild(divLeft);

let p1 = document.createElement('p');
p1.innerHTML = 'freelanser';
divLeft.appendChild(p1);

let h2L = document.createElement('h2');
h2L.innerHTML = 'Initially designed to';
divLeft.appendChild(h2L);

let p1L = document.createElement('p');
p1L.innerHTML = 'But must explain to you how all this mistaken idea of denouncing';
divLeft.appendChild(p1L);

let btnLeft = document.createElement('button');
btnLeft.innerHTML = 'start here';
divLeft.appendChild(btnLeft);

let divRight = document.createElement('div');
//divRight.innerHTML = 'text';
divRight.classList.add('blockRight');
divMain.appendChild(divRight);

let p2 = document.createElement('p');
p2.innerHTML = 'studio';
divRight.appendChild(p2);

let h2R = document.createElement('h2');
h2R.innerHTML = 'Initially designed to';
divRight.appendChild(h2R);

let p2R = document.createElement('p');
p2R.innerHTML = 'But must explain to you how all this mistaken idea of denouncing';
divRight.appendChild(p2R);

let btnRight = document.createElement('button');
btnRight.innerHTML = 'start here';
divRight.appendChild(btnRight);

h1.style.fontSize = '36px';
h1.style.textAlign = 'center';
h1.style.color = '#212121';

p.style.fontSize = '14px';
p.style.color = '#9FA3A7';
p.style.textAlign = 'center';

let style = document.createElement('style');
style.innerHTML = `
    .blockMain {
        display: flex;
        width: 800px;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
       
        
    }
    .blockLeft {
        width: 400px;
        text-align: center;
        border: 1px solid #9FA3A7;
        border-radius: 5px;
        margin-top: 50px;
    }

    .blockRight {
        width: 400px;
        text-align: center;
        background-color: #8F75BE;
        border-radius: 5px;
        margin-top: 50px;
    }
`;

document.head.appendChild(style);


p1.style.fontSize = '12px';
p1.style.fontWeight = 'bold';
p1.style.textTransform = 'uppercase';
p1.style.color = '#9FA3A7';
p1.style.padding = '30px';

h2L.style.fontSize = '36px';
h2L.style.lineHeight = '46px';
h2L.style.width = '210px';
h2L.style.textAlign = 'center';
h2L.style.marginLeft = 'auto';
h2L.style.marginRight = 'auto';


p1L.style.fontSize = '12px';
p1L.style.lineHeight = '22px';
p1L.style.color = '#9FA3A7';
p1L.style.padding = '30px';
p1L.style.width = '215px';
p1L.style.marginLeft = 'auto';
p1L.style.marginRight = 'auto';

btnLeft.style.border = '2px solid yellow';
btnLeft.style.borderRadius = '20px';
btnLeft.style.fontSize = '12px';
btnLeft.style.padding = '5px 15px';
btnLeft.style.textTransform = 'uppercase';
btnLeft.style.marginBottom = '70px';
btnLeft.style.fontWeight = 'bold';

p2.style.color = 'yellow';
p2.style.fontSize = '12px';
p2.style.padding = '30px';
p2.style.textTransform = 'uppercase';
p2.style.fontWeight = 'bold';

h2R.style.fontSize = '36px';
h2R.style.lineHeight = '46px';
h2R.style.width = '210px';
h2R.style.textAlign = 'center';
h2R.style.marginLeft = 'auto';
h2R.style.marginRight = 'auto';
h2R.style.color = '#FFFFFF';

p2R.style.fontSize = '12px';
p2R.style.lineHeight = '22px';
p2R.style.color = '#FFFFFF';
p2R.style.padding = '30px';
p2R.style.width = '215px';
p2R.style.marginLeft = 'auto';
p2R.style.marginRight = 'auto';


btnRight.style.border = '2px solid yellow';
btnRight.style.borderRadius = '20px';
btnRight.style.fontSize = '12px';
btnRight.style.padding = '5px 15px';
btnRight.style.textTransform = 'uppercase';
btnRight.style.marginBottom = '70px';
btnRight.style.fontWeight = 'bold';
btnRight.style.backgroundColor = '#8F75BE';







