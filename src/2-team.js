// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber) {
        this.name = name
        this.position = position
        this.jerseyNumber = jerseyNumber
    }
}
const player1 = new Player("LeBron James", "Forward", 23);
const player2 = new Player("Stephen Curry", "Guard", 30);
const player3 = new Player("Kevin Durant", "Forward", 35);

console.log(player1); // Player { name: "LeBron James", position: "Forward", jerseyNumber: 23 }
console.log(player2); // Player { name: "Stephen Curry", position: "Guard", jerseyNumber: 30 }
console.log(player3); // Player { name: "Kevin Durant", position: "Forward", jerseyNumber: 35 }

class Team {
    #starters = []
    #bench = []
    constructor(name) {
        this.name = name
    }
    getStarters() {
        return [...this.#starters]
        // retrun this.#starters; this is returning a direct refernce
    }
    getBench() {
        return [...this.#bench]
    }
    addBenchPlayer(player) {
        return this.#bench.push(player)
    }
    getPlayerCount() {
        return this.#starters.length + this.#bench.length
    }
    moveToBench(name) {
        let currentPlayer = this.#starters.find((player) => player.name === name)
        // find is looping through starters, parameters represent each player, if play.name passed through = aname in the players {} 
        if (!currentPlayer) {
            return false
        }
        let index = this.#starters.indexOf(currentPlayer)
        this.#starters.splice(index, 1)
        this.#bench.push(currentPlayer)
        return true
    }
    moveToStarters(name) {
        let currentPlayer = this.#bench.find((player) => player.name === name)
        // find is looping through starters, parameters represent each player, if play.name passed through = aname in the players {} 
        if (!currentPlayer) {
            return false
        }
        let index = this.#bench.indexOf(currentPlayer)
        this.#bench.splice(index, 1)
        this.#starters.push(currentPlayer)
        return true
    }
}
const player4 = new Player("Anthony Davis", "Center", 3);

const team = new Team("All Stars");
console.log(team); // Team { name: "All Stars" }

// 1. Adding players to the bench
team.addBenchPlayer(player1);
team.addBenchPlayer(player2);
team.addBenchPlayer(player3);
team.addBenchPlayer(player4);

console.log(team.getBench());
// OR if you use the get syntax:
console.log(team.bench);
/*
[
  Player { name: "LeBron James", position: "Forward", jerseyNumber: 23 },
  Player { name: "Stephen Curry", position: "Guard", jerseyNumber: 30 },
  Player { name: "Kevin Durant", position: "Forward", jerseyNumber: 35 },
  Player { name: "Anthony Davis", position: "Center", jerseyNumber: 3 }
]
*/
console.log(team.getStarters()); // []

// 2. Getting total player count
console.log(team.getPlayerCount()); // 4

// 3. Moving players to starters
console.log(team.moveToStarters("LeBron James")); // true
console.log(team.moveToStarters("Stephen Curry")); // true
console.log(team.moveToStarters("Michael Jordan")); // false (not on the team)

console.log(team.getStarters());
/*
[
  Player { name: "LeBron James", position: "Forward", jerseyNumber: 23 },
  Player { name: "Stephen Curry", position: "Guard", jerseyNumber: 30 }
]
*/
console.log(team.getBench());
/*
[
  Player { name: "Kevin Durant", position: "Forward", jerseyNumber: 35 },
  Player { name: "Anthony Davis", position: "Center", jerseyNumber: 3 }
]
*/

// 4. Moving a player back to the bench
console.log(team.moveToBench("Stephen Curry")); // true
console.log(team.getStarters().length); // 1
console.log(team.getBench().length); // 3

module.exports = { Player, Team };

