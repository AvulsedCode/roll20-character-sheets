const Ranger =
{
  "StackName": "Ranger",
  "ShortDescription": "Wardens of the natural world and guides through uncharted wilderness, rangers are often more at home in unsettled lands than in luxurious cities.",
  "Quote": {
    "phrase": "The wilderness gives me solace as I continue my grim purpose: to slay that which would threaten the natural order",
    "quotedsname": "Grim",
    "title": "monster slayer",
  },
  "LongDescription": "You grew up on the fringes of your settlement, spending more time in the wilderness beyond than in the safety of your own homestead.In your youth you came to love the serenity of rugged nature over the clamor of frivolous settled life. You are more at home with the wolves and the elk than with nobles and debutants.In your early adulthood you made the decision to leave civilization completely in exchange for a life in the wilds.Now, you defend your heartland from supernatural monstrosities that threaten to upset the balance of nature, and from the cruelties of careless hunters or loggers who regard the natural cycle of life with disrespectful indifference. As you are more at home in the wilderness than in civilization, you must determine how you intend to survive on your own merits.Do you hone your physical prowess until you can go toe to toe with the strongest warrior? Do you sharpen your senses and your survival skills, stalking prey through rugged wilds with more finesse than any cat or bird? Maybe you tap into the Primal Source, using magic to enhance your physical capabilities and to speak with the animals whose home you share.",

  "EntryTalent": {
    "prerequisites": ["Class Entry", "", "Character Level 2"],
    "FlavorText": "When you take this entry talent, you gain the following abilities.",
    "abilities": [
      {
        "abilityname": "Primal Aspect",
        "abilitydescription": "Repeatable. Gain the Primal Aspect talent.",
      },
      {
        "abilityname": "Skilled",
        "abilitydescription": "Gain +4 Skill Points, which you can spend on skills with the Observation and/or Survival tags.",
      },
      {
        "abilityname": "Fighting Instinc",
        "abilitydescription": "You may grant yourself TA until the end of your current turn. While you have fighting instinct, when you spend AP to move, gain +5 ft movement. (AWR/ Recoup)"
      }
    ],
  },
  "Tracks": [
    {

      "TrackName": "Bravety Track",
      "TrackDescription": "",
      "Talents": [
        {
          "TalentName": "Bravery",
          "prerequisites": ["Ranger", "Bravery", "Ranger Entry"],
          "FlavorText": "Gain the Bravery ability",
          "abilities": [
            {
              "abilityname": "Bravery",
              "abilitydescription": " Resist Frightened 2.",
            },
          ],
        },
        {
          "TalentName": "Courage",
          "prerequisites": ["Ranger", "Bravery", "Bravery"],
          "FlavorText": "Gain the Courage ability",
          "abilities": [
            {
              "abilityname": "Courage",
              description: "When you are Broken, Demoralized, Frightened, or Shaken by an enemy, gain TA against that enemy while your effect persists. (AWR/Rest).",
            },],
        },
        {

          "TalentName": "Bravery II",
          "prerequisites": ["Ranger", "Bravery", " Courage"],
          "FlavorText": "Your Resist ability from Bravery increases by 1 and applies to Demoralized.",
          "abilities": [],
        },
        {
          "TalentName": "Courage II",
          "prerequisites": ["Ranger", "Bravery", "Bravery II"],
          "FlavorText": "When you use Courage, and you are Bloodied, regain HP equal to your AWR.",
          "abilities": [],
        },
        {

          "TalentName": "Fight",
          "prerequisites": ["Ranger", "Bravery", " Courage II", "Flight", "Freeze"],
          "FlavorText": "Gain the Fight ability",
          "abilities": [
            {
              "abilityname": "Fight",
              "abilitydescription": "When you use Courage, deal +1d6 damage against the source of the condition for its duration.",
            },],
        },
        {
          "TalentName": "Flight",
          "prerequisites": ["Ranger", "Bravery", "Courage II", "Fight", "Freeze"],
          "FlavorText": "Gain the Flight ability.",
          "abilities": [
            {
              "abilityname": "Flight",
              "abilitydescription": "When you use Courage, gain +5 ft speed when you use AP to move.This lasts for the condition’s duration.",
            },
          ],
        },
        {
          "TalentName": "Freeze",
          "prerequisites": ["Ranger", "Bravery", "Courage II", "Fight", "Freeze"],
          "FlavorText": "Gain the Freeze ability",
          "abilities": [
            {
              "abilityname": "Freeze",
              "abilitydescription": "When you use Courage, you gain TD on attacks, suffer the Chilled condition, and all of your defenses increase by +3. This lasts for the condition’s duration.",
            },
          ],
        },
        {
          "TalentName": "Bravfry III",
          "prerequisites": ["Ranger", "Bravery", "Bravery 5"],
          "FlavorText": "Your Resist ability from Bravery increases by 1, and applies to Broken.",
          "abilities": [],
        },
        {
          "TalentName": "Drive To Survive",
          "prerequisites": ["Ranger", "Bravery", "Bravery III"],
          "FlavorText": "Gain the Drive to Survive ability.",
          "abilities": [
            {
              "abilityname": "Drive to Survive",
              "abilitydescription": " When you start your turn and can see a creature that has any Planar, Modifying, or Magical creature tags, you may become Shaken. This counts as you becoming Shaken by that creature. You remain Shaken for 1 minute or until the creature dies (whichever is first). (½ AWR/Rest).",
            },
          ],
        },
        {
          "TalentName": "Bravery IV",
          "prerequisites": ["Ranger", "Bravery", " Drive to Survive"],
          "FlavorText": "Gain +2 Skill Points in one skill with the observation tag. Your Resist ability from Bravery increases by 1.",
          "abilities": [],
        },
        {

          "TalentName": "Courage III",
          "prerequisites": ["Ranger", "Bravery", "Bravery IV"],
          "FlavorText": "Gain +2 Skill Points that you can spend on skills with the Stamina tag. When you use Courage, regain HP equal to your AWR (regardless of whether you are Bloodied).",
          "abilities": [],
        },
        {

          "TalentName": "Fight II",
          "prerequisites": ["Ranger", "Bravery", "Courage III", "Fight"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Athleticism tag. Your damage from the Fight ability becomes 1d8.",
          "abilities": [],
        },
        {

          "TalentName": "Fight II",
          "prerequisites": ["Ranger", "Bravery", "Courage III", "Fight"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Acrobatics tag. You ignore difficult terrain when you use the Flight ability.",
          "abilities": [],
        },
        {
          "TalentName": "Freeze II",
          "prerequisites": ["Ranger", "Bravery", "Courage III", "Freeze"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Stamina tag. You no longer suffer the Chilled condition with this ability.",
          "abilities": [],
        },
        {
          "TalentName": "Drive To Survive II",
          "prerequisites": ["Ranger", "Bravery", "Bravery 10"],
          "FlavorText": "Drive to Survive becomes AWR/Rest.",
          "abilities": [],
        },
        {
          "TalentName": "Courage IV",
          "prerequisites": ["Ranger", "Bravery", "Drive to Survive II"],
          "FlavorText": "Gain +2 Skill Points that you can spend on skills with the Stamina tag. Courage recharges AWR/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Fight III",
          "prerequisites": ["Ranger", "Bravery", "Courage IV", "Fight II"],
          "FlavorText": "The additional damage from the Fight ability becomes 1d12.",
          "abilities": [],
        },
        {
          "TalentName": "Flight III",
          "prerequisites": ["Ranger", "Bravery", "Courage IV", "Fight II"],
          "FlavorText": "Your speed from the Flight ability becomes +10 ft.",
          "abilities": [],
        },
        {
          "TalentName": "Freeze III",
          "prerequisites": ["Ranger", "Bravery", "Courage IV", "Freeze II"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Stamina tag. The Freeze ability increases your defenses by +5.",
          "abilities": [],
        },
        {
          "TalentName": "Undaunted",
          "prerequisites": ["Ranger", "Bravery", "Bravery 13"],
          "FlavorText": "The Shaken condition only reduces your d20 rolls by 1.",
          "abilities": [],
        },
        {
          "TalentName": "Fear Itself",
          "prerequisites": ["Ranger", "Bravery", "Capstone", "Undaunted"],
          "FlavorText": "It is said that in the face of fear you rise above or you crumble. However, those who know you have seen you strike fear in the hearts of those who would typically terrify others. Gain the Fear Itself ability",
          "abilities": [
            {
              "abilityname": "Fear Itself",
              "abilitydescription": "When a creature causes you to become Broken, Demoralized, Frightened, or Shaken, if that creature can see you, it immediately takes 2d10 psychic damage and you gain TA against it until the end of your next turn.Additionally, the creature suffers the same conditions that it inflicted on you for the duration that you do. (1 / Recoup) ",
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "Whenever a creature imposes Broken, Demoralized, Frightened, or Shaken against you, you are both Focused and Protected against it. ",
            },
          ]
        },
      ]
    },
    {

      "TrackName": "Hunter",
      "TrackDescription": "You are an unparalleled hunter of creatures both natural and otherworldly, mastering both blade and bow.",
      "Talents": [
        {
          "TalentName": "Hunter",
          "prerequisites": ["Ranger", "Hunter", "Ranger Entry"],
          "FlavorText": "When you have been tracking a creature for at least 1 hourusing AWR/Tracking, when you start Initiative in combat against it, you deal +2 damage against it for the first minute.",
          "abilities": [],
        },
        {
          "TalentName": "Corner Quarry",
          "prerequisites": ["Ranger", "Hunter", "Hunter", "Outnumbered"],
          "FlavorText": "When you are Flanking a creature, gain an additional TA against it.",
          "abilities": [],
        },
        {
          "TalentName": "Corner Quarry II",
          "prerequisites": ["Ranger", "Hunter", "Corner Quarry", "Outnumbered II"],
          "FlavorText": "Gain the Corner Quarry ability.",
          "abilities": [
            {
              "abilityname": "Corner Quarry",
              "abilitydescription": "If you are Flanking a creature, you may spend 2 AP to Engage it for 1 minute or until you are no longer within 5 ft of it. (2/Recoup).",
            },],
        },
        {
          "TalentName": "Outnumbered",
          "prerequisites": ["Ranger", "Hunter", "Corner Quarry."],
          "FlavorText": "",
          "abilities": []
        },
        {
          "TalentName": "Outnumbered II",
          "prerequisites": ["Ranger", "Hunter", "Outnumbered", "Corner Quarry II"],
          "FlavorText": "When you make a Ranged attack against a creature with no cover and no adjacent allies, gain TA.",
          "abilities": [],
        },
        {
          "TalentName": "Deadeye",
          "prerequisites": ["Ranger", "Hunter", " Volley"],
          "FlavorText": "Gain the Deadeye ability",
          "abilities": [
            {
              "abilityname": "Deadeye",
              "abilitydescription": "When you make a ranged attack against a creature with no cover and no adjacent allies, gain TA.",
            },],
        },
        {
          "TalentName": "Deadeye II",
          "prerequisites": ["Ranger", "Hunter", "Deadeye", "Rain of Arrows"],
          "FlavorText": "Gain the Takedown Shot ability.",
          "abilities": [
            {
              "abilityname": "Takedown Shot",
              "abilitydescription": "When you use Deadeye, deal 1d8 additional damage. (2/Recoup).",
            },],


        },
        {
          "TalentName": "Volley",
          "prerequisites": ["Ranger", "Hunter", "Deadeye"],
          "FlavorText": "Gain the Volley ability.",
          "abilities": [
            {
              "abilityname": "Volley",
              "abilitydescription": "When you hit a creature that has an ally adjacent to it, make the same attack against that creature for 0 AP. (2/Recoup)",
            },
          ],
        },
      {
          "TalentName": "Rain Of Arrows",
          "prerequisites": ["Ranger", "Hunter", "Volley", "Deadeye II"],
          "FlavorText": "Gain the Rain of Arrows ability",
          "abilities": [
            {
              "abilityname": "Rain of Arrows",
              "abilitydescription": "Spend 4 AP and pick a point within range. Make your ranged attack roll and compare vs the AR of every creature in a 20 ft radius. Roll double the damage dice that you normally would. Creatures take full damage on a hit and ½ on a miss. (2/Rest)",
            },],
        },
        {
          "TalentName": "Hunter's Quarry",
          "prerequisites": ["Ranger", "Hunter", "Hunter 3"],
          "FlavorText": "Learn the Hunter’s Quarry spell if you do not already know it. You may cast this spell without expending SP. (2/Rest)",
          "abilities": []
        },
        {
          "TalentName": "Hunter II",
          "prerequisites": ["Ranger", "Hunter", "Hunter’s Quarry"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Acrobatics or Survival tags. Pick a creature with one of the following creature tags: Arcane, Avadri, Celestial, Divine, Eldritch, Elemental, Fae, Fiend, Giant, Monstrosity, Occult, Primal, Psionic, or Undead. Gain the Target Prey ability against creatures with the tag that you chose.",
          "abilities": [
            {
              "abilityname": "Target Prey",
              "abilitydescription": "Gain an additional +4 on History, Perceiving, Sneaking, and Tracking rolls made in relation to creatures of the type that you chose from Hunter II.",
            },],
        },
        {
          "TalentName": "Hew",
          "prerequisites": ["Ranger", "Hunter", "Hunter II", " Corner Quarry II"],
          "FlavorText": "Gain the Hew ability.",
          "abilities": [
            {
              "abilityname": "Hew",
              "abilitydescription": "When you hit a creature that has no allies adjacent to it, deal +1d10 damage. (2/Recoup)",
            },],
        },
        {
          "TalentName": "Hew II",
          "prerequisites": ["Ranger", "Hunter", "Hew"],
          "FlavorText": "Your crit range increases by 1 against creatures that have no adjacent allies.",
          "abilities": []
        },
        {
          "TalentName": "Hordesbane",
          "prerequisites": ["Ranger", "Hunter", "Hunter II", "Outnumbered II"],
          "FlavorText": "Gain the Hordesbane ability",
          "abilities": [
            {
              "abilityname": "Hordesbane",
              "abilitydescription": "Once per turn, when you hit a creature and another creature is adjacent to you, you can attack that second creature with the same weapon for 1 fewer AP (min 1 AP).",
            },],
        },
        {
          "TalentName": "Hordesbane II",
          "prerequisites": ["Ranger", "Hunter", "Hordesbane"],
          "FlavorText": "Gain the Whirling Blades ability.",
          "abilities": [
            {
              "abilityname": "Whirling Blades",
              "abilitydescription": "When you use Hordesbane, your second attack can target each creature of your choice that is adjacent to you. Roll attack and damage once, comparing against each target’s REF. Roll twice as many damage dice as you normally would. Creatures take ½ damage on a miss. (2/Rest).",
            },],
        },
        {
          "TalentName": "Eagle Eye",
          "prerequisites": ["Ranger", "Hunter", "Hunter II", "Deadeye II"],
          "FlavorText": "When making a ranged attack, you do not suffer any penalty for targeting a Concealed enemy.",
          "abilities": []
        },
        {
          "TalentName": "Eagle Eye II",
          "prerequisites": ["Ranger", "Hunter", "Eagle Eye"],
          "FlavorText": "When making a ranged attack, you do not suffer any penalty for targeting an enemy in Darkness, provided that you know the enemy’s location.",
          "abilities": [],
        },
        {
          "TalentName": "Volley II",
          "prerequisites": ["Ranger", "Hunter", "Hunter II", "Rain of Arrows"],
          "FlavorText": "Volley becomes DEX/Recoup and works on hostile creatures within 15 ft of each other.",
          "abilities": [],
        },
        {
          "TalentName": "Rain Of Arrows II",
          "prerequisites": ["Ranger", "Hunter", "Volley II"],
          "FlavorText": "Rain of Arrows does three times your normal damage dice and can be used ½ AWR/Rest.",
          "abilities": []
        },
        {
          "TalentName": "Hunter III",
          "prerequisites": ["Ranger", "Hunter", "Hunter 7"],
          "FlavorText": "Choose two additional creature types to gain Favored Prey.",
          "abilities": [],
        },
        {
          "abilityname": "Hunter IV",
          "prerequisites": ["Ranger", "Hunter", "Hunter III"],
          "FlavorText": "Gain the Mark ability.",
          "abilities": [
            {
              "abilityname": "Mark",
              description: "When you roll Initiative, you may Mark a Target Prey creature that you can see. It becomes Vulnerable 1 to your weapon attacks for 1 minute. (1/Rest).",
            },],
        },
        {
          "TalentName": "One With The Land",
          "prerequisites": ["Ranger", "Hunter", "Hunter IV"],
          "FlavorText": "Pick 1 of the 11 Environments (Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic). While you are in that environment, you and up to AWR allies can move stealthily at a normal pace and remain alert to danger as though traveling cautiously",
          "abilities": []
        },
        {
          "TalentName": "Primeval Speed",
          "prerequisites": ["Ranger", "Hunter", "Hunter 10"],
          "FlavorText": "Gain +5 ft speed when you can see your Target Prey.",
          "abilities": []
        },
        {
          "TalentName": "Fletcher",
          "prerequisites": ["Ranger", "Hunter", "Hunter IV"],
          "FlavorText": "You can fletch your own arrows, making 1d8 + INT/ Woodcarving arrows each time you Rest.",
          "abilities": []
        },
        {
          "TalentName": "Shroud",
          "prerequisites": ["Ranger", "Hunter", "Hunter 10"],
          "FlavorText": "When you are Concealed, creatures that attack you gain 1 additional TD.",
          "abilities": []
        },
        {
          "TalentName": "Quickdraw",
          "prerequisites": ["Ranger", "Hunter", "Hunter IV"],
          "FlavorText": "You can draw/stow weapons without spending AP once on your turn.",
          "abilities": [],
        },

        {
          "TalentName": "Calculating",
          "prerequisites": ["Ranger", "Hunter", "Hunter 10"],
          "FlavorText": "Gain the Calculating ability.",
          "abilities": [
            {
              "abilityname": "Calculating",
              "abilitydescription": "When you roll Initiative and are facing a Target Prey, you may choose for all of your attacks that would target their AR to instead target either REF, FORT, or ANT (your choice at the start of combat). This effect lasts until combat concludes. (3/Rest)",
            },],
        },
        {
          "TalentName": "Ruthless Hunter",
          "prerequisites": ["Ranger", "Hunter", "Hunter 11"],
          "FlavorText": "Gain two of the following: Cornered Quarry, Outnumbered, Deadeye, or Volley. Ignore any Incompatibility restrictions for these selections.",
          "abilities": []
        },
        {
          "TalentName": "Cornered quarry II",
          "prerequisites": ["Ranger", "Hunter", "Ruthless Hunter", "Hew II"],
          "FlavorText": "Gain +2 Skill Points, which you can spend on skills with the Athleticism or Stamina tags. Cornered Quarry becomes END/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Hew III",
          "prerequisites": ["Ranger", "Hunter", "Cornered Quarry III"],
          "FlavorText": "When you use Hew against a target and it does not die, gain 3 AP.",
          "abilities": [],
        },
        {
          "TalentName": "Hordesbane III",
          "prerequisites": ["Ranger", "Hunter", " Ruthless Hunter", "Hordesbane II"],
          "FlavorText": "Whirling Blades becomes END/Rest.",
          "abilities": []
        },
        {
          "TalentName": "Horde Breaker",
          "prerequisites": ["Ranger", "Hunter", "Hordesbane III",],
          "FlavorText": "Gain the Horde Breaker ability.",
          "abilities": [
            {
              "abilityname": "Horde Breaker",
              "abilitydescription": ". Gain +1 TA and +1 to damage rolls for every enemy adjacent to you. This lasts until the end of your next turn. (1/Recoup)",
            },]
        },
        {
          "TalentName": "Deadeye III",
          "prerequisites": ["Ranger", "Hunter", "Ruthless Hunter", "Eagle Eye II"],
          "FlavorText": "When using Deadeye, increase your Crit range by 1. Takedown Shot becomes AWR/Recoup.",
          "abilities": []
        },

        {
          "TalentName": "Rapid Takedown",
          "prerequisites": ["Ranger", "Hunter", " Deadeye III"],
          "FlavorText": "When you use Takedown Shot against a target and it does not die, gain 3 AP.",
          "abilities": []
        },
        {
          "TalentName": "Volley III",
          "prerequisites": ["Ranger", "Hunter", "Ruthless Hunter", "Rain of Arrows II"],
          "FlavorText": "Volley works on creatures within 30 ft of each other. When you use Volley on a creature that was adjacent to your first target, it does not expend a use of Volley.",
          "abilities": []
        },
        {
          "TalentName": "Arrow Storm",
          "prerequisites": ["Ranger", "Hunter", "Volley III"],
          "FlavorText": "Gain the Arrow Storm ability.",
          "abilities": [
            {
              "abilityname": "Arrow Storm",
              "abilitydescription": "When you use Rain of Arrows, deal four times your normal damage dice and the radius is 30 ft. (1/ Rest)",
            },],
        },
        {
          "TalentName": "Peerless Hunter",
          "prerequisites": ["Ranger", "Hunter", "Capstone", "Hunter 14"],
          "FlavorText": "Those in the know recognize that you are a peerless hunter and might task you with felling great monsters for equally great rewards. When you roll Initiative and you have no Target Prey, choose one enemy to be Target Prey. Gain the Peerless Hunter ability.",
          "abilities": [
            {
              "abilityname": "Peerless Hunter",
              "abilitydescription": "When you finish Taking a Rest, you can reassign all of your Talent Points spent in this stack, taking new talents within this stack. You lose this ability if you reassign your talents in such a way that you no longer have access to this talent. (1/Week)",
            },
            {
              "abilityname": "Level 30",
              "abilitydescription": "You can reselect the creature types that Target Prey abilities work on. (1/Rest)",
            }
          ],
        },
      ]
    },
    {
      "TrackName": "Instinct",
      "TrackDescription": ". Your fighting instinct is sharper than the finest steel and keener than an eagle’s eye.",
      "Talents": [
        {
          "TalentName": "Survival Instinct",
          "prerequisites": ["Ranger", "Instinct", "Ranger Entry"],
          "FlavorText": "Gain the Preternatural Dodge ability.",
          "abilities": [
            {
              "abilityname": "Preternatural Dodge",
              "abilitydescription": "When a creature attacks one of your physical or mental defenses, you can use ANT in place of whatever was targeted. (AWR/Rest)",
            },],
        },
        {
          "TalentName": "Fighting Instingct II",
          "prerequisites": ["Ranger", "Instinct", "Survival Instinct"],
          "FlavorText": "Fighting Instinct lasts until the end of your next turn.",
          "abilities": []
        },

        {
          "TalentName": "Survival Instinct II",
          "prerequisites": ["Ranger", "Instinct", "Fighting Instinct II"],
          "FlavorText": "Gain the Size Up ability",
          "abilities": [
            {
              "abilityname": "Size Up",
              "abilitydescription": "You can spend 2 AP to study an enemy and learn which defense(s) its attacks target, besides AR.",
            },],
        },
        {
          "TalentName": "Survival Instinct III",
          "prerequisites": ["Ranger", "Instinct", " Survival Instinct II"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Athleticism tag. Your Fighting Instinct also grants you a +1 to all damage rolls.",
          "abilities": [],
        },
        {
          "TalentName": "Vigilant",
          "prerequisites": ["Ranger", "Instinct", "Fighting Instinct III"],
          "FlavorText": "Gain the Vigilant ability.",
          "abilities": [
            {
              "abilityname": "Vigilant",
              "abilitydescription": "If you roll lower than 10 on an AWR check, treat that roll as 10 instead (AWR/Rest)",
            },],
        },
        {
          "TalentName": "Survival Instingct III",
          "prerequisites": ["Ranger", "Instinct", "Vigilant"],
          "FlavorText": "Your ANT increases by +1. Choose REF or FORT to also increase by +1.",
          "abilities": [],
        },
        {
          "TalentName": "Vigilant II",
          "prerequisites": ["Ranger", "Instinct", "Survival Instinct III"],
          "FlavorText": "Vigilant becomes: If you roll lower than 10 on an AWR check, treat that roll as your ANT instead.",
          "abilities": [],
        },
        {
          "TalentName": "Survival Instingct IV",
          "prerequisites": ["Ranger", "Instinct", " Vigilant II"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Observation tag. Gain a +4 bonus to Initiative.",
          "abilities": [],
        },
        {
          "TalentName": "Fighting Instingct IV",
          "prerequisites": ["Ranger", "Instinct", " Survival Instinct IV"],
          "FlavorText": "Gain the Pounce ability.",
          "abilities": [
            {
              "abilityname": "Pounce",
              "abilitydescription": "On your first turn in Initiative if no enemies have acted yet, gain 2 additional AP.",
            },],
        },
        {
          "TalentName": "Vigilant III",
          "prerequisites": ["Ranger", "Instinct", "Fighting Instinct IV"],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Survival Tag. Vigilant is AWR/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Survival Instingct V",
          "prerequisites": ["Ranger", "Instinct", " Vigilant III"],
          "FlavorText": "Gain a +4 bonus to Initiative. Preternatural Dodge is AWR/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Vigilant IV",
          "prerequisites": ["Ranger", "Instinct", "Survival Instinct V"],
          "FlavorText": "Gain +4 Skill Points in skills with the Observation tag. Vigilant is AWR/Catch Breath.",
          "abilities": [],
        },
        {
          "TalentName": "Fighting Instinct V",
          "prerequisites": ["Ranger", "Instinct", "Vigilant IV"],
          "FlavorText": "Pounce grants you 4 AP. If you start Initiative with no Fighting Instinct, regain one Fighting Instinct.",
          "abilities": [],
        },
        {
          "TalentName": "Vigilant V",
          "prerequisites": ["Ranger", "Instinct", "Fighting Instinct V"],
          "FlavorText": "Vigilant is always active.",
          "abilities": [],
        },
        {
          "TalentName": "Cornered Animal",
          "prerequisites": ["Ranger", "Instinct", "Capstone", "Vigilant V"],
          "FlavorText": "Your base animal instinct to fight and live is overwhelming. Fighting Instinct becomes AWR/Catch Breath. Gain the Cornered Animal ability.",
          "abilities": [
            {
              "abilityname": "Cornered Animal",
              "abilitydescription": "When you start your turn with 0 HP, you may gain 2 Death Points. If you do, then until the end of your next turn, your speed doubles, you gain TA on all attacks, creatures cannot make reactive attacks against you, and your first hit that was not a crit counts as a crit. (1/ Rest)",
            }, {
              "abilityname": "Level 30",
              "abilitydescription": "Cornered Animal no longer costs 2 Death Points and is active whenever you are at 0 HP.",
            },
          ]
        },
      ]
    },
    {
      "TrackName": "Survivor",
      "TrackDescription": "You know the natural world like the back of your hand.Wherever you end up, you know how to survive.",
      "Talents": [
        {
          "TalentName": "Natural Habitat",
          "prerequisites": ["Ranger", "Survivor", "Ranger Entry"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the Survival or Stamina tags. Pick one of the 11 environments: Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic. This is your Natural Habitat. While in that environment, you can always find enough food for a number of creatures equal to your AWR.",
          "abilities": [],
        },
        {
          "TalentName": "Primeval Senses",
          "prerequisites": ["Ranger", "Survivor", "Natural Habitat"],
          "FlavorText": "Gain the Primeval Sense ability",
          "abilities": [
            {
              "abilityname": "Primeval Senses",
              "abilitydescription": "By focusing for 1 minute, you learn whether any of the following creatures are within 1 mile of you: Arcane, Divine, Occult, Primal, Psionic, Undead, Monstrosity, Fae, and Eldritch. You do not learn their identities but learn their exact numbers and direction/ distance from you. This information is fleeting, but if you do no strenuous activity you can maintain it for up to 10 mins. (AWR/Rest)",
            },],
        },
        {
          "TalentName": "Natural Habitat II",
          "prerequisites": ["Ranger", "Survivor", "Primeval Senses"],
          "FlavorText": "Gain the Wilderness Mastery ability",
          "abilities": [
            {
              "abilityname": "Wilderness Mastery",
              "abilitydescription": "When in your favored environment, give yourself double your Skill Points before you make an AWR skill check. (AWR/Rest)",
            },],
        },
        {
          "TalentName": "Primeval Senses II",
          "prerequisites": ["Ranger", "Survivor", "Natural Habitat II"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the Acrobatics Tag. Ignore Difficult Terrain while in a Natural Habitat.",
          "abilities": [],
        },
        {
          "TalentName": "Survivor",
          "prerequisites": ["Ranger", "Survivor", "Nature Stride"],
          "FlavorText": "Gain a Primal Aspect. Pick one: Natural Heat, Natural Cold, or Forced Marching. You can no longer gain Fatigue from that selection.",
          "abilities": [],
        },
        {
          "TalentName": "Primeval Senses III",
          "prerequisites": ["Ranger", "Survivor",],
          "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Acrobatics or Athleticism tags. Pick a second environment to be your Natural Habitat.",
          "abilities": [],
        },
        {
          "TalentName": "Survivor II",
          "prerequisites": ["Ranger", "Survivor", "Natural Habitat III"],
          "FlavorText": "You become Immune to common poisons and diseases.",
          "abilities": [],
        },
        {
          "TalentName": "Nature Stride II",
          "prerequisites": ["Ranger", "Survivor", "Survivor II"],
          "FlavorText": "Ignore Hazardous Terrain that isn’t liquid while in your Natural Habitat.",
          "abilities": [],
        },
        {
          "TalentName": "Primeval Senses IV",
          "prerequisites": ["Ranger", "Survivor", "Nature Stride II"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the Observation tag. Primeval Identification can be used on a number of targets equal to ½ your AWR.",
          "abilities": [],
        },
        {
          "TalentName": "Natural Habitat IV",
          "prerequisites": ["Ranger", "Survivor", "Primeval Senses IV"],
          "FlavorText": "Pick a third environment to be your Natural Habitat, and Wilderness Mastery is AWR/Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Nature Stride III",
          "prerequisites": ["Ranger", "Survivor", "Natural Habitat IV"],
          "FlavorText": "Always ignore difficult terrain. Ignore all hazardous terrain that is caused by natural phenomena unless it is liquid.",
          "abilities": [],
        },
        {
          "TalentName": "Primeval Sense V",
          "prerequisites": ["Ranger", "Survivor", "Nature Stride III"],
          "FlavorText": "You have unlimited uses of your Primeval Senses ability.",
          "abilities": [],
        },
        {
          "TalentName": "Unrivaled Explorer",
          "prerequisites": ["Ranger", "Survivor", "Capstone", "Primeval Sense V"],
          "FlavorText": "You are known as a person truly in tune with the untamed, uncharted wilderness in all its splendor, and are commonly sought out as a guide for high-profile travelers. You may embrace this or you may hide from civilization to avoid the recognition and to just spend time in the wild, where your heart truly lies. You can never become lost, even by magical means. You have TA when you are in one of your Natural Habitats. When you Take a Rest in a type of environment that is not one of your Natural Habitats, you may replace one of your old Natural Habitats with this new environment. (1/Week)",
          "abilities": [
            {
              "abilityname": "Level 30",
              "abilitydescription": "The final cap for your AWR increases from 12 to 14.",
            },
          ]
        }]
    },
    {
      "TrackName": "Wilderness Warden",
      "TrackDescription": ". You learn primal magic and enhance some of your primal spells as you gain skill as a magical ranger.",
      "Talents": [
        {
          "TalentName": "Primal Warden",
          "prerequisites": ["Ranger", "Wilderness Warden", "Ranger Entry"],
          "FlavorText": "Gain the Warden of the Primal talent if you did not already have it. If you did already have it, gain a talent from the Primal Magic stack.Each time you level up and spend your talent point on a talent in the Wilderness Warden stack, you gain + 5 SP and + 1 Primal Power.AWR is your magic attribute.",
          "abilities": [],
        },
        {
          "TalentName": "Environmentalist",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primal Warden"],
          "FlavorText": "Pick one of the 11 Environments: Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic. While you are in that environment and not within 1 mile of a settled area, you regain 1 SP when you Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Ranger's Invocation",
          "prerequisites": ["Ranger", "Wilderness Warden", "Environmentalist or Planar Protector"],
          "FlavorText": "Learn one invocation.Pick an invocation that you know that has no Tier prerequisites. You can cast that invocation 1 time per day without expending your invocation slot.",
          "abilities": [],
        },
        {
          "TalentName": "Empower Chant",
          "prerequisites": ["Ranger", "Wilderness Warden", "Ranger’s invocation or Intrinsic Boon"],
          "FlavorText": "Pick one chant that you know, that does not deal damage. While more than 1 mile from a settled area, you can cast that chant as if it were 1 Tier stronger (e.g., if you normally cast chants at Primal Tier 2, cast this chant at Primal Tier 3).",
          "abilities": [],
        },
        {
          "TalentName": "Planar Protector",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primal Warden"],
          "FlavorText": "Pick one creature type: Arcane, Avadri, Celestial, Divine, Eldritch, Elemental, Fae, Fiend, Giant, Occult, Primal, Psionic, or Undead. Your magic attack rolls against those creatures increases by +1.",
          "abilities": [],
        },
        {
          "TalentName": "Inirinsic Boon",
          "prerequisites": ["Ranger", "Wilderness Warden", "Environmentalist or Planar Protector"],
          "FlavorText": "Learn one chant, one invocation, and one spell that all have the Intrinsic tag.",
          "abilities": [],
        },
        {
          "TalentName": "Ranger's Spells",
          "prerequisites": ["Ranger", "Wilderness Warden", "Ranger’s invocation or Intrinsic Boon"],
          "FlavorText": "Pick two intrinsic spells that you know. They cost 1 fewer SP (min 1 SP).",
          "abilities": [],
        },
        {
          "TalentName": "Primal Warden II",
          "prerequisites": ["Ranger", "Wilderness Warden", " Empower Chant or Ranger’s Spells"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the observation or survival tags. Gain a talent from the Primal Magic stack (Chapter 4).",
          "abilities": [],
        },
        {
          "TalentName": "Environmentalist II",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primal Warden II", "Environmentalist"],
          "FlavorText": "Learn a new Primal Aspect. The environment you picked now restores 2 SP per Recoup.",
          "abilities": [],
        },
        {
          "abilityname": "Wanderer's Invocation",
          "prerequisites": ["Ranger", "Wilderness Warden", "Environmentalist II or Planar Protector II"],
          "FlavorText": "Learn one invocation. Pick an invocation that you know that has no tier prerequisites. You can cast that invocation one time per day without expending an invocation slot.",
          "abilities": [],
        },
        {
          "TalentName": "Furious Chant",
          "prerequisites": ["Ranger", "Wilderness Warden", "Wanderer’s Invocation or Intrinsic Boon IIy"],
          "FlavorText": "Pick one chant that you did not select with Empowered Chant. While more than 1 mile from a settled area, you can cast that chant as if it were 1 Tier stronger. ",
          "abilities": [],
        },
        {
          "TalentName": "Planar Protector II",
          "prerequisites": ["Ranger", " Wilderness Wardenr", "Primal Warden II", "Planar Protector"],
          "FlavorText": "Choose a new type of creature from your Planar Protector feature. Your Planar Protector bonus works on creatures with either tag.",
          "abilities": [],
        },
        {
          "TalentName": "Intrinsic Boon II",
          "prerequisites": ["Ranger", "Wilderness Warden", "Environmentalist II or Planar Protector II", "Intrinsic Boon"],
          "FlavorText": "Learn one chant, one invocation, and one spell that all have the Intrinsic tag.",
          "abilities": [],
        },
        {
          "TalentName": "Wanderer's Spells",
          "prerequisites": ["Ranger", "Wilderness Warden", "Wanderer’s Invocation or Intrinsic Boon II"],
          "FlavorText": "Pick two spells with the Nature tag that you know and that you have not selected for your ranger’s spells feature. They cost 1 fewer SP (min 1 SP).",
          "abilities": [],
        },
        {
          "TalentName": "Primal Warden III",
          "prerequisites": ["Ranger", "Wilderness Warden", "Furious Chant or Wanderer’s Spells"],
          "FlavorText": "You cannot become lost except through the use of magic. Gain a talent from the Primal Magic stack.",
          "abilities": [],
        },
        {
          "abilityname": "Primal Warden IV",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primal Warden III"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the Observation or Survival tags. Gain a talent from the Primal Magic stack.",
          "abilities": [],
        },
        {
          "TalentName": "Environmentalist III",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primal Warden IV", "Environmentalist II"],
          "FlavorText": "The environment you picked now restores 3 SP per Recoup. All environments now restore 1 SP per Recoup.",
          "abilities": [],
        },
        {
          "TalentName": "Primeval Invocation",
          "prerequisites": ["Ranger", "Wilderness Warden", "Environmentalist III or Planar Protector III"],
          "FlavorText": "Learn one invocation. Pick an invocation that you know that is Tier 2 or Tier 3. You can cast that invocation one time per day without expending an invocation slot.",
          "abilities": [],
        },
        {
          "TalentName": "Chant Of The Wild Heart",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primeval Invocation or Intrinsic Boon III"],
          "FlavorText": "You can choose which intrinsic chants get your bonus from the “Chant” abilities in this stack when you Rest. (1/Week) When you reach Primal Tier 6, gain +12 Skill Points that you can assign to skills with the athleticism, acrobatics, stamina, observation, or survival tags.",
          "abilities": [],
        },
        {
          "TalentName": "Planar Planar Protector III",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primal Warden IV", "Planar Protector II"],
          "FlavorText": "Choose a creature type you’ve already chosen with Planar Protector 1 or 2. Gain an additional +1 on magic attacks against creatures of that type.",
          "abilities": [],
        },
        {
          "abilityname": "Intrinsic Boon III",
          "prerequisites": ["Ranger", "r, Wilderness Warden", "Environmentalist 3 or Planar Protector 3"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the Survival tag.Learn 1 chant, 1 invocation, and 1 spell that all have the Intrinsic tag.",
          "abilities": [],
        },
        {
          "abilityname": "Primeval Spells",
          "prerequisites": ["Ranger", "Wilderness Warden", "Primeval Invocation or Intrinsic Boon III"],
          "FlavorText": "Pick 3 intrinsic spells that you know and that have benefitted either from Ranger’s Spells or Wanderer’s Spells. They cost 1 fewer SP (min 1 SP).",
          "abilities": [],
        },
        {
          "TalentName": "Primal Warden V",
          "prerequisites": ["Ranger", "Wilderness Warden", " Chant of the Wild Heart or Primeval Spells"],
          "FlavorText": "Gain +4 Skill Points that you can assign to skills with the Observation or Survival tags. Gain a talent from the Primal Magic stack.",
          "abilities": [],
        },
        {
          "TalentName": "Primal Exemplar",
          "prerequisites": ["Ranger", "Wilderness Warden", "Capstone", "Primal Warden V"],
          "FlavorText": "Your heart, soul, and body are intertwined with the wellbeing of the natural world. Fae generally see you as a great friend and will usually go out of their way to cooperate with you. You can never become lost, even by magical means. When you Take a Rest and you are not within 1 mile of a settled area, you may reassign all of your ranger Talent Points, assigning them to other ranger talents.",
          "abilities": [
            {
              "abilityname": "Level 30",
              "abilitydescription": "Choose one intrinsic spell and one intrinsic invocation.Both must have the nature tag. You can cast each of those abilities indefinitely, without spending SP or invocation slots.",
            },

          ]
        }
      ]
    }]
};


