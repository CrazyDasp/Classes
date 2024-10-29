export class Character{
    constructor(name, type, health, level, attack, defence) {
        if (name.length <= 10 && name.length >= 2) {
            this.name = name
        } else {
            throw new Error("Error: name must be contains from 2 to 10 letters")
        }

        if (["Bowerman", "Swordsman", "Magician", "Undead", "Daemon", "Zombie"].includes(type)) {
            this.type = type
        } else {
            throw new Error("Error: unsupported type of character")
        }

        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
      
    }

    levelUp() {
      if (this.health > 0) {
        this.health = 100;
        this.level += 1;
        this.attack *= 1.25;
        this.defence *= 1.25;
      } else {
        throw new Error("Error: can't level up dead character")
      }
    }
  
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error("Error: character already dead")
        }
      
        if (this.health <= 0) {
            console.log("Wasted")
        }
    }
}

export class Bowerman extends Character {
    constructor(name, type) {
        super(name, type);
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type) {
        super(name, type);
         this.health = 100;
         this.level = 1;
          this.attack = 40;
         this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type) {
         super(name, type);
         this.health = 100;
         this.level = 1;
         this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name, type) {
         super(name, type);
        this.health = 100;
         this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
         this.health = 100;
         this.level = 1;
         this.attack = 40;
         this.defence = 10;
    }
}

export class Daemon extends Character {
    constructor(name, type) {
        super(name, type);
         this.health = 100;
         this.level = 1;
         this.attack = 10;
         this.defence = 40;
    }
}
