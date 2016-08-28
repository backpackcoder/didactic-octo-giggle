var monsters = [
    {
        name: "Goblin",
        size: "small",
        type: "humanoid",
        armor_class: 15,
        hit_dice: "2d6",
        speed: 30, // in feet
        strength: 8,
        dexterity: 14,
        constitution: 10,
        intelligence: 10,
        wisdom: 8,
        charisma: 8,
        passive_perception: 9,
        skills: [
            {name: "stealth", bonus: 6},
            {
                name: "Nimble Escape",
                description: "The goblin can take the Disengage or Hide action as a bonus action each turn"
            }
        ],
        senses: [
            {name: "darkvision", distance: "60"}
        ],
        languages: [
            "Common", "Goblin"
        ],
        challenge: .25,
        description: "Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures."
    },
    {
        name: "Orc",
        size: "small",
        type: "humanoid",
        armor_class: 13,
        hit_dice: "2d8+6",
        speed: 30, // in feet
        strength: 16,
        dexterity: 12,
        constitution: 16,
        intelligence: 7,
        wisdom: 11,
        charisma: 10,
        passive_perception: 10,
        skills: [
            {name: "intimidation", bonus: 2},
            {
                name: "Aggressive",
                description: "As a bonus action, the orc can move up to it's speed towards a hostile creature it can see."
            }
        ],
        senses: [
            {name: "darkvision", distance: "60"}
        ],
        languages: [
            "Common", "Goblin"
        ],
        challenge: .5,
        description: "Orcs are savage humanoids with stooped postures, piggish faces, and prominent teeth that resemble tusks. They gather in tribes that satisfy their bloodlust by slaying any humanoids that stand against them."
    }
];