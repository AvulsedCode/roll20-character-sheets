const Mage =
{
    stackname: "Mage",
    shortDescription: "From studious, academic wizards to chaotic sorcerers, mages have a profound ability to manipulate the arcane.",
    quote: {
        phrase: "Magic is a wondrous gift. Why exert unnecessary effort when a flick of the wrist or a glance of the eye can accomplish the same?",
        quotedsname: "Finneas Alistair Laith",
        title: "absentminded scholar",
    },
    longDescription: "You have always had a spark of talent within you, perhaps the ability to literally conjure forth sparks when agitated or excited.Ever curious about the world and the power within you, you have never shied away from experimentation with your magical powers.In your youth this caused your family endless grief and singed eyebrows.Now, having mastered the basics of arcane magic, you seek to continue your study and uncover ever deeper mysteries of the Fundamental Wellspring of Magic. Developing skill as an arcane caster necessitates that you maintain Attunation with the Fundamental Wellspring. This entails different practices for different casters, so in your case it might involve reading complex arcane texts or meditating intensely on the metaphysics or astrophysics of the universe.Be proactive, for if you become lackadaisical in maintaining Attunation, your skill will gradually atrophy, and you might lose your arcane ability altogether if you do not diligently cultivate this Attunation.",

    entryTalent: {
        prerequisites: ["Class Entry", "Mage", "Character Level 2"],
        flavorTest: "When you take this entry talent, you gain the following abilities.",
        abilities: [
            {
                abilityname: "Learned",
                abilitydescription: "Gain +6 Skill Points, which you can spend on any skills with the INT tag.",
            },
            {
                abilityname: "Student of the Arcane",
                abilitydescription: "Gain the Student of the ArcaneTalent from the arcane stack if you did not already have it. INT is your Magic Attribute.",
            },
            {
                abilityname: "Arcane Power",
                abilitydescription: "Each time you level up and spend your Talent Point on a mage talent, gain + 5 SP and + 1 Arcane Power.",
            },
            {
                abilityname: "Focus",
                abilitydescription: "Choose one of the nine functions of magic. This choice grants you a special bonus when you cast magic of that function.",
            },
            {
                abilityname: "Alchemy",
                abilitydescription: "You can spend 10 minutes changing and simply shaping 1 ft 3 of a raw material to your needs.This could be making a branch into a crowbar, or a crowbar into a long wire, or a long wire into a bundle of tinder, but cannot create complex objects or machines.The material can be refined(such as smelted ore or cut timber), but cannot be crafted(such as a sword or a door).Even the most talented Alchemists have not discovered how to transmute silver, gold, or diamond, and thus those materials are unavailable for this ability.",
            },
            {
                abilityname: "Altering",
                abilitydescription: "Altering spells cost you 1 fewer AP (min 1).",
            },
            {
                abilityname: "Divining",
                abilitydescription: "You can now spend 10 minutes meditating, after which you can see, hear, and smell from one of your arcane Signatures as if you were present in a vacant space within 5 ft of its location for 1 minute.This magic consumes and dispels the Signature after it is used.",
            },
            {
                abilityname: "Enchanting",
                abilitydescription: "When you cast a spell that has the Enchanting function and Charms or Frightens a creature, multiply the duration of the effects by 1.5.",
            },
            {
                abilityname: "Evoking",
                abilitydescription: "When you deal damage with Evoking magic, add additional damage equal to ½ your level. (END / Rest).",
            },
            {
                abilityname: "Illusory",
                abilitydescription: "Creatures attempting to identify your illusions have a - 2 to their die rolls.",
            },
            {
                abilityname: "Necromancy",
                abilitydescription: "When you would be reduced to 0 HP, you can sacrifice an undead under your control to instead have 1 HP.The undead in question is immediately destroyed.",
            },
            {
                abilityname: "Summoning",
                abilitydescription: "Creatures that you summon gain additional maximum HP equal to your Arcane Power Level.",
            },
            {
                abilityname: "Warding",
                abilitydescription: "When you cast Warding magic that increases any of a creature’s Defenses, that creature’s AR increases by an additional + 1.",
            },
        ],
    },
    tracks: [
        {
            trackname: "Arcane Weaving",
            trackdescription: "",
            talents: [
                {
                    talentname: "Arcane Weaver",
                    prerequisites: ["Mage", "Arcane Weaving", "Mage Entry"],
                    flavorTest: "Spells with the metamagic tag cost you 4 fewer SP to cast.",
                    abilities: [],
                },
                {
                    talentname: "Spell Sculptor",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    flavorTest: "Sculpt Spell costs you ½ the SP cost to cast. This replaces your Arcane Weaver ability.",
                    abilities: [],
                },
                {
                    talentname: "Spell sculptor II",
                    prerequisites: ["Mage", "Arcane Weaving", "Spell Sculptor"],
                    flavorTest: "Sculpt Spell costs no SP to upcharge.",
                    abilities: [],
                },
                {
                    talentname: "Spell sculptor III",
                    prerequisites: ["Mage", "Arcane Weaving", "Spell sculptor II"],
                    flavorTest: "Sculpt Spell costs 1 SP to cast, and no SP to upcharge.",
                    abilities: [],
                },
                {
                    talentname: "Spell Sniper",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    flavorTest: "Extend Spell costs you ½ the SP to cast. This replaces your Arcane Weaver ability.",
                    abilities: [],
                },
                {
                    talentname: "Spell Snipe II",
                    prerequisites: ["Mage", "Arcane Weaving", "Spell Sniper"],
                    flavorTest: "Upcharging Extend Spell becomes +2 SP per 15 ft.",
                    abilities: [],
                },
                {
                    talentname: "Mote Expert",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    flavorTest: "Delay Spell costs you ½ the SP to cast. This replaces your Arcane Weaver ability.",
                    abilities: [],
                },
                {
                    talentname: "Mote Expert II",
                    prerequisites: ["Mage", "Arcane Weaving", "Mote Expert"],
                    flavorTest: "You can now cause a mote created by Delay Spell to be invisible, and leave it in a space you are occupying.After you move out of that space, it will trigger upon another creature touching it.",
                    abilities: [],
                },
                {
                    talentname: "Mote Expert III",
                    prerequisites: ["Mage", "Arcane Weaving", "Mote Expert II"],
                    flavorTest: "You can no longer lose control of your mote and activate its magic prematurely while you have only one mote on your person.",
                    abilities: [],
                },
                {
                    talentname: "Empower Spell Expert",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    flavorTest: "Your Empower Spell’s APC is lowered by 2.",
                    abilities: [],
                },
                {
                    talentname: "Arcane Weaver II ",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver", "Arcane Weaving 5"],
                    flavorTest: "Gain Metamagic Points equal to your INT. You can use these to cast Metamagic spells at a rate of 2 Metamagic Points per spell in place of SP. You regain all expended Metamagic points when you Take a Rest. If you spend Metamagic Points with a talent from the arcane weaving track in the mage stack, you must declare the expenditure before you cast your spell.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Spell point Cost",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend Metamagic Points to reduce a spell’s SPC by 2 SP per Metamagic Point.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Hasten",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend Metamagic Points to reduce a spell’s APC at a rate of 1 Metamagic Point per AP(min 1).",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Overclock",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend 1 Metamagic Point to halve the SPC of upcharging a spell. You may not use Metamagic Points on other Metamagic if you chose to spend a point in this manner, but you may halve the cost(min 1) multiple times.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Maximize",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend 6 Metamagic Points to maximize the damage of a spell.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Overcome",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend 1 Metamagic Point to ignore a creature’s Resist.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Humane Spell",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend 1 Metamagic Point to modify a spell to deal psychic damage and become nonlethal.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Leeching",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend 1 Metamagic Point to regain HP equal to ½.the necrotic damage you deal with the modified spell, or 2 Metamagic Points to heal for all the necrotic damage.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Duration",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may extend a spell with a duration of 1 minute or longer.It lasts for 1 additional minute per Metamagic Point you expend.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic:Conjuring",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may spend 2 Metamagic Points to delay Conjuring for one turn.If you do not resume conjuring at the start of your next turn, you lose the spell as if your conjuring were interrupted.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic Expert",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    flavorTest: "You may regain expended Metamagic Points when you Recoup. (1 / Rest) ",
                    abilities: [],
                },
                {
                    talentname: "Metamagic Expert II",
                    prerequisites: ["Mage", "Arcane Weaving", "Metamagic Expert"],
                    flavorTest: "You may regain expended Metamagic Points when you Catch your Breath. (1 / Rest) ",
                    abilities: [],
                },
                {
                    talentname: "Arcane Versatility",
                    prerequisites: ["Mage", "Arcane Weaving", "MArcane Weaver II"],
                    flavorTest: "You may trade SP for Metamagic Points at a rate of 10 SP per 1 Metamagic Point, or Metamagic Points for SP at a rate of 1 Metamagic Point for 5 SP.",
                    abilities: [],
                },
                {
                    talentname: "Metamagic Caster",
                    prerequisites: ["Mage", "Arcane Weaving", "Capstone", "Arcane Weaving 14"],
                    flavorTest: "You weave magic in ways most cannot even comprehend, manipulating the leylines of the Fundamental Wellspring and bending them to your will, even altering reality itself. You gain 6 additional Metamagic Points(your total is now INT+ 6).Gain Strand of Metamagic.",
                    abilities: [
                        {
                            abilityname: "Strand of Metamagic",
                            abilitydescription: "You may spend X Metamagic Points to increase your d20 roll by X. You may spend 1 Reactive AP to spend X Metamagic Points and decrease the d20 roll of a hostile creature within 40 ft of you by X.",
                        },
                        {
                            abilityname: "Level 30",
                            abilitydescription: "The final cap for your INT increases from 12 to 14.",
                        },]
                },
            ]
        },
        {
            trackname: "Archmage Track",
            trackdescription: "",
            talents: [
                {
                    talentname: "Arcane Inetlilectual",
                    prerequisites: ["Mage", "Arcane Weaving", "Mage Entry"],
                    flavorTest: "You dedicate yourself to scholarly pursuits, the study of arcane magics, and the mastery of the Fundamental Wellspring. You may now only take talents from the mage and srcane stacks. You immediately learn all arcane cantrips and can add your INT to damage dealt by cantrips.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Alchemy",
                    prerequisites: ["Mage", "Arcane Weaving", "Arcane Intellectual"],
                    flavorTest: "You gain the Alchemy Focus. If you already had the Alchemy Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Alchemy II",
                    prerequisites: ["Mage", "Archmage", "Mage - Alchem"],
                    flavorTest: "Your Alchemy creation can now be up to 5 ft by 15 ft and be crafted objects that do not feature moving parts(such as a ladder or sword). You must have at least 4 Skill Points in the associated skill to create in this way(Such as carpentry for a ladder or blacksmithing for a sword).The value of crafted creations can be no higher than the value of the materials.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Alchemy III",
                    prerequisites: ["Mage", "Archmage", "Mage - Alchemy II"],
                    flavorTest: "Your Alchemy Creation can now be 15 ft wide, tall, and long.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Alchemy IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Alchemy III"],
                    flavorTest: "Your Alchemy Creation can now feature moving parts such as doors or windows.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Alchemy V",
                    prerequisites: ["Mage", "Archmage", "Mage - Alchemy IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Alchemy tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Altering",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Altering Focus. If you already had the Altering Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Altering II",
                    prerequisites: ["Mage", "Archmage", "Mage - Altering"],
                    flavorTest: "Your Arcane Swap spell can now be cast on a willing, friendly creature also in range that is no more than one size larger or smaller than the target of the swap, instead of being cast on yourself.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Altering III",
                    prerequisites: ["Mage", "Archmage", "Mage - Altering II"],
                    flavorTest: "Your Arcane Swap spell now has no minimum size, and can be cast on objects that are no larger than one Size larger than you, or twice your weight.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Altering IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Altering III"],
                    flavorTest: "You can no longer be teleported against your will.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Altering V",
                    prerequisites: ["Mage", "Archmage", "Mage - Altering IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Altering tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Divining",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Divining Focus. If you already had the Divining Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Divining II",
                    prerequisites: ["Mage", "Archmage", "Mage - Divining"],
                    flavorTest: "You can now use your Divining feature on a Signature twice before it is dispelled.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Divining III",
                    prerequisites: ["Mage", "Archmage", "Mage - Divining II"],
                    flavorTest: "Your Signatures are no longer dispelled by your Divining feature.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Divining IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Divining III"],
                    flavorTest: "You may now teleport yourself to a Signature by meditating on one of your Signatures for 10 minutes.This dispels the Signature. (2 / Rest).",
                    abilities: [],
                },
                {
                    talentname: "Mage:Divining V",
                    prerequisites: ["Mage", "Archmage", "Mage - Divining IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Divining tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Enchanting",
                    prerequisites: ["Mage", " Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Enchanting Focus. If you already had the Enchanting Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Enchanting II",
                    prerequisites: ["Mage", "Archmage", "Mage - Enchanting"],
                    flavorTest: "An object that has your Signature costs 0 SP to possess with the Possess Object spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Enchanting III",
                    prerequisites: ["Mage", "Archmage", "Mage - Enchanting II"],
                    flavorTest: "Using your Unravel Magic ability always costs ½ the SPC of the spell you are targeting if it is an Enchanting spell, regardless of its source.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Enchanting IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Enchanting III"],
                    flavorTest: "If you discover Enchantment magic using the Sense Magic spell, you learn who the caster is, provided that you already know their true name and they are within 1 mile of you.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Enchanting V",
                    prerequisites: ["Mage", "Archmage", "Mage - Enchanting IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Enchanting tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Evoking",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Evoking Focus. If you already had the Evoking Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Evoking II",
                    prerequisites: ["Mage", "Archmage", "Mage - Evoking"],
                    flavorTest: "You may now add additional damage equal to your level. This replaces your original Evoking Focus ability. (END / Rest) ",
                    abilities: [],
                },
                {
                    talentname: "Mage:Evoking III",
                    prerequisites: ["Mage", "Archmage", "Mage - Evoking II"],
                    flavorTest: "You may add your INT to any damage rolls you make when using Evoking cantrips, chants, or prayers.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Evoking IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Evoking III"],
                    flavorTest: "When you cast an Evoking spell, you may gain additional SP by gaining Death Points.For each Death Point you gain, you gain 10 SP. You lose any excess SP that you gained from this feature.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Evoking V",
                    prerequisites: ["Mage", "Archmage", "Mage - Evoking IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Evoking tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Illusory",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Illusory Focus. If you already had the Illusory Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Illusory II",
                    prerequisites: ["Mage", "Archmage", "Mage - Illusory"],
                    flavorTest: "You may create one Illusory Duplicate of yourself when you cast your first Illusory spell after Taking a Rest.When you are subject to physical damage, the attacker must roll an even number to hit you.If they roll an odd number, one of your duplicates is destroyed instead.Regain the ability to create Illusory Duplicates when you complete a Rest.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Illusory III",
                    prerequisites: ["Mage", "Archmage", "Mage - Illusory II"],
                    flavorTest: "Your Illusory Duplicates ability creates two duplicates.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Illusory IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Illusory III"],
                    flavorTest: "Your Illusory Duplicates ability creates three duplicates.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Illusory V",
                    prerequisites: ["Mage", "Archmage", "Illusory IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Illusory tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Necromancy",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Necromancy Focus. If you already had the Necromancy Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Necromancy II",
                    prerequisites: ["Mage", "Archmage", "Mage - Necromancy"],
                    flavorTest: "The duration of the Raise Skeleton spell is now Indefinite, but your maximum SP are reduced by 16 for each active skeleton under your control. You can no longer upcharge Raise Skeleton.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Necromancy III",
                    prerequisites: ["Mage", "Archmage", "Mage - Necromancy II"],
                    flavorTest: "Your maximum SP are now reduced by only 8 for each active skeleton under your control.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Necromancy IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Necromancy III"],
                    flavorTest: "Your maximum SP are now reduced by only 4 for each active skeleton under your control.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Necromancy V",
                    prerequisites: ["Mage", "Archmage", "Mage - Necromancy IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell.Each of these choices must have the Necromancy tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Summoning",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Summoning Focus. If you already had the Summoning Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Summoning II",
                    prerequisites: ["Mage", "Archmage", "Mage - Summoning"],
                    flavorTest: "Creatures you create using a Summoning spell add ½ your INT to their attack rolls.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Summoning III",
                    prerequisites: ["Mage", "Archmage", "Mage - Summoning II"],
                    flavorTest: "Creatures you create using a Summoning spell add ½ your INT to their damage rolls.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Summoning IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Summoning III"],
                    flavorTest: "Creatures you create using a Summoning spell add your INT to their attack and damage rolls.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Summoning V",
                    prerequisites: ["Mage", "Archmage", "Mage - Summoning IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Summoning tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Warding",
                    prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
                    flavorTest: "You gain the Warding Focus. If you already had the Warding Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Warding II",
                    prerequisites: ["Mage", "Archmage", "Mage - Warding"],
                    flavorTest: "When you cast Mage Armor on yourself, and would be the victim of Massive Damage(see p. 328) you can reduce that damage by ½.If you do, your Mage Armor is dispelled.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Warding III",
                    prerequisites: ["Mage", "Archmage", " Mage - Warding II"],
                    flavorTest: "Your Mage Armor now increases all defenses by +4. This replaces your original Warding Focus ability.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Warding IV",
                    prerequisites: ["Mage", "Archmage", "Mage - Warding III"],
                    flavorTest: "Your Mage Armor can no longer be dispelled by others, and increases all defenses by + 5.",
                    abilities: [],
                },
                {
                    talentname: "Mage:Warding V",
                    prerequisites: ["Mage", "Archmage", "Mage - Warding IV"],
                    flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Warding tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    abilities: [],
                },
                {
                    talentname: "High Mage",
                    prerequisites: ["Mage", "Archmage", "Arcane 14"],
                    flavorTest: "You are renowned as a highly skilled arcane caster, and many hopefuls will seek you out to try to earn your favor as an instructor. You may regain half your SP when you Recoup. (1 / Rest).",
                    abilities: [],
                },
                {
                    talentname: "Archmage",
                    prerequisites: ["Mage", "Archmage", "Capstone", "High Mage", ", Arcane 29"],
                    flavorTest: "Your spells can no longer be dispelled, identified, detected, scryed on, or targeted in any way by a caster with a level or Monster Level below your Character Level.Even then, a creature can only target your spells if they spend at least 90 SP or expend the equivalent of 90 SP through innate casting.",
                    abilities: [],
                },
            ]
        },
        {
            trackname: "Sorcery Track",
            trackdescription: "",
            talents: [
                {
                    talentname: "Sorcery Focus",
                    prerequisites: ["Mage", "Sorcery", "Mage Entry"],
                    flavorTest: "You can no longer take Backlash damage that is higher than your current Character Level while you have your focus on your person. You take damage equal to the Spell’s SPC(min 1) or equal to your level, whichever is lower.",
                    abilities: [],
                },
                {
                    talentname: "Careful Casting",
                    prerequisites: ["Mage", "Sorcery", " Sorcery Focus", "Wellspring Tap"],
                    flavorTest: "By acting more carefully, you trigger backlash less frequently.When you would trigger backlash, you can now roll a 1d20, and on a 10 or higher, the backlash does not occur.However, your critical casts now only reduce the SPC by 5, instead of 10.",
                    abilities: [],
                },
                {
                    talentname: "Careful Casting II",
                    prerequisites: ["Mage", "Sorcery", "Careful Casting"],
                    flavorTest: "You can no longer trigger backlash, and your critical casts do not cost fewer SP or restore SP.",
                    abilities: [],
                },
                {
                    talentname: "SCareful Casting III",
                    prerequisites: ["Mage", "Sorcery", "Careful Casting II"],
                    flavorTest: "You may now choose if you are carefully casting spells or not.When you use Careful Cast, you cannot trigger backlash and your critical casts do not cost fewer SP. You must declare this before rolling.",
                    abilities: [],
                },
                {
                    talentname: "Wellspring Tap",
                    prerequisites: ["Mage", "Sorcery", "Sorcery Focus", "Careful Casting"],
                    flavorTest: "If you critically cast on a spell that costs fewer than 5 SP, you regain that amount of SP.",
                    abilities: [],
                },
                {
                    talentname: "Wellspring Tap II",
                    prerequisites: ["Mage", "Sorcery", "Wellspring Tap"],
                    flavorTest: "If you critically cast on a spell that costs fewer than 10 SP, you regain that amount of SP.",
                    abilities: [],
                },
                {
                    talentname: "Wellspring Tap III",
                    prerequisites: ["Mage", "Sorcery", "Wellspring Tap II"],
                    flavorTest: "You regain 1d4+LUCK HP when you critically cast.",
                    abilities: [],
                },
                {
                    talentname: "Careful Casting -Cantrips",
                    prerequisites: ["Mage", "Sorcery", "Sorcery 4"],
                    flavorTest: "You can now carefully cast cantrips. You must declare if you are carefully casting before you roll. You gain no benefit from critically hitting on a carefully cast cantrip, and cannot trigger backlash when doing so.",
                    abilities: [],
                },
                {
                    talentname: "Inertia",
                    prerequisites: ["Mage", "Sorcery", " Careful Casting - Cantrips"],
                    flavorTest: "When you are the victim of a critical hit or critical cast, you regain 1d10 SP.",
                    abilities: [],
                },
                {
                    talentname: "Cantrip Focus",
                    prerequisites: ["Mage", "Sorcery", "Inertia"],
                    flavorTest: "When you are carefully casting a cantrip, you gain TA.",
                    abilities: [],
                },
                {
                    talentname: "Cantrip Focus II",
                    prerequisites: ["Mage", "Sorcery", " Cantrip Focus"],
                    flavorTest: "When you are carefully casting a cantrip, you gain another TA(2 total from this feature).",
                    abilities: [],
                },
                {
                    talentname: "Cantrip Focus III",
                    prerequisites: ["Mage", "Sorcery", "Cantrip Focus II"],
                    flavorTest: "When you are carefully casting a cantrip, you gain another TA(3 total from this feature).",
                    abilities: [],
                },
                {
                    talentname: "Cantrip Focus IV",
                    prerequisites: ["Mage", "Sorcery", "Cantrip Focus III"],
                    flavorTest: "You can now add your half your INT to your cantrip damage.",
                    abilities: [],
                },
                {
                    talentname: "Cantrip Focus V",
                    prerequisites: ["Mage", "Sorcery", "Cantrip Focus IV"],
                    flavorTest: "You can now critically cast on cantrips, but cannot trigger backlash on cantrips.",
                    abilities: [],
                },
                {
                    talentname: "Unstable Casting",
                    prerequisites: ["Mage", "Sorcery", "Inertia"],
                    flavorTest: "You critically cast on a 19-20, and trigger backlash on a 1-2.",
                    abilities: [],
                },
                {
                    talentname: "Unstable Casting II",
                    prerequisites: ["Mage", "Sorcery", "Unstable Casting"],
                    flavorTest: "You critically cast on a 18-20, and trigger backlash on a 1-3.",
                    abilities: [],
                },
                {
                    talentname: "Unstable Casting III",
                    prerequisites: ["Mage", "Sorcery", "Unstable Casting II"],
                    flavorTest: "You critically cast on a 17-20, and trigger backlash on a 1-4.",
                    abilities: [],
                },
                {
                    talentname: "Unstable Casting IV",
                    prerequisites: ["Mage", "Sorcery", "Unstable Casting III"],
                    flavorTest: "You critically cast on a 16-20, and trigger backlash on a 1-5.",
                    abilities: [],
                },
                {
                    talentname: "Unstable Casting V",
                    prerequisites: ["Mage", "Sorcery", "Unstable Casting IV"],
                    flavorTest: "Unstable Cast becomes an ability and you can declare if you are casting normally or using Unstable Cast.If you are casting normally, you crit on a 20 and backlash on a 1, unless you are carefully casting.",
                    abilities: [],
                },
                {
                    talentname: "Explosive Critical",
                    prerequisites: ["Mage", "Sorcery", "Sorcery 11"],
                    flavorTest: "Your cantrip crits deal critical damage as if they were a physical attack.",
                    abilities: [],
                },
                {
                    talentname: "Explosive Critical II",
                    prerequisites: ["Mage", "Sorcery", "Explosive Critical"],
                    flavorTest: "Your cantrip crits may also deal the same damage to one additional target that is within 5 ft of your target.",
                    abilities: [],
                },
                {
                    talentname: "Explosive Critical III",
                    prerequisites: ["Mage", "Sorcery", " Explosive Critical II"],
                    flavorTest: "Your cantrip crits cause your damage dice to explode. You may indefinitely reroll any damage dice that landed on their maximum possible damage(such as a 6 on a d6) and add that to the total damage.",
                    abilities: [],
                },
                {
                    talentname: "Inertia II",
                    prerequisites: ["Mage", "Sorcery", "Inertia II"],
                    flavorTest: "When you are the victim of a critical hit, you explode with your choice of fire, cold, or necrotic damage.Deal 1d10 + INT damage of that type to all creatures within 5 ft of you, including friendly creatures.",
                    abilities: [],
                },
                {
                    talentname: "Grand Sorcerer",
                    prerequisites: ["Mage", "Sorcery", "Capstone", "Sorcery 14"],
                    flavorTest: "You are a battle hardened sorcerer of great renown, capable of harnessing the destructive power of the Fundamental Wellspring to turn the tide of a battle.Generals and monarchs would pay high sums or large favors to earn your support in a conflict. Backlash no longer ends your turn, and you now regain 1 AP when you critically cast.",
                    abilities: [
                        {
                            abilityname: "Level 30",
                            abilitydescription: "You can spend 1 LUCK point to reroll all of your damage dice.",
                        },
                    ]
                },
            ]
        },
        {
            trackname: "Tome Wizard Track",
            trackdescription: "",
            talents: [
                {
                    talentname: "Awakened Spellbook",
                    prerequisites: ["Mage", "Tome Wizard", "Mage Entry"],
                    flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You can no longer be separated from your Spellbook as it becomes partially ethereal, gains limited sentience, and has the ability to hover nearby.In this form, the Awakened Spellbook cannot be targeted and occupies the same space as you. You gain + 1 to all your mental defenses.",
                    abilities: [],
                },
                {
                    talentname: "Spell Scribf",
                    prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook"],
                    flavorTest: "Your Spellbook can produce an enchanted vellum. You can cast a spell you know on this vellum, which causes it to become a spell scroll.While there is an active scroll, you can not cast that spell normally.Any creature can use this spell scroll to cast the spell using the required AP without expending SP.When cast, the vellum dissolves and you can cast the spell normally again. If the SPC of the spell is over 16, the user of the scroll must make an INT/ Arcana check after spending the required AP.The creature must beat a DC of 10 + (the spell’s SPC / 2). On a fail, the spell fizzles and the vellum dissolves. Your Spellbook can only produce one enchanted vellum a day, regaining the ability to do so after Taking a Rest.It cannot produce an enchanted vellum while there is another enchanted vellum or spell scroll available.",
                    abilities: [],
                },
                {
                    talentname: "Awakened Spellbook II",
                    prerequisites: ["Mage", "Tome Wizard", "Spell Scribe"],
                    flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. Your Awakened Spellbook can now occupy any space within 15 ft of you, and any spells that you cast can originate from you or the Awakened Spellbook.If you move more than 15 ft away, the book hovers back to occupy the same space as the caster automatically.It can move 15 ft per turn and moves at the end of your turn if you so desire. You gain another + 1 to your mental defenses.",
                    abilities: [],
                },
                {
                    talentname: "Spell Scribe II",
                    prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook II"],
                    flavorTest: "You can now have two spell scrolls or enchanted vellums active at a time.Your Spellbook still only produces one per day",
                    abilities: [],
                },
                {
                    talentname: "Tome Familiar",
                    prerequisites: ["Mage", "Tome Wizard", "Spell Scribe II"],
                    flavorTest: "Your Awakened Spellbook can now be 30 ft from you without being recalled to the space you occupy.It can now fulfill the Line of Sight and Line of Effect requirements for spells that originate from it. You must still perform any gesture or verbal components.",
                    abilities: [],
                },
                {
                    talentname: "Awakened Spellbook III",
                    prerequisites: ["Mage", "Tome Wizard", "Tome Familiar"],
                    flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You can imbue the mote of a spell that you captured through the Steal Spell spell into your spellbook, instead of casting it.When imbued in this way, that spell becomes an Arcane spell for you until you replace it with another stolen spell.",
                    abilities: [],
                },
                {
                    talentname: "Tome Familiar II",
                    prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook III"],
                    flavorTest: "Your Awakened Spellbook can now be 120 ft from you without being recalled to the space you occupy, and can hover up to 30 ft in the air. Gain the Joint Cast ability.",
                    abilities: [],
                },
                {
                    abilityname: "Joint Cast",
                    abilitydescription: " When you are casting a cantrip, your Awakened Spellbook can duplicate that cantrip on a target of its own, or the same target, assuming all other conditions of the cantrip are met. (3 / Rest).",
                },
                {
                    talentname: "Spellstealing",
                    prerequisites: ["Mage", "Tome Wizard", "Tome Familiar II"],
                    flavorTest: "You gain an additional slot for stolen spells (Currently 2 total from this track).",
                    abilities: [],
                },
                {
                    talentname: "Spell Thief",
                    prerequisites: ["Mage", "Tome Wizard", "Spellstealing"],
                    flavorTest: "You gain a +5 bonus to your Steal Spell rolls.",
                    abilities: [],
                },
                {
                    talentname: "Awakened Spellbook IV",
                    prerequisites: ["Mage", "Tome Wizard", "Spell Thief"],
                    flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You gain another + 1 to your mental defenses. You can now cast multiple Arcane Rituals: 2 / Rest.",
                    abilities: [],
                },

                {
                    talentname: "Spellstealing II",
                    prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook IV"],
                    flavorTest: "You gain an additional slot for Stolen Spells (Currently three total from this track).",
                    abilities: [],
                },
                {
                    talentname: "Spell Scribe III",
                    prerequisites: ["Mage", "Tome Wizard", "Spellstealing II"],
                    flavorTest: "The roll others must make to use your scroll can no longer be higher than 15.",
                    abilities: [],
                },
                {
                    talentname: "Spellstealing III",
                    prerequisites: ["Mage", "Sorcery", "Spell Scribe III"],
                    flavorTest: "You learn one of the following of your choice: Divine ritual Occult ritual Primal invocation Psionic invocation Psionic meditation If your choice has a tier or power requirement, roll an INT/ Arcana check, the DC of which is 10 + double the Tier if Primal or Psionic, or 10 + the Divine or Occult Power requirement if Divine or Occult.If you fail this check, you may never attempt to cast it again, and must make a new selection in its place. This spot in your spellbook does not count towards your three Stolen Spell slots.",
                    abilities: [],
                },
                {
                    talentname: "Awakened Spellbook V",
                    prerequisites: ["Mage", "STome Wizard", "Spellstealing III"],
                    flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You gain another + 1 to your mental defenses. You can now cast more Arcane Rituals: 3 / Rest.",
                    abilities: [],
                },
                {
                    talentname: "Tome Wizard",
                    prerequisites: ["Mage", "Tome Wizard", "Capstone", "Awakened Spellbook V"],
                    flavorTest: "Your spellbook fully awakens, gaining its own personality. It is intensely loyal to you while you treat it well. You can use your Grimoire spell on it freely for the purposes of storing information, targeting a page instead, and you can choose whether or not you forget the information stored inside. Additionally, you gain another slot for Stolen Spells(four total) and an additional enchanted vellum(three total) ",
                    abilities: [
                        {
                            abilityname: "Level 30",
                            abilitydescription: "If you die, your book will live on and pass the knowledge scribed inside to whomever it deems worthy",
                        },]
                },
            ]
        },
    ]
};
