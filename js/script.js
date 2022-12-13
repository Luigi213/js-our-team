//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
let members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo:  'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },  
];

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i=0; i<members.length; i++){
    let member = members[i]
    for(let key in member){
        let card = member[key]
        document.querySelector('.information').innerHTML += `<p>${card}</p>`
    }
}

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
