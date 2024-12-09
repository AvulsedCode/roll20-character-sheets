mcStandardProfessions = [
    {
        name: {
            noun: "Archivist",
        },
        occupations: ["Academic"],
        description: "You are passionate about preserving the past and uncovering the secrets of the ages. Through weeks upon weeks of research sifting through dusty tomes, you are always seeking to expand your understanding of the world and to bring new knowledge to light.",
        StartingEquipment: [
            { name: "satchel", qty: 1, canChoose: false, type: "mundane" },
            { name: "scroll case", qty: 1, canChoose: false, type: "mundane" },
            { name: "Gambeson Armor", qty: 1, canChoose: false, type: "mundane" },
            { name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
            { name: "lantern", qty: 1, canChoose: false, type: "mundane" },
            { name: "robes", qty: 1, canChoose: false, type: "mundane" },
            { name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
            { name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
            { name: "small collection of books and scrolls", qty: 1, canChoose: false, type: "mundane" },
            { name: "rations", qty: 2, canChoose: false, type: "mundane" },
            { name: "inkpot", qty: 1, canChoose: false, type: "mundane" },
            { name: "quill pen", qty: 1, canChoose: false, type: "mundane" },
            { name: "parchment", qty: 10, canChoose: false, type: "mundane" },
            { name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
        ],
        skillsEachRank: {
            skills: [
                { name: "Crafting", requiresTools: true, options: ["Calligraphy", "Cartography", "Masonry", "Painting", "Pottery", "Woodcarving"] },
                { name: "Influence", requiresTools: false, options: ["Empathy", "Gossiping", "Persuading"] },
                { name: "Knowledge", requiresTools: false, options: ["Arcana", "Art", "Astrology", "Astronomy", "Biology", "Chemistry", "Economics", "Engineering, Geography", "Law", "Military, Politics of [choose region], Religion [choose one]"] },
                { name: "Observation", requiresTools: false, options: ["Appraising", "Intuiting", "Investigating", "Perceiving"] },
            ],
            rankingBlerb: "Each time you gain a rank in the archivist profession (including rank 1), gain +3 History, and +1 in three skills of your choice:",
        },
        occupationBonus: "If you take a profession with the militant tag, gain +2 Forced March.",
        startingWealth: {
            roll: "5d20x2",
            average: 104
        },
        ranking: {
            noun: "tenure",
            specializations: ["Chronicler", "Historian"],
            description: "When you become a rank 1 Archivist, and every time you gain a rank in the Archivist profession, your academic tenure improves.",
            ranksAndSpecializations: [

                {
                    rank: 1,
                    prerequisite: { rank: 0, specialization: "" },
                    specializationTitle: "",
                    description: "Given 8 hours of research at a well-resourced library, you can uncover any written information available to the public.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 2,
                    prerequisite: { rank: 2, specialization: "" },
                    specializationTitle: "",
                    description: "Given one day of research at a well-resourced library, you can uncover any written information, including forbidden texts. Additionally, you may sell your services as a researcher to earn 1d10+10 sc per week.",
                    canChooseSpecialization: false,
                }, {
                    rank: 3,
                    prerequisite: { rank: 2, specialization: "" },
                    specializationTitle: "",
                    description: "Your expertise extends to a specific realm of historical discovery. Upon earning rank 3 of this profession, you may choose between chronicler or historian as your professional specialization. At Archivist ranks 4 and 5, you advance in the same professional track that you chose at this rank.",
                    canChooseSpecialization: true,
                },
                {
                    rank: 3,
                    prerequisite: { rank: 3, specialization: "" },
                    specializationTitle: "Chronicler",
                    description: "You are a recognized expert in historical field work and no longer need to be in a well-resourced library to perform your research services (still earning 1d10+10 sc per week). You also have intimate knowledge of your home region’s geographical history and have a +3 bonus to checks related to locating any ruin, crypt, or cave in that region or recalling information about them. Additionally, given one day in an urban area, you may discern 3 societal aspects of the city (or neighborhood if the city is exceptionally large). Learn the nature of three of the following aspects of the urban area: aristocratic, layfolk, mercantile, military, religious, or underworld.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 3,
                    prerequisite: { rank: 3, specialization: "" },
                    specializationTitle: "Historian",
                    description: "Your tenure as a preeminent historian allows you to recruit students of history to do small tasks and errands for you, provided that you are in a town or city with an academic presence. They will deliver messages, handle shopping transactions, and conduct in-depth research on your behalf. Your services as a researcher now earn you 2d10+20 sc per week.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 4,
                    prerequisite: { rank: 3, specialization: "Chronicler" },
                    specializationTitle: "Chronicler",
                    description: "Your skills of investigation and interview are well known amongst individuals with the academic or aristocratic backgrounds. Given one day in an urban area, you may discern all societal aspects of the city (or neighborhood if the city is exceptionally large). Your research services now earn you 3d10+30 sc per week. Additionally, gain +3 Investigating.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 4,
                    prerequisite: { rank: 3, specialization: "Historian" },
                    specializationTitle: "Historian",
                    description: "You have intimate knowledge of your home region&Apos;s political history, including all lines of nobility, succession, and law, and can recall this information without being in a well-resourced library. You may gain 1 rank in the Barrister profession, including starting equipment and skills. Additionally, your services as a researcher now earn you 4d10+40 sc per week.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 5,
                    prerequisite: { rank: 4, specialization: "Chronicler" },
                    specializationTitle: "Chronicler",
                    description: "You are a famous biographer with access to the highest courts in your home region and are welcome at events hosted by NPCs with the aristocracy or academic backgrounds. You may gain 1 rank in the Honorable profession.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 5,
                    prerequisite: { rank: 4, specialization: "Historian" },
                    specializationTitle: "Historian",
                    description: "Your great historical works have been widely praised within the halls of power and your ability of insight into past events is unmatched. Your studies have revealed to you the approximate location of one lost artifact of legendary value and power within a ruin inside your home region. Furthermore, as one of the most renowned historians in the world, you can secure an audience with most individuals of great influence. Any NPC with the equivalent of 4 or fewer ranks in any occupation will make time to meet with you within 24 hours of your request. Your services as a researcher now earn you 10d10+100 sc per week.",
                    canChooseSpecialization: false,
                }
            ],
        }
    },
    {
        name: {
            noun: "Born Warrior",
        },
        occupations: [""],
        description: "You possess a natural talent for combat and have an unshakable bravery that inspires those around you.With your strong body and quick reflexes, you are a formidable force, always ready to defend those in need and vanquish evil wherever it may lurk.",
        StartingEquipment: [],
        skillsEachRank: {
            skills: [
                { name: "Athleticism", requiresTools: false, options: ["Applied Force", "Athletics", "Sprinting"] },
                { name: "Influence", requiresTools: false, options: ["Intimidating", "Leadership"] },
                { name: "Knowledge", requiresTools: false, options: ["Geography", "History", "Medicine*", "Military Vehicles * [land]"] },
                { name: "Luck", requiresTools: false, options: ["Fortuity", "Scavenging"] },
                { name: "Stamina", requiresTools: false, options: ["Forced March", "Menacing", "Distance Running", "Swimming"] },
                { name: "Survival", requiresTools: false, options: ["Animal Handling", "Dungeoneering", "Navigating *", "Sheltering"] },
            ],
            rankingBlerb: "",
        },
        occupationBonus: "If you take a profession with the militant tag, gain +2 Forced March.",
        startingWealth: {  roll: "5d20x2",  average: 104
        },
        ranking: {
            noun: "",
            specializations: ["", ""],
            description: "",
            ranksAndSpecializations: [],
        }
    },
    {
        name: {
            noun: "Criminal",
        },
        occupations: [""],
        description: "You live on the fringes of society, always looking for opportunities to turn a profit through illegal means. Whether it is through thievery, blackmail, or shady deals, you have a knack for manipulating the law to your advantage, constantly staying one step ahead of the authorities.",
        StartingEquipment: [],
        skillsEachRank: {
            skills: [
                { name: "Acrobatics", requiresTools: false, options: ["Balancing", "Contorting", "Tumbling"] },
                { name: "Athleticism", requiresTools: false, options: ["Athletics", "Sprinting"] },
                { name: "Crafting", requiresTools: false, options: ["Brewing", "Cooking, Jeweling", "Painting", "Pottery, Weaving", "Woodcarving"] },
                { name: "Influence", requiresTools: false, options: ["Deceiving, Gossiping", "Intimidating", "Persuading"] },
                { name: "Knowledge", requiresTools: false, options: ["Art", "Law", "Politics of [choose region]", "Luck.Fortuity, Scavenging"] },
                { name: "Luck", requiresTools: false, options: ["Fortuity, Scavenging"] },
                { name: "Observation", requiresTools: false, options: ["Appraising", "Eavesdropping", "Intuiting", "Investigating", "Perceiving"] },
                { name: "Performance", requiresTools: false, options: ["Entertaining", "Savoir Faire"] },
                { name: "Subterfuge", requiresTools: false, options: ["Disguising*", "Evading", "Forging*, Lockpicking*, Sleight of Hand"] },
                { name: "Survival", requiresTools: false, options: ["Dungeoneering", "Sneaking"] },
            ],
            rankingBlerb: "",
        },
        occupationBonus: "If you take a profession with the underworld tag, gain +2 Intuiting.",
        startingWealth: {  roll: "4d100 sc",  average: 202,
        },
    },
    {
        name: {
            noun: "Entrepreneur",
        },
        occupations: [""],
        description: "You have a keen eye for opportunity and an understanding of commerce. You are always seeking out new and innovative ways to make a profit, whether it’s through trading goods, investing in businesses, or developing new products.Your business savvy has made you one of the most successful individuals in your town, and you’re always looking for new opportunities to expand your wealth and influence.",
        StartingEquipment: [],
        skillsEachRank: {
            skills: [
                { name: "Crafting", requiresTools: false, options: ["Alchemy, Brewing", "Calligraphy, Carpentry,Cartography, Cobbling", "Cooking, Glassblowing, Jeweling, Leatherworking, Masonry, Painting", "Pottery, Smithing", "Weaving", "Woodcarving"] },
                { name: "Influence", requiresTools: false, options: ["Deceiving", "Empathy, Gossiping", "Persuading"] },
                { name: "Knowledge", requiresTools: false, options: ["Art", "Economics", "History", "Law", "Politics of [choose region]"] },
                { name: "Luck", requiresTools: false, options: ["Fortuity"] },
                { name: "Performance", requiresTools: false, options: ["Entertaining", "Instrument* [choose one], Savoir Faire"] },
                { name: "Observation", requiresTools: false, options: ["Appraising", "Eavesdropping", "Intuiting", "Investigating", "Perceiving"] },
                { name: "Subterfuge", requiresTools: false, options: ["Forging*, Sleight of Hand"] },
            ],
            rankingBlerb: "",
        },
        occupationBonus: "If you take a profession with the mercantile tag, gain +2 additional Skill Points in Appraising.",
        startingWealth: { roll: "10d20x2 sc", average: 210, },
    },
]