class Squad {
    constructor(name, numSoldiers, numTeams, teamNames){
        this.name = name;
        this.numSoldiers = numSoldiers;
        this.numTeams = numTeams;
        this.teamNames = teamNames;
    }


}
class Soldier {
    constructor(name, age, rank, position) {
        this.name = name;
        this.age = age;
        this.rank = rank;
        this.position = position;
    }

    //Setter
    addSoldier(Soldier) {
        this.allSoldiers.push(soldier);
        this.numSoldiers++;
    }

    //Getter
    getSquadCount() {
        return this.numSoldiers;
    }
}

const mySquad = new Squad("1st", 9, 2, ["A", "B"]);
const newSoldier = new Soldier("Jerome", 22, "PFC", "Gunner");


console.log(mySquad);


