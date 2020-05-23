function main() {
  // Put your code here
  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyReqired: 2921.5
    }
  ]
  console.log("Do you believe in magic?");
  console.log("------------------------");
  const goodSpells = allSpells.filter(spell => spell.IsEvil === false)
  const evilSpells = allSpells.filter(spell => spell.IsEvil === true)
  debugger
  const makeGoodSpellBook = () => {
    const goodBook = {
      title: "Good Book",
      spells: goodSpells
    }
    return goodBook
  }
  const makeEvilSpellBook = () => {
    const evilBook = {
      title: "Evil Book",
      spells: evilSpells
    }
    return evilBook
  }
  const displaySpellBooks = (goodSpellBook, evilSpellBook) => {
    console.log(goodSpellBook.title);
    goodSpellBook.spells.forEach(spell => {
      console.log(spell.Name)
    });
    console.log("")
    console.log(evilSpellBook.title);
    evilSpellBook.spells.forEach(spell => {
      console.log(spell.Name)
    })
    const goodSpellsMade = makeGoodSpellBook()
    const evilSpellsMade = makeEvilSpellBook()
    debugger
    displaySpellBooks(goodSpellsMade, evilSpellsMade)
  }

}

main();