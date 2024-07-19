//const myFunctions = require("./animalclass"); //Links current file to file stated

class Beast {
    constructor(name) {
        this.name = name
        this.hunger = 50
        this.thirst = 50
        this.happiness = 50
        this.tiredness = 50
        this.health = 50
    }
    drinks () {
        this.thirst -= 5
        this.health += 5
        return this
    }
    eats () {
        this.thirst += 5
        this.hunger -=5
        this.health +=5
        return this
    }
    sleeps () {
        this.tiredness -=5
        this.hunger +=5
        return this
    }
    exercises() {
        this.happiness +=5
        this.thirst +=5
        this.hunger +=5
        this.tiredness +=5
        return this
    }
    stats() {
        console.log(`Your ${this.name} stats are: `)
        return console.table({
        name: this.name,
        happiness: this.happiness,
        health: this.health,
        hunger: this.hunger,
        thirst: this.thirst,
        tiredness: this.tiredness
    })
    }
}
const stegosaurus = new Beast (`Stegosaurus`)
const rathian = new Beast (`Rathian`)
const brontosaurus = new Beast (`Brontosaurus`)
const rathalos = new Beast (`Rathalos`)
const velociraptor = new Beast (`Velociraptor`)

let input = document.querySelector('body'); //How to pull from the body,

rathalos.stats()

let currentBeast;
let statInterval;

const selectBeast = (beast) => {
    switch(beast) {
        case 'Stegosaurus':
            currentBeast = new Stegosaurus();
            break;
        case 'Rathian':
            currentBeast = new Rathian();
            break;
        case 'Brontosaurus':
            currentBeast = new Brontosaurus();
            break;
        case 'Rathalos':
            currentBeast = new Rathalos();
            break;
        case 'Velociraptor':
            currentBeast = new Velociraptor();
    } //this lets you select current beast

    document.getElementById('beastName').innerText = currentBeast.name;
    document.getElementById('selectBeast').style.display = 'none'
    document.getElementById('BeastCare').style.display = 'block'

    statInterval = setInterval(() => {
        currentBeast.decreseStats();
        updateStats();
        checkGameOver();
    }, 1000); //this decreases the stats of the beast

}

const decreseStats = () => {
    if (health >= 0 || hunger >= 0 || thirst >= 0 || happiness >= 0 || tiredness >= 0) {
     health -= 1;
     hunger -= 1;
     thirst -= 1;
     happiness -= 1;
     tiredness -= 1   
    }
}

const updateStats = () => {
    document.getElementById('health').innerText = currentBeast.health
    document.getElementById('hunger').innerText = currentBeast.hunger
    document.getElementById('thirst').innerText = currentBeast.thirst
    document.getElementById('happiness').innerText = currentBeast.happiness
    document.getElementById('tiredness').innerText = currentBeast.tiredness


    document.getElementById('health-bar').style.width = `${health}`
    document.getElementById('hunger-bar').style.width = `${hunger}%`
    document.getElementById('thirst-bar').style.width = `${thirst}%`
    document.getElementById('happiness-bar').style.width = `${happiness}%`
    document.getElementById('tiredness-bar').style.width = `${tiredness}%`
} //this tells it to update the stats

const checkGameOver = () => {
    if (currentBeast.health <= 0 || currentBeast.hunger >= 100 || currentBeast.thirst >= 100 ||currentBeast.happiness <= 0 || currentBeast.tiredness <= 0)
        clearInterval(statInterval);
        alert(`Game over! Your ${currentBeast}, ${currentBeast.name} has died.`);
        resetGame();
} //this brings up the game over screen once stated stat reaches stated value

const resetGame = () => {
    document.getElementById('selectBeast').style.display = 'block'
    document.getElementById('beastCare').style.display = 'none'
    currentBeast = null;
} //this tells the game to reset

const feedButton = document.getElementById("food");
feedButton.addEventListener('click', () => {
    currentBeast.eats();
    updateStats()
}); //when button is clicked do this

const drinkButton = document.getElementById("water");
drinkButton.addEventListener('click', () => {
    currentBeast.drinks();
    updateStats()
}); //when button is clicked do this

const sleepButton = document.getElementById("sleep");
sleepButton.addEventListener('click', () => {
    currentBeast.sleeps();
    updateStats()
}); //when button is clicked do this

const exerciseButton = document.getElementById("gym");
exerciseButton.addEventListener('click', () => {
    currentBeast.exercises();
    updateStats()
}); //when button is clicked do this

let choices =document.querySelectorAll ("#sprites img")
choices.forEach((images)=>{
images.addEventListener('click', ()=>{
    console.log ("selection")
    document.getElementById("sprites").style.display = "none"
     document.querySelector(`#images .${images.classList[0]}`) .style.display= "block"
})
})

 document.getElementById('selectBeast').style.display = 'block'
 document.getElementById('beastCare').style.display = 'none'