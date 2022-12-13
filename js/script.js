//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
let members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: './img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: './img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: './img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: './img/barbara-ramos-graphic-designer.jpg'
    },  
];

let mem = members
//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
//BONUS 1: Trasformare la stringa foto in una immagine effettiva
//BONUS 2: Organizzare i singoli membri in card/schede
for(let i=0; i<members.length; i++){
    let member = members[i]
    document.querySelector('.col-information').innerHTML += `<div class="container-card"><img src="${member.photo}" alt=""><h3>${member.name}</h3><p>${member.role}</p></div>`
}
