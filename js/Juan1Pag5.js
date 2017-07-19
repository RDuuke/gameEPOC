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


(lib.Interpolación13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1).p("AgFgWIABgRQAAgBACgBIACgBIAFAAIAAACIgBA3IgBADIgDAAIgCgBQgBAAAAgEgAgDApIgBgFIAAgEIABgCIADgBIACACIABACIAAADIAAADIgBACIgBABIgBAAg");
	this.shape.setTransform(5.9,-4.1,1.244,1.244,-36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgDApIgBgFIABgEIAAgBIADgCIACACIABADIAAADIAAADIgBABIAAABIgCABgAAAATIgCgBIgBgFIgBgiIABgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIAFAAIAAADIgBA2IgBAEg");
	this.shape_1.setTransform(5.9,-4.1,1.244,1.244,-36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1).p("AgKglQAAgCACAAIAEgCIAPAAQACAAABABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAIgCAAIgBgBIgBgDIADhKg");
	this.shape_2.setTransform(3.4,-2.2,1.244,1.244,-36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED523B").s().p("AgMAqIgBgBIgBgDIADhKIABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgCIAPAAIADABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAg");
	this.shape_3.setTransform(3.4,-2.2,1.244,1.244,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1).p("AAJgXQAAgCgDgDQgDgDgCAAIgDAAIgEABIgCAFQgCADAAAEIgBAJIABAcIABAFQAAACACACQAAABADACQACACACAAQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDgAgSgXQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABIgDgBQgEgCgDgEQgDgFgBgFIgBgDIgBgEIAAgiIABgEg");
	this.shape_4.setTransform(-0.9,1,1.244,1.244,-36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED523B").s().p("AgHApQgEgCgDgEIgEgKIgBgDIgBgEIAAgiIABgEIABgDQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABgAgGgeIgCAFQgCADAAAEIgBAJIABAcIABAFIACAEIADADIAEACQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDQAAgCgDgDQgDgDgCAAIgDAAg");
	this.shape_5.setTransform(-0.9,1,1.244,1.244,-36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1).p("AgIglIACgBIADgBIAOgCIAEAAIAAABIAAADQgBAEgBAAIgMACIgDADQgDAEgBACIgDAIQgBAGAAAFIAAALIAEALQABAEAEAFQABADADABQAEABAEgCQADgBABABQACAAACACIACABQABAAAAABQAAABgCABIgFACIgGADIgCAAIgDAAQgEAAgCgCQgCgBgDgDQgEgDgEgIQgDgHgBgJIgBgMIACgNIAEgMg");
	this.shape_6.setTransform(-5.5,4.5,1.244,1.244,-36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED523B").s().p("AAEAqQgEAAgCgCIgGgEQgDgDgEgIQgDgHgBgJIgBgMIABgNIAFgMIAGgJIACgBIADgBIAOgCIAEAAIAAABIAAADIgDAEIgLACIgEADIgDAGIgDAIIgCALIABALIADALIAFAJQACADADABQADABAFgCIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIABABIACABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgEACIgGADIgDAAg");
	this.shape_7.setTransform(-5.5,4.5,1.244,1.244,-36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-9.7,20.6,19.4);


(lib.Interpolación12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1).p("AgFgWIABgRQAAgBACgBIACgBIAFAAIAAACIgBA3IgBADIgDAAIgCgBQgBAAAAgEgAgDApIgBgFIAAgEIABgCIADgBIACACIABACIAAADIAAADIgBACIgBABIgBAAg");
	this.shape.setTransform(5.9,-4.1,1.244,1.244,-36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgDApIgBgFIABgEIAAgBIADgCIACACIABADIAAADIAAADIgBABIAAABIgCABgAAAATIgCgBIgBgFIgBgiIABgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIAFAAIAAADIgBA2IgBAEg");
	this.shape_1.setTransform(5.9,-4.1,1.244,1.244,-36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1).p("AgKglQAAgCACAAIAEgCIAPAAQACAAABABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAIgCAAIgBgBIgBgDIADhKg");
	this.shape_2.setTransform(3.4,-2.2,1.244,1.244,-36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED523B").s().p("AgMAqIgBgBIgBgDIADhKIABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgCIAPAAIADABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAg");
	this.shape_3.setTransform(3.4,-2.2,1.244,1.244,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1).p("AgSgXQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABIgDgBQgEgCgDgEQgDgFgBgFIgBgDIgBgEIAAgiIABgEgAAJgXQAAgCgDgDQgDgDgCAAIgDAAIgEABIgCAFQgCADAAAEIgBAJIABAcIABAFQAAACACACQAAABADACQACACACAAQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDg");
	this.shape_4.setTransform(-0.9,1,1.244,1.244,-36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED523B").s().p("AgHApQgEgCgDgEIgEgKIgBgDIgBgEIAAgiIABgEIABgDQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABgAgGgeIgCAFQgCADAAAEIgBAJIABAcIABAFIACAEIADADIAEACQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDQAAgCgDgDQgDgDgCAAIgDAAg");
	this.shape_5.setTransform(-0.9,1,1.244,1.244,-36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1).p("AgIglIACgBIADgBIAOgCIAEAAIAAABIAAADQgBAEgBAAIgMACIgDADQgDAEgBACIgDAIQgBAGAAAFIAAALIAEALQABAEAEAFQABADADABQAEABAEgCQADgBABABQACAAACACIACABQABAAAAABQAAABgCABIgFACIgGADIgCAAIgDAAQgEAAgCgCQgCgBgDgDQgEgDgEgIQgDgHgBgJIgBgMIACgNIAEgMg");
	this.shape_6.setTransform(-5.5,4.5,1.244,1.244,-36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED523B").s().p("AAEAqQgEAAgCgCIgGgEQgDgDgEgIQgDgHgBgJIgBgMIABgNIAFgMIAGgJIACgBIADgBIAOgCIAEAAIAAABIAAADIgDAEIgLACIgEADIgDAGIgDAIIgCALIABALIADALIAFAJQACADADABQADABAFgCIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIABABIACABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgEACIgGADIgDAAg");
	this.shape_7.setTransform(-5.5,4.5,1.244,1.244,-36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-9.7,20.6,19.4);


(lib.Interpolación11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1).p("AgFgWIABgRQAAgBACgBIACgBIAFAAIAAACIgBA3IgBADIgDAAIgCgBQgBAAAAgEgAgDApIgBgFIAAgEIABgCIADgBIACACIABACIAAADIAAADIgBACIgBABIgBAAg");
	this.shape.setTransform(5.9,-4.1,1.244,1.244,-36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgDApIgBgFIABgEIAAgBIADgCIACACIABADIAAADIAAADIgBABIAAABIgCABgAAAATIgCgBIgBgFIgBgiIABgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIAFAAIAAADIgBA2IgBAEg");
	this.shape_1.setTransform(5.9,-4.1,1.244,1.244,-36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1).p("AgKglQAAgCACAAIAEgCIAPAAQACAAABABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAIgCAAIgBgBIgBgDIADgaIAAgwg");
	this.shape_2.setTransform(3.4,-2.2,1.244,1.244,-36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED523B").s().p("AgMAqIgBgBIgBgDIADgaIAAgwIABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgCIAPAAIADABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAg");
	this.shape_3.setTransform(3.4,-2.2,1.244,1.244,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1).p("AAJgXQAAgCgDgDQgDgDgCAAIgDAAIgEABIgCAFQgCADAAAEIgBAJIABAcIABAFQAAACACACQAAABADACQACACACAAQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDgAgSgXQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABIgDgBQgEgCgDgEQgDgFgBgFIgBgDIgBgEIAAgiIABgEg");
	this.shape_4.setTransform(-0.9,1,1.244,1.244,-36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED523B").s().p("AgHApQgEgCgDgEIgEgKIgBgDIgBgEIAAgiIABgEIABgDQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABgAgGgeIgCAFQgCADAAAEIgBAJIABAcIABAFIACAEIADADIAEACQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDQAAgCgDgDQgDgDgCAAIgDAAg");
	this.shape_5.setTransform(-0.9,1,1.244,1.244,-36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1).p("AgIglIACgBIADgBIAOgCIAEAAIAAABIAAADQgBAEgBAAIgMACIgDADQgDAEgBACIgDAIQgBAGAAAFIAAALIAEALQABAEAEAFQABADADABQAEABAEgCQADgBABABQACAAACACIACABQABAAAAABQAAABgCABIgFACIgGADIgCAAIgDAAQgEAAgCgCQgCgBgDgDQgEgDgEgIQgDgHgBgJIgBgMIACgNIAEgMg");
	this.shape_6.setTransform(-5.5,4.5,1.244,1.244,-36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED523B").s().p("AAEAqQgEAAgCgCIgGgEQgDgDgEgIQgDgHgBgJIgBgMIABgNIAFgMIAGgJIACgBIADgBIAOgCIAEAAIAAABIAAADIgDAEIgLACIgEADIgDAGIgDAIIgCALIABALIADALIAFAJQACADADABQADABAFgCIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIABABIACABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgEACIgGADIgDAAg");
	this.shape_7.setTransform(-5.5,4.5,1.244,1.244,-36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-9.7,20.6,19.4);


(lib.Interpolación10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1).p("AgFgWIABgRQAAgBACgBIACgBIAFAAIAAACIgBA3IgBADIgDAAIgCgBQgBAAAAgEgAgDApIgBgFIAAgEIABgCIADgBIACACIABACIAAADIAAADIgBACIgBABIgBAAg");
	this.shape.setTransform(7.6,0.7,1.21,1.21,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgDApIgBgFIABgEIAAgBIADgCIACACIABADIAAADIAAADIgBABIAAABIgCABgAAAATIgCgBIgBgFIgBgiIABgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIAFAAIAAADIgBA2IgBAEg");
	this.shape_1.setTransform(7.6,0.7,1.21,1.21,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1).p("AgKglQAAgCACAAIAEgCIAPAAQACAAABABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAIgCAAIgBgBIgBgDIADhKg");
	this.shape_2.setTransform(4.5,0.4,1.21,1.21,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED523B").s().p("AgMAqIgBgBIgBgDIADhKIABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgCIAPAAIADABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAg");
	this.shape_3.setTransform(4.5,0.4,1.21,1.21,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1).p("AAJgXQAAgCgDgDQgDgDgCAAIgDAAIgEABIgCAFQgCADAAAEIgBAJIABAcIABAFQAAACACACQAAABADACQACACACAAQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDgAgSgXQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABIgDgBQgEgCgDgEQgDgFgBgFIgBgDIgBgEIAAgiIABgEg");
	this.shape_4.setTransform(-0.7,-0.3,1.21,1.21,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED523B").s().p("AgHApQgEgCgDgEIgEgKIgBgDIgBgEIAAgiIABgEIABgDQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABgAgGgeIgCAFQgCADAAAEIgBAJIABAcIABAFIACAEIADADIAEACQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDQAAgCgDgDQgDgDgCAAIgDAAg");
	this.shape_5.setTransform(-0.7,-0.3,1.21,1.21,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1).p("AgIglIACgBIADgBIAOgCIAEAAIAAABIAAADQgBAEgBAAIgMACIgDADQgDAEgBACIgDAIQgBAGAAAFIAAALIAEALQABAEAEAFQABADADABQAEABAEgCQADgBABABQACAAACACIACABQABAAAAABQAAABgCABIgFACIgGADIgCAAIgDAAQgEAAgCgCQgCgBgDgDQgEgDgEgIQgDgHgBgJIgBgMIACgNIAEgMg");
	this.shape_6.setTransform(-6.2,-0.9,1.21,1.21,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED523B").s().p("AAEAqQgEAAgCgCIgGgEQgDgDgEgIQgDgHgBgJIgBgMIABgNIAFgMIAGgJIACgBIADgBIAOgCIAEAAIAAABIAAADIgDAEIgLACIgEADIgDAGIgDAIIgCALIABALIADALIAFAJQACADADABQADABAFgCIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIABABIACABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgEACIgGADIgDAAg");
	this.shape_7.setTransform(-6.2,-0.9,1.21,1.21,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-6.8,19.7,13.7);


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1).p("AgFgWIABgRQAAgBACgBIACgBIAFAAIAAACIgBA3IgBADIgDAAIgCgBQgBAAAAgEgAgDApIgBgFIAAgEIABgCIADgBIACACIABACIAAADIAAADIgBACIgBABIgBAAg");
	this.shape.setTransform(7.6,0.7,1.21,1.21,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED523B").s().p("AgDApIgBgFIABgEIAAgBIADgCIACACIABADIAAADIAAADIgBABIAAABIgCABgAAAATIgCgBIgBgFIgBgiIABgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIAFAAIAAADIgBA2IgBAEg");
	this.shape_1.setTransform(7.6,0.7,1.21,1.21,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1).p("AgKglQAAgCACAAIAEgCIAPAAQACAAABABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAIgCAAIgBgBIgBgDIADgaIAAgwg");
	this.shape_2.setTransform(4.5,0.4,1.21,1.21,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED523B").s().p("AgMAqIgBgBIgBgDIADgaIAAgwIABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgCIAPAAIADABIABACIAAAGIgBABIgOAAIgBABIAAAIIAAAEIABACIABABIAEAAIAFAAIACABIABABIAAAGIgBABIgCABIgEAAIgFAAIgCABIgEApIgBAEIgBABIgDAAg");
	this.shape_3.setTransform(4.5,0.4,1.21,1.21,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.1).p("AgSgXQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABIgDgBQgEgCgDgEQgDgFgBgFIgBgDIgBgEIAAgiIABgEgAAJgXQAAgCgDgDQgDgDgCAAIgDAAIgEABIgCAFQgCADAAAEIgBAJIABAcIABAFQAAACACACQAAABADACQACACACAAQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDg");
	this.shape_4.setTransform(-0.7,-0.3,1.21,1.21,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED523B").s().p("AgHApQgEgCgDgEIgEgKIgBgDIgBgEIAAgiIABgEIABgDQABgHADgEQADgEAEgCIAFgBIAFABIAFACIAEADIAFAFIADAIIABAHIAAAeIgBAIQgCAHgCAEQgDAFgFACIgMABgAgGgeIgCAFQgCADAAAEIgBAJIABAcIABAFIACAEIADADIAEACQAEgBACgCQACgBACgEIAAgDIACgPQABgLgBgIQgBgIgCgDQAAgCgDgDQgDgDgCAAIgDAAg");
	this.shape_5.setTransform(-0.7,-0.3,1.21,1.21,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.1).p("AgIglIACgBIADgBIAOgCIAEAAIAAABIAAADQgBAEgBAAIgMACIgDADQgDAEgBACIgDAIQgBAGAAAFIAAALIAEALQABAEAEAFQABADADABQAEABAEgCQADgBABABQACAAACACIACABQABAAAAABQAAABgCABIgFACIgGADIgCAAIgDAAQgEAAgCgCQgCgBgDgDQgEgDgEgIQgDgHgBgJIgBgMIACgNIAEgMg");
	this.shape_6.setTransform(-6.2,-0.9,1.21,1.21,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED523B").s().p("AAEAqQgEAAgCgCIgGgEQgDgDgEgIQgDgHgBgJIgBgMIABgNIAFgMIAGgJIACgBIADgBIAOgCIAEAAIAAABIAAADIgDAEIgLACIgEADIgDAGIgDAIIgCALIABALIADALIAFAJQACADADABQADABAFgCIAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIABABIACABQAAABgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgEACIgGADIgDAAg");
	this.shape_7.setTransform(-6.2,-0.9,1.21,1.21,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-6.8,19.7,13.7);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgRAPQgDgEABgGQABgFAGgFQAHgGAZgGQgKAXgHAHQgEAEgGABIgCAAQgFAAgDgDg");
	this.shape.setTransform(0.7,2.6,0.523,0.523);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgQALQgGgCgBgFQgBgEAEgFQAEgFAHgBQAJgCAYAHQgUAQgIACIgEABQgEAAgEgCg");
	this.shape_1.setTransform(-0.5,0,0.523,0.523);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgLALQgGgCgDgGQgEgEACgFQACgEAGgCQAGgBAHADQAIADAQAUIgRAAQgLAAgGgCg");
	this.shape_2.setTransform(0.2,-2.8,0.523,0.523);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-3.5,3.4,7.1);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC6AC").s().p("AiGCNQgUgFgNgRQgOgRAAgSQAAgTANgKIEOi/QAOgJAUAFQATAFAOARQANARAAASQAAAUgNAJIkOC/QgJAGgMAAQgGAAgGgCg");
	this.shape.setTransform(53,-27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC6AC").s().p("Ah2CbQgTgDgQgPQgPgQgCgTQgCgTANgLID2jaQANgLATADQAUADAPAQQAPAPACATQACATgNALIj2DaQgKAJgOAAIgIgBg");
	this.shape_1.setTransform(55.2,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC6AC").s().p("AhiCpQgUgBgRgOQgQgOgEgTQgEgSALgOIDZj1QALgNAUABQATABARAOQARAPAEASQAEATgMAMIjZD3QgKALgSAAIgCAAg");
	this.shape_2.setTransform(49,-50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC6AC").s().p("AABCHQgUgCgQgIQgPgJAAgLIgCjYQAAgLAPgGQAPgHAVABQAVACAPAJQAPAIABALIACDYQAAALgPAHQgNAFgSAAIgGAAg");
	this.shape_3.setTransform(22.9,-40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBC6AC").s().p("AhoCwQgUgMgGgSQgHgRAIgPICpkaQAIgOAUgCQATgCASALQATALAIASQAGASgIAOIioEaQgJAPgTACIgGAAQgRAAgPgJg");
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
	this.shape.graphics.f("#FBC6AC").s().p("AiGCNQgUgFgNgRQgOgRAAgSQAAgTANgKIEOi/QAOgJAUAFQATAFAOARQANARAAASQAAAUgNAJIkOC/QgJAGgMAAQgGAAgGgCg");
	this.shape.setTransform(53,-27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC6AC").s().p("Ah2CbQgTgDgQgPQgPgQgCgTQgCgTANgLID2jaQANgLATADQAUADAPAQQAPAPACATQACATgNALIj2DaQgKAJgOAAIgIgBg");
	this.shape_1.setTransform(55.2,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC6AC").s().p("AhiCpQgUgBgRgOQgQgOgEgTQgEgSALgOIDZj1QALgNAUABQATABARAOQARAPAEASQAEATgMAMIjZD3QgKALgSAAIgCAAg");
	this.shape_2.setTransform(49,-50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC6AC").s().p("AABCHQgUgCgQgIQgPgJAAgLIgCjYQAAgLAPgGQAPgHAVABQAVACAPAJQAPAIABALIACDYQAAALgPAHQgNAFgSAAIgGAAg");
	this.shape_3.setTransform(22.9,-40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBC6AC").s().p("AhoCwQgUgMgGgSQgHgRAIgPICpkaQAIgOAUgCQATgCASALQATALAIASQAGASgIAOIioEaQgJAPgTACIgGAAQgRAAgPgJg");
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
	mask.graphics.p("AmmGnQivivAAj4QAAj3CvivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	mask.setTransform(72.2,62.1);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1AaQgYgLAAgPQAAgOAYgLQAWgLAfAAQAhAAAWALQAWALABAOQgBAPgWALQgWALghAAQgfAAgWgLg");
	this.shape.setTransform(72.9,87.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgGAGAAAIQAAAJAGAGQAGAHAIAAQANABAGgKQACAGAAAHQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(91.7,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#481B06").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAIAGAAQgFAFgBAJQAAAJAFAGQAGAHAJAAQAMABAHgKQACAIAAAFQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(54.5,59.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AgTBFIAAh2QAAgHAGgGQAGgHAHABQAIgBAGAHQAGAFAAAIIAAB2g");
	this.shape_3.setTransform(87.4,105.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("AgTBFIAAh2QAAgIAGgFQAGgHAHABQAIgBAGAHQAGAGAAAHIAAB2g");
	this.shape_4.setTransform(59.6,105.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FECFAE").s().p("AloE6IAAmdQAAhZA/g+QA/g/BYAAIHUAkIAnFYQAABmhJBJQhIBIhnAAg");
	this.shape_5.setTransform(108.4,156.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FECFAE").s().p("AhxE6QhmAAhJhIQhIhJAAhmIAnlYIHTgkQBZAAA/A/QA/A+AABZIAAGdg");
	this.shape_6.setTransform(36.1,156.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FECFAE").s().p("AgnAXQgRgQAAgXQAAgXA4AAQA5AAAAAXQAAAXgRAQQgRARgXAAQgXAAgQgRg");
	this.shape_7.setTransform(72.9,74);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B350E").s().p("AgZAYQgSgNAAgTQAAgYArAAQAsAAAAAYQAAAUgQALQgMAJgQABQgMAAgNgJg");
	this.shape_8.setTransform(72.9,76.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhMAhQAAghAXgeQAYgiAdAAQAfAAAXAiQAXAeAAAhQAAAghNAAQhMAAAAggg");
	this.shape_9.setTransform(54.4,58.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhMAhQAAghAXgeQAYgiAdAAQAfAAAXAiQAXAeAAAhQAAAghNAAQhMAAAAggg");
	this.shape_10.setTransform(91.3,58.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB9967").s().p("AhMAmQAAgmAXgjQAYgmAdAAQAfAAAXAmQAXAjAAAmQAAAkhNAAQhMAAAAgkg");
	this.shape_11.setTransform(54.4,60.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB9967").s().p("AhMAmQAAgmAXgjQAYgmAdAAQAfAAAXAmQAXAjAAAmQAAAkhNAAQhMAAAAgkg");
	this.shape_12.setTransform(91.3,60.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#804B21").s().p("AA1A4Qg7gthGgOQgMgDgIgKQgIgKABgMQACgNALgHQAMgHAPADQBVAUBDAzQAMAKACANQACAOgJAJQgIAIgNABIgBAAQgMAAgJgIg");
	this.shape_13.setTransform(93.2,46.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#804B21").s().p("AhMA+QgNgBgIgJQgJgJADgOQACgNAMgJQBIgzBTgQQAOgDAMAIQALAHABANQABAMgIAKQgIAJgMADQhJANg6ArQgJAHgKAAIgDAAg");
	this.shape_14.setTransform(54.5,46);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBC6AC").s().p("AA1A4Qg5gthJgPQgMgCgHgKQgIgLABgMQABgMAMgHQAMgHAOADQBVATBEA0QAMAJACAOQACANgJAJQgIAJgNABQgMAAgKgIg");
	this.shape_15.setTransform(92.9,47);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBC6AC").s().p("AhMA+QgNgBgIgJQgJgKADgNQACgNAMgJQBGgzBVgQQAPgDALAIQAMAHAAANQABAMgIAKQgIAJgMADQhIAMg7AsQgJAHgLAAIgCAAg");
	this.shape_16.setTransform(54.7,46.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("AhXgcIAAgcQAAggAeAOQA1AYASAAIBKAAIAAABQAAA0gmAmQgmAmg1AAg");
	this.shape_17.setTransform(40.5,31.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#804B21").s().p("AhXhkQAAgrAegeQAegeApAAIBKAAIAABuQAAA1gmAnQgmAlg1ABIghCng");
	this.shape_18.setTransform(40.5,36.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AiBCTQgUgBAPgIIAzgZQBcgtAAgjIAAgOQAAguhNhGQgegbgEgJQgGgNAfAAQBaABBABAQBABAAABaQAAAegVAWQgWAVgeABg");
	this.shape_19.setTransform(98.9,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#804B21").s().p("AjFCTQgvAAgigiQghghAAgvIAAgOQAAhEAwgwQAxgxBEAAIDvAAQBaABBBBAQBABAAABaQAAAegVAWQgWAVgeABg");
	this.shape_20.setTransform(81.8,14.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B350E").s().p("AAtAWQgtgMgtAJQgIABgHgDQgHgEgCgIQgCgGAFgHQAFgHAJgCQA1gKA1ANQAJADAFAHQAEAGgDAIQgCAHgIADQgEACgFAAIgFAAg");
	this.shape_21.setTransform(73.6,95.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#804B21").s().p("Ai3EeIiKigQgrgygHhBIgdkoIAEAAQA6C5BsAZQAnAJBEgGQBlgIAWAAQAWAABoAIQBHAGAogJQBwgaAwi4IAEAAIgeEoQgGBBgrAyIiKCgg");
	this.shape_22.setTransform(72.9,83.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EEC0A2").s().p("ABVFxQhFggg+g2QiZiDAAiYQAAilB1h2QB0h1CmAAQi9DcAIDAQAGCvCvDWQgvAAhEggg");
	this.shape_23.setTransform(52.8,51.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FECFAE").s().p("AhzFxQhFggg/g2QiZiDAAiYQAAilB1h2QB2h1ClAAQCmAAB2B1QB1B2AAClQAACmh1B1Qh2B2imAAQgvAAhEggg");
	this.shape_24.setTransform(72.9,51.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FECFAE").s().p("AmQDWIAAgbQAAimB1h1QB2h1ClAAQCmAAB2B1QB1B1AACmIAAAbg");
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(12.3,2.2,119.7,119.8), null);


// stage content:
(lib.Juan1Pag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmmGnQiwivAAj4QAAj3CwiwQCviuD3AAQD4AACvCuQCvCwAAD3QAAD4ivCvQivCwj4AAQj3AAiviwg");
	mask.setTransform(60.2,60);

	// Mano
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35.4,187.2);

	this.instance_1 = new lib.Interpolación6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.4,136.7);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:136.7},15).wait(34).to({_off:false,y:187.2},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15).wait(34).to({startPosition:0},0).to({_off:true,y:187.2},15).wait(1));

	// Capa 3
	this.instance_2 = new lib.Interpolación11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.3,90);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolación12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(27.3,90);
	this.instance_3._off = true;

	this.instance_4 = new lib.Interpolación13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(27.3,90,1.138,1.138);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true,alpha:1},15).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},15).to({_off:true,scaleX:1.14,scaleY:1.14},27).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},27).to({alpha:0},15).wait(1));

	// Cof1
	this.instance_5 = new lib.Interpolación9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.4,72.8);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Interpolación10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.4,72.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,alpha:1},15).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},15).to({regX:0.1,regY:0.1,scaleX:1.17,scaleY:1.17,x:17.5,y:72.9},34).to({alpha:0},15).wait(1));

	// TOS
	this.instance_7 = new lib.Interpolación7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(51.3,85.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,regY:0.1,scaleX:3.19,scaleY:3.19,x:44.1,y:85.7,alpha:1},33).wait(22).to({startPosition:0},0).to({alpha:0},9).wait(1));

	// Juan
	this.instance_8 = new lib.ClipGroup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(60.6,92,1,1,0,0,0,72.2,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// Fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.4,58,144.5,188.1);
// library properties:
lib.properties = {
	id: 'DC01EAA0005B4801B8FD7EDA1122AB24',
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
an.compositions['DC01EAA0005B4801B8FD7EDA1122AB24'] = {
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