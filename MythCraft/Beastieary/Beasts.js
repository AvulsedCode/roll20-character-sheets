{beasts : [
    {
        "name": "Acheri",
        "description": "In deep wilderness and abandoned manors and homesteads, the veil between the physical world and the Pale beyond can become tremulous. In such places, terrible monsters may emerge. The Acheri is one such monster. Resembling an ethereal young girl clad in a dress made of humanoid skin, the Acheri carries a delicate instrument, such as a flute or tambourine. She weaves haunting melodies with this instrument; like a siren’s call, these songs can ensnare the unsuspecting soul, drawing them ever closer to the Acheri’s clutches. She can also use this melody to raise corpses into her service, and if left unchecked an Acheri can become a deadly horde leader. Those who fall victim to the Acheri’s haunting melodies are scarcely seen again. Her emaciated hands carry potent necrotic magic, and a single touch can afflict a creature with terrible pain, withering them to a husk that she can then animate into her service.",
        "monsterLevel": 12,
        "size": "Small",
        "type": "Undead Eldritch",
        "attributes": {
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
            primal:0,
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
            primal:0,
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
        "DR": [""],
        "skills": [
        ],
        "traits": ["Unerring Mind"],
        features: [
            { feature"name": "Creature of the Night", feature"description": "The Acheri takes 16 (3d10) fire whenever it starts its turn in direct sunlight." },
            { feature"name": "Undead Host (1/Day)", feature"description": "The Acheri may spend one hour summoning 1d4 Skeletons and 1d4 Zombies. They are under the Acheri’s direct control and take their turn immediately after it. The Acheri may only maintain a maximum of 8 summoned creatures with this feature." }
        ],
        actionsOptions: [
            {
                orOptionText: "The Acheri can take FOUR of the following actions or take the same action four times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Acheri can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Touch of Decay",
                        "actionDescription": "Reach 5ft Natural Weapon. +4 vs AR. "hit": 7 (1d6+4) toxic and the creature is Sickened for 1 hour. A creature Sickened in this way may spend 1 AP on their turn to make a DC 15 END check, ending the effect on a success.",
                        "rollmodifier": 4,
                        "hit": "(1d6+4) toxic",
                    },
                    {
                        "actionName": "Order the Host",
                        "actionDescription": "The Acheri may choose one target within 30ft of it. All Undead under its control become Focused against that target until the start of the Acheri’s next turn.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: []
            },
            , {
                orOptionText: "the Acheri can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Acheri can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Song of the Damned",
                        "actionDescription": "60ft Radius Natural Weapon. +5 vs WILL of each creature in the radius. "hit": 10 (1d10+5) psychic. Living targets hit by this attack become Enthralled for 1 hour. Enthralled targets may make a DC 15 CHA check at the end of their turn to end this effect. If a creature was Enthralled and ends this effect, they become immune to becoming Enthralled from this attack for 24 hours.",
                        "rollmodifier": 5,
                        "hit": "(1d10+5) psychic",
                    },
                    {
                        "actionName": "Call of the Grave",
                        "actionDescription": "The Acheri grants +2 to Attack and Damage rolls of all Undead under its control within 30ft of it until the start of the Acheri’s next turn.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                ],
                andText:"",
                andActions: []
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },
    {
        "name": "Agavan",
        "description": "A creature of twisted beauty and insidious power, the Agavan is a semi-sentient bush with stiff, spiny leaves that resemble serrated blades. Golden nectar oozes from the Agavan and produces an intoxicating scent. When a creature inhales these fumes, their mind becomes clouded by a hazy euphoria. The Agavan can uproot itself and use its roots as appendages, slowly crawling along the ground like a centipede might. It does so in search of creatures to enrapture with its fumes; once a creature stumbles into the Agavan in a stupor, the carnivorous plant can drain the creature of its nutrients. Agavans will also imbed their thorny, thumb-sized seeds into a corpse so that the seed can drink plenty of nutrients as it grows into a new Agavan. While it can be extremely dangerous to the unsuspecting traveler, if someone takes the necessary precautions, they can eliminate much of the danger. Soaking a scarf or bandana in scented oil and wearing it over one’s nose and mouth can help prevent the effects of the Agavan’s aromatic nectar. Botanists, scholars, and alchemists believe that Agavan nectar holds vast scientific and medicinal value and many would pay top coin to get ahold of a still-living plant.",
        level: 5,
        "size": "Medium",
        "type": "Plant Fae",
        "attributes": {
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
            primal:0,
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
            primal:0,
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
        "DR": [""],
        "skills": [
        ],
        "traits": ["Steel Mind", "Unerring Mind", "Vigilant"],

        features: [
            {
                feature"name": "Intoxicating Fumes",
                feature"description": "If the Agavan has taken sharp damage since the end of its turn, when a creature starts its turn within 5ft of the Agavan, the Agavan makes a special attack: +3 vs WILL. "hit": The creature gains the Dazed condition until the end of their next turn.",
                "rollmodifier": 3,
                "hit": "(1d4+3) sharp",
            }, {
                feature"name": "Unassuming Form",
                feature"description": "When the Agavan is motionless, it is indistinguishable from a normal desert plant.",
                "rollmodifier": 0,
                "hit": "",
            }],
        actionsOptions: [
            {
                orOptionText: "",
                orActions: [{
                    "actionName": "Move",
                    "actionDescription": "The Agavan can move up to its speed.",
                    "rollmodifier": 0,
                    "hit": "",
                },
                {
                    "actionName": "Spine Whirl",
                    "actionDescription": "5ft Radius Natural Weapon. +3 vs AR of each creature within the radius, automatically hitting a creature Restrained by Entangle. "hit": 5 (1d4+3) sharp.",
                    "rollmodifier": 3,
                    "hit": "(1d4+3) sharp",
                },
                {
                    "actionName": "Vine Lash",
                    "actionDescription": "Reach 10ft Natural Weapon. +3 vs AR. "hit": 6 (1d6+3) sharp.",
                    "rollmodifier": 3,
                    "hit": "(1d6+3) sharp.",
                },
                {
                    "actionName": "Entangle",
                    "actionDescription": "Reach 5ft Natural Weapon. +3 vs REF. "hit": 6 (1d6+3) sharp and the target is Restrained (escape DC 13). The Agavan can only restrain one creature at a time in this way.",
                    "rollmodifier": 3,
                    "hit": "(1d6+3) sharp and the target is Restrained (escape DC 13).",
                }
                ],
                andText:"",
                andActions: []
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]

    }, 
    {
        "name": "Akateko",
        "description": "A sentient tree with twisted branches and gnarled roots, the Akateko possesses a sinister ability to ensnare unsuspecting prey.With a mastery of illusion, it projects psychic images under its branches that draw victims closer, luring them beneath its leafy canopy.The projected images often take the form of alluring beauties, lost children, or distressed figures.Once a creature comes beneath the Akateko’s boughs, the monstrous tree attacks.Its gnarled branches end in horrible claws that tear flesh and break bone.The Akateko is not a naturally occurring plant, but rather the result of foul desecration of the natural world. The malevolent presence of an Eldritch horror, a corrupt Fiend, or even a group of sinister cultists might result in the creation of an Akateko.Because they do not occur naturally, it is difficult to identify an Akateko simply by looking at it as it might emerge from any type of mundane tree.",
        "monsterLevel": 6,
        "size": "Small",
        "type": "",
        "attributes": {
            STR: 4,
            DEX: -1, Ref: 9,
            END: 3, Fort: 13,
            AWR: 2, Ant: 12,
            INT: -2, Log: 18,
            CHA: 3, Will: 13
        },
        hitPoints: 90,
        armorRating: 15,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "",
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
            occult: 2,
            primal: 0,
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
            primal: 1,
            Psionic: 1 DR 2/Sharp,
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
            tremorsense: "60 ft",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Features"],
        features: [
            { feature"name": "Illusory Lure", feature"description": "The Akateko can create a visual illusion within 20ft.This illusion takes the form of something that will incentivize an observer to approach." },
            { feature"name": "Unassuming Form", feature"description": "When the Akateko is motionless, it is indistinguishable from a normal tree." },
        ],
        actionsOptions: [
            {
                optionText: "The Akateko can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Root Whip",
                        "actionDescription": "Reach 20ft Natural Weapon. +4 vs AR. "hit": 7 (1d6 + 4) sharp.",
                        "rollmodifier": 4,
                        "hit": "7 (1d6 + 4) sharp",
                    }
                    {
                        "actionName": "Tearing Branches",
                        "actionDescription": "Reach 10ft Natural Weapon. +4 vs AR. "hit": 13 (2d8+4) sharp. If the attack also would hit REF, then the creature is immediately Restrained (escape DC 14).",
                        "rollmodifier": 4,
                        "hit": "13 (2d8+4) sharp",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Ambush", perRound: 1, re"actionDescription": " If the Akateko is undetected and a creature moves within 10ft of the Akateko, the Akateko may make one Tearing Branches attack against it. For this attack, the Akateko rolls 2d20 and uses whichever is higher" },
        ]
    },
    , 
    {
        "name": "Anzu",
        "description": "With the head of a horned dog, the body of a lion, and the talons and wings of a bird of prey, the Anzu is a terrifying sight to behold.The Anzu is a reclusive creature that typically lurks near points of planar power, where a creature might travel from one plane to another.The Anzu seems to feed off of this ambient magical energy.Although they cannot speak, Anzu are believed to hold divine insight and an understanding of things unknown.Capable of exhaling bouts of flame and spouts of water, the Anzu seems to be an incarnation of that which mortals need to survive: water to nourish, fire to warm, and ultimately, knowledge to transcend.Though not innately aggressive, Anzu can be vicious if threatened or if they believe that a malevolent entity seeks to use their planar portal to nefarious ends.",
        "monsterLevel": 9,
        "size": "Large",
        "type": "Beast Monstrosity",
        "attributes": {
            STR: 4,
            DEX: 3, Ref: 13,
            END: 2, Fort: 12,
            AWR: 4, Ant: 14,
            INT: 0, Log: 10,
            CHA: 2, Will: 12
        },
        hitPoints: 75,
        armorRating: 13,
        armorRating"type": "",
        speed: { 45ft,
            climb: "",
            fly: "45ft",
            jump: "",
            hover: "",
            swim: "",
            walk: "",
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
            primal:0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            Magic: 2
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "Vision 90ft",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [""],
        features: [
            { feature"name": "", feature"description": "" },
        ],
        actionsOptions: [
            {
                optionText: "The Anzu can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Anzu can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Bite",
                        "actionDescription": "Reach 5ft Natural Weapon. +4 vs AR. "hit": 8 (1d8+4) sharp.",
                        "rollmodifier": 4,
                        "hit": "8 (1d8+4) sharp",
                    },
                    {
                        "actionName": "Gore",
                        "actionDescription": "Reach 5ft Natural Weapon. +4 vs AR. "hit": 7 (1d6+4) sharp and Bleeding 2.",
                        "rollmodifier": 4,
                        "hit": "7 (1d6+4) sharp and Bleeding 2",
                    },
                    {
                        "actionName": "Pursue",
                        "actionDescription": "The Anzu assumes a stance that allows it to Exploit.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "the Anzu can MOVE and take ONE of the following actions.",
                orActions: [
                    {
                        "actionName": "Gore",
                        "actionDescription": "The Anzu can use its Gore attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Fire Breath (Recharge 6)",
                        "actionDescription": " 30ft Cone Natural Weapon. +4 vs FORT of each creature in the cone."hit": 18(4d8) fire.",
                        "rollmodifier": 4,
                        "hit": "",
                    },
                    {
                        "actionName": "Waters of Life (1/Day)",
                        "actionDescription": "The Anzu can cast the Healing Touch divine spell.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            {
                re"actionName": "Exploit", perRound: 1, re"actionDescription": "If the Anzu used Pursue on its last turn, it can Exploit." },
        ]
    },, 
    {
        "name": "Birch Arborean",
        "description": "",
        "monsterLevel": 12,
        "size": "Large (Tall)",
        "type": "Plant Fae (Primal)",
        "attributes": {
            STR: 3,
            DEX: 2, Ref: 12,
            END: 0, Fort: 10,
            AWR: 3, Ant: 13,
            INT: 3, Log: 13,
            CHA: 5, Will: 15
        },
        hitPoints: 110,
        armorRating: 13,
        armorRating"type": "",
        speed: {30ft
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "",
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
            primal:5,
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
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
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
        "DR": [""],
        "skills": [
            { skillAttribute: " (STR) Applied Force +3", Skill"name": "str", skillBonus: 3 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Restoration (1/Rest)", feature"description": "Using CHA, the Arborean can cast the Greater Restoration divine ritual. It counts as a primal invocation when cast by the Arborean" },
            { feature"name": "Voice of the Forest.", feature"description": "The Arborean can communicate with plants at will." },
            { feature"name": "Unassuming Form", feature"description": "When the Arborean is motionless, it is indistinguishable from a normal birch" },
            { feature"name": "Primeval Benefactor", feature"description": "Using CHA, the Arborean can innately cast the following primal and divine spells. Divine spells count as primal when cast by the Arborean. (At Will) Animal Bond, Animate Plants (3/Day) Intervene, Nature’s Bounty, Nature’s Remedies (1/Day) Burst of Healing." },
            { feature"name": "Primeval Defender", feature"description": "Using CHA, the Arborean can cast the Photosynthesis, Rapid Growth, and Reorient primal invocations each once per day" },
        ],
        actionsOptions: [
            {
                optionText: "The Arborean can take THREE of the following actions, or take the same action three times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": " The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "Reach 10ft Natural Weapon. +3 vs AR "hit": 7 (1d8+3) blunt.",
                        "rollmodifier": 3,
                        "hit": "7 (1d8+3) blunt",
                    },
                    {
                        "actionName": "Primal Spell",
                        "actionDescription": "The Arborean can cast one of its at will spells. OR the Arborean can take the following action twice.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Primeval Benefactor",
                        "actionDescription": "The Arborean can cast one of its expendable spells.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Intervene (1/Round)", perRound: 1, re"actionDescription": "When another creature casts a spell, the Arborean can expend one of its uses of Intervene." },
        ]
    },, 
    {
        "name": "Hollow Arborean",
        "description": "",
        "monsterLevel": 13,
        "size": "Huge (Tall)",
        "type": "Undead Plant",
        "attributes": {
            STR: 4,
            DEX: 0, Ref: 10,
            END: 5, Fort: 15,
            AWR: 2, Ant: 12,
            INT: 1, Log: 11,
            CHA: 4, Will: 14
        },
        hitPoints: 140,
        armorRating: 12,
        armorRating"type": "",
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
            occult: 3,
            primal:0,
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
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(STR) Applied Force +6", Skill"name": "", skillBonus: 6 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Aura of R", feature"description": "Any plant or creature that starts its turn within 10ft of the Hollow Arborean must make DC 15 END check or take 6 (1d4+4) necrotic damage. This damage is doubled against plants." },
            { feature"name": "Spreading Curse", feature"description": "Once per day, if the Arborean spends one hour in a forest biome it summons 1d4 Blightweeds. These Blightweeds obey the direct command of the Hollow Arborean and take their turn immedately after it in initiative." },
            { feature"name": "Twisted Purpose", feature"description": "Using END, the Arborean can cast the Blight and Blood Bond occult rituals each once per day." },
            { feature"name": "Voice of the Forest", feature"description": " The Arborean may communicate with plants at will." },
        ],
        actionsOptions: [
            {
                optionText: "The Arborean can take THREE of the following actions, or take the same action three times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "Reach 15ft Natural Weapon. +6 vs AR. "hit": 10 (1d12 + 4) blunt.",
                        "rollmodifier": 6,
                        "hit": "10 (1d12 + 4) blunt",
                    },
                    {
                        "actionName": "Engage",
                        "actionDescription": "The Arborean picks a creature within 5ft of it to become Engaged until the start of the Arborean’s next turn. OR the Arborean can take TWO of the following actions, or take the same action twice…",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "The Arborean can make a Slam attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                ],
                andText:"AND take ONE of the following actions.",
                andActions: [
                    {
                        "actionName": "Spirit Burn (Recharge 5)",
                        "actionDescription": "40ft Cone Natural Weapon. +4 vs FORT of each creature in the cone. "hit": 11 (1d12+4) necrotic and gain Burning 1.",
                        "rollmodifier": 4,
                        "hit": "11 (1d12+4) necrotic and gain Burning 1.",
                    },
                    {
                        "actionName": "Stomp",
                        "actionDescription": "Reach 5ft Natural Weapon. +5 vs REF of a Prone target. "hit": 19 (2d12+6) blunt and the creature is Stunned.",
                        "rollmodifier": 5,
                        "hit": "19 (2d12+6) blunt and the creature is Stunned",
                    },
                    {
                        "actionName": "Sweep",
                        "actionDescription": "10ft Radius Natural Weapon. +5 vs REF of each creature in range."hit": 12(1d12+ 6) blunt and the creature falls Prone",
                        "rollmodifier": 5,
                        "hit": " 12 (1d12+6) blunt and the creature falls Prone.",
                    },

                ]
            },
            , {
                orOptionText: "OR the Arborean can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Spirit Burn",
                        "actionDescription": "The Arborean uses its Spirit Burn attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Stomp",
                        "actionDescription": "The Arborean uses its Stomp attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Sweep",
                        "actionDescription": "The Arborean uses its Sweep attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            {
                re"actionName": "Engage (1/Round)", perRound: 1, re"actionDescription": " If a creature that the Arborean has Engaged attempts to move out of reach of the Arborean’s Slam, the Arborean can make a reactive Slam attack.If it hits with this attack, the creature’s speed also becomes 0ft until the end of its turn." },
        ]
    },, 
    {
        "name": "Oak Arborean",
        "description": "",
        "monsterLevel": 15,
        "size": "Huge (Tall)",
        "type": "Plant (Primal)",
        "attributes": {
            STR: 6,
            DEX: 0, Ref: 10,
            END: 7, Fort: 17,
            AWR: 4, Ant: 14,
            INT: 0, Log: 10,
            CHA: 1,
            Will: 11
        },
        hitPoints: 150,
        armorRating: 15,
        armorRating"type": "",
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
            fire: 1,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:2,
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
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: " (STR) Applied Force +6", Skill"name": "", skillBonus: 6 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Forest Defender", feature"description": " The Arborean can animate 3 (1d4+1) trees, who remain animated for 1 hour, obey the mental commands of the Arborean, and take their turns immediately after it in combat. Trees animated in this way can have the physical stats of any Arborean or other plant monsters at the MC’s discretion. However, trees animated in this way gain no magical abilities and have -3 to all mental stats." },
            { feature"name": "Primeval Defender", feature"description": "Using END, the Arborean can cast the Photosynthesis, Rapid Growth, Warden’s Navigation, and Warden’s Trap invocations each once per day." },
            { feature"name": "Unassuming Form", feature"description": "When the Arborean is motionless, it is indistinguishable from a normal oak." },
            { feature"name": "Voice of the Forest", feature"description": "The Arborean may communicate with plants at will." },
        ],
        actionsOptions: [
            {
                optionText: "The Arborean can take FOUR of the following actions, or take the same action four times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "Reach 15ft Natural Weapon. +6 vs AR. "hit": 12 (1d12 + 6) blunt.",
                        "rollmodifier": 6,
                        "hit": "12 (1d12 + 6) blunt",
                    },
                    {
                        "actionName": "Engage",
                        "actionDescription": "The Arborean picks a creature within 5ft of it to become Engaged until the start of the Arborean’s next turn.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
            },
            {
                orOptionText: "OR the Arborean can take TWO of the following actions, or take the same action twice…",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "The Arborean uses its Slam attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"AND take ONE of the following actions.",
                andActions: [
                    {
                        "actionName": "Stomp",
                        "actionDescription": "Reach 5ft Natural Weapon. +6 vs REF of a Prone target."hit": 19(2d12+ 6) blunt and the creature is Stunned.",
                        "rollmodifier": 6,
                        "hit": " 19 (2d12+6) blunt and the creature is Stunned.",
                    },
                    {
                        "actionName": "Sweep",
                        "actionDescription": "10ft Radius Natural Weapon. +5 vs REF of each creature in range."hit": 12(1d12+ 6) blunt and the creature falls Prone.",
                        "rollmodifier": 0,
                        "hit": " 12 (1d12+6) blunt and the creature falls Prone.",
                    },
                    {
                        "actionName": "Primeval Sentinel",
                        "actionDescription": "The Arborean can use AWR to cast the Bloom or Ensnaring Root chants.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                ],
            },
            {
                orOptionText: "OR the Arborean can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Stomp",
                        "actionDescription": "The Arborean can make a Stomp attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Sweep",
                        "actionDescription": "The Arborean can make a Sweep attack",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Primeval Defender",
                        "actionDescription": " The Arborean uses its Primeval Defender ability.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                ],
            },

        ],
        "reactions": [
            { re"actionName": "Engage (1/Turn)", perRound: 1, re"actionDescription": "If a creature that the Arborean has Engaged moves more than 15ft away from the Arborean, it can make a reactive Slam attack. If it hits, the creature’s speed also becomes 0ft until the end of its turn." },
        ]
    },, 
    {
        "name": "Pine Arborean",
        "description": "",
        "monsterLevel": 13,
        "size": "Huge (Tall)",
        "type": "Plant (Primal)",
        "attributes": {
            STR: 5,
            DEX: 1, Ref: 11,
            END: 6, Fort: 16,
            AWR: 4, Ant: 14,
            INT: 0, Log: 10,
            CHA: 1,
            Will: 11
        },
        hitPoints: 120,
        armorRating: 13,
        armorRating"type": "",
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
            primal:2,
            psychic: 0,
            radiant: 5,
            sonic: 0,
            toxic: 0,
            Immune Clod
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 0,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 1,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(STR) Applied Force +4", Skill"name": "", skillBonus: 4 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Unassuming Form", feature"description": "When the Arborean is motionless, it is indistinguishable from a normal pine." },
            { feature"name": "Voice of the Forest", feature"description": "The Arborean may communicate with plants at will." },
            { feature"name": "Primeval Defender", feature"description": "Using END, the Arborean can cast the Photosynthesis, Rapid Growth, Warden’s Navigation, and Warden’s Trap invocations each once per day." },
            { feature"name": "Evergreen", feature"description": "The Arborean is immune to the negative effects of extreme cold weather." },
        ],
        actionsOptions: [
            {
                optionText: "The Arborean can take THREE of the following actions, or take the same action three times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": ". Reach 15ft Natural Weapon. +5 vs AR. "hit": 9 (1d8 + 5) blunt",
                        "rollmodifier": 5,
                        "hit": ": 9 (1d8 + 5) blunt.",
                    },
                    {
                        "actionName": "Engage",
                        "actionDescription": "The Arborean picks a creature within 5ft of it to become Engaged until the start of the Arborean’s next turn.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                 optionText: "OR the Arborean can take TWO of the following actions, or take the same action twice…"
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "The Arborean uses its Slam attack.",
                        "rollmodifier": ,
                        "hit": "",
                    },
                    
                ],
                andText:"…AND take ONE of the following actions",
                andActions: [
                    {
                        "actionName": "Tangle",
                        "actionDescription": "Ranged (30ft) Natural Weapon. +5 vs REF of each creature in a line from the Arborean to a point within range. "hit": 9 (1d8+5) blunt and the creature falls Prone",
                        "rollmodifier": 5,
                        "hit": "9 (1d8+5) blunt and the creature falls Prone.",
                    },
                    {
                        "actionName": "Shed",
                        "actionDescription": "The Arborean sheds conifer needles in a 30ft radius around itself. Each creature that breathes and starts its turn within the radius must make a DC 16 END check; on a fail, they are Shaken and Chilled.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Arborean can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Tangle",
                        "actionDescription": "The Arborean uses its Tangle ability.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Shed",
                        "actionDescription": "The Arborean uses its Shed ability.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Engage (1/Round)", perRound: 1, re"actionDescription": "If a creature that the Arborean has Engaged moves more than 15ft away from the Arborean, the Arborean can make a reactive Slam attack. If it hits with this attack, the creature’s speed also becomes 0ft until the end of its turn." },
        ]
    },, 
    {
        "name": "Willow Arborean",
        "description": "",
        "monsterLevel": 14,
        "size": "Huge",
        "type": "Plant (Primal)",
        "attributes": {
            STR: 2,
            DEX: 5, Ref: 15,
            END: 6, Fort: 16,
            AWR: 4, Ant: 14,
            INT: 0, Log: 10,
            CHA: 1,
            Will: 11
        },
        hitPoints: 90,
        armorRating: 13,
        armorRating"type": "",
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
            primal:2,
            psychic: 0,
            radiant: 5,
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
            necrotic: 1,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: " (STR) Applied Force +2", Skill"name": "", skillBonus: 2 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Unassuming Form", feature"description": "When the Arborean is motionless, it is indistinguishable from a normal willow." },
            { feature"name": "Voice of the Forest", feature"description": "The Arborean may communicate with plants at will." },
            { feature"name": "Primeval Defender", feature"description": "Using END, the Arborean can cast the Photosynthesis, Rapid Growth, Warden’s Navigation, and Warden’s Trap invocations each once per day." },
            { feature"name": "Nourish", feature"description": " When the Arborean is bloodied and starts its turn at least partially in water, it regains 4 (1d8) HP. " },
        ],
        actionsOptions: [
            {
                optionText: "The Arborean can take SIX of the following actions, or take the same action six times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Branch Whip",
                        "actionDescription": ". Melee (Reach 15ft) Natural Weapon. +5 vs AR."hit": 7(1d4+ 5) sharp and the creature falls prone if it is Medium or smaller",
                        "rollmodifier": 5,
                        "hit": ": 7 (1d4+5) sharp and the creature falls prone if it is Medium or smaller",
                    },
                    {
                        "actionName": "Engage",
                        "actionDescription": "The Arborean picks a creature within 5ft of it to become Engaged until the start of the Arborean’s next turn.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Arborean can take THREE of the following actions, or take the same action three times…",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Arborean can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "The Arborean uses its Slam attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"AND take ONE of the following actions.",
                andActions: [
                    {
                        "actionName": "Wrangle",
                        "actionDescription": "10ft Radius Natural Weapon. +5 vs ANT of each prone hostile creature in the radius."hit": The creature is Restrained(escape DC 12) ",
                        "rollmodifier": 5,
                        "hit": "The creature is Restrained(escape DC 12).",
                    },
                    {
                        "actionName": "Summon Swarms (Recharge 5)",
                        "actionDescription": ". The Arborean casts the Summon Swarms spell.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            {
                re"actionName": "Engage (2/Round)", perRound: 2, re"actionDescription": " If a creature that the Arborean has Engaged moves more than 15ft away from the Arborean, the Arborean can make a reactive Branch Whip attack.If it hits with this attack, the creature’s speed also becomes 0ft until the end of its turn." },
        ]
    },, 
    {
        "name": "Axehandle Hound",
        "description": "It is widely held that a dog is a human’s best friend. For lumberjacks, one specific kind of canine is their best friend: the axehandle hound. This canine’s snout is as sharp and hard as iron, and the dog has the supernatural ability to stiffen its body into the consistency of wood and be wielded as an axe. When left to its own devices, an axehandle hound will devour trees even more thoroughly than beavers.",
        "monsterLevel": 1,
        "size": "Small",
        "type": "Beast Monstrosity",
        "attributes": {
            STR: 2,
            DEX: 1, Ref: 11,
            END: 0, Fort: 10,
            AWR: 2, Ant: 12,
            INT: -2, Log: 8,
            CHA: -2,
            Will: 8
        },
        hitPoints: 15,
        armorRating: 11,
        armorRating"type": "",
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
            primal:0,
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(AWR) Perceiving +2", Skill"name": "", skillBonus: 2 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Timberborn", feature"description": "When held by an ally, the Axehandle Hound may be wielded as a weapon with the same characteristics as a handaxe." },
            { feature"name": "Tree-Cutter", feature"description": "The Axehandle Hound is able to cut through solid wood at a rate of 5ft on each of its turns and is not affected by plant-based difficult terrain." },
        ],
        actionsOptions: [
            {
                optionText: "The Axehandle Hound can take ONE of the following actions.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Axehandle Hound can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "Reach 5ft Natural Weapon. +2 vs AR. "hit": 5 (1d6 + 2) sharp.",
                        "rollmodifier": 2,
                        "hit": "5(1d6+2) sharp",
                    },
                    {
                        "actionName": "Growl",
                        "actionDescription": "The Axehandle Hound prepares its growl.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Growl (1/Round)", perRound: 1, re"actionDescription": " If the Axehandle Hound prepared its Growl on its last turn, then when a creature moves into reach of the Axehandle Hound, it can make a Headbutt attack." },
        ]
    },, 
    {
        "name": "Asagi",
        "description": "",
        "monsterLevel": 4,
        "size": "Medium",
        "type": "Monstrosity",
        "attributes": {
            STR: 2,
            DEX: 3, Ref: 13,
            END: 2, Fort: 12,
            AWR: 4, Ant: 14,
            INT: -3, , Log: 7,
            CHA: -2,
            Will: 8
        },
        hitPoints: 60,
        armorRating: 13,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "30ft",
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
            primal:0,
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "",
            lowLight: "Vision 30ft",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(DEX) Sneaking +2; (AWR) Perceiving +10", Skill"name": "", skillBonus: 10 }
        ],
        "traits": ["Vigilant"],
        features: [
            { feature"name": "Dual Headed", feature"description": "While conscious, the Asagi cannot be Surprised." },
        ],
        actionsOptions: [
            {
                optionText: "The Asagi can MOVE and take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Asagi can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Bite",
                        "actionDescription": "Reach 5ft Natural Weapon. +2 vs AR. "hit": 5 (1d6+2) sharp.",
                        "rollmodifier": 2,
                        "hit": "5 (1d6+2) sharp.",
                    },
                    {
                        "actionName": "Venom Spit",
                        "actionDescription": "Ranged (60ft) Natural Weapon. +3 vs REF. "hit": 4(1d4+ 2) corrosive, and the target is Blinded until the end of their next turn.",
                        "rollmodifier": 3,
                        "hit": "4 (1d4+2) corrosive, and the target is Blinded until the end of their next turn.",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Asagi can take the following action",
                orActions: [
                    {
                        "actionName": "Regurgitate",
                        "actionDescription": "5ft Radius Natural Weapon. +3 vs REF of each creature."hit": 9(2d6+ 2) Corrosive, and target is Sickened until the end of their next turn.",
                        "rollmodifier": 3,
                        "hit": " 9 (2d6+2) Corrosive, and target is Sickened until the end of their next turn.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    }, 
    {
        "name": "Basilisk",
        "description": "The dreadful Basilisk is a terrifying lizard with gray or green scales, curved black claws, and glowing eyes that can cause creatures to drop dead if they make eye contact.",
        "monsterLevel": 12,
        "size": "Large",
        "type": "Monstrosity",
        "attributes": {
            STR: 5,
            DEX: 2, Ref: 12,
            END: 5, Fort: 15,
            AWR: 0, Ant: 10,
            INT: -3, Log: 7,
            CHA: -2,
            Will: 8
        },
        hitPoints: 105,
        armorRating: 13,
        armorRating"type": "",
        speed: {
            climb: "30ft",
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
            primal:0,
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(DEX) Sneaking +4", Skill"name": "", skillBonus:4 }
        ],
        "traits": [""],
        features: [
            {
                feature"name": "Deadly Secretions", feature"description": "The skin of the Basilisk secretes a toxin that burns any exposed flesh or plant matter. Any creature that comes into direct physical contact with the Basilisk through Unarmed Attacks or Grappling must make a DC 13 END check or take 3 (1d6) corrosive.A Basilisk’s diet consists primarily of meat that it dissolves with its acidic saliva.They often dwell in abandoned mines or ancient ruins, preying on unsuspecting treasure hunters." },
        ],
        actionsOptions: [
            {
                optionText: "The Basilisk can take THREE of the following actions, or take the same action three times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Basilisk can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Bite",
                        "actionDescription": "Reach 5ft Natural Weapon. +5 vs AR. "hit": 8 (1d6+5) sharp and 4(1d8) toxic.",
                        "rollmodifier": 5,
                        "hit": "8 (1d6+5) sharp and 4(1d8) toxic.",
                    },
                    {
                        "actionName": "Pursue",
                        "actionDescription": "The Basilisk assumes a stance that allows it to Exploit.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Basilisk can take the following action.",
                orActions: [
                    {
                        "actionName": "Killing Gaze",
                        "actionDescription": ". Ranged (30ft) Natural Weapon. +5 vs WILL. "hit": The creature gains 1 Death Point.",
                        "rollmodifier": 5,
                        "hit": "The creature gains 1 Death Point",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            {
                re"actionName": "Exploit (1/Round)", perRound: 1, re"actionDescription": "If the Basilisk used Pursue on its last turn, it can Exploit." },
        ]
    },, 
    {
        "name": "Bekael",
        "description": "Bekaels are celestial beings with a powerful drive for justice. While many view celestials as calm and deliberative, the Bekael challenges this view as a vengeful, emotional creature. Bekaels are drawn to groups who have experienced profound tragedy under the fist of tyranny. With horns like an impala’s and two pairs of eagle wings, the Bekael’s frightening visage is completed by a porcelainwhite mask that obscures their face. The sorrowful mask portrays the wailing that accompanies utter loss. In combat, the Bekael wields its own molten tears like whips of razor.",
        "monsterLevel": 23,
        "size": "Medium",
        "type": " Celestial (Divine)",
        "attributes": {
            STR: 4,
            DEX: 7, Ref: 17,
            END: 6, Fort: 16,
            AWR: 5, Ant: 15,
            INT: 1, Log: 11,
            CHA: 4,
            Will: 14
        },
        hitPoints: 250,
        armorRating: 17,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "30ft",
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
            divine: 8,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:4,
            psychic: 0,
            radiant: 8,
            sonic: 0,
            toxic: 0,
            psionic:4 Immune Fire 
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "60ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
    "DR": ["10/Magical Weapons, Arcane, Occult"],
            special: [], "],
        "skills": [
            { skillAttribute: "(CHA) Empathy +20", Skill"name": "", skillBonus: 20 }
        ],
        "traits": ["Iron Will, Steel Mind"],
        features: [
            { feature"name": "Empath (1/Recoup)", feature"description": "The Bekael may choose one creature. For the next hour while the Bekael can see that creature with its blindsight, whenever that creature takes damage, it halves the amount of damage that it takes and the Bekael takes the other half." },
            { feature"name": "Mask of Sorrow", feature"description": " The Bekael wears a sorrowful mask that dampens the morale of all who behold it. At the start of its turns, the Bekael chooses which direction it is facing. For a 60ft cone in that direction, no creature can benefit from magical effects that would enhance their stats, HP, attacks, or damage. Ongoing effects that offer such benefits are suppressed (but not canceled outright) while in the cone." },
            { feature"name": "Plane Step (2/Day).", feature"description": " The Bekael may teleport to a different plane of existence. It chooses where it appears on the new plane." },
            { feature"name": "Weep", feature"description": "When an allied creature within 60ft of the Bekael becomes Bloodied, the Bekael gains 1 additional action that it can take on its turn to make another Razor Tear attack (max 4 additional actions). This resets after 10 minutes." },
        ],
        actionsOptions: [
            {
                optionText: "The Bekael can take FIVE of the following actions, or take the same action five times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bekael can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Razor Tears",
                        "actionDescription": "Reach 20ft Natural Weapon. +7 vs REF. "hit": 9 (1d4 + 7) sharp, 2(1d4) fire, and 2(1d4) psychic",
                        "rollmodifier": 7,
                        "hit": "9 (1d4+7) sharp, 2 (1d4) fire, and 2 (1d4) psychic",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Bekael can take TWO of the following actions, or take the same action twice…",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bekael can move up to its speed",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Razor Tears",
                        "actionDescription": "The Bekael can make a Razor Tears attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"…AND take ONE of the following actions.",
                andActions: [
                    {
                        "actionName": "Wail (Recharge 6)",
                        "actionDescription": ". 20ft Cone Natural Weapon. +6 vs WILL. "hit": 9(2d8) sonic and 9(2d8) psychic, and the creature becomes Broken for 1 minute",
                        "rollmodifier": 6,
                        "hit": "9 (2d8) sonic and 9 (2d8) psychic, and the creature becomes Broken for 1 minute.",
                    },
                    {
                        "actionName": "miss",
                        "actionDescription": "The creature takes ½ damage and becomes Broken until the end of its next turn.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Dirge",
                        "actionDescription": " The Bekael may only use this ability if one of its allies has died since the end of its last turn.The Bekael and up to 10 allied creatures within 60ft of it gain TA for the next minute, gain 5(2d4) Shield HP, and their crit ranges each increase by 1 during this time.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Vengeance is Mine (1/Round)", perRound: 1, re"actionDescription": "When an allied creature within 60ft of the Bekael becomes Bloodied, the Bekael may teleport up to 60ft and make a Razor Tear attack against the creature that bloodied its ally, if that creature is within reach. This is considered a crit if it hits." },
        ]
    },, 
    {
        "name": "Bendelex",
        "description": "",
        "monsterLevel": 1,
        "size": "Fine",
        "type": "Abominable Eldritch Beast",
        "attributes": {
            STR: -2
            DEX: 2, Ref: 12,
            END: 2, Fort: 12,
            AWR: 1, Ant: 11,
            INT: -3, Log: 7,
            CHA: -3,
            Will: 7
        },
        hitPoints: 4,
        armorRating: 12,
        armorRating"type": "",
        speed: {
            climb: "10ft",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "10ft",
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
            primal:0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 3,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: ,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "s (DEX) Sneaking +6; (INT) Evading +9", Skill"name": "", skillBonus: 6 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Cytokinesis", feature"description": " If the Bendelex has emerged from a mammalian host in the last 24 hours, it may split into 1d4 new Bendelexes" },
            { re"actionName": "Feed", perRound: 1, re"actionDescription": "If the Bendelex has been consumed by a mammalian host in the last 24 hours, then that host must eat twice as much food to avoid risking Fatigue. This lasts for 2d4 days, then the Bendelex can use its Hatch feature." },
            { re"actionName": "Hatch", perRound: 1, re"actionDescription": " If the Bendelex has been sufficiently nourished from its Feed feature, then it emerges from the host’s stomach, imposing the Bleeding 3d4 condition on the host." },
            { re"actionName": "Worm", perRound: 1, re"actionDescription": "The Bendelex can share spaces in combat with any creature that is Diminutive or larger, and can only attack creatures with whom it shares a space." },
        ],
        actionsOptions: [
            {
                optionText: "The Bendelex can MOVE and take ONE of the following actions.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bendelex can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Pseudopod",
                        "actionDescription": "Reach 0ft Natural Weapon. +2 vs FORT. "hit": 2 (1d4) corrosive.",
                        "rollmodifier": 2,
                        "hit": "2 (1d4) corrosive",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Bendelex Psion",
        "description": "",
        "monsterLevel": 4,
        "size": "fine",
        "type": "Abominable Eldritch Beast (Psion)",
        "attributes": {
            STR: -2,
            DEX: 2, Ref: 12,
            END: 2, Fort: 12,
            AWR: 1, Ant: 11,
            INT: -3, Log: 7,
            CHA: 3,
            Will: 13
        },
        hitPoints: 4,
        armorRating: 12,
        armorRating"type": "",
        speed: {
            climb: "10ft",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "10ft",
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
            primal:0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 3,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: ,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: " (DEX) Sneaking +6; (INT) Evading +9; (CHA) Deceiving +4", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Feed", feature"description": "If the Bendelex has been consumed by a mammalian host in the last 24 hours, then that host must eat twice as much food to avoid risking Fatigue. This lasts for 2d4 days, whereupon the Bendelex can use its Psion feature and may choose to Hatch whenever it wishes." },
            { feature"name": "Cytokinesis", feature"description": "If the Bendelex has emerged from a mammalian host in the last 24 hours, it may split into 1d4 new Bendelexes. There is a 75% chance that one of the new Bendelexes is a Bendelex Psion." },
            { feature"name": "Hatch", feature"description": "If the Bendelex has been sufficiently nourished from its Feed feature, then it emerges from the host’s stomach, imposing the Bleeding 3d4 condition on the host. 1d4 minutes after the Bendelex hatches, the host magically forgets that it was ever infected. Casting Lesser Restoration or similar magic on the host will restore its memories." },
            { feature"name": "Psion", feature"description": "The Bendelex gains limited control of its hostcreature. It experiences each of the host’s physical senses. The Bendelex can cast Dominate Person on its host 1/Rest." },
            { feature"name": "Worm", feature"description": "The Bendelex can share spaces in combat with any creature that is Diminutive or larger, and can only attack creatures with whom it shares a space." },
        ],
        actionsOptions: [
            {
                optionText: "The Bendelex can MOVE and take ONE of the following actions.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bendelex can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Pseudopod",
                        "actionDescription": "Reach 0ft Natural Weapon. +2 vs FORT. "hit": 4 (1d4 + 2) corrosive.",
                        "rollmodifier": 2,
                        "hit": "4 (1d4 + 2) corrosive",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "",
        "description": "",
        "monsterLevel": 8,
        "size": "Large",
        "type": "Abominable Eldritch Beast (Swarm)",
        "attributes": {
            STR: -2,
            DEX: 4, Ref: 14,
            END: 4, Fort: 14,
            AWR: 2, Ant: 12,
            INT: -3, Log: 7,
            CHA: -3,
            Will: 7
        },
        hitPoints: 60,
        armorRating: 13,
        armorRating"type": "",
        speed: {
            climb: "10ft",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "10ft",
          Immune Corrosive, Toxic
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
            primal:0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        vulnerable: {
            arcane: 0,
            blunt: 3 DR 8/Area attacks,
            sharp: 0,
            cold: 0,
            corrosive: 0,
            divine: 0,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 0,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(DEX) Sneaking +6", Skill"name": "", skillBonus: 6 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Worm", feature"description": "The Swarm can share spaces in combat with any creature and can only attack creatures with whom it shares a space" },
            { feature"name": "Swarm", feature"description": "When the Swarm is Bloodied, it deals ½ damage." },
        ],
        actionsOptions: [
            {
                optionText: "The Swarm can MOVE and take ONE of the following actions",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Swarm can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Pseudopod",
                        "actionDescription": "Reach 0ft Natural Weapon. +4 vs FORT. "hit": 20 (8d4) corrosive",
                        "rollmodifier": 4,
                        "hit": "20 (8d4) corrosive",
                    },
                    {
                        "actionName": "Down the Hatch",
                        "actionDescription": "Reach 0ft Natural Weapon. +4 vs ANT."hit": The Bendelex Swarm loses 1d4 HP. A single Bendelex swims into the target creature’s stomach and uses its Feed ability.",
                        "rollmodifier": 4,
                        "hit": "The Bendelex Swarm loses 1d4 HP. A single Bendelex swims into the target creature’s stomach and uses its Feed ability.",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Blightweed",
        "description": "Blightweeds are undead plant matter that take the form of briar patches and twisted thistles. They are not naturally occurring, but might be created by decay - oriented cultists out of the remains of a dead Thresher Moss or similar creature.Hollow Arboreans also summon Blightweeds as they seek to corrupt the forest around them.",
        "monsterLevel": 4,
        "size": "Medium",
        "type": "Undead Plant (Occult)",
        "attributes": {
            STR: 3,
            DEX: 3, Ref: 13,
            END: 0, Fort: 10,
            AWR: 1, Ant: 11,
            INT: -1, Log: 9,
            CHA: 2,
            Will: 12
        },
        hitPoints: 42,
        armorRating: 12,
        armorRating"type": "",
        speed: {
            climb: "",
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
            necrotic: 4,
            occult: 0,
            primal:0,
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
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Nature Spirit", feature"description": "The Blightweed ignores difficult terrain caused by foliage and other forest-related phenomena" },
        ],
        actionsOptions: [
            {
                optionText: "The Blightweed can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Blightweed can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Thorns",
                        "actionDescription": "Reach 5ft Natural Weapon. +3 vs AR. "hit": 3 (1d6) sharp and 2(1d4) necrotic.",
                        "rollmodifier": 3,
                        "hit": "3 (1d6) sharp and 2(1d4) necrotic.",
                    },
                    
                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Blightweed can take the following action",
                orActions: [
                    {
                        "actionName": "Briar Wall",
                        "actionDescription": "The Blightweed chooses two 5 ft spaces within 5ft.These spaces become difficult terrain for 1 minute, and any creature entering them must make a DC 13 FORT check or take 4(1d8) necrotic damage.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Blood Effigy",
        "description": "Blood Effigies are created through a foul ritual in which a humanoid is sacrificed and drained of all their blood. A fiend then forms a solid body out of the blood.While the ritual is utterly despicable, it is not terribly difficult, so common folk tend to be more aware of Blood Effigies than other demons.Given the bright red color of a young Blood Effigy and the darker burgundy color of an older Blood Effigy, this has led to the incorrect stereotype that all demons are red.",
        "monsterLevel": 10,
        "size": "Medium",
        "type": "Humanoid Fiend (Occult)",
        "attributes": {
            STR: 2,
            DEX: 4, Ref: 14,
            END: 4, Fort: 14,
            AWR: 2, Ant: 12,
            INT: 2, Log: 12,
            CHA: 1,
            Will: 11
        },
        hitPoints: 72,
        armorRating: 13,
        armorRating"type": "",
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
            occult: 7 Immune Non-Magical Weapons,
            primal:0,
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
            divine: 2 DR 2/Magical Weapons,
            fire: 0,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "30ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Immutable, Unerring Mind, Regen 3"],
        features: [
            { feature"name": "Boiling Blood", feature"description": "Any creature that makes a successful melee attack against the Blood Effigy must make a DC 14 FORT check or take 2 (1d4) fire damage." },
            { feature"name": "Malleable Form", feature"description": "The Blood Effigy can use its move action to pass through spaces as small as 1 inch, but cannot end its turn in any space too small for a Medium sized creature. If it does, it takes 13 (2d12) blunt damage." },
        ],
        actionsOptions: [
            {
                optionText: "The Blood Effigy can take THREE of the following actions, or take the same action three times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Blood Effigy can move up to its speed",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Blood Splash",
                        "actionDescription": "Reach 5ft Natural Weapon. +4 vs AR. "hit": 7 (1d6 + 4) fire",
                        "rollmodifier": 4,
                        "hit": "7 (1d6+4) fire",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Blood Effigy can MOVE and take the following action.",
                orActions: [
                    {
                        "actionName": "Exsanguinate",
                        "actionDescription": "Reach 5ft Natural Weapon. +4 vs FORT. "hit": 7(1d6+ 4) fire and the Blood Effigy regains HP equal to the damage it dealt.Additionally, the target’s HP maximum is lowered by the amount of damage dealt.If creature’s maximum HP reaches 0, it immediately dies.Maximum HP lost by Exsanguinate is restored by a Lesser Restoration ritual or similar magic, or by Taking a Rest.",
                        "rollmodifier": 4,
                        "hit": "7 (1d6+4) fire and the Blood Effigy regains HP equal to the damage it dealt.Additionally, the target’s HP maximum is lowered by the amount of damage dealt.If creature’s maximum HP reaches 0, it immediately dies.Maximum HP lost by Exsanguinate is restored by a Lesser Restoration ritual or similar magic, or by Taking a Rest.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },
                
    {
        "name": "Bloodoak Arborean",
        "description": "",
        "monsterLevel": 18,
        "size": "Huge",
        "type": "Abominable Plant (Occult)",
        "attributes": {
            STR: 6,
            DEX: 0, Ref: 10,
            END: 5, Fort: 15,
            AWR: 2, Ant: 12,
            INT: 2, Log: 12,
            CHA: 3,
            Will: 13
        },
        hitPoints: 165,
        armorRating: 15,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "25ft",
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
            primal:5,
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
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "90ft",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            {  skillAttribute: "se 90ft Skills(STR) Applied Force + 10", Skill"name": "", skillBonus: 10 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Bloody Roots", feature"description": "Once on each of the Bloodoak’s turns, it may partially consume the corpse of any humanoid creature within 5 ft of it, regaining 10 HP if it does so. This feature may be used 3 times on any single corpse before the corpse is completely destroyed." },
        ],
        actionsOptions: [
            {
                optionText: "The Bloodoak can take FOUR of the following actions, or takethe same action four times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bloodoak can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "Reach 10ft Natural Weapon. +6 vs AR "hit": 11 (1d10+6) physical.",
                        "rollmodifier": 0,
                        "hit": "11 (1d10+6) physical.",
                    }, {
                        "actionName": "Entangle",
                        "actionDescription": "Reach 45ft Natural Weapon. +6 vs REF. "hit": 7 (2d6) sharp and the target becomes Restrained (escape DC 16).",
                        "rollmodifier": 7,
                        "hit": "7 (2d6) sharp and the target becomes Restrained (escape DC 16) ",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Bloodoak can take TWO of the following actions, or the same action twice…",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bloodoak can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "The Bloodoak uses its Slam attack",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Entangle",
                        "actionDescription": "The Bloodoak uses its Entangle attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"AND take ONE of the following actions.",
                andActions: [
                    {
                        "actionName": "Exsanguinate",
                        "actionDescription": "Reach 15ft Natural Weapon. +6 vs FORT "hit": 9 (1d6+6) sharp. This attack may only be used against targets Restrained by Entanglement.The Bloodoak regains HP equal to the damage dealt by this attack.",
                        "rollmodifier": 6,
                        "hit": "9 (1d6+6) sharp. This attack may only be used against targets Restrained by Entanglement.The Bloodoak regains HP equal to the damage dealt by this attack.",
                    },
                    {
                        "actionName": "Thorn Trap",
                        "actionDescription": "The Bloodoak prepares a 20ft square area within 40ft of it, which it can activate using its reaction.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Sproutlings (Recharge 6)",
                        "actionDescription": "The Bloodoak loses 16 (3d10) HP and summons 2(1d4) Bloodoak Scarecrows, which appear in unoccupied spaces within 20ft of the Bloodoak Arborean and take initiative immediately after it.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Thorn Trap", perRound: 1, re"actionDescription": "When a creature enters the area of the Thorn Trap and the Bloodoak is within 40ft of the area, the Bloodoak may immediately make an Entanglement attack against all creatures within the Thorn Trap." },
        ]
    },, 
    {
        "name": "Bloodoak Brambles",
        "description": "",
        "monsterLevel": 2,
        "size": "Large (Long)",
        "type": "Abominable Plant (Occult)",
        "attributes": {
            STR: 2,
            DEX: 3, Ref: 13,
            END: 0, Fort: 10,
            AWR: -1, Ant: 9,
            INT: -3, Log: 7,
            CHA: -2,
            Will: 8
        },
        hitPoints: 30,
        armorRating: ,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "",
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
            primal:2,
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
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
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
            tremorsense: "60ft",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Immovable,Steel Mind, Vigilant"],
        features: [
            { feature"name": "", feature"description": "" },
        ],
        actionsOptions: [
            {
                optionText: "The Bloodoak Brambles can take the following action twice.",
                orActions: [
                    {
                        "actionName": "Thorn Lash",
                        "actionDescription": "Reach 15ft Natural Weapon. +3 vs AR. "hit": 6 (1d6 + 3) sharp and the creature is Slowed until the end of its next turn.",
                        "rollmodifier": 6,
                        "hit": "6 (1d6+3) sharp and the creature is Slowed until the end of its next turn.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Bloodoak Brambles can take the following action.",
                orActions: [
                    {
                        "actionName": "Blood Sprout",
                        "actionDescription": "If any creature lost HP within 20ft of the Blood Bramble during the previous round and is Bloodied, the Bloodoak Brambles may expand to occupy an additional unoccupied space within 5 ft. The Bloodoak Brambles regains 10 HP.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Bloodoak Host",
        "description": "",
        "monsterLevel": 3,
        "size": "Medium",
        "type": "Abominable Undead Humanoid Plant (Occult)",
        "attributes": {
            STR: 3,
            DEX: -1, Ref: 9,
            END: 2, Fort: 12,
            AWR: 2, Ant: 12,
            INT: -3, Log: 7,
            CHA: 0,
            Will: 10
        },
        hitPoints: 30,
        armorRating: 11,
        armorRating"type": "",
        Immune: Psychic
        speed: {
            climb: "",
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
            occult: 1,
            primal:1,
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
            divine: 2,
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 2,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Shambling Dead", feature"description": "When the Host is reduced to 0 HP and is not reduced to 0 HP by a critical hit, or damage to which it is vulnerable, roll 1d20. On a roll of 12 or lower, the Bloodoak falls Prone and regains 1 HP." },
            { feature"name": "Fertilizer", feature"description": " When the Bloodoak reaches 0 HP and fails its Shambling Dead roll, it sprouts an area of thick growths. The area within a 5ft radius of the Bloodoak becomes difficult terrain." },
        ],
        actionsOptions: [
            {
                optionText: "The Bloodoak can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Host can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Swing",
                        "actionDescription": "Reach 5ft Natural Weapon. +3 vs AR. "hit": 6 (1d6 + 3) blunt.",
                        "rollmodifier": 3,
                        "hit": "6 (1d6+3) blunt.",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Bloodoak can take the following action",
                orActions: [
                    {
                        "actionName": "Grasping Vines",
                        "actionDescription": ". Reach 15ft Natural Weapon. +3 vs REF. "hit": 6(1d6+ 3) sharp and the target is pulled 10ft towards the Host.",
                        "rollmodifier": 3,
                        "hit": "6 (1d6+3) sharp and the target is pulled 10ft towards the Host.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Bloodoak Scarecrow",
        "description": "",
        "monsterLevel": 1,
        "size": "Medium",
        "type": "Abominable Undead Humanoid Plant (Occult)",
        "attributes": {
            STR: 2,
            DEX: 0, Ref: 10,
            END: 2, Fort: 12,
            AWR: 0, Ant: 10,
            INT: -3, Log: 7,
            CHA: -2,
            Will: 8
        },
        hitPoints: 30,
        armorRating: 11,
        armorRating"type": "",
        Immune: Psychic
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
            occult: 1,
            primal:1,
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
            divine: 2,
            fire: 2,
            lightning: 0,
            necrotic: 0,
            occult: 0,
            primal:0,
            psychic: 0,
            radiant: 2,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Fertilizer", feature"description": "When the Bloodoak reaches 0 HP and fails its Shambling Dead roll, it sprouts an area of thick growths. The area within a 5ft radius of the Bloodoak becomes difficult terrain." },
        ],
        actionsOptions: [
            {
                optionText: "The Bloodoak can MOVE and take ONE of the following actions.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bloodoak can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "Reach 5ft Natural Weapon. +2 vs AR. "hit": 4 (1d4+2) sharp.",
                        "rollmodifier": 2,
                        "hit": "4 (1d4+2) sharp",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Boggart",
        "description": "Malicious little fae creatures most closely tied to the Stravon Conclave, Boggarts embody the old adage that misery loves company. They always have something to complain about and only find joy in sharing their problems with other creatures, burdening anyone with ears to hear their patheticsorrows.",
        "monsterLevel": 0.5,
        "size": "Small", 
        "type": "Fea",
        "attributes": {
            STR: -1,
            DEX: 1, Ref: 11,
            END: 0, Fort: 10,
            AWR: 1, Ant: 11,
            INT: 0, Log: 10,
            CHA: 1,
            Will: 11
        },
        hitPoints: 10,
        armorRating: 11,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "25ft",
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
            primal:0,
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
            primal:0,
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
        "DR": [""],
        "skills": [
            { skillAttribute: " (AWR) Intuiting +2;; (CHA) Entertaining +1,Gossipping +4", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Misery Loves Company", feature"description": "Any creature that listens to the Boggart speak for 10 minutes becomes Demoralized for the next hour" },
            { feature"name": "Lurk", feature"description": " The Boggart can turn invisible at will. Once it physically damages a creature, it becomes visible and cannot become invisible again for 10 minutes." },
        ],
        actionsOptions: [
            {
                optionText: "The Boggart can MOVE and take ONE of the following actions.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Boggart can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Dagger",
                        "actionDescription": "Thrown (20ft) One-Handed Weapon. +1 vs AR. "hit": 3(1d4+ 1) sharp.",
                        "rollmodifier": 1,
                        "hit": "3(1d4+ 1) sharp",
                    },
                    {
                        "actionName": "Tragic Revelation",
                        "actionDescription": "Ranged (60ft) Natural Weapon. +1 vs LOG."hit": The creature becomes Shaken until the end of its next turn.",
                        "rollmodifier": 1,
                        "hit": " The creature becomes Shaken until the end of its next turn.",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Bogwallower",
        "description": "Bogwallowers lurk in swamps, marshes, and dank forest floors.When unsuspecting animals approach a muddy bank of water where a Bogwallower is hiding, it will ambush them, smothering and suffocating the creature. Bogwallowers can subsist through photosynthesis, but they get most of their nutrients through preying on animals that stumble into their grasp.",
        "monsterLevel": 8,
        "size": "Large",
        "type": "Plant Elemental",
        "attributes": {
            STR: 4,
            DEX: 4, Ref: 14,
            END: 4, Fort: 14,
            AWR: 2, Ant: 12,
            INT: -2, Log: 8,
            CHA: 0,
            Will: 10
        },
        hitPoints: 78,
        armorRating: 11,
        armorRating"type": "",
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
            primal:0,
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Immutable"],
        features: [
            { feature"name": "Swamp Thing", feature"description": " The Bogwallower gains +4 to stealth checks while in shallow water." },
        ],
        actionsOptions: [
            {
                optionText: "The Bogwallower can MOVE and take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bogwallower can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "Reach 5ft Natural Weapon. +4 vs AR. "hit": 7 (1d6+4)blunt.If the roll exceeds the target’s AR by 3 or more it becomes Shaken until the end of its next turn.",
                        "rollmodifier": 4,
                        "hit": "7 (1d6+4) blunt.If the roll exceeds the target’s AR by 3 or more it becomes Shaken until the end of its next turn.",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Bogwallower can take ONE of the following actions",
                orActions: [
                    {
                        "actionName": "Engul",
                        "actionDescription": ". Reach 5ft Natural Weapon. +4 vs REF. "hit": The target is swallowed.The target gains the Restrained and Suffocating conditions.At the start of every round, a target restrained by Engulf takes 4(1d8) blunt and 4(1d8) corrosive damage.Only one target may be Restrained by Engulf at a time.If the restrained condition ends for any reason the target immediately moves to an unoccupied space within 5ft.",
                        "rollmodifier": 4,
                        "hit": "The target is swallowed.The target gains the Restrained and Suffocating conditions.At the start of every round, a target restrained by Engulf takes 4(1d8) blunt and 4(1d8) corrosive damage.Only one target may be Restrained by Engulf at a time.If the restrained condition ends for any reason the target immediately moves to an unoccupied space within 5ft.",
                    },
                    {
                        "actionName": "Ambush",
                        "actionDescription": "The Bogwallower prepares its Ambush reaction.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Ambush", perRound: 1, re"actionDescription": "When an unsuspecting creature moves within 5ft of the Bogwallower, it may immediately make an Engulf attack against it." },
        ]
    },, 
    {
        "name": "Bone Spider",
        "description": "By assembling a patchwork of bones, sinew, and viscera,a necromancer can create a horrible creature colloquially called a Bone Spider.This undead has no will or volition of its own, but follows the instructions of the necromancer that gave it a semblance of life.",
        "monsterLevel": 10,
        "size": "Large",
        "type": "Constructed Undead Monstrosity",
        "attributes": {
            STR: 4,
            DEX: 4, Ref: 14,
            END: 4, Fort: 14,
            AWR: 0, Ant: 10,
            INT: -3, Log: 7,
            CHA: -3,
            Will: 7
        },
        hitPoints: 80,
        armorRating: 13,
        armorRating"type": "",
        speed: {
            climb: "20ft",
            fly: "",
            jump: "",
            hover: "",
            swim: "",
            walk: "20ft",
            Immune:Necrotic
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
            primal:0,
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
            primal:0,
            psychic: 0,
            radiant: 2,
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
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Steel Mind, Vigilant"],
        features: [
            { feature"name": "MCAP", feature"description": "While riding a Bone Spider, the mounted creature has 2 MCAP. Bone Spiders will only let the caster that summoned them ride them, unless the caster commands the Bone Spider to let another creature ride it." },
            { feature"name": "Disassemble", feature"description": "The Bone Spider can crumble into individual bones held loosely together, resembling a long snake. In this form, it can squeeze through areas as narrow as 1ft wide, but it cannot take any of its normal actions. Reassembling into its normal form takes 1 minute." },
        ],
        actionsOptions: [
            {
                optionText: "The Bone Spider can take FOUR of the following actions or take the same action four times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bone Spider can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Slam",
                        "actionDescription": "Reach 10ft Natural Weapon. +4 vs AR. "hit": 6 (1d4 + 4) blunt",
                        "rollmodifier": 4,
                        "hit": "6 (1d4 + 4) blunt",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "Exploit (1/Round)", perRound: 1, re"actionDescription": "The Bone Spider can Exploit." },
        ]
    },, 
    {
        "name": "Bone Hut",
        "description": "Those who find a cozy cottage after struggling through a savage woodland might want to seek asylum within its cheerful confines, but they would be in for a rude awakening upon entry. Many isolated cottages are actually Bone Huts, the sentient lairs of Bone Hags. More monster than building, Bone Huts contain pocket dimensions within their walls, which might take the form of luxurious manors, humble cottages, or damp caves. Once inside, if a creature dies, the Bone Hut consumes its flesh and converts the creature into a skeleton that will serve the hag for eternity.",
        "monsterLevel": 24,
        "size": "Gargantuan",
        "type": "Constructed Undead Monstrosity",
        "attributes": {
            STR: 7,
            DEX: 0, Ref: 10,
            END: 7, Fort: 17,
            AWR: 2, Ant: 12,
            INT: -1, Log: 9,
            CHA: 7,
            Will: 17
        },
        hitPoints: 3200,
        armorRating: 15,
        armorRating"type": "",
        speed: {
            climb: "",
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
            occult: 4,
            primal:0,
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "30ft",
            darkvision: "",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [" 3/Silvered or Divine"],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [" Immutable, Unerring Mind"],
        features: [
            { feature"name": "House of Nightmare", feature"description": "The interior of the Bone Hut contains a pocket dimension approximately 500ft wide, 500ft long, and 500ft tall. This space is directly connected to the will of the Hut’s Bone Hag and can assume any form they will, complete with appropriate furnishings. This pocket dimension immediately dissolves if the Bone Hut reaches 0 HP." },
            { feature"name": "Facade of Normalcy", feature"description": "If the Bone Hut does not move for 1 hour it assumes the form of a normal cottage of wood and stone. A DC 17 Perceiving check reveals something sinister about the cottage, such as a rotted stench or necrotic aura. The Bone Hut’s true nature can only be revealed if a creature has the ability to magically see creatures in theirtrue form, such as with  the Unerring Mind trait." },
            { feature"name": "Permanent Houseguest", feature"description": "Any creature that dies within the Bone Hut’s interior has its corpse destroyed after 1 minute and the Bone Hut regains HP equivalent to the creature’s maximum HP." },
            { feature"name": "Soul Keeper", feature"description": " If the Bone Hut’s Bone Hag reaches 0 HP while on the same plane of existence, she reforms inside the hut after 1d6 months." },
        ],
        actionsOptions: [
            {
                optionText: "The Bone Hut can take FIVE of the following actions, or take the same action five times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Bone Hut can move up to its speed",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Grasping Claws",
                        "actionDescription": "Reach 10ft Natural Weapon. +7 vs AR. "hit": 10 (1d6+7) sharp and the target becomes Grappled.",
                        "rollmodifier": 7,
                        "hit": "10 (1d6+7) sharp and the target becomes Grappled.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "OR the Bone Hut can MOVE and take ONE of the following actions...",
                orActions: [
                    {
                        "actionName": "Ram",
                        "actionDescription": " The Bone Hut moves 10ft then makes the following attack. Reach 5ft Natural Weapon. +7 vs FORT. "hit": 13 (1d12+7) blunt, and if the target is Large or smaller they fall Prone.",
                        "rollmodifier": 7,
                        "hit": "13 (1d12+7) blunt, and if the target is Large or smaller they fall Prone.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"take the following action",
                andActions: [
                    {
                        "actionName": "Crush",
                        "actionDescription": "Reach 0ft Natural Weapon. +7 vs AR. "hit": 33 (4d12+7) blunt. This attack may only target creatures who are Prone and occupying the same space as the Bone Hut beneath it.",
                        "rollmodifier": 7,
                        "hit": "33 (4d12+7) blunt. This attack may only target creatures who are Prone and occupying the same space as the Bone Hut beneath it.",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Buttercap",
        "description": "Large fungal beasts of burden, Buttercaps generally dwell in subterranean communities. They fill the multiple roles of domesticated livestock, serving as beasts of burden, as mounts, and as a source of food. These fungi are noted for their distinct buttery flavor, which becomes more pronounced the older they get.",
        "monsterLevel": 3,
        "size": "Large",
        "type": "Plant Beast",
        "attributes": {
            STR: 3,
            DEX: 0, Ref: 10,
            END: 4, Fort: 14,
            AWR: -1, Ant: 9,
            INT: -3, Log: 7,
            CHA: -3,
            Will: 7
        },
        hitPoints: 40,
        armorRating: 12,
        armorRating"type": "",
        speed: {
            climb: "30ft",
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
            primal:0,
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
            primal:0,
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
            tremorsense: "30ft",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "(END) Forced March +4", Skill"name": "", skillBonus: 0 }
        ],
        "traits": [""],
        features: [
            { feature"name": "Beast of Burden", feature"description": "A Buttercap can carry 4 additional Unwieldy items before becoming Encumbered." },
            { feature"name": "Mount", feature"description": " When riding a Buttercap, a creature gains 1 MCAP, which it can use to move or make a Bite attack." },
        ],
        actionsOptions: [
            {
                optionText: "The Buttercap can MOVE and take ONE of the following actions",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Buttercap can move up to its speed",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Bite",
                        "actionDescription": ". Reach 5ft Natural Weapon. +3 vs AR. "hit": 7 (1d8+3) sharp.",
                        "rollmodifier": 3,
                        "hit": "7 (1d8+3) sharp.",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            }
        ],
        "reactions": [
            { re"actionName": "", perRound: 1, re"actionDescription": "" },
        ]
    },, 
    {
        "name": "Calleoch",
        "description": "Many parents tell their children monster stories at nighttime to make sure that they don’t wander off and hurt themselves in the dark. Some parents don’t truly believe their own stories, but others have seen the Calleoch. A massive, nightmarish creature that resembles an owl with evil intent, the Calleoch possesses the terrifying ability to polymorph into the guise of a true owl or even a humanoid. Calleochs are widely believed to crave the taste of infant flesh, and both child and parent may wake up in a cold sweat in the dead of night, worried that they heard this fell creature’s shriek.",
        "monsterLevel": 14,
        "size": "Large",
        "type": "Monstrosity (Occult)",
        "attributes": {
            STR: 3,
            DEX: 5, Ref: 15,
            END: 0, Fort: 10,
            AWR: 3, Ant: 13,
            INT: 5, Log: 15,
            CHA: 5,
            Will: 15
        },
        hitPoints: 95,
        armorRating: 14,
        armorRating"type": "",
        speed: {
            climb: "",
            fly: "60ft",
            jump: "",
            hover: "",
            swim: "",
            walk: "30ft",
            Immune: Psychic
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
            primal:0,
            psychic: 0,
            radiant:  1 DR 4/Silvered Weapons,
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
            primal:0,
            psychic: 0,
            radiant: 1,
            sonic: 0,
            toxic: 0,
            special: [],
        },
        senses: {
            blindsight: "",
            darkvision: "300ft",
            lowLight: "",
            tremorsense: "",
            truesight: ""
        },
        "DR": [""],
        "skills": [
            { skillAttribute: "", Skill"name": "", skillBonus: 0 }
        ],
        "traits": ["Unerring Mind"],
        features: [
            { feature"name": "Night Hunter", feature"description": "The Calleoch’s darkvision works in magical darkness." },
            { feature"name": "Light Sensitive", feature"description": "The Calleoch suffers a -5 to attacks and skill checks while in direct sunlight." },
            { feature"name": "Illusory Form", feature"description": "The Calleoch is able to magically disguise itself as a medium sized humanoid or a small sized owl. While in this form, it gains +6 to disguise checks. Taking damage, attacking, or entering direct sunlight immediately dispels this illusion; once dispelled, the Calleoch cannot use this feature again for 10 minutes." },
            { feature"name": "Primeval Terror", feature"description": ". Using CHA, the Calleoch can cast the following primal or occult spells innately each 1/Recoup. They all count as occult spells. Babble, Creeping Fear, Darkness, and Terror." },

        actionsOptions: [
            {
                optionText: "This creature can take FOUR of the following actions, or take the same action four times.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Calleoch can move up to its speed.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Talons",
                        "actionDescription": "Reach 5ft Natural Weapon. +5 vs AR. "hit": 8 (1d6 + 5) sharp.If successful against a medium or smaller",
                        "rollmodifier": 5,
                        "hit": "8 (1d6+5) sharp. If successful against a medium or smaller",
                    },
                    {
                        "actionName": "creature",
                        "actionDescription": ", the Calleoch may make a second attack: +5 vs REF."hit": The target becomes grappled.",
                        "rollmodifier": 5,
                        "hit": "The target becomes grappled.",
                    },
                    {
                        "actionName": "Pursue",
                        "actionDescription": " The Calleoch assumes a stance that allows it to Exploit.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"",
                andActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "",
                        "actionDescription": "",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: " this creature can take TWO of the following actions, or take the same action twice…",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": " The Calleoch can move up to its speed",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Talons",
                        "actionDescription": "The Calleoch uses its Talons attack.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ],
                andText:"AND take ONE of the following actions:",
                andActions: [
                    {
                        "actionName": "Frightening Gaze",
                        "actionDescription": "Ranged (90ft) Natural Weapon. +5 vs WILL."hit": Target gains the Frightened condition for 10 minutes.Once a creature has been Frightened by the Calleoch and overcomes it, it becomes immune to the Calleoch’s Frightening Gaze for 24 hours.",
                        "rollmodifier": 5,
                        "hit": "Target gains the Frightened condition for 10 minutes.Once a creature has been Frightened by the Calleoch and overcomes it, it becomes immune to the Calleoch’s Frightening Gaze for 24 hours.",
                    },
                    {
                        "actionName": "Primeval Terror",
                        "actionDescription": "The Calleoch can cast one of its spells.",
                        "rollmodifier": 0,
                        "hit": "",
                    },

                ]
            },
            , {
                orOptionText: "this creature can take TWO of the following actions, or take the same action twice.",
                orActions: [
                    {
                        "actionName": "Move",
                        "actionDescription": "The Calleoch can move up to its speed",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Frightening Gaze",
                        "actionDescription": "The Calleoch can use its Frightening Gaze ability.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Primeval Terror",
                        "actionDescription": "The Calleoch can cast one of its spells.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                    {
                        "actionName": "Terrifying Recovery",
                        "actionDescription": " The Calleoch can attempt to regain one of its spent innate spells.Declare which spell, then roll 1d6.On a roll of 5-6, the Calleoch regains the declared spell.",
                        "rollmodifier": 0,
                        "hit": "",
                    },
                ]
            }

        ],
        "reactions": [
            { re"actionName": "Pursue (1/Round)", perRound: 1, re"actionDescription": ". If the Calleoch has used its Pursue ability since the beginning of its last turn, then it may Exploit." },
        ]
    }
        ]
    }




