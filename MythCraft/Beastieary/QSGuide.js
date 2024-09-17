const Monsters = [
    {
        MonsterName: "Uvior",
        size: "Medium",
        type: "Undead",
        MonsterLevel: 4,
        typeFlavor: "Arcane",
        str: -1,
        dex: 3,
        ref: 13,
        end: 2,
        fort: 12,
        awr: 2,
        ant: 12,
        intellegence: 2,
        logistics: 12,
        charisma: 2,
        will: 12,
        HP: 31,
        AR: 13,
        movement: {
            walk: 40,
            climb: 0,
            swim: 0,
            fly: 0,
        },
        Immune: ["Necrotic"],
        Vulnerable: ["Occult 2"],
        DR: ["5/Psychic"],
        senses: { darkvision: 0, blindsight: 60 },
        skills: [],
        Traits: ["Ethereal", "Steel Mind", "Regen 2"],
        Features: [
            { featureName: "Dark Flight", featureDescription: "Uvior can fly while in dim light or darkness. If he is exposed to bright light while flying, he falls. Growing Horde. When Uvior Takes a Rest, at the end of that time he automatically summons 1d4 Skeletons." }
        ],
        ActionInstructions: "On Uvior’s turn, he can MOVE and take TWO of the following actions, or take the same action twice.",
        Actions: [
            { actionName: "Move", description: "Uvior moves up to his speed." },
            { actionName: "Attack", description: "Uvior makes an attack. He can only use his Assailing Shadow attack if the target is in dim light or darkness." },
            { actionName: "Assailing Shadow", description: "Ranged (60ft) Spell. +3 vs WILL. Hit: 6(1d12) Necrotic and target is Tethered." },
            { actionName: "Draining Touch", description: "Natural melee weapon. +3 vs AR. Hit: 8 (1d10+3) Necrotic and target is Tethered." },
            { actionName: "Snuff", description: "One source of nonmagical light or light from a divine prayer or primal chant within 60ft of Uvior is extinguished." },
            { actionName: "Move And Undead Horde. Uvior summons 1d4-1 Skeletons, which appear in random unoccupied spaces within 30ft of him." },
        ],
        ReactionInstructions: "Uvior may use his Tether reaction once, regaining the ability each time he starts his turn.",
        Reactions: [

            { actionName: "Tether", description: "When Uvior takes damage, he may use his reaction to choose a creature that he can see within 60ft of him. If that creature was Tethered since the start of Uvior’s last turn, then that creature takes ½ of the damage that Uvior would have taken." },
        ],
    }];