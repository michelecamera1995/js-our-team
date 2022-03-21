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
];


for (i = 0; i < teamCard.length; i++); {

    let listCard = document.getElementById('team');

    teamCard = document.createElement('div');

    listCard.appendChild(teamCard);

};

