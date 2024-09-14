

const Berzerker =
{
  talentname: "Berzerker",
  shortDescription: "Berzerkers are ferocious and direct fighters that channel their terrible rage into devastating combat prowess.",
  quote: {
    phrase: "I embrace the darkness within. It makes me strong. My fury is my guide, and I will meet victory…or oblivion.",
    quotedsname: "Hanniah Sharptooth",
    title: "queen of viscera"
  },
  longDescription: "You were born amidst the towering arctic mountains, axe and spear in hand.From an early age you displayed unmatched ferocity and an unyielding spirit, but there was also a darkness about you.Even by the time you were a young teen, you displayed not just bravery, but unmitigated savagery on the battlefield.As you continued to hone your physical prowess, the burning rage within you only grew hotter.Now you brim with tremendous bloodlust.The life of adventuring suits you, especially a life in pursuit of dangerous battles, as you look for any opportunity to unleash your inner demons. You are known and feared for your unstoppable blood rages.Whether you give into a blind fury or enter an almost transcendent state of awareness amid the carnage, your blood rage is a savage and terrible thing that few have ever survived.",
  entryTalent: {
    prerequisites: ["Class Entry", "Berzerker", "Character Level 2"],
    flavorTest: "When you take this entry talent, you gain the following abilities",
    abilities: [
      {
        abilityname: "Blood Rage",
        description: "Gain one special AP that can only be used to make attacks on your turn or to make reactive attacks if you have the ability to do so. You regain this AP at the start of each of your turns, but it cannot carry over like normal AP. You can only gain one source of special AP.If you take this class feature while already having a source of special AP, choose which feature to retain.",
      },
      {
        talentname: "Ferocious",
        description: "If an effect would cause you to become Frightened, you may become determined and ferocious. You ignore that effect and become immune to being Frightened for a number of minutes equal to your amount of Berzerker Talents+ 1.(2 / Rest)"
      }
    ]
  },
  tracks: [
    {
      trackname: "Exile",
      trackdescription: "Your life is a cruel joke.Through some misdeed or overzealous act, you have become an exile, and you seek to make your own way in an uncaring world.",
      talents: [
        {
          talentname: "marker",
          prerequisites: ["Berzerker", "Exile", "Berzerker Entry"],
          flavorTest: "You are marked, tattooed, or branded in some way. This sign of your exile has not broken your will.Gain one of the following benefits: ",
          abilities: [
            {
              abilityname: "Mad Dog",
              abilitydescription: "You have turned to the life of the mercenary, specializing in protection and thuggery.When you are within 5 ft of a friendly creature, that creature can add ½ your STR / Menacing to a CHA check that they make.",
            },
            {
              abilityname: "Kraken",
              abilitydescription: "You have turned to the sea, gaining + 6 to the Vehicles(Water) skill.When you roll CHA to interact with professional sailors or port workers, you can roll 2d20 and take the higher result.",
            },
            {
              abilityname: "Lone Wolf",
              abilitydescription: "When making AWR or INT checks that would implement skills with the Survival tag, you may use your CHA instead.",
            }
          ],
        },
        {
          talentname: "Drunken Fighter",
          prerequisites: ["Berzerker", "Exile", "Marked"],
          flavorTest: "If you have imbibed in the past hour, you gain +2 to your weapon damage rolls, but have TD.",
          abilities: []
        },
        {
          talentname: "Throw Anything",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "Improvised thrown weapons cost you 1 fewer AP to use (min 1) and deal 1d6 damage.",
          abilities: []
        },
        {
          talentname: "Brutality",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "Gain +1 TA when attacking a creature that is Frightened or Prone.",
          abilities: []
        },
        {
          talentname: "Another Swig",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "When you spend AP to move, you may take a drink (such as a potion or a tankard of ale) as part of the same move. Doing so does not provoke additional reactive attacks, even if your movement does.",
          abilities: []
        },
        {
          talentname: "Drunken Stagger",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "While the effects of Drunken Fighter are active, the first time you move on any given turn you do not trigger reactive actions.",
          abilities: []
        },
        {
          talentname: "Drunken Fist",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "If you have imbibed in the past hour, you may subtract any number up to your CHA from your attack roll, and add that same number to your damage roll. You must declare if you are using Drunken Fist and how much you are subtracting before you roll your attack. (CHA / Rest) ",
          abilities: []
        },
        {
          talentname: "Hidden Dagger",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "Your Sneak Attack damage increases by +1d6 (if you had no Sneak Attack, it becomes 1d6). You can apply Sneak Attack damage to a creature that you hit with a weapon that has the Concealed tag, once per turn, as long as you have at least one source of TA. You may still use Sneak Attack if Drunken Fighter is your only source of TD.",
          abilities: []
        },
        {
          talentname: "Cowards",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "Whenever your Ferocious ability is active and friendly creatures you can see are Frightened, you deal + 1 damage per ally you can see that is Frightened, to a maximum equal to your CHA.",
          abilities: []
        },
        {
          talentname: "Fighting dirty",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "When you are Flanking, you can apply TA to your Maneuver attack rolls.",
          abilities: []
        },
        {
          talentname: "Brawling",
          prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
          flavorTest: "Increase your unarmed damage die size by one (e.g., from 1d4 to 1d6).If you did not have an unarmed damage die, it becomes 1d4.",
          abilities: []
        },
        {
          talentname: "Beast Conmpanion",
          prerequisites: ["Berzerker", "Exile", "Exile 6"],
          flavorTest: "You gain a special bond with a creature. This creature can be ML 2 or lower and must have the Beast tag and no other creature tags.Your companion follows your instructions and acts at the end of your turn. When your companion reaches 0 HP, it falls Unconscious rather than dying, and will return to full health upon Taking a Rest.",
          abilities: []
        },
        {
          talentname: "Regain Honor",
          prerequisites: ["Berzerker", "Exile", "EBeast Companion", "Defiance"],
          flavorTest: "Your mark becomes a badge of honor, an emblem of your path to restoring your name. You may use your WILL in place of your ANT or LOG when your ANT or LOG is attacked. (CHA / Rest) ",
          abilities: []
        },
        {
          talentname: "Companion Boon",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "Your beast companion gains additional maximum HP equal to your CHA.",
          abilities: []
        },
        {
          talentname: "Companion Boon II",
          prerequisites: ["Berzerker", "Exile", " Companion Boon"],
          flavorTest: "Whenever you and your companion are within 5 ft of each other, you both gain TA on your attacks. ",
          abilities: []
        },
        {
          talentname: "Companion Boon III",
          prerequisites: ["Berzerker", "Exile", " Companion Boon II"],
          flavorTest: "Your beast companion gains a bonus to its attack rolls equal to ½ your CHA.",
          abilities: []
        },
        {
          talentname: "Drunken resilience",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "You gain Resist Toxic 5 and become immune to common poisons.",
          abilities: []
        },
        {
          talentname: "Steady Fist",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "Drunken Fist becomes Steady Fist and no longer requires imbibing to use.",
          abilities: []
        },
        {
          talentname: "Steady Fist II",
          prerequisites: ["Berzerker", "Exile", "Steady Fist"],
          flavorTest: "You now gain +2 damage per -1 to hit from Steady Fist.",
          abilities: []
        },
        {
          talentname: "Restored Honor",
          prerequisites: ["Berzerker", "Exile", "Capstone", "Regain Honor", "Exile 14"],
          flavorTest: "Through endless tribulation you have emerged victorious, your honor restored.Your name and force of character are an inspiring presence to behold.",
          abilities: [
            {
              abilityname: "Unimpeachable",
              abilitydescription: "Your allies within 30 ft of you may use your WILL instead of their own.Once an ally has used your WILL, they cannot benefit from this again until they Take a Rest.When someone uses your WILL in place of their own, you regain 1d10 HP",
            },
            {
              abilityname: "Level 30",
              abilitydescription: "When an ally uses Unimpeachable, their WILL is replaced by your WILL for 1 minute.",
            },

          ]
        },
        {
          talentname: "Defiance",
          prerequisites: ["Berzerker", "Exile", "Beast Companion", "Regain Honor"],
          flavorTest: "Your Drunken Fighter feature deals +2 damage.",
          abilities: []
        },
        {
          talentname: "Throw Anything II",
          prerequisites: ["Berzerker", "Exile", "Throw Anything", "Exile 7"],
          flavorTest: "You gain +20 ft range with improvised thrown weapons and the damage becomes 1d8.",
          abilities: []
        },
        {
          talentname: "Hidden Dagger II",
          prerequisites: ["Berzerker", "Exile", "Hidden Dagger", "Exile 7"],
          flavorTest: "You gain +1 sneak attack die.",
          abilities: [],
        },
        {
          talentname: "Drunken Ferocity",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "Your Ferocious ability becomes activated whenever you have imbibed in the past hour and you can no longer voluntarily activate it.",
          abilities: []
        },
        {
          talentname: "Scrapping",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "You gain two Maneuvers of your choice from the Pugilist’s Maneuver list. You can use these Pugilist’s Maneuvers 2/ Recoup.",
          abilities: []
        },
        {
          talentname: "Drag",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "Your companion gains a special maneuver: Drag.",
          abilities: [
            {
              abilityname: "Drag",
              abilitydescription: "Forgoing all other actions this turn, your companion can move ½ its speed and drag a prone target with it. This movement can provoke reactive actions.",
            },

          ]
        },
        {
          talentname: "Defresh",
          prerequisites: ["Berzerker", "Exile", "Exile 7"],
          flavorTest: "If you are Bleeding, Burning, Chilled, or Dazed, you may roll 1d6 every time you imbibe. If you roll a 5 or 6, the condition is removed.",
          abilities: []
        },
        {
          talentname: "Utterly Independent",
          prerequisites: ["Berzerker", "Exile", "Capstone", "Exile 14", "Defiance"],
          flavorTest: "Your exile has led you to a life of fierce and complete independence from all others. Urban legends might follow you as you face down grave threats on your own. You become immune to the Charmed and Enthralled conditions.",
          abilities: [
            {
              abilityname: "Independence",
              abilitydescription: "Whenever a creature attacks your WILL or attempts to Charm or Enthrall you, your next Drunken Fist against that target does not consume one of your uses of Drunken Fist, and you may attack their WILL instead of their AR.",
            },
            {
              abilityname: "Level 30:",
              abilitydescription: "Independence activates with your ANT and LOG defenses as well.",
            },

          ]
        },
        {
          talentname: "Ferocious II ",
          prerequisites: ["Berzerker", "Fearless", "Berzerker Entry"],
          flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills. Ferocious becomes 3/Rest.",
          abilities: []
        },
        {
          talentname: "Seeing Red",
          prerequisites: ["Berzerker", "Fearless", "Ferocious II ", "Stoic"],
          flavorTest: "Gain +2 Skill Points that you can spend on STR or END skills. You are considered Bloodied at ¾ your max HP.",
          abilities: []
        },
        {
          talentname: "Blood Will Flow",
          prerequisites: ["Berzerker", "Fearless", "Seeing Red"],
          flavorTest: "While you are Bloodied, deal an additional 1d12 damage on a crit.",
          abilities: []
        },
        {
          talentname: "Stoic",
          prerequisites: ["Berzerker", "Fearless", "Ferocious II", "Seeing Red"],
          flavorTest: "Gain +2 Skill Points that you can spend on STR or END skills. You are considered Bloodied at ¼ your max HP.",
          abilities: []
        },
        {
          talentname: "Unflappable",
          prerequisites: ["Berzerker", "Fearless", "Stoic"],
          flavorTest: "You can trigger your Ferocious ability when you would gain the Shaken condition, granting you immunity to Frightened.and Shaken for the duration.",
          abilities: []
        },
        {
          talentname: "Ferocious III",
          prerequisites: ["Berzerker", "Fearless", "Fearless 3"],
          flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills.Ferocious becomes 4/Rest.",
          abilities: []
        },
        {
          talentname: "Seeing Red II",
          prerequisites: ["Berzerker", "Fearless", "Ferocious III", "Blood Will Flow."],
          flavorTest: "If your Ferocious ability is active and you are Bloodied, deal + 2 damage on all of your damage rolls.",
          abilities: [],
        },
        {
          talentname: "Blood Will Flow II",
          prerequisites: ["Berzerker", "Fearless", "Seeing Red II"],
          flavorTest: "While you are Bloodied, your crit range increases by 1.",
          abilities: [],
        },
        {
          talentname: "Frenzy",
          prerequisites: ["Berzerker", "Fearless", "Blood Will Flow II"],
          flavorTest: "When you are Ferocious, you may use Frenzy.",
          abilities: [
            {
              abilityname: "Frenzy",
              abilitydescription: "For the duration of your Ferocious ability, when you crit on an attack that cost 1 or more AP, you may immediately make another attack for 0 AP. (2 / Rest) "
            },
          ],
        },
        {
          talentname: "Stoic II",
          prerequisites: ["Berzerker", "Fearless", "Ferocious III", "Unflappable"],
          flavorTest: "Choose REF, FORT, ANT, or LOG. While you are not Bloodied, WILL and your selection increase by + 1.",
          abilities: [],
        },
        {
          talentname: "Unflappable II",
          prerequisites: ["Berzerker", "Fearless", "Stoic II"],
          flavorTest: "You can trigger your Ferocious ability when you would become Demoralized, granting you immunity to Frightened, Shaken, and Demoralized for the duration.",
          abilities: [],
        },
        {
          talentname: "Never Retreat",
          prerequisites: ["Berzerker", "EFearless", "Unflappable II", "EStoic"],
          flavorTest: "When you are Ferocious and not Bloodied, you are Grounded and cannot be knocked Prone or moved against your will.",
          abilities: [],
        },
        {
          talentname: "Ferocious IV",
          prerequisites: ["Berzerker", "Fearless", "Fearless 7"],
          flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills. If you Recoup and have no uses of Ferocious remaining, regain one use.",
          abilities: [],
        },
        {
          talentname: "Seeing Red III",
          prerequisites: ["Berzerker", "Fearless", "Ferocious IV", "Frenzy"],
          flavorTest: "Gain +2 Skill Points that you can spend on DEX or END skills.While Ferocious, your LOG equals your FORT unless your LOG was already higher.",
          abilities: [],
        },
        {
          talentname: "Blood Will Flow III",
          prerequisites: ["Berzerker", "Fearless", " Seeing Red III"],
          flavorTest: "While you are Bloodied your crit range increases by 1 more.",
          abilities: [],
        },
        {
          talentname: "Frenzy II",
          prerequisites: ["Berzerker", "Fearless", "Blood Will Flow II"],
          flavorTest: "Gain +1 FORT. Frenzy becomes 3/Rest.",
          abilities: [],
        },
        {
          talentname: "Stoic II",
          prerequisites: ["Berzerker", "Fearless", "Ferocious IV", "Never Retreat"],
          flavorTest: "Gain +2 Skill Points that you can spend on AWR or CHA skills. While you are Ferocious, gain an additional + 2 to your defenses that you selected from Stoic 2.",
          abilities: [],
        },
        {
          talentname: "Unflappable III",
          prerequisites: ["Berzerker", "Fearless", "Stoic III"],
          flavorTest: "You can trigger your Ferocious ability when you would become Charmed, granting you immunity to Frightened, Shaken, Demoralized, and Charmed for the duration.",
          abilities: [],
        },
        {
          talentname: "Never Retreat II",
          prerequisites: ["Berzerker", "Fearless", "Unflappable III"],
          flavorTest: "Gain Iron Advance. Iron Advance.When you are Ferocious and not Bloodied, if you would be moved against your will, you may spend 1 Reactive AP to instead move up to your speed in a direction of your choice.",
          abilities: [],
        },
        {
          talentname: "Ferocious V",
          prerequisites: ["Berzerker", "Fearless", "Fearless 11"],
          flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills. If you Catch Breath and have no uses of Ferocious remaining, regain one use.",
          abilities: [],
        },
        {
          talentname: "Horrifying Frenzy",
          prerequisites: ["Berzerker", "Fearless", "Ferocious V", "Frenzy II"],
          flavorTest: "When you use Frenzy and you are Bloodied, you can make it Horrifying.Your Frenzy ability works when you hit, instead of only when you crit. (1 / Rest) ",
          abilities: [],
        },
        {
          talentname: "Savage Frenzy",
          prerequisites: ["Berzerker", "Fearless", "Horrifying Frenzy", "Gain Savage Frenzy"],
          flavorTest: "Savage Frenzy. When you make an attack that costs 0 AP, you may choose to instead make two attacks if you are Bloodied.These attacks both have TA and the crit range increases by 1.(2/ Rest) ",
          abilities: [],
        },
        {
          talentname: "Stoic IV",
          prerequisites: ["Berzerker", "Fearless", "Ferocious IV", "Never Retreat II"],
          flavorTest: "When you are not Bloodied all of your physical and mental defenses increase by + 1.",
          abilities: [],
        },
        {
          talentname: "Never Retreat III",
          prerequisites: ["Berzerker", "Fearless", "Stoic IV"],
          flavorTest: "Gain Iron Reave.",
          abilities: [
            {
              abilityname: "Iron Reave",
              abilitydescription: "When you use Iron Advance, if you end your movement adjacent to an enemy, you can make one melee attack against it for 0 AP. (END / Rest).",
            },
          ]
        },
        {
          talentname: "Unstoppable Ferocity",
          prerequisites: ["Berzerker", "Fearless", " Capstone", "Fearless 14"],
          flavorTest: "Having stared down the jaws of death myriad times, you finally reach your snapping point. When you reach 0 HP, you may activate Unstoppable Ferocity. (0 Reactive AP) ",
          abilities: [
            {
              abilityname: "Unstoppable Ferocity",
              abilitydescription: " For the duration of Ferocious, gain + 3 to all defenses.Gain TA on all attacks, and roll 2d20 and use the higher.Whenever you hit a creature that has imposed an active condition of Broken, Demoralized, Frightened, or Shaken against you, the hit counts as a crit. Whenever you hit a creature that would have imposed such a condition against you but did not because of your Ferocious ability, that hit counts as a crit. If you die during this time, you remain living until the end of the duration of Ferocious.During such time, you cannot regain HP, and you die at the end of that duration, whereupon you can be resurrected. After you use this ability you permanently lose all of your Talents in the Ferocious stack and lose Ferocious 1. You do not gain replacement Talents.",
            },
            {
              abilityname: "Level 30:",
              abilitydescription: "If you used Unstoppable Ferocity before reaching level 30, you regain all of your lost talents except for Unstoppable Ferocity. If you did not use Unstoppable Ferocity before reaching level 30, then whenever a creature attempts to inflict Broken, Demoralized, Frightened, or Shaken against you, your next attack against that creature is considered a crit.",
            },
          ]
        },
        {
          talentname: "Juggernaut",
          prerequisites: ["Berzerker", "Juggernaut", "Berzerker Entry"],
          flavorTest: "Gain the Juggernaut ability",
          abilities: [
            {
              abilityname: "Juggernaut",
              abilitydescription: "By spending 1 AP, you may enter a combative focus that allows you to tune out injury.For the next 10 minutes, whenever you take physical damage, if you have any Reactive AP, gain DR 3.(2/ Rest) ",
            },
          ]
        },
        {
          talentname: "Haday",
          prerequisites: ["Berzerker", "Juggernaut", "Juggernaut"],
          flavorTest: "Gain the Hardy specialization talent (Chapter 5, “Defense Stack”).",
          abilities: [],
        },
        {
          talentname: "Elemental Inurement",
          prerequisites: ["Berzerker", "Juggernaut", "Hardy", "Staunch Resistance"],
          flavorTest: "While your Juggernaut ability is active, reduce elementaldamage as well as physical.",
          abilities: [],
        },
        {
          talentname: "Ardent Assault",
          prerequisites: ["Berzerker", "Juggernaut", "Elemental Inurement"],
          flavorTest: "When you are not Bloodied, deal +2 damage on melee attacks.",
          abilities: [],
        },
        {
          talentname: "Staungh Resistance",
          prerequisites: ["Berzerker", "Juggernaut", "Hardy", "Elemental Inurement"],
          flavorTest: "While your Juggernaut ability is active, increase DR by 2. ",
          abilities: [],
        },
        {
          talentname: "Shrug It Off",
          prerequisites: ["Berzerker", "Juggernaut", "Staunch Resistance"],
          flavorTest: "By spending 1 Reactive AP, gain Shield HP equal to the amount of physical damage that you just took. You may use Rage AP on this feature. (1 / Recoup) ",
          abilities: [],
        },
        {
          talentname: "Endure",
          prerequisites: ["Berzerker", "Juggernaut", "Juggernaut 4"],
          flavorTest: "Gain the Endure ability.",
          abilities: [
            {
              abilityname: "Endure",
              abilitydescription: "When a creature makes an attack against your AR, you may use your FORT instead. (2 / Rest)."
            },
          ]
        },
        {
          talentname: "Juggernaut II",
          prerequisites: ["Berzerker", "Juggernaut", "Endure"],
          flavorTest: "Gain +4 Skill Points that you can spend on END skills. Juggernaut becomes ½ END/ Rest.",
          abilities: [],
        },
        {
          talentname: "Juggernaut III",
          prerequisites: ["Berzerker", "Juggernaut", "Juggernaut II"],
          flavorTest: "While your Juggernaut ability is active, increase DR by 2.",
          abilities: [],
        },
        {
          talentname: "Energy Inurement ",
          prerequisites: ["Berzerker", "Juggernaut", "Juggernaut III", "Ardent Assault"],
          flavorTest: "While your Juggernaut ability is active, reduce energydamage as well as physical and elemental.",
          abilities: [],
        },
        {
          talentname: "Citadel Of Stamina",
          prerequisites: ["Berzerker", "Juggernaut", "Energy Inurement"],
          flavorTest: "gy Inurement Gain +2 FORT.",
          abilities: [],
        },
        {
          talentname: "Staunch Resistance II",
          prerequisites: ["Berzerker", "Juggernaut III", "Shrug It Off"],
          flavorTest: "While your Juggernaut ability is active, increase DR by 3.",
          abilities: [],
        },
        {
          talentname: "Battle - Ready",
          prerequisites: ["Berzerker", "Juggernaut", " Staunch Resistance II"],
          flavorTest: "GWhen you Recoup, you may remove +1 Death Point.",
          abilities: [],
        },
        {
          talentname: "Endure II",
          prerequisites: ["Berzerker", "Juggernaut", "Juggernaut 9"],
          flavorTest: "Gain +4 Skill Points that you can spend on END skills. Endure becomes 3/Rest.",
          abilities: [],
        },
        {
          talentname: "Hardy II",
          prerequisites: ["Berzerker", "Juggernaut", "Endure II"],
          flavorTest: "Gain +1 HP per character level, and +1 HP each time you level up.",
          abilities: [],
        },
        {
          talentname: "Ardent Assault II",
          prerequisites: ["Berzerker", "Juggernaut", "Hardy II", "Citadel of Stamina"],
          flavorTest: "Gain +2 Skill Points that you can spend on STR skills. When you are not Bloodied, gain + 1 to FORT.",
          abilities: [],
        },
        {
          talentname: "Shrug It Off II",
          prerequisites: ["Berzerker", "Juggernaut", " Hardy II", "Battle-Ready"],
          flavorTest: "Shrug It Off becomes 2/Recoup.",
          abilities: [],
        },
        {
          talentname: "Endure III",
          prerequisites: ["Berzerker", "Juggernaut", "Juggernaut 12"],
          flavorTest: "Gain +4 Skill Points that you can spend on END skills. If you have no uses of Endure remaining and you Recoup, regain one use.",
          abilities: [],
        },
        {
          talentname: "Juggernaut IV",
          prerequisites: ["Berzerker", "Juggernaut", "Endure III"],
          flavorTest: "You no longer need leftover AP to gain the benefits of Juggernaut.Juggernaut becomes END/ Rest",
          abilities: [
            {
              abilityname: "Back in the Fight",
              abilitydescription: "When you start your turn with 0 HP, you may spend X AP.Remove Death Points equal to ½ X. (1 / Rest) "
            },
            {
              abilityname: "Level 30",
              abilitydescription: "Back in the Fight becomes: Remove Death Points equal to X."
            },
          ],
        },
        {
          talentname: "Blood Rage II",
          prerequisites: ["Berzerker", "Rage", "Berzerker Entry"],
          flavorTest: "Gain the Fury ability.",
          abilities: [
            {
              abilityname: "Fury",
              abilitydescription: "When you make a melee attack, you may gain +2 to your attack rolls, but all attacks against you have TA and your mental defenses reduce by 2. This lasts until the start of your next turn."
            },
          ],
        },
        {
          talentname: "Furious Blows",
          prerequisites: ["Berzerker", "Rage", "Blood Rage II", "Death Defier"],
          flavorTest: "Attacks made with Fury deal +2 damage.",
          abilities: [],
        },
        {
          talentname: "Furious Blows  II",
          prerequisites: ["Berzerker", "Rage", "Furious Blows"],
          flavorTest: "Deal +2 additional damage if you attack with Fury and are Bloodied.",
          abilities: [],
        },
        {
          talentname: "Death Defier",
          prerequisites: ["Berzerker", "Rage", "Blood Rage II", "Furious Blows"],
          flavorTest: "When attacking with Fury, gain +X to attack and damage where X = your current Death Points.",
          abilities: [],
        },
        {
          talentname: "Death Drop",
          prerequisites: ["Berzerker", "Rage", "Death Defier"],
          flavorTest: "Gain Death Drop.",
          abilities: [
            {
              abilityname: "Death Drop",
              abilitydescription: "For 0 AP, If you start your turn with fewer than 10 HP, you may choose to lose all remaining HP.If you do, then your first hit this turn that was not a crit becomes a crit. (2 / Rest) ."
            },
          ],
        },
        {
          talentname: "Blood Rage III",
          prerequisites: ["Berzerker", "Rage", " Rage 3"],
          flavorTest: "Your attacks made with Fury gain +1 to their crit range.",
          abilities: [],
        },
        {
          talentname: "Blood Rage  IV",
          prerequisites: ["Berzerker", "Rage", "Blood Rage III"],
          flavorTest: "Gain +1 Rage AP.",
          abilities: [],
        },
        {
          talentname: "Bloodlust",
          prerequisites: ["Berzerker", "Rage", "Blood Rage IV", "Furious Blows II"],
          flavorTest: "GWhen you start your turn, if you have both taken damage and dealt damage since the start of your last turn, you may use Bloodlust.",
          abilities: [
            {
              abilityname: "Bloodlust",
              abilitydescription: "Move up to your Speed for 0 AP. Any creature that attacks you reactively takes 1d6 sharp damage."
            },
          ],
        },
        {
          talentname: "Furious Smash",
          prerequisites: ["Berzerker", "Rage", "Bloodlust"],
          flavorTest: "When you attack with Fury and hit, you may use Berzerk Smash.",
          abilities: [
            {
              abilityname: "Berzerk Smash",
              abilitydescription: "Roll 1d6 and 1d12. Add the d12 to the damage you dealt and take damage equal to the 1d6."
            },
          ],
        },
        {
          talentname: "Death Drop II",
          prerequisites: ["Berzerker", "Rage", "Blood Rage IV", "Death Drop"],
          flavorTest: "Death Drop works when you are Bloodied (instead of having to be 10 HP or fewer).",
          abilities: [],
        },
        {
          talentname: "Death Defier II",
          prerequisites: ["Berzerker", "Rage", "Death Drop II"],
          flavorTest: "Gain Cling to Life.",
          abilities: [
            {
              abilityname: "Cling to Life",
              abilitydescription: "When you reach 8 Death Points, roll 1d20 + END.On 14 or higher, you do not die and go back to 7 Death Points.This check increases by + 1 each time you make it, resetting when you Take a Rest."
            },
          ],
        },
        {
          talentname: "Blood Rage V",
          prerequisites: ["Berzerker", "Rage", "Blood Rage III"],
          flavorTest: "Gain +1 Rage AP.",
          abilities: [],
        },
        {
          talentname: "Blood Rage  VI",
          prerequisites: ["Berzerker", "Rage", "Blood Rage V"],
          flavorTest: "Gain +1 Rage AP",
          abilities: [],
        },
        {
          talentname: "Bloodlust II",
          prerequisites: ["Berzerker", "Rage", "Blood Rage VI", " Furious Smash"],
          flavorTest: "When you use Bloodlust, you may also use Rend.",
          abilities: [
            {
              abilityname: "Rend",
              abilitydescription: "Spend 1 AP to attack a creature that took damage from your Bloodlust ability.Use STR or DEX(your choice) vs.their FORT.If you hit, the creature gains Bleeding(1d4) for 30 seconds. (2 / Recoup)"
            },
          ]
        },

        {
          talentname: "Furious Smash II",
          prerequisites: ["Berzerker", "Rage", "Furious Smash II"],
          flavorTest: "Gain Furious Smash.",
          abilities: [
            {
              abilityname: "Furious Smash",
              abilitydescription: "When you hit with Frenzy and are Bloodied, turn it into a crit. (1/Rest)"
            },]
        },
        {
          talentname: "Bloodlust III",
          prerequisites: ["Berzerker", "Rage", "Furious Smash II"],
          flavorTest: "If you crit with Fury and are Bloodied, gain 1 AP.",
          abilities: [],
        },
        {
          talentname: "Death Defier III",
          prerequisites: ["Berzerker", "Rage", "Blood Rage VI", "Death Defier II"],
          flavorTest: "When you finish Taking a Rest, you may gain 1 Death Point.",
          abilities: [],
        },
        {
          talentname: "Death Defier IV",
          prerequisites: ["Berzerker", "Rage", "Death Defier III"],
          flavorTest: "When you Recoup, you may choose not to remove a Death Point.",
          abilities: [],
        },
        {
          talentname: "Death Drop III",
          prerequisites: ["Berzerker", "Rage", "Bloodlust IV"],
          flavorTest: "Gain +4 Skill Points that you can spend on STR skills. Death Drop becomes 2 / Recoup.",
          abilities: [],
        },
        {
          talentname: "Blood Rage VII",
          prerequisites: ["Berzerker", "Rage", "Rage 12"],
          flavorTest: "Your attacks made with Fury gain +1 to their crit range.",
          abilities: [],
        },
        {
          talentname: "Blood Rage VIII ",
          prerequisites: ["Berzerker", "Rage", "Blood Rage VII"],
          flavorTest: "Gain +4 Skill Points that you can spend on STR, DEX, or END skills. When you crit with Fury, regain additional HP equal to your END.",
          abilities: [],
        },
        {
          talentname: "Blood Rampage",
          prerequisites: ["Berzerker", "Rage", "Capstone", "Blood Rage VIII"],
          flavorTest: "You are feared the world over as a warrior of legend, and none wish to cross steel with you. You may use Blood Rampage.",
          abilities: [
            {
              abilityname: "Blood Rampage",
              abilitydescription: " When you roll Initiative, all enemies gain the Shaken condition for the duration of the fight. When you are Bloodied, you gain double your Rage AP at the start of each round. This can cause you to exceed 12 AP/ round. (1/Week)"
            },
            {
              abilityname: "Level 30",
              abilitydescription: "Blood Rampage becomes 1/Rest."
            },
          ],
        },
      ]
    },
    {
      trackname: "Fearless",
      trackdescription: "You are made of sterner stuff than the average soldier and do not frighten easily. You can stare down any horror without flinching.",
      talents: [
        {
          talentname: "",
          prerequisites: [""],
          flavorTest: "",
          abilities: [
            {
              abilityname: "",
              abilitydescription: "",
            },
            {
              abilityname: "",
              abilitydescription: "",
            },

          ]
        }
      ]
    },
    {
      trackname: "Juggernaut",
      trackdescription: "Capable of withstanding more punishment than your companions, you assume the responsibility of the front- line fighter where you can absorb the brunt of enemy attacks.",
      talents: [
        {
          talentname: "",
          prerequisites: [""],
          flavorTest: "",
          abilities: [
            {
              abilityname: "",
              abilitydescription: "",
            },
            {
              abilityname: "",
              abilitydescription: "",
            },

          ]
        },
      {
        talentname: "Rage",
        trackdescription: "By unleashing your inner demons, you can fuel your attacks with mighty rage.This allows you to do significantly more damage, but also makes you easier to hit     in your blind fury.",
        talents: [
          {
            talentname: "",
            prerequisites: [""],
            flavorTest: "",
            abilities: [
              {
                abilityname: "",
                abilitydescription: "",
              },
              {
                abilityname: "",
                abilitydescription: "",
              },

            ]
          }
        ]
      },

      ]
  }
  ]
};








