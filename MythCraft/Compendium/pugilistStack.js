const pugilist = {
  "TalentName": "Pugilist",
  "ShortDescription": "Whether a brawny boxer, a nimble martial artist, or a wellrounded wrestler, a pugilist excels at unarmed combat.",
  "Quote": {
    "phrase": "In the streets, nobody cares if you wanna fight fair or not. You gotta hit ‘em hard, and hit ‘em where it hurts ‘til your right hand’s runnin’ red.” ",
    "quotedsname": "Charlie Cobbler",
    "title": "provider for his family",
  },
  "LongDescription": "You grew up in a rough neighborhood and had been in more than your fair share of street fights by the time you were a teen.Forged and tempered by your brutal environment, you are familiar with the necessity of fighting over scraps of food and the agony of gnawing hunger and broken ribs after losing such a fight.But you remained determined to persevere despite innumerable hardships.Through sheer will to survive, unwavering grit, and bloody fists, you became a powerful unarmed combatant, capable of going toe to toe even with skilled warriors that fight with sword or spear. Your skill in unarmed combat is unquestioned and your style distinct.Do you rely on your overwhelmingly powerful physique to crush your foes? Maybe you fight with an unpredictable blend of strength and agility, or you might rigorously train in various forms that you can use to outmaneuver enemies with different fighting styles.Whatever your personal blend of unarmed combat maneuvers, you quickly cultivate a reputation among other fighters for your skill at holding your own against armed combatants.",

  "EntryTalent": {
    "prerequisites": ["Class Entry", "Pugilist", "Character Level 2"],
    "FlavorText": "When you take this entry talent, you gain the following abilities.",
    "abilities": [
      {
        "abilityname": "abilities. Unarmed Combatant",
        "abilitydescription": "Your unarmed attacks deal more damage now. You may choose whether to use STR or DEX for attacks and damage with unarmed attacks and natural weapons.Your unarmed and natural weapon damage increases by one die size(e.g., from 1d4 to 1d6).If your unarmed damage previously did not have a damage die, then this feature causes your unarmed attacks to deal 1d4 damage.",
      },
      {
        "abilityname": "Pugilist’s Maneuvers",
        "abilitydescription": "Gain three Pugilist’s Maneuvers: Grab, Counterpunch, and Corner. You can use your Pugilist’s Maneuvers collectively a number times equal to your Pugilist Level/ Recoup. You can learn additional Pugilist Maneuvers from your other pugilist talents.",
      },
      {
        "abilityname": "Grab",
        "abilitydescription": "When you hit with an unarmed attack, you may automatically Grapple the creature.",
      },
      {
        "abilityname": "Counterpunch",
        "abilitydescription": "When an enemy misses you with a melee attack, you can spend 1 AP to make an unarmed reactive attack.",
      },
      {
        "abilityname": "Corner",
        "abilitydescription": "When an enemy moves more than 5 ft away from you, you may spend 1 AP to make an unarmed reactive attack, then move up to your speed towards that enemy.",
      },

    ]

  },
  "Tracks": [
    {
      "TrackName": "Constitute",
      description: "Your body is capable of withstanding overwhelming punishment.No matter how hard you are hit, no matter how many blows, you come back for another round.",
      "Talents": [
        {
          "TalentName": "Ignore Pain",
          "prerequisites": ["Pugilist", "Constitute", "Pugilist Entry"],
          "FlavorText": "When you are not wearing armor and take physical damage, you can spend 1 Reactive AP to gain Shield HP equal to the damage you just took. (END / Rest) ",
          "abilities": []
        },
        {
          "TalentName": "Surge Of Strength",
          "prerequisites": ["Pugilist", "Constitute", "Ignore Pain"],
          "FlavorText": "Gain the Surge of Strength ability.",
          "abilities": [
            {
              "abilityname": "Surge of Strength",
              "abilitydescription": "The first time you are Bloodied after Taking a Rest, regain 1d6 + END HP.",
            },

          ],
        },
        {
          "TalentName": "Red Right Hand",
          "prerequisites": ["Pugilist", "Constitute", " Surge of Strength"],
          "FlavorText": "Learn 1 Pugilist’s Maneuver of your choice. When you are Bloodied, your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d4 to 1d6), to a maximum of 1d12.",
          "abilities": []
        },
        {
          "TalentName": "Ignore Pain II",
          "prerequisites": ["Pugilist", "Constitute", "Red Right Hand"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. If Bloodied when you Ignore Pain, add your END to the amount of Shield HP that you gain. ",
          "abilities": []
        }, {
          "TalentName": "Surge Of Strength II",
          "prerequisites": ["Pugilist", "Constitute", "Ignore Pain II"],
          "FlavorText": "Surge of Strength becomes: The first time you are Bloodied after Recouping.",
          "abilities": []
        }, {
          "TalentName": "Enrage",
          "prerequisites": ["Pugilist", "Constitute", "Surge of Strength II"],
          "FlavorText": "While you are Bloodied, all of your unarmed and natural weapon damage rolls deal + X damage, where X equals the number of Death Points you have.",
          "abilities": []
        },
        {
          "TalentName": "Ignore Pain III",
          "prerequisites": ["Pugilist", "Constitute", "Enrage"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. When you Recoup, regain 1 use of Ignore Pain.",
          "abilities": []
        },
        {
          "TalentName": "Battle Focus",
          "prerequisites": ["Pugilist", "Constitute", "Ignore Pain III"],
          "FlavorText": "Gain Battle Focus.",
          "abilities": [
            {
              "abilityname": "Battle Focus",
              "abilitydescription": " While you are Bloodied, if you are Shaken, only subtract 1 from your rolls.",
            },

          ]
        },
        {
          "TalentName": "On The Ropes",
          "prerequisites": ["Pugilist", "Constitute", "Battle Focus"],
          "FlavorText": "Gain the On the Ropes ability",
          "abilities": [
            {
              "abilityname": "On the Ropes",
              "abilitydescription": ". When reduced to 0 HP, regain 1d4 HP. (1/Rest).",
            },

          ],
        },
        {
          "TalentName": "Surge Of Strength III",
          "prerequisites": ["Pugilist", "Constitute", " On the Ropes"],
          "FlavorText": "Surge of Strength becomes: The first time you are Bloodied after rolling Initiative.",
          "abilities": []
        },
        {
          "TalentName": "Death defier",
          "prerequisites": ["Pugilist", "Constitute", "Surge of Strength III"],
          "FlavorText": "Gain the Cling to Life ability.",
          "abilities": [
            {
              "abilityname": "Cling to Life",
              "abilitydescription": "When you reach 8 Death Points, roll 1d20 + END.On 14 or higher, you do not die and go back to 7 Death Points.This check increases by + 1 each time you make it, resetting when you Take a Rest.",
            },

          ]
        }, {
          "TalentName": "Constiute",
          "prerequisites": ["Pugilist", "Constitute", "Surge of Strength III"],
          "FlavorText": "Treat your END as being one Threshold higher when calculating your HP.When you take this talent, you may reroll or recalculate your HP.",
          "abilities": []
        }, {
          "TalentName": "Enrage II",
          "prerequisites": ["Pugilist", "Constitute", "Constitute 11"],
          "FlavorText": "Treat your END as being one Threshold higher when calculating your HP.When you take this talent, you may reroll or recalculate your HP.",
          "abilities": []
        },
        {
          "TalentName": "Red Right Hand II",
          "prerequisites": ["Pugilist", "Constitute", "Enrage II"],
          "FlavorText": "Learn 1 Pugilist’s Maneuver of your choice. When you are have 0 HP, your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d6 to 1d8), to a maximum of 1d12.",
          "abilities": []
        },
        {
          "TalentName": "Mastery of form",
          "prerequisites": ["Pugilist", "Constitute", "Red Right Hand II"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": []
        },
        {
          "TalentName": "Battle Focus II",
          "prerequisites": ["Pugilist", "Constitute", "Mastery of Form"],
          "FlavorText": "Battle Focus becomes: While you are Bloodied, you are immune to being Shaken.If you are Sickened, you instead subtract 2 from your d20 rolls.",
          "abilities": []
        },
        {
          "TalentName": "Unkillable Champion",
          "prerequisites": ["Pugilist", "Constitute", "Capstone", "Battle Focus II"],
          "FlavorText": "You are cheered the world over as an unkillable warrior. People often challenge you to feats of strength, buy you drinks, and want to hear of your great exploits. You may use the Unkillable Champion ability when you roll Initiative.",
          "abilities": [
            {
              "abilityname": "Unkillable Champion",
              "abilitydescription": "For the duration of the battle, regain 1d4 HP at the start of each of your turns. (1 / Week).",
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "Unkillable Champion becomes 1/Rest.",
            },
          ]

        },
      ]
    },
    {
      "TrackName": "Martial Arts",
      "TrackDescription": "By focusing on harmony of body, mind, and spirit, you can flow between various forms of unarmed combat, going beyond the bounds of physique alone.",
      "Talents": [
        {
          "TalentName": "Predict A Punch",
          "prerequisites": ["Pugilist", "Martial Arts", "Class Entry"],
          "FlavorText": "Gain +1 ANT. Gain the Impulse talent from the armor specialization stack unless you have one of its incompatibilities.",
          "abilities": []
        },
        {
          "TalentName": "Stance Of The Owl",
          "prerequisites": ["Pugilist", "Martial Arts", "Predict a Punch"],
          "FlavorText": "You may spend 3 AP to enter the Stance of the Owl. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Owl",
              "abilitydescription": "You have TD on all attacks, and have + 3 to ANT.",
            },],
        },
        {
          taqlentname: "Stance Of The Squirrel",
          "prerequisites": ["Pugilist", "Martial Arts", "Predict a Punch"],
          "FlavorText": "You may spend 3 AP to enter the Stance of the Squirrel. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Squirrel",
              "abilitydescription": "You have a climb speed equal to your walking speed, and count as one size smaller for the purposes of Grappling and moving through creatures.",
            },]
        },
        {
          "TalentName": "Stance Of The Bear",
          "prerequisites": ["Pugilist", "Martial Arts", "Predict a Punch"],
          "FlavorText": "You may spend 3 AP to enter the Stance of the Bear. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Bear",
              "abilitydescription": "You have -1 REF and +3 FORT.",
            },],
        },
        {
          "TalentName": "Sense Danger",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 2"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the observation tag. You can never be Partially Surprised.",
          "abilities": []
        },

        {
          "TalentName": "Flip",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 2"],
          "FlavorText": "Learn the Go for the Knees Pugilist Maneuver if you didn’t know it. When you use Counterpunch, you may also use Go For the Knees as part of the same Pugilist’s Maneuver(costing no additional AP).",
          "abilities": [],
        },
        {
          "TalentName": "Unarmored Defense",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 2"],
          "FlavorText": "Gain +1 REF and FORT.",
          "abilities": [],
        },
        {
          "TalentName": "Stance Of The Bison",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 3"],
          "FlavorText": "You may spend 3 AP to enter the Stance of the Bison. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Bison",
              "abilitydescription": "Gain Resist Physical 2, and you count as one Size larger for the purposes of Grappling and determining Encumberance.Suffer Vulnerable Energy 1.",
            },],
        },
        {
          "TalentName": "Stance Of The Turtle",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 3"],
          "FlavorText": "You may spend 3 AP to enter the Stance of the Turtle. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Turtle",
              "abilitydescription": "You are Shaken, but have +2 to every defense.",
            },]
        },
        {
          "TalentName": "Stance of the Leopard",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 3"],
          "FlavorText": "You may spend 3 AP to enter the Stance of the Leopard. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Leopard",
              "abilitydescription": " Gain +1 REF. You can move 5 ft as part of making a melee unarmed or natural weapon attack(move before or after the attack), but when you are hit with a melee attack, the enemy can move you in the same fashion.",
            },]
        },
        {
          "TalentName": "Armed Arts",
          "prerequisites": ["Pugilist", "Martial Arts", "Predict a Punch"],
          "FlavorText": "The following weapons work with any Martial Arts ability that references “unarmed or natural weapon attacks”: dagger, kama, kunai, kusarigama, nunchucks, quarterstaff, shuriken, tonfa, wakizashi, and whip.",
          "abilities": [],
        },
        {
          "TalentName": "Armed Arts II",
          "prerequisites": ["Pugilist", "Martial Arts", "Armed Arts"],
          "FlavorText": "Armed Arts weapons work for Pugilist’s Maneuvers that mention “unarmed or natural weapon attacks” as well.",
          "abilities": [],
        },
        {
          "TalentName": "Kensei",
          "prerequisites": ["Pugilist", "Martial Arts", "Armed Arts II"],
          "FlavorText": "Pick any two weapons with the Melee or Reach tag to add to your Armed Arts weapons list.",
          "abilities": [],
        },
        {
          "TalentName": "Fluid Forms",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 4"],
          "FlavorText": "Switching into or out of a Stance now costs 2 AP. Gain Fluid Forms.",
          "abilities": [
            {
              "abilityname": "Fluid Forms",
              "abilitydescription": "You can switch between Stances for 0 AP. (1 / Recoup) ",
            },]
        },
        {
          "TalentName": "Stance Of The Serpent",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms"],
          "FlavorText": "You may spend 2 AP to enter the Stance of the Serpent. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Serpent",
              "abilitydescription": "For the duration, when you spend AP to move, you can move + 5 ft.Gain + 1 REF, but suffer - 1 FORT.",
            },],
        },
        {
          "TalentName": "Stance Of The Rabbit",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms"],
          "FlavorText": "You may spend 2 AP to enter the Stance of the Rabbit. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Rabbit",
              "abilitydescription": ". Your jump distance is doubled, you gain + 1 ANT and REF, and you suffer - 1 WILL.",
            },],
        },
        {
          "TalentName": "Stance Of The Wolf",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms"],
          "FlavorText": "You may spend 2 AP to enter the Stance of the Wolf. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Wolf",
              "abilitydescription": "You gain TA on unarmed and natural weapon attacks against creatures if at least one ally is adjacent to that creature, and that ally gains this TA as well. If there are no allies adjacent to a hostile creature, you have TD against it.",
            },]
        },
        {
          "TalentName": "Know Your Enemy",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 6"],
          "FlavorText": "After you have attacked or been attacked by the same creature a collective total of eight times, you can use Know your Enemy.",
          "abilities": [
            {
              "abilityname": "Know your Enemy",
              "abilitydescription": " For 0 AP on your turn, learn the creature’s AR, REF, FORT, and ANT.",
            },],
        },
        {
          "TalentName": "Weak Spot",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 6"],
          "FlavorText": "Gain the Weak Spot ability.",
          "abilities": [
            {
              "abilityname": "Weak Spot",
              "abilitydescription": "When you make an attack with a Pugilist’s Maneuver, you may choose to attack your target’s AR, REF, FORT, or ANT. (2 / Recoup) .",
            },]
        },
        {
          "TalentName": "Predict A Punch II",
          "prerequisites": ["Pugilist", "Martial Arts", "Martial Arts 6"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Acrobatics tag. Gain the Impulse II talent from the armor specialization stack if you meet its prerequisites.",
          "abilities": [],
        },
        {
          "TalentName": "Quiet Mind",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 7"],
          "FlavorText": "Gain Quiet Mind",
          "abilities": [
            {
              "abilityname": "Quiet Mind",
              "abilitydescription": "When you Recoup, you can remove the Fatigue condition from yourself. (1 / Rest).",
            },],
        },
        {
          "TalentName": "Disrupt Ki",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 7"],
          "FlavorText": "Gain Disrupt Ki.",
          "abilities": [
            {
              "abilityname": "Disrupt Ki",
              "abilitydescription": "When you hit someone with a Pugilist’s Maneuver, that creature cannot cast Spells until the end of their next turn. (1 / Recoup).",
            },]
        },
        {
          "TalentName": "Reactive Stance",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 7"],
          "FlavorText": "When you end your turn with 0 AP, gain 1 Reactive AP that you lose at the start of your next turn.This can only be used on reactive attacks. This is a source of Special AP. You can only have one source of Special AP.If you gain a new source, choose whether you keep this source or take the new source of special AP.",
          "abilities": [],
        },
        {
          "TalentName": "Stance Of Raging Fire",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 8"],
          "FlavorText": "You may spend 2 AP to enter the Stance of Raging Fire. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of Raging Fire",
              "abilitydescription": "For the duration, you do +1d4 damage on your unarmed and natural weapon attacks, and enemies deal + 2 damage on melee attacks against you.",
            },]
        },
        {
          "TalentName": "Stance of Flowing Water",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 8"],
          "FlavorText": "You may spend 2 AP to enter the Stance of Flowing Water. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of Flowing Water",
              "abilitydescription": "For the duration, when you are hit with a melee attack, you fall prone.When you hit with an unarmed or natural weapon attack, the target creature falls prone if it is no more than one size larger than you. You cannot be attacked reactively.",
            },],
        },
        {
          "TalentName": "Stance of the Stout Oak",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 8"],
          "FlavorText": "You may spend 2 AP to enter the Stance of the Stout Oak. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
          "abilities": [
            {
              "abilityname": "Stance of the Stout Oak",
              "abilitydescription": "For the duration, when you spend AP to move, your speed is reduced by 5 ft. You cannot be knocked prone.",
            },],
        },
        {
          "TalentName": "Fluid Forma II",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 9"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Acrobatics tag. You can use Fluid Forms 2/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Serenity",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Survival, Knowledge, and Observation tags. Gain + 1 WILL.",
          "abilities": [],
        },
        {
          "TalentName": "Martial Artist",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II"],
          "FlavorText": "Basic maneuvers that cost 2 AP now cost 1 AP for you.",
          "abilities": [],
        },
        {
          "TalentName": "Reactive Stance II",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Reactive Stance"],
          "FlavorText": "You gain 2 reactive AP with Reactive Stance.",
          "abilities": [],
        },
        {
          "TalentName": "Mind Over Matter",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 11"],
          "FlavorText": "You can use AWR or CHA in place of STR or END when making an Attribute Check. If you have a relevant skill that is normally associated with the STR or END attribute, you add that bonus to your AWR or CHA. (2/Recoup).",
          "abilities": [],
        },
        {
          "TalentName": "Pressure Point",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 11"],
          "FlavorText": "Your unarmed and natural weapon crit range increases by 1.",
          "abilities": [],
        },
        {
          "TalentName": "Dance Of Battle",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 11"],
          "FlavorText": "When a creature misses you with an attack, you may move up to 10 ft for free(0 AP). (1 / Turn) ",
          "abilities": [],
        },
        {
          "TalentName": "Know Your Enemy II",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 12"],
          "FlavorText": "Know your Enemy only requires four attacks, and it also reveals what defenses the creature can target with its attacks.",
          "abilities": [],
        },
        {
          "TalentName": "Unfettered Speed",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 12"],
          "FlavorText": "Your base speed increases by 10 ft.",
          "abilities": [],
        },
        {
          "TalentName": "Predict A Punch III",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 12"],
          "FlavorText": "Gain +1 ANT. Gain the Impulse III talent from the armor specialization stack if you meet its prerequisites.",
          "abilities": [],
        },
        {
          "TalentName": "Monkey Climbing The Tree",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 13"],
          "FlavorText": "When you spend AP to move, you can run along vertical surfaces. You cannot end your movement on a vertical surface or you fall — unless you have at least one free hand, in which case you can end your movement on a vertical surface.",
          "abilities": [],
        },
        {
          "TalentName": "Pressure Point II",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 13"],
          "FlavorText": "Your unarmed and natural weapon crit range increases by 1.",
          "abilities": [],
        },
        {
          "TalentName": "Reactive Stance III",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 13"],
          "FlavorText": "You gain 3 reactive AP with Reactive Stance.",
          "abilities": [],
        },
        {
          "TalentName": "Meikin",
          "prerequisites": ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 14"],
          "FlavorText": "eagerly seek you out as a wise and skillful teacher and tutor. Your Know your Enemy ability only requires two attacks. You can regain 1 use of your Pugilist’s Maneuvers by spending 4 AP on your turn.",
          "abilities": [
            {
              "abilityname": "Myriad Stances",
              "abilitydescription": "By meditating and training, you can reassign all of your Talent Points within the martial arts pugilist track.If you respec in such a way that you no longer have access to this ability, you cannot use this ability again until you regain access to it. (1 / Week) .",
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "Myriad Stances becomes 1/Recoup.",
            },
          ],
        },
      ]
    },
    {
      "TrackName": "Pummeling",
      "TrackDescription": " You hone your body and become inhumanly strong, capable of delivering punches that devastate your opponents.",
      "Talents": [
        {
          "TalentName": "Take A Punch",
          "prerequisites": ["Pugilist", "Pummeling", "Pugilist Entry"],
          "FlavorText": "Gain +1 FORT. Gain the Tough talent from the armor specialization stack unless you have one of its incompatibilities.",
          "abilities": []
        },
        {
          "TalentName": "Greater Conunterpunch",
          "prerequisites": ["Pugilist", "Pummeling", "Take a Punch"],
          "FlavorText": "When you use Counterpunch, you gain TA and deal +2 damage on a hit.",
          "abilities": []
        },
        {
          "TalentName": "Boxer's Maneuvers",
          "prerequisites": ["Pugilist", "Pummeling", "Greater Counterpunch"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": []
        },
        {
          "TalentName": "Greater Corner",
          "prerequisites": ["Pugilist", "Pummeling", "Boxer’s Maneuvers"],
          "FlavorText": "When you use Corner, gain TA. If you hit, the enemy is Slowed until the end of their turn.",
          "abilities": []
        },
        {
          "TalentName": "Mighty Punch",
          "prerequisites": ["Pugilist", "Pummeling", "Greater Corner"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Athleticism tag. Gain Mighty Punch.",
          "abilities": [
            {
              "abilityname": "Mighty Punch",
              "abilitydescription": "Add +½ END to hit, and +END to damage. (1 / Recoup) ",
            },
          ]
        },
        {
          "TalentName": "Take A Punch II",
          "prerequisites": ["Pugilist", "Pummeling", "Mighty Punch"],
          "FlavorText": "Gain the Tough II talent from the armor specialization stack if you meet its prerequisites.",
          "abilities": []
        },
        {
          "TalentName": "Hulking",
          "prerequisites": ["Pugilist", "Pummeling", "Take a Punch II"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Athleticism tag. You count as one Size larger for the purposes of lifting, carrying, dragging, and grappling.Your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d4 to 1d6), to a maximum of 1d12.",
          "abilities": []
        },
        {
          "TalentName": "Boxer's Maneuvers II",
          "prerequisites": ["Pugilist", "Pummeling", "Hulking"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": []
        },
        {
          "TalentName": "Superior Corner",
          "prerequisites": ["Pugilist", "Pummeling", "Boxer’s Maneuver II"],
          "FlavorText": "When you use Greater Corner, gain an additional TA. If you hit, the target falls Prone.",
          "abilities": []
        },
        {
          "TalentName": "Superior Counterpunch",
          "prerequisites": ["Pugilist", "Pummeling", "Superior Corner"],
          "FlavorText": "When you use Counterpunch, gain an additional TA. If you hit, the target falls Prone.",
          "abilities": []
        },
        {
          "TalentName": "Greater Uppercut",
          "prerequisites": ["Pugilist", "Pummeling", "Superior Counterpunch"],
          "FlavorText": "Learn Uppercut if you did not know it. Your crit range on Uppercut increases by 2.",
          "abilities": []
        },
        {
          "TalentName": "Superior Uppercut ",
          "prerequisites": ["Pugilist", "Pummeling", "Greater Uppercut"],
          "FlavorText": "You always have TA on Uppercut. If you crit, a creature is pushed 10 ft, takes 1d4 falling damage, and is Dazed.",
          "abilities": []
        },
        {
          "TalentName": "Greater Gut Punch",
          "prerequisites": ["Pugilist", "Pummeling", "Superior Uppercut"],
          "FlavorText": "Learn Gut Punch if you did not know it. It only costs you 3 AP",
          "abilities": []
        },
        {
          "TalentName": "Superior Gut Punch",
          "prerequisites": ["Pugilist", "Pummeling", "Greater Gut Punch"],
          "FlavorText": "You always have TA on Gut Punch, and you knock a creature Prone if you hit.",
          "abilities": []
        },
        {
          "TalentName": "Mighty Punch II",
          "prerequisites": ["Pugilist", "Pummeling", "Superior Gut Punch"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Athleticism tag. When you crit with Mighty Punch, if you roll the maximum number on your damage die(such as 8 on a d8), roll another damage die.Repeat this process until you have no new maximum rolls on your damage dice, then add the sum of all of those damage dice together. Mighty Punch becomes(3/ Recoup) ",
          "abilities": []
        },
        {
          "TalentName": "Take A Punch III",
          "prerequisites": ["Pugilist", "Pummeling", "Mighty Punch II"],
          "FlavorText": "Gain +1 FORT. Gain the Tough III talent from the armor specialization stack if you meet its prerequisites.",
          "abilities": []
        },
        {
          "TalentName": "Take A Punch",
          "prerequisites": ["Pugilist", "Pummeling", " Capstone", " Take a Punch III"],
          "FlavorText": "You have the glorious title of heavyweight champion. People challenge you to nonlethal fights and feats of strength just to witness your incredible brawn. You count as one additional size larger for the purposes oflifting, carrying, dragging, and grappling.Your unarmed and natural weapon damage rolls increase by one die size(e.g., from 1d8 to 1d10) to a max of 1d12.",
          "abilities": [
            {
              "abilityname": "Level 30",
              "abilitydescription": "The final cap for your STR increases from 12 to 14.",
            },
          ]
        }]
    },
    {
      "TrackName": "Wrestling",
      "TrackDescription": "A well-rounded wrestler, you have a balanced mix of offensive and defensive maneuvers and can easily grapple your foes.",
      "Talents": [
        {
          "TalentName": "Dodge A Punch",
          "prerequisites": ["Pugilist", "Wrestling", "Pugilist Entry"],
          "FlavorText": "Gain +1 REF. Gain the Evasive talent from the armor specialization stack unless you have one of its incompatibilities.",
          "abilities": [],
        },
        {
          "TalentName": "Wrestler's Maneuvers",
          "prerequisites": ["Pugilist", "Wrestling", "Dodge a Punch"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": []
        },
        {
          "TalentName": "Reverst Grapple",
          "prerequisites": ["Pugilist", "Wrestling", "Wrestler’s Maneuvers"],
          "FlavorText": "When you are Grappled, you can spend 2 AP on your turn to attempt to reverse it. Make a STR or DEX attack against the creature’s REF or FORT (their choice). If you hit, then you are no longer grappled and you are grappling that creature.",
          "abilities": []
        },
        {
          "TalentName": "Size Up",
          "prerequisites": ["Pugilist", "Wrestling", "Reverse Grapple"],
          "FlavorText": "After you have attacked or been attacked by the same creature a collective total of ten times since you rolled Initiative, you can use Size Up. ",
          "abilities": [
            {
              "abilityname": "Size Up",
              "abilitydescription": "For 0 AP on your turn, learn the creature’s AR, REF, FORT, and ANT.",
            },

          ]
        },
        {
          "TalentName": "Size Up II",
          "prerequisites": ["Pugilist", "Wrestling", "Size Up"],
          "FlavorText": "Your Size Up ability now only requires six attacks to trigger. You also learn the creature’s Resist, Vulnerable, and Immune traits.",
          "abilities": []
        },
        {
          "TalentName": "Brawl",
          "prerequisites": ["Pugilist", "Wrestling", "Reverse Grapple"],
          "FlavorText": "When there is more than one hostile creature adjacent to you, gain +1 FORT and your unarmed and natural weapon damage dice increase by one die size (e.g., from 1d4 to 1d6), to a maximum of 1d12.",
          "abilities": []
        },
        {
          "TalentName": "Brawl II",
          "prerequisites": ["Pugilist", "Wrestling", "Brawl"],
          "FlavorText": "When there is more than one hostile creature adjacent to you, gain +1 AR and gain TA on all of your attacks.",
          "abilities": []
        },
        {
          "TalentName": "Dodge A Punch II",
          "prerequisites": ["Pugilist", "Wrestling", "Wrestling 5"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. Gain the Evasive II talent from the armor specialization stack if you meet its prerequisites.",
          "abilities": []
        },
        {
          "TalentName": "Wrestler's Maneuvers II",
          "prerequisites": ["Pugilist", "Wrestling", "Dodge a Punch II"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": []
        },
        {
          "TalentName": "Headlock Choke",
          "prerequisites": ["Pugilist", "Wrestling", "Wrestler’s Maneuvers II"],
          "FlavorText": "Learn Headlock if you did not know it. When a creature breaks free from being Restrained by Headlock, it does not break them free from your Grapple; they must first break free from Restrained, then from Grappled, using separate checks and spending AP for each check.",
          "abilities": []
        },
        {
          "TalentName": "Pure Physique",
          "prerequisites": ["Pugilist", "Wrestling", "Headlock Choke"],
          "FlavorText": "Gain +1 REF and +1 FORT.",
          "abilities": []
        },
        {
          "TalentName": "Pure Physique II",
          "prerequisites": ["Pugilist", "Wrestling", "Pure Physique"],
          "FlavorText": "Gain +1 REF and +1 FORT.",
          "abilities": []
        },
        {
          "TalentName": "Improvised Weapons",
          "prerequisites": ["Pugilist", "Wrestling", "Pure Physique"],
          "FlavorText": "You can use any object that would not have the Unwieldy tag as a club. You can use any object that you can lift that has the Unwieldy tag as a maul that costs 4 AP to use.",
          "abilities": []
        },
        {
          "TalentName": "Pure Technique",
          "prerequisites": ["Pugilist", "Wrestling", "Improvised Weapons"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. Your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d4 to 1d6), to a maximum of 1d12.",
          "abilities": []
        },
        {
          "TalentName": "Wrestler's Maneuvers III",
          "prerequisites": ["Pugilist", "Wrestling", "Wrestling 10"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": [],
        },
        {
          "TalentName": "Headlock Choke II",
          "prerequisites": ["Pugilist", "Wrestling", "Wrestler’s Maneuvers III"],
          "FlavorText": "Gain Submission Hold.",
          "abilities": [
            {
              "abilityname": "Submission Hold",
              "abilitydescription": " Target a creature that is Bloodied or has 50 HP or less(whichever value is lower) that you have Restrained using Headlock. You may spend 4 AP to make an END attack against their FORT.If you hit, they become Dazed until the end of your next turn.If they were already Dazed, they become Stunned.If they were already Stunned, they fall Unconscious. If you knock someone Unconscious in this way, you gain 1 Fatigue.",
            },]
        },
        {
          "TalentName": "Dodge A Punch III",
          "prerequisites": ["Pugilist", "Wrestling", "Headlock Choke II"],
          "FlavorText": "Gain +1 REF.Gain the Evasive III talent from the armor specialization stack if you meet its prerequisites.",
          "abilities": []
        },
        {
          "TalentName": "Headlock Choke III",
          "prerequisites": ["Pugilist", "Wrestling", "Dodge a Punch III"],
          "FlavorText": "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. When you Stun an enemy using Submission Hold, they gain 1 Fatigue.",
          "abilities": []
        },
        {
          "TalentName": "Wrestler's Maneuvers IV",
          "prerequisites": ["Pugilist", "Wrestling", "Headlock Choke III"],
          "FlavorText": "Learn two Pugilist’s Maneuvers of your choice.",
          "abilities": []
        },
        {
          "TalentName": "Signature Move",
          "prerequisites": ["Pugilist", "Wrestling", ": Wrestler’s Maneuvers IV"],
          "FlavorText": "You are a ring fighter of incredible fame, and people will pay high bets on you, gang up against you in cage matches, and revel in your glory.Choose a Pugilist’s Maneuver that you already know, which becomes your Signature Move.Your Signature Move always has TA and does not expend a use of your Pugilist’s Maneuvers.",
          "abilities": [

            {
              "TalentName": "Knockout",
              description: "When you attack a creature that is Stunned or Prone with your Signature Move, and that creature is Bloodied or has 50 HP or fewer (whichever value is lower), then you roll an additional damage die and your Signature Move crits on a roll of 16-20.(1 / Rest) .",
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "You gain a second signature move, and Knockout becomes 1/Recoup.",
            },

          ]
        }
      ]
    }
  ]
};  