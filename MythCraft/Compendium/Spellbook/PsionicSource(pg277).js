const Divine  = {
    DescriptiveParagraphs: [
        "Psionic magic draws from the inherent power within one�s very soul: their Essence.Individuals who are sensitive to this power often manifest it at a very young age, although few know how to spot and develop those early signs of psionic latency.",
        "",
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
        additional: "",
        cantrip: { hasCantrip: true, cantripText: "" }
    },
    ArcaneTags: {
        descriptionTest: "",
        tagsList: [
            { tagName: "", TagDescription: "" },
        ]
    },
    TalentStacks: [
      
        
        {
            displayName: "Adept Of The Psionic",
            StackName: "Psionic, Magic Entry",
            prerequisites: ["Having opened yourself to Psionic power, you gain the following benefits."],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "",
            BenefitList: [  
                { benefitName: "Aptitude", BenefitDescription: "You manifest one psionic aptitude. when you cast psionic spells of that aptitude with the manifestation tag, they cost 0 SP for you." },
                { benefitName: "Spell Points", BenefitDescription: "If this is the first Magic Entry talent you have taken, gain 10 SP. Otherwise, gain +5 SP. Each time you level up and take a talent with the Psionic tag, you gain +5 maximum SP" },
                { benefitName: "Psionic Power", BenefitDescription: " Gain 1 Psionic Power. Each time you level up and take a talent with the Psionic tag, you gain +1 Psionic Power." },
                { benefitName: "Adept", BenefitDescription: "Gain access to the psionic stack. Gain two talents from the psionic stack. You do not gain additional SP or Psionic Power from these selections." },
                { benefitName: "Psion", BenefitDescription: "Your magic attribute is AWR unless another talentsays otherwise." },
            ],
        }
        {
            displayName: "Clairsentient Magic",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["You learn three new spells and/or invocations with the Clairsentience tag."],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Telepath Magic",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["You learn three new spells and/or invocations with the Telepathy tag."],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Psychoknetic Magic",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["You learn three new spells and/or invocations with the Psychokinetics tag."],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Psychometabolic Magic",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["You learn three new spells and/or invocations with the Psychometabolics tag."],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "ClairsentientMetacreative Magic",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["You learn three new spells and/or invocations with the Metacreativity tag."],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Psionic Spells",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["You gain another psionic aptitude"],
            isRepeatable: true,
            incompatableWith: ["Psionic Focus"],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Psionic Focus",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["Spells that have the tag you chose as your psionic aptitude cost 2 fewer SP(min 1, unless they are manifestations)."],
            isRepeatable: true,
            incompatableWith: ["Psionic Versatility"],
            flavortext: "",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Battlefield Concentration",
            StackName: "Psionic Talent, Repeatable",
            prerequisites: ["Enhanced Concentration"],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "While concentrating on a psionic spell, you gain the Exploit maneuver.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Body Sculptor",
            StackName: "Psionic Talent",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "You can shorten the Meditation and Recovery time from Body Sculpt to 8 hours each. (1 / Level) ",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],

        }
        {
            displayName: "Body Sculptor II",
            StackName: "Psionic Talent",
            prerequisites: ["Body Sculptor"],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "Body Sculptor becomes 2/Level.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Body Sculptor III",
            StackName: "Psionic Talent",
            prerequisites: ["Body Sculptor II "],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "You can now cast Body Sculpt on others, as though it had a range of Touch.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
         {
            displayName: "Enhanced Concentration",
            StackName: "Psionic Talent",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: [""],
             flavortext: "When rolling Concentration, you now roll 2d20 and take the higher result.Additionally, if you roll Concentration and would fail, you can spend one Action Point reactively to pass instead.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Enhanced Concentration II",
            StackName: "Psionic Talent",
            prerequisites: ["Level 12, Enhanced Concentration"],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "You can now Concentrate on two spells. However, when Concentrating on two spells, your Concentration DC increases by 4. If you fail a Concentration check, you lose Concentration on both spells.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Enhanced Concentration III",
            StackName: "Psionic Talent",
            prerequisites: ["Enhanced Concentration II"],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "When Concentrating on one or more spells, you cannot lose Concentration on the spell that you have been Concentrating on for the longest time.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Enhanced Concentration IV",
            StackName: "Psionic Talent,Repeatable",
            prerequisites: ["Level 24, Enhanced Concentration III"],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "You can now concentrate on three spells at once, and your DC for Concentration can not exceed 12. If you fail a Concentration check, you lose concentration on all spells except for the one that Enhanced Concentration III preserves.",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Meditative Rest",
            StackName: "Psionic Talent",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "You can remain partially aware of your surroundings while you sleep � able to wake at will, at a moment�s notice(this takes 1 Reactive AP).",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Meditative Rest II",
            StackName: "Psionic Talent",
            prerequisites: ["Meditative Rest"],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "You now only need 4 hours of sleep. ",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
        {
            displayName: "Quick Mind",
            StackName: "Psionic Talent,Repeatable",
            prerequisites: [""],
            isRepeatable: true,
            incompatableWith: [""],
            flavortext: "Choose two psionic spells that you know with the Conjuring tag.Their Conjuring value is lowered by 1(min 1). ",
            BenefitList: [
                { benefitName: "", BenefitDescription: "" },
            ],
        }
    ],
    explinationText: {
        headding: "Psionic Invocations",
        description: ""
    },
    Cantrips: [
         {
            cantripName: "Adapt",
            prerequisites: ["Gesture"],
            Casting Time: "10 minutes"
            Range: Self,
            Requires: "Gesture",
            Duration: " 1 hour",
            cantripDescription: "When you finish casting this invocation, you gain two adaptations of your choice from the list below for the duration: ",
            itallics: "",
            scaling: [
                { benefitName: "Claws", BenefitDescription: "Gain the natural weapon: Claws. Claws cost 2 AP to use, deal 1d4 damage, and you can use STR or DEX when making Claw attacks.Claws have the Light tag.If you already have Claws as a natural weapon, then taking this option increases your damage die by one size(e.g., from 1d4 to 1d6) to a maximum of 1d12." },
                { benefitName: "Fins", BenefitDescription: "Gain a swim speed equal to your walking speed." },
                { benefitName: "Gills", BenefitDescription: "You can breathe air and water" },
                { benefitName: "Grip", BenefitDescription: "Gain a climb speed equal to your walking speed." },
                { benefitName: "Haunches", BenefitDescription: "Your Jump distance doubles." },
                { benefitName: "Prehensile Tail", BenefitDescription: "Gain a third appendage, allowing you to hold up to three hands� worth of items." },
                { benefitName: "Spines", BenefitDescription: "When a creature makes an unarmed or natural weapon attack against you, they take 1d4 sharp damage. " },
                { benefitName: "Sprint", BenefitDescription: " Your walking speed increases by 10 ft." },
           ]
        },
        {
            cantripName: "Assembly",
            prerequisites: ["Psionic Invocation, Metacreativity, Alchemy, Meditation"],
            Casting Time: " 10 minutes to 1 hour"
            Range: 100 ft,
            Requires: "Gesture, Verbal, Visual",
            Duration: " Instantaneous",
            cantripDescription: "By exerting your will on a specific task, you can psionically complete this task.Tasks can include constructing a building or vehicle by using raw materials, or piloting a vehicle such as a sailboat. If constructing or repairing a structure, you may repair 10 ft 3 per 10 minutes that you meditate on this Invocation. If operating a vehicle, you can competently manipulate the vehicle as if you were two places at once within range. If you have any Duplicates active, then they assist in this invocation.Each Duplicate can repair 10 ft 3 per 10 minutes that you meditate on this invocation, in addition to your own 10 ft of repairs; further, a Duplicate can operate a vehicle competently while you meditate on this invocation.",
            itallics: "",
            scaling: [
                
           ]
        },
        {
            cantripName: "Astral Projection",
            prerequisites: ["Psionic Invocation, Clairsentience, Divining, Meditation,Psionic Tier 6"],
            Casting Time: "1 hour"
            Range: self 
            Requires: "Gesture, Verbal",
            Duration: "Up to 8 hours",
            cantripDescription: "You launch your consciousness beyond your body and can freely explore the world and the cosmos in disembodied form. Upon completing this invocation, you may spend 4 AP to project your spirit out of your body, and 4 AP to return your spirit into your physical body if you are on the same plane of existence.While you are projecting your consciousness in this way, you gain the following properties: ",
            itallics: "",
            scaling: [
        {       "You are Ethereal and can pass through walls and other barriers freely." },
                "You are Invisible, retaining the Unseen condition."
                "You have +2 to all mental attribute checks."
                "You have +2 to all mental defenses."
                "You cannot physically interact with the world."
                "You have -2 to physical defenses and to AR."
                "By spending 4 SP, you can send your consciousness up to 1,000 miles instantaneously.By spending 8 SP, you can send your consciousness into another plane of existence.Any diseases or curses that you are suffering are suppressed for the duration."
                "If you project for the full duration of the invocation and do not get into combat while projecting, you may gain the benefits of Taking a Rest."
                "You cannot communicate audibly with other creatures while using Astral Projection, but can cast spells as though you were physically in the space that your spirit occupies.You can cast spells with Verbal requirements, even though you cannot audibly communicate."
                "Your spirit can be damaged as though you are physically present. If reduced to 0 HP while using Astral Projection, your spirit becomes stranded where it was reduced to 0 HP and your body becomes comatose. Once your body and spirit are physically in the same place again, Lesser Restoration or similar magic will reunite your body and spirit."
                "If, at the end of the duration, you cannot recall your spirit to your body (due to it being on another plane of existence or otherwise unable to return), then you are immediately reduced to 0 HP."

            ]
        },
        {
            cantripName: "Bend Reality",
            prerequisites: ["Psionic Invocation, Psychokinetics, Altering, Meditation, Psionic Tier 5"],
            Casting Time: "1 hour"
            Range: Visual,
            Requires: "Gesture, Verbal",
            Duration: "Special",
            cantripDescription: "When you complete the casting of this invocation, you may choose any Spell from any of the five Sources of magic that has the Alchemy, Altering, Divining, Enchanting, Illusory, or Necromancy tag and costs 40 or fewer SP.You immediately cast that spell, spending its SP.",
            itallics: "Alternatively, you may impose a substantial but reasonable change on the weather, natural terrain, or a nonliving object or structure within range.Examples include but are not limited to: ",
            scaling: [
                {: "Changing the day from sunny to stormy" },
                {: "Making Ancerra�s moons apparently vanish (this does not affect solar orbits; it is a powerful instance of illusory magic) " },
                {: "Causing thick mist to envelop the region" },
                {: "Transmuting a wooden wall into stone" },
                {: "Making a flat plain become hilly or swampy" },
                {: "Turning a pile of cut lumber into a decorated carriage" },
                {: "Turning a pile of cut lumber back into trees" },
                {: "You may suggest additional effects that this invocation might allow, and your MC will adjudicate if and to what extent such effects are viable." },
                {: "Bending Reality enacts a huge toll on your mind. Upon using this invocation, you may not cast spells with an SP cost over 10 and you are shaken until the end of your next Rest." },
                {: "You may only cast this invocation once per day, even if you have multiple invocation slots available." },

            ]
        }
    ],
Prayers:[{
    PrayerName: "Dreamspeak",
    prerequisites: ["Psionic Invocation, Telepathy, Enchanting"],
    Casting Time: 30 minutes.
    Range: Special,
    Requires: "You must be sleeping to cast this invocation",
    Duration: "Up to 30 minutes",
    prayerDescription: "Choose a creature with whom you have interacted in the past and with whom you have a friendly relationship. Provided that the creature in question is also sleeping, you may both converse for the duration.Both creatures have the option to end this conversation at any time.This invocation ends early if either you or the target creature awakens.",
    itallics: "",
    scaling: [
        
    ],
   Prayers:[{
    PrayerName: "Duplicate",
    prerequisites: ["Psionic Invocation, Metacreativity, Summoning"],
    Casting Time: 10 minutes, which can be part of a Recoup.
    Range: 10 ft,
    Requires: "Gesture, Verbal, Visual",
    Duration: "8 hours",
    prayerDescription: "You create a quasi-real duplicate of yourself. This Duplicate has none of your memories or personality.The Duplicate has your statistics, but cannot hold over AP and starts its turn with no more than 3 AP.It cannot cast spells, with the exception of manifestations that you can cast for 0 SP.The Duplicate�s maximum HP is equal to � your maximum HP.If you spend 24 hours meditating on this invocation, you may summon Duplicates equal to your Psionic Tier - 1 (min 1). These Duplicates last until destroyed. Permanent Duplicates have 10 HP, cannot use manifestations, wield weapons, or regain HP in any way. If you summon new Duplicates with this invocation, your previous Duplicates dissipate.",
    itallics: "",
    scaling: [
        
   ],
   Prayers:[{
    PrayerName: "Hanunt",
    prerequisites: ["Psionic Invocation, Telepathy, Enchanting, Meditation, Psionic Tier 3"],
    Casting Time: 4 hours.
    Range: Special,
    Requires: "Gesture, Verbal",
    Duration: "Instantaneous",
    prayerDescription: "Choose a creature with whom you are familiar and have met before. Make a magic attack against that creature�s LOG. If the creature is awake, the Invocation automatically fails. If the creature is asleep, then modify your magic attack based on your level of familiarity with the creature:",
    itallics: "You have met once: Roll 2d20 and use the lower",
              "You have met a few times: Make the roll unmodified",
              "You frequently interact with, or have spent at least",
              "a week studying this person: Roll 2d20 and use the higher",
              "If you succeed, then you haunt the creature�s subconscious psyche.Until the creature removes this curse using magic akin to Greater Restoration or similar magic, it suffers the following effects: ",
              "It suffers the Shaken condition",
              "It occasionally sees illusory creatures moving in shadows",
              "Each time it Takes a Rest, it gains a randomly determined Phobia for 24 hours",
              "You can only have this invocation active on one creature at a time.If you cast this invocation on a new target, its effects end on the previous target.",
             
    scaling: [
        
   ]
   }
   {
    PrayerName: "Steel Trap",
    prerequisites: ["Psionic Invocation, Clairsentience, Altering"],
    Casting Time: 1 hour.
    Range: Touch,
    Requires: " Gesture",
    Duration: " 4 hours",
    prayerDescription: "You place psychic wards around a creature, bolstering their mind. You or one creature that you touch cannot be Broken, Charmed, Demoralized, Enthralled, Frightened, or Shaken for the duration.",
    itallics: "",
    scaling: [
   }
   {
    PrayerName: "Telepathic Anchor",
    prerequisites: ["Psionic Invocation, Clairsentience, Divining"],
    Casting Time: 1 hour.
    Range: 30 ft,
    Requires: " Gesture, Visual, Line of Sight",
    Duration: "Instantaneous",
    prayerDescription: "You project a sliver of your consciousness into a concentrated point, allowing your senses to return to said point even once you are long gone. Choose a point within range.You may close your senses to your physical surroundings to open your ears to the surroundings of the point that you chose upon casting the invocation, as though you were standing there.You can only hear from a Telepathic Anchor; you gain no benefit of your other senses. (Psionic talents can improve this.) When you hear through your Telepathic Anchor, you are Blinded and Deafened to the world around your physical body. After initially casting the invocation, you need not remain within its initial range; so long as you are on the same plane of existence as your Telepathic Anchor, you can use this ability. The target of this invocation is a point, not an object, and as such cannot be moved.For example, if you cast it inside of a wagon, you would be able to see from the location the wagon was in, not the wagon�s new location. You may have a number of Telepathic Anchors active at one time equal to your Psionic Tier.When you would make a Telepathic Anchor that would exceed this limit, your oldest Telepathic Anchor fades.",
    itallics: "",
    scaling: [
   }
   {
    PrayerName: "",
    prerequisites: ["Psionic Invocation, Telepathy, Enchanting"],
    Casting Time: 30 minutes.
    Range: Special,
    Requires: "You must be sleeping to cast this invocation",
    Duration: "Up to 30 minutes",
    prayerDescription: "",
    itallics: "",
    scaling: [
],
       Rituals: [
{
    ritualName:"",
    prerequisites: [""],
    APC: 2,
    SPC: 10,
    Range: "s",
    Requires: "",
    Duration: " ",
    ritualDescriptionParagraphs: ["."],
    Upcharges:[ ""],
},
],
Spells:[
{
    spellName:"Blur",
    prerequisites: ["Psionic Spell, Psychometabolics, Illusory, Concentration"],
    APC: 2,
    SPC: 10,
    Range: "Self",
    Requires: "Verbal",
    Duration: " Up to 1 minute",
    spellDescriptionParagraphs: ["For the duration, creatures that attack you must roll 2d20 and use the lower"],
    Upcharges:[ ""],
},
{
    spellName:"Body Sculpt",
    prerequisites: ["Psionic Spell, Psychometabolics, Alchemy, Meditation"],
    APC: Special,
    SPC: 50,
    Range: "Self",
    Requires: "Gesture, Verbal, Visual",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["You must meditate for 1 week to cast this Spell, touching the same creature(which can be yourself) for the duration. At the end of this time, that creature permanently removes one point from their STR, DEX, or END to add one point to a different physical attribute.This can exceed the creature�s Attribute Cap.For 1 week after you cast this spell, you suffer the Shaken condition.You cannot cast this spell again while Shaken as a result of casting this spell."],
    Upcharges:[ ""],
}, 
{
    spellName:"Charm Person",
    prerequisites: ["Psionic Spell, Psychovillainy, Enchanting, Concentration"],
    APC: 4,
    SPC: 6,
    Range: "60 ft",
    Requires: "Verbal, Visual",
    Duration: "Up to 1 hour",
    spellDescriptionParagraphs: ["Make a magic attack against the WILL of a humanoid creature within range.If you hit, then the creature is Charmed for the duration.If you miss, you do not expend your SP.While Charmed in this way, the creature will automatically go out of their way to accommodate your suggestions provided that it does not cause direct harm to them."],
    Upcharges: [ "+30 mins per +3 SP"],
},  
{
    spellName:"Conceal",
    prerequisites: ["Psionic Spell, Clairsentience, Illusory, Conjuring 3"],
    APC: 8,
    SPC: 12,
    Range: "Self (20 ft radius)",
    Requires: "Gesture",
    Duration: "1 hour",
    spellDescriptionParagraphs: ["By placing psychic wards about you and your allies, you shield yourself from divining. You and allied creatures within 20 ft of you cannot be targeted by Divining magic from the Divine, Occult, or Psionic sources.Any attempt to do so fails and the creature does not lose its SP.If a creature targets you or allied creatures within the spell�s radius using Divining magic from the Arcane or Primal sources, they must make a spellcasting roll against your LOG.If they hit, then they are able to use the Divining spell.If they fail, then the attempt fails and the creature does not lose its SP.Either way, when a creature using Arcane or Primal magic attempts this, you are aware of the attempt and whether it was successful or not."],
    Upcharges:[ ""],
},      
{
    spellName:"Create Ammunition",
    prerequisites: ["Psionic Spell, Metacreativity, Evoking, Manifestation"],
    APC: 0,
    SPC: 1,
    Range: "Touch",
    Requires: "Gesture",
    Duration: "Instantaneous",
    spellDescriptionParagraphs:["You manifest ammunition of pure psionic energy. When you make an attack using a ranged weapon, you may create one piece of ammunition. The ammunition�s damage is the same as the ranged weapon�s normal damage, but deals psychic damage instead of physical damage."],
    Upcharges:[ ""],
},      
{
    spellName:"Charm Weapon",
    prerequisites: ["Psionic Spell, Metacreativity, Evoking, Manifestation"],
    APC: 1,
    SPC: 4,
    Range: "10 ft",
    Requires: "Gesture",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["You manifest a blade of pure psionic energy.You create a weapon(choose any nonmagical weapon that does not have the Ranged tag).This weapon is corporeal, but is made entirely of psionic power.It has all of the properties of the weapon that you chose, but deals psychic damage instead of its normal damage type or types. You may spend 1 AP to dissipate your weapon and a set amount of AP to resummon that same weapon, without spending SP each time you do so.Resummoning a weapon costs 0 AP if it is Concealed, 1 AP if it is Light, and 3 if it is Unwieldy; if it has none of these Tags, it costs 2 AP to resummon. Resummoning a weapon allows you to throw a psionic weapon with the Thrown property and immediately get it back by spending that additional AP. If you wish to change your weapon�s form, you must spend your SP again.Any effects that dispel magic immediately destroy the weapon, and replacing it requires you to spend SP again."],
    Upcharges:[ ""],
},  
{
    spellName:"Decoy",
    prerequisites: ["Psionic Spell, Metacreativity, Illusory"],
    APC: 1, which you spend reactively when you are hit,
    SPC: 8,
    Range: "self",
    Requires: "Verbal",
    Duration: "1 round",
    spellDescriptionParagraphs:["Take only � the triggering damage. Additionally, you create an illusory duplicate of yourself that looks, sounds, and smells the same as you. Choose whether the duplicate appears in an empty space within 5 ft of you, or whether the duplicate replaces your space and you reappear in an empty space within 5 ft of your duplicate. The duplicate lasts until the end of your next turn or until it takes damage, at which point it disappears."],
    Upcharges:[ ""],
}, 
{
    spellName:"Detect Truth",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Meditation"],
    APC: 3,
    SPC: 8,
    Range: "60 ft",
    Requires: "Verbal, Visual, Gesture",
    Duration: "Up to 1 hour",
    spellDescriptionParagraphs: ["Select one creature within range when you cast this spell. For the duration while the creature remains within range, you can detect whether that creature is telling the truth, lying, or telling the truth in bad faith (stretching the credibility of the truth, giving misleading statements, and the like). If the creature moves out of range, then the spell ends."],
    Upcharges: [" +1 target creature per +6 SP"],
},
{
    spellName:"Distract",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Concentration, Manifestation"],
    APC:1, which you may spend on your turn, or spend reactively when a hostile creature makes an attack roll,
    SPC: 3,
    Range: "40 ft",
    Requires: "Gesture, Verbal, Visual",
    Duration: "Up to 5 minutes",
    spellDescriptionParagraphs: ["If you cast this spell reactively, the triggering creature gains TD on their attack roll. If you cast this spell on your turn, choose a hostile creature within range.You and your allies gain TA against that creature until the start of your next turn. Once per round while you maintain Concentration, you may spend 1 AP to apply either spell effect again."],
    Upcharges:[ ""],
},
{
    spellName:"Dominate Person",
    prerequisites: ["Psionic Spell, Psychovillainy, Enchanting, Concentration"],
    APC: 5,
    SPC: 46,
    Range: "60 ft",
    Requires: "Verbal, Visual",
    Duration: "Up to 10 minutes",
    spellDescriptionParagraphs: ["Make a magic attack against the WILL of a humanoid creature within range.If you hit, then the creature is Enthralled for the duration.If you miss, you expend 10 SP but save the rest.While Enthralled in this way, the creature will automatically go out of their way to accommodate your commands, including obeying commands that would cause direct harm to the creature or its allies."],
    Upcharges:[ ""],
},
{
    spellName:"Empathize",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Concentration, Conjuring 1"],
    APC: 6,
    SPC: 8,
    Range: "120 ft",
    Requires: "Verbal",
    Duration: "Up to 5 minutes",
    spellDescriptionParagraphs: [" When you finish Conjuring this Spell, choose a willing creature within range. For the duration, when that creature takes damage, you take � of the damage in place of them. Additionally, when that creature would become Charmed, Frightened, or Shaken, you may make a magic attack against the WILL of the creature that made the attack against your ally. If you hit, then the effect fails. The Spell ends early if your allied creature moves out of range."],
    Upcharges: [ " +40 ft range per +4 SP"],
}, 
{
    spellName:"Empathize With Crowd",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Concentration, Conjuring 3"],
    APC: 14,
    SPC: 60,
    Range: "Sight",
    Requires: "Verbal, Visual",
    Duration: "Up to 5 minutes",
    spellDescriptionParagraphs: ["While you are conjuring this spell, and for the duration of this spell, you may choose a single creature (which can be yourself), and make all creatures within range who are not engaged in combat more favorable towards that single creature�s words and actions. The extent to which a creature is swayed by the single creature is dependent upon the swayed creature�s LOG. If the creature�s LOG is below 14, they are Charmed by the target of this spell, but do not know they are being Charmed. If a creature�s LOG is above 14, the single creature must make attribute roll as normal when trying to persuade, deceive, or otherwise interact with affected creatures, but gains +5 to their rolls as well as rolling twice and taking the higher result. When you finish Conjuring this spell, all creatures within range lose the Broken, Charmed, Demoralized, Enthralled, Frightened, Phobic, and Shaken conditions."],
    Upcharges:[ ""],
},
{
    spellName:"Far Sense",
    prerequisites: ["Psionic Spell, Clairsentience, Divining, Meditation, Conjuring 6"],
    APC: 30,
    SPC: 15,
    Range: "5 miles",
    Requires: " Gesture",
    Duration: "1 hour",
    spellDescriptionParagraphs: ["Through trancelike focus, you recall your steps to witness what is now transpiring where you once tread. When you cast this spell, choose a location within range that you can see or are aware of. You can see and hear events currently happening in that location. Creatures with magical awareness might detect your presence. When your consciousness is projected in this fashion, a spectral, invisible visage of your face might be seen by creatures capable of seeing invisibility or detecting magic. If an area is protected from Divining magic by the Divine or Primal sources, then you are unable to see or hear said area. If, however, the area is protected from Divining magic by the Arcane, Occult, or Psionic sources, you may attempt to see into it by making a magic attack against the WILL of the creature that cast the wards (or against a DC set by the MC if the magic occurred naturally). On a successful attack, then you can see and hear the area, but depending on the specific anti-Divining spells in place, the original caster of the wards might detect your presence. On a failed attack, your attempt to see and hear the area fails."],
    Upcharges:[ ""],
}, 
{
    spellName:"Foresight",
    prerequisites: ["Psionic Spell, Clairsentience, Divining, Conjuring 10"],
    APC: 30,
    SPC: 80,
    Range: "self",
    Requires: "Gesture",
    Duration: "8 hours",
    spellDescriptionParagraphs: ["You see specters of what is about to happen, allowing you to effortlessly dominate the battlefield. You cannot be Surprised.You gain a + 8 bonus to all of your Defenses.Whenever you roll Initiative or make an attack roll, DEX check, or AWR check, roll 2d20 and use whichever is higher."],
    Upcharges:[ ""],
},
{
    spellName:"Geas",
    prerequisites: ["Psionic Spell, Psychovillainy, Enchanting, Conjuring 1"],
    APC: 5,
    SPC:70,
    Range: "60 ft",
    Requires: "Gesture, Verbal, Visual",
    Duration: "30 days",
    spellDescriptionParagraphs: ["Make a magic attack against the WILL of a humanoid creature within range.If you hit, the creature is Enthralled for the duration.If you miss, it is Enthralled for 1 day instead.During this time, the creature will go out of their way to accommodate your commands, including obeying commands that would cause direct harm to the creature or its allies.If you do not specify a command, the creature will do whatever it can to make you more comfortable, run errands that might please you, or to proclaim your greatness to other creatures. If you cast this spell on the same creature once every 30 days for five years, and you hit each time, then the effects become permanent.Greater Restoration and similar magic from the Divine or Primal source can restore a creature�s original memory."],
    Upcharges:[ ""],
}, 
{
    spellName:"Giant",
    prerequisites: ["Psionic Spell, Psychometabolics, Altering, Concentration"],
    APC: 2,
    SPC: 16,
    Range: "Self",
    Requires: "Gesture",
    Duration: "Up to 1 minutes",
    spellDescriptionParagraphs: ["Your Size increases by one step (e.g., from Medium to Large).Your STR increases by 2, your FORT increases by 5,and you gain 10 Shield HP."],
    Upcharges: ["Increase your Size by an additional +1 per +16 SP.For each additional step, gain + 2 STR, 5 FORT, and 10 Shield HP.You cannot become larger than Gargantuan."],
}, 
{
    spellName:"Grand Telekinesis",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering, Concentration, Conjuring 3"],
    APC: 30,
    SPC: 70,
    Range: "1000 ft",
    Requires: "Gesture, Visual, Line of Sight",
    Duration: "Up to 1 minutes",
    spellDescriptionParagraphs: ["You impose your will on an object, forcing it to move. Choose an object within range.If it weighs less than 2,000 tons you can lift it, exert simple manipulations over it such as pushing, pulling, rotating, lifting, or lowering.If you hurl an object, make a magic attack vs the REF of every creature within a 40 ft radius of a point within range. If you hit, deal 20d6 physical damage (blunt or sharp depending on the object) to the creature. If you miss, deal � damage. Either way, all creatures affected fall Prone. You may only target one object with Grand Telekinesis. If you throw it, the spell ends early. Your MC will determine what occurs when you use this spell in creative ways. For example, if you lift a boat from the water and turn it upside down, your MC may rule creatures get a REF save to grab onto something before falling off. If you lift a tower up and slam it into the ground, your MC may determine creatures inside the tower take double damage from the spell. With Grand Telekinesis, you can exert fine control over objects and can target specific parts of a larger object, such as picking the masts off a galleon or taking apart a tower."],
    Upcharges:[ ""],
}, 
{
    spellName:"Greater Telekinesis",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering, Concentration"],
    APC: 3,
    SPC: 20,
    Range: "150 ft",
    Requires: "Gesture, Visual, Line of Sight",
    Duration: "Up to 1 minutes",
    spellDescriptionParagraphs: ["You impose your will on an object, forcing it to move. Choose an object within range. If it weighs less than 40 lbs x your magic attribute, you can lift it, exert simple manipulations over it such as pressing a button, call it to your hand or an empty space next to you, or hurl it as a weapon. If you hurl the object, make a magic attack vs the REF of every creature within a 20 ft radius of a point within range. If you hit, deal 5d6 physical damage (blunt or sharp depending on the object) to the creature, and the creature falls Prone. If you miss, deal � damage and the creature does not fall Prone. For the duration of the spell, you may pick a new object to hurl by spending 3 additional AP on your turn. You may only hurl an object once per turn in this way, even if you have enough AP to hurl more than one. If you attempt to lift or manipulate an object that is physically working against you (such as attempting to lift a lowering portcullis or hold back the flow of a river), you must spend 3 AP on each of your turns to exert your will over that object. If you attempt to lift or manipulate an object greater than 40 lbs x your magic attribute, you must make a magic attack against a DC set by your MC. You cannot lift an object greater than 80 lbs x your magic attribute, even if you crit. With Greater Telekinesis, you can exert fine control over objects and can target specific parts of a larger object. Such as pulling a wheel off a wagon, or forcing open a portcullis."],
    Upcharges:[ ""],
}, 
{
    spellName:"Hasten",
    prerequisites: ["Psionic Spell, Psychometabolics, Altering, Concentration"],
    APC: 4,
    SPC: 18,
    Range: "Touch",
    Requires: "Gesture",
    Duration: "Up to 5 minutes",
    spellDescriptionParagraphs: ["You or one creature that you touch becomes hastened for the duration, gaining the following benefits: "],
     { "Gain 3 additional AP at the start of each of your turns",
       "Your AR, REF, and ANT gain a +2 bonus.",
       "Your walking speed is doubled.",
       "When the spell ends, you and the target creature are Dazed for 1 round."},

    Upcharges: [""],
}, 
{
    spellName:"Ignore Pain",
    prerequisites: ["Psionic Spell, Psychometabolics, Warding"],
    APC: 1, which you spend reactively when you take damage,
    SPC: Special,
    Range: "self",
    Requires: "Gesture",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["Gain Shield HP equal to double the amount of damage you just took.This spell costs SP equal to the amount of damage you took."],
    Upcharges:[ ""],
}, 
{
    spellName:"Inspiration",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Manifestation"],
    APC: 1,
    SPC: 3,
    Range: "60 ft",
    Requires: "Verbal, Visual",
    Duration: "1 round",
    spellDescriptionParagraphs: ["You or an allied creature within range gains TA for the duration"],
    Upcharges: ["+1 target creature per +3 SP"],
               ["One target creature per +3 SP is also Rallied for the duration"],
               ["One target creature per +5 SP is also Protected for the duration."],
}, 
{
    spellName:"Invisibility",
    prerequisites: ["Psionic Spell, Psychometabolics, Illusory, Concentration"],
    APC: 1,
    SPC: 12,
    Range: "self",
    Requires: "Gesture",
    Duration: "Up to 1 hou",
    spellDescriptionParagraphs: ["You become Invisible for the duration. This spell ends if you deal damage to another creature"],
    Upcharges: ["+30 min duration per +4 SP"],
    ["If you spend +28 SP on this spell, then the spell does not end when you deal damage to another creature. "],
   
}, 
{
    spellName:"Iron Body",
    prerequisites: ["Psionic Spell, Psychometabolics, Alchemy, Conjuring 2"],
    APC: 10,
    SPC: 55,
    Range: "self",
    Requires: "Gesture",
    Duration: "Up to 10 minutes",
    spellDescriptionParagraphs: ["Your body becomes iron. For the duration, you gain Resist Physical 10 and Resist Elemental 10; Immune Toxic; and DR 10/Fire and Energy"],
    Upcharges:[ ""],
}, 
{
    spellName:"Jump",
    prerequisites: ["Psionic Spell, Psychometabolics, Altering, Manifestation"],
    APC: 1,
    SPC: 5,
    Range: "self",
    Requires: "Verbal",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["Until the start of your next turn, your vertical and horizontal jump distance both increase by a number of ft equal to triple your Psionic Power(e.g., if you have Psionic Power 4, your vertical and horizontal jump distance both increase by 12 ft).During this time, double the distance you can move when you spend AP to move.In order to complete a jump�s full distance, you must spend enough AP to move that whole distance; if you do not, your jump ends when you run out of movement"],
    Upcharges:[ ""],
},
{
    spellName:"Levitate",
    prerequisites: ["Psionic Spell, Psychometabolics, Altering"],
    APC: 1,
    SPC: 12,
    Range: "self",
    Requires: "Verbal",
    Duration: "10 minutes",
    spellDescriptionParagraphs: ["For the duration, gain a fly speed equal to � your walking speed."],
    Upcharges:[ ""],
},  
{
    spellName:"Lesser Telekinesis",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering, Manifestation"],
    APC: 3,
    SPC: 3,
    Range: "60 ft",
    Requires: "Gesture, Visual, Line of Sight",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["You impose your will on an object, forcing it to move. Choose an object within range that weighs 10 lbs x your magic attribute or less. You can lift it and exert simple manipulations over it such as pressing a button, call it to your hand, or hurl it at a foe. If you hurl it at a creature, make a magic attack vs REF. If you hit, deal 1d10 physical damage (blunt or sharp depending on the object) to the creature. If you attempt to lift or manipulate an object that is physically working against you (such as attempting to lift a lowering portcullis), you must make a magic attack against a DC set by your MC.If you attempt to lift or manipulate an object greater than 10 lbs x your magic attribute, you must make a magic attack against a DC set by your MC. You cannot lift an object greater than 20 lbs x your magic attribute, even if you crit. With Lesser Telekinesis, you cannot exert fine control over objects, nor can you target specific parts of a larger object. For example, this spell does not allow you to remove a wheel from a wagon."],
    Upcharges:[ ""],
},  
{
    spellName:"Mind Fist",
    prerequisites: ["Psionic Spell, Metacreativity, Altering, Concentration, Manifestation"],
    APC: 2,
    SPC: 4,
    Range: "40 ft",
    Requires: "Gesture, Visual",
    Duration: "Up to 5 minutes",
    spellDescriptionParagraphs: ["When you cast this spell, make a magic attack roll against the AR of a target within range. If you hit, deal 1d8 psychic damage. While you maintain Concentration on this spell, you may repeat the attack on each of your turns by spending 2 AP. You can pick a new target each time and you can make this attack any number of times on a given turn provided that you spend enough AP."],
    Upcharges: [ "+20 ft per +2 SP"],
}, 
{
    spellName:"Mind Palace",
    prerequisites: ["Psionic Spell, Telepathy, Warding, Conjuring 10"],
    APC: 30,
    SPC: 150,
    Range: "self",
    Requires: "Gesture, Verbal",
    Duration: "Indefinite",
    spellDescriptionParagraphs: ["Upon completion of Conjuring this Spell, you create your Mind Palace. This is a metaphysical demiplane within your own mind. You may spend 4 AP to withdraw your consciousness from your body into your Mind Palace, and 4 AP to return from your Mind Palace to your physical body. While your consciousness is in the Mind Palace, you do not age and do not need to eat or drink. Any diseases or curses that you are suffering are suppressed while you are in your Mind Palace. If you spend at least 8 hours in your Mind Palace, you gain the benefits of Taking a Rest. You cannot be targeted by Divining magic against your will while in your Mind Palace, but may choose for Divining spells to successfully reach you if you desire. You may cast Divining magic from your Mind Palace as if you were on the Plane occupied by your physical body. While in your Mind Palace, you gain +5 to all INT Attribute checks. You may choose to destroy your Mind Palace at any point, but doing so requires you to cast the spell again with the intent of undoing it. If you die while your mind palace is active, you may choose for your Essence to retreat to your Mind Palace and dwell there indefinitely.If you do this, you appear to anyone who travels to your Mind Palace as a spectral form of your living self.You cannot leave the Mind Palace once you do this.If you choose not to do this, then your Mind Palace is destroyed over the next 5d20 days as your soul fades."],
    Upcharges: ["Enhance: Once your Mind Palace is established, you may cast this spell again with a range of �Touch� to allow one additional creature access to the Mind Palace with you. Creatures added to your Mind Palace gain all of the benefits that this spell confers.Furthermore, you can experience all of the memories of creatures that join your Mind Palace, and they can experience all of your memories."],
},    
{
    spellName:"Mind Irap",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Concentration"],
    APC: 4,
    SPC: 40,
    Range: "60 ft",
    Requires: "Verbal",
    Duration: "Up to 1 minutes",
    spellDescriptionParagraphs: [".Make a magic attack against a target�s LOG. If you hit, the creature becomes Helpless for the duration.The spell ends early if you lose Line of Sight to the creature."],
    Upcharges:[ ""],
},  
{
    spellName:"Mind Wipe ",
    prerequisites: ["Psionic Spell, Psychovillainy, Enchanting"],
    APC: 4,
    SPC: 120,
    Range: "Touch",
    Requires: " Gesture, Verbal, Visual",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["Make a magic attack against a creature�s ANT. If you hit, then on your next turn, spend an additional 4 AP to attack that same creature�s LOG, provided that they are still within range. If you hit, then on your next turn, spend an additional 4 AP to attack that same creature�s WILL, provided that they are still within range. If you hit, then the creature loses all of its memories, personality, and beliefs. If you miss, the creature becomes immune to Mind Wipe. This cannot be undone short of divine intervention. After casting this spell, you gain Fatigue. You also become Sickened for 2 days."],
    Upcharges:[ ""],
}, 
{
    spellName:"Minor Telepathy",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting, Manifestation"],
    APC: 4,
    SPC: 2,
    Range: "120 ft",
    Requires: "Visual",
    Duration: "Vnstantaneous",
    spellDescriptionParagraphs: ["Choose a creature within range. You may telepathically communicate a brief message of approximately 20 words or less to that creature.The creature can respond in kind without needing to spend AP."],
    Upcharges: [ "Reduce the spell�s APC by 1 (min 1) per +2 SP"],
},
{
    spellName:"Mirror Images",
    prerequisites: ["Psionic Spell, Metacreativity, Illusory, Concentration"],
    APC: 3,
    SPC: 12,
    Range: "self",
    Requires: "Gesture",
    Duration: "Up to 5 minutes",
    spellDescriptionParagraphs: ["You conjure forth mirrors of yourself to misguide your enemies� blows. Four duplicates of yourself swirl around you, loosely imitating your movements. For the duration, creatures that rely primarily on sight to make attacks against you roll an additional d20 against a DC 20, if they do not meet the DC, a mirror image is destroyed. The DC is reduced by 5 for each destroyed mirror image and the spell ends when you have no more mirror images."],
    Upcharges:[ ""],
},
{
    spellName:"Modify Memory",
    prerequisites: ["Psionic Spell, Psychovillainy, Enchanting, Conjuring 5"],
    APC: 30,
    SPC: 60,
    Range: "Touch",
    Requires: "Gesture, Verbal",
    Duration: "Indefinite",
    spellDescriptionParagraphs: ["Make a magic attack against the LOG of a humanoid creature within range. If you hit, the effects of this spell are indefinite. If you miss, then the effects only last for 2 days. A creature may choose to willingly fail this spell. You affect the target�s memory of an event that it experienced within the last 24 hours. The event can be no longer than 10 minutes from start to finish. You can permanently eliminate all memory of the event, cement the event into the creature�s memory exactly as it happened, change its memory of specific details of the event, or create a memory of some entirely different event. A false memory may not necessarily affect how a creature behaves, particularly if the memory does not hold with the creature�s core beliefs. Very illogical modified memories might be dismissed as a bad dream or hallucination. Greater Restoration and similar magic from the Divine or Primal source can restore a creature�s original memory."],
    Upcharges:[ ""],
}, 
{
    spellName:"Morph Features",
    prerequisites: ["Psionic Spell, Psychometabolics, Altering, Manifestation, Conjuring 1"],
    APC: 2,
    SPC: 4,
    Range: "self",
    Requires: "Gesture",
    Duration: "30 minutes",
    spellDescriptionParagraphs: ["You can psychically reshape your physical appearance. You can appear to be any other humanoid species that is the same Size as you.You can become 6 inches taller or shorter than your normal as part of this spell and can change your skin tone, eye color, hair color and length, and facial complexion however you see fit. This spell physically changes your body for the duration, so it withstands any physical scrutiny"],
    Upcharges: [ "+10 minutes per +4 SP"],
},
{
    spellName:"Paranoia",
    prerequisites: ["Psionic Spell, Telepathy, Enchanting"],
    APC: 4,
    SPC: 32,
    Range: "80 ft",
    Requires: "Gesture, Verbal",
    Duration: "24 hours",
    spellDescriptionParagraphs: ["Make a magic attack against a creature�s LOG. If you hit, choose a secondary target within range.The primary target becomes Phobic of the secondary target.It is not phobic of the secondary target specifically, but of all creatures or objects that resemble that secondary target. (For example, if the secondary target is an elk, then the primary target might become Phobic of all deer, elk, and moose for the duration). If you crit on your initial attack against the primary creature�s LOG, then the Phobic condition becomes indefinite."],
    Upcharges:[ ""],
},
{
    spellName:"Possession",
    prerequisites: ["Psionic Spell, Psychovillainy, Enchanting, Meditation, Conjuring 10"],
    APC: 30,
    SPC: 80,
    Range: "Sight",
    Requires: "Gesture, Verbal, Visua",
    Duration: "Up to 1 hour",
    spellDescriptionParagraphs: ["Make a magic attack against a creature�s WILL. If you succeed, you possess them for 1 hour. If you fail, then you only possess them for 1 minute. For the duration, on your turn you cannot do anything other than maintaining your Meditation. On the possessed creature�s turn, you choose exactly what actions they take. You need not maintain sight on the target creature after initially casting this spell, and you can simultaneously experience all sensory input from both your own body and the possessed creature�s body. If the creature takes psychic damage, you take that damage instead. If you take any damage, you must immediately make your magic attack against the creature�s WILL again; if you fail, then the spell ends early. After this spell expires, you gain Fatigue."],
    Upcharges: ["Enhance: At the end of the duration, you may make the magic attack again, targeting their WILL.If you hit, you may spend 20 additional SP to extend the duration of the spell by 15 minutes."],
}, 
{
    spellName:"Psychonavigation",
    prerequisites: ["Psionic Spell, Clairsentience, Divining, Concentration, Manifestation"],
    APC: 5,
    SPC: 4,
    Range: "self",
    Requires: "Gesture",
    Duration: "Up to 4 hours",
    spellDescriptionParagraphs: ["By projecting your mind�s eye high above, you divine your exact location in reference to another point. When you cast this spell, choose a location that you have physically been to in the last 24 hours.You know exactly what direction and how far away that point is from you. If you have a map, your position and the position of the reference point both magically glow as small pinpricks of light for the duration."],
    Upcharges: ["Telepathic Anchor: If you have one or more Telepathic Anchors, you may choose a point that is an active Telepathic Anchor, even if you have not been there in the last 24 hours."],
},
{
    spellName:"Sense Danger",
    prerequisites: ["Psionic Spell, Clairsentience, Divining, Conjuring 2"],
    APC: 10,
    SPC: 15,
    Range: "self",
    Requires: "Gesture",
    Duration: "1 hour",
    spellDescriptionParagraphs: ["You gain preternatural awareness of when things are not as they ought to be. You cannot be Surprised, and you gain + 5 to REF and ANT"],
    Upcharges:[ ""],
},
{
    spellName:"Shape Reality",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering, Meditation, Conjuring 10"],
    APC: 30,
    SPC: 150,
    Range: "Indefinite",
    Requires: "Gesture, Verbal",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["You change the nature of existence. When you complete the casting of this spell, you may choose any spell from any of the Five Sources of Magic that costs 70 or fewer SP. You immediately cast that spell without spending additional SP. Alternatively, you may rewrite the course of world events. You may not travel back in time or undo any events that have already happened, but may cause immediate and irrevocable change regarding current events. You may make one such change that is appropriate for your aptitude. This includes but is not limited to:"],
    "� A clairsentient may gain great knowledge, such as the deepest secrets of an individual, the location of a legendary artifact, or the machinations of a deity",
    "� A psychokinetic may cause a volcano to erupt, or pull a mountain down on a city.",
    "� A metacreative may summon a spectral army, or legendary beast or kaiju that is under their control.",
    "  A telepath might send a message or vision to all living beings on Ancerra.",
    "� A psychometabolic may permanently modify their body, perhaps even permanently changing into another creature and retaining all their memories and personality.",
    "� A psychovillain might charm an entire nation, or incite violence on a mass scale.",
    "If you use this spell to create a custom effect as opposed to replicating the effects of another spell, then you become Shaken for the rest of your life and can never cast this spell again.You cannot remove or reduce this instance of the Shaken condition in any way.",
    Upcharges: [""],
}, 
{
    spellName:"Slow Time",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering, Concentration"],
    APC: 1,
    SPC: 30,
    Range: "self",
    Requires: "Gesturel",
    Duration: "Up to 10 minutes",
    spellDescriptionParagraphs: ["For the duration, you slow the flow of time in a 30 ft radius around you. Whenever you or another creature start a turn in the affected area, that creature is Staggered and Slowed. Any creature that makes an attack in the area must roll 2d20 and use the lower roll. A creature outside the area that targets a creature in the area rolls 2d20 and takes the higher. Hazardous terrain in the area slows the movement of a creature but does not harm it. Furthermore, if you concentrate on this spell for the entire 10 minutes and are not actively in combat at any point in the spell�s duration, then you and any creature in the area gains the benefits of a Recoup, as it feels to you and those creatures as though an hour has passed."],
    Upcharges:[ ""],
}, 
{
    spellName:"Stop Time",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering"],
    APC: 1,
    SPC: 70,
    Range: "self",
    Requires: "Gesture",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["You immediately gain AP equal to triple the amount that you normally gain at the start of your turn, to a maximum of 36 AP.For the remainder of your turn, you may ignore any conditions that are affecting you; hazardous terrain slows your movement but does not damage you; you ignore a hostile creature�s passive effects that would damage you; and no creature may spend Reactive AP against you. Damaging another creature automatically hits, and counts as a Crit, but if you harm another creature then the spell ends immediately, causing you to lose any excess AP."],
    Upcharges:[ ""],
}, 
{
    spellName:"Summon Incarnation",
    prerequisites: ["Psionic Spell, Metacreativity, Summoning, Concentration, Conjuring 4"],
    APC: 20,
    SPC: 20,
    Range: "20 ft",
    Requires: "Gesture, Verbal",
    Duration: "Up to 1 hour",
    spellDescriptionParagraphs: ["When you finish casting this spell, you draw Essence from the Celestial Sea to create a quasi - real creature.This creature must have the Beast or Monstrosity tag, be a creature you have seen, and be Monster Level 5 or lower. This creature is friendly to you and your allies and will fight for you and otherwise help you for the duration of the spell, after which its essence dissipates harmlessly"],
    Upcharges: [ "+1 ML per +3 SP, to a max of 15."],
},
{
    spellName:"Warp Time",
    prerequisites: ["Psionic Spell, Psychokinetics, Altering"],
    APC: 1,
    SPC: 40,
    Range: "self",
    Requires: "Gesture",
    Duration: "Instantaneous",
    spellDescriptionParagraphs: ["ou immediately gain AP equal to double the amount of AP you normally gain at the start of your turn, to a maximum of 24 AP.Damaging another creature automatically hits, and counts as a crit.However, damaging a creature also ends this spell immediately, causing you to lose any excess AP."],
    Upcharges:[ ""],
},
                                                                                                                                                                                                                                                                                                                                                                                                                        
]
};