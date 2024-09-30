const divine = {
    name: "divine Source",
    DescriptiveParagraphs: [
        "Because accessing fundamental magic directly is fraught with peril, many casters gain access to magic through a proxy - that is, using a deity or deific planar entity to gain access to magic in a comparatively safe process.Some do this intentionally, praying and meditating until they establish contact with a god; others do it accidentally simply by following the tenets of their religious practice.Whatever their individual journeys, every person who ends up gaining magical powers by way of being blessed by a planar, deific entity has accessed the Divine Source.",
        "Dealing directly with deities exposes you to new problems, especially if the deities are temperamental or demand favors in return for power.On the whole, though, casters that use the Divine Source enjoy the knowledge that they can safely use magic without worrying about overexposing themselves to the sheer power of the Fundamental Wellspring itself.They also have access to more capacity to heal physical injuries than any other source of magic, and based on the specific deity that they worship,they might gain access to very unique spells.",
        ""],
    Focus: "",
    IntentParagraphs: [
        "",
        ""
    ],
    BacklashParagraphs:
        [
            "",
            "",
            ""
        ],
    CriticalCasts: "",
    MagicTypes: {
        additional: "In addition to spells, you might learn prayers or rituals from the Divine Source.",
        cantrip: { hasCantrip: true, cantripText: "" }
    },
    ArcaneTags: {
        descriptionTest: "",
        tagsList: [
            { tagName: "Divine Power", TagDescription: "Divine Power is the total number of talent points you have spent on divine talents as a result of leveling up, as well as the number of talent points you have spent in certain classes or stacks. These classes or stacks will specify that they contribute to Divine Power." },
        ]
    },
    TalentStacks: [
        {
            displayName: "Warden of the Primal",
            StackName: "Warden of the Primal",
            prerequisites: ["Primal, Magic Entry"],
            isRepeatable: false,
            incompatableWith: [],
            flavortext: "Having cultivated a connection to the energy of the Everwilds, you can cast Primal magic. Spell Points.If this is your first Magic Entry talent, gain 10 Spell Points.Otherwise, gain + 5 SP.Each time you level up and take a talent with the Primal tag, gain + 5 SP.",
            BenefitList: [
                {
                    benefitName: "Spell Points", BenefitDescription: "If this is your first Magic Entry talent, gain 10 Spell Points.Otherwise, gain + 5 SP.Each time you level up and take a talent with the Primal tag, gain + 5 SP."
                },
                {
                    benefitName: "Primal Power", BenefitDescription: " Gain 1 Primal Power. Each time you level up and take a talent with the primal tag, you gain + 1 Primal Power."
                },
                {
                    benefitName: "Warden", BenefitDescription: "Gain access to the primal talent stack. Gain two talents from the primal talent stack. (You do not gain additional Spell Points from these selections, nor do they count towards your Primal Power)."
                },
                {
                    benefitName: "Primeval Strength", BenefitDescription: "Your magic attribute is AWR unless another talent says otherwise."
                },
                {
                    benefitName: "", BenefitDescription: ""
                },

            ]

        },
        {
            displayName: "Primal Chants",
            StackName: "Primal Talen,Repeatable",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: ["Learn four primal chants"],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Primal Invocations",
            StackName: "",
            prerequisites: ["Primal Talent, Repeatable"],
            isRepeatable: true,
            incompatableWith: ["Learn two primal invocations"],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Primal Magic",
            StackName: "Primal Talent, Repeatable",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: ["Learn three primal chants and two primal spells."],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Primal Spells",
            StackName: "Primal Talent, Repeatable",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: ["Learn three primal spells."],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Primal Survivalist",
            StackName: "Primal Talent, Repeatabl",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: ["Gain +3 Skill Points, which you can spend on skills with the Survival tag. Learn two primal spells."],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Primal Recovery",
            StackName: "Primal Talent",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: ["When Recouping, if you are in an area of unmitigated wilderness, regain a number of SP equal to your Primal Tier. (1 / Rest) "],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Primal Recovery II",
            StackName: "Primal Talent",
            prerequisites: ["Primal Recovery, Primal Power 5"],
            isRepeatable: false,
            incompatableWith: ["Primal Recovery becomes: Regain a number of SP equal to your Primal Power. "],
            flavortext: "",
            BenefitList: [
                {
                    benefitName: "", BenefitDescription: ""
                },
            ],
        },
        {
            displayName: "Cultivated Wildes",
            StackName: "Primal Talent",
            prerequisites: ["Primal Recovery II"],
            isRepeatable: true,
            incompatableWith: ["Everwilds Affinity"],
            flavortext: "You may use your Primal Recovery ability even if you are not in unmitigated wilderness. So long as you are outdoors in an area that is predominantly nature, such as a garden or park, you can still use this ability.",
            BenefitList: [
            ],
        },
        {
            displayName: "Everwilds Affinity",
            StackName: "Primal Talent",
            prerequisites: ["Primal Recovery II"],
            isRepeatable: true,
            incompatableWith: ["Cultivated Wilds"],
            flavortext: "When using your Primal Recovery ability, regain a number of SP equal to double your Primal Power.",
            BenefitList: [
            ],
        },
        {
            displayName: "Primal Recovery III",
            StackName: "Primal Recovery III",
            prerequisites: ["Primal Recovery II, Primal Power 13"],
            isRepeatable: true,
            incompatableWith: [],
            flavortext: "Primal Recovery becomes 2/Rest.",
            BenefitList: [],
        },

    ],
    explinationText: {

        headding: "",
        description: "",
    },
    Cantrips: [
        {
            cantripName: "Amplify",
            prerequisites: [""],
            APC: 1,
            Range: Touch,
            Requires: "Gesture,Verbal",
            Duration: "10 minutes",
            cantripDescription: "One creature that you touch becomes magically amplified. Their voice is up to three times louder than it normally is. Your prayer becomes stronger when you reach higher Divine Power: ",
            itallics: ["Divine 7: Voice amplified up to 4x Divine",
                "24: Voice amplified up to 5x",],
            scaling: [
                { level: "", inproveRange: 0, improveDamage: "", addEffect: "" },
            ]
        }
    ],
    Chants: [

        {
            ChantName: "Acid Stream",
            prerequisites: ["Primal Chant, Evoking, Extrinsic, Nature"],
            APC: 2,
            Range: "20 ft",
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            chantDescription: "A sizzling line of acid spurts from your outstretched hand. Make a magic attack against the REF of a creature in range.If you hit, deal 1d6 corrosive damage.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "You may attack a secondary target that is in a line between you and the original target(make one attack roll and damage roll, comparing against each creature’s REF)." },
                { tier: "3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "Tier 4: Tier 2 ability becomes: You may attack all targets that are in a line between you and the original target(make one attack roll and damage roll, comparing against each creature’s REF).", },
                { tier: "5", inproveRange: 0, improveDamage: "1d6", addEffect: "" },
                { tier: "6", inproveRange: 20, improveDamage: "", addEffect: "" },
            ]

        },
        {
            ChantName: "Bloom",
            prerequisites: ["Primal Chant, Alchemy, Extrinsic, Nature"],
            APC: 3,
            Range: 30 ft,
            Requires: "Gesture, Verbal",
            Duration: "1 minute",
            prayerDescription: "You coax flora into blossoming in accordance with your will. Choose one of the following effects: • A Medium or smaller plant blooms with flowers of a kind appropriate to its physical makeup, of a color of your choice. • A plant that is currently bearing fruit, nuts, or other edible contents smells sweeter, and its goods look more appealing. • You can immediately change the flavor of food or drink. • Create a harmless pleasant scent or foul odor. • A mechanically negligible breeze stirs for a brief moment. • Pollinator insects flutter around you if the environment sustains them. The effect lasts for the duration or until you cast this chant again and choose a new effect.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "Up two effects may occur simultaneously. When you create a third effect, the oldest effect is terminated." },
                { tier: "3", inproveRange: 30, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "Up to three effects may occur simultaneously. When you create a fourth effect, the oldest effect is terminated.", },
                { tier: "5", inproveRange: 60, improveDamage: "1d6", addEffect: "" },
                { tier: "6", inproveRange: 120, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "Bountiful Joy",
            prerequisites: ["Primal Chant, Enchanting, Intrinsic, Emotion"],
            APC: 4,
            Range: 30,
            Requires: "Gesture, Verbal",
            Duration: "1 round",
            prayerDescription: "By tapping into the memory of better times, you bolster an ally’s resolve. One ally within range that can see you becomes Charmed by you until the start of your next turn. For the duration, that creature cannot be Charmed, Demoralized, Enthralled, Frightened, or Shaken. If that creature is currently suffering any of those conditions, this chant fails.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 30, improveDamage: "", addEffect: "The range of this chant increases by +30 ft." },
                { tier: "3", inproveRange: 0, improveDamage: "", addEffect: "This chant targets one additional creature." },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "This chant costs 1 fewer AP (min 1)." },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: "This chant targets one additional creature." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "This chant costs 1 fewer AP (min 1)." },
            ]
        }, {
            ChantName: "Briar Whip",
            prerequisites: ["Primal Chant, Evoking, Extrinsic, Nature"],
            APC: 3,
            Range: 20,
            Requires: "Gesture, Verbal,Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "A sinuous, thorny vine lashes from you to ensnare an enemy. Make a magic attack vs the AR of a creature within range. If you hit, you deal 1d8 sharp damage.If the creature is no more than one size larger than you, pull it 10 ft closer to you.If you crit, then you can pull it to an unoccupied space adjacent to you and may choose to immediately Grapple it without making a contested Grapple check.",
            itallics: "When you cast this chant and are at a higher power tier, the Chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange:1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "Catclaw",
            prerequisites: ["Primal Chant, Altering, Intrinsic, Nature"],
            APC: 3,
            Range: self,
            Requires: "Gesture, Verbal",
            Duration: "1 minute",
            prayerDescription: "Sharpened claws extend from your fingertips. For the duration, you have a climb speed equal to your walking speed.Additionally for the duration, you can make unarmed attacks with your STR or DEX and your unarmed attacks deal 1d4 + STR or DEX sharp damage.Unarmed attacks made using this spell cost 2 AP.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "3", inproveRange: 0, improveDamage: "", addEffect: "The range becomes Touch." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "+When you cast this chant, you can target two creatures that you touch(or one creature you touch, and yourself)." },
            ]
        }, {
            ChantName: "Charm Creature",
            prerequisites: ["Primal Chant, Enchanting, Intrinsic, Emotion"],
            APC: 4,
            Range: 60,
            Requires: "Gesture, Verbal, Visual",
            Duration: " 1 round",
            prayerDescription: "Your bubbly joy overwhelms a would-be foe. Make a magic attack against a creature’s LOG.On a hit, the creature becomes Charmed by you until the start of your next turn.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 30, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 30, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: " This chant costs 1 fewer AP (min 1)." },
                { tier: "5", inproveRange: 30, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "This chant costs 1 fewer AP (min 1)." },
            ]
        },
        {
            ChantName: "Commune With Beast",
            prerequisites: ["Primal Chant, Enchanting, Intrinsic, Nature"],
            APC: 5,
            Range: 10,
            Requires: "Visual",
            Duration: "10 minutes",
            prayerDescription: "",
            itallics: "Choose one beast within range that sees you as a friendly creature. For the duration, you are able to become Blinded and Deafened in order to see through the beast’s senses instead, provided that the beast is still within 500 ft of you. Additionally, the beast can communicate simple emotions and basic information about anything that the beast would see as noteworthy that happened in the past 24 hours.",
            scaling: [
                { tier: "", inproveRange: 0, improveDamage: "", addEffect: "" },
            ]
        }, {
            ChantName: "Ensnaring Root",
            prerequisites: ["Primal Chant, Altering, Extrinsic, Nature"],
            APC: 3,
            Range: 60,
            Requires: "Gesture, Visual,",
            Duration: "Instantaneous",
            prayerDescription: "A root whips up from the ground and snares a foe. Make a magic attack against a creature’s ANT.On a hit, they take 1d6 blunt damage.If you hit a creature that is Large or smaller, it falls prone.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 30, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 30, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "This chant costs 1 fewer AP (min 1)." },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: "If you hit a creature that is Huge or smaller, it falls prone" },
                { tier: "6", inproveRange: 0, improveDamage: "1d6", addEffect:
            ]
        },
        {
            ChantName: "Fleetfoot",
            prerequisites: ["Primal Chant, Altering, Intrinsic, Nature"],
            APC: 1,
            Range: self,
            Requires: "Gesture",
            Duration: "Until the end of your next turn",
            prayerDescription: "Difficult terrain does not hinder your movement.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 5, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 0, improveDamage: "", addEffect: " Hazardous terrain does not hinder your movement, but still damages you." },
                { tier: "4", inproveRange: 5, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 5, improveDamage: "", addEffect: "" },
                { tier: "6", inproveRange: 0, improveDamage: "1d6", addEffect: "Hazardous terrain does not damage you unless it is liquid." },
            ]
        }, {
            ChantName: "Foreboding Menace",
            prerequisites: ["Primal Chant, Enchanting, Intrinsic, Emotion"],
            APC: 3,
            Range: 40,
            Requires: "Gesture, Verbal, Visual, Line of Sight",
            Duration: "1 Round",
            prayerDescription: "You menace a creature, causing it to quiver in fear. Make a magic attack against one creature in range, targeting their WILL.On a hit, the target is Frightened of you until the end of your next turn.You and your allies have TA against this creature while it is Frightened in this way",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "APC becomes 2." },
                { tier: "3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "You may target 1 additional creature." },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: "You may target 1 additional creature." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "You may target 1 additional creature." },
            ]
        },
        {
            ChantName: "Glimmer",
            prerequisites: ["Primal Chant, Illusory, Extrinsic, Nature"],
            APC: 2,
            Range: Self(20 ft radius),
            Requires: "Gesture",
            Duration: "Up to 1 minute",
            prayerDescription: "Flickering lights, as though from fireflies, waft out from you. Dim light glows from you in up to a 20 ft radius.You may end this chant early for 0 AP, and may change the radius of the light without recasting the chant by spending 1 AP.Any form of magical darkness suppresses this light.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger:",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 0, improveDamage: "", addEffect: "The light from this chant works even in magical darkness if the darkness is from an occult chant or a psionic spell." },
                { tier: "4", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: "The light from this chant works even in magical darkness if the darkness is from the occult or psionic source." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "The light from this chant works in any magical darkness." },
            ]
        }, {
            ChantName: "Gust",
            prerequisites: ["Primal Chant, Warding, Extrinsic, Weather"],
            APC: 1 Reactive AP, which you spend when attacked by one of the objects described below,
            Range: Self,
            Requires: "Gesture",
            Duration: "Instantaneous",
            prayerDescription: "A gust of wind buffers you and protects you from attacks. When you are targeted by either a physical projectile(such as an arrow or sling pellet) or by a gaseous attack(such as a cloud of poison), you may use this chant.Gain Resist 3 against that attack’s damage type, possibly causing it to miss. You retain Resist 3 against attacks of that damage type until the start of your next turn.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "Your Resist bonus lasts until the end of your next turn." },
                { tier: "3", inproveRange: 0, improveDamage: "", addEffect: "Your Resist number increases by +1." },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "Your Resist number increases by +1." },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: "Your Resist number increases by +1." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "Your Resist number increases by +1." },
            ]
        },
        {
            ChantName: "Instingtive Attack",
            prerequisites: ["Primal Chant, Divining, Intrinsic, Nature"],
            APC: 1,
            Range: Self,
            Requires: "Gesture",
            Duration: "1 Round",
            prayerDescription: "Your sixth sense allows you to strike more accurately. The next time you make an attack roll against a single creature before the end of your next turn, gain + 2 to the attack roll",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "The range becomes Touch." },
                { tier: "4", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "+The recipient of the chant gains an additional +1 to their attack." },
            ]
        },
        {
            ChantName: "Intuition",
            prerequisites: ["Primal Chant, Divining, Intrinsic, Nature"],
            APC: which you can use on your turn or reactively when a creature within 5 ft of you makes a skill check.,
            Range: Touch,
            Requires: "Gesture, Verbal",
            Duration: "1 round",
            prayerDescription: "One creature that you touch becomes preternaturally intuitive. The creature adds 1d4 to the next skill check that they make during the chant’s duration",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "Duration becomes 1 minute." },
                { tier: "3", inproveRange: 0, improveDamage: "1d6", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "Duration becomes 5 minutes." },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: "Duration becomes 10 minutes." },
                { tier: "6", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
            ]
        },
        {
            ChantName: "Lightning Lash",
            prerequisites: ["Primal Chant, Evoking, Extrinsic, Weather"],
            APC: 2,
            Range: 40,
            Requires: "Gesture, Verbal, Visual Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "Crackling lightning forks out to smash into your foes. Make a magic attack vs the REF of a creature within range. If you hit, deal 1d8 lightning damage.If you crit, the creature becomes Dazed until the end of their next turn",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "If you crit, the creature becomes Stunned instead of Dazed" },
                { tier: "5", inproveRange: 0, improveDamage: "", addEffect: " You may spend 1 additional AP to target a second creature (make a second attack roll but use the same damage roll)." },
                { tier: "6", inproveRange: 30, improveDamage: "1d8", addEffect: "" },
            ]
        },
        {
            ChantName: "Mist",
            prerequisites: ["Primal Chant, Evoking, Extrinsic, Weather"],
            APC: 2,
            Range: 60,
            Requires: " Gesture, Verbal",
            Duration: "1 round",
            prayerDescription: "Obscuring mist wafts up from the ground. Choose a point within range.Mist swirls out from that point in a 10 ft radius.All creatures within the mist are Concealed. The mist dissipates at the end of your next turn.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 5, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 5, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 5, improveDamage: "", addEffect: "" },
                { tier: "6", inproveRange: 5, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "Poison Spores",
            prerequisites: ["Primal Chant, Necromancy, Extrinsic, Nature"],
            APC: 3,
            Range: 40,
            Requires: "Gesture, Verbal",
            Duration: "1 round",
            prayerDescription: "You send fungal spores dusting across your enemies. Choose a point within range.Make a magic attack vs the FORT of all creatures within a 5 ft radius of that point.On a hit, deal 1d4 toxic damage, and a creature is Sickened until the end of their next turn.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "Each time you cast this chant, you may choose whether you affect creatures in a 5 ft radius or a 10 ft radius from the point that you choose within range." },
                { tier: "5", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "6", inproveRange: 0, improveDamage: "1d4", addEffect: "" },
            ]
        },
        {
            ChantName: "Slick",
            prerequisites: ["Primal Chant, Alchemy, Extrinsic, Weather"],
            APC: 2,
            Range: 60,
            Requires: "Gesture, Visual",
            Duration: " 1 Round",
            prayerDescription: "You draw moisture from the air and soil, creating an icy slick. Choose a 5 ft area on the ground within range. That area becomes slippery and treacherous. Whenever a creature starts their turn in that space or enters it for the first time on their turn, they must make a DEX check against 10 + your magic attribute. On a fail, the creature falls prone.",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 0, improveDamage: "", addEffect: "When you cast this chant, you can choose for the area to be 5 ft or 10 ft in diameter." },
                { tier: "4", inproveRange: 20, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "When you cast this chant, you can choose for the area to be 5 ft, 10 ft, or 15 ft in diameter." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "When you cast this chant, you can choose for the area to be 5 ft, 10 ft, 15 ft, or 20 ft in diameter." },
            ]
        },
        {
            ChantName: "Springstep",
            prerequisites: ["Primal Chant, Altering, Intrinsic, Nature"],
            APC: 1,
            Range: Self,
            Requires: "Gesture",
            Duration: "1 Round",
            prayerDescription: "You bolster yourself in the spirit of the woodland creature, tremendously increasing your gait. Until the end of your next turn, your Jump distance doubles(you must still observe the restrictions imposed by your movement).",
            itallics: "When you cast this chant and are at a higher power tier, the chant becomes stronger: ",
            scaling: [
                { tier: "2", inproveRange: 0, improveDamage: "", addEffect: "The chant’s range increases to Touch." },
                { tier: "4", inproveRange: 0, improveDamage: "", addEffect: "When you use this chant, your Jump distance triples instead of doubling." },
                { tier: "6", inproveRange: 0, improveDamage: "", addEffect: "When you use this chant, your Jump distance quadruples instead of tripling" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
        {
            ChantName: "",
            prerequisites: [""],
            APC: 2,
            Range: 0,
            Requires: "Gesture, Verbal, Visual, Line of Effect",
            Duration: "Instantaneous",
            prayerDescription: "",
            itallics: "",
            scaling: [
                { tier: "2", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "3", inproveRange: 10, improveDamage: "", addEffect: "" },
                { tier: "4", inproveRange: 1 0, improveDamage: "", addEffect: "" },
                { tier: "5", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
                { tier: "6", inproveRange: 30, improveDamage: "", addEffect: "" },
            ]
        },
    ],
    Invocations: [
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["At the end of the casting time, make a magic attack roll against DC 20. Add 5 to the DC if you are in a desert or jungle(or any terrain with a temperature exceeding 24 C or 80 F).Subtract 5 from the DC if you are in an environment with below - freezing temperatures.If you hit the DC, then you cast the invocation and suffer Fatigue.If you miss, then you are unable to cast this invocation but you still expend the use of one of your Invocations and still suffer Fatigue.",
                "Choose a point within range.Thick, billowing clouds materialize in a 1 mile radius from that point. Harsh winds and sheets of snow pummel the area. All nonmagical sources of fire that are exposed to the blizzard are immediately extinguished.Choose which direction the Blizzard blows for the duration.The blizzard moves 30 ft in that direction at Initiative count 0 for the duration. For the duration, the following effects apply while creatures are directly exposed to the blizzard:",
                "• All ranged attack rolls that deal physical or elemental damage in the area automatically fail, with the exception of cold damage.",
                "• Creatures attempting to fly in this area must first make a STR check against a DC of 10 + your magic attribute; if they fail, they cannot fly in a direction of their choice. If they were on the ground, they remain on the ground; if they were in the air, they move 30 ft in the direction that the Blizzard is blowing.",
                "• All creatures in the area are Deafened beyond 5 ft and are Blinded beyond 5 ft.",
                "• Terrain in the area is Difficult Terrain as heaps of snow cover the area.",
                "• Standing water in the area immediately freezes to a thickness of 18 inches.",
                "• A creature that begins its turn in the area and is not wearing winter clothing must make an END check against a DC of 10 + your magic attribute.If they fail the check, they take 2d6 cold damage and gain Fatigue. If they succeed, they take ½ damage and do not gain Fatigue.",
                "Snow and ice created by this invocation remain after the duration and melt at a natural rate, but all other effects of this invocation end after the duration."
            ],
            Upcharges: []
        },
        {
            ritualName: "Control Weather",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 2"],
            APC: 0,
            SPC: 0,
            castingTime: "15 minutes",
            Range: "2 miles",
            Materials: "Kindling, flint, and steel to create embers",
            Requires: "Gesture, Verbal",
            Duration: "Instantaneous",
            ritualDescriptionParagraphs: ["At the end of the casting time, immediately take 2d8 fire damage and make a magic attack roll against DC 15. If you hit the DC, then you cast the Invocation and suffer Fatigue. If you miss, then you are unable to cast this invocation but 268 Chapter 4 | Magic you still expend the use of one of your Invocations and still suffer Fatigue.",
                "Choose up to three points within range. All areas within a 10 ft radius of each of those three points immediately burst into flame.Each of the fires operate using the following principles.Once they touch each other, they continue to operate in this way but only count as a single fire."
                "Any flammable materials that are not being worn or carried catch fire.These fires will expand by 5 ft every 30 seconds.If there is a strong wind, then they will instead expand by 5 ft every 10 seconds in the direction that the wind is blowing.If the fire is burning uphill, it will move an additional 5 ft.Although sparked by magic, the fire itself is considered nonmagical."
                "The fire creates thick smoke in a radius three times as wide as the radius of the fire. Smoke imposes the Concealed condition on all creatures within it. Additionally, creatures that begin their turn in smoke must make an END check against a DC of 10 + your magic attribute. If they fail, then they suffer a condition; if they already had that condition, then they gain an additional condition on top of any previous effects:"
                "• Shaken until outside the radius of smoke",
                "• Sickened until outside the radius of smoke ",
                "• Fatigued ",
                "• Slowed until outside the radius of smoke ",
                "• Suffocating until outside the radius of smoke ",
                "A creature that starts their turn in the fire or moves into it for the first time on a turn must make an END check against a DC of 10 + your magic attribute.That creature takes 2d8 fire damage if they fail the check, and ½ damage if they succeed."
                "A creature that starts their turn in the fire or moves into it for the first time on a turn must make an END check against a DC of 10 + your magic attribute.That creature takes 2d8 fire damage if they fail the check, and ½ damage if they succeed."

            ],
            Upcharges: []
        },
        {
            ritualName: "Hurricane",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 3"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight",
            Materials: "1 gallon of water"
            Requires: "Gesture, Verbal, Visual",
            Duration: " 1 hour",
            ritualDescriptionParagraphs: ["At the end of the casting time, make a magic attack roll against DC 20. Subtract 5 from the DC if you are in a desert or jungle (or any terrain with a temperature exceeding 24 ° C or 80 ° F). If you hit the DC, then you cast the Invocation and suffer Fatigue. If you miss, then you are unable to cast this invocation but you still expend the use of one of your invocations and still suffer Fatigue.",
                "Choose a point within range. Thick, swirling clouds materialize in a 1 mile radius from that point.Harsh winds and sheets of rain pummel the area.All nonmagical sources of fire that are exposed to the hurricane are immediately extinguished.Choose whether the hurricane is rotating clockwise or counterclockwise.The hurricane rotates around its point of origin.For the duration, the following effects apply while creatures are directly exposed to the hurricane: "
                "All ranged attack rolls that deal physical or elemental damage in the area automatically fail, with the exception of lightning damage.",
                "Creatures attempting to fly in this area must first make a STR check against a DC of 10 + your magic attribute; if they fail, they cannot fly in a direction of their choice.If they were on the ground, they remain on the ground; if they were in the air, they move 30 ft in the direction that the hurricane is blowing.",
                "All creatures in the area are Deafened beyond 20 ft and are Blinded beyond 60 ft."
                "Creatures are Slowed while moving in the area."
                "While you are in an area affected by the hurricane, you gain the following special attack: "
                "Lightning Strike. 3 AP, 60 ft range. Make a magic attack targeting a creature’s FORT.On a hit, they take 2d8 lightning damage."
                "At the end of the duration, the hurricane continues to rage until it would naturally fizzle out based on its atmospheric environment, At that time, any location in the affected area that can contain standing water does so to its maximum capacity.Water overflows and causes severe flooding where relevant."

            ],
            Upcharges: []
        },
        {
            ritualName: "Photosynthesis",
            primalInvocation: "Alchemy",
            Extrinsic: "Nature",
            prerequisites: [""],
            APC: 0,
            SPC: 0,
            castingTime: "1 hour, which can be part of a Recoup",
            Range: "Self",
            Materials: "Leaves, blades of grass, or similar vegetation; direct exposure to sunlight."
            Requires: "",
            Duration: "Instantaneous",
            ritualDescriptionParagraphs: ["When you finish casting this invocation, if you have maintained direct exposure to sunlight throughout the casting of the invocation, then you regain ½ your HP and gain Affinity to radiant damage for 1 hour.",
              
            ],
            Upcharges: []
        },
        {
            ritualName: "Predict Weather",
            primalInvocation: "Divining",
            Extrinsic: "Weather",
            prerequisites: [""],
            APC: 0,
            SPC: 0,
            castingTime: "30 minutes",
            Range: "Self",
            Materials: "Acorns, seeds, flower blossoms, or some similar plant byproduct."
            Requires: "",
            Duration: "Instantaneous",
            ritualDescriptionParagraphs: ["You become preternaturally aware of any natural phenomena that will occur in the next 8 hours (thunderstorms, tornadoes, etc) - this does not predict other creatures using magic to alter the weather.",
               
            ],
            Upcharges: []
        },
        {
            ritualName: "Rapid Growth",
            primalInvocation: "Alchemy",
            Extrinsic: "Nature",
            prerequisites: [""],
            APC: 0,
            SPC: 0,
            castingTime: " 1 hour, which can be part of a Recoup",
            Range: "Up to 1 mile",
            Materials: "A handful of soil"
            Requires: "Gesture",
            Duration: "Up to 24 hours",
            ritualDescriptionParagraphs: ["Upon completing the invocation’s casting time, choose one specific plant that you touch, or choose all plant life within a 1 mile radius of you.If you choose a single plant, then over the course of the next hour it grows rapidly until it has increased in size as if it has been one year.If you choose all plant life within a 1 mile radius of you, then over the course of the next 24 hours, all plant life grows rapidly until having increased in size as though it has been six months.",
                
            ],
            Upcharges: []
        },
        {
            ritualName: "Reorient",
            primalInvocation: "Enchanting",
            Extrinsic: "Emotion",
            prerequisites: ["Primal Tier 3"],
            APC: 0,
            SPC: 0,
            castingTime: "1 hour, which can be part of a Recoup",
            Range: "30 ft",
            Materials: "A willing wild animal that serves as a therapy pet for the duration."
            Requires: "Gesture",
            Duration: " Instantaneous",
            ritualDescriptionParagraphs: ["Upon completing the Invocation, choose a number of willing creatures equal to or less than your Primal Tier (you can choose yourself). Those creatures remove any Broken, Charmed, Demoralized, Enthralled, Frightened, or Shaken conditions that were affecting them. Affected creatures that have the Phobic condition can ignore the effects of that condition for the next 24 hours.",
            

            ],
            Upcharges: []
        },
        {
            ritualName: "Sandstorm",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 2"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight ",
            Materials: "A handful of sand or dirt"
            Requires: "Gesture",
            Duration: "1 hour",
            ritualDescriptionParagraphs: ["At the end of the casting time, make a magic attack roll against DC 18. Subtract 8 from the DC if you are in a desert or similar environment that naturally has large quantities of loose sand and/ or dirt.If you hit the DC, then you cast the invocation.If you miss, then you still cast the Invocation, but you also suffer Fatigue.",
                "Choose a point within range. Massive clouds of sand and grit fly out in a 1 mile radius from that point.Piercing winds tear through the area.Choose which direction the sandstorm blows for the duration.The sandstorm moves 30 ft in that direction at Initiative count 0 for the duration.For the duration, the following effects apply while creatures are directly exposed to the sandstorm: "
                "• All ranged attack rolls that deal physical or elemental damage in the area automatically fail. ",
                "• Creatures attempting to fly in this area must first make a STR check against a DC of 10 + your magic attribute; if they fail, they cannot fly in a direction of their choice. If they were on the ground, they remain on the ground; if they were in the air, they move 30 ft in the direction that the sandstorm is blowing",
                "• All creatures in the area are Deafened beyond 20 ft and are Blinded beyond 5 ft.",
                "•Moving in the area is considered difficult terrain. ",
                "At the end of the duration, any location in the affected area is covered in loose sand, which is considered Difficult Terrain until removed."

            ],
            Upcharges: []
        },
        {
            ritualName: "Tornado",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "3 miles",
            Materials: "A pinch of dirt and a gallon of water"
            Requires: "Gesture, Verbal",
            Duration: "1 hours",
            ritualDescriptionParagraphs: ["At the end of the casting time, make a magic attack roll against DC 15. If you hit the DC, then you cast the invocation. If you miss, then you still cast the invocation, but you are Staggered for the duration and immediately lose control of the tornado.",
                "Choose a point within range. A swirling funnel cloud descends from the sky and touches down on that point in a 15 ft radius. That 15 ft radius area is a tornado. The area in a 500 ft radius from the tornado experiences tremendous winds, causing the following effects:",
                "• All ranged attack rolls that deal physical damage in the area automatically fail.",
                "• Creatures attempting to fly in this area must first make a STR check against a DC of 10 + your magic attribute. When making this check, a creature rolls 2d20 and uses whichever is lower. If they fail, they cannot fly in a direction of their choice. If they were on the ground, they remain on the ground; if they were in the air, they move 30 ft closer to the tornado. ",
                "• All creatures in the area are Deafened beyond 40 ft.",
                "• Creatures moving away from the tornado are Slowed.",
                "On Initiative count 0, the tornado takes a turn. If you still have control over the tornado, make a DC 20 magic check; if you succeed, then you retain control over the tornado until the start of the tornado’s next turn. If you retain control over the tornado, you choose a direction and it moves 40 ft in that direction. If you fail, then you lose control over the tornado and cannot regain control over it. The MC randomly determines which direction the tornado moves."
                "At the end of each of the tornado’s turns, all creatures and objects in the tornado are flung 30 ft out of the tornado in a randomly determined direction, taking 6d6 blunt damage and landing Prone. The tornado ignores the DT of inanimate objects.",
                "At the end of this invocation’s duration, the tornado disperses unless other mundane or magical weather conditions provide the vitriol needed for the tornado to continue(thunderstorms, high- speed winds, and the like might extend the tornado’s duration).If the tornado’s duration extends beyond its natural duration, you immediately lose control of it even if you maintained control of it for the entire hour.",
                

            ],
            Upcharges: []
        },
        {
            ritualName: "Warden's Navigation",
            primalInvocation: "Divining",
            Extrinsic: "Nature",
            prerequisites: [""],
            APC: 0,
            SPC: 0,
            castingTime: "10 minutes",
            Range: "Self",
            Materials: "Moss, lichen, or some form of fungus or weed indigenous to the environment."
            Requires: ",
            Duration: "8 hours",
            ritualDescriptionParagraphs: ["For the duration, you cannot become lost except by magical means, and attacks against your mental defenses that would cause you to become lost have a - 5 penalty.If you are already lost this ritual has no effect.",
                

            ],
            Upcharges: []
        },
        {
            ritualName: "Warden's Trap",
            primalInvocation: "Alchemy",
            Extrinsic: "Nature",
            prerequisites: [""],
            APC: 0,
            SPC: 0,
            castingTime: "10 minutes",
            Range: "Touch",
            Materials: "At least 5 ft of rope, vine, twine, or a similar substance that can be used to bind."
            Requires: "Visual,Gesture",
            Duration: "Indefinite",
            ritualDescriptionParagraphs: ["",
                "You carefully lay the groundwork to snare an unsuspecting foe.",
                "Choose a 5 ft area within range. The next time a creature steps in that area, they must make an AWR check against a DC of 10 + your magic attribute. If they fail, then they are Restrained and Grounded (escape DC 10 + your magic attribute). When a creature becomes restrained in this manner, if you are on the same plane of existence as the trap, you become magically aware that a creature is restrained but do not automatically know anything further about the creature. The creature can repeat the save every minute. Creatures with a Monster Level greater than half of your Character Level gain +1 to their escape check every 10 minutes. Taking damage immediately ends the restraint.",
                "When you lay such a trap, it remains indefinitely until sprung or until you recover the trap.You cannot have more traps active than your Primal Power; any attempt to create an additional trap with this invocation fails. ",

            ],
            Upcharges: []
        },
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["",
                "• ",
                "• ",

            ],
            Upcharges: []
        },
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["",
                "• ",
                "• ",

            ],
            Upcharges: []
        },
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["",
                "• ",
                "• ",

            ],
            Upcharges: []
        },
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["",
                "• ",
                "• ",

            ],
            Upcharges: []
        },
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["",
                "• ",
                "• ",

            ],
            Upcharges: []
        },
        {
            ritualName: "Blizzard",
            primalInvocation: "Alchemy",
            Extrinsic: "Weather",
            prerequisites: ["Primal Tier 4"],
            APC: 0,
            SPC: 0,
            castingTime: "1 Hr",
            Range: "Sight (max 100 miles)",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 + {Primal Power Tier} hours",
            ritualDescriptionParagraphs: ["",
                

            ],
            Upcharges: []
        }
    ],
    Spells: [
        {
            spellName: "Acid Pool",
            prerequisites: ["Primal Spell, Evoking, Extrinsic, Nature, Conjuring 1"],
            APC: 6,
            SPC: 4,
            Range: "60 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["A pool of steaming acid burbles up from the ground. Choose a point within range.A pool of acid burbles up in a 15 ft radius from that point.The area becomes both Difficult and hazardous terrain(dealing 1d4 corrosive damage per 5 ft moved).When a creature starts its turn in the acid, make a magic attack against their FORT, dealing 3d4 damage on a hit and ½ as much on a miss. Creatures that start their turn Prone in the area are automatically hit.",
            ],
            Upcharges: [" + 1d4 damage per 3 SP against creatures starting their turn in the acid pool."],
        },
        {
            spellName: "Animal Bond",
            prerequisites: ["Primal Spell, Enchanting, Intrinsic, Nature"],
            APC: 5,
            SPC: 3,
            Range: "30 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "24 hours",
            spellDescriptionParagraphs: ["By lacing your soft words with subtle magic, you endear a creature to you. Choose one beast within range.Provided that the creature is not hostile towards you, it becomes Charmed by you and will follow you for the duration.It will not follow you into obviously dangerous territory, nor will it fight on your behalf.The creature can communicate rudimentary ideas to you by using body language, growls, chirps, and the like.It will warn you if you are headed into a dangerous area, show you where you might find food, and offer you other basic advice while it is in its natural habitat. You may bond multiple animals in this way, but the SPC doubles for each additional animal that you bond while you already have at least one bonded animal(the 2nd bond has SPC 6, the 3rd has SPC 12, etc).",
            ],
            Upcharges: ["By spending +3 SP on this spell, you can magically link with the creature. For the duration of the spell, you can close your eyes and see through the bonded animal’s senses. You can communicate telepathically with the creature, though it becomes no more capable of highly intelligent thought than it was prior to the casting of this spell."],
        },
        {
            spellName: "Animate Plants",
            prerequisites: ["Primal Spell, Altering, Extrinsic, Nature, Conjuring 1"],
            APC: 8,
            SPC: 18,
            Range: "30 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["When you finish Conjuring this spell, all plants within range become semiconscious.For the duration, these plants seek to help you and your allies, and hinder your foes.For the duration, the following rules apply to the affected area.Note that the affected area does not move with you, but is the area affected when you initially finish Conjuring the spell. All spaces within 5 ft of vegetation are considered difficult terrain for creatures hostile to you.Your MC might determine that some areas are instead Hazardous, if the plant has spines or toxins.You and creatures that are friendly to you can ignore any Difficult or Hazardous terrain imposed by plant life. On each of your turns for the duration, provided that you are in the affected area, you may spend 2 AP to cause a branch or root to lash out and attack an enemy in the area. Make a magic attack against the creature’s ANT, dealing 1d8 blunt damage on a hit.You may make this attack any number of times on your turn if you have enough AP",
            ],
            Upcharges: ["+10 ft range per +6 SP."],
        },
        {
            spellName: "Avianism",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Nature"],
            APC: 2,
            SPC: 20,
            Range: "Touch",
            Requires: "Gesture, Verbal",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["You or a creature that you touch gain a fly speed equal to twice your walking speed for the duration.The affected creature’s basic physique changes slightly during this time to reflect more birdlike features.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Billowing Fog",
            prerequisites: ["Primal Spell,Summoning, Extrinsic, Weather, Conjuring 1"],
            APC: 6,
            SPC: 4,
            Range: "120 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "Up to 10 minutes",
            spellDescriptionParagraphs: ["You draw fog from the Everwilds to clog the field of battle. Choose a point within range.Fog fills an area in a 20 ft radius from that point.The fog imposes the Concealed condition on any creature within it.A steady wind of 10 mph or more will dispel the fog, and you can dismiss the fog by spending 1 AP on your turn.Otherwise, the fog lasts for the duration.",
            ],
            Upcharges: ["+5 ft radius per +4 SP"],
        },
        {
            spellName: "Boarish Savagery",
            prerequisites: ["Primal Spell,Altering, Intrinsic, Nature"],
            APC: 1,
            SPC: 18,
            Range: "Touch",
            Requires: "Gesture, Verbal",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["You excite the vicious subconscious of a creature into a destructive rage. You or a creature that you touch gain the following properties for the duration: You deal 1d8 additional damage on all melee attacks. When you kill a creature, gain 1d8 Shield HP. When a creature attempts to Frighten you, it must roll 2d20 and use the lower. You sprout coarse, bristly hair and your teeth take on a tusklike appearance.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Bullish Strength",
            prerequisites: ["Primal Spell,Altering, Intrinsic, Nature"],
            APC: 2,
            SPC: 14,
            Range: "Touch",
            Requires: "Gesture, Verbal",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["You or a creature that you touch gain the following properties for the duration: Your STR increases by 2 (this can exceed your attribute cap). You gain 1d4 Shield HP at the start of each of your turns. When a creature attempts to Charm you, it must roll 2d20 and use the lower. Your physique changes slightly: your shoulders and neck thicken and your features vaguely resemble that of a bull.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Calming Presence",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Emotion, Conjuring 3"],
            APC: 12,
            SPC: 12,
            Range: "30 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 hour",
            spellDescriptionParagraphs: ["A willing creature that can see you throughout the conjuring of this spell becomes inured to mental manipulation. For the duration and while you are conjuring, the creature cannot be Broken, Charmed, Demoralized, Enthralled, Frightened, or Shaken. If the creature was already suffering from one or more of those conditions, the conditions are suppressed for the duration.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Carnage",
            prerequisites: ["Primal Spell,Enchanting, Intrinsic, Emotion"],
            APC: 3,
            SPC: 30,
            Range: "20 ft",
            Requires: "Gesture, Verbal",
            Duration: "1 minute",
            spellDescriptionParagraphs: ["You and a number of creatures within range equal to or less than your magic attribute gain the following properties for the duration. If a creature is unwilling, make a magic attack against their LOG; if you succeed, then they are subject to this spell. When the spell first takes effect, gain 15 Shield HP. Your STR and DEX both increase by 2 (this can exceed your attribute cap). Gain +10 ft Movement. You gain a Natural Weapon: Tooth and Claw. Tooth and Claw costs 2 AP to use, deals 2d8 sharp damage, and has the Light tag. You can use STR or DEX when attacking with Tooth and Claw and can make this attack even if both of your hands are full, provided that you are able to open your mouth. When you kill a creature with your Tooth and Claw, gain 1 AP You cannot be Frightened. If a creature attempts to charm you, it rolls 2d20 and uses whichever is higher. You sprout matted, mangy fur, your eyes resemble that of a rabid wolf, your veins pop inhumanly, and your canine teeth and fingernails grow into hardened fangs and claws. When the spell ends, a creature must make an END check against 10 + your magic attribute.On a fail, the creature becomes Fatigued.Whether the creature succeeded or failed, it takes 1d10 psychic damage.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Control Water",
            prerequisites: ["Primal Spell, Altering, Conjuring 2"],
            APC: 10,
            SPC: 20,
            Range: "300 ft",
            Requires: "Gesture, Verbal, Visual,Line of Sight",
            Duration: "1 Minute",
            spellDescriptionParagraphs: ["You command a body of water to obey your will. Choose a point within range.All water within a 30 ft radius of that point responds to your commands for the duration.This might be one large body of water or several small ones.On each of your turns while maintaining this spell, you can spend the appropriate amount of AP to do any of the following actions.",
                Command Waves(3 AP): "Cause the water in the area to become either rough or smooth until the end of your next turn.If rough, creatures must spend + 1 ft of movement for every 1 ft that they move, even if they have a swim speed."
                Current(1 AP): "The water flows in a direction of your choice. Until your next turn, any creature that starts its turn in the water moves 30 ft in the direction of the current, ending this movement early and taking 1d10 blunt damage if they hit dry land or an obstacle."
                Maelstrom(4 AP): "You can only use this ability if the entire area of your spell is uninterrupted water.Choose clockwise or counterclockwise.When a creature starts its turn in the area, it must make an END check; the DC is 10 + your magic attribute.If they fail, they move 30 ft in a curve along the maelstrom’s path in the direction you chose. If they strike an object as part of this movement, they take 1d10 blunt damage.If they failed their END check, they also take 1d6 blunt damage per subsequent round that you have used this feature(max 4d6)."
                Mists(2 AP): " The area becomes misty, imposing Concealed on all creatures in the area until the end of your next turn."
                Spout(2 AP):"Make a magic attack against the ANT of a creature that is in the area of water you control. On a hit, the creature takes 1d10 blunt damage and is hurled 30 ft into the air, taking another 1d20 damage if this motion is interrupted by an object."
                Tidal Wave(10 AP): "You can spend AP on this feature over multiple rounds, as though Conjuring.You cannot spend AP on anything else on your turn while doing so. You can only use this ability if the entire area of your spell is uninterrupted water.When you have spent enough AP to trigger this effect, make a magic attack vs the FORT of each creature in the area.On a hit, deal 3d10 damage, the creature falls Prone, and it is Staggered until the end of its next turn.On a miss, a creature takes ½ damage and falls Prone but is not Staggered."
            ],
            Upcharges: ["+1 minute per +10 SP"],
        },
        {
            spellName: "Cornered Frenzy",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Nature"],
            APC: 4,
            SPC: 4,
            Range: "Self (5 ft radius)",
            Requires: "Gesture",
            Duration: "nstantaneous",
            spellDescriptionParagraphs: ["You embrace the fearsome aspect of a cornered predator, lashing out against all about you. You can only use this spell when you are Bloodied. With a weapon that you are holding, make an attack roll against the AR of each creature within the spell’s radius. Make separate attacks against each creature, but roll damage once; creatures that you hit take full damage, and creatures that you miss take ½ damage. If you crit a creature, deal critical damage as you normally would with a weapon. If you are dual wielding, roll damage for both weapons, but still only make one attack per creature to determine whether you hit, using the weapon modifier of your choice.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Crawling Vine",
            prerequisites: ["Primal Spell, Altering, Extrinsic, Nature, Conjuring 1"],
            APC: 4,
            SPC: 3,
            Range: "60 ft",
            Requires: "Gesture, Verbal, Visual, Line of Sight",
            Duration: "5 minutes (30 rounds)",
            spellDescriptionParagraphs: ["You summon a leafy, ropy vine to harry your enemies. Immediately when you finish conjuring this spell, a Medium sized vine appears within range in an unoccupied space on the ground and attacks one creature of your choice within 10 ft of the vine, targeting their REF.Use your magic attack modifier for this attack.On a hit, the creature takes 2d6 blunt damage.On a crit, the creature also falls Prone.Alternatively, you may choose to have the vine Grapple a creature instead of damaging it if you hit.The vine cannot Grapple more than one creature at a time, and while Grappling a creature it can only attack that creature. For the duration, you may spend 1 AP to move the vine up to 20 ft in any direction.For the duration, you may spend 2 AP to make the vine make another attack against any creature within 10 ft of it, dealing the same damage as your initial attack.",
            ],
            Upcharges: ["f you spend +7 SP on this spell, then on a hit the creature becomes Pinned after falling Prone as tendrils of lichen magically lash out from the ground and hold it in place."],
        },
        {
            spellName: "Creeping fear",
            prerequisites: ["Primal Spell, Enchanting, Intrinsic, Emotion"],
            APC: 3,
            SPC: 4,
            Range: "90 ft",
            Requires: "Verbal, Visual, Line of Sight",
            Duration: "Instantaneous",
            spellDescriptionParagraphs: ["You whisper fell dread into the subconscious mind of a creature. Make a magic attack against the WILL of a creature within range.If you hit, it becomes Frightened of you for 1 minute.If you miss, it becomes Frightened of you until the end of your next turn.If you crit, then the creature also becomes Phobic(roll on the table below to determine its phobia) .",
            ],
            Upcharges: [" If you spend +4 SP when you cast this spell, roll 2d20 and use whichever is higher when making your magic attack."],
        },
        {
            spellName: "Ecstasy ",
            prerequisites: ["Primal Spell, Enchanting, Extrinsic, Emotion"],
            APC: 3,
            SPC: 45,
            Range: "120 ft",
            Requires: "Verbal, Visual, Gesture",
            Duration: "Up to 10 minutes",
            spellDescriptionParagraphs: ["The abundant bliss of the Everwilds’s spring breeze overwhelms a creature’s senses. Make a magic attack against the LOG of each creature within a 20 ft radius of a point in range.If you hit, then the creature becomes Enthralled for the duration.If you miss, then instead, the creature becomes Enthralled until the end of your next turn.While Enthralled in this way, the creature gains an additional random effect for the duration.Roll 1d8 and consult the table below to determine the effect.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Feast For Crows",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Nature"],
            APC: 4,
            SPC: 14,
            Range: "Special",
            Requires: "Gesture, Visual, Line of Effect",
            Duration: "Instantaneous",
            spellDescriptionParagraphs: ["You tap into the power of the murderous flock, raining death from the sky. As part of this spell, you must use a ranged weapon that uses ammunition. Choose a point within that weapon’s range. Make a weapon attack vs the REF of each creature in a 20 ft radius from that point. On a hit, you roll your normal damage dice x4 (for example, a recurve bow deals 1d6 damage, so this spell would deal 4d6 damage if you used a recurve bow). If you miss, then creatures in the area of effect take ½ damage. If you crit, add an additional 4 damage dice to the damage roll.",
            ],
            Upcharges: ["+5 ft radius per +4 SP."],
        },
        {
            spellName: "Hailstorm",
            prerequisites: ["Primal Spell, Alchemy, Extrinsic, Weather, Conjuring 3"],
            APC: 12,
            SPC: 20,
            Range: "Sight",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 minute",
            spellDescriptionParagraphs: ["You conjure a cloud that produces chunky hailstones. Choose a point within range.Thick, billowing clouds materialize in a 30 ft radius disc from that point.One round later, hailstones begin pummeling the ground beneath that disc of clouds.When this occurs, and for the duration of the spell, the following effects apply to creatures and objects in the hailstorm: ",
                " Nonmagical sources of fire are extinguished"
              "Whenever a creature makes a ranged attack roll, they must roll 2d20 and use the lower, unless it would deal cold damage."
              "Terrain in the area is difficult terrain as hailstones pebble the ground."
              "When a creature starts its turn in the hailstorm, make a magic attack roll against their FORT.If you hit, the creature is Chilled until the start of their next turn."
              "When the spell ends, the hailstones melt at a natural rate."
            ],
            Upcharges: ["+5 ft radius per +5 SP"],
        },
        {
            spellName: "Hunter's Quarry",
            prerequisites: ["Primal Spell, Divining, Intrinsic, Nature"],
            APC: 1,
            SPC: 6,
            Range: "90 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 hour",
            spellDescriptionParagraphs: ["You mark a target as your prey, consigning it to a swift death.Choose one creature within range. For the duration, you have TA on attacks against that creature.Additionally, for the duration, you gain a + 6 bonus to checks made to track that creature and recall information about it.",
            ],
            Upcharges: ["+1 hour duration per +4 SP"],
        },
        {
            spellName: "Lightning Bolt",
            prerequisites: ["Primal Spell, Evoking, Extrinsic, Weather, Conjuring 1"],
            APC: 4,
            SPC: 20,
            Range: "100 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "Instantaneous",
            spellDescriptionParagraphs: ["A sizzling bolt of lightning eviscerates all in its path. Choose a point within range and draw a line between yourself and that point.Make a magic attack against the ANT of each creature that the line touches.On a hit, deal 6d8 lightning damage and a creature is Dazed until the end of their next turn; on a miss, a creature takes ½ as much damage and is not Dazed.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Mists Of The Everwilds",
            prerequisites: ["Primal Spell, Illusory, Extrinsic, Weather, Conjuring 1"],
            APC: 6,
            SPC: 12,
            Range: "30 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "Up to 10 minutes",
            spellDescriptionParagraphs: ["You conjure forth the appearance of mist, confounding the senses. Choose a point within range. Illusory fog fills an area in a 40 ft radius from that point. This fog occasionally flickers with lights, as though multicolored fireflies are within. The fog provides dim light and imposes the Concealed condition on any creature within it. A creature can attempt to see through the illusory fog by spending 2 AP to make an AWR check against your WILL. If they succeed, then the fog fades to a mere veil for that creature. That creature ignores the Concealed condition of any other creature in the fog, and the fog no longer provides dim light for that creature.You may dismiss the fog by spending 1 AP on your turn.Otherwise, it lasts for the duration.",
            ],
            Upcharges: ["+5 ft range per +4 SP"],
        },
        {
            spellName: "Nature's Bounty",
            prerequisites: ["Primal Spell, Divining, Intrinsic, Nature"],
            APC: 5,
            SPC: 8,
            Range: "Sight",
            Requires: "Gesture, Verbal, Visual",
            Duration: "Instantaneous",
            spellDescriptionParagraphs: ["By communing with the natural world, your physical needs are provided for. One plant that you see magically produces 3d6 delicious berries or nuts(depending on the type of tree).These berries or nuts each remain edible for 8 hours, after which point they shrivel.Before shriveling, a single nut or berry will provide a Medium or smaller creature with enough nourishment for one day(creatures of a larger size must eat one additional berry or nut per size they are above Medium).If a Bloodied creature eats one of these berries or nuts, it regains 1d2 HP as well.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "nature's Remedies",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Nature"],
            APC: 3,
            SPC: 4 ,
            Range: "Touch",
            Requires: "Gesture",
            Duration: "Instantaneous",
            spellDescriptionParagraphs: ["Using an herbal salve or a quick word of power, you heal a creature.One creature that you touch regains 1d6 hit points.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "nighteye",
            prerequisites: ["Primal Spell, Divining, Intrinsic, Nature"],
            APC: 5,
            SPC: 5,
            Range: "Self",
            Requires: "Gesture",
            Duration: "1 hour",
            spellDescriptionParagraphs: ["You call upon the primal sight of feline hunters, allowing your gaze to pierce the darkness. You can see in nonmagical darkness for 60 ft as if it were dim light, and in dim light for 60 ft as if it were bright light. You cannot discern color while doing so.",
            ],
            Upcharges: ["If you spend +20 SP on this spell, then you can see in magical darkness for the duration as well."],
        },
        {
            spellName: "Padfoot",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Nature"],
            APC: 5,
            SPC: 3,
            Range: "Touch",
            Requires: "Gesture",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["By tapping into the subtle blend of shadow and mulch, you silence a creature’s tread.Touch one creature.For the duration, it does not leave footprints and has a + 6 to Sneaking.",
            ],
            Upcharges: ["+1 Sneaking per +1 SP (max +20 total Sneaking)."],
        },
        {
            spellName: "Piscism",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Nature"],
            APC: 7,
            SPC: 6,
            Range: "Touch",
            Requires: "Gesture, Verbal",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["You attune a creature to the aquatic domain. Touch one creature.For the duration, it can breathe water and has a swim speed equal to its walking speed.",
            ],
            Upcharges: [" +10 mins per +4 SP"],
        },
        {
            spellName: "Polymorph",
            prerequisites: ["Primal Spell, Alchemy, Intrinsic, Nature, Conjuring 5"],
            APC: 20,
            SPC: 20,
            Range: "Touch",
            Requires: "Gesture, Verbal",
            Duration: "Up to 1 hour",
            spellDescriptionParagraphs: ["Touch one willing creature for the duration of conjuring the spell. That creature magically polymorphs into a creature with the beast tag and no modifying tags. The creature must have a Monster Level equal to or less than ½ the target creature’s level if it is a hero, or equal to or less than its own Monster Level if it is an NPC. The target creature gains all of the stats and properties of the new creature, with the exception of retaining its original INT and CHA. The creature is unable to cast spells or speak while in its new form unless the beast that it turned into possess such an ability. You or the transformed creature may spend 3 AP to end the spell. If the creature loses all of its HP, it reverts to its old form and takes any excess damage from its original HP pool. Otherwise, the creature reverts to its original form at the end of the duration.",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Summon Beast",
            prerequisites: ["Primal Spell, Summoning, Extrinsic, Nature, Conjuring 2"],
            APC: 6,
            SPC: 15,
            Range: "30 ft",
            Requires: "Gesture, Verbal",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["You summon a mundane creature from the Everwilds. Immediately when you finish Conjuring this spell, a creature appears in an unoccupied space within range. This creature must have the beast tag and no modifying tags, and must have a Monster Level of 5 or lower. This creature is friendly to you and your allies and will fight for you and engage in other heavy labor for you (such as pulling a cart) for the duration, but will become hostile towards you if you or your allies mistreat it.If a creature you summon in this way does not die before the end of the spell’s duration, you may specify that you want to resummon that same creature when you use this spell again. If you do so at least once per day for a year, then that creature becomes permanently bonded to you. It resides in your plane of existence now and sees you as a loved companion. Furthermore, you and a bonded beast can communicate basic emotions and simple thoughts to one another telepathically, provided that you can see each other.",
            ],
            Upcharges: [" +10 mins per +5 SP."],
        },
        {
            spellName: "Summon Elemental",
            prerequisites: ["Primal Spell, Summoning, Extrinsic, Nature, Conjuring 8"],
            APC: 24,
            SPC: 40,
            Range: "30 ft",
            Requires: "Gesture, Verbal",
            Duration: "10 minutes1 hour",
            spellDescriptionParagraphs: ["You summon an elemental from the Everwilds. Immediately when you finish Conjuring this spell, a creature appears in an unoccupied space within range.This creature must have the Elemental tag, and must have a Monster Level of 15 or lower.Make a magic roll against the Elemental creature’s WILL.The Elemental simultaneously makes a CHA roll against your WILL.Whether you both miss, both succeed, or only one of you succeeds, the results are as follows: ",
                You both hit:"You take 2d8 damage of the type primarily associated with that Elemental (if it is an earth elemental, take blunt damage). Thereafter, this creature is friendly to you and your allies and will fight for you for the duration, but will become hostile towards you if you or your allies mistreat it."
                The Elemental hits, and you miss: "This creature is hostile towards you and your allies and will attack you."
                You hit, and the Elemental misses: "For the duration, you gain Affinity to the damage type primarily associated with the elemental(if it is an earth elemental, this is blunt damage).This creature is friendly to you and your allies and will fight for you for the duration, but will become hostile towards you if you or your allies mistreat it."
                You both miss: "This creature is friendly to you and your allies and will fight for you for the duration, but will become hostile towards you if you or your allies mistreat it."
            ],
            Upcharges: ["+5 mins per +5 SP"],
        },
        {
            spellName: "Summon Fae",
            prerequisites: ["Primal Spell, Summoning, Extrinsic, Nature, Conjuring 5"],
            APC: 20,
            SPC: 70,
            Range: "30 ft",
            Requires: "Gesture, Verbal",
            Duration: "1 hour",
            spellDescriptionParagraphs: ["You summon a fae from the Everwilds. Immediately when you finish Conjuring this spell, a creature appears in an unoccupied space within range.This creature must have the Fae tag, and must have a Monster Level of 20 or lower.Make a Spellcasting roll against the Fae creature’s LOG.The Fae simultaneously makes a CHA roll against your LOG.Whether you both miss, both succeed, or only one of you succeeds, the results are as follows: ",
                You both hit; or you hit and the Fae misses: "This creature is friendly to you and your allies and will fight for you or(if intelligent) argue on your behalf for the duration, but will become hostile towards you if you or your allies mistreat it.At the end of the duration, the fae becomes autonomous and may do whatever it wishes.",
                Fae hits, you miss: "The spell’s duration ends. The fae is hostile towards you and will either try to directly battle you or will try to manipulate you in nefarious ways.",
            You both miss: "The spell’s duration ends. The fae is indifferent to you and will act of its own volition as it sees fit.",
            ],
            Upcharges: [""],
         },
         {
            spellName: "",
            prerequisites: ["Primal Spell, Altering, Intrinsic, Emotion, Conjuring 3"],
            APC: 12,
            SPC: 12,
            Range: "30 ft",
            Requires: "Gesture, Verbal, Visual",
            Duration: "1 hour",
            spellDescriptionParagraphs: ["",
            ],
            Upcharges: [""],
        },
        {
            spellName: "Summon Monster",
            prerequisites: ["Primal Spell, Summoning, Extrinsic, Nature, Conjuring 3"],
            APC: 10,
            SPC: 40,
            Range: "30 ft",
            Requires: "Gesture, Verbal",
            Duration: "5 minutes",
            spellDescriptionParagraphs: ["You summon a monstrosity from the Everwilds. Immediately when you finish Conjuring this spell, a creature appears in an unoccupied space within range. This creature must have the Beast or Monstrosity tag, and must have a Monster Level of 10 or lower. This creature is friendly to you and your allies and will fight for you and engage in other heavy labor for you (such as pulling a cart) for the duration, but will become hostile towards you if you or your allies mistreat it.",
            ],
            Upcharges: ["+5 mins per +5 SP"],
        },
        {
            spellName: "Summon Swarms",
            prerequisites: ["Primal Spell, Summoning, Extrinsic, Nature, Conjuring 2"],
            APC: 9,
            SPC: 30,
            Range: "30 ft",
            Requires: "Gesture, Verbal",
            Duration: "5 minutes",
            spellDescriptionParagraphs: ["You summon swarms of creatures from the Everwilds. Immediately when you finish Conjuring this spell, three swarms appear in three unoccupied points within range. These swarms must have the Beast and Swarm tags, and must each have a Monster Level of 5 or lower.These swarms are friendly to you and your allies and will fight for you and engage in other labor for you(such as devouring a corpse) for the duration, but will all become hostile towards you if you or your allies mistreat any of them.",
            ],
            Upcharges: ["+5 mins per +5 SP"],
        },
        {
            spellName: "Tangle Of Brambles",
            prerequisites: ["Primal Spell, Alchemy, Extrinsic, Nature"],
            APC: 3,
            SPC: 4,
            Range: "60 ft",
            Requires: "Gesture, Verbal, Line of Sight",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["A mass of thorny weeds sprouts up, clogging the way. Choose a point within range.Thorny weeds sprout in a 10 ft radius from that point.The area within this radius is hazardous terrain(1d4 sharp).When a creature starts its turn in the brambles, make a magic attack against their FORT; on a hit, the creature is Grappled until the start of their next turn. (If they attempt to escape the Grapple on their current turn, they must overcome your WILL).The caster can choose to end this effect at will.",
            ],
            Upcharges: ["+5 ft radius per +3 SP"],
        },
        {
            spellName: "Terror",
            prerequisites: ["Primal Spell, Enchanting, Intrinsic, Emotion"],
            APC: 5,
            SPC: 24,
            Range: "60 ft",
            Requires: "Gesture, Visual, Line of Sight",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["Choose a point within range and make a magic attack against the WILL of each creature within a 20 ft radius of that point.If you hit, a creature becomes Frightened of you for 10 minutes and gains a Phobia(roll 1d10 on the Phobia Table in the Creeping Fear spell).If you miss, a creature becomes Frightened of you for 1 minute and does not gaina Phobia.",
            ],
            Upcharges: ["If you spend 12 additional SP when you cast this spell, roll 2d20 and use whichever is higher when making your magic attack."],
        },
        {
            spellName: "Wall Of Briars",
            prerequisites: ["Primal Spell, Alchemy, Extrinsic, Nature, Conjuring 2"],
            APC: 8,
            SPC: 16,
            Range: "100 ft",
            Requires: "Visual, Gesture",
            Duration: "10 minutes",
            spellDescriptionParagraphs: ["Choose a point within range, then choose a second point within range that is no more than 20 ft from the first point. Thorny briars sprout in a line between those two points. The briars are 5 ft thick and 15 ft tall.Moving through the briars is considered moving through hazardous terrain(6d4 sharp).Furthermore, when a creature attempts to move through the briars, make a magic attack against their FORT. On a hit, the creature is Restrained(escape DC 10 + your magic attribute). The wall provides partial cover(+3) against all ranged attacks.The briars can be destroyed or burned.Each 5 ft 3 of the briars has the following health statistics:",
                HP 20 AR 14:"Resist Blunt 6, Cold 3; Immune Psychic, Sonic",
                Vulnerable Fire 4:"DT 10",
            ],
            Upcharges: ["+5 ft length of the wall per +4 SP"],
        },
    ]
};