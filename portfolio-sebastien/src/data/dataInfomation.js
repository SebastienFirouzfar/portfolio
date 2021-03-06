const aboutInformation = [
    {
        refAbout : 1,
        nameSchool :'Becode', 
        year : "2020 - 2021", 
        options : "Developpement web",
        image : "BeCode.jpg", 
        lien : "https://becode.org/fr/"
    }, 

    {
        refAbout : 2,
        nameSchool :'EPFC', 
        year : "2019 - 2020", 
        options : "Developpement mobile (Kotlin)",
        image : "epfc.jpg", 
        lien : "https://www.epfc.eu/"
    }, 

    {
        refAbout : 3,
        nameSchool :'He2b Esi', 
        year : "2018 - 2019", 
        options : "informatique de gestion",
        image : "he2b.jpg",
        lien : "https://www.he2b.be/campus-esi"
    }, 

    {
        refAbout : 4,
        nameSchool :'Institut Paul Lambin', 
        year : "2017 - 2018", 
        options : "informatique de gestion",
        image : "ipl_logo.jpg", 
        lien: "https://www.vinci.be/fr/"
     }
]; 

const competence = [
    {
        refCompetence : 1,
        nameLanguage :'HTML',
        imageLanguage : "html.jpg",
        category : 1
    }, 

    {
        refCompetence : 2,
        nameLanguage :'CSS',
        imageLanguage : "css.jpg",
        category : 1
    }, 

    {
        refCompetence : 3,
        nameLanguage :'BOOTSTRAP',
        imageLanguage : "bootstrap.jpg", 
        category : 1
    }, 

    {
        refCompetence : 4,
        nameLanguage :'JAVASCRIPT',
        imageLanguage : "javascript.jpg", 
        category : 1
    }, 

    {
        refCompetence : 5,
        nameLanguage :'REACT',
        imageLanguage : "react.jpg", 
        category : 1
    }, 

    {
        refCompetence : 6,
        nameLanguage :'SASS',
        imageLanguage : "sass.jpg", 
        category : 1
    }, 

    {
        refCompetence : 7,
        nameLanguage :'NODE JS',
        imageLanguage : "nodejsExpress.jpg", 
        category : 1
    }, 

    {
        refCompetence : 8,
        nameLanguage :'PHP',
        imageLanguage : "php.jpg", 
        category : 1
    }, 

    {
        refCompetence : 9,
        nameLanguage :'HEROKU',
        imageLanguage : "heroku.jpg", 
        category : 1
    }, 

    {
        refCompetence : 10,
        nameLanguage :'GIT',
        imageLanguage : "git.jpg", 
        category : 1
    }, 

    {
        refCompetence : 11,
        nameLanguage :'GIT-HUB',
        imageLanguage : "GitHub-logo.jpg", 
        category : 1
    }

]; 



const project = [
    {
        refProject  : 1,
        nameProject :'Consolidation',
        description : "Realisation de notre premier projet en groupe avec le langage html et css, chacun de nous devais choisir une c??l??brit?? et rediger l'historique.",
        urlProject : "https://valerianderennebecode.github.io/consolidation-challenge/home/index.html", 
        urlGitHub : "https://github.com/valerianderennebecode/consolidation-challenge", 
        category : 2, 
        imageProject : "consolidationChallenge.jpg"
    }, 

    {
        refProject  : 2,
        nameProject:'Moosic',
        description : "Avec mes camarades de classe nous avons realis??s un projet en utilisant le php, html, css, et le javascript.",
        urlProject : "http://moosic.great-site.net/?i=1", 
        urlGitHub : "https://github.com/SylvainDurant/Moosic",
        category : 2, 
        imageProject : "moosic.jpg"
    }, 

    {
        refProject  : 3,
        nameProject :'Data visualisation',
        description : "Dans cette exercice, nous devons r??aliser avec la biblioth??que chart.js afin de comprendre le fonctionnement.",
        urlProject: "https://sebastienfirouzfar.github.io/js-datavisualisation-challenge/",
        urlGitHub : "https://github.com/SebastienFirouzfar/js-datavisualisation-challenge", 
        category : 2, 
        imageProject : "dataVisualisation.jpg"
    }, 

    {
        refProject  : 4,
        nameProject :'E-commerce react',
        description : "Ce projet se base sur un tutoriel de react du site udemy. Ce projet ?? pour but de comprendre le framework de javascript.",
        urlProject: "https://webreacteshop.web.app/", 
        urlGitHub : "https://github.com/SebastienFirouzfar/e-commernce-react",
        category : 2, 
        imageProject : "e-commerceReact.jpg"
    }, 

    {
        refProject  : 5,
        nameProject :'TodoList',
        description :"Le but de cette exercice est d'apprendre les petites base en node js afin de comprendre le fonctionnement de ce framework. Voici le r??sultat avec le node js." ,
        urlProject: "https://todo-list-tuto-diogo.herokuapp.com/", 
        urlGitHub : "https://github.com/SebastienFirouzfar/nodejs", 
        category : 2, 
        imageProject : "todoList.jpg"
    }, 

    {
        refProject : 6,
        nameProject :'E-commerce node js ',
        description : "Realisation de notre premier projet en node js pour mettre en fonctionner tel que le register, login, logout, news letters et research avec la base de donn??e mongooDB. Cliquer sur l'image pour voir le r??sultat  ",
        urlProject: "https://e-shop-challenge.herokuapp.com/", 
        urlGitHub : "https://github.com/SebastienFirouzfar/eShop-challenge", 
        category : 2, 
        imageProject : "freshShop.jpg"
    }
];

//exporter la liste dans index.js de notre app  https://todo-list-tuto-diogo.herokuapp.com/
//egalement de mettre la liste dans index de components
export const list = [aboutInformation, competence, project]