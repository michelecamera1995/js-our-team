console.log('JS-OK')

// Array del team

const teamMembers = [
    {
        nome: 'Wayne Burnett',
        ruolo: 'Founder e CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Carol',
        ruolo: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez ',
        ruolo: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada ',
        ruolo: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    }
];

createTeamCard(teamMembers);



console.table(teamMembers);

function createTeamCard(members) {
    let listCard = document.querySelector('.team-container');

    for (let i = 0; i < members.length; i++) {
        const card = createCard(members[i]);
        listCard.append(card);
    };
}

function createCard(members) {
    let card = document.createElement('div');
    card.className = "team-card";
    card.innerHTML = `
                <div class="team-card">
                <div class="card-image">
                  <img
                    src="${members.image}"
                    alt="${members.nome}"
                  />
                </div>
                <div class="card-text">
                  <h3>${members.nome}</h3>
                  <p>${members.ruolo}</p>
                </div>
        ` ;
    return card;
}












