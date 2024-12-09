const Tinkerer = {
  "StackName": "Tinkerer",
  "ShortDescription": "By spending countless hours fiddling with scrap parts, tinkerers can create wondrous items.Some tinkerers enhance their items with arcane magic.",
  "Quote": {
    "phrase": "Yeah, never go throwin’ crap away when it might serve a purpose.Hoarding is good for the soul, you see. You know what they say about one person’s trash. ‘Give it to the tinkerer,’ they say.Now, hand it over and I’ll make you a can opener.Or a flamethrower, mayhap.",
    "quotedsname": "Ingrid Divrgubben",
    "title": "collector",
  },
  "LongDescription": "You have never been able to keep from fidgeting, always reaching for clockwork, screws, wires, and the like as you seek to create new inventions or improve upon existing ones. You always had a penchant for tinkering and exhibit relentless ingenuity. You quickly gained notoriety as someone who could always find a way to enhance anything with mechanical parts.Unquenchably curious, you always seek to understand how something works and how it might be improved upon. What is your medium of choice? Tinkerers often favor metal and wood due to their versatility, but other substances can make for interesting inventions as well.When you invent something, what motivates you? Are you most concerned with improving your quality of life by making existing technology more effective, or are you looking to break the confines of science as your contemporaries understand it? Do you have some grand idea for a new invention that will revolutionize the world?",

  "EntryTalent": {
    "prerequisites": ["Class Entry", "", "Character Level 2"],
    "FlavorText": "When you take this entry talent, you gain the following abilities.",
    "abilities": [
      {
        "abilityname": "Tools of the Trade",
        "abilitydescription": "You gain a set of Tinker’s Tools.",
      },
      {
        "abilityname": "Masterwork",
        "abilitydescription": "You specify a weapon or set of armor as your focus. You can change your focus by spending at least a day tinkering with your new focus. Your currently focused item gains +1 to hit and damage if a weapon, and +1 to AR if armor. These bonuses are in addition to any enhancements, enchantments, or other bonuses to that weapon or armor’s statistics. If you change your Masterwork focus, your old focus loses the improvements from this talent.",
      },
      {
        "abilityname": "Rig",
        "abilitydescription": "You can very quickly cobble together an improvised set of tools, a simple item (like a crowbar or pulley), which lasts for a single use. Alternatively, you can patch a simple broken item (such as a rowboat with a hole, or a busted door drawbar), which lasts for 1 hour. (1/Rest)",
      },
    ]

  },
  "Tracks": [
    {
      "TrackName": "Alchemist",
      description: "",
      "Talents": [
        {
          "TalentName": "Alchemy",
          "prerequisites": ["Tinkerer", "Alchemist", "Tinkerer Entry"],
          "FlavorText": "Each time you Take a Rest, you make two Alchemy Creations. Your first option for Alchemy Creations is Alchemy Flasks.",
          "abilities": [
            {
              "abilityname": "Alchemy Flask",
              "abilitydescription": "Create an Alchemy Flask. Choose a spell from the Formula list, and that spell is synthesized. When a creature drinks the potion, that creature gains the effects of the spell for the duration, considering the spell’s range to be “Self.” These creations become impotent after 24 hours.",
            },
            {
              "TalentName": "Create Potion",
              "prerequisites": ["Tinkerer", "Alchemist", "Tinkerer Entry"],
              "FlavorText": "",
              "abilities": [
                {
                  "abilityname": "Alchemy Flask",
                  "abilitydescription": "",
                },
                {
                  "TalentName": "",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy"],
                  "FlavorText": "Add Healing Vials to your possible creations. When creating Healing Vials in this way, you do not need to spend the material components, but they expire after 24 hours.",
                  "abilities": []
                },

                {
                  "TalentName": "Create Bomb",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy"],
                  "FlavorText": "Add Alchemy Bombs to your possible creations.",
                  "abilities": [
                    {
                      "abilityname": "Alchemy Bomb",
                      "abilitydescription": ". Spend 2 AP to throw an alchemy bomb,which has a thrown range of 20 ft. Make a DEX vs REF attack roll, dealing, 2d6 fire damage to all creatures within a 5 ft radius of the bomb’s point of contact, and ½ damage on a miss.",
                    }
                  ],
                },
                {
                  "TalentName": "Quaff",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy"],
                  "FlavorText": "Once on each of your turns, you may drink a potion without spending AP.",
                  "abilities": [],
                },
                {
                  "TalentName": "Fire In The Hole",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy", " Create Bomb"],
                  "FlavorText": "When you throw a bomb, you can now specify a number of targets equal to or less than your INT. Those creatures take no damage from your bombs.",
                  "abilities": [],
                },
                {
                  "TalentName": "Alchemy II",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemist 4"],
                  "FlavorText": "You can now make four Alchemy Creations when you Take a Rest.",
                  "abilities": [],
                },
                {
                  "TalentName": "Potion Upgrade",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy II"],
                  "FlavorText": "Your Healing Vials become Healing Potions.",
                  "abilities": [],
                },
                {
                  "TalentName": "Alchemy Flask Upgrade",
                  "prerequisites": ["Tinkerer", "Alchemist", "TAlchemy II"],
                  "FlavorText": "Your flask is designed for quick combat consumption. Using an Alchemist Flask no longer triggers the Exploit maneuver or other reactive actions.",
                  "abilities": []
                },

                {
                  "TalentName": "Bomb Upgrade",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy II", "Create Bomb"],
                  "FlavorText": "Your bombs deal additional damage equal to your INT.",
                  "abilities": []
                },

                {
                  "TalentName": "Injector",
                  "prerequisites": ["Tinkerer", "Alchemist", "y II,"],
                  "FlavorText": "You can administer Potions or Flasks for 1 AP.",
                  "abilities": []
                },

                {
                  "TalentName": "Elemental Bombs",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy II", "Create Bomb"],
                  "FlavorText": "You can create bombs that deal cold or corrosive damage instead of fire, choosing the type of damage when you create the bomb.",
                  "abilities": []
                },

                {
                  "TalentName": "Up My Sleeve",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy II", "Create Bomb"],
                  "FlavorText": "If none of your creations for the day are bombs, you gain one Alchemy Bomb.",
                  "abilities": []
                },

                {
                  "TalentName": "Vitality Solution",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy II,"],
                  "FlavorText": "You can create Vitality Solutions, which grant 3d4+INT Shield HP upon consumption.",
                  "abilities": [],
                },
                {
                  "TalentName": "Alchemy II",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemist 9"],
                  "FlavorText": "You can now create six alchemy creations when you Take a Rest.",
                  "abilities": [],
                }, {
                  "TalentName": "Explostion Upgrade",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy III", "Create Bomb"],
                  "FlavorText": "Your bombs now target creatures in a 10 ft radius from the bomb’s point of contact.",
                  "abilities": []
                },
                {
                  "TalentName": "Flask Efficiency",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy III"],
                  "FlavorText": "When one of your flasks is used, the creature that uses it rolls a 1d6. On a 6, the flask is not consumed. Once this feature is used successfully, you lose this ability until after you Take a Rest.",
                  "abilities": []
                },
                {
                  "TalentName": "Tolerance",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy III"],
                  "FlavorText": "You can administer Potions or Flasks for 1 AP.",
                  "abilities": []
                },
                {
                  "TalentName": "Injector Upgrade",
                  "prerequisites": ["Tinkerer", "Alchemist", "Alchemy III"],
                  "FlavorText": "You can now administer Potions or Flasks at a range of 20 ft by spending 3 AP.",
                  "abilities": []
                },
                {
                  "TalentName": "Master Alchemist",
                  "prerequisites": ["Tinkerer", "Alchemist", "Capstone", "Alchemist 14"],
                  "FlavorText": "Brewers, poisoners, and potion-makers all respect you as a master of the craft. Many would gladly pay you handsomely to teach them the secrets of your skills. You can make a number of Alchemy Creations equal to  your INT, and your creations remain potent for 48 hours. You no longer lose your Flask Efficiency ability after it issuccessful.",
                  "abilities": []
                },
                {
                  "abilityname": "Level 30",
                  "abilitydescription": "Your Flask Efficiency ability is successful on a roll of 4-6.",
                },]
            },
            {


              "TalentName": "Magitechnician",
              description: "Through unstable experiments you have accessed the arcane source of magic and can fuel spells with your inventions.",
              "Talents": [
                {
                  "TalentName": "",
                  "prerequisites": [],
                  "FlavorText": "",
                  "abilities": [
                    {
                      "abilityname": "",
                      "abilitydescription": "",
                    },
                    {
                      "abilityname": "",
                      "abilitydescription": "",
                    },

                  ]
                }
        },


            {
              "TrackName": "Augmentor",
              description: "You specialize in creating powerful armor that implements weapons, gadgets, and enhanced defenses, turning you into a tremendous front- line fighter.",
              "Talents": [
                {
                  "TalentName": "Augmentor",
                  "prerequisites": ["Tinkerer", "Augmentor", "Tinkerer Entry", "Breakthrough",],
                  "FlavorText": "You gain the Armor Augmentation ability. This replaces your Masterwork ability.",
                  "abilities": [
                    {
                      "abilityname": "Armor Augmentation",
                      "abilitydescription": "Choose a set of armor that will become your Augmented Armor. It encases your entire body and grants you +1 to all defenses in addition to its base stats. You are treated as one Size category larger than you would normally be for the purposes of lifting, carrying, dragging, and grappling. You can change your Augmented Armor after Taking a Rest and spending 2 additional hours disassembling your old Augmented Armor.",
                    },
                  ],
                },
                {
                  "TalentName": "Install Weapon",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You may install a weapon into your armor, losing the ability to be disarmed of that weapon.",
                  "abilities": [],
                },
                {
                  "TalentName": "Install Shield",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You may install a shield onto one of your arms. You can spend 1 AP to activate the shield and 1 AP to lower the shield. When it is lowered, you can wield a weapon with that hand. When it is activated, you can manipulate and carry objects, but cannot make attacks with that arm. ",
                  "abilities": []
                },

                {
                  "TalentName": "Quick compartment",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You gain a compartment on one of your Augmented Armor’s forearms or thighs that fits 1 ft 3 of materials. You can spend 1 AP to stow items in it. Someone breaking into the compartment must make a DC 20 AWR check to find the compartment and a DC 20 STR/Applied Force or INT/ Lockpicking check to open it.",
                  "abilities": []
                },
                {
                  "TalentName": "Launcher",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You double the range of your thrown items.",
                  "abilities": []
                },

                {
                  "TalentName": "Grappler",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "If you have Line of Effect, you can spend 3 AP to fire a free hand at a creature within 15 ft of you, attacking their REFwith your STR or DEX. If it hits and the target is your Size or lower, you can pull the target to you as part of the same attack. If it is larger, you can pull yourself to it as part of the same attack.",
                  "abilities": []
                },

                {
                  "TalentName": "Arcane Booster",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You can spend 1 AP to gain +10 ft to your speed until the end of your turn.",
                  "abilities": []
                },
                {
                  "TalentName": "Elemental Absorption",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You can spend 1 Reactive AP to reduce elemental damage by 1d6. You can unleash this on your next attack, dealing additional damage equal to the amount of damage this feature absorbed.",
                  "abilities": []
                },

                {
                  "TalentName": "Adaptive Armor",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "If you suffer a crit, you take damage as usual, then you gain Resist X against the type of damage you took until the start of your next turn, where X = your INT",
                  "abilities": []
                },
                {
                  "TalentName": "Install Weapon",
                  "prerequisites": ["Tinkerer", "Augmentor"],
                  "FlavorText": "You gain the Engage ability",
                  "abilities": [
                    {
                      "abilityname": "Engage",
                      "abilitydescription": "By spending 2 AP, you can impose the Engaged condition on a creature within 5 ft of you. This lasts until the start of your next turn.",
                    },
                  ],
                },
                {
                  "TalentName": "Augmentor II",
                  "prerequisites": ["Tinkerer", "Augmentor 5"],
                  "FlavorText": "Your Augmented Armor gains +1 to all defenses and your choice of Resist 2 against blunt, cold, fire, lightning, or sharp.",
                  "abilities": []
                },

                {
                  "TalentName": "Audio Dampeners",
                  "prerequisites": ["Tinkerer", "Augmentor II"],
                  "FlavorText": "You may spend 2 AP to become immune to sonic damage and effects that require you to hear until the beginning of your next turn.",
                  "abilities": []
                },

                {
                  "TalentName": "Grappler II",
                  "prerequisites": ["Tinkerer", "Augmentor II", "Grappler"],
                  "FlavorText": "Your Grappler attack gains +10 ft range, and if you hit, the target is immediately Grappled.",
                  "abilities": []
                },
                {
                  "TalentName": "Sentry Armor II",
                  "prerequisites": ["Tinkerer", "Augmentor II", "Sentry Armor"],
                  "FlavorText": "You can now enhance your Engage ability, engaging one additional target within 5 ft of you for each additional 1 AP you spend on the ability.",
                  "abilities": []
                },

                {
                  "TalentName": "Enhanced Quick Compartment",
                  "prerequisites": ["Tinkerer", "Augmentor II", "Quick Compartment"],
                  "FlavorText": "Your quick compartment may now store liquid, and can be climate controlled between 50 and 120 ° F (Named for Doctor Franklin Fahrenheit, who discovered the Coldstone and Fireflecks used in this invention).",
                  "abilities": []
                },

                {
                  "TalentName": "Install Mini Turret",
                  "prerequisites": ["Tinkerer", "Augmentor II",],
                  "FlavorText": "By spending 1 hour working on your armor, you can install an automated crossbow turret on your shoulder. This crossbow has a 60 ft range and deals 1d4 sharp damage on a hit. When you specify, it fires at a target you can see with Line of Effect at the end of each of your turns while you have ammunition.",
                  "abilities": []
                },

                {
                  "TalentName": "Install Weapon II",
                  "prerequisites": ["Tinkerer", "Augmentor II", "Install Weapon"],
                  "FlavorText": "You can install a second weapon into your armor. Gain the ability to freely switch between weapons.",
                  "abilities": []
                },

                {
                  "TalentName": "Power Slam",
                  "prerequisites": ["Tinkerer", "Augmentor II",],
                  "FlavorText": "You gain the Power Slam ability.",
                  "abilities": [
                    {
                      "abilityname": "Power Slam",
                      "abilitydescription": "You may spend 4 AP to slam a weapon into the ground, attacking all creatures within 5 ft of you. Make a weapon attack vs the FORT of each creature in range. On a hit, creatures take damage from the weapon as usual and are also pushed 5 ft directly away from you.",
                    }
                  ],
                },
                {
                  "TalentName": "Hoverjet",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor II",],
                  "FlavorText": "Spend 1 AP or 1 Reactive AP to gain the ability to Hover for 1 minute. You can choose to slowly descend during the duration. (3/Rest)",
                  "abilities": []
                },

                {
                  "TalentName": "Augmentor III",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor II", "Augmentor 10"],
                  "FlavorText": "Your Augmented Armor gains +1 to all defenses and your choice of Resist 2 against blunt, cold, fire, lightning, or sharp.",
                  "abilities": []
                },
                {
                  "TalentName": "Energy Transfer",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor III",],
                  "FlavorText": "You may spend 3 AP to transfer all conditions from a creature you are grappling to yourself, except for Grappled and Restrained.",
                  "abilities": []
                },

                {
                  "TalentName": "Arcane Booster II",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor III", "Arcane Booster"],
                  "FlavorText": "You gain a Fly Speed equal to your speed for 1 minute. (3/ Rest)",
                  "abilities": []
                },

                {

                  "TalentName": "Heroic Landing",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor III"],
                  "FlavorText": "You no longer take falling damage when falling less than 30 ft. If you fall at least 20 ft, you can attack all creatures within a 10 ft radius of where you land with your STR or DEX vs their REF. If you hit, they take 1d8 blunt damage and are knocked Prone.",
                  "abilities": []
                },

                {
                  "TalentName": "Cradle",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor III"],
                  "FlavorText": "You may cover an ally in your Augmented Armor once per round. Choose an ally within 5 ft of you who is being attacked by an attacker you can see. You can take the damage in their place by spending 1 Reactive AP. Regain the ability to do this at the beginning of your next turn. The triggering attack automatically hits you.",
                  "abilities": []
                },
                {
                  "TalentName": "Cradle II",
                  "prerequisites": ["Tinkerer", "Augmentor", "Augmentor III", "Cradle, Grappler"],
                  "FlavorText": "You may now use your Grappler to pull an ally to you. When an ally within reach of your Grappler ability would take damage, you may spend 1 Reactive AP to pull them to an unoccupied space within 5 ft of you and take the damage for them.",
                  "abilities": []
                },

                {
                  "TalentName": "Augmentor Extraordinaire",
                  "prerequisites": ["Tinkerer", "Augmentor", " Capstone", "Augmentor 14"],
                  "FlavorText": "Your augmented armor has become an extension of your person. You have perfected it and know every nook and cranny, every quirk and crack. Gain +1 to all of your defenses. Crits no longer automatically hit you, and if they do hit, they only deal normal damage.",
                  "abilities": [
                    {
                      "abilityname": "Level 30",
                      "abilitydescription": "Gain the Intuitive Defenses ability.",
                    },
                    {
                      "abilityname": "ntuitive Defenses",
                      "abilitydescription": " When a creature attacks you, you may spend 2 Reactive AP to lower one of your defenses by X, increasing another one of your defenses by X. Your defenses remain altered in this way until the start of your next turn. (3/Recoup)",
                    },
                  ],
                },
                {
                  "TalentName": "Inventor",
                  description: "",
                  "Talents": [
                    {
                      "TalentName": "Inventor",
                      "prerequisites": ["Tinkere", "Inventor", "Tinkerer Entry"],
                      "FlavorText": "You can make a variety of unique nonmagical items assuming you have the time and materials. You learn how to make five items from the Tinkering Item List, and can carry up to five items of this nature at a time. Special Arrows & Bolts do not count toward this total. Only you may use items that you create from the Tinkering Item list. For every 2 hours you spend tinkering, make an INT check using a Crafting skill with your Tinker’s Tools, and note the results. Tinkering checks are cumulative. For example, if you roll a 11 on day 1, and a 19 on day two, that is considered 30. If you have access to a workshop, the Tinkering Check total required is halved. Your first 2 hours of tinkering a day can be a part of Taking a Rest. See the Tinkering Item List for a list of items, and note that your MC may allow additional items!",
                      "abilities": []
                    },

                    {
                      "TalentName": "Salvage",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "You can break down nonmagical items for materials and use them for other items or their currency cost whenever you spend time tinkering. Most items can be broken down as a part of the time you spend tinkering on other inventions. A particularly complex or large item may have a tinkering cost, determined by your MC. If you are breaking down items for currency, you can find someone to purchase the materials for 80% of the item’s value, regardless of the item’s state of repair, anywhere there is trade of raw materials. Salvaged items are unrecognizable, which means you can sell them even if the item itself may have baggage that would make it undesirable, such as being believed to be haunted or stolen. If you salvage items to use for Tinkering parts, take the sc value of the item you are salvaging, and reduce your Tinkering check requirement for whatever you’re crafting by that amount. ",
                      "abilities": []
                    },

                    {
                      "TalentName": "Crafter",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "Every time you take a level in the Inventor track, gain +2 in a Crafting skill of your choice. This works retroactively, granting you +2 for all Inventor track talents you have already taken.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Repairs",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "Exhaustible items with more than 1 use take half the Tinkering to create after you’ve created them once.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Quick Craft",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "Whenever you craft a single-use item, you can create a second item of the same type by adding +10 to the Tinkering requirement of the first item.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Additional Blueprints",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "You learn two new blueprints from the Tinkering Item List.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Space Efficiency",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "You can carry five additional tinkering items.",
                      "abilities": [],
                    },
                    {
                      "TalentName": "Safety Precaution",
                      "prerequisites": ["Tinkere", "Inventor",],
                      "FlavorText": "You can now add +20 to the Tinkering required in order to craft Tinkering items that others can use.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Inventor",
                      "prerequisites": ["Tinkere", "Inventor", "Inventor 5", "Augmentor"],
                      "FlavorText": "Choose a magical item, weapon, or piece of armor that you possess and that requires 25 or fewer Essence Points and Salvage it. You learn how to add that item’s abilities, or “Enchantments” for the purpose of the abilities in the Tinkering track, to your Masterwork. You can add or change enchantments to your Masterwork by spending 2 hours Tinkering with it. A single magical item, weapon, or armor piece counts as one Enchantment, even if it has multiple abilities. You can know a number of Enchantments equal to your INT, and can have 2 Enchantments active on your Masterwork at one time. You must also observe the typical rules for Essence Points (Chapter 6, “Magic Items”). However, your Masterwork uses only half the Essence Points you have imbued onto it through Masterwork Enchantments. For example, if you have three Enchantments with 80 total Essence Points, your Masterwork uses 40 of your Essence Points. Weapons can be improved with Item or Weapon Enchantments. Armor can be improved with Item or Armor enchantments or improvements. Items can be improved only with Item enchantments or improvements. If you change your Masterwork, it loses this improvement until you add it to your Masterwork again.",
                      "abilities": [],
                    },
                    {
                      "TalentName": "Inventor II",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough"],
                      "FlavorText": "You can now make a Tinker’s Tools check every hour, instead of every 2 hours. ",
                      "abilities": []
                    },

                    {
                      "TalentName": "Munitions Focus",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough"],
                      "FlavorText": "Whenever you use your Tinkering to create ammunition, if you have fewer than 20 special arrows or bolts, you can now create your first 20 arrows or bolts in the time it would take you to make one. Special Arrows or Bolts beyond 20 take the normal Tinkering. Additionally, you can make up to 40 mundane arrows or bolts without any chance of failure and minimal components (including broken bolts or arrows) by spending at least 1 hour tinkering.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Armor Focus",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough"],
                      "FlavorText": "If your Masterwork is Armor, it gains an additional +1 to all physical defenses.",
                      "abilities": []
                    },

                    {
                      "TalentName": "Armor Alchemist",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough"],
                      "FlavorText": "Your armor sprays cost half the Tinkering (minimum 10).",
                      "abilities": []
                    },
                    {
                      "TalentName": "Weapon Focus",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough"],
                      "FlavorText": "If your Masterwork is a Weapon, it gains an additional +1 to hit and +1 to damage",
                      "abilities": [],
                    },
                    {
                      "TalentName": "Soul Of The Masterwork",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough"],
                      "FlavorText": "The Essence point cap for Masterwork Enchantment increases to 33.",
                      "abilities": [],
                    },
                    {
                      "TalentName": "Soul Of The Masterwork",
                      "prerequisites": ["Tinkere", "Inventor", "Soul of the Masterwork"],
                      "FlavorText": "The Essence point cap for Masterwork Enchantment increases to 50.",
                      "abilities": [],
                    },
                    {
                      "TalentName": "Breakthrough II",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough, Inventor 10"],
                      "FlavorText": "You can now learn three Enchantments from salvaging magical items. If you would learn beyond your limit, you can choose which one to forget, but your Masterwork would lose that enchantment. Your Masterwork can now have a number of enchantments active at one time equal to 1/2 your INT. Changing enchantments on your Masterwork only takes 1 hour of Tinkering.These enchantments cannot stack if they are exactly the same.For example if you salvage two items that give + 1 to hit, you can only enchant your Masterwork with +1 to hit once.But if you then salvage an item that gives + 1 to hit and + 1d6 fire damage, you can enchant your Masterwork with +2 to hit and 1d6 extra fire damage.",
                      "abilities": [],
                    },
                    {
                      "TalentName": "Enchantment Blueprints",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough II"],
                      "FlavorText": "You can learn an additional Masterwork Enchantment",
                      "abilities": []
                    },
                    {
                      "TalentName": "Quick Confic",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough II"],
                      "FlavorText": "You can change your Masterwork Enchantment configuration as a part of a Recoup.",
                      "abilities": []
                    },
                    {
                      "TalentName": "Armor Focus II",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough II"],
                      "FlavorText": "If your Masterwork is armor, it gains an additional +1 to all physical and mental defenses.",
                      "abilities": []
                    },
                    {
                      "TalentName": "Consumable Mastery",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough II"],
                      "FlavorText": "Choose an exhaustible Tinkering item with more than one use. You now recharge that item on Taking a Rest without a required Tinkering check.",
                      "abilities": []
                    },
                    {
                      "TalentName": "Weapon Focus",
                      "prerequisites": ["Tinkere", "Inventor", "Breakthrough II"],
                      "FlavorText": "If your Masterwork is a weapon, mods installed on your Masterwork no longer count towards your limit of carried Tinkering items.",
                      "abilities": []
                    },
                    {
                      "TalentName": "Master Inventor",
                      "prerequisites": ["Tinkere", "Inventor", " Capstone", "Inventor 14"],
                      "FlavorText": "You are a renowned inventor and tinkerer whose creations are the subject of song and gossip. Many young minds seek to enter apprenticeship with you and the leading minds in engineering and education hold you in utmost regard. Your Masterwork is now a creation of some renown. It can now hold three Masterwork Enchantments. If it is a weapon, it gains a bonus to damage rolls equal to ½ your INT.",
                      "abilities": [

                        {
                          "abilityname": "Level 30",
                          "abilitydescription": "The final cap on your INT increases from 12 to 14.",

                        },
                        "Tracks": [
                          {
                            "TrackName": "Magitechnician",
                            description: "",
                            "Talents": [
                              {
                                "TalentName": "Arcane Artificer",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Tinkerer Entry"],
                                "FlavorText": "You gain the Student of the Arcane talent if you do not already have it. Each time you level up and spend your talent point on a talent in the Magitechnician stack, you gain +5 SP and +1 Arcane Power. Magitechnicians cast spells as if they were devices, and the caster can choose how they describe the spells being cast. Perhaps a Fireball is launched from a firearm-like device, Fly might be a jetpack, Raise Skeleton could be a mechanical backpack puppeteering bones, and Living Letter might be a tiny drone. This has no mechanical effect other than when you trigger Backlash as a Magitechnician. In this case, you do not take damage or end your turn, but you lose access to the spell that triggered Backlash until you Take a Rest, as the contraption needs to be repaired. INT is your magic attribute.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Golemancer",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Arcane Artificer"],
                                "FlavorText": "You gain the Create Lesser Golem spell if you do not already know it. If you do not have a Lesser Golem active, casting this spell is free for you and the created golem is permanent.It can be made of Metal or Stone as its Primary Material, and it gains +2 STR. It is created by the Arcane Source. It gains the Mend and Minor Conjuration cantrips.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Spell Storing",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Golemancer"],
                                "FlavorText": "You create an object - such as a bracelet, locket, or ring, that stores spells for you. When creating a mote via Delay Spell, you can put the spell into the Spell Storing object and its duration becomes 24 hours. Your motes cannot be released prematurely without the condition being triggered, and after the duration they dissipate harmlessly.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Empowered Mend",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Spell Storing"],
                                "FlavorText": "You are particularly skilled with the Mend cantrip. You now need only 80% of the pieces or components present for Mend to work, and you can increase the casting time to gain the equivalent of more Arcane Power. When casting Mend, act as though you have 1 additional Arcane Power for every additional 30 minutes you spend casting.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Magitechnician",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Empowered Mind"],
                                "FlavorText": "When you finish Taking a Rest, you can prepare three spells as if they were devices. Roll 1d20 per spell to determine your spell’s bonus, and then spend the required SP to cast the spell to prepare the Spell Devices.The first time you cast a spell prepared in this way, it costs 0 SP, as you’ve already spent it preparing the device. After the first time, when you cast a spell using this feature, roll 1d20 and gain the same effects from the table (potentially reducing the spell’s SPC). You always spend AP and follow conjuring rules as normal. These prepared Spell Devices do not trigger backlash the first time you would trigger backlash. If they trigger backlash a second time, you lose access to the spell.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Cantrip Cannon",
                                "prerequisites": ["Tinkerer", "Magitechnician",],
                                "FlavorText": "You create a permanent spell device that fires cantrips. Choose Beam of Fire, Frostbite, or Grave Whisper. This device cannot trigger backlash. You may now use your total Character Level for this cantrip’s power instead of your Arcane Power.",
                                "abilities": [],
                              },
                              {
                                "TalentName": "Golemancer II",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Cantrip Cannon"],
                                "FlavorText": "Your Golem gains a compartment that functions as a Dimensional Case (see the Tinkering Item table). This and items inside are shielded from Divining magic. It takes a creature a DC 20 AWR check to find the compartment and a DC 20 STR/Applied Force or INT/Lockpicking check to enter against the Golem’s will.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Spell Storing II",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Golemancer II"],
                                "FlavorText": "You can create a second Spell Storing object.",
                                "abilities": [],
                              },
                              {
                                "TalentName": "Magical Tinkering",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Spell Storing II"],
                                "FlavorText": "When you use your Magitechnician talent after Taking a Rest, the first time you roll a 1 or 2 on your d20 rolls, you may reroll that d20 and use the second result.",
                                "abilities": []
                              },
                              {
                                "TalentName": "Safer Devices",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Magical Tinkering"],
                                "FlavorText": "Your Spell Devices created by the Magitechnician talent can no longer trigger Backlash.",
                                "abilities": [],
                              },
                              {
                                "TalentName": "Magitechnician II",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Safer Devices"],
                                "FlavorText": "Your Spell Devices created by the Magitechnician talent are no longer considered magical.",
                                "abilities": [],
                              },
                              {
                                "TalentName": "Cantrip Cannon II",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Magitechnician II"],
                                "FlavorText": "When you deal damage with your Cantrip Cannon, add your INT to the damage.",
                                "abilities": []
                              }, {
                                "TalentName": "Flash Of Genius",
                                "prerequisites": ["Tinkerer", "Magitechnician", "Cantrip Cannon II"],
                                "FlavorText": "When one of your mental defenses is attacked, you can spend 5 SP to add ½ your INT to all of your mental defenses until the beginning of your next turn.",
                                "abilities": []
                              }, {
                                "TalentName": "Master Magitechnicaian",
                                "prerequisites": ["Tinkerer", "Magitechnician", " Capstone", "Flash of Genius"],
                                "FlavorText": "You master the art of arcane tinkering, bending the rules of where magic ends and machinery begins. You gain a special permanent Spell Device with a spell that costs 10 SP or fewer. That spell permanently has SPC 0 for you.",
                                "abilities": [
                                  {
                                    "abilityname": "Level 30",
                                    "abilitydescription": "Gain another special permanent Spell Device with a spell that costs 16 SP or fewer. That spell permanently has SPC 0 for you.",
                                  },]
                              }, {
                              };