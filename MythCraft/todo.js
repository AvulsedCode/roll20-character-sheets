/* sublineage/feature:  as {} you gain{} */





const mcStandardLineage =[
{
	cultureName:"Bhrunai",
	cultureBlerb:"Bhrunai have traditionally preferred either solitude or the company of their own kind, building tiny, stilted hovels and forming small communes, usually close to established settlements with which they could trade. Passersby may mistake a group of sleeping bhrunai for mossy boulders. Bhrunai have unique romantic relationships, wherein two who chose to spend their lives together perform a “Melding” wherein two become one. This new bhrunai shares the memories of both mates, but is an entirely new unique individual. Ten to fifteen years after a Melding, two to four small, round, pebble-like eggs break off from the bhrunai while it sleeps, which grow into young.",
	traits:{
		height: {
			min:"3&apos;4&quot;",
			max:"4&apos;2&quot;",
		},
		weight: {
			min:50,
			max:120,
		},
		size: "Small",
		baseSpeed: 20,
		appearance:{
			blerb:"Bhrunai are usually stocky or cherubic with skin tones like that of stone: primarily shades of gray and brown. Their hair resembles mosses, lichens, or fungi, and their eyes range in coloration from gray to brown to green to blue to hazel to metallic.",
			beforeMaturity:"",
			postMaturity:"",
			skin:"Shades of Gray or Brown",
			eyeColor:[ "Gray", "Brown", "Green", "Blue", "Hazel", "Metallic"],
			features: "Stocky or Cherubic builds. Hair resembling moss, lichen, or fungus.",
		} ,
		ecology:{
			blerb:"Bhrunai reach maturity around ten years of age and live very long lives. Bhrunai do not physically deteriorate until around their 400th year of life when their body slowly begins to solidify as they spend more and more time resting in their stone form. By their 500th year, most bhrunai become stone permanently.",
			maturity:"Around 10 years",
			lifespan: "400 - 500 years",
		},
	},
	sublineages:[],
	startingfeatures:[
		{ 
			name:"Stone Sleep",
			preReq:[],
			description: "Bhrunai do not sleep like other creatures and instead enter a state of suspended animation called &quot;Stone Sleep.&quot; You must enter Stone Sleep for 6 hours to regenerate your energy on a daily basis. While Stone Sleep is activated you gain DT 30, and you are Unconscious but not Helpless. You may remain in Stone Sleep indefinitely, but taking any damage immediately ends your Stone Sleep.",
			frequency:"",
		},
		{ 
			name:"Fae Step",
			preReq:[],
			description: 	"Bhrunai have the natural ability to wink out of sight and slip into places unnoticed. By spending 2 AP, you become Invisible for 1 minute. This feature ends immediately if you take damage, make an attack, or use magic.",
			frequency:"(1/Rest)" 
		},
	],
	uniqueFeature: "Choose one additional option from the All Bhrunai Features table at level 1.",
	featuresChoices:[	
		{ 
			name:"Arcane Affinity",
			preReq:[],
			description:"Learn two cantrips from the Arcane Source of magic. Use your magic attribute. If you do not have one, use INT.",
			improvesExisting:"",
			isRepeatable:false,
			frequency:"",
			tags:[],
		},
		{ 
			name:"Bhrunai Expertise",
			preReq:[],
			description:"Repeatable. You add +6 Skill Points to one skill of your choice with the Crafting* tag.",
			improvesExisting:"",
			isRepeatable:true,
			frequency:"",
			tags:["crafting"]
		},
		{ 
			name:"Environmental Adaptation",
			preReq:[],
			description:"Whenever you roll a d20 to resist a harmful environmental condition such as extreme heat, cold, or weather, you roll 2d20 and take the higher result.",
			improvesExisting:"",
			isRepeatable:false,
			frequency:"",
			tags:[]
		},
		{ 
			name:"Fae Step II",
			preReq:["Fae Step"],
			description:"Fae Step becomes 2/Rest. Additionally, when you activate this feature you may immediately teleport up to 15 ft to a place within your line of sight.",
			improvesExisting:"Fae Step",
			isRepeatable:false,
			frequency:"2/Rest",
			tags:[],
		},
		{ 
			name:"Grove-Born",
			preReq:[],
			description:"Gain +6 Skill Points that you can spend on the following skills. You cannot put more than +4 points into a single skill using this feature.<ul><li>Acrobatics: Balancing, Contorting, Tumbling</li><li>Athleticism: Athletics</li><li>Crafting*: Alchemy, Cobbling, Cooking, Weaving</li><li>Influence: Persuading</li><li>Luck: Scavenging</li><li>Subterfuge: Evading, Lockpicking*, Sleight of Hand</li><li>Survival: Animal Handling, Forage, Nature, Sheltering</li></ul>",
			improvesExisting:"",
			isRepeatable:false,
			frequency:"",
			tags:[],
		},
		{ 
			name:"Natural Camouflage",
			preReq:[],
			description:"While you are outdoors and Concealed, gain +3 on skill checks to remain hidden. You can only use this ability when you have not moved since the beginning of your last turn.",
			improvesExisting:"",
			isRepeatable:false,
			frequency:"",
			tags:[],
		},
		{ 
			name:"Natural Camouflage II",
			preReq:["Natural Camouflage I"],
			description:"While outdoors and not actively moving, gain your Natural Camouflage bonus.",
			improvesExisting:"Natural Camouflage",
			isRepeatable:false,
			frequency:"",
			tags:[],
		},
		{ 
			name:"Natural Camouflage III",
			preReq:["Natural Camouflage II"],
			description:"While outdoors, you gain your Natural Camouflage bonus.",
			improvesExisting:"Natural Camouflage",
			isRepeatable:false,
			frequency:"",
			tags:[],
		},
		{ 
			name:"Natural Camouflage IV",
			preReq:["Natural Camouflage III"],
			description:"Repeatable. Gain an additional +3 on skill checks to remain hidden when using Natural Camouflage.",
			improvesExisting:"Natural Camouflage",
			isRepeatable:true,
			frequency:"",
			tags:[],
		},
		{ 
			name:"Naturefriend",
			preReq:	[],
			description:"(1/Rest) You can cast the Animal Bond Spell.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"(1/Rest)",
			tags:[],
		},
		{ 
			name:"Naturefriend II",
			preReq:["Naturefriend"],
			description:"Naturefriend becomes 1/Recoup.",
			isRepeatable:false,
			improvesExisting:"Naturefriend",
			frequency:"1/Recoup",
			tags:[],
		},
		{ 
			name:"Primal Awareness",
			preReq:	[],
			description:"(1/Rest) By spending one minute, you sense primal power in a 1-mile radius from yourself. Learn whether or not primal magic has been used in the last 7 days, as well as if a creature with the fae tag has been present.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"(1/Rest)",
			tags:[],
		},
		{ 
			name:"Primal Power",
			preReq:[],
			description:"Learn two chants from the Primal Source of magic. Use your magic attribute. If you do not have one, use AWR.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Stone Gut",
			preReq:[],
			description:"Gain Resist Toxic 3.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Stone Gut II",
			preReq:["Stone Gut", "Character Level 10"],
			description:"You are immune to common poisons and diseases, and increase your Resist Toxic number by 3. Furthermore, you can receive nourishment from eating any biological plant or common mineral such as clay, dirt, or stone.",
			isRepeatable:false,
			improvesExisting:"Stone Gut",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Stone Gut III",
			preReqs:["Stone Gut II"],
			description:"Increase your Resist Toxic number by 3.",
			isRepeatable:false,
			improvesExisting:"Stone Gut",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Stone Sentinel",
			preReqs:[],
			description:"You are immune to magical sleep effects.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],

},
{
	cultureName:"Dragonfolk",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
	{
	cultureName:"Dwarf",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Elemental",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Elf",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description:"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Fiendblood",
	cultureBlerb:"The Fiends of Inferno are a brutal and cunning lot whose thoughts and behaviors are far beyond the comprehension of mortal beings. Those that act beyond instinct feel nothing of love, appreciation, or admiration and their dealings are always of a transactional nature. Those foolish enough to bargain usually find, to their horror, thatthey do not receive quite what they expect. Humans are particularly susceptible to Fiendish influences. Fiendbloods result in the mingling of Fiend and humanoid blood, which produces a twisted hybrid offspring. Though the child itself may appear perfectly normal and healthy for the first few years of life, their nature quickly becomes apparent as they grow and signs of their parentage begin to show. Horns begin to poke from their heads, their skin takes on strange green, red, or gray tones, their eyes darken to black orbs, and strange tragedy follows wherever they go. Those that do manage to avoid suspicion learn the truth when they reach maturity and the first blood transformation takes place.",
	traits:{
		height: {
			min:"4&apos;8&quot;",
			max:"6&apos;5&quot;",
		},
		weight: {
			min:80,
			max:250,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"Fiendbloods generally resemble a typical member of the species they were born into until they reach their sixteenth birthday when they undergo their first transformation and all manner of changes occur. They might sprout twisted goat horns or spines, wicked claws and fangs, spiked tails or even bat-like wings. Their skin becomes a mottled red, gray, or green and their eyes fade solid black or dull red.",
			beforeMaturity:"Resemble the species they were born into (ie human, kettek, et.)",
			postMaturity:"Skin becomes red, gray, or green. Eyes fade to solid black or dull red. Horns, spines, claws, fangs, tails, or wings may appear.",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			maturity:"Around 16 years",
			lifespan: "70 - 90 years",
		},
	},
	startingfeatures:[ 
	{ 
		name:"Blood Transformation",
		preReqs:[],
		description:"(1/Rest) Fiendbloods share an intimate connection with the chaotic plane of Inferno and can temporarily embrace their fiendish nature without risk of losing their mortal selves. For one minute after activating this feature, your Fiendish traits become even more pronounced and you lose nearly all your humanoid characteristics.",
		frequency:"",
		tags:[],
	},
	{ 
		name:"Sanguine Revelry",
		preReqs:["Sanguineth-Blooded"], 
		description:"While your Blood Transformation feature is activated, you may spend 4 AP to attempt to drive a living humanoid into a frenzy. Choose one target and attack their WILL with your CHA. If successful, the target is suddenly overcome by a fit of ecstatic madness. On their next turn, they must attack the closest creature, whether that creature is a friend or foe.",
		frequency:"",
		tags:[],
	},
	{ 
		name:"Creeping Dread",
		preReqs:["Melaneth-Blooded"],
		description:"While your Blood Transformation feature is activated, you may spend 4 AP to attempt to sow a primal fear in those near you. You must make a CHA attack against the WILL of all creatures within 15 ft. If successful, those creatures are struck with the Broken condition until the end of their next turn.",
		frequency:"",
		tags:[],
	},
	{ 
		name:"War Bringer",
		preReqs:["Cholereth-Blooded"],
		description:"While your Blood Transformation feature is activated, you may spend 4 AP to inspire up to two allies within 30 ft to bring death and carnage. Those allies do an additional +2 damage whenever they hit an enemy for a number of rounds equal to your CHA+1 (min 1).",
		frequency:"",
		tags:[],
	},
	{ 
		name:"Pestilent Blessing",
		preReqs:["Phlegmereth-Blooded"],
		description:"While your Blood Transformation feature is activated, you may spend 4 AP to attempt to infect a living creature with a gift of the Phlegmereth. Choose one target and attack their FORT with your END. If successful, the target becomes covered in painful pustules and becomes Sickened until the end of their next turn. You may make this check again at the end of the target&apos;s turn without expending AP. If successful, the condition repeats for another turn, but ends after the second turn.",
		frequency:"",
		tags:[],
	}
	],
	sublineages:[
	{
		sublineageName:"Sanguineth-Blooded",
		blerb:"Those of the Sanguineth blood must forever fight against the baser urges of excess and indulgence that so define their heritage. The Sanguineth typically appear the most humanoid of their lineage, as the Fiendish influence usually comes through in subtle ways. Slit, blood-red eyes are often the first signs followed by extra long, double-jointed fingers. Those that embrace their blood might have limbs that look quite long and sinewy and teeth that appear a little too pointed.",
	},
	{
		sublineageName:"Melaneth-Blooded",
		blerb:"The Melaneth reside in the Black City of Durlossoth, where twisting streets of endless dilapidation drive unfortunate travelers mad with hopelessness. Melaneth fiendbloods usually have wispy hair of black or white and shriveled features. A dour nature comes with the blood, and many Melaneth fiendbloods find an unconscious stirring in their souls when the opportunity for a deal or an imparting of dark wisdom arises.",
	},
	{
		sublineageName:"Cholereth-Blooded",
		blerb:"The Cholereth are fiends of a singular desire to dominate or slaughter any who stand in their way, and threads of this notion often weave their way into the lives of their fiendbloods. These individuals are physically imposing and they typically force their way into positions of leadership. Horns and spines are common along with curled claws and thin, lashing tails.",
	},
	{
		sublineageName:"Phlegmereth-Blooded",
		blerb:"It is said that the Phlegmereth are the source of all known illness and disease, and those that share their blood might enforce the idea with sickly, pale skin, skull-like features, and any number of swollen knots or nodules. It is surprising, then, that most Phlegmereth fiendbloods show an unusual strength of both body and will that bely this appearance. The fervent, often zealous nature of their heritage is difficult for such a fiendblood to escape, and they must always be tempered against losing themselves in a cause or belief.",
	},
	],
	uniqueFeature: "Choose one additional option from the All Fiendblood Features table at level 1.",
	featuresChoices:[	
	
		{ 
			name:"Ancestral Communion",
			preReqs:[],
			description:"(1/Rest) While sleeping, you may attempt to commune with the fiends related to your sublineage. Roll 1d20. On an 11 or higher you successfully contact a fiend determined by the MC. You may ask this fiend three questions, after which the communion ends. The fiend is under no obligation to answer honestly, or even to answer at all.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"(1/Rest)",
			tags:[],
		},
		{ 
			name:"Blood Transformation II",
			preReqs:["Blood Transformation", "Character Level 5"],
			description:"Blood Transformation becomes 2/Rest.",
			isRepeatable:false,
			improvesExisting:"Blood Transformation",
			frequency:"2/Rest",
			tags:[],
		},
		{ 
			name:"Blood Transformation III",
			preReqs:["Blood Transformation II", "Character Level 15"],
			description:"Blood Transformation becomes 3/Rest.",
			isRepeatable:false,
			improvesExisting:"Blood Transformation",
			frequency:"3/Rest",
			tags:[],
		},
		{ 
			name:"Claws",
			preReqs:[],
			description:"Your fingernails grow long, sharp, and rigid, taking on a dark, bloody hue. Gain a special attack that costs 2 AP and deals 1d4 sharp damage on a hit. This is considered a natural weapon, and you use your choice of STR or DEX for the attack and damage rolls.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Draining Touch",
			preReqs:[],
			description:"(END/Rest) You have the ability to draw the very life force out of a living creature. You may make a special unarmed attack against one target&apos;s AR by spending 4 AP. If successful, you deal 1d6 necrotic damage to the target and regain HP equal to the amount of damage you dealt.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Draining Touch II",
			preReqs:["Draining Touch","Character Level 10"],
			description:"Your draining touch now does 2d6 Necrotic damage and heals you for the same amount.",
			isRepeatable:false,
			improvesExisting:"Draining Touch",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Draining Touch III",
			preReqs:["Draining Touch II","Character Level 20"],
			description:"Your draining touch now does 3d6 Necrotic damage and heals you for the same amount.",
			isRepeatable:false,
			improvesExisting:"Draining Touch",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Fiendish Endurance",
			preReqs:[],
			description:"Repeatable. Gain +6 Skill Points that you can spend on any skills with the stamina tag. You cannot spend more than +4 points on a single skill in this way.",
			isRepeatable:true,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Infernal Influence",
			preReqs:[],
			description:"	Repeatable. Gain +6 Skill Points that you can spend on any skills with the influence tag. You cannot spend more than +4 points on a single skill in this way.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Occult Affinity",
			preReqs:[],
			description:"Learn two rituals from the Occult Source of magic. Use your magic attribute. If you do not have one, use CHA.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:["Occult"],
		},
		{ 
			name:"Pact Maker",
			preReqs:[],
			description:"You have the ability to make binding deals with other intelligent creatures. If such a creature makes a willing bargain and exchanges either oath or blood, they become bound to the terms indefinitely (or for a set amount of time specified in the pact) and suffer severe consequences should they be broken. If a creature breaks the terms of its agreement, you may immediately attack their WILL with your CHA, provided that you are currently on the same plane of existence. On a hit, the creature becomes Sickened for the next 24 hours and the pact ends. You can make a number of binding pacts equal to your CHA (min 1). You may end a pact in order to make a new one; if you do, the creature that was released from your pact immediately.<br/> When a pact is ended for any reason, both participants of the pact are aware.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Violent Vindication",
			preReqs:["Pact Maker"],
			description:"If a creature violates its pact, then on a hit, you also deal 2d10 psychic damage to the creature. If you miss, the creature takes 1⁄2 damage and is Sickened for the next hour.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Wings of Darkness",
			preReqs:["Blood Transformation"],
			description:"While your Blood Transformation feature is active, you sprout a pair of shadowy wings. While you are using your wings, your horizontal jump distance is doubled and you no longer take falling damage.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Golem",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	sublineages:[],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
	],
},
{
	cultureName:"Halfling",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Hondu",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Human",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Kettek",
	cultureBlerb:"Kettek are feline humanoids ubiquitous across Ancerra. Endlessly curious, occasionally distracted, kettek are well known for their adventurous and fickle nature. Kettek rarely stay in one place for more than a few years as boredom frequently drives their urge for new sights, sounds, and places. Thus, they find many positions on ships and caravans around the world and their natural grace and athleticism makes them excellent scouts, performers, and sailors. <br/>Hailing from lush forests and snowy taigas alike, the kettek have adapted well to many environments and often have distinct features from their homeland. Northern kettek tend to be bulkier with spotted furs of white, grey, and black while southern kettek are lean with striped or splotched coats of orange, brown, and black.</br> Kettek are wanderers by nature, so their culture tends to forgo monuments and grand cities for oral histories, stories, songs, and poetry. More than any other lineage, kettek absorb the cultures from the places they reside and carry those traditions and habits with them when they move on. Thus, kettek fashion and art tends to be direct copies of multiple styles and functions.",
	traits:{
		height: {
			min:"4&apos;6&quot;",
			max:"5&apos;10&quot;",
		},
		weight: {
			min:90,
			max:160,
		},
		size: "Small or Medium (your choice)",
		baseSpeed: 20,
		appearance:{
			blerb:"Bipedal with long, feline tails and heads to match, kettek have fur coats that vary widely, but roughly mimic the many coats that cats might have.",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"Around 14 years",
			lifespan: "Roughly 90 years",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"Darkvision",
			preReq:[],
			description:"You can see in darkness to a limit, even without any light source. While using Darkvision, you can see up to 30 ft, and then are blind beyond that point.",
			frequency:"" 
		},
		{ 
			name:"Nine Lives",
			preReq:[],
			description:"The number of Death Points it takes to kill you increases by 1.",
			frequency:"" 
		}
	],
	uniqueFeature: "To further define your kettek, choose one option from the All Kettek Features table at level 1.",
	featuresChoices:[	
	
		{ 
			name:"Ambusher",
			preReqs:[],
			description:"When you make a weapon attack against a creature that has not yet had a turn in Initiative, add your AWR to the attack and damage rolls.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Cat&apos;s Cunning",
			preReqs:[],
			description:"Repeatable. Gain +6 Skill Points that you can spend on any skills with the subterfuge tag. You cannot spend more than +4 points on a single skill in this way.",
			isRepeatable:true,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Claws",
			preReqs:[],
			description:"Gain a special attack that costs 2 AP and deals 1d4 sharp damage on a hit. This is considered a natural weapon, and you use your choice of STR or DEX for the attack and damage rolls.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Darkvision II",
			preReqs:["Darkvision"],
			description:"The range of your Darkvision extends by +30 ft.",
			isRepeatable:false,
			improvesExisting:"Darkvision",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Keen Eyes",
			preReqs:[],
			description:"When you make AWR checks that rely on your sense of sight, gain an additional +4 bonus to that check.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Keen Eyes II",
			preReqs:["Keen Eyes"],
			description:"Increase your Keen Eyes bonus by an additional +4.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Keen Hearing",
			preReqs:[],
			description:"When you make AWR checks that rely on your sense of hearing, gain an additional +4 bonus to that check.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Jungle Cat",
			preReqs:[],
			description:"Gain a climbing speed equal to your walking speed.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Lithe Form",
			preReqs:[],
			description:"Repeatable. Gain +6 Skill Points that you can spend on any skills with the acrobatics tag. You cannot spend more than +4 points on a single skill in this way.",
			isRepeatable:true,
			improvesExisting:"",
			frequency:"",
			tags:["actobatics"],
		},
		{ 
			name:"Plainsrunner",
			preReqs:["Character Level 5"],
			description:"Your base speed increases by +5 ft.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Running Leap",
			preReqs:[],
			description:"Double your horizontal jump distance. The distance you can jump is restricted by your movement; if you do not spend enough AP to complete your jump, then your jump ends when you run out of movement.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
			enhancement:{
				locomotion:{
					jump:"2x"
				},
				skillpoints:{

				}
			}
		},
		{ 
			name:"Sleep Anywhere",
			preReqs:[],
			description:"You can gain the benefits of Taking a Rest even if you are in an inhospitable environment or harsh weather, so long as you are not actively taking damage.",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		},
		{ 
			name:"Strong Form",
			preReqs:[],
			description:"Repeatable. Gain +6 Skill Points that you can spend on any skills with the athleticism tag. You cannot spend more than +4 points on a single skill in this way.",
			isRepeatable:true,
			improvesExisting:"",
			frequency:"",
			tags:["athleticism"],
		},
		{ 
			name:"Wanderer",
			preReqs:[],
			description:"Repeatable. Gain +6 Skill Points that you can spend on any skills with the survival tag. You cannot spend more than +4 points on a single skill in this way.",
			isRepeatable:true,
			improvesExisting:"",
			frequency:"",
			tags:["survival"],
		}
	],
},
{
	cultureName:"Kleppin",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Raedeen",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	sublineages:[],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Remnant",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Satyr",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Trollkin",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description:"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Undead",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: "",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	],
},
{
	cultureName:"Urkou",
	cultureBlerb:"",
	traits:{
		height: {
			min:"8&apos;8&quot;",
			max:"8&apos;8&quot;",
		},
		weight: {
			min:111,
			max:222,
		},
		size: "Medium",
		baseSpeed: 20,
		appearance:{
			blerb:"",
			beforeMaturity:"",
			postMaturity:"",
			skin:"",
			eyeColor:[ ],
			features: "",
		} ,
		ecology:{
			blerb:"",
			maturity:"",
			lifespan: "",
		},
	},
	sublineages:[],
	startingfeatures:[ 
		{ 
			name:"",
			preReq:[],
			description: 	"",
			frequency:"" 
		}
	],
	uniqueFeature: "",
	featuresChoices:[	
	
		{ 
			name:"",
			preReqs:[],
			description:"",
			isRepeatable:false,
			improvesExisting:"",
			frequency:"",
			tags:[],
		}
	]
},

];
const mcLoadedLineages = [];




const mcStandardSkills = [

{name:"Animal Handling", requiresTool:false, attribute:"AWR",tag:"Survival", description: "You might use this skill when riding a mount or when trying to train an animal that views you as a friendly creature.",},
{name:"Applied Force", requiresTool:false, attribute:"STR",tag:"Athleticism", description: "You can use this skill to break down doors, use a crowbar to leverage heavy weights, and similar applications of pure strength with or without a mechanism to assist you.",},
{name:"Appraising", requiresTool:false, attribute:"INT",tag:"Observation", description: "This skill can help you determine how valuable something is or whether the materials are genuine. If you also have a Crafting skill, your MC might let you use that skill when appraising a particular craft, or even let you make an INT/ Appraising check and a skill check using that Crafting skill, taking the higher.",},
{name:"Arcana", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "You can use this skill when trying to recall information related to planar entities or factual information about any of the five Sources of Magic. You can also use this skill to manipulate magical devices.",},
{name:"Art", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "This skill can help you determine factual information about art, such as the materials used or the message that the artist was trying to convey. Your MC might also let you add 1⁄2 your Art skill when trying to produce art, although if you have any points in a Crafting skill, you are more likely to just use that skill.",},
{name:"Astrology", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "You can use this skill when recalling information about astrological symbols and their significance. Your MC might rule that you can make an INT/Astrology check to give you a circumstantial bonus on a CHA/Empathy check or an AWR/Intuiting check when interacting with someone, as your understanding of their astrological signs might lend you insight into their character or unconscious motives.",},
{name:"Astronomy", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "You might use this skill whenever you want to recall or infer information related to space and the orbit of planets, satellites, and the like. Your MC might let you add 1⁄2 your Astronomy when trying to navigate, although if you have the Navigating skill you are likely to use that instead.",},
{name:"Athletics", requiresTool:false, attribute:"STR",tag:"Athleticism", description: "This skill represents your general athletic capacity. When climbing or swimming, and at your MC&apos;s discretion when jumping, you might use this skill. If you have a climb speed or a swim speed, this skill will not come up as often.",},
{name:"Balancing", requiresTool:false, attribute:"DEX",tag:"Acrobatics", description: "You might use this skill when traversing tricky and narrow terrain, such as the lip of a cliff or the pinnacle of a rooftop.",},
{name:"Biology", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "This skill will help you to recall or research any information related to biological studies. Your MC may allow you to make an INT/Biology check to gain a circumstantial bonus when making an INT/Nature check or an AWR/Animal Handling check.",},
{name:"Brewing", requiresTool:true, attribute:"INT",tag:"Crafting", description: "If you have the appropriate tools, you can attempt to brew craft beers, wines, or spirits. Your MC might also allow you to attempt to make potions, using 1⁄2 of your Brewing skill in place of Alchemy. You may use this skill when trying to recall or discern intellectual information about the practice of brewing, and doing so does not require any tools.",},
{name:"Calligraphy", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to create beautiful calligraphic works.",},
{name:"Carpentry", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When equipped with the relevant tools, you can use this skill to build or repair houses and other structures made primarily of wood.",},
{name:"Cartography", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When equipped with the relevant tools, you can use this skill to accurately map out regions or cities.",},
{name:"Chemistry", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "You can use this skill to recall or research any information related to chemistry and chemical studies.",},
{name:"Cobbling", requiresTool:true, attribute:"INT",tag:"Crafting", description: "If you have the appropriate time and tools, you can use this skill to repair shoes or make new ones.",},
{name:"Contorting", requiresTool:false, attribute:"DEX",tag:"Acrobatics", description: "This skill allows you to contort your body and squeeze through spaces that would otherwise be too tight for a creature of your size. Especially tight contortions will be more difficult during combat.",},
{name:"Cooking", requiresTool:true, attribute:"INT",tag:"Crafting", description: "Given the appropriate time and tools, you can use this skill to cook delicious food. You can also make checks to determine the quality or sourcing of food and similar cooking-related topics, regardless of whether you have tools.",},
{name:"Dancing", requiresTool:false, attribute:"DEX",tag:"Performance", description: "You can use this skill to put on entertaining dance performances.",},
{name:"Deceiving", requiresTool:false, attribute:"CHA",tag:"Influence", description: "You might use this skill when trying to mislead someone, tell half-truths, or outright lie in a convincing way.",},
{name:"Disguising", requiresTool:true, attribute:"INT",tag:"Subterfuge", description: "Provided that you have the relevant tools, such as makeup, a costume, hair dye, a wig, or similar cosmetics, you can use this skill to disguise yourself. Disguises made under duress will be more difficult than disguises made in leisure.",},
{name:"Distance Running", requiresTool:false, attribute:"END",tag:"Stamina", description: "This skill can help you keep up a steady running pace over a prolonged amount of time, allowing you to cover vast distances.",},
{name:"Dungeoneering", requiresTool:false, attribute:"INT",tag:"Survival", description: "When exploring a dungeon or subterranean area, you might use this skill to recall information about the area, to make logical inferences, or to know how best to use your gear.",},
{name:"Eavesdropping", requiresTool:false, attribute:"AWR",tag:"Observation", description: "You can use this skill when you want to overhear key information that other people are discussing without yourself being part of the conversation. After you succeed on an AWR/Eavesdropping check, your MC might award you a bonus to a check with the influence tag, given your better understanding of the social situation.",},
{name:"Economics", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "This skill can help you recall or deduce information about the economy in a settled area and to better understand economic theory.",},
{name:"Empathy", requiresTool:false, attribute:"CHA",tag:"Influence", description: "You can use this skill to make other people feel seen and understood, as well as helping you understand what people are feeling.",},
{name:"Engineering", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "This skill allows you to improve your knowledge in various types of engineering (architectural, mechanical, etc).",},
{name:"Entertaining", requiresTool:false, attribute:"CHA",tag:"Performance", description: "You can use this skill when you want to captivate a crowd by making a public performance of any kind.",},
{name:"Evading", requiresTool:false, attribute:"INT",tag:"Subterfuge", description: "You can use this skill to practice the art of hiding in plain sight. By knowing what people look for, you can avoid detection by changing your gait, sticking to crowded areas, or otherwise throwing off those that look for you.",},
{name:"Foraging", requiresTool:false, attribute:"AWR",tag:"Survival", description: "You might use this skill when looking for food in the wilderness or finding ingredients.",},
{name:"Forced March", requiresTool:false, attribute:"END",tag:"Stamina", description: "You can use this skill when trying to push beyond the normal travel pace that you could manage in a day, whether by walking a greater distance or by walking a normal distance with a greater load.",},
{name:"Forging", requiresTool:true, attribute:"INT",tag:"Subterfuge", description: "This skill can help you replicate signatures or create official- looking documents. If you do well on an INT/Forging check, then your MC will likely give you a circumstantial bonus to INT/Disguising or CHA/Savoir Faire checks.",},
{name:"Fortuity", requiresTool:false, attribute:"Luck",tag:"", description: "Fortuity represents the likelihood that good things just happen to you. If your MC asks you to make a LUCK check to determine the likelihood of a positive outcome, you can add your Fortuity.",},
{name:"Geography", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "You can use this skill when trying to remember where you are in relation to somewhere else, or when you want to deduce information about common geographical patterns in an area.",},
{name:"Glassblowing", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to create stunning artistic glasswork, such as dining plates and even glass musical instruments.",},
{name:"Gossiping", requiresTool:false, attribute:"CHA",tag:"Influence", description: "You can use this skill to seed real or false information about a person, event, etc. among populated areas.",},
{name:"History", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "This skill reflects your capacity for remembering historical events and your ability to quickly research historical events when given access to a library, university, or the like. Your MC might let you use this skill in tandem with another Knowledge skill when researching a particular field of knowledge, making an INT/History check and an INT check of the relevant Knowledge type.",},
{name:"Instrument", requiresTool:true, attribute:"CHA",tag:"Performance", description: "When you gain points in this skill, specify one type of instrument. When you have that instrument, you can use this skill to make better performances with that instrument. Your MC might rule that you can apply 1⁄2 of your Skill Points to related instruments; for example, if you have Instrument (Lute) +6, then your MC might allow you to play a banjo with a +3 bonus.",},
{name:"Intimidating", requiresTool:false, attribute:"CHA",tag:"Influence", description: "You can use this skill when trying to peel back someone&apos;s psyche and frighten them into cooperating with you.",},
{name:"Intuiting", requiresTool:false, attribute:"AWR",tag:"Observation", description: "This skill helps you assess when someone is being honest or if they might be hiding something.",},
{name:"Investigating", requiresTool:false, attribute:"AWR",tag:"Observation", description: "You might use this skill when looking for physical clues at a crime scene, or when looking for a secret door or hidden compartment in a room.",},
{name:"Jeweling", requiresTool:false, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, this skill can help you create gorgeous works of jewelry. Your MC might allow you to use your Jeweling skill in place of Appraising when you want to assess the value of a piece of jewelry.",},
{name:"Law", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "You can use this skill when you want to recall or acquire information about the legal system in a settled area. You might also use this skill, along with the Entertaining and Persuading skills, to win a case in court.",},
{name:"Leadership", requiresTool:false, attribute:"CHA",tag:"Influence", description: "You might use this skill to bolster the resolve of a discouraged person or group of people, or to exert your status and influence over various officials and convince them to follow your commands.",},
{name:"Leatherworking", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to make leather goods such as clothes, bags, or even armor.",},
{name:"Lockpicking", requiresTool:true, attribute:"INT",tag:"Subterfuge", description: "When you have a set of lock picks, you can use this skill to attempt picking any nonmagially sealed lock.",},
{name:"Masonry", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to carve rock into sculptures or architectural stonework.",},
{name:"Medicine", requiresTool:true, attribute:"INT",tag:"Knowledge", description: "You can use this skill when trying to recall factual information about medicines, diseases, and the like, which can help you diagnose someone&apos;s symptoms. If you have bandages, you can make an INT/Medicine check to remove the Bleeding condition from a creature. Attempting this costs 3 AP, and unless otherwise specified from the source of the Bleeding condition, the DC is 14 + the amount of Bleeding damage. If you have the proper medicines, you can attempt to treat someone with a disease. The DC for this treatment, as well as the types of medicine that you need, will be mentioned in the disease&apos;s description.",},
{name:"Menacing", requiresTool:false, attribute:"STR",tag:"Stamina", description: "You can use this skill when trying to physically intimidate someone through a show of force.",},
{name:"Military", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "This skill will help you know the proper terminology when speaking with members of a military and can help you when trying to recall information about a military institution.",},
{name:"Nature", requiresTool:false, attribute:"INT",tag:"Survival", description: "You might use this skill when trying to differentiate between edible and toxic mushrooms, recalling the behavior of wolf packs, or other information about the natural world.",},
{name:"Navigating", requiresTool:true, attribute:"AWR",tag:"Survival", description: "If you have a compass, astrolabe, sextant, or even just a map, you can use this skill to find your way through an otherwise confusing area of wilderness. Your MC might rule that you can make this check without the relevant tools, but the DC will be higher.",},
{name:"Painting", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to create beautiful paintings.",},
{name:"Perceiving", requiresTool:false, attribute:"AWR",tag:"Observation", description: "You might make use of this skill when relying on sensory input such as scanning a tree line for enemies, looking for concealed weapons, listening for footsteps, or trying to identify a strange odor.",},
{name:"Persuading", requiresTool:false, attribute:"CHA",tag:"Influence", description: "You can use this skill when trying to influence someone through sound arguments or emotional appeal.",},
{name:"Politics", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "When you take this skill, choose a specific region. Your MC will determine whether this should be a single city or a whole nation, based on the campaign they intend to run. When making INT checks related to the politics of that region, you can add this skill. When making INT checks related to the politics of another region, you can add 1⁄2 this skill.",},
{name:"Pottery", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate clay and tools, you can use this skill to make decorative and functional pottery.",},
{name:"Religion", requiresTool:false, attribute:"INT",tag:"Knowledge", description: "When you take this skill, choose a specific religion. You could pick one of the pantheons listed on Deities, or work with your MC to come up with another religious tradition. When making INT checks related to the customs and beliefs of that religion, you can add this skill. When making INT checks related to the customs and beliefs of any other religion, you can add 1⁄2 this skill.",},
{name:"Savoir Faire", requiresTool:false, attribute:"CHA",tag:"Performance", description: "You can use this skill to fit into any sort of situation. You can appear at home both with peasants and with aristocrats.",},
{name:"Scavenging", requiresTool:false, attribute:"Luck",tag:"", description: "You can use this skill when trying to find food or supplies in an abandoned area. Your MC might also allow you to use this skill to determine how much loot you find on a body.",},
{name:"Sheltering", requiresTool:false, attribute:"AWR",tag:"Survival", description: "You might use this skill when you&apos;re in the wilderness to find a cave, hollow tree, or rocky bluff that can offer shelter from the elements.",},
{name:"Sleight of Hand", requiresTool:false, attribute:"INT",tag:"Subterfuge", description: "You can use this skill when attempting to pickpocket someone, or when trying to keep an item undiscovered as you are patted down.",},
{name:"Smithing", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate metal and tools, you can use this skill to make wrought iron artistic works or to repair metal tools, weapons, and armor.",},
{name:"Sneaking", requiresTool:false, attribute:"DEX",tag:"Survival", description: "You could use this skill when skulking about and trying to remain physically out of sight.",},
{name:"Sprinting", requiresTool:false, attribute:"STR",tag:"Athleticism", description: "You can use this skill when attempting to cover a small distance in an incredibly short amount of time. This is usually not applicable in normal combat, but might be used in a chase sequence.",},
{name:"Tracking", requiresTool:false, attribute:"AWR",tag:"Survival", description: "You can use this skill when you are trying to follow a creature&apos;s trail.",},
{name:"Tumbling", requiresTool:false, attribute:"DEX",tag:"Acrobatics", description: "This skill helps you fall in such a way that you don&apos;t get hurt. In addition to allowing you to add dramatic flair to any performance you might put on, if you fall 40 ft or less, you can make a Tumbling check with a DC equal to the amount of feet you fell. If you succeed, halve the damage you would take and move 5 ft in a direction of your choice when you land.",},
{name:"Vehicles (Land)", requiresTool:true, attribute:"INT",tag:"Knowledge", description: "You can use this skill to efficiently use land vehicles such as carriages or war carts.",},
{name:"Vehicles (Water)", requiresTool:true, attribute:"INT",tag:"Knowledge", description: "You can use this skill to operate water vehicles, such as sailboats or galleons, with greater efficiency.",},
{name:"Weaving", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to make textile goods such as clothing and blankets.",},
{name:"Woodcarving", requiresTool:true, attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to whittle toys, fletch arrows, repair a wagon wheel, and the like.",},
];
const mcSkillTags = ["Acrobatics","Athleticism","Crafting","Influence","Knowledge","Luck","Observation","Performance","Stamina","Subterfuge","Survival",];

const mcStandardBOPS =[
{name:"Born Warrior", tag:"Militant",description:"Blood, toil, and sweat have marked you a proven soldier."},
{name:"Criminal", tag:"Underworld",description:"You deal in activities not endorsed by the law."},
{name:"Entrepreneur", tag:"Mercantile",description:"You own, supply, or represent a successful business."},
{name:"Knave", tag:"None",description:"Having tried multiple professions, nothing is quite a fit."},
{name:"Noble Title", tag:"Aristocratic",description:"By birth or deed, you are a minor noble in a nation."},
{name:"Outlander", tag:"Wanderer",description:"You live on the fringes of society, perhaps in the wilds."},
{name:"Student", tag:"Academic",description:"You endlessly toil to deepen a field of academic study."},
{name:"True Believer", tag:"Religious",description:"You are a devotee of a specific religion or faith system."},
{name:"Urchin", tag:"None",description:"You&apos;ve grown up on the streets, always fending for yourself."},
]; 

const mcStandardProfessions =[
{name:"Archivist",description:"You are passionate about preserving the past and uncovering the secrets of the ages. Through weeks upon weeks of research sifting through dusty tomes, you are always seeking to expand your understanding of the world and to bring new knowledge to light.", preReq:["Student"],	tags:["Academic"]},
{name:"Barrister",description:"Your studies of law and debate have made you an expert in mediation and you sell your services as a lawyer, judge, or orator. Whether it be in the courts of the grandest cities or in the humblest village square, you ensure just and proper resolution of any dispute through consideration of historical precedent and careful deliberation.", preReq:["Student","Noble Title"],	tags:["Academic","Aristocratic"]},
{name:"Charlatan",description:"You use your silver tongue and quick wit to deceive and manipulate others. You move from town to town, using your skills of deception to sell false remedies, perform illusions, or simply con unsuspecting marks out of their hard-earned coin. Whether you&apos;re a traveling swindler or a confidence trickster, you always have a new scam up your sleeve, and you revel in the thrill of fooling others and getting away with it.", preReq:["Entrepreneur", "Criminal"],	tags:["Mercantile", "Underworld"]},
{name:"Clergy",description:"You are a member of the clergy in a religious order of your choosing. While you do not yet preach directly to congregants, you handle many other spiritual aspects of your religion along with the mundane tasks of day to day life. You might spend time transcribing or preserving the sacred texts of your faith, or handling the business of keeping a temple funded and maintained. As immersed in this environment as you are, you are deeply interested in gathering a deeper understanding of your faith practices.", preReq:["Student", "True Believer"],	tags:["Academic", "Religious"]},
{name:"Entertainer",description:"You are a master of creating beauty and inspiring emotion through your art. You bring your imagination to life through paintings, sculptures, music, or any other medium that suits your fancy, captivating your audience with your unique vision and style. Whether you are creating grand masterpieces for kings and queens, or intimate works that speak to the hearts of the common folk, you are driven by a passion for art and a desire to leave a lasting legacy of beauty and inspiration in the world.", preReq:["Noble Title", "Entrepreneur"],	tags:["Aristocratic", "Mercantile"]},
{name:"Guard",description:"You are the first line of defense against danger and threats to the people and places you are sworn to protect. You might be stationed at a castle gate, patrolling the streets of a city, or guarding a convoy on a dangerous road. You are always alert and ready, armed with your weapons and your training, to keep those in your charge safe from harm. With your unwavering vigilance and your keen eye, you are a reassuring presence, providing peace of mind and security to all who depend on you for protection.", preReq:["Entrepreneur", "Born Warrior"],	tags:["Mercantile", "Militant"]},
{name:"Honorable",description:"You are a member of the upper echelons of society, held in high esteem by those around you. Having been born into privilege, with access to the best education, training, and resources, and are expected to use your influence and power for the betterment of the realm. A leader among leaders, with the respect and admiration of your peers, you are looked upon as a symbol of the ideals and values of your noble heritage.", preReq:["Noble Title"],	tags:["Aristocratic"]},
{name:"Inquisitor",description:"Even the gods have enemies and they entrust their most devoted and zealous followers to protecting their interests in the mortal realm. Twisted fiends, undead abominations, and heretical cults are just a few of the enemies you root out and destroy, wherever they might hide. Your faith guides you in the endless battle against evil where you struggle to make the world just a little bit safer.", preReq:["True Believer", "Born Warrior"],	tags:["Religious", "Militant"]},
{name:"Knight",description:"You are a defender of the innocent and a champion of justice. Armed with your shining armor and deadly weapons, you roam the lands, righting wrongs and vanquishing evil wherever you find it. With each victory, you earn the loyalty and respect of the people, who look upon you as a shining symbol of hope and valor in a dark and uncertain world.", preReq:["Noble Title", "Born Warrior"],	tags:["Aristocratic", "Militant"]},
{name:"Nomad",description:"Traveling from place to place with your tribe, you follow seasonal patterns and seek fertile grounds for your livestock. You are self-sufficient and have a deep connection to the land and the creatures that roam it, honed from a life of constant movement and adaptation to changing environments. Highly skilled in tracking, survival, and animal husbandry, you are highly valued by other groups, and your knowledge of the wildlands is unmatched.", preReq:["Outlander"],	tags:["Wanderer"]},
{name:"Physician",description:"You are dedicated to healing the sick and alleviating the suffering of those around you. You have honed your skills through years of study and practice, mastering the use of medicine and scientific methods to diagnose and treat a wide range of ailments. Your compassion and your unwavering commitment to your patients have earned you a reputation as one of the best in the land, and you are often called upon to tend to the sick and injured.", preReq:["Student", "True Believer"],	tags:["Academic", "Religious"]},
{name:"Pioneer",description:"You are always pushing the boundaries and charting new territories. With a thirst for adventure and discovery, you are not afraid to venture into the unknown. A builder, farmer, and protector, you create new settlements and carve out a place for yourself and those who follow in your wake. Your determination, resilience, and resourcefulness are what sets you apart, and your name is known and respected by those who live in the frontier lands.", preReq:["Noble Title", "Outlander"],	tags:["Aristocratic", "Wanderer"]},
{name:"Sailor",description:"You have spent considerable time as an explorer, freebooter, pirate or mariner and define your life by the sea. From skiffs to frigates, you know your way around a ship and are as comfortable in a raging storm as you are in a pleasant breeze. You embrace the freedom, adventure, and danger of life as you traverse the trading lanes or explore parts unknown, never knowing what might be waiting over the next wave.", preReq:["Entrepreneur", "Criminal", "Outlander"],	tags:["Mercantile", "Underworld", "Wanderer"]},
{name:"Soldier",description:"You are a proud and dedicated warrior, serving your country and your people with honor and distinction. From defending your homeland against invaders to marching on a foreign land for just war, you are always ready to put your life on the line in the name of duty and honor. With your training, your discipline, and your courage, you are a force to be reckoned with, feared by your enemies and respected by your allies, and you are proud to serve as a symbol of strength and protection for those you hold dear.", preReq:["Born Warrior"],	tags:["Militant"]},
{name:"Trader",description:"You are constantly on the move, traveling from town to town and village to village in search of new markets and opportunities. With a keen eye for profit and a talent for negotiation, you buy low and sell high, always seeking out the best deals and the most valuable merchandise to trade. Whether you are trading in exotic spices, rare herbs, precious gems, or any other commodity that you can get your hands on, you are always seeking to turn a profit and to grow your wealth and influence in the world.", preReq:["Entrepreneur"],	tags:["Mercantile"]},
{name:"Thief",description:"You use your agility and cunning to steal from the wealthy and powerful. You might be a pickpocket, an opportunist, or a brute that holds people up. Regardless, you always have an eye out for the next big score, and you are not above using violence if it means getting what you want. You thrive in the shadows, slipping in and out of buildings and alleyways undetected, and relish the excitement of pitting your skills against those of your marks.", preReq:["Criminal"],	tags:["Underworld"]},
{name:"Thug",description:"You are no stranger to the brutal struggle of urban life, outside the eyes of the law where the strong take from the weak and the sharpness of a blade says more than a written decree. Perhaps your actions come from necessity or maybe they come from a desire for power, but either way you are not afraid to use your cunning, strength, and wits to take what you want when you want it. You claim your territory through brute force or intimidation and don&apos;t let anything stand in your way.", preReq:["Criminal", "Born Warrior"],	tags:["Underworld", "Militant"]},
];





console.log("Checkpoint 4");




const mcStandardWeaponTypes= ["Axe","Blade (Small)", "Blade (Large)", "Bludgeon", "Polearm", "Ranged", "Miscellaneous", "Siege Weapon"];
/*
Weapon Range
You can only make an attack against a creature when that creature is within your weapon’s range. Each weapon specifies its range on the weapons tables below.
*/

const mcStandardWeaponRanges= [
{ 
	name:"Melee",
	description:"If a weapon has the Melee property, then you can attack any creature within 5 ft of you. Any abilities you have that increase your reach can enhance this.",
	baseRange:5,
},
{ 
	name:"Ranged",
	description:"If a weapon has the Ranged property, you cannot use it as a melee weapon, but you can attack creatures within your weapon’s specified range.",
	baseRange:10,
},
{ 
	name:"Reach",
	description:"If a weapon has the Reach property, then it functions as a melee weapon, but the distance that you can attack with that weapon is greater than 5 ft.",
	baseRange:10,
},
{ 
	name:"Thrown",
	description:"If a weapon has the Thrown property, you can use it as a melee weapon or you can throw it up to the specified thrown distance. Once you throw a weapon, you no longer have it in hand.",
	baseRange:5,
},
];
/*Weapons will have one or more tags that give the weapon unique properties.*/

const mcStandardWeaponTags =[

{ 
	name:"Ammunition",
	description:"If a weapon has the ammunition tag, you must have ammunition in order to make attacks with that weapon. Ammunition might be arrows, crossbow bolts, sling pellets, and the like.",
},

{ 
	name:"Concealed",
	description:"If a weapon has the concealed tag, then when it is sheathed it can be tucked within folds of your clothing, inside a boot, and the like. Concealed weapons are not readily visible to observers, but a pat-down will reveal these weapons, and if a creature succeeds on an AWR check against an INT check that you make when you hide the weapon, then they can spot it without needing to pat you down.",
},

{ 
	name:"Hand-and-a-Half",
	description:"Weapons with the hand-and-a-half tag can be wielded with one or two hands. After the hand-and-a-half tag, there will be a brief phrase in parentheses explaining what benefit you gain from wielding the weapon with two hands, such as dealing more damage or using fewer AP to make the attack..",
},

{ 
	name:"Light",
	description:"A weapon with the light tag does not count against your encumbrance. Furthermore, light weapons can be dual wielded, using one light weapon in each hand.",
},

{ 
	name:"One-Handed",
	description:"A weapon with the one-handed tag can only be wielded with one hand.",
},

{ 
	name:"Special",
	description:"If a weapon has the special tag, then its special properties are explained in detail below that weapon’s table.",
},

{ 
	name:"Two-Handed",
	description:"A weapon with the two-handed tag can only be wielded with two hands.",
},

{ 
	name:"Unwieldy",
	description:"The unwieldy tag interacts with your encumbrance. It takes 2 AP to draw or sheathe an unwieldy weapon.",
},];




/*
Weapon List
Below is a list of many weapons you might want to use on your quests. All weapon costs are in silver coins (sc).
*/



const msStandardMagicItems = [
    { 
        name:"",
        damage:[{dice:"1d4", damageType:"fire"}],
        coreAttribute:"CHA",
        actionPointCost:{BaseValue:0,addAttribute:"",subtractFromAttribute:"", min:2},
        "Range":"Reach 10 ft",
        tags:["One-Handed", "Light", "Special"],
        type:"Magic",
        specialBlerb:"",
        specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
        cost:0,
    }
];




console.log("Checkpoint 6");









console.log("Checkpoint ");
= [ 
	{ 
		name:"Battle Axe",
		damage:[{dice:"1d8", damageType:""}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Axe",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d10", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:35,
	},
	{ 
		name:"Greataxe",
		damage:[{dice:"2d8", damageType:""}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:8,addAttribute:"",subtractFromAttribute:"STR", min:4},
		range:"Melee",
		tags:["Two-Handed", "Unwieldy"],
		type:"Axe",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:60,
	},
	{ 
		name:"Handaxe",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:3,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Axe",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:20,
	},
	{ 
		name:"Hatchet",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Thrown 20 ft",
		tags:["One-Handed"],
		type:"Axe",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:15,
	},
	{ 
		name:"Poleaxe",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Reach 10 ft",
		tags:["Two-Handed"],
		type:"Axe",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:45,
	},
	{ 
		name:"Throwing Axe",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Thrown 30 ft",
		tags:["One-Handed", "Light"],
		type:"Axe",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:20,
	},
	{ 
		name:"War Axe",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Axe",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:-1, min:2}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:40,
	},
	{ 
		name:"Wood Splitter",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:3},
		range:"Melee",
		tags:["Two-Handed"],
		type:"Axe",
		specialFeatures:[
			{
				tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}
			}
		],
		cost:10,
	},
	{ 
		name:"Improvised Small Blade",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:3},
		range:"Melee",
		tags:["One-Handed", "Light", "Concealed"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:0,
	},
	{ 
		name:"Dagger",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Thrown 20 ft",
		tags:["One-Handed", "Light", "Concealed"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:10,
	},
	{ 
		name:"Dirk",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light", "Concealed"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:12,
	},
	{ 
		name:"Kama",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:20,
	},
	{ 
		name:"Knife",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"INT",
		actionPointCost:{BaseValue:0,addAttribute:"INT",subtractFromAttribute:"", min:2},
		range:"Thrown 20 ft",
		tags:["One-Handed", "Light", "Concealed"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:6,
	},
	{ 
		name:"Kunai",
		damage:[{dice:"1d2", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Thrown 40 ft",
		tags:["One-Handed", "Light", "Concealed", "Special"],
		type:"Blade (small)",
		specialBlerb:"You can tie your kunai to a cord; if you do, it loses its Thrown property but gains base reach 15 ft.",
		specialFeatures:[
		{
			tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"Melee 15 ft",} ],
		cost:18,
	},
	{ 
		name:"Kusarigama*",
		damage:[{dice:"1d4", damageType:"physical"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"DEX", min:2},
		range:"Melee",
		tags:["Hand-and-a-Half", "Special"],
		type:"Blade (small)",
		specialBlerb:"While you are wielding a kusarigama with two hands, you gain +1 AR. While wielding it one-handed, you gain base reach 10 ft.",
		specialFeatures:[
			{
				tag:"Two Handed",
				damageDice:"", 
				adjustactionPointCost:{BaseValue:0, min:0}, 
				adjustArmorRating:1,
				adjustRange:"",
			},
	
			{
				tag:"One Handed",
				damageDice:"", 
				adjustactionPointCost:{BaseValue:0, min:0}, 
				adjustArmorRating:0,
				adjustReach:10,
				adjustRange:"",
			}
		],
		cost:35,
	},
	{ 
		name:"Scimitar",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:30,
	},
	{ 
		name:"Shortsword",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:30,
	},
	{ 
		name:"Shuriken",
		damage:[{dice:"1d2", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 120 ft",
		tags:["One-Handed", "Light", "Concealed"],
		type:"Blade (small)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:5,
	},
	{ 
		name:"Improvised Large Blade",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Two-Handed"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:0,
	},
	{ 
		name:"Bastard Sword",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Blade (Large)",
		specialBlerb:"",specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:-1, min:2}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:45,
	},
	{ 
		name:"Broadsword",
		damage:[{dice:"1d10", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["Two-Handed"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:40,
	},
	{ 
		name:"Claymore",
		damage:[{dice:"1d12", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Two-Handed", "Unwieldy"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:75,
	},
	{ 
		name:"Falchion",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:55,
	},
	{ 
		name:"Fire Blade",
		damage:[{dice:"1d6", damageType:"fire"}],
		coreAttribute:"INT",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"INT", min: 2},
		range:"Melee",
		tags:["One-Handed"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:150,
	},
	{ 
		name:"Greatsword",
		damage:[{dice:"2d6", damageType:""}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:8,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Two-Handed", "Unwieldy"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:80,
	},
	{ 
		name:"Katana",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"DEX", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d10", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:120,
	},
	{ 
		name:"Nodachi",
		damage:[{dice:"2d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:8,addAttribute:"",subtractFromAttribute:"STR", min:3},	
		range:"Reach 10 ft",
		tags:["Two-Handed", "Unwieldy"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:140,
	},
	{ 
		name:"Khopesh",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:3,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["One-Handed"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:65,
	},
	{ 
		name:"Longsword",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d10", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:50,
	},
	{ 
		name:"Rapier",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"DEX", min:2},
		range:"Melee",
		tags:["One-Handed"],
		type:"Blade (Large)",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:55,
	},
	{ 
		name:"Unarmed",
		damage:[{dice:"1d1", damageType:"blunt"}],		
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:0,
	},
	{ 
		name:"Improvised Bludgeon",
		damage:[{dice:"1d6", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half (1d8)"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:0,
	},
	{ 
		name:"Baton",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:10,
	},
	{ 
		name:"Brass Knuckles",
		damage:[{dice:"-", damageType:"-"}],	
		coreAttribute:"-",
		actionPointCost:{BaseValue:0,addAttribute:"",subtractFromAttribute:"", min:0},
		range:"Melee",
		tags:["One-Handed", "Light", "Concealed", "Special"],
		type:"Bludgeon",
		specialBlerb:"Increase your unarmed damage die size by 1. (E.g., if your unarmed damage deals 1d6, it now deals 1d8.) This cannot exceed 1d12. If you did not have an unarmed damage die, it becomes 1d4.",
		specialFeatures:[{tag:"", damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0, adjustRange:"",}],
		cost:10,
	},
	{ 
		name:"Cestus*",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light", "Special"],
		type:"Bludgeon",
		specialBlerb:"While wearing a cestus, gain +1 AR.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:15,
	},
	{ 
		name:"Club",
		damage:[{dice:"1d6", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:3},
		range:"Melee",
		tags:["One-Handed"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:2,
	},
	{ 
		name:"Flail",
		damage:[{dice:"1d12", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Two-Handed"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:35,
	},
	{ 
		name:"Hammer",
		damage:[{dice:"1d6", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["One-Handed"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:3,
	},
	{ 
		name:"Mace",
		damage:[{dice:"1d6", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["Hand-and-a-Half (1d8)"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:25,
	},
	{ 
		name:"Maul	2d6 blunt",
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Two-Handed", "Unwieldy"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:50,
	},
	{ 
		name:"Morningstar",
		damage:[{dice:"1d8", damageType:"physical"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half (reduce APC by 1, min 2)"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:40,
	},
	{ 
		name:"Nunchucks",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"COR",
		actionPointCost:{BaseValue:12,addAttribute:"",subtractFromAttribute:"COR", min:2},	
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:30,
	},
	{ 
		name:"Quarterstaff",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half (reduce APC by 1, min 2)"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:5,
	},
	{ 
		name:"Tetsubo",
		damage:[{dice:"1d8", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Melee",
		tags:["One-Handed"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:50,
	},
	{ 
		name:"Tonfa",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Melee",
		tags:["One-Handed", "Light"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:5,
	},
	{ 
		name:"Warhammer",
		damage:[{dice:"1d10", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half (1d12),Unwieldy"],
		type:"Bludgeon",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:35,
	}, 
	{ 
		name:"Bardiche",
		damage:[{dice:"1d8", damageType:"physical"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"DEX", min:2},
		range:"Reach 10 ft",
		tags:["Hand-and-a-Half (1d10)", "Unwieldy"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:65,
	},
	{ 
		name:"Glaive",
		damage:[{dice:"1d8", damageType:"physical"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:2},
		range:"Reach 10 ft",
		tags:["Two-Handed"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:55,
	},
	{ 
		name:"Glaive Guisarme*",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Reach 10 ft",
		tags:["Two-Handed", "Special"],
		type:"Polearm",
		specialBlerb:"When you make an attack against a mounted target, you may spend 2 additional AP to also make a separate attack against the creature&apos;s FORT. On a hit, the target is dismounted and falls Prone.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:65,
	},
	{ 
		name:"Halberd",
		damage:[{dice:"1d8", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"Melee 10 ft",
			}
				
		],
		cost:50,
	},
	{ 
		name:"Javelin",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Thrown 60 ft",
		tags:["One-Handed", "Light"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:15,
	},
	{ 
		name:"Lance",
		damage:[{dice:"1d12", damageType:"sharp"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:4},
		range:"Reach 10 ft",
		tags:["Two-Handed", "Unwieldy", "Special"],
		type:"Polearm",
		specialBlerb:"A lance is a two-handed weapon; however, if you are riding a mount, then a lance is a one-handed weapon.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:25,
	},
	{ 
		name:"Lucerne Hammer",
		damage:[{dice:"1d10", damageType:"physical"}],
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Reach 10 ft",
		tags:["Hand-and-a-Half", "Unwieldy"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d10", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d12", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:55,
	},
	{ 
		name:"Pike	1d6 physical",
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:3},
		range:"Reach 15 ft",
		tags:["Two-Handed"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:35,
	},
	{ 
		name:"Spear	1d6 physical",
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:3},
		range:"Thrown 20 ft",
		tags:["Hand-and-a-Half"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d6", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d6", adjustactionPointCost:{BaseValue:-1, min:2}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:10,
	},
	{ 
		name:"Yari",
		damage:[{dice:"1d8", damageType:"physical"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"DEX", min:3},
		range:"Reach 10 ft",
		tags:["Hand-and-a-Half"],
		type:"Polearm",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d10", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:45,
	},
	{ 
		name:"Improvised Thrown",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:0,addAttribute:"STR",subtractFromAttribute:"", min:3},
		range:"Thrown 20 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:0,
	},
	{ 
		name:"Amethyst Wand",
		damage:[{dice:"1d6", damageType:"cold"}],
		coreAttribute:"CHA",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"INT", min:2},
		range:"Ranged 60 ft",
		tags:["Hand-and-a-Half"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d6", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:200,
	},
	{ 
		name:"Blowgun",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 120 ft",
		tags:["Two-Handed, Light", "Concealed", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:10,
	},
	{ 
		name:"Crossbow",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:3},
		range:"Ranged 200 ft",
		tags:["Two-Handed", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:40,
	},
	{ 
		name:"Dart",
		damage:[{dice:"1d2", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 60 ft",
		tags:["One-Handed", "Light", "Concealed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:5,
	},
	{ 
		name:"Diamond Wand",
		damage:[{dice:"1d8", damageType:"radiant"}],
		coreAttribute:"CHA",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"CHA", min:2},
		range:"Ranged 60 ft",
		tags:["Hand-and-a-Half"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"Ranged 60 ft",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"Ranged 120 ft",
			}
				
		],
		cost:500,
	},
	{ 
		name:"Emerald Wand",
		damage:[{dice:"1d10", damageType:"corrosive"}],
		coreAttribute:"CHA",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"AWR", min:3},	 	
		range:"Ranged 40 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:350,
	},
	{ 
		name:"Hand Crossbow",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 60 ft",
		tags:["One-Handed", "Light", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:70,
	},
	{ 
		name:"Heavy Crossbow",
		damage:[{dice:"1d10", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:4},
		range:"Ranged 500 ft",
		tags:["Two-Handed", "Ammunition", "Unwieldy"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:100,
	},
	{ 
		name:"Light Crossbow",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 60 ft",
		tags:["Two-Handed", "Light", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:60,
	},
	{ 
		name:"Longbow",
		damage:[{dice:"1d10", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:6,addAttribute:"STR",subtractFromAttribute:"", min:2},
		range:"Ranged 900 ft",
		tags:["Two-Handed", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:90,
	},
	{ 
		name:"Oak Wand",
		damage:[{dice:"1d10", damageType:"fire"}],
		coreAttribute:"INT",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"AWR", min:2},
		range:"Ranged 60 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:150,
	},
	{ 
		name:"Pine Wand",
		damage:[{dice:"1d6", damageType:"cold"}],
		coreAttribute:"INT",
		actionPointCost:{BaseValue:0,addAttribute:"INT",subtractFromAttribute:"", min:2},
		range:"Ranged 60 ft",
		tags:["Hand-and-a-Half"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d6", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:130,
	},
	{ 
		name:"Recurve Bow",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 200 ft",
		tags:["Two-Handed", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:120,
	},
	{ 
		name:"Ruby Wand",
		damage:[{dice:"1d6", damageType:"fire"}],
		coreAttribute:"CHA",
		actionPointCost:{BaseValue:3,addAttribute:"",subtractFromAttribute:"INT", min:2},
		range:"Ranged 40 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:400,
	},
	{ 
		name:"Sapphire Wand",
		damage:[{dice:"1d8", damageType:"lightning"}],	
		coreAttribute:"INT",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"CHA", min:2},
		range:"Ranged 80 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:380,
	},
	{ 
		name:"Shortbow",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 200 ft",
		tags:["Two-Handed", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:50,
	},
	{ 
		name:"Sling",
		damage:[{dice:"1d4", damageType:"blunt"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 120 ft",
		tags:["One-Handed", "Light", "Concealed", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:5,
	},
	{ 
		name:"Standing Longbow",
		damage:[{dice:"1d12", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:8,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Ranged 1000 ft",
		tags:["Two-Handed", "Ammunition", "Unwieldy"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:120,
	},
	{ 
		name:"Topaz Wand",
		damage:[{dice:"1d10", damageType:"fire"}],
		coreAttribute:"CHA",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"CHA", min:3},
		range:"Ranged 100 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:300,
	},
	{ 
		name:"War Sling",
		damage:[{dice:"1d6", damageType:"blunt"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Ranged 200 ft",
		tags:["One-Handed", "Light", "Ammunition"],
		type:"Ranged",
		specialBlerb:"",
		ammunitionBlerb:"If your weapon uses ammunition, you can purchase 10 arrows, bolts, or other relevant ammunition for 1 sc.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:10,
	},
	{ 
		name:"Willow Wand",
		damage:[{dice:"1d8", damageType:"corrosive"}],	
		coreAttribute:"AWR",
		actionPointCost:{BaseValue:5,addAttribute:"INT",subtractFromAttribute:"", min:2},	
		range:"Ranged 40 ft",
		tags:["One-Handed"],
		type:"Ranged",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:180,
	},
	{ 
		name:"Boomerang",
		damage:[{dice:"1d6", damageType:"blunt"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:0,addAttribute:"DEX",subtractFromAttribute:"", min:2},
		range:"Thrown 60 ft",
		tags:["One-Handed", "Special"],
		type:"Miscellaneous",
		specialBlerb:"When you throw a boomerang, it comes back to you at the start of your next turn unless it is knocked to the ground or physically blocked. If it hits an enemy, it still comes back to you.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:15,
	},
	{ 
		name:"Cat-o-Nines",
		damage:[{dice:"3d2", damageType:"sharp"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"DEX", min:3},
		range:"Melee",
		tags:["One-Handed", "Special", "Bleeding"],
		type:"Miscellaneous",
		specialBlerb:"If you crit with a Cat-o-Nines, inflict Bleeding (1d4) on the target creature.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:40,
	},
	{ 
		name:"Net",
		damage:[{dice:"-", damageType:"-"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Ranged 10 ft",
		tags:["Two-Handed", "Special"],
		type:"Miscellaneous",
		specialBlerb:"On a hit, the target takes no damage, but is Restrained (Escape DC 15). Nets have 15 HP, 10 AR, REF, and FORT, and Immune Blunt.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:25,
	},
	{ 
		name:"Pickaxe",
		damage:[{dice:"1d8", damageType:"physical"}],	
		coreAttribute:"STR",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Hand-and-a-Half"],
		type:"Miscellaneous",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d10", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:15,
	},
	{ 
		name:"Trident",
		damage:[{dice:"1d6", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"DEX", min:2},
		range:"Thrown 20 ft",
		tags:["Hand-and-a-Half"],
		type:"Miscellaneous",
		specialBlerb:"",
		specialFeatures:[
			{
				tag:"One Handed",damageDice:"1d6", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			},
			{
				tag:"Two Handed",damageDice:"1d8", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",
			}
				
		],
		cost:50,
	},
	{ 
		name:"War Pick	1d12 physical",
		coreAttribute:"STR",
		actionPointCost:{BaseValue:6,addAttribute:"",subtractFromAttribute:"STR", min:3},
		range:"Melee",
		tags:["Two-Handed", "Unwieldy"],
		type:"Miscellaneous",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:25,
	},
	{ 
		name:"War Scythe",
		damage:[{dice:"2d4", damageType:"sharp"}],	
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:4,addAttribute:"",subtractFromAttribute:"DEX", min:2},
		range:"Melee",
		tags:["Two-Handed", "Unwieldy"],
		type:"Miscellaneous",
		specialBlerb:"",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:50,
	},
	{ 
		name:"Whip",
		damage:[{dice:"1d4", damageType:"sharp"}],
		coreAttribute:"DEX",
		actionPointCost:{BaseValue:5,addAttribute:"",subtractFromAttribute:"DEX", min:2},
		range:"Reach 10 ft",
		tags:["One-Handed", "Light", "Special"],
		type:"Miscellaneous",
		specialBlerb:"When you attack with your whip, if you hit, you can spend 2 additional AP to make a second attack against a target&apos;s REF; on a hit, if the target is Large or smaller, it falls prone.",
		specialFeatures:[{tag:"",damageDice:"", adjustactionPointCost:{BaseValue:0, min:0}, adjustArmorRating:0,adjustRange:"",}],
		cost:25,
	}
	];