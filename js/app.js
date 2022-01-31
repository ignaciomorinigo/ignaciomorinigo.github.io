let menu     = document.querySelector('#nav-menu'),
    menu_bar = document.querySelector('#menu-bar');

menu_bar.addEventListener('click', function(){
    menu.classList.toggle('menu-toggle');
})

// Cards
let cards_container = document.querySelector('#cards-container');
const cards = (img, title, codeLink, pageLink, description, icons) => { 
    let li = icons.map(icon => `<li><img src="../assets/icons/${icon}" alt="icons dev"></li>`).join("");
    let content = `
        <section class="card">
            <img class="card-background" src="../assets/img/${img}" alt="">
            <h3><a href="${pageLink}" class="card-link" target="_blank">${title}</a></h3>
            <p>${description}</p>
            <a href="${codeLink}" target="_blank">&lt;View code&gt;</View></a>
            <ul>${li}</ul>
        </section>
    `;
    return content;
};

let cardsArray = []
cardsArray.push(cards('todolistapp.png', 'ToDoList App ', 'https://github.com/morinacho/todolist', 'https://morinacho.github.io/todolist/V4/index.html', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png', 'icons8-nodejs-30.png', 'icons8-mongodb-30.png']));
cardsArray.push(cards('smf.png', 'Simple Modular Framework', 'https://github.com/morinacho/simple_modular_framework', 'https://github.com/morinacho/simple_modular_framework', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png', 'icons8-bootstrap-30.png', 'icons8-php-30.png']));
cardsArray.push(cards('gadev.png', 'Gadev Web ', 'https://github.com/morinacho/gadev-web', 'https://morinacho.github.io/gadev-web/', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png']));
cardsArray.push(cards('ilibrary.png', 'I-Library web ', 'https://github.com/morinacho/i-library-1', 'https://github.com/morinacho/i-library-1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png', 'icons8-bootstrap-30.png', 'icons8-php-30.png']));
cardsArray.push(cards('jankenpo.png', 'JanKenPo', 'https://github.com/morinacho/jankenpo-java', 'https://github.com/morinacho/jankenpo-java', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', ['icons8-java-30.png']));
cardsArray.push(cards('ilibrary-des.png', 'Library Manager ', 'https://github.com/morinacho/library-manager-java', 'https://github.com/morinacho/library-manager-java', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', ['icons8-java-30.png']));
cards_container.innerHTML = cardsArray.join("");