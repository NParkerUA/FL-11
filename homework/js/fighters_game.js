class Fighter {
  constructor(objSpecs) {
    const NAME = objSpecs.name;
    let dmg = objSpecs.dmg;
    let hp = objSpecs.hp;
    const TOTAL_HP = objSpecs.hp;
    const agility = objSpecs.agility;
    let win = 0;
    let loss = 0;

    this.get_Name = function() {
      return NAME
    }
    this.get_Damage = function() {
      return dmg
    }

    this.getTotal_Hp = function() {
      return TOTAL_HP
    }

    this.get_Agility = function() {
      return agility
    }

    this.get_Health = function() {
      return hp
    }
        
    this.get_Losses = function() {
      return loss
    }

    this.get_Wins = function() {
      return win
    }

    this.set_Hp = (CurentAmount) => {
      hp = CurentAmount
    }
    this.add_Win = () => {
      win ++
    }
    this.add_Loss = () => {
      loss ++
    }  
  }

  dealDamage(hp) {
    let CurrentHP = this.get_Health() - hp;
    if (CurrentHP < 1) {
      CurrentHP = 0
    }
    this.set_Hp(CurrentHP)
  }

  attack(defender) {
    const PERCENT = 100;
    const SUCCESS = PERCENT - defender.get_Agility();
    const RAND = Math.round(Math.random() * (PERCENT - 1 + 1)) + 1;
    let attack_success = RAND < SUCCESS;

    if (attack_success) {
      const attackerDamage = this.get_Damage();
      defender.dealDamage(attackerDamage);

      return this.get_Name() + ' made ' + this.get_Damage() + ' damage to ' + defender.get_Name()
    } else if (!attack_success) {
      return this.get_Name() + 's attack missed'
    }
  }

  heal(hp) {
    let CurrentHP = this.get_Health() + hp;
    if (CurrentHP > this.getTotal_Hp()) {
      CurrentHP = this.getTotal_Hp()
    }
    this.set_Hp(CurrentHP)
  }
  logCombatHistory() {
    return 'Name:' + this.get_Name() + ', Wins:' + this.get_Wins() + ', Losses:' + this.get_Losses()
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.get_Health() !== 0 && fighter2.get_Health() !== 0) {
    do {
      console.log(fighter1.attack(fighter2))
      if (fighter2.get_Health() === 0) {
        fighter1.add_Win();
        fighter2.add_Loss();
        break
      }
      console.log(fighter2.attack(fighter1))
      if (fighter1.get_Health() === 0) {
        fighter2.add_Win();
        fighter1.add_Loss();
        break
      }
    } while(fighter1.get_Health() !== 0 && fighter2.get_Health() !== 0)
  } else if (fighter1.get_Health() === 0) {
    return fighter1.get_Name() + ' is dead and can\u2019t fight'
  } else if (fighter2.get_Health() === 0){
    return fighter2.get_Name() + ' is dead and can\u2019t fight'
  }
}

let jack = new Fighter({name: 'Jack', dmg: 20, agility: 20, hp: 150});
let harold = new Fighter({name: 'Harold', dmg: 25, agility: 30, hp: 130});

// console.log(battle(jack, harold))
// console.log(jack.logCombatHistory());
// console.log(harold.logCombatHistory());
// console.log(jack.get_Health());
// console.log(harold.get_Health());