const TalentStacks= [


    {
        displayName: "Bull Rush",
        StackName: "Combat Stack",
        prerequisites: ["Combat"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If you move 10 ft or more on your turn in a straight line and then hit a creature with a melee attack, you may make a secondary attack: STR vs FORT.Hit: Knock the creature prone if it is no more than two Sizes larger than you.",
        BenefitList: [
            { benefitName: "Exploitative", BenefitDescription: "You gain the ability to Exploit (Chapter 7, “Maneuvers”)." },
            { benefitName: "Giant Slayer", BenefitDescription: "Gain TA against creatures that are one or more Sizes larger than you." },
            { benefitName: "Opportunist", BenefitDescription: "You gain +2 to hit on Exploit attacks." },
           
         ],
    },
    {
        displayName: "Careful Shot",
        StackName: "Archery Stack",
        prerequisites: ["Combat, Archery"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can deduct any penalties to your attack roll, such as those from cover or TD, from your damage roll instead of your attack roll.",
        BenefitList: [
            { benefitName: "Cool under Pressure", BenefitDescription: "When you make a ranged weapon attack and are within 5 ft of a hostile creature, you do not gain any TD." },
            { benefitName: "Guarded Shot", BenefitDescription: "When you make a ranged weapon attack and are within 5 ft of a hostile creature, you do not provoke reactive attacks." },
            { benefitName: "Point Blank Shot", BenefitDescription: "When you make a ranged weapon attack and are within 5 ft of your target, your crit range increases by 1 (e.g., if you crit on a 20, now crit on a 19-20)." },
            { benefitName: "Power Shot", BenefitDescription: "You can elect to take a -5 on your attack roll for a +8 damage bonus. You must declare this before you roll your attack." },
            
        ],
    },
    {
        displayName: "Astounding Critical",
        StackName: "Crit Stack",
        prerequisites: ["Combat,Crit"],
        isRepeatable: false,
        incompatableWith: ["Bull Rush"],
        flavortext: "When you crit and roll max damage on a damage die, set that die aside and roll another die of the same type. Repeat this process until there are no new maximum dice. Your range for critical failure doubles (from a 1 to a 2, or a 2 to a 4) and critically failing an attack immediately ends your turn regardless of how much AP you have remaining.",
        BenefitList: [
            { benefitName: "Go For The Knees", BenefitDescription: "When you crit against a creature with a weapon attack, it is Slowed until the end of its next turn." },
            { benefitName: "Gore", BenefitDescription: "If you crit with the attack made as a part of your Bull Rush, your target is automatically knocked prone and you may immediately make another attack against that creature without expending AP." },
            { benefitName: "Impale", BenefitDescription: "If you crit with the attack made as a part of your Bull Rush, your target is automatically knocked prone and you may immediately make another attack against that creature without expending AP." },
            { benefitName: "Opporiunistic Crit", BenefitDescription: "If you crit using Reactive AP, you retain up to 3 of those Reactive AP, and may attack again if you have enough AP to do so and conditions that triggered your Reactive Attack are still met." },
            { benefitName: "Slow And Steady", BenefitDescription: "You gain +1 damage on all damage rolls, but can no longer crit. This increases by an additional +1 at levels 10, 20, and 30 to a maximum of +4, but does not work retroactively." },
            { benefitName: "Training Meets Opportunity", BenefitDescription: "While you have 0 Luck Points, your crit range is increased by 1 with weapons if you have Weapon Expertise with those weapons." },
            
        ],
    },
    {
        displayName: "Basic Dual Wield",
        StackName: "Dual Wielding Stack",
        prerequisites: ["Combat, Two-Weapon Fighting"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can effectively use two light weapons at once. When you make a melee attack with a light weapon and you are holding a light weapon in your other hand, you can make a melee attack with the second weapon, using 1 fewer AP than you normally would (min 1). You can only reduce the APC of your attack in this manner once per turn.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Advanced Dual Wield",
        prerequisites: ["Combat,Two-Weapon Fighting"],
        isRepeatable: false,
        incompatableWith: ["Basic Dual Wield"],
        flavortext: "When you make a melee attack with a weapon and you are holding a weapon in your other hand, and both weapons have the light and one- handed tags, you can make a melee attack with the second weapon, using 1 fewer AP than you normally would(min 1).You can reduce the APC of your second attack any number of times per turn provided that you alternate weapon attacks each time. (Each time you make an attack for the normal amount of AP, you can make one attack for 1 fewer AP).",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Blade Blocker",
        prerequisites: ["Combat"],
        isRepeatable: false,
        incompatableWith: ["Basic Dual Wield"],
        flavortext: "While you are using two weapons, you gain Resist Physical 2 against melee attacks.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Blade Blocker II",
        prerequisites: ["Combat,Two-Weapon Fighting"],
        isRepeatable: false,
        incompatableWith: ["Blade Blocker, Dual Wield IV"],
        flavortext: "Blade Blocker becomes Resist Physical 4.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Dual Wield",
        prerequisites: ["Combat, Two-Weapon Fighting"],
        isRepeatable: false,
        incompatableWith: ["Basic Dual Wield"],
        flavortext: "You can reduce the APC of attacks using your Dual Wield even if only one of your weapons has the Light tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Dual Wield II",
        prerequisites: ["Combat,Two-Weapon Fighting, Dual Wield"],
        isRepeatable: false,
        incompatableWith: [" "],
        flavortext: "You can reduce the APC of attacks using your Dual Wield even if neither of your weapons have the Light tag(they must both still have the One- Handed tag).",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Dual Wield III",
        prerequisites: ["Combat,Two-Weapon Fighting,Dual Wield II, STR 2"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can reduce the APC of attacks using your Dual Wield even if one of your weapons has the Hand- and - a - Half tag. ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Dual Wield IV",
        prerequisites: ["Combat,Two-Weapon Fighting,Dual Wield III, STR 4"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can reduce the APC of attacks using your Dual Wield even if both of your weapons have the Hand- and - a - Half tag.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "One-Handed Stack",
        StackName: "Duelist",
        prerequisites: ["Combat, One-Handed Fighting"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When you are using a one-handed weapon and not holding any other weapons, add + 1 to the attack and damage rolls you make with that weapon.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Lunge",
        prerequisites: ["Combat,One-Handed Fighting"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When you are using a one-handed weapon and not holding any other weapons, when you spend AP to make an attack with that weapon, you may first move 5 ft as part of the same action.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "Two-Handed Stack",
        StackName: "Rend",
        prerequisites: ["Combat,Two-Handed Fighting, STR 2"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Gain the Rend ability",
        BenefitList: [
            {
            benefitName: "Rend", BenefitDescription: "When you make an attack with a two-handed melee weapon using STR, add double your STR to the damage roll, instead of only adding your STR. (END / Rest) " },
        ],
    },
    {
        displayName: "",
        StackName: "Rend II",
        prerequisites: ["Combat,Two-Handed Fighting,Rend"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Rend becomes END/Recoup.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Rend III",
        prerequisites: ["Combat,Two-Handed Fighting,Rend II, STR 6],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Rend becomes END/Catch Breath.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Great Rend",
        prerequisites: ["Combat,Two-Handed Fighting, Rend, STR 4"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When you kill an enemy with a two-handed melee weapon using STR, you immediately gain 1 AP. (2 / Recoup) ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Great Rend II",
        prerequisites: ["Combat, Two-Handed Fighting,Great Rend I, STR 8"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Great Rend becomes 2/Catch Breath.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Great Rend III",
        prerequisites: ["Combat, Two-Handed Fighting,Great Rend II, STR 10"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may use your Great Rend ability indefinitely.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Hacking Blow",
        prerequisites: ["Combat, Two-Handed Fighting,Rend"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may use Rend with a weapon that has the Hand-anda-Half tag, but you must be wielding it with two hands in order to use Rend.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "Weapon",
        StackName: "Weapon Expertise",
        prerequisites: ["Combat, Weapon"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose a weapon type: One-handed, Two-handed, or Handand-a-Half. Choose a range: Melee, Ranged, or Reach. Gain + 1 to hit and + 1 to damage with weapons that have both of those qualities.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Weapon Mastery",
        prerequisites: ["Combat, Two-Handed Fighting,Great Rend I, STR 8"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Great Rend becomes 2/Catch Breath.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Great Rend II",
        prerequisites: ["Combat,Weapon,Weapon Expertise"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose a specific weapon with a type for which you have Weapon Expertise(e.g., if you have two- handed, ranged Weapon Expertise, you may choose a longbow).Gain + 1 to hit and + 1 to damage with that type of weapon.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Improved Weapon Mastery",
        prerequisites: ["Combat,Weapon,Weapon Mastery"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose a weapon for which you have Weapon Mastery. Increase its crit range by 1.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

        name: "Command",
        DescriptiveParagraphs: ["These talents will make you better at commanding a room or battlefield with your undeniable presence."],
       
    },
    {
        displayName: "",
        StackName: "Charmer",
        prerequisites: ["Command, Social"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may make a special attack: +CHA vs WILL of a creature within 30 ft of you that is not hostile towards you.Hit: They are Charmed by you for 10 minutes. (2 / Recoup) ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Charmer II",
        prerequisites: ["Command, Social,Charmer"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Charmer becomes 2/Catch Breath.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "On Your Feet",
        prerequisites: ["Command, Combat"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may spend 1 AP to pull an adjacent ally up from being Prone.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

        name: "Defense",
        DescriptiveParagraphs: ["Through armor or tactics, these talents will improve your capacity to avoid or mitigate damage."]
    },
    {
        displayName: "",
        StackName: "Ain't No Grave",
        prerequisites: ["Defense"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When you would gain a Death Point at the end of your turn, you can instead expend an available Luck Point to remove a Death Point. If this would cause you to reach 0 Death Points, you regain 1 HP. ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Hardy",
        prerequisites: ["Defense"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain additional HP equal to your Level. You may recalculate your HP entirely when taking this talent if you so desire, following the modified formula 10+(Level) d(X)+(Level x2). Additionally, each time you level up, gain +1 additional HP.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Hardy II",
        prerequisites: ["Defense,Hardy, Level 10"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain additional HP equal to your Level. You may recalculate your HP entirely when taking this talent if you so desire, following the modified formula 10+(Level) d(X)+ (Level x3).Additionally, each time you level up, gain + 1 additional HP,",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Hardy III",
        prerequisites: ["Defense,Hardy II, Level 15"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain additional HP equal to your Level. You may recalculate your HP entirely when taking this talent if you so desire, following the modified formula 10+(Level) d(X)+ (Level x4).You suffer no negative effects from Fatigue for the first day you are fatigued(allowing you to remove Death Points normally).This ability resets when your fatigue is removed.Additionally, each time you level up, gain + 1 additional HP.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Meat Pile",
        prerequisites: ["Defense,Hardy"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain -2 REF, and gain HP equal to your Level. Your HP die size becomes 1d20 and you can recalculate your HP following this modified formula: 10 + (Level)d20+ (Level x2).However, your AR and physical defenses can never exceed 11. You must roll for your HP when you have this talent.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "Armor ",
        StackName: "Evasive",
        prerequisites: ["Defense,Armor,Lucky Placement, Impulse, Tough"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If you are not wearing armor, you may use your REF in place of your AR, but your AR cannot exceed 14 when you do.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Evasive II",
        prerequisites: ["Defense,Armor,Evasive"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your AR cannot exceed 18 when you use this feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Evasive III",
        prerequisites: ["Defense,Armor,Evasive II"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your AR has no limit when you use this feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Can't Kill What You Can't Catch",
        prerequisites: ["Defense,Armor, Evasive"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When an attack that targets your REF misses you, you may move 5 ft.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "Perfect Dodge",
        StackName: "Hardy II",
        prerequisites: ["Defense,Armor, Evasive II"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If you would take half damage from an attack that targets your REF, you instead take no damage.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Heavy Aymor Trainee",
        prerequisites: ["Defense,Armor"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your movement is no longer restricted by wearing heavy armor.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Impulse",
        prerequisites: ["Defense,Armor,Evasive, Tough"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If you are not wearing armor, you may use your ANT in place of your AR, but your AR cannot exceed 14 when you do.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Impulse II",
        prerequisites: ["Defense,Armor,Impulse"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your AR cannot exceed 18 when you use this feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Impulse III",
        prerequisites: ["Defense,Armor,Impulse II"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your AR has no limit when you use this feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Light Armor Trainee",
        prerequisites: ["Defense,Armor"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain +1 AR, REF, and FORT while wearing light armor",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Lucky Placement",
        prerequisites: ["Defense,Armor,Evasive"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can use your LUCK (max +4), instead of your DEX, when calculating your REF.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
    },
    {
        displayName: "",
        StackName: "Lucky Placement II",
        prerequisites: ["Defense,Armor, Lucky Placement"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can use your LUCK (max +8), instead of your DEX, when calculating your REF. You may use Luck Points to force an attacker to reroll their attack if they are targeting your REF and not targeting other creatures.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Lucky Placement III",
        prerequisites: ["Defense,Armor,Lucky Placement"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can use your LUCK, instead of your DEX, when calculating your REF.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Second Skin:Light Armor",
        prerequisites: ["Defense, Armor, Repeatable"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose one type of light armor (such as leather or gambeson).Gain the armor’s Resist bonus when wearing that type of armor.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Second Skin: Medium Armor",
        prerequisites: ["Defense, Armor, Repeatable"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose one type of medium armor (such as brigandine or lamellar).Gain the armor’s Resist bonus when wearing that type of armor.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Second Skin: Heavy Armor",
        prerequisites: ["Defense, Armor, Repeatable"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose one type of heavy armor (chainmail or plate). Gain the armor’s Resist bonus when wearing that type of armor.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Second Skin:Shields",
        prerequisites: ["Defense, Armor, Repeatable"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose one type of shield (such as buckler or kite shield). Gain the shield’s Resist bonus when you have that type of shield equipped.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tough",
        prerequisites: ["Defense, Armor, Evasive, Impulse"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If you are not wearing armor, you may use your FORT in place of your AR, but your AR cannot exceed 14 when you do.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tough II",
        prerequisites: ["Defense, Armor, Tough"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your AR cannot exceed 18 when you use this feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tough III",
        prerequisites: ["Defense, Armor, Tough II"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your AR has no limit when you use this feature.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Unarmored Awareness",
        prerequisites: ["Defense, Armor, Unarmored Defense"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You become unnaturally attuned to a battlefield. While you are not wearing armor, you may increase your AWR by + 5 reactively when you are making an AWR roll or your ANT is being attacked.This bonus lasts until the beginning of your next turn. (1 / Catch Breath).",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Unarmored Awareness II",
        prerequisites: ["Defense, Armor, Unarmored Awareness"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can use this ability once for 0 Reactive AP, and indefinitely by spending 2 Reactive AP.Your free use of this ability recharges when you Catch your Breath..",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Unarmored Awareness III",
        prerequisites: ["Defense, Armor, Unarmored Awareness II"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You have three free uses of Unarmored Awareness, which you regain when you Catch your Breath.Subsequent uses of Unarmored Awareness cost only 1 AP.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Unarmored Awareness IV",
        prerequisites: ["Defense, Armor,Unarmored Awareness III, Level 15"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your unarmored Awareness increases to +10 AWR, and you can no longer roll below a 10 on skill checks to discern tactical information in the heat of battle.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "Defensive Maneuvers",
        StackName: "Barrel Roll",
        prerequisites: ["Defense, Defensive Maneuvers"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain +2 AR against ranged attacks, and when a ranged attack misses you, you can immediately move 10 ft, ignoring creatures between you and your target space.You can only move in this way once on each round(regaining the ability at the start of each of your turns).",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Barrel Roll II",
        prerequisites: ["Defense, Defensive Maneuvers,Barrel Roll"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may use Barrel Roll multiple times per round, but every barrel roll after the first takes 1 Reactive AP.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Brawler",
        prerequisites: ["Defense, Defensive Maneuvers"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When two or more hostile creatures are within 5 ft of you and you have no allies adjacent to you, all of your defenses increase by + 1.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Human Shield",
        prerequisites: ["Defense, Defensive Maneuvers"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain +2 to your physical defenses while you have an enemy Grappled.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Lurker",
        prerequisites: ["Defense, Defensive Maneuvers"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "When you are Concealed, your AR and your physical defenses increase by + 2.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "Shield ",
        StackName: "Sheield Training",
        prerequisites: ["Defense, Shield"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can wield any melee weapon with the one-handed tag while wielding a shield, instead of only a light weapon. Gain the Brace ability.",
            "Brace: Spend 1AP to raise your shield, gaining +3 to physical defenses until the beginning of your next turn.This automatically ends your turn.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Buckler Specialization",
        prerequisites: ["Defense, Shield,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "While you have a buckler equipped, you may add 1 AP to a melee attack you are making, if that attack hits, the creature gains TD while attacking you until the beginning of your next turn.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Buckled Strap",
        prerequisites: ["Defense, Shield, Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may equip a Buckler by strapping it to your forearm, allowing both of your hands to be free.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Buckler Warrior",
        prerequisites: ["Defense, Shield, Shield Fighting, Buckler Strap"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can use a two-handed weapon with a Buckler, and can use the two- handed benefits of a hand - and - a - half weapon.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Shield Fighting",
        prerequisites: ["Defense, Shield,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can wield one-handed or hand-and-a-half weapons while wielding a shield, but cannot use a hand- and - a - half weapon using two hands.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Training",
        prerequisites: ["Defense, Shield,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain the Resist abilities of kite shields and heater shields.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Training II",
        prerequisites: ["Defense, Shield, Medium Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain an additional +1 to your AR while wielding a kite or heater shield.The first time you use your Brace ability after rolling Initiative, it does not cost AP. (1 / Catch Breath) ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Training III",
        prerequisites: ["Defense, Shield, Medium Shield Training III"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If an attack against your REF misses you while you have Brace active and are wielding a kite or heater shield, you take no damage, if you would otherwise take half damage. You can use your Brace ability for 0 AP 2/Catch Breath.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Training IV",
        prerequisites: ["Defense, Shield,Medium Shield Training III"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If an attack against your REF misses you while you have Brace active and are wielding a kite or heater shield, you take no damage, if you would otherwise take half damage. You can use your Brace ability for 0 AP 2/Catch Breath.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Training V",
        prerequisites: ["Defense, Shield,Medium Shield Training IV"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Your Brace ability instead grants +4 to your physical defenses until the beginning of your next turn. You can use your Brace ability for 0 AP 3/Catch Breath. ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Mastery",
        prerequisites: ["Defense, Shield,Medium Shield Training V"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may now extend the bonus of your Brace ability to one target that remains within 5 ft of you until the start of your next turn.If the creature leaves a space that is within 5 ft of you, it loses this benefit even if it returns.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Shield Siblings",
        prerequisites: ["Defense, Shield,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain the Resist abilities of kite shields and heater shields.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Medium Shield Training",
        prerequisites: ["Defense, Shield, Synergy,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "While you are within 5 ft of another creature with the Shield Training talent, you both gain + 1 AR.If they also have the Shield Siblings talent, this increases to + 2 AR, and you cannot be flanked while within 5 ft of each other.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Shield Wall",
        prerequisites: ["Defense, Shield,Shield, Shield Siblings"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Prerequisites: Shield Siblings While you are within 5 ft of another creature with this Talent and you are both wielding Tower Shields, you gain the following benefits. Whenever both shields are Braced and one of you moves 5 ft, the other may move 5 ft as well without expending AP. If you are moving into a space that another creature occupies, you may make a special attack: STR vs FORT, adding your Shield Siblings AR bonus to your attack roll.",
        "Hit: That creature is pushed back 5 ft. Neither you nor your Shield Sibling can be moved against your will while both shields are braced."
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Shield Bash",
        prerequisites: ["Defense, Shield,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "If you have a kite or heater shield equipped and the additional AR you receive from having that shield equipped causes a melee weapon attack to miss you, you make a Shield Bash reactive attack for 1 Reactive AP, automatically hitting for 1d4 + STR damage.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tower Shield Specialization",
        prerequisites: ["Defense, Shield,Shield Training"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You no longer suffer -5 ft speed while wielding a tower shield.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tower Shield Specialization II",
        prerequisites: ["Defense, Shield,Tower Shield Specialization"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You may spend 1 AP to move 5 ft once on your turn when your tower shield is Set.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tower Shield Specialization III",
        prerequisites: ["Defense, Shield,Tower Shield Specialization II"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "The cover granted to creatures directly behind you increases to Cover 2, and when you move 5 ft, that creature can move with you without expending AP.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tower Shield Specialization IV",
        prerequisites: ["Defense, Shield,Tower Shield Specialization III"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "The cover granted to creatures directly behind you increases to Cover 3 and they are considered concealed, creatures in squares directly or diagonally behind you and within 10 ft of you gain Cover 1.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Tower Shield Mastery",
        prerequisites: ["Defense, Shield,Tower Shield Specialization IV"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "The cover granted to creatures in squares directly or diagonally behind you and within 10 ft gain Cover 2. You may now wield a tower shield with only one arm, however when you make a melee attack, you only gain Cover 3 instead of Total Cover until the beginning of your next turn.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
        name: "Misc",
        DescriptiveParagraphs:"These talents offer a variety of miscellaneous bonuses.",

    },
    {
        displayName: "",
        StackName: "Animal Companion",
        prerequisites: ["Misc Specialization"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You gain a small, mundane animal companion, such as a songbird or hamster.This creature does not have statistics or participate in combat, but you can communicate very surface level thoughts with it, such as “Danger” or “Happy.” ",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Family Heirloom",
        prerequisites: ["Misc Specialization, Must be Character Level 1 (cannot take at higher levels) "],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You have a special item: either a set of armor, or a weapon that to anyone else would seem mundane, but to you holds great value.Deduct half of its cost from your starting gold. If it is armor, you gain + 1 AR and WILL at levels 1, 10, 20, and 30. If it is a weapon, you gain a + 1 to hit with this weapon at levels 1, 10, 20, and 30.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

        name: "Primal Aspect Talents",
        DescriptiveParagraphs: "To gain access to Primal Aspects, you must take one or more talents in the Berzerker, Oracle, and/ or Ranger classes or find another way to access to them, such as a magical boon from an Archfae.",
    },
    {
        displayName: "",
        StackName: "Primal Aspect",
        prerequisites: ["Primal Aspect, Repeatable, SAccess to Primal Aspects"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Learn a Primal Aspect. If you know more than one, you can only gain the benefits of one at a time.You can choose which Primal Aspect is active each time you complete a Rest.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Primal ASpect Focus",
        prerequisites: ["Primal Aspect, At least 2 Primal Aspects"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose 2 Primal Aspects that you know. You may switch between those Aspects freely when not in Initiative, and by spending 1 AP when you are in Initiative. If you know more than 2 Aspects, you can choose which 2 are available to switch between upon Taking a Rest. If you have Transferred an Aspect to an ally, it is unavailable to you.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Primal Aspect Focus II",
        prerequisites: ["Primal Aspect,Primal Aspect Focus"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can switch between any of your Primal Aspects, even if you know more than 2, using your Aspect Focus.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Primal Aspect Focus III",
        prerequisites: ["Primal Aspect, Primal Aspect Focus II, Character Level 10"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can have 2 Aspects active at once and can switch between which aspects you have active freely when not in combat, or by spending 1 AP per Aspect switch on your turn during Initiative.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Primal Aspect Focus IV",
        prerequisites: ["Primal Aspect, Primal Aspect Focus III, Character Level 15"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "You can have 3 Aspects active at once and can switch between which aspects you have active freely when not in combat, or by spending 1 AP per Aspect switch on your turn during Initiative.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Primal Aspect Transference",
        prerequisites: ["Primal Aspect, Primal Aspect Focus"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Choose a willing ally and spend 1 hour meditating, training, sparring, etc.At the end of this ritual, that ally can benefit from an Aspect that you know but is not currently active for you.The Aspect activates when you choose(0 AP on your turn or your ally’s turn) and lasts for 10 minutes. (1 / Rest) .",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],

    },
    {
        displayName: "",
        StackName: "Primal Aspect Transference II",
        prerequisites: ["Primal Aspect, Primal Aspect Transference"],
        isRepeatable: false,
        incompatableWith: [""],
        flavortext: "Primal Aspect Transference becomes 3/Rest.",
        BenefitList: [
            { benefitName: "", BenefitDescription: "" },
        ],
        name: "Skill Stack",
        DescriptiveParagraphs: "These talents offer you a small bonus in addition to giving you more Skill Points.",
    },

   




]