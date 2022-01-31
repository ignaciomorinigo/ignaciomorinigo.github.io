let menu     = document.querySelector('#nav-menu'),
    menu_bar = document.querySelector('#menu-bar');

menu_bar.addEventListener('click', function(){
    menu.classList.toggle('menu-toggle');
})

//  Projects Cards
let cards_container = document.querySelector('#cards-container');
const cards = (img, title, codeLink, pageLink, description, icons) => { 
    let li = icons.map(icon => `<li><img src="../assets/icons/${icon}" alt="icons dev"></li>`).join("");
    return `
        <section class="card">
            <img class="card-background" src="../assets/img/${img}" alt="">
            <h3><a href="${pageLink}" class="card-link" target="_blank">${title}</a></h3>
            <p>${description}</p>
            <a href="${codeLink}" target="_blank">&lt;View code&gt;</View></a>
            <ul>${li}</ul>
        </section>
    `; 
};

let cardsArray = []
cardsArray.push(cards('todolistapp.png', 'ToDoList App ', 'https://github.com/morinacho/todolist', 'https://morinacho.github.io/todolist/V4/index.html', 'Web application to save tasks list with geolocation, full screen, sharing and dark mode.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png', 'icons8-nodejs-30.png', 'icons8-mongodb-30.png']));
cardsArray.push(cards('smf.png', 'Simple Modular Framework', 'https://github.com/morinacho/simple_modular_framework', 'https://github.com/morinacho/simple_modular_framework', 'Multilayer mvc framework to make web applications with mariadb database.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png', 'icons8-bootstrap-30.png', 'icons8-php-30.png']));
cardsArray.push(cards('gadev.png', 'Gadev Web ', 'https://github.com/morinacho/gadev-web', 'https://morinacho.github.io/gadev-web/', 'Practice web page simulating a software consultancy.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png']));
cardsArray.push(cards('ilibrary.png', 'I-Library web ', 'https://github.com/morinacho/i-library-1', 'https://github.com/morinacho/i-library-1', 'Web application to manage a university library made with Simple modular framework.', ['icons8-html-5-30.png', 'icons8-css3-30.png', 'icons8-javascript-30.png', 'icons8-bootstrap-30.png', 'icons8-php-30.png']));
cardsArray.push(cards('jankenpo.png', 'JanKenPo', 'https://github.com/morinacho/jankenpo-java', 'https://github.com/morinacho/jankenpo-java', 'Rock-paper-scissors game with the option to play alone or with multiple players.', ['icons8-java-30.png']));
cardsArray.push(cards('ilibrary-des.png', 'Library Manager ', 'https://github.com/morinacho/library-manager-java', 'https://github.com/morinacho/library-manager-java', 'Desktop application to manage a library without database connection.', ['icons8-java-30.png']));
cards_container.innerHTML = cardsArray.join("");

// Experience timeLine
let experienceContainer = document.querySelector('.experience-container');
const experienceItem = (title, description, info) => 
    `
        <div class="experience-item">
            <h3>${title}</h3>
            <p>${description}</p>
            <span>${info}</span>
        </div>
    `;
let experienceArray = [];
experienceArray.push(experienceItem('Remote PHP developer', 'Development both in backend and frontend of functional modules with php, mysql and bootstrap technologies of a CRM for a graphic located in Chile.', 'Remote Freelance – August 2020'))
experienceArray.push(experienceItem('Data entry', 'Entry of information regarding work schedules, work processes, creation of JIS of the manufacturing process of new pipes with office tools such as excel and word.', 'Tubhier - July 2015'))
experienceArray.push(experienceItem('Data entry', 'Entering information about the composition of the factory"s products within its proprietary software.', 'Molinos Fénix Nutrición – Junio 2015'))
experienceArray.push(experienceItem('Web developer', 'Website development on the sharepoint platform with C#, html, css and jquery.', 'Raona – Febrero 2014'))
experienceContainer.innerHTML = experienceArray;