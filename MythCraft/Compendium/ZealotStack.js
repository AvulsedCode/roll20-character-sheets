const Zealot = {
    stackname: "Zealot",
    shortDescription: "Loyal and stalwart, zealots remain utterly dedicated to their cause, punishing evildoers or standing between evil and the innocent.",
    quote: {
        phrase: "No matter the adversity, I hold to my convictions.I will bring light to the shadow, food to the hungry, and comfort to the afflicted.I will stand as a shield for those who cannot defend themselves, and a sentinel for the weary.For I am a good boy.",
        quotedsname: "Chauncey",
        title: "",
    },
    longDescription: "You have always been a serious person. As a child you took playing with a somber gravity and it greatly upset you when another child broke the rules.In your adolescence you were often dismayed by the lackadaisical nature of your contemporaries.At some point along the way, you found a cause to which you dedicated your very soul.This transformation has led you to seek out a sacred order or deity to whom you have pledged your allegiance. You now strive to undertake acts of selflessness and zeal for the betterment of the world in accordance with the tenets of your faith. You are undoubtedly dedicated to your beliefs with keen resolve.How do you approach those who do not share your convictions? Do you seek to persuade folk to adopt your tenets as their own, or do you try to learn the beliefs of other creatures and the reasons behind those beliefs? Maybe you engage in a mix of both approaches.",

    entryTalent: {
        prerequisites: ["Class Entry", "", "Character Level 2"],
        flavorTest: "When you take this entry talent, you gain the following abilities.",
        abilities: [
            {
                abilityname: "Just Defender",
                abilitydescription: "Gain one Talent from the Combat Specialization Stack.This talent must be from the Defenses Stack.You gain the Holy Cause ability.",
            },
            {
                abilityname: "Holy Cause",
                abilitydescription: "You may spend 1 Reactive AP to cancel one condition when an ally within 10 ft of you suffers from that condition.You are only able to cancel the Charmed condition with this ability. (AWR / Rest) ",
            },
            {
                abilityname: "Aura",
                abilitydescription: "Gain one aura talent of your choice. You may activate an Aura by spending 3 AP on your turn.The Aura lasts for 10 minutes or until you choose to end it early (costing 0 AP) or cast another Aura.Your Aura�s radius is 10 ft. (AWR / Rest) ",
            },
            {
                abilityname: "Divine",
                abilitydescription: "You gain +1 Divine Power from this talent and from every talent you take in the zealot stack.You do notgain additional SP unless noted in an individual talent.",
            },
        ]

    },
    tracks: [
        {
            trackname: "Aura",
            trackdescription: "Gain powerful auras that bolster yourself and your allies against the encroaching darkness.",
            talents: [
                {
                    talentname: "Aura",
                    prerequisites: ["Zealot", "Aura Enhancement", "Repeatable", "Zealot Entry"],
                    flavorTest: "Gain one additional Aura of your choice. When you activate your Aura, choose which Aura you use out of the ones thyou know.",
                    abilities: [


                    ],
                }, {
                    talentname: "Combined Aura",
                    prerequisites: ["Zealot", "Aura Enhancement", "Repeatable", "Zealot Entry"],
                    flavorTest: "By spending two uses of your Aura, you may activate two different Auras simultaneously, spending the normal number of AP that it costs you to cast one Aura.",
                    abilities: [],
                }, {
                    talentname: "Combined Aura II",
                    prerequisites: ["Zealot", "Aura Enhancement", "Combined Aura"],
                    flavorTest: "By spending three uses of your Aura, you may activate three different Auras simultaneously, spending the normal number of AP that it costs you to cast one Aura.",
                    abilities: [],
                }, {
                    talentname: "Combined Aura III",
                    prerequisites: ["Zealot", "Aura Enhancement", "Combined Aura II"],
                    flavorTest: "By spending four uses of your Aura, you may activate four different Auras simultaneously, spending the normal number of AP that it costs you to cast one Aura.",
                    abilities: [],
                }, {
                    talentname: "Extended Aura",
                    prerequisites: ["Zealot", "Aura Enhancement", "Zealot Entry"],
                    flavorTest: "Your Aura�s radius extends by +5 ft.",
                    abilities: [],
                }, {
                    talentname: "Extended Aura II",
                    prerequisites: ["Zealot", "Aura Enhancement", "Extended Aura"],
                    flavorTest: "Your Aura�s radius extends by +5 ft.",
                    abilities: [],
                }, {
                    talentname: "Extended Aura III",
                    prerequisites: ["Zealot", "Aura Enhancement", "Extended Aura II"],
                    flavorTest: "Your Aura�s radius extends by +10 ft.",
                    abilities: [],
                }, {
                    talentname: "Extended Aura IV",
                    prerequisites: ["Zealot", "Aura Enhancement", "Extended Aura III"],
                    flavorTest: "Your Aura�s radius extends by +10 ft.",
                    abilities: [],
                }, {
                    talentname: "Extended Aura V",
                    prerequisites: ["Zealot", "Aura Enhancement", "Extended Aura IV"],
                    flavorTest: "Your Aura�s radius extends by +10 ft.",
                    abilities: [],
                }, {
                    talentname: "Extended Aura VI",
                    prerequisites: ["Zealot", "Aura Enhancement", "Extended Aura V"],
                    flavorTest: "Your Aura�s radius extends by +20 ft.",
                    abilities: [],
                }, {
                    talentname: "Frequent Aura",
                    prerequisites: ["Zealot", "Aura Enhancement", "Zealot Entry"],
                    flavorTest: "You regain expended uses of your Aura after Recouping.",
                    abilities: [],
                }, {
                    talentname: "Frequent Aura II",
                    prerequisites: ["Zealot", "Aura Enhancement", "Frequent Aura", "Zealot 7"],
                    flavorTest: "You regain expended uses of your Aura after Catching Breath.",
                    abilities: [],
                }, {
                    talentname: "Frequent Aura III",
                    prerequisites: ["Zealot", "Aura Enhancement", "Frequent Aura II", "Zealot 24"],
                    flavorTest: "You have unlimited uses of your Aura.",
                    abilities: [],
                }, {
                    talentname: "Quickened Aura",
                    prerequisites: ["Zealot", "Aura Enhancement", "Zealot Entry"],
                    flavorTest: "Your Aura costs 1 fewer AP to cast (min 1).",
                    abilities: [],
                }, {
                    talentname: "Quickened Aura II",
                    prerequisites: ["Zealot", "Aura Enhancement", "Quickened Aura"],
                    flavorTest: "Your Aura costs 1 fewer AP to cast (min 1).",
                    abilities: [],
                }, {
                    talentname: "Reactive Aura",
                    prerequisites: ["Zealot", "Aura Enhancement", "Zealot Entry"],
                    flavorTest: "You may use Reactive AP to activate your Aura, spending the normal number of AP that it costs you to cast your Aura.",
                    abilities: [],
                }, {
                    talentname: "Auras",
                    description: "",
                    talents: [],
                }, {
                    talentname: "Aura Of Aggression",
                    prerequisites: ["Zealot", "Aura", "Zealot Entry"],
                    flavorTest: "You and all creatures of your choice within your Aura�s radius deal + 2 damage whenever they hit a creature with an attack.",
                    abilities: [],
                }, {
                    talentname: "Aura Of Aggression II",
                    prerequisites: ["Zealot", "Aura", "Aura of Aggression", "Divine 7"],
                    flavorTest: "You and all creatures of your choice within your Aura�s radius deal + 5 damage whenever they hit a creature with an attack.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Aggression III",
                    prerequisites: ["Zealot", "Aura", "Aura of Aggression II", "Divine 12"],
                    flavorTest: "You and all creatures of your choice within your Aura�s radius deal additional damage equal to your AWR(min 5) whenever they hit a creature with an attack.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Protection",
                    prerequisites: ["Zealot", "Aura", "Zealot Entry"],
                    flavorTest: "You and all creatures of your choice within your Aura�s radius gain + 1 to their mental defenses(ANT, LOG, and WILL).",
                    abilities: [

                    ],
                }, {
                    talentname: "Bodily Protection",
                    prerequisites: ["Zealot", "Aura", "Aura of Protection"],
                    flavorTest: "Your Aura of Protection applies to creatures� physical defenses as well(REF and FORT).",
                    abilities: [

                    ],
                }, {
                    talentname: "Bodily Protection II",
                    prerequisites: ["Zealot", "Aura", "Bodily Protection", "Divine 7"],
                    flavorTest: "Your Aura of Protection applies to creatures� AR as well.",
                    abilities: [

                    ],
                }, {
                    talentname: "Bulwark",
                    prerequisites: ["Zealot", "Aura", "Aura of Protection"],
                    flavorTest: "Your Aura of Protection enhances creatures� defenses by +1.",
                    abilities: [

                    ],
                }, {
                    talentname: "Bulwark II",
                    prerequisites: ["Zealot", "Aura", "Bulwark"],
                    flavorTest: "Your Aura of Protection enhances creatures� defenses by 1 more than it did previously.",
                    abilities: [

                    ],
                }, {
                    talentname: "Bulwark III",
                    prerequisites: ["Zealot", "Aura", "Bulwark II"],
                    flavorTest: "Your Aura of Protection enhances creatures� defenses by 1 more than it did previously.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Reduction",
                    prerequisites: ["Zealot", "Aura", "Zealot Entry"],
                    flavorTest: "You and all creatures of your choice within your Aura�s radius gain DR 2/Magic.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Reduction II",
                    prerequisites: ["Zealot", "Aura", "Aura of Reduction", "Zealot 7"],
                    flavorTest: "Aura of Reduction grants targets DR 3/Magic.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Reduction III",
                    prerequisites: ["Zealot", "Aura", "Aura of Reduction II", "Zealot 12"],
                    flavorTest: "Aura of Reduction grants targets DR 5/Magic.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Vitality",
                    prerequisites: ["Zealot", "Aura", "Zealot Entry"],
                    flavorTest: "You and all creatures of your choice within your Aura�s radius gain Shield HP equal to your AWR at the start of their turn.",
                    abilities: [

                    ],
                }, {
                    talentname: "Aura Of Vitality II ",
                    prerequisites: ["Zealot", "Aura", "Aura of Vitality", "Zealot 12"],
                    flavorTest: "You and all creatures of your choice within your Aura do not gain Death Points at the end of your turns if you end your turn with 0 HP.",
                    abilities: []
                }],
        },
        {

            trackname: "Cavalier",
            trackdescription: "Bond with a mystic steed, on whom you can ride into battle.",
            talents: [
                {
                    talentname: "Holy Mount",
                    prerequisites: ["Zealot", "Cavalier", "Zealot Entry"],
                    flavorTest: "You gain a companion mount that is unusually intelligent and can communicate basic thoughts, feelings, and ideas to you telepathically.It has the stats of a Draft Horse(although your MC may allow you other options for your mount) and your mount has - 1 INT instead of - 3. You can choose your mount�s appearance and your mount has the Divine tag. Each time you complete a rest, you must spend 15 minutes tending to your mount.If you do not, then it ignores you for the day(perhaps it is dispelled or on another plane, or maybe it is just off foraging for food on its own).Your mount always finds its own sustenance, either magically or through mundane means(at your discretion).",
                    abilities: [],
                }, {
                    talentname: "Cavalier",
                    prerequisites: ["Zealot", " Cavalier", "Holy Mount"],
                    flavorTest: "Gain +2 Skill Points in Animal Handling and +2 in one skill of your choice with the Survival tag.You can mount and dismount your holy mount with 5 ft of movement instead of spending an AP to mount or dismount.",
                    abilities: [

                    ],
                }, {
                    talentname: "Holy Mount II",
                    prerequisites: ["Zealot", "Cavalier",],
                    flavorTest: "Your holy mount�s stats improve. Add your Divine Power to its max HP, and all of its defenses increase by 1.",
                    abilities: [

                    ],
                }, {
                    talentname: "Cavalier II",
                    prerequisites: ["Zealot", "Cavalier", "Holy Mount II"],
                    flavorTest: "You gain +1 MCAP while riding your holy mount.Gain one Cavalier ability from the Cavalier Abilities list.",
                    abilities: [

                    ],
                }, {
                    talentname: "Holy Mount III",
                    prerequisites: ["Zealot", "Cavalier", "Cavalier II",],
                    flavorTest: "Your mount can use the stats of a riding horse or camel (your MC might choose to allow additional options). You can spend 1 MCAP on your turn to allow your mount to make one of their basic attacks.",
                    abilities: [

                    ],
                }, {
                    talentname: "Cavalier III",
                    prerequisites: ["Zealot", "Cavalier", "Cavalier III",],
                    flavorTest: "Gain +2 Skill Points in Animal Handling and +2 in one skill of your choice with the Survival tag. Gain a second Cavalier ability.",
                    abilities: [],
                }, {
                    talentname: "Holy Mount IV",
                    prerequisites: ["Zealot", "Cavalier", "Cavalier III",],
                    flavorTest: "Your mount can use the stats of a warhorse or giant elk (your MC might choose to allow additional options). Your mount�s defense bonus increases to +2. You can spend 2 MCAP on your turn to allow your mount to make one of their special attacks, if they have one.",
                    abilities: [

                    ],
                }, {
                    talentname: "Cavalier IV",
                    prerequisites: ["Zealot", "Cavalier", "Holy Mount IV",],
                    flavorTest: "Gain +2 Skill Points in Animal Handling and +2 in one skill of your choice with the Survival tag. Gain a third Cavalier ability.",
                    abilities: [

                    ],
                }, {
                    talentname: "Holy Mount V",
                    prerequisites: ["Zealot", "Cavalier", "Cavalier IV",],
                    flavorTest: "Your mount can use the stats of a pegasus or ponycorn (your MC might choose to allow additional options). Your mount�s defense bonus increases to +3.",
                    abilities: [],
                }, {
                    talentname: "Cavalier V",
                    prerequisites: ["Zealot", "Cavalier", "Holy Mountr V",],
                    flavorTest: "You gain another +1 MCAP while riding your holy mount. One of your three Cavalier choices becomes Enhanced.",
                    abilities: []
                }
            ]
        },


        {
            trackname: "Consecrated Blade",
            trackdescription: "You can enchant a weapon, turning it into a powerful artifact capable of smiting evil wherever it might lurk.",
            talents: [
                {
                    talentname: "Holy Weapon",
                    prerequisites: ["Zealot", "Consecrated Blade", "Zealot Entry"],
                    flavorTest: "Learn the Holy Weapon ritual, ignoring its Divine 7 Prerequisite.If you already knew it, learn one ritual of your choice if you meet its prerequisites.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Unwavering",
                    prerequisites: ["Zealot", "Consecrated Blade", "Holy Weapon"],
                    flavorTest: "Gain +4 Skill Points that you may spend on skills with the Athleticism or Endurance tags. While wielding your holy weapon, you cannot be disarmed.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Ardent Weapon",
                    prerequisites: ["Zealot", "Consecrated Blade", "Unwavering"],
                    flavorTest: "Your holy weapon also deals +1d6 damage against the creature tag that you chose when you cast the ritual.When you cast the ritual choose whether the damage is physical, fire, radiant, or necrotic.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Blessed Blade",
                    prerequisites: ["Zealot", "Consecrated Blade", "Ardent Weapon"],
                    flavorTest: "Any creature that can see you may use your Holy Weapon and gain its full benefits.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Zealot's Resolve",
                    prerequisites: ["Zealot", "Consecrated Blade", "Blessed Blade"],
                    flavorTest: "Your +1 bonus from the Holy Weapon also applies to mental defenses.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Holy Arsenal",
                    prerequisites: ["Zealot", "Consecrated Blade", "Zealot�s Resolve", "Versatile Weapon"],
                    flavorTest: "When you use Holy Weapon, you can bless two weapons, choosing the same or different creatures for each weapon. (1 / Week) ",
                    abilities: [

                    ]
                },
                {
                    talentname: "Blessed Blade II",
                    prerequisites: ["Zealot", "Consecrated Blade", "Holy Arsenal"],
                    flavorTest: "Any creature can use your Holy Weapon, even without seeing you.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Versatile Weapon",
                    prerequisites: ["Zealot", "Consecrated Blade", "Zealot�s Resolve", "Holy Arsenal"],
                    flavorTest: "Choose an extra creature tag when you cast Holy Weapon. Your Holy Weapon gains its benefits against creatures with either tag. ",
                    abilities: [

                    ]
                },
                {
                    talentname: "Ardent Weapon II",
                    prerequisites: ["Zealot", "Consecrated Blade", "Versatile Weapon"],
                    flavorTest: "Your holy weapon also has a +1 crit range against any creature tag that you chose.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Consecrated Weapon",
                    prerequisites: ["Zealot", "Consecrated Blade", " Consecrated Blade 7"],
                    flavorTest: "One weapon that you bless as a Holy Weapon is your Consecrated Weapon.It has a + 2 bonus instead of + 1.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Zealot's Resolve II",
                    prerequisites: ["Zealot", "Consecrated Blade", "Consecrated Weapon"],
                    flavorTest: "Holy Weapon bonus also applies to physical defenses.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Recall",
                    prerequisites: ["Zealot", "Consecrated Blade", "Zealot�s Resolve II",],
                    flavorTest: "When within 200 ft of your weapon, you can call your weapon back to your hand for 1 AP.If another creature is holding it, make an END attack against that creature�s FORT. If you succeed, your weapon returns to you.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Holy Lance",
                    prerequisites: ["Zealot", "Consecrated Blade", "Recall"],
                    flavorTest: "Your Consecrated Weapon gains the Thrown 40 ft property if it didn�t have the thrown property.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Ethereal Recall",
                    prerequisites: ["Zealot", "Consecrated Blade", "Recall", "Bloody Recall"],
                    flavorTest: "When you use Recall, by spending 1 additional AP you no longer have to draw an unobstructed line as your weapon becomes ethereal and flies through walls.You no longer need to make an attack to recall it if another creature is holding it; you automatically succeed.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Bloody Recall",
                    prerequisites: ["Zealot", "Consecrated Blade", "Recall", "Ethereal Recall"],
                    flavorTest: "When you use Recall, you may spend 3 additional AP to attack all creatures in a line between you and your weapon as it returns to your hand.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Holy Arsenal II",
                    prerequisites: ["Zealot", "Consecrated Blade", "Recall", "Blessed Blade II"],
                    flavorTest: "When you use Holy Weapon, you can bless three weapons. (1 / Week)",
                    abilities: [

                    ]
                },
                {
                    talentname: "Versatile Weapon II",
                    prerequisites: ["Zealot", "Consecrated Blade", "Recall", "Ardent Weapon II"],
                    flavorTest: "Choose an extra creature tag when you cast Holy Weapon. Your Holy Weapon gains its benefits against creatures with any tag that you chose.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Rrward",
                    prerequisites: ["Zealot", "Consecrated Blade", " Consecrated Blade 11", "Punishment"],
                    flavorTest: "A Holy Weapon made by your ritual has 1 charge. A creature can cast Healing Touch using this charge.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Punishment",
                    prerequisites: ["Zealot", "Consecrated Blade", "Consecrated Blade 11", "Reward"],
                    flavorTest: "A Holy Weapon made by your ritual has 1 charge. A creature can cast Shining Bolt using this charge.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Consecrated Weapon II",
                    prerequisites: ["Zealot", "Consecrated Blade", "Consecrated Blade 12"],
                    flavorTest: "Your Consecrated Weapon has a +3 bonus instead of +2.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Zealot's Resolve III",
                    prerequisites: ["Zealot", "Consecrated Blade", "Consecrated Weapon II"],
                    flavorTest: "Holy Weapon damage bonus applies to damage, attacks, mental, physical, and AR defenses.",
                    abilities: [

                    ]
                },
                {
                    talentname: "Weapon Of Legend",
                    prerequisites: ["Zealot", "Consecrated Blade", "Capstone", "Zealot�s Resolve III"],
                    flavorTest: "Your weapon has untold fame and your reputation benefits accordingly.Enemies might boastfully challenge you or act super deferential out of fear.Kings and generals will herald you with great feasts in your honor.Knights and soldiers will seek to learn from you. Your Consecrated Weapon bonus is + 4. Reward / Punish with Consecrated Weapons can be done 3/day.",
                    abilities: [
                        {
                            abilityname: "Level 30",
                            abilitydescription: "All of your benefits from Weapon of Legend become permanent.You lose the consecrate weapon ability permanently, but your Consecrated Weapon bonus increases to + 4 and the Reward / Punish bonus is 5 / day.This weapon costs no Essence for you, but its benefits remain after you die, and it takes 40 Essence for another creature to bond with this item.",
                        },
                    ]
                }
            ]
        },
        {
            trackname: "Crusader",
            trackdescription: "As a sword for the just and a shield for the innocent, you lead a crusade against the forces of evil.",
            talents: [
                {
                    talentname: "Crusader Aspirant",
                    prerequisites: ["Zealot, Crusader,Zealot Entry"],
                    flavorTest: "Gain the first rank of the Knight profession. If you already have it, you do not gain additional Skill Points, but you can use your rank 1 feature one additional time per day.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword Fod Justice",
                    prerequisites: ["Zealot, Crusader,Crusader Aspirant"],
                    flavorTest: "Gain the Divine Infusion ability.",
                    abilities: [
                        {
                            abilityname: "Divine Infusion",
                            abilitydescription: "Spend 1 AP when you touch an allied creature or when you hit with a weapon attack.Choose an ally and heal 1d10 HP, or hit an enemy with the weapon and deal + 1d10 radiant. (2 / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Sword Fod Justice II",
                    prerequisites: ["Zealot, Crusader,Sword for Justice"],
                    flavorTest: "Choose a planar or magical creature tag: arcane, avadri, celestial, divine, eldritch, fae, fiend, occult, primal, or psionic.When you use Divine Infusion, if the target is that type of creature or undead, deal + 1d10 damage.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword Fod Justice III",
                    prerequisites: ["Zealot, Crusader,Sword for Justice II"],
                    flavorTest: "Gain the Cleanse ability.",
                    abilities: [
                        {
                            abilityname: "Cleanse",
                            abilitydescription: " Spend 3 AP to make a magical AWR attack against a creature�s WILL.If you hit, the creature takes 1d6 psychic and you can remove a condition from that creature: Focused, Protected, or Rallied.If you miss, you do not expend a use of this ability. (2 / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Sword Fod Justice IV",
                    prerequisites: ["Zealot, Crusader,Sword for Justice III"],
                    flavorTest: "When you use Divine Infusion, roll +1d10 if used for healing an ally.",
                    abilities: [],
                },
                {
                    talentname: "Shield The Innovent",
                    prerequisites: ["Zealot, Crusader,Crusader Aspirant"],
                    flavorTest: "Gain the Purge Unholy ability.",
                    abilities: [
                        {
                            abilityname: "Purge Unholy",
                            abilitydescription: "Spend 4 AP to speak a holy word censuring the unholy.Make a magical AWR attack against the WILL of each hostile undead within 30 ft of you.On a hit, a creature is Broken for 1 minute or until they take damage.On a miss, a creature is Broken until the end of their next turn or until they take damage. (2 / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Shield The Innovent II",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent"],
                    flavorTest: "Choose one planar or magical creature tag: arcane, avadri, celestial, divine, eldritch, fae, fiend, occult, primal, or psionic.When you use Purge Unholy, it targets both undead and that choice.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shield The Innovent III",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent II"],
                    flavorTest: "Gain the Intercede ability.",
                    abilities: [
                        {
                            abilityname: "Intercede",
                            abilitydescription: "When an ally within 30 ft takes damage, you take all the damage instead.The ally still suffers other effects. (2 / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Shield The Innovent IV",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent III"],
                    flavorTest: "Creatures that you hit with Purge the Unholy also take 1d8 radiant damage on a hit.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Crusader Postulant",
                    prerequisites: ["Zealot, Crusader,Crusader 5"],
                    flavorTest: "Gain the second rank of the Knight profession. If you already have it, you do not gain additional Skill Points, but you gain one additional Page in your employ.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice V",
                    prerequisites: ["Zealot, Crusader, Sword for Justice IV, Crusader Postulant"],
                    flavorTest: "Cleanse now deals 2d6 damage and removes all three conditions.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice VI",
                    prerequisites: ["Zealot, Crusader, Sword for Justice V"],
                    flavorTest: "Cleanse costs 1 fewer AP (min 1) and is � AWR/Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice VII",
                    prerequisites: ["Zealot, Crusader, Sword for Justice VI"],
                    flavorTest: "Gain the Holy Sword Ability.",
                    abilities: [
                        {
                            abilityname: "Holy Sword",
                            abilitydescription: "You may spend 3 AP to pick an enemy within 5 ft of you, who becomes Engaged until the start of your next turn.You deal + 1d6 radiant damage if you make a reactive attack against a creature Engaged in this way.",
                        },
                    ],
                },
                {
                    talentname: "Sword For Justice VIII",
                    prerequisites: ["Zealot, Crusader, Sword for Justice VII"],
                    flavorTest: "Gain the Cleansing Fire ability.",
                    abilities: [
                        {
                            abilityname: "Cleansing Fire",
                            abilitydescription: "When you use Cleanse, you may also use Cleansing Fire.This removes any passive spells or magical effects that are improving the creature�s stats, such as Minor Augmentation. (2 / Rest) ",
                        },
                    ],
                },
                {
                    talentname: "Shield The Innovent V",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent IV", "Crusader Postulant"],
                    flavorTest: "When you use Intercede, you may also suffer any conditions/ effect instead of your ally.Intercede becomes � AWR / Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shield The Innovent VI",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent V"],
                    flavorTest: "Gain Second Wind.",
                    abilities: [
                        {
                            abilityname: "Second Wind",
                            abilitydescription: "If you are Bloodied, spend 1 AP to regain HP equal to 1d6 + AWR. (� AWR / Rest) ",
                        },
                    ],
                },
                {
                    talentname: "Shield The Innovent VII",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent IV"],
                    flavorTest: "Choose another creature type from Shield the Innocent II.Purge Unholy works on all three creature types.Purge Unholy also costs 1 fewer AP(min 1).",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shield The Innovent VIII",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent VII"],
                    flavorTest: "Gain the Holy Shield ability.",
                    abilities: [
                        {
                            abilityname: "Holy Shield",
                            abilitydescription: "You may spend 3 AP to pick an enemy within 5 ft of you, who becomes Engaged for 1 minute. (AWR / Rest) ",
                        },
                    ],
                },
                {
                    talentname: "Crusader Ordinant",
                    prerequisites: ["Zealot, Crusader,Crusader Postulant, Crusader 10"],
                    flavorTest: "Gain the third rank of the Knight profession. If you already have it, you do not gain additional Skill Points, but you gain one additional Squire in your employ.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice IX",
                    prerequisites: ["Zealot, Crusader,Sword for Justice VIII, Crusader Ordinant"],
                    flavorTest: "Choose two more creature types that Divine Infusion does more damage on.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice X",
                    prerequisites: ["Zealot, Crusader, Sword for Justice IX"],
                    flavorTest: "Cleanse does 3d6 damage and is AWR/Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice XI",
                    prerequisites: ["Zealot, Crusader, Sword for Justice X"],
                    flavorTest: "Regain one use of Divine Infusion when you Recoup. You can use Divine Infusion � AWR/ Rest. When you roll the highest number on a Divine Infusion die that would heal HP or deal damage, set that die aside and roll another die of the same size.Repeat this process until you have no new maximum rolls, then add all of those numbers together for your total healing or damage.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Sword For Justice XII",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent XI"],
                    flavorTest: "Cleanse does � damage on a miss, and you can use Cleansing Fire any time you Cleanse.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shield The Innocent IX",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent VIII, Crusader Ordinant"],
                    flavorTest: "Purge Unholy does +1d8 radiant damage. Pick 1 more creature tag for Purge Unholy to work against.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shield The Innocent X",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent IX"],
                    flavorTest: "Reduce damage you take from Intercede by 1d6+AWR. Intercede becomes AWR/ Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shield The Innocent XI",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent X"],
                    flavorTest: "Regain one use of Purge Unholy when you Recoup. Purge Unholy becomes � AWR/ Rest.When you roll the highest number on a Purge Unholy die that would deal damage, set that die aside and roll another die of the same size.Repeat this process until you have no new maximum rolls, then add all of those numbers together for your total healing or damage.",
                    abilities: [

                    ],
                }, {
                    talentname: "Shield The Innocent XII",
                    prerequisites: ["Zealot, Crusader,Shield the Innocent XI"],
                    flavorTest: "Second Wind becomes 1d8. Second Wind is AWR/Rest.",
                    abilities: [

                    ],
                }, {
                    talentname: "Crusader Iemplar",
                    prerequisites: ["Zealot, Crusader,Capstone, Crusader Ordinant, Crusader 14"],
                    flavorTest: "You are known far and wide as a defender of the weak and a devoted soldier to your ideals. Whenever you are within 30 miles of a settlement and you have at least 3 Goodwill in that settlement, you can intimidate potential foes when you roll Initiative.Any creature that has a level equal to or lower level than your level, or Monster Level equal to or lower than half your level, must roll a CHA check upon entering combat with you if they can see you, or if they have heard tale or seen evidence of your presence(but you must actually be there), and if they do not beat 10+Your CHA, they are Shaken until the end of their next rest whenever you are within 30 ft of them.If they beat the DC or you become bloodied, they are immune to this ability until the end of their next rest.",
                    abilities: [
                        {
                            abilityname: "Level 30",
                            abilitydescription: "Creatures who fail their CHA check will make a reasonable effort to avoid combat with you, potentially by retreating or negotiating.If they are being actively led by a creature that is equal to or greater ML than your Character Level, half of them will flee.",
                        },
                    ],
                }
            ]
        },
        {
            trackname: "Holy Cause",
            trackdescription: "Your very presence is enough to help other creatures remain true to their convictions, even against strong temptations.",
            talents: [
                {
                    talentname: "Holy Cause II",
                    prerequisites: ["Zealot, Holy Cause,Zealot Entry"],
                    flavorTest: "Holy Cause also works on Shaken (choose one condition each time).",
                    abilities: [

                    ],
                },
                {
                    talentname: "Inspirational",
                    prerequisites: ["Zealot", "Holy Cause", "Holy Cause II"],
                    flavorTest: "You gain the Inspirational ability.",
                    abilities: [
                        {
                            abilityname: "Inspirational",
                            abilitydescription: "While you have an Aura active, you may choose for affected creatures in the Aura to gain tactical advantage for 5 minutes while in the Aura. (CHA / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Lay On Hands",
                    prerequisites: ["Zealot, Holy Cause,Inspirational"],
                    flavorTest: "You gain the Lay on Hands ability.",
                    abilities: [
                        {
                            abilityname: "Lay on Hands",
                            abilitydescription: "You may touch yourself or a creature and spend 2 AP to restore 3 HP to that creature. (2 / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Inspire Fear",
                    prerequisites: ["Zealot, Holy Cause, Lay on Hands"],
                    flavorTest: "You gain the Inspire Fear ability.",
                    abilities: [
                        {
                            abilityname: "Inspire Fear",
                            abilitydescription: "While you have an Aura active, you may spend 2 AP to impose TD on all hostile creatures in the Aura for 5 minutes while they remain in the Aura. (CHA / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Lay On Hands II",
                    prerequisites: ["Zealot, Holy Cause,Inspire Fear"],
                    flavorTest: "Lay on Hands becomes 3/Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Lay On Hands III",
                    prerequisites: ["Zealot, Holy Cause", "Lay on Hands II", "Piety"],
                    flavorTest: "Holy Cause also works on Enthralled. Choose which condition to affect each time.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Piety",
                    prerequisites: ["Zealot, Holy Cause", "Lay on Hands IIy", "Holy Cause III"],
                    flavorTest: "You may touch a creature suffering from a common poison and instantaneously cure it. (1 / Week) ",
                    abilities: [

                    ],
                },
                {
                    talentname: "Fervent Leader",
                    prerequisites: ["Zealot", "Holy Cause", "Holy Cause 6"],
                    flavorTest: "You gain the Fervent Leader ability.",
                    abilities: [
                        {
                            abilityname: "Fervent Leader",
                            abilitydescription: "When an allied creature within range of your active aura is hit by an attack that targets their ANT,LOG, or WILL, you may choose for it to hit you instead. (CHA / Rest) ",
                        },

                    ],
                },
                {
                    talentname: "Ever Holy",
                    prerequisites: ["Zealot", "Holy Cause", "Fervent Leader",],
                    flavorTest: "Holy Cause recharges � AWR/Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Piety II",
                    prerequisites: ["Zealot", "Holy Cause", "Fervent Leader", "Piety"],
                    flavorTest: "Piety can also cure common diseases.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Lay On Hands III",
                    prerequisites: ["Zealot", "Holy Cause", "Holy Cause 8"],
                    flavorTest: "Lay on Hands becomes � AWR/Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Ever Holy II",
                    prerequisites: ["Zealot", "Holy Cause", "Lay on Hands III", "Ever Holy"],
                    flavorTest: "Holy Cause recharges AWR/Rest.",
                    abilities: [],
                },
                {
                    talentname: "Piety III",
                    prerequisites: ["Zealot", "Holy Cause", "Lay on Hands III", "Piety II"],
                    flavorTest: "Piety becomes 2/Week.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Stalwart Leader",
                    prerequisites: ["Zealot", "Holy Cause", "Holy Cause 10"],
                    flavorTest: "Gain +6 Skill Points that you can assign to any skill with the athleticism, stamina, influence, and/ or observation tags.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Ever Holy III",
                    prerequisites: ["Zealot, Holy Cause,Stalwart Leader, Ever Holy II"],
                    flavorTest: "Regain 1 use of Holy Cause when Recouping.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Piety IV",
                    prerequisites: ["Zealot, Holy Cause,Stalwart Leader, Piety III"],
                    flavorTest: "Piety can cure uncommon poisons and diseases.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Fervent Leader II",
                    prerequisites: ["Zealot, Holy Cause,Holy Cause 12"],
                    flavorTest: "When you use your Fervent Leader ability, you can ignore the Frightened and Shaken conditions if you would gain them as a result of being hit.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Lay On Hands IV",
                    prerequisites: ["Zealot", "Holy Cause", "Fervent Leader II"],
                    flavorTest: "Lay on Hands becomes AWR/Rest.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Shining Beacon",
                    prerequisites: ["Zealot, Holy Cause,Capstone,Lay on Hands IV"],
                    flavorTest: "You are renowned far and wide as an inspirational figure. Kings and generals vie for your attention and would pay great prices to get you to lead their armies, but all know that you only raise a blade or lead a battle when you believe that the cause is just. Once per week when you roll Initiative, you may choose to activate your Shining Beacon ability",
                    abilities: [
                        {
                            abilityname: "Shining Beacon",
                            abilitydescription: "For the duration of the battle, you and all allies that can see or hear you gain TA.All hostile creatures that can see or hear you gain TD.At the start of each minute, you and a number of creatures up to your CHA gain Shield HP equal to your AWR.You and all allies that can see or hear you cannot be Frightened, Shaken, or Broken.",
                        },
                        {
                            abilityname: "Level 30",
                            abilitydescription: "The final cap for your AWR increases from 12 to 14.",
                        },
                    ],
                }
            ]
        },
        {
            trackname: "Reputation",
            trackdescription: "Your reputation precedes you, for good or ill, and you are never treated as simply an innocuous traveler.",
            talents: [
                {
                    talentname: "Good Reputation",
                    prerequisites: ["Zealot, Good Reputation,Zealot Entry,Bad Reputation"],
                    flavorTest: "When in a settled area where you have 0 or more Goodwill, gain Good Reputation.",
                    abilities: [
                        {
                            abilityname: "Good Reputation",
                            abilitydescription: "You get a 10% discount on room/board.",
                        },

                    ],
                },
                {
                    talentname: "Good Reputation II",
                    prerequisites: ["Zealot", "Good Reputation"],
                    flavorTest: "Good Reputation also grants you a 10% discount on goods/services.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Good Reputation III",
                    prerequisites: ["Zealot", "Good Reputation", "Good Reputation II"],
                    flavorTest: "Gain Upstanding Citizen.",
                    abilities: [
                        {
                            abilityname: "Upstanding Citizen.",
                            abilitydescription: ". Gain +1 Goodwill in a settled area.(1 / Month) ",
                        },

                    ],
                },
                {
                    talentname: "Good Reputation IV",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation III"],
                    flavorTest: "Your Room/Board discount increases to 15%.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Good Reputation V",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation IV"],
                    flavorTest: "Your Goods/Services discount increases to 15%.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Good Reputation VI",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation V"],
                    flavorTest: "Gain Citizen�s Favor",
                    abilities: [
                        {
                            abilityname: "Citizen�s Favor",
                            abilitydescription: ". Call in a minor favor from a merchant, city guard, clergy, politician, or noble. (1 / month) ",
                        },

                    ],
                },
                {
                    talentname: "Good Reputation VII",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation VI"],
                    flavorTest: "Your Room/Board discount increases to 20%.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Good Reputation VIII",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation VII"],
                    flavorTest: "Your Goods/Services discount increases to 20%.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Good Reputation IX",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation VIII"],
                    flavorTest: "Upstanding Citizen becomes 1/Week.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Good Reputation X",
                    prerequisites: ["Zealot, Good Reputation,Good Reputation IX"],
                    flavorTest: "Citizen�s Favor becomes 1/Week.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation",
                    prerequisites: ["Zealot, Good Reputation,Zealot Entry"],
                    flavorTest: "While in a settlement where you have 0 or fewer Goodwill, gain Bad Reputation. ",
                    abilities: [
                        {
                            abilityname: "Bad Reputation",
                            abilitydescription: "You gain +2 to Menacing and Intimidating.",
                        },

                    ],
                },
                {
                    talentname: "Bad reputation II",
                    prerequisites: ["Zealot", "Good Reputation"],
                    flavorTest: "Bad Reputation also grants you +2 to Initiative as people are intimidated by your threatening presence.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation III",
                    prerequisites: ["Zealot,Bad reputation,Bad reputation II"],
                    flavorTest: "Bad Reputation also grants you a 10% discount on room/ board as people are afraid of giving you normal rates.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation IV",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation III"],
                    flavorTest: "Bad Reputation also grants you a 10% discount on goods/ services as people are afraid of giving you normal rates.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation V",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation IV"],
                    flavorTest: "Gain Bribe",
                    abilities: [
                        {
                            abilityname: "Bribe",
                            abilitydescription: " Call in a minor favor from a merchant, city guard, clergy, politician, or noble. (1 / Month) ",
                        },

                    ],
                },
                {
                    talentname: "Bad reputation VI",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation V"],
                    flavorTest: "Your Room/Board discount increases to 15%.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation VII",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation VI"],
                    flavorTest: "Your Goods/Services discount increases to 15%.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation VIII",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation VII"],
                    flavorTest: "Your Intimidating and Menacing bonus gains another +3.",
                    abilities: [

                    ],
                },
                {
                    talentname: "Bad reputation IX",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation VIII"],
                    flavorTest: "Your Initiative bonus gains another +3.",
                    abilities: [
                        {
                            abilityname: "",
                            abilitydescription: "",
                        },

                    ],
                },
                {
                    talentname: "Bad reputation X",
                    prerequisites: ["Zealot, Bad reputation,Bad reputation IX"],
                    flavorTest: "Bribe becomes 1/Week.",
                    abilities: [

                    ],
                }
            ]
        }
    ]
};