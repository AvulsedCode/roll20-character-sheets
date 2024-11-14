const Mage =
{
    "StackName": "Mage",
    "ShortDescription": "From studious, academic wizards to chaotic sorcerers, mages have a profound ability to manipulate the arcane.",
    "Quote": {
        "phrase": "Magic is a wondrous gift. Why exert unnecessary effort when a flick of the wrist or a glance of the eye can accomplish the same?",
        "quotedsname": "Finneas Alistair Laith",
        "title": "absentminded scholar",
    },
    "LongDescription": "You have always had a spark of talent within you, perhaps the ability to literally conjure forth sparks when agitated or excited.Ever curious about the world and the power within you, you have never shied away from experimentation with your magical powers.In your youth this caused your family endless grief and singed eyebrows.Now, having mastered the basics of arcane magic, you seek to continue your study and uncover ever deeper mysteries of the Fundamental Wellspring of Magic. Developing skill as an arcane caster necessitates that you maintain Attunation with the Fundamental Wellspring. This entails different practices for different casters, so in your case it might involve reading complex arcane texts or meditating intensely on the metaphysics or astrophysics of the universe.Be proactive, for if you become lackadaisical in maintaining Attunation, your skill will gradually atrophy, and you might lose your arcane ability altogether if you do not diligently cultivate this Attunation.",

    "EntryTalent": {
        "prerequisites": ["Class Entry", "Mage", "Character Level 2"],
        "FlavorText": "When you take this entry talent, you gain the following abilities.",
        "abilities": [
            {
                "abilityname": "Learned",
                "abilitydescription": "Gain +6 Skill Points, which you can spend on any skills with the INT tag.",
            },
            {
                "abilityname": "Student of the Arcane",
                "abilitydescription": "Gain the Student of the ArcaneTalent from the arcane stack if you did not already have it. INT is your Magic Attribute.",
            },
            {
                "abilityname": "Arcane Power",
                "abilitydescription": "Each time you level up and spend your Talent Point on a mage talent, gain + 5 SP and + 1 Arcane Power.",
            },
            {
                "abilityname": "Focus",
                "abilitydescription": "Choose one of the nine functions of magic. This choice grants you a special bonus when you cast magic of that function.",
            },
            {
                "abilityname": "Alchemy",
                "abilitydescription": "You can spend 10 minutes changing and simply shaping 1 ft 3 of a raw material to your needs.This could be making a branch into a crowbar, or a crowbar into a long wire, or a long wire into a bundle of tinder, but cannot create complex objects or machines.The material can be refined(such as smelted ore or cut timber), but cannot be crafted(such as a sword or a door).Even the most talented Alchemists have not discovered how to transmute silver, gold, or diamond, and thus those materials are unavailable for this ability.",
            },
            {
                "abilityname": "Altering",
                "abilitydescription": "Altering spells cost you 1 fewer AP (min 1).",
            },
            {
                "abilityname": "Divining",
                "abilitydescription": "You can now spend 10 minutes meditating, after which you can see, hear, and smell from one of your arcane Signatures as if you were present in a vacant space within 5 ft of its location for 1 minute.This magic consumes and dispels the Signature after it is used.",
            },
            {
                "abilityname": "Enchanting",
                "abilitydescription": "When you cast a spell that has the Enchanting function and Charms or Frightens a creature, multiply the duration of the effects by 1.5.",
            },
            {
                "abilityname": "Evoking",
                "abilitydescription": "When you deal damage with Evoking magic, add additional damage equal to ½ your level. (END / Rest).",
            },
            {
                "abilityname": "Illusory",
                "abilitydescription": "Creatures attempting to identify your illusions have a - 2 to their die rolls.",
            },
            {
                "abilityname": "Necromancy",
                "abilitydescription": "When you would be reduced to 0 HP, you can sacrifice an undead under your control to instead have 1 HP.The undead in question is immediately destroyed.",
            },
            {
                "abilityname": "Summoning",
                "abilitydescription": "Creatures that you summon gain additional maximum HP equal to your Arcane Power Level.",
            },
            {
                "abilityname": "Warding",
                "abilitydescription": "When you cast Warding magic that increases any of a creature’s Defenses, that creature’s AR increases by an additional + 1.",
            },
        ],
    },
    "Tracks": [
        {
            "TrackName": "Arcane Weaving",
            "TrackDescription": "",
            "Talents": [
                {
                    "TalentName": "Arcane Weaver",
                    "prerequisites": ["Mage", "Arcane Weaving", "Mage Entry"],
                    "FlavorText": "Spells with the metamagic tag cost you 4 fewer SP to cast.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Sculptor",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    "FlavorText": "Sculpt Spell costs you ½ the SP cost to cast. This replaces your Arcane Weaver ability.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell sculptor II",
                    "prerequisites": ["Mage", "Arcane Weaving", "Spell Sculptor"],
                    "FlavorText": "Sculpt Spell costs no SP to upcharge.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell sculptor III",
                    "prerequisites": ["Mage", "Arcane Weaving", "Spell sculptor II"],
                    "FlavorText": "Sculpt Spell costs 1 SP to cast, and no SP to upcharge.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Sniper",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    "FlavorText": "Extend Spell costs you ½ the SP to cast. This replaces your Arcane Weaver ability.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Snipe II",
                    "prerequisites": ["Mage", "Arcane Weaving", "Spell Sniper"],
                    "FlavorText": "Upcharging Extend Spell becomes +2 SP per 15 ft.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mote Expert",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    "FlavorText": "Delay Spell costs you ½ the SP to cast. This replaces your Arcane Weaver ability.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mote Expert II",
                    "prerequisites": ["Mage", "Arcane Weaving", "Mote Expert"],
                    "FlavorText": "You can now cause a mote created by Delay Spell to be invisible, and leave it in a space you are occupying.After you move out of that space, it will trigger upon another creature touching it.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mote Expert III",
                    "prerequisites": ["Mage", "Arcane Weaving", "Mote Expert II"],
                    "FlavorText": "You can no longer lose control of your mote and activate its magic prematurely while you have only one mote on your person.",
                    "abilities": [],
                },
                {
                    "TalentName": "Empower Spell Expert",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver"],
                    "FlavorText": "Your Empower Spell’s APC is lowered by 2.",
                    "abilities": [],
                },
                {
                    "TalentName": "Arcane Weaver II ",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver", "Arcane Weaving 5"],
                    "FlavorText": "Gain Metamagic Points equal to your INT. You can use these to cast Metamagic spells at a rate of 2 Metamagic Points per spell in place of SP. You regain all expended Metamagic points when you Take a Rest. If you spend Metamagic Points with a talent from the arcane weaving track in the mage stack, you must declare the expenditure before you cast your spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Spell point Cost",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend Metamagic Points to reduce a spell’s SPC by 2 SP per Metamagic Point.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Hasten",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend Metamagic Points to reduce a spell’s APC at a rate of 1 Metamagic Point per AP(min 1).",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Overclock",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend 1 Metamagic Point to halve the SPC of upcharging a spell. You may not use Metamagic Points on other Metamagic if you chose to spend a point in this manner, but you may halve the cost(min 1) multiple times.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Maximize",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend 6 Metamagic Points to maximize the damage of a spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Overcome",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend 1 Metamagic Point to ignore a creature’s Resist.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Humane Spell",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend 1 Metamagic Point to modify a spell to deal psychic damage and become nonlethal.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Leeching",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend 1 Metamagic Point to regain HP equal to ½.the necrotic damage you deal with the modified spell, or 2 Metamagic Points to heal for all the necrotic damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Duration",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may extend a spell with a duration of 1 minute or longer.It lasts for 1 additional minute per Metamagic Point you expend.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic:Conjuring",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may spend 2 Metamagic Points to delay Conjuring for one turn.If you do not resume conjuring at the start of your next turn, you lose the spell as if your conjuring were interrupted.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic Expert",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Weaver II"],
                    "FlavorText": "You may regain expended Metamagic Points when you Recoup. (1 / Rest) ",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic Expert II",
                    "prerequisites": ["Mage", "Arcane Weaving", "Metamagic Expert"],
                    "FlavorText": "You may regain expended Metamagic Points when you Catch your Breath. (1 / Rest) ",
                    "abilities": [],
                },
                {
                    "TalentName": "Arcane Versatility",
                    "prerequisites": ["Mage", "Arcane Weaving", "MArcane Weaver II"],
                    "FlavorText": "You may trade SP for Metamagic Points at a rate of 10 SP per 1 Metamagic Point, or Metamagic Points for SP at a rate of 1 Metamagic Point for 5 SP.",
                    "abilities": [],
                },
                {
                    "TalentName": "Metamagic Caster",
                    "prerequisites": ["Mage", "Arcane Weaving", "Capstone", "Arcane Weaving 14"],
                    "FlavorText": "You weave magic in ways most cannot even comprehend, manipulating the leylines of the Fundamental Wellspring and bending them to your will, even altering reality itself. You gain 6 additional Metamagic Points(your total is now INT+ 6).Gain Strand of Metamagic.",
                    "abilities": [
                        {
                            "abilityname": "Strand of Metamagic",
                            "abilitydescription": "You may spend X Metamagic Points to increase your d20 roll by X. You may spend 1 Reactive AP to spend X Metamagic Points and decrease the d20 roll of a hostile creature within 40 ft of you by X.",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "The final cap for your INT increases from 12 to 14.",
                        },]
                },
            ]
        },
        {
            "TrackName": "Archmage Track",
            "TrackDescription": "",
            "Talents": [
                {
                    "TalentName": "Arcane Inetlilectual",
                    "prerequisites": ["Mage", "Arcane Weaving", "Mage Entry"],
                    "FlavorText": "You dedicate yourself to scholarly pursuits, the study of arcane magics, and the mastery of the Fundamental Wellspring. You may now only take talents from the mage and srcane stacks. You immediately learn all arcane cantrips and can add your INT to damage dealt by cantrips.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Alchemy",
                    "prerequisites": ["Mage", "Arcane Weaving", "Arcane Intellectual"],
                    "FlavorText": "You gain the Alchemy Focus. If you already had the Alchemy Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Alchemy II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Alchem"],
                    "FlavorText": "Your Alchemy creation can now be up to 5 ft by 15 ft and be crafted objects that do not feature moving parts(such as a ladder or sword). You must have at least 4 Skill Points in the associated skill to create in this way(Such as carpentry for a ladder or blacksmithing for a sword).The value of crafted creations can be no higher than the value of the materials.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Alchemy III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Alchemy II"],
                    "FlavorText": "Your Alchemy Creation can now be 15 ft wide, tall, and long.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Alchemy IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Alchemy III"],
                    "FlavorText": "Your Alchemy Creation can now feature moving parts such as doors or windows.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Alchemy V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Alchemy IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Alchemy tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Altering",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Altering Focus. If you already had the Altering Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Altering II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Altering"],
                    "FlavorText": "Your Arcane Swap spell can now be cast on a willing, friendly creature also in range that is no more than one size larger or smaller than the target of the swap, instead of being cast on yourself.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Altering III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Altering II"],
                    "FlavorText": "Your Arcane Swap spell now has no minimum size, and can be cast on objects that are no larger than one Size larger than you, or twice your weight.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Altering IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Altering III"],
                    "FlavorText": "You can no longer be teleported against your will.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Altering V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Altering IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Altering tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Divining",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Divining Focus. If you already had the Divining Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Divining II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Divining"],
                    "FlavorText": "You can now use your Divining feature on a Signature twice before it is dispelled.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Divining III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Divining II"],
                    "FlavorText": "Your Signatures are no longer dispelled by your Divining feature.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Divining IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Divining III"],
                    "FlavorText": "You may now teleport yourself to a Signature by meditating on one of your Signatures for 10 minutes.This dispels the Signature. (2 / Rest).",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Divining V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Divining IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Divining tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Enchanting",
                    "prerequisites": ["Mage", " Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Enchanting Focus. If you already had the Enchanting Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Enchanting II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Enchanting"],
                    "FlavorText": "An object that has your Signature costs 0 SP to possess with the Possess Object spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Enchanting III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Enchanting II"],
                    "FlavorText": "Using your Unravel Magic ability always costs ½ the SPC of the spell you are targeting if it is an Enchanting spell, regardless of its source.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Enchanting IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Enchanting III"],
                    "FlavorText": "If you discover Enchantment magic using the Sense Magic spell, you learn who the caster is, provided that you already know their true name and they are within 1 mile of you.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Enchanting V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Enchanting IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Enchanting tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Evoking",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Evoking Focus. If you already had the Evoking Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Evoking II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Evoking"],
                    "FlavorText": "You may now add additional damage equal to your level. This replaces your original Evoking Focus ability. (END / Rest) ",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Evoking III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Evoking II"],
                    "FlavorText": "You may add your INT to any damage rolls you make when using Evoking cantrips, chants, or prayers.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Evoking IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Evoking III"],
                    "FlavorText": "When you cast an Evoking spell, you may gain additional SP by gaining Death Points.For each Death Point you gain, you gain 10 SP. You lose any excess SP that you gained from this feature.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Evoking V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Evoking IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Evoking tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Illusory",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Illusory Focus. If you already had the Illusory Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Illusory II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Illusory"],
                    "FlavorText": "You may create one Illusory Duplicate of yourself when you cast your first Illusory spell after Taking a Rest.When you are subject to physical damage, the attacker must roll an even number to hit you.If they roll an odd number, one of your duplicates is destroyed instead.Regain the ability to create Illusory Duplicates when you complete a Rest.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Illusory III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Illusory II"],
                    "FlavorText": "Your Illusory Duplicates ability creates two duplicates.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Illusory IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Illusory III"],
                    "FlavorText": "Your Illusory Duplicates ability creates three duplicates.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Illusory V",
                    "prerequisites": ["Mage", "Archmage", "Illusory IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Illusory tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Necromancy",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Necromancy Focus. If you already had the Necromancy Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Necromancy II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Necromancy"],
                    "FlavorText": "The duration of the Raise Skeleton spell is now Indefinite, but your maximum SP are reduced by 16 for each active skeleton under your control. You can no longer upcharge Raise Skeleton.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Necromancy III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Necromancy II"],
                    "FlavorText": "Your maximum SP are now reduced by only 8 for each active skeleton under your control.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Necromancy IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Necromancy III"],
                    "FlavorText": "Your maximum SP are now reduced by only 4 for each active skeleton under your control.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Necromancy V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Necromancy IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell.Each of these choices must have the Necromancy tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Summoning",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Summoning Focus. If you already had the Summoning Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Summoning II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Summoning"],
                    "FlavorText": "Creatures you create using a Summoning spell add ½ your INT to their attack rolls.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Summoning III",
                    "prerequisites": ["Mage", "Archmage", "Mage - Summoning II"],
                    "FlavorText": "Creatures you create using a Summoning spell add ½ your INT to their damage rolls.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Summoning IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Summoning III"],
                    "FlavorText": "Creatures you create using a Summoning spell add your INT to their attack and damage rolls.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Summoning V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Summoning IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Summoning tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Warding",
                    "prerequisites": ["Mage", "Archmage", "Arcane Intellectual"],
                    "FlavorText": "You gain the Warding Focus. If you already had the Warding Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Warding II",
                    "prerequisites": ["Mage", "Archmage", "Mage - Warding"],
                    "FlavorText": "When you cast Mage Armor on yourself, and would be the victim of Massive Damage(see p. 328) you can reduce that damage by ½.If you do, your Mage Armor is dispelled.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Warding III",
                    "prerequisites": ["Mage", "Archmage", " Mage - Warding II"],
                    "FlavorText": "Your Mage Armor now increases all defenses by +4. This replaces your original Warding Focus ability.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Warding IV",
                    "prerequisites": ["Mage", "Archmage", "Mage - Warding III"],
                    "FlavorText": "Your Mage Armor can no longer be dispelled by others, and increases all defenses by + 5.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mage:Warding V",
                    "prerequisites": ["Mage", "Archmage", "Mage - Warding IV"],
                    "FlavorText": "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Warding tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "High Mage",
                    "prerequisites": ["Mage", "Archmage", "Arcane 14"],
                    "FlavorText": "You are renowned as a highly skilled arcane caster, and many hopefuls will seek you out to try to earn your favor as an instructor. You may regain half your SP when you Recoup. (1 / Rest).",
                    "abilities": [],
                },
                {
                    "TalentName": "Archmage",
                    "prerequisites": ["Mage", "Archmage", "Capstone", "High Mage", ", Arcane 29"],
                    "FlavorText": "Your spells can no longer be dispelled, identified, detected, scryed on, or targeted in any way by a caster with a level or Monster Level below your Character Level.Even then, a creature can only target your spells if they spend at least 90 SP or expend the equivalent of 90 SP through innate casting.",
                    "abilities": [],
                },
            ]
        },
        {
            "TrackName": "Sorcery Track",
            "TrackDescription": "",
            "Talents": [
                {
                    "TalentName": "Sorcery Focus",
                    "prerequisites": ["Mage", "Sorcery", "Mage Entry"],
                    "FlavorText": "You can no longer take Backlash damage that is higher than your current Character Level while you have your focus on your person. You take damage equal to the Spell’s SPC(min 1) or equal to your level, whichever is lower.",
                    "abilities": [],
                },
                {
                    "TalentName": "Careful Casting",
                    "prerequisites": ["Mage", "Sorcery", " Sorcery Focus", "Wellspring Tap"],
                    "FlavorText": "By acting more carefully, you trigger backlash less frequently.When you would trigger backlash, you can now roll a 1d20, and on a 10 or higher, the backlash does not occur.However, your critical casts now only reduce the SPC by 5, instead of 10.",
                    "abilities": [],
                },
                {
                    "TalentName": "Careful Casting II",
                    "prerequisites": ["Mage", "Sorcery", "Careful Casting"],
                    "FlavorText": "You can no longer trigger backlash, and your critical casts do not cost fewer SP or restore SP.",
                    "abilities": [],
                },
                {
                    "TalentName": "SCareful Casting III",
                    "prerequisites": ["Mage", "Sorcery", "Careful Casting II"],
                    "FlavorText": "You may now choose if you are carefully casting spells or not.When you use Careful Cast, you cannot trigger backlash and your critical casts do not cost fewer SP. You must declare this before rolling.",
                    "abilities": [],
                },
                {
                    "TalentName": "Wellspring Tap",
                    "prerequisites": ["Mage", "Sorcery", "Sorcery Focus", "Careful Casting"],
                    "FlavorText": "If you critically cast on a spell that costs fewer than 5 SP, you regain that amount of SP.",
                    "abilities": [],
                },
                {
                    "TalentName": "Wellspring Tap II",
                    "prerequisites": ["Mage", "Sorcery", "Wellspring Tap"],
                    "FlavorText": "If you critically cast on a spell that costs fewer than 10 SP, you regain that amount of SP.",
                    "abilities": [],
                },
                {
                    "TalentName": "Wellspring Tap III",
                    "prerequisites": ["Mage", "Sorcery", "Wellspring Tap II"],
                    "FlavorText": "You regain 1d4+LUCK HP when you critically cast.",
                    "abilities": [],
                },
                {
                    "TalentName": "Careful Casting -Cantrips",
                    "prerequisites": ["Mage", "Sorcery", "Sorcery 4"],
                    "FlavorText": "You can now carefully cast cantrips. You must declare if you are carefully casting before you roll. You gain no benefit from critically hitting on a carefully cast cantrip, and cannot trigger backlash when doing so.",
                    "abilities": [],
                },
                {
                    "TalentName": "Inertia",
                    "prerequisites": ["Mage", "Sorcery", " Careful Casting - Cantrips"],
                    "FlavorText": "When you are the victim of a critical hit or critical cast, you regain 1d10 SP.",
                    "abilities": [],
                },
                {
                    "TalentName": "Cantrip Focus",
                    "prerequisites": ["Mage", "Sorcery", "Inertia"],
                    "FlavorText": "When you are carefully casting a cantrip, you gain TA.",
                    "abilities": [],
                },
                {
                    "TalentName": "Cantrip Focus II",
                    "prerequisites": ["Mage", "Sorcery", " Cantrip Focus"],
                    "FlavorText": "When you are carefully casting a cantrip, you gain another TA(2 total from this feature).",
                    "abilities": [],
                },
                {
                    "TalentName": "Cantrip Focus III",
                    "prerequisites": ["Mage", "Sorcery", "Cantrip Focus II"],
                    "FlavorText": "When you are carefully casting a cantrip, you gain another TA(3 total from this feature).",
                    "abilities": [],
                },
                {
                    "TalentName": "Cantrip Focus IV",
                    "prerequisites": ["Mage", "Sorcery", "Cantrip Focus III"],
                    "FlavorText": "You can now add your half your INT to your cantrip damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Cantrip Focus V",
                    "prerequisites": ["Mage", "Sorcery", "Cantrip Focus IV"],
                    "FlavorText": "You can now critically cast on cantrips, but cannot trigger backlash on cantrips.",
                    "abilities": [],
                },
                {
                    "TalentName": "Unstable Casting",
                    "prerequisites": ["Mage", "Sorcery", "Inertia"],
                    "FlavorText": "You critically cast on a 19-20, and trigger backlash on a 1-2.",
                    "abilities": [],
                },
                {
                    "TalentName": "Unstable Casting II",
                    "prerequisites": ["Mage", "Sorcery", "Unstable Casting"],
                    "FlavorText": "You critically cast on a 18-20, and trigger backlash on a 1-3.",
                    "abilities": [],
                },
                {
                    "TalentName": "Unstable Casting III",
                    "prerequisites": ["Mage", "Sorcery", "Unstable Casting II"],
                    "FlavorText": "You critically cast on a 17-20, and trigger backlash on a 1-4.",
                    "abilities": [],
                },
                {
                    "TalentName": "Unstable Casting IV",
                    "prerequisites": ["Mage", "Sorcery", "Unstable Casting III"],
                    "FlavorText": "You critically cast on a 16-20, and trigger backlash on a 1-5.",
                    "abilities": [],
                },
                {
                    "TalentName": "Unstable Casting V",
                    "prerequisites": ["Mage", "Sorcery", "Unstable Casting IV"],
                    "FlavorText": "Unstable Cast becomes an ability and you can declare if you are casting normally or using Unstable Cast.If you are casting normally, you crit on a 20 and backlash on a 1, unless you are carefully casting.",
                    "abilities": [],
                },
                {
                    "TalentName": "Explosive Critical",
                    "prerequisites": ["Mage", "Sorcery", "Sorcery 11"],
                    "FlavorText": "Your cantrip crits deal critical damage as if they were a physical attack.",
                    "abilities": [],
                },
                {
                    "TalentName": "Explosive Critical II",
                    "prerequisites": ["Mage", "Sorcery", "Explosive Critical"],
                    "FlavorText": "Your cantrip crits may also deal the same damage to one additional target that is within 5 ft of your target.",
                    "abilities": [],
                },
                {
                    "TalentName": "Explosive Critical III",
                    "prerequisites": ["Mage", "Sorcery", " Explosive Critical II"],
                    "FlavorText": "Your cantrip crits cause your damage dice to explode. You may indefinitely reroll any damage dice that landed on their maximum possible damage(such as a 6 on a d6) and add that to the total damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Inertia II",
                    "prerequisites": ["Mage", "Sorcery", "Inertia II"],
                    "FlavorText": "When you are the victim of a critical hit, you explode with your choice of fire, cold, or necrotic damage.Deal 1d10 + INT damage of that type to all creatures within 5 ft of you, including friendly creatures.",
                    "abilities": [],
                },
                {
                    "TalentName": "Grand Sorcerer",
                    "prerequisites": ["Mage", "Sorcery", "Capstone", "Sorcery 14"],
                    "FlavorText": "You are a battle hardened sorcerer of great renown, capable of harnessing the destructive power of the Fundamental Wellspring to turn the tide of a battle.Generals and monarchs would pay high sums or large favors to earn your support in a conflict. Backlash no longer ends your turn, and you now regain 1 AP when you critically cast.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "You can spend 1 LUCK point to reroll all of your damage dice.",
                        },
                    ]
                },
            ]
        },
        {
            "TrackName": "Tome Wizard Track",
            "TrackDescription": "",
            "Talents": [
                {
                    "TalentName": "Awakened Spellbook",
                    "prerequisites": ["Mage", "Tome Wizard", "Mage Entry"],
                    "FlavorText": "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You can no longer be separated from your Spellbook as it becomes partially ethereal, gains limited sentience, and has the ability to hover nearby.In this form, the Awakened Spellbook cannot be targeted and occupies the same space as you. You gain + 1 to all your mental defenses.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Scribf",
                    "prerequisites": ["Mage", "Tome Wizard", "Awakened Spellbook"],
                    "FlavorText": "Your Spellbook can produce an enchanted vellum. You can cast a spell you know on this vellum, which causes it to become a spell scroll.While there is an active scroll, you can not cast that spell normally.Any creature can use this spell scroll to cast the spell using the required AP without expending SP.When cast, the vellum dissolves and you can cast the spell normally again. If the SPC of the spell is over 16, the user of the scroll must make an INT/ Arcana check after spending the required AP.The creature must beat a DC of 10 + (the spell’s SPC / 2). On a fail, the spell fizzles and the vellum dissolves. Your Spellbook can only produce one enchanted vellum a day, regaining the ability to do so after Taking a Rest.It cannot produce an enchanted vellum while there is another enchanted vellum or spell scroll available.",
                    "abilities": [],
                },
                {
                    "TalentName": "Awakened Spellbook II",
                    "prerequisites": ["Mage", "Tome Wizard", "Spell Scribe"],
                    "FlavorText": "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. Your Awakened Spellbook can now occupy any space within 15 ft of you, and any spells that you cast can originate from you or the Awakened Spellbook.If you move more than 15 ft away, the book hovers back to occupy the same space as the caster automatically.It can move 15 ft per turn and moves at the end of your turn if you so desire. You gain another + 1 to your mental defenses.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Scribe II",
                    "prerequisites": ["Mage", "Tome Wizard", "Awakened Spellbook II"],
                    "FlavorText": "You can now have two spell scrolls or enchanted vellums active at a time.Your Spellbook still only produces one per day",
                    "abilities": [],
                },
                {
                    "TalentName": "Tome Familiar",
                    "prerequisites": ["Mage", "Tome Wizard", "Spell Scribe II"],
                    "FlavorText": "Your Awakened Spellbook can now be 30 ft from you without being recalled to the space you occupy.It can now fulfill the Line of Sight and Line of Effect requirements for spells that originate from it. You must still perform any gesture or verbal components.",
                    "abilities": [],
                },
                {
                    "TalentName": "Awakened Spellbook III",
                    "prerequisites": ["Mage", "Tome Wizard", "Tome Familiar"],
                    "FlavorText": "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You can imbue the mote of a spell that you captured through the Steal Spell spell into your spellbook, instead of casting it.When imbued in this way, that spell becomes an Arcane spell for you until you replace it with another stolen spell.",
                    "abilities": [],
                },
                {
                    "TalentName": "Tome Familiar II",
                    "prerequisites": ["Mage", "Tome Wizard", "Awakened Spellbook III"],
                    "FlavorText": "Your Awakened Spellbook can now be 120 ft from you without being recalled to the space you occupy, and can hover up to 30 ft in the air. Gain the Joint Cast ability.",
                    "abilities": [],
                },
                {
                    "abilityname": "Joint Cast",
                    "abilitydescription": " When you are casting a cantrip, your Awakened Spellbook can duplicate that cantrip on a target of its own, or the same target, assuming all other conditions of the cantrip are met. (3 / Rest).",
                },
                {
                    "TalentName": "Spellstealing",
                    "prerequisites": ["Mage", "Tome Wizard", "Tome Familiar II"],
                    "FlavorText": "You gain an additional slot for stolen spells (Currently 2 total from this track).",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Thief",
                    "prerequisites": ["Mage", "Tome Wizard", "Spellstealing"],
                    "FlavorText": "You gain a +5 bonus to your Steal Spell rolls.",
                    "abilities": [],
                },
                {
                    "TalentName": "Awakened Spellbook IV",
                    "prerequisites": ["Mage", "Tome Wizard", "Spell Thief"],
                    "FlavorText": "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You gain another + 1 to your mental defenses. You can now cast multiple Arcane Rituals: 2 / Rest.",
                    "abilities": [],
                },

                {
                    "TalentName": "Spellstealing II",
                    "prerequisites": ["Mage", "Tome Wizard", "Awakened Spellbook IV"],
                    "FlavorText": "You gain an additional slot for Stolen Spells (Currently three total from this track).",
                    "abilities": [],
                },
                {
                    "TalentName": "Spell Scribe III",
                    "prerequisites": ["Mage", "Tome Wizard", "Spellstealing II"],
                    "FlavorText": "The roll others must make to use your scroll can no longer be higher than 15.",
                    "abilities": [],
                },
                {
                    "TalentName": "Spellstealing III",
                    "prerequisites": ["Mage", "Sorcery", "Spell Scribe III"],
                    "FlavorText": "You learn one of the following of your choice: Divine ritual Occult ritual Primal invocation Psionic invocation Psionic meditation If your choice has a tier or power requirement, roll an INT/ Arcana check, the DC of which is 10 + double the Tier if Primal or Psionic, or 10 + the Divine or Occult Power requirement if Divine or Occult.If you fail this check, you may never attempt to cast it again, and must make a new selection in its place. This spot in your spellbook does not count towards your three Stolen Spell slots.",
                    "abilities": [],
                },
                {
                    "TalentName": "Awakened Spellbook V",
                    "prerequisites": ["Mage", "STome Wizard", "Spellstealing III"],
                    "FlavorText": "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You gain another + 1 to your mental defenses. You can now cast more Arcane Rituals: 3 / Rest.",
                    "abilities": [],
                },
                {
                    "TalentName": "Tome Wizard",
                    "prerequisites": ["Mage", "Tome Wizard", "Capstone", "Awakened Spellbook V"],
                    "FlavorText": "Your spellbook fully awakens, gaining its own personality. It is intensely loyal to you while you treat it well. You can use your Grimoire spell on it freely for the purposes of storing information, targeting a page instead, and you can choose whether or not you forget the information stored inside. Additionally, you gain another slot for Stolen Spells(four total) and an additional enchanted vellum(three total) ",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "If you die, your book will live on and pass the knowledge scribed inside to whomever it deems worthy",
                        },]
                },
            ]
        },
    ]
};
