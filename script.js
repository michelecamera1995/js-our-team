console.log('JS-OK')


// Array del team

let teamCard = [
    {
        nome: 'Wayne Burnett',
        ruolo: 'Founder e CEO',
        "background-image": 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Carol',
        ruolo: 'Chief Editor',
        "background-image": 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        "background-image": 'img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez ',
        ruolo: 'Social Media Manager',
        "background-image": 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada ',
        ruolo: 'Developer',
        "background-image": 'img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        "background-image": 'img/barbara-ramos-graphic-designer.jpg',
    },
];


for (i = 0; i < teamCard.length; i++); {

    let listCard = document.getElementById('team');

    teamCard = document.createElement('div');

    listCard.appendChild(teamCard);

};

