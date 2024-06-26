const express = require('express');
const app = express();
const port = 5000;

const Armour = [];

function armourIndex(name,type,rarity,effect1,effect2,value,ac,proficiency) {
    Armour.push({
        name,
        type,
        rarity,
        effect1,
        effect2,
        value,
        ac,
        proficiency
    });
}

function weaponIndex(name,type,rarity,damage,damageType,range,weight,enchantment){
    Weapons.push({
        name,
        type,
        rarity,
        damage,
        damageType,
        range,
        weight,
        enchantment
    });
}

//All Clothing Entries
armourIndex("Vest of Soul Rejuvination","Clothing","Very Rare","Defier‘s Rejuvenation: Whenever the wearer succeeds on a Saving Throw against a spell, they regain 1-4 hit points.","Greater Kushigo Counter: The wearer can use a reaction to make an unarmed strike against any attacker that misses.", 1600, 10 ,"Clothing");
armourIndex("The Graceful Cloth", "Clothing", "Rare", "Cat's Grace: You gain Cat's Grace and increase your Dexterity score by 2, to a maximum 20.","Nimble As a Cat: You gain a +1 bonus to Dexterity Saving Throws and also increase your Jump distance by 1.5m.", 800, 10, "Clothing");
armourIndex("Simple Cloth", "Clothing", "Common", "Martial Arts Lethality: Gain +2 bonus to unarmed Attack Rolls and damage of throwing attacks.", null, 600, 10, "Clothing");
armourIndex("Robe of Exquisite Focus", "Clothing", "Rare", "High Spellcasting: You gain a +1 bonus to Spell Save DC.", null, 800, 10, "Clothing");
armourIndex("Robe of Spell Resistance", "Clothing", "Rare", "Saving Throw +2", null, 800, 10, "Clothing");
armourIndex("Robe of Supreme Defences", "Clothing", "Very Rare", "Exquisite Focus: While concentrating, you add your Spellcasting Ability Modifier to your Saving Throws and gain a +1 bonus to Armour Class.", null, 1600, 10, "Clothing");
armourIndex("Robe of the Weave", "Clothing", "Very Rare", "Arcane Enchantment: You gain a +1 bonus to Spell Save DC and spell attack rolls.", "Weave Eater: Whenever the wearer succeeds a Saving Throw against a spell, they regain 1~6 hit points.", 2900, 10, "Clothing");
armourIndex("Potent Robe", "Clothing", "Very Rare", "Gregarious Caster: Your cantrips deal additional damage equal to your Charisma Modifier.", "Well-Liked and Well-Fortified: At the beginning of the wearer's turn, the robe activates, granting them temporary hit points equal to their Charisma Modifier.", 1600, 10, "Clothing");
armourIndex("Infernal Robe", "Clothing", "Very Rare", "Fire Shield: Warm", "Grants Resistance to Fire Damage.", 1600, 10, "Clothing");
armourIndex("Garb of The Land and Sky", "Clothing", "Rare", "Mountainous Poise: While using Patient Defence, you also benefit from the effect of Blade Ward.", "Breezeswift Speed: While using Step of The Wind, your next Attack Roll has Advantage and deals an additional 1~8 Force Damage.", 800, 10, "Clothing");
armourIndex("Bonespike Garb", "Clothing", "Very Rare", "Slabjaw Determination: You gain 15 temporary hit points whenever you Rage.", "Exoskeletal Endurance: Reduce all incoming damage by 2. When the wearer is struck by a melee attack, the attacker takes 2 Piercing damage.", 1600, 10, "Clothing");
armourIndex("Drunken Cloth", "Clothing", "Rare", "Snowy Liver: While Drunk you have Advantage on Constitution Saving Throws, and you gain temporary hit points equal to your Constitution Modifier at the start of your turn.", null, 800, 10, "Clothing");
armourIndex("Poisoner's Robe", "Clothing", "Uncommon", "Poison Trails: When the wearer casts a spell that deals Poison damage, it deals an additional 1d4 Poison Damage.", null, 410, 10, "Clothing");
armourIndex("Robe of Summer", "Clothing", "Uncommon", "Resistance to Cold Damage", null, 250, 10, "Clothing");
armourIndex("Simple Robe", "Clothing", "Common", null, null, 20, 10, "Clothing");
armourIndex("Barbarian Clothes", "Clothing", "Common", null, null, 11, 10, "Clothing");
armourIndex("The Graceful Cloth (Cat)", "Clothing", "Rare", "Cat's Grace: You gain Cat's Grace and increase your Dexterity score by 2, to a maximum 20.","Nimble As a Cat: You gain a +1 bonus to Dexterity Saving Throws and also increase your Jump distance by 1.5m.", 800, 10, "Clothing");
armourIndex("Obsidian Laces Robe", "Clothing", "Rare", "Flaming Revenge: On a successful Saving Throw against a foe's spell, deal 5-8 Fire Damage to them.", "Grants Resistance to Fire Damage", 880, 10, "Clothing");
armourIndex("The Mighty Cloth", "Clothing", "Rare", "Bull's Strength: You gain Bull's Strength and increase your Strength score by 2, to a maximum of 20.", "Unwavering Bull: You cannot be pushed against your will and you have an Advantage on Saving Throws against being Restrained.", 800, 10, "Clothing");
armourIndex("Enraging Heart Garb", "Clothing", "Rare", "Ruintamer Heart: While Raging, the wearer generates 2 turns of Wrath.", "Constitution +2 (Up to 20)", 800, 10, "Clothing");
armourIndex("Icebite Robe", "Clothing", "Rare", "Grants Resistance to Ice Damage", null, 800, 10, "Clothing");
armourIndex("Viconia's Priestess Robe", "Clothing", "Rare", "Shar's Umbrae: While obscured, the wearer has Advantage on Stealth Checks.", "Sharran Veil: Shield of Faith also grants you a +2 bonus to all Saving Throws.", 1600, 10, "Clothing");
armourIndex("Moon Devotion Robe", "Clothing", "Very Rare", "Selune's Protection: While the wearer has Mage Armour, each successful Saving Throw causes the source of the Saving Throw to take 1~4 Radiant damage.", "Advantage on Constitution Saving Throw Checks.", 1600, 10, "Clothing");
armourIndex("Cloth or Authority", "Clothing", "Rare", "Dauntless: You can't be Frightened, and cannot be afflicted with other emotion-altering conditions.", "Authority: You have Advantage on Intimidation Checks and Insight Checks.", 800, 10, "Clothing");
armourIndex("Veil of the Morning", "Clothing", "Very Rare", "Let the Undead Blanch with Fear!: Undead have Disadvantage on Attack Rolls against you, and you have Advantage on Saving Throws against their actions and spells.", null, 1600, 10, "Clothing");
armourIndex("Wavemother's Robe", "Clothing", "Very Rare", "Temperature Adjustment: You have resistance to Fire and Cold Damage.", "Water Rejuvenation: If the wearer is standing in a water surface at the start of their turn, they heal 1~4 hit points.", 800, 10, "Clothing");


//All Light Armour Entries
armourIndex("Armour of Landfall", "Light Armour", "Very Rare", "High Spellcasting: You gain a +1 bonus to Spell Save DC.", "Green Bed Regeneration: When starting your turn on Plant Growth Surface or Vine Surface regain 1d4 hit points.", 1000, 12, "Light Armour");
armourIndex("Armour of Moonbasking", "Light Armour", "Very Rare", "Lunar Bestial Vitality: You gain 22 temporary hit points after casting Wild Shape. While those temporary hit points are active reduce all incoming damage by 1.", "Lunar Bestial Fortitude: You have a +2 bonus to Armour Class. You have Advantage on Saving Throws against Spells. This effect persists while using your druidic Wild Shape ability.", 1400, 12, "Light Armour");
armourIndex("Armour of The Sporekeeper", "Light Armour", "Very Rare", "Malefic Funghi: The wearer gains a +1 bonus to Spell Save DC and when dealing Necrotic damage, they deal an additional 1 Necrotic Damage.", "Spore Sacks: While imbued with Symbiotic Entity, you can spread Bibberbang Spores, Timmask Spores, and Haste Spores.", 1000, 12, "Light Armour");
armourIndex("Bhaalist Armour", "Light Armour", "Very Rare", "Aura of Murder: Enemies within 2m become Vulnerable to Piercing damage, unless they are Resistant or Immune to it.", "Ambusher: Gain a +2 bonus to Initiative Rolls.", 2000, 13, "Light Armour");
armourIndex("Drow Leather Armour", "Light Armour", "Common", null, null, 40, 11, "Light Armour");
armourIndex("Broken Padded Armour","Light Armour","Common",null,null,70, 11, "Light Armour");
armourIndex("Drow Studded Leather Armour","Light Armour","Rare","Stealth +1", null, 600, 12, "Light Armour");
armourIndex("Druid Leather Armour","Light Armour","Common",null,null, 40, 11, "Light Armour");
armourIndex("Elegant Studded Leather","Light Armour","Very Rare","Ambusher: Gain a +2 bonus to Initiative Rolls.","Advantage on Stealth Checks.", 2000, 14, "Light Armour");
armourIndex("Drowish Studded Leather Armour","Light Armour","Common",null, null, 500, 12, "Light Armour");
armourIndex("Leather Armour","Light Armour","Common",null, null , 120, 11, "Light Armour");
armourIndex("Leather Armour +1","Light Armour","Uncommon","Stealthy: Gain a +1 bonus to Stealth Checks.", null, 600, 12, "Light Armour");
armourIndex("Leather Armour +2","Light Armour","Rare","Stealthy: Gain a +1 bonus to Stealth Checks.","Balance: Gain a +1 bonus to Dexterity Saving Throws and Checks.", 380, 13, "Light Armour");
armourIndex("Padded Armour","Light Armour","Common",null, null, 70, 11, "Light Armour");
armourIndex("Padded Armour +1","Light Armour","Uncommon","Superior Padding: You take 1 less Bludgeoning damage.", null ,350, 12, "Light Armour");
armourIndex("Padded Armour +2","Light Armour","Rare","Superior Padding: You take 2 less Bludgeoning damage.", null ,310, 13, "Light Armour");
armourIndex("Penumbral Armour","Light Armour","Rare","Stealthier: While obscured, the wearer gains a +3 bonus to Stealth Checks.",null, 1000, 12, "Light Armour");
armourIndex("Scarlet Leather Armour","Light Armour","Uncommon","Stealthy: Gain a +1 bonus to Stealth Checks.", null, 160, 12, "Light Armour");
armourIndex("Selunite Robe","Light Armour","Common", null, null, 40, 11, "Light Armour");
armourIndex("Shadeclinger Armour","Light Armour","Rare","Shadeclinger: While obscured, the wearer has Advantage on Saving Throws.","Stealth +1", 510, 12, "Light Armour");
armourIndex("Simple Jerkin","Light Armour","Common", null, null, 40, 11, "Light Armour");
armourIndex("Spidersilk Armour","Light Armour","Rare","Stealthy: Gain a +1 bonus to Stealth Checks.","Advantage on Constitution Saving Throws Checks.",420, 12, "Light Armour");
armourIndex("Studded Leather Armour","Light Armour","Common",null,null,130, 12, "Light Armour");
armourIndex("Studded Leather Armour","Light Armour","Rare","Superior Padding: You take 1 less bludgeoning damage.",null,500, 13, "Light Armour");
armourIndex("Studded Leather Armour +1","Light Armour","Uncommon","Superior Padding: You take 1 less Bludgeoning damage.",null,750, 13, "Light Armour");
armourIndex("Studded Leather Armour +2","Light Armour","Rare","Superior Padding: You take 1 less Bludgeoning damage.","Ambusher: Gain a +1 bonus to Initiative Rolls.",770, 14, "Light Armour");
armourIndex("Torment Drinker Armour","Light Armour","Rare","Bolstering Critical: When scoring a Critical Hit or killing a hostile creature, wearer gains 15 temporary hit points.",null,1000, 13, "Light Armour");

//All Medium Armour Entries 39
armourIndex("+1 Breastplate", "Medium Armour", "Uncommon", null, 100, 14, "No");
armourIndex("Breastplate", "Medium Armour", "Uncommon", null, 100, 14, "No");
armourIndex("Chain Shirt", "Medium Armour", "Uncommon", null, 50, 13, "No");
armourIndex("Chain Shirt", "Medium Armour", "Uncommon", null, 50, 13, "No");
armourIndex("Damaged Dark Justiciar Armour", "Medium Armour", "Uncommon", null, 50, 13, "No");
armourIndex("Damaged Scale Mail", "Medium Armour", "Uncommon", null, 25, 12, "Yes");
armourIndex("Dreamwalker Plate", "Medium Armour", "Rare", null, 180, 15, "Yes");
armourIndex("Githyanki Half Plate", "Medium Armour", "Rare", null, 180, 15, "Yes");
armourIndex("Half Plate Armour", "Medium Armour", "Rare", null, 180, 15, "Yes");
armourIndex("Half Plate Armour", "Medium Armour", "Rare", null, 180, 15, "Yes");
armourIndex("Half Plate Armour", "Medium Armour", "Rare", null, 180, 15, "Yes");
armourIndex("Hide Armour", "Medium Armour", "Uncommon", null, 60, 12, "No");
armourIndex("Scale Mail", "Medium Armour", "Uncommon", null, 65, 14, "Yes");
armourIndex("Scale Mail of Devotion", "Medium Armour", "Uncommon", null, 65, 14, "Yes");
armourIndex("Scale Mail of the Ancients", "Medium Armour", "Uncommon", null, 65, 14, "Yes");
armourIndex("Scale Mail of Vengeance", "Medium Armour", "Uncommon", null, 65, 14, "Yes");
armourIndex("Breastplate +1", "Medium Armour", "Rare", "Superior Plate: You take 1 less Piercing damage.", 200, 15, "No");
armourIndex("Chain Shirt +1", "Medium Armour", "Rare", "Superior Material: You take 1 less Slashing damage.", 650, 14, "No");
armourIndex("Dark Justiciar Mail", "Medium Armour", "Uncommon", "Nightsinger's Reply: While Obscured by shadow, the wearer deals 1d4 Necrotic damage to attackers that hit them with a melee attack.", 280, 13, "No");
armourIndex("Half Plate Armour +1", "Medium Armour", "Rare", "Superior Plate: You take 1 less Piercing damage.", 360, 16, "Yes");
armourIndex("Half Plate Armour +1", "Medium Armour", "Rare", "Superior Plate: You take 1 less Piercing damage.", 360, 16, "Yes");
armourIndex("Hedge Wanderer Armour", "Medium Armour", "Uncommon", "Balance: Gain a +1 bonus to Dexterity Saving throws and Ability checks. Nature +1.", 130, 13, "No");
armourIndex("Hide Armour +1", "Medium Armour", "Uncommon", "Balance: Gain a +1 bonus to Dexterity Saving throws and Ability checks.", 105, 13, "No");
armourIndex("Luminous Armour", "Medium Armour", "Uncommon", "Radiating Shockwave: When the wearer deals Radiant damage, they cause a Radiant Shockwave.", 250, 15, "No");
armourIndex("Scale Mail +1", "Medium Armour", "Rare", "Superior Material: You take 1 less Slashing damage.", 160, 15, "Yes");
armourIndex("Slippery Chain Shirt", "Medium Armour", "Uncommon", "Cautious Healer: When the wearer heals a creature, it automatically Disengages and won't trigger Opportunity Attacks.", 130, 13, "No");
armourIndex("The Oak Father's Embrace", "Medium Armour", "Uncommon", "Order of Nature: Undead creatures that hit the wearer receive 1d6 Radiant. Beasts that hit the wearer deal an additional 1d6 Radiant.", 130, 13, "No");
armourIndex("Barkskin Armour", "Medium Armour", "Uncommon", "Forest Aegis: You are invested with the power of the meadows and woods of the land, and have the effect of Barkskin, increasing your Armour Class to 16. Advantage on Constitution Saving throws.", 420, 12, "No");
armourIndex("Breastplate +2", "Medium Armour", "Rare", "Superior Plate: You take 1 less Piercing damage. Balance: Gain a +1 bonus to Dexterity Saving throws and Ability checks.", 600, 16, "No");
armourIndex("Chain Shirt +2", "Medium Armour", "Rare", "Superior Material: You take 1 less Slashing damage. Balance: Gain a +1 bonus to Dexterity Saving throws and Ability checks.", 210, 15, "No");
armourIndex("Dark Justiciar Half-Plate", "Medium Armour", "Epic", "Shar's Umbrae: While obscured, the wearer has Advantage on Stealth Checks. Advantage on Constitution Saving throws. Shar's Aegis: Can cast Shield of Faith.", 1450, 16, "No");
armourIndex("Elven Chain", "Medium Armour", "Rare", "Elven Chain: You are considered Proficient with this armour while wearing it. Elven Agility: The wearer has a +2 bonus to Initiative Rolls and Advantage on Dexterity Saving throws.", 510, 14, "No");
armourIndex("Half Plate Armour +2", "Medium Armour", "Epic", "Superior Plate: You take 2 less Piercing damage.", 1100, 17, "Yes");
armourIndex("Hide Armour +2", "Medium Armour", "Rare", "Balance: Gain a +1 bonus to Dexterity Saving throws and Ability checks. Ambusher: Gain a +1 bonus to Initiative Rolls.", 310, 14, "No");
armourIndex("Psionic Ward Armour", "Medium Armour", "Epic", "Psionic Ward: If the item detects that the wearer is gith, they have Resistance to Psychic damage. Whenever the wearer succeeds on a Saving throw against a spell, they regain 1d4 hit points.", 1450, 15, "Yes");
armourIndex("Scale Mail +2", "Medium Armour", "Rare", "Superior Material: You take 1 less Slashing damage. Ambusher: Gain a +1 bonus to Initiative Rolls.", 480, 16, "Yes");
armourIndex("The Jolty Vest", "Medium Armour", "Rare", "Superior Material: You take 1 less Slashing damage. Countershock: When the wearer takes damage while having Lightning Charges, the attacker must succeed a Dexterity Saving throw or become Shocked.", 510, 14, "No");
armourIndex("Unwanted Masterwork Scalemail", "Medium Armour", "Rare", "Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks. Resistance to Fire damage.", 640, 16, "No");
armourIndex("Yuan-Ti Scale Mail", "Medium Armour", "Rare", "Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks. Ambusher: Gain a +1 bonus to Initiative Rolls.", 640, 15, "No");
armourIndex("Adamantine Scale Mail", "Medium Armour", "Epic", "Magical Plate: All incoming damage is reduced by 1. Adamantine Backlash: When a melee attack hits you, the attacker is sent Reeling for 2 turns. Attackers can't land Critical Hits on the wearer.", 1300, 16, "Yes");
armourIndex("Armour of Agility", "Medium Armour", "Epic", "Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks. Saving throws +2.", 2900, 17, "No");
armourIndex("Dark Justiciar Half-Plate", "Medium Armour", "Epic", "Shar's Umbrae: While obscured, the wearer has Advantage on Stealth Checks. Shar's Protection: While the wearer has Shield of Faith active, reduce all incoming damage by 2 and reflect damage received back at the attacker, who takes 1d4 Necrotic. Advantage on Constitution Saving throws. Shar's Aegis: Cast as a level 1 spell (Recharge: Long rest).", 2900, 17, "No");
armourIndex("Flame Enamelled Armour", "Medium Armour", "Epic", "Seldom Caught Unawares: You gain a +2 bonus to Initiative rolls. Endurance by Fire: You have Resistance to Fire damage and a +2 bonus to Saving throws. Fire Shield: Warm: Cast as a level 4 spell (Recharge: Long rest).", 2900, 16, "Yes");
armourIndex("Sharpened Snare Cuirass", "Medium Armour", "Rare", "Exotic Material: Add your full Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks. Sharpened Snare: Creatures have Disadvantage on Saving throws when resisting your attacks and spells that inflict Restrained.", 830, 14, "No");


//All Heavy Armour Entries
armourIndex("Chain Mail", "Heavy Armour", "Uncommon", null, 400, 16, "Yes");
armourIndex("Plate Armour", "Heavy Armour", "Uncommon", null, 400, 18, "Yes");
armourIndex("Ring Mail Armour", "Heavy Armour", "Uncommon", null, 300, 14, "Yes");
armourIndex("Splint Armour", "Heavy Armour", "Uncommon", null, 240, 17, "Yes");
armourIndex("Chain Mail +1", "Heavy Armour", "Rare", "Superior Material: You take 1 less Slashing damage.", 260, 17, "Yes");
armourIndex("Plate Armour +1", "Heavy Armour", "Rare", "Superior Plate: You take 1 less Piercing damage.", 800, 19, "Yes");
armourIndex("Protective Plate", "Heavy Armour", "Rare", "Grants Resistance to Necrotic damage. Does not give disadvantage on stealth checks.", 1000, 18, "No");
armourIndex("Ring Mail Armour +1", "Heavy Armour", "Rare", "Body Aid: Gain a +1 bonus to Strength Saving throws and Ability checks.", 200, 15, "Yes");
armourIndex("Splint Armour +1", "Heavy Armour", "Rare", "Superior Plate: You take 1 less Piercing damage.", 480, 18, "Yes");
armourIndex("Armour of Devotion", "Heavy Armour", "Epic", "Eternal Devotion: Recite your Oath to regain 1 Paladin Channel Oath Charge (Recharge: Long rest).", 3200, 18, "Yes");
armourIndex("Cerebral Citadel Armour", "Heavy Armour", "Epic", "Frightened Immunity: You can't be Frightened. Illithid Protection: If the wearer is infested by a mind flayer tadpole, they gain +1 to Intelligence, Wisdom, and Charisma Saving throws.", 3200, 18, "Yes");
armourIndex("Chain Mail +2", "Heavy Armour", "Epic", "Superior Material: You take 2 less Slashing damage.", 770, 18, "Yes");
armourIndex("Dwarven Splintmail", "Heavy Armour", "Epic", "Superior Plate: You take 1 less Piercing damage. Body Aid: Gain a +1 bonus to Strength Saving throws and Ability checks. Constitution +2 (Max 20)", 1900, 19, "Yes");
armourIndex("Flawed Helldusk Armour", "Heavy Armour", "Epic", "Lesser Infernal Retribution: When you are hit by a foe within 2m/7ft, it might take 1d4 Fire damage. Superior Plate: You take 1 less Piercing damage.", 3200, 18, "Yes");
armourIndex("Plate Armour +2", "Heavy Armour", "Epic", "Exceptional Plate: You take 2 less damage from Slashing, Piercing and Bludgeoning sources.", 2400, 20, "Yes");
armourIndex("Ring Mail Armour +2", "Heavy Armour", "Epic", "Superior Material: You take 1 less Slashing damage. Body Aid: Gain a +1 bonus to Strength Saving throws and Ability checks.", 600, 16, "Yes");
armourIndex("Rippling Force Mail", "Heavy Armour", "Epic", "Force Absorption: Gain 2 turns of Force Conduit when taking Slashing, Piercing, or Bludgeoning damage.", 1000, 17, "Yes");
armourIndex("Splint Armour +2", "Heavy Armour", "Epic", "Superior Plate: You take 1 less Piercing damage. Body Aid: Gain a +1 bonus to Strength Saving throws and Ability checks.", 1450, 19, "Yes");
armourIndex("Adamantine Splint Armour", "Heavy Armour", "Epic", "Magical Plate: All incoming damage is reduced by 2. Intense Adamantine Backlash: When a melee attack hits you, the Attacker is sent Reeling for 3 turns. Attackers can't land Critical Hits on the wearer.", 3800, 18, "Yes");
armourIndex("Armour of Persistence", "Heavy Armour", "Epic", "Magical Plate: All incoming damage is reduced by 2. Legendary Persistence: You gain Resistance and Blade Ward.", 6400, 20, "Yes");
armourIndex("Blackguard's Plate", "Heavy Armour", "Epic", "Magical Plate: All incoming damage is reduced by 1. Advantage on Wisdom Saving throws.", 6400, 19, "Yes");
armourIndex("Emblazoned Plate of the Marshal", "Heavy Armour", "Epic", "Magical Plate: All incoming damage is reduced by 2. Endurance by Fire: You have Resistance to Fire damage and a +2 bonus to Saving throws. Fire Shield: Cast as a level 4 spell (Recharge: Long rest).", 6400, 19, "Yes");
armourIndex("Reaper's Embrace", "Heavy Armour", "Epic", "Magical Plate: All incoming damage is reduced by 2. Reaper's Rigidity: When activated, you can't be moved against your will by any spell or action, but have Disadvantage on Dexterity Saving throws. Howl of the Dead: Let out a bone-chilling howl that Numbs all nearby creatures.", 6400, 19, "Yes");
armourIndex("Helldusk Armour", "Heavy Armour", "Epic", "Helldusk Armour: You are considered Proficient with this armour while wearing it. Infernal Retribution: When you succeed a Saving Throw, the caster receives Burning for 3 turns. Prime Aegis of Fire: You have Resistance to Fire damage and cannot be Burned. You take 3 less damage from all sources. Fly: Grants the ability to Fly.", 8000, 21, "No");



app.get('/armour', (req, res) => {
    res.json(Armour);
});


app.get('/', (req, res) => {
    res.send('Use /armour to get armour data.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/armour`);
});

// Path: package.json