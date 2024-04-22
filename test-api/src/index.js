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
armourIndex("Adamantine Scale Mail", "Medium Armour", "Very Rare", "Magical Plate: All incoming damage is reduced by 1", "Adamantine Backlash: When a melee attack hits you, the attacker is sent Reeling for 2 turns.", 1300, 16, "Medium Armour");
armourIndex("Armour of Agility", "Medium Armour", "Very Rare", "Exotic Material: Add your Dexterity Modifier to your Armour Class. Additionally, this armour does not impose Disadvantage on Stealth Ability Checks.", "Saving Throw +2", 2900, 17, "Medium Armour");
armourIndex("Breastplate", "Medium Armour", "Common", null, null, 40, 12, "Medium Armour");
armourIndex("BarSkin Armour", "Medium Armour", "Rare", "Forest Aegis: You are invested with the power of the meadows and woods of the land, and have the effect of Barkskin, increasing your Armour Class to 16.", "Advantage on Constitution Saving Throws Checks.", 420, 12, "Medium Armour");
/*
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
armourIndex("", "Medium Armour", "Common Uncommon Rare Very Rare", "", "", 0, 0, "Medium Armour");
*/



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