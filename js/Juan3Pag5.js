(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EAAB1").s().p("AhMAkQAAgkAXghQAYgkAdAAQAeAAAYAkQAXAhAAAkQAAAihNAAQhMAAAAgig");
	this.shape.setTransform(7.7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,15.3,14), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EAAB1").s().p("AhMAkQAAgkAXghQAYgkAdAAQAeAAAYAkQAXAhAAAkQAAAihNAAQhMAAAAgig");
	this.shape.setTransform(7.7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,15.4,14), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7EAAB1").s().p("AhMAkQAAgkAXghQAYgkAdAAQAeAAAYAkQAXAhAAAkQAAAihNAAQhMAAAAgig");
	this.shape_1.setTransform(7.7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,15.3,14), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7EAAB1").s().p("AhMAkQAAgkAXghQAYgkAdAAQAeAAAYAkQAXAhAAAkQAAAihNAAQhMAAAAgig");
	this.shape_1.setTransform(7.7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,15.4,14), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmlGmQivivAAj3QAAj2CvivQCvivD2AAQD3AACvCvQCvCvAAD2QAAD3ivCvQivCvj3AAQj2AAivivg");
	mask.setTransform(72.4,61.8);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgFAFgBAJQAAAJAGAGQAGAHAIAAQAMABAHgKQACAGAAAHQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape.setTransform(91.4,59.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgGAGAAAIQAAAJAFAGQAHAHAIAAQAMABAGgKQADAIAAAFQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(54.3,59.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AgTBFIAAh1QAAgJAGgFQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAB1g");
	this.shape_2.setTransform(87.1,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AgTBFIAAh1QAAgJAGgFQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAB1g");
	this.shape_3.setTransform(59.4,105.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BCEDC").s().p("AlnE5IAAmbQAAhZA/g+QA/g/BYAAIHSAkIAnFXQAABmhIBIQhIBIhnAAg");
	this.shape_4.setTransform(108,156.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BCEDC").s().p("AhwE5QhnAAhHhIQhJhIAAhmIAnlXIHSgkQBZAAA/A/QA+A+AABZIAAGbg");
	this.shape_5.setTransform(36,156.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BCEDC").s().p("AgnAYQgQgRgBgXQAAgXA4AAQA4AAAAAXQAAAXgQARQgRAQgXAAQgXAAgQgQg");
	this.shape_6.setTransform(72.7,73.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B350E").s().p("AgZAYQgSgNAAgTQAAgXArAAQAsAAAAAXQAAAUgQALQgMAJgQAAIAAAAQgMAAgNgIg");
	this.shape_7.setTransform(72.6,76.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMAhQAAghAXgfQAYghAdAAQAeAAAYAhQAXAfAAAhQAAAghNAAQhMAAAAggg");
	this.shape_8.setTransform(54.2,58.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLAhQAAghAWgfQAXghAeAAQAeAAAYAhQAWAfABAhQgBAghMAAQhLAAAAggg");
	this.shape_9.setTransform(91.1,58.6);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(54.3,60.2,1,1,0,0,0,7.7,7);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.1,60.2,1,1,0,0,0,7.7,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#804B21").s().p("AA1A4Qg6gthHgPQgMgCgIgKQgIgKACgMQABgNAMgHQALgHAPADQBTATBFA0QAMAKACANQACAOgJAIQgIAJgNABQgMAAgKgIg");
	this.shape_10.setTransform(92.9,46.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#804B21").s().p("AhMA+QgNgBgIgJQgIgJACgOQACgNAMgJQBHgyBUgRQAOgCAMAHQALAIABAMQABAMgIAKQgIAKgMACQhIAMg6AsQgKAHgLAAIgCAAg");
	this.shape_11.setTransform(54.3,45.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABMATQg4gHgYAAQgZAAgxAHQgiAEABgFQAAgPAogMQAlgLAiAAQAjAAAlALQApAMAAAPQAAADgMAAIgZgCg");
	this.shape_12.setTransform(73.5,87.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AhXgcIAAgcQAAggAeAOQA0AYATAAIBKAAIAAABQAAA1gmAlQgmAmg0AAg");
	this.shape_13.setTransform(40.3,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#804B21").s().p("AhXhkQAAgqAegeQAegeApAAIBKAAIAABtQAAA1gmAnQgmAlg1AAIgiCng");
	this.shape_14.setTransform(40.3,36.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E6").s().p("AiACSQgVAAAQgJIAzgZQBcgsAAgkIAAgNQAAgthNhGQgfgcgDgIQgHgNAfAAQBaAABABAQBABBAABZQAAAegVAWQgWAVgeAAg");
	this.shape_15.setTransform(98.5,14.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#804B21").s().p("AjECSQgvAAgigiQghggAAgwIAAgNQAAhEAwgvQAwgxBFAAIDtAAQBbAABABAQBABBAABZQAAAegVAWQgWAVgeAAg");
	this.shape_16.setTransform(81.6,14.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B350E").s().p("AAtAWQgtgMgtAJQgHABgHgDQgHgEgCgIQgDgGAFgHQAFgHAJgCQA2gKA0ANQAJADAFAHQAEAGgDAIQgCAHgIADQgEACgFAAIgFAAg");
	this.shape_17.setTransform(73.3,95.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#804B21").s().p("Ai3EdIiKigQgqgygGhAIgeknIAEAAQA7C4BrAZQAnAJBDgGQBlgIAWAAQAWAABoAIQBHAGAngJQBwgaAwi3IAEAAIgdEnQgIBBgqAxIiKCgg");
	this.shape_18.setTransform(72.7,83.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3DBFC5").s().p("ABVFxQhGghg9g1QiZiEAAiXQAAilB1h1QB0h1CmAAQi8DcAHDAQAHCuCuDVQgwAAhDgfg");
	this.shape_19.setTransform(52.7,51.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4BCEDC").s().p("AhyFxQhGghg+g1QiZiEAAiXQAAilB1h1QB1h1ClAAQClAAB2B1QB1B1AAClQAACmh1B1Qh2B1ilAAQgvAAhDgfg");
	this.shape_20.setTransform(72.7,51.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FECFAE").s().p("AmPDWIAAgcQAAilB1h0QB1h2ClAAQClAAB2B2QB1B0AAClIAAAcg");
	this.shape_21.setTransform(72.7,32.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3DBFC5").s().p("AltE/IAAp9IAbBXQAoBqBCBdQDSEoGEA3g");
	this.shape_22.setTransform(72.6,117.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4BCEDC").s().p("AltE/IAAp9ILbAAIAAJ9g");
	this.shape_23.setTransform(72.6,117.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.instance,this.instance_1,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_1},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(12.7,2.1,119.5,119.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmlGmQivivAAj3QAAj2CvivQCvivD2AAQD3AACvCvQCvCvAAD2QAAD3ivCvQivCvj3AAQj2AAivivg");
	mask_1.setTransform(72.4,61.8);

	// Capa 3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgFAFgBAJQAAAJAGAGQAGAHAIAAQAMABAHgKQACAGAAAHQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_24.setTransform(91.4,59.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgGAGAAAIQAAAJAFAGQAHAHAIAAQAMABAGgKQADAIAAAFQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_25.setTransform(54.3,59.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E6E6").s().p("AgTBFIAAh1QAAgJAGgFQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAB1g");
	this.shape_26.setTransform(87.1,105.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("AgTBFIAAh1QAAgJAGgFQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAB1g");
	this.shape_27.setTransform(59.4,105.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4BCEDC").s().p("AlnE5IAAmbQAAhZA/g+QA/g/BYAAIHSAkIAnFXQAABmhIBIQhIBIhnAAg");
	this.shape_28.setTransform(108,156.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4BCEDC").s().p("AhwE5QhnAAhHhIQhJhIAAhmIAnlXIHSgkQBZAAA/A/QA+A+AABZIAAGbg");
	this.shape_29.setTransform(36,156.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FECDAC").s().p("AgnAYQgQgRgBgXQAAgXA4AAQA4AAAAAXQAAAXgQARQgRAQgXAAQgXAAgQgQg");
	this.shape_30.setTransform(72.7,73.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6B350E").s().p("AgZAYQgSgNAAgTQAAgXArAAQAsAAAAAXQAAAUgQALQgMAJgQAAIAAAAQgMAAgNgIg");
	this.shape_31.setTransform(72.6,76.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhMAhQAAghAXgfQAYghAdAAQAeAAAYAhQAXAfAAAhQAAAghNAAQhMAAAAggg");
	this.shape_32.setTransform(54.2,58.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhLAhQAAghAWgfQAXghAeAAQAeAAAYAhQAWAfABAhQgBAghMAAQhLAAAAggg");
	this.shape_33.setTransform(91.1,58.6);

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.3,60.2,1,1,0,0,0,7.7,7);

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.1,60.2,1,1,0,0,0,7.7,7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#804B21").s().p("AA1A4Qg6gthHgPQgMgCgIgKQgIgKACgMQABgNAMgHQALgHAPADQBTATBFA0QAMAKACANQACAOgJAIQgIAJgNABQgMAAgKgIg");
	this.shape_34.setTransform(92.9,46.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#804B21").s().p("AhMA+QgNgBgIgJQgIgJACgOQACgNAMgJQBHgyBUgRQAOgCAMAHQALAIABAMQABAMgIAKQgIAKgMACQhIAMg6AsQgKAHgLAAIgCAAg");
	this.shape_35.setTransform(54.3,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABMATQg4gHgYAAQgZAAgxAHQgiAEABgFQAAgPAogMQAlgLAiAAQAjAAAlALQApAMAAAPQAAADgMAAIgZgCg");
	this.shape_36.setTransform(73.5,87.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6E6E6").s().p("AhXgcIAAgcQAAggAeAOQA0AYATAAIBKAAIAAABQAAA1gmAlQgmAmg0AAg");
	this.shape_37.setTransform(40.3,31.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#804B21").s().p("AhXhkQAAgqAegeQAegeApAAIBKAAIAABtQAAA1gmAnQgmAlg1AAIgiCng");
	this.shape_38.setTransform(40.3,36.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6E6E6").s().p("AiACSQgVAAAQgJIAzgZQBcgsAAgkIAAgNQAAgthNhGQgfgcgDgIQgHgNAfAAQBaAABABAQBABBAABZQAAAegVAWQgWAVgeAAg");
	this.shape_39.setTransform(98.5,14.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#804B21").s().p("AjECSQgvAAgigiQghggAAgwIAAgNQAAhEAwgvQAwgxBFAAIDtAAQBbAABABAQBABBAABZQAAAegVAWQgWAVgeAAg");
	this.shape_40.setTransform(81.6,14.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B350E").s().p("AAtAWQgtgMgtAJQgHABgHgDQgHgEgCgIQgDgGAFgHQAFgHAJgCQA2gKA0ANQAJADAFAHQAEAGgDAIQgCAHgIADQgEACgFAAIgFAAg");
	this.shape_41.setTransform(73.3,95.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#804B21").s().p("Ai3EdIiKigQgqgygGhAIgeknIAEAAQA7C4BrAZQAnAJBDgGQBlgIAWAAQAWAABoAIQBHAGAngJQBwgaAwi3IAEAAIgdEnQgIBBgqAxIiKCgg");
	this.shape_42.setTransform(72.7,83.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EEC0A2").s().p("ABVFxQhGghg9g1QiZiEAAiXQAAilB1h1QB0h1CmAAQi8DcAHDAQAHCuCuDVQgwAAhDgfg");
	this.shape_43.setTransform(52.7,51.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FECFAE").s().p("AhyFxQhGghg+g1QiZiEAAiXQAAilB1h1QB1h1ClAAQClAAB2B1QB1B1AAClQAACmh1B1Qh2B1ilAAQgvAAhDgfg");
	this.shape_44.setTransform(72.7,51.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FECFAE").s().p("AmPDWIAAgcQAAilB1h0QB1h2ClAAQClAAB2B2QB1B0AAClIAAAcg");
	this.shape_45.setTransform(72.7,32.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EEC0A2").s().p("AltE/IAAp9IAbBXQAoBqBCBdQDSEoGEA3g");
	this.shape_46.setTransform(72.6,117.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FECFAE").s().p("AltE/IAAp9ILbAAIAAJ9g");
	this.shape_47.setTransform(72.6,117.4);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.instance_2,this.instance_3,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_3},{t:this.instance_2},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(12.7,2.1,119.5,119.5), null);


// stage content:
(lib.Juan3Pag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqsBgIAAi/IVZAAIAAC/g");
	var mask_graphics_1 = new cjs.Graphics().p("AqsK/IAAjpIVZAAIAADpg");
	var mask_graphics_2 = new cjs.Graphics().p("AqsK/IAAkTIVZAAIAAETg");
	var mask_graphics_3 = new cjs.Graphics().p("AqsK/IAAk9IVZAAIAAE9g");
	var mask_graphics_4 = new cjs.Graphics().p("AqsK/IAAlmIVZAAIAAFmg");
	var mask_graphics_5 = new cjs.Graphics().p("AqsK/IAAmQIVZAAIAAGQg");
	var mask_graphics_6 = new cjs.Graphics().p("AqsK/IAAm6IVZAAIAAG6g");
	var mask_graphics_7 = new cjs.Graphics().p("AqsK/IAAnjIVZAAIAAHjg");
	var mask_graphics_8 = new cjs.Graphics().p("AqsK/IAAoNIVZAAIAAINg");
	var mask_graphics_9 = new cjs.Graphics().p("AqsK/IAAo3IVZAAIAAI3g");
	var mask_graphics_10 = new cjs.Graphics().p("AqsK/IAAphIVZAAIAAJhg");
	var mask_graphics_11 = new cjs.Graphics().p("AqsK/IAAqKIVZAAIAAKKg");
	var mask_graphics_12 = new cjs.Graphics().p("AqsK/IAAq0IVZAAIAAK0g");
	var mask_graphics_13 = new cjs.Graphics().p("AqsK/IAArdIVZAAIAALdg");
	var mask_graphics_14 = new cjs.Graphics().p("AqsK/IAAsGIVZAAIAAMGg");
	var mask_graphics_15 = new cjs.Graphics().p("AqsK/IAAswIVZAAIAAMwg");
	var mask_graphics_16 = new cjs.Graphics().p("AqsK/IAAtaIVZAAIAANag");
	var mask_graphics_17 = new cjs.Graphics().p("AqsK/IAAuDIVZAAIAAODg");
	var mask_graphics_18 = new cjs.Graphics().p("AqsK/IAAutIVZAAIAAOtg");
	var mask_graphics_19 = new cjs.Graphics().p("AqsK/IAAvXIVZAAIAAPXg");
	var mask_graphics_20 = new cjs.Graphics().p("AqsK/IAAwAIVZAAIAAQAg");
	var mask_graphics_21 = new cjs.Graphics().p("AqsK/IAAwqIVZAAIAAQqg");
	var mask_graphics_22 = new cjs.Graphics().p("AqsK/IAAxUIVZAAIAARUg");
	var mask_graphics_23 = new cjs.Graphics().p("AqsK/IAAx9IVZAAIAAR9g");
	var mask_graphics_24 = new cjs.Graphics().p("AqsK/IAAynIVZAAIAASng");
	var mask_graphics_25 = new cjs.Graphics().p("AqsK/IAAzRIVZAAIAATRg");
	var mask_graphics_26 = new cjs.Graphics().p("AqsK/IAAz6IVZAAIAAT6g");
	var mask_graphics_27 = new cjs.Graphics().p("AqsK/IAA0kIVZAAIAAUkg");
	var mask_graphics_28 = new cjs.Graphics().p("AqsK/IAA1OIVZAAIAAVOg");
	var mask_graphics_29 = new cjs.Graphics().p("AqsK/IAA13IVZAAIAAV3g");
	var mask_graphics_30 = new cjs.Graphics().p("AqsLRIAA2hIVZAAIAAWhg");
	var mask_graphics_59 = new cjs.Graphics().p("AqsLRIAA2hIVZAAIAAWhg");
	var mask_graphics_60 = new cjs.Graphics().p("AqsK/IAA13IVZAAIAAV3g");
	var mask_graphics_61 = new cjs.Graphics().p("AqsK/IAA1OIVZAAIAAVOg");
	var mask_graphics_62 = new cjs.Graphics().p("AqsK/IAA0kIVZAAIAAUkg");
	var mask_graphics_63 = new cjs.Graphics().p("AqsK/IAAz6IVZAAIAAT6g");
	var mask_graphics_64 = new cjs.Graphics().p("AqsK/IAAzRIVZAAIAATRg");
	var mask_graphics_65 = new cjs.Graphics().p("AqsK/IAAynIVZAAIAASng");
	var mask_graphics_66 = new cjs.Graphics().p("AqsK/IAAx9IVZAAIAAR9g");
	var mask_graphics_67 = new cjs.Graphics().p("AqsK/IAAxUIVZAAIAARUg");
	var mask_graphics_68 = new cjs.Graphics().p("AqsK/IAAwqIVZAAIAAQqg");
	var mask_graphics_69 = new cjs.Graphics().p("AqsK/IAAwAIVZAAIAAQAg");
	var mask_graphics_70 = new cjs.Graphics().p("AqsK/IAAvXIVZAAIAAPXg");
	var mask_graphics_71 = new cjs.Graphics().p("AqsK/IAAutIVZAAIAAOtg");
	var mask_graphics_72 = new cjs.Graphics().p("AqsK/IAAuDIVZAAIAAODg");
	var mask_graphics_73 = new cjs.Graphics().p("AqsK/IAAtaIVZAAIAANag");
	var mask_graphics_74 = new cjs.Graphics().p("AqsK/IAAswIVZAAIAAMwg");
	var mask_graphics_75 = new cjs.Graphics().p("AqsK/IAAsGIVZAAIAAMGg");
	var mask_graphics_76 = new cjs.Graphics().p("AqsK/IAArdIVZAAIAALdg");
	var mask_graphics_77 = new cjs.Graphics().p("AqsK/IAAq0IVZAAIAAK0g");
	var mask_graphics_78 = new cjs.Graphics().p("AqsK/IAAqKIVZAAIAAKKg");
	var mask_graphics_79 = new cjs.Graphics().p("AqsK/IAAphIVZAAIAAJhg");
	var mask_graphics_80 = new cjs.Graphics().p("AqsK/IAAo3IVZAAIAAI3g");
	var mask_graphics_81 = new cjs.Graphics().p("AqsK/IAAoNIVZAAIAAINg");
	var mask_graphics_82 = new cjs.Graphics().p("AqsK/IAAnjIVZAAIAAHjg");
	var mask_graphics_83 = new cjs.Graphics().p("AqsK/IAAm6IVZAAIAAG6g");
	var mask_graphics_84 = new cjs.Graphics().p("AqsK/IAAmQIVZAAIAAGQg");
	var mask_graphics_85 = new cjs.Graphics().p("AqsK/IAAlmIVZAAIAAFmg");
	var mask_graphics_86 = new cjs.Graphics().p("AqsK/IAAk9IVZAAIAAE9g");
	var mask_graphics_87 = new cjs.Graphics().p("AqsK/IAAkTIVZAAIAAETg");
	var mask_graphics_88 = new cjs.Graphics().p("AqsK/IAAjpIVZAAIAADpg");
	var mask_graphics_89 = new cjs.Graphics().p("AqsBgIAAi/IVZAAIAAC/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:60,y:131.1}).wait(1).to({graphics:mask_graphics_1,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_2,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_3,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_4,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_5,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_6,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_7,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_8,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_9,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_10,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_11,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_12,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_13,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_14,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_15,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_16,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_17,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_18,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_19,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_20,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_21,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_22,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_23,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_24,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_25,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_26,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_27,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_28,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_29,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_30,x:60,y:68.6}).wait(29).to({graphics:mask_graphics_59,x:60,y:68.6}).wait(1).to({graphics:mask_graphics_60,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_61,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_62,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_63,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_64,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_65,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_66,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_67,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_68,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_69,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_70,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_71,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_72,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_73,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_74,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_75,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_76,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_77,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_78,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_79,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_80,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_81,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_82,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_83,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_84,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_85,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_86,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_87,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_88,x:60,y:70.3}).wait(1).to({graphics:mask_graphics_89,x:60,y:131.1}).wait(1));

	// Juan
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(59.7,92.1,1,1,0,0,0,72,93.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Juan
	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.7,92.1,1,1,0,0,0,72,93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.7,58.3,144,187.5);
// library properties:
lib.properties = {
	id: '6012DA9644C44FF2895DD2B9BEECA437',
	width: 120,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6012DA9644C44FF2895DD2B9BEECA437'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;