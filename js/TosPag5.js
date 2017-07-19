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
	mask.graphics.p("AmmGnQivivgBj4QABj3CvivQCviwD3AAQD4AACvCwQCvCvABD3QgBD4ivCvQivCwj4AAQj3AAiviwg");
	mask.setTransform(67.1,224.5);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC6AC").s().p("AiRBuQgQgTgIghQgJggAEgaQAEgaAOgFIEQhdQAOgFAQAUQAQATAIAhQAJAhgEAZQgEAagOAFIkRBdIgFABQgMAAgMgQg");
	this.shape.setTransform(101.5,215.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1.3).p("ACyjJIgrAhQg0ApgwAuQiaCTg3CK");
	this.shape_1.setTransform(73,222.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1.3).p("ACWhFQgvAPg9AYQh6AxhIA0");
	this.shape_2.setTransform(72.3,203.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhnAsQAHgNAFgWQAMgsgGgqIBNAhQBQAuAgBFQgJAHgeAAQg+AAhqgig");
	this.shape_3.setTransform(82,274.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AFvGlQgxg5hTghQkHhrnvCrQAJhCArhkQBYjHCuipQCpijA9hZQAUgcAKgYQAJgUAEgIIAjAOQArARApAKQCAAgAzgrIABAaQADAfAMAaQAlBVBtADIgpCSQgqCkgFBnQgPE4gVARQgIgWgZgdg");
	this.shape_4.setTransform(52.4,234.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBC6AC").s().p("AijEAQgfgBgbgWQgagWgGgdQgFgcASgTIFkl1QASgTAfACQAfACAaAWQAaAVAGAdQAGAdgSASIlkF1QgRARgbAAIgFAAg");
	this.shape_5.setTransform(53.6,189.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBC6AC").s().p("Ai9ECQgcgTgJgcQgJgcAPgVIEwmeQAQgVAfgBQAfgCAcATQAcASAJAdQAJAcgPAVIkwGeQgQAVgfABIgEABQgdAAgagSg");
	this.shape_6.setTransform(55.4,213.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBC6AC").s().p("AiDEjQgfgNgPgaQgOgbAKgXIDUnUQAKgXAegIQAegHAfAOQAfANAPAaQAOAbgKAXIjUHTQgKAYgeAIQgKACgKAAQgUAAgVgJg");
	this.shape_7.setTransform(68.7,225.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBC6AC").s().p("AAEDKQgagHgFgQIhmlBQgFgQAUgRQATgRAhgIQAggHAbAGQAaAHAFAPIBmFCQAFAQgUARQgTARghAIQgSAEgQAAQgNAAgMgDg");
	this.shape_8.setTransform(106,196.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBC6AC").s().p("AhME2QghgIgTgYQgTgXAHgaIB7nxQAGgZAbgMQAcgMAgAIQAhAIAUAXQATAYgHAZIh7HyQgGAZgbAMQgRAIgSAAQgNAAgNgEg");
	this.shape_9.setTransform(89.6,223.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBC6AC").s().p("Ao2PfQhbgqgZhsQgZhrA3hwIKI0OQBmjJC/hZQC+hZCmBNIAuAXIuAbtQg5BxhqAxQg5Abg1AAQgtAAgrgUg");
	this.shape_10.setTransform(132.1,100.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(7.2,164.7,119.7,117.6), null);


(lib.Salpicaduras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#708B44").s().p("AAAAAIABgBIAAADIgBgCg");
	this.shape.setTransform(18.2,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#708B44").s().p("AAAABIAAgBIABgBQAAAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAIAAAAIAAgBg");
	this.shape_1.setTransform(-14.2,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#708B44").s().p("AAAAAIgBAAIABAAIACAAIgBABIgBgBg");
	this.shape_2.setTransform(3.8,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#708B44").s().p("AgCAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAQgBAAAAAAQAAABgBAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAg");
	this.shape_3.setTransform(3.7,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#708B44").s().p("AgBATQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBABAAQgDgHAAgJIAAgSQADgDADAGQgBAFACANQABAMgCAGIgBABIgDgCg");
	this.shape_4.setTransform(3.7,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDCA4D").s().p("AgCAZQgRgBgIgLQgHgYAVgLQALgEALACQALADAHAGQAFAGgEAJQgGAKABADQgHAMgQAAIgCAAg");
	this.shape_5.setTransform(-2.6,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDCA4D").s().p("AgCAPIgGgBIgGgHQgDgFABgDIAHgLQAEgGAFABQAFAAAEAEIAGAFQAEAKgFAIQgCACgFABQgEACgBADQgBgDgDAAg");
	this.shape_6.setTransform(-19,25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDCA4D").s().p("AgBAEQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQABAAAAAAQAAAAAAAAQABAAgBgBQAAAAAAAAQgCgCACgCQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIAHgBIgDACIAAAAIgCACIgBgBg");
	this.shape_7.setTransform(-19.4,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#708B44").s().p("AgGA7QgNACgJgMQgLgPgIgBQACgFgGgGQgHgHAFgGQgKgHAKgLQAJgLgLgHQAXgDgGgQQAJAFAIgGIAMgMQAEgCAEAFQAEAFACABQAGABAGgDIAJgGQgEANAMACQAPADACAKQANATgJAVQgFAMgLAXQgMgEgLAMQgHAIgIAAQgDAAgEgCg");
	this.shape_8.setTransform(14.8,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#708B44").s().p("AgRASQgIgFgBgEQADgDgCgJQgBgJAIAAQgDgGAGgDIANgEQAHgCANAJIAEAGQACAEADABIgCAIQgCAGAEACQgEALgKADQgFACgPABIgKgIg");
	this.shape_9.setTransform(-24.3,-23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#708B44").s().p("AgEARQgPALgFgFIgFgMQAFgEgDgJQgCgIAJgBQgIgPAJABQAMADADgCQAIgBAMAIQACACAEAAQAGAAACABQAAADgGAKQgDAJAEADQgEAMgNADIgEAAQgIAAAAgJg");
	this.shape_10.setTransform(-4.9,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#708B44").s().p("AAAACQAAAAAAgBQAAAAgBgBQAAAAABAAQAAgBAAAAIACABIAAACIgCAAIAAAAg");
	this.shape_11.setTransform(-6.8,-27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#708B44").s().p("AAAABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAABAAIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIgCAAIgBAAg");
	this.shape_12.setTransform(-1.6,-26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#708B44").s().p("AAAgBIAAABIABACQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_13.setTransform(-11.2,-18.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#708B44").s().p("AgCgBQAAgBABAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBADg");
	this.shape_14.setTransform(-12.3,-18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#708B44").s().p("AgSAFQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAGgCAMAAQANgBAFgCQAGADgCADIgRADQgKABgGgBQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCgBg");
	this.shape_15.setTransform(-12.1,-18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#708B44").s().p("AgXAOQABgDgGgLQgFgJAGgGQAHgHAMgDQALgCALAEQAXALgHAaQgJAMgSABIgDAAQgPAAgIgNg");
	this.shape_16.setTransform(-18.1,-13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#708B44").s().p("AgCAPIgGgBQgJgKABgFIAHgLQAFgGAFABQAEAAAEAEIAGAFQAFAKgGAIQgBACgFABQgFACgBADQgBgCgDgBg");
	this.shape_17.setTransform(21.9,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#708B44").s().p("AgFAEQgCgDACgCQACgDADgBQACAAADADQACACgBACIgGADIgBABQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape_18.setTransform(21.7,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#708B44").s().p("AgUAaQgFgCAAgIQgBgHgHABQAGgHAAgDIgCgEQgBgBAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIAJgGQAEgEgDgFQAIAFAEgMQADAGAGgEQAIgEADAGQAEgCACAEQADAEADgBQAAAFAHAHQAGAGgCAGQACAHgHAFQgIAFABAHIgUAGIgGAAQgJAAgHgGg");
	this.shape_19.setTransform(14.6,-3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#708B44").s().p("AgFACQAAgDAFgBQAEgBACADQgCACgEABIgCAAIgDgBg");
	this.shape_20.setTransform(-21.8,-0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#708B44").s().p("AgFABQAAgDAFgCQADgCACAFQACAEgGACIgDABQgDAAAAgFg");
	this.shape_21.setTransform(-10.5,-4.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#708B44").s().p("AgHAYQgIABABgJQgHADgCgHIgCgMQAAgKALgLIAHgBQADgCACgEIAIAFQAFADADgFQAJAGACAKQABAGgBAPIgKAJQgFAHgFABQgCgFgKAAg");
	this.shape_22.setTransform(38.2,9.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DDCA4D").s().p("AgXB/QgFABAAgGQABgHgBgCIAGgEQgGgKgGgWQgGgWgFgKQgLAAgNAMQgQAOgIADQAAgDAGgFQAGgGABgDIgBgRQgMgCgFgMQgHgOgFgDQALAAAFgDQAHAAABgHQABgKAFgBQAAgFgGgGIgJgKQgEAAgIgDQgIgDgEACQgFgBADgFQAEgGgBgBIAbAIQAQAEALgCQgBgGAGABQAGAAgCgFIgGgIQAGAAAAgFQgFgJgIgHIAHAAQAEgBACgDIgDgNQAKAQATABQACgCgCgFIgCgFQAFAJAEAAQAEgLABgMQABgNgEgIQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgDIAGAXQADAOAEAIQACgDAEAHQADAHAHgFIAAgFQgBgBAAgBQAAgBAAAAQABgBAAAAQABgBABAAQASAAAXgNQAKgFAcgVQgBADABAIQABAGgDAEIgUANQgLAIAIALQAKAegSAfQAGAOAYADQAYACAHAOQgCAJgLAEQgHADgQgDQgPgDgIAFIADALQACAGgCAFIgQAeQgKATgGAIQgDgDgGgJQgEgIgFgBQgBACgHAEQgGACABAGQgEADgFgDIgIgHQgEACABARQAAAJgEAAQgCAAgCgCg");
	this.shape_23.setTransform(3.8,-8.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#708B44").s().p("AAAAGIgDgFIgCgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAHgBACAJIAAAFIgDAAIgDgBg");
	this.shape_24.setTransform(-10.7,-16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#708B44").s().p("AhrBsQABgOAWgRQgDgJAFgMQAHgNACgGQgDgCgFAFQgFAEgCAAQgBgEAHgEQAFgEgCgFQgDgBgGgFQgFgEgEADIAEgEQAEgCgBgDQgCgCgGAAQgFAAABgEQAIgBgCgIIgDgNQgDgDgHgCQgIgBgCgDQAMAAALgQQAAgBgHgFQgFgDAFgEIAHADQAEABADgDQAEgGgCgIIgCgOQADgCAHAFQAGAEADgHQAKgIgCgKQADgDADADQAEAEACAAQANgJgDgOQACgCAEACQAEABAAADIAVAEQAKABAIgEQAMANAFAXQALADAEAFQAHgFASgDIgHAMQgDAIADAFQAIgEAKACQAKABAFAFQACAEgDACQgFACAAADQABAEALAFQAIAEgEAHQgBACgEABQgFABAAAEIABAJQAEABAKAFQAHAFAGAAQgCAHgIgCQgKgDgCABQgHAGgGAUQABACAIAFQAHAEgEAFQgEAAgGgFQgFgEgGAEQgGADABAJQAAALgBACQgEgDgHABQgIACgEgCQAAAMgFAFIgNAIQgDgFgGgCQgGgDgFABQgDABAAAEQAAAEgCABQgEAAgHgOQgGgJgHANQAAAGgBAAQgDgDABgLQACgJgIACIgDAGQgBAEgEAAQACgHAAgCQgBgEgGgCQgGgCgEAGQgEAFgEAAQgLAFgKAQQgNARgFAFQgFgBgDgMg");
	this.shape_25.setTransform(-43.8,14.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#708B44").s().p("AgBACIACgDIABADg");
	this.shape_26.setTransform(-20.6,-11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#708B44").s().p("AgHAKQgDgEACgEQACAAAJgJQAGgGABALIgIAJQgDADgEAAIgCAAg");
	this.shape_27.setTransform(-16.1,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Salpicaduras, new cjs.Rectangle(-55.8,-27.3,96.6,55.2), null);


(lib.Salpicaduras_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#708B44").s().p("AAAAAIABgBIAAADIgBgCg");
	this.shape_28.setTransform(18.2,-3.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#708B44").s().p("AAAABIAAgBIABgBQAAAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAIAAAAIAAgBg");
	this.shape_29.setTransform(-14.2,11.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#708B44").s().p("AAAAAIgBAAIABAAIACAAIgBABIgBgBg");
	this.shape_30.setTransform(3.8,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#708B44").s().p("AgCAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAQgBAAAAAAQAAABgBAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAg");
	this.shape_31.setTransform(3.7,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#708B44").s().p("AgBATQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBABAAQgDgHAAgJIAAgSQADgDADAGQgBAFACANQABAMgCAGIgBABIgDgCg");
	this.shape_32.setTransform(3.7,16.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DDCA4D").s().p("AgCAZQgRgBgIgLQgHgYAVgLQALgEALACQALADAHAGQAFAGgEAJQgGAKABADQgHAMgQAAIgCAAg");
	this.shape_33.setTransform(-2.6,24.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DDCA4D").s().p("AgCAPIgGgBIgGgHQgDgFABgDIAHgLQAEgGAFABQAFAAAEAEIAGAFQAEAKgFAIQgCACgFABQgEACgBADQgBgDgDAAg");
	this.shape_34.setTransform(-19,25.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DDCA4D").s().p("AgBAEQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQABAAAAAAQAAAAAAAAQABAAgBgBQAAAAAAAAQgCgCACgCQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIAHgBIgDACIAAAAIgCACIgBgBg");
	this.shape_35.setTransform(-19.4,21.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#708B44").s().p("AgGA7QgNACgJgMQgLgPgIgBQACgFgGgGQgHgHAFgGQgKgHAKgLQAJgLgLgHQAXgDgGgQQAJAFAIgGIAMgMQAEgCAEAFQAEAFACABQAGABAGgDIAJgGQgEANAMACQAPADACAKQANATgJAVQgFAMgLAXQgMgEgLAMQgHAIgIAAQgDAAgEgCg");
	this.shape_36.setTransform(14.8,21.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#708B44").s().p("AgRASQgIgFgBgEQADgDgCgJQgBgJAIAAQgDgGAGgDIANgEQAHgCANAJIAEAGQACAEADABIgCAIQgCAGAEACQgEALgKADQgFACgPABIgKgIg");
	this.shape_37.setTransform(-24.3,-23.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#708B44").s().p("AgEARQgPALgFgFIgFgMQAFgEgDgJQgCgIAJgBQgIgPAJABQAMADADgCQAIgBAMAIQACACAEAAQAGAAACABQAAADgGAKQgDAJAEADQgEAMgNADIgEAAQgIAAAAgJg");
	this.shape_38.setTransform(-4.9,11.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#708B44").s().p("AAAACQAAAAAAgBQAAAAgBgBQAAAAABAAQAAgBAAAAIACABIAAACIgCAAIAAAAg");
	this.shape_39.setTransform(-6.8,-27.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#708B44").s().p("AAAABQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAABAAIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIgCAAIgBAAg");
	this.shape_40.setTransform(-1.6,-26.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#708B44").s().p("AAAgBIAAABIABACQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_41.setTransform(-11.2,-18.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#708B44").s().p("AgCgBQAAgBABAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBADg");
	this.shape_42.setTransform(-12.3,-18);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#708B44").s().p("AgSAFQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAGgCAMAAQANgBAFgCQAGADgCADIgRADQgKABgGgBQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCgBg");
	this.shape_43.setTransform(-12.1,-18.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#708B44").s().p("AgXAOQABgDgGgLQgFgJAGgGQAHgHAMgDQALgCALAEQAXALgHAaQgJAMgSABIgDAAQgPAAgIgNg");
	this.shape_44.setTransform(-18.1,-13.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#708B44").s().p("AgCAPIgGgBQgJgKABgFIAHgLQAFgGAFABQAEAAAEAEIAGAFQAFAKgGAIQgBACgFABQgFACgBADQgBgCgDgBg");
	this.shape_45.setTransform(21.9,7.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#708B44").s().p("AgFAEQgCgDACgCQACgDADgBQACAAADADQACACgBACIgGADIgBABQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape_46.setTransform(21.7,21.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#708B44").s().p("AgUAaQgFgCAAgIQgBgHgHABQAGgHAAgDIgCgEQgBgBAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIAJgGQAEgEgDgFQAIAFAEgMQADAGAGgEQAIgEADAGQAEgCACAEQADAEADgBQAAAFAHAHQAGAGgCAGQACAHgHAFQgIAFABAHIgUAGIgGAAQgJAAgHgGg");
	this.shape_47.setTransform(14.6,-3.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#708B44").s().p("AgFACQAAgDAFgBQAEgBACADQgCACgEABIgCAAIgDgBg");
	this.shape_48.setTransform(-21.8,-0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#708B44").s().p("AgFABQAAgDAFgCQADgCACAFQACAEgGACIgDABQgDAAAAgFg");
	this.shape_49.setTransform(-10.5,-4.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#708B44").s().p("AgHAYQgIABABgJQgHADgCgHIgCgMQAAgKALgLIAHgBQADgCACgEIAIAFQAFADADgFQAJAGACAKQABAGgBAPIgKAJQgFAHgFABQgCgFgKAAg");
	this.shape_50.setTransform(38.2,9.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DDCA4D").s().p("AgXB/QgFABAAgGQABgHgBgCIAGgEQgGgKgGgWQgGgWgFgKQgLAAgNAMQgQAOgIADQAAgDAGgFQAGgGABgDIgBgRQgMgCgFgMQgHgOgFgDQALAAAFgDQAHAAABgHQABgKAFgBQAAgFgGgGIgJgKQgEAAgIgDQgIgDgEACQgFgBADgFQAEgGgBgBIAbAIQAQAEALgCQgBgGAGABQAGAAgCgFIgGgIQAGAAAAgFQgFgJgIgHIAHAAQAEgBACgDIgDgNQAKAQATABQACgCgCgFIgCgFQAFAJAEAAQAEgLABgMQABgNgEgIQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgDIAGAXQADAOAEAIQACgDAEAHQADAHAHgFIAAgFQgBgBAAgBQAAgBAAAAQABgBAAAAQABgBABAAQASAAAXgNQAKgFAcgVQgBADABAIQABAGgDAEIgUANQgLAIAIALQAKAegSAfQAGAOAYADQAYACAHAOQgCAJgLAEQgHADgQgDQgPgDgIAFIADALQACAGgCAFIgQAeQgKATgGAIQgDgDgGgJQgEgIgFgBQgBACgHAEQgGACABAGQgEADgFgDIgIgHQgEACABARQAAAJgEAAQgCAAgCgCg");
	this.shape_51.setTransform(3.8,-8.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#708B44").s().p("AAAAGIgDgFIgCgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAHgBACAJIAAAFIgDAAIgDgBg");
	this.shape_52.setTransform(-10.7,-16.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#708B44").s().p("AhrBsQABgOAWgRQgDgJAFgMQAHgNACgGQgDgCgFAFQgFAEgCAAQgBgEAHgEQAFgEgCgFQgDgBgGgFQgFgEgEADIAEgEQAEgCgBgDQgCgCgGAAQgFAAABgEQAIgBgCgIIgDgNQgDgDgHgCQgIgBgCgDQAMAAALgQQAAgBgHgFQgFgDAFgEIAHADQAEABADgDQAEgGgCgIIgCgOQADgCAHAFQAGAEADgHQAKgIgCgKQADgDADADQAEAEACAAQANgJgDgOQACgCAEACQAEABAAADIAVAEQAKABAIgEQAMANAFAXQALADAEAFQAHgFASgDIgHAMQgDAIADAFQAIgEAKACQAKABAFAFQACAEgDACQgFACAAADQABAEALAFQAIAEgEAHQgBACgEABQgFABAAAEIABAJQAEABAKAFQAHAFAGAAQgCAHgIgCQgKgDgCABQgHAGgGAUQABACAIAFQAHAEgEAFQgEAAgGgFQgFgEgGAEQgGADABAJQAAALgBACQgEgDgHABQgIACgEgCQAAAMgFAFIgNAIQgDgFgGgCQgGgDgFABQgDABAAAEQAAAEgCABQgEAAgHgOQgGgJgHANQAAAGgBAAQgDgDABgLQACgJgIACIgDAGQgBAEgEAAQACgHAAgCQgBgEgGgCQgGgCgEAGQgEAFgEAAQgLAFgKAQQgNARgFAFQgFgBgDgMg");
	this.shape_53.setTransform(-43.8,14.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#708B44").s().p("AgBACIACgDIABADg");
	this.shape_54.setTransform(-20.6,-11.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#708B44").s().p("AgHAKQgDgEACgEQACAAAJgJQAGgGABALIgIAJQgDADgEAAIgCAAg");
	this.shape_55.setTransform(-16.1,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Salpicaduras_1, new cjs.Rectangle(-55.8,-27.3,96.6,55.2), null);


(lib.Animar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.Salpicaduras = new lib.Salpicaduras();
	this.Salpicaduras.parent = this;
	this.Salpicaduras.setTransform(-6.2,2.6,0.457,0.487,0,110.7,110.9,-6.9,-0.4);

	this.Salpicaduras_1 = new lib.Salpicaduras();
	this.Salpicaduras_1.parent = this;
	this.Salpicaduras_1.setTransform(2.6,0.2,0.548,0.584,0,110.7,110.9,-7.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Salpicaduras_1},{t:this.Salpicaduras}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-30.1,44.4,53.4);


(lib.Animar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.Salpicaduras = new lib.Salpicaduras();
	this.Salpicaduras.parent = this;
	this.Salpicaduras.setTransform(-6.2,2.6,0.457,0.487,0,110.7,110.9,-6.9,-0.4);

	this.Salpicaduras_1 = new lib.Salpicaduras();
	this.Salpicaduras_1.parent = this;
	this.Salpicaduras_1.setTransform(2.6,0.2,0.548,0.584,0,110.7,110.9,-7.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Salpicaduras_1},{t:this.Salpicaduras}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-30.1,44.4,53.4);


(lib.Animar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.Salpicaduras = new lib.Salpicaduras_1();
	this.Salpicaduras.parent = this;
	this.Salpicaduras.setTransform(-7.8,7.3,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_1 = new lib.Salpicaduras_1();
	this.Salpicaduras_1.parent = this;
	this.Salpicaduras_1.setTransform(-9.8,10.5,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_2 = new lib.Salpicaduras_1();
	this.Salpicaduras_2.parent = this;
	this.Salpicaduras_2.setTransform(-4,10.4,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_3 = new lib.Salpicaduras_1();
	this.Salpicaduras_3.parent = this;
	this.Salpicaduras_3.setTransform(4.7,2.1,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_4 = new lib.Salpicaduras_1();
	this.Salpicaduras_4.parent = this;
	this.Salpicaduras_4.setTransform(1.6,-2.1,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_5 = new lib.Salpicaduras_1();
	this.Salpicaduras_5.parent = this;
	this.Salpicaduras_5.setTransform(-5.6,-10.4,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_6 = new lib.Salpicaduras_1();
	this.Salpicaduras_6.parent = this;
	this.Salpicaduras_6.setTransform(1.3,-16.7,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_7 = new lib.Salpicaduras_1();
	this.Salpicaduras_7.parent = this;
	this.Salpicaduras_7.setTransform(19.1,6.1,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_8 = new lib.Salpicaduras_1();
	this.Salpicaduras_8.parent = this;
	this.Salpicaduras_8.setTransform(14.5,16.8,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_9 = new lib.Salpicaduras_1();
	this.Salpicaduras_9.parent = this;
	this.Salpicaduras_9.setTransform(13.8,12.3,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_10 = new lib.Salpicaduras_1();
	this.Salpicaduras_10.parent = this;
	this.Salpicaduras_10.setTransform(8.7,0.1,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_11 = new lib.Salpicaduras_1();
	this.Salpicaduras_11.parent = this;
	this.Salpicaduras_11.setTransform(0.2,3.8,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_12 = new lib.Salpicaduras_1();
	this.Salpicaduras_12.parent = this;
	this.Salpicaduras_12.setTransform(-12,0.9,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_13 = new lib.Salpicaduras_1();
	this.Salpicaduras_13.parent = this;
	this.Salpicaduras_13.setTransform(-17.6,-8.3,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_14 = new lib.Salpicaduras_1();
	this.Salpicaduras_14.parent = this;
	this.Salpicaduras_14.setTransform(-15.9,-15.8,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_15 = new lib.Salpicaduras_1();
	this.Salpicaduras_15.parent = this;
	this.Salpicaduras_15.setTransform(-16.3,-2.6,0.129,0.129,0,0,0,-7.8,0.4);

	this.Salpicaduras_16 = new lib.Salpicaduras_1();
	this.Salpicaduras_16.parent = this;
	this.Salpicaduras_16.setTransform(-19.1,-0.3,0.129,0.129,0,0,0,-7.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Salpicaduras_16},{t:this.Salpicaduras_15},{t:this.Salpicaduras_14},{t:this.Salpicaduras_13},{t:this.Salpicaduras_12},{t:this.Salpicaduras_11},{t:this.Salpicaduras_10},{t:this.Salpicaduras_9},{t:this.Salpicaduras_8},{t:this.Salpicaduras_7},{t:this.Salpicaduras_6},{t:this.Salpicaduras_5},{t:this.Salpicaduras_4},{t:this.Salpicaduras_3},{t:this.Salpicaduras_2},{t:this.Salpicaduras_1},{t:this.Salpicaduras}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-20.3,50.7,40.6);


// stage content:
(lib.TosPag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(56.2,68.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Animar5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.2,68.5,0.835,0.835);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.84,scaleY:0.84,alpha:1},9).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({startPosition:0},40).wait(1));

	// Flema 1
	this.instance_2 = new lib.Animar2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.7,65.8,1.142,1.142);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,scaleY:1.04,alpha:1},14).to({startPosition:0},35).wait(1));

	// Pañuelo
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(93.6,-22.4,1,1,0,0,0,100.6,142.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#73DEBC").s().p("AmmGnQiwivAAj4QAAj3CwivQCviwD3AAQD4AACvCwQCwCvAAD3QAAD4iwCvQivCwj4AAQj3AAiviwg");
	this.shape.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,-104.8,201.3,284.7);
// library properties:
lib.properties = {
	id: 'B21694917CF5492890C89DD0F8C029AC',
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
an.compositions['B21694917CF5492890C89DD0F8C029AC'] = {
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