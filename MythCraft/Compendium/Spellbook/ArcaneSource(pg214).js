const Arcane = {
    "DescriptiveParagraphs": [
        "Fundamental Wellspring’s spiritual pulses. Psionic magic is the manipulation of one’s own Essence to impose their will on the world around them. Like psionic casters, those who use the Occult Source deal in the power of Essence. However, rather than training and enhancing their own Essence, an occult caster will steal slivers of Essence from planar entities of tremendous power. Deities and similar creatures often do not immediately notice when trace amounts of their power are stolen, as this is infinitesimally small from their perspective while it gives significant power to the thief. However, occult casters must tread carefully, for if their thievery becomes known, the consequences are often dire. Arcane magic originates from the Fundamental Wellspring, and accessing this magic directly is very dangerous. Without careful study and training, this would prove impossible for all but the most powerful or lucky would-be casters. In order to use arcane magic, one must achieve a state of metaphysical awareness called Attunation. While the actual use of arcane magic generally requires diligent study, intelligence, and careful process, the ability to use it at all requires one to be open to the Fundamental Wellspring through this Attunation.",
        "Achieving Attunation requires an enlightenment that comes primarily from the act of learning and mastering a craft. Attunation and the use of magic can vary greatly. Mages achieve Attunation most commonly through study (this is also commonly done under a master), although some may undertake other endeavors that both calm and open the mind. Troubadours may achieve Attunation through creative endeavors, such as singing, dancing, or even playwriting. Tinkerers might achieve Attunation through crafting.",
        "If you use arcane magic, consider how you achieved Attunation, and be sure that you regularly practice maintaining your Attunation. If you do not, your MC may impose detriments to your capability as an arcane caster."],
    "Focus": "An arcane caster generally has a physical object on their person that acts as a mental focus for their Attunation. If this object is destroyed, you can recreate it given a week of downtime. This might be a spellbook, gem, crystal, instrument, tool, or some other meaningful or sentimental item.",
    "IntentParagraphs": [
        "Arcane magic operates through the intent of the caster directly and not through a proxy. The act of using arcane magic is an attempt to change reality to the benefit of the caster. For example, one caster may prefer their spellbook well-worn, with pages dog-eared and bits highlighted, while another prefers a pristine, almost unused quality. The second caster, upon casting the Mend cantrip on the spellbook, may undo all the wear and tear, and the first caster may cast the same cantrip on it again, restoring all of the &apos;love.&apos;",
        "If you are unsure of the effects of a spell or cantrip, consider the caster’s intent. Arcane casters who attempt to use simple tricks to cause great effect or harm; fabricate actual intent disingenuously (such as the mental trick of convincing oneself they consider a book “fixed” when it is clean, for the purpose of passing off a used book as new); or practice pedantry will likely be blocked from Attunation and the ability to do so, or at the MC’s discretion, may catch the eye of a planar being who thrives on such trickery."
    ],
    "BacklashParagraphs":
        [
            "Arcane magic drawn directly from the Fundamental Wellspring is inherently volatile. When you roll a 1 to hit when casting a spell or cantrip, the magic automatically fails and you take damage equal to its SPC (min 1). This damage immediately ends your turn, and you do not carry over any AP and as such cannot act reactively until the end of your next turn.",
            "If you take backlash damage that exceeds your current level, you may roll 1d20; on a roll of 10 or higher, you only take damage equal to your level.",
            "If you do not have your Focus when you cast arcane magic, you trigger backlash on a roll of 1 or 2 and take three times the damage (after accounting for your character level, if relevant)."
        ],
    "CriticalCasts": "If you crit (link) on a spell, then you reduce the SPC by 10. If the spell costs fewer than 10 SP, then you expend no SP.",
    "MagicTypes": {
        "additional": "In addition to spells, arcane magic gives you access to cantrips.",
        "cantrip": { "HasCantrip": true, "cantripText": "Cantrips cost no SP and you can use them as many times as you wish." }
    },
    "ArcaneTags": {
        "DescriptionTest": "These tags are referenced in various arcane spells and cantrips.",
        "TagsList": [
            { "tagName": "Arcane Power", "TagDescription": "Arcane Power is the total number of talent points you have spent on arcane talents as a result of leveling up, as well as the number of talent points you have spent in certain classes and class stacks. Each class or stack will inform you if it contributes to Arcane Power." },
            { "tagName": "Arcane Ritua;", "TagDescription": "If you know a spell with the arcane ritual tag, you may scribe that spell into a book by spending at least one hour doing so. Spells recorded in this way can be cast without expending SP if the SPC does not exceed your maximum SP. This requires the spell’s full casting time + 10 minutes. You can cast one arcane ritual per day in this way, regardless of how many arcane rituals you know." },
            { "tagName": "Fundamentla", "TagDescription": "Spells with the fundamental tag can only be dispelled using the Unravel Magic spell from the Arcane Source." },
        ]
    },
    "TalentStacks": [
        {
            "DisplayName": "Student of the Arcane",
            "StackName": "Arcane Talent",
            "prerequisites": ["Arcane", "Magic Entry"],
            "isRepeatable": false,
            "incompatableWith": [],
            "flavortext": "Having tapped into the Fundamental Well and reach Attunation, you gain the following benefits. Spell Points. Gain 10 SP if this is the first Magic Entry talent you take. Otherwise, gain 5 SP. Each time you level up and take a talent with the Arcane tag, you gain +5 maximum SP.",
            "BenefitList": [
                { "BenefitName": "Arcane Power", "BenefitDescription": "Gain 1 Arcane Power. Each time you level up take a talent with the Arcane tag, you gain +1 Arcane Power." },
                { "BenefitName": "Arcane Spells", "BenefitDescription": "You know a number of arcane cantrips and spells equal to your Arcane Power + your INT. Each time this number increases, learn another arcane cantrip or spell." },
                { "BenefitName": "Student", "BenefitDescription": "Gain access to the arcane stack. Gain two talents from the arcane stack. (You do not gain additional spell points from these selections.)" },
                { "BenefitName": "Arcanist", "BenefitDescription": "Your magic attribute is INT unless another talent says otherwise." },

            ],

        },
        {
            "DisplayName": "",
            "StackName": "Arcane Cantrips",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": [],
            "flavortext": " Gain three arcane cantrips.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Arcane Knowledge",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": [],
            "flavortext": "Gain one arcane spell or cantrip, and gain +4 Skill Points that you can assign to any skill with the Knowledge tag.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Arcane Magic",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": [],
            "flavortext": "Gain two arcane cantrips and one arcane spell.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Arcane Spells",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": [],
            "flavortext": "Gain two arcane spells.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Clear Thoughts",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": [],
            "flavortext": "You permanently lose 3d4 maximum HP and can reallocate all talent points that have given you Arcane Power. You cannot reassign Student of the Arcane or Clear Thoughts. If reassigning would cause you to know fewer spells, you can choose which spells you forget. You must spend 8 uninterrupted hours in Attunation to achieve this, and rest for 8 hours following this process. If you are interrupted, you must start the process over. Your talent point changes do not take effect until you’ve finished the entire process. Taking this talent twice does allow you to reallocate the previous uses of this talent, but does not cause you to regain the lost maximum HP.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fire Focus",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Cold Focus", "Necrotic Focus"],
            "flavortext": "Your spells that deal fire damage now ignore Resist, but you can no longer cast spells that deal cold damage.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fire Focus II",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fire Focus"],
            "flavortext": "You gain +1 to hit with spells that deal fire damage, you gain Resist Fire 3, and you gain Vulnerable Cold 1.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fire Focus III",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fire Focus II"],
            "flavortext": "You gain an additional +1 to hit with spells that deal fire damage, and your Resist Fire increases to 6. Your Vulnerable Cold value increases to 2.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fire Focus IV",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fire Focus III"],
            "flavortext": "You gain an additional +1 to hit with spells that deal fire damage, you gain Immune Fire, and your Vulnerable Cold value increases to 3.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Cold Focus",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fire Focus", "Necrotic Focus"],
            "flavortext": "Your spells that deal cold damage now ignore Resist, but you can no longer cast spells that deal fire damage.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Cold Focus II",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Cold Focus"],
            "flavortext": "You gain +1 to hit with spells that deal cold damage, you gain Resist Cold 3, and you gain Vulnerable Fire 2.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Cold Focus III",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Cold Focus II"],
            "flavortext": "You gain an additional +1 to hit with spells that deal cold damage, and your Resist Cold increases to 6. Your Vulnerable Fire value increases to 2.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Cold Focus IV",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Cold Focus III"],
            "flavortext": "You gain an additional +1 to hit with spells that deal cold damage, you gain Immune Cold, and your Vulnerable Fire value increases to 3.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fundamental Recovery",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": [],
            "flavortext": "When you Recoup, you may regain 1d4 SP. If you do, you do not naturally regain HP during that Recoup.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fundamental Recovery II",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fundamental Recovery"],
            "flavortext": "The amount of SP you regain increases by +1d4.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fundamental Recovery III",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fundamental Recovery II"],
            "flavortext": "When you use your Fundamental Recovery ability, you can still naturally regain HP as part of the same Recoup.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fundamental Recovery IV",
            "prerequisites": ["Repeatable", "Fundamental Recovery III"],
            "isRepeatable": true,
            "incompatableWith": ["Fire Focus"],
            "flavortext": "The amount of SP you regain increases again by +1d4.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Necrotic Focus",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Cold Focus", "Fire Focus"],
            "flavortext": "Your spells that deal necrotic damage now ignore Resist, but you can no longer cast magic that deals radiant damage.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Necrotic Focus II",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Necrotic Focus"],
            "flavortext": "The first time you deal necrotic damage with a spell after Taking a Rest, gain Shield HP equal to the amount of damage you dealt to one creature.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Necrotic Focus III",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Necrotic Focus II"],
            "flavortext": "The first time you deal necrotic damage with a spell after Recouping, gain Shield HP equal to the amount of damage you dealt to one creature.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Necrotic Focus IV",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Necrotic Focus III"],
            "flavortext": "When you deal necrotic damage with a spell, gain Shield HP equal to the amount of damage you dealt to one creature.",
            "BenefitList": [],
        },
        {
            "DisplayName": "",
            "StackName": "Fire Focus II",
            "prerequisites": ["Arcane Talent"],
            "isRepeatable": true,
            "incompatableWith": ["Fire Focus"],
            "flavortext": "",
            "BenefitList": [],
        }


    ],
    explinationText: {
        headding: "Arcane Cantrips",
        description: "When you learn a cantrip, choose from this list. Note that cantrips cost AP, but do not cost SP. Also note that some cantrips grow stronger when you have a certain number of levels in the Arcane."
    },
    Cantrips: [
        {
            "CantripName": "Beam of Fire",
            "prerequisites": ["Arcane Cantrip, Evoking"],
            "APC": 3,
            "Range": 30,
            "Requires": "Gesture, Visual, Line of Effect",
            "Duration": "Instantaneous",
            "CantripDescription": "You unleash a streak of flame. Make a magic attack against a creature’s AR. If you hit, the creature takes 1d10 fire damage.",
            "Itallics": "The power of this cantrip increases when you reach certain Arcane Power levels:",
            "scaling": [
                { level: "Arcane 3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 7", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 12", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 18", inproveRange: 0, improveDamage: "1d10", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "1d10", addEffect: "" },
            ]
        }, {
            "CantripName": "Frostbite",
            "prerequisites": ["Arcane Cantrip, Evoking"],
            "APC": 2,
            "Range": 60,
            "Requires": "Gesture, Line of Effect",
            "Duration": "Instantaneous",
            "CantripDescription": "You whisper a chill breath, causing a lattice of frost to coat an enemy. Make a magic attack against a creature’s FORT. If you hit, the creature takes 1d6 cold damage.",
            "Itallics": "The power of this cantrip increases when you reach certain Arcane Power levels:",
            "scaling": [
                { level: "Arcane 3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 7", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 12", inproveRange: 0, improveDamage: "", addEffect: "Additionally, on a hit, the creature gains the Chilled condition until the end of its next turn." },
                { level: "Arcane 18", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "1d6", addEffect: "" },
            ]
        }, {
            "CantripName": "Grave Whisper",
            "prerequisites": ["Arcane Cantrip, Evoking"],
            "APC": 3,
            "Range": 40,
            "Requires": "Visual, Verbal, Line of Sight",
            "Duration": "Instantaneous",
            "CantripDescription": "With a word laced with angry darkness, you prepare a creature for death.Make a magic attack roll against a creature’s FORT.If you hit, the creature takes 1d8 necrotic damage.On a crit, the creature gains the Broken condition until the end of your next turn with you as the source of its fear.",
            "Itallics": "The power of this Cantrip increases when you reach certain Arcane Power levels: ",
            "scaling": [
                { level: "Arcane 3", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 7", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 12", inproveRange: 0, improveDamage: "", addEffect: "Only costs 2 AP" },
                { level: "Arcane 18", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "1d8", addEffect: "" },
            ]
        }, {
            "CantripName": "Illuminate",
            "prerequisites": ["Arcane Cantrip, Evoking"],
            "APC": 1,
            "Range": 40,
            "Requires": "Gesture,",
            "Duration": "Up to 1 Minute",
            "CantripDescription": "Bring a brilliant point of light into existence. Choose an unoccupied point within range. Create an orb of light. You may choose its color when you cast it.The light sheds bright light for up to a 20 ft radius and dim light for double the distance of the bright light.Alternatively, you may choose for the light to only shed dim light up to a 20 ft radius and no bright light. You may spend 1 AP to move the light up to 20 ft. If you cast a new light while you have another light active from this cantrip, the old light immediately extinguishes. You may also choose to snuff out your light for 1 AP.",
            "Itallics": "The power of this Cantrip increases when you reach certain Arcane Power levels: ",
            "scaling": [
                { level: "Arcane 3", inproveRange: 20, improveDamage: "", addEffect: "" },
                {
                    level: "Arcane 7", inproveRange: 0, improveDamage: "", addEffect: "Additionally, the maximum radius of bright light increases by 10 ft."
                },
                { level: "Arcane 12", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 18", inproveRange: 20, improveDamage: "", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "", addEffect: "Additionally, the maximum radius of bright light increases by 10 ft." },
            ]
        }, {
            "CantripName": "Lend Power",
            "prerequisites": ["Arcane Cantrip,Altering"],
            "APC": All,
            "Range": Touch,
            "Requires": "Line of Effect",
            "Duration": "Instantaneous",
            "CantripDescription": "Lend all of your remaining AP to a creature that is Conjuring within range.This AP goes towards the spell that is being conjured.If this completes the APC and the Conjuring minimum has already been fulfilled, then the spell is immediately cast.Any leftover AP is lost.",
            "Itallics": "",
            "scaling": []
        }, {
            "CantripName": "Mend",
            "prerequisites": ["Arcane Cantrip, Alchemy, Conjuring 6"],
            "APC": 1,
            "Range": "Touch",
            "Requires": "Gesture, Visual, Line of Effect",
            "Duration": "Instantaneous",
            "CantripDescription": "When you complete casting this spell, you may mend a broken object or a small surface of a cracked wall, ceiling, floor, or the like.You can only mend an object that would fit inside a 5 ft 3 area, or a surface no larger than 10 ft 2 .You can only mend an object or surface if all of its pieces are with you and within the area that you mend.",
            "Itallics": "The power of this cantrip increases when you reach certain Arcane Power levels:",
            "scaling": [
                { level: "Arcane 7", inproveRange: 0, improveDamage: "10 ft 3 or 20 ft 2.", addEffect: "" },
                { level: "Arcane 18", inproveRange: 0, improveDamage: "15 ft 3 or 30 ft 2", addEffect: "" },
                { level: "Arcane 25", inproveRange: 0, improveDamage: "10 ft 3 or 20 ft 2.", addEffect: "" },
            ]
        }, {
            "CantripName": "Minor Conjuration",
            "prerequisites": ["Arcane Cantrip, Alchemy, Conjuring 60 (10 minutes)"],
            "APC": 1,
            "Range": 15,
            "Requires": "Gesture,Visual, Line of Effect",
            "Duration": " 1 hour",
            "CantripDescription": "Create a simple, small, crude object with no mechanical or moving parts. The object cannot be longer than 1 foot in any dimension.These objects are very fragile, and if they are used as an improvised tool or weapon, roll a 1d20, and on a 9 or lower the object breaks.Once you have used conjuration you cannot use it again until the duration is over, whether the object is broken or not.",
            "Itallics": "",
            "scaling": []
        }, {
            "CantripName": "Prestidigitation",
            "prerequisites": ["Arcane Cantrip, Evoking"],
            "APC": 1,
            "Range": 15,
            "Requires": "Gesture,Visual, Line of Effect",
            "Duration": "1 hour",
            "CantripDescription": "Perform a minor trick. The effects are very limited and cannot directly cause harm.Any changes are undone after one hour. • Slowly lift or move an object that weighs less than 1 lb • Color, clean, slightly chill, slightly warm, or soil items in a 1 ft cube that are not being worn or carried by an unwilling creature • Ignites a flammable object that is not being worn or carried with non - magical flame • Create a harmless puff of wind, powerful enough to blow out a candle.",
            "Itallics": "",
            "scaling": []
        }, {
            "CantripName": "Sensory Illusion",
            "prerequisites": ["Arcane Cantrip, Illusory"],
            "APC": 1,
            "Range": 30,
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "1 minute",
            "CantripDescription": "Create a harmless sensory effect at a point you can see within range.This can be a sound, odor, smell, or still visual illusion, within a 6 ft cube.Visual illusions cannot produce light and dissipate when an object passes through it.",
            "Itallics": "",
            "scaling": []
        }, {
            "CantripName": "Signature",
            "prerequisites": ["Arcane Cantrip, Illusory, Fundamental, Conjuring 60 (10 minutes) "],
            "APC": 1,
            "Range": "Touch",
            "Requires": "Gesture, Visual,Line of Effect",
            "Duration": "Instantaneous",
            "CantripDescription": "Spend the casting time creating a signature completely unique to you.You can choose if the mark is visible or invisible.You can have a number of signatures equal to your Arcane Power active, and can sense the location of your signatures, although no additional information(such as which signature you are sensing) a number of miles away equal to your Arcane Power Level.You can dismiss a single Signature by touching it, and if you try to cast a Signature beyond the number of Signatures you can maintain, it fails. You can dismiss all active Signatures without needing to touch them. Casters can magically sense if a Signature is their own or a forgery; however, others must rely on its visual appearance.",
            "Itallics": "",
            "scaling": []
        }


    ],
    Prayers: [],
    Rituals: [],
    Spells: [
        {
            "SpellName": "Air Bubble",
            "prerequisites": ["Arcane Ritual, Spell, Altering, Conjuring 2"],
            "APC": 12,
            "APCNote": "",
            "SPC": 8,
            "Range": Touch,
            "Requires": Gesture,
            "Duration": "1 hour",
            "spellDescriptionParagraphs": ["Touch yourself or one willing creature. For the duration, the affected creature cannot be affected by the Suffocating condition and is considered to have access to breathable air, regardless of its immediate surroundings."],
            "Upcharges": ["+1 additional willing creature per 6 SP."],
        }, {
            "SpellName": "Arcane Column",
            "prerequisites": ["Arcane Spell, Altering"],
            "APC": 2,
            "APCNote": "",
            "SPC": 18,
            SPCNote: "",
            "Range": "1 mile",
            "Requires": "Gesture, Visual",
            "Duration": "Up to 10 minutes",
            spellDescription: [
                "Choose one surface made of earth or stone that is no more than 500 ft x 500 ft wide, and at least 30 ft deep. When you first cast this spell, and for the duration, you can cause stone pillars to erupt from that surface.",
                "Pillars are always 5 ft in diameter. When a pillar erupts from the ground, you may choose whether it does so with explosive force or at a controlled pace. You may also choose the pillar’s height, up to 30 ft.",
                "If causing a pillar to appear with explosive force, make a magic attack against the ANT of a creature in that space. On a hit, the creature takes 1d12 damage, or 2d12 if the pillar pins them against a ceiling, floor, or wall. On a miss, the creature automatically moves to the nearest unoccupied space and the pillar proceeds without hitting it.",
                "If causing a pillar to appear at a controlled pace, you do not make any attack rolls and the creatures on the pillar rise with it.",
                "When you first cast this spell, cause one pillar to appear. On that same turn, and on subsequent turns for the duration, you may spend 2 AP to cause another pillar to appear.",
                "You may end this spell early for free. When doing so you decide if it lowers slowly or rapidly. If it lowers rapidly creatures on the pillar start falling. If this spell completes the duration the pillar slowly crumbles, becoming passable after 24 hours."],
            "Upcharges": [" +5 ft Radius per 4 SP.", " +30 ft Height per 18 SP."]
        }, {
            "SpellName": "Arcane Disguise",
            "prerequisites": ["Arcane Spell, Illusory, Conjuring 1"],
            "APC": 2,
            "APCNote": "",
            "SPC": 5,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture",
            "Duration": "10 minutes",
            spellDescription: [
                "You magically disguise yourself to resemble another humanoid creature that is no more than one Size smaller or larger than you. This disguise does not hold up to physical inspection as it does not actually change your form. For example, if you make yourself appear to have short hair, but someone feels your braid, then they will know that you are magically disguised. You can similarly change the physical appearance, but not the actual size or shape, of the clothes and equipment on your person.",
                "For the duration of the spell, you may spend 2 AP and 3 SP to change the form of your disguise again."
            ],
            "Upcharges": ["+5 minutes per +5 SP."],

        }, {
            "SpellName": "Arcane Shield",
            "prerequisites": ["Arcane Spell, Warding"],
            "APC": 1,
            "APCNote": "which you can spend reactively when targeted by a spell or magical effect.",
            "SPC": 3,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture",
            "Duration": "1 round",
            spellDescription: [
                "Gain Resist Magic 3. This applies to all spells, cantrips, chants, prayers, rituals, and invocations, as well as any magical effects that fall outside of one of the five sources. You retain this benefit until the end of your next turn.",
            ],
            "Upcharges": ["+2 Resist Magic per +4 SP"],

        }, {
            "SpellName": "Arcane Swap",
            "prerequisites": ["Arcane Spell, Altering"],
            "APC": 1,
            "APCNote": "",
            "SPC": 10,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": " Verbal, Visual, Line of Effect",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a creature within range that is no more than one Size larger or smaller than you.Make a magic attack against that creature’s ANT.If you hit, swap places with that creature.If you miss, you do not expend SP but cannot cast this spell again until the start of your next turn. ",
                "The spell succeeds automatically if a creature is willing to trade places with you."
            ],
            "Upcharges": ["+20 ft range per +5 SP"],

        }, {
            "SpellName": "Carrier",
            "prerequisites": ["Arcane Spell,  Arcane Ritual, Altering, Conjuring 1"],
            "APC": 5,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a flat surface, such as a table or rug, that is not larger than a 10 ft square.It gains limited sentience for the duration, becoming a “carrier.” It gains following benefits: • It gains a speed of 20 ft • It can hover 5 ft off the ground • It can carry weight equal to 100 lbs x your magic attribute; if it holds weight in excess of this, then it falls to the ground and cannot move • It has + 5 DT • It has DR 5 / Psionic and Occult",
                "The carrier follows your nonverbal commands and acts immediately after you in Initiative.The MC will determine its stats based on the stats of a typical inanimate object of its kind, aside from the above modifications.",
                "If you cast this spell on the same object at least once per day for a year, the effects become permanent.",
            ],
            "Upcharges": [" +30 minutes duration per +6 SP"],

        }, {
            "SpellName": "Circle Of Haste",
            "prerequisites": ["Arcane Spell,  Enchanting"],
            "APC": 2,
            "APCNote": "",
            "SPC": 16,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "1 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range. A 10 ft radius circle blazes into existence, causing visible, temporary runes to glow on the ground along its circumference.For the duration, creatures within the circle can spend 1 fewer AP to perform actions (to a minimum of 1 AP per action).Creatures that do not use AP gain one additional action from the topmost section of their possible actions. Whenever a creature exits the circle, that creature loses all remaining AP or actions and their turn ends."
            ],
            "Upcharges": ["+5 ft radius per +6 SP"],

        }, {
            "SpellName": "Circle Of Power",
            "prerequisites": ["Arcane Spell, Verbal, Visual"],
            "APC": 6,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Gesture",
            "Duration": "1 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range. A 10 ft radius circle blazes into existence, causing visible, temporary runes to glow on the ground along its circumference.For the duration, creatures within the circle deal additional damage equal to your magic attribute whenever they deal damage."
            ],
            "Upcharges": ["+5 ft radius per +4 SP."],

        }, {
            "SpellName": "Circle Of Warding",
            "prerequisites": ["Arcane Spell, Warding, Conjuring 1"],
            "APC": 5,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "30 ft",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "1 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range. A 10 ft radius circle blazes into existence, causing visible, temporary runes to glow on the ground along its circumference.The corresponding sphere becomes a transparent magical force barrier.For the duration, this circle disrupts Line of Effect on spells and provides complete Cover against ranged attacks. Furthermore, stepping over the perimeter of the circle immediately ends a creature’s movement.Creatures within the circle are Grounded. ",
                "A creature may attack a 5 ft square area of the circle of warding.Each 5 ft of the Circle has an AR of 15, has 20 HP, and has DT 30."
            ],
            "Upcharges": ["+5 ft radius per +6 SP"],

        }, {
            "SpellName": "Clear Mind",
            "prerequisites": ["Arcane Spell,  Arcane Ritual, Altering, Conjuring 360 (1 Hour)"],
            "APC": 1,
            "APCNote": "",
            "SPC": 4,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture,Verbal, Visual, Line of Effect, Line of Sight",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "This spell can only be cast using the arcane ritual tag. By spending 1 hour casting this spell, you clear your mind. Until you decide to end these effects by spending 2 AP or until you Take a Rest, you maintain these effects: • You cannot suffer the negative effects of Backlash • You cannot benefit from the positive effects of Critical Casts.",
                "The effects of this Spell also end early if you suffer the Broken, Charmed, Enthralled, or Frightened conditions as the result of an occult or psionic spell or effect."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Conceal Spell",
            "prerequisites": ["Arcane Spell, Illusory, Metamagic"],
            "APC": 2,
            "APCNote": "",
            "SPC": 14,
            SPCNote: "",
            "Range": "Self",
            "Requires": "",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "This spell can be cast on a mote (such as from Delay Spell or Steal Spell) or simultaneously with another spell.The target spell becomes invisible to all creatures except for you.When the spell activates, it is silent and invisible for the duration unless it deals damage."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Conduit",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Enchanting, Conjuring 3"],
            "APC": 10,
            "APCNote": "",
            "SPC": 10,
            SPCNote: "",
            "Range": "Special",
            "Requires": "Gesture,Verbal",
            "Duration": "1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell, pick one willing creature with whom you are familiar.For the purposes of this spell, you are familiar with a creature if you have spent at least 10 minutes conversing with them. ",
                "For the duration, that creature may speak through your facilities as though it were standing in your place.It may also hear and see through your senses.While the creature is actively speaking through you, you cannot verbalize in any way.If the creature speaks through you while you are maintaining a spell that requires verbal components, that spell ends."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Contest Spell",
            "prerequisites": ["Arcane Spell,Warding"],
            "APC": 2,
            "APCNote": "reactive AP, which you spend when another creature within range casts a spell",
            "SPC": 0.5,
            SPCNote: "½ the SP of the triggering spell",
            "Range": "60 ft",
            "Requires": "Visual, Line of Effect",
            "Duration": " Instantaneous",
            rollable: { canRoll: true, },
            spellDescription: [
                "Make a magic attack roll; the caster who triggered this spell does the same.If the caster has the Divine or Primal tag, you add + 2 to your roll, but if they have the Occult or Psionic tag, then they add + 2. If they have the Arcane tag, roll unmodified.If you roll higher, then the triggering caster’s spell fails.If you roll lower, then their spell succeeds.The loser of the contest does not expend SP "
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Corpse Explosion",
            "prerequisites": ["Arcane Spell, Evoking"],
            "APC": 3,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose one inanimate corpse within range and cause its decaying flesh and rotting organs to explode in a 10 ft radius.Make a magic attack against the REF of each creature within range.A creature takes 4d6 corrosive damage on a hit, and ½ as much on a miss. ",
                "Additionally, the corpse is now reduced to a mere skeleton of bleached bones with no remaining organs. "
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Create lesser Golem",
            "prerequisites": ["Arcane Spell, Divining, Alchemy, Conjuring 360 (1 hour)"],
            "APC": 1,
            "APCNote": "",
            "SPC": 30,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Verbal, Visual, Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch a humanoid-shaped inanimate object made of clay, wood, or a similar substance.At the end of the casting of this spell, you animate it as a lesser golem.This golem is not fully sentient, but is intelligent enough to follow your basic instructions and hold simple conversation. It has the stats of a Humanoid of NPC level 2 or lower but gains the Arcane and Construct creature tags.Additionally, it gains the lineage features of a level 1 golem hero.This creation cannot do battle or wield weapons.",
                "This Golem follows your instructions while you treat it well.It lasts for 1 week or until destroyed.Before the end of its lifespan, you may cast this spell on it again to extend its lifespan by 1 more week.If you do this consecutively for 1 year, then it becomes permanently animated."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Death Ward",
            "prerequisites": ["Arcane Spell,Warding"],
            "APC": 4,
            "APCNote": "",
            "SPC": 14,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": " Up to 1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose yourself or one creature that you touch when you cast this spell.For the duration, the first time that creature would be reduced to 0 HP, they are reduced to 1 HP instead."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Decapitate",
            "prerequisites": ["Arcane Spell,Necromancy"],
            "APC": 3,
            "APCNote": "",
            "SPC": 14,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "Up to 1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch one inanimate corpse that still has a head. Sever the head from its body; that head becomes a magical sentry under your command.It hovers roughly 5 ft off the ground by default and can change its elevation anywhere between 0 ft and 10 ft off the ground.On each of your turns, you may spend 1 AP to move it up to 40 ft.You may close your eyes to see through the eyes or eye sockets of the decapitated head. ",
                "This spell ends immediately if you are ever more than 500 ft away from the head.",
                "You may spend 3 AP to cause the head to explode. If you do, make a magic attack against the REF of each creature within a 10 ft radius of the head.Creatures take 4d6 necrotic damage on a hit, and ½ as much on a miss.",
                "If you do not cause the head to explode, and you cast the same spell on the same head at least 1 time per day for 30 days, then the spell becomes permanent.You can only have one permanent decapitated head under your control at a time; if you permanently secure a second head, the first immediately explodes(as above)."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Decay",
            "prerequisites": ["Arcane Spell, Necromancy"],
            "APC": 4,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Make a magic attack against the FORT of a creature that you touch.The creature takes 2d12 necrotic damage on a hit.On a miss, the creature takes no damage and you do not expend your SP",
                "If you crit, the creature gains Fatigue; if you crit fail, then you gain Fatigue.",
            ],
            "Upcharges": ["+1d12 damage per +6 SP"],

        }, {
            "SpellName": "Delay Spell",
            "prerequisites": ["Arcane Spell, Altering, Metamagic"],
            "APC": Special,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture",
            "Duration": "Up to 10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Cast a spell that causes the next spell you cast to not activate until conditions are met - lingering as a spell mote of energy floating in the air.The mote can be gently moved and stored, occupying the same space as you, but taking damage while you have a mote has a chance to release the spell.When you take damage, make an END roll against a DC of ½ the amount of damage taken; if you fail you lose focus, and every mote you have stored immediately goes off centered on the space you are occupying.Otherwise, the mote triggers upon a specified condition.This condition might be a period of time, password, or distance from you or another creature.You can maintain one mote for every 5 Arcane Power you have."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Dispel Circle",
            "prerequisites": ["Arcane Spell, Altering"],
            "APC": 1,
            "APCNote": "",
            "SPC": Special,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Verbal",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "You may attempt to dispel a circle that you touch. If the circle’s caster is not in the circle, then you may dispel the circle by spending a number of SP equal to ½ the SPC of the circle.If the circle’s caster is in the circle, make a magic attack against the caster’s WILL.If you succeed, you may dispel the circle by spending the appropriate number of SP (as above).If you fail, then you still spend your AP, but do not expend any SP.If it is your circle, this costs 1 SP. "
            ],
            "Upcharges": [],

        },
        {
            "SpellName": "Encode/decode",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Illusory, Conjuring 10"],
            "APC": 30,
            "APCNote": "",
            "SPC": 10,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": " Indefinite",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell, touch a page of text. You cause the text to look garbled and illegible to anyone other than creatures that you specify when you cast this spell.",
                "Alternatively, if you cast this spell on a page of text that has been magically encoded, you may decode it."
            ],
            "Upcharges": ["+1 page of text per +1 SP"],

        }, {
            "SpellName": "Empower Spell",
            "prerequisites": ["Arcane Spell", "Evoking", "Metamagic"],
            "APC": 4,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "Self",
            "Requires": "",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "This spell can be cast on a mote (such as from Delay Spell or Steal Spell), simultaneously with another spell, or on the next spell you cast, if its APC is lower than this spell’s cost. When you cast another spell or activate a mote that deals damage, increase that spell’s damage dice by one dice size (e.g., from Xd6 to Xd8), to a maximum of Xd12."
            ],
            "Upcharges": ["+1 die size per +6 SP"],

        }, {
            "SpellName": "Enchant Weapon",
            "prerequisites": ["Arcane Spell,  Arcane Ritual, Alchemy"],
            "APC": 2,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "2 hours",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch one weapontion, the weapon deals 1d6 fire damage in addition to its normal damage."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Energy Siphon",
            "prerequisites": ["Arcane Spell, Necromancy"],
            "APC": 4,
            "APCNote": "",
            "SPC": Special,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch a willing creature that has the ability to cast spells. Spend any number of SP; that creature gains that many SP"
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Extend Spell",
            "prerequisites": ["Arcane Spell, Altering, Metamagic"],
            "APC": 1,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "self",
            "Requires": "Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast another spell or activate a mote (such as from Delay Spell or Steal Spell) that does not have a range of Self, you may cast this spell simultaneously.If the spell’s or mote’s range is Touch, its range becomes 15 ft.If it has a numbered range, it increases by 15 ft."
            ],
            "Upcharges": [" +15 ft range for the primary spell per +4 SP"],

        }, {
            "SpellName": "Fan The Flames",
            "prerequisites": ["Arcane Spell, Alchemy"],
            "APC": 3,
            "APCNote": "",
            "SPC": 4,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range. Each creature within a 10 ft radius of that point that has the Burning condition immediately takes its Burning damage again."
            ],
            "Upcharges": ["+5 ft radius per +4 SP"],

        }, {
            "SpellName": "Fireball",
            "prerequisites": ["Arcane Spell, Evoking, Conjuring 1"],
            "APC": 4,
            "APCNote": "",
            "SPC": 15,
            SPCNote: "",
            "Range": "200 ft",
            "Requires": "Gesture,Visual, Line of Effect",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you complete the minimum time needed for Conjuring the spell, you may choose to keep Conjuring it for a longer time: for each additional 2 AP that you continue Conjuring the spell, you increase the spell’s damage by + 1d6.When you finish Conjuring the spell, choose a point within range.A golden - hot fireball explodes outwards in a 20 ft radius from that point.Make a magic attack roll vs the FORT of each creature in the area.Deal 6d6 fire damage to creatures that you hit, and ½ as much to creatures that you miss.If you crit, creatures gain Burning(1d6).",
                "Each round you are Conjuring on a surface that is in motion, such as the deck of a ship, or a wagon, roll a 1d10. On a 1 or 2 you immediately cast the spell at a point in range.On a 1, that point is centered on you."
            ],
            "Upcharges": ["+5 ft radius per +4 SP."],

        }, {
            "SpellName": "Fire Shield",
            "prerequisites": ["Arcane Spell, Evoking"],
            "APC": 2,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture",
            "Duration": "Up to 1 minute",
            rollable: { canRoll: false, },
            spellDescription: [
                "You conjure a shield of crackling flames. Gain the following benefits: • Affinity to Fire • Resist Physical 3 • Shed bright light for 10 ft and dim light for an additional 10 ft beyond that • Whenever you are the target of a melee attack, the creature that attacked you takes 1d8 fire damage.",
                "These effects last until the end of your next turn, but you may spend 1 AP on your subsequent turn before the effects end to extend the effects by one additional turn, to a maximum of 1 minute."
            ],
            "Upcharges": [],


        }, {
            "SpellName": "Flay",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Necromancy, Conjuring 3"],
            "APC": 12,
            "APCNote": "",
            "SPC": 2,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose an inanimate corpse within range. When you complete this spell, that corpse is stripped of all flesh and organs; it is reduced to a mere skeleton of bleached bones with no remaining viscera attached."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Fly",
            "prerequisites": ["Arcane Spell, Altering"],
            "APC": 2,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "For the duration, one creature that you touch when you cast this spell gains a fly speed equal to their walking speed."
            ],
            "Upcharges": [],


        }, {
            "SpellName": "Freeze",
            "prerequisites": ["Arcane Spell", "Altering", "Conjuring 2"],
            "APC": 12,
            "APCNote": "",
            "SPC": 50,
            SPCNote: "",
            "Range": "300 ft",
            "Requires": "Gesture,Verbal, Line of Effect",
            "Duration": "Up to 10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range. Make a magic attack against the FORT of each creature within 30 ft of that point.On a hit, a creature becomes Grounded and Restrained(Escape DC 10 + your magic attribute).On a miss, a creature is Grounded and cannot use AP to move until the end of its next turn but is otherwise unaffected.",
                "On a crit, a creature becomes Fatigued as well.Additionally, all nonmagical fires in the area are extinguished, standing water is frozen to a depth of 18”, and the area becomes difficult terrain due to heaping snowdrifts.",
                "At the end of the duration, a creature that has not escaped the Restrained condition automatically escapes as the ice thaws from around its body.",
                "The ground remains difficult terrain until the snow melts at a rate commensurate to its environment.",
            ],
            "Upcharges": [" +10 ft radius per +5 SP"],


        }, {
            "SpellName": "Frost Beam",
            "prerequisites": ["Arcane Spell", "Evoking"],
            "APC": 4,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Gesture,Verbal, Line of Effect",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range and draw a line between yourself and that point.Make a magic attack against every creature that the line touches, targeting their FORT.On a hit, a creature takes 3d6 cold damage and is Slowed until the end of their next turn. On a miss, a creature takes ½ damage and is not Slowed.",
                "If you crit, a target is additionally Grounded until the end of its next turn."
            ],
            "Upcharges": ["For each additional 4 SP you spend on this spell, increase the total damage by 1d6."],


        }, {
            "SpellName": "Galtway",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Altering, Conjuring 10"],
            "APC": 30,
            "APCNote": "",
            "SPC": 75,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "You open a gateway into another plane of existence. The gateway is 20 ft wide and 20 ft tall.For the duration, creatures on either plane of existence can enter the other plane by walking through the gateway.You may choose to end the gateway early by spending this spell’s Conjuring time again.",
                "Opening such a gateway requires a tremendous amount of guesswork and luck.When attempting to establish a gateway to another plane, first roll 2d6 and add them together.",
                "If you have never been to the plane before, you succeed on a roll of 6 - 8.",
                "If you have been to the plane at least once before, you succeed on a roll of 5 - 9.",
                "If you have been to the plane many times before, you succeed on a roll of 4 - 10.",
                "If you intend to travel to your home plane, you succeed on a roll of 3 - 11.",
                "If you succeed on your roll and you travel to the plane of existence that you intended to, make a Spellcasting check (add your Arcana skill if you have it). Your gateway appears on the new plane a number of miles away from your target destination equal to 40 - your roll(if 0 or negative, you appear precisely where you intended).",
                "If you fail on your initial roll, then you open a gateway to a random location on a random plane of existence.The MC might pick which plane of existence you travel to, or randomly determine it.",
            ],
            "Upcharges": [],


        }, {
            "SpellName": "Grand Unveiling",
            "prerequisites": ["Arcane Spell,Divining, Conjuring 5"],
            "APC": 15,
            "APCNote": "",
            "SPC": 60,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture,Verbal",
            "Duration": "10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "You see all things clearly, and none can fool you with visual shenanigans.",
                "For the duration, you gain the benefits of the Lesser Unveiling and Greater Unveiling spells.",
                "You also cannot be tricked by illusions, disguise magic, or magical effects, and you see the true form of any shapechanger or polymorphed creature.Invisible creatures appear visible to you.",
            ],
            "Upcharges": ["+5 minutes per +15 SP"],

        }, {
            "SpellName": "Grimoire",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Enchanting, Conjuring 360 (1 hour)"],
            "APC": 1,
            "APCNote": "",
            "SPC": Special,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell on a blank book, you can scribe knowledge in it.This knowledge can be a spell or information.",
                "If the knowledge is a spell, expend the SPC of the spell, and then you lose access to the spell. ",
                "If it is information, this spell costs 20 SPC. You and all willing creatures within 100 ft of you when you cast Grimoire forget the knowledge that was scribed into the Grimoire.After putting information or a spell into the Grimoire, that information is sealed away and the book appears blank or full of illegible scribbles(your choice).The book also appears worn and dark, as though stained by ink or rain or by ongoing heavy use, but no effort to clean or sully it further has any effect.",
                "If you cast this spell on a Grimoire, you unseal it and can read any information therein.If a Grimoire that you read in this way contains a spell, you may learn the spell or may cast it without learning it.If you cast it without learning it, you must spend the appropriate APC, but need not expend any SPC, then that spell magically fades away from the grimoire.",
                "If you learn the spell, then you must scribe one of your own spells of equal or greater SPC into the Grimoire, losing access to it.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Grounded",
            "prerequisites": ["Arcane Spell, Altering"],
            "APC": 4,
            "APCNote": "",
            "SPC": 16,
            SPCNote: "",
            "Range": "150 ft",
            "Requires": "Gesture,Visual, Line of Effect",
            "Duration": " Up to 1 minute",
            rollable: { canRoll: false, },
            spellDescription: [
                "Make a magic attack against the WILL of one creature within range.If you hit, the creature is Grounded for 1 minute.If you miss, the creature is Grounded until the end of your next turn."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Greater Unveiling",
            "prerequisites": ["Arcane Spell, Divining"],
            "APC": 4,
            "APCNote": "",
            "SPC": 22,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture,Visual",
            "Duration": "5 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "You can discern many things that were once concealed from your sight.",
                "For the duration, you gain the benefits of the Lesser Unveiling spell.",
                "You also see through illusory magic. Creatures that have disguised their form as with the Arcane Disguise spell or similar magic appear to you in their true form.Illusory spells appear thin and translucent to you, allowing you to see through them as though they are not there. ",
            ],
            "Upcharges": ["+5 minutes per +8 SP"],

        }, {
            "SpellName": "Glyph Of Seeing And Casting",
            "prerequisites": ["Arcane Spell,  Enchanting, Conjuring 5"],
            "APC": 20,
            "APCNote": "",
            "SPC": 32,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Verbal",
            "Duration": "24 hours",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch a smooth, immobile surface when you cast this spell, such as a wall or column.You create a glyph that glows faintly for the duration.Provided that you are on the same plane of existence, you may close your eyes to see and hear through the glyph and you may cast spells as if you were standing where the glyph is located.",
                "If you cast this spell on the same spot every day for 1 year, it becomes permanent.",
            ],
            "Upcharges": ["By spending 8 additional SP, you can make the glyph invisible.Creatures that can see invisibility still see the glyph."],

            "Upcharges": ["By spending 12 additional SP, you can see through the glyph even while you are on another plane of existence, but still cannot cast spells through it."],

        }, {
            "SpellName": "Ice Daggers",
            "prerequisites": ["Arcane Spell,Evoking"],
            "APC": 4,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "Self (60 ft cone)",
            "Requires": "Gesture, Verbal, Visual, Line of Effect, Line of Sight",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Make a magic attack targeting the REF of one, two, or three creatures within range.On a hit, a creature takes 1d8 sharp damage and 2d6 cold damage.On a miss, a creature takes no sharp damage and ½ cold damage."
            ],
            "Upcharges": [" +1 target creature per +4 SP."],

        }, {
            "SpellName": "Ice Fan",
            "prerequisites": ["Arcane Spell,Evoking, Conjuring 1"],
            "APC": 8,
            "APCNote": "",
            "SPC": 21,
            SPCNote: "",
            "Range": "Self (20 ft cone)",
            "Requires": "Gesture, Verbal, Visual, Line of Effect",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Make magic attacks targeting the FORT of each creature within range.On a hit, a creature takes 6d6 cold damage and is Slowed.On a miss, a creature takes ½ damage and is not slowed.",
                "If you crit, a target is additionally Grounded until the end of its next turn."
            ],
            "Upcharges": [" Cone increases by +5 ft per +3 SP"],

        }, {
            "SpellName": "Identify Magic",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Divining, Conjuring 3"],
            "APC": 15,
            "APCNote": "",
            "SPC": 8,
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose one object or creature that you touch while conjuring this spell. When you complete the conjuring, you learn what specific spells, cantrips, chants, prayers, invocations, and/or rituals are affecting that object or creature, as well as other magical effects that are not specifically covered by a spell, cantrip, or the like."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Kill",
            "prerequisites": ["Arcane Spell,Evoking"],
            "APC": 1,
            "APCNote": "",
            "SPC": 90,
            SPCNote: "",
            "Range": "100 ft",
            "Requires": "Verbal",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a creature within range. Make a magic attack against its ANT.If you hit, and it has 100 HP or fewer, then the creature can make an END check against your WILL.If it succeeds, its HP becomes 0 and it immediately gains 7 Death Points.This bypasses any features that might allow it to regain HP upon being reduced to 0 HP, such as Death Ward or Determined 1, 2, or 3. If it fails, it immediately dies.",
                "If you miss the initial attack, the creature becomes Helpless until the end of your next turn instead."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Last Wish",
            "prerequisites": ["Arcane Spell,Necromancy"],
            "APC": 1,
            "APCNote": "",
            "SPC": 40,
            SPCNote: "minus the number of Death Points you are removing",
            "Range": "60 ft",
            "Requires": "Gesture, Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose any number of creatures within range. Remove up to 35 Death Points total from those creatures; you gain those Death Points at the completion of this spell cast.Roll a number of d10s equal to the number of Death Points you have taken and distribute that number as healing among the creatures whom you took Death Points from.If this kills you, your skin melts off and you turn into an undead skeleton. If this happens, you cannot be resurrected and the skeleton left in your wake is mindless, but it will protect the creatures affected by this spell until it is destroyed."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Lesser Unveiling",
            "prerequisites": ["Arcane Spell, Divining"],
            "APC": 4,
            "APCNote": "",
            "SPC": 6,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Verbal",
            "Duration": "10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "You or a creature that you touch gains the magical ability to see things that were previously hidden to them.",
                "For the duration, the creature gains +5 to AWR/Tracking and AWR / Intuiting skill checks made to track a creature or recognize a nonmagical disguise.This bonus can exceed the normal + 20 cap for skills."
            ],
            "Upcharges": ["+2 bonus to both skills per +3 SP. You can upcharge up to 5 times, for a total of +15 to both skills."],

        }, {
            "SpellName": "Living Letter",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Alchemy, Conjuring 60 (10 minutes) "],
            "APC": 1,
            "APCNote": "",
            "SPC": 6,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "A scroll or piece of parchment, vellum, or paper magically folds into a bird and flies to a target person that you specify when you cast this spell.The target creature must be on the same plane of existence as you.The bird travels at a rate of 100 miles per hour and does not need to rest.It is magically immune to natural weather phenomena."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Living Mansion",
            "prerequisites": ["Arcane Spell,Summoning, Conjuring 10"],
            "APC": 50,
            "APCNote": "",
            "SPC": 70,
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "1 week",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch a dwelling of at least nine rooms and 5,000 ft 2 .Thatmansion magically gains limited sentience.It knows when creatures hostile to it or to its residents are within it, and can telepathically communicate simple messages to any creature within it.While no creatures are in it, the mansion can shrink to the size of a wild goose and grows six legs, like those of an insect.While shrunken in such a way, the mansion can walk at a steady pace of 2 miles per hour without needing to rest.",
                "If you cast this spell on the same mansion once every week for 5 years, then the effects of the spell become permanent."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Locate Magic",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Divining, Conjuring 5"],
            "APC": 20,
            "APCNote": "",
            "SPC": 15,
            SPCNote: "",
            "Range": "Self (1 mile)",
            "Requires": "Gesture,Verbal",
            "Duration": "1 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell, choose another specific spell, ritual, or invocation.You become aware of each instance of that spell, ritual, or invocation within range for the duration."
            ],
            "Upcharges": ["+1 minute per +2 SP"],
            "Upcharges": ["+1 mile per +8 SP"],

        }, {
            "SpellName": "Locate Creature",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Divining, Conjuring 5"],
            "APC": 20,
            "APCNote": "",
            "SPC": 5,
            SPCNote: "",
            "Range": " Indefinite",
            "Requires": "Gesture,Verbal",
            "Duration": "1 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell, choose your own Signatures or the Signatures of another creature that you name(You must know their real name).If you choose your own, then you become magically aware of all of your signatures are on your current plane of existence, and you know exactly how far away and in what direction they are.",
                "If you pick another creature’s signature, roll a magic attack against that creature’s WILL.If you succeed, then you become magically aware of all of that creature’s signatures are on your current plane of existence, and you know exactly how far away and in what direction they are.If you fail, then you do not expend SP and do not learn any further information.",
                "Whenever you cast this spell to target another creature’s signatures, that creature knows, regardless of whether you hit their WILL or not.Another creature may choose to willingly let you hit their WILL and learn about their signatures."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Mage Armor",
            "prerequisites": ["Arcane Spell", "Arcane Ritual", "Warding"],
            "APC": 3,
            "APCNote": "",
            "SPC": 8,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "Up to 8 hours",
            rollable: { canRoll: false, },
            spellDescription: [
                "You or a creature that you touch becomes magically protected.For the duration, that creature’s AR increases by + 3 while they are not wearing armor.All other defenses increase by + 1. If you cast this spell again before the duration of this spell is up, then your previous casting ends to accommodate the new casting of this spell.You can also end the effects of this spell for free(0 AP)."
            ],
            "Upcharges": ["+1 to all defenses per +12 SP"],

        }, {
            "SpellName": "Major Illusion",
            "prerequisites": ["Arcane Spell", "Illusory"],
            "APC": 3,
            "APCNote": "",
            "SPC": 32,
            SPCNote: "",
            "Range": "600 ft",
            "Requires": "Visual, Line of Effect",
            "Duration": "Up to 10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a number of points within range equal to or less than your magic attribute to create sensory illusions. These illusions can each be any combination of visual, auditory, olfactory, or tactile. The visual dimensions of a single illusion cannot exceed 40 ft 3.",
                "On each of your turns after you cast the spell, you may spend 1 AP to move an illusion or to create a new illusion. You may move an illusion up to 30 ft, and it must stay within range of this spell.",
                "If you start a new illusion that exceeds your magic attribute, a previous illusion of your choice ends.",
                "You may dismiss all of your illusions and end the spell for free.",
                "If you do not spend AP on an illusion, then it idles and acts in a manner befitting the illusion.For example, if you create an illusory trollkin with a battle axe and spend no AP on it, it will idly swing its axe around but will not make overtly intelligent or threatening moves.",
                "A creature can determine that your illusion is in fact illusory after interacting with it directly(such as attacking it) or by making an INT check against a DC of 10 + your magic attribute, but a creature making such a check must roll 2d20 and use the lower.",
                "Alternatively, you can use Major Illusion to project the contents of an Unerring Sphere, but the illusion becomes semi - translucent and obviously a projection.",
            ],
            "Upcharges": [" +5 minutes per +8 SP."],

        }, {
            "SpellName": "Major Teleportation",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Altering, Conjuring 5"],
            "APC": 20,
            "APCNote": "",
            "SPC": 45,
            SPCNote: "",
            "Range": "10 ft",
            "Requires": "Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "You and any number of creatures within range immediately teleport to a destination that you are familiar with.In order to be considered familiar with a location, you must have spent a minimum of 24 hours there.",
                "So long as you are familiar with it, you can choose a very specific destination or a more general one.For example, you might teleport to the city - state of Bridgemoor, or you might teleport to your private rooms in the Leaky Mugs Tavern in the northwestern quarter of Bridgemoor.If you choose a less specific destination, then this magic deposits you in a reasonably open area that is generally unlikely to be immediately harmful to you(such as a large town square or right outside the main gate).",
                "A target destination must be at least 20 ft wide."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Mask",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Fundamental, Illusory, Conjuring 2"],
            "APC": 6,
            "APCNote": "",
            "SPC": 30,
            SPCNote: "",
            "Range": "30 ft",
            "Requires": "Gesture,Verbal, Visual, Line of Effect",
            "Duration": "1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell, choose an object within range. For the duration, it appears to give off magical energy of a function of your choice(Alchemy, Altering, Divining, Enchanting, Evoking, Illusory, Necromancy, Summoning, or Warding), regardless of whether the object was mundane or truly has a different function.Additionally, choose which Source of magic the object appears to be affected by (Arcane, Divine, Occult, Primal, or Psionic).Any Divining magic used to identify the nature of this object will reveal what you decided when you cast this spell, with the exception of Identify Magic.The Identify Magic spell will show that the object is under the effects of a Mask spell, but will not reveal any of the object’s true properties."
            ],
            "Upcharges": [" +30 minutes duration per +5 SP"],

        }, {
            "SpellName": "Meteor",
            "prerequisites": ["Arcane Spell,Evoking, Conjuring 10"],
            "APC": 30,
            "APCNote": "",
            "SPC": 120,
            SPCNote: "",
            "Range": "Sight",
            "Requires": "Gesture, Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "A tremendous meteor hurls from the heavens and strikes a point you choose within range.",
                "Make magic attacks against the FORT of each creature and structure within a 300 ft radius of that point.For each attack, roll 2d20 and use whichever is higher.On a miss, deal 20d6 fire and 20d6 blunt damage to the target.On a hit, double that damage.On a crit, the creature also suffers permanently debilitating injuries such as all of its ribs breaking into a thousand fragments and its lungs being punctured, its legs being blown off, its skull partially caving in, and the like.On a crit, a structure is immediately and utterly destroyed.",
                "The landscape in this radius is completely changed, becoming a crater 300 ft deep at its center and gradually rising to a ridge about 20 ft above ground level at its edge.",
                "Make magic attacks against the REF of each creature and the FORT of each structure within a 1 mile radius of the crater.On a hit, deal 10d6 fire and 20d6 blunt damage to the target.On a miss, deal ½ as much damage.",
                "This spell automatically causes Backlash, and you cannot roll to mitigate the damage(you take 150 damage). Furthermore, make a Spellcasting roll against DC 25. If you fail, you lose your ability to ever cast Arcane magic again.If you succeed, you lose your ability to cast Arcane magic for 1 month and you can never cast this spell again.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Meteor Storm",
            "prerequisites": ["Arcane Spell,Evoking, Conjuring 15"],
            "APC": 50,
            "APCNote": "",
            "SPC": 150,
            SPCNote: "",
            "Range": "Sight",
            "Requires": "Gesture,Visual",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Five tremendous meteors hurl from the heavens and strike various points you choose within range.",
                "Choose five points within range. For each point, make a magic attack against the FORT of each creature and structure within a 300 ft radius of that point.Roll 2d20 and use whichever is higher.On a miss, deal 20d6 fire and 20d6 blunt damage to the target.On a hit, double that damage. On a crit, the creature also suffers permanently debilitating injuries such as all of its ribs breaking into a thousand fragments and its lungs being punctured, its legs being blown off, its skull partially caving in, and the like.On a crit, a structure is immediately and utterly destroyed.",
                "The landscape in this radius is completely changed, becoming a crater 300 ft deep at its center and gradually rising to a ridge about 20 ft above ground level at its edge.",
                "Make magic attacks against the REF of each creature and the FORT of each structure within a 1 mile radius of the crater.On a hit, deal 10d6 fire and 20d6 blunt damage to the target.On a miss, deal ½ as much damage.Creatures can only be hit by one meteor and the effects of radii overlapping do not stack.",
                "Upon casting this spell, you immediately die and your Essence is scattered across the totality of the Celestial Sea, rendering it impossible to ever reincarnate or resurrect you in any form.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Minor Illusion",
            "prerequisites": ["Arcane Spell,Illusory"],
            "APC": 3,
            "APCNote": "",
            "SPC": 6,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Visual, Line of Effect",
            "Duration": "Up to 1 minute",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range to create a sensory illusion. This illusion can be visual, auditory, or olfactory, or any combination of the three. If visual, it cannot be larger than 10 ft 3 .",
                "On each of your turns after you cast the spell, you may spend AP to move the illusion or to create a new illusion. This costs 1 AP per sense(for example: 1 for visual, 2 for visual and auditory, or 3 AP for all 3 senses).You may move the illusion up to 30 ft, and it must stay within range of this spell.",
                "If you start a new illusion, your previous illusion ends.",
                "You may dismiss all of your illusions and end the spell for free.",
                "If you do not spend AP on your illusion, then it idles and acts in a manner befitting the illusion.For example, if you create an illusory Trollkin with a battle axe and spend no AP on it, it will idly swing its axe around but will not make overtly intelligent or threatening moves.",
                "A creature can determine that your illusion is in fact illusory after interacting with it directly(such as attacking it) or by making an INT check against a DC of 10 + your magic attribute.",

            ],
            "Upcharges": ["+20 ft range per +3 SP"],

        }, {
            "SpellName": "Minor Teleportation",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Altering, Conjuring 2"],
            "APC": 10,
            "APCNote": "",
            "SPC": 25,
            SPCNote: "",
            "Range": "Sight",
            "Requires": "Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "You and any number of creatures within 10 ft of you immediately teleport to a point of your choice within range. If you cannot make out exact details of the point to which you are teleporting, you may find yourself in undesirable terrain.For example, if you teleport into a forest, you might appear in treetops that struggle to support your weight. If you teleport across a swamp, you might land near an alligator.If you teleport across a misty canyon, if the mist obscures you from seeing the ground, you might appear in open air and fall down a chasm."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Nova",
            "prerequisites": ["Arcane Spell,Evoking"],
            "APC": 2,
            "APCNote": "reactive AP that you spend when you take damage",
            "SPC": 8,
            SPCNote: "",
            "Range": "Self (10 ft radius)",
            "Requires": "Gesture",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Make a magic attack roll against each creature in the area, targeting their FORT.Deal 2d10 fire damage to creatures that you hit, and ½ as much to creatures that you miss."
            ],
            "Upcharges": ["+5 ft radius per +2 SP"],
            "Upcharges": ["+1d10 damage per +4 SP"],

        }, {
            "SpellName": "Passage",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Altering, Conjuring 5"],
            "APC": 20,
            "APCNote": "",
            "SPC": 30,
            SPCNote: "",
            "Range": "Sight",
            "Requires": "Gesture,Visual",
            "Duration": "10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range and choose a point within 20 ft of you.For the duration, the 10 ft radii of those points are magically linked.Whenever a creature enters a space within a 10 ft radius of either point, they automatically teleport to an unoccupied space of their choice within the other point.",
                "After teleporting, a creature must step out of the radius of the new point and step back in if they wish to teleport back to their original space.",
            ],
            "Upcharges": [" +5 minute duration per additional 10 SP"],

        }, {
            "SpellName": "Possess Object",
            "prerequisites": ["Arcane Spell,Enchanting"],
            "APC": 1,
            "APCNote": "",
            "SPC": 15,
            SPCNote: "",
            "Range": " 1 mile",
            "Requires": "Gesture,Verbal",
            "Duration": "Up to 1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose an object within range that you have seen within the last 30 days.For the duration, you can see and hear from that object and can conjure spectral arms and legs around that object; you can choose whether these are visible or invisible.You can speak from the object, but cannot cast spells from it.",
                "You cannot lift more than 10 lbs using these spectral arms.",
                "While seeing through the object or manipulating it in any way, you are physically blind and deaf to your immediate surroundings.",
                "If you take damage, or if the object breaks, the spell ends.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Portal",
            "prerequisites": ["Arcane Spell, Altering, Conjuring 1"],
            "APC": 8,
            "APCNote": "",
            "SPC": 16,
            SPCNote: "",
            "Range": "90 ft",
            "Requires": "Gesture,Visual",
            "Duration": "1 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range and choose a point within 5 ft of you.For the duration, those points are magically linked. Whenever a willing creature enters one of those spaces, they automatically teleport to the other space."
            ],
            "Upcharges": ["+10 ft range and -1 APC per +4 SP."],

        }, {
            "SpellName": "Projection",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Divining, Conjuring 360 (1 hour)"],
            "APC": 1,
            "APCNote": "",
            "SPC": 10,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Verbal",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a creature. If that creature is on the same plane of existence as you and is capable of being detected by divination magic, then you can contact that creature, appearing before them as a slightly translucent visage.You cannot see their physical location, but can see them as if they were standing before you; likewise, they cannot see your physical location, but can see you as though you were standing before them.All of your physical senses respond to the creature as though it were standing before you; likewise, all of its physical senses respond to you in the same way."
            ],
            "Upcharges": [],



            "SpellName": "Raise Bone Spider",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Necromancy, Conjuring 8"],
            "APC": 26,
            "APCNote": "",
            "SPC": 48,
            SPCNote: "",
            "Range": "20 ft",
            "Requires": "Gesture",
            "Duration": " 1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "By drawing on a minimum of twenty inanimate corpses, you stitch their remaining flesh and their myriad bones together into a jagged, misshapen bone spider.",
                "This creature has the stats of a bone spider, follows your unspoken commands, and acts immediately after you in combat.",
                "If a bone spider is still animated at the end of the duration, it collapses into a pile of inanimate corpse parts.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Raise Death Soldier",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Necromancy, Conjuring 10"],
            "APC": 30,
            "APCNote": "",
            "SPC": 24,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch one inanimate corpse. You raise it to a state of undeath.It has the stats of a death soldier.Make a spellcasting roll; the death soldier follows your unspoken commands for that many minutes.It acts immediately after you in combat while following your commands.",
                "Once the death soldier is no longer magically obligated to follow your commands, it gains autonomy.If you make a compelling case or if your goals align with the death soldier’s goals, then it might continue to travel with you, but acts on its own Initiative and does not necessarily follow your commands(which must be spoken at this point).",
                "A death soldier’s personality vaguely reflects the personality of the creature in life, before it became a corpse. A death soldier will gravitate towards the darker aspects of its previous personality and is guaranteed to develop bloodthirsty or otherwise cruel tendencies.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Raise Revenant",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Necromancy, Conjuring 10"],
            "APC": 30,
            "APCNote": "",
            "SPC": 36,
            SPCNote: "",
            "Range": "20 ft",
            "Requires": "Gesture",
            "Duration": "1 hour",
            rollable: { canRoll: false, },
            spellDescription: [
                "By drawing dark fundamental power, you awaken a vengeance in a corpse within range and animate it.",
                "This creature has the stats of a revenant, follows your unspoken commands, and acts immediately after you in combat.",
                "If a revenant created in this way is still animated at the end of the duration, it collapses into an inanimate corpse again.",
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Raise Skeleton",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Necromancy, Conjuring 2"],
            "APC": 9,
            "APCNote": "",
            "SPC": 16,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture",
            "Duration": "24 hours",
            rollable: { canRoll: false, },
            spellDescription: [
                "Touch one inanimate skeleton with no organs or flesh. You raise it to your service.It has the stats of a skeleton, follows your unspoken commands, and acts immediately after you in combat.If it is already a skeleton in your service, the SPC of this spell is halved and the duration is reset.",
                "If a skeleton is still animated at the end of the duration, it collapses into an inanimate corpse again.",
                "If you cast this same spell on the same skeleton once per day for a month, it becomes permanently animated. If you do so, the skeleton holds the potential to gain sentience, and the MC will determine when and if this occurs.",
            ],
            "Upcharges": ["If you spend 4 additional SP on the spell, then you can raise two skeletons instead of one, provided that there are two inanimate skeletons for you to touch when you cast the spell."],

        }, {
            "SpellName": "Sculpt Spell",
            "prerequisites": ["Arcane Spell,Enchanting, Metamagic"],
            "APC": 1,
            "APCNote": "",
            "SPC": 12,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast another spell or activate a mote (such as from Delay Spell or Steal Spell) that targets more than one creature, you may cast this spell simultaneously.Choose a number of creatures equal to your magic attribute.You automatically miss those creatures with your attack."
            ],
            "Upcharges": ["For each +5 SP you spend on the spell, choose a creature that you missed: that creature suffers no effects of your spell, even if it would normally harm a creature that you missed."],

        }, {
            "SpellName": "Seal/Unseal",
            "prerequisites": ["Arcane Spell,Arcane Ritual, Fundamental, Warding, Conjuring 60 (10 minutes)"],
            "APC": 1,
            "APCNote": "",
            "SPC": Special,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture,Verbal, Visual",
            "Duration": "Indefinite",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell to seal an object, choose a certain amount of SP to spend and touch a door, lock, clasp, or latch.That door, lock, or latch becomes magically sealed and can only be unsealed if the same caster or another caster uses the Seal / Unseal spell and expends SP equal to or greater than the SP used to seal the lock.",
                " When you cast this spell to unseal an object, you may first make an INT check(modified by Arcana) against a DC determined by the MC.If you succeed, you know how many SP you must spend to Unseal the object.If you fail, then you do not know how many SP you need.Either way, choose how many SP you spend on this spell; if you do not spend enough SP, you lose those SP but the object remains sealed."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Sense Magic",
            "prerequisites": ["Arcane Spell", "Arcane Ritual", "Divining", "Conjuring 1"],
            "APC": 5,
            "APCNote": "",
            "SPC": 5,
            SPCNote: "",
            "Range": "Self (60 ft radius)",
            "Requires": "Gesture, Line of Effect",
            "Duration": "10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "For the duration, you sense the presence of magic within the radius. In this way, you can sense magic affecting an object, a creature, or the ambient environment. When you sense magic, you may spend 1 AP on your turn to learn the magic’s source (Arcane, Divine, Occult, Primal, or Psionic) and its function (Alchemy, Altering, Divining, Enchanting, Evoking, Illusory, Necrotic, Summoning, or Warding)."
            ],
            "Upcharges": ["+10 minutes per +5 SP."],

        }, {
            "SpellName": "Shield",
            "prerequisites": ["Arcane Spell, Warding"],
            "APC": 1,
            "APCNote": "Reactive AP that you can spend when you are the target of an attack",
            "SPC": 3,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Gesture",
            "Duration": "1 round",
            rollable: { canRoll: false, },
            spellDescription: [
                "Gain +4 to your AR and physical defenses. This lasts until the end of your next turn."
            ],
            "Upcharges": ["+4 to your mental defenses for +5 SP."],

        }, {
            "SpellName": "Snowball",
            "prerequisites": ["Arcane Spell, Evoking"],
            "APC": 3,
            "APCNote": "",
            "SPC": 4,
            SPCNote: "",
            "Range": "80 ft",
            "Requires": "Gesture, Line of Effect",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose a point within range. Make a magic attack against the FORT of each creature within a 5 ft radius of that point. On a hit, a creature takes 2d6 Cold damage and falls prone. On a miss, a creature takes no damage but still falls prone.",
                "All nonmagical fire in the area is extinguished."
            ],
            "Upcharges": ["+5 ft radius per +4 SP."],

        }, {
            "SpellName": "Steal Spell",
            "prerequisites": ["Arcane Spell", "Alchemy"],
            "APC": 2,
            "APCNote": " reactive AP, which you spend when another creature within range casts a spell",
            "SPC": Special,
            SPCNote: "",
            "Range": "60 ft",
            "Requires": "Visual, Line of Effect",
            "Duration": "Instantaneous",
            rollable: { canRoll: true, },
            spellDescription: [
                "Make a magic attack roll; the caster who triggered this spell does the same. If the caster has the Divine, Arcane, or Primal tag, they add + 2 to their roll. If they have the Occult or Psionic tag, then they add + 4. If you roll higher, then you expend the full SPC of the triggering caster’s spell, and you can immediately cast it yourself, or store it as a mote for 10 minutes, such as by the effects of Delay Spell.The loser of the contested roll does not expend SP."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Summon Incarnation",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Summoning, Conjuring 1"],
            "APC": 12,
            "APCNote": "",
            "SPC": 24,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Visual, Line of Effect",
            "Duration": "10 minutes",
            rollable: { canRoll: false, },
            spellDescription: [
                "Summon a personal elemental. This small creature has 5 hit points and 11 AR.On its turn it can either move or cast Beam of Fire, Frostbite, or Grave Whisper.It has the appearance of the cantrip you choose for it, as well as immunity to that type of damage.Subsequent casts of Summon Incarnation where you do not change its cantrip cost half the Spell Points to cast."
            ],
            "Upcharges": [],

        }, {
            "SpellName": "Swift Teleport",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Alchemy"],
            "APC": 1,
            "APCNote": "",
            "SPC": 3,
            SPCNote: "",
            "Range": "Self",
            "Requires": "Visual, Line of Effect",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Teleport up to 20 ft to an unoccupied space you can see.Anything that interrupts Line of Effect ends this teleportation early, forcing you to stop in an unoccupied space adjacent to the barrier that prevented Line of Effect."
            ],
    "Upcharges": ["+20 ft range per +3 SP"],        

}, {
            "SpellName": "Unerring Sphere",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Summoning, Conjuring 5"],
            "APC": 20,
            "APCNote": "",
            "SPC": 20,
            SPCNote: "",
            "Range": " Touch",
            "Requires": "Gesture, Verbal, Visual",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "You create a crystalline sphere that weighs about 8 lbs and has a circumference comparable to that of a dinner plate. By speaking a command word, the sphere begins recording an audio conversation, its visual environment, or both.You determine which when you speak the command word.It can record no more than 1 hour’s worth of content, at which point it stops.",
        "You may play back the recording by speaking a second command word, and may choose to erase the recording by speaking a third command word.",
        "You may replay the recording taken by your own unerring sphere indefinitely.",
        "If you cast this spell on another caster’s unerring sphere, then you gain access to a recording that their sphere has taken, and you know absolutely that the unerring sphere was created with the Unerring Sphere spell.If any other spells are affecting the unerring sphere, you become aware of what spell is affecting it.",
        "You can only have one unerring sphere at a time. If you create a new one, your previous one disintegrates.",
            ],
    "Upcharges": ["+30 minutes maximum recording time per +5 SP"],        

}, {
            "SpellName": "Unravel Magic",
            "prerequisites": ["Arcane Spell, Arcane Ritual, Altering, Conjuring 10"],
            "APC": 30,
            "APCNote": "",
            "SPC": Special,
            SPCNote: "",
            "Range": "Touch",
            "Requires": "Gesture, Verbal, Visual",
            "Duration": "Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "When you cast this spell, touch a creature or item. You may end a spell affecting that creature or item by spending a number of SP equal to that spell’s SPC, and modified based on that spell’s source: • If Arcane, no modification • If Divine or Primal, you only need to spend ½ as much SP • If Occult or Psionic, you must spend twice as much SP",
        "You may also turn a magical item into a mundane one by spending twice as much SP as the magic item’s Essence Points (to a maximum of 80 SP, or 40 Essence Points).",
        "You may only use this spell to turn a magical item into a mundane one once per day."
            ],
    "Upcharges": [],

}, {
            "SpellName": "Wall Of Fire",
            "prerequisites": ["Arcane Spell, Evoking, Conjuring 2"],
            "APC": 9,
            "APCNote": "",
            "SPC": 26,
            SPCNote: "",
            "Range": "120 ft",
            "Requires": "Gesture, Verbal, Visual, Line of Effect",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose two points within range that are no more than 60 ft apart from one another.Draw a line between those two points and make a magic attack against the FORT of each creature that the line touches.On a hit, a creature takes 3d10 fire damage.On a miss, a creature takes ½ damage. On a crit, a creature begins Burning(1d10).",
        "Any inanimate objects that are not being worn or carried burst into flame.This fire will expand its length and width by 5 ft every 30 seconds.If there is a strong wind, then the fire will instead expand by 5 ft every 10 seconds in the direction that the wind is blowing.If the fire is burning uphill, it will move an additional 5 ft.Although sparked by magic, the fire itself is considered nonmagical.",
        "Whenever a creature starts its turn in the fire or moves into the fire for the first time on a given turn, it must make an END check against DC 10 + your magic attribute.It takes 2d10 fire damage if it fails, and ½ as much if it succeeds.",
        "Fire created from this spell will burn until extinguished through magical or mundane means or until it runs out of natural fuel."
            ],
    "Upcharges": [],

}, {
            "SpellName": "Wave Of Fire",
            "prerequisites": ["Arcane Spell, Evoking, Conjuring 3"],
            "APC": 15,
            "APCNote": "",
            "SPC": 42,
            SPCNote: "",
            "Range": "200 ft",
            "Requires": "Gesture, Verbal, Line of Effect",
            "Duration": " Instantaneous",
            rollable: { canRoll: false, },
            spellDescription: [
                "Choose two points within range that are no more than 100 ft apart from one another.Draw a line between those two points and make a magic attack against the FORT of each creature that the line touches. On a hit, a creature takes 4d10 fire damage. On a miss, a creature takes ½ damage. On a crit, a creature begins Burning(1d10).",
        "Any inanimate objects that are not being worn or carried burst into flame.",
        "Choose one side of the line of fire; you create churning winds on that side of the fire, urging the flames forth.The fire will expand by 10 ft every 10 seconds in the direction that the wind is blowing.If the fire is burning uphill, it will move an additional 10 ft.Although sparked by magic, the fire itself is considered nonmagical.",
        "Whenever a creature starts its turn in the fire or moves into the fire for the first time on a given turn, it must make an END check against DC 10 + your magic attribute.It takes 2d10 fire damage if it fails, and ½ as much if it succeeds.",
        "Fire created from this spell will burn until extinguished through magical or mundane means or until it runs out of natural fuel.",
            ],

    "Upcharges": [],

}]}




