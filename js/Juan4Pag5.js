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


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED523B").s().p("AgRAPQgDgEABgGQACgFAFgFQAEgEAOgEIAOgEIgGANQgGANgFAEQgEAEgGABIgCAAQgFAAgDgDg");
	this.shape.setTransform(0.8,2.6,0.524,0.524);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgQALQgGgCgBgFQgBgEAEgFQAEgFAHgBQAGgBAOADIANADIgLAIQgMAJgFABIgEABQgEAAgEgCg");
	this.shape_1.setTransform(-0.3,0,0.524,0.524);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED523B").s().p("AgLALQgGgDgDgFQgEgEACgFQACgFAGgBQAGgCAHADQAEADALAKIAJALIgOABQgOgBgGgCg");
	this.shape_2.setTransform(0.3,-2.8,0.524,0.524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-3.5,3.5,7.1);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC6AC").s().p("AiGCNQgUgFgNgRQgOgRAAgSQAAgTANgKIEOi/QAOgJAUAFQATAFAOARQANARAAASQAAATgNAKIkOC/QgJAGgMAAQgGAAgGgCg");
	this.shape.setTransform(53,-27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC6AC").s().p("Ah2CbQgTgDgQgPQgPgQgCgTQgCgTANgLID2jaQANgLATADQAUADAPAQQAPAPACATQACATgNALIj2DaQgKAJgOAAIgIgBg");
	this.shape_1.setTransform(55.2,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC6AC").s().p("AhiCpQgUgBgRgOQgQgOgEgTQgEgSALgNIDZj3QALgMAUABQATABARAOQARAPAEASQAEATgMAMIjZD2QgKAMgSAAIgCAAg");
	this.shape_2.setTransform(49,-50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC6AC").s().p("AABCHQgUgCgQgIQgPgJAAgLIgCjYQAAgLAPgGQAPgHAVABQAVACAPAJQAPAIABALIACDYQAAALgPAHQgNAFgSAAIgGAAg");
	this.shape_3.setTransform(22.9,-40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBC6AC").s().p("AhoCwQgUgMgGgRQgHgTAIgOICpkZQAIgPAUgCQATgCASALQATALAIASQAGASgIAPIioEZQgJAPgTACIgGAAQgRAAgPgJg");
	this.shape_4.setTransform(37.2,-51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBC6AC").s().p("Ao2HbIgXgXINyuWQA5g6BKgLQBKgLAxAsQAwArgFBHQgFBHg3A6IqAKfQhlBoiFATQgaADgYAAQhlAAhHg/g");
	this.shape_5.setTransform(-13.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-69.9,144.8,139.9);


(lib.Interpolación5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC6AC").s().p("AiGCNQgUgFgNgRQgOgRAAgSQAAgTANgKIEOi/QAOgJAUAFQATAFAOARQANARAAASQAAATgNAKIkOC/QgJAGgMAAQgGAAgGgCg");
	this.shape.setTransform(53,-27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC6AC").s().p("Ah2CbQgTgDgQgPQgPgQgCgTQgCgTANgLID2jaQANgLATADQAUADAPAQQAPAPACATQACATgNALIj2DaQgKAJgOAAIgIgBg");
	this.shape_1.setTransform(55.2,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC6AC").s().p("AhiCpQgUgBgRgOQgQgOgEgTQgEgSALgNIDZj3QALgMAUABQATABARAOQARAPAEASQAEATgMAMIjZD2QgKAMgSAAIgCAAg");
	this.shape_2.setTransform(49,-50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC6AC").s().p("AABCHQgUgCgQgIQgPgJAAgLIgCjYQAAgLAPgGQAPgHAVABQAVACAPAJQAPAIABALIACDYQAAALgPAHQgNAFgSAAIgGAAg");
	this.shape_3.setTransform(22.9,-40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBC6AC").s().p("AhoCwQgUgMgGgRQgHgTAIgOICpkZQAIgPAUgCQATgCASALQATALAIASQAGASgIAPIioEZQgJAPgTACIgGAAQgRAAgPgJg");
	this.shape_4.setTransform(37.2,-51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBC6AC").s().p("Ao2HbIgXgXINyuWQA5g6BKgLQBKgLAxAsQAwArgFBHQgFBHg3A6IqAKfQhlBoiFATQgaADgYAAQhlAAhHg/g");
	this.shape_5.setTransform(-13.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-69.9,144.8,139.9);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC6AC").s().p("AiGCNQgUgFgNgRQgOgRAAgSQAAgTANgKIEOi/QAOgJAUAFQATAFAOARQANARAAASQAAATgNAKIkOC/QgJAGgMAAQgGAAgGgCg");
	this.shape.setTransform(53,-27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC6AC").s().p("Ah2CbQgTgDgQgPQgPgQgCgTQgCgTANgLID2jaQANgLATADQAUADAPAQQAPAPACATQACATgNALIj2DaQgKAJgOAAIgIgBg");
	this.shape_1.setTransform(55.2,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC6AC").s().p("AhiCpQgUgBgRgOQgQgOgEgTQgEgSALgNIDZj3QALgMAUABQATABARAOQARAPAEASQAEATgMAMIjZD2QgKAMgSAAIgCAAg");
	this.shape_2.setTransform(49,-50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC6AC").s().p("AABCHQgUgCgQgIQgPgJAAgLIgCjYQAAgLAPgGQAPgHAVABQAVACAPAJQAPAIABALIACDYQAAALgPAHQgNAFgSAAIgGAAg");
	this.shape_3.setTransform(22.9,-40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBC6AC").s().p("AhoCwQgUgMgGgRQgHgTAIgOICpkZQAIgPAUgCQATgCASALQATALAIASQAGASgIAPIioEZQgJAPgTACIgGAAQgRAAgPgJg");
	this.shape_4.setTransform(37.2,-51.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBC6AC").s().p("Ao2HbIgXgXINyuWQA5g6BKgLQBKgLAxAsQAwArgFBHQgFBHg3A6IqAKfQhlBoiFATQgaADgYAAQhlAAhHg/g");
	this.shape_5.setTransform(-13.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-69.9,144.8,139.9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	mask.setTransform(72.1,62.1);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2AaQgWgLgBgPQABgOAWgLQAXgLAfAAQAhAAAWALQAWALABAOQgBAPgWALQgWALghAAQgfAAgXgLg");
	this.shape.setTransform(72.9,87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgGAGAAAIQAAAJAGAGQAGAHAIAAQAMABAHgKQACAIAAAFQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(91.7,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgFAFgBAJQAAAJAGAGQAGAHAJAAQAMABAGgKQACAGAAAHQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(54.4,59.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AgTBFIAAh2QAAgIAGgFQAGgHAHABQAIgBAGAHQAGAGAAAHIAAB2g");
	this.shape_3.setTransform(87.4,105.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AgTBFIAAh2QAAgHAGgGQAGgHAHABQAIgBAGAHQAGAGAAAHIAAB2g");
	this.shape_4.setTransform(59.6,105.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FECFAE").s().p("AloE6IAAmdQAAhZA/g+QA/g/BZAAIHTAkIAnFYQAABmhIBJQhJBIhmAAg");
	this.shape_5.setTransform(108.3,156.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FECFAE").s().p("AhxE6QhmAAhIhIQhJhJAAhmIAnlYIHUgkQBYAAA/A/QA/A+AABZIAAGdg");
	this.shape_6.setTransform(36.1,156.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FECFAE").s().p("AgnAXQgQgQAAgXQAAgXA3AAQA5AAgBAXQAAAXgQAQQgQARgYAAQgWAAgRgRg");
	this.shape_7.setTransform(72.9,74);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B350E").s().p("AgaAYQgRgNAAgTQAAgYArAAQAtAAAAAYQgBAUgQALQgLAJgRABQgLAAgPgJg");
	this.shape_8.setTransform(72.9,76.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhMAhQAAghAXgeQAYgiAdAAQAfAAAXAiQAXAeAAAhQAAAghNAAQhMAAAAggg");
	this.shape_9.setTransform(54.4,58.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhMAhQAAghAXgeQAYgiAdAAQAeAAAYAiQAXAeAAAhQAAAghNAAQhMAAAAggg");
	this.shape_10.setTransform(91.3,58.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB9967").s().p("AhMAmQAAgmAXgjQAYgmAdAAQAfAAAXAmQAXAjAAAmQAAAkhNAAQhMAAAAgkg");
	this.shape_11.setTransform(54.4,60.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB9967").s().p("AhMAmQAAgmAXgjQAYgmAdAAQAeAAAYAmQAXAjAAAmQAAAkhNAAQhMAAAAgkg");
	this.shape_12.setTransform(91.3,60.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#804B21").s().p("AA1A4Qg6gthHgOQgNgDgHgKQgIgKACgMQABgNAMgHQALgHAPADQBUATBFA0QAMAKACANQABAOgIAJQgJAIgMABIgCAAQgMAAgJgIg");
	this.shape_13.setTransform(93.1,46.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#804B21").s().p("AhMA+QgNgBgIgJQgIgJACgOQACgNAMgJQBIgzBTgQQAPgDALAIQAMAHABANQABAMgJAKQgIAJgMADQhIANg6ArQgKAHgKAAIgDAAg");
	this.shape_14.setTransform(54.4,46);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBC6AC").s().p("AA1A4Qg4gthJgPQgMgCgIgKQgIgLACgMQABgMAMgHQALgHAPADQBVATBDA0QAMAJACAOQACANgJAJQgIAJgNABQgMAAgKgIg");
	this.shape_15.setTransform(92.9,47);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBC6AC").s().p("AhMA+QgNgBgIgJQgJgKADgNQACgNAMgJQBGgzBVgQQAOgDAMAIQALAHABANQABAMgIAKQgIAJgMADQhIAMg7AsQgJAHgLAAIgCAAg");
	this.shape_16.setTransform(54.7,46.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("AhXgcIAAgcQAAggAeAOQA0AYATAAIBKAAIAAABQAAA0gmAmQgmAmg1AAg");
	this.shape_17.setTransform(40.5,31.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#804B21").s().p("AhXhkQAAgrAegeQAdgeAqAAIBKAAIAABuQAAA1gmAnQgmAlg1ABIgiCng");
	this.shape_18.setTransform(40.5,36.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AiBCTQgUgBAPgIIAzgZQBdgtAAgjIAAgOQAAguhNhGQgfgbgEgJQgGgNAfAAQBaABBABAQBABAAABaQAAAegVAWQgVAVgfABg");
	this.shape_19.setTransform(98.8,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#804B21").s().p("AjFCTQgvAAghgiQgighAAgvIAAgOQAAhEAxgwQAwgxBFAAIDtAAQBbABBBBAQBABAAABaQAAAegWAWQgVAVgeABg");
	this.shape_20.setTransform(81.8,14.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B350E").s().p("AAtAWQgtgMgtAJQgIABgHgDQgHgEgCgIQgCgGAFgHQAEgHAKgCQA1gKA1ANQAJACAFAIQAEAGgDAIQgCAHgIADQgEACgFAAIgFAAg");
	this.shape_21.setTransform(73.6,95.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#804B21").s().p("Ai4EeIiJigQgsgzgFhAIgekoIAEAAQA7C5BrAZQAmAJBFgGQBlgIAWAAQAWAABoAIQBIAGAngJQBwgaAwi4IAEAAIgeEoQgFBAgrAzIiLCgg");
	this.shape_22.setTransform(72.9,83.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EEC0A2").s().p("ABVFxQhFggg+g2QiZiDAAiYQAAilB1h2QB0h1CmAAQi9DcAIDAQAGCvCvDWQgvAAhEggg");
	this.shape_23.setTransform(52.8,51.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FECFAE").s().p("AhzFxQhFggg/g2QiZiDAAiYQAAilB1h2QB2h1ClAAQCmAAB1B1QB2B2AAClQAACmh2B1Qh1B2imAAQgvAAhEggg");
	this.shape_24.setTransform(72.9,51.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FECFAE").s().p("AmQDWIAAgbQAAimB1h1QB2h1ClAAQCmAAB1B1QB2B1AACmIAAAbg");
	this.shape_25.setTransform(72.9,32.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EEC0A2").s().p("AlvFAIAAqAIAbBYQApBqBCBdQDTEpGGA4g");
	this.shape_26.setTransform(72.9,117.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBC6AC").s().p("AlvFAIAAqAILfAAIAAKAg");
	this.shape_27.setTransform(72.9,117.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(12.3,2.2,119.8,119.8), null);


// stage content:
(lib.Juan4Pag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmnGnQivivAAj4QAAj3CviwQCwiuD3AAQD4AACvCuQCvCwABD3QgBD4ivCvQivCwj4AAQj3AAiwiwg");
	mask.setTransform(60.3,60.5);

	// Mano
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(38.2,189.9);

	this.instance_1 = new lib.Interpolación6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.2,139.7);

	this.instance_2 = new lib.Interpolación3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.2,139.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},30).to({state:[{t:this.instance}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:139.7},19).wait(30).to({_off:false,y:189.9},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({_off:true,y:189.9},20).wait(1));

	// Mascara (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ADAI4IAAo1IA4AAIAAI1g");
	var mask_1_graphics_1 = new cjs.Graphics().p("ACoI3IAAozIBQAAIAAIzg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ACRI3IAAoxIBnAAIAAIxg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AB6I2IAAovIB+AAIAAIvg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ABjI2IAAouICVAAIAAIug");
	var mask_1_graphics_5 = new cjs.Graphics().p("ABMI1IAAorICsAAIAAIrg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AA1I1IAAoqIDDAAIAAIqg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AAeI0IAAonIDaAAIAAIng");
	var mask_1_graphics_8 = new cjs.Graphics().p("AAHI0IAAomIDxAAIAAImg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AgPIzIAAokIEHAAIAAIkg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AgnIzIAAoiIEfAAIAAIig");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ag+IzIAAohIE2AAIAAIhg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AhVIyIAAoeIFNAAIAAIeg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AhsIyIAAodIFkAAIAAIdg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AiDIxIAAobIF7AAIAAIbg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AiaIxIAAoZIGSAAIAAIZg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AixIwIAAoXIGpAAIAAIXg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjIIwIAAoWIHAAAIAAIWg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjfIvIAAoTIHXAAIAAITg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Aj2IvIAAoSIHuAAIAAISg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:24.8,y:56.8}).wait(1).to({graphics:mask_1_graphics_1,x:24.8,y:56.7}).wait(1).to({graphics:mask_1_graphics_2,x:24.7,y:56.7}).wait(1).to({graphics:mask_1_graphics_3,x:24.7,y:56.6}).wait(1).to({graphics:mask_1_graphics_4,x:24.7,y:56.6}).wait(1).to({graphics:mask_1_graphics_5,x:24.7,y:56.5}).wait(1).to({graphics:mask_1_graphics_6,x:24.7,y:56.5}).wait(1).to({graphics:mask_1_graphics_7,x:24.7,y:56.4}).wait(1).to({graphics:mask_1_graphics_8,x:24.7,y:56.4}).wait(1).to({graphics:mask_1_graphics_9,x:24.7,y:56.3}).wait(1).to({graphics:mask_1_graphics_10,x:24.7,y:56.3}).wait(1).to({graphics:mask_1_graphics_11,x:24.7,y:56.3}).wait(1).to({graphics:mask_1_graphics_12,x:24.7,y:56.2}).wait(1).to({graphics:mask_1_graphics_13,x:24.7,y:56.2}).wait(1).to({graphics:mask_1_graphics_14,x:24.7,y:56.1}).wait(1).to({graphics:mask_1_graphics_15,x:24.7,y:56.1}).wait(1).to({graphics:mask_1_graphics_16,x:24.7,y:56}).wait(1).to({graphics:mask_1_graphics_17,x:24.7,y:56}).wait(1).to({graphics:mask_1_graphics_18,x:24.7,y:55.9}).wait(1).to({graphics:mask_1_graphics_19,x:24.7,y:55.9}).wait(51));

	// Silibancia
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2).p("AgTgLIAGAeIAWgGIgBgDIgCgZIABgEQAFgHAHACQAFABAAAGQAAAEgEADQgCACgFgBIgCAAQAAACAAACIAEAXIABAEQgFADAAAAIgWAEQgDAAgBgBIgBgBQABAAgCgEQgBgCABgBIgGglIAAgBIAFgHIAFgDQAFgCADAFQACAEgDAFQgDAEgCAAIgCABgAAKARIgCAAIgUAEIgBABIABAEIAXgFg");
	this.shape.setTransform(40.4,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgPAcIgBgBIgBgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgGglIAAgBIAFgHIAFgDQAFgCADAFQACAEgDAFQgDAEgCAAIgCABIgGAAIAGAeIAWgGIgBgDIgCgZIABgEQAFgHAHACQAFABAAAGQAAAEgEADQgCACgFgBIgCAAIAAAEIAEAXIABAEIgFADIgWAEIgEgBgAgMAVIgBABIABAEIAXgFIgBgEIgCAAg");
	this.shape_1.setTransform(40.4,86.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2).p("AgfAAIACgBIAPgmQACgEADABIAuARIANAGIgBAEIgVAyQgDAFgHADIgBgBIgFgCQgCgBgCgEQAAgDABgBQACgDAEgDQAGgEAFAFIABAAIADgEIAKgdQABgDgCAAIgagKIgCAFQAAADgDAFIgRAtQAAABgDACQgDACgFgCIgBgBIgGgFIAAgCIAAgEQABgEACgBIAGgEQAEgCADADIACABIAVgwIAAgCQgLgFgIgCIgCADQAAABgDAGIgDAHIgNAXIgFAGQgFAFgGgCQgDgBgCgCQgBgFABgCIABgCIADgCQACgCAEAAQAEAAACABgAArgQQgIgFgTgFIgCADIAcAKg");
	this.shape_2.setTransform(32.2,78.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED523B").s().p("AARAqIgEgCQgDgBgCgEIACgEQABgDAEgDQAGgEAGAFIAAAAIADgEIAKgdQABgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgagKIgCAFIgDAIIgRAtIgDADQgDACgFgCIgBgBIgGgFIAAgCIAAgEQACgEACgBIAFgEQAEgCAEADIABABIAVgwIABgCQgMgFgIgCIgCADIgDAHIgCAHIgNAXIgGAGQgFAFgGgCQgDgBgBgCQgBgFABgCIAAgCIADgCQADgCADAAQAEAAACABIACABIACgBIAPgmQACgEADABIAvARIAMAGIgBAEIgVAyQgCAFgIADgAAOgXIAcAKIABgDQgIgFgSgFg");
	this.shape_3.setTransform(32.2,78.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2).p("AgIgQQAKABAFgBQAIgBAFADQACABAAADQgEALgBAPIgDAQQAAADgBAAQAAABgDgBIgCAAQgCgGABgGQABgKAAgGQgFAAgJgBQgIgBgGgEIADgMIAAgBQAEgLABgGIADgEQABgCABAAIACADIAAACIgDAMgAAJACIABgKQAAgDgCABQgIAAgHgBIgCAAIgDAMQAMACAJgBg");
	this.shape_4.setTransform(27.1,88.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED523B").s().p("AAKAjIgCAAQgDgGACgGIAAgQIgOgBQgIgBgGgEIADgMIABgBIAFgRIACgEQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABADIAAACIgCAMIAAACIAPAAQAIgBAEADQABAAABABQAAAAAAAAQAAABABABQAAAAgBABQgDALgCAPIgCAQIgBADIgBABIgCgBgAgMABQAMACAIgBIACgKQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIgPgBIgCAAg");
	this.shape_5.setTransform(27.2,88.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2).p("AgJghQAAAGAAALIACgBQAEgDAEgBQAFgBAEAFQACACgBABQAAAJgHAFIgBAAQgHACgEgCIgBAAIgBADIgBAdQAAADABAEIANgIQAKgGgBgNIAAgCIAAgBQAFACACAEQABAEgCAFQgBADgEACQgDAEgIADQgIADgDALIAAABQgBADgBAAQgBABgCgBIgCAAQgDgBABgCQAAgPABgHQgBgVABgKIABgiQAAgIAIgHQAGgFAHADQAEACABAEQACAHgGAGQgEADgGgBg");
	this.shape_6.setTransform(15.9,66.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED523B").s().p("AgOA2IgCAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgWQgBgVABgKIABgiQAAgIAIgHQAGgFAHADQAEACABAEQACAHgGAGQgEADgGgBIgFgBIAAARIACgBQAEgDAEgBQAFgBAEAFQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAJgHAFIgBAAQgHACgEgCIgBAAIgBADIgBAdQAAADABAEIANgIQAKgGgBgNIAAgCIAAgBQAFACACAEQABAEgCAFQgBADgEACQgDAEgIADQgIADgDALIAAABQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCgBg");
	this.shape_7.setTransform(15.9,66.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2).p("AgHAVQgEgZgBgFIgBgGQgDgQABgMIgBgDQACgDAEACQAEAEADACQAFAGAIAEQAIAEAFAEQAGADABAIQAAAIgCADQgCAEgFACQgBABgBgBIgBgCQACgEgBgEQAAgLgKgGIgKgHIgCgBIAAACIACAOQACANAAAJIABAOQAAAGgCAGQAAAGgCADIgEAFIgBABQgIABgEgBQgEgBgDgFQgDgEABgEQABgFACgBIAHgGg");
	this.shape_8.setTransform(19.5,78.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED523B").s().p("AgTAxQgEgBgDgFQgDgEABgEIADgGIAHgGIALgCIgFgeIgBgGQgDgQABgMIgBgDQACgDAEACIAHAGQAFAGAIAEIANAIQAGADABAIQAAAIgCADQgCAEgFACQgBAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgCQACgEgBgEQAAgLgKgGIgKgHIgCgBIAAACIACAOQACANAAAJIABAOQAAAGgCAGQAAAGgCADIgEAFIgBABIgHAAIgFAAg");
	this.shape_9.setTransform(19.5,78.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2).p("AAIhTIAHABQACAAACACQACACACAHQACAFgBAHIgCAIQgEAKgBACIgJAOQgBABAAAFIACATQABABABAAQAFAAADAEIACACQAIAJgBANQAAACgDAKIgBACQgFAEgBABQgDACAAADIAAAMIgEALIgDAFQgFAFgGgBIgDAAIgHgDQgCAAgBgEIgCgFQgCgEACgFQADgEAFAAQADAAACADQABABgBABQgBABgBAAIgFABQgBADACACQABAEAEADQACABAEgBQAEgBACgGIACgKIABgJQAAgCgDAAIgHgBIgRgFQgCgBgBgCQgFgGgBgLQgBgJAFgKQAEgJAKgKIAJgMIAAgCIAAgFIAAgWIADgYQAAAAACgCgAAGgjIABgBIAJgRQACgEAAgEIAAgKQAAgCgCgDQgEgDgCAEIgCAFIgDAhgAAAgPIAAAAIgCACIgFAGQgEAEgEAFQgFAJgBAFQgBAMADAGQAFAJAGABIAGACQAEABAFAAQABgBAAgBIAAgBIgEgiQAAgDgDACQgDAEgBAEIgCAEIAAAAIABgHQABgGAFgEIABgBgAAPAqIABAAQADgCABgBQABgCAAAAIACgGQACgKgEgJQgBgCgEgEQgCgCgDAAg");
	this.shape_10.setTransform(6.9,73.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED523B").s().p("AgDBUIgDAAIgHgCQgCgBgBgDIgCgGQgCgEACgEQADgFAFAAQADAAACADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCACIgFAAQgBADACADQABADAEAEQACABAEgBQAEgCACgGIACgKIABgIQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgHgBIgRgFIgDgCQgFgHgBgKQgBgJAFgKQAEgJAKgLIAJgLIAAgDIAAgEIAAgXIADgXIACgDIADgDIAHABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQACADACAGQACAGgBAHIgCAHIgFAMIgJAOQgBACAAAFIACATQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAFAAADADIACACQAIAKgBAMIgDAMIgBACIgGAFQgDACAAAEIAAAMIgEALIgDAEQgEAFgEAAIgDgBgAgCgOIgFAHQgEAEgEAFQgFAJgBAFQgBALADAHQAFAJAGABIAGABQAEACAFgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIgEghQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAFgBAEIgCADIAAAAIABgGQABgHAFgDIABgCIgDgSIAAAAgAAPAqIABAAIAEgEIABgCIACgGQACgJgEgKIgFgFQgCgCgDAAgAAKhMIgCAGIgDAhIABACIABgBIAJgRQACgFAAgEIAAgJIgCgFIgDgCQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_11.setTransform(6.9,73.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(70));

	// Tos
	this.instance_3 = new lib.Interpolación7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.2,85.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.1,scaleX:1.87,scaleY:1.87,x:47.7,y:85.8,alpha:1},49).wait(10).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// Juan
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(60.1,92,1,1,0,0,0,72.2,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// Fondo
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape_12.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.9,58,144.5,188.1);
// library properties:
lib.properties = {
	id: 'AFE1238A7B6D4D579CA2E2CE2D700B97',
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
an.compositions['AFE1238A7B6D4D579CA2E2CE2D700B97'] = {
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