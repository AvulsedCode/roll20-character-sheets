const beasts = [
    {
        name: "Acheri",
        description: "In deep wilderness and abandoned manors and homesteads, the veil between the physical world and the Pale beyond can become tremulous. In such places, terrible monsters may emerge. The Acheri is one such monster. Resembling an ethereal young girl clad in a dress made of humanoid skin, the Acheri carries a delicate instrument, such as a flute or tambourine. She weaves haunting melodies with this instrument; like a siren’s call, these songs can ensnare the unsuspecting soul, drawing them ever closer to the Acheri’s clutches. She can also use this melody to raise corpses into her service, and if left unchecked an Acheri can become a deadly horde leader. Those who fall victim to the Acheri’s haunting melodies are scarcely seen again. Her emaciated hands carry potent necrotic magic, and a single touch can afflict a creature with terrible pain, withering them to a husk that she can then animate into her service.",
        monsterLevel: 12,
        size: "Small",
        type: "Undead Eldritch",
        attributes: {
            STR: -2,
            DEX: 4, Ref: 14,
            END: 0, Fort: 10,
            AWR: 5, Ant: 15,
            INT: 3, Log: 13,
            CHA: 5, Will: 15
        },
        hitPoints: 80,
        armorRating: 13,
        speed: {
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 5,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "60ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
        ],
        traits: ["Unerring Mind"],
        features: [
            { featureName: "Creature of the Night", featureDescription: "The Acheri takes 16 (3d10) fire whenever it starts its turn in direct sunlight." },
            { featureName: "Undead Host (1/Day)", featureDescription: "The Acheri may spend one hour summoning 1d4 Skeletons and 1d4 Zombies. They are under the Acheri’s direct control and take their turn immediately after it. The Acheri may only maintain a maximum of 8 summoned creatures with this feature." }
        ],
        actionsOptions: [
            {
                orOptionText: "The Acheri can take FOUR of the following actions or take the same action four times.",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "The Acheri can move up to its speed.",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "Touch of Decay",
                        actionDescription: "Reach 5ft Natural Weapon. +4 vs AR. Hit: 7 (1d6+4) toxic and the creature is Sickened for 1 hour. A creature Sickened in this way may spend 1 AP on their turn to make a DC 15 END check, ending the effect on a success.",
                        rollmodifier: 4,
                        hit: "(1d6+4) toxic",
                    },
                    {
                        actionName: "Order the Host",
                        actionDescription: "The Acheri may choose one target within 30ft of it. All Undead under its control become Focused against that target until the start of the Acheri’s next turn.",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: []
            },
            , {
                orOptionText: "the Acheri can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "The Acheri can move up to its speed.",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "Song of the Damned",
                        actionDescription: "60ft Radius Natural Weapon. +5 vs WILL of each creature in the radius. Hit: 10 (1d10+5) psychic. Living targets hit by this attack become Enthralled for 1 hour. Enthralled targets may make a DC 15 CHA check at the end of their turn to end this effect. If a creature was Enthralled and ends this effect, they become immune to becoming Enthralled from this attack for 24 hours.",
                        rollmodifier: 5,
                        hit: "(1d10+5) psychic",
                    },
                    {
                        actionName: "Call of the Grave",
                        actionDescription: "The Acheri grants +2 to Attack and Damage rolls of all Undead under its control within 30ft of it until the start of the Acheri’s next turn.",
                        rollmodifier: 0,
                        hit: "",
                    },
                ],
                andText:"",
                andActions: []
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },
    {
        name: "Agavan",
        description: "A creature of twisted beauty and insidious power, the Agavan is a semi-sentient bush with stiff, spiny leaves that resemble serrated blades. Golden nectar oozes from the Agavan and produces an intoxicating scent. When a creature inhales these fumes, their mind becomes clouded by a hazy euphoria. The Agavan can uproot itself and use its roots as appendages, slowly crawling along the ground like a centipede might. It does so in search of creatures to enrapture with its fumes; once a creature stumbles into the Agavan in a stupor, the carnivorous plant can drain the creature of its nutrients. Agavans will also imbed their thorny, thumb-sized seeds into a corpse so that the seed can drink plenty of nutrients as it grows into a new Agavan. While it can be extremely dangerous to the unsuspecting traveler, if someone takes the necessary precautions, they can eliminate much of the danger. Soaking a scarf or bandana in scented oil and wearing it over one’s nose and mouth can help prevent the effects of the Agavan’s aromatic nectar. Botanists, scholars, and alchemists believe that Agavan nectar holds vast scientific and medicinal value and many would pay top coin to get ahold of a still-living plant.",
        level: 5,
        size: "Medium",
        type: "Plant Fae",
        attributes: {
            STR: -1,
            DEX: 3, REF: 13,
            END: 1, FORT: 11,
            AWR: 2, ANT: 12,
            INT: -3, LOG: 7,
            CHA: 3,
            WILL: 13,
        },

        hitPoints: 48,
        armorRating: 13,
        speed: {
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "20ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 2,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 1,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "60ft",
            truesight: ""
        },
        DR: [],
        skills: [
        ],
        traits: ["Steel Mind", "Unerring Mind", "Vigilant"],

        features: [
            {
                featureName: "Intoxicating Fumes",
                featureDescription: "If the Agavan has taken sharp damage since the end of its turn, when a creature starts its turn within 5ft of the Agavan, the Agavan makes a special attack: +3 vs WILL. Hit: The creature gains the Dazed condition until the end of their next turn.",
                rollmodifier: 3,
                hit: "(1d4+3) sharp",
            }, {
                featureName: "Unassuming Form",
                featureDescription: "When the Agavan is motionless, it is indistinguishable from a normal desert plant.",
                rollmodifier: 0,
                hit: "",
            }],
        actionsOptions: [
            {
                orOptionText: "",
                orActions: [{
                    actionName: "Move",
                    actionDescription: "The Agavan can move up to its speed.",
                    rollmodifier: 0,
                    hit: "",
                },
                {
                    actionName: "Spine Whirl",
                    actionDescription: "5ft Radius Natural Weapon. +3 vs AR of each creature within the radius, automatically hitting a creature Restrained by Entangle. Hit: 5 (1d4+3) sharp.",
                    rollmodifier: 3,
                    hit: "(1d4+3) sharp",
                },
                {
                    actionName: "Vine Lash",
                    actionDescription: "Reach 10ft Natural Weapon. +3 vs AR. Hit: 6 (1d6+3) sharp.",
                    rollmodifier: 3,
                    hit: "(1d6+3) sharp.",
                },
                {
                    actionName: "Entangle",
                    actionDescription: "Reach 5ft Natural Weapon. +3 vs REF. Hit: 6 (1d6+3) sharp and the target is Restrained (escape DC 13). The Agavan can only restrain one creature at a time in this way.",
                    rollmodifier: 3,
                    hit: "(1d6+3) sharp and the target is Restrained (escape DC 13).",
                }
                ],
                andText:"",
                andActions: []
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]

    }, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },
    , 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },
];



/*, 
    {
        name: "",
        description: "",
        monsterLevel: 0,
        size: "Small",
        type: "",
        attributes: {
            STR: 0,
            DEX: 0, Ref: 10,
            END: 0, Fort: 10,
            AWR: 0, Ant: 10,
            INT: 0, Log: 10,
            CHA: 0,
            Will: 0
        },
        hitPoints: 50,
        armorRating: 10,
        armorRatingType: "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
        },
        resist: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        DR: [],
        skills: [
            { skillAttribute: "", SkillName: "", skillBonus: 0 }
        ],
        traits: [],
        features: [
            { featureName: "", featureDescription: "" },
        ],
        actionsOptions: [
            {
                optionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        actionName: "Move",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },
                    {
                        actionName: "",
                        actionDescription: "",
                        rollmodifier: 0,
                        hit: "",
                    },

                ]
            }
        ],
        reactions: [
            { reactionName: "", perRound: 1, reactionDescription: "" },
        ]
    },
    */




