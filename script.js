console.log('JS-OK')


let teamCards = document.getElementsByClassName('team-cards');

let teamCard = document.createElement('div');

teamCard.classList.add('team-card');

teamCards = [
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


console.log(teamCards[0].nome);


