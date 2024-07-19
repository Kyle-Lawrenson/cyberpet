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

module.exports = {Beast, stegosaurus, rathian, brontosaurus, rathalos, velociraptor}
