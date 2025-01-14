const rogue = {
    "StackName": "Rogue",
    "ShortDescription": "Skilled operatives that are usually outside the law, rogues might specialize in assassination, impersonation, exfiltration, and the like.",
    "Quote": {
        "phrase": "Only four guards? I’m offended",
        "quotedsname": "Avery Gray",
        "title": "the “Little Shadow”",
    },
    "LongDescription": "You were dealt a difficult hand. You grew up in society’s unforgiving underbelly and from an early age you had to resort to thievery or deception to find food and lodging. Through trial and error, you learned what fools people and what does not.Living in the shadows on the fringes of society, you quietly observed as other, more skilled rogues earned their illicit livelihoods.Seeking to emulate the most successful thieves and con artists, you have learned how to stay one step ahead of the law. The most successful rogues know the other players in their game: crime lords, skilled pickpockets, charlatans, corrupt nobles, bribed guards, aspiring politicians, and the pesky incorruptible altruists among such folk. You make it your business to stay informed on all such individuals. Are there any among these scoundrels whom you would trust? Would you ever try to form a family of sorts with any of these fellow rogues, or do you find that you only trust your own intuition? Even if you would never trust another rapscallion, what offer would convince you to work alongside another individual or group to complete a job? You should always ask yourself these questions, relying on both logic and gut instinct as your answers might change on a daily or even hourly basis.",
    "EntryTalent": {
        "prerequisites": ["Class Entry", "", "Character Level 2"],
        "FlavorText": "When you take this entry talent, you gain the following abilities.",
        "abilities": [
            {
                "abilityname": "Sneak Attack",
                "abilitydescription": "Your Sneak Attack damage increases by +1d6 (if you had no Sneak Attack, it becomes 1d6). You can apply Sneak Attack damage to a creature that you hit with a melee attack with a light weapon if you had TA against the target and no TD. You may do this once per turn."
            },
            {
                "abilityname": "Skilled",
                "abilitydescription": "Gain +6 Skill Points, which you can spend on any skills with the Acrobatics, Influence, Observation, and/or Subterfuge tags.",
            },
            {
                "abilityname": "Well Equipped",
                "abilitydescription": "You gain hooded common clothes, a hooded lantern, two daggers, a skullduggery kit, and one disguise of your choice.",
            }
        ],
    },
    "Tracks": [
        {
            "TrackName": "Con",
            "TrackDescription": "You wear identities like clothes. Capable of impersonating nearly anyone, you can pull elaborate cons.",
            "Talents": [
                {
                    "TalentName": "Confidence",
                    "prerequisites": ["Rogue", "Con", "Rogue Entry"],
                    "FlavorText": "You gain 1 rank in the Charlatan profession. If you already have any ranks in the Charlatan profession, you gain +3 Skill Points in Savoir Faire, and +3 Skill Points that you can spend on Empathy, Gossiping, Intimidating, Leadership, or Persuading.",
                    "abilities": []
                },
                {
                    "TalentName": "Impersonate",
                    "prerequisites": ["Rogue", "Con", "Confidence"],
                    "FlavorText": "Your false identity now holds up to some scrutiny. After spending a day studying someone and at least a week in their area of residence, you can use the Impersonate ability.",
                    "abilities": [
                        {
                            "abilityname": "Impersonate",
                            "abilitydescription": " Roll an INT/Disguise check and an INT/ Forging check and take the average of the two rolls. This becomes your Identity Score. People inspecting your credentials, paperwork, or claims may make an INT roll, and if they do not beat your Identity Score, they do not get suspicious unless you give them a clear reason to be suspicious. You may have one active identity. You can only repeat your Disguise and Forging check by spending another day with the person and another week in their area of residence. A creature inspecting you gains the following cumulative bonuses to their INT roll if circumstances allow. +5 If you have just done something very suspicious. +20 If you are within 5 miles of the home of the person you are impersonating. +30 If the person who is inspecting has heard of or knows about the person you are impersonating. +40 If the person inspecting has been fooled by a different identity before. +50 If the person inspecting has met the person you’re impersonating before. +70 If the person inspecting has met the person you’re impersonating in the last year. The creature automatically beats your score if they have interacted with the person that you are impersonating in the last month, the person you are impersonating is a well known individual in the area you’re in, or the inspector knows the individual that you are impersonating personally.",
                        },
                    ]
                },
                {
                    "TalentName": "Master Of Disguise",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "You gain +3 to Disguising and +3 to Forging checks.",
                    "abilities": [],
                },
                {
                    "TalentName": "Additional Identities",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "You may have an additional identity. It takes you one hour to switch between identities.",
                    "abilities": [],
                },
                {
                    "TalentName": "Better Identities",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "You gain +5 to your Identity Score.",
                    "abilities": [],
                },
                {
                    "TalentName": "Sturdier Identities",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "You gain +10 to your Identity Score when the inspector has any number of circumstantial bonuses.",
                    "abilities": [],
                },
                {
                    "TalentName": "Quicker Identities",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "You may shortcut the 1 week requirement for identities and take a -5 on your Forgery check per day skipped (Max -30). ",
                    "abilities": [],
                },
                {
                    "TalentName": "Betrayal",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "If you attack someone who is Completely Surprised and has been fooled by your identity, that attack is an automatic crit and deals maximum damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Charming Identity",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Impersonate"],
                    "FlavorText": "You may attempt to Charm someone who has been fooled by your Identity. Make a CHA roll vs LOG. If you hit, they treat you as a friendly acquaintance for 1 minute, and do not know they have been Charmed. This does not work if the creature is in combat.",
                    "abilities": [],
                },
                {
                    "TalentName": "Leave It To Luck ",
                    "prerequisites": ["Rogue", "Con", "Con 5",],
                    "FlavorText": "You gain the Coin Toss ability.",
                    "abilities": [
                        {
                            "abilityname": "Coin Toss",
                            "abilitydescription": "Your next d20 roll becomes a 50/50 chance. If you roll an odd number, treat it as a 1. If you roll an even number, treat it as a 20. (½ LUCK/Rest)",
                        },]
                },
                {
                    "TalentName": "Fool's Strike",
                    "prerequisites": ["Rogue", "Con", "Repeatable", "Leave it to Luck"],
                    "FlavorText": "You gain an additional Sneak Attack die against creatures while you are disguised and your target does not know your true identity. You can take this talent up to six times.",
                    "abilities": []
                },
                {
                    "TalentName": "How Dare You ",
                    "prerequisites": ["Rogue", "Con", "Leave it to Luck"],
                    "FlavorText": "People inspecting your identity must subtract your Savior Faire from their INT roll.",
                    "abilities": []
                },
                {
                    "TalentName": "Leave It To Luck II",
                    "prerequisites": ["Rogue", "Con", " Leave it to Luck"],
                    "FlavorText": "Your Coin Toss ability becomes LUCK/Rest.",
                    "abilities": [],
                },
                {
                    "TalentName": "Jammy",
                    "prerequisites": ["Rogue", "Con", " Leave it to Luck"],
                    "FlavorText": "Your total number of Luck Points per day is equal to your LUCK",
                    "abilities": [],
                },
                {
                    "TalentName": "Slippery",
                    "prerequisites": ["Rogue", "Con", " Leave it to Luck"],
                    "FlavorText": "You can now spend 2 Luck Points to force a creature that you can see within 30 ft of you to reroll a d20 after they make an attack roll or after they inspect your identity.",
                    "abilities": []
                },
                {
                    "TalentName": "Catch Me If You Can ",
                    "prerequisites": ["Rogue", "Con", " Leave it to Luck"],
                    "FlavorText": "If you have at least 1 Luck Point when you are reduced to 0 HP, you can regain 1 HP and immediately move 40 ft without provoking reactive actions. Doing so costs all of your remaining Luck Points.",
                    "abilities": []
                },
                {
                    "TalentName": "Play Dead",
                    "prerequisites": ["Rogue", "Con", " Leave it to Luck"],
                    "FlavorText": "If you have at least 1 Luck Point when you hit 0 HP you can regain 1 HP and pretend to be dead. You begin Catching your Breath when you do this.Additionally, make a CHA/ Performance roll vs the LOG of each creature that can see you.If you hit more than half the witnesses, then you are believed to be dead (or the identity that you are currently using is believed to be dead).",
                    "abilities": []
                },
                {
                    "TalentName": "Master Of Disguise II",
                    "prerequisites": ["Rogue", "Con", "Leave it to Luck, Master of Disguise"],
                    "FlavorText": "You gain +3 In Savior Faire and +3 Skill Points that you may spend on any skill with the Influence tag.",
                    "abilities": []
                },
                {
                    "TalentName": "Check It Again",
                    "prerequisites": ["Rogue", "Con", "Leave it to Luck"],
                    "FlavorText": "You may now spend 1 Luck Point to force a creature to reroll their INT check made to overcome your Identity Score.",
                    "abilities": []
                },
                {
                    "abilityname": "Frame",
                    "prerequisites": ["Rogue", "Con", "Leave it to Luck"],
                    "FlavorText": "You can now abandon an identity after you attempt a Rug Pull using the rank 5 Charlatan ability. There is a 50% chance that the blame will fall on the person you were impersonating instead of you.",
                    "abilities": []
                },
                {
                    "abilityname": "Conman Extraordinaire",
                    "prerequisites": ["Rogue", "Con", " Leave it to Luck"],
                    "FlavorText": "Who exactly are you? No one knows. Your original identity has been completely erased from all records and only the people closest to you might know your real name. You may now attempt a grand impersonation. When someone inspects you, they gain no bonus from having heard of the person that you are impersonating or from having met them before. People who personally know the creature you are impersonating will only find you out if they can see you and are within 30 ft of you. Your Grand Impersonation only lasts for 24 hours, and you may only attempt a Grand Impersonation once a week. After 2 hours, future inspections gain a +40 bonus to their roll.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": ": The final cap for your CHA increases from 12 to 14.",
                        },
                    ]
                },
            ]
        },
        {
            "TrackName": "Guild Affiliate",
            "TrackDescription": "You are a talented poisoner and use deadly reagents to enhance your weapon attacks.",
            "Talents": [
                {
                    "TalentName": "Guild Member",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Rogue Entry"],
                    "FlavorText": "Incompatible: Disciple of the Divine, Initiate of the Occult, Warden of the Primal You join Harlan’s Guild (or another guild, as specified by your MC.) You may only gain the benefits of this talent after Taking a Rest in an area of civilization such as a town or village. You swear off all deific influence. You gain access to three poisons, and can keep one vial of each on your person. A vial is enough for three doses of each poison. You may only refill these by Taking a Rest in a populated area. You learn how to identify fellow members of the guild who can provide this service to you, as well as clue you in to potential contracts. If you break your oath, you may no longer refill your poisons until reparations have been made. You can spend 1 AP to coat a weapon that has the Light property. The first vials are free, but new vials cost 20 sc each.",
                    "abilities": [
                        {
                            "abilityname": "Drake’s Breath",
                            "abilitydescription": "Your attacks have a 50% chance to deal an extra 1d6 fire damage for 1 minute. The extra damage occurs on odd-numbered attack rolls.",
                        },
                        {
                            "abilityname": "Ice Blood",
                            "abilitydescription": "The first target struck with a weapon coated in this poison must make an END check with a DC of 10 at the start of their turns for the next 1 minute. On any turn where they fail, they gain the Chilled condition. A creature with a ML instead loses one of the actions on their actions list."
                        },
                        {
                            "abilityname": "Harlan’s Breach",
                            "abilitydescription": "Your attacks ignore all Resist properties, as well as Immune Blunt, Immune Sharp, and Immune Physical for 1 minute.",
                        }
                    ],
                },
                {
                    "TalentName": "Find Weak Spot",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Guild Member"],
                    "FlavorText": "Once per turn, you may target a creature’s FORT instead of their AR.",
                    "abilities": []
                },
                {
                    "abilityname": "Find Weak Spot II",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Repeatable (even levels only)", "Find Weak Spot"],
                    "FlavorText": "You gain an additional Sneak Attack die whenever you use Sneak Attack and Weak Spot together.",
                    "abilities": []
                },
                {
                    "abilityname": "Find Weak Spot III",
                    "prerequisites": ["Rogue", "Guild Affiliate", " Repeatable (odd levels only)", "Find Weak Spot II"],
                    "FlavorText": "If your Weak Spot attack hits, you may move 5 ft for free. This movement does not provoke reactive attacks. (1/Catch Breath) Each time you take this talent again, gain +2 uses /Catch Breath.",
                    "abilities": [],
                },
                {
                    "TalentName": "Find Weak Spot IV",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Find Weak Spot III"],
                    "FlavorText": "Weak Spot attacks that exceed the target’s FORT by 5 or more cause Bleeding 1d4 for 1d6 rounds.",
                    "abilities": [],
                },
                {
                    "TalentName": "Find Weak Spot V",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Find Weak Spot IV"],
                    "FlavorText": "Your Weak Spot attacks gain +1 crit range.",
                    "abilities": [],
                },
                {
                    "TalentName": "Garrote",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Guild Member"],
                    "FlavorText": "You gain the Garrote ability.",
                    "abilities": [
                        {
                            "abilityname": "Garrote",
                            "abilitydescription": " By spending 3 AP, you may make a DEX vs ANT attack against a creature who cannot see you and is in melee distance. On a hit, you begin a special grapple that requires both of your hands. You can take no actions other than movement. Otherwise this follows the normal Grappled rules. If their ML is less than half your character level, they are rendered Helpless and begin Suffocating while grappled in this way.Otherwise, the creature is silenced and staggered while grappled in this way. (1 / Rest) ",
                        },
                    ],
                },
                {
                    "TalentName": "Rogue Maneuvers",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Guild Member"],
                    "FlavorText": "Your range for thrown weapons is doubled and thrown weapons can now trigger Sneak Attack.",
                    "abilities": [],
                },
                {
                    "TalentName": "Hamstring",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Rogue Maneuvers", "Guild Affiliate 5"],
                    "FlavorText": "You gain the Hamstring Ability.",
                    "abilities": [
                        {
                            "abilityname": "Hamstring",
                            "abilitydescription": "When a creature leaves your melee reach, you can attack with a melee weapon by spending 2 Reactive AP. On a hit, that target’s movement is halved until the end of their turn.",
                        },
                    ]
                },
                {
                    "TalentName": "Preparatory Strike",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Rogue Maneuvers", "Guild Affiliate 5"],
                    "FlavorText": "You gain the Preparatory Strike ability.",
                    "abilities": [
                        {
                            "abilityname": "Preparatory Strike",
                            "abilitydescription": "Make a weapon attack against a creature and then end your turn immediately. You add a bonus to your physical defenses until the beginning of your next turn. The bonus equals the number of AP you have remaining to use reactively.",
                        },
                    ],
                },
                {
                    "TalentName": "Evasive Throw",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Rogue Maneuvers", "Guild Affiliate 5"],
                    "FlavorText": "You gain Evasive Throw ability.",
                    "abilities": [
                        {
                            "abilityname": "Evasive Throw",
                            "abilitydescription": "Spend 1 additional AP as a part of a thrown weapon attack. If it hits, you gain +2 to your mental defenses against that creature and take no damage when the creature misses you if you would otherwise take half damage.",
                        },
                    ]
                },
                {
                    "TalentName": "Quick Throw",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Rogue Maneuvers", "Guild Affiliate 5"],
                    "FlavorText": "You can now make a ranged thrown attack as a part of drawing a concealed weapon. If the creature is Partially Surprised it automatically hits. If the creature is Completely Surprised it automatically hits and crits.",
                    "abilities": [],
                },
                {
                    "TalentName": "Aimed Strike",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Guild Member"],
                    "FlavorText": "Spend 1 additional AP on an attack to gain TA on that attack.",
                    "abilities": [],
                },
                {
                    "TalentName": "Aimed Strike II ",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Aimed Strike"],
                    "FlavorText": "When using Aimed Strike, roll 2d20 and keep the higher result.",
                    "abilities": [],
                },
                {
                    "TalentName": "Tactical Superiority",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Aimed Strike"],
                    "FlavorText": "Your Aimed Strikes deal +1 damage. Additionally, when you have one source of TA, you can ignore two sources of TD, potentially allowing you to use Sneak Attack.",
                    "abilities": [],
                },
                {
                    "TalentName": "Tactical Superiority II",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Tactical Superiority"],
                    "FlavorText": "Your Aimed Strikes deal +1 damage. Additionally, when you have one source of TA, you can ignore three sources of TD.",
                    "abilities": [],
                },
                {
                    "TalentName": "Tactical Superiority III",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Tactical Superiority II"],
                    "FlavorText": "Your Aimed Strikes deal +1 damage. Additionally, when you have one source of TA, you can ignore all sources of TD.",
                    "abilities": [],
                },
                {
                    "TalentName": "Poisoner",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Guild Member"],
                    "FlavorText": "You may now apply poison to ammunition.",
                    "abilities": [],
                },
                {
                    "TalentName": "Drakes Breaty Preference",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You may replace Ice Blood or Harlan’s Breach with extra vials of Drake’s Breath when you refill your poisons.",
                    "abilities": [],
                },
                {
                    "TalentName": "Drake's Breath Efficiency",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You can get four doses from a vial of Drake’s Breath.",
                    "abilities": [],
                },
                {
                    "TalentName": "Drake's Breath Efficacy",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "Drake’s Breath becomes 2d6 fire damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Lingering Drake's Breath",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "Drake’s Breath lasts for 2 minutes.",
                    "abilities": [],
                },
                {
                    "TalentName": "Drake's Breath Ammunition",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You can apply Drake’s Breath to a quiver of up to 20 arrows or a case of up to 20 bolts, but the duration remains unchanged.",
                    "abilities": [],
                },
                {
                    "abilityname": "Drake's Breath Expertist",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You can now add your INT to Drake’s Breath damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Ice Blood Preference",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You may replace Drake’s Breath or Harlan’s Breach with extra vials of Ice Blood when you refill your poisons.",
                    "abilities": [],
                },
                {
                    "TalentName": "Ice Blood Efficiency",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You can get four doses from a vial of Ice Blood.",
                    "abilities": [],
                },
                {
                    "TalentName": "Ice Blood Efficacy",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "Ice Blood’s DC becomes your INT+10.",
                    "abilities": [],
                },
                {
                    "TalentName": "Lingering Ice Blood",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "Ice Blood lasts for 2 minutes.",
                    "abilities": [],
                },
                {
                    "abilityname": "Harlan's Breach Preference",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You may replace Drake’s Breath or Ice Blood with extra vials of Harlan’s Breach when you refill your poisons.",
                    "abilities": [],
                },
                {
                    "TalentName": "Harlan's Breach Efficiency",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You can get five doses from a vial of Harlan’s Breach.",
                    "abilities": [],
                },
                {
                    "TalentName": "Harlan's Breach Efficacy",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "Any creature struck with Harlan’s Breach loses its Resist properties until the beginning of its next turn.",
                    "abilities": [],
                },
                {
                    "TalentName": "Lingering Harlan's Breach",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "Harlan’s Breach lasts for 2 minutes.",
                    "abilities": [],
                },
                {
                    "TalentName": "Harlan's Breach Ammunition",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Poisoner"],
                    "FlavorText": "You can apply Harlan’s Breach to a quiver of up to 20 arrows or a case of up to 20 bolts, but the duration remains unchanged.",
                    "abilities": []
                },
                {
                    "TalentName": "Guildmaster",
                    "prerequisites": ["Rogue", "Guild Affiliate", "Capstone", "Guild Affiliate 14"],
                    "FlavorText": "You are an individual of great renown among the shadowy underbelly of Ancerra. Commanding entire operations for your guild, approving new members, and handling the most sensitive of issues. You gain two vials of each of the three poisons when you rest in a populated area, and refilling them is free. Once per week, you can have a guild representative meet you where you are camping for refills, assuming your location is accessible without major magic or combat. The representative will not partake in combat or favors for you, but may take messages back to the nearest town if you request it.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "You gain one additional vial of each of the three poisons from this track each time you restock.",
                        },
                    ],
                },
            ]
        },
        {
            "TrackName": "Psyblade",
            "TrackDescription": "You have an aptitude for psionic magic and use this to silence your footfalls and improve your thievery.",
            "Talents": [
                {
                    "TalentName": "Psyblade Focus",
                    "prerequisites": ["Rogue", "Psyblade", "Rogue Entry"],
                    "FlavorText": "You gain the Adept of the Psionic talent if you do not already have it. INT is your magic attribute. Each time you level up and spend your Talent Point on a talent in the Psyblade stack, you gain +5 SP and +1 Psionic Power.",
                    "abilities": [],
                },
                {
                    "TalentName": "Soul Knife",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus"],
                    "FlavorText": "Regardless of your Aptitude, Create Weapon costs you 0 SP to cast, and 0 AP to resummon a Light weapon.",
                    "abilities": [],
                },
                {
                    "TalentName": "Soul Rend",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus"],
                    "FlavorText": "Gain the Soul Rend ability",
                    "abilities": [
                        {
                            "abilityname": "Soul Rend",
                            "abilitydescription": "When you deal psychic damage to a creature, it can no longer regain HP until the beginning of its next turn. (INT/Rest)",
                        }
                    ],
                },
                {
                    "TalentName": "Psychic Bond",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus"],
                    "FlavorText": "Gain the Psychic Bond ability.",
                    "abilities": [
                        {
                            "abilityname": "Psychic Bond",
                            "abilitydescription": "Choose an ally within 30 ft of you and spend 2 AP. Gain TA on enemies that take damage from that ally during the duration. This ability lasts for 1 minute. (INT/Rest)",
                        },
                    ]
                },
                {
                    "TalentName": "Psychic Strike",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus"],
                    "FlavorText": "If you would miss an attack roll, you may spend SP to add to your attack roll total at a rate of 1 SP per +2. (INT/Rest).",
                    "abilities": [],
                },
                {
                    "TalentName": "Mind Spike",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus"],
                    "FlavorText": "Your attacks and spells that deal psychic damage may now deal Sneak Attack damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Improved Mind Spike",
                    "prerequisites": ["Rogue", "Psyblade", "Mind Spike"],
                    "FlavorText": "You gain +1 Sneak Attack die when dealing psychic damage.",
                    "abilities": [],
                },
                {
                    "TalentName": "Space Bend",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus"],
                    "FlavorText": "When you would be the victim of damage that affects more than one creature, you may teleport to an unoccupied space up to 15 ft away, but you start your next turn with 3 fewer AP. (½ INT/Rest)",
                    "abilities": []
                },
                {
                    "abilityname": "Psylade Focus II",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade 5"],
                    "FlavorText": "You can now choose if the weapons created by your Create Weapon are visible, invisible, or shed bright light in a 15 ft radius and dim light for an additional 15 ft.",
                    "abilities": [],
                },
                {
                    "TalentName": "Soul Knife II",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II", "Soul Knife"],
                    "FlavorText": "You may now spend 1 AP to teleport to a thrown weapon from Create Weapon once per turn. (INT/Recoup)",
                    "abilities": [],
                },
                {
                    "TalentName": "Soul Rend II",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II", "Soul Rend"],
                    "FlavorText": "Soul Rend now lasts until the end of the creature’s turn.",
                    "abilities": [],
                },
                {
                    "TalentName": "Psychic Bond II",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II", "Psychic Bond"],
                    "FlavorText": "Psychic Bond now grants TA to your ally against creatures that you have damaged during the duration. Additionally, you can communicate telepathically with your Psychic Bond.",
                    "abilities": [],
                },
                {
                    "TalentName": "Psychic Bond III",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Bond II"],
                    "FlavorText": "While the TA benefit only extends to one ally, you can include up to eight willing creatures that you can see when communicating telepathically. One of these creatures must be the ally that you chose to gain TA.",
                    "abilities": []
                },
                {
                    "abilityname": "Enlightened Mind",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II"],
                    "FlavorText": "Spells with a range of self or touch cost you fewer AP: subtract your INT from the APC (min 1 APC). (½ INT/Rest)",
                    "abilities": [],
                },
                {
                    "TalentName": "Piercing Strike",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II"],
                    "FlavorText": "Your attacks ignore Resist Psychic.",
                    "abilities": [],
                },
                {
                    "TalentName": "Psychic Scream",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II"],
                    "FlavorText": "Gain the Psychic Scream ability.",
                    "abilities": [
                        {
                            "abilityname": "Gain the Psychic Scream ability.",
                            "abilitydescription": "Spend 3 AP to make an INT vs LOG attack against all creatures within 5 ft of you. On a hit, deal 1d4+INT psychic damage and the creature cannot take Reactive Actions until after their next turn. (3/Rest)",
                        }
                    ],
                },
                {
                    "TalentName": "Psionic Armor",
                    "prerequisites": ["Rogue", "Psyblade", "Psyblade Focus II"],
                    "FlavorText": "You may use your LOG in place of your ANT or WILL when a creature attacks your ANT or WILL. (INT/Rest)",
                    "abilities": [],
                },
                {
                    "TalentName": "Master Psyblade",
                    "prerequisites": ["Rogue", "Psyblade", "Capstone", "Psyblade 14"],
                    "FlavorText": "Your hardened capacity to manipulate the world around you with a mere thought is something of an urban legend among cons and crooks. Even some circles of spellcasters whisper your name with wonder. If you have zero uses of Soul Rend or Psychic Scream and a creature attacks but misses your LOG, you regain one use of Soul Rend or Psychic Scream. If you have zero uses of both, you can choose which one.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "You now also regain uses of Soul Rend or Psychic Scream if you’re using your LOG against a WILL or ANT attack using Psionic Armor.",
                        },
                    ]
                },
            ]
        },
        {
            "TrackName": "Subtlety Track",
            "TrackDescription": "",
            "Talents": [
                {
                    "TalentName": "Vanish",
                    "prerequisites": ["Rogue", "Subtlety", "Rogue Entry"],
                    "FlavorText": "You may roll 2d20 and take the higher result when attempting to hide.",
                    "abilities": [],
                },
                {
                    "TalentName": "Shadow Hop",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "You may now move between sources of cover and concealment, and do not lose the Unseen condition from moving into line of sight in Dim Light unless you end your movement out of cover or concealment.",
                    "abilities": [],
                },
                {
                    "TalentName": "Scale The Balcony",
                    "prerequisites": ["Rogue", "Psyblade", "Vanish"],
                    "FlavorText": "You gain +3 Athletics when climbing, which increases to a +6 while you have a Climber Kit. Additionally, once per turn when you spend AP to move in combat, you gain a Climb speed equal to your speed.",
                    "abilities": [],
                },
                {
                    "TalentName": "Keep Quiet",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "Being struck by a melee attack no longer causes you to lose the Unseen condition. While you are Unseen, ranged attackers do not know if they hit you with a ranged attack or spell.",
                    "abilities": []
                },
                {
                    "TalentName": "Sidestep",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "If you are Unseen and a creature who is hostile to you or neutral to you would walk through your space, you may move 5 ft to get out of their way. If you have the Scale the Balcony talent, this movement may include climbing.",
                    "abilities": []
                },
                {
                    "TalentName": "Blink Of An Eye",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "On any turn where you take the Move action three times, your attempts to take the Hide action while in Total Cover automatically succeed. ",
                    "abilities": []
                },
                {
                    "TalentName": "Blackjack",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "You gain the Blackjack ability.",
                    "abilities": [
                        {
                            abilitytname: "Blackjack",
                            "abilitydescription": "By spending 5 AP, deal 20 nonlethal blunt damage to a creature who is Completely Surprised. If a single instance of this ability renders the creature Unconscious, you do not need to roll to retain the Complete Surprise condition.",
                        }
                    ],
                },
                {
                    "TalentName": "Sprint",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "When you gain the Unseen condition, you may immediately take the move action for 0 AP.",
                    "abilities": []
                },
                {
                    "TalentName": "Shadow Assault",
                    "prerequisites": ["Rogue", "Subtlety", "Vanish"],
                    "FlavorText": "You gain an additional Sneak Attack die while you are Unseen.",
                    "abilities": []
                },
                {
                    "TalentName": "In The Dark",
                    "prerequisites": ["Rogue", "Subtlety", "Subtlety 5"],
                    "FlavorText": "When you are in Darkness, you are Unseen to creatures who are relying on Darkvision to see you.",
                    "abilities": []
                },
                {
                    "TalentName": "Shadow Hop II",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark", "Shadow Hop"],
                    "FlavorText": "The first attack you make on your turn does not cause you to lose the Unseen condition.",
                    "abilities": []
                },
                {
                    "TalentName": "Born In Darkness",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark",],
                    "FlavorText": "You gain the Born of Darkness ability.",
                    "abilities": [
                        {
                            "abilityname": "Born of Darkness",
                            "abilitydescription": "By spending 4 AP, suppress all conditions of your choice for 1 minute and move up to your speed. If you end this movement in Cover or being Concealed, gain the Unseen condition. If you end one of your next six turns without the Unseen condition, all of your suppressed conditions return.",
                        },
                    ]
                },
                {
                    "TalentName": "Shadow Mastery",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark"],
                    "FlavorText": "When you are in Dim Light you do not lose the Unseen condition by entering Line of Sight for creatures who do not have Darkvision.",
                    "abilities": []
                },
                {
                    "TalentName": "Fellow Inhabitant",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark"],
                    "FlavorText": "If you spend 30 seconds in combat observing a creature, you learn if they have Darkvision and if they have any other remarkable source of non-magical perception.",
                    "abilities": []
                },
                {
                    "TalentName": "Shadow Trick",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark"],
                    "FlavorText": "If a creature you can see attempts to target a square they think you are in, and you are within 5 ft of that square, you may spend 1 AP reactively to make them believe they hit you, and then take a 5 ft step. This trick lasts until the beginning of your next turn. Each time they target that space they must beat your LOG with their INT to know you are not in that space..",
                    "abilities": []
                },
                {
                    "TalentName": "Shadow Assault II",
                    "prerequisites": ["Rogue", "Subtlety", "Repeatable", "In the Dark", "Shadow Assault"],
                    "FlavorText": "You gain an additional Sneak Attack die while you are Unseen. You may take this talent up to five times.",
                    "abilities": []
                },
                {
                    "TalentName": "Vanish II",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark", "Vanish"],
                    "FlavorText": "You automatically succeed your Hide roll while you are in Darkness or Total Cover. (INT/Rest).",
                    "abilities": []
                },
                {
                    "TalentName": "Shadowstep",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark"],
                    "FlavorText": "You can now pass through 5 ft of bright light without losing the Unseen condition.",
                    "abilities": []
                },
                {
                    "TalentName": "Quiet One",
                    "prerequisites": ["Rogue", "Subtlety", "In the Dark"],
                    "FlavorText": "You gain +10 to Eavesdropping while you are Unseen. This can exceed the normal cap of 20 for a skill, but cannot exceed 25.",
                    "abilities": []
                },
                {
                    "TalentName": "Master Of Shadow",
                    "prerequisites": ["Rogue", "Subtlety", "Capstone", "In the Dark", "Subtlety 14"],
                    "FlavorText": "Your true identity is a mystery, and only the most powerful and knowledgeable of Ancerra know of your existence at all. You are a creature of shadow, coming and going as you please. You are now considered Unseen by creatures without Darkvision, and Concealed by creatures with Darkvision, whenever you are not in bright light, unless you chose to be seen.",
                    "abilities": [
                        {
                            "abilityname": "Level 30",
                            "abilitydescription": "You have learned how to simulate your own shadows by placing yourself where bright light will assail the eyes of any who look for you. When you are in bright light, you are considered Concealed, unless you choose to be seen.",
                        },
                    ]
                }
            ],
        },
        {
            "TrackName": "Stealth Archer",
            "TrackDescription": "You are a master of raining death on your enemies from a hidden vantage.",
            "Talents": [
                {
                    "TalentName": "Aimed Shot",
                    "prerequisites": ["Rogue", "Stealth Archer", "Rogue Entry"],
                    "FlavorText": "You can spend 1 additional AP to give yourself TA on a target that is Flanked.",
                    "abilities": []
                },
                {
                    "TalentName": "Shadow Shot",
                    "prerequisites": ["Rogue", "Stealth Archer", "Rogue Entry"],
                    "FlavorText": "If your target is at least 45 ft away, firing a silent ranged weapon does not cause you to lose the Unseen condition. This does not work with ranged weapons that produce concussive noise.",
                    "abilities": []
                },
                {
                    "TalentName": "Shadow Shot Range",
                    "prerequisites": ["Rogue", "Stealth Archer", "Shadow Shot"],
                    "FlavorText": "Shadow Shot becomes: If your target is at least 35 ft away.",
                    "abilities": []
                },
                {
                    "TalentName": "Silent Shot",
                    "prerequisites": ["Rogue", "Stealth Archer", "Rogue Entry"],
                    "FlavorText": "Your ranged weapon attacks can now apply Sneak Attack damage if your target is within 30 ft of you and you have TA.",
                    "abilities": []
                },
                {
                    "TalentName": "Silent Shot Range",
                    "prerequisites": ["Rogue", "Stealth Archer", "Repeatable", "Silent Shot"],
                    "FlavorText": "Your ranged weapon attacks can apply Sneak Attack damage 10 ft further than they previously could.",
                    "abilities": []
                },
                {
                    "TalentName": "Improved Silent Shot",
                    "prerequisites": ["Rogue", " Stealth Archer,", "Repeatable", " Silent Shot"],
                    "FlavorText": "You gain an additional Sneak Attack die when making a ranged weapon attack. You can take this talent up to five times.",
                    "abilities": []
                },
            ]
        },],
};