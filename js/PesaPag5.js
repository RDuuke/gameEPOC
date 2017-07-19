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


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D6633").s().p("AAeAAQg6hzgzgCIBYAAQAdAAAVAVQAVAVAAAdIAACkQgUg7geg7g");
	this.shape.setTransform(10.3,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(2.4,0,16,23.6), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D6633").s().p("AAeAAQg6hzgzgCIBYAAQAdAAAVAVQAVAVAAAdIAACkQgUg7geg7g");
	this.shape.setTransform(10.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(2.4,0,16,23.6), null);


(lib.Animar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82932").s().p("AAhAwIhIhaQgCgDADgDQADgCADADIBIBaQADADgEACIgDACQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.9,8.2,10);


(lib.Animar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82932").s().p("AAhAwIhIhaQgCgDADgDQADgCADADIBIBaQADADgEACIgDACQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.9,8.2,10);


(lib.Animar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-12.7,-26.5,1,1,0,0,0,10.3,11.8);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.1,-26.5,1,1,0,0,0,10.3,11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAICHAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape.setTransform(-16.3,-27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDALQgFAAgDgDQgEgDAAgFQAAgEAEgDQADgDAFAAICHAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAg");
	this.shape_1.setTransform(-16.3,-24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDALQgFABgDgEQgEgDAAgFQAAgEAEgDQADgEAFABICHAAQAFgBADAEQAEADAAAEQAAAFgEADQgDAEgFgBg");
	this.shape_2.setTransform(-16.3,-20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDAMQgFAAgEgEQgDgDAAgFQAAgEADgDQAEgEAFAAICHAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_3.setTransform(16.4,-27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDALQgFAAgEgDQgDgDAAgFQAAgEADgDQAEgDAFAAICHAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAg");
	this.shape_4.setTransform(16.4,-24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDALQgFABgEgEQgDgDAAgFQAAgEADgDQAEgEAFABICHAAQAFgBADAEQAEADAAAEQAAAFgEADQgDAEgFgBg");
	this.shape_5.setTransform(16.4,-20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#708B44").s().p("Ag6A8QgYgZAAghIAAhVIClAAIAABVQAAAhgYAZQgZAYgiAAQghAAgZgYg");
	this.shape_6.setTransform(16.5,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#708B44").s().p("AAABUQghAAgZgYQgYgZAAghIAAhVIClAAIAABVQAAAhgYAZQgZAYgiAAg");
	this.shape_7.setTransform(-16.3,-14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#708B44").s().p("AhzB2IAAh3QAAgwAigiQAigiAvAAIAAAAQAwAAAiAiQAiAiAAAwIAAB3g");
	this.shape_8.setTransform(-16.3,-26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#708B44").s().p("AhzB2IAAh3QAAgwAigiQAigiAvAAQAwAAAiAiQAiAiAAAwIAAB3g");
	this.shape_9.setTransform(16.5,-26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBC6AC").s().p("AhzEyIAAoSQAAgiAigYQAhgYAwABQAwgBAiAYQAiAYAAAiIAAISg");
	this.shape_10.setTransform(-16.4,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBC6AC").s().p("AhzEyIAAoTQAAghAigYQAigXAvgBQAwABAiAXQAiAYAAAhIAAITg");
	this.shape_11.setTransform(16.4,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.3,56.1,76.7);


(lib.Animar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-12.7,-26.5,1,1,0,0,0,10.3,11.8);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.1,-26.5,1,1,0,0,0,10.3,11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAICHAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape.setTransform(-16.3,-27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDALQgFAAgDgDQgEgDAAgFQAAgEAEgDQADgDAFAAICHAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAg");
	this.shape_1.setTransform(-16.3,-24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDALQgFABgDgEQgEgDAAgFQAAgEAEgDQADgEAFABICHAAQAFgBADAEQAEADAAAEQAAAFgEADQgDAEgFgBg");
	this.shape_2.setTransform(-16.3,-20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDAMQgFAAgEgEQgDgDAAgFQAAgEADgDQAEgEAFAAICHAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_3.setTransform(16.4,-27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDALQgFAAgEgDQgDgDAAgFQAAgEADgDQAEgDAFAAICHAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAg");
	this.shape_4.setTransform(16.4,-24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDALQgFABgEgEQgDgDAAgFQAAgEADgDQAEgEAFABICHAAQAFgBADAEQAEADAAAEQAAAFgEADQgDAEgFgBg");
	this.shape_5.setTransform(16.4,-20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#708B44").s().p("Ag6A8QgYgZAAghIAAhVIClAAIAABVQAAAhgYAZQgZAYgiAAQghAAgZgYg");
	this.shape_6.setTransform(16.5,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#708B44").s().p("AAABUQghAAgZgYQgYgZAAghIAAhVIClAAIAABVQAAAhgYAZQgZAYgiAAg");
	this.shape_7.setTransform(-16.3,-14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#708B44").s().p("AhzB2IAAh3QAAgwAigiQAigiAvAAIAAAAQAwAAAiAiQAiAiAAAwIAAB3g");
	this.shape_8.setTransform(-16.3,-26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#708B44").s().p("AhzB2IAAh3QAAgwAigiQAigiAvAAQAwAAAiAiQAiAiAAAwIAAB3g");
	this.shape_9.setTransform(16.5,-26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBC6AC").s().p("AhzEyIAAoSQAAgiAigYQAhgYAwABQAwgBAiAYQAiAYAAAiIAAISg");
	this.shape_10.setTransform(-16.4,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBC6AC").s().p("AhzEyIAAoTQAAghAigYQAigXAvgBQAwABAiAXQAiAYAAAhIAAITg");
	this.shape_11.setTransform(16.4,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-38.3,56.1,76.7);


// stage content:
(lib.PesaPag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Medidor
	this.instance = new lib.Animar3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(59.8,47.1,1,1,-25,0,0,4.1,5);

	this.instance_1 = new lib.Animar4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.8,47.1,1,1,83,0,0,4.1,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).to({_off:true,rotation:83},9).wait(68).to({_off:false,rotation:-25},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},9).to({regX:4.2,rotation:1.1,x:59.9,y:47.2},29).wait(39).to({rotation:1.1},0).to({_off:true,regX:4.1,rotation:-25,x:59.8,y:47.1},15).wait(1));

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmpGpQiviwAAj5QAAj4CvixQCxivD4AAQD5AACwCvQCwCxAAD4QAAD5iwCwQiwCwj5AAQj4AAixiwg");
	mask.setTransform(59.8,59.8);

	// Pies
	this.instance_2 = new lib.Animar1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(60,158.5);

	this.instance_3 = new lib.Animar2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(60,94.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:94.4},14).wait(70).to({_off:false,y:158.5},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},14).wait(70).to({startPosition:0},0).to({_off:true,y:158.5},15).wait(1));

	// Pesa
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0E0E0").s().p("AiDBVQgMgIgJgLIgEgGIgEgGIgEgGIgHgTIgDgNQgCgLABgOQACgYANgVQALgSAQgLQALgJAQgFIALgCIAQgCIAAABIgHABIgIABIgLADQgNAEgOAKQgOALgKASQgMAVgBAWIgBAJIABAJIAEASIAHASIALARQAIAJAMAIQAWAQAdgBICfACIAHgBQAPgCAHgDQAJgDAKgHQARgLAKgQQAIgLAFgQIADgQIABgKIABAAIAAAHIgEATQgEAPgHANQgMATgPALQgUAOgYADIimAAIgDABQgcAAgYgRg");
	this.shape.setTransform(59.3,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AhRBnQgoAAgdgeQgcgeAAgrQAAgpAcgfQAdgeAoAAICjAAQAoAAAdAeQAcAfAAApQAAArgcAeQgdAegoAAgAiCg7QgZAZAAAiQAAAjAZAYQAZAZAjAAICNAAQAjAAAZgZQAZgYAAgjQAAgigZgZQgZgZgjAAIiNAAQgjAAgZAZg");
	this.shape_1.setTransform(59.5,40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAANIAAgZIABgBIAAABIAAAZIgBABg");
	this.shape_2.setTransform(60.9,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAANIAAgZIAAgBIABABIgBAZIAAABg");
	this.shape_3.setTransform(62.1,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDASIAFgjIAAgBIABABIgDAjIgCABg");
	this.shape_4.setTransform(65.3,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAQIARggIACAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgSAgIgBAAIAAgBg");
	this.shape_5.setTransform(69.9,33.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHASIgBAAIAPgjIABAAIAAABIgOAiIgBAAg");
	this.shape_6.setTransform(68.4,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFATIAAgBIAJgjIABgBIABABIgJAkIgBAAg");
	this.shape_7.setTransform(66.8,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNANIgBgBIABgBIAbgWQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgaAXg");
	this.shape_8.setTransform(72.2,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAGIAAgBIAigLIABABIAAABIgiALg");
	this.shape_9.setTransform(74.2,38.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAIIgBgBIABgBIAggNIABABQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIghANg");
	this.shape_10.setTransform(73.8,37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPALIAAgCIAdgTIACAAIAAABIgeAUIAAAAg");
	this.shape_11.setTransform(73.1,36.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAZIADgyQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgEAxIgBACIgCgCg");
	this.shape_12.setTransform(63.5,33);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAZQgBAAAAgBQAAAAgBAAQAAAAABgBQAAAAAAgBIAggtQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABgBAAQAAABAAAAIggAtIgBABg");
	this.shape_13.setTransform(70.8,34.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAFQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAkgJQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgkAIIAAABIgCgCg");
	this.shape_14.setTransform(74.3,40.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAANIAAgZIAAgBIABABIAAAZIgBABg");
	this.shape_15.setTransform(59.6,32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAANIAAgZIAAgBIAAABIABAZIgBABg");
	this.shape_16.setTransform(58.3,32.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAANIgBgZIABgBIABABIABAZIgBABg");
	this.shape_17.setTransform(57.1,32.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABASIgDgkIABAAIABAAIADAkIgBABg");
	this.shape_18.setTransform(53.9,32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAJARIgSggQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACAAIARAgIAAABg");
	this.shape_19.setTransform(49.3,33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAIASIgBAAIgOgiIAAgCIABABIAPAiIgBABg");
	this.shape_20.setTransform(50.8,32.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAFATIgBAAIgJglQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIAJAkIgBABg");
	this.shape_21.setTransform(52.5,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAOAMIgbgWQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAbAWIAAABIgBABg");
	this.shape_22.setTransform(47,35.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAGIgigKIAAgBIABgBIAiALIAAABIgBABg");
	this.shape_23.setTransform(45,39);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAQAIIgggNQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgBIAhANIABABIgBABg");
	this.shape_24.setTransform(45.5,37.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPALIgegTQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAeAUIAAABg");
	this.shape_25.setTransform(46.2,36.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAAZIgDgxQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAEAyQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_26.setTransform(55.7,33.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAZIgBAAIggguQAAgBAAAAQgBAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIAgAuQAAAAAAAAQABABAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_27.setTransform(48.4,34.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAHIgkgJQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABIAkAIQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgCABg");
	this.shape_28.setTransform(44.9,40.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhLBWQgkAAgZgZQgZgZAAgkQAAgiAZgaQAZgZAkAAICXAAQAkAAAZAZQAZAaAAAiQAAAkgZAZQgZAZgkAAg");
	this.shape_29.setTransform(59.7,40);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AjuFOQgWAAgQgPQgRgPgDgVIhFo1QgCgVANgPQANgPAVAAIJ/AAQAWAAANAPQAOAPgCAVIg4I1QgCAVgRAPQgQAPgVAAg");
	this.shape_30.setTransform(60.2,59.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0E0E0").s().p("AjeFpIgEAAIgPgEIgEgBQgKgEgHgFQgGgEgJgIQgHgKgDgHQgFgJgBgKIhBpgIAAgBIAAgCIAAgDQAAgIAEgHQABgFAGgIIAFgEIAFgEQAHgFAKgCIAHgCIAJAAIAAABIgJABIgGACQgJABgIAHQgKAHgFAMQgCAGAAAIQgBAEACAMIBJJUQABAIADAHQAEAHAFAHIAMAKQAGAFAHADIAQADIAEAAIIDABQAQAAAOgGQAMgGAIgJQAGgGAEgKIADgKIABgFIABABIgBAEIgCALQgEAKgGAHQgIAJgNAHIgGADIgEABIgIADIgEAAIgJABIjmAFIh0ABIinACg");
	this.shape_31.setTransform(56.8,60.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CFCFCF").s().p("AkFFqQgXAAgTgRQgSgQgDgXIhMpkQgCgXAOgQQAOgQAXAAIK9AAQAXAAAPAQQAPAQgCAXIg9JkQgCAXgSAQQgSARgXAAg");
	this.shape_32.setTransform(60,59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},84).wait(16));

	// Fondo
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape_33.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.2,60.2,119.8,119.8);
// library properties:
lib.properties = {
	id: '5D76BD3AAC1D4C5CAEC86ABA9DE8D8B2',
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
an.compositions['5D76BD3AAC1D4C5CAEC86ABA9DE8D8B2'] = {
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