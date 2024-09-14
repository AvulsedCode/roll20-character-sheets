mcStandardProfessions = [
{
name: {
noun: "Archivist",
},
occupations: ["Academic"],
description: "You are passionate about preserving the past and uncovering the secrets of the ages. Through weeks upon weeks of research sifting through dusty tomes, you are always seeking to expand your understanding of the world and to bring new knowledge to light.",
StartingEquipment: [
{ name: "satchel", qty: 1, canChoose: false, type: "mundane" },
{ name: "scroll case", qty: 1, canChoose: false, type: "mundane" },
{ name: "Gambeson Armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "lantern", qty: 1, canChoose: false, type: "mundane" },
{ name: "robes", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
{ name: "small collection of books and scrolls", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 2, canChoose: false, type: "mundane" },
{ name: "inkpot", qty: 1, canChoose: false, type: "mundane" },
{ name: "quill pen", qty: 1, canChoose: false, type: "mundane" },
{ name: "parchment", qty: 10, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: ["Calligraphy", "Cartography", "Masonry", "Painting", "Pottery", "Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Empathy", "Gossiping", "Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana", "Art", "Astrology", "Astronomy", "Biology", "Chemistry, Economics, Engineering, Geography, Law, Military, Politics of [choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising", "Intuiting", "Investigating", "Perceiving"] },
],
rankingBlerb: "Each time you gain a rank in the archivist profession (including rank 1), gain +3 History, and +1 in three skills of your choice:",
},
occupationBonus: "If you take a profession with the militant tag, gain +2 Forced March.",
startingWealth: {
roll: "5d20x2",
average: 104
},
ranking: {
noun: "tenure",
specializations: ["Chronicler", "Historian"],
description: "When you become a rank 1 Archivist, and every time you gain a rank in the Archivist profession, your academic tenure improves.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Given 8 hours of research at a well-resourced library, you can uncover any written information available to the public.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "Given one day of research at a well-resourced library, you can uncover any written information, including forbidden texts. Additionally, you may sell your services as a researcher to earn 1d10+10 sc per week.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "Your expertise extends to a specific realm of historical discovery. Upon earning rank 3 of this profession, you may choose between chronicler or historian as your professional specialization. At Archivist ranks 4 and 5, you advance in the same professional track that you chose at this rank.",
canChooseSpecialization: true,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "" },
specializationTitle: "Chronicler",
description: "You are a recognized expert in historical field work and no longer need to be in a well-resourced library to perform your research services (still earning 1d10+10 sc per week). You also have intimate knowledge of your home region’s geographical history and have a +3 bonus to checks related to locating any ruin, crypt, or cave in that region or recalling information about them. Additionally, given one day in an urban area, you may discern 3 societal aspects of the city (or neighborhood if the city is exceptionally large). Learn the nature of three of the following aspects of the urban area: aristocratic, layfolk, mercantile, military, religious, or underworld.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "" },
specializationTitle: "Historian",
description: "Your tenure as a preeminent historian allows you to recruit students of history to do small tasks and errands for you, provided that you are in a town or city with an academic presence. They will deliver messages, handle shopping transactions, and conduct in-depth research on your behalf. Your services as a researcher now earn you 2d10+20 sc per week.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "Chronicler" },
specializationTitle: "Chronicler",
description: "Your skills of investigation and interview are well known amongst individuals with the academic or aristocratic backgrounds. Given one day in an urban area, you may discern all societal aspects of the city (or neighborhood if the city is exceptionally large). Your research services now earn you 3d10+30 sc per week. Additionally, gain +3 Investigating.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "Historian" },
specializationTitle: "Historian",
description: "You have intimate knowledge of your home region&Apos;s political history, including all lines of nobility, succession, and law, and can recall this information without being in a well-resourced library. You may gain 1 rank in the Barrister profession, including starting equipment and skills. Additionally, your services as a researcher now earn you 4d10+40 sc per week.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Chronicler" },
specializationTitle: "Chronicler",
description: "You are a famous biographer with access to the highest courts in your home region and are welcome at events hosted by NPCs with the aristocracy or academic backgrounds. You may gain 1 rank in the Honorable profession.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Historian" },
specializationTitle: "Historian",
description: "Your great historical works have been widely praised within the halls of power and your ability of insight into past events is unmatched. Your studies have revealed to you the approximate location of one lost artifact of legendary value and power within a ruin inside your home region. Furthermore, as one of the most renowned historians in the world, you can secure an audience with most individuals of great influence. Any NPC with the equivalent of 4 or fewer ranks in any occupation will make time to meet with you within 24 hours of your request. Your services as a researcher now earn you 10d10+100 sc per week.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Born Warrior",
},
occupations: [""],
description: "You possess a natural talent for combat and have an unshakable bravery that inspires those around you.With your strong body and quick reflexes, you are a formidable force, always ready to defend those in need and vanquish evil wherever it may lurk.",
StartingEquipment: [
],
skillsEachRank: {
skills: [
{ name: "Athleticism", requiresTools: false, options: ["Applied Force", "Athletics", "Sprinting"] },
{ name: "Influence", requiresTools: false, options: ["Intimidating", "Leadership"] },
{ name: "Knowledge", requiresTools: false, options: ["Geography", "History", "Medicine*", "Military Vehicles * [land]"] },
{ name: "Luck", requiresTools: false, options: ["Fortuity", "Scavenging"] },
{ name: "Stamina", requiresTools: false, options: ["Forced March", "Menacing", "Distance Running", "Swimming"] },
{ name: "Survival", requiresTools: false, options: ["Animal Handling", "Dungeoneering", "Navigating *", "Sheltering"] },
],
rankingBlerb: "",
},
occupationBonus: "If you take a profession with the militant tag, gain +2 Forced March.",
startingWealth: {
roll: "5d20x2",
average: 104
},
ranking: {
noun: "",
specializations: ["", ""],
description: "",
ranksAndSpecializations: [],
}
},
{
name: {
noun: "Criminal",
},
occupations: [""],
description: "You live on the fringes of society, always looking for opportunities to turn a profit through illegal means. Whether it is through thievery, blackmail, or shady deals, you have a knack for manipulating the law to your advantage, constantly staying one step ahead of the authorities.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: false, options: ["Balancing", "Contorting", "Tumbling"] },
{ name: "Athleticism", requiresTools: false, options: ["Athletics", "Sprinting"] },
{ name: "Crafting", requiresTools: false, options: ["Brewing, Cooking, Jeweling, Painting, Pottery, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Gossiping, Intimidating, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Art, Law, Politics of [choose region] • Luck.Fortuity, Scavenging"] },
{ name: "Luck", requiresTools: false, options: ["Fortuity, Scavenging"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Eavesdropping, Intuiting, Investigating, Perceiving"] },
{ name: "Performance", requiresTools: false, options: ["Entertaining, Savoir Faire"] },
{ name: "Subterfuge", requiresTools: false, options: ["Disguising*, Evading, Forging*, Lockpicking*, Sleight of Hand"] },
{ name: "Survival", requiresTools: false, options: ["Dungeoneering, Sneaking"] },
],
rankingBlerb: "",
},
occupationBonus: "If you take a profession with the underworld tag, gain +2 Intuiting.",
startingWealth: {
roll: "4d100 sc",
average: 202,
},
{
name: {
noun: "Entrepr Eneur",
},
occupations: [""],
description: "You have a keen eye for opportunity and an understanding of commerce.You are always seeking out new and innovative ways to make a profit, whether it’s through trading goods, investing in businesses, or developing new products.Your business savvy has made you one of the most successful individuals in your town, and you’re always looking for new opportunities to expand your wealth and influence.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: false, options: ["Alchemy, Brewing, Calligraphy, Carpentry,Cartography, Cobbling, Cooking, Glassblowing, Jeweling, Leatherworking, Masonry, Painting, Pottery, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Art, Economics, History, Law, Politics of [choose region]"] },
{ name: "Luck", requiresTools: false, options: ["Fortuity"] },
{ name: "Performance", requiresTools: false, options: ["Entertaining, Instrument* [choose one], Savoir Faire"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Eavesdropping, Intuiting, Investigating, Perceiving"] },
{ name: "Subterfuge", requiresTools: false, options: ["Forging*, Sleight of Hand"] },
],
rankingBlerb: "",
},
occupationBonus: "If you take a profession with the mercantile tag, gain +2 additional Skill Points in Appraising.",
startingWealth: {
roll: "10d20x2 sc",
average: 210,
},
{
name: {
noun: "Enave",
},
occupations: [""],
description: "You command a versatile set of skills and an equally versatile personality.A classic jack- of - all - trades, and master of none, you are equally skilled charming your way out of a sticky situation, picking locks, or evading attackers with your quick wits and nimble movements.You have learned to adapt to whatever situation life throws at you and have a pension for being able to handle any job with some amount of success due to your sheer adaptability.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "5d20x3 sc",
average: 156,
},
{
name: {
noun: "Noble title",
},
occupations: [""],
description: "You might have been born into wealth and privilege, with a strong family lineage and a respected name; or alternatively, through luck or deed, you have been bestowed a title among the aristocracy of your region.With your education, wealth, and connections, you have the capacity to shape the world around you, whether it is through politics, diplomacy, or simply using your family’s wealth and influence to fund worthy causes and projects.You strive to maintain the honor and prestige of your family name, to protect your position, and to ensure your continued prosperity.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: false, options: ["Alchemy, Calligraphy, Cartography, Painting, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Intimidating, Leadership, Persuading"] },
{ name: "Performance", requiresTools: false, options: ["Dancing, Entertaining, Instrument* [choose one], Savoir Faire"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana, Art, Astrology, Astronomy,Economics, Geography, History, Law, Medicine *, Military, Politics of[choose region] Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Eavesdropping, Intuiting, Investigating, Perceiving"] },
],
rankingBlerb: "",
},
occupationBonus: "If you take a profession with the aristocratic tag, gain +2 Gossiping.",
startingWealth: {
roll: "10d20x3 sc",
average: 315,
},
{
name: {
noun: "Outlander",
},
occupations: [""],
description: "You come from a different place, with different customs and beliefs than those around you.Perhaps you hail from a faroff nation, or maybe you are more at home in the wilderness than in an urban environment.Your unique perspective makes you a valuable asset, as you bring fresh ideas and new ways of thinking to the table.However, it can also make you an outsider, seen as strange or untrustworthy by those who do not understand your ways.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: false, options: ["Balancing", "Contorting"] },
{
name: "Athleticism", requiresTools: false, options: ["Applied Force", Athletics", "Sprinting"] },
{ name: "Crafting", requiresTools: false, options: ["Carpentry, Cartography, Cobbling, Cooking,Leatherworking, Weaving, Woodcarving"] },
{ name: "Performance", requiresTools: false, options: ["Instrument* [choose one]"] },
{ name: "Knowledge", requiresTools: false, options: ["Astrology, Astronomy, Geography, Medicine *, Vehicles * [land]"] },
{ name: "Observation", requiresTools: false, options: ["Intuiting, Perceiving"] },
{ name: "Stamina", requiresTools: false, options: ["Distance Running, Forced March, Swimming"] },
{
name: "Survival", requiresTools: false, options: ["Animal Handling, Dungeoneering, Foraging, Nature, Navigating *, Sheltering, Sneaking, Tracking
],
rankingBlerb: "",
},
occupationBonus: "If you take a profession with the wanderer tag, gain +2 Navigating *.",
startingWealth: {
roll: "5d20x2 sc",
average: 104,
},
{
name: {
noun: "Student",
},
occupations: [""],
description: "You are constantly seeking knowledge and understanding, driven by a thirst for discovery and a desire to make a difference in the world.Whether you are studying magic, history, or the natural sciences, you are always eager to learn and to put your newfound knowledge to the test, eager to make a name for yourself and achieve great things. With your unwavering determination and quick mind, you are well on your way to becoming a respected master in your field.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: false, options: ["Alchemy, Brewing, Calligraphy, Carpentry, Cartography, Cobbling, Cooking, Glassblowing, Jeweling, Leatherworking, Masonry, Painting, Pottery, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Gossiping, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana, Art, Astrology, Astronomy, Economics, Engineering, Geography, History, Law, Medicine *, Military, Politics of[choose region], Religion [choose one]"] },
{ name: "Performance", requiresTools: false, options: [" Dancing, Entertaining, Instrument* [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Eavesdropping, Investigating"] },
{ name: "Subterfuge", requiresTools: false, options: ["Disguising*, Forging*"] },
{ name: "Survival", requiresTools: false, options: ["Animal Handling,Navigating *"] },
},
occupationBonus: "If you take a profession with the academic tag, gain +2 additional Skill Points in History.",
startingWealth: {
roll: "5d20 sc",
average: 52,
},
{
name: {
noun: "True Believer",
},
occupations: [""],
description: "You are guided by a strong faith in your chosen deity or belief system.You see the world through a lens of reverence and devotion.When able, you pursue acts of charity and stand up against those who would do harm to your beliefs.",
StartingEquipment: [
],
},
skillsEachRank: {
skills: [
{ name: "Survival", requiresTools: false, options: ["Animal Handling, Navigating*"] },
{ name: "Crafting*", requiresTools: false, options: ["Alchemy, Brewing, Calligraphy, Cooking, Jeweling, Painting, Pottery, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Intimidating, Leadership, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana, Art, Economics, Geography, History, Law, Medicine *, Politics of[choose region], Religion [choose one]"] },
{ name: "Luck", requiresTools: false, options: ["Fortuity"] },
{ name: "Observation", requiresTools: false, options: ["Intuiting, Perceiving"] },
{ name: "Stamina", requiresTools: false, options: ["Forced March"] },
{ name: "Performance", requiresTools: false, options: ["Entertaining, Instrument* [choose one], Savoir Faire"] },
],
rankingBlerb: "",
},
occupationBonus: "If you take a profession with the religious tag, gain +2 Religion[choose one].",
startingWealth: {
roll: "5d20x2 sc",
average: 104,
},
{
name: {
noun: "Urchin",
},
occupations: [""],
description: "You’ve had to fend for yourself from a young age, relying on your wits and cunning to survive in a harsh and unforgiving world.Growing up on the streets, you’ve learned to be quick on your feet; to pick pockets and slip away from danger without being detected.Despite the hardships you’ve faced, you’ve developed a fierce independence and a sense of humor that has helped you get by, and you always have a trick or two up your sleeve to help you out of a tight spot.",
StartingEquipment: [
{ name: "backpack", qty: 1, canChoose: false, type: "mundane" },
{ name: "leather armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 5, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
{ name: "utensils,", qty: 1, canChoose: false, type: "mundane" },
{ name: "sewing kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "bedroll", qty: 1, canChoose: false, type: "mundane" },
{ name: "blanket", qty: 1, canChoose: false, type: "mundane" },
{ name: "flint & steel", qty: 1, canChoose: false, type: "mundane" },
{ name: "torch", qty: 10, canChoose: false, type: "mundane" },
],
},
skillsEachRank: {
skills: [
],
rankingBlerb: "",
},
occupationBonus: "
roll: " ",
average: ,
},
{
name: {
noun: "Occupation Tags",
},
occupations: [""],
description: "Occupation tags are listed in italics directly below the title of any given profession.There are seven occupation tags: academic, aristocratic, mercantile, militant, religious, underworld, and wandering. Seven of the nine backgrounds specify that you gain an added bonus if you choose a profession with a particular occupation tag.For example, the Born Marrior states that you gain + 2 Forced March if you take a profession with the militant occupation tag.",
StartingEquipment: [
],
},
{
name: {
noun: "Professions",
},
occupations: [""],
description: "When creating a character, in addition to your background, you gain one profession of your choice.There are two exceptions: If you are a Knave, you gain two professions (you cannot pick the same profession twice).If you are an urchin, you do not gain any profession. Each profession has one or more occupation tags, so be sure to check and see if this gives you any additional bonuses based on your background.When you gain a professional rank, you may choose to gain a rank in the same profession or get the 1st rank of a new profession.",
StartingEquipment: [
],
},
{
name: {
noun: "Goodwill",
},
occupations: [""],
description: "Some professions reference Goodwill, which represents your standing in various aspects of the community.You can read more about Goodwill in Chapter 7.",
StartingEquipment: [
],
},
{},
{
name: {
noun: "Archivist",
},
occupations: ["Academic"],
description: "You are passionate about preserving the past and uncovering the secrets of the ages.Through weeks upon weeks of research sifting through dusty tomes, you are always seeking to expand your understanding of the world and to bring new knowledge to light.",
StartingEquipment: [
],
name: {
noun: "Starting Equipment",
},
occupations: [""],
description: "",
StartingEquipment: [
{ name: "satchel", qty: 1, canChoose: false, type: "mundane" },
{ name: "scroll case", qty: 1, canChoose: false, type: "mundane" },
{ name: "gambeson armor", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "lantern", qty: 1, canChoose: false, type: "mundane" },
{ name: "robes", qty: 1, canChoose: false, type: "mundane" },
{ name: " clothes(simple),,", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
{ name: "small collection of books and scrolls", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 2, canChoose: false, type: "mundane" },
{ name: "inkpot", qty: 1, canChoose: false, type: "mundane" },
{ name: "quill pen", qty: 1, canChoose: false, type: "mundane" },
{ name: "parchment", qty: 10, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 10, canChoose: false, type: "mundane" },
],
},

skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: false, options: ["Calligraphy, Cartography, Masonry, Painting, Pottery, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: [" Empathy, Gossiping, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana, Art, Astrology, Astronomy, Biology, Chemistry, Economics, Engineering, Geography, Law, Military, Politics of[choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Intuiting, Investigating, Perceiving"] },

rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Tenure",
specializations: ["", ""],
description: "When you become a rank 1 Archivist, and every time you gain a rank in the Archivist profession, your academic tenure improves.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Given 8 hours of research at a well-resourced library, you can uncover any written information available to the public.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Given one day of research at a well-resourced library, you can uncover any written information, including forbidden texts.Additionally, you may sell your services as a researcher to earn 1d10 + 10 sc per week.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, : "" },
specializationTitle: "",
description: "Your expertise extends to a specific realm of historical discovery.Upon earning rank 3 of this profession, you may choose between chronicler or historian as your professional specialization.At Archivist ranks 4 and 5, you advance in the same professional track that you chose at this rank.",
canChooseSpecialization: true,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Chronicler" },
specializationTitle: "",
description: "You are a recognized expert in historical field work and no longer need to be in a well- resourced library to perform your research services(still earning 1d10 + 10 sc per week). You also have intimate knowledge of your home region’s geographical history and have a + 3 bonus to checks related to locating any ruin, crypt, or cave in that region or recalling information about them.Additionally, given one day in an urban area, you may discern 3 societal aspects of the city (or neighborhood if the city is exceptionally large).Learn the nature of three of the following aspects of the urban area: aristocratic, layfolk, mercantile, military, religious, or underworld.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Historian" },
specializationTitle: "",
description: "Your tenure as a preeminent historian allows you to recruit students of history to do small tasks and errands for you, provided that you are in a town or city with an academic presence.They will deliver messages, handle shopping transactions, and conduct in-depth research on your behalf. Your services as a researcher now earn you 2d10 + 20 sc per week.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "Chronicler",
description: "Your skills of investigation and interview are well known amongst individuals with the academic or aristocratic backgrounds.Given one day in an urban area, you may discern all societal aspects of the city(or neighborhood if the city is exceptionally large). Your research services now earn you 3d10 + 30 sc per week.Additionally, gain + 3 Investigating.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "Historian",
description: "You have intimate knowledge of your home region’s political history, including all lines of nobility, succession, and law, and can recall this information without being in a well- resourced library.You may gain 1 rank in the Barrister profession, including starting equipment and skills. Additionally, your services as a researcher now earn you 4d10 + 40 sc per week.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "Chronicler",
description: "You are a famous biographer with access to the highest courts in your home region and are welcome at events hosted by NPCs with the aristocracy or academic backgrounds.You may gain 1 rank in the Honorable profession.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "Historian",
description: "Your great historical works have been widely praised within the halls of power and your ability of insight into past events is unmatched.Your studies have revealed to you the approximate location of one lost artifact of legendary value and power within a ruin inside your home region. Furthermore, as one of the most renowned historians in the world, you can secure an audience with most individuals of great influence.Any NPC with the equivalent of 4 or fewer ranks in any occupation will make time to meet with you within 24 hours of your request.Your services as a researcher now earn you 10d10 + 100 sc per week.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Barrister",
},
occupations: ["Academic", "Aristocratic"],
description: "Your studies of law and debate have made you an expert in mediation and you sell your services as a lawyer, judge, or orator.Whether it be in the courts of the grandest cities or in the humblest village square, you ensure just and proper resolution of any dispute through consideration of historical precedent and careful deliberation.",
StartingEquipment: [
{ name: "backpack", qty: 1, canChoose: false, type: "mundane" },
{ name: "scroll case", qty: 1, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes (noble)", qty: 1, canChoose: false, type: "mundane" },
{ name: "book of laws", qty: 1, canChoose: false, type: "mundane" },
{ name: "gavel", qty: 1, canChoose: false, type: "mundane" },
{ name: "parchment", qty: 10, canChoose: false, type: "mundane" },
{ name: "inkpot,", qty: 1, canChoose: false, type: "mundane" },
{ name: "quill pen", qty: 2, canChoose: false, type: "mundane" },
{ name: "flask", qty: 1, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: ["Calligraphy", "Cartography",] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Intimidating, Leadership, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Economics, History, Law, Medicine*, Military, Politics of[choose one], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Eavesdropping, Intuiting,Investigating, Perceiving"] },
{ name: "Performance", requiresTools: false, options: ["Savoir Faire"] }{ name: "Influence", requiresTools: false, options: ["Empathy", "Gossiping", "Persuading"] },
{ name: "Subterfuge", requiresTools: false, options: ["Forging*"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Mediation",
specializations: ["", ""],
description: "When you become a rank 1 barrister, and every time you gain a rank in the Barrister profession, you improve your ability to understand and resolve conflicts.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "While staying in a friendly settlement, you may sell your services as a lawyer or mediator to settle local disputes. Doing so earns you 4d10 sc per week and increases your community Goodwill by + 1 at the end of each month.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your services now earn you 8d10 sc per week. Additionally, you may choose a specialty of law: aristocratic, mercantile, military, or underworld.When performing your rank 1 feature you may choose to increase your Goodwill with that local sphere by + 1 instead of earning any money.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "Your services now earn you 12d10+60 sc per week. As part of this rank, you may immediately gain 1 rank in the archivist profession, including starting equipment and skills.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "" },
specializationTitle: "",
description: "Your services now earn you 16d10+80 sc per week. You may choose an additional specialty from the rank 2 feature of this profession.When performing your rank 1 feature you may choose to increase your Goodwill with either of those local spheres by + 1 in addition to earning money. As part of this rank, you may immediately take rank 1 in the honorable profession, including all the starting equipment and skills.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 3, specialization: "" },
specializationTitle: "",
description: "Your services now earn you 20d10+200 sc per week. You are considered one of the highest legal authorities in your home region and your services are sought out for resolving matters between NPCs with ranks in the academic or mercantile occupation with a maximum of 4 ranks in any profession.Such high- profile disputes earn you additional income on top of your normal weekly income.",
canChooseSpecialization: false,
},
],
}
},
{
name: {
noun: "Charlatan",
},
occupations: ["Mercantile", "Underworld"],
description: "You use your silver tongue and quick wit to deceive and manipulate others.You move from town to town, using your skills of deception to sell false remedies, perform illusions, or simply con unsuspecting marks out of their hard- earned coin.Whether you’re a traveling swindler or a confidence trickster, you always have a new scam up your sleeve, and you revel in the thrill of fooling others and getting away with it.",
StartingEquipment: [
{ name: "pocketed cloak", qty: 1, canChoose: false, type: "mundane" },
{ name: "gearto run your con of choice", qty: 1, canChoose: false, type: "mundane" },
{ name: "marked cards", qty: 2, canChoose: false, type: "mundane" },
{ name: "weighted dice", qty: 3, canChoose: true, type: "tool or kit" },
{ name: "defunct goods", qty: 4, canChoose: false, type: "mundane" },
{ name: "fake antiques", qty: 5, canChoose: false, type: "mundane" },
{ name: "false gems/gold", qty: 1, canChoose: false, type: "mundane" },
{ name: "small hand cart or prop-up stand", qty: 1, canChoose: false, type: "mundane" },
{ name: "belt pouches", qty: 3, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 2, canChoose: false, type: "mundane" },
{ name: "1 tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (fine)", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: true, options: ["Contorting"] },
{ name: "Influence", requiresTools: false, options: ["Empathy, Gossiping, Intimidating, Leadership, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Art, Economics, History, Law, Medicine*, Politics of[choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising", "Intuiting", "Investigating", "Perceiving"] },
{ name: "Performances", requiresTools: true, options: ["Instrument* [choose one], Savoir Faire"] },
{ name: "Subterfuge", requiresTools: true, options: ["Disguising*, Forging*, Lockpicking*, Sleight of Hand"] },
{ name: "Survival", requiresTools: true, options: ["Sneaking"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Scam Business",
specializations: ["", ""],
description: "You are no stranger to bending the truth and have devised a number of scams to relieve people of their hard earned coin. There is always a chance that something goes wrong, but with great risk comes greater rewards!",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You have a knack for disguises and can create a fake identity with one hour of work.This identity does not include any official paperwork and will not stand up to investigation. Once per day in a friendly settlement, you may attempt to run a scam.This scam can include selling a miracle drug, knockoff items, fake investments, or similar ruses and successfully running the scam earns you 2d20 + 20 sc.There is a 20% chance your scam is exposed. This action can be repeated, but every subsequent attempt in that same settlement within a one month period comes with an additional 5% chance of being exposed.If the scam is exposed, gain - 3 community Goodwill and the local authorities immediately know your name(or that of your disguise) and will seek you out for arrest or recompense.No other scams can be run in that settlement for one month. If the scam does not involve or target notable NPCs or plot- relevant items, your MC might elect to abstract the scam into a couple dice rolls and let you narrate how it happens.First, roll to determine how many sc your scam earns, then roll percentile dice to determine if your scam is exposed or not.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Successfully running a scam now earns you 4d20+40 sc. You are now adept at finding like- minded individuals who will help run your scams.If you spend one day in a town or city, you can find and recruit up to two conspirators that will act as audience plants, distractions, or “witnesses” to the efficacy of what you are selling.For each conspirator you hire, you lose 1d20 sc when running a scam, as you have to divide the coin up with them.However, each conspirator also decreases your chance of being exposed by 5%, to a minimum of 5%.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "Successfully running a scam now earns you 8d20+80 sc. You can now recruit up to three conspirators.Your fake identities now include official looking documentation and that will hold up against all but the most thorough investigations.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "" },
specializationTitle: "",
description: "Successfully running a scam now earns you 20d20+200 sc. You can now recruit up to four conspirators.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 3, specialization: "" },
specializationTitle: "",
description: "You may now follow your successful scams with a rug-pull. After running three successful scams in one area, you may run a final gambit that earns 80d20 + 800 sc. As part of this action, roll 1d4 to determine the number of days before the settlement’s authorities become aware of you or your fake identity, after which they will attempt to seek you out for arrest or recompense.",
canChooseSpecialization: false,
},
},
{
name: {
noun: "Clergy",
},
occupations: ["Academic", "Religious"],
description: "You are a member of the clergy in a religious order of your choosing.While you do not yet preach directly to congregants, you handle many other spiritual aspects of your religion along with the mundane tasks of day to day life.You might spend time transcribing or preserving the sacred texts of your faith, or handling the business of keeping a temple funded and maintained.As immersed in this environment as you are, you are deeply interested in gathering a deeper understanding of your faith practices.",
StartingEquipment: [
{ name: "backpack", qty: 1, canChoose: false, type: "mundane" },
{ name: "scroll case", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "gambeson armor", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "quarterstaf", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (fine))", qty: 1, canChoose: false, type: "mundane" },
{ name: "candles", qty: 10, canChoose: false, type: "mundane" },
{ name: "religious icon", qty: 1, canChoose: false, type: "mundane" },
{ name: "small collection of scrolls", qty: 1, canChoose: false, type: "mundane" },
{ name: "incense", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 2, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: [". Alchemy, Brewing, Calligraphy, Cooking, Leatherworking, Painting, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana, Art, Economics, Geography, History, Law, Medicine *, Politics of[choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Eavesdropping, Intuiting"] },
{ name: "Survival", requiresTools: false, options: ["Nature"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Called To Serve",
specializations: ["", ""],
description: "When you become a rank 1 clergy, and every time you gain a rank in the clergy profession, you deepen your understanding of your religion, your faith, and your philosophy.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You may choose one religious deity to pledge yourself to and enter into their service.Any religious center whose faith you share will provide food and shelter to you for free. Additionally, while staying in a friendly settlement you may spend a week serving the poor and destitute.Doing this earns you + 1 Goodwill and greatly increases your reputation in low - income communities.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "You are now an acolyte in your chosen faith and upon reaching rank 2 in the clergy profession, you may choose one specialization: preacher, priest, or theologian.At ranks 3, 4, and 5, you advance in the same professional track that you chose at this rank.",
canChooseSpecialization: false,
}, {
rank: 2,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "Preacher",
description: "Gain +3 Entertaining. Given 8 hours of orating, you can influence public opinion on a political or religious topic. 1d20 commoner NPCs will be swayed by your words as if under the effects of the Charm Person spell for one week, and will follow your reasonable and lawful commands.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "Ppriest",
description: "Gain +3 Empathy. Once per week you may perform a service to bless the local community.The effects of this blessing are determined by the tenets of your faith.It might include effects such as calming an agitated populace, encouraging a despairing group, lessening the symptoms of an infectious disease, or enabling a population to subsist on fewer rations than they would normally need.Your MC might allow additional options based on the population in question.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "Theologian",
description: "Gain +3 Religion [choose one]. Most religious centers will provide food and shelter to you for free, even if you do not share their faith(extremists and secretive cults will not extend this courtesy to you).",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Peaacher" },
specializationTitle: "Gain +3 Entertaining",
description: "Given a day of orating, you can influence public opinion on a pertinent political or religious topic. 4d20 commoner NPCs will be swayed by your words as if under the effects of the Charm Person spell for one week, and will follow your reasonable and lawful commands.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "priest" },
specializationTitle: "Gain +3 Empathy",
description: "Your blessing can now inspire the local community. The benefits of your blessing now last for 1 month.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Theologian" },
specializationTitle: "Gain +3 Religion [choose one]",
description: "Gain rank 1 of the Archivist or Barrister profession (your choice), including all of the equipment and skills it provides.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 4, specialization: "Preacher" },
specializationTitle: "Preacher",
description: "Gain +3 Entertaining. Given a day of orating, you can influence public opinion on a pertinent political or religious topic. 10d20 commoner NPCs will be swayed by your words as if under the effects of the Charm Person spell for one week, and will follow any command, even if it is not lawful.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 4, specialization: "Priest" },
specializationTitle: "Priest",
description: "Gain +3 Empathy. As a recognized leader of your faith you have special honors with NPCs that have the aristocratic occupation and who share your religion.You may request a meeting with any such NPC in your area and they will honor your request within 24 hours. Additionally, you may command the priests of any community in which your faith is present to perform your faith’s blessing at any time, which will be maintained until you command it to stop.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 4, specialization: "Theologian" },
specializationTitle: "Theologian",
description: "Gain +3 Religion [choose one]. Gain the rank 2 of the profession you chose at rank 3 of this profession, including all of the skills it provides.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Peracher" },
specializationTitle: "Peracher",
description: "Gain +3 Entertaining. Given a day of orating, you can influence public opinion on a pertinent political or religious topic. 20d20 commoner NPCs will be swayed by your words as if under the effects of the Charm Person spell for one week, and will follow any command, even if it is not lawful.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 5, specialization: "Priest" },
specializationTitle: "Priest",
description: "Gain +3 Empathy. As an honored leader of your faith, you have special honors with NPCs with the aristocratic occupation who practice any religion.You may request a meeting with any such NPC in your area and they will honor your request within 24 hours. Additionally, when entering a community in which your religion is not present, you may spend one month proselytizing, after which a sizable amount of the population is swayed to your beliefs.This establishes a temple or gathering in which your blessing can be performed.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Theologian" },
specializationTitle: "Theologian",
description: "Gain +3 Religion [choose one]. Gain rank 3 of the profession you chose at rank 3 of this profession, including all of the skills it provides.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Entertainer",
},
occupations: ["Aristocratic", "Mercantile"],
description: "You are a master of creating beauty and inspiring emotion through your art.You bring your imagination to life through paintings, sculptures, music, or any other medium that suits your fancy, captivating your audience with your unique vision and style.Whether you are creating grand masterpieces for kings and queens, or intimate works that speak to the hearts of the common folk, you are driven by a passion for art and a desire to leave a lasting legacy of beauty and inspiration in the world.",
StartingEquipment: [
{ name: "backpack", qty: 1, canChoose: false, type: "mundane" },
{ name: "gambeson armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (fine)", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "instruments", qty: 2, canChoose: false, type: "mundane" },
{ name: "makeup", qty: 2, canChoose: false, type: "mundane" },
{ name: "costumes/disguises", qty: 2, canChoose: false, type: "mundane" },
{ name: "props such as juggling balls or a book of songs", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: ["Alchemy, Brewing, Calligraphy, Carpentry, Cartography, Cobbling, Cooking, Glassblowing, Jeweling, Leatherworking, Masonry, Painting, Pottery, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Gossiping", "Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Art, Geography, History, Politics of [choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising", "Intuiting", "Perceiving"] },
{ name: "Performance", requiresTools: false, options: ["Dancing, Entertaining, Instrument* [choose one], Savoir Faire"] },
{ name: "Subterfuge", requiresTools: false, options: ["Disguising*, Forging*"] },
"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: ",
average: ,
},
ranking: {
noun: "Developing Talent",
specializations: ["", ""],
description: "When you become a rank 1 Entertainer you learn how to leverage your natural talents and can now use artistic skills to generate income. When you first take the Entertainer profession, choose whether you are an artist or a performer.Gain the benefits of that specific professional track at ranks 1, 2, 3, 4, and 5 of this profession.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You are proficient in one artistic medium of your choice, choosing from a Crafting* skill.Gain + 3 in this skill.Every week you may create one art piece to sell that earns you 1d10 + 20 sc.",
canChooseSpecialization: false,
},
{
rank: ,
prerequisite: { rank: 1, specialization: "Performer" },
specializationTitle: "Performer",
description: "You are proficient in one form of physical expression of your choice, choosing from Dancing, Entertaining, Instrument* [choose one], Contorting, or Tumbling.Gain + 3 in this skill. You may perform once per week in a local inn, tavern, or public space to earn 1d10 + 5 sc, in addition to free room and board.",
canChooseSpecialization: false,
}, {
rank: 2,
prerequisite: { rank: 2, specialization: "Artist" },
specializationTitle: "Artist",
description: "You may choose a second artistic medium and gain an additional + 3 when using that skill, and whenever you sell art you now earn 2d10 + 30 sc.Additionally, given one hour in a friendly city you can locate an artist’s commune that will house you for free for up to one week.",
canChooseSpecialization: true,
},
{
rank: 2,
prerequisite: { rank: 2, specialization: "Performer" },
specializationTitle: "Performer",
description: "You may choose a second skill of physical expression and now gain + 3 to any check using that skill.Your performances now earn you 2d10 + 10 sc per week, in addition to free room and board.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Aritist" },
specializationTitle: "Aritist",
description: "Your abilities as an artist blossom and you now gain an additional + 3 to checks made with either skill chosen at rank 1 and 2 of this profession. Selling an art piece now generates 4d10 + 60 sc.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Performer" },
specializationTitle: "Performer",
description: "Your performance has caught the attention of a sponsor who offers to support and represent you.Your performances now earn you 4d10 + 20 sc per week. Your budding reputation also allows your sponsor to petition for invitations to any event hosted by an NPC with the aristocratic or mercantile background with a 50% chance of success.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "Artist" },
specializationTitle: "Artist",
description: "One of the mediums chosen at rank 1 or 2 of this profession becomes your specialty and you now gain an additional + 3 to any check using that skill.Selling an art piece now generates 10d10 + 50 sc.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 4, specialization: "Performer" },
specializationTitle: "Performer",
description: "Your reputation spreads and the citizenry has become enthralled by your performances.Every week spent performing now earns you 8d10 + 40 sc and increases your Goodwill by + 1. Your chance of petitioning an invitation successfully increases to 75 %, and there is a small chance that invitations to such events are sent directly to you (this will be determined by your MC).You now gain + 3 to any check using the skills chosen at ranks 1 and 2 of this profession.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Artist" },
specializationTitle: "Artist",
description: "You are considered an artistic master of the medium chosen at rank 4 of this profession.You maximize your bonus to this skill(it becomes a + 20).Selling an art piece now generates 20d10 + 100 sc. Once in your lifetime, you may pour your heart and soul into a single work of art that is of legendary quality and can be sold for 2d10+ 200 dc(diamond coins).This piece takes 4 weeks of work to complete.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Performer" },
specializationTitle: "Performer",
description: "You are considered a celebrity in friendly settlements of your home region.Your reputation allows you to attend any event organized by NPCs with an aristocratic or mercantile occupation.Every day you spend in a friendly settlement increases the likelihood you receive a direct invitation to such an event.Furthermore, as one of the most famous performers in the world, you can secure an audience with individuals of great influence.Any NPC with the equivalent of 4 or fewer ranks in any occupation will make time to meet with you within 2 hours of your request. Your performances now earn you 10d10 + 50 sc per week. Additionally, once per month you may design and perform a special performance that leaves audiences in awe.You immediately gain + 5 Goodwill in the settlement in which you perform and all NPCs that are monster rank 5 or lower who are in attendance are Charmed by you for one week.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Guard",
},
occupations: ["Performer", "Militant"],
description: "You are the first line of defense against danger and threats to the people and places you are sworn to protect.You might be stationed at a castle gate, patrolling the streets of a city, or guarding a convoy on a dangerous road.You are always alert and ready, armed with your weapons and your training, to keep those in your charge safe from harm.With your unwavering vigilance and your keen eye, you are a reassuring presence, providing peace of mind and security to all who depend on you for protection.",
StartingEquipment: [
{ name: "rucksack", qty: 1, canChoose: false, type: "mundane" },
{ name: "a spear or a halberd", qty: 1, canChoose: false, type: "mundane" },
{ name: "Gambeson Armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "chainmail armor", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "torch", qty: 10, canChoose: false, type: "mundane" },
{ name: "deck of cards", qty: 1, canChoose: false, type: "mundane" },
{ name: "manacles", qty: 1, canChoose: false, type: "mundane" },
{ name: "insignia of rank (banner, patch, pin, etc.) ", qty: 1, canChoose: false, type: "mundane" },
{ name: "hooded lantern", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },

],
skillsEachRank: {
skills: [
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Influence", requiresTools: false, options: ["Intimidating"] },
{ name: "Knowledge", requiresTools: false, options: ["Economics, Geography, History, Law,Medicine *, Military, Politics of[choose region]"] },
{ name: "Observation", requiresTools: false, options: ["Eavesdropping, Intuiting, Investigating"] },
{ name: "Stamina", requiresTools: false, options: ["Distance Running, Forced March, Menacing,Swimming"] },
{ name: "Survival", requiresTools: false, options: ["Animal Handling, Dungeoneering, Sheltering"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Private Security",
specializations: ["", ""],
description: "When you become a rank 1 Guard, and every time you gain a rank in the Guard profession, you advance your official position as private security personnel.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "When you become a rank 1 Guard, and every time you gain a rank in the Guard profession, you advance your official position as private security personnel.Guarding a private location comes with additional benefits: up to five of your travel companions gain free food and lodging at the locale as you do, but do not receive payment for guarding the location unless they also have this occupation.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "You have been recognized as a skilled and dedicated guard. Whenever you are in an urban area, you can find work as a Guard at a private location.Your pay increases to 3 sc per day, with a weekly bonus of 9 additional sc(for a total of 30 sc per week) using this feature. Additionally, as you are trusted to act with discretion, you easily pick up rumors regarding your urban environment. After guarding a location for two days, you learn the nature of one of the following aspects of the urban area: layfolk, mercantile, military, political, religious, or underworld.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "Trusted as one of the best of the best, you are charged with protecting individual personnel of great importance.You earn 10 sc per day, with a 30 sc bonus each consecutive week(for a total of 100 sc or 1 q per week) and you gain + 1 community Goodwill.You can earn no more than + 1 Goodwill per month using this feature. You are also given authority to speak on behalf of the individual whom you protect.You may secure a meeting with any political, military, or economic official who has three or fewer occupational ranks; they will make time to meet with you within 8 hours of your request.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Gain the rank 1 benefits of one of the following professions of your choice: honorable, inquisitor, knight, soldier, or thug. You may secure a meeting with any political, military, or economic official who has four or fewer occupational ranks; they will make time to meet with you within 8 hours of your request.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Gain the rank 1 benefits of an additional profession from your rank 4 options, or gain the rank 2 benefits of the profession that you chose at rank 4. You may secure a meeting with any political, military, or economic official who has four or fewer occupational ranks; they will make time to meet with you within 2 hours of your request.",
canChooseSpecialization: false,
},

],
}
},
{
name: {
noun: "Honor Able",
},
occupations: ["Aristocratic"],
description: "You are a member of the upper echelons of society, held in high esteem by those around you.Having been born into privilege, with access to the best education, training, and resources, and are expected to use your influence and power for the betterment of the realm.A leader among leaders, with the respect and admiration of your peers, you are looked upon as a symbol of the ideals and values of your noble heritage.",
StartingEquipment: [
{ name: "satchel", qty: 1, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "two sets of clothes (noble)", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "books of any topic fiction or nonfiction", qty: 10, canChoose: false, type: "mundane" },
{ name: "clothes (ceremonial)", qty: 1, canChoose: false, type: "mundane" },
{ name: "blank journal", qty: 1, canChoose: false, type: "mundane" },
{ name: "quill pen", qty: 1, canChoose: false, type: "mundane" },
{ name: "wineskin", qty: 1, canChoose: false, type: "mundane" },
{ name: "signet ring", qty: 2, canChoose: false, type: "mundane" },
{ name: "writ of statu", qty: 1, canChoose: false, type: "mundane" },

],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: ["Calligraphy, Cartography, Jeweling, Painting, Weaving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Intimidating, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Art, Economics, Geography, History, Law, Military, Politics of[choose region], Religion [choose one]"] },
{ name: "Performance", requiresTools: false, options: ["Dancing, Entertaining, Instrument* [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Eavesdropping, Perceiving"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: 
},
ranking: {
noun: "Noble Title",
specializations: ["", ""],
description: "When you become a rank 1 Honorable, and every time you gain a rank in the Honorable profession, your influence and staff expand significantly as your noble title is elevated.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You own a tract of land containing an upper-class residence. Depending upon the standards of the nation in which you own land, this might range from a cityside abode to a countryside estate.You may employ up to five attendants that maintain your grounds.Your noble affairs are assumed to cover the expenses of your grounds and staff, though you must personally finance any additional or specialized staff or modifications to your estate. Furthermore, you enjoy respect among aristocrats.You can secure an audience with most city officials within three days of requesting one. Lastly, you have a personal attendant that will carry your supplies for you and handle basic scheduling arrangements on your behalf.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your estate doubles in size, and you now employ 10servants.You may choose two mods from the list below to construct on your grounds. You can secure an audience with most city officials within two days of requesting one.Nobles of lesser rank will go out of their way to accommodate your requests.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your estate doubles again (quadrupling from its original size).You now employ 20 servants and 10 specialized servants that are Monster Level 2 or lower, such as Guards or Scouts.These specialized employees will not travel with you, but will follow your spoken commands while on your estate grounds.Additionally, you may construct two more mods from the Aristocratic Property Modifications list. You can secure an audience with most city officials within one day of requesting one.Nobles of lesser rank will go out of their way to accommodate your requests.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your estate doubles again (eight times its original size). You now employ 40 servants and 20 specialized servants that are monster level 2 or lower, such as Guards or Scouts. These specialized employees will not travel with you, but will follow your spoken commands while on your estate grounds.Additionally, you may construct three more mods from the Aristocratic Property Modifications list. You can secure an audience with most city officials within one hour of requesting one.Nobles of lesser rank will go out of their way to accommodate your requests.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your estate doubles again (sixteen times its original size).You now employ 80 servants and 40 specialized servants that are Monster Level 2 or lower, such as Guards or Scouts. These specialized employees will not travel with you, but will follow your spoken commands while on your estate grounds.You also have five elite attendees, which can be monster level 3 or lower.These elite attendees will travel with you on any of your adventures if asked.Additionally, you may construct three more mods from the list below. You can secure an audience with most city officials immediately upon requesting one.Nobles of lesser rank will go out of their way to accommodate your requests.",
canChooseSpecialization: false,
},
propertyText: "Aristocratic property modifications",
upgrades: [
{
name: "Guest House",
description: "You construct an additional residential building capable of housing ten people.",
},
{
name: "Barracks",
description: "You construct a stark, practical building capable of holding up to twenty soldiers.This building does not include a kitchen or lounge as a residence would.",
},
{
name: "Granary",
description: "You build a silo or storage barn that grants you the capacity to stockpile enough food to provide for your entire estate through a standard winter season.This does not automatically guarantee that you can find enough food to fill the granary, however.",
},
{
name: "Residence Upgrade: Manor",
description: "You upgrade your residency to a manor, making it look aesthetically pleasing and luxurious on the outside as well as increasing the number of rooms and amenities within.",
},
{
name: "Manor Upgrade: Keep",
description: "You upgrade your manor to a keep, expanding the number of rooms and fortifying the exterior walls.",
},
{
name: "Marketplace",
description: "You clear out a plot of land for merchants to congregate and ply their wares.Provided that merchants live nearby, this earns favorability with them and generates 20d20 sc per week for you.",
},
{
name: "Garden",
description: "You construct an elaborate garden for relaxation, meditation, and entertaining guests.",
},
{
name: "Stables",
description: "You build stables that can house up to 20 horses and equipment for riding(including armored barding).You must still buy any horses and equipment separately.",
},
{
name: "Walls",
description: "You construct walls around 20 acres of your property, securing your land against the threat of invasion"
},
{
name: "Watchtowers",
description: "You install watchtowers around 20 acres of your property, allowing additional vigilance against potential threats."
},
],
}
},
{
name: {
noun: "Inpuisitor",
},
occupations: ["Religious", "Militant"],
description: "Even the gods have enemies and they entrust their most devoted and zealous followers to protecting their interests in the mortal realm.Twisted fiends, undead abominations, and heretical cults are just a few of the enemies you root out and destroy, wherever they might hide.Your faith guides you in the endless battle against evil where you struggle to make the world just a little bit safer",
StartingEquipment: [
{ name: "traveler’s pack", qty: 1, canChoose: false, type: "mundane" },
{ name: "scale mail", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (fine)", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "signet ring", qty: 1, canChoose: false, type: "mundane" },
{ name: "writ of religious authority", qty: 1, canChoose: false, type: "mundane" },
{ name: "mess kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 3, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
{ name: "manacles", qty: 2, canChoose: false, type: "mundane" },

],
skillsEachRank: {
skills: [
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Crafting", requiresTools: true, options: ["Alchemy, Smithing, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Intimidating, Persuadingg"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana, Chemistry, History, Medicine*, Religion[choose one]"] },
{ name: "Luck", requiresTools: true, options: ["Fortuity"] },
{ name: "Observation", requiresTools: false, options: ["Eavesdropping, Intuiting, Investigating, Perceiving"] },
{ name: "Stamina", requiresTools: true, options: ["Distance Running, Forced March"] },
{ name: "Subterfuge", requiresTools: true, options: ["Disguising*, Evading, Lockpicking*"] },
{ name: "Survival", requiresTools: true, options: ["Dungeoneering, Sneaking, Tracking"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Witchfinder",
specializations: ["", ""],
description: "When you become a rank 1 Inquisitor, and every time you gain a rank in the inquisitor profession, your ability to hunt down dark magic users improves.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Spending a week in any settlement allows you to locate one hidden cult, dark ritual, or forbidden magic user if they are present at that time.If located, they can be reported to the authorities of your religion who may request your assistance in eradicating them.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "When in a friendly medium to large settlement in which your religion has a presence, you may work as a gravewatcher in the local cemetery.This work involves protecting the consecrated grounds from tampering or theft and in dispatching minor undead creatures that tend to frequent those areas.Performing this work earns you 2d10 + 20 sc per week.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "You may now perform your rank 1 Witchfinder feature in just 3 days.Furthermore, you may take into your service one of the retinue members from the list below.This person will travel with and protect you, taking their combat initiative immediately after yours.Each option can be chosen only once.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your grave-watcher service now earns you 4d10+40 sc per week.You may take an additional retinue member from the Inquisitor Retinue list.Each option can be chosen only once.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You are considered a Witchfinder General and may call upon the services of your religion in the pursuit of eradicating evil.Once per month after locating a heretical cult, dark ritual, or forbidden magic user using your rank 1 feature you may form an inquisition that produces 2d20 + 10 faithful militants of NPC rank 2 or lower who will assist you in the task in destroying this evil.They will follow your reasonable and lawful commands for one day.However, they will not travel farther than 30 miles from their home settlement. You may take a third retinue member into your service from the list below",
canChooseSpecialization: false,
},
propertyText: "Inquisitor retinue options
upgrades: [
{
name: "Courtier",
description: "Monster Level 2. This minor noble can attempt to gain you an audience with any NPC with 4 or fewer professional ranks with the aristocrat, mercantile, or military occupations.",
},
{
name: "Demonologist.",
description: "Monster Level 2. This researcher is not equipped for combat but is highly skilled in uncovering information about demons and cults."
},
{
name: "Physician",
description: "Monster Level 2. This medical specialist is not equipped for combat but grants you significant medical assistance.",
},
{
name: "Rogue",
description: "Monster Level 3. This criminal has agreed to serve you in exchange for a commuted prison sentence.",
},
{
name: "Veteran Soldier",
description: "Monster Level 3. This experienced soldier is battle- ready and eager to fight on your behalf.",
},
{
name: "War Priest",
description: "Monster Level 3. This war priest shares your religion and is able to cast minor spells from the Divine Source.",
}
],
}
},
{
name: {
noun: "Knight",
},
occupations: ["Aristocratic", "Militant"],
description: "You are a defender of the innocent and a champion of justice.Armed with your shining armor and deadly weapons, you roam the lands, righting wrongs and vanquishing evil wherever you find it.With each victory, you earn the loyalty and respect of the people, who look upon you as a shining symbol of hope and valor in a dark and uncertain world.",
StartingEquipment: [
{ name: "rucksack", qty: 1, canChoose: false, type: "mundane" },
{ name: "one large blade", qty: 1, canChoose: false, type: "mundane" },
{ name: "chainmail armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "signet ring", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "bedroll", qty: 1, canChoose: false, type: "mundane" },
{ name: "mess kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "embroidered hooded cloak", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 5, canChoose: false, type: "mundane" },
{ name: "torches ", qty: 5, canChoose: false, type: "mundane" },
{ name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
{ name: "50 ft rope", qty: 1, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Crafting", requiresTools: true, options: ["Leatherworking, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Empathy, Intimidating, Leadership, Persuading"] },
{ name: "Knowledge", requiresTools: true, options: ["Geography, History, Law, Military, Politics of[choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Intuiting, Perceiving"] },
{ name: "Performance", requiresTools: true, options: ["Instrument* [choose one], Savoir Faire"] },
{ name: "Stamina", requiresTools: true, options: ["Forced March, Distance Running"] },
{ name: "Survival", requiresTools: true, options: ["Animal Handling"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Coat Of Arms",
specializations: ["", ""],
description: "When you become a rank 1 Knight, and every time you gain a rank in the knight profession, your reputation expands and it becomes easier for you to find quests.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Once per week in any friendly settlement, you may make a Persuading or Perceiving roll(DC12) to seek out citizens in need of your services.These quests can range from arbitrating family disputes to hunting dangerous creatures to offering protective services to minor nobles or merchants, and successfully completing them will generate + 1 Goodwill with that settlement.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your name and reputation has attracted a number of young hopefuls and you may choose to bring one Page into your employ(stats in the Creature Compendium).This page will travel with you as your attendant, follow reasonable and lawful commands, and take their Initiative immediately after yours in combat.They will hold you in positive regard until you give them a reason not to. Completed quests now come with an additional monetary reward of 2d10 sc.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You now have enough standing to promote your Page to a Squire.This squire will travel with you as your servant and has a simple set of weapons and armor with which they are proficient.They will follow reasonable and lawful commands, and take their Initiative immediately after yours in combat. You have attracted the attention of a local lord or knightly order that seeks to enlist you to their service.They will provide you with modest accommodations of food and lodging on their property as well as a monthly stipend of 1d10 + 10 sc.Your lord or order may occasionally approach you with tasks and expects you to serve their interests.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You have achieved the standing of a Knight-Regent and may take up to five Knights(Monster Level 3) into your own employ.These Knights view you as a trusted leader and friend and will follow your reasonable and lawful commands but they will not regularly travel with you. Every week these knights operate in a given region they will generate + 1 Goodwill and bring in enough monetary revenue to maintain their own equipment, room, and board. Additionally, you may take rank 1 of the Honorable profession, including all starting equipment and skills.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You are now considered a Knight-Commander and may take up to 11 knights into your employ.These knights view you as a trusted leader and friend and will follow your reasonable and lawful commands but they will not regularly travel with you. You may issue a quest that will call all knights to your service.They will travel with and protect you, taking their initiative directly after yours in combat, in direct pursuit of the quest’s completion.Quest examples are: to destroy a powerful monster, overthrow an evil tyrant, or to protect a community from an impending attack, but may include any task in service to your home kingdom or knight order tenants.Once you issue such a quest, you cannot do so again for six months.",
canChooseSpecialization: false,
},
],
}
},
{
name: {
noun: "Nomad",
},
occupations: ["Wanderer"],
description: "Traveling from place to place with your tribe, you follow seasonal patterns and seek fertile grounds for your livestock. You are self - sufficient and have a deep connection to the land and the creatures that roam it, honed from a life of constant movement and adaptation to changing environments.Highly skilled in tracking, survival, and animal husbandry, you are highly valued by other groups, and your knowledge of the wildlands is unmatched.",
StartingEquipment: [
{ name: "satchel and saddlebags", qty: 1, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "hooded cloak", qty: 1, canChoose: false, type: "mundane" },
{ name: "bedroll", qty: 1, canChoose: false, type: "mundane" },
{ name: "mess kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 7, canChoose: false, type: "mundane" },
{ name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
{ name: "torches ", qty: 5, canChoose: false, type: "mundane" },
{ name: "waterskin ", qty: 1, canChoose: false, type: "mundane" },
{ name: "50 ft rope", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Crafting", requiresTools: true, options: ["Alchemy, Brewing, Carpentry, Cartography, Cobbling, Cooking, Leatherworking, Masonry, Painting, Pottery, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Empathy, Gossiping, Intimidating, Leadership, Persuading"] },
{ name: "Knowledge", requiresTools: true, options: ["Art, Astrology, Astronomy, Geography, History, Medicine *, Religion[choose one], Vehicles* [land]"] },
{ name: "Observation", requiresTools: false, options: ["Intuiting, Perceiving"] },
{ name: "Performance", requiresTools: true, options: ["Instrument* [choose one]; Entertaining"] },
{ name: "Stamina", requiresTools: true, options: ["Distance Running, Forced March, Swimming"] },
{ name: "Survival", requiresTools: true, options: ["Animal Handling, Dungeoneering, Foraging, Nature, Navigating *, Sneaking, Trackingg"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Gather No Moss",
specializations: ["", ""],
description: "You are an experienced traveler and survivalist and can always locate food or water while traveling in your home region.You know all the roads and pathways in your home region.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You have one passive beast of burden that is your trusted steed.It is highly intelligent and well trained for its type and will follow simple commands.If separated, it will seek you out from up to a mile away and can be called to your side. It is mundane, not magical, so it cannot be instantaneously summoned.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your beast of burden can be used to pull a customized cart or wagon large enough to hold you and up to three other individuals.It shelters you from the elements.This wagon can always be repaired using locally sourced materials and is not slowed by rugged terrain.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Your wagon is now large enough to carry you and up to five individuals and their personal belongings.You have two beasts to pull it, instead of only one.You may take 1 rank in the Trader, Entertainer, Physician, or Charlatan professions and gain the following benefit.Your selection gives you additional benefits at ranks 4 and 5.",
canChooseSpecialization: true,
},
{
rank: 3,
prerequisite: { rank: 1, specialization: "Trader" },
specializationTitle: "Trader",
description: "Your wagon is a pop-up shop that may carry and trade general goods and you are exempt from any tariffs or licenses required to trade in your home region.Your Trader business dealings earn an additional 2d10 + 10 sc.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 2, specialization: "Entertained" },
specializationTitle: "Entertained",
description: "Your wagon is a popup stage or artist gallery from which you can perform or display your wares.Gain + 3 to any skill check with the performance tag made from your wagon.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Physician" },
specializationTitle: "Physician",
description: "Your wagon is considered a well-sourced medical facility in which you can treat diseases or distribute herbal medicines.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 4, specialization: "Charlatan" },
specializationTitle: "Charlatan",
description: "Your wagon acts as a base of operations for your scams and gives you + 3 on any Deceiving check made in relation to those scams.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You have found a community of like-minded nomads who will travel with you in your home region.This community will treat you and your allies as trusted friends and will support you with food and lodgings whenever possible.This community brings four distinct wagons of the type chosen in rank 3 of this profession.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 1, specialization: "Trader" },
specializationTitle: "Trader",
description: "Once per visit to a friendly town or settlement, you may initiate a grand trading day that earns you double your Trader business dealings income.Additionally, you may make contact with one notable NPC with the equivalent of 3 or fewer ranks in any occupation.",
canChooseSpecialization: false,
},
{
rank: 4
prerequisite: { rank: 2, specialization: "Entertainer" },
specializationTitle: "Entertainer",
description: "Once per visit to a friendly town or settlement, you may organize an art show or performance for the local citizenship.This earns you 2d20 + 10 sc, + 3 Goodwill, and you may make contact with one notable NPC with the equivalent of 3 or fewer ranks in any occupation.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "Physician" },
specializationTitle: "Physician",
description: "Once per visit to a friendly town or settlement, you may establish a makeshift hospital to treat the local populace. Your practice will halt the spread of any plague or disease and earns you an instant + 5 Goodwill with the settlement. You are granted free food and lodgings for one month.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 4, specialization: "Charlatan" },
specializationTitle: "Charlatan",
description: "Once per visit to a friendly town or settlement, you may attempt a grand scam that earns you double your scam income.Additionally, given one week of time you may recruit one apprentice who will not travel with you but who will perform the rank 1 Charlatan scam in your absence. This still comes with the risk of discovery, and sc earned from this scam will be saved until you are present to collect."
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You gain no primary nomad benefits at this rank, but gain additional benefits based on your secondary profession chosen at rank 3.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 1, specialization: "Trader" },
specializationTitle: "Trader",
description: "You may now hire an apprentice Trader who will travel with you but who will not put themselves willingly into danger. While stationed in a friendly settlement, this apprentice will run your Trader business dealings without your presence and your dealings now earn an additional 6d10 sc.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 2, specialization: "Entertainer" },
specializationTitle: "Entertainer",
description: "You may now recruit up to three Entertainers who will travel with you but who will not put themselves willingly into danger.These entertainers boost your income from your rank 4 ability by 2d10 sc per entertainer and can continue to perform or sell their wares when you are not directly present.This passive income earns you 1d10 sc per entertainer per week.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 3, specialization: "Physician" },
specializationTitle: "Physician",
description: "You may now hire an assistant who will travel with you but who will not put themselves willingly into danger.When your assistant is present, gain + 3 on any Medicine check to treat an injury or disease.Additionally, your assistant can produce and sell herbal remedies without needing your presence and can earn 2d10 + 10 gold pieces per week when stationed in a friendly settlement.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Charlatan" },
specializationTitle: "Charlatan",
description: "You may now recruit a maximum of four apprentices at any time who will each perform the rank 1 Charlatan scam without your presence.This still comes with the risk of discovery for the apprentice and any sc earned from these scams will be saved until you are present to collect it.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Physician",
},
occupations: ["Academic", "Religious"],
description: "You are dedicated to healing the sick and alleviating the suffering of those around you.You have honed your skills through years of study and practice, mastering the use of medicine and scientific methods to diagnose and treat a wide range of ailments.Your compassion and your unwavering commitment to your patients have earned you a reputation as one of the best in the land, and you are often called upon to tend to the sick and injured.",
StartingEquipment: [
{ name: "belt pouch and satchel", qty: 1, canChoose: false, type: "mundane" },
{ name: "gambeson armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or ki", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "bandages", qty: 10, canChoose: false, type: "mundane" },
{ name: "medicine (basic)", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 3, canChoose: false, type: "mundane" },
{ name: "lamp", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oi", qty: 1, canChoose: false, type: "mundane" },
{ name: "medicinal tome", qty: 1, canChoose: false, type: "mundane" },
{ name: "ink", qty: 1, canChoose: false, type: "mundane" },
{ name: "quill", qty: 1, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting*", requiresTools: true, options: ["Alchemy, Brewing, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Empathy,Leadership"] },
{ name: "Knowledge", requiresTools: true, options: ["Arcana, History, Law"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Intuitingg"] },
{ name: "Subterfuge", requine]; EntresTools: true, options: ["Lockpicking, Sleight of Hand"]
},
{ name: "Survival", requiresTools: true, options: ["Animal Handling, Dungeoneering, Foraging, Nature, Navigating *, Sneaking, Trackingg"] },

],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Treatment",
specializations: ["", ""],
description: "When you become a rank 1 Physician, and every time you gain a rank in the Physician profession, your skill as a medical practitioner and your status in the medical community improves.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Given two days of operation at a well-resourced medical facility, you can attempt to treat one patient.Make an INT/ Medicine check; if you roll a 15 or higher, then you cure one creature of a common disease.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You may now attempt to cure uncommon diseases. Your patient load increases to two creatures; only one may have an uncommon disease.Given two days of operation at a well- resourced medical facility, make separate INT checks for each patient and add your Medicine skill; if you roll a 15 or higher, then you cure the disease.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your patient load increases to four; only one of these patients may have an uncommon disease. Helping patients in this way now allows you to earn up to + 1 Goodwill per week.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You may now also attempt to cure rare diseases. Your patient load remains at four; only one may have an uncommon or rare disease.Given two days of operation at a well- resourced medical facility, make separate INT checks for each patient and add your Medicine skill; if you roll a 15 or higher, then you cure the disease. At this point, you are widely renowned internationally as one of the preeminent physicians in the world.Monarchs and people of significant influence seek you out for treatments, and you can secure an audience with almost any notable individual within 8 hours of requesting it.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your patient load increases to five creatures. Only one creature may have a rare disease, and all other creatures may have common or uncommon diseases. Helping patients in this way now allows you to earn up to + 3 Goodwill per week.",
canChooseSpecialization: false,
},

],
}
},
{
name: {
noun: "Pioneer",
},
occupations: ["Aristocratic", "Wanderer"],
description: "You are always pushing the boundaries and charting new territories.With a thirst for adventure and discovery, you are not afraid to venture into the unknown.A builder, farmer, and protector, you create new settlements and carve out a place for yourself and those who follow in your wake.Your determination, resilience, and resourcefulness are what sets you apart, and your name is known and respected by those who live in the frontier lands.",
StartingEquipment: [
{ name: "traveler’s pack", qty: 1, canChoose: false, type: "mundane" },
{ name: "wood-splitting axe", qty: 1, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "hooded cloak", qty: 1, canChoose: false, type: "mundane" },
{ name: "person tent", qty: 2, canChoose: false, type: "mundane" },
{ name: "mess kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 7, canChoose: false, type: "mundane" },
{ name: "torches", qty: 5, canChoose: false, type: "mundane" },
{ name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
{ name: "50 ft rope", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Crafting*", requiresTools: true, options: ["Carpentry, Cartography, Cooking, Glassblowing, Jeweling, Leatherworking, Masonry, Pottery, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Empathy, Leadership, Persuading"] },
{ name: "Knowledge", requiresTools: true, options: ["Geography, Medicine*, Vehicles* [land], Vehicles * [water]"] },
{ name: "Lucky", requiresTools: false, options: ["Scavenging"] },
{ name: "Observation", requiresTools: true, options: ["Intuiting, Perceiving"] },
{ name: "Stamina", requiresTools: true, options: ["Distance Running, Forced March, Swimming"] },
{ name: "Survival", requiresTools: true, options: ["Animal Handling, Foraging, Nature, Navigating *, Sheltering, Sneaking, Tracking"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Homestead",
specializations: ["", ""],
description: "When you become a rank 1 Pioneer, and every time you gain a rank in the Pioneer profession, you expand your control over an unclaimed tract of wilderness.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You own a plot of undeveloped frontier land approximately 20 acres in size.The land is assumed to produce enough water and food to sustain a household. Additionally, you have made arrangements to have a place of residence constructed on your land.The residence is large enough to house you and 6 companions, and it will be completed and ready to inhabit 6 months after you first make these arrangements.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "You establish a means of sustaining your homestead. Choose Farming, Fishing, or Logging.This choice grants you benefits at this rank and at rank 3.",
canChooseSpecialization: false,
}, {
rank: 2,
prerequisite: { rank: 2, specialization: "Farming" },
specializationTitle: "Farming",
description: "You have cleared 2 acres of land that is now ready forplanting, orchards, or livestock.You may hire up to 3 laborers who will work the land and produce a harvest worth 1d10 sc per week after expenses.Once per year, your crops produce enough bounty that you can store enough food for you and up to 6 companions for up to 3 months. You may also bring this crop to market; for each month’s worth of crops that you sell, you earn 4d10 + 20 sc.",
canChooseSpecialization: true,
},
{
rank: 2,
prerequisite: { rank: 3, specialization: "Fishing" },
specializationTitle: "Fishing",
description: "Your property borders a lake teeming with fish. You may hire 3 laborers to build and maintain a fishing ship that produces fish worth 1d10 sc per week after expenses.When your lake is not frozen, it produces enough food for 3 creatures to eat indefinitely.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 4, specialization: "Logging" },
specializationTitle: "Logging",
description: "Your land encompasses a vast forest that produces quality timber.You may hire up to five laborers to chop and sell this wood locally, earning 2d10 + 5 sc per week after expenses. Additionally, your reputation has attracted other homesteaders.You may choose to construct one option from the Community Upgrade list that becomes established beside your homestead.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your homestead grows to 40 acres. Additionally, your reputation has attracted more homesteaders.You may choose to construct 2 more Community Upgrades from the list below that becomes established beside your homestead.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 1, specialization: "Farming" },
specializationTitle: "Farming",
description: "You have cleared 5 acres of land and may hire up to 10 laborers who earn you 2d10 sc per week after expenses.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 2, specialization: "Fishing" },
specializationTitle: "Fishing",
description: "You may hire up to nine laborers to build and maintain 3 fishing ships that produce fish worth 2d10 sc per week after expenses.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Logging" },
specializationTitle: "Logging",
description: "You may hire up to twelve laborers to chop and sell this wood locally, earning 4d10 + 10 sc per week after expenses.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You are now considered the leader of the community and all others living near your homestead look to you for guidance. Your homestead is recognized as a settlement by the regional authority and you may construct a town hall that allows you to establish land trade with nearby communities. Additionally, your reputation has attracted more homesteaders.You may choose to construct two more Community Upgrades from the list below that becomes established beside your homestead.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You are officially recognized as a frontier mayor and may send petitions to the regional authority. Additionally, your reputation has attracted more homesteaders.You may choose to construct two more Community Upgrades from the list below that becomes established beside your homestead.",
canChooseSpecialization: false,
},
propertyText: "Community Upgrades",
upgrades: [
{
name: "Blacksmith",
description: ". A skilled blacksmith moves in to ply their trade, constructing a fully functioning forge and domicile on your homestead.Every week, the blacksmith produces 1d8 simple tools and/ or simple weapons.You earn a small tax from sales that the blacksmith makes, earning you 2d10 sc per week, or 3d10 sc per week if you have a Mine Shaft.",
},
{
name: "Docks",
description: "Requires bordering river, lake, sea, or ocean. You order the construction of a small commercial dock on a body of water within or bordering your homestead.This building produces fish for settlement consumption as well as allows trade via water routes.",
},
{
name: "Farm",
description: "Up to 10 acres of your homestead is sold to a local farmer who will work the land and produce enough food to feed the entire community.This additionally produces 1d10 sc per week.",
},
{
name: "Inn",
description: "You order the construction of a traveler’s inn upon your homestead.This structure includes a kitchen, stable, and tavern along with 10 rooms for visiting guests.You earn a small tax from all revenue generated in this inn, earning you 2d10 sc per week.",
},
{
name: "Marketplace",
description: "You clear out a plot of land for merchants to congregate and ply their wares.Provided that merchants live nearby, this earns favorability with them and generates 10 sc per day for you.",
},
{
name: "Mine Shaft",
description: "Surveyors locate valuable minerals on your homestead.At minimum, you will find either iron ore or clay, which you can sell to manufacturers for 20 sc per week. Your MC might also decide that you find precious metals or other substances underground.Construction includes a barracks for miners.",
},
{
name: "Palisade Wall",
description: "You construct walls around the heart of your homestead, securing your land against the threat of invasion.",
},
{
name: "Tailor",
description: "A skilled tailor moves in to ply their trade, constructing a fully functioning weavery, storefront, and domicile on your homestead.Every week, the tailor produces 1d10 clothing items.You earn a small tax from sales the tailor makes, earning you 1d10 + 5 sc per week, or 2d10 + 5 sc per week if you have a Farm.",
},
{
name: "Tanner",
description: "A skilled leatherworker moves in to ply their trade, constructing a fully functioning tannery, storefront, and domicile on your homestead.Every week, the tanner produces 1d6 leather goods.You earn a small tax from sales the tanner makes, earning you 2d10 + 5 sc per week.",
},
{
name: "Watchtower",
description: "You install watchtowers around your homestead for use by the local militia, allowing additional vigilance against potential threats.",
}
]

],
}
},
{
name: {
noun: "Sailor",
},
occupations: ["Mercantile", "Underworld", "Wanderer"],
description: "You have spent considerable time as an explorer, freebooter, pirate or mariner and define your life by the sea.From skiffs to frigates, you know your way around a ship and are as comfortable in a raging storm as you are in a pleasant breeze.You embrace the freedom, adventure, and danger of life as you traverse the trading lanes or explore parts unknown, never knowing what might be waiting over the next wave.",
StartingEquipment: [
{ name: "rucksack", qty: 1, canChoose: false, type: "mundane" },
{ name: "leather armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "mess kit,", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 5, canChoose: false, type: "mundane" },
{ name: "utensils", qty: 1, canChoose: false, type: "mundane" },
{ name: "bowl", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask", qty: 1, canChoose: false, type: "mundane" },
{ name: "50 ft rope", qty: 2, canChoose: false, type: "mundane" },
{ name: "compass", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: true, options: ["Balancing"] },
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics"] },
{ name: "Crafting*", requiresTools: true, options: ["Cartography, Cooking, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Intimidating, Leadership"] },
{ name: "Knowledge", requiresTools: true, options: ["Astrology, Astronomy, Geography,Economics, Medicine *, Military"] },
{ name: "Lucky", requiresTools: false, options: ["Fortuity, Scavenging"] },
{ name: "Observation", requiresTools: true, options: ["Intuiting, Perceiving"] },
{ name: "Performance", requiresTools: true, options: ["Instrument* [choose one], Singing"] }
{ name: "Stamina", requiresTools: true, options: ["Menacing, Swimming"] },
{ name: "Subterfuge", requiresTools: true, options: ["Evading, Sleight of Hand"] },
{ name: "Survival", requiresTools: true, options: ["Nature, Navigating*"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Sea legs",
specializations: ["", ""],
description: "When you become a rank 1 Sailor, and every time you gain a rank in the Sailor profession, your reputation among NPCs with your choice of mercantile, military, or underworld backgrounds improves.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "Crewmate" },
specializationTitle: "Crewmate",
description: ": You have the skills and knowledge to secure a temporary position on a trading, privateer, pirate, or exploratory vessel and earn 10 sc for every week spent working in a friendly port.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "Boatswain" },
specializationTitle: "Boatswain",
description: "You are an established member of a ship’s crew that provides you with free room and board in any port in which the ship is docked.You now earn 15 sc for every week of service, even if you are not at a port.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, specialization: "Captain" },
specializationTitle: "Captain",
description: "You have risen to the rank of captain and have your own ship with a crew under your employ.When achieving rank 3 in this profession you may choose a specialization: explorer, merchant, pirate, or privateer.This choice grants you specific abilities at ranks 4 and 5 as well as this rank.",
canChooseSpecialization: true,
},
{
rank: 3,
prerequisite: { rank: 3, specialization: "Explorer" },
specializationTitle: "Explorer",
description: "When choosing this specialization, you may immediately gain 1 rank of the Nomad profession, including all starting equipment and skills.Your ship is outfitted for long journeys.Once per week you may attempt a short expedition to discover parts unknown.Roll a d10 and refer to the chart below. 1-4: Your expedition proves a failure and you are unable to discover any landmasses or treasure of note. 5-8: Your expedition uncovers an island or shipwreck. Selling the mapped location or recovered salvage earns you 4d10 sc. 9-10: You discover a valuable shipwreck or island teeming with resources.Selling the mapped location or recovered salvage earns you 4d10 + 40 sc.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 4, specialization: "Merchant" },
specializationTitle: "Merchant"",
description: "When choosing this specialization you may immediately gain 1 rank of the Trader profession, including all equipment and skills.Every week you may perform a trade mission and earn 2d10 sc in addition to your trader income. When entering a new port, you can locate any specific shops, services, or trading houses within one hour.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 5, specialization: "Pirate" },
specializationTitle: "Pirate",
description: "When choosing this specialization you may immediately gain 1 rank of the Thug profession, including all equipment and skills.Once per week you may take your ship out to plunder a trading lane, earning you 8d10 + 80 sc but drawing the attention of local authorities.Every week spent plundering this region will earn your ship a cumulative 50 sc bounty that increases the chance of direct conflict with military or privateer vessels.You become aware of one safe port in the region that will never attempt to collect your bounty.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 6, specialization: "Privateer" },
specializationTitle: "Privateer",
description: "When choosing this specialization you may immediately gain 1 rank of the Soldier profession, including all equipment and skills.Your ship and crew are well known to the military of your home region and you may accept military contracts.These contracts pay 4d10 sc and generally include providing escort for supply ships, hunting dangerous pirates, or protecting endangered ports.Each completed contract provides + 1 Goodwill with local settlements.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 1, specialization: "Explorer" },
specializationTitle: "Explorer",
description: "You are now an expedition leader and can attempt to fund more elaborate exploratory missions.These missions can be sponsored by NPCs with an academic or aristocratic background or can be paid out of your own pocket.Each sponsor gives you a + 1 on the Elaborate Expedition, but takes 10 % of final earnings.Failing to succeed may damage your reputation with your sponsor.You also gain 1 rank in the nomad profession. Elaborate Expedition: 1 - 4: Your expedition proves a failure and you are unable to discover any landmasses or treasure of note. 5 - 8: Your expedition uncovers an island or shipwreck. Selling the mapped location or recovered salvage earns you 8d10 sc.9-10: You discover a valuable shipwreck or island teeming with resources.Selling the location or recovered salvage earns you 8d10 + 80 sc.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 1, specialization: "Merchant" },
specializationTitle: "Merchant",
description: "You are now a company merchant and gain 1 rank in the trader profession.You may hire an additional ship and no longer need to be present on board to run a trade mission.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 2, specialization: "Pirate" },
specializationTitle: "Pirate",
description: "You are now a pirate master and have a second ship under your command.Your plunder now earns you 12d10 + 120 sc.You now know the location of every safe port and harbor within your home region and can spend one week discovering one in new regions you visit.Additionally, you gain 1 rank in the thug profession.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 3, specialization: "Privateer" },
specializationTitle: "Privateer",
description: "You are now a commodore and have outfitted your ship for serious military engagements.You may now take contracts to hunt down dangerous bounties.Completing these contracts pays 8d10 sc and earns you an audience with any official with the aristocratic or military background if they have 4 or fewer professional ranks.Additionally, you gain 1 rank in the Soldier profession.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 1, specialization: "Explorer" },
specializationTitle: "Explorer",
description: "You are now a famed explorer and your name is spoken with awe by NPCs with academic or aristocracy backgrounds. You are twice as likely to find sponsors among these groups. The next elaborate exploratory mission you successfully complete will result in a small landmass being named after you and will earn you double the associated payment. Additionally, you gain the ability to communicate rudimentary ideas to any intelligent beings, even if you do not speak their language, and gain a + 3 to Intuiting checks regarding understanding unknown cultures, customs, or languages.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 2, specialization: "Merchant" },
specializationTitle: "Merchant",
description: "You are now a company master and may employ up to three trading vessels.Additionally, you gain 1 rank in the Trader profession.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 3, specialization: "Pirate" },
specializationTitle: "Pirate",
description: "You are now a pirate lord and may have a total of three ships in your fleet.Your plunder now earns you 20d10 + 200 sc and your infamy causes all but the bravest merchants to surrender without defense.You have a + 3 Intimidating against anyone within 5 miles of the port in which your ships are docked",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Privateer" },
specializationTitle: "Privateer",
description: "You are now an admiral in your home region’s navy and captain one of the strongest ships of the line available. You gain 1 rank in the Honorable profession, including all equipment and skills.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Soldier",
},
occupations: ["Militant"],
description: "You are a proud and dedicated warrior, serving your country and your people with honor and distinction.From defending your homeland against invaders to marching on a foreign land for just war, you are always ready to put your life on the line in the name of duty and honor.With your training, your discipline, and your courage, you are a force to be reckoned with, feared by your enemies and respected by your allies, and you are proud to serve as a symbol of strength and protection for those you hold dear.",
StartingEquipment: [
{ name: "rucksack", qty: 1, canChoose: false, type: "mundane" },
{ name: "spear or halberd", qty: 1, canChoose: false, type: "mundane" },
{ name: "Gambeson Armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "chainmail armor", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "torches", qty: 5, canChoose: false, type: "mundane" },
{ name: "flask", qty: 1, canChoose: false, type: "mundane" },
{ name: "bedroll", qty: 1, canChoose: false, type: "mundane" },
{ name: "flint & steel", qty: 1, canChoose: false, type: "mundane" },
{ name: "insignia of rank (banner, patch,pin, etc.)", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations ", qty: 7, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
{ name: "bandages", qty: 2, canChoose: false, type: "mundane" },
{ name: "50 ft rope", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: true, options: ["Balancing"] },
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Crafting*", requiresTools: true, options: ["Carpentry, Leatherworking, Smithing,Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Gossiping, Intimidating, Leadership"] },
{ name: "Knowledge", requiresTools: true, options: ["Geography, History, Law, Medicine*, Military, Politics of[choose region], Religion [choose one], Vehicles * [land]"] },
{ name: "Observation", requiresTools: true, options: ["Intuiting, Perceiving"] },
{ name: "Stamina", requiresTools: true, options: ["Forced March, Menacing"] },
{ name: "Survival", requiresTools: true, options: ["Animal Handling, Dungeoneering, Nature, Navigating * "] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Military Ranking",
specializations: ["", ""],
description: "When you become a rank 1 Soldier, and every time you gain a rank in the Soldier profession, you advance your official position in the military entity of which you are a member.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "When you become a rank 1 Soldier, and every time you gain a rank in the Soldier profession, you advance your official position in the military entity of which you are a member.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "You are a low-ranking noncommissioned (noncom) officer in the infantry In addition to your rank 1 benefits, while you are in an urban or rural area where your military maintains a presence, you gain a + 2 bonus to knowledge checks pertaining to current information of that region.Your stipend increases to 10 sc per week.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "When you reach rank 3 in the Soldier profession you may choose one of the specializations below: Infantry or Tactician.This choice gives you benefits at this rank, as well as ranks 4 and 5. Your stipend is now 15 sc per week.",
canChooseSpecialization: true,
},
{
rank: 3,
prerequisite: { rank: 1, specialization: "Infantry" },
specializationTitle: "Infantry",
description: "You are a mid-ranking noncom officer in the infantry. In addition to your rank 1 and 2 benefits, you can levy 2 members of your military that are Monster Level 2 or lower, such as Guards or Scouts.These members of the infantry will travel with you and fight to protect you while within 30 miles of their original post.",
canChooseSpecialization: false,
},
{
rank: 3,
prerequisite: { rank: 1, specialization: "Tactician" },
specializationTitle: "Tactician",
description: "You are a recognized battlefield tactician and commander. Members of the military you serve gain + 1 to their WILL while you are within 30 ft of them and they can see you. The knowledge bonus of your rank 2 feature increases from + 2 to + 5.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 1, specialization: "Infantry" },
specializationTitle: "Infantry",
description: "You are a high-ranking noncom officer in the infantry. You can now levy 5 members of your military, instead of only 2, using your rank 3 feature. Additionally, you may spend one week joining the forces of your military on campaign or patrol.Doing so earns you an additional 2d10 sc per week as well as increasing your reputation.NPCs with the aristocratic or militant occupation and 4 or fewer professional ranks will make time to meet with you within 8 hours of your request. Your standard military stipend increases to 20 sc per week.",
canChooseSpecialization: false,
},
{
rank: 4,
prerequisite: { rank: 2, specialization: "Tactician" },
specializationTitle: "Tactician",
description: "You are a distinguished battlefield tactician and commander. Any members of the military you serve gain + 1 to all of their mental defenses while they can see you and are within 30 ft of you.The knowledge bonus of your rank 3 feature increases from + 5 to + 7. Your standard military stipend increases to 20 sc per week.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: , specialization: "Infantry" },
specializationTitle: "Infantry",
description: "You are the highest rank of noncom officer in the infantry. You can now levy ten members of your military to travel with you anywhere within 30 miles of their original post. These NPCs can be of Monster Level 3 or lower.Additionally, you may spend one week joining the forces of your military on campaign or patrol.Doing so earns you an additional 4d10 sc per week. Your standard military stipend increases to 25 sc per week.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 4, specialization: "Tactician" },
specializationTitle: "Tactician",
description: "You are one of the most renowned military tacticians in the world and the knowledge bonus from your rank 4 feature increases from + 7 to + 10. Military commanders will seek you out for service and you may spend one week on campaign to earn 4d10 sc in payment. Furthermore, you can secure an audience with most military individuals of great influence.Any NPC with the equivalent of 5 or fewer ranks in any militant, aristocratic, or mercantile background will make time to meet with you within 2 hours of your request. Your standard military stipend increases to 25 sc per week.",
canChooseSpecialization: false,
}
],
}
},
{
name: {
noun: "Trader",
},
occupations: ["Mercantile"],
description: "You are constantly on the move, traveling from town to town and village to village in search of new markets and opportunities.With a keen eye for profit and a talent for negotiation, you buy low and sell high, always seeking out the best deals and the most valuable merchandise to trade.Whether you are trading in exotic spices, rare herbs, precious gems, or any other commodity that you can get your hands on, you are always seeking to turn a profit and to grow your wealth and influence in the world.",
StartingEquipment: [
{ name: "traveler’s pack", qty: 1, canChoose: false, type: "mundane" },
{ name: "hanging lantern rod", qty: 1, canChoose: false, type: "mundane" },
{ name: "gambeson armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "clothes(fine)", qty: 1, canChoose: false, type: "mundane" },
{ name: "blanket", qty: 1, canChoose: false, type: "mundane" },
{ name: "bedroll", qty: 1, canChoose: false, type: "mundane" },
{ name: "folding chair", qty: 1, canChoose: false, type: "mundane" },
{ name: "scales", qty: 1, canChoose: false, type: "mundane" },
{ name: "various pouches and bottles", qty: 2, canChoose: false, type: "mundane" },
{ name: "magnifying lens", qty: 1, canChoose: false, type: "mundane" },
{ name: "bolt of fabric (silk)", qty: 1, canChoose: false, type: "mundane" },
{ name: "spices (exotic) ", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: ["Alchemy, Brewing, Calligraphy, Carpentry, Cartography, Cobbling, Cooking, Glassblowing, Jeweling, Leatherworking, Masonry, Painting, Pottery, Smithing, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Art, Economics, History, Law, Medicine*, Politics of[choose region], Vehicles*[land], Vehicles* [water]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising, Intuiting, Perceiving"] },
{ name: "Survival", requiresTools: false, options: ["Animal Handling"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Network",
specializations: ["", ""],
description: "When you become a rank 1 Trader, and every time you gain a rank in the Trader profession, you can sell wares, resupply your stock, and expand your wealth and mercantile influence.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Given one week of business dealings in a marketplace, you increase your profitability through skillful trade.You earn2d10 + 20 sc each time you do this.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Given one week of business dealings in a marketplace, you increase your profitability through skillful trade.You earn 4d10 + 20 sc each time you do this, and you gain one tool or kit of your choice, which you may sell for 20 additional sc or keep for your own uses.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 2, specialization: "" },
specializationTitle: "",
description: "In addition to your rank 2 benefits, you gain the entrepreneurial capacity to open satellite trading stalls under your personal brand.Pick three marketplaces that you have been to before: whenever you return to those marketplaces, you get food and lodging for free. Additionally, you only need three days of trade in those marketplaces to gain your rank 2 trader benefit.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "You can apply your rank 3 benefit to any new marketplace that you travel to, provided that you spend at least one full week trading and establishing business connections in the new marketplace. Additionally, your rank 2 benefits increase to 8d10 + 80 sc and three tools or kits of your choice.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your reputation allows you to quickly ingratiate yourself into new marketplaces.You only need one day, rather than one week, to gain your rank 3 benefits in a new marketplace. Additionally, your rank 4 benefits increase to 15d10 + 150 sc and five tools or kits of your choice. Furthermore, as one of the most renowned entrepreneurs in the world, you can secure an audience with most individuals of great influence.Any NPC with the equivalent of 4 or fewer ranks in any occupation will make time to meet with you within 24 hours of your request.",
canChooseSpecialization: false,
},
],
}
},
{
name: {
noun: "Thief",
},
occupations: ["Underworld"],
description: "You use your agility and cunning to steal from the wealthy and powerful.You might be a pickpocket, an opportunist, or a brute that holds people up.Regardless, you always have an eye out for the next big score, and you are not above using violence if it means getting what you want.You thrive in the shadows, slipping in and out of buildings and alleyways undetected, and relish the excitement of pitting your skills against those of your marks.",
StartingEquipment: [
{ name: "daggers or knives", qty: 4, canChoose: false, type: "mundane" },
{ name: "pocketed cloak", qty: 1, canChoose: false, type: "mundane" },
{ name: "belt pouches", qty: 3, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "hooded lantern", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
{ name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 2, canChoose: false, type: "mundane" },
{ name: "50 ft rope,", qty: 1, canChoose: false, type: "mundane" },
{ name: "crowbar", qty: 1, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: true, options: ["Balancing, Contorting, Tumbling"] },
{ name: "Athleticism", requiresTools: true, options: ["Athletics, Sprinting"] },
{ name: "Crafting*", requiresTools: true, options: ["Jeweling, Painting, Pottery, Weaving, Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Empathy, Gossiping, Intimidating"] },
{ name: "Knowledge", requiresTools: true, options: ["Art, Economics, Geography, History, Law, Politics of[choose region]"] },
{ name: "Luck", requiresTools: true, options: ["Fortuity"] },
{ name: "Observation", requiresTools: true, options: ["Appraising, Eavesdropping, Intuiting, Investigating, Perceiving"]Dungeoneering, Sneaking
{ name: "Performance.", requiresTools: true, options: ["Entertaining, Savoir Faire"] },
{ name: "Stamina", requiresTools: true, options: ["Distance Running, Swimming"] },
{ name: "Subterfuge", requiresTools: true, options: ["Disguising*, Forging*, Lockpicking*, Sleight of Hand"] },
{ name: "Survival", requiresTools: true, options: ["Dungeoneering, Sneaking"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "tenure",
specializations: ["", ""],
description: "Second story work",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Given one day of thieving in any medium or large sized settlement, you earn 2d10 sc with a 10% chance of being discovered by the local authorities.For each day spent thieving in a given month, you gain an additional 10% chance of getting discovered, which accumulates for each day spent performing this action(two days leads to a 20 % chance, three days to a 30 % chance, etc.) with no upper limit to the likelihood of getting discovered. If discovered, you gain -1 community Goodwill and the local authorities immediately know your description and will seek you out for arrest or recompense.",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your thieving now earns you 4d10 sc per day. Additionally, given one day, you are able to find sympathetic criminals in any medium or large settlement.These criminals will direct you to inns and taverns that will always serve you, regardless of Goodwill, and will never report you to the authorities.Some of these institutions might offer food and lodgings for free in exchange for your services.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: , specialization: "" },
specializationTitle: "",
description: "Your thieving now earns you 8d10 sc per day. Your chance of discovery can never rise above 40%.You are now able to locate the dominant thieves’ guild in any medium or large settlement.Once per week this guild will offer you a specialty task that earns your thieving income x2 with a set 20% chance of discovery.The guild will always offer you safe lodging and mercantile services, regardless of Goodwill.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your thieving now earns you 16d10 sc per day. The thieves’ guild of your home region now considers you a member and gives you access to passages across any settlement. When using these passages, you will never run into any authorities.If there is a bounty on your head, you may pay your guild 75% of the bounty’s cost and they will make the bounty disappear.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "Your thieving income is now 20d10+200 sc per day. Your cumulative chance of discovery can never rise above 20%. If there is a bounty on your head, you may pay your guild 50% of the bounty’s cost and they will make the bounty disappear. Additionally, once per week you may recruit up to three thieves in any settlement.These thieves will not travel with you but will increase your subterfuge tag skill checks by + 3 per Thief for one day after being hired.",
canChooseSpecialization: false,
},

],
}
},
{
name: {
noun: "Thug",
},
occupations: ["Underworld", "Militant"],
description: "You are no stranger to the brutal struggle of urban life, outside the eyes of the law where the strong take from the weak and the sharpness of a blade says more than a written decree.Perhaps your actions come from necessity or maybe they come from a desire for power, but either way you are not afraid to use your cunning, strength, and wits to take what you want when you want it.You claim your territory through brute force or intimidation and don’t let anything stand in your way",
StartingEquipment: [
{ name: "backpack,", qty: 1, canChoose: false, type: "mundane" },
{ name: "hooded lantern", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "tinderbox", qty: 1, canChoose: false, type: "mundane" },
{ name: "cestus or brass knuckles", qty: 1, canChoose: false, type: "mundane" },
{ name: "brigandine armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "50 ft rope", qty: 1, canChoose: false, type: "mundane" },
{ name: "manacles", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 2, canChoose: false, type: "mundane" },
{ name: "torche", qty: 2, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Acrobatics", requiresTools: true, options: ["Balancing"] },
{ name: "Athleticism", requiresTools: true, options: ["Applied Force, Athletics, Sprinting"] },
{ name: "Influence", requiresTools: false, options: ["Deceiving, Intimidating"] },
{ name: "Luck", requiresTools: true, options: ["Fortuity,Scavenging"] },
{ name: "Observation", requiresTools: true, options: ["Appraising, Eavesdropping, Intuiting, Investigating, Perceiving"] },
{ name: "Stamina", requiresTools: true, options: ["Distance Running, Forced March, Swimming"] },
{ name: "Subterfuge", requiresTools: true, options: ["Disguising*, Evading, Forging*, Lockpicking *, Sleight of Hand"] },
{ name: "Survival", requiresTools: true, options: ["Dungeoneering, Navigating*, Sneaking, Tracking"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "",
average: ,
},
ranking: {
noun: "Gang Leader",
specializations: ["", ""],
description: "When you become a rank 1 Thug, and every time you gain a rank in the Thug profession, you improve the strength of your gang and expand your territory and influence.Every month that you operate a territory, you gain - 1 Goodwill with the local community.",
ranksAndSpecializations: [

{
rank: 1,
prerequisite: { rank: 0, specialization: "" },
specializationTitle: "",
description: "You have laid claim to territory in a medium or large sized settlement equivalent to one city block.Inns, Taverns, and Storefronts in that area will pay into your protection racket each week, earning you 3d10 + 30 sc after your own expenses.Businesses in your territory will always serve you, regardless of Goodwill.Once per week, you can recruit a maximum of three thugs of Monster Level 2 or lower into your gang.These thugs will travel with and protect you but only to a distance of 1 mile outside your territory",
canChooseSpecialization: false,
},
{
rank: 2,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your territory expands to approximately three city blocks and your protection racket now generates 6d10 + 60 sc per week.Your maximum number of thugs increases to six.",
canChooseSpecialization: false,
}, {
rank: 3,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your territory expands to approximately six city blocks and your protection racket now generates 12d10 + 120 sc per week.Your maximum number of thugs increases to 12. Additionally, you have managed to buy off a crooked guard who will turn a blind eye to low tier crimes in your territory for 10 sc per week.",
canChooseSpecialization: true,
},
{
rank: 4,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your territory expands to approximately ten city blocks and your protection racket now generates 20d10 + 200 sc.Your maximum number of thugs increases to 20 and it now costs 30 sc to pay off six guards in the area, instead of only one. You are a greatly feared authoritarian figure at this point. Gain rank 1 of the Honorable profession.",
canChooseSpecialization: false,
},
{
rank: 5,
prerequisite: { rank: 1, specialization: "" },
specializationTitle: "",
description: "Your territory expands to approximately fifteen city blocks and your protection racket now generates 40d10 + 400 sc. Your maximum number of thugs increases to 30 and it now costs 100 sc to pay off every guard in the area(instead of only one) for one week. Your MC may decide that a small minority of guards are incorruptible, but such guards are initially unaware that their associates have been bought out.They may or may not ever learn the truth. Finally, you gain the Call a Hit ability. Call a Hit.You may send thirty thugs to burn down a property, murder a target, or extort a bank or wealthy merchant for 20d10 sc.You lose 5 Goodwill when you do this.Once you use this ability, you cannot use it again until a month has passed.",
canChooseSpecialization: false,
},
{
],
}
},
{
name: {
noun: "",
},
occupations: [""],
description: "",
StartingEquipment: [
{ name: "satchel", qty: 1, canChoose: false, type: "mundane" },
{ name: "scroll case", qty: 1, canChoose: false, type: "mundane" },
{ name: "Gambeson Armor", qty: 1, canChoose: false, type: "mundane" },
{ name: "Choose a tool or kit", qty: 1, canChoose: true, type: "tool or kit" },
{ name: "lantern", qty: 1, canChoose: false, type: "mundane" },
{ name: "robes", qty: 1, canChoose: false, type: "mundane" },
{ name: "clothes (simple)", qty: 1, canChoose: false, type: "mundane" },
{ name: "flask of oil", qty: 1, canChoose: false, type: "mundane" },
{ name: "small collection of books and scrolls", qty: 1, canChoose: false, type: "mundane" },
{ name: "rations", qty: 2, canChoose: false, type: "mundane" },
{ name: "inkpot", qty: 1, canChoose: false, type: "mundane" },
{ name: "quill pen", qty: 1, canChoose: false, type: "mundane" },
{ name: "parchment", qty: 10, canChoose: false, type: "mundane" },
{ name: "waterskin", qty: 1, canChoose: false, type: "mundane" },
],
skillsEachRank: {
skills: [
{ name: "Crafting", requiresTools: true, options: ["Calligraphy", "Cartography", "Masonry", "Painting", "Pottery", "Woodcarving"] },
{ name: "Influence", requiresTools: false, options: ["Empathy", "Gossiping", "Persuading"] },
{ name: "Knowledge", requiresTools: false, options: ["Arcana", "Art", "Astrology", "Astronomy", "Biology", "Chemistry, Economics, Engineering, Geography, Law, Military, Politics of [choose region], Religion [choose one]"] },
{ name: "Observation", requiresTools: false, options: ["Appraising", "Intuiting", "Investigating", "Perceiving"] },
],
rankingBlerb: "",
},
occupationBonus: "",
startingWealth: {
roll: "?d20x?",
average: 100,
},
ranking: {
noun: "tenure",
specializations: ["", ""],
description: "",
ranksAndSpecializations: [

],
}
}
];

























const mcClasses = [
{
name: "Berzerker",
shortDescription: "Berzerkers are ferocious and direct fighters that channel their terrible rage into devastating combat prowess.",
quote: {
phrase: "I embrace the darkness within. It makes me strong. My fury is my guide, and I will meet victory…or oblivion.",
name: "Hanniah Sharptooth",
title: "queen of viscera"
},
longDescription: "You were born amidst the towering arctic mountains, axe and spear in hand.From an early age you displayed unmatched ferocity and an unyielding spirit, but there was also a darkness about you.Even by the time you were a young teen, you displayed not just bravery, but unmitigated savagery on the battlefield.As you continued to hone your physical prowess, the burning rage within you only grew hotter.Now you brim with tremendous bloodlust.The life of adventuring suits you, especially a life in pursuit of dangerous battles, as you look for any opportunity to unleash your inner demons. You are known and feared for your unstoppable blood rages.Whether you give into a blind fury or enter an almost transcendent state of awareness amid the carnage, your blood rage is a savage and terrible thing that few have ever survived.",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
}
]

},
entryTalent: {
prerequisites: ["Class Entry", "Berzerker", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities",
abilities: [
{
name: "Blood Rage",
description: "Gain one special AP that can only be used to make attacks on your turn or to make reactive attacks if you have the ability to do so.You regain this AP at the start of each of your turns, but it cannot carry over like normal AP. You can only gain one source of special AP.If you take this class feature while already having a source of special AP, choose which feature to retain.",
},
{
name: "Ferocious",
description: "If an effect would cause you to become Frightened, you may become determined and ferocious.You ignore that effect and become immune to being Frightened for a number of minutes equal to your amount of Berzerker Talents+ 1.(2 / Rest)"
}
]

}
stacks: [
{
name: "Exile",
description: "Your life is a cruel joke.Through some misdeed or overzealous act, you have become an exile, and you seek to make your own way in an uncaring world.",
talents: [
{
name: "marker",
prerequisites: ["Berzerker", "Exile", "Berzerker Entry"],
flavorTest: "You are marked, tattooed, or branded in some way. This sign of your exile has not broken your will.Gain one of the following benefits: ",
abilities: [
{
name: "Mad Dog",
description: "You have turned to the life of the mercenary, specializing in protection and thuggery.When you are within 5 ft of a friendly creature, that creature can add ½ your STR / Menacing to a CHA check that they make.",
},
{
name: "Kraken",
description: "You have turned to the sea, gaining + 6 to the Vehicles(Water) skill.When you roll CHA to interact with professional sailors or port workers, you can roll 2d20 and take the higher result.",
},
{
name: "Lone Wolf",
description: "When making AWR or INT checks that would implement skills with the Survival tag, you may use your CHA instead.",
}
],
},
{
name: "Drunken Fighter",
prerequisites: ["Berzerker", "Exile", "Marked"],
flavorTest: "If you have imbibed in the past hour, you gain +2 to your weapon damage rolls, but have TD.",
abilities: [

]
},
{
name: "Throw Anything",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "Improvised thrown weapons cost you 1 fewer AP to use (min 1) and deal 1d6 damage.",
abilities: [

]
},
{
name: "Brutality",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "Gain +1 TA when attacking a creature that is Frightened or Prone.",
abilities: [

]
},
{
name: "Another Swig",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "When you spend AP to move, you may take a drink (such as a potion or a tankard of ale) as part of the same move. Doing so does not provoke additional reactive attacks, even if your movement does.",
abilities: [

]
},
{
name: "Drunken Stagger",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "While the effects of Drunken Fighter are active, the first time you move on any given turn you do not trigger reactive actions.",
abilities: [

]
},
{
name: "Drunken Fist",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "If you have imbibed in the past hour, you may subtract any number up to your CHA from your attack roll, and add that same number to your damage roll.You must declare if you are using Drunken Fist and how much you are subtracting before you roll your attack. (CHA / Rest) ",
abilities: [

]
},
{
name: "Hidden Dagger",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "Your Sneak Attack damage increases by +1d6 (if you had no Sneak Attack, it becomes 1d6). You can apply Sneak Attack damage to a creature that you hit with a weapon that has the Concealed tag, once per turn, as long as you have at least one source of TA.You may still use Sneak Attack if Drunken Fighter is your only source of TD.",
abilities: [

]
},
{
name: "Cowards",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "Whenever your Ferocious ability is active and friendly creatures you can see are Frightened, you deal + 1 damage per ally you can see that is Frightened, to a maximum equal to your CHA.",
abilities: [

]
},
{
name: "Fighting dirty",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "When you are Flanking, you can apply TA to your Maneuver attack rolls.",
abilities: [

]
},
{
name: "Brawling",
prerequisites: ["Berzerker", "Exile", "Drunken Fighter"],
flavorTest: "Increase your unarmed damage die size by one (e.g., from 1d4 to 1d6).If you did not have an unarmed damage die, it becomes 1d4.",
abilities: [

]
},
{
name: "Beast Conmpanion" 
prerequisites: ["Berzerker", "Exile", "Exile 6"],
flavorTest: "You gain a special bond with a creature. This creature can be ML 2 or lower and must have the Beast tag and no other creature tags.Your companion follows your instructions and acts at the end of your turn. When your companion reaches 0 HP, it falls Unconscious rather than dying, and will return to full health upon Taking a Rest.",
abilities: [

]
},
{
name: "Regain Honor",
prerequisites: ["Berzerker", "Exile", "EBeast Companion", "Defiance"],
flavorTest: "Your mark becomes a badge of honor, an emblem of your path to restoring your name.You may use your WILL in place of your ANT or LOG when your ANT or LOG is attacked. (CHA / Rest) ",
abilities: [

]
},
{
name: "Companion Boon",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "Your beast companion gains additional maximum HP equal to your CHA.",
abilities: [

]
},
{
name: "Companion Boon II",
prerequisites: ["Berzerker", "Exile", " Companion Boon"],
flavorTest: "Whenever you and your companion are within 5 ft of each other, you both gain TA on your attacks. ",
abilities: [

]
},
{
name: "Companion Boon III",
prerequisites: ["Berzerker", "Exile", " Companion Boon II"],
flavorTest: "Your beast companion gains a bonus to its attack rolls equal to ½ your CHA.",
abilities: [

]
},
{
name: "Drunken resilience",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "You gain Resist Toxic 5 and become immune to common poisons.",
abilities: [

]
},
{
name: "Steady Fist",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "Drunken Fist becomes Steady Fist and no longer requires imbibing to use.",
abilities: [

]
},
{
name: "Steady Fist II",
prerequisites: ["Berzerker", "Exile", "Steady Fist"],
flavorTest: "You now gain +2 damage per -1 to hit from Steady Fist.",
abilities: [
{
]
},
{
name: "Restored Honor",
prerequisites: ["Berzerker", "Exile", "Capstone", "Regain Honor", "Exile 14"],
flavorTest: "Through endless tribulation you have emerged victorious, your honor restored.Your name and force of character are an inspiring presence to behold.",
abilities: [
{
name: "Unimpeachable",
description: "Your allies within 30 ft of you may use your WILL instead of their own.Once an ally has used your WILL, they cannot benefit from this again until they Take a Rest.When someone uses your WILL in place of their own, you regain 1d10 HP",
},
{
name: "Level 30",
description: "When an ally uses Unimpeachable, their WILL is replaced by your WILL for 1 minute.",
},

]
},
{
name: "Defiance",
prerequisites: ["Berzerker", "Exile", "Beast Companion", "Regain Honor"],
flavorTest: "Your Drunken Fighter feature deals +2 damage.",
abilities: [

]
},
{
name: "Throw Anything II",
prerequisites: ["Berzerker", "Exile", "Throw Anything", "Exile 7"],
flavorTest: "You gain +20 ft range with improvised thrown weapons and the damage becomes 1d8.",
abilities: [

]
},
{
name: "Hidden Dagger II",
prerequisites: ["Berzerker", "Exile", "Hidden Dagger", "Exile 7"],
flavorTest: "You gain +1 sneak attack die.",
abilities: [
]
},
{
name: "Drunken Ferocity",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "Your Ferocious ability becomes activated whenever you have imbibed in the past hour and you can no longer voluntarily activate it.",
abilities: [

]
},
{
name: "Scrapping",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "You gain two Maneuvers of your choice from the Pugilist’s Maneuver list.You can use these Pugilist’s Maneuvers 2/ Recoup.",
abilities: [

]
},
{
name: "Drag",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "Your companion gains a special maneuver: Drag.",
abilities: [
{
name: "Drag",
description: "Forgoing all other actions this turn, your companion can move ½ its speed and drag a prone target with it.This movement can provoke reactive actions.",
},

]
},
{
name: "Defresh",
prerequisites: ["Berzerker", "Exile", "Exile 7"],
flavorTest: "If you are Bleeding, Burning, Chilled, or Dazed, you may roll 1d6 every time you imbibe.If you roll a 5 or 6, the condition is removed.",
abilities: [

]
},
{
name: "Utterly Independent",
prerequisites: ["Berzerker", "Exile", "Capstone", "Exile 14", "Defiance"],
flavorTest: "Your exile has led you to a life of fierce and complete independence from all others.Urban legends might follow you as you face down grave threats on your own. You become immune to the Charmed and Enthralled conditions.",
abilities: [
{
name: "Independence",
description: "Whenever a creature attacks your WILL or attempts to Charm or Enthrall you, your next Drunken Fist against that target does not consume one of your uses of Drunken Fist, and you may attack their WILL instead of their AR.",
},
{
name: "Level 30:",
description: "Independence activates with your ANT and LOG defenses as well.",
},

]
},
{
name: "Ferocious II "
prerequisites: ["Berzerker", "Fearless", "Berzerker Entry"],
flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills. Ferocious becomes 3/Rest.",
abilities: [

]
},
{
name: "Seeing Red
prerequisites: ["Berzerker", "Fearless", "Ferocious II ", "Stoic"],
flavorTest: "Gain +2 Skill Points that you can spend on STR or END skills.You are considered Bloodied at ¾ your max HP."
abilities: [

]
},
{
name: "Blood Will Flow",
prerequisites: ["Berzerker", "Fearless", "Seeing Red"],
flavorTest: "While you are Bloodied, deal an additional 1d12 damage on a crit.",
abilities: [

]
},
{
name: "Stoic",
prerequisites: ["Berzerker", "Fearless", "Ferocious II", "Seeing Red"],
flavorTest: "Gain +2 Skill Points that you can spend on STR or END skills.You are considered Bloodied at ¼ your max HP.",
abilities: [

]
},
{
name: "Unflappable",
prerequisites: ["Berzerker", "Fearless", "Stoic"],
flavorTest: "You can trigger your Ferocious ability when you would gain the Shaken condition, granting you immunity to Frightened.and Shaken for the duration.",
abilities: [

]
},
{
name: "Ferocious III",
prerequisites: ["Berzerker", "Fearless", "Fearless 3"],
flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills.Ferocious becomes 4/Rest."],
abilities: [

]
},
{
name: "Seeing Red II",
prerequisites: ["Berzerker", "Fearless", "Ferocious III", "Blood Will Flow."],
flavorTest: "If your Ferocious ability is active and you are Bloodied, deal + 2 damage on all of your damage rolls."],
abilities: [

]
},
{
name: "Blood Will Flow II",
prerequisites: ["Berzerker", "Fearless", "Seeing Red II"],
flavorTest: "While you are Bloodied, your crit range increases by 1.",
abilities: [

]
},
{
name: "Frenzy",
prerequisites: ["Berzerker", "Fearless", "Blood Will Flow II"],
flavorTest: "When you are Ferocious, you may use Frenzy.",
abilities: [
{
name: "Frenzy",
description: "For the duration of your Ferocious ability, when you crit on an attack that cost 1 or more AP, you may immediately make another attack for 0 AP. (2 / Rest) "
]
},
{
name: "Stoic II",
prerequisites: ["Berzerker", "Fearless", "Ferocious III", "Unflappable"],
flavorTest: "Choose REF, FORT, ANT, or LOG. While you are not Bloodied, WILL and your selection increase by + 1.",
abilities: [

]
},
{
name: "Unflappable II",
prerequisites: ["Berzerker", "Fearless", "Stoic II"],
flavorTest: "You can trigger your Ferocious ability when you would become Demoralized, granting you immunity to Frightened, Shaken, and Demoralized for the duration.",
abilities: [

]
},
{
name: "Never Retreat",
prerequisites: ["Berzerker", "EFearless", "Unflappable II", "EStoic"],
flavorTest: "When you are Ferocious and not Bloodied, you are Grounded and cannot be knocked Prone or moved against your will.",
abilities: [

]
},
{
name: "Ferocious IV",
prerequisites: ["Berzerker", "Fearless", "Fearless 7"],
flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills. If you Recoup and have no uses of Ferocious remaining, regain one use.",
abilities: [
]
},
{
name: "Seeing Red III",
prerequisites: ["Berzerker", "Fearless", "Ferocious IV", "Frenzy"],
flavorTest: "Gain +2 Skill Points that you can spend on DEX or END skills.While Ferocious, your LOG equals your FORT unless your LOG was already higher.",
abilities: [
]
},
{
name: "Blood Will Flow III",
prerequisites: ["Berzerker", "Fearless", " Seeing Red III"],
flavorTest: "While you are Bloodied your crit range increases by 1 more.",
abilities: [
]
},
{
name: "Frenzy II",
prerequisites: ["Berzerker", "Fearless", "Blood Will Flow II"],
flavorTest: "Gain +1 FORT. Frenzy becomes 3/Rest.",
abilities: [
]
},
{
name: "Stoic II",
prerequisites: ["Berzerker", "Fearless", "Ferocious IV", "Never Retreat"],
flavorTest: "Gain +2 Skill Points that you can spend on AWR or CHA skills. While you are Ferocious, gain an additional + 2 to your defenses that you selected from Stoic 2.",
abilities: [
]
},
{
name: "Unflappable III",
prerequisites: ["Berzerker", "Fearless", "Stoic III"],
flavorTest: "You can trigger your Ferocious ability when you would become Charmed, granting you immunity to Frightened, Shaken, Demoralized, and Charmed for the duration.",
abilities: [
]
},
{
name: "Never Retreat II",
prerequisites: ["Berzerker", "Fearless", "Unflappable III"],
flavorTest: "Gain Iron Advance. Iron Advance.When you are Ferocious and not Bloodied, if you would be moved against your will, you may spend 1 Reactive AP to instead move up to your speed in a direction of your choice.",
abilities: [
]
},
{
name: "Ferocious V",
prerequisites: ["Berzerker", "Fearless", "Fearless 11"],
flavorTest: "Gain +4 Skill Points that you can spend on END or AWR skills. If you Catch Breath and have no uses of Ferocious remaining, regain one use.",
abilities: [
]
},
{
name: "Horrifying Frenzy",
prerequisites: ["Berzerker", "Fearless", "Ferocious V", "Frenzy II"],
flavorTest: "When you use Frenzy and you are Bloodied, you can make it Horrifying.Your Frenzy ability works when you hit, instead of only when you crit. (1 / Rest) ",
abilities: [
]
},
{
name: "Savage Frenzy",
prerequisites: ["Berzerker", "Fearless", "Horrifying Frenzy", "Gain Savage Frenzy"],
flavorTest: "Savage Frenzy. When you make an attack that costs 0 AP, you may choose to instead make two attacks if you are Bloodied.These attacks both have TA and the crit range increases by 1.(2/ Rest) ",
abilities: [
]
},
{
name: "Stoic IV",
prerequisites: ["Berzerker", "Fearless", "Ferocious IV", "Never Retreat II"],
flavorTest: "When you are not Bloodied all of your physical and mental defenses increase by + 1.",
abilities: [
]
},
{
name: "Never Retreat III",
prerequisites: ["Berzerker", "Fearless", "Stoic IV"],
flavorTest: "Gain Iron Reave.",
abilities: [
{
name: "Iron Reave",
description: "When you use Iron Advance, if you end your movement adjacent to an enemy, you can make one melee attack against it for 0 AP. (END / Rest).",
},

]
{
name: "Unstoppable Ferocity",
prerequisites: ["Berzerker", "Fearless", " Capstone", "Fearless 14"],
flavorTest: "Having stared down the jaws of death myriad times, you finally reach your snapping point. When you reach 0 HP, you may activate Unstoppable Ferocity. (0 Reactive AP) ",
abilities: [
{
name: "Unstoppable Ferocity",
description: " For the duration of Ferocious, gain + 3 to all defenses.Gain TA on all attacks, and roll 2d20 and use the higher.Whenever you hit a creature that has imposed an active condition of Broken, Demoralized, Frightened, or Shaken against you, the hit counts as a crit. Whenever you hit a creature that would have imposed such a condition against you but did not because of your Ferocious ability, that hit counts as a crit. If you die during this time, you remain living until the end of the duration of Ferocious.During such time, you cannot regain HP, and you die at the end of that duration, whereupon you can be resurrected. After you use this ability you permanently lose all of your Talents in the Ferocious stack and lose Ferocious 1. You do not gain replacement Talents.",
},
{
name: "Level 30:",
description: "If you used Unstoppable Ferocity before reaching level 30, you regain all of your lost talents except for Unstoppable Ferocity. If you did not use Unstoppable Ferocity before reaching level 30, then whenever a creature attempts to inflict Broken, Demoralized, Frightened, or Shaken against you, your next attack against that creature is considered a crit.",
},
]
},
{
name: "Juggernaut",
prerequisites: ["Berzerker", "Juggernaut", "Berzerker Entry"],
flavorTest: "Gain the Juggernaut ability",
abilities: [
{
name: "Juggernaut",
description: "By spending 1 AP, you may enter a combative focus that allows you to tune out injury.For the next 10 minutes, whenever you take physical damage, if you have any Reactive AP, gain DR 3.(2/ Rest) ",
},
]
},
{
name: "Haday",
prerequisites: ["Berzerker", "Juggernaut", "Juggernaut"],
flavorTest: "Gain the Hardy specialization talent (Chapter 5, “Defense Stack”).",
abilities: [
]
},
{
name: "Elemental Inurement",
prerequisites: ["Berzerker", "Juggernaut", "Hardy", "Staunch Resistance"],
flavorTest: "While your Juggernaut ability is active, reduce elementaldamage as well as physical.",
abilities: [
]
},
{
name: "Ardent Assault",
prerequisites: ["Berzerker", "Juggernaut", "Elemental Inurement"],
flavorTest: "When you are not Bloodied, deal +2 damage on melee attacks.",
abilities: [
]
},
{
name: "Staungh Resistance",
prerequisites: ["Berzerker", "Juggernaut", "Hardy", "Elemental Inurement"],
flavorTest: "While your Juggernaut ability is active, increase DR by 2. ",
abilities: [
]
},
{
name: "Shrug It Off",
prerequisites: ["Berzerker", "Juggernaut", "Staunch Resistance"],
flavorTest: "By spending 1 Reactive AP, gain Shield HP equal to the amount of physical damage that you just took.You may use Rage AP on this feature. (1 / Recoup) ",
abilities: [
]
},
{
name: "Endure",
prerequisites: ["Berzerker", "Juggernaut", "Juggernaut 4"],
flavorTest: "Gain the Endure ability.",
abilities: [
{
name: "Endure",
description: "When a creature makes an attack against your AR, you may use your FORT instead. (2 / Rest)."
},
]
},
{
name: "Juggernaut II",
prerequisites: ["Berzerker", "Juggernaut", "Endure"],
flavorTest: "Gain +4 Skill Points that you can spend on END skills. Juggernaut becomes ½ END/ Rest.",
abilities: [
]
},
{
name: "Juggernaut III",
prerequisites: ["Berzerker", "Juggernaut", "Juggernaut II"],
flavorTest: "While your Juggernaut ability is active, increase DR by 2.",
abilities: [
]
},
{
name: "Energy Inurement ",
prerequisites: ["Berzerker", "Juggernaut", "Juggernaut III", "Ardent Assault"],
flavorTest: "While your Juggernaut ability is active, reduce energydamage as well as physical and elemental.",
abilities: [
]
},
{
name: "Citadel Of Stamina",
prerequisites: ["Berzerker", "Juggernaut", "Energy Inurement"],
flavorTest: "gy Inurement Gain +2 FORT.",
abilities: [
]
},
{
name: "Staunch Resistance II",
prerequisites: ["Berzerker", "Juggernaut III", "Shrug It Off"],
flavorTest: "While your Juggernaut ability is active, increase DR by 3.",
abilities: [
]
},
{
name: "Battle - Ready",
prerequisites: ["Berzerker", "Juggernaut", " Staunch Resistance II"],
flavorTest: "GWhen you Recoup, you may remove +1 Death Point.",
abilities: [
]
},
{
name: "Endure II",
prerequisites: ["Berzerker", "Juggernaut", "Juggernaut 9"],
flavorTest: "Gain +4 Skill Points that you can spend on END skills. Endure becomes 3/Rest.",
abilities: [
]
},
{
name: "Hardy II",
prerequisites: ["Berzerker", "Juggernaut", "Endure II"],
flavorTest: "Gain +1 HP per character level, and +1 HP each time you level up.",
abilities: [
]
},
{
name: "Ardent Assault II",
prerequisites: ["Berzerker", "Juggernaut", "Hardy II", "Citadel of Stamina"],
flavorTest: "Gain +2 Skill Points that you can spend on STR skills. When you are not Bloodied, gain + 1 to FORT.",
abilities: [
]
},
{
name: "Shrug It Off II",
prerequisites: ["Berzerker", "Juggernaut", " Hardy II", "Battle-Ready"],
flavorTest: "Shrug It Off becomes 2/Recoup.",
abilities: [
]
},
{
name: "Endure III",
prerequisites: ["Berzerker", "Juggernaut", "Juggernaut 12"],
flavorTest: "Gain +4 Skill Points that you can spend on END skills. If you have no uses of Endure remaining and you Recoup, regain one use.",
abilities: [
]
},
{
name: "Juggernaut IV",
prerequisites: ["Berzerker", "Juggernaut", "Endure III"],
flavorTest: "You no longer need leftover AP to gain the benefits of Juggernaut.Juggernaut becomes END/ Rest",
abilities: [
{
name: "Back in the Fight",
description: "When you start your turn with 0 HP, you may spend X AP.Remove Death Points equal to ½ X. (1 / Rest) "
},
{
name: "Level 30",
description: "Back in the Fight becomes: Remove Death Points equal to X."
},
},
{
name: "Blood Rage II",
prerequisites: ["Berzerker", "Rage", "Berzerker Entry"],
flavorTest: "Gain the Fury ability." 
abilities: [
]
{
name: "Fury",
description: "When you make a melee attack, you may gain +2 to your attack rolls, but all attacks against you have TA and your mental defenses reduce by 2. This lasts until the start of your next turn."
},
},
{
name: "Furious Blows",
prerequisites: ["Berzerker", "Rage", "Blood Rage II", "Death Defier"],
flavorTest: "Attacks made with Fury deal +2 damage.",
abilities: [
]
},
{
name: "Furious Blows  II",
prerequisites: ["Berzerker", "Rage", "Furious Blows"],
flavorTest: "Deal +2 additional damage if you attack with Fury and are Bloodied.",
abilities: [
]
},
{
name: "Death Defier",
prerequisites: ["Berzerker", "Rage", "Blood Rage II", "Furious Blows"],
flavorTest: "When attacking with Fury, gain +X to attack and damage where X = your current Death Points.",
abilities: [
]
},
{
name: "Death Drop",
prerequisites: ["Berzerker", "Rage", "Death Defier"],
flavorTest: "Gain Death Drop.",
abilities: [
]
{
name: "Death Drop",
description: "For 0 AP, If you start your turn with fewer than 10 HP, you may choose to lose all remaining HP.If you do, then your first hit this turn that was not a crit becomes a crit. (2 / Rest) ."
},

},
{
name: "Blood Rage III",
prerequisites: ["Berzerker", "Rage", " Rage 3"],
flavorTest: "Your attacks made with Fury gain +1 to their crit range.",
abilities: [
]
},
{
name: "Blood Rage  IV",
prerequisites: ["Berzerker", "Rage", "Blood Rage III"],
flavorTest: "Gain +1 Rage AP.",
abilities: [
]
},
{
name: "Bloodlust",
prerequisites: ["Berzerker", "Rage", "Blood Rage IV", "Furious Blows II"],
flavorTest: "GWhen you start your turn, if you have both taken damage and dealt damage since the start of your last turn, you may use Bloodlust.",
abilities: [
]
{
name: "Bloodlust",
description: "Move up to your Speed for 0 AP. Any creature that attacks you reactively takes 1d6 sharp damage."
},
},
{
name: "Furious Smash",
prerequisites: ["Berzerker", "Rage", "Bloodlust"],
flavorTest: "When you attack with Fury and hit, you may use Berzerk Smash.",
abilities: [
]
{
name: "Berzerk Smash",
description: "Roll 1d6 and 1d12. Add the d12 to the damage you dealt and take damage equal to the 1d6."
},],
},
{
name: "Death Drop II",
prerequisites: ["Berzerker", "Rage", "Blood Rage IV", "Death Drop"],
flavorTest: "Death Drop works when you are Bloodied (instead of having to be 10 HP or fewer).",
abilities: [
]
},
{
name: "Death Defier II",
prerequisites: ["Berzerker", "Rage", "Death Drop II"],
flavorTest: "Gain Cling to Life.",
abilities: [
]
{
name: "Cling to Life",
description: "When you reach 8 Death Points, roll 1d20 + END.On 14 or higher, you do not die and go back to 7 Death Points.This check increases by + 1 each time you make it, resetting when you Take a Rest."
},
{
name: "Blood Rage V",
prerequisites: ["Berzerker", "Rage", "Blood Rage III"],
flavorTest: "Gain +1 Rage AP.",
abilities: [
]
},
{
name: "Blood Rage  VI",
prerequisites: ["Berzerker", "Rage", "Blood Rage V"],
flavorTest: "Gain +1 Rage AP",
abilities: [
]
},
{
name: "Bloodlust II",
prerequisites: ["Berzerker", "Rage", "Blood Rage VI", " Furious Smash"],
flavorTest: "When you use Bloodlust, you may also use Rend.",
abilities: [
]
},

{
name: "Rend",
description: "Spend 1 AP to attack a creature that took damage from your Bloodlust ability.Use STR or DEX(your choice) vs.their FORT.If you hit, the creature gains Bleeding(1d4) for 30 seconds. (2 / Recoup)"
},
}
{
name: "Furious Smash II",
prerequisites: ["Berzerker", "Rage", "Furious Smash II"],
flavorTest: "Gain Furious Smash.",
abilities: [
]

{
name: "Furious Smash",
description: "When you hit with Frenzy and are Bloodied, turn it into a crit. (1/Rest)"
},
}
{
name: "Bloodlust III",
prerequisites: ["Berzerker", "Rage", "Furious Smash II"],
flavorTest: "If you crit with Fury and are Bloodied, gain 1 AP.",
abilities: [
]
}
{
name: "Death Defier III"",
prerequisites: ["Berzerker", "Rage", "Blood Rage VI", "Death Defier II"],
flavorTest: "When you finish Taking a Rest, you may gain 1 Death Point.",
abilities: [
]
}
{
name: "Death Defier IV",
prerequisites: ["Berzerker", "Rage", "Death Defier III"],
flavorTest: "When you Recoup, you may choose not to remove a Death Point.",
abilities: [
]
}
{
name: "Death Drop III",
prerequisites: ["Berzerker", "Rage", "Bloodlust IV"],
flavorTest: "Gain +4 Skill Points that you can spend on STR skills. Death Drop becomes 2 / Recoup.",
abilities: [
]
}
{
name: "Blood Rage VII",
prerequisites: ["Berzerker", "Rage", "Rage 12"],
flavorTest: "Your attacks made with Fury gain +1 to their crit range.",
abilities: [
]
}
{
name: "Blood Rage VIII ",
prerequisites: ["Berzerker", "Rage", "Blood Rage VII"],
flavorTest: "Gain +4 Skill Points that you can spend on STR, DEX, or END skills. When you crit with Fury, regain additional HP equal to your END.",
abilities: [
]

{
name: "Blood Rampage",
prerequisites: ["Berzerker", "Rage", "Capstone", "Blood Rage VIII"],
flavorTest: "You are feared the world over as a warrior of legend, and none wish to cross steel with you. You may use Blood Rampage.",
abilities: [
]
{
name: "Blood Rampage",
description: " When you roll Initiative, all enemies gain the Shaken condition for the duration of the fight. When you are Bloodied, you gain double your Rage AP at the start of each round. This can cause you to exceed 12 AP/ round. (1/Week)"
},
}
{
name: "Level 30",
description: "Blood Rampage becomes 1/Rest."
},

},
{
name: "Fearless",
description: "You are made of sterner stuff than the average soldier and do not frighten easily.You can stare down any horror without flinching.",
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Juggernaut",
description: "Capable of withstanding more punishment than your companions, you assume the responsibility of the front- line fighter where you can absorb the brunt of enemy attacks.",
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Rage",
description: "By unleashing your inner demons, you can fuel your attacks with mighty rage.This allows you to do significantly more damage, but also makes you easier to hit     in your blind fury.",
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},

]
},
{
name: "Cleric",
shortDescription: "Devotees of one or more gods, clerics use divine magic and holy power to achieve their gods’ instructions.",
quote: {
phrase: "Each soul is a unique thread in a divine tapestry.It is my sacred duty to nourish these threads, as they are gifts given by the gods themselves.I tend especially to those threads that are frayed and in need of repairs.",
name: "Marcus Luxxor",
title: "disciple of Tovare",
},
longDescription: "Having been raised in the orbit of a great religious order, piety is in your blood.As a child you strove to give alms and help the needy whenever you could manage.You sought out the wise counsel of the priests and clergy in your town, and you took their teachings to heart, meditating on the precepts of your deities both day and night.Now, as a righteous pillar of your religious community, you continue to follow the path you began as a child: in all that you do, you seek to venerate your gods and enact their will on the world around you. You might pursue many clerical studies or focus your mind and soul upon mastering a single discipline, becoming an expert healer, righteous combatant, dedicated scholar, or a blend thereof.Regardless, you always have your divine icon at your side, a holy depiction of your god or your tenets.Your divine icon serves both as a moral anchor for you and connects you to deities that bless you with vestiges of holy authority",

entryTalent: {
prerequisites: ["Class Entry", "Cleric", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "Devotee",
description: " Gain the Disciple of the Divine talent from the divine stack if you did not already have it.CHA is your magic attribute.",
},
{
name: "Divine Ward",
description: "Spend 1 Reactive AP when an ally within 30 ft of you is attacked to increase that ally’s AR by + 2 until the start of that ally’s next turn.",
},
{
name: "Divine Icon",
description: "You gain a special Divine Icon depicting a deity or moment of religious significance.Choose one deity. That deity will have a list of three Icons.Gain one Icon ability whose prerequisite is only that you have access to that Icon.",
},
{
name: "Divine Power",
description: "Each time you level up and spend your talent point on a cleric talent, you gain + 5 SP and + 1 Divine Power",
},
]

},
stacks: [
{
name: "Exorcist",
description: "Stronger of will than your average clergyperson or preacher, you might make it your life’s mission to stare down the darkest demons of humanity and draw them out of unfortunate souls.",,
talents: [,
{
name: "Sense Planar",
prerequisites: ["Cleric", "Exorcist", " Cleric Entry"],
flavorTest: "Gain the Sense Planar ability.",
abilities: [
{
name: "Sense Planar",
description: "You sense the presence of avadri, celestial, eldritch, fae, and fiends within 1 mile of you.You sense their exact numbers and distance from you.You cannot sense their exact identities.You can maintain this sense for up to 10 mins if you do nothing else other than non- strenuous walking, talking, or light activity. (2 / Rest) ",
},
]
},
{
name: "Divine Ward II",
prerequisites: ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
flavorTest: "Your Divine Ward boosts your ally’s AR and physical defenses for the duration.",
abilities: [

]
}
},
{
name: "Distant Ward",
prerequisites: ["Cleric", "Exorcist", "Divine Ward II", "Divine Shield"],
flavorTest: "The range of your Divine Ward increases by +30 ft.",
abilities: [
},
]
},
{
name: "Divine Shield",
prerequisites: ["Cleric", "Exorcist", "Divine Ward II", "Distant Ward"],
flavorTest: "Your Divine Ward adds an additional +1 to your target creature’s relevant defenses.",
abilities: [

]
},
{
name: "Sense Planar",
prerequisites: ["Cleric", "Exorcist", "Exorcist 3"],
flavorTest: "Sense Evil recharges upon Recouping. You gain the Identify Planar ability",
abilities: [
{
name: "Identify Planar",
description: "When using Sense Planar, you may select one creature and learn its identity as well as its root motivation(selfless or selfish). (2 / Rest) ",
},
]
},
{
name: "Abjure Unholy",
prerequisites: ["Cleric", "Exorcist", "Sense Planar II", "Holy Support II"],
flavorTest: "Gain Abjure Unholy, which counts as a spell for abilities that interact with spells. You can cast this unique spell 2/Rest.",
abilities: [

]
}
{
},
{
name: "Abjure Unholy",
prerequisites: ["Divine", "Spell", "Warding", "Verbal", "Gesture"],
flavorTest: "Divine, Spell, Warding APC: 5 Range: 60 ft Requires: Verbal, Gesture Duration: 10 mins Choose a point within range. A powerful warding circle springs up in a 5 ft radius around that point. The circle conjures an accompanying invisible cylinder that is 15 ft tall. The cylinder does not block LoS but does block LoE. The cylinder is solid to the touch, preventing passage into or out of the circle. Spells, effects, and abilities that include a physical source of damage (such as arrows, fire, or acid) cannot penetrate this barrier. A creature within the barrier can attempt to escape by making a CHA check against 10 + your magic attribute. On a success the creature can move through the barrier, taking 2d10 psychic damage. When you cast this spell, choose a creature type: avadri, celestial, eldritch, fae, or fiend. Creatures of that type that are stuck in your circle can only attempt to escape if you have taken damage since your last turn, and must roll 2d20 and use the lower when trying to escape. You may choose to end the spell early",
abilities: [

]
},
{
name: "Distant Ward II",
prerequisites: ["Cleric", "Exorcist", "Abjure Unholy", "Distant Ward"],
flavorTest: "The range of your Divine Ward increases by +30 ft.",
abilities: [

]
},
{
name: "Divine Shield II",
prerequisites: ["Cleric", "Exorcist", "Abjure Unholy", "Divine Shield"],
flavorTest: "Your Divine Ward adds an additional +1 to your target creature’s relevant defenses.",
abilities: [

]
},
{
name: "Divine Ward III",
prerequisites: ["Cleric", "Exorcist", "Exorcist 6"],
flavorTest: "Divine Ward raises all defenses (AR, physical, and mental).",
abilities: [

]
},
{
name: "Expert Exorcist",
prerequisites: ["Cleric", "Exorcist", "Divine Ward III", "Holy Support III"],
flavorTest: "You learn the Exorcism ritual if you did not already know it. Gain the Exorcist ability.",
abilities: [
{
name: "Exorcist",
description: "When you use Exorcism and you do not upcharge it, you may choose not to roll on the side effect table. (1 / Rest).",
},
]
},
{
name: "Distant Ward III",
prerequisites: ["Cleric", "Exorcist", "Expert Exorcis", "Divine Ward II"],
flavorTest: "The range of your Divine Ward increases by +30 ft.",
abilities: [

]
},
{
name: "Distant Shield III",
prerequisites: ["Cleric", "Exorcist", " Expert Exorcist", "Divine Shield II"],
flavorTest: "Your Divine Ward adds an additional +1 to your target creature’s relevant defenses.",
abilities: [

]
},
{
name: "Abjure Unholy II",
prerequisites: ["Cleric", "Exorcist", "Exorcist 9"],
flavorTest: "Abjure Unholy can be a 10 ft radius (choose each time you cast it). Abjure Unholy becomes ½ CHA/Rest.",
abilities: [

]
},
{
name: "Sense Planar III",
prerequisites: ["Cleric", "Exorcist", "Abjure Unholy II"],
flavorTest: "Sense Planar has a range of 5 miles. When you deal radiant damage to avadri, celestial, eldritch, fae, or fiend creatures, add your CHA to the damage.",
abilities: [

]
},
{
name: "Unholy Scourge",
prerequisites: ["Cleric", "Exorcist", "Capstone", " Sense Planar III"],
flavorTest: "Malicious planar entities fear your name, and towns bereaved by such entities know to seek you out when they need a skilled exorcist. When you use the Exorcism ritual, you never have to roll on the side effect table. If you choose to Upcharge the exorcism, roll 2 times, instead of 4 times. When you use your Abjure Unholy spell, you may use Unholy Scourge.",
abilities: [

]
{
name: "Unholy Scourge",
description: "All creatures in your circle take 4d10 radiant damage at the start of each of their turns. (1/Rest)",
},
{
name: "Level 30",
description: "When you choose a creature type for Abjure Unholy, you can choose any creature type of your choice.",
},
},
{
name: "",
prerequisites: ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
flavorTest: "",
abilities: [

]
},
{
name: "",
prerequisites: ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
flavorTest: "",
abilities: [

]
},
{
name: "",
prerequisites: ["Cleric", "Exorcist", "Sense Planar", "Holy Support"],
flavorTest: "",
abilities: [

]
}
name: "Piety",
description: "You work small miracles, healing injury and disease with a mere touch, or invigorating a season’s crops to bounty",,
talents: [,
{
name: "Lay On Hands",
prerequisites: ["Cleric", "Piety", " Cleric Entry"],
flavorTest: "Gain Lay on Hands.",
abilities: [
{
name: "Lay on Hands",
description: "You may touch yourself or a creature and spend 2 AP to restore 3 HP to that creature. (CHA / Rest) ",
},

]
},
{
name: "Monastic Horticulturist",
prerequisites: ["Cleric", "Piety", "Lay on Hands", "Holy Support"],
flavorTest: "By combining faith and agricultural understanding, you can bless a field of crops with your Monastic Horticulture ability.",
abilities: [
{
name: "Monastic Horticulture",
description: "Select a field of crops that is a 500 ft 2 or smaller.These crops become immune to nonmagical blights, poisons, diseases, and insects.They still grow and produce food at their normal rate, but the food they produce is high- quality and delicious. (1 / Month) ",
},
]
},
{
name: "Lay On Hands II",
prerequisites: ["Cleric", "Piety", "Monastic Horticulturist"],
flavorTest: "While Recouping, you can use Lay on Hands one time without expending a use of it. (1 / Rest) ",
abilities: [
]

},
{
name: "Piety",
prerequisites: ["Cleric", "Piety", "Lay on Hands II"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the influence or knowledge tag. Gain the Piety ability.",
abilities: [
{
name: "Piety",
description: "You may touch a creature suffering from a common poison and instantaneously cure it. (1 / Week).",
},

]
},
{
name: "Lay On Hands III",
prerequisites: ["Cleric", "Piety", "Holy Support II"],
flavorTest: "Your Lay on Hands ability restores 2 additional HP.",
abilities: [
]
},
{
name: "Wellspring Of Health",
prerequisites: ["Cleric", "Piety", "Lay on Hands III"],
flavorTest: "When you cast a divine spell that restores HP to a target, add your CHA to the amount healed.",
abilities: [
]
},
{
name: "Piety II",
prerequisites: ["Cleric", "Piety", "Wellspring of Health"],
flavorTest: "Piety can cure common diseases as well.",
abilities: [
]
},
{
name: "Monastic Horticulturist II",
prerequisites: ["Cleric", "Piety", "Piety II", "Holy Support III"],
flavorTest: "Gain the Horticultural Blessing ability.",
abilities: [
{
name: "Horticultural Blessing",
description: "When you spend at least 1 week  in a settlement, and you have used Monastic Horticulture on a field that will produce crops, you can bless the crops.The crops will produce 2d10 additional rations’ worth of food each day for the next week(in addition to what they would normally produce).Rations produced in this way become spoiled after 24 hours. (1 / Week) ",
},

]
},
{
name: "Piety III",
prerequisites: ["Cleric", "Piety", "Monastic Horticulturist II", "Battle Medic"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the influence or knowledge tag. Piety becomes 2/Week.",
abilities: [
]
},
{
name: "Piety IV",
prerequisites: ["Cleric", "Piety", "Piety III"],
flavorTest: "When you use Piety, you can instantaneously cure common or uncommon poisons or diseases.",
abilities: [
]
},
{
name: "Piety V",
prerequisites: ["Cleric", "Piety", "Piety IV"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with theinfluence or knowledge tag. Piety becomes 3/Week.",
abilities: [
]
},
{
name: "Miracle Worker",
prerequisites: ["Cleric", "Piety", "Capstone", "Piety V"],
flavorTest: "You are heralded as a miraculous healer the world over. Any religious institution(besides extremists and cults) will happily house you.Clergy, kings, nobles, politicians, and generals seek your presence as they know you can work miraculous healing on behalf of those you deem worthy. Many seek you out for your inspiring presence and your ability to work miracles. Gain the Miracle Worker ability",
abilities: [
{
name: "Miracle Worker",
description: "You may touch a creature suffering from any nonmagical poison or disease and instantaneously cure them, or you can touch a creature suffering from a magical poison or disease and cure them, becoming Sickened for the next 24 hours. (1 / Rest) Furthermore, whenever you arrive in a new town you gain 1d12 disciples that follow you around while in town and do basic favors and errands for you. Each time you leave a town, you may choose to take one of these disciples on as an apostle.They will follow you around indefinitely and can gain the stats of any NPC of ML 3 or lower.You can have no more Apostles at a time than your cleric level.",
},
{
name: "Level 30",
description: "Miracle Worker becomes 1/Recoup. If you cure a magical poison or disease, you are only Sickened for 30 minutes.",

]
},
{
name: "Battle Medic",
prerequisites: ["Cleric", "Piety", "Monastic Horticulturist II", "Piety III"],
flavorTest: "Lay on Hands can be used with Reactive AP. If the target is Bloodied, the target regains 3 additional HP from Lay on Hands(8 total unless you gain another bonus from a different ability).",
abilities: [
]
},
{
name: "Battle Medic  II",
prerequisites: ["Cleric", "Piety", "Battle Medic"],
flavorTest: "Lay on Hands only costs 1 AP. If the target is Bloodied, the target regains 2 additional HP from Lay on Hands(10 total unless you gain another bonus from a different ability).",
abilities: [
]
},
{
name: "Battle Medic III",
prerequisites: ["Cleric", "Piety", "Battle Medic II"],
flavorTest: "If target has 0 HP, your Lay on Hands restores double the HP it otherwise would. Gain the Relentless Healer ability",
abilities: [
{
name: "Relentless Healer",
description: "If you roll Initiative and have no Lay on Hands, regain one use of Lay on Hands.",
},

]
},
{
name: "Savior",
prerequisites: ["Cleric", "Piety", "Capstone", " Battle Medic III"],
flavorTest: "You are known as a powerful healer and righteous fighter. Generals and military commanders seek to conduct themselves in an exemplary and honorable manner in an effort to recruit you to their cause. You gain two abilities: Ambient Divinity and Divine Salvation.",
abilities: [
{
name: "Ambient Divinity",
description: "When you cast a divine spell, choose a creature within 20 ft of you to regain HP equal to the SP you just spent on that spell. (CHA / Rest). ",
},
{
name: "Divine Salvation",
description: "When a creature within 60 ft of you is reduced to 0 HP, you may spend 1 Reactive AP to heal them for 100 HP.You become Helpless until the end of your next turn after doing this. (1 / Rest).",
},
{
name: "Level 30",
description: "Divine Salvation becomes 1/Recoup and you are only Helpless until the start of your next turn.",
},
]
},



name: "Theologian",
description: "You passionately study scripture and ancient texts, and how to illuminate manuscripts or scribe ornate icons with which you can spread the miraculous wonder of your faith.", ,
talents: [,
{
name: "Ardent",
prerequisites: ["Cleric", "Theologian", "Cleric Entry"],
flavorTest: "Gain +6 Skill Points, which you can spend on any skills with the Knowledge tag.When you spend time researching in a well- resourced library or religious center, you uncover whatever information you are capable of learning in ½ the time it would normally take. (If required to roll INT, and you roll low, then you still might not find what you need, but whatever you do find takes ½ the time.) ",
abilities: [
]
},
{
name: "Apocrypha",
prerequisites: ["Cleric", "Theologian", "Ardent"],
flavorTest: "Choose an icon for which you have access. Gain additional magic(one spell, cantrip, chant, or ritual) based on that choice, which counts as divine for you even though the new magic will not be originally from the Divine Source. ",
abilities: [
},
{
name: "Scriptorium",
prerequisites: ["Cleric", "Theologian", "Apocrypha"],
flavorTest: "Gain the Scriptorium ability.",
abilities: [
{
name: "Scriptorium",
description: "When in a well-equipped religious center with a library, you can reselect which divine spells you know.This takes 24 hours. (1 / Month).",
},
]
},
{
name: "Iconographer",
prerequisites: ["Cleric", "Theologian", "Scriptorium", "Scrivener"],
flavorTest: "Gain the Iconographer ability.",
abilities: [
{
name: "Iconographer",
description: "When you finish Taking a Rest, you can create a new Divine Icon.Pick a Divine Icon that you know which has a recharge ability(X/ Rest, /Recoup, or /Catch Breath) and which is the lowest level for that ability(such as Blinding Dark I).You write a duplicate of that icon.Choose one willing creature to bond with the Icon.That creature gains one use of that icon and it recharges on Taking a Rest, Recouping, or Catching your Breath as normal.The creature can use this icon until you use this ability again.",
},
]
},
{
name: "Iconographer II",
prerequisites: ["Cleric", "Theologian", "Iconographer"],
flavorTest: "When you create an Icon using your Iconographer ability, if you know a higher- power version of it(such as Provision II), you can inscribe that version onto the Icon.The creature can still only use the icon one time until they can recharge it, unless the Icon’s improved ability adds + 1 usage of the Icon, in which case the creature can use it twice before needing to recharge it.",
abilities: [
]
},
{
name: "Scrivener",
prerequisites: ["Cleric", "Piety", "Theologian", "Scriptorium", "Iconographer"],
flavorTest: "Gain the Scrivener ability",
abilities: [
{
name: "Scrivener",
description: "When you finish Taking a Rest, you can create a spell scroll out of a prayer or divine spell that you know. This consumes valuable inks and gold leaf - the cost in sc is 10x the spell’s SPC. You also must spend the normal amount of SP as if casting the spell when you scribe it and cannot scribe a spell with an SPC greater than your Divine Power. Once you have scribed a spell onto a scroll, you or any creature that possesses the scroll can cast it by spending the normal APC.The magic fades from the scroll once used or after 24 hours if unused.",
},
]
},
{
name: "Scrivener II",
prerequisites: ["Cleric", "Theologian", "Scrivener"],
flavorTest: "You have grown more skilled at scribing your spell scrolls. It only costs you ½ the spell’s SPC to scribe it.",
abilities: [
]
},
{
name: "Apocrypha II",
prerequisites: ["Cleric", "Theologian", "Theologian 5"],
flavorTest: "Use your Apocrypha ability again, selecting a new Divine Icon for which you have access.",
abilities: [
]
},
{
name: "Scriptorium II",
prerequisites: ["Cleric", "Theologian", "Apocrypha II"],
flavorTest: "When you use Scriptorium, you can also reselect which divine prayers you know.",
abilities: [
]
},
{
name: "Scriptorium III",
prerequisites: ["Cleric", "Theologian", "Scriptorium II"],
flavorTest: "When you use Scriptorium, you can also reselect which divine rituals you know.",
abilities: [
]
},
{
name: "Apprenticeship",
prerequisites: ["Cleric", "Theologian", "Scriptorium III", "Iconographer II"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Observation or Knowledge tag. Gain the Apprenticeship ability.",
abilities: [
] 
{
name: "Apprenticeship",
description: "When Recouping, you may change the effects of your Icon that another creature is bonded to as though using your Iconographer ability.You cannot assign this Icon to a new creature when changing the Icon in this way.",
},
},
{
name: "Iconographer III",
prerequisites: ["Cleric", "Theologian", "Apprenticeship"],
flavorTest: "Iconographer now allows you to create two Icons, bonding them to the same creature or different ones.One icon must be entry- level without higher - power icon abilities, while the other can be an Icon one power level higher.Apprenticeship only works on one creature each time you Recoup, but you can pick which creature is your Apprentice each time.",
abilities: [
]
},
{
name: "Iconographer IV",
prerequisites: ["Cleric", "Theologian", " Iconographer III"],
flavorTest: "Both Icons created by your Iconographer ability can be higher- power, and if you have bonded two creatures, they can trade or give one another the Icons at will by physically handing one another the separate Icons.When you use Apprenticeship, both creatures can benefit from the ability.",
abilities: [
]
},
{
name: "Sola Scriptura",
prerequisites: ["Cleric", "Theologian", "Scriptorium III", "Scrivener II"],
flavorTest: "When you cast a spell that you have scribed onto a scroll, if you are holding the scroll in your hand, then you can ignore all other Gesture, Verbal, and Visual requirements. (1 / Recoup).",
abilities: [
]
},
{
name: "Scrivener III",
prerequisites: ["Cleric", "Theologian", "Sola Scriptura"],
flavorTest: "Thanks to careful gilding and embossing techniques, it only costs you sc equal to 5x the spell’s SPC to scribe it.",
abilities: [
]
},
{
name: "Scrivener IV",
prerequisites: ["Cleric", "Theologian", "Scrivener III"],
flavorTest: "By spending the necessary SP and material costs, you can scribe two scrolls.",
abilities: [
]
},
{
name: "Illuminated Manuscript",
prerequisites: ["Cleric", "Theologian", "Theologian 11"],
flavorTest: "When in a well-equipped religious center or library you can spend 1 hour to make one additional scroll or icon. (1 / Week).",
abilities: [
]
},
{
name: "Scriptorium IV",
prerequisites: ["Cleric", "Theologian", "Illuminated Manuscript"],
flavorTest: "When you use Scriptorium, you can also reselect which cleric talents you know.",
abilities: [
]
},
{
name: "Apocrypha III",
prerequisites: ["Cleric", "Theologian", "Repeatable", "Scriptorium IV"],
flavorTest: "Use your Apocrypha ability again, choosing a new Divine Icon for which you have access.",
abilities: [
]
},
{
name: "Iconographer V",
prerequisites: ["Cleric", "Theologian", "Apocrypha III", "Iconographer IV"],
flavorTest: "Your Iconographer ability allows you to create three Icons now, none of which can be stronger than an Icon with the II suffix.You can bond them all to one creature, to two creatures, or to three creatures.Any bonded creatures can trade or give their icons to other bonded creatures at any point by physically handing them the Icon.",
abilities: [
]
},
{
name: "Iconic Covenant",
prerequisites: ["Cleric", "Theologian", "Capstone", "Iconographer V"],
flavorTest: "You are revered as a legendary scholarly theologian who writes excellent icons that tell compelling stories deeply wrought with spiritual significance.Your work decorates many houses of prayer and many pious nobles proudly display your icons in their homes Gain + 4 Skill Points that you can spend on skills with the Observation or Knowledge tag. Gain the Iconic Covenant ability.",
abilities: [
]
{
name: "Iconic Covenant",
description: "When Recouping, you may change the effects of your Icon that another creature is bonded to as though using your Iconographer ability.You cannot assign this Icon to a new creature when changing the Icon in this way.",
},
{
name: "Level 30",
description: "You can now create three permanent icons per year.",
},
{
name: "Scrivener V",
prerequisites: ["Cleric", "Theologian", ": Apocrypha III", "Scrivener IV"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Observation or Knowledge tag. Your spell scrolls no longer require you to expend any SP.",
abilities: [
]
},
{
name: "Holy Lectionary",
prerequisites: ["Cleric", "Theologian", " Capstone", "Scrivener V"],
flavorTest: "You are renowned as a tremendous scrivener who creates beautiful illuminated manuscripts and is deeply knowledgeable in religious matters.Your texts are often used in liturgical ceremonies throughout the land. Your Scrivener scrolls last for 48 hours before losing magic. When you use your Scrivener ability, you can also use your Holy Lectionary ability.",
abilities: [
]
{
name: "Holy Lectionary",
description: "Create one special scripture, your Holy Lectionary.This scripture can have an SPC equal to or less than 2x your Divine Level, and does not losev magical potency for 1 month or until you use this ability again. (1 / Week).",
},
},
{
name: "Level 30",
description: "Your Holy Lectionary retains its magical potency until you use this ability again.Increase all of your mental defenses by + 2.",
},


name: "Support Talents",
description: "", ,
talents: [,
{
name: "Holy Support",
prerequisites: ["Cleric", "Support", "Special AP", " Cleric 2"],
flavorTest: "When you end your turn with 0 AP, gain 1 special Holy Support AP that acts as Reactive AP.You lose this AP at the start of your next turn. You can only gain one source of special AP.If you gain a second source of special AP, choose whether you keep this source or your new source.",
abilities: [
]
}, name: "Holy Support II",
prerequisites: ["Cleric", "Support", "Special AP", "Holy Suppor", "Cleric 5"],
flavorTest: "Holy Support gives you 2 Support AP.",
abilities: [
]
}, name: "Holy Support III",
prerequisites: ["Cleric", "Support", "Special AP", "Holy Suppor II", " Cleric 8"],
flavorTest: "Holy Support gives you 3 Support AP.",
abilities: [
]
},
{
name: "Mage",
shortDescription: "From studious, academic wizards to chaotic sorcerers, mages have a profound ability to manipulate the arcane.",
quote: {
phrase: "Magic is a wondrous gift. Why exert unnecessary effort when a flick of the wrist or a glance of the eye can accomplish the same?",
name: "Finneas Alistair Laith",
title: "absentminded scholar",
},
longDescription: "You have always had a spark of talent within you, perhaps the ability to literally conjure forth sparks when agitated or excited.Ever curious about the world and the power within you, you have never shied away from experimentation with your magical powers.In your youth this caused your family endless grief and singed eyebrows.Now, having mastered the basics of arcane magic, you seek to continue your study and uncover ever deeper mysteries of the Fundamental Wellspring of Magic. Developing skill as an arcane caster necessitates that you maintain Attunation with the Fundamental Wellspring. This entails different practices for different casters, so in your case it might involve reading complex arcane texts or meditating intensely on the metaphysics or astrophysics of the universe.Be proactive, for if you become lackadaisical in maintaining Attunation, your skill will gradually atrophy, and you might lose your arcane ability altogether if you do not diligently cultivate this Attunation.",

entryTalent: {
prerequisites: ["Class Entry", "Mage", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "Learned",
description: "Gain +6 Skill Points, which you can spend on any skills with the INT tag.",
},
{
name: "Student of the Arcane",
description: "Gain the Student of the ArcaneTalent from the arcane stack if you did not already have it. INT is your Magic Attribute.",
},
{
name: "Arcane Power",
description: "Each time you level up and spend your Talent Point on a mage talent, gain + 5 SP and + 1 Arcane Power.",
},
{
name: "Focus",
description: "Choose one of the nine functions of magic. This choice grants you a special bonus when you cast magic of that function.",
},
{
name: "Alchemy",
description: "You can spend 10 minutes changing and simply shaping 1 ft 3 of a raw material to your needs.This could be making a branch into a crowbar, or a crowbar into a long wire, or a long wire into a bundle of tinder, but cannot create complex objects or machines.The material can be refined(such as smelted ore or cut timber), but cannot be crafted(such as a sword or a door).Even the most talented Alchemists have not discovered how to transmute silver, gold, or diamond, and thus those materials are unavailable for this ability.",
},
{
name: "Altering",
description: "Altering spells cost you 1 fewer AP (min 1).",
},
{
name: "Divining",
description: "You can now spend 10 minutes meditating, after which you can see, hear, and smell from one of your arcane Signatures as if you were present in a vacant space within 5 ft of its location for 1 minute.This magic consumes and dispels the Signature after it is used.",
},
{
name: "Enchanting",
description: "When you cast a spell that has the Enchanting function and Charms or Frightens a creature, multiply the duration of the effects by 1.5.",
},
{
name: "Evoking",
description: "When you deal damage with Evoking magic, add additional damage equal to ½ your level. (END / Rest).",
},
{
name: "Illusory",
description: "Creatures attempting to identify your illusions have a - 2 to their die rolls.",
},
{
name: "Necromancy",
description: "When you would be reduced to 0 HP, you can sacrifice an undead under your control to instead have 1 HP.The undead in question is immediately destroyed.",
},
{
name: "Summoning",
description: "Creatures that you summon gain additional maximum HP equal to your Arcane Power Level.",
},
{
name: "Warding",
description: "When you cast Warding magic that increases any of a creature’s Defenses, that creature’s AR increases by an additional + 1.",
},

]     name: "Arcane Weaving",
description: "",,
talents: [,
{
name: "Arcane Weaver",
prerequisites: ["Mage", "Arcane Weaving", "Mage Entry"],
flavorTest: "Spells with the metamagic tag cost you 4 fewer SP to cast.",
abilities: [
]
},
{
name: "Spell Sculptor",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
flavorTest: "Sculpt Spell costs you ½ the SP cost to cast. This replaces your Arcane Weaver ability.",,
abilities: [
]
},
{
name: "Spell sculptor II",
prerequisites: ["Mage", "Arcane Weaving", "Spell Sculptor"],
flavorTest: "Sculpt Spell costs no SP to upcharge.",
abilities: [
]
},
{
name: "Spell sculptor III",
prerequisites: ["Mage", "Arcane Weaving", "Spell sculptor II"],
flavorTest: "Sculpt Spell costs 1 SP to cast, and no SP to upcharge.",
abilities: [
]
},
{
name: "Spell Sniper",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
flavorTest: "Extend Spell costs you ½ the SP to cast. This replaces your Arcane Weaver ability.",
abilities: [
]
}, ,
{
name: "Spell Snipe II",
prerequisites: ["Mage", "Arcane Weaving", "Spell Sniper"],
flavorTest: "Upcharging Extend Spell becomes +2 SP per 15 ft.",
abilities: [
]
}, ,
{
name: "Mote Expert",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
flavorTest: "Delay Spell costs you ½ the SP to cast. This replaces your Arcane Weaver ability.",
abilities: [
]
}, ,
{
name: "Mote Expert II",
prerequisites: ["Mage", "Arcane Weaving", "Mote Expert"],
flavorTest: "You can now cause a mote created by Delay Spell to be invisible, and leave it in a space you are occupying.After you move out of that space, it will trigger upon another creature touching it.",
abilities: [
]
}, ,
{
name: "Mote Expert III",
prerequisites: ["Mage", "Arcane Weaving", "Mote Expert II"],
flavorTest: "You can no longer lose control of your mote and activate its magic prematurely while you have only one mote on your person.",
abilities: [
]
}, ,
{
name: "Empower Spell Expert",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver"],
flavorTest: "Your Empower Spell’s APC is lowered by 2.",
abilities: [
]
}, ,
{
name: "Arcane Weaver II ",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver", "Arcane Weaving 5"],
flavorTest: "Gain Metamagic Points equal to your INT. You can use these to cast Metamagic spells at a rate of 2 Metamagic Points per spell in place of SP.You regain all expended Metamagic points when you Take a Rest. If you spend Metamagic Points with a talent from the arcane weaving track in the mage stack, you must declare the expenditure before you cast your spell.",
abilities: [
]
},
{
name: "Metamagic:Spell point Cost",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend Metamagic Points to reduce a spell’s SPC by 2 SP per Metamagic Point.",
abilities: [
]
},
{
name: "Metamagic:Hasten",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend Metamagic Points to reduce a spell’s APC at a rate of 1 Metamagic Point per AP(min 1).",
abilities: [
]
},
{
name: "Metamagic:Overclock",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend 1 Metamagic Point to halve the SPC of upcharging a spell.You may not use Metamagic Points on other Metamagic if you chose to spend a point in this manner, but you may halve the cost(min 1) multiple times.",
abilities: [
]
},
{
name: "Metamagic:Maximize",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend 6 Metamagic Points to maximize the damage of a spell.",
abilities: [
]
},
{
name: "Metamagic:Overcome",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend 1 Metamagic Point to ignore a creature’s Resist.",
abilities: [
]
}, ,
{
name: "Metamagic:Humane Spell",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend 1 Metamagic Point to modify a spell to deal psychic damage and become nonlethal.",
abilities: [
]
},
{
name: "Metamagic:Leeching",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend 1 Metamagic Point to regain HP equal to ½.the necrotic damage you deal with the modified spell, or 2 Metamagic Points to heal for all the necrotic damage.",
abilities: [
]
}, ,
{
name: "Metamagic:Duration",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may extend a spell with a duration of 1 minute or longer.It lasts for 1 additional minute per Metamagic Point you expend.",
abilities: [
]
},
{
name: "Metamagic:Conjuring",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may spend 2 Metamagic Points to delay Conjuring for one turn.If you do not resume conjuring at the start of your next turn, you lose the spell as if your conjuring were interrupted.",
abilities: [
]
},
{
name: "Metamagic Expert",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Weaver II"],
flavorTest: "You may regain expended Metamagic Points when you Recoup. (1 / Rest) ",
abilities: [
]
},
{
name: "Metamagic Expert II",
prerequisites: ["Mage", "Arcane Weaving", "Metamagic Expert"],
flavorTest: "You may regain expended Metamagic Points when you Catch your Breath. (1 / Rest) ",
abilities: [
]
},
{
name: "Arcane Versatility",
prerequisites: ["Mage", "Arcane Weaving", "MArcane Weaver II"],
flavorTest: "You may trade SP for Metamagic Points at a rate of 10 SP per 1 Metamagic Point, or Metamagic Points for SP at a rate of 1 Metamagic Point for 5 SP.",
abilities: [
]
},
{
name: "Metamagic Caster",
prerequisites: ["Mage", "Arcane Weaving", "Capstone", "Arcane Weaving 14"],
flavorTest: "You weave magic in ways most cannot even comprehend, manipulating the leylines of the Fundamental Wellspring and bending them to your will, even altering reality itself. You gain 6 additional Metamagic Points(your total is now INT+ 6).Gain Strand of Metamagic.",
abilities: [
]
{
name: "Strand of Metamagic",
description: "You may spend X Metamagic Points to increase your d20 roll by X.You may spend 1 Reactive AP to spend X Metamagic Points and decrease the d20 roll of a hostile creature within 40 ft of you by X.",
},
{
name: "Level 30",
description: "The final cap for your INT increases from 12 to 14.",
},
] name: "Archmage Track",
description: "", ,
talents: [,
},
{
name: "Arcane Inetlilectual",
prerequisites: ["Mage", "Arcane Weaving", "Mage Entry"],
flavorTest: "You dedicate yourself to scholarly pursuits, the study of arcane magics, and the mastery of the Fundamental Wellspring. You may now only take talents from the mage and srcane stacks. You immediately learn all arcane cantrips and can add your INT to damage dealt by cantrips.",
abilities: [
]
},
{
name: "Mage:Alchemy",
prerequisites: ["Mage", "Arcane Weaving", "Arcane Intellectual"],
flavorTest: "You gain the Alchemy Focus. If you already had the Alchemy Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Alchemy II",
prerequisites: ["Mage", "Archmage", "Mage - Alchem"],
flavorTest: "Your Alchemy creation can now be up to 5 ft by 15 ft and be crafted objects that do not feature moving parts(such as a ladder or sword).You must have at least 4 Skill Points in the associated skill to create in this way(Such as carpentry for a ladder or blacksmithing for a sword).The value of crafted creations can be no higher than the value of the materials.",
abilities: [
]
},
{
name: "Mage:Alchemy III",
prerequisites: ["Mage", "Archmage", "Mage - Alchemy II"],
flavorTest: "Your Alchemy Creation can now be 15 ft wide, tall, and long.",
abilities: [
]
},
{
name: "Mage:Alchemy IV",
prerequisites: ["Mage", "Archmage", "Mage - Alchemy III"],
flavorTest: "Your Alchemy Creation can now feature moving parts such as doors or windows.",
abilities: [
]
},
{
name: "Mage:Alchemy V",
prerequisites: ["Mage", "Archmage", "Mage - Alchemy IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Alchemy tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Altering",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Altering Focus. If you already had the Altering Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Altering II",
prerequisites: ["Mage", "Archmage", "Mage - Altering"],
flavorTest: "Your Arcane Swap spell can now be cast on a willing, friendly creature also in range that is no more than one size larger or smaller than the target of the swap, instead of being cast on yourself.",
abilities: [
]
},
{
name: "Mage:Altering III",
prerequisites: ["Mage", "Archmage", "Mage - Altering II"],
flavorTest: "Your Arcane Swap spell now has no minimum size, and can be cast on objects that are no larger than one Size larger than you, or twice your weight.",
abilities: [
]
},
{
name: "Mage:Altering IV",
prerequisites: ["Mage", "Archmage", "Mage - Altering III"],
flavorTest: "You can no longer be teleported against your will.",
abilities: [
]
},
{
name: "Mage:Altering V",
prerequisites: ["Mage", "Archmage", "Mage - Altering IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Altering tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Divining",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Divining Focus. If you already had the Divining Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Divining II",
prerequisites: ["Mage", "Archmage", "Mage - Divining"],
flavorTest: "You can now use your Divining feature on a Signature twice before it is dispelled.",
abilities: [
]
},
{
name: "Mage:Divining III",
prerequisites: ["Mage", "Archmage", "Mage - Divining II"],
flavorTest: "Your Signatures are no longer dispelled by your Divining feature.",
abilities: [
]
},
{
name: "Mage:Divining IV",
prerequisites: ["Mage", "Archmage", "Mage - Divining III"],
flavorTest: "You may now teleport yourself to a Signature by meditating on one of your Signatures for 10 minutes.This dispels the Signature. (2 / Rest).",
abilities: [
]
},
{
name: "Mage:Divining V",
prerequisites: ["Mage", "Archmage", "Mage - Divining IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Divining tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Enchanting",
prerequisites: ["Mage", " Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Enchanting Focus. If you already had the Enchanting Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Enchanting II",
prerequisites: ["Mage", "Archmage", "Mage - Enchanting"],
flavorTest: "An object that has your Signature costs 0 SP to possess with the Possess Object spell.",
abilities: [
]
},
{
name: "Mage:Enchanting III",
prerequisites: ["Mage", "Archmage", "Mage - Enchanting II"],
flavorTest: "Using your Unravel Magic ability always costs ½ the SPC of the spell you are targeting if it is an Enchanting spell, regardless of its source.",
abilities: [
]
},
{
name: "Mage:Enchanting IV",
prerequisites: ["Mage", "Archmage", "Mage - Enchanting III"],
flavorTest: "If you discover Enchantment magic using the Sense Magic spell, you learn who the caster is, provided that you already know their true name and they are within 1 mile of you.",
abilities: [
]
},
{
name: "Mage:Enchanting V",
prerequisites: ["Mage", "Archmage", "Mage - Enchanting IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Enchanting tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Evoking",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Evoking Focus. If you already had the Evoking Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Evoking II",
prerequisites: ["Mage", "Archmage", "Mage - Evoking"],
flavorTest: "You may now add additional damage equal to your level. This replaces your original Evoking Focus ability. (END / Rest) ",
abilities: [
]
},
{
name: "Mage:Evoking III",
prerequisites: ["Mage", "Archmage", "Mage - Evoking II"],
flavorTest: "You may add your INT to any damage rolls you make when using Evoking cantrips, chants, or prayers.",
abilities: [
]
},
{
name: "Mage:Evoking IV",
prerequisites: ["Mage", "Archmage", "Mage - Evoking III"],
flavorTest: "When you cast an Evoking spell, you may gain additional SP by gaining Death Points.For each Death Point you gain, you gain 10 SP.You lose any excess SP that you gained from this feature.",
abilities: [
]
},
{
name: "Mage:Evoking V",
prerequisites: ["Mage", "Archmage", "Mage - Evoking IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Evoking tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Illusory",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Illusory Focus. If you already had the Illusory Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Illusory II",
prerequisites: ["Mage", "Archmage", "Mage - Illusory"],
flavorTest: "You may create one Illusory Duplicate of yourself when you cast your first Illusory spell after Taking a Rest.When you are subject to physical damage, the attacker must roll an even number to hit you.If they roll an odd number, one of your duplicates is destroyed instead.Regain the ability to create Illusory Duplicates when you complete a Rest.",
abilities: [
]
},
{
name: "Mage:Illusory III",
prerequisites: ["Mage", "Archmage", "Mage - Illusory II"],
flavorTest: "Your Illusory Duplicates ability creates two duplicates.",
abilities: [
]
},
{
name: "Mage:Illusory IV",
prerequisites: ["Mage", "Archmage", "Mage - Illusory III"],
flavorTest: "Your Illusory Duplicates ability creates three duplicates.",
abilities: [
]
},
{
name: "Mage:Illusory V",
prerequisites: ["Mage", "Archmage", "Illusory IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Illusory tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Necromancy",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Necromancy Focus. If you already had the Necromancy Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Necromancy II",
prerequisites: ["Mage", "Archmage", "Mage - Necromancy"],
flavorTest: "The duration of the Raise Skeleton spell is now Indefinite, but your maximum SP are reduced by 16 for each active skeleton under your control.You can no longer upcharge Raise Skeleton.",
abilities: [
]
},
{
name: "Mage:Necromancy III",
prerequisites: ["Mage", "Archmage", "Mage - Necromancy II"],
flavorTest: "Your maximum SP are now reduced by only 8 for each active skeleton under your control.",
abilities: [
]
},
{
name: "Mage:Necromancy IV",
prerequisites: ["Mage", "Archmage", "Mage - Necromancy III"],
flavorTest: "Your maximum SP are now reduced by only 4 for each active skeleton under your control.",
abilities: [
]
},
{
name: "Mage:Necromancy V",
prerequisites: ["Mage", "Archmage", "Mage - Necromancy IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell.Each of these choices must have the Necromancy tag. You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Summoning",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Summoning Focus. If you already had the Summoning Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Summoning II",
prerequisites: ["Mage", "Archmage", "Mage - Summoning"],
flavorTest: "Creatures you create using a Summoning spell add ½ your INT to their attack rolls.",
abilities: [
]
},
{
name: "Mage:Summoning III",
prerequisites: ["Mage", "Archmage", "Mage - Summoning II"],
flavorTest: "Creatures you create using a Summoning spell add ½ your INT to their damage rolls.",
abilities: [
]
},
{
name: "Mage:Summoning IV",
prerequisites: ["Mage", "Archmage", "Mage - Summoning III"],
flavorTest: "Creatures you create using a Summoning spell add your INT to their attack and damage rolls.",
abilities: [
]
},
{
name: "Mage:Summoning V",
prerequisites: ["Mage", "Archmage", "Mage - Summoning IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Summoning tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "Mage:Warding",
prerequisites: ["Mage", "Archmage", "Arcane Intellectual"],
flavorTest: "You gain the Warding Focus. If you already had the Warding Focus, you gain 6 Skill Points you can spend on skills with the INT tag.",
abilities: [
]
},
{
name: "Mage:Warding II",
prerequisites: ["Mage", "Archmage", "Mage - Warding"],
flavorTest: "When you cast Mage Armor on yourself, and would be the victim of Massive Damage(see p. 328) you can reduce that damage by ½.If you do, your Mage Armor is dispelled.",
abilities: [
]
},
{
name: "Mage:Warding III",
prerequisites: ["Mage", "Archmage", " Mage - Warding II"],
flavorTest: "Your Mage Armor now increases all defenses by +4. This replaces your original Warding Focus ability.",
abilities: [
]
},
{
name: "Mage:Warding IV",
prerequisites: ["Mage", "Archmage", "Mage - Warding III"],
flavorTest: "Your Mage Armor can no longer be dispelled by others, and increases all defenses by + 5.",
abilities: [
]
},
{
name: "Mage:Warding V",
prerequisites: ["Mage", "Archmage", "Mage - Warding IV"],
flavorTest: "Choose one cantrip, chant, or prayer and one spell. Each of these choices must have the Warding tag.You may now cast these as if they were an arcane cantrip and arcane spell.",
abilities: [
]
},
{
name: "High Mage",
prerequisites: ["Mage", "Archmage", "Arcane 14"],
flavorTest: "You are renowned as a highly skilled arcane caster, and many hopefuls will seek you out to try to earn your favor as an instructor. You may regain half your SP when you Recoup. (1 / Rest).",
abilities: [
]
},
{
name: "Archmage",
prerequisites: ["Mage", "Archmage", "Capstone", "High Mage", ", Arcane 29"],
flavorTest: "Your spells can no longer be dispelled, identified, detected, scryed on, or targeted in any way by a caster with a level or Monster Level below your Character Level.Even then, a creature can only target your spells if they spend at least 90 SP or expend the equivalent of 90 SP through innate casting.",
abilities: [
]
},
] name: "Sorcery Track",
description: "", ,
talents: [,
{
name: "Sorcery Focus",
prerequisites: ["Mage", "Sorcery", "Mage Entry"],
flavorTest: "You can no longer take Backlash damage that is higher than your current Character Level while you have your focus on your person.You take damage equal to the Spell’s SPC(min 1) or equal to your level, whichever is lower.",
abilities: [
]
},
{
name: "Careful Casting",
prerequisites: ["Mage", "Sorcery", " Sorcery Focus", "Wellspring Tap"],
flavorTest: "By acting more carefully, you trigger backlash less frequently.When you would trigger backlash, you can now roll a 1d20, and on a 10 or higher, the backlash does not occur.However, your critical casts now only reduce the SPC by 5, instead of 10.",
abilities: [
]
},
{
name: "Careful Casting II",
prerequisites: ["Mage", "Sorcery", "Careful Casting"],
flavorTest: "You can no longer trigger backlash, and your critical casts do not cost fewer SP or restore SP.",
abilities: [
]
},
{
name: "SCareful Casting III",
prerequisites: ["Mage", "Sorcery", "Careful Casting II"],
flavorTest: "You may now choose if you are carefully casting spells or not.When you use Careful Cast, you cannot trigger backlash and your critical casts do not cost fewer SP.You must declare this before rolling.",
abilities: [
]
},
{
name: "Wellspring Tap",
prerequisites: ["Mage", "Sorcery", "Sorcery Focus", "Careful Casting"],
flavorTest: "If you critically cast on a spell that costs fewer than 5 SP, you regain that amount of SP.",
abilities: [
]
},
{
name: "Wellspring Tap II",
prerequisites: ["Mage", "Sorcery", "Wellspring Tap"],
flavorTest: "If you critically cast on a spell that costs fewer than 10 SP, you regain that amount of SP.",
abilities: [
]
},
{
name: "Wellspring Tap III",
prerequisites: ["Mage", "Sorcery", "Wellspring Tap II"],
flavorTest: "You regain 1d4+LUCK HP when you critically cast.",
abilities: [
]
},
{
name: "Careful Casting -Cantrips",
prerequisites: ["Mage", "Sorcery", "Sorcery 4"],
flavorTest: "You can now carefully cast cantrips. You must declare if you are carefully casting before you roll.You gain no benefit from critically hitting on a carefully cast cantrip, and cannot trigger backlash when doing so.",
abilities: [
]
},
{
name: "Inertia",
prerequisites: ["Mage", "Sorcery", " Careful Casting - Cantrips"],
flavorTest: "When you are the victim of a critical hit or critical cast, you regain 1d10 SP.",
abilities: [
]
},
{
name: "Cantrip Focus",
prerequisites: ["Mage", "Sorcery", "Inertia"],
flavorTest: "When you are carefully casting a cantrip, you gain TA.",
abilities: [
]
},
{
name: "Cantrip Focus II",
prerequisites: ["Mage", "Sorcery", " Cantrip Focus"],
flavorTest: "When you are carefully casting a cantrip, you gain another TA(2 total from this feature).",
abilities: [
]
},
{
name: "Cantrip Focus III",
prerequisites: ["Mage", "Sorcery", "Cantrip Focus II"],
flavorTest: "When you are carefully casting a cantrip, you gain another TA(3 total from this feature).",
abilities: [
]
},
{
name: "Cantrip Focus IV",
prerequisites: ["Mage", "Sorcery", "Cantrip Focus III"],
flavorTest: "You can now add your half your INT to your cantrip damage.",
abilities: [
]
},
{
name: "Cantrip Focus V",
prerequisites: ["Mage", "Sorcery", "Cantrip Focus IV"],
flavorTest: "You can now critically cast on cantrips, but cannot trigger backlash on cantrips.",
abilities: [
]
},
{
name: "Unstable Casting",
prerequisites: ["Mage", "Sorcery", "Inertia"],
flavorTest: "You critically cast on a 19-20, and trigger backlash on a 1-2.",
abilities: [
]
},
{
name: "Unstable Casting II",
prerequisites: ["Mage", "Sorcery", "Unstable Casting"],
flavorTest: "You critically cast on a 18-20, and trigger backlash on a 1-3.",
abilities: [
]
},
{
name: "Unstable Casting III",
prerequisites: ["Mage", "Sorcery", "Unstable Casting II"],
flavorTest: "You critically cast on a 17-20, and trigger backlash on a 1-4.",
abilities: [
]
},
{
name: "Unstable Casting IV",
prerequisites: ["Mage", "Sorcery", "Unstable Casting III"],
flavorTest: "You critically cast on a 16-20, and trigger backlash on a 1-5.",
abilities: [
]
},
{
name: "Unstable Casting V",
prerequisites: ["Mage", "Sorcery", "Unstable Casting IV"],
flavorTest: "Unstable Cast becomes an ability and you can declare if you are casting normally or using Unstable Cast.If you are casting normally, you crit on a 20 and backlash on a 1, unless you are carefully casting.",
abilities: [
]
},
{
name: "Explosive Critical",
prerequisites: ["Mage", "Sorcery", "Sorcery 11"],
flavorTest: "Your cantrip crits deal critical damage as if they were a physical attack.",
abilities: [
]
},
{
name: "Explosive Critical II",
prerequisites: ["Mage", "Sorcery", "Explosive Critical"],
flavorTest: "Your cantrip crits may also deal the same damage to one additional target that is within 5 ft of your target.",
abilities: [
]
},
{
name: "Explosive Critical III",
prerequisites: ["Mage", "Sorcery", " Explosive Critical II"],
flavorTest: "Your cantrip crits cause your damage dice to explode. You may indefinitely reroll any damage dice that landed on their maximum possible damage(such as a 6 on a d6) and add that to the total damage.",
abilities: [
]
},
{
name: "Inertia II",
prerequisites: ["Mage", "Sorcery", "Inertia II"],
flavorTest: "When you are the victim of a critical hit, you explode with your choice of fire, cold, or necrotic damage.Deal 1d10 + INT damage of that type to all creatures within 5 ft of you, including friendly creatures.",
abilities: [
]
},
{
name: "Grand Sorcerer",
prerequisites: ["Mage", "Sorcery", "Capstone", "Sorcery 14"],
flavorTest: "You are a battle hardened sorcerer of great renown, capable of harnessing the destructive power of the Fundamental Wellspring to turn the tide of a battle.Generals and monarchs would pay high sums or large favors to earn your support in a conflict. Backlash no longer ends your turn, and you now regain 1 AP when you critically cast.",
abilities: [
]
},
{
name: "Level 30",
description: "You can spend 1 LUCK point to reroll all of your damage dice.",
},

name: "Tome Wizard Track",
description: "",
talents: [,
{
name: "Awakened Spellbook",
prerequisites: ["Mage", "Tome Wizard", "Mage Entry"],
flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You can no longer be separated from your Spellbook as it becomes partially ethereal, gains limited sentience, and has the ability to hover nearby.In this form, the Awakened Spellbook cannot be targeted and occupies the same space as you. You gain + 1 to all your mental defenses.",
abilities: [
]
},
{
name: "Spell Scribf",
prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook"],
flavorTest: "Your Spellbook can produce an enchanted vellum. You can cast a spell you know on this vellum, which causes it to become a spell scroll.While there is an active scroll, you can not cast that spell normally.Any creature can use this spell scroll to cast the spell using the required AP without expending SP.When cast, the vellum dissolves and you can cast the spell normally again. If the SPC of the spell is over 16, the user of the scroll must make an INT/ Arcana check after spending the required AP.The creature must beat a DC of 10 + (the spell’s SPC / 2). On a fail, the spell fizzles and the vellum dissolves. Your Spellbook can only produce one enchanted vellum a day, regaining the ability to do so after Taking a Rest.It cannot produce an enchanted vellum while there is another enchanted vellum or spell scroll available.",
abilities: [
]
},
{
name: "Awakened Spellbook II",
prerequisites: ["Mage", "Tome Wizard", "Spell Scribe"],
flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. Your Awakened Spellbook can now occupy any space within 15 ft of you, and any spells that you cast can originate from you or the Awakened Spellbook.If you move more than 15 ft away, the book hovers back to occupy the same space as the caster automatically.It can move 15 ft per turn and moves at the end of your turn if you so desire. You gain another + 1 to your mental defenses.",
abilities: [
]
},
{
name: "Spell Scribe II",
prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook II"],
flavorTest: "You can now have two spell scrolls or enchanted vellums active at a time.Your Spellbook still only produces one per day",
abilities: [
]
},
{
name: "Tome Familiar",
prerequisites: ["Mage", "Tome Wizard", "Spell Scribe II"],
flavorTest: "Your Awakened Spellbook can now be 30 ft from you without being recalled to the space you occupy.It can now fulfill the Line of Sight and Line of Effect requirements for spells that originate from it.You must still perform any gesture or verbal components.",
abilities: [
]
},
{
name: "Awakened Spellbook III",
prerequisites: ["Mage", "Tome Wizard", "Tome Familiar"],
flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You can imbue the mote of a spell that you captured through the Steal Spell spell into your spellbook, instead of casting it.When imbued in this way, that spell becomes an Arcane spell for you until you replace it with another stolen spell.",
abilities: [
]
},
{
name: "Tome Familiar II",
prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook III"],
flavorTest: "Your Awakened Spellbook can now be 120 ft from you without being recalled to the space you occupy, and can hover up to 30 ft in the air. Gain the Joint Cast ability.",
abilities: [
]
},
{
name: "Joint Cast",
description: " When you are casting a cantrip, your Awakened Spellbook can duplicate that cantrip on a target of its own, or the same target, assuming all other conditions of the cantrip are met. (3 / Rest).",
},
{
name: "Spellstealing",
prerequisites: ["Mage", "Tome Wizard", "Tome Familiar II"],
flavorTest: "You gain an additional slot for stolen spells (Currently 2 total from this track).",
abilities: [
]
},
{
name: "Spell Thief",
prerequisites: ["Mage", "Tome Wizard", "Spellstealing"],
flavorTest: "You gain a +5 bonus to your Steal Spell rolls.",
abilities: [
]
},
{
name: "Awakened Spellbook IV",
prerequisites: ["Mage", "Tome Wizard", "Spell Thief"],
flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You gain another + 1 to your mental defenses. You can now cast multiple Arcane Rituals: 2 / Rest.",
abilities: [
]
},

{
name: "Spellstealing II",
prerequisites: ["Mage", "Tome Wizard", "Awakened Spellbook IV"],
flavorTest: "You gain an additional slot for Stolen Spells (Currently three total from this track).",
abilities: [
]
},
{
name: "Spell Scribe III",
prerequisites: ["Mage", "Tome Wizard", "Spellstealing II"],
flavorTest: "The roll others must make to use your scroll can no longer be higher than 15.",
abilities: [
]
},
{
name: "Spellstealing III",
prerequisites: ["Mage", "Sorcery", "Spell Scribe III"],
flavorTest: "You learn one of the following of your choice: Divine ritual Occult ritual Primal invocation Psionic invocation Psionic meditation If your choice has a tier or power requirement, roll an INT/ Arcana check, the DC of which is 10 + double the Tier if Primal or Psionic, or 10 + the Divine or Occult Power requirement if Divine or Occult.If you fail this check, you may never attempt to cast it again, and must make a new selection in its place. This spot in your spellbook does not count towards your three Stolen Spell slots.",
abilities: [
]
},
{
name: "Awakened Spellbook V",
prerequisites: ["Mage", "STome Wizard", "Spellstealing III"],
flavorTest: "Learn a new spell with the Arcane Ritual tag whose SPC does not exceed your total SP. You gain another + 1 to your mental defenses. You can now cast more Arcane Rituals: 3 / Rest.",
abilities: [
]
},
{
name: "Tome Wizard",
prerequisites: ["Mage", "Tome Wizard", "Capstone", "Awakened Spellbook V"],
flavorTest: "Your spellbook fully awakens, gaining its own personality. It is intensely loyal to you while you treat it well.You can use your Grimoire spell on it freely for the purposes of storing information, targeting a page instead, and you can choose whether or not you forget the information stored inside. Additionally, you gain another slot for Stolen Spells(four total) and an additional enchanted vellum(three total) ",
abilities: [
]
                     
{
name: "Level 30",
description: "If you die, your book will live on and pass the knowledge scribed inside to whomever it deems worthy",
},
},
               
},
{
name: "Oracle",

shortDescription: "Mystical hermits and diviners, oracles use primal or psionic magic to predict the future or maintain a balance over the natural world.",
quote: {
phrase: "Knowledge is both a gift and a curse. Do not seek to understand the future, as this can never be known, but instead to understand the currents that shape it.May the wisdom of the stars guide your steps towards a future that begets goodness.",
name: "Alanákalai Eyarie",
title: "prophet",
},
longDescription: "Born under a unique configuration of Ancerra’s five moons, you were destined for mystic greatness.As a child you possessed an innate sensitivity to people’s emotional states and to the natural world around you, and often you felt that unsettling sense that you knew something would happen before the fact, and it came to pass precisely as you had expected.This led you to seek the counsel of an experienced mystic who taught you the ways of oracular prophecy. Embracing your role as a link between the physical and the spiritual, you have yourself become an enigmatic guide to those who seek prophetic vision. Regardless of how accurate you are, you may be called upon frequently to predict the future.Give some thought to how you feel about such requests.Do you believe that you can actually divine the future on command, or do you think that such visions are only occasionally gifted to you? Is it a skill you can get better at, or just an innate knack you possess? Furthermore, what kind of physical props, such as tarot cards or animal bones, do you use when attempting such soothsaying?",

entryTalent: {
prerequisites: ["Class Entry", "Oracle", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "Woe",
description: "Whenever you crit fail on a d20, gain 1 SP. This cannot exceed your maximum SP.You gain an inexpensive object that you use to predict the future, such as tarot cards, knuckle bones, charmed dice, lots, or cured entrails.",
},
{
name: "Hermit",
description: "Gain +2 Arcana, Astrology, or Astronomy; AND + 2 in a skill of your choice with the Observation or Survival tag.",
},
{
name: "Oracular Magic",
description: "Choose one: Primal or Psionic. If you choose Primal, gain Warden of the Primal unless you already have it.If you already have it, gain + 1 Primal Power and + 5 SP instead. If you choose Psionic, gain Adept of the Psionic unless you already have it.If you already have it, gain + 1 Psionic Power and + 5 SP instead. Whichever you choose, LUCK is your magic attribute.",
},
{
name: "Oracular Power",
description: ". Each time you level up and spend your Talent Point on an oracle talent, you gain + 5 SP and + 1 Power in the source you chose.",
},

},
stacks: [
{
name: "Druid",
description: " You take it upon yourself to serve as a mediating force between primeval forces and embrace divine or occult powers as a way to balance the primal magic that surges within.",,
talents: [,
{
name: "Star's Guidance",
prerequisites: ["Oracle", "Druid", " Oracle Entry", "Warden of the Primal"],
flavorTest: "Pick Astronomy or Astrology. Gain +2 Skill Points in that skill. You gain the Star’s Guidance ability.",
abilities: [
{
name: "Star’s Guidance",
description: "Use Astronomy or Astrology in place of a skill with the Survival tag. (1 / Recoup).",
},

]
},
{
name: "Star's Guidance",
prerequisites: ["Oracle", "Druid", " Oracle Entry", "Warden of the Primal"],
flavorTest: "Pick Astronomy or Astrology. Gain +2 Skill Points in that skill. You gain the Star’s Guidance ability.",
abilities: [
{
name: "Star’s Guidance",
description: "Use Astronomy or Astrology in place of a skill with the Survival tag. (1 / Recoup).",
},

]
},
{
name: "Old Gods",
prerequisites: ["Oracle", "Druid", "Divine", "Star’s Guidance", "Wyrd Wood"],
flavorTest: "Gain the Disciple of the Divine talent if you did not already have it.Disciple of the Divine does not grant you additional SP when you gain it in this way.Whenever you gain a talent from this track with the Divine tag, gain + 1 Divine Power. You have taken it upon yourself to maintain a balance between nature and deity. In combat, when you cast a primal chant or spell, gain 1 Primal Proclivity.When you cast a divine prayer or spell, gain 1 Divine Proclivity.At the end of combat, subtract the lesser number from the greater. If the difference is greater than 1, then you immediately lose 2d10 SP and can only cast magic from the Source that had higher Proclivity.You are also Sickened until balance is restored. When you Recoup, you may forego the normal benefits of Recouping to reset this ability.Otherwise, the ability resets upon Taking a Rest.",
abilities: [
]
},
{
name: "Old Gods II",
prerequisites: ["Oracle", "Druid", "Divine", "Warden of the Primal"],
flavorTest: "If you suffer the penalty from having imbalanced Proclivities, you lose 1d10 SP instead of 2d10. If you remain within the difference, you regain 1d6 SP and gain + 1 on attribute checks for the next 1 hour.",
abilities: [
]

},
{
name: "Wyrd Wood",
prerequisites: ["Oracle", "Druid", "Occult", "Star’s Guidance", "Old Gods"],
flavorTest: "Gain the Initiate of the Occult talent if you did not already have it.Initiate of the Occult does not grant you additional SP when you gain it in this way.Whenever you gain a talent from this track with the Occult tag, gain + 1 Occult Power. You have taken it upon yourself to draw the wood’s rot into your own soul so that the wilderness might thrive even as you suffer.Dark Power triggers on a roll of 1-2 for you. Choose two of your primal chants and one of your primal spells to gain Dark Power.Choose what effects they have from your Primeval Darkness menu(p. 117).In combat, when you cast a chant or spell without the Dark Power tag, gain 1 Light Proclivity.When you cast a chant or spell with the Dark Power tag, gain 1 Dark Proclivity.At the end of combat, subtract the lesser number from the greater.If the difference is greater than 1, then you immediately lose 2d10 HP and can only cast magic with or without the Dark Power tag (whichever Proclivity was stronger).You are also Sickened until balance is restored.When you Recoup, you may forego the normal benefits of Recouping to reset this ability.Otherwise, this ability resets when you Take a Rest."
abilities: [
]
},
{
name: "Wyrd Wood II",
prerequisites: ["Oracle", "Druid", "Occult", "Wyrd Wood"],
flavorTest: "Choose 1-2 additional primal chants and 1-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu.If you suffer the penalty from having imbalanced Proclivities, you lose 1d10 HP instead of 2d10. Whenever you spend SP on a spell with the Dark Powertag in combat, you may choose an ally within 30 ft of you that you can see to gain 1d8 Shield HP as you draw negative energy into yourself.",
abilities: [
]
},
{
name: "Star's Guidance II ",
prerequisites: ["Oracle", "Druid", "Druid 3"],
flavorTest: "Gain +2 Skill Points in either Astrology or Astronomy. Star’s Guidance becomes 2/Recoup.",
abilities: [
]
},
{
name: "Star's Redirection",
prerequisites: ["Oracle", "Druid", "Star’s Guidance II"],
flavorTest: "When you fail a Foraging, Sheltering, or Navigating check, treat it as if it were the lowest tier of a successful outcome. (1 / Rest) ",
abilities: [
]
},
{
name: "Third Eye",
prerequisites: ["Oracle", "Druid", " Star’s Guidance II"],
flavorTest: "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. Learn one Divining spell from any source, which counts as Primal for you.",
abilities: [
]
},
{
name: "Beast Form",
prerequisites: ["Oracle", "Druid", "DStar’s Guidance II"],
flavorTest: "You can cast Polymorph on yourself without spending SP, but when you use this spell in this way you can only target yourself and can only turn into your choice of creature that is Small or smaller, is appropriate to your current habitator the habitat of your youth, and does not have a Monster Level(such as a squirrel, sparrow, or mundane scorpion). (1 / Rest) ",
abilities: [
]
},
{
name: "Old Gods III",
prerequisites: ["Oracle", "Druid", "Divine", "Druid 5", "Old Gods II"],
flavorTest: "The difference between Proclivities must be greater than 2 in order for you to suffer the penalty.If you suffer the penalty from imbalanced Proclivities, you are Shaken instead of Sickened.",
abilities: [
]
},
{
name: "Wyrd Wood III",
prerequisites: ["Oracle", "Druid", "Occult", "Druid 5", "Wyrd Wood II"],
flavorTest: "Choose 0-2 additional primal chants and 0-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu. The difference between Proclivities must be greater than 2 in order for you to suffer the penalty from imbalanced Proclivities. When Dark Power triggers and you suffer the consequences of Dark Power, every ally within 30 ft of you can gain 1d8 Shield HP as you draw in the negative energy."
abilities: [
]
},
{
name: "mystic Druid",
prerequisites: ["Oracle", "Druid", "Druid 6"],
flavorTest: "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. You cannot gain Death Points from poison or disease.",
abilities: [
]
},
{
name: "Star's Guidance III",
prerequisites: ["Oracle", "Druid", "Mystic Druid", "Star’s Guidance II"],
flavorTest: "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. You cannot become lost except by magical means."
abilities: [
]
},
{
name: "Beast Form II",
prerequisites: ["Oracle", "Druid", " Mystic Druid", "Beast Form"],
flavorTest: "When you use Beast Form, you can become a Beast of ML 1 or lower.Beast Form becomes 3/Rest."
abilities: [
]
},
{
name: "Mystic Druid II",
prerequisites: ["Oracle", "Druid", "Druid 8"],
flavorTest: "You gain the Immortal ability."
abilities: [
]
{
name: "Immortal",
description: "Your natural lifespan doubles.",
},
},
{
name: "Old Gods IV",
prerequisites: ["Oracle", "Druid", "Divine", "Mystic Druid II", " Old Gods III"],
flavorTest: "If you suffer the penalty from imbalanced Proclivities, you lose 1d6 SP instead of 1d10. Moreover, if you remain within the difference, you regain 1d10 SP and have TA on all d20 rolls for the next 1 hour."
abilities: [
]
},
{
name: "Wyrd Wood IV",
prerequisites: ["Oracle", "Druid", "Occult", "Mystic Druid II", "Wyrd Wood III"],
flavorTest: "Choose 0-2 additional primal chants and 0-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu. You may voluntarily succumb to Dark Power.If you do, you suffer the Dark Power’s effects, but you also cast that ability as though you had not rolled Dark Power, rolling 2d20 and keeping whichever was higher."
abilities: [
]
},
{
name: "Mystic Druid III",
prerequisites: ["Oracle", "Druid", "Occult", "Druid 10"],
flavorTest: "You are immune to poison and disease."
abilities: [
]
},
{
name: "Star's Guidance IV",
prerequisites: ["Oracle", "Druid", " Mystic Druid III", "Star’s Guidance III"],
flavorTest: "Gain +2 Skill Points in Arcana, Astrology, or Astronomy. You cannot become lost, including by magical means. Furthermore, while you concentrate on the sky and are not actively engaged in another task, you can always see the stars in the sky, even if it is daytime or you are indoors."
abilities: [
]
},
{
name: "Beast Form III",
prerequisites: ["Oracle", "Druid", "Mystic Druid III", "Beast Form II"],
flavorTest: "When you use Beast Form, you can become a Beast of ML 3 or lower."
abilities: [
]
},
{
name: "Mystic Druid IV",
prerequisites: ["Oracle", "Druid", "Druid 12"],
flavorTest: "Your Immortal ability becomes: Your natural lifespan increases tenfold."
abilities: [
]
},
{
name: "Old Gods V",
prerequisites: ["Oracle", "Druid", "Divine", "Mystic Druid IV", "Old Gods IV"],
flavorTest: "The difference between Proclivities must be greater than 3 for you to suffer the penalty from imbalanced Proclivities. You gain the normal benefits of a Recoup as well as restoring balance when necessary."
abilities: [
]
},
{
name: "Wyrd Wood V",
prerequisites: ["Oracle", "Druid", "Occult", "Mystic Druid IV", "Wyrd Wood IV"],
flavorTest: "Choose 0-2 additional primal chants and 0-2 additional primal spells to gain Dark Power, choosing their effects from the Primeval Darkness menu. The difference between Proclivities must be greater than 3 for you to suffer the penalty.When allies gain Shield HP from you using Dark Power, they also gain the Protected condition until the end of your next turn."
abilities: [
]
},
{
name: "Archdruid",
prerequisites: ["Oracle", "Druid", " Capstone", "Druid 14"],
flavorTest: "As an archdruid, you look after the untamed wilderness with endless patience and incalculable wisdom. When you sleep, you can enter a trance that lets you meditate and contemplate planar entities.Gain three abilities: Contemplate, After the Ashes, and Primeval Foresight."
abilities: [
]
{
name: "Contemplate",
description: "You can reselect any primal, psionic, divine, and/ or occult spells that you know. 1 /Week.",
},
{
name: "After the Ashes",
description: "If your primal spells have Dark Power, you can choose whether they keep it, remove it, or gain a different Dark Power ability.",
},
{
name: "Primeval Foresight",
description: "You can reassign some or all of your Oracle talents. 1/Month.",
},
{
name: "Level 30",
description: "Your lifespan (including your bonus from Immortal) increases tenfold.",
},


name: "Elementalist",
description: "You capture the terrible energy of raging fires and storms, turning such harmful effects into powerful elemental shields.", ,
talents: [,
{
name: "Elemental Affinity",
prerequisites: ["Oracle", "Elementalist", "Oracle Entry"],
flavorTest: "Gain Elemental Affinity.",
abilities: [
{
name: "Elemental Affinity",
description: "When you take elemental damage,you can spend 1 Reactive AP to gain Affinity to it(including the damage you just took).The first time you deal any type of damage after taking damage for which you have Affinity, also deal 1d6 damage of that type.You retain this Affinity for 1 min. (2 / Rest) ",
},
]
name: "Season's Givings",
prerequisites: ["Oracle", "Elementalist", "Oracle Entry"],
flavorTest: "You grow more in tune with the natural world. Gain Resist 3 to a damage type based on what season it is: Spring = radiant, Summer = fire, Autumn = necrotic, and Winter = cold.",
abilities: [
]

},
{
name: "Repurpose Damage I",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity"],
flavorTest: "Gain one of the abilities with the Repurpose Damage I tag. When you are hit with the corresponding type of damage, you can activate that ability for 1 Reactive AP.You can use any abilities with a Repurpose Damage tag that you know 2 / Rest collectively.",
abilities: [
]
},
name: "Siphon Damage",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity"],
flavorTest: "Gain another Repurpose Damage ability.",
abilities: [
]
name: "Ice Armor",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage I"."Repurpose Damage I"],
flavorTest: "When you take cold damage, gain DR 4/Fire for 1 minute.",
abilities: [
]
name: "Corrosive Strikes",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
flavorTest: "When you take corrosive damage, you can corrode your attacks.When attacking a single creature, ignore up to Resist 4 of any kind for 1 minute.",
abilities: [
]
name: "Heat Aura",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
flavorTest: "When you take fire damage, gain DR 4/Cold for 1 minute.",
abilities: [
]
name: "Flaming Shield",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
flavorTest: "When you would gain the Burning condition, you may instead cast the Fire Shield spell as if it were primal or psionic without spending SP.",
abilities: [
]
name: "Lightning Fast",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
flavorTest: "When you take lightning damage, gain +4 AP on your next turn.",
abilities: [
]
name: "Sickening Strikes",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage I", "Repurpose Damage I"],
flavorTest: "When you take toxic damage, you can make your attacks toxic.For 1 minute when you attack a single target and hit, the target is Sickened until the end of its next turn.",
abilities: [
]}, {
name: "Elemental Affinity II",
prerequisites: ["Oracle", "Elementalist", " Elemental Affinity I", "Elementalist 4"],
flavorTest: "You can use Elemental Affinity on allies within 15 ft of you when they take a type of damage that your Elemental Affinity can interact with.Elemental Affinity becomes ½ LUCK / Rest.",
abilities: [
]
name: "Repurpose Damage II",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity II", "Repurpose Damage I"],
flavorTest: "Gain another Repurpose Damage ability from the old list or from talents with the Repurpose Damage II tag.You can learn abilities from the new list with Siphon Damage.",
abilities: [
]
name: "Blood Permeation",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage II", "Repurpose Damage II"],
flavorTest: "When you would gain the Bleeding condition, you can instead regain HP equal to the amount of damage you would take, for 1 minute or until your Bleeding condition would otherwise end(whichever is shorter).",
abilities: [
]
name: "Blunt Force Armor",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage II", "Repurpose Damage II"],
flavorTest: "When you take Blunt damage, you can convert the force into stone that encases your skin.Gain + 3 AR for 1 minute.",
abilities: [
]
name: "Elemental Affinity III",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity II",],
flavorTest: "A creature benefitting from Elemental Affinity can gain the Elemental Strikes ability.",
abilities:
[
{
name: "Elemental Strikes",
description: "+1d6 damage of the Affinity type for the duration. (2 / Rest) ",
},
]
}, {
name: "Protective Elementalist",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity III", "Repurpose Damage II"],
flavorTest: "Repurpose Damage becomes ½ LUCK/Rest. You can expend your Repurpose Damage on an ally within 15 ft of you when they take that type of damage.",
abilities:
[]
}, {
name: "Protective Elementalist II",
prerequisites: ["Oracle", "Elementalist", "Protective Elementalist"],
flavorTest: "Repurpose Damage becomes LUCK/Rest and can be used on allies within 30 ft of you.",
abilities:
[]
}, {
name: "Elemental Affinity IV",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity III", "Elementalist 9"],
flavorTest: "Regain one use of Elemental Affinity upon Recouping. Affinity can work on energy damage as well.",
abilities:
[]
}, {
name: "Absorb Explosion",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity IV"],
flavorTest: "When you take elemental damage that damaged other creatures, you can cause all other creatures to halve the damage that they took from the blast.On your next turn, you can spend 3 AP to make a special attack in a 60 ft line. + LUCK vs REF of each creature in the line, dealing 3d6 damage of that elemental type and ½ damage on a miss. (1 / Rest) ",
abilities:
[]
}, {
name: "Repurpose Damage III",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity IV", "Repurpose Damage II"],
flavorTest: "Gain an additional Repurpose Damage power, choosing from the old lists or from talents with the Repurpose Damage III tag.Siphon Damage can let you gain abilities from the ne list.",
abilities:
[]
}, {
name: "Bodily Necrosis",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage II"],
flavorTest: "When you take necrotic damage, you can weaken your enemies.For 1 minute when you attack a single creature and hit, that creature is Dazed until the end of its next turn.",
abilities:
[]
}, {
name: "Psychic Resonance",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage III"],
flavorTest: "When you take psychic damage, you can surround yourself in a psychic field.You cannot be Charmed, Enthralled, or Shaken for 1 minute.",
abilities:
[]
}, {

name: "Irradiated Aura",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage III"],
flavorTest: "When you take radiant damage, you burst into radiance for 1 minute.Shed bright light for 30 ft, dim light for 30 ft beyond that, and gain Resist 5 Ammunition.If this causes ammunition to miss, it is burnt to a crisp.",
abilities:
[
name: "Sonorous Strikes",
prerequisites: ["Oracle", "Elementalist", "Repurpose Damage III", "Repurpose Damage III"],
flavorTest: "When you take sonic damage, your attacks become thunderous.For 1 minute when you attack a single creature and hit, that creature also falls Prone if it is Huge or smaller.",
abilities:
[
name: "Elemental Affinity V",
prerequisites: ["Oracle", "Elementalist", "Elemental Affinity IV", "Elementalist 13"],
flavorTest: "Elemental Strikes also apply to spells that deal damage. Spells that deal damage can be of that damage type or the normal damage type(the creature with Elemental Strikes chooses each time).(2 / Rest).",
abilities:
[
name: "nce",
prerequisites: ["Oracle", "Elementalist", "Capstone", " Elemental Affinity V "],
flavorTest: "You are a master of all elements, and can blend them together with impeccable ease.The archfae from Ashyidir Conclave itself look upon you as skillful in their arts. Regain one use of Elemental Affinity each time you Recoup. Choose one of your Repurpose Damage abilities.It can be used indefinitely and does not expend your Repurpose Damage usages. Finally, you gain the Superior Affinity ability",
abilities:
[
{
name: "Superior Affinity",
description: "Affinity negates all damage of that type and heals the recipient for ½ the total damage instead. (1 / Rest).",
},
{
name: "Level 30 ",
description: "Superior Affinity becomes 1/Recoup.",
},
},
{
name: "Fate",
description: "Sometimes called a prophet or diviner, you might gain the ability to see shadows of the future and exert your influence over fate.",,
talents: [,
{
name: "Thread Of Fate",
prerequisites: ["Oracle", "Fate", "Oracle Entry"],
flavorTest: "Gain the Boon of Fate ability",
abilities: [
{
name: "Boon of Fate",
description: "You can spend Luck points to reroll allies’ d20 rolls when they are within 60 ft of you.",
},
]
[,
},
{
name: "Weal",
prerequisites: ["Oracle", "Fate", "Thread of Fate"],
flavorTest: "Gain the Weal ability.",
abilities: [
{
name: "Weal",
description: "When you crit on a d20 roll, gain 1 SP. This cannot exceed your maximum SP.",
},

]
[,
},
{
name: "Weal II - Skills",
prerequisites: ["Oracle", "Fate", "Weal"],
flavorTest: "Your crit range on skills increases by 1.",
abilities: [

]
[,
},
{
name: "Weal II - Spells",
prerequisites: ["Oracle", "Fate", "Weal"],
flavorTest: "Your crit range on spells increases by 1.",
abilities: [
{
name: "",
description: "",
},


]
[,
},
{
name: "Weal III - Chants",
prerequisites: ["Oracle", "Fate", " Weal II"],
flavorTest: "Your crit range on chants increases by 1.",
abilities: [

]
[,
},
{
name: "Weal III - Weapons",
prerequisites: ["Oracle", "Fate", "Weal II"],
flavorTest: "Your crit range on weapons increases by 1.",
abilities: [

]
[,  

},
{
name: "Weal IV - Fortune's Favor",
prerequisites: ["Oracle", "Fate", "Weal III"],
flavorTest: "When you cast a spell that does not require a d20 roll, you may roll 1d20 anyway to attempt to trigger Woe or Weal.",
abilities: [
]
[,  

},
{
name: "Weal IV - Invocations",
prerequisites: ["Oracle", "Fate", "Weal III"],
flavorTest: "Your crit range on invocations increases by 1.",
abilities: [
]
[,  

},
{
name: "Thread Of Fate II",
prerequisites: ["Oracle", "Fate", "Weal IV"],
flavorTest: "Gain the Bane of Fate ability",
abilities: [
{
name: "Bane of Fate",
description: "You can spend Luck points to reroll enemies’ d20 rolls when they are within 60 ft of you. (2 / Rest).",
},

name: "Who Is Me",
prerequisites: ["Oracle", "Fate", "Thread of Fate II"],
flavorTest: "You crit fail on a roll of 1 or 2.",
abilities: [
]
[,
name: "Thread Of Fate III",
prerequisites: ["Oracle", "Fate", "Woe Is Me"],
flavorTest: "Boon of Fate and Bane of Fate extend to 90 ft range.",
abilities: [
]
[,
name: "Thread Of Fate IV",
prerequisites: ["Oracle", "Fate", "Thread of Fate III"],
flavorTest: "Bane of Fate becomes 2/Recoup.",
abilities: [
]
[,
name: "Great Weal",
prerequisites: ["Oracle", "Fate", "Thread of Fate IV"],
flavorTest: "Choose one Weal ability that you already have: Skills, Spells, Chants, Weapons, or Invocations. Increase your crit range on that choice by 1.",
abilities: [
]
[,
name: "Ambient Luck",
prerequisites: ["Oracle", "Fate", "Great Weal"],
flavorTest: "Gain the Ambient Luck ability.",
abilities: [
]
{
name: "Ambient Luck",
description: "When an ally crits within 30 ft of you, regain 1 SP. (LUCK/Rest).",
},
[,
name: "Manipulate Chance",
prerequisites: ["Oracle", "Fate", "Ambient Luck"],
flavorTest: "Gain the Manipulate Chance ability.",
abilities: [
]
{
name: "Manipulate Chance",
description: "You may spend 4 SP to regain an expended Luck point.",
},
[,
name: "Turn Of Fortune",
prerequisites: ["Oracle", "Fate", " Turn of Fortune"],
flavorTest: "Gain the Turn of Fortune ability",
abilities: [
]
{
name: "Turn of Fortune",
description: "When you roll multiple d20s (e.g., you are Sickened), you apply Weal / Woe to all rolls, even though you only use one die to determine the outcome of the roll.",
},
[,
name: "Fated",
prerequisites: ["Oracle", "Fate", "Great Weal"],
flavorTest: "Gain the Fated ability",
abilities: [
]
{
name: "Fated",
description: "Before rolling a d20, call out even or odd. If youare correct, gain + 1 on the roll.",
},
[,
name: "Fated II",
prerequisites: ["Oracle", "Fate", "Fated"],
flavorTest: "Your Fated bonus becomes +2.",
abilities: [
]
[,
name: "Fated III",
prerequisites: ["Oracle", "Fate", "Fated II"],
flavorTest: "Your Fated bonus becomes +3.",
abilities: [
]
[,
name: "Portent",
prerequisites: ["Oracle", "Fate", "Great Weal"],
flavorTest: "Gain the Portent ability.",
abilities: [
]
                   
{
name: "Portent",
description: "Regain 1 luck point when you recoup.",
},
[,
name: "Portent II",
prerequisites: ["Oracle", "Fate", "Portent"],
flavorTest: "Portent becomes: Regain 2 luck points when you recoup.",
abilities: [
]

[,
name: "Portent III",
prerequisites: ["Oracle", "Fate", "Portent II"],
flavorTest: "Portent becomes: Regain 3 luck points when you recoup.",
abilities: [
]
[,
name: "Overcome Woe",
prerequisites: ["Oracle", "Fate", "Turn of Fortune", "Fated III", "or Portent III"],
flavorTest: "When your Woe ability activates, reroll the crit fail on your d20(still gain the Spell Point); keep the second roll.",
abilities: [
]
[,
name: "Grand Weal",
prerequisites: ["Oracle", "Fate", "Capstone", " Overcome Woe"],
flavorTest: "Throughout select circles of oracles, mystics, and certain religious orders, you are known to be blessed by deities and / or preternaturally lucky through manipulating your own Essence. (Your precise reputation depends upon your character’s backstory, beliefs, personality, and in -world connections.) The choice you made for Great Weal increases its crit range to the maximum possible crit range: you crit on a roll of 16-20 with your selection.",
abilities: [
]
{
name: "Level 30",
description: "The final cap for your LUCK increases from 12 to 14.",
},
},
{
name: "Guide",
description: "Whether a mysterious mentor or an eclectic professor, you instruct your pupils in various skills and techniques, helping them all to improve.",,
talents: [,
{
name: "Mentor",
prerequisites: ["Oracle", "Guide", "Oracle Entry"],
flavorTest: "Gain 2 Skill Points in any skill. Gain the Mentor ability.",
abilities: [
{
name: "Mentor",
description: "You can spend 1 AP to lose X points in a Skill to give X points in that skill to 1 ally that you touch.This lasts for 2 hours, whereupon your ally loses that bonus and you regain your normal Skill Points. (AWR / Rest).",
},

{
name: "Reactive Instruction",
prerequisites: ["Oracle", "Guide", "Mentor"],
flavorTest: "Gain 2 Skill Points in any skill. You may use your Mentor ability reactively.",
abilities: [

]
{
name: "Mystic Support",
prerequisites: ["Oracle", "Guide", "Reactive Instruction"],
flavorTest: "When you end your turn with 0 AP, gain 1 special Mystic Support AP that acts as Reactive AP.You lose this AP at the start of your next turn. You can only gain one source of special AP.If you gain a second source of special AP, choose whether you keep this source or your new source.",
abilities: [

]
{
name: "Mentor II",
prerequisites: ["Oracle", "Guide", "Mystic Support"],
flavorTest: "Gain 2 Skill Points in any skill. Mentor becomes AWR/ Recoup.",
abilities: [

]
{
name: "Mystic Support II",
prerequisites: ["Oracle", "Guide", "Mentor II"],
flavorTest: "Mystic Support gives you 2 Support AP",
abilities: [

]
{
name: "Wakeful Serenity",
prerequisites: ["Oracle", "Guide", "Mystic Support II"],
flavorTest: "Gain the Wakeful Serenity ability.",
abilities: [
{
name: "Wakeful Serenity",
description: "The first time you roll against Fatigue after Recouping, roll 2d20 and use the higher result.",
},

]
{
name: "Wakeful Serenity II",
prerequisites: ["Oracle", "Guide", "Wakeful Serenity"],
flavorTest: "Use Wakeful Serenity whenever you roll against Fatigue, not only the first time after Recouping.",
abilities: [

]
{
name: "Talented Mentor",
prerequisites: ["Oracle", "Guide", "Oracle’s Support II"],
flavorTest: "Gain one specialization talent. When you Mentor someone, you can lose access to one of your specialization talents to let them gain that talent.If this would result in you losing Skill Points, you choose how to assign the losses, and regain those Skill Points at the end of the duration.",
abilities: [

]
{
name: "Magical Mentor",
prerequisites: ["Oracle", "Guide", "Talented Mentor"],
flavorTest: "Learn an extra spell from the source of magic that you chose when you took Oracle Entry.When you Mentor someone, you can pick a spell, expend SP, and that creature can cast that spell 1 time during their mentorship.They must spend the spell’s normal AP, but not SP, to do so.You lose access to that spell for the duration.",
abilities: [

]
{
name: "Guide",
prerequisites: ["Oracle", "Guide", "Magical Mentor"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, you may split your X Skill Points between two creatures, giving them each ½ X. (You cannot choose yourself.) ",
abilities: [

]
{
name: "Guide II",
prerequisites: ["Oracle", "Guide", " Guide"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, you can choose two creatures to gain the full benefit(instead of halving the benefit). (You cannot choose yourself.) ",
abilities: [

]
{
name: "Guide III",
prerequisites: ["Oracle", "Guide", "Guide II"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, you can choose three creatures within 10 ft of you to gain the full benefit. (You cannot choose yourself.) ",
abilities: [

]
{
name: "Guide IV",
prerequisites: ["Oracle", "Guide", "Guide III"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, you can choose five creatures within 10 ft of you to gain the full benefit. (You cannot choose yourself.) ",
abilities: [

]
{
name: "Apprentice",
prerequisites: ["Oracle", "Guide", "Magical Mentor"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, you may lose Skill Points in two skills, granting the creature that you touch bonus Skill Points in both of those skills.",
abilities: [

]
{
name: "Apprentice II",
prerequisites: ["Oracle", "Guide", "Apprentice"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, you may lose Skill Points in three skills, granting the creature that you touch bonus Skill Points in all of those skills.",
abilities: [

]
{
name: "Apprentice III",
prerequisites: ["Oracle", "Guide", "Apprentice II"],
flavorTest: "Gain 2 Skill Points in any skill. When you use your Mentor ability, the target creature can exceed the + 20 cap in Skill Points.",
abilities: [

]
{
name: "Apprentice IV",
prerequisites: ["Oracle", "Guide", "Oracle EntryApprentice III"],
flavorTest: "Gain 2 Skill Points in any Skill. Gain the Expert Guidance ability.",
abilities: [
{
name: "Expert Guidance",
description: "When you use your Mentor ability, the target creature gains 2X the Skill Points in one skill that you lend to them. (1 / Rest) ",
},

]
},
{
name: "Mystic Support III",
prerequisites: ["Oracle", "Guide", "Guide IV or Apprentice IV"],
flavorTest: "Mystic Support gives you 3 Support AP",
abilities: [

]
},
{
name: "Talented Mentor II",
prerequisites: ["Oracle", "Guide", "Mystic Support III"],
flavorTest: "Gain one specialization talent. When you Mentor someone, you can lose access to two of your specialization talents to let them gain those talents.If this would result in you losing Skill Points, you choose how to assign the losses, and regain those Skill Points at the end of the duration.",
abilities: [

]
},
{
name: "Magical Mentor II",
prerequisites: ["Oracle", "Guide", "Talented Mentor II"],
flavorTest: "Learn an extra spell from the source of magic that you chose when you took Oracle Entry.When you Mentor someone, you can pick one spell and one chant or invocation, expend SP for the spell(and a slot for the invocation if selected), and that creature can cast those abilities one time each during their mentorship.You lose access to the spells for that time.",
abilities: [

]
{
name: "Superior Mentor",
prerequisites: ["Oracle", "Guide", "Magical Mentor II"],
flavorTest: "You are known across vast swathes of your continent as a brilliant mentor.Kings seek your counsel, and wealthy merchants and nobles dream of having you tutor their children for an afternoon.Your reputation is often sufficient to curry favors with nobles and to arrange meetings with people of import the day that you request such meetings. Gain 12 Skill Points, which you can spend on any skills of your choice.You may use your Mentor ability indefinitely. People who train with you for at least 1 hour per day and at least 4 days per week can gain 1 Skill Point per month in any skill for which you have at least a + 10.",
abilities: [
{
name: "Level 30",
description: "When you use your Mentor ability, receiving creatures gain + Y in the Skill Points they gain from you, where Y equals your AWR. (This cannot exceed the maximum + 20 Skill Point cap unless you have Apprentice III).",
},

]

}
}
]    },
{
name: "Pugilist",
shortDescription: "Whether a brawny boxer, a nimble martial artist, or a wellrounded wrestler, a pugilist excels at unarmed combat.",
quote: {
phrase: "In the streets, nobody cares if you wanna fight fair or not.You gotta hit ‘em hard, and hit ‘em where it hurts ‘til your right hand’s runnin’ red.” ",
name: "Charlie Cobbler",
title: "provider for his family",
},
longDescription: "You grew up in a rough neighborhood and had been in more than your fair share of street fights by the time you were a teen.Forged and tempered by your brutal environment, you are familiar with the necessity of fighting over scraps of food and the agony of gnawing hunger and broken ribs after losing such a fight.But you remained determined to persevere despite innumerable hardships.Through sheer will to survive, unwavering grit, and bloody fists, you became a powerful unarmed combatant, capable of going toe to toe even with skilled warriors that fight with sword or spear. Your skill in unarmed combat is unquestioned and your style distinct.Do you rely on your overwhelmingly powerful physique to crush your foes? Maybe you fight with an unpredictable blend of strength and agility, or you might rigorously train in various forms that you can use to outmaneuver enemies with different fighting styles.Whatever your personal blend of unarmed combat maneuvers, you quickly cultivate a reputation among other fighters for your skill at holding your own against armed combatants.",

entryTalent: {
prerequisites: ["Class Entry", "Pugilist", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "abilities. Unarmed Combatant",
description: "Your unarmed attacks deal more damage now.You may choose whether to use STR or DEX for attacks and damage with unarmed attacks and natural weapons.Your unarmed and natural weapon damage increases by one die size(e.g., from 1d4 to 1d6).If your unarmed damage previously did not have a damage die, then this feature causes your unarmed attacks to deal 1d4 damage.",
},
{
name: "Pugilist’s Maneuvers",
description: "Gain three Pugilist’s Maneuvers: Grab, Counterpunch, and Corner.You can use your Pugilist’s Maneuvers collectively a number times equal to your Pugilist Level/ Recoup.You can learn additional Pugilist Maneuvers from your other pugilist talents.",
},
{
name: "Grab",
description: "When you hit with an unarmed attack, you may automatically Grapple the creature.",
},
{
name: "Counterpunch",
description: "When an enemy misses you with a melee attack, you can spend 1 AP to make an unarmed reactive attack.",
},
{
name: "Corner",
description: "When an enemy moves more than 5 ft away from you, you may spend 1 AP to make an unarmed reactive attack, then move up to your speed towards that enemy.",
},

]

},
stacks: [
{
name: "Constitute",
description: "Your body is capable of withstanding overwhelming punishment.No matter how hard you are hit, no matter how many blows, you come back for another round.",,
talents: [,
{
name: "Ignore Pain",
prerequisites: ["Pugilist", "Constitute", "Pugilist Entry"],
flavorTest: "When you are not wearing armor and take physical damage, you can spend 1 Reactive AP to gain Shield HP equal to the damage you just took. (END / Rest) ",
abilities: [

]
[,
{
name: "Surge Of Strength",
prerequisites: ["Pugilist", "Constitute", "Ignore Pain"],
flavorTest: "Gain the Surge of Strength ability.",
abilities: [
{
name: "Surge of Strength",
description: "The first time you are Bloodied after Taking a Rest, regain 1d6 + END HP.",
},

]
[,
{
name: "Red Right Hand",
prerequisites: ["Pugilist", "Constitute", " Surge of Strength"],
flavorTest: "Learn 1 Pugilist’s Maneuver of your choice. When you are Bloodied, your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d4 to 1d6), to a maximum of 1d12.",
abilities: [

]
[,
{
name: "Ignore Pain II",
prerequisites: ["Pugilist", "Constitute", "Red Right Hand"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. If Bloodied when you Ignore Pain, add your END to the amount of Shield HP that you gain. ",
abilities: [

]
[,
name: "Surge Of Strength II",
prerequisites: ["Pugilist", "Constitute", "Ignore Pain II"],
flavorTest: "Surge of Strength becomes: The first time you are Bloodied after Recouping.",
abilities: [

]
[,
name: "Enrage",
prerequisites: ["Pugilist", "Constitute", "Surge of Strength II"],
flavorTest: "While you are Bloodied, all of your unarmed and natural weapon damage rolls deal + X damage, where X equals the number of Death Points you have.",
abilities: [
]
[,
name: "Ignore Pain III",
prerequisites: ["Pugilist", "Constitute", "Enrage"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. When you Recoup, regain 1 use of Ignore Pain.",
abilities: [

]
[,
name: "Battle Focus",
prerequisites: ["Pugilist", "Constitute", "Ignore Pain III"],
flavorTest: "Gain Battle Focus.",
abilities: [
{
name: "Battle Focus",
description: " While you are Bloodied, if you are Shaken, only subtract 1 from your rolls.",
},

]
[, name: "On The Ropes",
prerequisites: ["Pugilist", "Constitute", "Battle Focus"],
flavorTest: "Gain the On the Ropes ability",
abilities: [
{
name: "On the Ropes",
description: ". When reduced to 0 HP, regain 1d4 HP. (1/Rest).",
},

]
[, name: "Surge Of Strength III",
prerequisites: ["Pugilist", "Constitute", " On the Ropes"],
flavorTest: "Surge of Strength becomes: The first time you are Bloodied after rolling Initiative.",
abilities: [

]
[,
name: "Death defier",
prerequisites: ["Pugilist", "Constitute", "Surge of Strength III"],
flavorTest: "Gain the Cling to Life ability.",
abilities: [
{
name: "Cling to Life",
description: "When you reach 8 Death Points, roll 1d20 + END.On 14 or higher, you do not die and go back to 7 Death Points.This check increases by + 1 each time you make it, resetting when you Take a Rest.",
},

]
[,
name: "Constiute",
prerequisites: ["Pugilist", "Constitute", "Surge of Strength III"],
flavorTest: "Treat your END as being one Threshold higher when calculating your HP.When you take this talent, you may reroll or recalculate your HP.",
abilities: [

]
[,
name: "Enrage II",
prerequisites: ["Pugilist", "Constitute", "Constitute 11"],
flavorTest: "Treat your END as being one Threshold higher when calculating your HP.When you take this talent, you may reroll or recalculate your HP.",
abilities: [

]
[,
name: "Red Right Hand II",
prerequisites: ["Pugilist", "Constitute", "Enrage II"],
flavorTest: "Learn 1 Pugilist’s Maneuver of your choice. When you are have 0 HP, your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d6 to 1d8), to a maximum of 1d12.",
abilities: [

]
[,
name: "Mastery of form",
prerequisites: ["Pugilist", "Constitute", "Red Right Hand II"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.",
abilities: [

]
[,
name: "Battle Focus II",
prerequisites: ["Pugilist", "Constitute", "Mastery of Form"],
flavorTest: "Battle Focus becomes: While you are Bloodied, you are immune to being Shaken.If you are Sickened, you instead subtract 2 from your d20 rolls.",
abilities: [

]
[,
name: "Unkillable Champion",
prerequisites: ["Pugilist", "Constitute", "Capstone", "Battle Focus II"],
flavorTest: "You are cheered the world over as an unkillable warrior. People often challenge you to feats of strength, buy you drinks, and want to hear of your great exploits. You may use the Unkillable Champion ability when you roll Initiative.",
abilities: [
{
name: "Unkillable Champion",
description: "For the duration of the battle, regain 1d4 HP at the start of each of your turns. (1 / Week).",
},
{
name: "Level 30",
description: "Unkillable Champion becomes 1/Rest.",
},
]
[,
},
{
name: "Martial Arts",
description: "By focusing on harmony of body, mind, and spirit, you can flow between various forms of unarmed combat, going beyond the bounds of physique alone.",,
talents: [,
{
name: "Predict A Punch",
prerequisites: ["Pugilist", "Martial Arts", "Class Entry"],
flavorTest: "Gain +1 ANT. Gain the Impulse talent from the armor specialization stack unless you have one of its incompatibilities.",
abilities: [

]
},
{
name: "Stance Of The Owl",
prerequisites: ["Pugilist", "Martial Arts", "Predict a Punch"],
flavorTest: "You may spend 3 AP to enter the Stance of the Owl. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Owl",
description: "You have TD on all attacks, and have + 3 to ANT.",
},
},
{
name: "Stance Of The Squirrel",
prerequisites: ["Pugilist", "Martial Arts", "Predict a Punch"],
flavorTest: "You may spend 3 AP to enter the Stance of the Squirrel. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Squirrel",
description: "You have a climb speed equal to your walking speed, and count as one size smaller for the purposes of Grappling and moving through creatures.",
},
},
{
name: "Stance Of The Bear",
prerequisites: ["Pugilist", "Martial Arts", "Predict a Punch"],
flavorTest: "You may spend 3 AP to enter the Stance of the Bear. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Bear",
description: "You have -1 REF and +3 FORT.",
},
},
{
name: "Sense Danger",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 2"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the observation tag. You can never be Partially Surprised.",
abilities: [

{
name: "Flip",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 2"],
flavorTest: "Learn the Go for the Knees Pugilist Maneuver if you didn’t know it. When you use Counterpunch, you may also use Go For the Knees as part of the same Pugilist’s Maneuver(costing no additional AP).",
abilities: [
                       
},
{
name: "Unarmored Defense",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 2"],
flavorTest: "Gain +1 REF and FORT.",
abilities: [
                        
},
{
name: "Stance Of The Bison",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 3"],
flavorTest: "You may spend 3 AP to enter the Stance of the Bison. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Bison",
description: "Gain Resist Physical 2, and you count as one Size larger for the purposes of Grappling and determining Encumberance.Suffer Vulnerable Energy 1.",
},
},
{
name: "Stance Of The Turtle",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 3"],
flavorTest: "You may spend 3 AP to enter the Stance of the Turtle. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Turtle",
description: "You are Shaken, but have +2 to every defense.",
},
},
{
name: "Stance of the Leopard",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 3"],
flavorTest: "You may spend 3 AP to enter the Stance of the Leopard. You remain in this Stance until you spend 3 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Leopard",
description: " Gain +1 REF. You can move 5 ft as part of making a melee unarmed or natural weapon attack(move before or after the attack), but when you are hit with a melee attack, the enemy can move you in the same fashion.",
},
},
{
name: "Armed Arts",
prerequisites: ["Pugilist", "Martial Arts", "Predict a Punch"],
flavorTest: "The following weapons work with any Martial Arts ability that references “unarmed or natural weapon attacks”: dagger, kama, kunai, kusarigama, nunchucks, quarterstaff, shuriken, tonfa, wakizashi, and whip.",
abilities: [
                        
},
{
name: "Armed Arts II",
prerequisites: ["Pugilist", "Martial Arts", "Armed Arts"],
flavorTest: "Armed Arts weapons work for Pugilist’s Maneuvers that mention “unarmed or natural weapon attacks” as well.",
abilities: [
                        
},
{
name: "Kensei",
prerequisites: ["Pugilist", "Martial Arts", "Armed Arts II"],
flavorTest: "Pick any two weapons with the Melee or Reach tag to add to your Armed Arts weapons list.",
abilities: [
                        
},
{
name: "Fluid Forms",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 4"],
flavorTest: "Switching into or out of a Stance now costs 2 AP. Gain Fluid Forms.",
abilities: [
{
name: "Fluid Forms",
description: "You can switch between Stances for 0 AP. (1 / Recoup) ",
},
},
{
name: "Stance Of The Serpent",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms"],
flavorTest: "You may spend 2 AP to enter the Stance of the Serpent.You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Serpent",
description: "For the duration, when you spend AP to move, you can move + 5 ft.Gain + 1 REF, but suffer - 1 FORT.",
},
},
{
name: "Stance Of The Rabbit",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms"],
flavorTest: "You may spend 2 AP to enter the Stance of the Rabbit. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Rabbit",
description: ". Your jump distance is doubled, you gain + 1 ANT and REF, and you suffer - 1 WILL.",
},
},
{
name: "Stance Of The Wolf",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms"],
flavorTest: "You may spend 2 AP to enter the Stance of the Wolf. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.
",
abilities: [
{
name: "Stance of the Wolf",
description: "You gain TA on unarmed and natural weapon attacks against creatures if at least one ally is adjacent to that creature, and that ally gains this TA as well. If there are no allies adjacent to a hostile creature, you have TD against it.",
},
},
{
name: "Know Your Enemy",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 6"],
flavorTest: "After you have attacked or been attacked by the same creature a collective total of eight times, you can use Know your Enemy.",
abilities: [
{
name: "Know your Enemy",
description: " For 0 AP on your turn, learn the creature’s AR, REF, FORT, and ANT.",
},
},
{
name: "Weak Spot",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 6"],
flavorTest: "Gain the Weak Spot ability.",
abilities: [
{
name: "Weak Spot",
description: "When you make an attack with a Pugilist’s Maneuver, you may choose to attack your target’s AR, REF, FORT, or ANT. (2 / Recoup) .",
},
},
{
name: "Predict A Punch II",
prerequisites: ["Pugilist", "Martial Arts", "Martial Arts 6"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics tag. Gain the Impulse II talent from the armor specialization stack if you meet its prerequisites.",
abilities: [
                        
},
{
name: "Quiet Mind",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 7"],
flavorTest: "Gain Quiet Mind",
abilities: [
{
name: "Quiet Mind",
description: "When you Recoup, you can remove the Fatigue condition from yourself. (1 / Rest).",
},
},
{
name: "Disrupt Ki",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 7"],
flavorTest: "Gain Disrupt Ki.",
abilities: [
{
name: "Disrupt Ki",
description: "When you hit someone with a Pugilist’s Maneuver, that creature cannot cast Spells until the end of their next turn. (1 / Recoup).",
},
},
{
name: "Reactive Stance",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 7"],
flavorTest: "When you end your turn with 0 AP, gain 1 Reactive AP that you lose at the start of your next turn.This can only be used on reactive attacks. This is a source of Special AP.You can only have one source of Special AP.If you gain a new source, choose whether you keep this source or take the new source of special AP.",
abilities: [
                        
},
{
name: "Stance Of Raging Fire",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 8"],
flavorTest: "You may spend 2 AP to enter the Stance of Raging Fire. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of Raging Fire",
description: "For the duration, you do +1d4 damage on your unarmed and natural weapon attacks, and enemies deal + 2 damage on melee attacks against you.",
},
},
{
name: "Stance of Flowing Water",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 8"],
flavorTest: "You may spend 2 AP to enter the Stance of Flowing Water. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of Flowing Water",
description: "For the duration, when you are hit with a melee attack, you fall prone.When you hit with an unarmed or natural weapon attack, the target creature falls prone if it is no more than one size larger than you.You cannot be attacked reactively.",
},
},
{
name: "Stance of the Stout Oak",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 8"],
flavorTest: "You may spend 2 AP to enter the Stance of the Stout Oak. You remain in this Stance until you spend 2 AP to end it or to pick a new stance.",
abilities: [
{
name: "Stance of the Stout Oak",
description: "For the duration, when you spend AP to move, your speed is reduced by 5 ft.You cannot be knocked prone.",
},
},
{
name: "Fluid Forma II",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms", "Martial Arts 9"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics tag. You can use Fluid Forms 2/Recoup.",
abilities: [
                        
},
{
name: "Serenity",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Survival, Knowledge, and Observation tags. Gain + 1 WILL.",
abilities: [
                        
},
{
name: "Martial Artist",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II"],,
flavorTest: "Basic maneuvers that cost 2 AP now cost 1 AP for you.",
abilities: [
{

},
{
name: "Reactive Stance II",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Reactive Stance"],
flavorTest: "You gain 2 reactive AP with Reactive Stance.",
abilities: [
                        
},
{
name: "Mind Over Matter",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 11"],
flavorTest: "You can use AWR or CHA in place of STR or END when making an Attribute Check. If you have a relevant skill that is normally associated with the STR or END attribute, you add that bonus to your AWR or CHA. (2/Recoup).",
abilities: [
                       
},
{
name: "Pressure Point",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 11"],
flavorTest: "Your unarmed and natural weapon crit range increases by 1.",
abilities: [
{

},
{
name: "Dance Of Battle",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 11"],
flavorTest: "When a creature misses you with an attack, you may move up to 10 ft for free(0 AP). (1 / Turn) ",
abilities: [
                      
},
{
name: "Know Your Enemy II",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 12"],
flavorTest: "Know your Enemy only requires four attacks, and it also reveals what defenses the creature can target with its attacks.",
abilities: [
                        
},
{
name: "Unfettered Speed",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 12"],
flavorTest: "Your base speed increases by 10 ft.",
abilities: [
                      
},
{
name: "Predict A Punch III",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 12"],
flavorTest: "Gain +1 ANT. Gain the Impulse III talent from the armor specialization stack if you meet its prerequisites.",
abilities: [
                       
},
{
name: "Monkey Climbing The Tree",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 13"],
flavorTest: "When you spend AP to move, you can run along vertical surfaces.You cannot end your movement on a vertical surface or you fall — unless you have at least one free hand, in which case you can end your movement on a vertical surface.",
abilities: [
{
},
{
name: "Pressure Point II",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 13"],
flavorTest: "Your unarmed and natural weapon crit range increases by 1.",
abilities: [
                       
},
{
name: "Reactive Stance III",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 13"],
flavorTest: "You gain 3 reactive AP with Reactive Stance.",
abilities: [
                        
},
{
name: "Meikin",
prerequisites: ["Pugilist", "Martial Arts", "Fluid Forms II", "Martial Artist 14"],
flavorTest: "eagerly seek you out as a wise and skillful teacher and tutor. Your Know your Enemy ability only requires two attacks. You can regain 1 use of your Pugilist’s Maneuvers by spending 4 AP on your turn.",
abilities: [
{
name: "Myriad Stances",
description: "By meditating and training, you can reassign all of your Talent Points within the martial arts pugilist track.If you respec in such a way that you no longer have access to this ability, you cannot use this ability again until you regain access to it. (1 / Week) .",
},
{
name: "Level 30",
description: "Myriad Stances becomes 1/Recoup.",
},
          
},
]
name: "Pummeling",
description: " You hone your body and become inhumanly strong, capable of delivering punches that devastate your opponents.",,
talents: [,
{
name: "Take A Punch",
prerequisites: ["Pugilist", "Pummeling", "Pugilist Entry"],
flavorTest: "Gain +1 FORT. Gain the Tough talent from the armor specialization stack unless you have one of its incompatibilities.",
abilities: [

]
}
{
name: "Greater Conunterpunch",
prerequisites: ["Pugilist", "Pummeling", "Take a Punch"],
flavorTest: "When you use Counterpunch, you gain TA and deal +2 damage on a hit.",
abilities: [

]
},
{
name: "Boxer's Maneuvers",
prerequisites: ["Pugilist", "Pummeling", "Greater Counterpunch"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.",
abilities: [

]
},
{
name: "Greater Corner",
prerequisites: ["Pugilist", "Pummeling", "Boxer’s Maneuvers"],
flavorTest: "When you use Corner, gain TA. If you hit, the enemy is Slowed until the end of their turn.",
abilities: [

]
},
{
name: "Mighty Punch",
prerequisites: ["Pugilist", "Pummeling", "Greater Corner"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Athleticism tag. Gain Mighty Punch.",
abilities: [
{
name: "Mighty Punch",
description: "Add +½ END to hit, and +END to damage. (1 / Recoup) ",
},

]
},
{
name: "Take A Punch II",
prerequisites: ["Pugilist", "Pummeling", "Mighty Punch"],
flavorTest: "Gain the Tough II talent from the armor specialization stack if you meet its prerequisites.",
abilities: [

]
},
{
name: "Hulking",
prerequisites: ["Pugilist", "Pummeling", "Take a Punch II"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Athleticism tag. You count as one Size larger for the purposes of lifting, carrying, dragging, and grappling.Your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d4 to 1d6), to a maximum of 1d12.",
abilities: [
{
                        
]
},
{
name: "Boxer's Maneuvers II",
prerequisites: ["Pugilist", "Pummeling", "Hulking"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.",
abilities: [
{
                        
]
},
{
name: "Superior Corner",
prerequisites: ["Pugilist", "Pummeling", "Boxer’s Maneuver II"],
flavorTest: "When you use Greater Corner, gain an additional TA. If you hit, the target falls Prone.",
abilities: [

]
},
{
name: "Superior Counterpunch",
prerequisites: ["Pugilist", "Pummeling", "Superior Corner"],
flavorTest: "When you use Counterpunch, gain an additional TA. If you hit, the target falls Prone.",
abilities: [

]
},
{
name: "Greater Uppercut",
prerequisites: ["Pugilist", "Pummeling", "Superior Counterpunch"],
flavorTest: "Learn Uppercut if you did not know it. Your crit range on Uppercut increases by 2.",
abilities: [

]
},
{
name: "Superior Uppercut ",
prerequisites: ["Pugilist", "Pummeling", "Greater Uppercut"],
flavorTest: "You always have TA on Uppercut. If you crit, a creature is pushed 10 ft, takes 1d4 falling damage, and is Dazed.",
abilities: [

]
},
{
name: "Greater Gut Punch",
prerequisites: ["Pugilist", "Pummeling", "Superior Uppercut"],
flavorTest: "Learn Gut Punch if you did not know it. It only costs you 3 AP",
abilities: [

]
},
{
name: "Superior Gut Punch",
prerequisites: ["Pugilist", "Pummeling", "Greater Gut Punch"],
flavorTest: "You always have TA on Gut Punch, and you knock a creature Prone if you hit.",
abilities: [

]
},
{
name: "Mighty Punch II",
prerequisites: ["Pugilist", "Pummeling", "Superior Gut Punch"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Athleticism tag. When you crit with Mighty Punch, if you roll the maximum number on your damage die(such as 8 on a d8), roll another damage die.Repeat this process until you have no new maximum rolls on your damage dice, then add the sum of all of those damage dice together. Mighty Punch becomes(3/ Recoup) ",
abilities: [
]
},
{
name: "Take A Punch III",
prerequisites: ["Pugilist", "Pummeling", "Mighty Punch II"],
flavorTest: "Gain +1 FORT. Gain the Tough III talent from the armor specialization stack if you meet its prerequisites.",
abilities: [

]
},
{
name: "Take A Punch",
prerequisites: ["Pugilist", "Pummeling", " Capstone", " Take a Punch III"],
flavorTest: "You have the glorious title of heavyweight champion. People challenge you to nonlethal fights and feats of strength just to witness your incredible brawn. You count as one additional size larger for the purposes oflifting, carrying, dragging, and grappling.Your unarmed and natural weapon damage rolls increase by one die size(e.g., from 1d8 to 1d10) to a max of 1d12.",
abilities: [
{
name: "Level 30",
description: "The final cap for your STR increases from 12 to 14.",
},
]
}
},
{
name: "Wrestling",
description: "A well-rounded wrestler, you have a balanced mix of offensive and defensive maneuvers and can easily grapple your foes.",,
talents: [,
{
name: "Dodge A Punch",
prerequisites: ["Pugilist", "Wrestling", "Pugilist Entry"],
flavorTest: "Gain +1 REF. Gain the Evasive talent from the armor specialization stack unless you have one of its incompatibilities.",
abilities: [

name: "Wrestler's Maneuvers",
prerequisites: ["Pugilist", "Wrestling", "Dodge a Punch"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.",
abilities: [

]
},
{
name: "Reverst Grapple",
prerequisites: ["Pugilist", "Wrestling", "Wrestler’s Maneuvers"],
flavorTest: "When you are Grappled, you can spend 2 AP on your turn to attempt to reverse it. Make a STR or DEX attack against the creature’s REF or FORT (their choice). If you hit, then you are no longer grappled and you are grappling that creature.",
abilities: [

]
},
{
name: "Size Up",
prerequisites: ["Pugilist", "Wrestling", "Reverse Grapple"],
flavorTest: "After you have attacked or been attacked by the same creature a collective total of ten times since you rolled Initiative, you can use Size Up. ",
abilities: [
{
name: "Size Up",
description: "For 0 AP on your turn, learn the creature’s AR, REF, FORT, and ANT.",
},

]
},
{
name: "Size Up II",
prerequisites: ["Pugilist", "Wrestling", "Size Up"],
flavorTest: "Your Size Up ability now only requires six attacks to trigger. You also learn the creature’s Resist, Vulnerable, and Immune traits.",
abilities: [
{
]
},
{
name: "Brawl",
prerequisites: ["Pugilist", "Wrestling", "Reverse Grapple"],
flavorTest: "When there is more than one hostile creature adjacent to you, gain +1 FORT and your unarmed and natural weapon damage dice increase by one die size (e.g., from 1d4 to 1d6), to a maximum of 1d12.",
abilities: [

]
},
{
name: "Brawl II",
prerequisites: ["Pugilist", "Wrestling", "Brawl"],
flavorTest: "When there is more than one hostile creature adjacent to you, gain +1 AR and gain TA on all of your attacks.",
abilities: [

]
},
{
name: "Dodge A Punch II",
prerequisites: ["Pugilist", "Wrestling", "Wrestling 5"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. Gain the Evasive II talent from the armor specialization stack if you meet its prerequisites.",
abilities: [

]
},
{
name: "Wrestler's Maneuvers II",
prerequisites: ["Pugilist", "Wrestling", "Dodge a Punch II"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.",
abilities: [

]
},
{
name: "Headlock Choke",
prerequisites: ["Pugilist", "Wrestling", "Wrestler’s Maneuvers II"],
flavorTest: "Learn Headlock if you did not know it. When a creature breaks free from being Restrained by Headlock, it does not break them free from your Grapple; they must first break free from Restrained, then from Grappled, using separate checks and spending AP for each check.",
abilities: [

]
},
{
name: "Pure Physique",
prerequisites: ["Pugilist", "Wrestling", "Headlock Choke"],
flavorTest: "Gain +1 REF and +1 FORT.",
abilities: [

]
},
{
name: "Pure Physique II",
prerequisites: ["Pugilist", "Wrestling", "Pure Physique"],
flavorTest: "Gain +1 REF and +1 FORT.",
abilities: [

]
},
{
name: "Improvised Weapons",
prerequisites: ["Pugilist", "Wrestling", "Pure Physique"],
flavorTest: "You can use any object that would not have the Unwieldy tag as a club. You can use any object that you can lift that has the Unwieldy tag as a maul that costs 4 AP to use.",
abilities: [
]
},
{
name: "Pure Technique",
prerequisites: ["Pugilist", "Wrestling", "Improvised Weapons"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. Your unarmed and natural weapon damage dice increase by one die size(e.g., from 1d4 to 1d6), to a maximum of 1d12."
abilities: [
]
},
{
name: "Wrestler's Maneuvers III",
prerequisites: ["Pugilist", "Wrestling", "Wrestling 10"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.
]
},
{
name: "Headlock Choke II",
prerequisites: ["Pugilist", "Wrestling", "Wrestler’s Maneuvers III"],
flavorTest: "Gain Submission Hold.",
abilities: [
    ]
{
name: "Submission Hold",
description: " Target a creature that is Bloodied or has 50 HP or less(whichever value is lower) that you have Restrained using Headlock.You may spend 4 AP to make an END attack against their FORT.If you hit, they become Dazed until the end of your next turn.If they were already Dazed, they become Stunned.If they were already Stunned, they fall Unconscious. If you knock someone Unconscious in this way, you gain 1 Fatigue.",
},
},
{
name: "Dodge A Punch III",
prerequisites: ["Pugilist", "Wrestling", "Headlock Choke II"],
flavorTest: "Gain +1 REF.Gain the Evasive III talent from the armor specialization stack if you meet its prerequisites.",
abilities: [
]
},
{
name: "Headlock Choke III",
prerequisites: ["Pugilist", "Wrestling", "Dodge a Punch III"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Stamina tag. When you Stun an enemy using Submission Hold, they gain 1 Fatigue.",
abilities: [
]
},
{
name: "Wrestler's Maneuvers IV",
prerequisites: ["Pugilist", "Wrestling", "Headlock Choke III"],
flavorTest: "Learn two Pugilist’s Maneuvers of your choice.",
abilities: [
]
},
{
name: "Signature Move",
prerequisites: ["Pugilist", "Wrestling", ": Wrestler’s Maneuvers IV"],
flavorTest: "You are a ring fighter of incredible fame, and people will pay high bets on you, gang up against you in cage matches, and revel in your glory.Choose a Pugilist’s Maneuver that you already know, which becomes your Signature Move.Your Signature Move always has TA and does not expend a use of your Pugilist’s Maneuvers.",
abilities: [
]
},
{
name: "Knockout",
description: "When you attack a creature that is Stunned or Prone with your Signature Move, and that creature is Bloodied or has 50 HP or fewer (whichever value is lower), then you roll an additional damage die and your Signature Move crits on a roll of 16-20.(1 / Rest) .",
},
{
name: "Level 30",
description: "You gain a second signature move, and Knockout becomes 1/Recoup.",
},
{
name: "Ranger",
shortDescription: "Wardens of the natural world and guides through uncharted wilderness, rangers are often more at home in unsettled lands than in luxurious cities.",
quote: {
phrase: "The wilderness gives me solace as I continue my grim purpose: to slay that which would threaten the natural order",
name: "Grim",
title: "monster slayer",
},
longDescription: "You grew up on the fringes of your settlement, spending more time in the wilderness beyond than in the safety of your own homestead.In your youth you came to love the serenity of rugged nature over the clamor of frivolous settled life.You are more at home with the wolves and the elk than with nobles and debutants.In your early adulthood you made the decision to leave civilization completely in exchange for a life in the wilds.Now, you defend your heartland from supernatural monstrosities that threaten to upset the balance of nature, and from the cruelties of careless hunters or loggers who regard the natural cycle of life with disrespectful indifference. As you are more at home in the wilderness than in civilization, you must determine how you intend to survive on your own merits.Do you hone your physical prowess until you can go toe to toe with the strongest warrior? Do you sharpen your senses and your survival skills, stalking prey through rugged wilds with more finesse than any cat or bird? Maybe you tap into the Primal Source, using magic to enhance your physical capabilities and to speak with the animals whose home you share.",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
    flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "Primal Aspect",
description: "Repeatable. Gain the Primal Aspect talent.",
},
{
name: "Skilled",
description: "Gain +4 Skill Points, which you can spend on skills with the Observation and/or Survival tags.",
},
{
name: "Fighting Instinc",
description: "You may grant yourself TA until the end of your current turn. While you have fighting instinct, when you spend AP to move, gain +5 ft movement. (AWR/ Recoup)"
}

{

name: "Bravety Track",
description: "",,
talents: [,
{
name: "Bravery",
prerequisites: ["Ranger","Bravery","Ranger Entry"],
flavorTest: "Gain the Bravery ability",
abilities: [
{
name: "Bravery",
description: " Resist Frightened 2.",
},
{
name: "Courage",
prerequisites: ["Ranger","Bravery","Bravery"],
flavorTest: "Gain the Courage ability",
abilities: [
{
name: "Courage",
description: "When you are Broken, Demoralized, Frightened, or Shaken by an enemy, gain TA against that enemy while your effect persists. (AWR/Rest).",
},

name: "Bravery II",
prerequisites: ["Ranger","Bravery"," Courage"],
flavorTest: "Your Resist ability from Bravery increases by 1 and applies to Demoralized.",
abilities: [

{
name: "Courage II",
prerequisites: ["Ranger","Bravery","Bravery II"],
flavorTest: "When you use Courage, and you are Bloodied, regain HP equal to your AWR.",
abilities: [


name: "Fight",
prerequisites: ["Ranger","Bravery"," Courage II","Flight","Freeze"],
flavorTest: "Gain the Fight ability",
abilities: [
{
name: "Fight",
description: "When you use Courage, deal +1d6 damage against the source of the condition for its duration.",
},
{
name: "Flight",
prerequisites: ["Ranger","Bravery","Courage II","Fight","Freeze"],
flavorTest: "Gain the Flight ability.",
abilities: [
{
name: "Flight",
description: "When you use Courage, gain +5 ft speed when you use AP to move.This lasts for the condition’s duration.",
},

name: "Freeze",
prerequisites: ["Ranger","Bravery","Courage II","Fight","Freeze"],
flavorTest: "Gain the Freeze ability",
abilities: [
{
name: "Freeze",
description: "When you use Courage, you gain TD on attacks, suffer the Chilled condition, and all of your defenses increase by +3. This lasts for the condition’s duration.",
},
{
name: "Bravfry III",
prerequisites: ["Ranger","Bravery","Bravery 5"],
flavorTest: "Your Resist ability from Bravery increases by 1, and applies to Broken.",
abilities: [
{
name: "Drive To Survive",
prerequisites: ["Ranger","Bravery","Bravery III"],
flavorTest: "Gain the Drive to Survive ability.",
abilities: [
{
name: "Drive to Survive",
description: " When you start your turn and can see a creature that has any Planar, Modifying, or Magical creature tags, you may become Shaken. This counts as you becoming Shaken by that creature. You remain Shaken for 1 minute or until the creature dies (whichever is first). (½ AWR/Rest).",
},
{
name: "Bravery IV",
prerequisites: ["Ranger","Bravery"," Drive to Survive"],
flavorTest: "Gain +2 Skill Points in one skill with the observation tag. Your Resist ability from Bravery increases by 1.",
abilities: [
{

name: "Courage III",
prerequisites: ["Ranger","Bravery","Bravery IV"],
flavorTest: "Gain +2 Skill Points that you can spend on skills with the Stamina tag. When you use Courage, regain HP equal to your AWR (regardless of whether you are Bloodied).",
abilities: [
{

name: "Fight II",
prerequisites: ["Ranger", "Bravery","Courage III","Fight"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Athleticism tag. Your damage from the Fight ability becomes 1d8.",
abilities: [
{

name: "Fight II",
prerequisites: ["Ranger","Bravery","Courage III","Fight"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Acrobatics tag. You ignore difficult terrain when you use the Flight ability.",
abilities: [

{
name: "Freeze II",
prerequisites: ["Ranger","Bravery","Courage III","Freeze"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Stamina tag. You no longer suffer the Chilled condition with this ability.",
abilities: [

name: "Drive To Survive II",
prerequisites: ["Ranger","Bravery","Bravery 10"],
flavorTest: "Drive to Survive becomes AWR/Rest.",
abilities: [

{
name: "Courage IV",
prerequisites: ["Ranger","Bravery","Drive to Survive II"],
flavorTest: "Gain +2 Skill Points that you can spend on skills with the Stamina tag. Courage recharges AWR/Recoup.",
abilities: [

{
name: "Fight III",
prerequisites: ["Ranger","Bravery","Courage IV","Fight II"],
flavorTest: "The additional damage from the Fight ability becomes 1d12.",
abilities: [

{
name: "Flight III",
prerequisites: ["Ranger","Bravery","Courage IV","Fight II"],
flavorTest: "Your speed from the Flight ability becomes +10 ft.",
abilities: [

{
name: "Freeze III",
prerequisites: ["Ranger","Bravery","Courage IV","Freeze II"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Stamina tag. The Freeze ability increases your defenses by +5.",
abilities: [

{
name: "Undaunted",
prerequisites: ["Ranger","Bravery","Bravery 13"],
flavorTest: "The Shaken condition only reduces your d20 rolls by 1.",
abilities: [

{
name: "Fear Itself",
prerequisites: ["Ranger","Bravery","Capstone","Undaunted"],
flavorTest: "It is said that in the face of fear you rise above or you crumble. However, those who know you have seen you strike fear in the hearts of those who would typically terrify others. Gain the Fear Itself ability",
abilities: [
{
name: "Fear Itself",
description: "When a creature causes you to become Broken, Demoralized, Frightened, or Shaken, if that creature can see you, it immediately takes 2d10 psychic damage and you gain TA against it until the end of your next turn.Additionally, the creature suffers the same conditions that it inflicted on you for the duration that you do. (1 / Recoup) ",
},
{
name: "Level 30",
description: "Whenever a creature imposes Broken, Demoralized, Frightened, or Shaken against you, you are both Focused and Protected against it. ",
},
]
{

name: "Hunter",
description: "You are an unparalleled hunter of creatures both natural and otherworldly, mastering both blade and bow.",,
talents: [,
{
name: "Hunter",
prerequisites: ["Ranger","Hunter","Ranger Entry"],
flavorTest: "When you have been tracking a creature for at least 1 hourusing AWR/Tracking, when you start Initiative in combat against it, you deal +2 damage against it for the first minute.",
abilities: [

{
name: "Corner Quarry",
prerequisites: ["Ranger","Hunter","Hunter","Outnumbered"],
flavorTest: "When you are Flanking a creature, gain an additional TA against it.",
abilities: [

{
name: "Corner Quarry II",
prerequisites: ["Ranger","Hunter","Corner Quarry","Outnumbered II"],
flavorTest: "Gain the Corner Quarry ability.",
abilities: [
{
name: "Corner Quarry",
description: "If you are Flanking a creature, you may spend 2 AP to Engage it for 1 minute or until you are no longer within 5 ft of it. (2/Recoup).",
},
{
name: "Outnumbered",
prerequisites: ["Ranger","Hunter","Corner Quarry."],
flavorTest: "",
abilities: [

]
},
{
name: "Outnumbered II",
prerequisites: ["Ranger","Hunter","Outnumbered","Corner Quarry II"],
flavorTest: "When you make a Ranged attack against a creature with no cover and no adjacent allies, gain TA.",
abilities: [

{
name: "Deadeye",
prerequisites: ["Ranger","Hunter"," Volley"],
flavorTest: "Gain the Deadeye ability",
abilities: [
{
name: "Deadeye",
description: "When you make a ranged attack against a creature with no cover and no adjacent allies, gain TA.",
},
{
name: "Deadeye II",
prerequisites: ["Ranger","Hunter","Deadeye","Rain of Arrows"],
flavorTest: "Gain the Takedown Shot ability.",
abilities: [
{
name: "Takedown Shot",
description: "When you use Deadeye, deal 1d8 additional damage. (2/Recoup).",
},

]
},
{
name: "Volley",
    prerequisites: ["Ranger", "Hunter","Deadeye"],
flavorTest: "Gain the Volley ability.",
abilities: [
{
name: "Volley",
description: "When you hit a creature that has an ally adjacent to it, make the same attack against that creature for 0 AP. (2/Recoup)",
},
{
name: "Rain Of Arrows",
prerequisites: ["Ranger","Hunter","Volley","Deadeye II"],
flavorTest: "Gain the Rain of Arrows ability",
abilities: [
{
name: "Rain of Arrows",
description: ". Spend 4 AP and pick a point within range. Make your ranged attack roll and compare vs the AR of every creature in a 20 ft radius. Roll double the damage dice that you normally would. Creatures take full damage on a hit and ½ on a miss. (2/Rest)",
},
{
name: "Hunter's Quarry",
prerequisites: ["Ranger","Hunter","Hunter 3"],
flavorTest: "Learn the Hunter’s Quarry spell if you do not already know it. You may cast this spell without expending SP. (2/Rest)",
abilities: [

]
},
{
name: "Hunter II",
prerequisites: ["Ranger","Hunter","Hunter’s Quarry"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Acrobatics or Survival tags. Pick a creature with one of the following creature tags: Arcane, Avadri, Celestial, Divine, Eldritch, Elemental, Fae, Fiend, Giant, Monstrosity, Occult, Primal, Psionic, or Undead. Gain the Target Prey ability against creatures with the tag that you chose.",
abilities: [
{
name: "Target Prey",
description: "Gain an additional +4 on History, Perceiving, Sneaking, and Tracking rolls made in relation to creatures of the type that you chose from Hunter II.",
},
{
name: "Hew",
prerequisites: ["Ranger","Hunter","Hunter II"," Corner Quarry II"],
flavorTest: "Gain the Hew ability.",
abilities: [
{
name: "Hew",
description: "When you hit a creature that has no allies adjacent to it, deal +1d10 damage. (2/Recoup)",
},
{
name: "Hew II",
prerequisites: ["Ranger","Hunter","Hew"],
flavorTest: "Your crit range increases by 1 against creatures that have no adjacent allies.",
abilities: [

]
},
{
name: "Hordesbane",
prerequisites: ["Ranger","Hunter","Hunter II","Outnumbered II"],
flavorTest: "Gain the Hordesbane ability",
abilities: [
{
name: "Hordesbane",
description: "Once per turn, when you hit a creature and another creature is adjacent to you, you can attack that second creature with the same weapon for 1 fewer AP (min 1 AP).",
},
{
name: "Hordesbane II",
prerequisites: ["Ranger","Hunter","Hordesbane"],
flavorTest: "Gain the Whirling Blades ability.",
abilities: [
{
name: "Whirling Blades",
description: "When you use Hordesbane, your second attack can target each creature of your choice that is adjacent to you. Roll attack and damage once, comparing against each target’s REF. Roll twice as many damage dice as you normally would. Creatures take ½ damage on a miss. (2/Rest).",
},
{
name: "Eagle Eye",
prerequisites: ["Ranger","Hunter","Hunter II","Deadeye II"],
flavorTest: "When making a ranged attack, you do not suffer any penalty for targeting a Concealed enemy.",
abilities: [

]
},
{
name: "Eagle Eye II",
prerequisites: ["Ranger","Hunter","Eagle Eye"],
flavorTest: "When making a ranged attack, you do not suffer any penalty for targeting an enemy in Darkness, provided that you know the enemy’s location.",
abilities: [

{
name: "Volley II",
prerequisites: ["Ranger","Hunter","Hunter II","Rain of Arrows"],
flavorTest: "Volley becomes DEX/Recoup and works on hostile creatures within 15 ft of each other.",
abilities: [
{
name: "Rain Of Arrows II",
prerequisites: ["Ranger","Hunter","Volley II"],
flavorTest: "Rain of Arrows does three times your normal damage dice and can be used ½ AWR/Rest.",
abilities: [

]
},
{
name: "Hunter III",
prerequisites: ["Ranger","Hunter","Hunter 7"],
flavorTest: "Choose two additional creature types to gain Favored Prey.",
abilities: [
{
name: "Hunter IV",
prerequisites: ["Ranger","Hunter","Hunter III"],
flavorTest: "Gain the Mark ability.",
abilities: [
{
name: "Mark",
description: "When you roll Initiative, you may Mark a Target Prey creature that you can see. It becomes Vulnerable 1 to your weapon attacks for 1 minute. (1/Rest).",
},
{
name: "One With The Land",
prerequisites: ["Ranger","Hunter","Hunter IV"],
flavorTest: "Pick 1 of the 11 Environments (Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic). While you are in that environment, you and up to AWR allies can move stealthily at a normal pace and remain alert to danger as though traveling cautiously",
abilities: [
{
]
},
{
name: "Primeval Speed",
prerequisites: ["Ranger","Hunter","Hunter 10"],
flavorTest: "Gain +5 ft speed when you can see your Target Prey.",
abilities: [
{
name: "Fletcher",
prerequisites: ["Ranger","Hunter","Hunter IV"],
flavorTest: "You can fletch your own arrows, making 1d8 + INT/ Woodcarving arrows each time you Rest.",
abilities: [

{
name: "Shroud",
prerequisites: ["Ranger","Hunter","Hunter 10"],
flavorTest: "When you are Concealed, creatures that attack you gain 1 additional TD.",
abilities: [

]
},
{
name: "Quickdraw",
prerequisites: ["Ranger","Hunter","Hunter IV"],
flavorTest: "You can draw/stow weapons without spending AP once on your turn.",
abilities: [

{
name: "Calculating",
prerequisites: ["Ranger","Hunter","Hunter 10"],
flavorTest: "Gain the Calculating ability.",
abilities: [
{
name: "Calculating",
description: "When you roll Initiative and are facing a Target Prey, you may choose for all of your attacks that would target their AR to instead target either REF, FORT, or ANT (your choice at the start of combat). This effect lasts until combat concludes. (3/Rest)",
},
{
name: "Ruthless Hunter",
prerequisites: ["Ranger","Hunter","Hunter 11"],
flavorTest: "Gain two of the following: Cornered Quarry, Outnumbered, Deadeye, or Volley. Ignore any Incompatibility restrictions for these selections.",
abilities: [

]
},
{
name: "Cornered quarry II",
prerequisites: ["Ranger","Hunter","Ruthless Hunter","Hew II"],
flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Athleticism or Stamina tags. Cornered Quarry becomes END/Recoup.",
abilities: [

{
name: "Hew III",
prerequisites: ["Ranger","Hunter","Cornered Quarry III"],
flavorTest: "When you use Hew against a target and it does not die, gain 3 AP.",
abilities: [

{
name: "Hordesbane III",
prerequisites: ["Ranger","Hunter"," Ruthless Hunter","Hordesbane II"],
flavorTest: "Whirling Blades becomes END/Rest.",
abilities: [

]
},
{
name: "Horde Breaker",
prerequisites: ["Ranger","Hunter","Hordesbane III",],
flavorTest: "Gain the Horde Breaker ability.",
abilities: [
{
name: "Horde Breaker",
description: ". Gain +1 TA and +1 to damage rolls for every enemy adjacent to you. This lasts until the end of your next turn. (1/Recoup)",},
{
name: "Deadeye III",
prerequisites: ["Ranger","Hunter","Ruthless Hunter","Eagle Eye II"],
flavorTest: "When using Deadeye, increase your Crit range by 1. Takedown Shot becomes AWR/Recoup.",
abilities: [

{
name: "Rapid Takedown",
prerequisites: ["Ranger","Hunter"," Deadeye III"],
flavorTest: "When you use Takedown Shot against a target and it does not die, gain 3 AP.",
abilities: [

]
},
{
name: "Volley III",
prerequisites: ["Ranger","Hunter","Ruthless Hunter","Rain of Arrows II"],
flavorTest: "Volley works on creatures within 30 ft of each other. When you use Volley on a creature that was adjacent to your first target, it does not expend a use of Volley.",
abilities: [

{
name: "Arrow Storm",
prerequisites: ["Ranger","Hunter","Volley III"],
flavorTest: "Gain the Arrow Storm ability.",
abilities: [
{
name: "Arrow Storm",
description: "When you use Rain of Arrows, deal four times your normal damage dice and the radius is 30 ft. (1/ Rest)",
},
{
name: "Peerless Hunter",
prerequisites: ["Ranger","Hunter","Capstone","Hunter 14"],
flavorTest: "Those in the know recognize that you are a peerless hunter and might task you with felling great monsters for equally great rewards. When you roll Initiative and you have no Target Prey, choose one enemy to be Target Prey. Gain the Peerless Hunter ability.",
abilities: [
{
name: "Peerless Hunter",
description: "When you finish Taking a Rest, you can reassign all of your Talent Points spent in this stack, taking new talents within this stack. You lose this ability if you reassign your talents in such a way that you no longer have access to this talent. (1/Week)",
},
{
name: "Level 30",
description: "You can reselect the creature types that Target Prey abilities work on. (1/Rest)",

]
},
{
name: "Instinct",
description: ". Your fighting instinct is sharper than the finest steel and keener than an eagle’s eye.",,
talents: [,
{
name: "Survival Instinct",
prerequisites: ["Ranger","Instinct","Ranger Entry"],
flavorTest: "Gain the Preternatural Dodge ability.",
abilities: [
{
name: "Preternatural Dodge",
description: "When a creature attacks one of your physical or mental defenses, you can use ANT in place of whatever was targeted. (AWR/Rest)",
},
{
name: "Fighting Instingct II",
prerequisites: ["Ranger","Instinct","Survival Instinct"],
flavorTest: "Fighting Instinct lasts until the end of your next turn.",
abilities: [

{
name: "Survival Instinct II",
prerequisites: ["Ranger","Instinct","Fighting Instinct II"],
flavorTest: "Gain the Size Up ability",
abilities: [
{
name: "Size Up",
description: "You can spend 2 AP to study an enemy and learn which defense(s) its attacks target, besides AR.",
},
{
name: "Survival Instinct III",
prerequisites: ["Ranger","Instinct"," Survival Instinct II"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Athleticism tag. Your Fighting Instinct also grants you a +1 to all damage rolls.",
abilities: [

{
name: "Vigilant",
prerequisites: ["Ranger","Instinct","Fighting Instinct III"],
flavorTest: "Gain the Vigilant ability.",
abilities: [
{
name: "Vigilant",
description: "If you roll lower than 10 on an AWR check, treat that roll as 10 instead (AWR/Rest)",
},
{
name: "Survival Instingct III",
prerequisites: ["Ranger","Instinct","Vigilant"],
flavorTest: "Your ANT increases by +1. Choose REF or FORT to also increase by +1.",
abilities: [

{
name: "Vigilant II",
prerequisites: ["Ranger","Instinct","Survival Instinct III"],
flavorTest: "Vigilant becomes: If you roll lower than 10 on an AWR check, treat that roll as your ANT instead.",
abilities: [

{
name: "Survival Instingct IV",
prerequisites: ["Ranger","Instinct"," Vigilant II"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Observation tag. Gain a +4 bonus to Initiative.",
abilities: [

{
name: "Fighting Instingct IV",
prerequisites: ["Ranger","Instinct"," Survival Instinct IV"],
flavorTest: "Gain the Pounce ability.",
abilities: [
{
name: "Pounce",
description: "On your first turn in Initiative if no enemies have acted yet, gain 2 additional AP.",
},
{
name: "Vigilant III",
prerequisites: ["Ranger","Instinct","Fighting Instinct IV"],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Survival Tag. Vigilant is AWR/Recoup.",
abilities: [

{
name: "Survival Instingct V",
prerequisites: ["Ranger","Instinct"," Vigilant III"],
flavorTest: "Gain a +4 bonus to Initiative. Preternatural Dodge is AWR/Recoup.",
abilities: [

{
name: "Vigilant IV",
prerequisites: ["Ranger","Instinct","Survival Instinct V"],
flavorTest: "Gain +4 Skill Points in skills with the Observation tag. Vigilant is AWR/Catch Breath.",
abilities: [

{
name: "Fighting Instinct V",
prerequisites: ["Ranger","Instinct","Vigilant IV"],
flavorTest: "Pounce grants you 4 AP. If you start Initiative with no Fighting Instinct, regain one Fighting Instinct.",
abilities: [

{
name: "Vigilant V",
prerequisites: ["Ranger","Instinct","Fighting Instinct V"],
flavorTest: "Vigilant is always active.",
abilities: [
{
name: "Cornered Animal",
prerequisites: ["Ranger","Instinct","Capstone","Vigilant V"],
flavorTest: "Your base animal instinct to fight and live is overwhelming. Fighting Instinct becomes AWR/Catch Breath. Gain the Cornered Animal ability.",
abilities: [
{
name: "Cornered Animal",
description: "When you start your turn with 0 HP, you may gain 2 Death Points. If you do, then until the end of your next turn, your speed doubles, you gain TA on all attacks, creatures cannot make reactive attacks against you, and your first hit that was not a crit counts as a crit. (1/ Rest)",
{
name: "Level 30",
description: "Cornered Animal no longer costs 2 Death Points and is active whenever you are at 0 HP.",
},
]
},
{
name: "Survivor",
description: "You know the natural world like the back of your hand.Wherever you end up, you know how to survive.",,
talents: [,
{
name: "Natural Habitat",
prerequisites: ["Ranger","Survivor","Ranger Entry"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the Survival or Stamina tags. Pick one of the 11 environments: Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic. This is your Natural Habitat. While in that environment, you can always find enough food for a number of creatures equal to your AWR.",
abilities: [

{
name: "Primeval Senses",
prerequisites: ["Ranger","Survivor","Natural Habitat"],
flavorTest: "Gain the Primeval Sense ability",
abilities: [
{
name: "Primeval Senses",
description: "By focusing for 1 minute, you learn whether any of the following creatures are within 1 mile of you: Arcane, Divine, Occult, Primal, Psionic, Undead, Monstrosity, Fae, and Eldritch. You do not learn their identities but learn their exact numbers and direction/ distance from you. This information is fleeting, but if you do no strenuous activity you can maintain it for up to 10 mins. (AWR/Rest)",
},
{
name: "Natural Habitat II",
prerequisites: ["Ranger","Survivor","Primeval Senses"],
flavorTest: "Gain the Wilderness Mastery ability",
abilities: [
{
name: "Wilderness Mastery",
description: "When in your favored environment, give yourself double your Skill Points before you make an AWR skill check. (AWR/Rest)",
},
{
name: "Primeval Senses II",
prerequisites: ["Ranger","Survivor","Natural Habitat II"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the Acrobatics Tag. Ignore Difficult Terrain while in a Natural Habitat.",
abilities: [

{
name: "Survivor",
prerequisites: ["Ranger","Survivor","Nature Stride"],
flavorTest: "Gain a Primal Aspect. Pick one: Natural Heat, Natural Cold, or Forced Marching. You can no longer gain Fatigue from that selection.",
abilities: [

{
name: "Primeval Senses III",
prerequisites: ["Ranger","Survivor",],
flavorTest: "Gain +4 Skill Points that you can spend on skills with the Acrobatics or Athleticism tags. Pick a second environment to be your Natural Habitat.",
abilities: [

{
name: "Survivor II",
prerequisites: ["Ranger","Survivor","Natural Habitat III"],
flavorTest: "You become Immune to common poisons and diseases.",
abilities: [

{
name: "Nature Stride II",
prerequisites: ["Ranger","Survivor","Survivor II"],
flavorTest: "Ignore Hazardous Terrain that isn’t liquid while in your Natural Habitat.",
abilities: [

{
name: "Primeval Senses IV",
prerequisites: ["Ranger","Survivor","Nature Stride II"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the Observation tag. Primeval Identification can be used on a number of targets equal to ½ your AWR.",
abilities: [

{
name: "Natural Habitat IV",
prerequisites: ["Ranger","Survivor","Primeval Senses IV"],
flavorTest: "Pick a third environment to be your Natural Habitat, and Wilderness Mastery is AWR/Recoup.",
abilities: [

{
name: "Nature Stride III",
prerequisites: ["Ranger","Survivor","Natural Habitat IV"],
flavorTest: "Always ignore difficult terrain. Ignore all hazardous terrain that is caused by natural phenomena unless it is liquid.",
abilities: [

{
name: "Primeval Sense V",
prerequisites: ["Ranger","Survivor","Nature Stride III"],
flavorTest: "You have unlimited uses of your Primeval Senses ability.",
abilities: [

{
name: "Unrivaled Explorer",
prerequisites: ["Ranger","Survivor","Capstone","Primeval Sense V"],
flavorTest: "You are known as a person truly in tune with the untamed, uncharted wilderness in all its splendor, and are commonly sought out as a guide for high-profile travelers. You may embrace this or you may hide from civilization to avoid the recognition and to just spend time in the wild, where your heart truly lies. You can never become lost, even by magical means. You have TA when you are in one of your Natural Habitats. When you Take a Rest in a type of environment that is not one of your Natural Habitats, you may replace one of your old Natural Habitats with this new environment. (1/Week)",
abilities: [
{
name: "Level 30",
description: "The final cap for your AWR increases from 12 to 14.",
},
]
}
},
{
name: "Wilderness Warden",
description: ". You learn primal magic and enhance some of your primal spells as you gain skill as a magical ranger.",,
talents: [,
{
name: "Primal Warden",
prerequisites: ["Ranger","Wilderness Warden","Ranger Entry"],
flavorTest: "Gain the Warden of the Primal talent if you did not already have it. If you did already have it, gain a talent from the Primal Magic stack.Each time you level up and spend your talent point on a talent in the Wilderness Warden stack, you gain + 5 SP and + 1 Primal Power.AWR is your magic attribute.",
abilities: [

{
name: "Environmentalist",
prerequisites: ["Ranger","Wilderness Warden","Primal Warden"],
flavorTest: "Pick one of the 11 Environments: Aquatic, Coastal, Desert, Forest, Grassland, Jungle, Mountain, Subterranean, Swamp, Tundra, or Volcanic. While you are in that environment and not within 1 mile of a settled area, you regain 1 SP when you Recoup.",
abilities: [

{
name: "Ranger's Invocation",
prerequisites: ["Ranger","Wilderness Warden","Environmentalist or Planar Protector"],
flavorTest: "Learn one invocation.Pick an invocation that you know that has no Tier prerequisites.You can cast that invocation 1 time per day without expending your invocation slot.",
abilities: [

{
name: "Empower Chant",
prerequisites: ["Ranger","Wilderness Warden","Ranger’s invocation or Intrinsic Boon"],
flavorTest: "Pick one chant that you know, that does not deal damage. While more than 1 mile from a settled area, you can cast that chant as if it were 1 Tier stronger (e.g., if you normally cast chants at Primal Tier 2, cast this chant at Primal Tier 3).",
abilities: [

{
name: "Planar Protector",
prerequisites: ["Ranger","Wilderness Warden","Primal Warden"],
flavorTest: "Pick one creature type: Arcane, Avadri, Celestial, Divine, Eldritch, Elemental, Fae, Fiend, Giant, Occult, Primal, Psionic, or Undead. Your magic attack rolls against those creatures increases by +1.",
abilities: [

{
name: "Inirinsic Boon",
prerequisites: ["Ranger","Wilderness Warden","Environmentalist or Planar Protector"],
flavorTest: "Learn one chant, one invocation, and one spell that all have the Intrinsic tag.",
abilities: [

{
name: "Ranger's Spells",
prerequisites: ["Ranger","Wilderness Warden","Ranger’s invocation or Intrinsic Boon"],
flavorTest: "Pick two intrinsic spells that you know. They cost 1 fewer SP (min 1 SP).",
abilities: [

{
name: "Primal Warden II",
prerequisites: ["Ranger","Wilderness Warden"," Empower Chant or Ranger’s Spells"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the observation or survival tags. Gain a talent from the Primal Magic stack (Chapter 4).",
abilities: [

{
name: "Environmentalist II",
prerequisites: ["Ranger","Wilderness Warden","Primal Warden II","Environmentalist"],
flavorTest: "Learn a new Primal Aspect. The environment you picked now restores 2 SP per Recoup.",
abilities: [
{
name: "Wanderer's Invocation",
prerequisites: ["Ranger","Wilderness Warden","Environmentalist II or Planar Protector II"],
flavorTest: "Learn one invocation. Pick an invocation that you know that has no tier prerequisites. You can cast that invocation one time per day without expending an invocation slot.",
abilities: [

{
name: "Furious Chant",
prerequisites: ["Ranger","Wilderness Warden","Wanderer’s Invocation or Intrinsic Boon IIy"],
flavorTest: "Pick one chant that you did not select with Empowered Chant. While more than 1 mile from a settled area, you can cast that chant as if it were 1 Tier stronger. ",
abilities: [

{
name: "Planar Protector II",
prerequisites: ["Ranger"," Wilderness Wardenr","Primal Warden II","Planar Protector"],
flavorTest: "Choose a new type of creature from your Planar Protector feature. Your Planar Protector bonus works on creatures with either tag.",
abilities: [

{
name: "Intrinsic Boon II",
prerequisites: ["Ranger", "Wilderness Warden", "Environmentalist II or Planar Protector II","Intrinsic Boon"],
flavorTest: "Learn one chant, one invocation, and one spell that all have the Intrinsic tag.",
abilities: [

{
name: "Wanderer's Spells",
prerequisites: ["Ranger","Wilderness Warden","Wanderer’s Invocation or Intrinsic Boon II"],
flavorTest: "Pick two spells with the Nature tag that you know and that you have not selected for your ranger’s spells feature. They cost 1 fewer SP (min 1 SP).",
abilities: [

{
name: "Primal Warden III",
prerequisites: ["Ranger","Wilderness Warden","Furious Chant or Wanderer’s Spells"],
flavorTest: "You cannot become lost except through the use of magic. Gain a talent from the Primal Magic stack.",
abilities: [
{
name: "Primal Warden IV",
prerequisites: ["Ranger","Wilderness Warden","Primal Warden III"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the Observation or Survival tags. Gain a talent from the Primal Magic stack.",
abilities: [

{
name: "Environmentalist III",
prerequisites: ["Ranger","Wilderness Warden","Primal Warden IV","Environmentalist II"],
flavorTest: "The environment you picked now restores 3 SP per Recoup. All environments now restore 1 SP per Recoup.",
abilities: [

{
name: "Primeval Invocation",
prerequisites: ["Ranger","Wilderness Warden","Environmentalist III or Planar Protector III"],
flavorTest: "Learn one invocation. Pick an invocation that you know that is Tier 2 or Tier 3. You can cast that invocation one time per day without expending an invocation slot.",
abilities: [

{
name: "Chant Of The Wild Heart",
prerequisites: ["Ranger","Wilderness Warden","Primeval Invocation or Intrinsic Boon III"],
flavorTest: "You can choose which intrinsic chants get your bonus from the “Chant” abilities in this stack when you Rest. (1/Week) When you reach Primal Tier 6, gain +12 Skill Points that you can assign to skills with the athleticism, acrobatics, stamina, observation, or survival tags.",
abilities: [

{
name: "Planar Planar Protector III",
prerequisites: ["Ranger","Wilderness Warden","Primal Warden IV","Planar Protector II"],
flavorTest: "Choose a creature type you’ve already chosen with Planar Protector 1 or 2. Gain an additional +1 on magic attacks against creatures of that type.",
abilities: [
{
name: "Intrinsic Boon III",
prerequisites: ["Ranger","r, Wilderness Warden","Environmentalist 3 or Planar Protector 3"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the Survival tag.Learn 1 chant, 1 invocation, and 1 spell that all have the Intrinsic tag.",
abilities: [
{
name: "Primeval Spells",
prerequisites: ["Ranger","Wilderness Warden","Primeval Invocation or Intrinsic Boon III"],
flavorTest: "Pick 3 intrinsic spells that you know and that have benefitted either from Ranger’s Spells or Wanderer’s Spells. They cost 1 fewer SP (min 1 SP).",
abilities: [

{
name: "Primal Warden V",
prerequisites: ["Ranger","Wilderness Warden"," Chant of the Wild Heart or Primeval Spells"],
flavorTest: "Gain +4 Skill Points that you can assign to skills with the Observation or Survival tags. Gain a talent from the Primal Magic stack.",
abilities: [

{
name: "Primal Exemplar",
prerequisites: ["Ranger","Wilderness Warden","Capstone","Primal Warden V"],
flavorTest: "Your heart, soul, and body are intertwined with the wellbeing of the natural world. Fae generally see you as a great friend and will usually go out of their way to cooperate with you. You can never become lost, even by magical means. When you Take a Rest and you are not within 1 mile of a settled area, you may reassign all of your ranger Talent Points, assigning them to other ranger talents.",
abilities: [
{
name: "Level 30",
description: "Choose one intrinsic spell and one intrinsic invocation.Both must have the nature tag.You can cast each of those abilities indefinitely, without spending SP or invocation slots.",
},

{
name: "Rogue",
shortDescription: "Skilled operatives that are usually outside the law, rogues might specialize in assassination, impersonation, exfiltration, and the like.",
quote: {
phrase: "Only four guards? I’m offended",
name: "Avery Gray",
title: "the “Little Shadow”",
},
longDescription: "You were dealt a difficult hand. You grew up in society’s unforgiving underbelly and from an early age you had to resort to thievery or deception to find food and lodging. Through trial and error, you learned what fools people and what does not.Living in the shadows on the fringes of society, you quietly observed as other, more skilled rogues earned their illicit livelihoods.Seeking to emulate the most successful thieves and con artists, you have learned how to stay one step ahead of the law. The most successful rogues know the other players in their game: crime lords, skilled pickpockets, charlatans, corrupt nobles, bribed guards, aspiring politicians, and the pesky incorruptible altruists among such folk.You make it your business to stay informed on all such individuals. Are there any among these scoundrels whom you would trust? Would you ever try to form a family of sorts with any of these fellow rogues, or do you find that you only trust your own intuition? Even if you would never trust another rapscallion, what offer would convince you to work alongside another individual or group to complete a job? You should always ask yourself these questions, relying on both logic and gut instinct as your answers might change on a daily or even hourly basis.",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "Sneak Attack",
description: "Your Sneak Attack damage increases by +1d6 (if you had no Sneak Attack, it becomes 1d6). You can apply Sneak Attack damage to a creature that you hit with a melee attack with a light weapon if you had TA against the target and no TD. You may do this once per turn."
},
{
name: "Skilled",
description: "Gain +6 Skill Points, which you can spend on any skills with the Acrobatics, Influence, Observation, and/or Subterfuge tags.",
},
{
name: "Well Equipped",
description: "You gain hooded common clothes, a hooded lantern, two daggers, a skullduggery kit, and one disguise of your choice.",
}

]
}
},
{
name: "Con",
description: "You wear identities like clothes. Capable of impersonating nearly anyone, you can pull elaborate cons.",,
talents: [,
{
name: "Confidence",
prerequisites: ["Rogue","Con","Rogue Entry"],
flavorTest: "You gain 1 rank in the Charlatan profession. If you already have any ranks in the Charlatan profession, you gain +3 Skill Points in Savoir Faire, and +3 Skill Points that you can spend on Empathy, Gossiping, Intimidating, Leadership, or Persuading.",
abilities: [

]
{
name: "Impersonate",
prerequisites: ["Rogue","Con","Confidence"],
flavorTest: "Your false identity now holds up to some scrutiny. After spending a day studying someone and at least a week in their area of residence, you can use the Impersonate ability.",
abilities: [
{
name: "Impersonate",
description: " Roll an INT/Disguise check and an INT/ Forging check and take the average of the two rolls. This becomes your Identity Score. People inspecting your credentials, paperwork, or claims may make an INT roll, and if they do not beat your Identity Score, they do not get suspicious unless you give them a clear reason to be suspicious. You may have one active identity. You can only repeat your Disguise and Forging check by spending another day with the person and another week in their area of residence. A creature inspecting you gains the following cumulative bonuses to their INT roll if circumstances allow. +5 If you have just done something very suspicious. +20 If you are within 5 miles of the home of the person you are impersonating. +30 If the person who is inspecting has heard of or knows about the person you are impersonating. +40 If the person inspecting has been fooled by a different identity before. +50 If the person inspecting has met the person you’re impersonating before. +70 If the person inspecting has met the person you’re impersonating in the last year. The creature automatically beats your score if they have interacted with the person that you are impersonating in the last month, the person you are impersonating is a well known individual in the area you’re in, or the inspector knows the individual that you are impersonating personally.",
},
{
name: "Master Of Disguise",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "You gain +3 to Disguising and +3 to Forging checks.",
abilities: [

{
name: "Additional Identities",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "You may have an additional identity. It takes you one hour to switch between identities.",
abilities: [

{
name: "Better Identities",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "You gain +5 to your Identity Score.",
abilities: [

{
name: "Sturdier Identities",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "You gain +10 to your Identity Score when the inspector has any number of circumstantial bonuses.",
abilities: [

{
name: "Quicker Identities",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "You may shortcut the 1 week requirement for identities and take a -5 on your Forgery check per day skipped (Max -30). ",
abilities: [

{
name: "Betrayal",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "If you attack someone who is Completely Surprised and has been fooled by your identity, that attack is an automatic crit and deals maximum damage.",
abilities: [

{
name: "Charming Identity",
prerequisites: ["Rogue","Con","Repeatable","Impersonate"],
flavorTest: "You may attempt to Charm someone who has been fooled by your Identity. Make a CHA roll vs LOG. If you hit, they treat you as a friendly acquaintance for 1 minute, and do not know they have been Charmed. This does not work if the creature is in combat.",
abilities: [

{
name: "Leave It To Luck ",
prerequisites: ["Rogue","Con","Con 5",],
flavorTest: "You gain the Coin Toss ability.",
abilities: [
{
name: "Coin Toss",
description: "Your next d20 roll becomes a 50/50 chance. If you roll an odd number, treat it as a 1. If you roll an even number, treat it as a 20. (½ LUCK/Rest)",
},
{
name: "Fool's Strike",
prerequisites: ["Rogue","Con","Repeatable","Leave it to Luck"],
flavorTest: "You gain an additional Sneak Attack die against creatures while you are disguised and your target does not know your true identity. You can take this talent up to six times.",
abilities: [

{
name: "How Dare You ",
prerequisites: ["Rogue","Con","Leave it to Luck"],
flavorTest: "People inspecting your identity must subtract your Savior Faire from their INT roll.",
abilities: [

{
name: "Leave It To Luck II",
prerequisites: ["Rogue","Con"," Leave it to Luck"],
flavorTest: "Your Coin Toss ability becomes LUCK/Rest.",
abilities: [

{
name: "Jammy",
prerequisites: ["Rogue","Con"," Leave it to Luck"],
flavorTest: "Your total number of Luck Points per day is equal to your LUCK",
abilities: [

{
name: "Slippery",
prerequisites: ["Rogue","Con"," Leave it to Luck"],
flavorTest: "You can now spend 2 Luck Points to force a creature that you can see within 30 ft of you to reroll a d20 after they make an attack roll or after they inspect your identity.",
abilities: [
{
name: "Catch Me If You Can ",
prerequisites: ["Rogue","Con"," Leave it to Luck"],
flavorTest: "If you have at least 1 Luck Point when you are reduced to 0 HP, you can regain 1 HP and immediately move 40 ft without provoking reactive actions. Doing so costs all of your remaining Luck Points.",
abilities: [
{
name: "Play Dead",
prerequisites: ["Rogue","Con"," Leave it to Luck"],
flavorTest: "If you have at least 1 Luck Point when you hit 0 HP you can regain 1 HP and pretend to be dead.You begin Catching your Breath when you do this.Additionally, make a CHA/ Performance roll vs the LOG of each creature that can see you.If you hit more than half the witnesses, then you are believed to be dead (or the identity that you are currently using is believed to be dead).",
abilities: [
{
name: "Master Of Disguise II",
prerequisites: ["Rogue","Con","Leave it to Luck, Master of Disguise"],
flavorTest: "You gain +3 In Savior Faire and +3 Skill Points that you may spend on any skill with the Influence tag.",
abilities: [
{
name: "Check It Again",
prerequisites: ["Rogue","Con","Leave it to Luck"],
flavorTest: "You may now spend 1 Luck Point to force a creature to reroll their INT check made to overcome your Identity Score.",
abilities: [
{
name: "Frame",
prerequisites: ["Rogue","Con","Leave it to Luck"],
flavorTest: "You can now abandon an identity after you attempt a Rug Pull using the rank 5 Charlatan ability. There is a 50% chance that the blame will fall on the person you were impersonating instead of you.",
abilities: [
{
name: "Conman Extraordinaire",
prerequisites: ["Rogue","Con"," Leave it to Luck"],
flavorTest: "Who exactly are you? No one knows. Your original identity has been completely erased from all records and only the people closest to you might know your real name. You may now attempt a grand impersonation. When someone inspects you, they gain no bonus from having heard of the person that you are impersonating or from having met them before. People who personally know the creature you are impersonating will only find you out if they can see you and are within 30 ft of you. Your Grand Impersonation only lasts for 24 hours, and you may only attempt a Grand Impersonation once a week. After 2 hours, future inspections gain a +40 bonus to their roll.",
abilities: [
{
name: "Level 30",
description: ": The final cap for your CHA increases from 12 to 14.",
},

{
name: "Guild Affiliate",
description: "You are a talented poisoner and use deadly reagents to enhance your weapon attacks.",,
talents: [,
{
name: "Guild Member",
prerequisites: ["Rogue","Guild Affiliate","Rogue Entry"],
flavorTest: "Incompatible: Disciple of the Divine, Initiate of the Occult, Warden of the Primal You join Harlan’s Guild (or another guild, as specified by your MC.) You may only gain the benefits of this talent after Taking a Rest in an area of civilization such as a town or village. You swear off all deific influence. You gain access to three poisons, and can keep one vial of each on your person. A vial is enough for three doses of each poison. You may only refill these by Taking a Rest in a populated area. You learn how to identify fellow members of the guild who can provide this service to you, as well as clue you in to potential contracts. If you break your oath, you may no longer refill your poisons until reparations have been made. You can spend 1 AP to coat a weapon that has the Light property. The first vials are free, but new vials cost 20 sc each.",
abilities: [
{
name: "Drake’s Breath",
description: "Your attacks have a 50% chance to deal an extra 1d6 fire damage for 1 minute. The extra damage occurs on odd-numbered attack rolls.",
},
{
name: "Ice Blood",
description: "The first target struck with a weapon coated in this poison must make an END check with a DC of 10 at the start of their turns for the next 1 minute. On any turn where they fail, they gain the Chilled condition. A creature with a ML instead loses one of the actions on their actions list."
},
{
name: "Harlan’s Breach",
description: "Your attacks ignore all Resist properties, as well as Immune Blunt, Immune Sharp, and Immune Physical for 1 minute.",
},
{
name: "Find Weak Spot",
prerequisites: ["Rogue","Guild Affiliate","Guild Member"],
flavorTest: "Once per turn, you may target a creature’s FORT instead of their AR.",
abilities: [
{
name: "Find Weak Spot II",
prerequisites: ["Rogue","Guild Affiliate","Repeatable (even levels only)","Find Weak Spot"],
flavorTest: "You gain an additional Sneak Attack die whenever you use Sneak Attack and Weak Spot together.",
abilities: [
{
name: "Find Weak Spot III",
prerequisites: ["Rogue","Guild Affiliate"," Repeatable (odd levels only)","Find Weak Spot II"],
flavorTest: "If your Weak Spot attack hits, you may move 5 ft for free. This movement does not provoke reactive attacks. (1/Catch Breath) Each time you take this talent again, gain +2 uses /Catch Breath.",
abilities: [

{
name: "Find Weak Spot IV",
prerequisites: ["Rogue","Guild Affiliate","Find Weak Spot III"],
flavorTest: "Weak Spot attacks that exceed the target’s FORT by 5 or more cause Bleeding 1d4 for 1d6 rounds.",
},
{
name: "Find Weak Spot V",
prerequisites: ["Rogue","Guild Affiliate","Find Weak Spot IV"],
flavorTest: "Your Weak Spot attacks gain +1 crit range.",
abilities: [

{
name: "Garrote",
prerequisites: ["Rogue","Guild Affiliate","Guild Member"],
flavorTest: "You gain the Garrote ability.",
abilities: [
{
name: "Garrote",
description: " By spending 3 AP, you may make a DEX vs ANT attack against a creature who cannot see you and is in melee distance. On a hit, you begin a special grapple that requires both of your hands. You can take no actions other than movement. Otherwise this follows the normal Grappled rules. If their ML is less than half your character level, they are rendered Helpless and begin Suffocating while grappled in this way.Otherwise, the creature is silenced and staggered while grappled in this way. (1 / Rest) ",
},

{
name: "Rogue Maneuvers",
prerequisites: ["Rogue","Guild Affiliate","Guild Member"],
flavorTest: "Your range for thrown weapons is doubled and thrown weapons can now trigger Sneak Attack.",
abilities: [

{
name: "Hamstring",
prerequisites: ["Rogue","Guild Affiliate","Rogue Maneuvers","Guild Affiliate 5"],
flavorTest: "You gain the Hamstring Ability.",
abilities: [
{
name: "Hamstring",
description: "When a creature leaves your melee reach, you can attack with a melee weapon by spending 2 Reactive AP. On a hit, that target’s movement is halved until the end of their turn.",
},

{
name: "Preparatory Strike",
prerequisites: ["Rogue","Guild Affiliate","Rogue Maneuvers","Guild Affiliate 5"],
flavorTest: "You gain the Preparatory Strike ability.",
abilities: [
{
name: "Preparatory Strike",
description: "Make a weapon attack against a creature and then end your turn immediately. You add a bonus to your physical defenses until the beginning of your next turn. The bonus equals the number of AP you have remaining to use reactively.",
},

{
name: "Evasive Throw",
prerequisites: ["Rogue","Guild Affiliate","Rogue Maneuvers","Guild Affiliate 5"],
flavorTest: "You gain Evasive Throw ability.",
abilities: [
{
name: "Evasive Throw",
description: "Spend 1 additional AP as a part of a thrown weapon attack. If it hits, you gain +2 to your mental defenses against that creature and take no damage when the creature misses you if you would otherwise take half damage.",
},

{
name: "Quick Throw",
prerequisites: ["Rogue","Guild Affiliate","Rogue Maneuvers","Guild Affiliate 5"],
flavorTest: "You can now make a ranged thrown attack as a part of drawing a concealed weapon. If the creature is Partially Surprised it automatically hits. If the creature is Completely Surprised it automatically hits and crits.",
abilities: [

{
name: "Aimed Strike",
prerequisites: ["Rogue","Guild Affiliate","Guild Member"],
flavorTest: "Spend 1 additional AP on an attack to gain TA on that attack.",
abilities: [

{
name: "Aimed Strike II ",
prerequisites: ["Rogue","Guild Affiliate","Aimed Strike"],
flavorTest: "When using Aimed Strike, roll 2d20 and keep the higher result.",
abilities: [

{
name: "Tactical Superiority",
prerequisites: ["Rogue","Guild Affiliate","Aimed Strike"],
flavorTest: "Your Aimed Strikes deal +1 damage. Additionally, when you have one source of TA, you can ignore two sources of TD, potentially allowing you to use Sneak Attack.",
abilities: [

{
name: "Tactical Superiority II",
prerequisites: ["Rogue","Guild Affiliate","Tactical Superiority"],
flavorTest: "Your Aimed Strikes deal +1 damage. Additionally, when you have one source of TA, you can ignore three sources of TD.",
abilities: [


{
name: "Tactical Superiority III",
prerequisites: ["Rogue","Guild Affiliate","Tactical Superiority II"],
flavorTest: "Your Aimed Strikes deal +1 damage. Additionally, when you have one source of TA, you can ignore all sources of TD.",
abilities: [

},
{
name: "Poisoner",
prerequisites: ["Rogue","Guild Affiliate","Guild Member"],
flavorTest: "You may now apply poison to ammunition.",
abilities: [

{
name: "Drakes Breaty Preference",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You may replace Ice Blood or Harlan’s Breach with extra vials of Drake’s Breath when you refill your poisons.",
abilities: [

{
name: "Drake's Breath Efficiency",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You can get four doses from a vial of Drake’s Breath.",
abilities: [

{
name: "Drake's Breath Efficacy",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "Drake’s Breath becomes 2d6 fire damage.",
abilities: [

{
name: "Lingering Drake's Breath",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "Drake’s Breath lasts for 2 minutes.",
abilities: [

{
name: "Drake's Breath Ammunition",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You can apply Drake’s Breath to a quiver of up to 20 arrows or a case of up to 20 bolts, but the duration remains unchanged.",
abilities: [
{
name: "Drake's Breath Expertist",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You can now add your INT to Drake’s Breath damage.",
abilities: [

{
name: "Ice Blood Preference",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You may replace Drake’s Breath or Harlan’s Breach with extra vials of Ice Blood when you refill your poisons.",
abilities: [

{
name: "Ice Blood Efficiency",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You can get four doses from a vial of Ice Blood.",
abilities: [

{
name: "Ice Blood Efficacy",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "Ice Blood’s DC becomes your INT+10.",
abilities: [

{
name: "Lingering Ice Blood",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "Ice Blood lasts for 2 minutes.",
abilities: [
{
name: "Harlan's Breach Preference",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You may replace Drake’s Breath or Ice Blood with extra vials of Harlan’s Breach when you refill your poisons.",
abilities: [

{
name: "Harlan's Breach Efficiency",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You can get five doses from a vial of Harlan’s Breach.",
abilities: [

{
name: "Harlan's Breach Efficacy",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "Any creature struck with Harlan’s Breach loses its Resist properties until the beginning of its next turn.",
abilities: [

{
name: "Lingering Harlan's Breach",
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "Harlan’s Breach lasts for 2 minutes.",
abilities: [

{
name: "Harlan's Breach Ammunition'
prerequisites: ["Rogue","Guild Affiliate","Poisoner"],
flavorTest: "You can apply Harlan’s Breach to a quiver of up to 20 arrows or a case of up to 20 bolts, but the duration remains unchanged.",
abilities: [
{
},

name: "Guildmaster",
prerequisites: ["Rogue","Guild Affiliate","Capstone","Guild Affiliate 14"],
flavorTest: "You are an individual of great renown among the shadowy underbelly of Ancerra. Commanding entire operations for your guild, approving new members, and handling the most sensitive of issues. You gain two vials of each of the three poisons when you rest in a populated area, and refilling them is free. Once per week, you can have a guild representative meet you where you are camping for refills, assuming your location is accessible without major magic or combat. The representative will not partake in combat or favors for you, but may take messages back to the nearest town if you request it.",
abilities: [
]
}
{
name: "Level 30",
description: "You gain one additional vial of each of the three poisons from this track each time you restock.",
},
},
{
name: "Psyblade",
description: "You have an aptitude for psionic magic and use this to silence your footfalls and improve your thievery.",,
talents: [,
{
name: "Psyblade Focus",
prerequisites: ["Rogue","Psyblade","Rogue Entry"],
flavorTest: "You gain the Adept of the Psionic talent if you do not already have it. INT is your magic attribute. Each time you level up and spend your Talent Point on a talent in the Psyblade stack, you gain +5 SP and +1 Psionic Power.",
abilities: [

{
name: "Soul Knife",
prerequisites: ["Rogue","Psyblade","Psyblade Focus"],
flavorTest: "Regardless of your Aptitude, Create Weapon costs you 0 SP to cast, and 0 AP to resummon a Light weapon.",
abilities: [

{
name: "Soul Rend",
prerequisites: ["Rogue","Psyblade","Psyblade Focus"],
flavorTest: "Gain the Soul Rend ability",
abilities: [
{
name: "Soul Rend",
description: "When you deal psychic damage to a creature, it can no longer regain HP until the beginning of its next turn. (INT/Rest)",
},
{
name: "Psychic Bond",
prerequisites: ["Rogue","Psyblade","Psyblade Focus"],
flavorTest: "Gain the Psychic Bond ability.",
abilities: [
{
name: "Psychic Bond",
description: "Choose an ally within 30 ft of you and spend 2 AP. Gain TA on enemies that take damage from that ally during the duration. This ability lasts for 1 minute. (INT/Rest)",
},
{
name: "Psychic Strike",
prerequisites: ["Rogue","Psyblade","Psyblade Focus"],
flavorTest: "If you would miss an attack roll, you may spend SP to add to your attack roll total at a rate of 1 SP per +2. (INT/Rest).",
abilities: [

{
name: "Mind Spike",
prerequisites: ["Rogue","Psyblade","Psyblade Focus"],
flavorTest: "Your attacks and spells that deal psychic damage may now deal Sneak Attack damage.",
abilities: [

{
name: "Improved Mind Spike",
prerequisites: ["Rogue","Psyblade","Mind Spike"],
flavorTest: "You gain +1 Sneak Attack die when dealing psychic damage.",
abilities: [

{
name: "Space Bend",
prerequisites: ["Rogue","Psyblade","Psyblade Focus"],
flavorTest: "When you would be the victim of damage that affects more than one creature, you may teleport to an unoccupied space up to 15 ft away, but you start your next turn with 3 fewer AP. (½ INT/Rest)",
abilities: [
{
name: "Psylade Focus II",
prerequisites: ["Rogue","Psyblade","Psyblade 5"],
flavorTest: "You can now choose if the weapons created by your Create Weapon are visible, invisible, or shed bright light in a 15 ft radius and dim light for an additional 15 ft.",
abilities: [

{
name: "Soul Knife II",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II","Soul Knife"],
flavorTest: "You may now spend 1 AP to teleport to a thrown weapon from Create Weapon once per turn. (INT/Recoup)",
abilities: [

{
name: "Soul Rend II",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II","Soul Rend"],
flavorTest: "Soul Rend now lasts until the end of the creature’s turn.",
abilities: [

{
name: "Psychic Bond II",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II","Psychic Bond"],
flavorTest: "Psychic Bond now grants TA to your ally against creatures that you have damaged during the duration. Additionally, you can communicate telepathically with your Psychic Bond.",
abilities: [

{
name: "Psychic Bond III",
prerequisites: ["Rogue","Psyblade","Psyblade Bond II"],
flavorTest: "While the TA benefit only extends to one ally, you can include up to eight willing creatures that you can see when communicating telepathically. One of these creatures must be the ally that you chose to gain TA.",
abilities: [
{
name: "Enlightened Mind",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II"],
flavorTest: "Spells with a range of self or touch cost you fewer AP: subtract your INT from the APC (min 1 APC). (½ INT/Rest)",
abilities: [

{
name: "Piercing Strike",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II"],
flavorTest: "Your attacks ignore Resist Psychic.",
abilities: [

{
name: "Psychic Scream",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II"],
flavorTest: "Gain the Psychic Scream ability.",
abilities: [
{
name: "Gain the Psychic Scream ability.",
description: "Spend 3 AP to make an INT vs LOG attack against all creatures within 5 ft of you. On a hit, deal 1d4+INT psychic damage and the creature cannot take Reactive Actions until after their next turn. (3/Rest)",
},
{
name: "Psionic Armor",
prerequisites: ["Rogue","Psyblade","Psyblade Focus II"],
flavorTest: "You may use your LOG in place of your ANT or WILL when a creature attacks your ANT or WILL. (INT/Rest)",
abilities: [

{
name: "Master Psyblade",
prerequisites: ["Rogue","Psyblade","Capstone","Psyblade 14"],
flavorTest: "Your hardened capacity to manipulate the world around you with a mere thought is something of an urban legend among cons and crooks. Even some circles of spellcasters whisper your name with wonder. If you have zero uses of Soul Rend or Psychic Scream and a creature attacks but misses your LOG, you regain one use of Soul Rend or Psychic Scream. If you have zero uses of both, you can choose which one.",
abilities: [
{
name: "Level 30",
description: "You now also regain uses of Soul Rend or Psychic Scream if you’re using your LOG against a WILL or ANT attack using Psionic Armor.",
},
{
name: "Subtlety Track",
description: "",,
talents: [,
{
name: "Vanish",
prerequisites: ["Rogue","Subtlety","Rogue Entry"],
flavorTest: "You may roll 2d20 and take the higher result when attempting to hide.",
abilities: [

{
name: "Shadow Hop",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "You may now move between sources of cover and concealment, and do not lose the Unseen condition from moving into line of sight in Dim Light unless you end your movement out of cover or concealment.",
abilities: [

{
name: "Scale The Balcony",
prerequisites: ["Rogue","Psyblade","Vanish"],
flavorTest: "You gain +3 Athletics when climbing, which increases to a +6 while you have a Climber Kit. Additionally, once per turn when you spend AP to move in combat, you gain a Climb speed equal to your speed.",
abilities: [

{
name: "Keep Quiet",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "Being struck by a melee attack no longer causes you to lose the Unseen condition. While you are Unseen, ranged attackers do not know if they hit you with a ranged attack or spell.",
abilities: [
]
},
{
name: "Sidestep",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "If you are Unseen and a creature who is hostile to you or neutral to you would walk through your space, you may move 5 ft to get out of their way. If you have the Scale the Balcony talent, this movement may include climbing.",
abilities: [
]
},
{
name: "Blink Of An Eye",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "On any turn where you take the Move action three times, your attempts to take the Hide action while in Total Cover automatically succeed. ",
abilities: [
]
},
{
name: "Blackjack",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "You gain the Blackjack ability.",
abilities: [
]
},
{
name: "Blackjack",
description: "By spending 5 AP, deal 20 nonlethal blunt damage to a creature who is Completely Surprised. If a single instance of this ability renders the creature Unconscious, you do not need to roll to retain the Complete Surprise condition.",
},
{
name: "Sprint",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "When you gain the Unseen condition, you may immediately take the move action for 0 AP.",
abilities: [
]
},
{
name: "Shadow Assault",
prerequisites: ["Rogue","Subtlety","Vanish"],
flavorTest: "You gain an additional Sneak Attack die while you are Unseen.",
abilities: [
]
},
{
name: "In The Dark",
prerequisites: ["Rogue","Subtlety","Subtlety 5"],
flavorTest: "When you are in Darkness, you are Unseen to creatures who are relying on Darkvision to see you.",
abilities: [
]
},
{
name: "Shadow Hop II",
prerequisites: ["Rogue","Subtlety","In the Dark","Shadow Hop"],
flavorTest: "The first attack you make on your turn does not cause you to lose the Unseen condition.",
abilities: [
]
},
{
name: "Born In Darkness",
prerequisites: ["Rogue","Subtlety","In the Dark",],
flavorTest: "You gain the Born of Darkness ability.",
abilities: [
]
},
{
name: "Born of Darkness",
description: "By spending 4 AP, suppress all conditions of your choice for 1 minute and move up to your speed. If you end this movement in Cover or being Concealed, gain the Unseen condition. If you end one of your next six turns without the Unseen condition, all of your suppressed conditions return.",
},
{
name: "Shadow Mastery",
prerequisites: ["Rogue","Subtlety","In the Dark"],
flavorTest: "When you are in Dim Light you do not lose the Unseen condition by entering Line of Sight for creatures who do not have Darkvision.",
abilities: [
]
},
{
name: "Fellow Inhabitant",
prerequisites: ["Rogue","Subtlety","In the Dark"],
flavorTest: "If you spend 30 seconds in combat observing a creature, you learn if they have Darkvision and if they have any other remarkable source of non-magical perception.",
abilities: [
]
},
{
name: "Shadow Trick",
prerequisites: ["Rogue","Subtlety","In the Dark"],
flavorTest: "If a creature you can see attempts to target a square they think you are in, and you are within 5 ft of that square, you may spend 1 AP reactively to make them believe they hit you, and then take a 5 ft step. This trick lasts until the beginning of your next turn. Each time they target that space they must beat your LOG with their INT to know you are not in that space..",
abilities: [
]
},
{
name: "Shadow Assault II",
prerequisites: ["Rogue","Subtlety","Repeatable","In the Dark","Shadow Assault"],
flavorTest: "You gain an additional Sneak Attack die while you are Unseen. You may take this talent up to five times.",
abilities: 
]
},
{
name: "Vanish II",
prerequisites: ["Rogue","Subtlety","In the Dark","Vanish"],
flavorTest: "You automatically succeed your Hide roll while you are in Darkness or Total Cover. (INT/Rest).",
abilities: [
]
},
{
name: "Shadowstep",
prerequisites: ["Rogue","Subtlety","In the Dark"],
flavorTest: "You can now pass through 5 ft of bright light without losing the Unseen condition.",
abilities: [
]
},
{
name: "Quiet One",
prerequisites: ["Rogue","Subtlety","In the Dark"],
flavorTest: "You gain +10 to Eavesdropping while you are Unseen. This can exceed the normal cap of 20 for a skill, but cannot exceed 25.",
abilities: [
]
},
{
name: "Master Of Shadow",
prerequisites: ["Rogue", "Subtlety", "Capstone","In the Dark","Subtlety 14"],
flavorTest: "Your true identity is a mystery, and only the most powerful and knowledgeable of Ancerra know of your existence at all. You are a creature of shadow, coming and going as you please. You are now considered Unseen by creatures without Darkvision, and Concealed by creatures with Darkvision, whenever you are not in bright light, unless you chose to be seen.",
abilities: [
]
},
{
name: "Level 30",
description: "You have learned how to simulate your own shadows by placing yourself where bright light will assail the eyes of any who look for you. When you are in bright light, you are considered Concealed, unless you choose to be seen.",
    },


name: "Stealth Archer",
shortDescription:

{
name: "Aimed Shot",
prerequisites: ["Rogue","Stealth Archer","Rogue Entry"],
flavorTest: "You can spend 1 additional AP to give yourself TA on a target that is Flanked.",
abilities: [
]
},
{
name: "Shadow Shot",
prerequisites: ["Rogue","Stealth Archer","Rogue Entry"],
flavorTest: "If your target is at least 45 ft away, firing a silent ranged weapon does not cause you to lose the Unseen condition. This does not work with ranged weapons that produce concussive noise.",
abilities: [
]
},
{
name: "Shadow Shot Range",
prerequisites: ["Rogue","Stealth Archer","Shadow Shot"],
flavorTest: "Shadow Shot becomes: If your target is at least 35 ft away.",
abilities: [
]
},
{
name: "Silent Shot",
prerequisites: ["Rogue","Stealth Archer","Rogue Entry"],
flavorTest: "Your ranged weapon attacks can now apply Sneak Attack damage if your target is within 30 ft of you and you have TA.",
abilities: [
]
},
{
name: "Silent Shot Range",
prerequisites: ["Rogue","Stealth Archer","Repeatable","Silent Shot"],
flavorTest: "Your ranged weapon attacks can apply Sneak Attack damage 10 ft further than they previously could.",
abilities: [
]
},
{
name: "Improved Silent Shot",
prerequisites: ["Rogue"," Stealth Archer,","Repeatable"," Silent Shot"],
flavorTest: "You gain an additional Sneak Attack die when making a ranged weapon attack. You can take this talent up to five times.",
abilities: [
]

},
{
name: "Tinkerer",
shortDescription: "By spending countless hours fiddling with scrap parts, tinkerers can create wondrous items.Some tinkerers enhance their items with arcane magic.",
quote: {
phrase: "Yeah, never go throwin’ crap away when it might serve a purpose.Hoarding is good for the soul, you see.You know what they say about one person’s trash. ‘Give it to the tinkerer,’ they say.Now, hand it over and I’ll make you a can opener.Or a flamethrower, mayhap.",
name: "Ingrid Divrgubben",
title: "collector",
},
longDescription: "You have never been able to keep from fidgeting, always reaching for clockwork, screws, wires, and the like as you seek to create new inventions or improve upon existing ones.You always had a penchant for tinkering and exhibit relentless ingenuity.You quickly gained notoriety as someone who could always find a way to enhance anything with mechanical parts.Unquenchably curious, you always seek to understand how something works and how it might be improved upon. What is your medium of choice? Tinkerers often favor metal and wood due to their versatility, but other substances can make for interesting inventions as well.When you invent something, what motivates you? Are you most concerned with improving your quality of life by making existing technology more effective, or are you looking to break the confines of science as your contemporaries understand it? Do you have some grand idea for a new invention that will revolutionize the world?",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "When you take this entry talent, you gain the following abilities.",
abilities: [
{
name: "Tools of the Trade",
description: "You gain a set of Tinker’s Tools.",
},
{
name: "Masterwork",
description: "You specify a weapon or set of armor as your focus. You can change your focus by spending at least a day tinkering with your new focus. Your currently focused item gains +1 to hit and damage if a weapon, and +1 to AR if armor. These bonuses are in addition to any enhancements, enchantments, or other bonuses to that weapon or armor’s statistics. If you change your Masterwork focus, your old focus loses the improvements from this talent.",
},
{
name: "Rig",
description: "You can very quickly cobble together an improvised set of tools, a simple item (like a crowbar or pulley), which lasts for a single use. Alternatively, you can patch a simple broken item (such as a rowboat with a hole, or a busted door drawbar), which lasts for 1 hour. (1/Rest)",
},
]

},
stacks: [
{
name: "Alchemist",
description: "",,
talents: [,
{
name: "Alchemy",
prerequisites: ["Tinkerer", "Alchemist","Tinkerer Entry"],
flavorTest: "Each time you Take a Rest, you make two Alchemy Creations. Your first option for Alchemy Creations is Alchemy Flasks.",
abilities: [
{
name: "Alchemy Flask",
description: "Create an Alchemy Flask. Choose a spell from the Formula list, and that spell is synthesized. When a creature drinks the potion, that creature gains the effects of the spell for the duration, considering the spell’s range to be “Self.” These creations become impotent after 24 hours.",
},
{
name: "Create Potion",
prerequisites: ["Tinkerer", "Alchemist","Tinkerer Entry"],
flavorTest: "",
abilities: [
{
name: "Alchemy Flask",
description: "",
},
{
name: "",
prerequisites: ["Tinkerer", "Alchemist","Alchemy"],
flavorTest: "Add Healing Vials to your possible creations. When creating Healing Vials in this way, you do not need to spend the material components, but they expire after 24 hours.",
abilities: [

{
name: "Create Bomb",
prerequisites: ["Tinkerer", "Alchemist","Alchemy"],
flavorTest: "Add Alchemy Bombs to your possible creations.",
abilities: [
{
name: "Alchemy Bomb",
description: ". Spend 2 AP to throw an alchemy bomb,which has a thrown range of 20 ft. Make a DEX vs REF attack roll, dealing, 2d6 fire damage to all creatures within a 5 ft radius of the bomb’s point of contact, and ½ damage on a miss.",
}, 
{
name: "Quaff",
prerequisites: ["Tinkerer", "Alchemist","Alchemy"],
flavorTest: "Once on each of your turns, you may drink a potion without spending AP.",
abilities: [

{
name: "Fire In The Hole",
prerequisites: ["Tinkerer", "Alchemist","Alchemy"," Create Bomb"],
flavorTest: "When you throw a bomb, you can now specify a number of targets equal to or less than your INT. Those creatures take no damage from your bombs.",
abilities: [

{
name: "Alchemy II",
prerequisites: ["Tinkerer", "Alchemist","Alchemist 4"],
flavorTest: "You can now make four Alchemy Creations when you Take a Rest.",
abilities: [

{
name: "Potion Upgrade",
prerequisites: ["Tinkerer", "Alchemist","Alchemy II"],
flavorTest: "Your Healing Vials become Healing Potions.",
abilities: [

{
name: "Alchemy Flask Upgrade",
prerequisites: ["Tinkerer", "Alchemist","TAlchemy II"],
flavorTest: "Your flask is designed for quick combat consumption. Using an Alchemist Flask no longer triggers the Exploit maneuver or other reactive actions.",
abilities: [

{
name: "Bomb Upgrade",
prerequisites: ["Tinkerer", "Alchemist","Alchemy II","Create Bomb"],
flavorTest: "Your bombs deal additional damage equal to your INT.",
abilities: [

{
name: "Injector",
prerequisites: ["Tinkerer", "Alchemist","y II,"],
flavorTest: "You can administer Potions or Flasks for 1 AP.",
abilities: [

{
name: "Elemental Bombs",
prerequisites: ["Tinkerer", "Alchemist","Alchemy II","Create Bomb"],
flavorTest: "You can create bombs that deal cold or corrosive damage instead of fire, choosing the type of damage when you create the bomb.",
abilities: [

{
name: "Up My Sleeve",
prerequisites: ["Tinkerer", "Alchemist","Alchemy II","Create Bomb"],
flavorTest: "If none of your creations for the day are bombs, you gain one Alchemy Bomb.",
abilities: [

{
name: "Vitality Solution",
prerequisites: ["Tinkerer", "Alchemist","Alchemy II,"],
flavorTest: "You can create Vitality Solutions, which grant 3d4+INT
Shield HP upon consumption.",
abilities: [
]
},
{
name: "Alchemy II",
prerequisites: ["Tinkerer", "Alchemist","Alchemist 9"],
flavorTest: "You can now create six alchemy creations when you Take a Rest.",
abilities: [
{
},
name: "Explostion Upgrade",
prerequisites: ["Tinkerer", "Alchemist","Alchemy III","Create Bomb"],
flavorTest: "Your bombs now target creatures in a 10 ft radius from the bomb’s point of contact.",
abilities: 
},
{
name: "Flask Efficiency",
prerequisites: ["Tinkerer", "Alchemist","Alchemy III"],
flavorTest: "When one of your flasks is used, the creature that uses it rolls a 1d6. On a 6, the flask is not consumed. Once this feature is used successfully, you lose this ability until after you Take a Rest.",
abilities: [
]
},
{
name: "Tolerance",
prerequisites: ["Tinkerer", "Alchemist","Alchemy III"],
flavorTest: "You can administer Potions or Flasks for 1 AP.",
abilities: [
]
},
{
name: "Injector Upgrade",
prerequisites: ["Tinkerer", "Alchemist","Alchemy III"],
flavorTest: "You can now administer Potions or Flasks at a range of 20 ft by spending 3 AP.",
abilities: [
]
},
{
name: "Master Alchemist",
prerequisites: ["Tinkerer", "Alchemist","Capstone","Alchemist 14"],
flavorTest: "Brewers, poisoners, and potion-makers all respect you as a master of the craft. Many would gladly pay you handsomely to teach them the secrets of your skills. You can make a number of Alchemy Creations equal to  your INT, and your creations remain potent for 48 hours. You no longer lose your Flask Efficiency ability after it issuccessful.",
abilities: [
]
},
{
name: "Level 30",
description: "Your Flask Efficiency ability is successful on a roll of 4-6.",
},
{


name: "Magitechnician",
description: "Through unstable experiments you have accessed the arcane source of magic and can fuel spells with your inventions.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Augmentor",
description: "You specialize in creating powerful armor that implements weapons, gadgets, and enhanced defenses, turning you into a tremendous front- line fighter.",,
talents: [,
{
name: "Augmentor",
prerequisites: ["Tinkerer","Augmentor","Tinkerer Entry","Breakthrough",],
flavorTest: "You gain the Armor Augmentation ability. This replaces your Masterwork ability.",
abilities: [
{
name: "Armor Augmentation",
description: "Choose a set of armor that will become your Augmented Armor. It encases your entire body and grants you +1 to all defenses in addition to its base stats. You are treated as one Size category larger than you would normally be for the purposes of lifting, carrying, dragging, and grappling. You can change your Augmented Armor after Taking a Rest and spending 2 additional hours disassembling your old Augmented Armor.",
},

{
name: "Install Weapon",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You may install a weapon into your armor, losing the ability to be disarmed of that weapon.",
abilities: [
},
{
name: "Install Shield",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You may install a shield onto one of your arms. You can spend 1 AP to activate the shield and 1 AP to lower the shield. When it is lowered, you can wield a weapon with that hand. When it is activated, you can manipulate and carry objects, but cannot make attacks with that arm. ",
abilities: [

{
name: "Quick compartment",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You gain a compartment on one of your Augmented Armor’s forearms or thighs that fits 1 ft 3 of materials. You can spend 1 AP to stow items in it. Someone breaking into the compartment must make a DC 20 AWR check to find the compartment and a DC 20 STR/Applied Force or INT/ Lockpicking check to open it.",
abilities: [
{
name: "Launcher",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You double the range of your thrown items.",
abilities: [

{
name: "Grappler",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "If you have Line of Effect, you can spend 3 AP to fire a free hand at a creature within 15 ft of you, attacking their REFwith your STR or DEX. If it hits and the target is your Size or lower, you can pull the target to you as part of the same attack. If it is larger, you can pull yourself to it as part of the same attack.",
abilities: [

{
name: "Arcane Booster",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You can spend 1 AP to gain +10 ft to your speed until the end of your turn.",
abilities: [
{
name: "",
description: "",
},
{
name: "Elemental Absorption",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You can spend 1 Reactive AP to reduce elemental damage by 1d6. You can unleash this on your next attack, dealing additional damage equal to the amount of damage this feature absorbed.",
abilities: [

{
name: "Adaptive Armor",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "If you suffer a crit, you take damage as usual, then you gain Resist X against the type of damage you took until the start of your next turn, where X = your INT",
abilities: [
{
name: "",
description: "",
    },
{
name: "Install Weapon",
prerequisites: ["Tinkerer","Augmentor"],
flavorTest: "You gain the Engage ability",
abilities: [
{
name: "Engage",
description: "By spending 2 AP, you can impose the Engaged condition on a creature within 5 ft of you. This lasts until the start of your next turn.",
},
{
name: "Augmentor II",
prerequisites: ["Tinkerer","Augmentor 5"],
flavorTest: "Your Augmented Armor gains +1 to all defenses and your choice of Resist 2 against blunt, cold, fire, lightning, or sharp.",
abilities: [

{
name: "Audio Dampeners",
prerequisites: ["Tinkerer","Augmentor II"],
flavorTest: "You may spend 2 AP to become immune to sonic damage and effects that require you to hear until the beginning of your next turn.",
abilities: [

{
name: "Grappler II",
prerequisites: ["Tinkerer","Augmentor II","Grappler"],
flavorTest: "Your Grappler attack gains +10 ft range, and if you hit, the target is immediately Grappled.",
abilities: [
{
name: "Sentry Armor II",
prerequisites: ["Tinkerer","Augmentor II","Sentry Armor"],
flavorTest: "You can now enhance your Engage ability, engaging one additional target within 5 ft of you for each additional 1 AP you spend on the ability.",
abilities: [

{
name: "Enhanced Quick Compartment",
prerequisites: ["Tinkerer","Augmentor II","Quick Compartment"],
flavorTest: "Your quick compartment may now store liquid, and can be climate controlled between 50 and 120 ° F (Named for Doctor Franklin Fahrenheit, who discovered the Coldstone and Fireflecks used in this invention).",
abilities: [

{
name: "Install Mini Turret",
prerequisites: ["Tinkerer","Augmentor II",],
flavorTest: "By spending 1 hour working on your armor, you can install an automated crossbow turret on your shoulder. This crossbow has a 60 ft range and deals 1d4 sharp damage on a hit. When you specify, it fires at a target you can see with Line of Effect at the end of each of your turns while you have ammunition.",
abilities: [

{
name: "Install Weapon II",
prerequisites: ["Tinkerer","Augmentor II","Install Weapon"],
flavorTest: "You can install a second weapon into your armor. Gain the ability to freely switch between weapons.",
abilities: [

{
name: "Power Slam",
prerequisites: ["Tinkerer","Augmentor II",],
flavorTest: "You gain the Power Slam ability.",
abilities: [
{
name: "Power Slam",
description: "You may spend 4 AP to slam a weapon into the ground, attacking all creatures within 5 ft of you. Make a weapon attack vs the FORT of each creature in range. On a hit, creatures take damage from the weapon as usual and are also pushed 5 ft directly away from you.",
},
{
name: "Hoverjet",
prerequisites: ["Tinkerer","Augmentor","Augmentor II",],
flavorTest: "Spend 1 AP or 1 Reactive AP to gain the ability to Hover for 1 minute. You can choose to slowly descend during the duration. (3/Rest)",
abilities: [

{
name: "Augmentor III",
prerequisites: ["Tinkerer","Augmentor","Augmentor II","Augmentor 10"],
flavorTest: "Your Augmented Armor gains +1 to all defenses and your choice of Resist 2 against blunt, cold, fire, lightning, or sharp.",
abilities: [
{
name: "Energy Transfer",
prerequisites: ["Tinkerer","Augmentor","Augmentor III",],
flavorTest: "You may spend 3 AP to transfer all conditions from a creature you are grappling to yourself, except for Grappled and Restrained.",
abilities: [

{
name: "Arcane Booster II",
prerequisites: ["Tinkerer","Augmentor","Augmentor III","Arcane Booster"],
flavorTest: "You gain a Fly Speed equal to your speed for 1 minute. (3/ Rest)",
abilities: [

{
    
name: "Heroic Landing",
prerequisites: ["Tinkerer","Augmentor","Augmentor III"],
flavorTest: "You no longer take falling damage when falling less than 30 ft. If you fall at least 20 ft, you can attack all creatures within a 10 ft radius of where you land with your STR or DEX vs their REF. If you hit, they take 1d8 blunt damage and are knocked Prone.",
abilities: [

{
name: "Cradle",
prerequisites: ["Tinkerer","Augmentor","Augmentor III"],
flavorTest: "You may cover an ally in your Augmented Armor once per round. Choose an ally within 5 ft of you who is being attacked by an attacker you can see. You can take the damage in their place by spending 1 Reactive AP. Regain the ability to do this at the beginning of your next turn. The triggering attack automatically hits you.",
abilities: [

},
{
name: "Cradle II",
prerequisites: ["Tinkerer","Augmentor","Augmentor III","Cradle, Grappler"]
flavorTest: "You may now use your Grappler to pull an ally to you. When an ally within reach of your Grappler ability would take damage, you may spend 1 Reactive AP to pull them to an unoccupied space within 5 ft of you and take the damage for them."
abilities: [

{
name: "Augmentor Extraordinaire",
prerequisites: ["Tinkerer","Augmentor"," Capstone","Augmentor 14"],
flavorTest: "Your augmented armor has become an extension of your person. You have perfected it and know every nook and cranny, every quirk and crack. Gain +1 to all of your defenses. Crits no longer automatically hit you, and if they do hit, they only deal normal damage.",
abilities: [
{
name: "Level 30",
description: "Gain the Intuitive Defenses ability.",
},
{
name: "ntuitive Defenses",
description: " When a creature attacks you, you may spend 2 Reactive AP to lower one of your defenses by X, increasing another one of your defenses by X. Your defenses remain altered in this way until the start of your next turn. (3/Recoup)",
},


},
{
name: "Inventor",
description: "",,
talents: [,
{
name: "Inventor",
prerequisites: ["Tinkere", "Inventor","Tinkerer Entry"],
flavorTest: "You can make a variety of unique nonmagical items assuming you have the time and materials. You learn how to make five items from the Tinkering Item List, and can carry up to five items of this nature at a time. Special Arrows & Bolts do not count toward this total. Only you may use items that you create from the Tinkering Item list. For every 2 hours you spend tinkering, make an INT check using a Crafting skill with your Tinker’s Tools, and note the results. Tinkering checks are cumulative. For example, if you roll a 11 on day 1, and a 19 on day two, that is considered 30. If you have access to a workshop, the Tinkering Check total required is halved. Your first 2 hours of tinkering a day can be a part of Taking a Rest. See the Tinkering Item List for a list of items, and note that your MC may allow additional items!",
abilities: [

{
name: "Salvage",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "You can break down nonmagical items for materials and use them for other items or their currency cost whenever you spend time tinkering. Most items can be broken down as a part of the time you spend tinkering on other inventions. A particularly complex or large item may have a tinkering cost, determined by your MC. If you are breaking down items for currency, you can find someone to purchase the materials for 80% of the item’s value, regardless of the item’s state of repair, anywhere there is trade of raw materials. Salvaged items are unrecognizable, which means you can sell them even if the item itself may have baggage that would make it undesirable, such as being believed to be haunted or stolen. If you salvage items to use for Tinkering parts, take the sc value of the item you are salvaging, and reduce your Tinkering check requirement for whatever you’re crafting by that amount. ",
abilities: [

{
name: "Crafter",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "Every time you take a level in the Inventor track, gain +2 in a Crafting skill of your choice. This works retroactively, granting you +2 for all Inventor track talents you have already taken.",
abilities: [

{
name: "Repairs",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "Exhaustible items with more than 1 use take half the Tinkering to create after you’ve created them once.",
abilities: [

{
name: "Quick Craft",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "Whenever you craft a single-use item, you can create a second item of the same type by adding +10 to the Tinkering requirement of the first item.",
abilities: [

{
name: "Additional Blueprints",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "You learn two new blueprints from the Tinkering Item List.",
abilities: [

{
name: "Space Efficiency",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "You can carry five additional tinkering items.",
abilities: [

{
name: "Safety Precaution",
prerequisites: ["Tinkere", "Inventor",],
flavorTest: "You can now add +20 to the Tinkering required in order to craft Tinkering items that others can use.",
abilities: [

{
name: "Inventor",
prerequisites: ["Tinkere", "Inventor","Inventor 5","Augmentor"],
flavorTest: "Choose a magical item, weapon, or piece of armor that you possess and that requires 25 or fewer Essence Points and Salvage it. You learn how to add that item’s abilities, or “Enchantments” for the purpose of the abilities in the Tinkering track, to your Masterwork. You can add or change enchantments to your Masterwork by spending 2 hours Tinkering with it. A single magical item, weapon, or armor piece counts as one Enchantment, even if it has multiple abilities. You can know a number of Enchantments equal to your INT, and can have 2 Enchantments active on your Masterwork at one time. You must also observe the typical rules for Essence Points (Chapter 6, “Magic Items”). However, your Masterwork uses only half the Essence Points you have imbued onto it through Masterwork Enchantments. For example, if you have three Enchantments with 80 total Essence Points, your Masterwork uses 40 of your Essence Points. Weapons can be improved with Item or Weapon Enchantments. Armor can be improved with Item or Armor enchantments or improvements. Items can be improved only with Item enchantments or improvements. If you change your Masterwork, it loses this improvement until you add it to your Masterwork again.",
abilities: [

{
name: "Inventor II",
prerequisites: ["Tinkere", "Inventor","Breakthrough"],
flavorTest: "You can now make a Tinker’s Tools check every hour, instead of every 2 hours. ",
abilities: [

{
name: "Munitions Focus",
prerequisites: ["Tinkere", "Inventor","Breakthrough"],
flavorTest: "Whenever you use your Tinkering to create ammunition, if you have fewer than 20 special arrows or bolts, you can now create your first 20 arrows or bolts in the time it would take you to make one. Special Arrows or Bolts beyond 20 take the normal Tinkering. Additionally, you can make up to 40 mundane arrows or bolts without any chance of failure and minimal components (including broken bolts or arrows) by spending at least 1 hour tinkering.",
abilities: [

{
name: "Armor Focus",
prerequisites: ["Tinkere", "Inventor","Breakthrough"],
flavorTest: "If your Masterwork is Armor, it gains an additional +1 to all physical defenses.",
abilities: [

{
name: "Armor Alchemist",
prerequisites: ["Tinkere", "Inventor","Breakthrough"],
flavorTest: "Your armor sprays cost half the Tinkering (minimum 10).",
abilities: [
{
name: "Weapon Focus
prerequisites: ["Tinkere", "Inventor","Breakthrough"],
flavorTest: "If your Masterwork is a Weapon, it gains an additional +1 to hit and +1 to damage",
abilities: [

{
name: "Soul Of The Masterwork",
prerequisites: ["Tinkere", "Inventor","Breakthrough"],
flavorTest: "The Essence point cap for Masterwork Enchantment increases to 33.",
abilities: [
},
{
name: "Soul Of The Masterwork",
prerequisites: ["Tinkere", "Inventor","Soul of the Masterwork"],
flavorTest: "The Essence point cap for Masterwork Enchantment increases to 50.",
abilities: [
},
{
name: "Breakthrough II",
prerequisites: ["Tinkere", "Inventor","Breakthrough, Inventor 10"],
flavorTest: "You can now learn three Enchantments from salvaging magical items. If you would learn beyond your limit, you can choose which one to forget, but your Masterwork would lose that enchantment. Your Masterwork can now have a number of enchantments active at one time equal to 1/2 your INT. Changing enchantments on your Masterwork only takes 1 hour of Tinkering.These enchantments cannot stack if they are exactly the same.For example if you salvage two items that give + 1 to hit, you can only enchant your Masterwork with +1 to hit once.But if you then salvage an item that gives + 1 to hit and + 1d6 fire damage, you can enchant your Masterwork with +2 to hit and 1d6 extra fire damage.",
abilities: [
},
{
name: "Enchantment Blueprints",
prerequisites: ["Tinkere", "Inventor","Breakthrough II"],
flavorTest: "You can learn an additional Masterwork Enchantment",
abilities: [
},
{
name: "Quick Confic",
prerequisites: ["Tinkere", "Inventor","Breakthrough II"],
flavorTest: "You can change your Masterwork Enchantment configuration as a part of a Recoup.",
abilities: [
},
{
name: "Armor Focus II",
prerequisites: ["Tinkere", "Inventor","Breakthrough II"],
flavorTest: "If your Masterwork is armor, it gains an additional +1 to all physical and mental defenses.",
abilities: [
},
{
name: "Consumable Mastery",
prerequisites: ["Tinkere", "Inventor","Breakthrough II"],
flavorTest: "Choose an exhaustible Tinkering item with more than one use. You now recharge that item on Taking a Rest without a required Tinkering check.",
abilities: [
},
{
name: "Weapon Focus",
prerequisites: ["Tinkere", "Inventor","Breakthrough II"],
flavorTest: "If your Masterwork is a weapon, mods installed on your Masterwork no longer count towards your limit of carried Tinkering items.",
abilities: [
},
{
name: "Master Inventor",
prerequisites: ["Tinkere", "Inventor"," Capstone","Inventor 14"],
flavorTest: "You are a renowned inventor and tinkerer whose creations are the subject of song and gossip. Many young minds seek to enter apprenticeship with you and the leading minds in engineering and education hold you in utmost regard. Your Masterwork is now a creation of some renown. It can now hold three Masterwork Enchantments. If it is a weapon, it gains a bonus to damage rolls equal to ½ your INT.",
abilities: [

{
name: "Level 30",
description: "The final cap on your INT increases from 12 to 14.",

},
stacks: [
{
name: "Magitechnician",
description: "",,
talents: [,
{
name: "Arcane Artificer",
prerequisites: ["Tinkerer","Magitechnician","Tinkerer Entry"],
flavorTest: "You gain the Student of the Arcane talent if you do not already have it. Each time you level up and spend your talent point on a talent in the Magitechnician stack, you gain +5 SP and +1 Arcane Power. Magitechnicians cast spells as if they were devices, and the caster can choose how they describe the spells being cast. Perhaps a Fireball is launched from a firearm-like device, Fly might be a jetpack, Raise Skeleton could be a mechanical backpack puppeteering bones, and Living Letter might be a tiny drone. This has no mechanical effect other than when you trigger Backlash as a Magitechnician. In this case, you do not take damage or end your turn, but you lose access to the spell that triggered Backlash until you Take a Rest, as the contraption needs to be repaired. INT is your magic attribute.",
abilities: [

{
name: "Golemancer",
prerequisites: ["Tinkerer","Magitechnician","Arcane Artificer"],
flavorTest: "You gain the Create Lesser Golem spell if you do not already know it. If you do not have a Lesser Golem active, casting this spell is free for you and the created golem is permanent.It can be made of Metal or Stone as its Primary Material, and it gains +2 STR. It is created by the Arcane Source. It gains the Mend and Minor Conjuration cantrips.",
abilities: [

{
name: "Spell Storing",
prerequisites: ["Tinkerer","Magitechnician","Golemancer"],
flavorTest: "You create an object - such as a bracelet, locket, or ring, that stores spells for you. When creating a mote via Delay Spell, you can put the spell into the Spell Storing object and its duration becomes 24 hours. Your motes cannot be released prematurely without the condition being triggered, and after the duration they dissipate harmlessly.",
abilities: [

{
name: "Empowered Mend",
prerequisites: ["Tinkerer","Magitechnician","Spell Storing"],
flavorTest: "You are particularly skilled with the Mend cantrip. You now need only 80% of the pieces or components present for Mend to work, and you can increase the casting time to gain the equivalent of more Arcane Power. When casting Mend, act as though you have 1 additional Arcane Power for every additional 30 minutes you spend casting.",
abilities: [

{
name: "Magitechnician",
prerequisites: ["Tinkerer","Magitechnician","Empowered Mind"],
flavorTest: "When you finish Taking a Rest, you can prepare three spells as if they were devices. Roll 1d20 per spell to determine your spell’s bonus, and then spend the required SP to cast the spell to prepare the Spell Devices.The first time you cast a spell prepared in this way, it costs 0 SP, as you’ve already spent it preparing the device. After the first time, when you cast a spell using this feature, roll 1d20 and gain the same effects from the table (potentially reducing the spell’s SPC). You always spend AP and follow conjuring rules as normal. These prepared Spell Devices do not trigger backlash the first time you would trigger backlash. If they trigger backlash a second time, you lose access to the spell.",
abilities: [

{
name: "Cantrip Cannon",
prerequisites: ["Tinkerer","Magitechnician",],
flavorTest: "You create a permanent spell device that fires cantrips. Choose Beam of Fire, Frostbite, or Grave Whisper. This device cannot trigger backlash. You may now use your total Character Level for this cantrip’s power instead of your Arcane Power.",
abilities: [
],    
},
{
name: "Golemancer II",
prerequisites: ["Tinkerer","Magitechnician","Cantrip Cannon"],
flavorTest: "Your Golem gains a compartment that functions as a Dimensional Case (see the Tinkering Item table). This and items inside are shielded from Divining magic. It takes a creature a DC 20 AWR check to find the compartment and a DC 20 STR/Applied Force or INT/Lockpicking check to enter against the Golem’s will.",
abilities: [

{
name: "Spell Storing II",
prerequisites: ["Tinkerer","Magitechnician","Golemancer II"],
flavorTest: "You can create a second Spell Storing object.",
abilities: [
],    
},
{
name: "Magical Tinkering",
prerequisites: ["Tinkerer","Magitechnician","Spell Storing II"],
flavorTest: "When you use your Magitechnician talent after Taking a Rest, the first time you roll a 1 or 2 on your d20 rolls, you may reroll that d20 and use the second result.",
abilities: [

{
name: "Safer Devices",
prerequisites: ["Tinkerer","Magitechnician","Magical Tinkering"],
flavorTest: "Your Spell Devices created by the Magitechnician talent can no longer trigger Backlash.",
abilities: [
],    
name: "Magitechnician II",
prerequisites: ["Tinkerer","Magitechnician","Safer Devices"],
flavorTest: "Your Spell Devices created by the Magitechnician talent are no longer considered magical.",
abilities: [
],    
},
{
name: "Cantrip Cannon II",
prerequisites: ["Tinkerer","Magitechnician","Magitechnician II"],
flavorTest: "When you deal damage with your Cantrip Cannon, add your INT to the damage.",
abilities: [
],    
name: "Flash Of Genius",
prerequisites: ["Tinkerer","Magitechnician","Cantrip Cannon II"],
flavorTest: "When one of your mental defenses is attacked, you can spend 5 SP to add ½ your INT to all of your mental defenses until the beginning of your next turn.",
abilities: [
],     
name: "Master Magitechnicaian",
prerequisites: ["Tinkerer","Magitechnician"," Capstone","Flash of Genius"],
flavorTest: "You master the art of arcane tinkering, bending the rules of where magic ends and machinery begins. You gain a special permanent Spell Device with a spell that costs 10 SP or fewer. That spell permanently has SPC 0 for you.",
abilities: [
],    
},  
{
name: "Level 30",
description: "Gain another special permanent Spell Device with a spell that costs 16 SP or fewer. That spell permanently has SPC 0 for you.",
},
},
name: "Troubadour",
shortDescription: "Whether a singer, storyteller, poet, or visual performer, troubadours travel from court to court making their name as masterful performers.",
quote: {
phrase: "Tales reveal truth obscured by reality. I only seek for my tales to ignite dreams and to inspire hope.I carry the stories of the world, spreading inspiration and enchantment wherever I roam.",
name: "Flanagan Meadowbrook",
title: "renowned lorist",
},
longDescription: "As far back as you can remember, you have always had a deep love for music, storytelling, poetry, and mythology. You had an equally strong desire to connect with others through the bonds of music and artistic expression.Even as a youngster, you were able to captivate audiences of all ages with your colorful and flamboyant performances. Through diligent practice, you have now mastered one or more methods of performance, be it song or dance or poem. Urged by intense wanderlust and the desire to see the world in all its splendor, you travel far and wide, seeking to collect more and grander stories wherever the path takes you. What is your standard performance routine? Do you typically sing, play an instrument, dance, or do all three at once? Maybe you prefer to recite or improvise poetry for your audience, or maybe you perform parlor tricks designed to delight and instill a sense of wonder.Are you inspired by whimsical stories with happy endings, by heart- wrenching tragedies, or by tomes of history ? How do these inspirations appear in your performances ? ",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "When you take this talent, you gain the following abilities.",
abilities: [
{
name: "Stanzas",
description: " Learn three Stanzas of your choice.",
},
{
name: "Setup",
description: "During an allied creature’s turn, if they are within 40 ft of you, you may spend 1 Reactive AP that you have. That ally gains that AP. (1/Round)",
}
{
name: "Battle Song",
description: ". When you roll Initiative, roll 1d4. Add it to the Initiative of any creature of your choice.",
},
{
name: "Skilled",
description: "Gain +4 Skill Points to spend on any skills of your choice. You also gain one inexpensive instrument or prop to enhance your performances (such as a flute, mask, or colorful silk handkerchiefs).",
}
]

},
stacks: [
{
name: "Encore ",
description: "",,
talents: [,
{
name: "Troubadour's Support",
prerequisites: ["Troubadour","Encore"," Troubadour Entry"],
flavorTest: "When you end your turn with 0 AP, gain 1 special Support AP that acts as Reactive AP. You lose this AP at the start of your next turn. You can only have one source of Support AP. If you gain a second source of special AP, choose whether you keep this source or your new source.",
abilities: [

{
name: "Battle Drum",
prerequisites: ["Troubadour","Encore","Troubadour’s Support"],
flavorTest: "When you roll Initiative, you may swap your Initiative roll with one of your allies.",
abilities: [

{
name: "Smooth tongue",
prerequisites: ["Troubadour", "Encore","Jester","Prerequisites: Motley Wardrobe or Battle Drum Gain +4 Skill Points, which you can spend on skills with the Performance or Observation tags. You can always find food lodging for free in exchange for performances."],
flavorTest: "",
abilities: [

{
name: "Setup II",
prerequisites: ["Troubadour","Encore","Jester","Smooth Tongue"],
flavorTest: "You may now use Setup once on each ally’s turn provided you have the Reactive AP needed.",
abilities: [

{
name: "Troubadour's Support II",
prerequisites: ["Troubadour", "Encore","Jester","Setup II"],
flavorTest: "Troubadour’s Support gives you 2 Reactive AP.",
abilities: [

{
name: "Battle Drum II",
prerequisites: ["Troubadour","Encore","Jester","Troubadour’s Support II"],
flavorTest: "When you use Battle Drum, you may also swap two of your allies’ Initiative rolls. Choose one creature whose Initiative you changed; they get +your CHA to their Initiative.",
abilities: [

{
name: "Accelerando",
prerequisites: ["Troubadour", "Encore", "Jester", "Battle Drum II"],
flavorTest: "Gain a special Stanza, Accelerando.",
abilities: [
{
name: "Accelerando",
description: "One ally within range gains +1 AP at the start of their turn and +5 ft speed when they spend AP to move.",
},
{
name: "Crescendo",
prerequisites: ["Troubadour","Encore"," Jester","Battle Drum II"],
flavorTest: "Gain a special Stanza, Crescendo.",
abilities: [
{
name: "Crescendo",
description: "You or an ally within range deals +1d4 damage when they hit with weapon attacks.",
},
{
name: "Troubadour's support III",
prerequisites: ["Troubadour","Encore","Jester","Accelerando or Crescendo"],
flavorTest: "Troubadour’s Support gives you 3 Support AP.",
abilities: [

{
name: "Setup III",
prerequisites: ["Troubadour","Encore","Jester","Troubadour’s Support III"],
flavorTest: "You can expend X Reactive AP to give an ally X AP. The range of Setup increases to 80 ft.",
abilities: [

{
name: "Accelerando II",
prerequisites: ["Troubadour", "Encore","Jester","Setup III","Accelerando"],
flavorTest: "Accelerando applies to two allies. (2/Recoup)",
abilities: [

{
name: "Crescendo II",
prerequisites: ["Troubadour","Encore","Jester","Setup III","Crescendo"],
flavorTest: "Crescendo applies to two allies. (2/Recoup)",
abilities: [

{
name: "Battle Stanza",
prerequisites: ["Troubadour","Encore","Jester","Accelerando II or Crescendo II"],
flavorTest: "Pick two Stanzas you know with the scorn tag. Their rank 1 iterations combine and become your Battle Stanza. When you activate your Battle Stanza for 1 AP, make one scorn roll; if you hit, apply both effects. ",
abilities: [

{
name: "Accelerando III",
prerequisites: ["Troubadour", "Encore","Jester","Battle Stanza","Accelerando II"],
flavorTest: "Accelerando II becomes: Increase speed by 10 ft, and becomes 2/Catch Breath.",
abilities: [

{
name: "Crescendo III",
prerequisites: ["Troubadour","Encore"," Jester","Battle Stanza","Crescendo II",],
flavorTest: "Crescendo II becomes: Increase damage by 1d6, and becomes 2/Catch Breath.",
abilities: [

{
name: "Battle Drum III",
prerequisites: ["Troubadour", "Encore","Jester","Accelerando III or Crescendo III"],
flavorTest: "When you use Battle Drum, you can pick a creature within 120 ft. Attack their ANT. If you hit, you can swap their Initiative with one of your allies’. (2/Rest)",
abilities: [

{
name: "Battle Stanza II",
prerequisites: ["Troubadour", "Encore", "Jester","Battle Drum III"],
flavorTest: "When you use your Battle Stanza, you can apply both effects as though they were Stanza level 2. (2/Recoup)",
abilities: [

{
name: "Anthem",
prerequisites: ["Troubadour", "Encore","Capstone","Battle Stanza II"],
flavorTest: "You are an unrivaled musician, orator, and performer. You are renowned as an expert commander on the field of battle, inspiring your comrades through song or word. You gain the Courage Anthem and Battle Anthem abilities.",
abilities: [
{
name: "Courage Anthem",
description: "When you roll Initiative, you and any allied creature whose Initiative you manipulated cannot be Charmed or Frightened unless the target is also Bloodied. (1/Rest)",
},
{
name: "Battle Anthem",
description: "When reduced to 0 HP, you may start your Battle Anthem. It lasts for a number of rounds equal to your Troubadour level. When you start your turn, if you spent at least 1 AP on Stanzas on your last turn, you may use aStanza’s rank 1 ability that you know for 0 AP. Furthermore, if you spend at least 2 AP on Stanzas on your current turn, you cannot receive healing until the end of your next turn, but also do not die until the end of your next turn, even if you reach 8 Death Points. If you reach 8 Death Points during your Battle Anthem, you cannot be healed and you die when your Battle Anthem ends, but you can be resurrected.",

},
stacks: [
{
name: "Jester",
description: "",,
talents: [,
{
name: "Mockery",
prerequisites: ["Troubadour","Jester","Troubadour Entry"],
flavorTest: "Gain the Mockery ability.",
abilities: [
{
name: "Mockery",
description: "By spending 3 AP, make a CHA attack vs the ANT of a target within 40 ft of you. If you hit, then all creatures that were Charmed by the target are no longer Charmed. Further, anyone who was not Charmed by the target looks upon the target with a mixture of embarrassment and disgust. If you miss a target, you can’t attack that target with this ability again until after 10 mins have passed. ",
},

name: "Motley Wardrobe",
prerequisites: ["Troubadour","Jester","Mockery"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Performance or Influence tags. Gain a jester’s motley, along with two other disguises of your choice.",
abilities: [

{
name: "Smooth Tongue",
prerequisites: ["Troubadour","Encore","Jester","Motley Wardrobe or Battle Drum"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Performance or Observation tags. You can always find food and lodgings for free in exchange for performances. ",
abilities: [

{
name: "Clown",
prerequisites: ["Troubadour","Jester","Smooth Tongue"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics or Performance tags. Gain 1 Goodwill with commoners. (1/Week)",
abilities: [

{
name: "Fool",
prerequisites: ["Troubadour","Jester","Smooth Tongue"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Observation and Subterfuge tags. Gain 1 Goodwill with nobles and elite society. (1/Week)",
abilities: [

{
name: "Obfusacate",
prerequisites: ["Troubadour","Jester","Clown or Fool"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Knowledge tags. If you find physical evidence that might be incriminating, you can spend 30 minutes destroying it beyond any hope of being useful or viable. (1/Rest)",
abilities: [
},
{
name: "Imitate",
prerequisites: ["Troubadour","Jester","Clown or Fool"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Influence tags. Given 1 hour and 50 sp, you can make an excellent disguise that lasts for 4 hours before the makeup begins to run and the props begin to fray. Double Skill Points in Disguising, Evading, and Deceiving for the duration. (1/ Rest)",
abilities: [
},
{
name: "Jeer",
prerequisites: ["Troubadour","Jester","Obfuscate or Imitate"],
flavorTest: "When Mockery hits a target that is not Bloodied, deal 1d8 psychic damage. Creatures that witness this do not view this action as physically combative.",
abilities: [

{
name: "Many Hats",
prerequisites: ["Troubadour","Jester","Jeer"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the performance and influence tags. Given 1 week in a settled area, you can respec your talents within this track when you Take a Rest. Once you do, you cannot use this ability again until you are in a new settled area.",
abilities: [
},
{
name: "Clown II",
prerequisites: ["Troubadour","Jester","Many Hats","Clown"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics or Performance tags.Gain 1 additional Goodwill with commoners. (1/Week)",
abilities: [
},
{
name: "Fool II",
prerequisites: ["Troubadour", "Jester","Hats","Fool"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Observation and Subterfuge tags. Gain 1 Goodwill with nobles and elites. (1/Week)",
abilities: [

{
name: "Obfuscate II",
prerequisites: ["Troubadour","Jester"," Clown II or Fool II", "Obfuscate"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Knowledge tags.You can spend 30 additional minutes to change the evidence slightly, causing it to incriminate someone else. This costs 100 sp and can be done 1/Week.",
abilities: [
},
{
name: "Imitate II",
prerequisites: ["Troubadour","Jester","Clown II or Fool II", "Imitate"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Subterfuge and Influence tags. Given 1 hour and 200 sp, you can make a supreme disguise that lasts for 4 hours. Double Skill Points in Disguising, Evading, and Deceiving for the duration and you do not need to roll if you do mundane activity befitting the costume (such as disguising yourself as a guard and walking into the city watch’s private lounge). (1/Week)",
abilities: [
},
{
name: "Mockery II",
prerequisites: ["Troubadour","Jester","Obfuscate II or Imitate II"],
flavorTest: "You only need to wait 1 minute, instead of 10 minutes, after missing with Mockery.",
abilities: [
},
{
name: "Jeer II",
prerequisites: ["Troubadour", "Jester","Mockery II"],
flavorTest: "If a target takes psychic damage from your Jeer and becomes Bloodied as a result, it loses 1 Goodwill and will attempt to completely withdraw from the social situation. (The target will not withdraw from active combat.)",
abilities: [
},
{
name: "Clown III",
prerequisites: ["Troubadour","Jester","Jeer II", "Clown II"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Acrobatics or Performance tags. You cannot have negative Goodwill with commoners.",
abilities: [
},
{
name: "Fool III",
prerequisites: ["Troubadour","Jester","Jeer II", "Fool II"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Observation and Subterfuge tags. You cannot have negative Goodwill with noble society.",
abilities: [
},
{
name: "Imitate III",
prerequisites: ["Troubadour","Jester","Clown III or Fool III", "Imitate II"],
flavorTest: "Gain +6 Skill Points, which you can spend on skills with the Subterfuge and Influence tags.You can use your disguise 1/Recoup and your supreme disguise 1/Rest.",
abilities: [
},
{
name: "Mockery III",
prerequisites: ["Troubadour","Jester","Obfuscate III or Imitate III"],
flavorTest: "When a creature loses Goodwill as a result of being Mocked, it can no longer Charm or Enthrall any new targets for 1 hour. You can use Mockery indefinitely with no cooldown, even if you miss a target.",
abilities: [
{
name: "Cruel JApe",
prerequisites: ["Troubadour", "Jester","Capstone","Mockery III"],
flavorTest: "You wear disguises and identities fluidly, and you can ruthlessly use words as barbs.Gain +8 Skill Points, which you can spend on skills with the Influence, Subterfuge, Observation, or Performance tags. Gain the Cruel Jape ability.",
abilities: [
{
name: "Cruel Jape",
description: "When you Bloody someone with Jeer, you can reduce them to 0 Goodwill. If they were at 0, reduce them to -5 instead. (1/Rest)",
},
{
name: "Level 30",
description: "Cruel Jape becomes 1/Recoup, but can only +target a specific creature 1/Rest.",
},

stacks: [
{
name: "Legend Keeper",
description: "",,
talents: [,
{
name: "Book Of Legends",
prerequisites: ["Troubadour", "Legend Keeper","Troubadour Entry"],
flavorTest: "You have a special tome, your Book of Legends. Your Book of Legends might be a faerie tale, a book of epic poetry from the distant past, or the scrawled and esoteric ramblings of a madman. Whatever the case, the tome is also magical and cannot be destroyed or damaged by mundane means. Gain the Summon Character ability.",
abilities: [
{
name: "Summon Character",
description: "You can spend 3 AP to magically call forth a spirit that takes the form of a character from this tome. This creature has the stats of any beast or NPC of Monster Level (ML) 2 or lower. A Summoned Character loses any magic from the Five Sources that its stat block would normally allow. It is a corporeal spirit and possesses any equipment that the stat block would normally have. This equipment is corporeal while the creature is holding it or using it in a thrown or ranged attack, but the equipment fades into nothingness if any other creature tries to use it. The character lasts for 10 minutes, or until dismissed (by spending 1 AP on your turn), or until reduced to 0 HP. You can summon such creatures 2/Rest. This talent gives you +5 SP and +1 Arcane or Psionic Power (your choice), but does not grant you spells.",
},
{
name: "Figure Of Legend",
prerequisites: ["Troubadour", "Legend Keeper","Mythic Tome"],
flavorTest: "Gain the Summon Protagonist ability, which lets you summon more powerful creatures. (1/Rest)",
abilities: [
{
name: "Summon Protagonist",
description: "You can summon a Figure of Legend (below), or other options granted by talents you take later in this stack.",
},
{
name: "Figure of Legend",
description: "This is an NPC of a level that you can summon, who also gains the full benefits of one level 1 lineage of your choice and one rank 1 profession of your choice. A Summoned Character loses any magic from the Five Sources that its stat block would normally allow.",
},

name: "Written tradition",
prerequisites: ["Troubadour", "Legend Keeper",": 2 talents in one of the following tracks: Comedy,Tragedy, Creature Compendium, Faerie Tale, Book of Souls,Book of the Damned, or Necronomicon"],
flavorTest: "Gain +4 Skill Points, which you can spend on skills with the Knowledge tag. Gain the Written Tradition ability.",
abilities: [
{
name: "Written Tradition",
description: " Regain one use of your Summon Character when you Recoup. (1/Rest)",
},
{
name: "Written Tradition II",
prerequisites: ["Troubadour", "Legend Keeper"," 3 talents in one of the following tracks: Comedy, Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, or Necronomicon."],
flavorTest: "Summon Character becomes ½ INT/Rest.",
abilities: [

{
name: "Written Tradition III",
prerequisites: ["Troubadour", "Legend Keeper","Written Tradition II"],
flavorTest: "Written Tradition becomes: Regain 2 uses of your Summon Character when you Recoup. (1/Rest) Summon Protagonist becomes 2/Rest.",
abilities: [

{
name: "Plot Twist",
prerequisites: ["Troubadour", "Legend Keeper"," 6 talents in one of the following tracks: Comedy, Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, or Necronomicon"],
flavorTest: "Choose one of the six books that you did NOT take. Gain that book’s first talent.",
abilities: [

{
name: "Story For Every Occasion",
prerequisites: ["Troubadour", "Legend Keeper","7 talents in one of the following tracks: Comedy, Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, or Necronomicon"],
flavorTest: "Gain +8 Skill Points, which you can spend on skills with the Knowledge tag.When you roll Initiative and have no uses of Summon Character left, you gain one special use of it, which you can use to summon a single NPC or Beast of ML 1 or lower.",
abilities: [

{
name: "Library Of Legends",
prerequisites: ["Troubadour", "Legend Keeper","Capstone"," Story for Every Occasion"],
flavorTest: "You are heralded the world over as a legendary and captivating storyteller. Gain +8 Skill Points, which you can spend on any skill. Your Summon Character ability can summon creatures of 1 ML higher than you previously could. You can reassign your Legend Keeper talents by swapping out which book you can magically draw creatures from. (1/ Month)",
abilities: [
{
name: "Level 30",
description: "Your Summon Character ability can summon creatures of 2 MLs higher than you previously could.",
},stacks: [
{

name: "Legend Keeper:Comedy",
description: "This defines your Mythic Tome as a Comedy, full of epic heroes and happy endings.",,
talents: [,
{
name: "Comedy",
prerequisites: ["Troubadour", "Legend Keeper", "Comedy,Figure of Legend"],
flavorTest: "Incompatible: Tragedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, Necronomicon When using Figure of Legend, you can summon NPCs of ML 3 or lower. When you do, give them +1 to a physical or mental attribute of your choice, and they magically gain any mundane equipment of your choice.",
abilities: [

{
name: "Comedy II",
prerequisites: ["Troubadour", "Legend Keeper", "Comedy","Comedy"],
flavorTest: "Incompatibilities: Tragedy II, Creature Compendium II, Faerie Tale II, Book of Souls II, Book of the Damned II, Necronomicon II When using Summon Character, you can use Summon Entourage.",
abilities: [
{
name: "Summon Entourage",
description: "Summon 3 NPCs that are all ML 1 or lower. They can be the same or different stat blocks.",
},
{
name: "Comedy III",
prerequisites: ["Troubadour", "Legend Keeper","Comedy","Comedy II, Written Tradition II"],
flavorTest: "When you use Figure of Legend, you may summon NPCs of ML 5 or lower. They gain the benefits of their lineage as if they were PC level 5 (providing them one additional lineage option) and one rank 2 profession.",
abilities: [

{
name: "Comedy IV",
prerequisites: ["Troubadour", "Legend Keeper","Comedy","Comedy III, Written Tradition III"],
flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Performance tags. When you use Figure of Legend, they get 4 total Attribute Points that you can use to enhance their attributes. You cannot put more than 2 into a single attribute. Gain +5 SP and +1 Arcane Power or +1 Psionic Power.",
abilities: [

{
name: "Comedy V",
prerequisites: ["Troubadour", "Legend Keeper","Comedy","Comedy IV"],
flavorTest: "When you use Figure of Legend, they also get 1 talent of your choice (but cannot gain Adept of the Psionic, Disciple of the Divine, Initiate of the Occult, Student of the Arcane or Warden of the Primal).",
abilities: [

{
name: "Comedy VI",
prerequisites: ["Troubadour", "Legend Keeper","Comedy"," Comedy V"],
flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Performance tags. When you use Summon Entourage, they can be ML 2 or lower.",
abilities: [

{
name: "Comedy VII",
prerequisites: ["Troubadour", "Legend Keeper","Comedy","Comedy VI", "Plot Twist"],
flavorTest: "Gain one additional use of Summon Protagonist. When you Summon Hero, they get an additional lineage option (as though PC level 10) and a rank 3 profession. They also get one cantrip, chant, or prayer of your choice.",
abilities: [
{
},

stacks: [
{
name: "Legend keeper",
description: "This defines your Mythic Tome as a Tragedy, full of flawed heroes, ruthless villains, and heart-wrenching loss.",,
talents: [,

{
name: "Tragedy",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy"," Figure of Legend"],
flavorTest: "Incompatibilities: Comedy, Creature Compendium, Faerie Tale, Book of Souls, Book of the Damned, Necronomicon When using Figure of Legend, you can summon NPCs of ML 3 or lower. When you do, give them +1 to a physical or mental attribute, and +6 Skill Points which they can spend on skills with the influence, observation, subterfuge, and survival tags.",
abilities: [

{
name: "Tragedy II",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy"],
flavorTest: "Comedy II, Creature Compendium II, Faerie Tale II, Book of Souls II, Book of the Damned II, Necronomicon II When using Summon Character, you can use Summon Underlings.",
abilities: [
{
name: "Summon Underlings",
description: "Summon 3 NPCs that are all ML 1 or lower. They can be the same or different stat blocks. ",
},
{
name: "Tragedy III",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy"," Tragedy II, Written Tradition"],
flavorTest: "When you use Figure of Legend, you may summon NPCs of ML 5 or lower. They gain the benefits of their Lineage as if they were PC level 5 (providing them one additional lineage option) and one rank 2 profession.",
abilities: [

{
name: "Tragedy IV",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy","Tragedy III", "Written Tradition III"],
flavorTest: "Gain +2 Skill Points, which you can spend on skills with the Influence tag.When you use Figure of Legend, they also get one talent of your choice (but cannot gain Adept of the Psionic, Disciple of the Divine, Initiate of the Occult, Student of the Arcane or Warden of the Primal). Gain +5 SP and +1 Arcane Power or +1 Psionic Power.",
abilities: [

{
name: "Tragedy V",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy","Tragedy IV"],
flavorTest: "When you use Figure of Legend, you can also summon two underlings that the villain controls. These underlings must be NPCs or beasts of ML 1 or lower. (1/Rest)",
abilities: [

{
name: "Tragedy VI",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy","Tragedy V"],
flavorTest: "Gain Diabolical Scheme, which you can use when you use use Figure of Legend.",
abilities: [
{
name: "Diabolical Scheme",
description: "The villain you summon can be an NPC of ML 10 or lower and gains three talents of your choice (but no class talents). It is fully autonomous and can choose whether to work with or against you. At the end of the 10 minutes, if the NPC is not dead, then the NPC becomes permanently corporeal and can pursue its own agenda.",
},
{
name: "Tragedy VII",
prerequisites: ["Troubadour", "Legend Keeper","Tragedy","Tragedy VI","Plot Twist"],
flavorTest: "Gain one additional use of Summon Protagonist. When you summon a Figure of Legend, they can be an NPC of ML 7 or lower; they get an additional lineage option (as though PC level 10) and a rank 3 profession; they also get one cantrip, chant, or prayer of your choice.",
abilities: [
{
name: "",
description: "",
},
stacks: [
{
name: "Lyricist",
description: "By improving your repertoire of music, poetry, or stories, you can achieve a variety of effects in combat to enhance your allies or unnerve your foes.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Lorist",
description: " Stories and research into myths have led you to uncover the secrets of arcane or psionic magic, enhancing your capacity to influence the world around you.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Jester",
description: "Your double-edged comments and savage quips make you equally loved and hated among the common folk and high nobility.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Encore",
description: "Your energetic music or inspirational words rally your allies and help your entire team move with enhanced tactical coordination.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Legend Keeper",
description: "You maintain a powerful book of legends and can summon creatures, heroes, and villains forth from the pages of this book.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
}
]
},
{
name: "Vessel",
shortDescription: "By siphoning power from gods and other planar entities, vessels augment their own souls for monumental power… but at terrible cost.",
quote: {
phrase: "The gods themselves handle their power irresponsibly.Why any would put their faith in such fickle beings is utterly beyond me.If you want something done right, do it yourself.",
name: "Dungrel Razevow",
title: "magic thief",
},
longDescription: "You have always known that something is not right with the world.Deity and demon alike seem utterly concerned with their own plans and care not for the mortal world. In response, you have grown increasingly bitter and have finally taken it upon yourself to rewrite the world as you see fit.By siphoning power from gods and planar entities, you will become a god in your own right, and will act with more justice and care than any before you. Being a vessel is a dangerous affair.You are constantly stealing traces of power from tremendous, unfathomable planar entities.In so doing, you run the risk of their retaliation.How do you recognize your own role in the grand scheme of the cosmos? Do you steal power with a sense of resignation that one day you will be caught and punished, or do you boldly believe that eventually you might become as powerful as a demigod yourself? Do you steal from many different gods to hide your tracks, or do you find yourself returning to the same deity over and over? Would you ever enter into some form of mutual agreement with a deity in exchange for a reliable stream of power, or is this too limiting for your aspirations? What exactly do you hope to achieve from taking godly power into your own hands? If you pursue some kind of abstract moral goal, how will you know when you have achieved it? How much power do you need from the gods in order to achieve this goal, and is there truly no safer way to do so ? Or, maybe you steal from the gods just because you like it.",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
}
]

},
stacks: [
{
name: "Antiessence",
description: "You channel your corrupted Essence into a scouring aura that damages and weakens your foes.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Planar Thievery",
description: "By stealing energy from spells and planar creatures around you, you can enhance your own powers.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Soul Graft",
description: "You use the external energy that you have attached to your soul to enhance your physical stamina far beyond what you could naturally achieve.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Divine Icons",
description: "Through thievery or trickery, you gain access to one or more divine icons, siphoning power from the gods.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
}
]    },
{
name: "Warrior",
shortDescription: "Warriors are the ultimate soldiers and fighters; highly skilled and versatile, they hold their own in nearly any combat scenario.",
quote: {
phrase: "With honor as my shield and courage as my sword, I face each battle with unwavering resolve.I will clear my family’s name, or will die trying.”
",
name: "Belozog Mishkova",
title: "repentant exile",
},
longDescription: "Your path to becoming the warrior you are today was one of absolute discipline.At a young age you were a gifted athlete, playing in children’s sports or getting into trouble pushing back against authority.As you grew, your restlessness matured into a desire to protect those weaker than you.Guided by great blademasters, you learned your way around sword and spear, shield and bow.As a versatile fighter, you are almost equally capable with any weapon and any suit of armor, making you an invaluable soldier.You also have a keen mind for battle tactics and act with disciplined measure as you direct your foes away from your weaker allies. What motivates you when you don your armor? What thoughts stick with you as you draw your weapons and slog into the battlefield? How do your driving goals inform your fighting style? If you are motivated by vengeance, you might be an especially merciless fighter, whereas if you desire to protect your loved ones, you might stay your blade when you have the opportunity to do an enemy in, letting compassion guide your hand as much as justice.Maybe you have no scruples at all and will simply do what is asked of you as long as the coins keep coming.",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
}
]

},
stacks: [
{
name: "Soldier",
description: "You are a proven warrior, capable of adapting to any situation on the battlefield or any weapon in your arsenal.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Archer",
description: "An unparalleled sniper, you can offer covering fire to your allies and can pick off enemies with deadly accuracy.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Protector",
description: "You lead the charge in combat, locking down enemies on the battlefield and helping your allies reposition and retreat when they must.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Commander",
description: ". A master of warfare, you know how and when to issue orders.Help your allies fight as a cohesive team, where the sum is greater than the parts.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
}
]
},
{
name: "Witch",
shortDescription: "Harnessing primal or occult power, witches bond with familiars and can brew various concoctions to bolster their allies.",
quote: {
phrase: "Secrets wait to be embraced in the whispers of primeval spirits.Curiosity never hurt anyone brave enough to go looking.So long as I draw breath and have strength to explore, I will ever look to deepen my understanding of things within our world and things beyond.",
name: "Lyla Greoghal",
title: "potions brewer",
},
longDescription: "Signs that you were somehow different began at an early age.Animals and plants might behave strangely around you, either shying away or seeking to embrace you.Odd weather phenomena seem to follow you about, though perhaps this is coincidence.Whatever the case, the adults in your community noticed these strange behaviors.In your adolescence you felt a growing connection with the dark and strange side of nature, leading you to look for answers on your own.When a coven of witches found you and invited you into their ranks, you began to truly master your powers. Witches often have many hobbies and one or two crafts that they pursue to perfection.What are you most interested in, and what do you fiddle with in your spare time? Does the ephemeral quality of music fascinate you, or are you more inclined to get your hands dirty making pottery or whittling toys? Are you more interested in brewing potions or training your familiar to achieve its maximum potential?",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
}
]

},
stacks: [
{
name: "Dark Hex",
description: "Curate a collection of poppets and cast sympathetic magic on them to extend your range of knowledge and power.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Fae",
description: "By communing with the six conclaves of the Everwilds, you gain the power of the fae.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Familiar",
description: " Enhance your familiar, or summon a pack or flock of familiars.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Pagan Attunement",
description: "You are one with the natural world and can draw power from the soil itself through ritual and meditation.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Witch’s Brew",
description: "w. By mixing strange ingredients, you can create a variety of unique potions for your allies.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
}
]    
{
name: "Zealot",
shortDescription: "Loyal and stalwart, zealots remain utterly dedicated to their cause, punishing evildoers or standing between evil and the innocent.",
quote: {
phrase: "No matter the adversity, I hold to my convictions.I will bring light to the shadow, food to the hungry, and comfort to the afflicted.I will stand as a shield for those who cannot defend themselves, and a sentinel for the weary.For I am a good boy.",
name: "Chauncey",
title: "",
},
longDescription: "You have always been a serious person. As a child you took playing with a somber gravity and it greatly upset you when another child broke the rules.In your adolescence you were often dismayed by the lackadaisical nature of your contemporaries.At some point along the way, you found a cause to which you dedicated your very soul.This transformation has led you to seek out a sacred order or deity to whom you have pledged your allegiance.You now strive to undertake acts of selflessness and zeal for the betterment of the world in accordance with the tenets of your faith. You are undoubtedly dedicated to your beliefs with keen resolve.How do you approach those who do not share your convictions? Do you seek to persuade folk to adopt your tenets as their own, or do you try to learn the beliefs of other creatures and the reasons behind those beliefs? Maybe you engage in a mix of both approaches.",

entryTalent: {
prerequisites: ["Class Entry", "", "Character Level 2"],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
}
]

},
stacks: [
{
name: "Aura",
description: "Gain powerful auras that bolster yourself and your allies against the encroaching darkness.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Cavalier",
description: "Bond with a mystic steed, on whom you can ride into battle.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Consecrated Blade",
description: "You can enchant a weapon, turning it into a powerful artifact capable of smiting evil wherever it might lurk.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Crusader",
description: "As a sword for the just and a shield for the innocent, you lead a crusade against the forces of evil.",,
talents: [,
{
name: "",
prerequisites: [""],
flavorTest: "",
abilities: [
{
name: "",
description: "",
},
{
name: "",
description: "",
},

]
}
},
{
name: "Holy Cause",
description: ". Your very presence is enough to help other creatures remain true to their convictions, even against strong temptations.",
},
{
name: "Reputation",
description: "Your reputation precedes you, for good or ill, and you are never treated as simply an innocuous traveler.",
}
]
}
];
