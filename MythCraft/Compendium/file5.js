mcStandardProfessions = [

    {
        name: {
            noun: "Thief",
        },
        occupations: ["Underworld"],
        description: "You use your agility and cunning to steal from the wealthy and powerful. You might be a pickpocket, an opportunist, or a brute that holds people up.Regardless, you always have an eye out for the next big score, and you are not above using violence if it means getting what you want. You thrive in the shadows, slipping in and out of buildings and alleyways undetected, and relish the excitement of pitting your skills against those of your marks.",
        StartingEquipment: [
            { name: "daggers or knives", qty: 4, canChoose: false, type: "mundane" },
            { name: "pocketed cloak", qty: 1, canChoose: false, type: "mundane" },
            { name: "belt pouches", qty: 3, canChoose: false, type: "mundane" },
            { name: "brigandine armor", qty: 1, canChoose: true, type: "tool or kit" },
            { name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
            { name: "hooded lantern", qty: 1, canChoose: false, type: "mundane" },
            { name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
            { name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
            { name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
            { name: "rations", qty: 2, canChoose: false, type: "mundane" },
            { name: "50 ft rope,", qty: 1, canChoose: false, type: "mundane" },
            { name: "crowbar", qty: 1, canChoose: false, type: "mundane" },
            { name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
        ],
        skillsEachRank: {
            skills: [
                { name: "Acrobatics", requiresTools: true, options: ["Balancing", "Contorting, Tumbling"] },
                { name: "Athleticism", requiresTools: true, options: ["Athletics, Sprinting"] },
                { name: "Crafting*", requiresTools: true, options: ["Jeweling", "Painting", "Pottery, Weaving", "Woodcarving"] },
                { name: "Influence", requiresTools: false, options: ["Deceiving", "Empathy, Gossiping", "Intimidating"] },
                { name: "Knowledge", requiresTools: true, options: ["Art", "Economics", "Geography, History", "Law", "Politics of[choose region]"] },
                { name: "Luck", requiresTools: true, options: ["Fortuity"] },
                { name: "Observation", requiresTools: true, options: ["Appraising", "Eavesdropping", "Intuiting", "Investigating", "Perceiving", "Dungeoneering", "Sneaking"] },
                { name: "Performance.", requiresTools: true, options: ["Entertaining", "Savoir Faire"] },
                { name: "Stamina", requiresTools: true, options: ["Distance Running", "Swimming"] },
                { name: "Subterfuge", requiresTools: true, options: ["Disguising*, Forging*, Lockpicking*, Sleight of Hand"] },
                { name: "Survival", requiresTools: true, options: ["Dungeoneering", "Sneaking"] },
            ],
            rankingBlerb: "",
        },
        occupationBonus: "",
        startingWealth: { roll: "", average: 100, },
        ranking: {
            noun: "tenure",
            specializations: ["", ""],
            description: "Second story work",
            ranksAndSpecializations: [

                {
                    rank: 1,
                    prerequisite: { rank: 0, specialization: "" },
                    specializationTitle: "",
                    description: "Given one day of thieving in any medium or large sized settlement, you earn 2d10 sc with a 10% chance of being discovered by the local authorities.For each day spent thieving in a given month, you gain an additional 10% chance of getting discovered, which accumulates for each day spent performing this action(two days leads to a 20 % chance, three days to a 30 % chance, etc.) with no upper limit to the likelihood of getting discovered. If discovered, you gain -1 community Goodwill and the local authorities immediately know your description and will seek you out for arrest or recompense.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 2,
                    prerequisite: { rank: 1, specialization: "" },
                    specializationTitle: "",
                    description: "Your thieving now earns you 4d10 sc per day. Additionally, given one day, you are able to find sympathetic criminals in any medium or large settlement.These criminals will direct you to inns and taverns that will always serve you, regardless of Goodwill, and will never report you to the authorities.Some of these institutions might offer food and lodgings for free in exchange for your services.",
                    canChooseSpecialization: false,
                }, {
                    rank: 3,
                    prerequisite: { rank: "", specialization: "" },
                    specializationTitle: "",
                    description: "Your thieving now earns you 8d10 sc per day. Your chance of discovery can never rise above 40%. You are now able to locate the dominant thieves’ guild in any medium or large settlement.Once per week this guild will offer you a specialty task that earns your thieving income x2 with a set 20% chance of discovery.The guild will always offer you safe lodging and mercantile services, regardless of Goodwill.",
                    canChooseSpecialization: true,
                },
                {
                    rank: 4,
                    prerequisite: { rank: 1, specialization: "" },
                    specializationTitle: "",
                    description: "Your thieving now earns you 16d10 sc per day. The thieves’ guild of your home region now considers you a member and gives you access to passages across any settlement. When using these passages, you will never run into any authorities.If there is a bounty on your head, you may pay your guild 75% of the bounty’s cost and they will make the bounty disappear.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 5,
                    prerequisite: { rank: 0, specialization: "" },
                    specializationTitle: "",
                    description: "Your thieving income is now 20d10+200 sc per day. Your cumulative chance of discovery can never rise above 20%. If there is a bounty on your head, you may pay your guild 50% of the bounty’s cost and they will make the bounty disappear. Additionally, once per week you may recruit up to three thieves in any settlement.These thieves will not travel with you but will increase your subterfuge tag skill checks by + 3 per Thief for one day after being hired.",
                    canChooseSpecialization: false,
                },

            ],
        }
    },
    {
        name: {
            noun: "Thug",
        },
        occupations: ["Underworld", "Militant"],
        description: "You are no stranger to the brutal struggle of urban life, outside the eyes of the law where the strong take from the weak and the sharpness of a blade says more than a written decree.Perhaps your actions come from necessity or maybe they come from a desire for power, but either way you are not afraid to use your cunning, strength, and wits to take what you want when you want it. You claim your territory through brute force or intimidation and don’t let anything stand in your way",
        StartingEquipment: [
            { name: "backpack,", qty: 1, canChoose: false, type: "mundane" },
            { name: "hooded lantern", qty: 1, canChoose: false, type: "mundane" },
            { name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
            { name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
            { name: "clothes (simple)", qty: 1, canChoose: true, type: "tool or kit" },
            { name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
            { name: "cestus or brass knuckles", qty: 1, canChoose: false, type: "mundane" },
            { name: "brigandine armor", qty: 1, canChoose: false, type: "mundane" },
            { name: "50 ft rope", qty: 1, canChoose: false, type: "mundane" },
            { name: "manacles", qty: 1, canChoose: false, type: "mundane" },
            { name: "rations", qty: 2, canChoose: false, type: "mundane" },
            { name: "torche", qty: 2, canChoose: false, type: "mundane" },
        ],
        skillsEachRank: {
            skills: [
                { name: "Acrobatics", requiresTools: true, options: ["Balancing"] },
                { name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
                { name: "Influence", requiresTools: false, options: ["Deceiving", "Intimidating"] },
                { name: "Luck", requiresTools: true, options: ["Fortuity,Scavenging"] },
                { name: "Observation", requiresTools: true, options: ["Appraising", "Eavesdropping", "Intuiting", "Investigating", "Perceiving"] },
                { name: "Stamina", requiresTools: true, options: ["Distance Running", "Forced March, Swimming"] },
                { name: "Subterfuge", requiresTools: true, options: ["Disguising*", "Evading", "Forging*, Lockpicking *, Sleight of Hand"] },
                { name: "Survival", requiresTools: true, options: ["Dungeoneering, Navigating*, Sneaking, Tracking"] },
            ],
            rankingBlerb: "",
        },
        occupationBonus: "",
        startingWealth: { roll: "", average: 100, },
        ranking: {
            noun: "Gang Leader",
            specializations: ["", ""],
            description: "When you become a rank 1 Thug, and every time you gain a rank in the Thug profession, you improve the strength of your gang and expand your territory and influence.Every month that you operate a territory, you gain - 1 Goodwill with the local community.",
            ranksAndSpecializations: [

                {
                    rank: 1,
                    prerequisite: { rank: 0, specialization: "" },
                    specializationTitle: "",
                    description: "You have laid claim to territory in a medium or large sized settlement equivalent to one city block.Inns, Taverns, and Storefronts in that area will pay into your protection racket each week, earning you 3d10 + 30 sc after your own expenses.Businesses in your territory will always serve you, regardless of Goodwill.Once per week, you can recruit a maximum of three thugs of Monster Level 2 or lower into your gang.These thugs will travel with and protect you but only to a distance of 1 mile outside your territory",
                    canChooseSpecialization: false,
                },
                {
                    rank: 2,
                    prerequisite: { rank: 1, specialization: "" },
                    specializationTitle: "",
                    description: "Your territory expands to approximately three city blocks and your protection racket now generates 6d10 + 60 sc per week.Your maximum number of thugs increases to six.",
                    canChooseSpecialization: false,
                }, {
                    rank: 3,
                    prerequisite: { rank: 1, specialization: "" },
                    specializationTitle: "",
                    description: "Your territory expands to approximately six city blocks and your protection racket now generates 12d10 + 120 sc per week.Your maximum number of thugs increases to 12. Additionally, you have managed to buy off a crooked guard who will turn a blind eye to low tier crimes in your territory for 10 sc per week.",
                    canChooseSpecialization: true,
                },
                {
                    rank: 4,
                    prerequisite: { rank: 1, specialization: "" },
                    specializationTitle: "",
                    description: "Your territory expands to approximately ten city blocks and your protection racket now generates 20d10 + 200 sc.Your maximum number of thugs increases to 20 and it now costs 30 sc to pay off six guards in the area, instead of only one. You are a greatly feared authoritarian figure at this point. Gain rank 1 of the Honorable profession.",
                    canChooseSpecialization: false,
                },
                {
                    rank: 5,
                    prerequisite: { rank: 1, specialization: "" },
                    specializationTitle: "",
                    description: "Your territory expands to approximately fifteen city blocks and your protection racket now generates 40d10 + 400 sc. Your maximum number of thugs increases to 30 and it now costs 100 sc to pay off every guard in the area(instead of only one) for one week. Your MC may decide that a small minority of guards are incorruptible, but such guards are initially unaware that their associates have been bought out.They may or may not ever learn the truth. Finally, you gain the Call a Hit ability. Call a Hit. You may send thirty thugs to burn down a property, murder a target, or extort a bank or wealthy merchant for 20d10 sc. You lose 5 Goodwill when you do this.Once you use this ability, you cannot use it again until a month has passed.",
                    canChooseSpecialization: false,
                },
                {
    ],
        }
    },
    {
        name: {
            noun: "",
        },
        occupations: [""],
        description: "",
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
            rankingBlerb: "",
        },
        occupationBonus: "",
        startingWealth: { roll: "?d20x?", average: 100, },
        ranking: {
            noun: "tenure",
            specializations: ["", ""],
            description: "",
            ranksAndSpecializations: [

            ],
        }
    }
];




