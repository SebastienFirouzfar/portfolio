const aboutInformation = [
    {
        nameSchool :'Becode', 
        year : "2020 - 2021", 
        options : "Developpement web",
        image : "BeCode.jpg", 
        lien : "https://becode.org/fr/"
    }, 

    {
        nameSchool :'EPFC', 
        year : "2019 - 2020", 
        options : "Developpement mobile (Kotlin)",
        image : "epfc.jpg", 
        lien : "https://www.epfc.eu/"
    }, 

    {
        nameSchool :'He2b Esi', 
        year : "2018 - 2019", 
        options : "informatique de gestion",
        image : "he2b.jpg",
        lien : "https://www.he2b.be/campus-esi"
    }, 

    {
        nameSchool :'Institut Paul Lambin', 
        year : "2017 - 2018", 
        options : "informatique de gestion",
        image : "ipl_logo.jpg", 
        lien: "https://www.vinci.be/fr/"
     }
]; 

const frontEnd = [
    {
        imageLanguage : "html.jpg",
        category : 1
    }, 

    {
        imageLanguage : "css.jpg",
        category : 1
    }, 

    {
        imageLanguage : "bootstrap.jpg", 
        category : 1
    }, 

    {
        imageLanguage : "javascript.jpg", 
        category : 1
    }, 

    {
        imageLanguage : "react.jpg", 
        category : 1
    }, 

       {
        imageLanguage : "sass.jpg", 
        category : 1
    }

]; 

const backEnd = [
    {
        nameLanguage :'NODE JS',
        imageLanguage : "nodejsExpress.jpg", 
        category : 0
    }, 

    {
        nameLanguage :'PHP',
        imageLanguage : "php.jpg", 
        category : 0
    }
];

const project = [
    {
        nameProject :'consolidation',
        description : "Realisation de notre premier projet en groupe avec le langage html et css",
        urlProject : "https://valerianderennebecode.github.io/consolidation-challenge/home/index.html", 
        urlGitHub : "https://github.com/valerianderennebecode/consolidation-challenge", 
        category : 2, 
        imageProject : "consolidationChallenge.jpg"
    }, 

    {
        nameProject:'Moosic',
        description : "Moi et mes camarades de classe nous avons realisés un projet en utilisant le php, html, css, et le javascript ",
        urlProject : "http://moosic.great-site.net/?i=1", 
        urlGitHub : "https://github.com/SylvainDurant/Moosic",
        category : 2, 
        imageProject : "moosic.jpg"
    }, 

    {
        nameProject :'datavisualisation',
        description : "Dans cette exercice, nous devons réaliser avec la bibliothèque chart.js afin de comprendre le fonctionnement",
        urlProject: "https://sebastienfirouzfar.github.io/js-datavisualisation-challenge/",
        urlGitHub : "https://github.com/SebastienFirouzfar/js-datavisualisation-challenge", 
        category : 2, 
        imageProject : "dataVisualisation.jpg"
    }, 

    {
        nameProject :'E-commerce react',
        description : "Ce projet se base sur un tutoriel de react du site udemy. Ce projet à pout but de comprendre le framework de javascript ",
        urlProject: "https://webreacteshop.web.app/", 
        urlGitHub : "https://github.com/SebastienFirouzfar/e-commernce-react",
        category : 2, 
        imageProject : "e-commerceReact.jpg"
    }, 

    {
        nameProject :'TodoList',
        description :"Le but de cette exercice est d'apprendre les petites base en node js afin de comprendre le fonctionnement de ce framework. Voici le résultat avec le node js" ,
        urlProject: "https://todo-list-tuto-diogo.herokuapp.com/", 
        urlGitHub : "https://github.com/SebastienFirouzfar/nodejs", 
        category : 2, 
        imageProject : "todoList.jpg"
    }, 

    {
        nameProject :'E-commerce node js ',
        description : "Realisation de notre premier projet en node js pour mettre en fonctionner tel que le register, login, logout, news letters et research avec la base de donnée mongooDB ",
        urlProject: "https://e-shop-challenge.herokuapp.com/", 
        urlGitHub : "https://github.com/SebastienFirouzfar/eShop-challenge", 
        category : 2, 
        imageProject : "freshShop.jpg"
    }
];

//exporter la liste dans index.js de notre app  https://todo-list-tuto-diogo.herokuapp.com/
//egalement de mettre la liste dans index de components
export const list = [aboutInformation, frontEnd, backEnd, project]