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


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D99767").s().p("Ag4AAIgSg0ICVAJIgLAvQgSAwgmABIgBAAQglAAgag1g");
	this.shape.setTransform(18.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D99767").s().p("AgHA1QgmgBgSgwIgLgvICVgJIgTA0QgZA1glAAIgBAAg");
	this.shape_1.setTransform(-18.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-5.2,52.4,10.6);


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D99767").s().p("Ag4AAIgSg0ICVAJIgLAvQgSAwgmABIgBAAQglAAgag1g");
	this.shape.setTransform(18.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D99767").s().p("AgHA1QgmgBgSgwIgLgvICVgJIgTA0QgZA1glAAIgBAAg");
	this.shape_1.setTransform(-18.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-5.2,52.4,10.6);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D99767").s().p("Ag4AAIgSg0ICVAJIgLAvQgSAwgmABIgBAAQglAAgag1g");
	this.shape.setTransform(18.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D99767").s().p("AgHA1QgmgBgSgwIgLgvICVgJIgTA0QgZA1glAAIgBAAg");
	this.shape_1.setTransform(-18.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-5.2,52.4,10.6);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D99767").s().p("Ag4AAIgSg0ICVAJIgLAvQgSAwgmABIgBAAQglAAgag1g");
	this.shape.setTransform(18.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D99767").s().p("AgHA1QgmgBgSgwIgLgvICVgJIgTA0QgZA1glAAIgBAAg");
	this.shape_1.setTransform(-18.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-5.2,52.4,10.6);


(lib.Interpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgDAYQgFgBgCgGQgDgGACgGQACgJARgTQAHAYgDAJQgBAHgFAEQgEADgDAAIgCAAg");
	this.shape.setTransform(0.1,0,0.612,0.612,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1.3,1.8,2.8);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgDAYQgFgBgCgGQgDgGACgGQACgJARgTQAHAYgDAJQgBAHgFAEQgEADgDAAIgCAAg");
	this.shape.setTransform(0.1,0,0.612,0.612,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1.3,1.8,2.8);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmnGoQiwiwAAj4QAAj4CwiwQCvivD4AAQD4AACwCvQCwCwAAD4QAAD4iwCwQiwCwj4AAQj4AAiviwg");
	mask.setTransform(72.5,65.5);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4E4E4").s().p("AgTBHIAAh4QAAgJAGgFQAFgHAIAAQAIAAAGAHQAGAFAAAJIAAB4g");
	this.shape.setTransform(88.8,107.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4E4E4").s().p("AgTBHIAAh4QAAgJAGgFQAGgHAHAAQAIAAAGAHQAGAFAAAJIAAB4g");
	this.shape_1.setTransform(60.6,107.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECDAC").s().p("AluE/IAAmjQAAhbBAg/QA/hABbAAIHnBxIAcERQAABohKBKQhJBJhoAAg");
	this.shape_2.setTransform(110.5,159.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FECDAC").s().p("AhzE/QhoAAhJhJQhKhKAAhoIAbkRIHohxQBaAABABAQBAA/AABbIAAGjg");
	this.shape_3.setTransform(36.7,159.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDB7AC").s().p("AgoAYQgRgRAAgXQAAgYA5AAQA6AAAAAYQAAAXgRARQgRARgYAAQgXAAgRgRg");
	this.shape_4.setTransform(74,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B350E").s().p("AgZAYQgTgMAAgUQAAgYAsAAQAtAAAAAYQAAAUgQAMQgMAJgRAAQgMAAgNgJg");
	this.shape_5.setTransform(74,78);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4E4E4").s().p("AhYgcIAAgdQAAggAeAOQA1AYATAAIBLAAIAAABQAAA2gmAmQgnAng1AAg");
	this.shape_6.setTransform(41.1,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#804B21").s().p("AhYhaQAAgrAegeQAegfAqAAIBLAAIAABvQAAA3gmAlQgnAng1AAIghCTg");
	this.shape_7.setTransform(41.1,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4E4E4").s().p("AiDCVQgVAAAQgJQALgGApgTQBdguAAgkIAAgOQAAguhOhIQgfgcgEgIQgGgNAfAAQBcAABBBCQBCBBAABbQAAAfgWAWQgWAWgfAAg");
	this.shape_8.setTransform(100.4,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#804B21").s().p("AjJCVQgwAAghgiQgigiAAgwIAAgOQAAhEAxgyQAxgxBGAAIDxAAQBdAABCBCQBBBBAABbQAAAfgWAWQgVAWgfAAg");
	this.shape_9.setTransform(83.1,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#804B21").s().p("Ai6EiIiNijQgrgzgHhBIgeksIAEAAQA8C7BuAaQAnAJBFgFQBngJAWAAQAWAABqAJQBIAFApgJQBygbAwi6IAFAAIgfEsQgGBBgsAzIiMCjg");
	this.shape_10.setTransform(74,85.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEC0A2").s().p("ABXF4QhHgig/g2QiciFAAibQAAinB4h4QB2h4CpABQjADfAHDEQAHCxCyDZQgxAAhEgfg");
	this.shape_11.setTransform(53.6,52.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FECDAC").s().p("Ah0F4QhHgihAg2QiciFAAibQAAinB4h4QB3h4CoABQCpgBB3B4QB4B4AACnQAACoh4B4Qh3B3ipAAQgwAAhEgfg");
	this.shape_12.setTransform(74,52.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FECDAC").s().p("AmXDaIAAgcQAAioB4h3QB3h4CoABQCpgBB3B4QB4B3AACoIAAAcg");
	this.shape_13.setTransform(74,33.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EEC0A2").s().p("Al1FGIAAqLIAcBZQApBsBDBfQDXEuGLA5g");
	this.shape_14.setTransform(74,119.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C4AA").s().p("Al1FGIAAqLILqAAIAAKLg");
	this.shape_15.setTransform(74,119.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(12.5,5.5,120,120), null);


(lib.Ceja2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#804B21").s().p("AhUA2QgMgDgIgKQgHgKAEgNQAEgOANgGQBNgsBXgHQAPgBALAJQAKAIAAANQgBAMgJAJQgJAIgNABQhKAGhAAlQgJAFgJAAIgGAAg");
	this.shape.setTransform(10.9,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9C4AA").s().p("AhUA2QgMgDgIgKQgHgKAEgNQADgNAOgHQBLgsBZgHQAPgBAKAJQALAIAAANQgBANgJAIQgJAIgNABQhLAGg/AmQgJAEgJAAIgGAAg");
	this.shape_1.setTransform(11.1,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ceja2, new cjs.Rectangle(0,0,22.1,11.6), null);


(lib.Ceja1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#804B21").s().p("AA/AvQhBgjhLgCQgNgBgJgIQgKgIgBgMQgBgNAKgJQALgJAPAAQBXADBPApQANAGAFANQAEANgHAKQgHALgMADIgIABQgIAAgIgEg");
	this.shape.setTransform(11.2,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9C4AA").s().p("AA/AvQhBgihLgDQgNgBgJgIQgKgIgBgMQgBgNAKgJQAKgJAQAAQBXADBPApQANAGAFANQAEANgHALQgHAKgMADIgIABQgIAAgIgEg");
	this.shape_1.setTransform(11.1,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ceja1, new cjs.Rectangle(0,0,22.3,10.9), null);


// stage content:
(lib.Juan2Pag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ceja2
	this.instance = new lib.Ceja2();
	this.instance.parent = this;
	this.instance.setTransform(40.2,44.7,1,1,0,0,0,11.1,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:11,rotation:-0.6,x:39.9},0).wait(1).to({rotation:-1.2,x:39.8,y:44.8},0).wait(1).to({rotation:-1.9,x:39.7},0).wait(1).to({rotation:-2.5,x:39.6,y:44.9},0).wait(1).to({rotation:-3.1,x:39.4},0).wait(1).to({rotation:-3.7,x:39.3,y:45},0).wait(1).to({rotation:-4.4,x:39.2,y:45.1},0).wait(1).to({rotation:-5,x:39},0).wait(1).to({rotation:-5.6,x:38.9},0).wait(1).to({rotation:-6.2,x:38.8,y:45.2},0).wait(1).to({rotation:-6.9,x:38.7,y:45.3},0).wait(1).to({rotation:-7.5,x:38.5},0).wait(1).to({rotation:-8.1,x:38.4,y:45.4},0).wait(1).to({rotation:-8.7,x:38.3,y:45.5},0).wait(1).to({rotation:-9.4,x:38.2},0).wait(1).to({rotation:-10,x:38.1,y:45.6},0).wait(1).to({rotation:-10.6,x:37.9},0).wait(1).to({rotation:-11.2,x:37.8,y:45.7},0).wait(1).to({rotation:-11.9,x:37.7,y:45.8},0).wait(1).to({rotation:-12.5,x:37.6},0).wait(1).to({rotation:-13.1,x:37.4},0).wait(1).to({rotation:-13.7,y:45.9},0).wait(1).to({rotation:-14.4,x:37.2},0).wait(1).to({rotation:-15,x:37.1,y:46},0).wait(26).to({rotation:-14.4,x:37.2,y:45.9},0).wait(1).to({rotation:-13.8,x:37.3},0).wait(1).to({rotation:-13.2,x:37.4},0).wait(1).to({rotation:-12.6,x:37.5,y:45.8},0).wait(1).to({rotation:-12,x:37.6,y:45.7},0).wait(1).to({rotation:-11.4,x:37.8},0).wait(1).to({rotation:-10.8,x:37.9,y:45.6},0).wait(1).to({rotation:-10.2,x:38.1},0).wait(1).to({rotation:-9.6,y:45.5},0).wait(1).to({rotation:-9,x:38.2},0).wait(1).to({rotation:-8.4,x:38.4,y:45.4},0).wait(1).to({rotation:-7.8,x:38.5},0).wait(1).to({rotation:-7.2,x:38.6,y:45.3},0).wait(1).to({rotation:-6.6,x:38.7},0).wait(1).to({rotation:-6,x:38.9,y:45.2},0).wait(1).to({rotation:-5.4,x:39,y:45.1},0).wait(1).to({rotation:-4.8,x:39.1},0).wait(1).to({rotation:-4.2,x:39.2},0).wait(1).to({rotation:-3.6,x:39.3,y:45},0).wait(1).to({rotation:-3,x:39.5,y:44.9},0).wait(1).to({rotation:-2.4,x:39.6},0).wait(1).to({rotation:-1.8,x:39.7,y:44.8},0).wait(1).to({rotation:-1.2,x:39.8,y:44.7},0).wait(1).to({rotation:-0.6,x:39.9},0).wait(1).to({rotation:0,x:40.1},0).wait(1));

	// Ceja1
	this.instance_1 = new lib.Ceja1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.7,44.4,1,1,0,0,0,11.2,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:11.1,rotation:0.6},0).wait(1).to({rotation:1.2,x:82.9,y:44.5},0).wait(1).to({rotation:1.9,x:83},0).wait(1).to({rotation:2.5,x:83.1,y:44.6},0).wait(1).to({rotation:3.1,x:83.2,y:44.7},0).wait(1).to({rotation:3.7,x:83.4},0).wait(1).to({rotation:4.4,x:83.5,y:44.8},0).wait(1).to({rotation:5,x:83.6},0).wait(1).to({rotation:5.6,x:83.7},0).wait(1).to({rotation:6.2,x:83.9,y:44.9},0).wait(1).to({rotation:6.9,x:84,y:45},0).wait(1).to({rotation:7.5,x:84.1},0).wait(1).to({rotation:8.1,x:84.3},0).wait(1).to({rotation:8.7,x:84.4,y:45.1},0).wait(1).to({rotation:9.4,x:84.5,y:45.2},0).wait(1).to({rotation:10,x:84.6},0).wait(1).to({rotation:10.6,x:84.7},0).wait(1).to({rotation:11.2,x:84.9,y:45.3},0).wait(1).to({rotation:11.9,x:85,y:45.4},0).wait(1).to({rotation:12.5,x:85.1},0).wait(1).to({rotation:13.1,x:85.2},0).wait(1).to({rotation:13.7,x:85.4,y:45.5},0).wait(1).to({rotation:14.4,x:85.5,y:45.6},0).wait(1).to({rotation:15,x:85.6,y:45.5},0).wait(26).to({rotation:14.4,x:85.5},0).wait(1).to({rotation:13.8,x:85.4},0).wait(1).to({rotation:13.2,x:85.2},0).wait(1).to({rotation:12.6,x:85.1,y:45.4},0).wait(1).to({rotation:12,x:85},0).wait(1).to({rotation:11.4,x:84.9,y:45.3},0).wait(1).to({rotation:10.8,x:84.8},0).wait(1).to({rotation:10.2,x:84.6,y:45.2},0).wait(1).to({rotation:9.6,x:84.5,y:45.1},0).wait(1).to({rotation:9,x:84.4},0).wait(1).to({rotation:8.4,x:84.3},0).wait(1).to({rotation:7.8,x:84.1,y:45},0).wait(1).to({rotation:7.2,x:84},0).wait(1).to({rotation:6.6,y:44.9},0).wait(1).to({rotation:6,x:83.8,y:44.8},0).wait(1).to({rotation:5.4,x:83.7,y:44.9},0).wait(1).to({rotation:4.8,x:83.6,y:44.8},0).wait(1).to({rotation:4.2,x:83.4,y:44.7},0).wait(1).to({rotation:3.6,x:83.3},0).wait(1).to({rotation:3,x:83.2},0).wait(1).to({rotation:2.4,x:83.1,y:44.6},0).wait(1).to({rotation:1.8,x:83,y:44.5},0).wait(1).to({rotation:1.2,x:82.9},0).wait(1).to({rotation:0.6,x:82.7,y:44.4},0).wait(1).to({rotation:0,x:82.6},0).wait(1));

	// Ojos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#481B06").s().p("AgdAdQgMgMAAgRQAAgQAMgMQANgNAQAAIAGAAQgGAHAAAIQAAAJAFAHQAHAGAJAAQALABAIgKQACAHAAAGQAAARgMAMQgNANgRAAQgQAAgNgNg");
	this.shape.setTransform(80.7,53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#481B06").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAIAHAAQgGAGgBAJQAAAJAGAHQAGAGAIAAQANABAGgKQADAHAAAGQAAARgMAMQgMANgSAAQgQAAgMgNg");
	this.shape_1.setTransform(42.8,53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2AgQgXgXAAgfQAAggBNAAQBOAAAAAgQAAAfgXAXQgWAXghAAQgfAAgXgXg");
	this.shape_2.setTransform(42.7,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2AgQgXgXAAgfQAAggBNAAQBOAAAAAgQAAAfgWAXQgYAXggAAQgfAAgXgXg");
	this.shape_3.setTransform(80.2,55.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D99767").s().p("Ag2AgQgXgXAAgfQAAggBNAAQBOAAAAAgQAAAfgXAXQgXAXggAAQgfAAgXgXg");
	this.shape_4.setTransform(42.8,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D99767").s().p("Ag2AgQgXgXAAgfQAAggBNAAQBOAAAAAgQAAAfgXAXQgXAXggAAQgfAAgXgXg");
	this.shape_5.setTransform(80.3,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(75));

	// Ojeras
	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.5,57.2);

	this.instance_3 = new lib.Interpolación7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,60.9);

	this.instance_4 = new lib.Interpolación8("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.5,60.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpolación9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(61.5,57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_4}]},25).to({state:[{t:this.instance_5}]},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:60.9},24).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({_off:true,y:57.2},25).wait(1));

	// Bocas
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhyAGQAAgFAqgFQApgHAfAAQAgAAAqAHQApAFAAAFQAAAGhzAAQhyAAAAgGg");
	this.shape_6.setTransform(62.2,89.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhyAHQAAgGAqgGQApgIAfAAQAgAAAqAIQApAGAAAGQAAAHhzAAQhyAAAAgHg");
	this.shape_7.setTransform(62.2,89.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhxAHQAAgGApgHQApgIAfAAQAgAAAqAIQAoAHAAAGQAAAJhygBQhxABAAgJg");
	this.shape_8.setTransform(62.2,89.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhxAIQAAgHApgIQApgJAfAAQAhAAAoAJQApAIAAAHQAAAJhyAAQhxAAAAgJg");
	this.shape_9.setTransform(62.2,89.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhxAJQAAgJApgIQApgKAfAAQAhAAAoAKQApAIAAAJQAAAKhyAAQhxAAAAgKg");
	this.shape_10.setTransform(62.2,89.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhxAKQAAgKApgKQApgJAfgBQAhABAoAJQApAKAAAKQAAAKhyABQhxgBAAgKg");
	this.shape_11.setTransform(62.2,89.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhxAKQAAgKApgLQAogKAgAAQAhAAAoAKQApALAAAKQAAAMhyAAQhxAAAAgMg");
	this.shape_12.setTransform(62.2,89.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhxALQAAgLApgMQAogLAgAAQAhAAAoALQApAMAAALQAAANhyAAQhxAAAAgNg");
	this.shape_13.setTransform(62.2,89);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhxAMQAAgMApgNQApgMAfAAQAiAAAnAMQApANAAAMQgBAOhxAAQhwAAgBgOg");
	this.shape_14.setTransform(62.2,88.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhwAMQAAgNApgNQAngMAgAAQAhAAAoAMQAoANAAANQAAAPhxABQhwgBAAgPg");
	this.shape_15.setTransform(62.2,88.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhwANQAAgOApgOQAngNAgAAQAhAAAoANQAoAOAAAOQAAAQhxAAQhwAAAAgQg");
	this.shape_16.setTransform(62.2,88.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhwAOQAAgQApgOQAngOAgAAQAiAAAnAOQAoAOAAAQQAAARhxAAQhwAAAAgRg");
	this.shape_17.setTransform(62.2,88.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhwAOQAAgQApgPQAngPAgAAQAiAAAnAPQAoAPAAAQQAAAThxAAQhwAAAAgTg");
	this.shape_18.setTransform(62.2,88.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhwAPQAAgRApgQQAmgPAhAAQAiAAAmAPQApAQAAARQAAAThxAAQhwAAAAgTg");
	this.shape_19.setTransform(62.2,88.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhvAQQAAgSAogRQAmgQAhAAQAiAAAmAQQApARAAASQAAAUhxAAQhwAAABgUg");
	this.shape_20.setTransform(62.2,88.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhvAQQAAgTAogRQAmgRAhAAQAiAAAmARQApARAAATQAAAWhxAAQhwAAABgWg");
	this.shape_21.setTransform(62.2,88.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhvARQAAgVAogSQAmgQAhgBQAiABAmAQQAoASAAAVQAAAXhwAAQhvAAAAgXg");
	this.shape_22.setTransform(62.2,88.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhvARQAAgUAogTQAmgSAhAAQAiAAAmASQAoATAAAUQAAAYhwAAQhvAAAAgYg");
	this.shape_23.setTransform(62.2,88.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhvASQAAgWAogUQAmgSAhAAQAiAAAmASQAoAUAAAWQAAAZhwAAQhvAAAAgZg");
	this.shape_24.setTransform(62.2,88.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhvATQAAgXAogVQAlgTAiAAQAiAAAmATQAoAVAAAXQAAAahwAAQhvAAAAgag");
	this.shape_25.setTransform(62.2,88);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhuAUQAAgYAngWQAmgTAhAAQAiAAAmATQAnAWAAAYQAAAbhvAAQhvAAABgbg");
	this.shape_26.setTransform(62.2,88);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhuAUQAAgZAogWQAkgUAiAAQAiAAAmAUQAnAWAAAZQAAAchvAAQhvAAABgcg");
	this.shape_27.setTransform(62.2,87.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhuAVQAAgaAogXQAkgVAiAAQAjAAAkAVQAoAXAAAaQAAAdhvAAQhvAAABgdg");
	this.shape_28.setTransform(62.2,87.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhuAVQAAgbAogXQAkgVAigBQAjABAkAVQAoAXAAAbQAAAfhvAAQhuAAAAgfg");
	this.shape_29.setTransform(62.2,87.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhuAWQAAgcAogYQAkgWAiAAQAjAAAkAWQAoAYAAAcQAAAfhvAAQhuAAAAgfg");
	this.shape_30.setTransform(62.2,87.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhuAVQAAgbAogWQAkgVAiAAQAjAAAkAVQAoAWAAAbQAAAdhvAAQhvAAABgdg");
	this.shape_31.setTransform(62.2,87.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhuAUQAAgZAngVQAmgTAhAAQAiAAAmATQAnAVAAAZQAAAbhvAAQhvAAABgbg");
	this.shape_32.setTransform(62.2,88);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhvASQAAgWAogTQAmgSAhAAQAiAAAmASQAoATAAAWQAAAYhwAAQhvAAAAgYg");
	this.shape_33.setTransform(62.2,88.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhvASQAAgWAogSQAmgRAhAAQAiAAAmARQAoASAAAWQAAAWhwAAQhvAAAAgWg");
	this.shape_34.setTransform(62.2,88.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhvARQAAgUAogSQAmgQAhAAQAiAAAmAQQApASAAAUQAAAWhxgBQhwABABgWg");
	this.shape_35.setTransform(62.2,88.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhvAQQAAgTAogRQAmgQAhAAQAiAAAmAQQApARAAATQAAAVhxAAQhwAAABgVg");
	this.shape_36.setTransform(62.2,88.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhwAQQAAgTApgQQAmgPAhAAQAiAAAmAPQApAQAAATQAAAThxAAQhwAAAAgTg");
	this.shape_37.setTransform(62.2,88.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhwAPQAAgRApgQQAmgOAhAAQAiAAAmAOQApAQAAARQAAAShxAAQhwAAAAgSg");
	this.shape_38.setTransform(62.2,88.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhwAOQAAgQApgOQAngPAgAAQAiAAAnAPQAoAOAAAQQAAAShxAAQhwAAAAgSg");
	this.shape_39.setTransform(62.2,88.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhwANQAAgOApgOQAngOAgAAQAiAAAnAOQAoAOAAAOQAAARhxAAQhwAAAAgRg");
	this.shape_40.setTransform(62.2,88.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhwANQAAgOApgOQAngNAgAAQAhAAAoANQAoAOAAAOQAAAPhxAAQhwAAAAgPg");
	this.shape_41.setTransform(62.2,88.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhwAMQAAgNAogMQAogNAgAAQAhAAAoANQAoAMAAANQAAAPhxAAQhwAAAAgPg");
	this.shape_42.setTransform(62.2,88.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhxALQAAgLApgMQApgMAfAAQAiAAAnAMQApAMAAALQgBAOhxAAQhwAAgBgOg");
	this.shape_43.setTransform(62.2,89);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhxALQAAgLApgLQAogMAgAAQAhAAAoAMQApALAAALQAAANhyAAQhxAAAAgNg");
	this.shape_44.setTransform(62.2,89.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhxAKQAAgKApgKQAogLAgAAQAhAAAoALQApAKAAAKQAAAMhyAAQhxAAAAgMg");
	this.shape_45.setTransform(62.2,89.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhxAJQAAgJApgJQApgKAfAAQAhAAAoAKQApAJAAAJQAAALhyAAQhxAAAAgLg");
	this.shape_46.setTransform(62.2,89.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhxAIQAAgHApgHQApgIAfAAQAgAAAqAIQAoAHAAAHQAAAHhyAAQhxAAAAgHg");
	this.shape_47.setTransform(62.2,89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},25).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Flema
	this.instance_6 = new lib.Interpolación3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(57.2,75.1);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Interpolación4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(55.6,77.2,1,1,-15);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,rotation:-15,x:55.6,y:77.2,alpha:1},14).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},14).to({regX:0.1,regY:0.1,scaleX:2.85,scaleY:2.65,rotation:-45,x:55.1,y:82},40).wait(11).to({startPosition:0},0).to({alpha:0},9).wait(1));

	// Juan
	this.instance_8 = new lib.ClipGroup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61.6,90,1,1,0,0,0,73.6,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75));

	// Fondo
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape_48.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48,54.5,147.2,191.1);
// library properties:
lib.properties = {
	id: '2A8801FDF1FD41BB946E87BDB491E7D2',
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
an.compositions['2A8801FDF1FD41BB946E87BDB491E7D2'] = {
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