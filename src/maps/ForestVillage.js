
// You can write more code here

/* START OF COMPILED CODE */

class ForestVillage extends Phaser.Scene {

	constructor() {
		super("ForestVillage");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("forestVillage", "assets/forestVillage.json");
	}

	/** @returns {void} */
	editorCreate() {

		// forest_2_village
		const forest_2_village = this.add.tilemap("forest_2_village");
		forest_2_village.addTilesetImage("forest", "forest");
		forest_2_village.addTilesetImage("farm", "farm");

		// _70
		const _70 = this.add.image(593, 1665, "village", "70");
		_70.scaleX = 0.5769133153664581;
		_70.scaleY = 0.6019532928984288;

		// ground_1
		forest_2_village.createLayer("ground", ["forest","farm"], 0, 0);

		// _54
		const _54 = this.add.image(219, 1632, "village", "54");
		_54.scaleX = 0.9683701078838477;
		_54.scaleY = 1.4012276166017719;

		// button
		const button = this.add.image(934, 965, "button");

		// _571
		const _571 = this.add.image(1219, 1659, "village", "57");
		_571.scaleX = 0.5814243205594086;
		_571.scaleY = 0.5832897418579002;

		// _56
		this.add.image(233, 1602, "village", "56");

		// layer_2
		const layer_2 = this.add.layer();

		// _26
		const _26 = this.add.image(470, 1637, "village", "26");
		_26.scaleX = 0.7930543644653019;
		_26.scaleY = 0.7557461198632563;
		layer_2.add(_26);

		// _71
		const _71 = this.add.image(360, 1637, "village", "26");
		_71.scaleX = 0.7240953091887501;
		_71.scaleY = 0.7598126529158429;
		layer_2.add(_71);

		// _21
		const _21 = this.add.image(416, 1658, "village", "21");
		_21.scaleX = 0.3594959292043153;
		_21.scaleY = 0.46578508238192273;
		layer_2.add(_21);

		// _50
		const _50 = this.add.image(416, 1694, "village", "50");
		_50.scaleX = 0.35027489539451107;
		_50.scaleY = 0.4500256982397846;
		layer_2.add(_50);

		// _47
		const _47 = this.add.image(292, 1699, "village", "47");
		_47.scaleX = 0.7914539500846772;
		_47.scaleY = 1.223661139336774;
		_47.setOrigin(0.5, 1);
		layer_2.add(_47);

		// _11
		const _11 = this.add.image(515, 1623, "village", "11");
		_11.scaleX = 0.8099201460377002;
		_11.scaleY = 0.763660303829822;
		layer_2.add(_11);

		// _27
		const _27 = this.add.image(553, 1637, "village", "27");
		_27.scaleX = 0.9655380450841;
		_27.scaleY = 0.7442999438329971;
		layer_2.add(_27);

		// _13
		const _13 = this.add.image(535, 1686, "village", "13");
		_13.scaleX = 0.5348463580196658;
		_13.scaleY = 0.5137216959198732;
		layer_2.add(_13);

		// _45
		const _45 = this.add.image(342, 1514, "village", "45");
		layer_2.add(_45);

		// _2
		const _2 = this.add.image(522, 1514, "village", "45");
		_2.flipX = true;
		layer_2.add(_2);

		// _23
		const _23 = this.add.image(434, 1525, "village", "23");
		_23.scaleX = 0.574477331289329;
		_23.scaleY = 0.5434103272625034;
		layer_2.add(_23);

		// _1
		const _1 = this.add.image(362, 1568, "village", "5");
		layer_2.add(_1);

		// _55
		const _55 = this.add.image(373, 1627, "village", "55");
		layer_2.add(_55);

		// _4232
		const _4232 = this.add.image(463, 1627, "village", "55");
		layer_2.add(_4232);

		// _3
		const _3 = this.add.image(567, 1700, "village", "47");
		_3.scaleX = 0.7701003535392317;
		_3.scaleY = 1.1998572720050202;
		_3.setOrigin(0.5, 1);
		layer_2.add(_3);

		// _532
		const _532 = this.add.image(496, 1568, "village", "5");
		layer_2.add(_532);

		// container_1
		const container_1 = this.add.container(905, 1366);
		container_1.scaleX = 0.75;
		container_1.scaleY = 0.75;

		// _16
		const _16 = this.add.image(1082.75, 1638.25, "village", "26");
		_16.scaleX = 0.7603601438280799;
		_16.scaleY = 0.7198101044061663;

		// _17
		const _17 = this.add.image(1004.75, 1638.25, "village", "26");
		_17.scaleX = 0.8134760475775137;
		_17.scaleY = 0.7288450457049085;

		// _6
		this.add.image(1097, 1633, "village", "11");

		// _69
		const _69 = this.add.image(1247.75, 1598.5, "village", "69");
		_69.scaleX = 0.49492271502716845;
		_69.scaleY = 0.44495973447303216;

		// _51
		const _51 = this.add.image(1301, 1516.75, "village", "32");
		_51.scaleX = 1.2490347002198205;
		_51.scaleY = 0.6902382449834523;

		// _7
		const _7 = this.add.image(1111, 1684, "village", "13");
		_7.scaleX = 0.5348463580196658;
		_7.scaleY = 0.5137216959198732;

		// _52332
		const _52332 = this.add.image(1350.5, 1516.75, "village", "32");
		_52332.scaleX = 0.7728788478966411;
		_52332.scaleY = 0.6877016528196972;

		// _37
		const _37 = this.add.image(1357.25, 1668.25, "village", "5");
		_37.scaleX = 0.3;
		_37.scaleY = 0.7974303777798181;
		_37.setOrigin(0, 0.5);

		// _38
		const _38 = this.add.image(1357.25, 1679.5, "village", "5");
		_38.scaleX = 0.3;
		_38.scaleY = 0.7974303777798282;
		_38.setOrigin(0, 0.5);

		// _5
		const _5 = this.add.image(1357.25, 1690.75, "village", "5");
		_5.scaleX = 0.3;
		_5.scaleY = 0.7974303777798282;
		_5.setOrigin(0, 0.5);

		// _39
		const _39 = this.add.image(1357.25, 1657.75, "village", "5");
		_39.scaleX = 0.3;
		_39.scaleY = 0.7974303777798282;
		_39.setOrigin(0, 0.5);

		// _12
		this.add.image(994.25, 1576, "village", "5");

		// _40
		const _40 = this.add.image(1357.25, 1646.5, "village", "5");
		_40.scaleX = 0.3;
		_40.scaleY = 0.7974303777798282;
		_40.setOrigin(0, 0.5);

		// _41
		const _41 = this.add.image(1357.25, 1635.25, "village", "5");
		_41.scaleX = 0.3;
		_41.scaleY = 0.7974303777798181;
		_41.setOrigin(0, 0.5);

		// _46
		const _46 = this.add.image(1357.25, 1579.75, "village", "5");
		_46.scaleX = 0.3;
		_46.scaleY = 0.7974303777798282;
		_46.setOrigin(0, 0.5);

		// _48
		const _48 = this.add.image(1357.25, 1590.25, "village", "5");
		_48.scaleX = 0.3;
		_48.scaleY = 0.7974303777798181;
		_48.setOrigin(0, 0.5);

		// _42
		const _42 = this.add.image(1357.25, 1624, "village", "5");
		_42.scaleX = 0.3;
		_42.scaleY = 0.7974303777798282;
		_42.setOrigin(0, 0.5);

		// _43
		const _43 = this.add.image(1357.25, 1612.75, "village", "5");
		_43.scaleX = 0.3;
		_43.scaleY = 0.7974303777798181;
		_43.setOrigin(0, 0.5);

		// _44
		const _44 = this.add.image(1357.25, 1601.5, "village", "5");
		_44.scaleX = 0.3;
		_44.scaleY = 0.7974303777798181;
		_44.setOrigin(0, 0.5);

		// _14
		const _14 = this.add.image(1030, 1652, "village", "21");
		_14.scaleX = 0.41741044973474417;
		_14.scaleY = 0.5056957888525416;

		// _15
		const _15 = this.add.image(1028.75, 1693.75, "village", "50");
		_15.scaleX = 0.3049122531651581;
		_15.scaleY = 0.37136562028989606;

		// _20
		const _20 = this.add.image(1164.5, 1594.75, "village", "47");
		_20.scaleX = 0.7912864545948788;
		_20.scaleY = 0.663417221114047;
		_20.angle = -130;
		_20.flipX = true;

		// _9
		const _9 = this.add.image(1144.25, 1700.5, "village", "47");
		_9.scaleX = 0.5090171959981575;
		_9.scaleY = 1.0843360741366268;
		_9.setOrigin(0.5, 1);

		// _49
		const _49 = this.add.image(1198.25, 1516.75, "village", "32");
		_49.scaleX = 0.9293221976713291;
		_49.scaleY = 0.8586755404598116;

		// _151
		const _151 = this.add.image(1194.5, 1538.5, "village", "15");
		_151.scaleX = 0.6210579411735648;
		_151.scaleY = 0.6194766279619738;

		// _s
		const _s = this.add.image(940, 1700, "village", "47");
		_s.scaleX = 0.6547320720268537;
		_s.scaleY = 1.0913454200295085;
		_s.setOrigin(0.5, 1);

		// _8
		this.add.image(1202, 1576.75, "village", "5");

		// _472
		const _472 = this.add.image(1338.5, 1596.25, "village", "47");
		_472.scaleX = 0.3819034966562591;
		_472.scaleY = 0.46066629721545205;
		_472.angle = -45.00000000000006;

		// _18
		const _18 = this.add.image(1307, 1576.75, "village", "5");
		_18.scaleY = 0.5;

		// _32232
		const _32232 = this.add.image(1007.75, 1515.25, "village", "32");
		_32232.scaleX = 0.7717544187323511;
		_32232.scaleY = 0.7160562684236693;

		// _25
		const _25 = this.add.image(945.5, 1574.5, "village", "47");
		_25.scaleX = 0.9832863745893968;
		_25.scaleY = 1.5867898687164645;
		_25.setOrigin(0.5, 1);

		// _24
		const _24 = this.add.image(1097, 1514.5, "village", "32");
		_24.scaleX = 0.4013203409961602;
		_24.scaleY = 0.8003378327483526;

		// _28
		const _28 = this.add.image(1144.25, 1572.25, "village", "47");
		_28.scaleX = 0.9832863745893968;
		_28.scaleY = 1.5867898687164645;
		_28.setOrigin(0.5, 1);
		_28.flipX = true;

		// _58
		const _58 = this.add.image(1413, 1578, "village", "47");
		_58.scaleX = 0.9832863745893968;
		_58.scaleY = 1.5867898687164645;
		_58.setOrigin(0.5, 1);

		// _1023
		this.add.image(1036, 1426, "village", "10");

		// _29
		this.add.image(1090.25, 1425.25, "village", "10");

		// _9123
		this.add.image(944, 1426, "village", "9");

		// _36323
		const _36323 = this.add.image(1109, 1499.5, "village", "36");
		_36323.scaleX = 0.4311401513467299;
		_36323.scaleY = 0.4453015811183735;

		// _31
		const _31 = this.add.image(982, 1500, "village", "36");
		_31.scaleX = 0.48464598203624154;
		_31.scaleY = 0.4250491111196917;

		// _4
		this.add.image(1040, 1450, "village", "4");

		// _4023
		const _4023 = this.add.image(1114, 1349, "village", "40");
		_4023.scaleX = 0.6906241004849927;
		_4023.scaleY = 0.7628217088156259;

		// _3522
		const _3522 = this.add.image(1039.25, 1464.25, "village", "35");
		_3522.scaleX = 0.48937680692732854;
		_3522.scaleY = 0.43751767340977077;

		// _59323
		const _59323 = this.add.image(1339.25, 1552.75, "village", "59");
		_59323.scaleX = 0.75;
		_59323.scaleY = 0.75;

		// _32
		const _32 = this.add.image(1291.25, 1552.75, "village", "59");
		_32.scaleX = 0.75;
		_32.scaleY = 0.75;

		// _33
		const _33 = this.add.image(1244.75, 1552.75, "village", "59");
		_33.scaleX = 0.75;
		_33.scaleY = 0.75;

		// _342323
		const _342323 = this.add.image(1199, 1552.75, "village", "59");
		_342323.scaleX = 0.75;
		_342323.scaleY = 0.75;

		// _35
		const _35 = this.add.image(1150.25, 1552.75, "village", "59");
		_35.scaleX = 0.75;
		_35.scaleY = 0.75;

		// _191
		const _191 = this.add.image(1353.5, 1699.75, "village", "47");
		_191.scaleX = -0.7101683098224691;
		_191.scaleY = 1.1780424784473118;
		_191.setOrigin(0.5, 1);

		// _30
		this.add.image(1202.75, 1425.25, "village", "10");

		// _53
		const _53 = this.add.image(1315.25, 1425.25, "village", "10");
		_53.scaleX = 1.2593554741273;

		// _46312
		const _46312 = this.add.image(964, 1552, "village", "46");
		_46312.scaleX = 0.8117594610069562;
		_46312.scaleY = 0.8516507936066724;

		// _57
		const _57 = this.add.image(1415, 1425.25, "village", "9");
		_57.flipX = true;

		// _62
		const _62 = this.add.image(914, 1618, "village", "62");
		_62.scaleX = 0.6116739978240475;
		_62.scaleY = 0.7259739043534884;

		// _34
		const _34 = this.add.image(1328.75, 1500.25, "village", "34");
		_34.scaleX = 0.5294284815402992;
		_34.scaleY = 0.5385312547888247;

		// text_1
		const text_1 = this.add.text(899, 1616, "", {});
		text_1.scaleX = 0.5806729699363473;
		text_1.scaleY = 0.686343592252415;
		text_1.text = "Tabern";
		text_1.setStyle({ "fontSize": "13px" });

		// _61
		const _61 = this.add.image(1298, 1597, "village", "61");
		_61.scaleX = 0.5147725980403168;
		_61.scaleY = 0.5913181204575645;

		// _411
		const _411 = this.add.image(1370, 1349, "village", "41");
		_411.scaleX = 0.5857657744837543;
		_411.scaleY = 0.658267335292285;

		// _52
		const _52 = this.add.image(938, 1583, "village", "52");
		_52.scaleX = 0.8239034322402807;
		_52.scaleY = 0.8191533999217628;

		// _59
		this.add.image(1145, 1576, "village", "52");

		// _22
		const _22 = this.add.image(1105, 1551, "village", "46");
		_22.scaleX = 0.7328422598783817;
		_22.scaleY = 0.8829330634797368;
		_22.flipX = true;

		// _545
		this.add.image(1732, 1239, "village", "9");

		// _10
		const _10 = this.add.image(1042, 1584, "village", "5");
		_10.scaleX = 1.1739006890654184;
		_10.scaleY = -0.4206707704220114;

		// _53123
		const _53123 = this.add.image(1040.75, 1516.75, "village", "53");
		_53123.angle = 45;

		// _231
		const _231 = this.add.image(1040.75, 1546, "village", "23");
		_231.scaleX = 0.6337901504862209;
		_231.scaleY = 0.6567476538507682;

		// _2645
		const _2645 = this.add.image(1759, 1629, "village", "26");
		_2645.scaleX = 0.7118763441527373;
		_2645.scaleY = 0.8551627529235629;

		// _@453
		const __453 = this.add.image(1758, 1493, "village", "26");
		__453.scaleX = 0.7118763441527373;
		__453.scaleY = 0.8551627529235629;

		// _534
		const _534 = this.add.image(1759, 1564, "village", "2");
		_534.scaleX = 0.8664225242661129;
		_534.scaleY = 0.7316163909380448;

		// _19
		const _19 = this.add.image(1758, 1357, "village", "26");
		_19.scaleX = 0.7118763441527373;
		_19.scaleY = 0.8551627529235629;

		// _36
		const _36 = this.add.image(1758, 1427, "village", "2");
		_36.scaleX = 0.8664225242661129;
		_36.scaleY = 0.7316163909380448;

		// _324
		const _324 = this.add.image(1717, 1265, "village", "58");
		_324.scaleX = 0.8;
		_324.scaleY = 0.8;

		// _60
		const _60 = this.add.image(1785, 1238, "village", "9");
		_60.flipX = true;

		// _4345
		const _4345 = this.add.image(1765, 1268, "village", "59");
		_4345.scaleX = 0.8;
		_4345.scaleY = 0.8;

		// _63
		const _63 = this.add.image(1798, 1265, "village", "58");
		_63.scaleX = 0.8;
		_63.scaleY = 0.8;
		_63.flipX = true;

		// _4213
		const _4213 = this.add.image(1726, 1162, "village", "46");
		_4213.scaleX = 0.35;
		_4213.scaleY = 0.6165274010105828;

		// _64
		const _64 = this.add.image(1790, 1162, "village", "46");
		_64.scaleX = 0.35;
		_64.scaleY = 0.6165274010105828;
		_64.flipX = true;

		// _37324
		const _37324 = this.add.image(1758, 1476, "village", "37");
		_37324.scaleX = 0.5286167511234134;
		_37324.scaleY = 0.6405581103259028;

		// _65
		const _65 = this.add.image(1760, 1345, "village", "37");
		_65.scaleX = 0.5286167511234134;
		_65.scaleY = 0.6405581103259028;

		// _123123
		const _123123 = this.add.image(1758, 1690, "village", "50");
		_123123.scaleX = 0.5813575958968366;
		_123123.scaleY = 0.6925375255623029;

		// button (components)
		new SceneExporter(button);

		this.forest_2_village = forest_2_village;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	forest_2_village;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
