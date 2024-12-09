

const Berzerker =
{
  "TalentName": "Berzerker",
  "ShortDescription": "Berzerkers are ferocious and direct fighters that channel their terrible rage into devastating combat prowess.",
  "Quote": {
    "phrase": "I embrace the darkness within. It makes me strong. My fury is my guide, and I will meet victory…or oblivion.",
    "quotedsname": "Hanniah Sharptooth",
    "title": "queen of viscera"
  },
  "LongDescription": "You were born amidst the towering arctic mountains, axe and spear in hand.From an early age you displayed unmatched ferocity and an unyielding spirit, but there was also a darkness about you.Even by the time you were a young teen, you displayed not just bravery, but unmitigated savagery on the battlefield.As you continued to hone your physical prowess, the burning rage within you only grew hotter.Now you brim with tremendous bloodlust.The life of adventuring suits you, especially a life in pursuit of dangerous battles, as you look for any opportunity to unleash your inner demons. You are known and feared for your unstoppable blood rages.Whether you give into a blind fury or enter an almost transcendent state of awareness amid the carnage, your blood rage is a savage and terrible thing that few have ever survived.",
  "EntryTalent": {
    "prerequisites": ["Class Entry", "Berzerker", "Character Level 2"],
    "FlavorText": "When you take this entry talent, you gain the following abilities",
    "abilities": [
      {
        "abilityname": "Blood Rage",
        description: "Gain one special AP that can only be used to make attacks on your turn or to make reactive attacks if you have the ability to do so. You regain this AP at the start of each of your turns, but it cannot carry over like normal AP. You can only gain one source of special AP.If you take this class feature while already having a source of special AP, choose which feature to retain.",
      },
      {
        "TalentName": "Ferocious",
        description: "If an effect would cause you to become Frightened, you may become determined and ferocious. You ignore that effect and become immune to being Frightened for a number of minutes equal to your amount of Berzerker Talents+ 1.(2 / Rest)"
      }
    ]
  },
  "Tracks": [
    {
      "TrackName": "Exile",
      "TrackDescription": "Your life is a cruel joke.Through some misdeed or overzealous act, you have become an exile, and you seek to make your own way in an uncaring world.",
      "Talents": [
        {
          "TalentName": "marker",
          "prerequisites": ["Berzerker", "Exile", "Berzerker Entry"],
          "FlavorText": "You are marked, tattooed, or branded in some way. This sign of your exile has not broken your will.Gain one of the following benefits: ",
          "abilities": [
            {
              "abilityname": "Mad Dog",
              "abilitydescription": "You have turned to the life of the mercenary, specializing in protection and thuggery.When you are within 5 ft of a friendly creature, that creature can add ½ your STR / Menacing to a CHA check that they make.",
            },
            {
              "abilityname": "Kraken",
              "abilitydescription": "You have turned to the sea, gaining + 6 to the Vehicles(Water) skill.When you roll CHA to interact with professional sailors or port workers, you can roll 2d20 and take the higher result.",
            },
            {
              "abilityname": "Lone Wolf",
              "abilitydescription": "When making AWR or INT checks that would implement skills with the Survival tag, you may use your CHA instead.",
            }
          ],
        },
        {
          "TalentName": "Drunken Fighter",
          "prerequisites": ["Berzerker", "Exile", "Marked"],
          "FlavorText": "If you have imbibed in the past hour, you gain +2 to your weapon damage rolls, but have TD.",
          "abilities": []
        },
        {
          "TalentName": "Throw Anything",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "Improvised thrown weapons cost you 1 fewer AP to use (min 1) and deal 1d6 damage.",
          "abilities": []
        },
        {
          "TalentName": "Brutality",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "Gain +1 TA when attacking a creature that is Frightened or Prone.",
          "abilities": []
        },
        {
          "TalentName": "Another Swig",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "When you spend AP to move, you may take a drink (such as a potion or a tankard of ale) as part of the same move. Doing so does not provoke additional reactive attacks, even if your movement does.",
          "abilities": []
        },
        {
          "TalentName": "Drunken Stagger",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "While the effects of Drunken Fighter are active, the first time you move on any given turn you do not trigger reactive actions.",
          "abilities": []
        },
        {
          "TalentName": "Drunken Fist",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "If you have imbibed in the past hour, you may subtract any number up to your CHA from your attack roll, and add that same number to your damage roll. You must declare if you are using Drunken Fist and how much you are subtracting before you roll your attack. (CHA / Rest) ",
          "abilities": []
        },
        {
          "TalentName": "Hidden Dagger",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "Your Sneak Attack damage increases by +1d6 (if you had no Sneak Attack, it becomes 1d6). You can apply Sneak Attack damage to a creature that you hit with a weapon that has the Concealed tag, once per turn, as long as you have at least one source of TA. You may still use Sneak Attack if Drunken Fighter is your only source of TD.",
          "abilities": []
        },
        {
          "TalentName": "Cowards",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "Whenever your Ferocious ability is active and friendly creatures you can see are Frightened, you deal + 1 damage per ally you can see that is Frightened, to a maximum equal to your CHA.",
          "abilities": []
        },
        {
          "TalentName": "Fighting dirty",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "When you are Flanking, you can apply TA to your Maneuver attack rolls.",
          "abilities": []
        },
        {
          "TalentName": "Brawling",
          "prerequisites": ["Berzerker", "Exile", "Drunken Fighter"],
          "FlavorText": "Increase your unarmed damage die size by one (e.g., from 1d4 to 1d6).If you did not have an unarmed damage die, it becomes 1d4.",
          "abilities": []
        },
        {
          "TalentName": "Beast Conmpanion",
          "prerequisites": ["Berzerker", "Exile", "Exile 6"],
          "FlavorText": "You gain a special bond with a creature. This creature can be ML 2 or lower and must have the Beast tag and no other creature tags.Your companion follows your instructions and acts at the end of your turn. When your companion reaches 0 HP, it falls Unconscious rather than dying, and will return to full health upon Taking a Rest.",
          "abilities": []
        },
        {
          "TalentName": "Regain Honor",
          "prerequisites": ["Berzerker", "Exile", "EBeast Companion", "Defiance"],
          "FlavorText": "Your mark becomes a badge of honor, an emblem of your path to restoring your name. You may use your WILL in place of your ANT or LOG when your ANT or LOG is attacked. (CHA / Rest) ",
          "abilities": []
        },
        {
          "TalentName": "Companion Boon",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "Your beast companion gains additional maximum HP equal to your CHA.",
          "abilities": []
        },
        {
          "TalentName": "Companion Boon II",
          "prerequisites": ["Berzerker", "Exile", " Companion Boon"],
          "FlavorText": "Whenever you and your companion are within 5 ft of each other, you both gain TA on your attacks. ",
          "abilities": []
        },
        {
          "TalentName": "Companion Boon III",
          "prerequisites": ["Berzerker", "Exile", " Companion Boon II"],
          "FlavorText": "Your beast companion gains a bonus to its attack rolls equal to ½ your CHA.",
          "abilities": []
        },
        {
          "TalentName": "Drunken resilience",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "You gain Resist Toxic 5 and become immune to common poisons.",
          "abilities": []
        },
        {
          "TalentName": "Steady Fist",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "Drunken Fist becomes Steady Fist and no longer requires imbibing to use.",
          "abilities": []
        },
        {
          "TalentName": "Steady Fist II",
          "prerequisites": ["Berzerker", "Exile", "Steady Fist"],
          "FlavorText": "You now gain +2 damage per -1 to hit from Steady Fist.",
          "abilities": []
        },
        {
          "TalentName": "Restored Honor",
          "prerequisites": ["Berzerker", "Exile", "Capstone", "Regain Honor", "Exile 14"],
          "FlavorText": "Through endless tribulation you have emerged victorious, your honor restored.Your name and force of character are an inspiring presence to behold.",
          "abilities": [
            {
              "abilityname": "Unimpeachable",
              "abilitydescription": "Your allies within 30 ft of you may use your WILL instead of their own.Once an ally has used your WILL, they cannot benefit from this again until they Take a Rest.When someone uses your WILL in place of their own, you regain 1d10 HP",
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "When an ally uses Unimpeachable, their WILL is replaced by your WILL for 1 minute.",
            },

          ]
        },
        {
          "TalentName": "Defiance",
          "prerequisites": ["Berzerker", "Exile", "Beast Companion", "Regain Honor"],
          "FlavorText": "Your Drunken Fighter feature deals +2 damage.",
          "abilities": []
        },
        {
          "TalentName": "Throw Anything II",
          "prerequisites": ["Berzerker", "Exile", "Throw Anything", "Exile 7"],
          "FlavorText": "You gain +20 ft range with improvised thrown weapons and the damage becomes 1d8.",
          "abilities": []
        },
        {
          "TalentName": "Hidden Dagger II",
          "prerequisites": ["Berzerker", "Exile", "Hidden Dagger", "Exile 7"],
          "FlavorText": "You gain +1 sneak attack die.",
          "abilities": [],
        },
        {
          "TalentName": "Drunken Ferocity",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "Your Ferocious ability becomes activated whenever you have imbibed in the past hour and you can no longer voluntarily activate it.",
          "abilities": []
        },
        {
          "TalentName": "Scrapping",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "You gain two Maneuvers of your choice from the Pugilist’s Maneuver list. You can use these Pugilist’s Maneuvers 2/ Recoup.",
          "abilities": []
        },
        {
          "TalentName": "Drag",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "Your companion gains a special maneuver: Drag.",
          "abilities": [
            {
              "abilityname": "Drag",
              "abilitydescription": "Forgoing all other actions this turn, your companion can move ½ its speed and drag a prone target with it. This movement can provoke reactive actions.",
            },

          ]
        },
        {
          "TalentName": "Defresh",
          "prerequisites": ["Berzerker", "Exile", "Exile 7"],
          "FlavorText": "If you are Bleeding, Burning, Chilled, or Dazed, you may roll 1d6 every time you imbibe. If you roll a 5 or 6, the condition is removed.",
          "abilities": []
        },
        {
          "TalentName": "Utterly Independent",
          "prerequisites": ["Berzerker", "Exile", "Capstone", "Exile 14", "Defiance"],
          "FlavorText": "Your exile has led you to a life of fierce and complete independence from all others. Urban legends might follow you as you face down grave threats on your own. You become immune to the Charmed and Enthralled conditions.",
          "abilities": [
            {
              "abilityname": "Independence",
              "abilitydescription": "Whenever a creature attacks your WILL or attempts to Charm or Enthrall you, your next Drunken Fist against that target does not consume one of your uses of Drunken Fist, and you may attack their WILL instead of their AR.",
            },
            {
              "abilityname": "Level 30:",
              "abilitydescription": "Independence activates with your ANT and LOG defenses as well.",
            },

          ]
        },
        {
          "TalentName": "Ferocious II ",
          "prerequisites": ["Berzerker", "Fearless", "Berzerker Entry"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END or AWR skills. Ferocious becomes 3/Rest.",
          "abilities": []
        },
        {
          "TalentName": "Seeing Red",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious II ", "Stoic"],
          "FlavorText": "Gain +2 Skill Points that you can spend on STR or END skills. You are considered Bloodied at ¾ your max HP.",
          "abilities": []
        },
        {
          "TalentName": "Blood Will Flow",
          "prerequisites": ["Berzerker", "Fearless", "Seeing Red"],
          "FlavorText": "While you are Bloodied, deal an additional 1d12 damage on a crit.",
          "abilities": []
        },
        {
          "TalentName": "Stoic",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious II", "Seeing Red"],
          "FlavorText": "Gain +2 Skill Points that you can spend on STR or END skills. You are considered Bloodied at ¼ your max HP.",
          "abilities": []
        },
        {
          "TalentName": "Unflappable",
          "prerequisites": ["Berzerker", "Fearless", "Stoic"],
          "FlavorText": "You can trigger your Ferocious ability when you would gain the Shaken condition, granting you immunity to Frightened.and Shaken for the duration.",
          "abilities": []
        },
        {
          "TalentName": "Ferocious III",
          "prerequisites": ["Berzerker", "Fearless", "Fearless 3"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END or AWR skills.Ferocious becomes 4/Rest.",
          "abilities": []
        },
        {
          "TalentName": "Seeing Red II",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious III", "Blood Will Flow."],
          "FlavorText": "If your Ferocious ability is active and you are Bloodied, deal + 2 damage on all of your damage rolls.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Will Flow II",
          "prerequisites": ["Berzerker", "Fearless", "Seeing Red II"],
          "FlavorText": "While you are Bloodied, your crit range increases by 1.",
          "abilities": [],
        },
        {
          "TalentName": "Frenzy",
          "prerequisites": ["Berzerker", "Fearless", "Blood Will Flow II"],
          "FlavorText": "When you are Ferocious, you may use Frenzy.",
          "abilities": [
            {
              "abilityname": "Frenzy",
              "abilitydescription": "For the duration of your Ferocious ability, when you crit on an attack that cost 1 or more AP, you may immediately make another attack for 0 AP. (2 / Rest) "
            },
          ],
        },
        {
          "TalentName": "Stoic II",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious III", "Unflappable"],
          "FlavorText": "Choose REF, FORT, ANT, or LOG. While you are not Bloodied, WILL and your selection increase by + 1.",
          "abilities": [],
        },
        {
          "TalentName": "Unflappable II",
          "prerequisites": ["Berzerker", "Fearless", "Stoic II"],
          "FlavorText": "You can trigger your Ferocious ability when you would become Demoralized, granting you immunity to Frightened, Shaken, and Demoralized for the duration.",
          "abilities": [],
        },
        {
          "TalentName": "Never Retreat",
          "prerequisites": ["Berzerker", "EFearless", "Unflappable II", "EStoic"],
          "FlavorText": "When you are Ferocious and not Bloodied, you are Grounded and cannot be knocked Prone or moved against your will.",
          "abilities": [],
        },
        {
          "TalentName": "Ferocious IV",
          "prerequisites": ["Berzerker", "Fearless", "Fearless 7"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END or AWR skills. If you Recoup and have no uses of Ferocious remaining, regain one use.",
          "abilities": [],
        },
        {
          "TalentName": "Seeing Red III",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious IV", "Frenzy"],
          "FlavorText": "Gain +2 Skill Points that you can spend on DEX or END skills.While Ferocious, your LOG equals your FORT unless your LOG was already higher.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Will Flow III",
          "prerequisites": ["Berzerker", "Fearless", " Seeing Red III"],
          "FlavorText": "While you are Bloodied your crit range increases by 1 more.",
          "abilities": [],
        },
        {
          "TalentName": "Frenzy II",
          "prerequisites": ["Berzerker", "Fearless", "Blood Will Flow II"],
          "FlavorText": "Gain +1 FORT. Frenzy becomes 3/Rest.",
          "abilities": [],
        },
        {
          "TalentName": "Stoic II",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious IV", "Never Retreat"],
          "FlavorText": "Gain +2 Skill Points that you can spend on AWR or CHA skills. While you are Ferocious, gain an additional + 2 to your defenses that you selected from Stoic 2.",
          "abilities": [],
        },
        {
          "TalentName": "Unflappable III",
          "prerequisites": ["Berzerker", "Fearless", "Stoic III"],
          "FlavorText": "You can trigger your Ferocious ability when you would become Charmed, granting you immunity to Frightened, Shaken, Demoralized, and Charmed for the duration.",
          "abilities": [],
        },
        {
          "TalentName": "Never Retreat II",
          "prerequisites": ["Berzerker", "Fearless", "Unflappable III"],
          "FlavorText": "Gain Iron Advance. Iron Advance.When you are Ferocious and not Bloodied, if you would be moved against your will, you may spend 1 Reactive AP to instead move up to your speed in a direction of your choice.",
          "abilities": [],
        },
        {
          "TalentName": "Ferocious V",
          "prerequisites": ["Berzerker", "Fearless", "Fearless 11"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END or AWR skills. If you Catch Breath and have no uses of Ferocious remaining, regain one use.",
          "abilities": [],
        },
        {
          "TalentName": "Horrifying Frenzy",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious V", "Frenzy II"],
          "FlavorText": "When you use Frenzy and you are Bloodied, you can make it Horrifying.Your Frenzy ability works when you hit, instead of only when you crit. (1 / Rest) ",
          "abilities": [],
        },
        {
          "TalentName": "Savage Frenzy",
          "prerequisites": ["Berzerker", "Fearless", "Horrifying Frenzy", "Gain Savage Frenzy"],
          "FlavorText": "Savage Frenzy. When you make an attack that costs 0 AP, you may choose to instead make two attacks if you are Bloodied.These attacks both have TA and the crit range increases by 1.(2/ Rest) ",
          "abilities": [],
        },
        {
          "TalentName": "Stoic IV",
          "prerequisites": ["Berzerker", "Fearless", "Ferocious IV", "Never Retreat II"],
          "FlavorText": "When you are not Bloodied all of your physical and mental defenses increase by + 1.",
          "abilities": [],
        },
        {
          "TalentName": "Never Retreat III",
          "prerequisites": ["Berzerker", "Fearless", "Stoic IV"],
          "FlavorText": "Gain Iron Reave.",
          "abilities": [
            {
              "abilityname": "Iron Reave",
              "abilitydescription": "When you use Iron Advance, if you end your movement adjacent to an enemy, you can make one melee attack against it for 0 AP. (END / Rest).",
            },
          ]
        },
        {
          "TalentName": "Unstoppable Ferocity",
          "prerequisites": ["Berzerker", "Fearless", " Capstone", "Fearless 14"],
          "FlavorText": "Having stared down the jaws of death myriad times, you finally reach your snapping point. When you reach 0 HP, you may activate Unstoppable Ferocity. (0 Reactive AP) ",
          "abilities": [
            {
              "abilityname": "Unstoppable Ferocity",
              "abilitydescription": " For the duration of Ferocious, gain + 3 to all defenses.Gain TA on all attacks, and roll 2d20 and use the higher.Whenever you hit a creature that has imposed an active condition of Broken, Demoralized, Frightened, or Shaken against you, the hit counts as a crit. Whenever you hit a creature that would have imposed such a condition against you but did not because of your Ferocious ability, that hit counts as a crit. If you die during this time, you remain living until the end of the duration of Ferocious.During such time, you cannot regain HP, and you die at the end of that duration, whereupon you can be resurrected. After you use this ability you permanently lose all of your Talents in the Ferocious stack and lose Ferocious 1. You do not gain replacement Talents.",
            },
            {
              "abilityname": "Level 30:",
              "abilitydescription": "If you used Unstoppable Ferocity before reaching level 30, you regain all of your lost talents except for Unstoppable Ferocity. If you did not use Unstoppable Ferocity before reaching level 30, then whenever a creature attempts to inflict Broken, Demoralized, Frightened, or Shaken against you, your next attack against that creature is considered a crit.",
            },
          ]
        },
        {
          "TalentName": "Juggernaut",
          "prerequisites": ["Berzerker", "Juggernaut", "Berzerker Entry"],
          "FlavorText": "Gain the Juggernaut ability",
          "abilities": [
            {
              "abilityname": "Juggernaut",
              "abilitydescription": "By spending 1 AP, you may enter a combative focus that allows you to tune out injury.For the next 10 minutes, whenever you take physical damage, if you have any Reactive AP, gain DR 3.(2/ Rest) ",
            },
          ]
        },
        {
          "TalentName": "Haday",
          "prerequisites": ["Berzerker", "Juggernaut", "Juggernaut"],
          "FlavorText": "Gain the Hardy specialization talent (Chapter 5, “Defense Stack”).",
          "abilities": [],
        },
        {
          "TalentName": "Elemental Inurement",
          "prerequisites": ["Berzerker", "Juggernaut", "Hardy", "Staunch Resistance"],
          "FlavorText": "While your Juggernaut ability is active, reduce elementaldamage as well as physical.",
          "abilities": [],
        },
        {
          "TalentName": "Ardent Assault",
          "prerequisites": ["Berzerker", "Juggernaut", "Elemental Inurement"],
          "FlavorText": "When you are not Bloodied, deal +2 damage on melee attacks.",
          "abilities": [],
        },
        {
          "TalentName": "Staungh Resistance",
          "prerequisites": ["Berzerker", "Juggernaut", "Hardy", "Elemental Inurement"],
          "FlavorText": "While your Juggernaut ability is active, increase DR by 2. ",
          "abilities": [],
        },
        {
          "TalentName": "Shrug It Off",
          "prerequisites": ["Berzerker", "Juggernaut", "Staunch Resistance"],
          "FlavorText": "By spending 1 Reactive AP, gain Shield HP equal to the amount of physical damage that you just took. You may use Rage AP on this feature. (1 / Recoup) ",
          "abilities": [],
        },
        {
          "TalentName": "Endure",
          "prerequisites": ["Berzerker", "Juggernaut", "Juggernaut 4"],
          "FlavorText": "Gain the Endure ability.",
          "abilities": [
            {
              "abilityname": "Endure",
              "abilitydescription": "When a creature makes an attack against your AR, you may use your FORT instead. (2 / Rest)."
            },
          ]
        },
        {
          "TalentName": "Juggernaut II",
          "prerequisites": ["Berzerker", "Juggernaut", "Endure"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END skills. Juggernaut becomes ½ END/ Rest.",
          "abilities": [],
        },
        {
          "TalentName": "Juggernaut III",
          "prerequisites": ["Berzerker", "Juggernaut", "Juggernaut II"],
          "FlavorText": "While your Juggernaut ability is active, increase DR by 2.",
          "abilities": [],
        },
        {
          "TalentName": "Energy Inurement ",
          "prerequisites": ["Berzerker", "Juggernaut", "Juggernaut III", "Ardent Assault"],
          "FlavorText": "While your Juggernaut ability is active, reduce energydamage as well as physical and elemental.",
          "abilities": [],
        },
        {
          "TalentName": "Citadel Of Stamina",
          "prerequisites": ["Berzerker", "Juggernaut", "Energy Inurement"],
          "FlavorText": "gy Inurement Gain +2 FORT.",
          "abilities": [],
        },
        {
          "TalentName": "Staunch Resistance II",
          "prerequisites": ["Berzerker", "Juggernaut III", "Shrug It Off"],
          "FlavorText": "While your Juggernaut ability is active, increase DR by 3.",
          "abilities": [],
        },
        {
          "TalentName": "Battle - Ready",
          "prerequisites": ["Berzerker", "Juggernaut", " Staunch Resistance II"],
          "FlavorText": "GWhen you Recoup, you may remove +1 Death Point.",
          "abilities": [],
        },
        {
          "TalentName": "Endure II",
          "prerequisites": ["Berzerker", "Juggernaut", "Juggernaut 9"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END skills. Endure becomes 3/Rest.",
          "abilities": [],
        },
        {
          "TalentName": "Hardy II",
          "prerequisites": ["Berzerker", "Juggernaut", "Endure II"],
          "FlavorText": "Gain +1 HP per character level, and +1 HP each time you level up.",
          "abilities": [],
        },
        {
          "TalentName": "Ardent Assault II",
          "prerequisites": ["Berzerker", "Juggernaut", "Hardy II", "Citadel of Stamina"],
          "FlavorText": "Gain +2 Skill Points that you can spend on STR skills. When you are not Bloodied, gain + 1 to FORT.",
          "abilities": [],
        },
        {
          "TalentName": "Shrug It Off II",
          "prerequisites": ["Berzerker", "Juggernaut", " Hardy II", "Battle-Ready"],
          "FlavorText": "Shrug It Off becomes 2/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Endure III",
          "prerequisites": ["Berzerker", "Juggernaut", "Juggernaut 12"],
          "FlavorText": "Gain +4 Skill Points that you can spend on END skills. If you have no uses of Endure remaining and you Recoup, regain one use.",
          "abilities": [],
        },
        {
          "TalentName": "Juggernaut IV",
          "prerequisites": ["Berzerker", "Juggernaut", "Endure III"],
          "FlavorText": "You no longer need leftover AP to gain the benefits of Juggernaut.Juggernaut becomes END/ Rest",
          "abilities": [
            {
              "abilityname": "Back in the Fight",
              "abilitydescription": "When you start your turn with 0 HP, you may spend X AP.Remove Death Points equal to ½ X. (1 / Rest) "
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "Back in the Fight becomes: Remove Death Points equal to X."
            },
          ],
        },
        {
          "TalentName": "Blood Rage II",
          "prerequisites": ["Berzerker", "Rage", "Berzerker Entry"],
          "FlavorText": "Gain the Fury ability.",
          "abilities": [
            {
              "abilityname": "Fury",
              "abilitydescription": "When you make a melee attack, you may gain +2 to your attack rolls, but all attacks against you have TA and your mental defenses reduce by 2. This lasts until the start of your next turn."
            },
          ],
        },
        {
          "TalentName": "Furious Blows",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage II", "Death Defier"],
          "FlavorText": "Attacks made with Fury deal +2 damage.",
          "abilities": [],
        },
        {
          "TalentName": "Furious Blows  II",
          "prerequisites": ["Berzerker", "Rage", "Furious Blows"],
          "FlavorText": "Deal +2 additional damage if you attack with Fury and are Bloodied.",
          "abilities": [],
        },
        {
          "TalentName": "Death Defier",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage II", "Furious Blows"],
          "FlavorText": "When attacking with Fury, gain +X to attack and damage where X = your current Death Points.",
          "abilities": [],
        },
        {
          "TalentName": "Death Drop",
          "prerequisites": ["Berzerker", "Rage", "Death Defier"],
          "FlavorText": "Gain Death Drop.",
          "abilities": [
            {
              "abilityname": "Death Drop",
              "abilitydescription": "For 0 AP, If you start your turn with fewer than 10 HP, you may choose to lose all remaining HP.If you do, then your first hit this turn that was not a crit becomes a crit. (2 / Rest) ."
            },
          ],
        },
        {
          "TalentName": "Blood Rage III",
          "prerequisites": ["Berzerker", "Rage", " Rage 3"],
          "FlavorText": "Your attacks made with Fury gain +1 to their crit range.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Rage  IV",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage III"],
          "FlavorText": "Gain +1 Rage AP.",
          "abilities": [],
        },
        {
          "TalentName": "Bloodlust",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage IV", "Furious Blows II"],
          "FlavorText": "GWhen you start your turn, if you have both taken damage and dealt damage since the start of your last turn, you may use Bloodlust.",
          "abilities": [
            {
              "abilityname": "Bloodlust",
              "abilitydescription": "Move up to your Speed for 0 AP. Any creature that attacks you reactively takes 1d6 sharp damage."
            },
          ],
        },
        {
          "TalentName": "Furious Smash",
          "prerequisites": ["Berzerker", "Rage", "Bloodlust"],
          "FlavorText": "When you attack with Fury and hit, you may use Berzerk Smash.",
          "abilities": [
            {
              "abilityname": "Berzerk Smash",
              "abilitydescription": "Roll 1d6 and 1d12. Add the d12 to the damage you dealt and take damage equal to the 1d6."
            },
          ],
        },
        {
          "TalentName": "Death Drop II",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage IV", "Death Drop"],
          "FlavorText": "Death Drop works when you are Bloodied (instead of having to be 10 HP or fewer).",
          "abilities": [],
        },
        {
          "TalentName": "Death Defier II",
          "prerequisites": ["Berzerker", "Rage", "Death Drop II"],
          "FlavorText": "Gain Cling to Life.",
          "abilities": [
            {
              "abilityname": "Cling to Life",
              "abilitydescription": "When you reach 8 Death Points, roll 1d20 + END.On 14 or higher, you do not die and go back to 7 Death Points.This check increases by + 1 each time you make it, resetting when you Take a Rest."
            },
          ],
        },
        {
          "TalentName": "Blood Rage V",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage III"],
          "FlavorText": "Gain +1 Rage AP.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Rage  VI",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage V"],
          "FlavorText": "Gain +1 Rage AP",
          "abilities": [],
        },
        {
          "TalentName": "Bloodlust II",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage VI", " Furious Smash"],
          "FlavorText": "When you use Bloodlust, you may also use Rend.",
          "abilities": [
            {
              "abilityname": "Rend",
              "abilitydescription": "Spend 1 AP to attack a creature that took damage from your Bloodlust ability.Use STR or DEX(your choice) vs.their FORT.If you hit, the creature gains Bleeding(1d4) for 30 seconds. (2 / Recoup)"
            },
          ]
        },

        {
          "TalentName": "Furious Smash II",
          "prerequisites": ["Berzerker", "Rage", "Furious Smash II"],
          "FlavorText": "Gain Furious Smash.",
          "abilities": [
            {
              "abilityname": "Furious Smash",
              "abilitydescription": "When you hit with Frenzy and are Bloodied, turn it into a crit. (1/Rest)"
            },]
        },
        {
          "TalentName": "Bloodlust III",
          "prerequisites": ["Berzerker", "Rage", "Furious Smash II"],
          "FlavorText": "If you crit with Fury and are Bloodied, gain 1 AP.",
          "abilities": [],
        },
        {
          "TalentName": "Death Defier III",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage VI", "Death Defier II"],
          "FlavorText": "When you finish Taking a Rest, you may gain 1 Death Point.",
          "abilities": [],
        },
        {
          "TalentName": "Death Defier IV",
          "prerequisites": ["Berzerker", "Rage", "Death Defier III"],
          "FlavorText": "When you Recoup, you may choose not to remove a Death Point.",
          "abilities": [],
        },
        {
          "TalentName": "Death Drop III",
          "prerequisites": ["Berzerker", "Rage", "Bloodlust IV"],
          "FlavorText": "Gain +4 Skill Points that you can spend on STR skills. Death Drop becomes 2 / Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Rage VII",
          "prerequisites": ["Berzerker", "Rage", "Rage 12"],
          "FlavorText": "Your attacks made with Fury gain +1 to their crit range.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Rage VIII ",
          "prerequisites": ["Berzerker", "Rage", "Blood Rage VII"],
          "FlavorText": "Gain +4 Skill Points that you can spend on STR, DEX, or END skills. When you crit with Fury, regain additional HP equal to your END.",
          "abilities": [],
        },
        {
          "TalentName": "Blood Rampage",
          "prerequisites": ["Berzerker", "Rage", "Capstone", "Blood Rage VIII"],
          "FlavorText": "You are feared the world over as a warrior of legend, and none wish to cross steel with you. You may use Blood Rampage.",
          "abilities": [
            {
              "abilityname": "Blood Rampage",
              "abilitydescription": " When you roll Initiative, all enemies gain the Shaken condition for the duration of the fight. When you are Bloodied, you gain double your Rage AP at the start of each round. This can cause you to exceed 12 AP/ round. (1/Week)"
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "Blood Rampage becomes 1/Rest."
            },
          ],
        },
      ]
    },
    {
      "TrackName": "Fearless",
      "TrackDescription": "You are made of sterner stuff than the average soldier and do not frighten easily. You can stare down any horror without flinching.",
      "Talents": [
        {
          "TalentName": "",
          "prerequisites": [],
          "FlavorText": "",
          "abilities": [
            {
              "abilityname": "",
              "abilitydescription": "",
            },
            {
              "abilityname": "",
              "abilitydescription": "",
            },

          ]
        }
      ]
    },
    {
      "TrackName": "Juggernaut",
      "TrackDescription": "Capable of withstanding more punishment than your companions, you assume the responsibility of the front- line fighter where you can absorb the brunt of enemy attacks.",
      "Talents": [
        {
          "TalentName": "",
          "prerequisites": [],
          "FlavorText": "",
          "abilities": [
            {
              "abilityname": "",
              "abilitydescription": "",
            },
            {
              "abilityname": "",
              "abilitydescription": "",
            },

          ]
        },
      {
        "TalentName": "Rage",
        "TrackDescription": "By unleashing your inner demons, you can fuel your attacks with mighty rage.This allows you to do significantly more damage, but also makes you easier to hit     in your blind fury.",
        "Talents": [
          {
            "TalentName": "",
            "prerequisites": [],
            "FlavorText": "",
            "abilities": [
              {
                "abilityname": "",
                "abilitydescription": "",
              },
              {
                "abilityname": "",
                "abilitydescription": "",
              },

            ]
          }
        ]
      },

      ]
  }
  ]
};








