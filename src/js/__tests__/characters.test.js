import * as CreateChar from "../characters";

test("Testing create bowerman", () => {
    let bowemanChar = new CreateChar.Bowerman("Legolas", "Bowerman")

    expect(bowemanChar).toEqual({
        "name": "Legolas",
        "type": "Bowerman",
        "health": 100,
        "level": 1,
        "attack": 25,
        "defence": 25
    })
})

test("Testing create swordsman", () => {
    let bowemanChar = new CreateChar.Swordsman("Varian", "Swordsman")

    expect(bowemanChar).toEqual({
        "name": "Varian",
        "type": "Swordsman",
        "health": 100,
        "level": 1,
        "attack": 40,
        "defence": 10
    })
})

test("Testing create magician", () => {
    let bowemanChar = new CreateChar.Magician("Khadgar", "Magician")

    expect(bowemanChar).toEqual({
        "name": "Khadgar",
        "type": "Magician",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    })
})

test("Testing create undead", () => {
    let bowemanChar = new CreateChar.Undead("Sylvanas", "Undead")

    expect(bowemanChar).toEqual({
        "name": "Sylvanas",
        "type": "Undead",
        "health": 100,
        "level": 1,
        "attack": 25,
        "defence": 25
    })
})

test("Testing create zombie", () => {
    let bowemanChar = new CreateChar.Zombie("Arthas", "Zombie")

    expect(bowemanChar).toEqual({
        "name": "Arthas",
        "type": "Zombie",
        "health": 100,
        "level": 1,
        "attack": 40,
        "defence": 10
    })
})

test("Testing create daemon", () => {
    let bowemanChar = new CreateChar.Daemon("Sargeras", "Daemon")

    expect(bowemanChar).toEqual({
        "name": "Sargeras",
        "type": "Daemon",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    })
})

test("Testing wrong character with name more than 10 letters", () => {
    expect(() => {new CreateChar.Bowerman("SuperMegaShooter", "Bowerman")}).toThrow()
})

test("Testing wrong character with wrong type", () => {
    expect(() => {new CreateChar.Bowerman("Legolas", "Hunter")}).toThrow()
})

test("Testing level up character", () => {
    let bowemanChar = new CreateChar.Bowerman("Legolas", "Bowerman")
    bowemanChar.levelUp()

    expect(bowemanChar).toEqual({
        "name": "Legolas",
        "type": "Bowerman",
        "health": 100,
        "level": 2,
        "attack": 31.25,
        "defence": 31.25
    })
})

test("Testing level up dead character", () => {
    let bowemanChar = new CreateChar.Bowerman("Legolas", "Bowerman")
    bowemanChar.damage(500)

    expect(() => {bowemanChar.levelUp()}).toThrow()
})

test("Testing damage dead character", () => {
    let bowemanChar = new CreateChar.Bowerman("Legolas", "Bowerman")
    bowemanChar.damage(500)

    expect(() => {bowemanChar.damage(50)}).toThrow()
})

test("Testing kill character", () => {
    let bowemanChar = new CreateChar.Bowerman("Legolas", "Bowerman")

    expect(bowemanChar.damage(500)).toEqual(console.log("Wasted"))
})