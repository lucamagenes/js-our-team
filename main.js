//rappresentare una lista di membri di un team.

//Ciascun membro del team avrá come caratteristica name, role, image

//Stampare in console tutti gli elementi del team e le loro proprieta


const bauTeam = [
    {
        nome: 'Thor',
        ruolo: 'CEO',
        image: 'https://picsum.photos/id/1025/300/300',
    },
    {
        nome: 'Lucky',
        ruolo: 'CTO',
        image: 'https://picsum.photos/id/1025/300/300',
    },
    {
        nome: 'Leo',
        ruolo: 'CFO',
        image: 'https://picsum.photos/id/1025/300/300',
    },
    {
        nome: 'Jack',
        ruolo: 'CIO',
        image: 'https://picsum.photos/id/1025/300/300',
    },
    {
        nome: 'Argo',
        ruolo: 'COO',
        image: 'https://picsum.photos/id/1025/300/300',
    }
]

console.log(bauTeam);

for (let key in bauTeam) {
    console.log(key, bauTeam[key]);
}