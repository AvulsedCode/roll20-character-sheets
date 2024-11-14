mcStandardProfessions = [
    {
        name: {
            noun: "Enave",
        },
        occupations: [],
        description: "You command a versatile set of skills and an equally versatile personality. A classic jack- of - all - trades, and master of none, you are equally skilled charming your way out of a sticky situation, picking locks, or evading attackers with your quick wits and nimble movements. You have learned to adapt to whatever situation life throws at you and have a pension for being able to handle any job with some amount of success due to your sheer adaptability.",
        StartingEquipment: [],
        skillsEachRank: {
            skills: [],
            rankingBlerb: "",
        },
        occupationBonus: "",
        startingWealth: { roll: "5d20x3 sc", average: 156, },
    },
    {
        name: {
            noun: "Noble title",
        },
        occupations: [],
        description: "You might have been born into wealth and privilege, with a strong family lineage and a respected name; or alternatively, through luck or deed, you have been bestowed a title among the aristocracy of your region.With your education, wealth, and connections, you have the capacity to shape the world around you, whether it is through politics, diplomacy, or simply using your family’s wealth and influence to fund worthy causes and projects. You strive to maintain the honor and prestige of your family name, to protect your position, and to ensure your continued prosperity.",
        StartingEquipment: [],
        skillsEachRank: {
            skills: [
                { name: "Crafting", requiresTools: false, options: ["Alchemy, Calligraphy, Cartography, Painting", "Weaving", "Woodcarving"] },
                { name: "Influence", requiresTools: false, options: ["Deceiving", "Empathy, Gossiping", "Intimidating, Leadership, Persuading"] },
                { name: "Performance", requiresTools: false, options: ["Dancing", "Entertaining", "Instrument* [choose one], Savoir Faire"] },
                { name: "Knowledge", requiresTools: false, options: ["Arcana, Art, Astrology, Astronomy,Economics, Geography, History", "Law", "Medicine *, Military, Politics of[choose region] Religion [choose one]"] },
                { name: "Observation", requiresTools: false, options: ["Appraising", "Eavesdropping", "Intuiting", "Investigating", "Perceiving"] },
            ],
            rankingBlerb: "",
        },
        occupationBonus: "If you take a profession with the aristocratic tag, gain +2 Gossiping.",
        startingWealth: { roll: "10d20x3 sc", average: 315, },
    },
    {
        name: {
            noun: "Outlander",
        },
        occupations: [],
        description: "You come from a different place, with different customs and beliefs than those around you.Perhaps you hail from a faroff nation, or maybe you are more at home in the wilderness than in an urban environment.Your unique perspective makes you a valuable asset, as you bring fresh ideas and new ways of thinking to the table.However, it can also make you an outsider, seen as strange or untrustworthy by those who do not understand your ways.",
        StartingEquipment: [],
        skillsEachRank: {
            skills: [
                { name: "Acrobatics", requiresTools: false, options: ["Balancing", "Contorting"] },
                { name: "Athleticism", requiresTools: false, options: ["Applied Force", "Athletics", "Sprinting"]},
                { name: "Crafting", requiresTools: false, options: ["Carpentry", "Cartography", "Cobbling", "Cooking,Leatherworking", "Weaving", "Woodcarving"] },
                { name: "Performance", requiresTools: false, options: ["Instrument* [choose one]"] },
                { name: "Knowledge", requiresTools: false, options: ["Astrology", "Astronomy", "Geography", "Medicine *", "Vehicles * [land]"] },
                { name: "Observation", requiresTools: false, options: ["Intuiting", "Perceiving"] },
                { name: "Stamina", requiresTools: false, options: ["Distance Running", "Forced March", "Swimming"] },
                { name: "Survival", requiresTools: false, options: ["Animal Handling", "Dungeoneering", "Foraging, Nature, Navigating *, Sheltering", "Sneaking, Tracking"]}
            ],
            rankingBlerb: "",
        },
        occupationBonus: "If you take a profession with the wanderer tag, gain +2 Navigating *.",
        startingWealth: { roll: "5d20x2 sc", average: 104, },
    }];    