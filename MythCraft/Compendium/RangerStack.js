const Ranger =
{
  stackname: "Ranger",
  shortDescription: "Wardens of the natural world and guides through uncharted wilderness, rangers are often more at home in unsettled lands than in luxurious cities.",
  quote: {
    phrase: "The wilderness gives me solace as I continue my grim purpose: to slay that which would threaten the natural order",
    quotedsname: "Grim",
    title: "monster slayer",
  },
  longDescription: "You grew up on the fringes of your settlement, spending more time in the wilderness beyond than in the safety of your own homestead.In your youth you came to love the serenity of rugged nature over the clamor of frivolous settled life. You are more at home with the wolves and the elk than with nobles and debutants.In your early adulthood you made the decision to leave civilization completely in exchange for a life in the wilds.Now, you defend your heartland from supernatural monstrosities that threaten to upset the balance of nature, and from the cruelties of careless hunters or loggers who regard the natural cycle of life with disrespectful indifference. As you are more at home in the wilderness than in civilization, you must determine how you intend to survive on your own merits.Do you hone your physical prowess until you can go toe to toe with the strongest warrior? Do you sharpen your senses and your survival skills, stalking prey through rugged wilds with more finesse than any cat or bird? Maybe you tap into the Primal Source, using magic to enhance your physical capabilities and to speak with the animals whose home you share.",

  entryTalent: {
    prerequisites: ["Class Entry", "", "Character Level 2"],
    flavorTest: "When you take this entry talent, you gain the following abilities.",
    abilities: [
      {
        abilityname: "Primal Aspect",
        abilitydescription: "Repeatable. Gain the Primal Aspect talent.",
      },
      {
        abilityname: "Skilled",
        abilitydescription: "Gain +4 Skill Points, which you can spend on skills with the Observation and/or Survival tags.",
      },
      {
        abilityname: "Fighting Instinc",
        abilitydescription: "You may grant yourself TA until the end of your current turn. While you have fighting instinct, when you spend AP to move, gain +5 ft movement. (AWR/ Recoup)"
      }
    ],
  },
  tracks: [
    {

      trackname: "Bravety Track",
      trackdescription: "",
      talents: [
        {
          talentname: "Bravery",
          prerequisites: ["Ranger", "Bravery", "Ranger Entry"],
          flavorTest: "Gain the Bravery ability",
          abilities: [
            {
              abilityname: "Bravery",
              abilitydescription: " Resist Frightened 2.",
            },
          ],
        },
        {
          talentname: "Courage",
          prerequisites: ["Ranger", "Bravery", "Bravery"],
          flavorTest: "Gain the Courage ability",
          abilities: [
            {
              abilityname: "Courage",
              description: "When you are Broken, Demoralized, Frightened, or Shaken by an enemy, gain TA against that enemy while your effect persists. (AWR/Rest).",
            },],
        },
        {

          talentname: "Bravery II",
          prerequisites: ["Ranger", "Bravery", " Courage"],
          flavorTest: "Your Resist ability from Bravery increases by 1 and applies to Demoralized.",
          abilities: [],
        },
        {
          talentname: "Courage II",
          prerequisites: ["Ranger", "Bravery", "Bravery II"],
          flavorTest: "When you use Courage, and you are Bloodied, regain HP equal to your AWR.",
          abilities: [],
        },
        {

          talentname: "Fight",
          prerequisites: ["Ranger", "Bravery", " Courage II", "Flight", "Freeze"],
          flavorTest: "Gain the Fight ability",
          abilities: [
            {
              abilityname: "Fight",
              abilitydescription: "When you use Courage, deal +1d6 damage against the source of the condition for its duration.",
            },],
        },
        {
          talentname: "Flight",
          prerequisites: ["Ranger", "Bravery", "Courage II", "Fight", "Freeze"],
          flavorTest: "Gain the Flight ability.",
          abilities: [
            {
              abilityname: "Flight",
              abilitydescription: "When you use Courage, gain +5 ft speed when you use AP to move.This lasts for the condition’s duration.",
            },
          ],
        },
        {
          talentname: "Freeze",
          prerequisites: ["Ranger", "Bravery", "Courage II", "Fight", "Freeze"],
          flavorTest: "Gain the Freeze ability",
          abilities: [
            {
              abilityname: "Freeze",
              abilitydescription: "When you use Courage, you gain TD on attacks, suffer the Chilled condition, and all of your defenses increase by +3. This lasts for the condition’s duration.",
            },
          ],
        },
        {
          talentname: "Bravfry III",
          prerequisites: ["Ranger", "Bravery", "Bravery 5"],
          flavorTest: "Your Resist ability from Bravery increases by 1, and applies to Broken.",
          abilities: [],
        },
        {
          talentname: "Drive To Survive",
          prerequisites: ["Ranger", "Bravery", "Bravery III"],
          flavorTest: "Gain the Drive to Survive ability.",
          abilities: [
            {
              abilityname: "Drive to Survive",
              abilitydescription: " When you start your turn and can see a creature that has any Planar, Modifying, or Magical creature tags, you may become Shaken. This counts as you becoming Shaken by that creature. You remain Shaken for 1 minute or until the creature dies (whichever is first). (½ AWR/Rest).",
            },
          ],
        },
        {
          talentname: "Bravery IV",
          prerequisites: ["Ranger", "Bravery", " Drive to Survive"],
          flavorTest: "Gain +2 Skill Points in one skill with the observation tag. Your Resist ability from Bravery increases by 1.",
          abilities: [],
        },
        {

          talentname: "Courage III",
          prerequisites: ["Ranger", "Bravery", "Bravery IV"],
          flavorTest: "Gain +2 Skill Points that you can spend on skills with the Stamina tag. When you use Courage, regain HP equal to your AWR (regardless of whether you are Bloodied).",
          abilities: [],
        },
        {

          talentname: "Fight II",
          prerequisites: ["Ranger", "Bravery", "Courage III", "Fight"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Athleticism tag. Your damage from the Fight ability becomes 1d8.",
          abilities: [],
        },
        {

          talentname: "Fight II",
          prerequisites: ["Ranger", "Bravery", "Courage III", "Fight"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Acrobatics tag. You ignore difficult terrain when you use the Flight ability.",
          abilities: [],
        },
        {
          talentname: "Freeze II",
          prerequisites: ["Ranger", "Bravery", "Courage III", "Freeze"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Stamina tag. You no longer suffer the Chilled condition with this ability.",
          abilities: [],
        },
        {
          talentname: "Drive To Survive II",
          prerequisites: ["Ranger", "Bravery", "Bravery 10"],
          flavorTest: "Drive to Survive becomes AWR/Rest.",
          abilities: [],
        },
        {
          talentname: "Courage IV",
          prerequisites: ["Ranger", "Bravery", "Drive to Survive II"],
          flavorTest: "Gain +2 Skill Points that you can spend on skills with the Stamina tag. Courage recharges AWR/Recoup.",
          abilities: [],
        },
        {
          talentname: "Fight III",
          prerequisites: ["Ranger", "Bravery", "Courage IV", "Fight II"],
          flavorTest: "The additional damage from the Fight ability becomes 1d12.",
          abilities: [],
        },
        {
          talentname: "Flight III",
          prerequisites: ["Ranger", "Bravery", "Courage IV", "Fight II"],
          flavorTest: "Your speed from the Flight ability becomes +10 ft.",
          abilities: [],
        },
        {
          talentname: "Freeze III",
          prerequisites: ["Ranger", "Bravery", "Courage IV", "Freeze II"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Stamina tag. The Freeze ability increases your defenses by +5.",
          abilities: [],
        },
        {
          talentname: "Undaunted",
          prerequisites: ["Ranger", "Bravery", "Bravery 13"],
          flavorTest: "The Shaken condition only reduces your d20 rolls by 1.",
          abilities: [],
        },
        {
          talentname: "Fear Itself",
          prerequisites: ["Ranger", "Bravery", "Capstone", "Undaunted"],
          flavorTest: "It is said that in the face of fear you rise above or you crumble. However, those who know you have seen you strike fear in the hearts of those who would typically terrify others. Gain the Fear Itself ability",
          abilities: [
            {
              abilityname: "Fear Itself",
              abilitydescription: "When a creature causes you to become Broken, Demoralized, Frightened, or Shaken, if that creature can see you, it immediately takes 2d10 psychic damage and you gain TA against it until the end of your next turn.Additionally, the creature suffers the same conditions that it inflicted on you for the duration that you do. (1 / Recoup) ",
            },
            {
              abilityname: "Level 30",
              abilitydescription: "Whenever a creature imposes Broken, Demoralized, Frightened, or Shaken against you, you are both Focused and Protected against it. ",
            },
          ]
        },
      ]
    },
    {

      trackname: "Hunter",
      trackdescription: "You are an unparalleled hunter of creatures both natural and otherworldly, mastering both blade and bow.",
      talents: [
        {
          talentname: "Hunter",
          prerequisites: ["Ranger", "Hunter", "Ranger Entry"],
          flavorTest: "When you have been tracking a creature for at least 1 hourusing AWR/Tracking, when you start Initiative in combat against it, you deal +2 damage against it for the first minute.",
          abilities: [],
        },
        {
          talentname: "Corner Quarry",
          prerequisites: ["Ranger", "Hunter", "Hunter", "Outnumbered"],
          flavorTest: "When you are Flanking a creature, gain an additional TA against it.",
          abilities: [],
        },
        {
          talentname: "Corner Quarry II",
          prerequisites: ["Ranger", "Hunter", "Corner Quarry", "Outnumbered II"],
          flavorTest: "Gain the Corner Quarry ability.",
          abilities: [
            {
              abilityname: "Corner Quarry",
              abilitydescription: "If you are Flanking a creature, you may spend 2 AP to Engage it for 1 minute or until you are no longer within 5 ft of it. (2/Recoup).",
            },],
        },
        {
          talentname: "Outnumbered",
          prerequisites: ["Ranger", "Hunter", "Corner Quarry."],
          flavorTest: "",
          abilities: []
        },
        {
          talentname: "Outnumbered II",
          prerequisites: ["Ranger", "Hunter", "Outnumbered", "Corner Quarry II"],
          flavorTest: "When you make a Ranged attack against a creature with no cover and no adjacent allies, gain TA.",
          abilities: [],
        },
        {
          talentname: "Deadeye",
          prerequisites: ["Ranger", "Hunter", " Volley"],
          flavorTest: "Gain the Deadeye ability",
          abilities: [
            {
              abilityname: "Deadeye",
              abilitydescription: "When you make a ranged attack against a creature with no cover and no adjacent allies, gain TA.",
            },],
        },
        {
          talentname: "Deadeye II",
          prerequisites: ["Ranger", "Hunter", "Deadeye", "Rain of Arrows"],
          flavorTest: "Gain the Takedown Shot ability.",
          abilities: [
            {
              abilityname: "Takedown Shot",
              abilitydescription: "When you use Deadeye, deal 1d8 additional damage. (2/Recoup).",
            },],


        },
        {
          talentname: "Volley",
          prerequisites: ["Ranger", "Hunter", "Deadeye"],
          flavorTest: "Gain the Volley ability.",
          abilities: [
            {
              abilityname: "Volley",
              abilitydescription: "When you hit a creature that has an ally adjacent to it, make the same attack against that creature for 0 AP. (2/Recoup)",
            },
          ],
        },
      {
          talentname: "Rain Of Arrows",
          prerequisites: ["Ranger", "Hunter", "Volley", "Deadeye II"],
          flavorTest: "Gain the Rain of Arrows ability",
          abilities: [
            {
              abilityname: "Rain of Arrows",
              abilitydescription: "Spend 4 AP and pick a point within range. Make your ranged attack roll and compare vs the AR of every creature in a 20 ft radius. Roll double the damage dice that you normally would. Creatures take full damage on a hit and ½ on a miss. (2/Rest)",
            },],
        },
        {
          talentname: "Hunter's Quarry",
          prerequisites: ["Ranger", "Hunter", "Hunter 3"],
          flavorTest: "Learn the Hunter’s Quarry spell if you do not already know it. You may cast this spell without expending SP. (2/Rest)",
          abilities: []
        },
        {
          talentname: "Hunter II",
          prerequisites: ["Ranger", "Hunter", "Hunter’s Quarry"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Acrobatics or Survival tags. Pick a creature with one of the following creature tags: Arcane, Avadri, Celestial, Divine, Eldritch, Elemental, Fae, Fiend, Giant, Monstrosity, Occult, Primal, Psionic, or Undead. Gain the Target Prey ability against creatures with the tag that you chose.",
          abilities: [
            {
              abilityname: "Target Prey",
              abilitydescription: "Gain an additional +4 on History, Perceiving, Sneaking, and Tracking rolls made in relation to creatures of the type that you chose from Hunter II.",
            },],
        },
        {
          talentname: "Hew",
          prerequisites: ["Ranger", "Hunter", "Hunter II", " Corner Quarry II"],
          flavorTest: "Gain the Hew ability.",
          abilities: [
            {
              abilityname: "Hew",
              abilitydescription: "When you hit a creature that has no allies adjacent to it, deal +1d10 damage. (2/Recoup)",
            },],
        },
        {
          talentname: "Hew II",
          prerequisites: ["Ranger", "Hunter", "Hew"],
          flavorTest: "Your crit range increases by 1 against creatures that have no adjacent allies.",
          abilities: []
        },
        {
          talentname: "Hordesbane",
          prerequisites: ["Ranger", "Hunter", "Hunter II", "Outnumbered II"],
          flavorTest: "Gain the Hordesbane ability",
          abilities: [
            {
              abilityname: "Hordesbane",
              abilitydescription: "Once per turn, when you hit a creature and another creature is adjacent to you, you can attack that second creature with the same weapon for 1 fewer AP (min 1 AP).",
            },],
        },
        {
          talentname: "Hordesbane II",
          prerequisites: ["Ranger", "Hunter", "Hordesbane"],
          flavorTest: "Gain the Whirling Blades ability.",
          abilities: [
            {
              abilityname: "Whirling Blades",
              abilitydescription: "When you use Hordesbane, your second attack can target each creature of your choice that is adjacent to you. Roll attack and damage once, comparing against each target’s REF. Roll twice as many damage dice as you normally would. Creatures take ½ damage on a miss. (2/Rest).",
            },],
        },
        {
          talentname: "Eagle Eye",
          prerequisites: ["Ranger", "Hunter", "Hunter II", "Deadeye II"],
          flavorTest: "When making a ranged attack, you do not suffer any penalty for targeting a Concealed enemy.",
          abilities: []
        },
        {
          talentname: "Eagle Eye II",
          prerequisites: ["Ranger", "Hunter", "Eagle Eye"],
          flavorTest: "When making a ranged attack, you do not suffer any penalty for targeting an enemy in Darkness, provided that you know the enemy’s location.",
          abilities: [],
        },
        {
          talentname: "Volley II",
          prerequisites: ["Ranger", "Hunter", "Hunter II", "Rain of Arrows"],
          flavorTest: "Volley becomes DEX/Recoup and works on hostile creatures within 15 ft of each other.",
          abilities: [],
        },
        {
          talentname: "Rain Of Arrows II",
          prerequisites: ["Ranger", "Hunter", "Volley II"],
          flavorTest: "Rain of Arrows does three times your normal damage dice and can be used ½ AWR/Rest.",
          abilities: []
        },
        {
          talentname: "Hunter III",
          prerequisites: ["Ranger", "Hunter", "Hunter 7"],
          flavorTest: "Choose two additional creature types to gain Favored Prey.",
          abilities: [],
        },
        {
          abilityname: "Hunter IV",
          prerequisites: ["Ranger", "Hunter", "Hunter III"],
          flavorTest: "Gain the Mark ability.",
          abilities: [
            {
              abilityname: "Mark",
              description: "When you roll Initiative, you may Mark a Target Prey creature that you can see. It becomes Vulnerable 1 to your weapon attacks for 1 minute. (1/Rest).",
            },],
        },
        {
          talentname: "One With The Land",
          prerequisites: ["Ranger", "Hunter", "Hunter IV"],
          flavorTest: "Pick 1 of the 11 Environments (Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic). While you are in that environment, you and up to AWR allies can move stealthily at a normal pace and remain alert to danger as though traveling cautiously",
          abilities: []
        },
        {
          talentname: "Primeval Speed",
          prerequisites: ["Ranger", "Hunter", "Hunter 10"],
          flavorTest: "Gain +5 ft speed when you can see your Target Prey.",
          abilities: []
        },
        {
          talentname: "Fletcher",
          prerequisites: ["Ranger", "Hunter", "Hunter IV"],
          flavorTest: "You can fletch your own arrows, making 1d8 + INT/ Woodcarving arrows each time you Rest.",
          abilities: []
        },
        {
          talentname: "Shroud",
          prerequisites: ["Ranger", "Hunter", "Hunter 10"],
          flavorTest: "When you are Concealed, creatures that attack you gain 1 additional TD.",
          abilities: []
        },
        {
          talentname: "Quickdraw",
          prerequisites: ["Ranger", "Hunter", "Hunter IV"],
          flavorTest: "You can draw/stow weapons without spending AP once on your turn.",
          abilities: [],
        },

        {
          talentname: "Calculating",
          prerequisites: ["Ranger", "Hunter", "Hunter 10"],
          flavorTest: "Gain the Calculating ability.",
          abilities: [
            {
              abilityname: "Calculating",
              abilitydescription: "When you roll Initiative and are facing a Target Prey, you may choose for all of your attacks that would target their AR to instead target either REF, FORT, or ANT (your choice at the start of combat). This effect lasts until combat concludes. (3/Rest)",
            },],
        },
        {
          talentname: "Ruthless Hunter",
          prerequisites: ["Ranger", "Hunter", "Hunter 11"],
          flavorTest: "Gain two of the following: Cornered Quarry, Outnumbered, Deadeye, or Volley. Ignore any Incompatibility restrictions for these selections.",
          abilities: []
        },
        {
          talentname: "Cornered quarry II",
          prerequisites: ["Ranger", "Hunter", "Ruthless Hunter", "Hew II"],
          flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Athleticism or Stamina tags. Cornered Quarry becomes END/Recoup.",
          abilities: [],
        },
        {
          talentname: "Hew III",
          prerequisites: ["Ranger", "Hunter", "Cornered Quarry III"],
          flavorTest: "When you use Hew against a target and it does not die, gain 3 AP.",
          abilities: [],
        },
        {
          talentname: "Hordesbane III",
          prerequisites: ["Ranger", "Hunter", " Ruthless Hunter", "Hordesbane II"],
          flavorTest: "Whirling Blades becomes END/Rest.",
          abilities: []
        },
        {
          talentname: "Horde Breaker",
          prerequisites: ["Ranger", "Hunter", "Hordesbane III",],
          flavorTest: "Gain the Horde Breaker ability.",
          abilities: [
            {
              abilityname: "Horde Breaker",
              abilitydescription: ". Gain +1 TA and +1 to damage rolls for every enemy adjacent to you. This lasts until the end of your next turn. (1/Recoup)",
            },]
        },
        {
          talentname: "Deadeye III",
          prerequisites: ["Ranger", "Hunter", "Ruthless Hunter", "Eagle Eye II"],
          flavorTest: "When using Deadeye, increase your Crit range by 1. Takedown Shot becomes AWR/Recoup.",
          abilities: []
        },

        {
          talentname: "Rapid Takedown",
          prerequisites: ["Ranger", "Hunter", " Deadeye III"],
          flavorTest: "When you use Takedown Shot against a target and it does not die, gain 3 AP.",
          abilities: []
        },
        {
          talentname: "Volley III",
          prerequisites: ["Ranger", "Hunter", "Ruthless Hunter", "Rain of Arrows II"],
          flavorTest: "Volley works on creatures within 30 ft of each other. When you use Volley on a creature that was adjacent to your first target, it does not expend a use of Volley.",
          abilities: []
        },
        {
          talentname: "Arrow Storm",
          prerequisites: ["Ranger", "Hunter", "Volley III"],
          flavorTest: "Gain the Arrow Storm ability.",
          abilities: [
            {
              abilityname: "Arrow Storm",
              abilitydescription: "When you use Rain of Arrows, deal four times your normal damage dice and the radius is 30 ft. (1/ Rest)",
            },],
        },
        {
          talentname: "Peerless Hunter",
          prerequisites: ["Ranger", "Hunter", "Capstone", "Hunter 14"],
          flavorTest: "Those in the know recognize that you are a peerless hunter and might task you with felling great monsters for equally great rewards. When you roll Initiative and you have no Target Prey, choose one enemy to be Target Prey. Gain the Peerless Hunter ability.",
          abilities: [
            {
              abilityname: "Peerless Hunter",
              abilitydescription: "When you finish Taking a Rest, you can reassign all of your Talent Points spent in this stack, taking new talents within this stack. You lose this ability if you reassign your talents in such a way that you no longer have access to this talent. (1/Week)",
            },
            {
              abilityname: "Level 30",
              abilitydescription: "You can reselect the creature types that Target Prey abilities work on. (1/Rest)",
            }
          ],
        },
      ]
    },
    {
      trackname: "Instinct",
      trackdescription: ". Your fighting instinct is sharper than the finest steel and keener than an eagle’s eye.",
      talents: [
        {
          talentname: "Survival Instinct",
          prerequisites: ["Ranger", "Instinct", "Ranger Entry"],
          flavorTest: "Gain the Preternatural Dodge ability.",
          abilities: [
            {
              abilityname: "Preternatural Dodge",
              abilitydescription: "When a creature attacks one of your physical or mental defenses, you can use ANT in place of whatever was targeted. (AWR/Rest)",
            },],
        },
        {
          talentname: "Fighting Instingct II",
          prerequisites: ["Ranger", "Instinct", "Survival Instinct"],
          flavorTest: "Fighting Instinct lasts until the end of your next turn.",
          abilities: []
        },

        {
          talentname: "Survival Instinct II",
          prerequisites: ["Ranger", "Instinct", "Fighting Instinct II"],
          flavorTest: "Gain the Size Up ability",
          abilities: [
            {
              abilityname: "Size Up",
              abilitydescription: "You can spend 2 AP to study an enemy and learn which defense(s) its attacks target, besides AR.",
            },],
        },
        {
          talentname: "Survival Instinct III",
          prerequisites: ["Ranger", "Instinct", " Survival Instinct II"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Athleticism tag. Your Fighting Instinct also grants you a +1 to all damage rolls.",
          abilities: [],
        },
        {
          talentname: "Vigilant",
          prerequisites: ["Ranger", "Instinct", "Fighting Instinct III"],
          flavorTest: "Gain the Vigilant ability.",
          abilities: [
            {
              abilityname: "Vigilant",
              abilitydescription: "If you roll lower than 10 on an AWR check, treat that roll as 10 instead (AWR/Rest)",
            },],
        },
        {
          talentname: "Survival Instingct III",
          prerequisites: ["Ranger", "Instinct", "Vigilant"],
          flavorTest: "Your ANT increases by +1. Choose REF or FORT to also increase by +1.",
          abilities: [],
        },
        {
          talentname: "Vigilant II",
          prerequisites: ["Ranger", "Instinct", "Survival Instinct III"],
          flavorTest: "Vigilant becomes: If you roll lower than 10 on an AWR check, treat that roll as your ANT instead.",
          abilities: [],
        },
        {
          talentname: "Survival Instingct IV",
          prerequisites: ["Ranger", "Instinct", " Vigilant II"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Observation tag. Gain a +4 bonus to Initiative.",
          abilities: [],
        },
        {
          talentname: "Fighting Instingct IV",
          prerequisites: ["Ranger", "Instinct", " Survival Instinct IV"],
          flavorTest: "Gain the Pounce ability.",
          abilities: [
            {
              abilityname: "Pounce",
              abilitydescription: "On your first turn in Initiative if no enemies have acted yet, gain 2 additional AP.",
            },],
        },
        {
          talentname: "Vigilant III",
          prerequisites: ["Ranger", "Instinct", "Fighting Instinct IV"],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Survival Tag. Vigilant is AWR/Recoup.",
          abilities: [],
        },
        {
          talentname: "Survival Instingct V",
          prerequisites: ["Ranger", "Instinct", " Vigilant III"],
          flavorTest: "Gain a +4 bonus to Initiative. Preternatural Dodge is AWR/Recoup.",
          abilities: [],
        },
        {
          talentname: "Vigilant IV",
          prerequisites: ["Ranger", "Instinct", "Survival Instinct V"],
          flavorTest: "Gain +4 Skill Points in skills with the Observation tag. Vigilant is AWR/Catch Breath.",
          abilities: [],
        },
        {
          talentname: "Fighting Instinct V",
          prerequisites: ["Ranger", "Instinct", "Vigilant IV"],
          flavorTest: "Pounce grants you 4 AP. If you start Initiative with no Fighting Instinct, regain one Fighting Instinct.",
          abilities: [],
        },
        {
          talentname: "Vigilant V",
          prerequisites: ["Ranger", "Instinct", "Fighting Instinct V"],
          flavorTest: "Vigilant is always active.",
          abilities: [],
        },
        {
          talentname: "Cornered Animal",
          prerequisites: ["Ranger", "Instinct", "Capstone", "Vigilant V"],
          flavorTest: "Your base animal instinct to fight and live is overwhelming. Fighting Instinct becomes AWR/Catch Breath. Gain the Cornered Animal ability.",
          abilities: [
            {
              abilityname: "Cornered Animal",
              abilitydescription: "When you start your turn with 0 HP, you may gain 2 Death Points. If you do, then until the end of your next turn, your speed doubles, you gain TA on all attacks, creatures cannot make reactive attacks against you, and your first hit that was not a crit counts as a crit. (1/ Rest)",
            }, {
              abilityname: "Level 30",
              abilitydescription: "Cornered Animal no longer costs 2 Death Points and is active whenever you are at 0 HP.",
            },
          ]
        },
      ]
    },
    {
      trackname: "Survivor",
      trackdescription: "You know the natural world like the back of your hand.Wherever you end up, you know how to survive.",
      talents: [
        {
          talentname: "Natural Habitat",
          prerequisites: ["Ranger", "Survivor", "Ranger Entry"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the Survival or Stamina tags. Pick one of the 11 environments: Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic. This is your Natural Habitat. While in that environment, you can always find enough food for a number of creatures equal to your AWR.",
          abilities: [],
        },
        {
          talentname: "Primeval Senses",
          prerequisites: ["Ranger", "Survivor", "Natural Habitat"],
          flavorTest: "Gain the Primeval Sense ability",
          abilities: [
            {
              abilityname: "Primeval Senses",
              abilitydescription: "By focusing for 1 minute, you learn whether any of the following creatures are within 1 mile of you: Arcane, Divine, Occult, Primal, Psionic, Undead, Monstrosity, Fae, and Eldritch. You do not learn their identities but learn their exact numbers and direction/ distance from you. This information is fleeting, but if you do no strenuous activity you can maintain it for up to 10 mins. (AWR/Rest)",
            },],
        },
        {
          talentname: "Natural Habitat II",
          prerequisites: ["Ranger", "Survivor", "Primeval Senses"],
          flavorTest: "Gain the Wilderness Mastery ability",
          abilities: [
            {
              abilityname: "Wilderness Mastery",
              abilitydescription: "When in your favored environment, give yourself double your Skill Points before you make an AWR skill check. (AWR/Rest)",
            },],
        },
        {
          talentname: "Primeval Senses II",
          prerequisites: ["Ranger", "Survivor", "Natural Habitat II"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the Acrobatics Tag. Ignore Difficult Terrain while in a Natural Habitat.",
          abilities: [],
        },
        {
          talentname: "Survivor",
          prerequisites: ["Ranger", "Survivor", "Nature Stride"],
          flavorTest: "Gain a Primal Aspect. Pick one: Natural Heat, Natural Cold, or Forced Marching. You can no longer gain Fatigue from that selection.",
          abilities: [],
        },
        {
          talentname: "Primeval Senses III",
          prerequisites: ["Ranger", "Survivor",],
          flavorTest: "Gain +4 Skill Points that you can spend on skills with the Acrobatics or Athleticism tags. Pick a second environment to be your Natural Habitat.",
          abilities: [],
        },
        {
          talentname: "Survivor II",
          prerequisites: ["Ranger", "Survivor", "Natural Habitat III"],
          flavorTest: "You become Immune to common poisons and diseases.",
          abilities: [],
        },
        {
          talentname: "Nature Stride II",
          prerequisites: ["Ranger", "Survivor", "Survivor II"],
          flavorTest: "Ignore Hazardous Terrain that isn’t liquid while in your Natural Habitat.",
          abilities: [],
        },
        {
          talentname: "Primeval Senses IV",
          prerequisites: ["Ranger", "Survivor", "Nature Stride II"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the Observation tag. Primeval Identification can be used on a number of targets equal to ½ your AWR.",
          abilities: [],
        },
        {
          talentname: "Natural Habitat IV",
          prerequisites: ["Ranger", "Survivor", "Primeval Senses IV"],
          flavorTest: "Pick a third environment to be your Natural Habitat, and Wilderness Mastery is AWR/Recoup.",
          abilities: [],
        },
        {
          talentname: "Nature Stride III",
          prerequisites: ["Ranger", "Survivor", "Natural Habitat IV"],
          flavorTest: "Always ignore difficult terrain. Ignore all hazardous terrain that is caused by natural phenomena unless it is liquid.",
          abilities: [],
        },
        {
          talentname: "Primeval Sense V",
          prerequisites: ["Ranger", "Survivor", "Nature Stride III"],
          flavorTest: "You have unlimited uses of your Primeval Senses ability.",
          abilities: [],
        },
        {
          talentname: "Unrivaled Explorer",
          prerequisites: ["Ranger", "Survivor", "Capstone", "Primeval Sense V"],
          flavorTest: "You are known as a person truly in tune with the untamed, uncharted wilderness in all its splendor, and are commonly sought out as a guide for high-profile travelers. You may embrace this or you may hide from civilization to avoid the recognition and to just spend time in the wild, where your heart truly lies. You can never become lost, even by magical means. You have TA when you are in one of your Natural Habitats. When you Take a Rest in a type of environment that is not one of your Natural Habitats, you may replace one of your old Natural Habitats with this new environment. (1/Week)",
          abilities: [
            {
              abilityname: "Level 30",
              abilityDescription: "The final cap for your AWR increases from 12 to 14.",
            },
          ]
        }]
    },
    {
      trackname: "Wilderness Warden",
      trackdescription: ". You learn primal magic and enhance some of your primal spells as you gain skill as a magical ranger.",
      talents: [
        {
          talentname: "Primal Warden",
          prerequisites: ["Ranger", "Wilderness Warden", "Ranger Entry"],
          flavorTest: "Gain the Warden of the Primal talent if you did not already have it. If you did already have it, gain a talent from the Primal Magic stack.Each time you level up and spend your talent point on a talent in the Wilderness Warden stack, you gain + 5 SP and + 1 Primal Power.AWR is your magic attribute.",
          abilities: [],
        },
        {
          talentname: "Environmentalist",
          prerequisites: ["Ranger", "Wilderness Warden", "Primal Warden"],
          flavorTest: "Pick one of the 11 Environments: Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic. While you are in that environment and not within 1 mile of a settled area, you regain 1 SP when you Recoup.",
          abilities: [],
        },
        {
          talentname: "Ranger's Invocation",
          prerequisites: ["Ranger", "Wilderness Warden", "Environmentalist or Planar Protector"],
          flavorTest: "Learn one invocation.Pick an invocation that you know that has no Tier prerequisites. You can cast that invocation 1 time per day without expending your invocation slot.",
          abilities: [],
        },
        {
          talentname: "Empower Chant",
          prerequisites: ["Ranger", "Wilderness Warden", "Ranger’s invocation or Intrinsic Boon"],
          flavorTest: "Pick one chant that you know, that does not deal damage. While more than 1 mile from a settled area, you can cast that chant as if it were 1 Tier stronger (e.g., if you normally cast chants at Primal Tier 2, cast this chant at Primal Tier 3).",
          abilities: [],
        },
        {
          talentname: "Planar Protector",
          prerequisites: ["Ranger", "Wilderness Warden", "Primal Warden"],
          flavorTest: "Pick one creature type: Arcane, Avadri, Celestial, Divine, Eldritch, Elemental, Fae, Fiend, Giant, Occult, Primal, Psionic, or Undead. Your magic attack rolls against those creatures increases by +1.",
          abilities: [],
        },
        {
          talentname: "Inirinsic Boon",
          prerequisites: ["Ranger", "Wilderness Warden", "Environmentalist or Planar Protector"],
          flavorTest: "Learn one chant, one invocation, and one spell that all have the Intrinsic tag.",
          abilities: [],
        },
        {
          talentname: "Ranger's Spells",
          prerequisites: ["Ranger", "Wilderness Warden", "Ranger’s invocation or Intrinsic Boon"],
          flavorTest: "Pick two intrinsic spells that you know. They cost 1 fewer SP (min 1 SP).",
          abilities: [],
        },
        {
          talentname: "Primal Warden II",
          prerequisites: ["Ranger", "Wilderness Warden", " Empower Chant or Ranger’s Spells"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the observation or survival tags. Gain a talent from the Primal Magic stack (Chapter 4).",
          abilities: [],
        },
        {
          talentname: "Environmentalist II",
          prerequisites: ["Ranger", "Wilderness Warden", "Primal Warden II", "Environmentalist"],
          flavorTest: "Learn a new Primal Aspect. The environment you picked now restores 2 SP per Recoup.",
          abilities: [],
        },
        {
          abilityname: "Wanderer's Invocation",
          prerequisites: ["Ranger", "Wilderness Warden", "Environmentalist II or Planar Protector II"],
          flavorTest: "Learn one invocation. Pick an invocation that you know that has no tier prerequisites. You can cast that invocation one time per day without expending an invocation slot.",
          abilities: [],
        },
        {
          talentname: "Furious Chant",
          prerequisites: ["Ranger", "Wilderness Warden", "Wanderer’s Invocation or Intrinsic Boon IIy"],
          flavorTest: "Pick one chant that you did not select with Empowered Chant. While more than 1 mile from a settled area, you can cast that chant as if it were 1 Tier stronger. ",
          abilities: [],
        },
        {
          talentname: "Planar Protector II",
          prerequisites: ["Ranger", " Wilderness Wardenr", "Primal Warden II", "Planar Protector"],
          flavorTest: "Choose a new type of creature from your Planar Protector feature. Your Planar Protector bonus works on creatures with either tag.",
          abilities: [],
        },
        {
          talentname: "Intrinsic Boon II",
          prerequisites: ["Ranger", "Wilderness Warden", "Environmentalist II or Planar Protector II", "Intrinsic Boon"],
          flavorTest: "Learn one chant, one invocation, and one spell that all have the Intrinsic tag.",
          abilities: [],
        },
        {
          talentname: "Wanderer's Spells",
          prerequisites: ["Ranger", "Wilderness Warden", "Wanderer’s Invocation or Intrinsic Boon II"],
          flavorTest: "Pick two spells with the Nature tag that you know and that you have not selected for your ranger’s spells feature. They cost 1 fewer SP (min 1 SP).",
          abilities: [],
        },
        {
          talentname: "Primal Warden III",
          prerequisites: ["Ranger", "Wilderness Warden", "Furious Chant or Wanderer’s Spells"],
          flavorTest: "You cannot become lost except through the use of magic. Gain a talent from the Primal Magic stack.",
          abilities: [],
        },
        {
          abilityname: "Primal Warden IV",
          prerequisites: ["Ranger", "Wilderness Warden", "Primal Warden III"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the Observation or Survival tags. Gain a talent from the Primal Magic stack.",
          abilities: [],
        },
        {
          talentname: "Environmentalist III",
          prerequisites: ["Ranger", "Wilderness Warden", "Primal Warden IV", "Environmentalist II"],
          flavorTest: "The environment you picked now restores 3 SP per Recoup. All environments now restore 1 SP per Recoup.",
          abilities: [],
        },
        {
          talentname: "Primeval Invocation",
          prerequisites: ["Ranger", "Wilderness Warden", "Environmentalist III or Planar Protector III"],
          flavorTest: "Learn one invocation. Pick an invocation that you know that is Tier 2 or Tier 3. You can cast that invocation one time per day without expending an invocation slot.",
          abilities: [],
        },
        {
          talentname: "Chant Of The Wild Heart",
          prerequisites: ["Ranger", "Wilderness Warden", "Primeval Invocation or Intrinsic Boon III"],
          flavorTest: "You can choose which intrinsic chants get your bonus from the “Chant” abilities in this stack when you Rest. (1/Week) When you reach Primal Tier 6, gain +12 Skill Points that you can assign to skills with the athleticism, acrobatics, stamina, observation, or survival tags.",
          abilities: [],
        },
        {
          talentname: "Planar Planar Protector III",
          prerequisites: ["Ranger", "Wilderness Warden", "Primal Warden IV", "Planar Protector II"],
          flavorTest: "Choose a creature type you’ve already chosen with Planar Protector 1 or 2. Gain an additional +1 on magic attacks against creatures of that type.",
          abilities: [],
        },
        {
          abilityname: "Intrinsic Boon III",
          prerequisites: ["Ranger", "r, Wilderness Warden", "Environmentalist 3 or Planar Protector 3"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the Survival tag.Learn 1 chant, 1 invocation, and 1 spell that all have the Intrinsic tag.",
          abilities: [],
        },
        {
          abilityname: "Primeval Spells",
          prerequisites: ["Ranger", "Wilderness Warden", "Primeval Invocation or Intrinsic Boon III"],
          flavorTest: "Pick 3 intrinsic spells that you know and that have benefitted either from Ranger’s Spells or Wanderer’s Spells. They cost 1 fewer SP (min 1 SP).",
          abilities: [],
        },
        {
          talentname: "Primal Warden V",
          prerequisites: ["Ranger", "Wilderness Warden", " Chant of the Wild Heart or Primeval Spells"],
          flavorTest: "Gain +4 Skill Points that you can assign to skills with the Observation or Survival tags. Gain a talent from the Primal Magic stack.",
          abilities: [],
        },
        {
          talentname: "Primal Exemplar",
          prerequisites: ["Ranger", "Wilderness Warden", "Capstone", "Primal Warden V"],
          flavorTest: "Your heart, soul, and body are intertwined with the wellbeing of the natural world. Fae generally see you as a great friend and will usually go out of their way to cooperate with you. You can never become lost, even by magical means. When you Take a Rest and you are not within 1 mile of a settled area, you may reassign all of your ranger Talent Points, assigning them to other ranger talents.",
          abilities: [
            {
              abilityname: "Level 30",
              abilitydescription: "Choose one intrinsic spell and one intrinsic invocation.Both must have the nature tag. You can cast each of those abilities indefinitely, without spending SP or invocation slots.",
            },

          ]
        }
      ]
    }]
};


