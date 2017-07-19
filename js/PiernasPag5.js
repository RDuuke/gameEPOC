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


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmnGoQiwivAAj5QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD5iwCvQiwCwj4AAQj4AAiviwg");
	mask.setTransform(60,62.2);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNANQgGAAgDgEQgEgEAAgFQAAgEAEgEQAEgEAFAAICbAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAg");
	this.shape.setTransform(78.7,103.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNANQgGAAgDgDQgEgFAAgFQAAgEAEgFQADgDAGAAICbAAQAFAAAEADQAEAFAAAEQAAAFgEAFQgEADgFAAg");
	this.shape_1.setTransform(78.7,99);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNANQgFAAgEgEQgEgDAAgGQAAgEAEgEQADgEAGAAICbAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAg");
	this.shape_2.setTransform(78.7,94.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNANQgFAAgEgEQgEgEAAgFQAAgEAEgEQAEgEAFAAICaAAQAGAAAEAEQAEADAAAFQAAAFgEAEQgEAEgGAAg");
	this.shape_3.setTransform(41.4,103.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNANQgFAAgEgDQgEgFAAgFQAAgEAEgFQAEgDAFAAICaAAQAGAAAEADQAEAFAAAEQAAAFgEAFQgEADgGAAg");
	this.shape_4.setTransform(41.4,99);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNANQgFAAgEgEQgEgDAAgGQAAgEAEgEQAEgEAFAAICaAAQAGAAAEAEQAEAEAAAEQAAAGgEADQgEAEgGAAg");
	this.shape_5.setTransform(41.4,94.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#481B06").s().p("AhdBgIAAhhQAAgnAcgbQAbgcAmAAQAnAAAcAcQAbAbAAAnIAABhg");
	this.shape_6.setTransform(41.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#481B06").s().p("AhdBgIAAhhQAAgnAcgbQAbgcAmAAQAnAAAcAcQAbAbAAAnIAABhg");
	this.shape_7.setTransform(78.6,88.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#481B06").s().p("AhdBfQgmgmAAg3IAAiHIEHAAIAACHQAAA3gmAmQgnAng3AAQg1AAgogng");
	this.shape_8.setTransform(78.7,101.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#481B06").s().p("AhcBfQgngmAAg3IAAiHIEHAAIAACHQAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_9.setTransform(41.3,101.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","rgba(246,153,137,0)","#F69989","#F37F74","#F05F5C","#ED3B40","#EA212D"],[0,0.827,0.827,0.878,0.925,0.973,1],-16.8,0,16.9,0).s().p("Ah2GEQgxihgBjjQABjjAxihQAxigBFAAQBGAAAxCgQAxChABDjQgBDjgxChQgxChhGAAQhEAAgyihg");
	this.shape_10.setTransform(78.3,54.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#EA212D","#ED3B40","#F05F5C","#F37F74","#F69989","#F8AD98","#FABBA4","#FAC3AA","#FBC6AC","#FAC3AA","#FABBA4","#F8AD98","#F69989","rgba(246,153,137,0)","rgba(0,0,0,0)"],[0,0.027,0.075,0.122,0.173,0.231,0.294,0.373,0.498,0.627,0.706,0.769,0.827,0.827,1],-16.8,0,16.9,0).s().p("Ah2GEQgxihgBjjQABjjAxihQAxigBFAAQBGAAAxCgQAxChABDjQgBDjgxChQgxChhGAAQhEAAgyihg");
	this.shape_11.setTransform(78.3,54.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","rgba(246,153,137,0)","#F69989","#F37F74","#F05F5C","#ED3B40","#EA212D"],[0,0.827,0.827,0.878,0.925,0.973,1],-16.8,0,16.9,0).s().p("Ah2GEQgyihAAjjQAAjjAyihQAxigBFAAQBGAAAxCgQAxChABDjQgBDjgxChQgxChhGAAQhFAAgxihg");
	this.shape_12.setTransform(41.4,54.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#EA212D","#ED3B40","#F05F5C","#F37F74","#F69989","#F8AD98","#FABBA4","#FAC3AA","#FBC6AC","#FAC3AA","#FABBA4","#F8AD98","#F69989","rgba(246,153,137,0)","rgba(0,0,0,0)"],[0,0.027,0.075,0.122,0.173,0.231,0.294,0.373,0.498,0.627,0.706,0.769,0.827,0.827,1],-16.8,0,16.9,0).s().p("Ah2GEQgyihAAjjQAAjjAyihQAxigBFAAQBGAAAxCgQAxChABDjQgBDjgxChQgxChhGAAQhFAAgxihg");
	this.shape_13.setTransform(41.4,54.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(24.5,2.2,70.6,113.1), null);


(lib.Animar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0E1C").s().p("Ag3AhQgFgDgDgGQgCgGADgGQACgGAGgCIBhgkQAGgCAGACQAGADACAGQADAGgDAGQgDAGgGACIhhAkIgFABQgDAAgEgBg");
	this.shape.setTransform(-46.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0E1C").s().p("AArAhIhhgkQgGgCgCgGQgDgGACgGQADgGAFgDQAGgCAGACIBhAkQAGADADAFQADAGgDAGQgCAGgGADQgDABgDAAIgGgBg");
	this.shape_1.setTransform(-46.1,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC0E1C").s().p("AGmATQgOAAAAgOIAAgDQAAgMAOAAIBvAAQAGAAAEADQAFAEAAAFIAAADQAAAGgFAEQgEAEgGAAgAoWALQgNAAAAgNIAAgDQAAgNANAAIBvAAQAGAAAFAEQAFADAAAGIAAADQAAAGgFAEQgFADgGAAg");
	this.shape_2.setTransform(0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0E1C").s().p("AAsAhIhigkQgGgCgCgGQgDgGACgGQADgGAFgDQAGgCAGACIBiAkQAGACACAGQADAGgCAGQgCAGgGADQgEABgDAAIgFgBg");
	this.shape_3.setTransform(48.4,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC0E1C").s().p("Ag3AhQgFgDgDgGQgCgGADgGQACgFAGgDIBigkQAGgCAGACQAGADACAGQACAGgDAGQgCAGgGACIhiAkIgFABQgEAAgDgBg");
	this.shape_4.setTransform(48.4,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-15.1,109.7,30.2);


(lib.Animar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0E1C").s().p("Ag3AhQgFgDgDgGQgCgGADgGQACgGAGgCIBhgkQAGgCAGACQAGADACAGQADAGgDAGQgDAGgGACIhhAkIgFABQgDAAgEgBg");
	this.shape.setTransform(-46.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0E1C").s().p("AArAhIhhgkQgGgCgCgGQgDgGACgGQADgGAFgDQAGgCAGACIBhAkQAGADADAFQADAGgDAGQgCAGgGADQgDABgDAAIgGgBg");
	this.shape_1.setTransform(-46.1,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC0E1C").s().p("AGmATQgOAAAAgOIAAgDQAAgMAOAAIBvAAQAGAAAEADQAFAEAAAFIAAADQAAAGgFAEQgEAEgGAAgAoWALQgNAAAAgNIAAgDQAAgNANAAIBvAAQAGAAAFAEQAFADAAAGIAAADQAAAGgFAEQgFADgGAAg");
	this.shape_2.setTransform(0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0E1C").s().p("AAsAhIhigkQgGgCgCgGQgDgGACgGQADgGAFgDQAGgCAGACIBiAkQAGACACAGQADAGgCAGQgCAGgGADQgEABgDAAIgFgBg");
	this.shape_3.setTransform(48.4,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC0E1C").s().p("Ag3AhQgFgDgDgGQgCgGADgGQACgFAGgDIBigkQAGgCAGACQAGADACAGQACAGgDAGQgCAGgGACIhiAkIgFABQgEAAgDgBg");
	this.shape_4.setTransform(48.4,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-15.1,109.7,30.2);


(lib.Animar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0E1C").s().p("Ag3AhQgFgDgDgGQgCgGADgGQACgGAGgCIBhgkQAGgCAGACQAGADACAGQADAGgDAGQgDAGgGACIhhAkIgFABQgDAAgEgBg");
	this.shape.setTransform(-46.1,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0E1C").s().p("AArAhIhhgkQgGgCgCgGQgDgGACgGQADgGAFgDQAGgCAGACIBhAkQAGADADAFQADAGgDAGQgCAGgGADQgDABgDAAIgGgBg");
	this.shape_1.setTransform(-46.1,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC0E1C").s().p("AGmATQgOAAAAgOIAAgDQAAgMAOAAIBvAAQAGAAAEADQAFAEAAAFIAAADQAAAGgFAEQgEAEgGAAgAoWALQgNAAAAgNIAAgDQAAgNANAAIBvAAQAGAAAFAEQAFADAAAGIAAADQAAAGgFAEQgFADgGAAg");
	this.shape_2.setTransform(0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0E1C").s().p("AAsAhIhigkQgGgCgCgGQgDgGACgGQADgGAFgDQAGgCAGACIBiAkQAGACACAGQADAGgCAGQgCAGgGADQgEABgDAAIgFgBg");
	this.shape_3.setTransform(48.4,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC0E1C").s().p("Ag3AhQgFgDgDgGQgCgGADgGQACgFAGgDIBigkQAGgCAGACQAGADACAGQACAGgDAGQgCAGgGACIhiAkIgFABQgEAAgDgBg");
	this.shape_4.setTransform(48.4,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-15.1,109.7,30.2);


// stage content:
(lib.PiernasPag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hinchazon
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(59.6,63.5,0.894,0.894);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Animar2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.6,63.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Animar3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.6,63.5,1.046,1.046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,alpha:1},19).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,scaleX:1.05,scaleY:1.05},30).wait(1));

	// Piernas
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60.2,59,1,1,0,0,0,60,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.2,57.9,120.1,122.2);
// library properties:
lib.properties = {
	id: '88151E594C6C4C43B738AFAB0F11AB16',
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
an.compositions['88151E594C6C4C43B738AFAB0F11AB16'] = {
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