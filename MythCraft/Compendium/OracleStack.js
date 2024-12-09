const OracleStack = {
    "TrackName": "Oracle",
    "ShortDescription": "Mystical hermits and diviners, oracles use primal or psionic magic to predict the future or maintain a balance over the natural world.",
    "Quote": {
        "phrase": "Knowledge is both a gift and a curse. Do not seek to understand the future, as this can never be known, but instead to understand the currents that shape it.May the wisdom of the stars guide your steps towards a future that begets goodness.",
        "quotedsname": "Alanákalai Eyarie",
        "title": "prophet",
    },
    "LongDescription": "Born under a unique configuration of Ancerra’s five moons, you were destined for mystic greatness.As a child you possessed an innate sensitivity to people’s emotional states and to the natural world around you, and often you felt that unsettling sense that you knew something would happen before the fact, and it came to pass precisely as you had expected.This led you to seek the counsel of an experienced mystic who taught you the ways of oracular prophecy. Embracing your role as a link between the physical and the spiritual, you have yourself become an enigmatic guide to those who seek prophetic vision. Regardless of how accurate you are, you may be called upon frequently to predict the future.Give some thought to how you feel about such requests.Do you believe that you can actually divine the future on command, or do you think that such visions are only occasionally gifted to you? Is it a skill you can get better at, or just an innate knack you possess? Furthermore, what kind of physical props, such as tarot cards or animal bones, do you use when attempting such soothsaying?",

    "EntryTalent": {
        "prerequisites": ["Class Entry", "Oracle", "Character Level 2"],
        "FlavorText": "When you take this entry talent, you gain the following abilities.",
        "abilities": [
            {
                "abilityname": "Woe",
                "abilitydescription": "Whenever you crit fail on a d20, gain 1 SP. This cannot exceed your maximum SP. You gain an inexpensive object that you use to predict the future, such as tarot cards, knuckle bones, charmed dice, lots, or cured entrails.",
            },
            {
                "abilityname": "Hermit",
                "abilitydescription": "Gain +2 Arcana, Astrology, or Astronomy; AND + 2 in a skill of your choice with the Observation or Survival tag.",
            },
            {
                "abilityname": "Oracular Magic",
                "abilitydescription": "Choose one: Primal or Psionic. If you choose Primal, gain Warden of the Primal unless you already have it.If you already have it, gain + 1 Primal Power and + 5 SP instead. If you choose Psionic, gain Adept of the Psionic unless you already have it.If you already have it, gain + 1 Psionic Power and + 5 SP instead. Whichever you choose, LUCK is your magic attribute.",
            },
            {
                "abilityname": "Oracular Power",
                "abilitydescription": ". Each time you level up and spend your Talent Point on an oracle talent, you gain + 5 SP and + 1 Power in the source you chose.",
            },
        ]
    },
    "Tracks": [
        {
            "TrackName": "Druid",
            "TrackDescription": " You take it upon yourself to serve as a mediating force between primeval forces and embrace divine or occult powers as a way to balance the primal magic that surges within.",
            "Talents": [
                {
                    "TalentName": "Star's Guidance",
                    "prerequisites": ["Oracle", "Druid", " Oracle Entry", "Warden of the Primal"],
                    "FlavorText": "Pick Astronomy or Astrology. Gain +2 Skill Points in that skill. You gain the Star’s Guidance ability.",
                    "abilities": [
                        {
                            "abilityname": "Star’s Guidance",
                            "abilitydescription": "Use Astronomy or Astrology in place of a skill with the Survival tag. (1 / Recoup).",
                        },

                    ]
                },
                {
                    "TalentName": "Star's Guidance",
                    "prerequisites": ["Oracle", "Druid", " Oracle Entry", "Warden of the Primal"],
                    "FlavorText": "Pick Astronomy or Astrology. Gain +2 Skill Points in that skill. You gain the Star’s Guidance ability.",
                    "abilities": [
                        {
                            "abilityname": "Star’s Guidance",
                            "abilitydescription": "Use Astronomy or Astrology in place of a skill with the Survival tag. (1 / Recoup).",
                        },

                    ]
                },
                {
                    "TalentName": "Old Gods",
                    "prerequisites": ["Oracle", "Druid", "Divine", "Star’s Guidance", "Wyrd Wood"],
                    "FlavorText": "Gain the Disciple of the Divine talent if you did not already have it.Disciple of the Divine does not grant you additional SP when you gain it in this way.Whenever you gain a talent from this track with the Divine tag, gain + 1 Divine Power. You have taken it upon yourself to maintain a balance between nature and deity. In combat, when you cast a primal chant or spell, gain 1 Primal Proclivity.When you cast a divine prayer or spell, gain 1 Divine Proclivity.At the end of combat, subtract the lesser number from the greater. If the difference is greater than 1, then you immediately lose 2d10 SP and can only cast magic from the Source that had higher Proclivity. You are also Sickened until balance is restored. When you Recoup, you may forego the normal benefits of Recouping to reset this ability.Otherwise, the ability resets upon Taking a Rest.",
                    "abilities": []
                },
                {
                    "TalentName": "Old Gods II",
                    "prerequisites": ["Oracle", "Druid", "Divine", "Warden of the Primal"],
                    "FlavorText": "If you suffer the penalty from having imbalanced Proclivities, you lose 1d10 SP instead of 2d10. If you remain within the difference, you regain 1d6 SP and gain + 1 on attribute checks for the next 1 hour.",
                    "abilities": []
                },
                {
                    "TalentName": "Wyrd Wood",
                    "prerequisites": ["Oracle", "Druid", "Occult", "Star’s Guidance", "Old Gods"],
                    "FlavorText": "Gain the Initiate of the Occult talent if you did not already have it.Initiate of the Occult does not grant you additional SP when you gain it in this way.Whenever you gain a talent from this track with the Occult tag, gain + 1 Occult Power. You have taken it upon yourself to draw the wood’s rot into your own soul so that the wilderness might thrive even as you suffer.Dark Power triggers on a roll of 1-2 for you. Choose two of your primal chants and one of your primal spells to gain Dark Power.Choose what effects they have from your Primeval Darkness menu(p. 117).In combat, when you cast a chant or spell without the Dark Power tag, gain 1 Light Proclivity.When you cast a chant or spell with the Dark Power tag, gain 1 Dark Proclivity.At the end of combat, subtract the lesser number from the greater.If the difference is greater than 1, then you immediately lose 2d10 HP and can only cast magic with or without the Dark Power tag (whichever Proclivity was stronger). You are also Sickened until balance is restored.When you Recoup, you may forego the normal benefits of Recouping to reset this ability.Otherwise, this ability resets when you Take a Rest.",
                    "abilities": []
                },
                {
                    "TalentName": "Wyrd Wood II",
                    "prerequisites": ["Oracle", "Druid", "Occult", "Wyrd Wood"],
                    "FlavorText": "Choose 1-2 additional primal chants and 1-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu.If you suffer the penalty from having imbalanced Proclivities, you lose 1d10 HP instead of 2d10. Whenever you spend SP on a spell with the Dark Powertag in combat, you may choose an ally within 30 ft of you that you can see to gain 1d8 Shield HP as you draw negative energy into yourself.",
                    "abilities": []
                },
                {
                    "TalentName": "Star's Guidance II ",
                    "prerequisites": ["Oracle", "Druid", "Druid 3"],
                    "FlavorText": "Gain +2 Skill Points in either Astrology or Astronomy. Star’s Guidance becomes 2/Recoup.",
                    "abilities": []
                },
                {
                    "TalentName": "Star's Redirection",
                    "prerequisites": ["Oracle", "Druid", "Star’s Guidance II"],
                    "FlavorText": "When you fail a Foraging", "Sheltering, or Navigating check, treat it as if it were the lowest tier of a successful outcome. (1 / Rest) ",
                    "abilities": []
                },
                {
                    "TalentName": "Third Eye",
                    "prerequisites": ["Oracle", "Druid", " Star’s Guidance II"],
                    "FlavorText": "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. Learn one Divining spell from any source, which counts as Primal for you.",
                    "abilities": []
                },
                {
                    "TalentName": "Beast Form",
                    "prerequisites": ["Oracle", "Druid", "DStar’s Guidance II"],
                    "FlavorText": "You can cast Polymorph on yourself without spending SP, but when you use this spell in this way you can only target yourself and can only turn into your choice of creature that is Small or smaller, is appropriate to your current habitator the habitat of your youth, and does not have a Monster Level(such as a squirrel, sparrow, or mundane scorpion). (1 / Rest) ",
                    "abilities": []
                },
                {
                    "TalentName": "Old Gods III",
                    "prerequisites": ["Oracle", "Druid", "Divine", "Druid 5", "Old Gods II"],
                    "FlavorText": "The difference between Proclivities must be greater than 2 in order for you to suffer the penalty.If you suffer the penalty from imbalanced Proclivities, you are Shaken instead of Sickened.",
                    "abilities": []
                },
                {
                    "TalentName": "Wyrd Wood III",
                    "prerequisites": ["Oracle", "Druid", "Occult", "Druid 5", "Wyrd Wood II"],
                    "FlavorText": "Choose 0-2 additional primal chants and 0-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu. The difference between Proclivities must be greater than 2 in order for you to suffer the penalty from imbalanced Proclivities. When Dark Power triggers and you suffer the consequences of Dark Power, every ally within 30 ft of you can gain 1d8 Shield HP as you draw in the negative energy.",
                    "abilities": []
                },
                {
                    "TalentName": "mystic Druid",
                    "prerequisites": ["Oracle", "Druid", "Druid 6"],
                    "FlavorText": "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. You cannot gain Death Points from poison or disease.",
                    "abilities": []
                },
                {
                    "TalentName": "Star's Guidance III",
                    "prerequisites": ["Oracle", "Druid", "Mystic Druid", "Star’s Guidance II"],
                    "FlavorText": "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. You cannot become lost except by magical means.",
                    "abilities": []
                },
                {
                    "TalentName": "Beast Form II",
                    "prerequisites": ["Oracle", "Druid", " Mystic Druid", "Beast Form"],
                    "FlavorText": "When you use Beast Form, you can become a Beast of ML 1 or lower.Beast Form becomes 3/Rest.",
                    "abilities": []
                },
                {
                    "TalentName": "Mystic Druid II",
                    "prerequisites": ["Oracle", "Druid", "Druid 8"],
                    "FlavorText": "You gain the Immortal ability.",
                    "abilities": [
                        {
                            "abilityname": "Immortal",
                            "abilitydescription": "Your natural lifespan doubles.",
                        },
                    ]
                },
                {
                    "TalentName": "Old Gods IV",
                    "prerequisites": ["Oracle", "Druid", "Divine", "Mystic Druid II", " Old Gods III"],
                    "FlavorText": "If you suffer the penalty from imbalanced Proclivities, you lose 1d6 SP instead of 1d10. Moreover, if you remain within the difference, you regain 1d10 SP and have TA on all d20 rolls for the next 1 hour.",
                    "abilities": [],
                },
                {
                    "TalentName": "Wyrd Wood IV",
                    "prerequisites": ["Oracle", "Druid", "Occult", "Mystic Druid II", "Wyrd Wood III"],
                    "FlavorText": "Choose 0-2 additional primal chants and 0-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu. You may voluntarily succumb to Dark Power.If you do, you suffer the Dark Power’s effects, but you also cast that ability as though you had not rolled Dark Power, rolling 2d20 and keeping whichever was higher.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mystic Druid III",
                    "prerequisites": ["Oracle", "Druid", "Occult", "Druid 10"],
                    "FlavorText": "You are immune to poison and disease.",
                    "abilities": [],
                },
                {
                    "TalentName": "Star's Guidance IV",
                    "prerequisites": ["Oracle", "Druid", " Mystic Druid III", "Star’s Guidance III"],
                    "FlavorText": "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. You cannot become lost, including by magical means. Furthermore, while you concentrate on the sky and are not actively engaged in another task, you can always see the stars in the sky, even if it is daytime or you are indoors.",
                    "abilities": [],
                },
                {
                    "TalentName": "Beast Form III",
                    "prerequisites": ["Oracle", "Druid", "Mystic Druid III", "Beast Form II"],
                    "FlavorText": "When you use Beast Form, you can become a Beast of ML 3 or lower.",
                    "abilities": [],
                },
                {
                    "TalentName": "Mystic Druid IV",
                    "prerequisites": ["Oracle", "Druid", "Druid 12"],
                    "FlavorText": "Your Immortal ability becomes: Your natural lifespan increases tenfold.",
                    "abilities": [],
                },
                {
                    "TalentName": "Old Gods V",
                    "prerequisites": ["Oracle", "Druid", "Divine", "Mystic Druid IV", "Old Gods IV"],
                    "FlavorText": "The difference between Proclivities must be greater than 3 for you to suffer the penalty from imbalanced Proclivities. You gain the normal benefits of a Recoup as well as restoring balance when necessary.",
                    "abilities": [],
                },
                {
                    "TalentName": "Wyrd Wood V",
                    "prerequisites": ["Oracle", "Druid", "Occult", "Mystic Druid IV", "Wyrd Wood IV"],
                    "FlavorText": "Choose 0-2 additional primal chants and 0-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu. The difference between Proclivities must be greater than 3 for you to suffer the penalty.When allies gain Shield HP from you using Dark Power, they also gain the Protected condition until the end of your next turn.",
                    "abilities": [],
                },
                {
                    "TalentName": "Archdruid",
                    "prerequisites": ["Oracle", "Druid", " Capstone", "Druid 14"],
                    "FlavorText": "As an archdruid, you look after the untamed wilderness with endless patience and incalculable wisdom. When you sleep, you can enter a trance that lets you meditate and contemplate planar entities.Gain three "abilities": Contemplate, After the Ashes, and Primeval Foresight.",
                    "abilities": [
                        {
                            "abilityname": "Contemplate",
                            "abilitydescription": "You can reselect any primal, psionic, divine, and/ or occult spells that you know. 1 /Week.",
                        },
                        {
                            "abilityname": "After the Ashes",
                            "abilitydescription": "If your primal spells have Dark Power, you can choose whether they keep it, remove it, or gain a different Dark Power ability.",
                        },
                        {
                            "abilityname": "Primeval Foresight",
                            "abilitydescription": "You can reassign some or all of your Oracle talents. 1/Month.",
                        },
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "Your lifespan (including your bonus from Immortal) increases tenfold.",
                        },
                    ]
                }]
        }
                {
                    "TrackName": "Elementalist",
                    "TrackDescription": "You capture the terrible energy of raging fires and storms, turning such harmful effects into powerful elemental shields.",
                    "Talents": [
                        {
                            "TalentName": "Elemental Affinity",
                            "prerequisites": ["Oracle", "Elementalist", "Oracle Entry"],
                            "FlavorText": "Gain Elemental Affinity.",
                            "abilities": [
                                {
                                    "abilityname": "Elemental Affinity",
                                    "abilitydescription": "When you take elemental damage,you can spend 1 Reactive AP to gain Affinity to it(including the damage you just took).The first time you deal any type of damage after taking damage for which you have Affinity, also deal 1d6 damage of that type. You retain this Affinity for 1 min. (2 / Rest) ",
                                },
                            ]
                        }, {
                            "TalentName": "Season's Givings",
                            "prerequisites": ["Oracle", "Elementalist", "Oracle Entry"],
                            "FlavorText": "You grow more in tune with the natural world. Gain Resist 3 to a damage type based on what season it is: Spring = radiant, Summer = fire, Autumn = necrotic, and Winter = cold.",
                            "abilities": [],

                        },
                        {
                            "TalentName": "Repurpose Damage I",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity"],
                            "FlavorText": "Gain one of the abilities with the Repurpose Damage I tag. When you are hit with the corresponding type of damage, you can activate that ability for 1 Reactive AP. You can use any abilities with a Repurpose Damage tag that you know 2 / Rest collectively.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Siphon Damage",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity"],
                            "FlavorText": "Gain another Repurpose Damage ability.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Ice Armor",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
                            "FlavorText": "When you take cold damage, gain DR 4/Fire for 1 minute.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Corrosive Strikes",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
                            "FlavorText": "When you take corrosive damage, you can corrode your attacks.When attacking a single creature, ignore up to Resist 4 of any kind for 1 minute.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Heat Aura",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
                            "FlavorText": "When you take fire damage, gain DR 4/Cold for 1 minute.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Flaming Shield",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
                            "FlavorText": "When you would gain the Burning condition, you may instead cast the Fire Shield spell as if it were primal or psionic without spending SP.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Lightning Fast",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
                            "FlavorText": "When you take lightning damage, gain +4 AP on your next turn.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Sickening Strikes",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
                            "FlavorText": "When you take toxic damage, you can make your attacks toxic.For 1 minute when you attack a single target and hit, the target is Sickened until the end of its next turn.",
                            "abilities": []
                        }, {
                            "TalentName": "Elemental Affinity II",
                            "prerequisites": ["Oracle", "Elementalist", " Elemental Affinity I", "Elementalist 4"],
                            "FlavorText": "You can use Elemental Affinity on allies within 15 ft of you when they take a type of damage that your Elemental Affinity can interact with.Elemental Affinity becomes ½ LUCK / Rest.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Repurpose Damage II",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity II", "Repurpose Damage I"],
                            "FlavorText": "Gain another Repurpose Damage ability from the old list or from talents with the Repurpose Damage II tag. You can learn abilities from the new list with Siphon Damage.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Blood Permeation",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage II", "Repurpose Damage II"],
                            "FlavorText": "When you would gain the Bleeding condition, you can instead regain HP equal to the amount of damage you would take, for 1 minute or until your Bleeding condition would otherwise end(whichever is shorter).",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Blunt Force Armor",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage II", "Repurpose Damage II"],
                            "FlavorText": "When you take Blunt damage, you can convert the force into stone that encases your skin.Gain + 3 AR for 1 minute.",
                            "abilities": [],
                        },
                        {
                            "TalentName": "Elemental Affinity III",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity II",],
                            "FlavorText": "A creature benefitting from Elemental Affinity can gain the Elemental Strikes ability.",
                            "abilities":
                                [
                                    {
                                        "abilityname": "Elemental Strikes",
                                        "abilitydescription": "+1d6 damage of the Affinity type for the duration. (2 / Rest) ",
                                    },
                                ]
                        }, {
                            "TalentName": "Protective Elementalist",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity III", "Repurpose Damage II"],
                            "FlavorText": "Repurpose Damage becomes ½ LUCK/Rest. You can expend your Repurpose Damage on an ally within 15 ft of you when they take that type of damage.",
                            "abilities":
                                []
                        }, {
                            "TalentName": "Protective Elementalist II",
                            "prerequisites": ["Oracle", "Elementalist", "Protective Elementalist"],
                            "FlavorText": "Repurpose Damage becomes LUCK/Rest and can be used on allies within 30 ft of you.",
                            "abilities":
                                []
                        }, {
                            "TalentName": "Elemental Affinity IV",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity III", "Elementalist 9"],
                            "FlavorText": "Regain one use of Elemental Affinity upon Recouping. Affinity can work on energy damage as well.",
                            "abilities":
                                []
                        }, {
                            "TalentName": "Absorb Explosion",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity IV"],
                            "FlavorText": "When you take elemental damage that damaged other creatures, you can cause all other creatures to halve the damage that they took from the blast.On your next turn, you can spend 3 AP to make a special attack in a 60 ft line. + LUCK vs REF of each creature in the line, dealing 3d6 damage of that elemental type and ½ damage on a miss. (1 / Rest) ",
                            "abilities":
                                []
                        }, {
                            "TalentName": "Repurpose Damage III",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity IV", "Repurpose Damage II"],
                            "FlavorText": "Gain an additional Repurpose Damage power, choosing from the old lists or from talents with the Repurpose Damage III tag.Siphon Damage can let you gain abilities from the ne list.",
                            "abilities":
                                []
                        }, {
                            "TalentName": "Bodily Necrosis",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage II"],
                            "FlavorText": "When you take necrotic damage, you can weaken your enemies.For 1 minute when you attack a single creature and hit, that creature is Dazed until the end of its next turn.",
                            "abilities":
                                []
                        }, {
                            "TalentName": "Psychic Resonance",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage III"],
                            "FlavorText": "When you take psychic damage, you can surround yourself in a psychic field. You cannot be Charmed, Enthralled, or Shaken for 1 minute.",
                            "abilities":
                                []
                        }, {

                            "TalentName": "Irradiated Aura",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage III"],
                            "FlavorText": "When you take radiant damage, you burst into radiance for 1 minute.Shed bright light for 30 ft, dim light for 30 ft beyond that, and gain Resist 5 Ammunition.If this causes ammunition to miss, it is burnt to a crisp.",
                            "abilities": []
                        },
                        {
                            "TalentName": "Sonorous Strikes",
                            "prerequisites": ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage III"],
                            "FlavorText": "When you take sonic damage, your attacks become thunderous.For 1 minute when you attack a single creature and hit, that creature also falls Prone if it is Huge or smaller.",
                            "abilities": []
                        },
                        {
                            "TalentName": "Elemental Affinity V",
                            "prerequisites": ["Oracle", "Elementalist", "Elemental Affinity IV", "Elementalist 13"],
                            "FlavorText": "Elemental Strikes also apply to spells that deal damage. Spells that deal damage can be of that damage type or the normal damage type(the creature with Elemental Strikes chooses each time).(2 / Rest).",
                            "abilities": []
                        },
                        {
                            "TalentName": "nce",
                            "prerequisites": ["Oracle", "Elementalist", "Capstone", " Elemental Affinity V "],
                            "FlavorText": "You are a master of all elements, and can blend them together with impeccable ease.The archfae from Ashyidir Conclave itself look upon you as skillful in their arts. Regain one use of Elemental Affinity each time you Recoup. Choose one of your Repurpose Damage abilities.It can be used indefinitely and does not expend your Repurpose Damage usages. Finally, you gain the Superior Affinity ability",
                            "abilities":
                                []
                        },
                        {
                            "TalentName": "Superior Affinity",
                            description: "Affinity negates all damage of that type and heals the recipient for ½ the total damage instead. (1 / Rest).",
                        },
                        {
                            "TalentName": "Level 30 ",
                            description: "Superior Affinity becomes 1/Recoup.",
                        },]
                },
            ]
        },

        {
            "TrackName": "Fate",
            "TrackDescription": "Sometimes called a prophet or diviner, you might gain the ability to see shadows of the future and exert your influence over fate.",
            "Talents": [
                {
                    "TalentName": "Thread Of Fate",
                    "prerequisites": ["Oracle", "Fate", "Oracle Entry"],
                    "FlavorText": "Gain the Boon of Fate ability",
                    "abilities": [
                        {
                            "abilityname": "Boon of Fate",
                            description: "You can spend Luck points to reroll allies’ d20 rolls when they are within 60 ft of you.",
                        },
                    ]
                },

                {
                    "TalentName": "Weal",
                    "prerequisites": ["Oracle", "Fate", "Thread of Fate"],
                    "FlavorText": "Gain the Weal ability.",
                    "abilities": [
                        {
                            "abilityname": "Weal",
                            description: "When you crit on a d20 roll, gain 1 SP. This cannot exceed your maximum SP.",
                        },
                    ]
                },
                {
                    "TalentName": "Weal II - Skills",
                    "prerequisites": ["Oracle", "Fate", "Weal"],
                    "FlavorText": "Your crit range on skills increases by 1.",
                    "abilities": []
                },
                {
                    "TalentName": "Weal II - Spells",
                    "prerequisites": ["Oracle", "Fate", "Weal"],
                    "FlavorText": "Your crit range on spells increases by 1.",
                    "abilities": [
                        {
                            "abilityname": "",
                            description: "",
                        },
                    ]
                },
                {
                    "TalentName": "Weal III - Chants",
                    "prerequisites": ["Oracle", "Fate", " Weal II"],
                    "FlavorText": "Your crit range on chants increases by 1.",
                    "abilities": []
                },
                {
                    "TalentName": "Weal III - Weapons",
                    "prerequisites": ["Oracle", "Fate", "Weal II"],
                    "FlavorText": "Your crit range on weapons increases by 1.",
                    "abilities": []
                },
                {
                    "TalentName": "Weal IV - Fortune's Favor",
                    "prerequisites": ["Oracle", "Fate", "Weal III"],
                    "FlavorText": "When you cast a spell that does not require a d20 roll, you may roll 1d20 anyway to attempt to trigger Woe or Weal.",
                    "abilities": []
                },
                {
                    "TalentName": "Weal IV - Invocations",
                    "prerequisites": ["Oracle", "Fate", "Weal III"],
                    "FlavorText": "Your crit range on invocations increases by 1.",
                    "abilities": []
                },
                {
                    "TalentName": "Thread Of Fate II",
                    "prerequisites": ["Oracle", "Fate", "Weal IV"],
                    "FlavorText": "Gain the Bane of Fate ability",
                    "abilities": [
                        {
                            "abilityname": "Bane of Fate",
                            description: "You can spend Luck points to reroll enemies’ d20 rolls when they are within 60 ft of you. (2 / Rest).",
                        },
                    ]
                },
                {
                    "TalentName": "Who Is Me",
                    "prerequisites": ["Oracle", "Fate", "Thread of Fate II"],
                    "FlavorText": "You crit fail on a roll of 1 or 2.",
                    "abilities": []
                },
                {
                    name: "Thread Of Fate III",
                    "prerequisites": ["Oracle", "Fate", "Woe Is Me"],
                    "FlavorText": "Boon of Fate and Bane of Fate extend to 90 ft range.",
                    "abilities": []
                },
                {
                    name: "Thread Of Fate IV",
                    "prerequisites": ["Oracle", "Fate", "Thread of Fate III"],
                    "FlavorText": "Bane of Fate becomes 2/Recoup.",
                    "abilities": []
                },
                {
                    name: "Great Weal",
                    "prerequisites": ["Oracle", "Fate", "Thread of Fate IV"],
                    "FlavorText": "Choose one Weal ability that you already have: Skills, Spells, Chants, Weapons, or Invocations. Increase your crit range on that choice by 1.",
                    "abilities": []
                },
                {
                    name: "Ambient Luck",
                    "prerequisites": ["Oracle", "Fate", "Great Weal"],
                    "FlavorText": "Gain the Ambient Luck ability.",
                    "abilities": [
                        {
                            "abilityname": "Ambient Luck",
                            "abilitydescription": "When an ally crits within 30 ft of you, regain 1 SP. (LUCK/Rest).",
                        },
                    ],
                },
                {
                    "TalentName": "Manipulate Chance",
                    "prerequisites": ["Oracle", "Fate", "Ambient Luck"],
                    "FlavorText": "Gain the Manipulate Chance ability.",
                    "abilities": [
                        {
                            "TalentName": "Manipulate Chance",
                            description: "You may spend 4 SP to regain an expended Luck point.",
                        },
                    ]
                },
                {
                    "TalentName": "Turn Of Fortune",
                    "prerequisites": ["Oracle", "Fate", " Turn of Fortune"],
                    "FlavorText": "Gain the Turn of Fortune ability",
                    "abilities": [
                        {
                            "abilityname": "Turn of Fortune",
                            "abilitydescription": "When you roll multiple d20s (e.g., you are Sickened), you apply Weal / Woe to all rolls, even though you only use one die to determine the outcome of the roll.",
                        },
                    ]
                },
                {
                    "TalentName": "Fated",
                    "prerequisites": ["Oracle", "Fate", "Great Weal"],
                    "FlavorText": "Gain the Fated ability",
                    "abilities": [
                        {
                            "abilityname": "Fated",
                            "abilitydescription": "Before rolling a d20, call out even or odd. If youare correct, gain + 1 on the roll.",
                        },
                    ],
                },
                {
                    "TalentName": "Fated II",
                    "prerequisites": ["Oracle", "Fate", "Fated"],
                    "FlavorText": "Your Fated bonus becomes +2.",
                    "abilities": []
                },
                {
                    "TalentName": "Fated III",
                    "prerequisites": ["Oracle", "Fate", "Fated II"],
                    "FlavorText": "Your Fated bonus becomes +3.",
                    "abilities": []
                },
                {
                    "TalentName": "Portent",
                    "prerequisites": ["Oracle", "Fate", "Great Weal"],
                    "FlavorText": "Gain the Portent ability.",
                    "abilities": [
                        {
                            "abilityname": "Portent",
                            "abilitydescription": "Regain 1 luck point when you recoup.",
                        },
                    ]
                },
                {
                    "TalentName": "Portent II",
                    "prerequisites": ["Oracle", "Fate", "Portent"],
                    "FlavorText": "Portent becomes: Regain 2 luck points when you recoup.",
                    "abilities": []
                },
                {
                    "TalentName": "Portent III",
                    "prerequisites": ["Oracle", "Fate", "Portent II"],
                    "FlavorText": "Portent becomes: Regain 3 luck points when you recoup.",
                    "abilities": []
                }
                ,
                {
                    "TalentName": "Overcome Woe",
                    "prerequisites": ["Oracle", "Fate", "Turn of Fortune", "Fated III", "or Portent III"],
                    "FlavorText": "When your Woe ability activates, reroll the crit fail on your d20(still gain the Spell Point); keep the second roll.",
                    "abilities": []
                },
                {
                    "TalentName": "Grand Weal",
                    "prerequisites": ["Oracle", "Fate", "Capstone", " Overcome Woe"],
                    "FlavorText": "Throughout select circles of oracles, mystics, and certain religious orders, you are known to be blessed by deities and / or preternaturally lucky through manipulating your own Essence. (Your precise reputation depends upon your character’s backstory, beliefs, personality, and in -world connections.) The choice you made for Great Weal increases its crit range to the maximum possible crit "Range": you crit on a roll of 16-20 with your selection.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "The final cap for your LUCK increases from 12 to 14.",
                        },
                    ]
                }
            ]
        },
        {
            "TrackName": "Guide",
            "TrackDescription": "Whether a mysterious mentor or an eclectic professor, you instruct your pupils in various skills and techniques, helping them all to improve.",
            "Talents": [
                {
                    "TalentName": "Mentor",
                    "prerequisites": ["Oracle", "Guide", "Oracle Entry"],
                    "FlavorText": "Gain 2 Skill Points in any skill. Gain the Mentor ability.",
                    "abilities": [
                        {
                            "abilityname": "Mentor",
                            "abilitydescription": "You can spend 1 AP to lose X points in a Skill to give X points in that skill to 1 ally that you touch.This lasts for 2 hours, whereupon your ally loses that bonus and you regain your normal Skill Points. (AWR / Rest).",
                        },]
                },
                {
                    "TalentName": "Reactive Instruction",
                    "prerequisites": ["Oracle", "Guide", "Mentor"],
                    "FlavorText": "Gain 2 Skill Points in any skill. You may use your Mentor ability reactively.",
                    "abilities": []
                },
                {
                    "TalentName": "Mystic Support",
                    "prerequisites": ["Oracle", "Guide", "Reactive Instruction"],
                    "FlavorText": "When you end your turn with 0 AP, gain 1 special Mystic Support AP that acts as Reactive AP. You lose this AP at the start of your next turn. You can only gain one source of special AP.If you gain a second source of special AP, choose whether you keep this source or your new source.",
                    "abilities": []
                },
                {
                    "TalentName": "Mentor II",
                    "prerequisites": ["Oracle", "Guide", "Mystic Support"],
                    "FlavorText": "Gain 2 Skill Points in any skill. Mentor becomes AWR/ Recoup.",
                    "abilities": []
                },
                {
                    "TalentName": "Mystic Support II",
                    "prerequisites": ["Oracle", "Guide", "Mentor II"],
                    "FlavorText": "Mystic Support gives you 2 Support AP",
                    "abilities": []
                },
                {
                    "TalentName": "Wakeful Serenity",
                    "prerequisites": ["Oracle", "Guide", "Mystic Support II"],
                    "FlavorText": "Gain the Wakeful Serenity ability.",
                    "abilities": [
                        {
                            "abilityname": "Wakeful Serenity",
                            "abilitydescription": "The first time you roll against Fatigue after Recouping, roll 2d20 and use the higher result.",
                        },

                    ]
                },
                {
                    "TalentName": "Wakeful Serenity II",
                    "prerequisites": ["Oracle", "Guide", "Wakeful Serenity"],
                    "FlavorText": "Use Wakeful Serenity whenever you roll against Fatigue, not only the first time after Recouping.",
                    "abilities": []
                },
                {
                    "TalentName": "Talented Mentor",
                    "prerequisites": ["Oracle", "Guide", "Oracle’s Support II"],
                    "FlavorText": "Gain one specialization talent. When you Mentor someone, you can lose access to one of your specialization talents to let them gain that talent.If this would result in you losing Skill Points, you choose how to assign the losses, and regain those Skill Points at the end of the duration.",
                    "abilities": []
                },
                {
                    "TalentName": "Magical Mentor",
                    "prerequisites": ["Oracle", "Guide", "Talented Mentor"],
                    "FlavorText": "Learn an extra spell from the source of magic that you chose when you took Oracle Entry.When you Mentor someone, you can pick a spell, expend SP, and that creature can cast that spell 1 time during their mentorship.They must spend the spell’s normal AP, but not SP, to do so. You lose access to that spell for the duration.",
                    "abilities": []
                },
                {
                    "TalentName": "Guide",
                    "prerequisites": ["Oracle", "Guide", "Magical Mentor"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, you may split your X Skill Points between two creatures, giving them each ½ X. (You cannot choose yourself.) ",
                    "abilities": []
                },
                {
                    "TalentName": "Guide II",
                    "prerequisites": ["Oracle", "Guide", " Guide"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, you can choose two creatures to gain the full benefit(instead of halving the benefit). (You cannot choose yourself.) ",
                    "abilities": []
                },
                {
                    "TalentName": "Guide III",
                    "prerequisites": ["Oracle", "Guide", "Guide II"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, you can choose three creatures within 10 ft of you to gain the full benefit. (You cannot choose yourself.) ",
                    "abilities": []
                },
                {
                    "TalentName": "Guide IV",
                    "prerequisites": ["Oracle", "Guide", "Guide III"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, you can choose five creatures within 10 ft of you to gain the full benefit. (You cannot choose yourself.) ",
                    "abilities": []
                },
                {
                    "TalentName": "Apprentice",
                    "prerequisites": ["Oracle", "Guide", "Magical Mentor"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, you may lose Skill Points in two skills, granting the creature that you touch bonus Skill Points in both of those skills.",
                    "abilities": []
                },
                {
                    "TalentName": "Apprentice II",
                    "prerequisites": ["Oracle", "Guide", "Apprentice"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, you may lose Skill Points in three skills, granting the creature that you touch bonus Skill Points in all of those skills.",
                    "abilities": []
                },
                {
                    "TalentName": "Apprentice III",
                    "prerequisites": ["Oracle", "Guide", "Apprentice II"],
                    "FlavorText": "Gain 2 Skill Points in any skill. When you use your Mentor ability, the target creature can exceed the + 20 cap in Skill Points.",
                    "abilities": []
                },
                {
                    "TalentName": "Apprentice IV",
                    "prerequisites": ["Oracle", "Guide", "Oracle EntryApprentice III"],
                    "FlavorText": "Gain 2 Skill Points in any Skill. Gain the Expert Guidance ability.",
                    "abilities": [
                        {
                            "abilityname": "Expert Guidance",
                            "abilitydescription": "When you use your Mentor ability, the target creature gains 2X the Skill Points in one skill that you lend to them. (1 / Rest) ",
                        },

                    ]
                },
                {
                    "TalentName": "Mystic Support III",
                    "prerequisites": ["Oracle", "Guide", "Guide IV or Apprentice IV"],
                    "FlavorText": "Mystic Support gives you 3 Support AP",
                    "abilities": []
                },
                {
                    "TalentName": "Talented Mentor II",
                    "prerequisites": ["Oracle", "Guide", "Mystic Support III"],
                    "FlavorText": "Gain one specialization talent. When you Mentor someone, you can lose access to two of your specialization talents to let them gain those talents.If this would result in you losing Skill Points, you choose how to assign the losses, and regain those Skill Points at the end of the duration.",
                    "abilities": []
                },
                {
                    "TalentName": "Magical Mentor II",
                    "prerequisites": ["Oracle", "Guide", "Talented Mentor II"],
                    "FlavorText": "Learn an extra spell from the source of magic that you chose when you took Oracle Entry.When you Mentor someone, you can pick one spell and one chant or invocation, expend SP for the spell(and a slot for the invocation if selected), and that creature can cast those abilities one time each during their mentorship. You lose access to the spells for that time.",
                    "abilities": []
                },
                {
                    "TalentName": "Superior Mentor",
                    "prerequisites": ["Oracle", "Guide", "Magical Mentor II"],
                    "FlavorText": "You are known across vast swathes of your continent as a brilliant mentor.Kings seek your counsel, and wealthy merchants and nobles dream of having you tutor their children for an afternoon.Your reputation is often sufficient to curry favors with nobles and to arrange meetings with people of import the day that you request such meetings. Gain 12 Skill Points, which you can spend on any skills of your choice. You may use your Mentor ability indefinitely. People who train with you for at least 1 hour per day and at least 4 days per week can gain 1 Skill Point per month in any skill for which you have at least a + 10.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "When you use your Mentor ability, receiving creatures gain + Y in the Skill Points they gain from you, where Y equals your AWR. (This cannot exceed the maximum + 20 Skill Point cap unless you have Apprentice III).",
                        },

                    ]

                }
            ]
},
    ]
};