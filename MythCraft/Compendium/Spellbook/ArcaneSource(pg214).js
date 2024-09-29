const Arcane = {
    DescriptiveParagraphs: [
        "Fundamental Wellspring’s spiritual pulses. Psionic magic is the manipulation of one’s own Essence to impose their will on the world around them. Like psionic casters, those who use the Occult Source deal in the power of Essence. However, rather than training and enhancing their own Essence, an occult caster will steal slivers of Essence from planar entities of tremendous power. Deities and similar creatures often do not immediately notice when trace amounts of their power are stolen, as this is infinitesimally small from their perspective while it gives significant power to the thief. However, occult casters must tread carefully, for if their thievery becomes known, the consequences are often dire. Arcane magic originates from the Fundamental Wellspring, and accessing this magic directly is very dangerous. Without careful study and training, this would prove impossible for all but the most powerful or lucky would-be casters. In order to use arcane magic, one must achieve a state of metaphysical awareness called Attunation. While the actual use of arcane magic generally requires diligent study, intelligence, and careful process, the ability to use it at all requires one to be open to the Fundamental Wellspring through this Attunation.",
        "Achieving Attunation requires an enlightenment that comes primarily from the act of learning and mastering a craft. Attunation and the use of magic can vary greatly. Mages achieve Attunation most commonly through study (this is also commonly done under a master), although some may undertake other endeavors that both calm and open the mind. Troubadours may achieve Attunation through creative endeavors, such as singing, dancing, or even playwriting. Tinkerers might achieve Attunation through crafting.",
        "If you use arcane magic, consider how you achieved Attunation, and be sure that you regularly practice maintaining your Attunation. If you do not, your MC may impose detriments to your capability as an arcane caster."],
    Focus: "An arcane caster generally has a physical object on their person that acts as a mental focus for their Attunation. If this object is destroyed, you can recreate it given a week of downtime. This might be a spellbook, gem, crystal, instrument, tool, or some other meaningful or sentimental item.",
    IntentParagraphs: [
        "Arcane magic operates through the intent of the caster directly and not through a proxy. The act of using arcane magic is an attempt to change reality to the benefit of the caster. For example, one caster may prefer their spellbook well-worn, with pages dog-eared and bits highlighted, while another prefers a pristine, almost unused quality. The second caster, upon casting the Mend cantrip on the spellbook, may undo all the wear and tear, and the first caster may cast the same cantrip on it again, restoring all of the &apos;love.&apos;",
        "If you are unsure of the effects of a spell or cantrip, consider the caster’s intent. Arcane casters who attempt to use simple tricks to cause great effect or harm; fabricate actual intent disingenuously (such as the mental trick of convincing oneself they consider a book “fixed” when it is clean, for the purpose of passing off a used book as new); or practice pedantry will likely be blocked from Attunation and the ability to do so, or at the MC’s discretion, may catch the eye of a planar being who thrives on such trickery."
    ],
    BacklashParagraphs:
        [
            "Arcane magic drawn directly from the Fundamental Wellspring is inherently volatile. When you roll a 1 to hit when casting a spell or cantrip, the magic automatically fails and you take damage equal to its SPC (min 1). This damage immediately ends your turn, and you do not carry over any AP and as such cannot act reactively until the end of your next turn.",
            "If you take backlash damage that exceeds your current level, you may roll 1d20; on a roll of 10 or higher, you only take damage equal to your level.",
            "If you do not have your Focus when you cast arcane magic, you trigger backlash on a roll of 1 or 2 and take three times the damage (after accounting for your character level, if relevant)."
        ],
    CriticalCasts: "If you crit (link) on a spell, then you reduce the SPC by 10. If the spell costs fewer than 10 SP, then you expend no SP.",
    MagicTypes: {
        additional: "In addition to spells, arcane magic gives you access to cantrips.",
        cantrip: { hasCantrip: true, cantripText: "Cantrips cost no SP and you can use them as many times as you wish." }
    },
    ArcaneTags: {
        descriptionTest: "These tags are referenced in various arcane spells and cantrips.",
        tagsList: [
            { tagName: "Arcane Power", TagDescription: "Arcane Power is the total number of talent points you have spent on arcane talents as a result of leveling up, as well as the number of talent points you have spent in certain classes and class stacks. Each class or stack will inform you if it contributes to Arcane Power." },
            { tagName: "Arcane Ritua;", TagDescription: "If you know a spell with the arcane ritual tag, you may scribe that spell into a book by spending at least one hour doing so. Spells recorded in this way can be cast without expending SP if the SPC does not exceed your maximum SP. This requires the spell’s full casting time + 10 minutes. You can cast one arcane ritual per day in this way, regardless of how many arcane rituals you know." },
            { tagName: "Fundamentla", TagDescription: "Spells with the fundamental tag can only be dispelled using the Unravel Magic spell from the Arcane Source." },
        ]
    },
    TalentStacks: [
        {
            displayName: "Student of the Arcane",
            StackName: "Arcane Talent",
            prerequisites: ["Arcane", "Magic Entry"],
            isRepeatable: false,
            incompatableWith: [],
            flavortext: "Having tapped into the Fundamental Well and reach Attunation, you gain the following benefits. Spell Points. Gain 10 SP if this is the first Magic Entry talent you take. Otherwise, gain 5 SP. Each time you level up and take a talent with the Arcane tag, you gain +5 maximum SP.",
            BenefitList: [
                { benefitName: "Arcane Power", BenefitDescription: "Gain 1 Arcane Power. Each time you level up take a talent with the Arcane tag, you gain +1 Arcane Power." },
                { benefitName: "Arcane Spells", BenefitDescription: "You know a number of arcane cantrips and spells equal to your Arcane Power + your INT. Each time this number increases, learn another arcane cantrip or spell." },
                { benefitName: "Student", BenefitDescription: "Gain access to the arcane stack. Gain two talents from the arcane stack. (You do not gain additional spell points from these selections.)" },
                { benefitName: "Arcanist", BenefitDescription: "Your magic attribute is INT unless another talent says otherwise." },

            ],

        },
        {
            displayName: "",
            StackName: "Arcane Cantrips",
            prerequisites: ["Arcane Talent"],
            isRepeatable: true,
            incompatableWith: [],
            flavortext: " Gain three arcane cantrips.",
            BenefitList: [],
        },
        {
            displayName: "",
            StackName: "Arcane Knowledge",
            prerequisites: ["Arcane Talent"],
            isRepeatable: true,
            incompatableWith: [],
            flavortext: "Gain one arcane spell or cantrip, and gain +4 Skill Points that you can assign to any skill with the Knowledge tag.",
            BenefitList: [],
        },
        {
            displayName: "",
            StackName: "Arcane Magic",
            prerequisites: ["Arcane Talent"],
            isRepeatable: true,
            incompatableWith: [],
            flavortext: "Gain two arcane cantrips and one arcane spell.",
            BenefitList: [],
        },
        {
            displayName: "",
            StackName: "Arcane Spells",
            prerequisites: ["Arcane Talent"],
            isRepeatable: true,
            incompatableWith: [],
            flavortext: "Gain two arcane spells.",
            BenefitList: [],
        },
        {
            displayName: "",
            StackName: "Clear Thoughts",
            prerequisites: ["Arcane Talent"],
            isRepeatable: true,
            incompatableWith: [],
            flavortext: "You permanently lose 3d4 maximum HP and can reallocate all talent points that have given you Arcane Power. You cannot reassign Student of the Arcane or Clear Thoughts. If reassigning would cause you to know fewer spells, you can choose which spells you forget. You must spend 8 uninterrupted hours in Attunation to achieve this, and rest for 8 hours following this process. If you are interrupted, you must start the process over. Your talent point changes do not take effect until you’ve finished the entire process. Taking this talent twice does allow you to reallocate the previous uses of this talent, but does not cause you to regain the lost maximum HP.",
            BenefitList: [],
        },
        {
            displayName: "",
            StackName: "",
            prerequisites: ["Arcane Talent"],
            isRepeatable: true,
            incompatableWith: ["Cold Focus", "Necrotic Focus"],
            flavortext: "Your spells that deal fire damage now ignore Resist, but you can no longer cast spells that deal cold damage.",
            BenefitList: [],
        }


    ],
    explinationText: {
        headding: "Arcane Cantrips",
        description: "When you learn a cantrip, choose from this list. Note that cantrips cost AP, but do not cost SP. Also note that some cantrips grow stronger when you have a certain number of levels in the Arcane."
    },
    Cantrips: [
        {
            cantripName: "Beam of Fire",
            prerequisites: ["Arcane Cantrip, Evoking"],
            APC: 3,
            Range: 30,
            Requires: "Gesture, Visual, Line of Effect",
            Duration: "Instantaneous",
            cantripDescription: "You unleash a streak of flame. Make a magic attack against a creature’s AR. If you hit, the creature takes 1d10 fire damage.",
            itallics: "The power of this cantrip increases when you reach certain Arcane Power levels:",
            scaling: [
                { level: "Arcane 3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 7", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 12", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 18", inproveRange: 0, improveDamage: "1d10", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "1d10", addEffect: "" },
            ]
        }, {
            cantripName: "Frostbite",
            prerequisites: ["Arcane Cantrip, Evoking"],
            APC: 2,
            Range: 60,
            Requires: "Gesture, Line of Effect",
            Duration: "Instantaneous",
            cantripDescription: "You whisper a chill breath, causing a lattice of frost to coat an enemy. Make a magic attack against a creature’s FORT. If you hit, the creature takes 1d6 cold damage.",
            itallics: "The power of this cantrip increases when you reach certain Arcane Power levels:",
            scaling: [
                { level: "Arcane 3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 7", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 12", inproveRange: 0, improveDamage: "", addEffect: "Additionally, on a hit, the creature gains the Chilled condition until the end of its next turn." },
                { level: "Arcane 18", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "1d6", addEffect: "" },
            ]
        }
    ],
    Prayers:[],
    Rituals:[],
Spells:[
{
    spellName:"Air Bubble",
    prerequisites: ["Arcane Ritual, Spell, Altering, Conjuring 2"],
    APC: 12,
    SPC: 8,
    Range: Touch,
    Requires: Gesture,
    Duration: "1 hour",
    spellDescriptionParagraphs:["Touch yourself or one willing creature. For the duration, the affected creature cannot be affected by the Suffocating condition and is considered to have access to breathable air, regardless of its immediate surroundings."],
    Upcharges:[ "+1 additional willing creature per 6 SP."],
},{
    spellName:"Arcane Column",
    prerequisites: ["Arcane Spell, Altering"],
    APC: 2,
    SPC: 18,
    Range: "1 mile",
    Requires: "Gesture, Visual",
    Duration: "Up to 10 minutes",
    spellDescription:[
        "Choose one surface made of earth or stone that is no more than 500 ft x 500 ft wide, and at least 30 ft deep. When you first cast this spell, and for the duration, you can cause stone pillars to erupt from that surface.",
        "Pillars are always 5 ft in diameter. When a pillar erupts from the ground, you may choose whether it does so with explosive force or at a controlled pace. You may also choose the pillar’s height, up to 30 ft.",
        "If causing a pillar to appear with explosive force, make a magic attack against the ANT of a creature in that space. On a hit, the creature takes 1d12 damage, or 2d12 if the pillar pins them against a ceiling, floor, or wall. On a miss, the creature automatically moves to the nearest unoccupied space and the pillar proceeds without hitting it.",
        "If causing a pillar to appear at a controlled pace, you do not make any attack rolls and the creatures on the pillar rise with it.",
        "When you first cast this spell, cause one pillar to appear. On that same turn, and on subsequent turns for the duration, you may spend 2 AP to cause another pillar to appear.",
        "You may end this spell early for free. When doing so you decide if it lowers slowly or rapidly. If it lowers rapidly creatures on the pillar start falling. If this spell completes the duration the pillar slowly crumbles, becoming passable after 24 hours."],
    Upcharges:[" +5 ft Radius per 4 SP."," +30 ft Height per 18 SP."]
},{
   spellName:"Arcane Disguise",
    prerequisites: ["Arcane Spell, Illusory, Conjuring 1"],
    APC: 2,
    SPC: 5,
    Range: "Self",
    Requires: "Gesture",
    Duration: "10 minutes",
    spellDescription:[
        "You magically disguise yourself to resemble another humanoid creature that is no more than one Size smaller or larger than you. This disguise does not hold up to physical inspection as it does not actually change your form. For example, if you make yourself appear to have short hair, but someone feels your braid, then they will know that you are magically disguised. You can similarly change the physical appearance, but not the actual size or shape, of the clothes and equipment on your person.",
        "For the duration of the spell, you may spend 2 AP and 3 SP to change the form of your disguise again."
    ],
    Upcharges:[ "+5 minutes per +5 SP."],
    
},      
]
};