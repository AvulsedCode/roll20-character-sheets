const Troubadour = {
    stackname: "Troubadour",
    shortDescription: "Whether a singer, storyteller, poet, or visual performer, troubadours travel from court to court making their name as masterful performers.",
    quote: {
        phrase: "Tales reveal truth obscured by reality. I only seek for my tales to ignite dreams and to inspire hope.I carry the stories of the world, spreading inspiration and enchantment wherever I roam.",
        quotedsname: "Flanagan Meadowbrook",
        title: "renowned lorist",
    },
    longDescription: "As far back as you can remember, you have always had a deep love for music, storytelling, poetry, and mythology. You had an equally strong desire to connect with others through the bonds of music and artistic expression.Even as a youngster, you were able to captivate audiences of all ages with your colorful and flamboyant performances. Through diligent practice, you have now mastered one or more methods of performance, be it song or dance or poem. Urged by intense wanderlust and the desire to see the world in all its splendor, you travel far and wide, seeking to collect more and grander stories wherever the path takes you. What is your standard performance routine? Do you typically sing, play an instrument, dance, or do all three at once? Maybe you prefer to recite or improvise poetry for your audience, or maybe you perform parlor tricks designed to delight and instill a sense of wonder.Are you inspired by whimsical stories with happy endings, by heart- wrenching tragedies, or by tomes of history ? How do these inspirations appear in your performances ? ",

    entryTalent: {
        prerequisites: ["Class Entry", "", "Character Level 2"],
        flavorTest: "When you take this talent, you gain the following abilities.",
        abilities: [
            {
                abilityname: "Stanzas",
                abilitydescription: " Learn three Stanzas of your choice.",
            },
            {
                abilityname: "Setup",
                abilitydescription: "During an allied creature’s turn, if they are within 40 ft of you, you may spend 1 Reactive AP that you have. That ally gains that AP. (1/Round)",
            },
            {
                abilityname: "Battle Song",
                abilitydescription: ". When you roll Initiative, roll 1d4. Add it to the Initiative of any creature of your choice.",
            },
            {
                abilityname: "Skilled",
                abilitydescription: "Gain +4 Skill Points to spend on any skills of your choice. You also gain one inexpensive instrument or prop to enhance your performances (such as a flute, mask, or colorful silk handkerchiefs).",
            }
        ]

    },
    tracks: [
        {
            trackname: "Encore ",
            trackdescription: "",
            talents: [
                {
                    talentname: "Troubadour's Support",
                    prerequisites: ["Troubadour", "Encore", " Troubadour Entry"],
                    flavorTest: "When you end your turn with 0 AP, gain 1 special Support AP that acts as Reactive AP. You lose this AP at the start of your next turn. You can only have one source of Support AP. If you gain a second source of special AP, choose whether you keep this source or your new source.",
                    abilities: []
                },
                {
                    talentname: "Battle Drum",
                    prerequisites: ["Troubadour", "Encore", "Troubadour’s Support"],
                    flavorTest: "When you roll Initiative, you may swap your Initiative roll with one of your allies.",
                    abilities: []
                },
                {
                    talentname: "Smooth tongue",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Prerequisites: Motley Wardrobe or Battle Drum Gain +4 Skill Points, which you can spend on skills with the Performance or Observation tags. You can always find food lodging for free in exchange for performances."],
                    flavorTest: "",
                    abilities: []
                },
                {
                    talentname: "Setup II",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Smooth Tongue"],
                    flavorTest: "You may now use Setup once on each ally’s turn provided you have the Reactive AP needed.",
                    abilities: []
                },
                {
                    talentname: "Troubadour's Support II",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Setup II"],
                    flavorTest: "Troubadour’s Support gives you 2 Reactive AP.",
                    abilities: []
                },
                {
                    talentname: "Battle Drum II",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Troubadour’s Support II"],
                    flavorTest: "When you use Battle Drum, you may also swap two of your allies’ Initiative rolls. Choose one creature whose Initiative you changed; they get +your CHA to their Initiative.",
                    abilities: []
                },
                {
                    talentname: "Accelerando",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Battle Drum II"],
                    flavorTest: "Gain a special Stanza, Accelerando.",
                    abilities: [
                        {
                            abilityname: "Accelerando",
                            abilitydescription: "One ally within range gains +1 AP at the start of their turn and +5 ft speed when they spend AP to move.",
                        },
                    ]
                },
                {
                    talentname: "Crescendo",
                    prerequisites: ["Troubadour", "Encore", " Jester", "Battle Drum II"],
                    flavorTest: "Gain a special Stanza, Crescendo.",
                    abilities: [
                        {
                            abilityname: "Crescendo",
                            abilitydescription: "You or an ally within range deals +1d4 damage when they hit with weapon attacks.",
                        },
                    ]
                },
                {
                    talentname: "Troubadour's support III",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Accelerando or Crescendo"],
                    flavorTest: "Troubadour’s Support gives you 3 Support AP.",
                    abilities: []
                },
                {
                    talentname: "Setup III",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Troubadour’s Support III"],
                    flavorTest: "You can expend X Reactive AP to give an ally X AP. The range of Setup increases to 80 ft.",
                    abilities: []
                },
                {
                    talentname: "Accelerando II",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Setup III", "Accelerando"],
                    flavorTest: "Accelerando applies to two allies. (2/Recoup)",
                    abilities: []
                },
                {
                    talentname: "Crescendo II",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Setup III", "Crescendo"],
                    flavorTest: "Crescendo applies to two allies. (2/Recoup)",
                    abilities: []
                },
                {
                    talentname: "Battle Stanza",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Accelerando II or Crescendo II"],
                    flavorTest: "Pick two Stanzas you know with the scorn tag. Their rank 1 iterations combine and become your Battle Stanza. When you activate your Battle Stanza for 1 AP, make one scorn roll; if you hit, apply both effects. ",
                    abilities: []
                },
                {
                    talentname: "Accelerando III",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Battle Stanza", "Accelerando II"],
                    flavorTest: "Accelerando II becomes: Increase speed by 10 ft, and becomes 2/Catch Breath.",
                    abilities: [],
                },
                {
                    talentname: "Crescendo III",
                    prerequisites: ["Troubadour", "Encore", " Jester", "Battle Stanza", "Crescendo II",],
                    flavorTest: "Crescendo II becomes: Increase damage by 1d6, and becomes 2/Catch Breath.",
                    abilities: []
                },

                {
                    talentname: "Battle Drum III",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Accelerando III or Crescendo III"],
                    flavorTest: "When you use Battle Drum, you can pick a creature within 120 ft. Attack their ANT. If you hit, you can swap their Initiative with one of your allies’. (2/Rest)",
                    abilities: []
                },

                {
                    talentname: "Battle Stanza II",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Battle Drum III"],
                    flavorTest: "When you use your Battle Stanza, you can apply both effects as though they were Stanza level 2. (2/Recoup)",
                    abilities: []
                },

                {
                    talentname: "Anthem",
                    prerequisites: ["Troubadour", "Encore", "Capstone", "Battle Stanza II"],
                    flavorTest: "You are an unrivaled musician, orator, and performer. You are renowned as an expert commander on the field of battle, inspiring your comrades through song or word. You gain the Courage Anthem and Battle Anthem abilities.",
                    abilities: [
                        {
                            abilityname: "Courage Anthem",
                            abilitydescription: "When you roll Initiative, you and any allied creature whose Initiative you manipulated cannot be Charmed or Frightened unless the target is also Bloodied. (1/Rest)",
                        },
                        {
                            abilityname: "Battle Anthem",
                            abilitydescription: "When reduced to 0 HP, you may start your Battle Anthem. It lasts for a number of rounds equal to your Troubadour level. When you start your turn, if you spent at least 1 AP on Stanzas on your last turn, you may use aStanza’s rank 1 ability that you know for 0 AP. Furthermore, if you spend at least 2 AP on Stanzas on your current turn, you cannot receive healing until the end of your next turn, but also do not die until the end of your next turn, even if you reach 8 Death Points. If you reach 8 Death Points during your Battle Anthem, you cannot be healed and you die when your Battle Anthem ends, but you can be resurrected.",

                        },
                    ],
                }
            ]
        },
        {
            trackname: "Jester",
            trackdescription: "",
            talents: [
                {
                    talentname: "Mockery",
                    prerequisites: ["Troubadour", "Jester", "Troubadour Entry"],
                    flavorTest: "Gain the Mockery ability.",
                    abilities: [
                        {
                            abilityname: "Mockery",
                            abilitydescription: "By spending 3 AP, make a CHA attack vs the ANT of a target within 40 ft of you. If you hit, then all creatures that were Charmed by the target are no longer Charmed. Further, anyone who was not Charmed by the target looks upon the target with a mixture of embarrassment and disgust. If you miss a target, you can’t attack that target with this ability again until after 10 mins have passed. ",
                        },
                    ],
                }
                , {
                    talentname: "Motley Wardrobe",
                    prerequisites: ["Troubadour", "Jester", "Mockery"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Performance or Influence tags. Gain a jester’s motley, along with two other disguises of your choice.",
                    abilities: []
                },

                {
                    talentname: "Smooth Tongue",
                    prerequisites: ["Troubadour", "Encore", "Jester", "Motley Wardrobe or Battle Drum"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Performance or Observation tags. You can always find food and lodgings for free in exchange for performances. ",
                    abilities: []
                },
                {
                    talentname: "Clown",
                    prerequisites: ["Troubadour", "Jester", "Smooth Tongue"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics or Performance tags. Gain 1 Goodwill with commoners. (1/Week)",
                    abilities: []
                },
                {
                    talentname: "Fool",
                    prerequisites: ["Troubadour", "Jester", "Smooth Tongue"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Observation and Subterfuge tags. Gain 1 Goodwill with nobles and elite society. (1/Week)",
                    abilities: []
                },
                {
                    talentname: "Obfusacate",
                    prerequisites: ["Troubadour", "Jester", "Clown or Fool"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Knowledge tags. If you find physical evidence that might be incriminating, you can spend 30 minutes destroying it beyond any hope of being useful or viable. (1/Rest)",
                    abilities: [],
                },
                {
                    talentname: "Imitate",
                    prerequisites: ["Troubadour", "Jester", "Clown or Fool"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Influence tags. Given 1 hour and 50 sp, you can make an excellent disguise that lasts for 4 hours before the makeup begins to run and the props begin to fray. Double Skill Points in Disguising, Evading, and Deceiving for the duration. (1/ Rest)",
                    abilities: [],
                },
                {
                    talentname: "Jeer",
                    prerequisites: ["Troubadour", "Jester", "Obfuscate or Imitate"],
                    flavorTest: "When Mockery hits a target that is not Bloodied, deal 1d8 psychic damage. Creatures that witness this do not view this action as physically combative.",
                    abilities: [],
                },
                {
                    talentname: "Many Hats",
                    prerequisites: ["Troubadour", "Jester", "Jeer"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the performance and influence tags. Given 1 week in a settled area, you can respec your talents within this track when you Take a Rest. Once you do, you cannot use this ability again until you are in a new settled area.",
                    abilities: [],
                },
                {
                    talentname: "Clown II",
                    prerequisites: ["Troubadour", "Jester", "Many Hats", "Clown"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics or Performance tags.Gain 1 additional Goodwill with commoners. (1/Week)",
                    abilities: [],
                },
                {
                    talentname: "Fool II",
                    prerequisites: ["Troubadour", "Jester", "Hats", "Fool"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Observation and Subterfuge tags. Gain 1 Goodwill with nobles and elites. (1/Week)",
                    abilities: []
                },
                {
                    talentname: "Obfuscate II",
                    prerequisites: ["Troubadour", "Jester", " Clown II or Fool II", "Obfuscate"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Knowledge tags. You can spend 30 additional minutes to change the evidence slightly, causing it to incriminate someone else. This costs 100 sp and can be done 1/Week.",
                    abilities: []
                },
                {
                    talentname: "Imitate II",
                    prerequisites: ["Troubadour", "Jester", "Clown II or Fool II", "Imitate"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Influence tags. Given 1 hour and 200 sp, you can make a supreme disguise that lasts for 4 hours. Double Skill Points in Disguising, Evading, and Deceiving for the duration and you do not need to roll if you do mundane activity befitting the costume (such as disguising yourself as a guard and walking into the city watch’s private lounge). (1/Week)",
                    abilities: []
                },
                {
                    talentname: "Mockery II",
                    prerequisites: ["Troubadour", "Jester", "Obfuscate II or Imitate II"],
                    flavorTest: "You only need to wait 1 minute, instead of 10 minutes, after missing with Mockery.",
                    abilities: []
                },
                {
                    talentname: "Jeer II",
                    prerequisites: ["Troubadour", "Jester", "Mockery II"],
                    flavorTest: "If a target takes psychic damage from your Jeer and becomes Bloodied as a result, it loses 1 Goodwill and will attempt to completely withdraw from the social situation. (The target will not withdraw from active combat.)",
                    abilities: []
                },
                {
                    talentname: "Clown III",
                    prerequisites: ["Troubadour", "Jester", "Jeer II", "Clown II"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics or Performance tags. You cannot have negative Goodwill with commoners.",
                    abilities: []
                },
                {
                    talentname: "Fool III",
                    prerequisites: ["Troubadour", "Jester", "Jeer II", "Fool II"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Observation and Subterfuge tags. You cannot have negative Goodwill with noble society.",
                    abilities: []
                },
                {
                    talentname: "Imitate III",
                    prerequisites: ["Troubadour", "Jester", "Clown III or Fool III", "Imitate II"],
                    flavorTest: "Gain +6 Skill Points, which you can spend on skills with the Subterfuge and Influence tags. You can use your disguise 1/Recoup and your supreme disguise 1/Rest.",
                    abilities: []
                },
                {
                    talentname: "Mockery III",
                    prerequisites: ["Troubadour", "Jester", "Obfuscate III or Imitate III"],
                    flavorTest: "When a creature loses Goodwill as a result of being Mocked, it can no longer Charm or Enthrall any new targets for 1 hour. You can use Mockery indefinitely with no cooldown, even if you miss a target.",
                    abilities: []
                },
                {
                    talentname: "Cruel JApe",
                    prerequisites: ["Troubadour", "Jester", "Capstone", "Mockery III"],
                    flavorTest: "You wear disguises and identities fluidly, and you can ruthlessly use words as barbs.Gain +8 Skill Points, which you can spend on skills with the Influence, Subterfuge, Observation, or Performance tags. Gain the Cruel Jape ability.",
                    abilities: [
                        {
                            abilityname: "Cruel Jape",
                            abilitydescription: "When you Bloody someone with Jeer, you can reduce them to 0 Goodwill. If they were at 0, reduce them to -5 instead. (1/Rest)",
                        },
                        {
                            abilityname: "Level 30",
                            abilitydescription: "Cruel Jape becomes 1/Recoup, but can only +target a specific creature 1/Rest.",
                        },
                    ],
                },
            ]
        },
        {
            trackname: "Legend Keeper",
            trackdescription: "",
            talents: [
                {
                    talentname: "Book Of Legends",
                    prerequisites: ["Troubadour", "Legend Keeper", "Troubadour Entry"],
                    flavorTest: "You have a special tome, your Book of Legends. Your Book of Legends might be a faerie tale, a book of epic poetry from the distant past, or the scrawled and esoteric ramblings of a madman. Whatever the case, the tome is also magical and cannot be destroyed or damaged by mundane means. Gain the Summon Character ability.",
                    abilities: [
                        {
                            abilityname: "Summon Character",
                            abilitydescription: "You can spend 3 AP to magically call forth a spirit that takes the form of a character from this tome. This creature has the stats of any beast or NPC of Monster Level (ML) 2 or lower. A Summoned Character loses any magic from the Five Sources that its stat block would normally allow. It is a corporeal spirit and possesses any equipment that the stat block would normally have. This equipment is corporeal while the creature is holding it or using it in a thrown or ranged attack, but the equipment fades into nothingness if any other creature tries to use it. The character lasts for 10 minutes, or until dismissed (by spending 1 AP on your turn), or until reduced to 0 HP. You can summon such creatures 2/Rest. This talent gives you +5 SP and +1 Arcane or Psionic Power (your choice), but does not grant you spells.",
                        }
                    ],
                },
                {
                    talentname: "Figure Of Legend",
                    prerequisites: ["Troubadour", "Legend Keeper", "Mythic Tome"],
                    flavorTest: "Gain the Summon Protagonist ability, which lets you summon more powerful creatures. (1/Rest)",
                    abilities: [
                        {
                            abilityname: "Summon Protagonist",
                            abilitydescription: "You can summon a Figure of Legend (below), or other options granted by talents you take later in this stack.",
                        },
                        {
                            abilityname: "Figure of Legend",
                            abilitydescription: "This is an NPC of a level that you can summon, who also gains the full benefits of one level 1 lineage of your choice and one rank 1 profession of your choice. A Summoned Character loses any magic from the Five Sources that its stat block would normally allow.",
                        },
                    ],
                },
                {
                    talentname: "Written tradition",
                    prerequisites: ["Troubadour", "Legend Keeper", ": 2 talents in one of the following tracks: Comedy,Tragedy, Creature Compendium, Faerie Tale, Book of Souls,Book of the Damned, or Necronomicon"],
                    flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Knowledge tag. Gain the Written Tradition ability.",
                    abilities: [
                        {
                            abilityname: "Written Tradition",
                            abilitydescription: " Regain one use of your Summon Character when you Recoup. (1/Rest)",
                        }
                    ],
                },
                {
                    talentname: "Written Tradition II",
                    prerequisites: ["Troubadour", "Legend Keeper", " 3 talents in one of the following tracks: Comedy, Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, or Necronomicon."],
                    flavorTest: "Summon Character becomes ½ INT/Rest.",
                    abilities: []
                },

                {
                    talentname: "Written Tradition III",
                    prerequisites: ["Troubadour", "Legend Keeper", "Written Tradition II"],
                    flavorTest: "Written Tradition becomes: Regain 2 uses of your Summon Character when you Recoup. (1/Rest) Summon Protagonist becomes 2/Rest.",
                    abilities: []
                },

                {
                    talentname: "Plot Twist",
                    prerequisites: ["Troubadour", "Legend Keeper", " 6 talents in one of the following tracks: Comedy, Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, or Necronomicon"],
                    flavorTest: "Choose one of the six books that you did NOT take. Gain that book’s first talent.",
                    abilities: []
                },

                {
                    talentname: "Story For Every Occasion",
                    prerequisites: ["Troubadour", "Legend Keeper", "7 talents in one of the following tracks: Comedy, Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, or Necronomicon"],
                    flavorTest: "Gain +8 Skill Points, which you can spend on skills with the Knowledge tag.When you roll Initiative and have no uses of Summon Character left, you gain one special use of it, which you can use to summon a single NPC or Beast of ML 1 or lower.",
                    abilities: []
                },

                {
                    talentname: "Library Of Legends",
                    prerequisites: ["Troubadour", "Legend Keeper", "Capstone", " Story for Every Occasion"],
                    flavorTest: "You are heralded the world over as a legendary and captivating storyteller. Gain +8 Skill Points, which you can spend on any skill. Your Summon Character ability can summon creatures of 1 ML higher than you previously could. You can reassign your Legend Keeper talents by swapping out which book you can magically draw creatures from. (1/ Month)",
                    abilities: [
                        {
                            abilityname: "Level 30",
                            abilitydescription: "Your Summon Character ability can summon creatures of 2 MLs higher than you previously could.",
                        },]
                }],
        },
        {

            trackname: "Legend Keeper:Comedy",
            trackdescription: "This defines your Mythic Tome as a Comedy, full of epic heroes and happy endings.",
            talents: [
                {
                    talentname: "Comedy",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy,Figure of Legend"],
                    flavorTest: "Incompatible: Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, Necronomicon When using Figure of Legend, you can summon NPCs of ML 3 or lower. When you do, give them +1 to a physical or mental attribute of your choice, and they magically gain any mundane equipment of your choice.",
                    abilities: []
                },
                {
                    talentname: "Comedy II",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy", "Comedy"],
                    flavorTest: "Incompatibilities: Tragedy II, Creature Compendium II, Faerie Tale II, Book of Souls II, Book of the Damned II, Necronomicon II When using Summon Character, you can use Summon Entourage.",
                    abilities: [
                        {
                            abilityname: "Summon Entourage",
                            abilitydescription: "Summon 3 NPCs that are all ML 1 or lower. They can be the same or different stat blocks.",
                        },],
                },
                {
                    talentname: "Comedy III",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy", "Comedy II, Written Tradition II"],
                    flavorTest: "When you use Figure of Legend, you may summon NPCs of ML 5 or lower. They gain the benefits of their lineage as if they were PC level 5 (providing them one additional lineage option) and one rank 2 profession.",
                    abilities: [],
                },
                {
                    talentname: "Comedy IV",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy", "Comedy III, Written Tradition III"],
                    flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Performance tags. When you use Figure of Legend, they get 4 total Attribute Points that you can use to enhance their attributes. You cannot put more than 2 into a single attribute. Gain +5 SP and +1 Arcane Power or +1 Psionic Power.",
                    abilities: [],
                },
                {
                    talentname: "Comedy V",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy", "Comedy IV"],
                    flavorTest: "When you use Figure of Legend, they also get 1 talent of your choice (but cannot gain Adept of the Psionic, Disciple of the Divine, Initiate of the Occult, Student of the Arcane or Warden of the Primal).",
                    abilities: [],
                },
                {
                    talentname: "Comedy VI",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy", " Comedy V"],
                    flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Performance tags. When you use Summon Entourage, they can be ML 2 or lower.",
                    abilities: []
                },

                {
                    talentname: "Comedy VII",
                    prerequisites: ["Troubadour", "Legend Keeper", "Comedy", "Comedy VI", "Plot Twist"],
                    flavorTest: "Gain one additional use of Summon Protagonist. When you Summon Hero, they get an additional lineage option (as though PC level 10) and a rank 3 profession. They also get one cantrip, chant, or prayer of your choice.",
                    abilities: []
                }],
        },
        {
            trackname: "Legend keeper",
            trackdescription: "This defines your Mythic Tome as a Tragedy, full of flawed heroes, ruthless villains, and heart-wrenching loss.",
            talents: [

                {
                    talentname: "Tragedy",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy", " Figure of Legend"],
                    flavorTest: "Incompatibilities: Comedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, Necronomicon When using Figure of Legend, you can summon NPCs of ML 3 or lower. When you do, give them +1 to a physical or mental attribute, and +6 Skill Points which they can spend on skills with the influence, observation, subterfuge, and survival tags.",
                    abilities: [],
                },
                {
                    talentname: "Tragedy II",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy"],
                    flavorTest: "Comedy II, Creature Compendium II, Faerie Tale II, Book of Souls II, Book of the Damned II, Necronomicon II When using Summon Character, you can use Summon Underlings.",
                    abilities: [
                        {
                            abilityname: "Summon Underlings",
                            abilitydescription: "Summon 3 NPCs that are all ML 1 or lower. They can be the same or different stat blocks. ",
                        }
                    ],
                },
                {
                    talentname: "Tragedy III",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy", " Tragedy II, Written Tradition"],
                    flavorTest: "When you use Figure of Legend, you may summon NPCs of ML 5 or lower. They gain the benefits of their Lineage as if they were PC level 5 (providing them one additional lineage option) and one rank 2 profession.",
                    abilities: []
                },

                {
                    talentname: "Tragedy IV",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy", "Tragedy III", "Written Tradition III"],
                    flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Influence tag.When you use Figure of Legend, they also get one talent of your choice (but cannot gain Adept of the Psionic, Disciple of the Divine, Initiate of the Occult, Student of the Arcane or Warden of the Primal). Gain +5 SP and +1 Arcane Power or +1 Psionic Power.",
                    abilities: [],
                },
                {
                    talentname: "Tragedy V",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy", "Tragedy IV"],
                    flavorTest: "When you use Figure of Legend, you can also summon two underlings that the villain controls. These underlings must be NPCs or beasts of ML 1 or lower. (1/Rest)",
                    abilities: []
                },

                {
                    talentname: "Tragedy VI",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy", "Tragedy V"],
                    flavorTest: "Gain Diabolical Scheme, which you can use when you use use Figure of Legend.",
                    abilities: [
                        {
                            abilityname: "Diabolical Scheme",
                            abilitydescription: "The villain you summon can be an NPC of ML 10 or lower and gains three talents of your choice (but no class talents). It is fully autonomous and can choose whether to work with or against you. At the end of the 10 minutes, if the NPC is not dead, then the NPC becomes permanently corporeal and can pursue its own agenda.",
                        },],
                },
                {
                    talentname: "Tragedy VII",
                    prerequisites: ["Troubadour", "Legend Keeper", "Tragedy", "Tragedy VI", "Plot Twist"],
                    flavorTest: "Gain one additional use of Summon Protagonist. When you summon a Figure of Legend, they can be an NPC of ML 7 or lower; they get an additional lineage option (as though PC level 10) and a rank 3 profession; they also get one cantrip, chant, or prayer of your choice.",
                    abilities: [
                        {
                            abilityname: "",
                            abilitydescription: "",
                        },]
                }],
        },
        {
            trackname: "Lyricist",
            trackdescription: "By improving your repertoire of music, poetry, or stories, you can achieve a variety of effects in combat to enhance your allies or unnerve your foes.",
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
            trackname: "Lorist",
            trackdescription: " Stories and research into myths have led you to uncover the secrets of arcane or psionic magic, enhancing your capacity to influence the world around you.",
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
                }]
        },
        {
            trackname: "Jester",
            description: "Your double-edged comments and savage quips make you equally loved and hated among the common folk and high nobility.",
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
            talentname: "Encore",
            description: "Your energetic music or inspirational words rally your allies and help your entire team move with enhanced tactical coordination.",
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
                }]
        },
        {
            talentname: "Legend Keeper",
            description: "You maintain a powerful book of legends and can summon creatures, heroes, and villains forth from the pages of this book.",
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
                }]
        }
    ]
};