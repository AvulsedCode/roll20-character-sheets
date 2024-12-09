const cleric = {
    "TalentName": "Cleric",
    "ShortDescription": "Devotees of one or more gods, clerics use divine magic and holy power to achieve their gods’ instructions.",
    "Quote": {
        "phrase": "Each soul is a unique thread in a divine tapestry.It is my sacred duty to nourish these threads, as they are gifts given by the gods themselves.I tend especially to those threads that are frayed and in need of repairs.",
        "quotedsname": "Marcus Luxxor",
        "title": "disciple of Tovare",
    },
    "LongDescription": "Having been raised in the orbit of a great religious order, piety is in your blood.As a child you strove to give alms and help the needy whenever you could manage. You sought out the wise counsel of the priests and clergy in your town, and you took their teachings to heart, meditating on the precepts of your deities both day and night.Now, as a righteous pillar of your religious community, you continue to follow the path you began as a child: in all that you do, you seek to venerate your gods and enact their will on the world around you. You might pursue many clerical studies or focus your mind and soul upon mastering a single discipline, becoming an expert healer, righteous combatant, dedicated scholar, or a blend thereof.Regardless, you always have your divine icon at your side, a holy depiction of your god or your tenets.Your divine icon serves both as a moral anchor for you and connects you to deities that bless you with vestiges of holy authority",

    "EntryTalent": {
        "prerequisites": ["Class Entry", "Cleric", "Character Level 2"],
        "FlavorText": "When you take this entry talent, you gain the following abilities.",
        "abilities": [
            {
                "abilityname": "Devotee",
                "abilitydescription": " Gain the Disciple of the Divine talent from the divine stack if you did not already have it.CHA is your magic attribute.",
            },
            {
                "abilityname": "Divine Ward",
                "abilitydescription": "Spend 1 Reactive AP when an ally within 30 ft of you is attacked to increase that ally’s AR by + 2 until the start of that ally’s next turn.",
            },
            {
                "abilityname": "Divine Icon",
                "abilitydescription": "You gain a special Divine Icon depicting a deity or moment of religious significance.Choose one deity. That deity will have a list of three Icons.Gain one Icon ability whose prerequisite is only that you have access to that Icon.",
            },
            {
                "abilityname": "Divine Power",
                "abilitydescription": "Each time you level up and spend your talent point on a cleric talent, you gain + 5 SP and + 1 Divine Power",
            },
        ]

    },
    "Tracks": [
        {
            "TrackName": "Exorcist",
            "TrackDescription": "Stronger of will than your average clergyperson or preacher, you might make it your life’s mission to stare down the darkest demons of humanity and draw them out of unfortunate souls.",
            "Talents": [
                {
                    "TalentName": "Sense Planar",
                    "prerequisites": ["Cleric", "Exorcist", " Cleric Entry"],
                    "FlavorText": "Gain the Sense Planar ability.",
                    "abilities": [
                        {
                            "abilityname": "Sense Planar",
                            "abilitydescription": "You sense the presence of avadri, celestial, eldritch, fae, and fiends within 1 mile of you. You sense their exact numbers and distance from you. You cannot sense their exact identities. You can maintain this sense for up to 10 mins if you do nothing else other than non- strenuous walking, talking, or light activity. (2 / Rest) ",
                        },
                    ]
                },
                {
                    "TalentName": "Divine Ward II",
                    "prerequisites": ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
                    "FlavorText": "Your Divine Ward boosts your ally’s AR and physical defenses for the duration.",
                    "abilities": []
                },
                {
                    "TalentName": "Distant Ward",
                    "prerequisites": ["Cleric", "Exorcist", "Divine Ward II", "Divine Shield"],
                    "FlavorText": "The range of your Divine Ward increases by +30 ft.",
                    "abilities": []
                },
                {
                    "TalentName": "Divine Shield",
                    "prerequisites": ["Cleric", "Exorcist", "Divine Ward II", "Distant Ward"],
                    "FlavorText": "Your Divine Ward adds an additional +1 to your target creature’s relevant defenses.",
                    "abilities": []
                },
                {
                    "TalentName": "Sense Planar",
                    "prerequisites": ["Cleric", "Exorcist", "Exorcist 3"],
                    "FlavorText": "Sense Evil recharges upon Recouping. You gain the Identify Planar ability",
                    "abilities": [
                        {
                            "abilityname": "Identify Planar",
                            "abilitydescription": "When using Sense Planar, you may select one creature and learn its identity as well as its root motivation(selfless or selfish). (2 / Rest) ",
                        },
                    ]
                },
                {
                    "TalentName": "Abjure Unholy",
                    "prerequisites": ["Cleric", "Exorcist", "Sense Planar II", "Holy Support II"],
                    "FlavorText": "Gain Abjure Unholy, which counts as a spell for abilities that interact with spells. You can cast this unique spell 2/Rest.",
                    "abilities": []
                },
                {
                    "TalentName": "Abjure Unholy",
                    "prerequisites": ["Divine", "Spell", "Warding", "Verbal", "Gesture"],
                    "FlavorText": "Divine, Spell, Warding "APC": 5 "Range": 60 ft "Requires": Verbal, Gesture "Duration": 10 mins Choose a point within range. A powerful warding circle springs up in a 5 ft radius around that point. The circle conjures an accompanying invisible cylinder that is 15 ft tall. The cylinder does not block LoS but does block LoE. The cylinder is solid to the touch, preventing passage into or out of the circle. Spells, effects, and abilities that include a physical source of damage (such as arrows, fire, or acid) cannot penetrate this barrier. A creature within the barrier can attempt to escape by making a CHA check against 10 + your magic attribute. On a success the creature can move through the barrier, taking 2d10 psychic damage. When you cast this spell, choose a creature type: avadri, celestial, eldritch, fae, or fiend. Creatures of that type that are stuck in your circle can only attempt to escape if you have taken damage since your last turn, and must roll 2d20 and use the lower when trying to escape. You may choose to end the spell early",
                    "abilities": []
                },
                {
                    "TalentName": "Distant Ward II",
                    "prerequisites": ["Cleric", "Exorcist", "Abjure Unholy", "Distant Ward"],
                    "FlavorText": "The range of your Divine Ward increases by +30 ft.",
                    "abilities": []
                },
                {
                    "TalentName": "Divine Shield II",
                    "prerequisites": ["Cleric", "Exorcist", "Abjure Unholy", "Divine Shield"],
                    "FlavorText": "Your Divine Ward adds an additional +1 to your target creature’s relevant defenses.",
                    "abilities": []
                },
                {
                    "TalentName": "Divine Ward III",
                    "prerequisites": ["Cleric", "Exorcist", "Exorcist 6"],
                    "FlavorText": "Divine Ward raises all defenses (AR, physical, and mental).",
                    "abilities": []
                },
                {
                    "TalentName": "Expert Exorcist",
                    "prerequisites": ["Cleric", "Exorcist", "Divine Ward III", "Holy Support III"],
                    "FlavorText": "You learn the Exorcism ritual if you did not already know it. Gain the Exorcist ability.",
                    "abilities": [
                        {
                            "abilityname": "Exorcist",
                            "abilitydescription": "When you use Exorcism and you do not upcharge it, you may choose not to roll on the side effect table. (1 / Rest).",
                        },
                    ]
                },
                {
                    "TalentName": "Distant Ward III",
                    "prerequisites": ["Cleric", "Exorcist", "Expert Exorcis", "Divine Ward II"],
                    "FlavorText": "The range of your Divine Ward increases by +30 ft.",
                    "abilities": []
                },
                {
                    "TalentName": "Distant Shield III",
                    "prerequisites": ["Cleric", "Exorcist", " Expert Exorcist", "Divine Shield II"],
                    "FlavorText": "Your Divine Ward adds an additional +1 to your target creature’s relevant defenses.",
                    "abilities": []
                },
                {
                    "TalentName": "Abjure Unholy II",
                    "prerequisites": ["Cleric", "Exorcist", "Exorcist 9"],
                    "FlavorText": "Abjure Unholy can be a 10 ft radius (choose each time you cast it). Abjure Unholy becomes ½ CHA/Rest.",
                    "abilities": []
                },
                {
                    "TalentName": "Sense Planar III",
                    "prerequisites": ["Cleric", "Exorcist", "Abjure Unholy II"],
                    "FlavorText": "Sense Planar has a range of 5 miles. When you deal radiant damage to avadri, celestial, eldritch, fae, or fiend creatures, add your CHA to the damage.",
                    "abilities": []
                },
                {
                    "TalentName": "Unholy Scourge",
                    "prerequisites": ["Cleric", "Exorcist", "Capstone", " Sense Planar III"],
                    "FlavorText": "Malicious planar entities fear your name, and towns bereaved by such entities know to seek you out when they need a skilled exorcist. When you use the Exorcism ritual, you never have to roll on the side effect table. If you choose to Upcharge the exorcism, roll 2 times, instead of 4 times. When you use your Abjure Unholy spell, you may use Unholy Scourge.",
                    "abilities": [
                        {
                            "abilityname": "Unholy Scourge",
                            "abilitydescription": "All creatures in your circle take 4d10 radiant damage at the start of each of their turns. (1/Rest)",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "When you choose a creature type for Abjure Unholy, you can choose any creature type of your choice.",
                        },]
                },
                {
                    "TalentName": "",
                    "prerequisites": ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
                    "FlavorText": "",
                    "abilities": []
                },
                {
                    "TalentName": "",
                    "prerequisites": ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
                    "FlavorText": "",
                    "abilities": []
                },
                {
                    "TalentName": "",
                    "prerequisites": ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
                    "FlavorText": "",
                    "abilities": []
                }, {
                    "TalentName": "Piety",
                    "TrackDescription": "You work small miracles, healing injury and disease with a mere touch, or invigorating a season’s crops to bounty",
                    "Talents": [],
                },
                {
                    "TalentName": "Lay On Hands",
                    "prerequisites": ["Cleric", "Piety", " Cleric Entry"],
                    "FlavorText": "Gain Lay on Hands.",
                    "abilities": [
                        {
                            "abilityname": "Lay on Hands",
                            "abilitydescription": "You may touch yourself or a creature and spend 2 AP to restore 3 HP to that creature. (CHA / Rest) ",
                        },

                    ]
                },
                {
                    "TalentName": "Monastic Horticulturist",
                    "prerequisites": ["Cleric", "Piety", "Lay on Hands", "Holy Support"],
                    "FlavorText": "By combining faith and agricultural understanding, you can bless a field of crops with your Monastic Horticulture ability.",
                    "abilities": [
                        {
                            "abilityname": "Monastic Horticulture",
                            "abilitydescription": "Select a field of crops that is a 500 ft 2 or smaller.These crops become immune to nonmagical blights, poisons, diseases, and insects.They still grow and produce food at their normal rate, but the food they produce is high- quality and delicious. (1 / Month) ",
                        },
                    ]
                },
                {
                    "TalentName": "Lay On Hands II",
                    "prerequisites": ["Cleric", "Piety", "Monastic Horticulturist"],
                    "FlavorText": "While Recouping, you can use Lay on Hands one time without expending a use of it. (1 / Rest) ",
                    "abilities": [],

                },
                {
                    "TalentName": "Piety",
                    "prerequisites": ["Cleric", "Piety", "Lay on Hands II"],
                    "FlavorText": "Gain +4 Skill Points that you can spend on skills with the influence or knowledge tag. Gain the Piety ability.",
                    "abilities": [
                        {
                            "abilityname": "Piety",
                            "abilitydescription": "You may touch a creature suffering from a common poison and instantaneously cure it. (1 / Week).",
                        },

                    ]
                },
                {
                    "TalentName": "Lay On Hands III",
                    "prerequisites": ["Cleric", "Piety", "Holy Support II"],
                    "FlavorText": "Your Lay on Hands ability restores 2 additional HP.",
                    "abilities": [],
                },
                {
                    "TalentName": "Wellspring Of Health",
                    "prerequisites": ["Cleric", "Piety", "Lay on Hands III"],
                    "FlavorText": "When you cast a divine spell that restores HP to a target, add your CHA to the amount healed.",
                    "abilities": [],
                },
                {
                    "TalentName": "Piety II",
                    "prerequisites": ["Cleric", "Piety", "Wellspring of Health"],
                    "FlavorText": "Piety can cure common diseases as well.",
                    "abilities": [],
                },
                {
                    "TalentName": "Monastic Horticulturist II",
                    "prerequisites": ["Cleric", "Piety", "Piety II", "Holy Support III"],
                    "FlavorText": "Gain the Horticultural Blessing ability.",
                    "abilities": [
                        {
                            "abilityname": "Horticultural Blessing",
                            "abilitydescription": "When you spend at least 1 week  in a settlement, and you have used Monastic Horticulture on a field that will produce crops, you can bless the crops.The crops will produce 2d10 additional rations’ worth of food each day for the next week(in addition to what they would normally produce).Rations produced in this way become spoiled after 24 hours. (1 / Week) ",
                        },

                    ]
                },
                {
                    "TalentName": "Piety III",
                    "prerequisites": ["Cleric", "Piety", "Monastic Horticulturist II", "Battle Medic"],
                    "FlavorText": "Gain +4 Skill Points that you can spend on skills with the influence or knowledge tag. Piety becomes 2/Week.",
                    "abilities": [],
                },
                {
                    "TalentName": "Piety IV",
                    "prerequisites": ["Cleric", "Piety", "Piety III"],
                    "FlavorText": "When you use Piety, you can instantaneously cure common or uncommon poisons or diseases.",
                    "abilities": [],
                },
                {
                    "TalentName": "Piety V",
                    "prerequisites": ["Cleric", "Piety", "Piety IV"],
                    "FlavorText": "Gain +4 Skill Points that you can spend on skills with theinfluence or knowledge tag. Piety becomes 3/Week.",
                    "abilities": [],
                },
                {
                    "TalentName": "Miracle Worker",
                    "prerequisites": ["Cleric", "Piety", "Capstone", "Piety V"],
                    "FlavorText": "You are heralded as a miraculous healer the world over. Any religious institution(besides extremists and cults) will happily house you.Clergy, kings, nobles, politicians, and generals seek your presence as they know you can work miraculous healing on behalf of those you deem worthy. Many seek you out for your inspiring presence and your ability to work miracles. Gain the Miracle Worker ability",
                    "abilities": [
                        {
                            "abilityname": "Miracle Worker",
                            "abilitydescription": "You may touch a creature suffering from any nonmagical poison or disease and instantaneously cure them, or you can touch a creature suffering from a magical poison or disease and cure them, becoming Sickened for the next 24 hours. (1 / Rest) Furthermore, whenever you arrive in a new town you gain 1d12 disciples that follow you around while in town and do basic favors and errands for you. Each time you leave a town, you may choose to take one of these disciples on as an apostle.They will follow you around indefinitely and can gain the stats of any NPC of ML 3 or lower. You can have no more Apostles at a time than your cleric level.",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "Miracle Worker becomes 1/Recoup. If you cure a magical poison or disease, you are only Sickened for 30 minutes.",
                        }
                    ]
                },
                {
                    "TalentName": "Battle Medic",
                    "prerequisites": ["Cleric", "Piety", "Monastic Horticulturist II", "Piety III"],
                    "FlavorText": "Lay on Hands can be used with Reactive AP. If the target is Bloodied, the target regains 3 additional HP from Lay on Hands(8 total unless you gain another bonus from a different ability).",
                    "abilities": [],
                },
                {
                    "TalentName": "Battle Medic  II",
                    "prerequisites": ["Cleric", "Piety", "Battle Medic"],
                    "FlavorText": "Lay on Hands only costs 1 AP. If the target is Bloodied, the target regains 2 additional HP from Lay on Hands(10 total unless you gain another bonus from a different ability).",
                    "abilities": [],
                },
                {
                    "TalentName": "Battle Medic III",
                    "prerequisites": ["Cleric", "Piety", "Battle Medic II"],
                    "FlavorText": "If target has 0 HP, your Lay on Hands restores double the HP it otherwise would. Gain the Relentless Healer ability",
                    "abilities": [
                        {
                            "abilityname": "Relentless Healer",
                            "abilitydescription": "If you roll Initiative and have no Lay on Hands, regain one use of Lay on Hands.",
                        },

                    ]
                },
                {
                    "TalentName": "Savior",
                    "prerequisites": ["Cleric", "Piety", "Capstone", " Battle Medic III"],
                    "FlavorText": "You are known as a powerful healer and righteous fighter. Generals and military commanders seek to conduct themselves in an exemplary and honorable manner in an effort to recruit you to their cause. You gain two "abilities": Ambient Divinity and Divine Salvation.",
                    "abilities": [
                        {
                            "abilityname": "Ambient Divinity",
                            "abilitydescription": "When you cast a divine spell, choose a creature within 20 ft of you to regain HP equal to the SP you just spent on that spell. (CHA / Rest). ",
                        },
                        {
                            "abilityname": "Divine Salvation",
                            "abilitydescription": "When a creature within 60 ft of you is reduced to 0 HP, you may spend 1 Reactive AP to heal them for 100 HP. You become Helpless until the end of your next turn after doing this. (1 / Rest).",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "Divine Salvation becomes 1/Recoup and you are only Helpless until the start of your next turn.",
                        },
                    ]
                },
            ]
        },
        {
            "TrackName": "Theologian",
            "TrackDescription": "You passionately study scripture and ancient texts, and how to illuminate manuscripts or scribe ornate icons with which you can spread the miraculous wonder of your faith.",
            "Talents": [
                {
                    "TalentName": "Ardent",
                    "prerequisites": ["Cleric", "Theologian", "Cleric Entry"],
                    "FlavorText": "Gain +6 Skill Points, which you can spend on any skills with the Knowledge tag.When you spend time researching in a well- resourced library or religious center, you uncover whatever information you are capable of learning in ½ the time it would normally take. (If required to roll INT, and you roll low, then you still might not find what you need, but whatever you do find takes ½ the time.) ",
                    "abilities": [],
                },
                {
                    "TalentName": "Apocrypha",
                    "prerequisites": ["Cleric", "Theologian", "Ardent"],
                    "FlavorText": "Choose an icon for which you have access. Gain additional magic(one spell, cantrip, chant, or ritual) based on that choice, which counts as divine for you even though the new magic will not be originally from the Divine Source. ",
                    "abilities": [],
                },
                {
                    "TalentName": "Scriptorium",
                    "prerequisites": ["Cleric", "Theologian", "Apocrypha"],
                    "FlavorText": "Gain the Scriptorium ability.",
                    "abilities": [
                        {
                            "abilityname": "Scriptorium",
                            "abilitydescription": "When in a well-equipped religious center with a library, you can reselect which divine spells you know.This takes 24 hours. (1 / Month).",
                        },
                    ]
                },
                {
                    "TalentName": "Iconographer",
                    "prerequisites": ["Cleric", "Theologian", "Scriptorium", "Scrivener"],
                    "FlavorText": "Gain the Iconographer ability.",
                    "abilities": [
                        {
                            "abilityname": "Iconographer",
                            "abilitydescription": "When you finish Taking a Rest, you can create a new Divine Icon.Pick a Divine Icon that you know which has a recharge ability(X/ Rest, /Recoup, or /Catch Breath) and which is the lowest level for that ability(such as Blinding Dark I). You write a duplicate of that icon.Choose one willing creature to bond with the Icon.That creature gains one use of that icon and it recharges on Taking a Rest, Recouping, or Catching your Breath as normal.The creature can use this icon until you use this ability again.",
                        },
                    ]
                },
                {
                    "TalentName": "Iconographer II",
                    "prerequisites": ["Cleric", "Theologian", "Iconographer"],
                    "FlavorText": "When you create an Icon using your Iconographer ability, if you know a higher- power version of it(such as Provision II), you can inscribe that version onto the Icon.The creature can still only use the icon one time until they can recharge it, unless the Icon’s improved ability adds + 1 usage of the Icon, in which case the creature can use it twice before needing to recharge it.",
                    "abilities": [],
                },
                {
                    "TalentName": "Scrivener",
                    "prerequisites": ["Cleric", "Piety", "Theologian", "Scriptorium", "Iconographer"],
                    "FlavorText": "Gain the Scrivener ability",
                    "abilities": [
                        {
                            "abilityname": "Scrivener",
                            "abilitydescription": "When you finish Taking a Rest, you can create a spell scroll out of a prayer or divine spell that you know. This consumes valuable inks and gold leaf - the cost in sc is 10x the spell’s SPC. You also must spend the normal amount of SP as if casting the spell when you scribe it and cannot scribe a spell with an SPC greater than your Divine Power. Once you have scribed a spell onto a scroll, you or any creature that possesses the scroll can cast it by spending the normal APC.The magic fades from the scroll once used or after 24 hours if unused.",
                        },
                    ]
                },
                {
                    "TalentName": "Scrivener II",
                    "prerequisites": ["Cleric", "Theologian", "Scrivener"],
                    "FlavorText": "You have grown more skilled at scribing your spell scrolls. It only costs you ½ the spell’s SPC to scribe it.",
                    "abilities": [],
                },
                {
                    "TalentName": "Apocrypha II",
                    "prerequisites": ["Cleric", "Theologian", "Theologian 5"],
                    "FlavorText": "Use your Apocrypha ability again, selecting a new Divine Icon for which you have access.",
                    "abilities": [],
                },
                {
                    "TalentName": "Scriptorium II",
                    "prerequisites": ["Cleric", "Theologian", "Apocrypha II"],
                    "FlavorText": "When you use Scriptorium, you can also reselect which divine prayers you know.",
                    "abilities": [],
                },
                {
                    "TalentName": "Scriptorium III",
                    "prerequisites": ["Cleric", "Theologian", "Scriptorium II"],
                    "FlavorText": "When you use Scriptorium, you can also reselect which divine rituals you know.",
                    "abilities": [],
                },
                {
                    "TalentName": "Apprenticeship",
                    "prerequisites": ["Cleric", "Theologian", "Scriptorium III", "Iconographer II"],
                    "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Observation or Knowledge tag. Gain the Apprenticeship ability.",
                    "abilities": [
                        {
                            "abilityname": "Apprenticeship",
                            "abilitydescription": "When Recouping, you may change the effects of your Icon that another creature is bonded to as though using your Iconographer ability. You cannot assign this Icon to a new creature when changing the Icon in this way.",
                        },],
                },
                {
                    "TalentName": "Iconographer III",
                    "prerequisites": ["Cleric", "Theologian", "Apprenticeship"],
                    "FlavorText": "Iconographer now allows you to create two Icons, bonding them to the same creature or different ones.One icon must be entry- level without higher - power icon abilities, while the other can be an Icon one power level higher.Apprenticeship only works on one creature each time you Recoup, but you can pick which creature is your Apprentice each time.",
                    "abilities": [],
                },
                {
                    "TalentName": "Iconographer IV",
                    "prerequisites": ["Cleric", "Theologian", " Iconographer III"],
                    "FlavorText": "Both Icons created by your Iconographer ability can be higher- power, and if you have bonded two creatures, they can trade or give one another the Icons at will by physically handing one another the separate Icons.When you use Apprenticeship, both creatures can benefit from the ability.",
                    "abilities": [],
                },
                {
                    "TalentName": "Sola Scriptura",
                    "prerequisites": ["Cleric", "Theologian", "Scriptorium III", "Scrivener II"],
                    "FlavorText": "When you cast a spell that you have scribed onto a scroll, if you are holding the scroll in your hand, then you can ignore all other Gesture, Verbal, and Visual requirements. (1 / Recoup).",
                    "abilities": [],
                },
                {
                    "TalentName": "Scrivener III",
                    "prerequisites": ["Cleric", "Theologian", "Sola Scriptura"],
                    "FlavorText": "Thanks to careful gilding and embossing techniques, it only costs you sc equal to 5x the spell’s SPC to scribe it.",
                    "abilities": [],
                },
                {
                    "TalentName": "Scrivener IV",
                    "prerequisites": ["Cleric", "Theologian", "Scrivener III"],
                    "FlavorText": "By spending the necessary SP and material costs, you can scribe two scrolls.",
                    "abilities": [],
                },
                {
                    "TalentName": "Illuminated Manuscript",
                    "prerequisites": ["Cleric", "Theologian", "Theologian 11"],
                    "FlavorText": "When in a well-equipped religious center or library you can spend 1 hour to make one additional scroll or icon. (1 / Week).",
                    "abilities": [],
                },
                {
                    "TalentName": "Scriptorium IV",
                    "prerequisites": ["Cleric", "Theologian", "Illuminated Manuscript"],
                    "FlavorText": "When you use Scriptorium, you can also reselect which cleric talents you know.",
                    "abilities": [],
                },
                {
                    "TalentName": "Apocrypha III",
                    "prerequisites": ["Cleric", "Theologian", "Repeatable", "Scriptorium IV"],
                    "FlavorText": "Use your Apocrypha ability again, choosing a new Divine Icon for which you have access.",
                    "abilities": [],
                },
                {
                    "TalentName": "Iconographer V",
                    "prerequisites": ["Cleric", "Theologian", "Apocrypha III", "Iconographer IV"],
                    "FlavorText": "Your Iconographer ability allows you to create three Icons now, none of which can be stronger than an Icon with the II suffix. You can bond them all to one creature, to two creatures, or to three creatures.Any bonded creatures can trade or give their icons to other bonded creatures at any point by physically handing them the Icon.",
                    "abilities": [],
                },
                {
                    "TalentName": "Iconic Covenant",
                    "prerequisites": ["Cleric", "Theologian", "Capstone", "Iconographer V"],
                    "FlavorText": "You are revered as a legendary scholarly theologian who writes excellent icons that tell compelling stories deeply wrought with spiritual significance.Your work decorates many houses of prayer and many pious nobles proudly display your icons in their homes Gain + 4 Skill Points that you can spend on skills with the Observation or Knowledge tag. Gain the Iconic Covenant ability.",
                    "abilities": [
                        {
                            "abilityname": "Iconic Covenant",
                            "abilitydescription": "When Recouping, you may change the effects of your Icon that another creature is bonded to as though using your Iconographer ability. You cannot assign this Icon to a new creature when changing the Icon in this way.",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "You can now create three permanent icons per year.",
                        },]
                },
                {
                    "TalentName": "Scrivener V",
                    "prerequisites": ["Cleric", "Theologian", ": Apocrypha III", "Scrivener IV"],
                    "FlavorText": "Gain +4 Skill Points that you can spend on skills with the Observation or Knowledge tag. Your spell scrolls no longer require you to expend any SP.",
                    "abilities": [],
                },
                {
                    "TalentName": "Holy Lectionary",
                    "prerequisites": ["Cleric", "Theologian", " Capstone", "Scrivener V"],
                    "FlavorText": "You are renowned as a tremendous scrivener who creates beautiful illuminated manuscripts and is deeply knowledgeable in religious matters.Your texts are often used in liturgical ceremonies throughout the land. Your Scrivener scrolls last for 48 hours before losing magic. When you use your Scrivener ability, you can also use your Holy Lectionary ability.",
                    "abilities": [
                        {
                            "abilityname": "Holy Lectionary",
                            "abilitydescription": "Create one special scripture, your Holy Lectionary.This scripture can have an SPC equal to or less than 2x your Divine Level, and does not losev magical potency for 1 month or until you use this ability again. (1 / Week).",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "Your Holy Lectionary retains its magical potency until you use this ability again.Increase all of your mental defenses by + 2.",
                        },
                    ]
                }, {

                    "TrackName": "Support Talents",
                    "TrackDescription": "",
                    "Talents": [
                        {
                            "TalentName": "Holy Support",
                            "prerequisites": ["Cleric", "Support", "Special AP", " Cleric 2"],
                            "FlavorText": "When you end your turn with 0 AP, gain 1 special Holy Support AP that acts as Reactive AP. You lose this AP at the start of your next turn. You can only gain one source of special AP.If you gain a second source of special AP, choose whether you keep this source or your new source.",
                            "abilities": [],
                        },
                        {
                            name: "Holy Support II",
                            "prerequisites": ["Cleric", "Support", "Special AP", "Holy Suppor", "Cleric 5"],
                            "FlavorText": "Holy Support gives you 2 Support AP.",
                            "abilities": [],
                        },
                        {
                            name: "Holy Support III",
                            "prerequisites": ["Cleric", "Support", "Special AP", "Holy Suppor II", " Cleric 8"],
                            "FlavorText": "Holy Support gives you 3 Support AP.",
                            "abilities": [],
                        }
                    ]
                }
            ]
        }
    ]
};