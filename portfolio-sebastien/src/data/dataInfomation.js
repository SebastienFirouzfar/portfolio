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
    }

]; 

const backEnd = [
    {
        nameLanguage : "NODE JS", 
        imageLanguage : "nodejsExpress.jpg"   
    }, 

    {
        nameLanguage : "PHP", 
        imageLanguage : "php.jpg" 
    }
];
//exporter la liste dans index.js de notre app
//egalement de mettre la liste dans index de components
export const list = [aboutInformation, frontEnd, backEnd]