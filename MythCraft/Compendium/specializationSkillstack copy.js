const TalentStacks= [


    {
        displayName: "Acrobat",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Acrobatics tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            
           
         ],
    },
    {
        displayName: "Alchemy Expert",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Alchemy skill. Each time you Take a Rest, you can craft a potion or a vial of caustic flame. Either option loses its potency after 24 hours.",
        BenefitList: [
            { benefitName: "Potion", BenefitDescription: "When a creature drinks this potion, it regains 1d4 HP." },
            { benefitName: "Flame Vial", BenefitDescription: "A creature can throw this vial as an improvised thrown weapon. If it hits, the target creature gains the Burning (1d4) condition." },
            
           
         ],
    },
    {
        displayName: "A Little Bit Of Soul",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "You gain 6 Skill Points you can assign to any skills with the INT tag. Additionally, when making a check with a skill that has the Crafting or Knowledge tag, and that is a skill you have Skill Points for, you may use your CHA instead of your INT for your Skill Check.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Animal Whisperer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Animal Handling skill. You gain the ability to calm agitated animals. By spending 3 AP, you may choose one Beast within 20 ft of you. Make an Animal Handling check against the creature’s WILL. If you succeed, then you Charm the creature and it will not harm you, though it will not go out of its way to help you. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Animal Trainer",
        prerequisites: ["Skill Specialization,Animal Whisperer"],
        isRepeatable: false,
        DescriptionParagraphs: "If you use your Animal Whisperer ability on the same beast once per day for a month, the creature becomes a loyal pet. It trusts you and will risk its life to protect you.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Arcanist Understudy",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Arcana skill. You learn one arcane cantrip of your choice. INT is your magic attribute for this cantrip. If you already know arcane magic through a different talent, use that magic attribute instead.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Artist Aspirant",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Incompatible: Entertainer (Artist) background Gain +3 in the Art skill. Given one week of downtime, you can create one piece of art. If you sell it, it earns you 1d10+10 sc.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Artistic Apprentice",
        prerequisites: ["Skill Specialization,Artist Aspirant"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain the entry level of the Entertainer Profession. You must choose the Artist track instead of the Performer track. This replaces your Artist Aspirant Talent.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Astrologer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Astrology skill. When you Take a Rest, roll 1d20 and write down the result. At any point before the next time you Take a Rest,  when you roll a d20, you may choose to replace it with the number that you wrote down. Once you use this ability, you cannot use it again until you next Take a Rest.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Astronomer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Astronomy skill. If you can see the stars, you can use your Astronomy skill when navigating or mapping (as if it were the Cartography or Navigating skills).",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Athlete",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Athleticism tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Aware",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills that use the AWR attribute.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Balanced",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Balancing skill. When a creature attempts to knock you prone, instead of using your defense against that particular effect, you may choose to roll a DEX (Balancing) skill check instead. If you meet or exceed their attack roll, you do not fall Prone (but still suffer damage or other effects, provided that they hit your appropriate defense).",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Biologist",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Biology skill. You can immediately identify if a creature has the Beast tag or Monstrosity tag, or if it has neither. This costs 0 AP",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Brewer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Brewing skill. Your drinks are particularly delicious. When you Take a Rest, you can create one serving of a beverage of your choice. A creature that consumes it gains 1d6 Shield HP.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Brewing Expert",
        prerequisites: ["Skill Specialization,Brewer"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Brewing skill. You can now produce three servings of your beverage when you use your Brewer feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "By Feel,Not Measure",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "You gain 6 Skill Points you can assign to any skills with the INT tag. Additionally, when making a skill check with the Crafting or Knowledge tags, you may use your AWR instead of your INT for your Skill Check.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Calligrapher",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Calligraphy skill. When you spend an hour of uninterrupted concentration and the requisite supplies, you can perfectly mimic any creature’s handwriting and/or make an exact copy of one page of text. You cannot Recoup while doing this, given the amount of concentration such endeavors require.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Careful Appraiser",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Appraising skill. When you Take a Rest, you may choose one weapon, set of armor, or item and carefully clean it to increase its value.You can sell such an item for 110% its original cost. You cannot use this ability multiple times on the same object.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Carpenter",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Carpentry skill. If you spend an hour reinforcing a door, gate, or section of wall with wooden planks, you may increase its DT by 5. You cannot do this to an area larger than 20 ft 2.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Cartographer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Cartography skill. After charting an area (which takes a minimum of 1 week of exploration), you may sell a map of that area. You may sell one map per day per area that you have charted, and each map sold earns you 5 sc.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Charismatic",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills that use the CHA attribute.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Chef",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Cooking skill. Your artistic sense of how to mingle flavors allows you to improve any food and drink. When a creature consumes food or drink that you have had at least ten minutes to modify, you Charm that creature for 1 hour. At the end of this time, the creature is not aware that they were Charmed.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Chemist",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Chemistry skill. Your profound understanding of how to mix chemicals enables you to manipulate the qualities of food and drink. When a creature consumes food or drink that you have had at least one minute to modify, you may roll a Chemistry skill check against that creature’s FORT. If you hit, they become Sickened for 1 hour. Any magic that reveals poison reveals this tampering.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Climber",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Athletics skill. You may give yourself a Climbing speed equal to your walking speed for 1 minute. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Cobbler",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Cobbling skill. Each time you Take a Rest, you may patch a pair of shoes. For the next 24 hours, whoever wears those shoes gains a +3 bonus to the Forced March skill.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Cobbling Mastery",
        prerequisites: ["Skill Specialization,Cobbler"],
        isRepeatable: false,
        DescriptionParagraphs: "Each time you Take a Rest, you may patch three pairs of shoes. For the next 24 hours, whoever wears those shoes gains a +3 bonus to the Forced March skill.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Contortionist",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Contorting skill. Moving through spaces that would require you to Squeeze costs no additional movement.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Crafter",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Crafting tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Dancer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Dancing skill. Your REF increases by +1.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Deckhand",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Vehicles (Water) skill. You can book passage on a boat or ship for free, provided that you contribute to maintaining the vessel. A ship that is already overstaffed might still turn you down.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Dextrous",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills that use the DEX attribute.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Disguise Artist",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Disguising skill. You no longer need a disguise kit to make a Disguising check, provided that you are able to change your clothing, hairstyle, props, etc.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Distance Runner",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Distance Running skill. You can run a number of miles equal to your END x 2 (min. 2 miles) at a steady pace before needing to make Distance Running checks.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Double Time",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Forced March skill. When marching at a normal pace, you can travel 150% the previous distance before needing to make Fatigue rolls.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Driver",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Vehicles (Land) skill. You have a way of coaxing vehicles beyond their normal capacity. Vehicles that you drive can traverse more uneven terrain than they normally could without penalty, and they ignore difficult terrain imposed from rocks, debris and the like. Difficult terrain imposed by mud or sludge still slows your vehicle.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Dungeoneer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Dungeoneering skill. Your ANT increases by +1.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Eavesdropper",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Eavesdropping skill. When you make an Eavesdropping check, you may roll 2d20 and use the higher. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Economist",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Economics skill. By spending 1 month in a town or urban area, you can gain +1 Goodwill among the Aristocracy or Mercantile spheres (your choice each time). You may sell your services as an economist for 10 sc weekly while in a settled area.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Empathetic",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Empathy skill. Once when you Take a Rest, you may commiserate with a companion of your choice. Make an Empathy check against a DC set by your MC. If you succeed, your companion removes a permanent Charmed, Enthralled, Frightened, or Phobic condition.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Enduring",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills that use the END attribute.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Engineer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Engineering skill. You can consult on building repairs to earn 10 sc per week while in an urban area.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Entertainer Aspirant",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Entertaining skill. When in an inn or tavern, you can perform in exchange for free room and board.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Entertainer",
        prerequisites: ["Skill Specialization,Entertainer Aspirant or Musician"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain the entry level of the Entertainer Profession. You must choose the Performer track instead of the Artist track. This replaces your Entertainer Aspirant Talent.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Evader",
        prerequisites: ["Skill Specialization,"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Evading skill. When a creature makes an AWR check to notice you, if you are not in combat, you may move up to 20 ft before the check is resolved, potentially mitigating the check altogether. (2/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Forager",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Foraging skill. When you Take a Rest, you can always find a minimum of 1 day’s worth of rations, even if you do not make a Foraging check. (If you are in an extremely bleak environment, such as the void of space, your MC might rule that this ability does not work.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Forceful",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Applied Force skill. When you have a mechanism to leverage your strength to greater effect, such as a crowbar and a fulcrum, then when you make an Applied Force check, treat any d20 roll of 1-9 as if it were a 10.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Forgery",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Forging skill. If you assemble nice inks and fine papers before you forge a document, you can make it more convincing. For every 10 sc you spend, add +1 to your Forging check. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Fortuitous",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Fortuity skill. When making a Fortuity skill check, your crit range increases by 3 (e.g., from 20 to 17-20). The maximum crit range is still 16-20.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Geographer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Geography skill. When your visibility is not restricted, if there is at least one notable landmark within sight, you can estimate your distance from the nearest settled area. This estimation is within 1 mile of being perfectly accurate.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Glassblower",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Gossiping skill. You can gossip to sully someone’s reputation, provided that they are not there. Make a Gossiping check against a DC equal to 15 + that creature’s CHA. If you hit, they lose 1 Goodwill. You can only do this 1/Rest, and can only target the same creature 1/Week.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Historian",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the History skill. After reading something from a book, you can recall it with perfect accuracy for 1 year, unless your memory is magically modified.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Influencer",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Influence tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Intelligent",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills that use the INT attribute.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Intimidator",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Intimidating skill. Before attempting to intimidate someone, you can study them to determine how to effectively frighten them. After spending 1 minute studying them, make an AWR/Intuiting check against a creature’s WILL. If you succeed, then you know exactly how to get under their skin. Roll 2d20 and use the higher when you make your Intimidating roll. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Intuitive",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Intuiting skill. Your intuition extends beyond living people to intellectual fields as well. When you would make an INT roll, you can add your Intuiting bonus. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Investigator",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Investigating skill. When making an Investigating check, you can add your Fortuity on top of your Investigating. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Jack Of All Trades",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Savoir Faire skill. You can present yourself to another character as though you have 1 professional rank in any occupation of your choice. This deception is nonmagical and lasts for 1 hour. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Jeweler",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Jeweling skill. You can produce a work of semiprecious jewelry, provided that you have some form of mineral. Make a Jeweling roll. You can sell your jewelry for that many sc. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Jewelry Expert",
        prerequisites: ["Skill Specialization,Jeweler, at least 3 Professional Ranks"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Jeweling skill.You can produce a work of very precious jewelry provided that you have some form of precious mineral. Make a Jeweling roll. You can sell your jewelry for that many dc. (1/Month)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Knowledgeable",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Knowledge tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Lawyer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Law skill. While staying in a friendly settlement you may sell your services as a lawyer or mediator to settle local disputes. Doing so earns you a number of sc each week equal to your Law skill, and increases your community goodwill by +1 at the end of each month.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Leader",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Leadership skill. When you take your first turn after rolling Initiative, gain +5 ft speed when you spend AP to move.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Lean-To",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Sheltering skill. When you fail a Sheltering check, you may spend 30 minutes to create a lean-to, provided that rocks, brambles, and the like are in your area. This provides minimal protection from wind and extreme temperatures, granting you and other creatures that use it a +2 bonus on END checks made to resist extreme weather.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Leatherworker",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Leatherworking skill. You can produce a nice leather good provided that you have some form of animal hide. Make a Leatherworking roll. You can sell your goods for that many sc. (1/Week)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Lockpicker",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Lockpicking skill. When you are in a settled area, you can scrounge for supplies for 1d6+1 rounds to find tools that you can use to pick a lock, even if they would not normally be viable lockpick tools. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Lucky",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Luck tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Mason",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Masonry skill. You can produce a nice stone good provided that you have some form of stone to work with. Make a Masonry roll. You can sell your goods for that many sc. (1/Week)",
        BenefitList: [
            
         ],
    },
    {
        displayName: "Medic",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Medicine skill. When you have medical supplies and apply them to a Bloodied creature, it regains 1d6 HP. (1/Rest)",
        BenefitList: [
         
           
         ],
    },
    {
        displayName: "Menace",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Menacing skill. When you menace someone, you may first display your strength to show that you mean business. Make a STR/ Applied Force check vs the creature’s WILL. If you hit, then you can roll 2d20 for your Menacing check, keeping the higher. (1/Rest)",
        BenefitList: [
         
         ],
    },
    {
        displayName: "Musician",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Instrument [your choice] skill. When in an inn or tavern, you can perform in exchange for free room and board.",
        BenefitList: [
            
         ],
    },
    {
        displayName: "Naturalist",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Nature skill. If you gather plant matter that would normally be inedible, you can make one day’s worth of rations out of it. (1/Week)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Navigator",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Navigating skill. So long as you can see a natural landmark, you cannot become lost, except by magical means.",
        BenefitList: [
            
         ],
    },
    {
        displayName: "Observant",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Observation tag.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Officer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Military skill. You know how to speak with military officials. You can request an audience with any military officer who has professional ranks in the militant occupation and they will meet with you within 24 hours of your request.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Painter",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Painting skill.You can produce a nice painting provided that you have some form of canvas and pigments. Make a Painting roll. You can sell your goods for that many sc. (1/Week)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Perceptive",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Perceiving skill. When you make a check with another skill that has the Observation tag, you can add ½ your Perceiving as an additional bonus. (1/Rest)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Performer",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Performance tag.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Persuasive",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Persuading skill. You can cast the Charm Creature primal chant using your Persuading bonus for the attack roll, which does not count as magical when cast in this way. (1/Rest)",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
            { benefitName: "", BenefitDescription: "" },
           
         ],
    },
    {
        displayName: "Pickpocket",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Sleight of Hand skill. When you have an item with the light tag on your person, you can give it the concealed tag as well. Only two such items can gain this benefit at a time.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Politician",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Politics of [choose region] skill. You may leverage favors to secure a meeting with a noble or politician who outranks you. Choose an NPC with professional ranks equal to or less than your professional ranks + 1. They will meet with you within 24 hours after you make the request. (1/Week)",
        BenefitList: [
           
           
         ],
    },
    {
        displayName: "Potter",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Pottery skill. You can produce some pottery provided that you have some form of clay to work with. Make a Pottery roll. You can sell your goods for that many sc. (1/Week)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Powerlifter",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Athletics skill. You can carry two additional Unwieldy items without being encumbered.",
        BenefitList: [
           
           
         ],
    },
    {
        displayName: "Practice Makes Perfect",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "You gain 6 Skill Points you can assign to any skills with the INT tag. Additionally, when making a skill check with the Crafting or Knowledge tags, you may use your DEX instead of your INT for your Skill Check.",
        BenefitList: [
            
         ],
    },
    {
        displayName: "Religious",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Religion skill, choosing which religion. Most religious centers will provide food and shelter to you for free, even if you do not share their faith (extremists and secretive cults will not extend this courtesy to you).",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Scavenger",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Scavenging skill. When you fail a Scavenging check, you may instead treat it as the lowest tier of success. (1/Rest)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Smith",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Smithing skill. You can repair damaged and broken weapons and armor that are made of metal. If all of the pieces of the weapon or armor are still available, you can completely restore a weapon or armor set. (1/Week)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Sneak",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Sneaking skill. If you are hidden or concealed, you may move up to 20 ft without being spotted, so long as you also end your movement remaining hidden or concealed. (1/Rest)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Sprinter",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Sprinting skill. When you roll Initiative, you can give yourself +5 ft speed when you spend AP to move. This lasts for the duration of the fight. (1/Rest)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Stamina",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Stamina tag.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Strong",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills that use the STR attribute.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Subverter",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Subterfuge tag.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Survivalist",
        prerequisites: ["Skill Specialization, Repeatable"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain 6 Skill Points, which you can spend on any skills with the Survival tag.",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Swimmer",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Athletics skill. You may give yourself a Swimming speed equal to your walking speed for 1 minute. (1/Rest)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Tracker",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Tracking skill. When you fail a Tracking skill check, you may count it as the lowest tier of successful. (1/Rest)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Tumbler",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Tumbling skill. You can stand from being Prone for 0 AP on your turn, provided that your movement is not restricted. ",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Weaver",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Weaving skill. You can produce woven goods provided that you have some form of yarn or string to work with. Make a Weaving roll. You can sell your goods for that many sc. (1/Week)",
        BenefitList: [
            
           
         ],
    },
    {
        displayName: "Whittler",
        prerequisites: ["Skill Specialization"],
        isRepeatable: false,
        DescriptionParagraphs: "Gain +3 in the Woodcarving skill. You can produce whittled trinkets provided that you have some form of wood to work with. Make a Woodcarving roll. You can sell your goods for that many sc. (1/Week)",
        BenefitList: [
            
           
         ],
    },
