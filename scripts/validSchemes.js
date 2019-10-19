var logoSchemes = [],
		backgroundSchemes = [];

class validColorSheme {
	constructor(logoColor) {
		this.logoColor = logoColor;
		this.backgroundColorSchemes = ["Amethyst", "Aquamarine", "Aurora", "BloodSky", "Bolivian", "BronzeSunset", "BurningHorizon", "Camo", "Chlorophyte", "ChocolateDiamond", "Cobalt", "Copper", "CorrodedSepia", "Corruption", "DeepDepths", "DiscoBlue", "DiscoCyan", "DiscoGreen", "DiscoOrange", "DiscoPink", "Flax", "Gold", "Hematite", "Ice", "Jade", "Jasper", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "PeaGreen", "Pearl", "PerfectDay", "Peridot", "Pyrite", "Rhododendron", "RoseQuartz", "Ruby", "SailorsDelight", "Sandstorm", "Sapphire", "Slate", "Tangerine", "Tempest", "Topaz", "Twilight", "Twitch", "Void", "Zucchini"];
	}
	allow(backgroundColorSchemes) {
		this.backgroundColorSchemes = backgroundColorSchemes;
		return this;
	}
	remove(backgroundColorSchemes) {
		for (var i = 0; i < backgroundColorSchemes.length; i++) {
			//Filters are confusing and I understand nothing here
			this.backgroundColorSchemes = this.backgroundColorSchemes.filter(value => value !== backgroundColorSchemes[i]);
		}
		return this;
	}
	reset() {
		this.backgroundColorSchemes = ["Amethyst", "Aquamarine", "Aurora", "BloodSky", "Bolivian", "BronzeSunset", "BurningHorizon", "Camo", "Chlorophyte", "ChocolateDiamond", "Cobalt", "Copper", "CorrodedSepia", "Corruption", "DeepDepths", "DiscoBlue", "DiscoCyan", "DiscoGreen", "DiscoOrange", "DiscoPink", "Flax", "Gold", "Hematite", "Ice", "Jade", "Jasper", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "PeaGreen", "Pearl", "PerfectDay", "Peridot", "Pyrite", "Rhododendron", "RoseQuartz", "Ruby", "SailorsDelight", "Sandstorm", "Sapphire", "Slate", "Tangerine", "Tempest", "Topaz", "Twilight", "Twitch", "Void", "Zucchini"];
		return this;
	}
}

class validBackgroundColorSheme {
	constructor(backgroundColor) {
		this.backgroundColor = backgroundColor;
		this.logoColorSchemes = ["Amethyst", "Aquamarine", "Black", "ChocolateDiamond", "Hematite", "Jasper", "Moonstone", "Obsidian", "Pearl", "Peridot", "RoseQuartz", "Ruby", "Sapphire", "Topaz", "White"];
	}
	allow(backgroundColorSchemes) {
		this.backgroundColorSchemes = backgroundColorSchemes;
		return this;
	}
	search() {
		this.logoColorSchemes = [];
		for (var i = 0; i < logoSchemes.length; i++) {
			var schemes = logoSchemes[i].backgroundColorSchemes;
			for (var j = 0; j < schemes.length; j++) {
				if (schemes[j] === this.backgroundColor) {
					this.logoColorSchemes[this.logoColorSchemes.length] = logoSchemes[i].logoColor;
				}
			}
		}
	}
	reset() {
		this.backgroundColorSchemes = ["Amethyst", "Aquamarine", "Black", "ChocolateDiamond", "Hematite", "Jasper", "Moonstone", "Obsidian", "Pearl", "Peridot", "RoseQuartz", "Ruby", "Sapphire", "Topaz", "White"];
		return this;
	}
}

function intLogoSchemes() {
	var white = new validColorSheme("White");
	white.remove(["Bolivian", "Kiwi", "Moonstone", "Pearl", "Topaz"]);

	var moonstone = new validColorSheme("Moonstone");
	moonstone.remove(["Bolivian", "DiscoGreen", "DiscoOrange", "Ice", "Kiwi", "Moonstone", "Peach", "Pearl", "Pyrite", "Topaz"]);

	var pearl = new validColorSheme("Pearl");
	pearl.remove(["Bolivian", "DiscoCyan", "DiscoOrange", "DiscoPink", "Gold", "Hematite", "Kiwi", "Moonstone", "Peach", "PeaGreen", "Pearl", "Pyrite", "Rhododendron"]);

	var hematite = new validColorSheme("Hematite");
	hematite.remove(["Aurora", "Camo", "ChocolateDiamond", "DeepDepths", "DiscoPink", "Flax", "Gold", "Hematite", "Mourning", "Obsidian", "PeaGreen", "Pearl", "Rhododendron", "Sandstorm", "Slate", "Tempest", "Twitch", "Zucchini"]);

	var obsidian = new validColorSheme("Obsidian");
	obsidian.remove(["Aurora", "ChocolateDiamond", "Cobalt", "Corruption", "DeepDepths", "DiscoBlue", "DiscoPink", "Flax", "Hematite", "Midnight", "Mourning", "Obsidian", "Sandstorm", "Sapphire", "Slate", "Tempest", "Twilight", "Twitch", "Void", "Zucchini"]);

	var black = new validColorSheme("Black");
	black.remove(["Aurora", "ChocolateDiamond", "DeepDepths", "Midnight", "Mourning", "Obsidian", "Sandstorm", "Twilight", "Void"]);


	var ruby = new validColorSheme("Ruby");
	ruby.allow(["Bolivian", "Corruption", "Midnight", "Moonstone", "Obsidian", "Peach", "Pearl", "Pyrite", "Topaz", "Void"]);

	var jasper = new validColorSheme("Jasper");
	jasper.allow(["Amethyst", "Aquamarine", "Aurora", "Camo", "ChocolateDiamond", "Cobalt", "Corruption", "DeepDepths", "DiscoBlue", "DiscoGreen", "Flax", "Hematite", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Pearl", "Sapphire", "Slate", "Tempest", "Void"]);

	var topaz = new validColorSheme("Topaz");
	topaz.allow(["Amethyst", "Aquamarine", "Aurora", "Camo", "ChocolateDiamond", "Cobalt", "DeepDepths", "DiscoBlue", "DiscoCyan", "Flax", "Hematite", "Midnight", "Moonstone", "Mourning", "Obsidian", "PeaGreen", "Pearl", "PerfectDay", "Peridot", "Rhododendron", "RoseQuartz", "Ruby", "Sapphire", "Slate", "Tempest", "Twilight", "Twitch", "Void", "Zucchini"]);

	var peridot = new validColorSheme("Peridot");
	peridot.allow(["Amethyst", "Aurora", "Bolivian", "Camo", "ChocolateDiamond", "Cobalt", "DeepDepths", "Hematite", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Pearl", "Rhododendron", "Sandstorm", "Sapphire", "Tangerine", "Tempest", "Twilight", "Void", "Zucchini"]);

	var aquamarine = new validColorSheme("Aquamarine");
	aquamarine.allow(["Bolivian", "ChocolateDiamond", "DiscoGreen", "Hematite", "Jasper", "Kiwi", "Midnight", "Moonstone", "Obsidian", "Peach", "Topaz", "Twilight", "Twitch", "Void"]);

	var sapphire = new validColorSheme("Sapphire");
	sapphire.allow(["Bolivian", "Chlorophyte", "ChocolateDiamond", "Copper", "DiscoCyan", "DiscoGreen", "DiscoOrange", "Ice", "Jade", "Jasper", "Kiwi", "Moonstone", "Peach", "Pearl", "PerfectDay", "Peridot", "Pyrite", "Rhododendron", "RoseQuartz", "Ruby", "SailorsDelight", "Tangerine", "Void"]);

	var amethyst = new validColorSheme("Amethyst");
	amethyst.allow(["Aquamarine", "Bolivian", "Chlorophyte", "DiscoGreen", "DiscoOrange", "Hematite", "Ice", "Jade", "Jasper", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "Pyrite", "SailorsDelight", "Slate", "Tangerine", "Topaz", "Void"]);

	var roseQuartz = new validColorSheme("RoseQuartz");
	roseQuartz.allow(["Aurora", "Bolivian", "Chlorophyte", "Corruption", "DeepDepths", "DiscoBlue", "DiscoGreen", "Flax", "Hematite", "Ice", "Kiwi", "Midnight", "Moonstone", "Mourning", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "Sapphire", "Topaz", "Void"]);

	var chocolateDiamond = new validColorSheme("ChocolateDiamond");
	chocolateDiamond.allow(["Bolivian", "Chlorophyte", "DiscoCyan", "DiscoGreen", "DiscoOrange", "Ice", "Jade", "Jasper", "Kiwi", "Moonstone", "Obsidian", "Peach", "Pearl", "PerfectDay", "Peridot", "Pyrite", "Rhododendron", "RoseQuartz", "SailorsDelight", "Tangerine"]);


	logoSchemes = [white, moonstone, pearl, hematite, obsidian, black, ruby, jasper, topaz, peridot, aquamarine, sapphire, amethyst, roseQuartz, chocolateDiamond];
}

function intBackgroundSchemes() {
	var amethyst = new validBackgroundColorSheme("Amethyst"); amethyst.search();
	var aquamarine = new validBackgroundColorSheme("Aquamarine"); aquamarine.search();
	var aurora = new validBackgroundColorSheme("Aurora"); aurora.search();
	var bloodSky = new validBackgroundColorSheme("BloodSky"); bloodSky.search();
	var bolivian = new validBackgroundColorSheme("Bolivian"); bolivian.search();
	var bronzeSunset = new validBackgroundColorSheme("BronzeSunset"); bronzeSunset.search();
	var burningHorizon = new validBackgroundColorSheme("BurningHorizon"); burningHorizon.search();
	var camo = new validBackgroundColorSheme("Camo"); camo.search();
	var chlorophyte = new validBackgroundColorSheme("Chlorophyte"); chlorophyte.search();
	var chocolateDiamond = new validBackgroundColorSheme("ChocolateDiamond"); chocolateDiamond.search();
	var cobalt = new validBackgroundColorSheme("Cobalt"); cobalt.search();
	var copper = new validBackgroundColorSheme("Copper"); copper.search();
	var corrodedSepia = new validBackgroundColorSheme("CorrodedSepia"); corrodedSepia.search();
	var corruption = new validBackgroundColorSheme("Corruption"); corruption.search();
	var deepDepths = new validBackgroundColorSheme("DeepDepths"); deepDepths.search();
	var discoBlue = new validBackgroundColorSheme("DiscoBlue"); discoBlue.search();
	var discoCyan = new validBackgroundColorSheme("DiscoCyan"); discoCyan.search();
	var discoGreen = new validBackgroundColorSheme("DiscoGreen"); discoGreen.search();
	var discoOrange = new validBackgroundColorSheme("DiscoOrange"); discoOrange.search();
	var discoPink = new validBackgroundColorSheme("DiscoPink"); discoPink.search();
	var flax = new validBackgroundColorSheme("Flax"); flax.search();
	var gold = new validBackgroundColorSheme("Gold"); gold.search();
	var hematite = new validBackgroundColorSheme("Hematite"); hematite.search();
	var ice = new validBackgroundColorSheme("Ice"); ice.search();
	var jade = new validBackgroundColorSheme("Jade"); jade.search();
	var jasper = new validBackgroundColorSheme("Jasper"); jasper.search();
	var kiwi = new validBackgroundColorSheme("Kiwi"); kiwi.search();
	var midnight = new validBackgroundColorSheme("Midnight"); midnight.search();
	var moonstone = new validBackgroundColorSheme("Moonstone"); moonstone.search();
	var mourning = new validBackgroundColorSheme("Mourning"); mourning.search();
	var obsidian = new validBackgroundColorSheme("Obsidian"); obsidian.search();
	var peach = new validBackgroundColorSheme("Peach"); peach.search();
	var peaGeen = new validBackgroundColorSheme("PeaGreen"); peaGeen.search();
	var pearl = new validBackgroundColorSheme("Pearl"); pearl.search();
	var perfectDay = new validBackgroundColorSheme("PerfectDay"); perfectDay.search();
	var peridot = new validBackgroundColorSheme("Peridot"); peridot.search();
	var pyrite = new validBackgroundColorSheme("Pyrite"); pyrite.search();
	var rhododendron = new validBackgroundColorSheme("Rhododendron"); rhododendron.search();
	var roseQuartz = new validBackgroundColorSheme("RoseQuartz"); roseQuartz.search();
	var ruby = new validBackgroundColorSheme("Ruby"); ruby.search();
	var sailorsDelight = new validBackgroundColorSheme("SailorsDelight"); sailorsDelight.search();
	var sandstorm = new validBackgroundColorSheme("Sandstorm"); sandstorm.search();
	var sapphire = new validBackgroundColorSheme("Sapphire"); sapphire.search();
	var slate = new validBackgroundColorSheme("Slate"); slate.search();
	var tangerine = new validBackgroundColorSheme("Tangerine"); tangerine.search();
	var tempest = new validBackgroundColorSheme("Tempest"); tempest.search();
	var topaz = new validBackgroundColorSheme("Topaz"); topaz.search();
	var twilight = new validBackgroundColorSheme("Twilight"); twilight.search();
	var twitch = new validBackgroundColorSheme("Twitch"); twitch.search();
	var voidColor = new validBackgroundColorSheme("Void"); voidColor.search();
	var zucchini = new validBackgroundColorSheme("Zucchini"); zucchini.search();

	backgroundSchemes = [amethyst, aquamarine, aurora, bloodSky, bolivian, bronzeSunset, burningHorizon, camo, chlorophyte, chocolateDiamond, cobalt, copper, corrodedSepia, deepDepths, discoBlue, discoCyan, discoGreen, discoOrange, discoPink, flax, gold, hematite, ice, jade, jasper, kiwi, midnight, moonstone, mourning, obsidian, peach, peaGeen, pearl, perfectDay, peridot, pyrite, rhododendron, roseQuartz, ruby, sailorsDelight, sandstorm, sapphire, slate, tangerine, tempest, topaz, twilight, twitch, voidColor, zucchini];
}
