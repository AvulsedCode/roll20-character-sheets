
//<script type="text/worker">
	on('sheet:opened',function(){
		getSectionIDs("repeating_talents", function(idarray) {
			for(var i=idarray.length; i < 31 ; i++) {
				var newrowid = generateRowID();
				var newrowattrs = {};
				newrowattrs["repeating_talents_" + newrowid + "_name"] = "";
				newrowattrs["repeating_talents_" + newrowid + "_level"] = "";
				newrowattrs["repeating_talents_" + newrowid + "_compendiumLink"] = "Talents";
				setAttrs(newrowattrs);
			}
		 });
		
		// Do something the first time the sheet is opened by a player in a session

});
/*
All Mythcraft functions start with mc
*/
log("==> API Starting... <==");
on("ready",()=>log("==> API Ready <=="));

log("==> Checkpoint 1... <==");

function restDeathPoints(){
	setAttrs({death_points_current:0,
		death_points_max:9});
}


/* value, Set HP, HP Dice, Bonus Action Points */
const mcHitPointLookup =  [
						[-3, 0, NaN, -2],
						[-2, 1, '1d2',-1],
						[-1, 1, '1d2',-1],
						[0, 2, '1d4', 0],
						[1, 2, '1d4', 0],
						[2, 2, '1d4', 1],
						[3, 3, '1d6', 1],
						[4, 3, '1d6', 2],
						[5, 3, '1d6', 2],
						[6, 4, '1d8', 3],
						[7, 4, '1d8', 3],
						[8, 4, '1d8', 4],
						[9, 5, '1d10', 4],
						[10, 5, '1d10', 5],
						[11, 5, '1d10', 5],
						[12, 6, '1d12', 6]
					];


log("==> Checkpoint 2... constructing Compendium <==");

 
    
const mcStandardWeapons = [ 
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

const mcStandardSkills = [

    {name:"Animal Handling", requiresTool:" ", attribute:"AWR",tag:"Survival", description: "You might use this skill when riding a mount or when trying to train an animal that views you as a friendly creature.",},
    {name:"Applied Force", requiresTool:" ", attribute:"STR",tag:"Athleticism", description: "You can use this skill to break down doors, use a crowbar to leverage heavy weights, and similar applications of pure strength with or without a mechanism to assist you.",},
    {name:"Appraising", requiresTool:" ", attribute:"INT",tag:"Observation", description: "This skill can help you determine how valuable something is or whether the materials are genuine. If you also have a Crafting skill, your MC might let you use that skill when appraising a particular craft, or even let you make an INT/ Appraising check and a skill check using that Crafting skill, taking the higher.",},
    {name:"Arcana", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "You can use this skill when trying to recall information related to planar entities or factual information about any of the five Sources of Magic. You can also use this skill to manipulate magical devices.",},
    {name:"Art", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "This skill can help you determine factual information about art, such as the materials used or the message that the artist was trying to convey. Your MC might also let you add 1⁄2 your Art skill when trying to produce art, although if you have any points in a Crafting skill, you are more likely to just use that skill.",},
    {name:"Astrology", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "You can use this skill when recalling information about astrological symbols and their significance. Your MC might rule that you can make an INT/Astrology check to give you a circumstantial bonus on a CHA/Empathy check or an AWR/Intuiting check when interacting with someone, as your understanding of their astrological signs might lend you insight into their character or unconscious motives.",},
    {name:"Astronomy", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "You might use this skill whenever you want to recall or infer information related to space and the orbit of planets, satellites, and the like. Your MC might let you add 1⁄2 your Astronomy when trying to navigate, although if you have the Navigating skill you are likely to use that instead.",},
    {name:"Athletics", requiresTool:" ", attribute:"STR",tag:"Athleticism", description: "This skill represents your general athletic capacity. When climbing or swimming, and at your MC&apos;s discretion when jumping, you might use this skill. If you have a climb speed or a swim speed, this skill will not come up as often.",},
    {name:"Balancing", requiresTool:" ", attribute:"DEX",tag:"Acrobatics", description: "You might use this skill when traversing tricky and narrow terrain, such as the lip of a cliff or the pinnacle of a rooftop.",},
    {name:"Biology", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "This skill will help you to recall or research any information related to biological studies. Your MC may allow you to make an INT/Biology check to gain a circumstantial bonus when making an INT/Nature check or an AWR/Animal Handling check.",},
    {name:"Brewing", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "If you have the appropriate tools, you can attempt to brew craft beers, wines, or spirits. Your MC might also allow you to attempt to make potions, using 1⁄2 of your Brewing skill in place of Alchemy. You may use this skill when trying to recall or discern intellectual information about the practice of brewing, and doing so does not require any tools.",},
    {name:"Calligraphy", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to create beautiful calligraphic works.",},
    {name:"Carpentry", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When equipped with the relevant tools, you can use this skill to build or repair houses and other structures made primarily of wood.",},
    {name:"Cartography", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When equipped with the relevant tools, you can use this skill to accurately map out regions or cities.",},
    {name:"Chemistry", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "You can use this skill to recall or research any information related to chemistry and chemical studies.",},
    {name:"Cobbling", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "If you have the appropriate time and tools, you can use this skill to repair shoes or make new ones.",},
    {name:"Contorting", requiresTool:" ", attribute:"DEX",tag:"Acrobatics", description: "This skill allows you to contort your body and squeeze through spaces that would otherwise be too tight for a creature of your size. Especially tight contortions will be more difficult during combat.",},
    {name:"Cooking", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "Given the appropriate time and tools, you can use this skill to cook delicious food. You can also make checks to determine the quality or sourcing of food and similar cooking-related topics, regardless of whether you have tools.",},
    {name:"Dancing", requiresTool:" ", attribute:"DEX",tag:"Performance", description: "You can use this skill to put on entertaining dance performances.",},
    {name:"Deceiving", requiresTool:" ", attribute:"CHA",tag:"Influence", description: "You might use this skill when trying to mislead someone, tell half-truths, or outright lie in a convincing way.",},
    {name:"Disguising", requiresTool:"x", attribute:"INT",tag:"Subterfuge", description: "Provided that you have the relevant tools, such as makeup, a costume, hair dye, a wig, or similar cosmetics, you can use this skill to disguise yourself. Disguises made under duress will be more difficult than disguises made in leisure.",},
    {name:"Distance Running", requiresTool:" ", attribute:"END",tag:"Stamina", description: "This skill can help you keep up a steady running pace over a prolonged amount of time, allowing you to cover vast distances.",},
    {name:"Dungeoneering", requiresTool:" ", attribute:"INT",tag:"Survival", description: "When exploring a dungeon or subterranean area, you might use this skill to recall information about the area, to make logical inferences, or to know how best to use your gear.",},
    {name:"Eavesdropping", requiresTool:" ", attribute:"AWR",tag:"Observation", description: "You can use this skill when you want to overhear key information that other people are discussing without yourself being part of the conversation. After you succeed on an AWR/Eavesdropping check, your MC might award you a bonus to a check with the influence tag, given your better understanding of the social situation.",},
    {name:"Economics", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "This skill can help you recall or deduce information about the economy in a settled area and to better understand economic theory.",},
    {name:"Empathy", requiresTool:" ", attribute:"CHA",tag:"Influence", description: "You can use this skill to make other people feel seen and understood, as well as helping you understand what people are feeling.",},
    {name:"Engineering", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "This skill allows you to improve your knowledge in various types of engineering (architectural, mechanical, etc).",},
    {name:"Entertaining", requiresTool:" ", attribute:"CHA",tag:"Performance", description: "You can use this skill when you want to captivate a crowd by making a public performance of any kind.",},
    {name:"Evading", requiresTool:" ", attribute:"INT",tag:"Subterfuge", description: "You can use this skill to practice the art of hiding in plain sight. By knowing what people look for, you can avoid detection by changing your gait, sticking to crowded areas, or otherwise throwing off those that look for you.",},
    {name:"Foraging", requiresTool:" ", attribute:"AWR",tag:"Survival", description: "You might use this skill when looking for food in the wilderness or finding ingredients.",},
    {name:"Forced March", requiresTool:" ", attribute:"END",tag:"Stamina", description: "You can use this skill when trying to push beyond the normal travel pace that you could manage in a day, whether by walking a greater distance or by walking a normal distance with a greater load.",},
    {name:"Forging", requiresTool:"x", attribute:"INT",tag:"Subterfuge", description: "This skill can help you replicate signatures or create official- looking documents. If you do well on an INT/Forging check, then your MC will likely give you a circumstantial bonus to INT/Disguising or CHA/Savoir Faire checks.",},
    {name:"Fortuity", requiresTool:" ", attribute:"Luck",tag:"", description: "Fortuity represents the likelihood that good things just happen to you. If your MC asks you to make a LUCK check to determine the likelihood of a positive outcome, you can add your Fortuity.",},
    {name:"Geography", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "You can use this skill when trying to remember where you are in relation to somewhere else, or when you want to deduce information about common geographical patterns in an area.",},
    {name:"Glassblowing", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to create stunning artistic glasswork, such as dining plates and even glass musical instruments.",},
    {name:"Gossiping", requiresTool:" ", attribute:"CHA",tag:"Influence", description: "You can use this skill to seed real or false information about a person, event, etc. among populated areas.",},
    {name:"History", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "This skill reflects your capacity for remembering historical events and your ability to quickly research historical events when given access to a library, university, or the like. Your MC might let you use this skill in tandem with another Knowledge skill when researching a particular field of knowledge, making an INT/History check and an INT check of the relevant Knowledge type.",},
    {name:"Instrument", requiresTool:"x", attribute:"CHA",tag:"Performance", description: "When you gain points in this skill, specify one type of instrument. When you have that instrument, you can use this skill to make better performances with that instrument. Your MC might rule that you can apply 1⁄2 of your Skill Points to related instruments; for example, if you have Instrument (Lute) +6, then your MC might allow you to play a banjo with a +3 bonus.",},
    {name:"Intimidating", requiresTool:" ", attribute:"CHA",tag:"Influence", description: "You can use this skill when trying to peel back someone&apos;s psyche and frighten them into cooperating with you.",},
    {name:"Intuiting", requiresTool:" ", attribute:"AWR",tag:"Observation", description: "This skill helps you assess when someone is being honest or if they might be hiding something.",},
    {name:"Investigating", requiresTool:" ", attribute:"AWR",tag:"Observation", description: "You might use this skill when looking for physical clues at a crime scene, or when looking for a secret door or hidden compartment in a room.",},
    {name:"Jeweling", requiresTool:" ", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, this skill can help you create gorgeous works of jewelry. Your MC might allow you to use your Jeweling skill in place of Appraising when you want to assess the value of a piece of jewelry.",},
    {name:"Law", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "You can use this skill when you want to recall or acquire information about the legal system in a settled area. You might also use this skill, along with the Entertaining and Persuading skills, to win a case in court.",},
    {name:"Leadership", requiresTool:" ", attribute:"CHA",tag:"Influence", description: "You might use this skill to bolster the resolve of a discouraged person or group of people, or to exert your status and influence over various officials and convince them to follow your commands.",},
    {name:"Leatherworking", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to make leather goods such as clothes, bags, or even armor.",},
    {name:"Lockpicking", requiresTool:"x", attribute:"INT",tag:"Subterfuge", description: "When you have a set of lock picks, you can use this skill to attempt picking any nonmagially sealed lock.",},
    {name:"Masonry", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to carve rock into sculptures or architectural stonework.",},
    {name:"Medicine", requiresTool:"x", attribute:"INT",tag:"Knowledge", description: "You can use this skill when trying to recall factual information about medicines, diseases, and the like, which can help you diagnose someone&apos;s symptoms. If you have bandages, you can make an INT/Medicine check to remove the Bleeding condition from a creature. Attempting this costs 3 AP, and unless otherwise specified from the source of the Bleeding condition, the DC is 14 + the amount of Bleeding damage. If you have the proper medicines, you can attempt to treat someone with a disease. The DC for this treatment, as well as the types of medicine that you need, will be mentioned in the disease&apos;s description.",},
    {name:"Menacing", requiresTool:" ", attribute:"STR",tag:"Stamina", description: "You can use this skill when trying to physically intimidate someone through a show of force.",},
    {name:"Military", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "This skill will help you know the proper terminology when speaking with members of a military and can help you when trying to recall information about a military institution.",},
    {name:"Nature", requiresTool:" ", attribute:"INT",tag:"Survival", description: "You might use this skill when trying to differentiate between edible and toxic mushrooms, recalling the behavior of wolf packs, or other information about the natural world.",},
    {name:"Navigating", requiresTool:"x", attribute:"AWR",tag:"Survival", description: "If you have a compass, astrolabe, sextant, or even just a map, you can use this skill to find your way through an otherwise confusing area of wilderness. Your MC might rule that you can make this check without the relevant tools, but the DC will be higher.",},
    {name:"Painting", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to create beautiful paintings.",},
    {name:"Perceiving", requiresTool:" ", attribute:"AWR",tag:"Observation", description: "You might make use of this skill when relying on sensory input such as scanning a tree line for enemies, looking for concealed weapons, listening for footsteps, or trying to identify a strange odor.",},
    {name:"Persuading", requiresTool:" ", attribute:"CHA",tag:"Influence", description: "You can use this skill when trying to influence someone through sound arguments or emotional appeal.",},
    {name:"Politics", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "When you take this skill, choose a specific region. Your MC will determine whether this should be a single city or a whole nation, based on the campaign they intend to run. When making INT checks related to the politics of that region, you can add this skill. When making INT checks related to the politics of another region, you can add 1⁄2 this skill.",},
    {name:"Pottery", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate clay and tools, you can use this skill to make decorative and functional pottery.",},
    {name:"Religion", requiresTool:" ", attribute:"INT",tag:"Knowledge", description: "When you take this skill, choose a specific religion. You could pick one of the pantheons listed on Deities, or work with your MC to come up with another religious tradition. When making INT checks related to the customs and beliefs of that religion, you can add this skill. When making INT checks related to the customs and beliefs of any other religion, you can add 1⁄2 this skill.",},
    {name:"Savoir Faire", requiresTool:" ", attribute:"CHA",tag:"Performance", description: "You can use this skill to fit into any sort of situation. You can appear at home both with peasants and with aristocrats.",},
    {name:"Scavenging", requiresTool:" ", attribute:"Luck",tag:"", description: "You can use this skill when trying to find food or supplies in an abandoned area. Your MC might also allow you to use this skill to determine how much loot you find on a body.",},
    {name:"Sheltering", requiresTool:" ", attribute:"AWR",tag:"Survival", description: "You might use this skill when you&apos;re in the wilderness to find a cave, hollow tree, or rocky bluff that can offer shelter from the elements.",},
    {name:"Sleight of Hand", requiresTool:" ", attribute:"INT",tag:"Subterfuge", description: "You can use this skill when attempting to pickpocket someone, or when trying to keep an item undiscovered as you are patted down.",},
    {name:"Smithing", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate metal and tools, you can use this skill to make wrought iron artistic works or to repair metal tools, weapons, and armor.",},
    {name:"Sneaking", requiresTool:" ", attribute:"DEX",tag:"Survival", description: "You could use this skill when skulking about and trying to remain physically out of sight.",},
    {name:"Sprinting", requiresTool:" ", attribute:"STR",tag:"Athleticism", description: "You can use this skill when attempting to cover a small distance in an incredibly short amount of time. This is usually not applicable in normal combat, but might be used in a chase sequence.",},
    {name:"Tracking", requiresTool:" ", attribute:"AWR",tag:"Survival", description: "You can use this skill when you are trying to follow a creature&apos;s trail.",},
    {name:"Tumbling", requiresTool:" ", attribute:"DEX",tag:"Acrobatics", description: "This skill helps you fall in such a way that you don&apos;t get hurt. In addition to allowing you to add dramatic flair to any performance you might put on, if you fall 40 ft or less, you can make a Tumbling check with a DC equal to the amount of feet you fell. If you succeed, halve the damage you would take and move 5 ft in a direction of your choice when you land.",},
    {name:"Vehicles (Land)", requiresTool:"x", attribute:"INT",tag:"Knowledge", description: "You can use this skill to efficiently use land vehicles such as carriages or war carts.",},
    {name:"Vehicles (Water)", requiresTool:"x", attribute:"INT",tag:"Knowledge", description: "You can use this skill to operate water vehicles, such as sailboats or galleons, with greater efficiency.",},
    {name:"Weaving", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to make textile goods such as clothing and blankets.",},
    {name:"Woodcarving", requiresTool:"x", attribute:"INT",tag:"Crafting", description: "When you have the appropriate tools, you can use this skill to whittle toys, fletch arrows, repair a wagon wheel, and the like.",},
    ];
    
    function populateMythcraftStandardSkills(){
		console.log("start - addAllStandardSkillsToWorkshopSkillList");
		//first empty the skills array:
		getSectionIDs("repeating_skills", function(idarray) {

		for(var i=0; i < idarray.length; i++) {
			removeRepeatingRow("repeating_skills_" + idarray[i]);
		}
		});
 


		//second load the skills:		

        for(let i=0;i<mcStandardSkills.length;i++){
    
        var newrowid = generateRowID();
        var newrowattrs = {};
        newrowattrs["repeating_skills_" + newrowid + "_skillName"] = mcStandardSkills[i].name;
        newrowattrs["repeating_skills_" + newrowid + "_requiresTool"] = mcStandardSkills[i].requiresTool;
        newrowattrs["repeating_skills_" + newrowid + "_attribute"] = mcStandardSkills[i].attribute;
        newrowattrs["repeating_skills_" + newrowid + "_description"] = mcStandardSkills[i].description;
        setAttrs(newrowattrs);
    
        }
		console.log("end - addAllStandardSkillsToWorkshopSkillList");
    }



function GetTheItem(itemname){
	for(leti=0;i<mcStandardWeapons.length;i++){
		if(itemName === mcStandardWeapons[i]){return mcStandardWeapons[i]; }
	}
	return {};
}

function GetThePouch(pouchName, listofContents){
	return {
		itemName:pouchname,
		contents:listofContents
	}
}

 


log("==> Checkpoint 3... <==");

on("clicked:bump_down_advantage", eventInfo => incrementAdvantage(-1));		

on("clicked:bump_up_advantage", eventInfo => incrementAdvantage(1));		

function incrementAdvantage(value){

    console.log("Increment Advantage - >"+value);  

    getAttrs(["advantage"], function(values) {
        setAttrs({                            
            advantage:  !isNaN(parseInt(values.advantage)) ? parseInt(values.advantage)+value :0 ; 
        });
    }); 
}


log("==> Checkpoint 4... <==");

function updateDefenses(){
	console.log("updateDefenses");
	
	getAttrs(["dexterity_dex","endurance_end","awareness_awr","intellegence_int","charisma_cha"], function(values) {
		console.log("gort values");
		let armorRating_AR = 10;
		let reflexes_REF = !isNaN(parseInt(values.dexterity_dex)) ? parseInt(values.dexterity_dex)+10 : 10 ;
		let fortitude_FORT = !isNaN(parseInt(values.endurance_end)) ? parseInt(values.endurance_end)+10 : 10 ;10 ; 
		let anticipation_ANT = !isNaN(parseInt(values.awareness_awr)) ? parseInt(values.awareness_awr)+10 : 10 ;10 ;
		let logic_LOG = !isNaN(parseInt(values.intellegence_int)) ? parseInt(values.intellegence_int)+10 : 10 ;0 ; 
		let willpower_WILL = !isNaN(parseInt(values.charisma_cha)) ? parseInt(values.charisma_cha)+10 : 10 ;
		//attr_armour_rating_ar_no_armour ?? 

		console.log("armorRating_AR: " +  armorRating_AR);
		console.log("values: " +  reflexes_REF + " | "+ values.dexterity_dex);
		console.log("values: " +   fortitude_FORT  + " | "+  values.endurance_end);
		console.log("values: " +   anticipation_ANT  + " | "+  values.awareness_awr);
		console.log("values: " +   logic_LOG + " | "+  values.intellegence_int);
		console.log("values: " +   willpower_WILL  + " | "+   values.charisma_cha);
		
		setAttrs({armor_rating_ar: armorRating_AR});
		setAttrs({reflexes_ref:reflexes_REF});
		setAttrs({fortitude_for:fortitude_FORT});
		setAttrs({anticipation_ant:anticipation_ANT});
		setAttrs({logic_log : logic_LOG});
		setAttrs({willpower_wil : willpower_WILL});
		
	});
	console.log("defenses Updated");
 }



log("==> Checkpoint 5... <==");



on(`clicked:launch_charmancer`, eventInfo => startCharactermancer("intro"));



log("==> Checkpoint load_lvl20_Bhrunai... <==");

on("clicked:load_lvl20_Bhrunai", function(){ 
	console.log("=================== Start Load Character ================= " );
	console.log("========================================================== " );
	console.log("===================   lvl20 Bhrunai      ================= " );
	console.log("========================================================== " );
	
let inventory = [
	GetTheItem("Brass Knuckles")
	];
//Inventory
/*
{ "Armor": "Tower Shield",     "AR": 0, "Tags": ["Shield", "Two-Handed", "Unwieldy"], "REF": "",    "FORT": "",       "ANT": "",  "LOG": "",  "WILL": "","STRmin":"3","DEXmax":"10",  "Speed":"-5",   "Resist": "",  "Cost": 100, "ARMod":"" , "flavorText":"Tower shields have the two-handed and unwieldy tags. Rather than improving your AR or your other defenses, tower shields grant you Total Cover on one side.", "XtraActions":[
{
	ActionName:"Brace",
	APCost:2,
	Description:"You may spend 2 AP to brace the shield, which grants Partial Cover to a creature standing directly behind you, provided that the creature is your Size or smaller."
}] },*/














	setAttrs({
	
		character_name: "Grandma Granite",
		character_lineage:"Bhrunai",
		level:"20 Pugalist Moss Farmer",
		height: "3&apos;3&qute;",
		weight: 122,
		eye_color: "Metalilic Purple",
		hair_color: "Reindeer Moss and Liverwort",
		other:"Infested with Springtails",
		ro_default_rolltype: "nada",
		default_ro:"nada",
		strength_str: 12,
		dexterity_dex: -3,
		endurance_end: 0,
		luck_luck: 12,
		awareness_awr: 4,
		intellect_int: 12,
		charisma_cha: 12,
		coordination_cor: 10,
		personality_n_backstory: "Grandma Granite moves slow but acts with deep intention.",
		hp_max:222,
		hp_current:222,
		shield:0,
		armour_rating_ar:16,
		armour_rating_ar_note:"(stone skin)",
		speed:20,
		spell_points_max:34,
		spell_points_current:34,
		spellcasting_ability:"CHA"
	});

	addAllStandardSkillsToWorkshopSkillList();
	updateDefenses();
	restDeathPoints();
	console.log("=================== End Load Character ================= " );
});

log("==> Checkpoint load_lvl5_Fiendblood... <==");

on("clicked:load_lvl5_Fiendblood", function(){ 
	console.log("=================== Start Load Character ================= " );
	console.log("========================================================== " );
	console.log("===================   lvl5 Fiendblood    ================= " );
	console.log("========================================================== " );
	

	let inventory = [
	GetTheItem("Trident")
	];




	setAttrs({
	
		character_name: "Test 1",
		character_lineage:"FiendBlood",
		level:"5",
		height: "",
		weight: 0,
		eye_color: "",
		hair_color: "",
		other:"",
		ro_default_rolltype: "nada",
		default_ro:"nada",
		strength_str: 1,
		dexterity_dex: -1,
		endurance_end: 0,
		luck_luck: 0,
		awareness_awr: 4,
		intellect_int: 0,
		charisma_cha: 3,
		coordination_cor: 2,
		personality_n_backstory: "Sheet given to me from Chat.",
		hp_max:36,
		hp_current:36,
		shield:0,
		armour_rating_ar:14,
		armour_rating_ar_note:"",
		speed:20,
		spell_points_max:0,
		spell_points_current:0,
		spellcasting_ability:""
	});

	addAllStandardSkillsToWorkshopSkillList();
	updateDefenses();
	restDeathPoints();
	console.log("=================== End Load Character ================= " );
});

log("==> Checkpoint load_lvl17_Lyla... <==");

on("clicked:load_lvl17_Lyla", function(){ 
	console.log("=================== Start Load Character ================= " );
	console.log("========================================================== " );
	console.log("=====   lvl 17 Lyla - Adv 4 withch 13-Kettek        ====== " );
	console.log("========================================================== " );
	/*
	let inventory = [
	GetTheItem("Amethyst Wand"),
	GetTheItem("Quarterstaff"),
	GetTheItem("Quarterstaff"),

	GetTheItem("Gambeson Armor"),

	GetThePouch("Gear",[ "Clothes (simple)", "medicine (basic)", "lamp","oil (flask)", "medical tome","inkpot", "quill pen", "waterskin"]),
	GetTheItem("Rations"),
	GetTheItem("Rations"),
	GetTheItem("Rations"),
	GetTheItem("Cooking Utinsels"),
	GetTheItem("Personal Trinkets"),
	GetTheItem("Personal Trinkets"),
	];
*/

	setAttrs({
	
		character_name: "Lyla Greoghal",
		character_lineage:"Kettek",
		level:"Adventurer 4, Witch 13",
		height: "6 ft. 1 in.",
		weight: 160,
		eye_color: "Green",
		hair_color: "Black",
		other:"Panther Fur",
		ro_default_rolltype: "nada",
		default_ro:"nada",
		strength_str: -1,
		dexterity_dex: 2,
		endurance_end: 10,
		luck_luck: 8,
		awareness_awr: 0,
		intellect_int: 0,
		charisma_cha: 2,
		coordination_cor: 0,
		personality_n_backstory: "Lyla felt the call of the wild and retreated to the heart of a deep, ancient wood at a very young age. She appeared at the doorstep of a coven who had foreseen her arrival for years. She lived a very happy life in the woods with her sisters for years, delving into primal secrets, herbalism, and alchemy. Around the age of 30, an elf appeared in her dreams - Knack - and they quickly became closer and closer and spent more of their dreamstate time together. After a few months, they realized they were in love. Moved by the powerful connection she shared with Knack, Lyla made the difficult decision to leave her beloved grove and venture into the world beyond. With her heart filled with love and an insatiable curiosity about the wonders that awaited, she bid farewell to her sisters and set forth on a grand adventure with her newfound companion",
		hp_max:114,
		hp_current:114,
		shield:0,
		armour_rating_ar:10,
		armour_rating_ar_note:"(Gambeson)",
		speed:20,
		spell_points_max:85,
		spell_points_current:85,
		spellcasting_ability:"END"
	});

	addAllStandardSkillsToWorkshopSkillList();
	updateDefenses();
	restDeathPoints();
	console.log("=================== End Load Character ================= " );
});



const sample={
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
	cost:35};

function retrieveCoreAttributes(){
	let returnObject =  { };

	console.log("start retrieveCoreAttributes");
	getAttrs(["strength_str","dexterity_dex","endurance_end","awareness_awr","intellegence_int","charisma_cha", "luck_luck", "coordination_cor"], function(values) {
		console.log("gort core attributes");
		let strength_STR = !isNaN(parseInt(values.strength_str)) ? parseInt(values.strength_str) : -4 ;
		let dexterity_DEX = !isNaN(parseInt(values.dexterity_dex)) ? parseInt(values.dexterity_dex) : -4 ;
		let endurance_END = !isNaN(parseInt(values.endurance_end)) ? parseInt(values.endurance_end) : -4 ; 
		let awareness_AWR = !isNaN(parseInt(values.awareness_awr)) ? parseInt(values.awareness_awr) : -4 ;
		let intellegence_INT = !isNaN(parseInt(values.intellegence_int)) ? parseInt(values.intellegence_int) : -4 ; 
		let charisma_CHA = !isNaN(parseInt(values.charisma_cha)) ? parseInt(values.charisma_cha) : -4 ;
		let luck_LUCK = !isNaN(parseInt(values.luck_luck)) ? parseInt(values.luck_luck) : -4 ;
		let coordination_COR = !isNaN(parseInt(values.coordination_cor)) ? parseInt(values.coordination_cor) : -4 ;
		returnObject =  { 
			str:strength_STR,
			dex:dexterity_DEX,
			end:endurance_END,
			awr:awareness_AWR,
			int:intellegence_INT,
			cha:charisma_CHA,
			luck:luck_luck,
			cor:coordination_cor,
		};
    });
	return returnObject;
}


function calcAPC(actionPointCost, coreAttrs){


	let base =  !isNaN(parseInt(actionPointCost.BaseValue)) ? parseInt(actionPointCost.BaseValue) : 0 ;
	let addTo =  !isNaN(parseInt(actionPointCost.addAttribute)) ? parseInt(actionPointCost.addAttribute) : 0 ;
	let min =  !isNaN(parseInt(actionPointCost.min)) ? parseInt(actionPointCost.min) : 0 ;


	switch (actionPointCost.subtractFromAttribute) {
		case "STR":
			return ( base>0 &&  0 === addTo)? Math.max(coreAttrs.str - base, min):Math.max(coreAttrs.str + addTo, min);
		case "DEX":
			return ( base>0 &&  0 === addTo)? Math.max(coreAttrs.dex - base, min):Math.max(coreAttrs.dex + addTo, min);
		case "END":
			return ( base>0 &&  0 === addTo)? Math.max(coreAttrs.end - base, min):Math.max(coreAttrs.end + addTo, min);
		case "AWR":
			return ( base>0 &&  0 === addTo)? Math.max(coreAttrs.awr - base, min):Math.max(coreAttrs.awr + addTo, min);
		case "INT":
			return ( base>0 &&  0 === addTo)? Math.max(coreAttrs.int - base, min):Math.max(coreAttrs.int + addTo, min);
		case "CHA":
			return ( base>0 &&  0 === addTo)? Math.max(coreAttrs.cha - base, min):Math.max(coreAttrs.cha + addTo, min);
		default:
			console.log("Weapons of type "+actionPointCost.subtractFromAttribute+ "not supported.");
		return  999;
	}

}


function getStatModifier(item){

	var coreAttrs = retrieveCoreAttributes();
	var valueToUse;
	switch (item) {
		case "STR":
		valueToUse = ( coreAttrs.str);
		case "DEX":
		valueToUse =  ( coreAttrs.dex);
		case "END":
		valueToUse =  ( coreAttrs.end  );
		case "AWR":
		valueToUse =  ( coreAttrs.awr  );
		case "INT":
		valueToUse =  ( coreAttrs.int  );
		case "CHA":
		valueToUse =  ( coreAttrs.cha  );
		default:
			console.log("cannot get Stat Modifier "+ item + ".. it's not supported?");
		return  999;
	}

	return mcHitPointLookup[valueToUse+3];

}



function convertWeaponToAction(weapon){
	let coreAttrs = retrieveCoreAttributes();

	console.log("gotCoreAttrib");
	return  {
		apc:calcAPC(weapon.actionPointCost, coreAttrs),
		displayName:weapon.name,
		rollToHit:"",
		range:"",
		damage:"",
		damageDice:"",
		damageType:"",

	};
};

console.log("Checkpoint Omega" );

function addWeapons(){

	
	console.log("start add weapon");
	let varAction = convertWeaponToAction(sample);
	console.log("start - repeating_actions");
	//first empty the actions array:
	getSectionIDs("repeating_actions", function(idarray) {
	for(var i=0; i < idarray.length; i++) {
		removeRepeatingRow("repeating_actions_" + idarray[i]);
	}
	});



	var newrowid = generateRowID();
	var newrowattrs = {};
	newrowattrs["repeating_actions_" + newrowid + "_apc"] = varAction.apc;
	newrowattrs["repeating_actions_" + newrowid + "_displayName"] = varAction.displayName;
	//newrowattrs["repeating_actions_" + newrowid + "_rollToHit"] = varAction.rollToHit;
	//newrowattrs["repeating_actions_" + newrowid + "_range"] = varAction.range;
	newrowattrs["repeating_actions_" + newrowid + "_damage"] = varAction.damage;
	newrowattrs["repeating_actions_" + newrowid + "_damage_dice"] = varAction.damageDice;
	setAttrs(newrowattrs);

	// }
	console.log("end - addAllStandardSkillsToWorkshopSkillList");


}
//
on('change:repeating_action:attack0_ap_base change:repeating_action:attack0_ap_plus_stat change:repeating_action:attack0_ap_minus_stat change:repeating_action:attack0_ap_minimum', function (e) {
    getAttrs(['repeating_action_attack0_ap_base','repeating_action_attack0_ap_plus_stat','repeating_action_attack0_ap_minus_stat','repeating_action_attack0_ap_minimum'], function (item) {
        var actionPointBlock = {
			BaseValue:item.repeating_action_attack0_ap_base,
			addAttribute:item.repeating_action_attack0_ap_plus_stat,
			subtractFromAttribute:item.repeating_action_attack0_ap_minus_stat,
			 min:item.repeating_action_attack0_ap_minimum}
		setAttrs({
			repeating_action_attack0_ap_calculated:  calcAPC(actionPointBlock,retrieveCoreAttributes() )
            
        });
    });
});


//List of attributes contained in our repeating section that we want to filter by, or that control the filtering. Make sure to update this with the actual attributes that you want to filter by.
const equipmentFilterAttributes = ['name','filtered'];
//We setup a listener to look for changes in our filter input and the names of the equipment so that if the user later adds an item that matches the filter, it will be added to our filtered view
on('change:equipment_filter change:repeating_equipment:name',(event) => {
  getSectionIDs('repeating_equipment',(idArray) => {
    //Assemble our array of attributes to get for the filter operation. This will include all the filterable attributes from the repeating section.
    const getArr = idArray.reduce((m,id) => {
      m.push(...equipmentFilterAttributes.map(n => `repeating_equipment_${id}_${n}`))
      return m;
    },['equipment_filter']);
    getAttrs(getArr,(attributes) => {
      //Empty object to accumulate our changes in so that we can use just a single setAttrs
      const setObj = {}
      //Iterate over each repeating row and check if the name contains the name to search for.
      //Your actual filter logic can be anything you want, just make sure to set the row's filtered attribute to 1 if it meets the criteria and 0 if it doens't.
      idArray.forEach(id => {
        //create the row prepend so we don't have to remake it for all operations
        const row = `repeating_equipment_${id}`;
        let filtered = 0;
        const rowName = attributes[`${row}_name`].toLowerCase();
        const filterName = attributes.equipment_filter.toLowerCase();
        if(
          filterName &&
          rowName.includes(filterName)
        ){
          setObj[`${row}_filtered`] = 1;
        }else{
          setObj[`${row}_filtered`] = 0;
        }
      });
      setAttrs(setObj,{silent:true});
    })
  })
})

const diceProgression =["1d1","1d4","1d6","1d8","1d10", "1d12"];



on("clicked:doUpdate", function() {
	console.log("do doUpdate");
	updateDefenses();
	//addAllStandardSkillsToWorkshopSkillList();
	restDeathPoints();
	addWeapons();
	populateMythcraftStandardSkills()
	console.log("finish doUpdate");
});	
	
	  const stats = ["dexterity_dex","endurance_end","awareness_awr","intellegence_int","charisma_cha"];
	  stats.forEach(function(stat) {
		  on(`change:${stat}`, function() {
			updateDefenses();
		  });
	 }); 
	 
	// </script>
