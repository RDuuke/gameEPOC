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


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0392A").s().p("AjRnyIADAAIFwgjIAwLHQAHCLhdBoQgqAvgzAbIhvAkIgMABIgPABIgnABg");
	this.shape.setTransform(8.1,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECFAE").s().p("ADNL4QBdhogHiKIgwrIIlwAkIgJiQIiNhHQgOgHgDgUQgDgSAKgTQAJgUASgJQARgIAOAHIBjAyQAGgUALgRIiMj6QgIgOAFgPQAEgPAOgJQAOgHAPAFQAPAEAIANICBDlIAIgFIhFkLQgEgQAIgOQAIgNAPgEQARgEANAIQANAIAFAPIBCEGIAJgBIARj0QABgPANgLQALgKAQABQARABAKAMQAKAMgBAQIgSD3IAKAEIBMjNQAFgPAPgGQAOgHAPAGQAPAFAHAPQAGAOgGAPIhSDgQAsAvAFBEIA8N3QAHCLhdBoQgrAwg1AbQAzgcAqgvg");
	this.shape_1.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-85.4,58.8,170.8);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0392A").s().p("AjRnyIADAAIFwgjIAwLHQAHCLhdBoQgqAvgzAbIhvAkIgMABIgPABIgnABg");
	this.shape.setTransform(8.1,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECFAE").s().p("ADNL4QBdhogHiKIgwrIIlwAkIgJiQIiNhHQgOgHgDgUQgDgSAKgTQAJgUASgJQARgIAOAHIBjAyQAGgUALgRIiMj6QgIgOAFgPQAEgPAOgJQAOgHAPAFQAPAEAIANICBDlIAIgFIhFkLQgEgQAIgOQAIgNAPgEQARgEANAIQANAIAFAPIBCEGIAJgBIARj0QABgPANgLQALgKAQABQARABAKAMQAKAMgBAQIgSD3IAKAEIBMjNQAFgPAPgGQAOgHAPAGQAPAFAHAPQAGAOgGAPIhSDgQAsAvAFBEIA8N3QAHCLhdBoQgrAwg1AbQAzgcAqgvg");
	this.shape_1.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-85.4,58.8,170.8);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AgPDKQgyAAgkgkQgjgjAAgzIAAkZQAiBlA0BkQBkDHBXADg");
	this.shape.setTransform(13.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,27.4,40.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AgODKQgyAAglgkQgjgjAAgzIAAkZQAiBlA0BkQBkDHBXADg");
	this.shape.setTransform(13.7,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,27.4,40.5), null);


// stage content:
(lib.HuespedPag3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Brazo
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(245.2,261.6,1,1,0,0,0,8.2,82.4);

	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.7,263.6,1,1,25,0,0,8.4,82.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:8.4,regY:82.6,rotation:25,x:232.7,y:263.6},25).to({_off:false,regX:8.2,regY:82.4,rotation:0,x:245.2,y:261.6},24).to({_off:true,regX:8.4,regY:82.6,rotation:25,x:232.7,y:263.6},26).to({_off:false,regX:8.2,regY:82.4,rotation:0,x:245.2,y:261.6},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},25).to({_off:true,regX:8.2,regY:82.4,rotation:0,x:245.2,y:261.6},24).to({_off:false,regX:8.4,regY:82.6,rotation:25,x:232.7,y:263.6},26).to({_off:true,regX:8.2,regY:82.4,rotation:0,x:245.2,y:261.6},24).wait(1));

	// Antebrazo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0392A").s().p("ABJH9QgVgHgTgKIgMgGIgsgeIgzg0QgXgdgSgkIhxjyIgFgMIAAgBIhEiPIhTitQglhRAohPQAjhHBQgmQBQgnBMASQBVAUAnBVIC2G6IDFGeIAKAVIhLAjQhGAihIAAQg4AAg5gUg");
	this.shape.setTransform(212.5,212);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECFAE").s().p("AAZETQgWgIgTgKQASAJAVAHQCCAuB9g7IBKgkIgJgUIALAWIhLAkQhGAihIAAQg3AAg5gVgAlhkmIABgBIBFCRIAAAAIAFAMg");
	this.shape_1.setTransform(217.5,235.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	// Bocas
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B350E").s().p("AhlgBQgFgCADgEQACgFAEADQATAJAVABQAUABAdgEIACAAQArAGAjgFQARgEAJgEQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADACQADAFgEACQgKAFgSADQgkAHgugHQgWAEgSAAQgeAAgYgMg");
	this.shape_2.setTransform(136.6,120.2,1.121,1.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B350E").s().p("AAmASQgmgJgmAHQgHABgFgDQgGgDgCgHQgCgFAEgGQAEgGAIgBQAsgJAuALQAIACAEAHQAEAFgDAGQgCAGgGADQgEACgEAAIgFgBg");
	this.shape_3.setTransform(136.6,127.7,1.121,1.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B350E").s().p("AAsAUQgsgLgsAJQgJABgGgDQgHgEgCgIQgCgGAEgHQBCgTA1ANQAKADADAHQAFAGgDAHQgCAIgHADQgFACgEAAIgGgBg");
	this.shape_4.setTransform(136.8,127.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#895D3E").s().p("AAKASIgUgCQgZADgVgDIgHgBQgfgFgVgPQgEgDACgGQACgFAFABQANAEARABIAQABQAYAAAigEIAAAAIACAAQAnAEAgAAIAUAAIAWgBIAEgBIADABIADADQABAFgEAEQgKAGgUAGIgGABQgZAHgbAAIgSgBg");
	this.shape_5.setTransform(136.7,119.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B350E").s().p("AAuAVQgugMguAJQgIACgHgEQgHgEgCgIQgCgGAEgHQBFgUA2AOQAKACAEAIQAFAGgDAIQgDAHgHADQgFADgFAAIgFgBg");
	this.shape_6.setTransform(137,128);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A6866E").s().p("AAIAcIgUgCQgaABgWgGIgHgBQgggKgSgSQgDgDABgGQACgFAFgBQAMABATgBIARAAQAagBAigEIABAAIABAAIBKAGIAVABQAPACAGACIADACIACADIABADQABAFgFAEQgKAIgTAHIgGADQgeALgfAAIgMgBg");
	this.shape_7.setTransform(136.9,119.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B350E").s().p("AAvAWQgvgNgvAKQgJABgHgEQgHgEgDgIQgCgGAFgIQBHgUA4AOQAKADAEAIQAFAGgDAIQgDAHgHAEQgFADgFAAIgGgBg");
	this.shape_8.setTransform(137.2,128.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4AE9F").s().p("AAHAnIgVgCQgagBgXgIIgHgDQgigOgOgUQgDgFABgFQABgGAFgCQALgDAVgCIATgCIA+gFIAAAAIABAAQAtADAiAEIAUADQARAEADAGIACAFIABADIAAAEQgBAFgDAEQgKAKgTAIIgHAEQgiAQgjAAIgGgBg");
	this.shape_9.setTransform(137,118.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B350E").s().p("AAxAWQgxgMgxAJQgIACgIgEQgHgFgDgHQgCgIAFgHQBKgVA5APQAKACAFAIQAFAHgDAIQgDAIgIAEQgFACgFAAIgGgBg");
	this.shape_10.setTransform(137.3,128.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1D7CF").s().p("AAEAyQgLAAgLgCQgZgCgZgMIgHgDQgjgTgLgWQgCgGAAgGQABgGAFgEQAKgFAXgEIAUgDQAcgEAkgBIAAAAIABAAQAwABAiAHQAMACAJADQARAGACAIIABAIIgBAEIgBAFQgBAFgEAEQgKAMgSAKIgHAEQglAUgmAAIgDAAg");
	this.shape_11.setTransform(137.2,118.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhQAkQgugcAAghQAAgRAogJQAkgJAyAAQA0AAAjAJQAoAJAAARQAAAhguAcQgpAZgoAAQgmAAgqgZg");
	this.shape_12.setTransform(137.5,117.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B350E").s().p("AAyAYQgygNgyAKQgJACgIgEQgIgFgCgIQgDgHAGgIQAFgIALgCQA8gMA7AQQAKACAFAJQAFAHgDAIQgDAIgIAEQgFACgFAAIgHgBg");
	this.shape_13.setTransform(137.5,128.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhQAkQgugcAAggQAAgRAogKQAkgJAyAAQA0AAAjAJQAoAKAAARQAAAgguAcQgpAZgoAAQgmAAgqgZg");
	this.shape_14.setTransform(137.5,117.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B350E").s().p("AAxAWQgxgMgxAJQgIACgIgEQgIgEgCgIQgDgHAGgIQBJgVA6APQAKACAFAJQAFAGgDAIQgDAIgIAEQgFACgFAAIgGgBg");
	this.shape_15.setTransform(137.4,128.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6DDD7").s().p("AADA0IgVgCQgagDgZgMIgHgEQgkgTgJgXQgDgFABgHQAAgFAGgFQAKgGAXgEIATgDQAdgEAkgBIAAAAIABAAQAwABAjAHIAVAFQARAGACAJIAAAIIgBAFIgBAFQgBAFgEAEQgKAMgSAKIgHAFQgnAVgmAAIgCAAg");
	this.shape_16.setTransform(137.3,118.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B350E").s().p("AAwAWQgwgMgwAJQgIACgHgEQgIgEgCgIQgDgHAFgHQBIgVA5AOQAJADAFAIQAFAHgDAHQgDAIgIAEQgFACgFAAIgFgBg");
	this.shape_17.setTransform(137.2,128.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CEBCAF").s().p("AAFArQgKgBgLgCQgZgBgYgKIgHgCQgigQgNgVQgDgFABgGQABgFAFgDQALgEAVgDIATgCIA/gEIABAAIAAAAQAuACAiAFQAMABAIADQARAEADAHQACACAAADIAAAEIAAAEQgBAGgEADQgKALgSAJIgHAEQgkARglAAIgEAAg");
	this.shape_18.setTransform(137.1,118.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B350E").s().p("AAvAVQgvgMguAKQgJABgHgEQgHgEgCgIQgDgGAFgHQBGgVA3APQAKACAEAIQAFAGgDAIQgDAHgHAEQgFACgFAAIgFgBg");
	this.shape_19.setTransform(137.1,128);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B59A87").s().p("AAHAiIgVgDQgZABgXgIIgHgCQghgMgQgSQgDgFABgFQABgGAGgBIAfgDIASgBIA9gEIABAAIABAAIBMAGIAUACQARADAEAEIADADIABADIABAEQAAAFgEADQgKAKgUAIIgGADQgfANgiAAIgJAAg");
	this.shape_20.setTransform(137,119.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B350E").s().p("AAtAVQgtgMgtAJQgIACgHgEQgHgEgDgIQgCgGAFgHQBDgUA3AOQAJADAEAHQAFAGgDAIQgDAHgHADQgEADgFAAIgGgBg");
	this.shape_21.setTransform(136.9,127.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9C785E").s().p("AAJAZIgUgCQgaABgWgEIgHgCQgggIgSgRQgEgDACgGQABgFAFAAQANACASAAIARAAQAZgBAigEIABAAIABAAQApAEAhABIAUABQAPABAGABIAEACIACABIACAEQAAAFgEAEQgKAHgUAHIgFACQgcAJgdAAIgPAAg");
	this.shape_22.setTransform(136.8,119.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B350E").s().p("AAsAUQgsgLgsAJQgIABgGgEQgHgEgDgHQgCgGAFgHQBBgTA1ANQAJADAEAHQAFAGgDAHQgCAHgIAEQgEACgFAAIgFgBg");
	this.shape_23.setTransform(136.8,127.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#845736").s().p("AAKARIgUgDQgZAEgVgDIgHAAQgegFgWgPQgEgDACgFQACgFAFABQANAFARABIAQABQAYABAhgFIABAAIABAAQAnAFAggBIATgBIAXgBIAFgBIADAAIACADQACAFgEAEQgLAGgUAFIgFACQgXAGgaAAIgVgBg");
	this.shape_24.setTransform(136.7,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_14}]},44).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(45));

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxlRmQnSnTgBqTQABqSHSnTQHTnSKSgBQKTABHTHSQHSHTABKSQgBKTnSHTQnTHSqTABQqSgBnTnSg");
	mask.setTransform(160.3,160.3);

	// Capa 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0392A").s().p("AjUqrQADhcBDgzQA9guBWAEQBWAEA7AxQBBA3gCBYIgIYCIl2ADg");
	this.shape_25.setTransform(65.1,247.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7BDA5").s().p("Ah8JIQgpglgBhVIgJuAQgBhcA1gzQAvgtBGADQBEAEAxAyQA3A3ABBXIAKOAQAABIhXAtQgsAWgsAIIgEAAQhTAAgngkg");
	this.shape_26.setTransform(64.8,225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7BDA5").s().p("Ai0jJQgEiQBag9QAcgTAigIIAcgEQBQgCAwBBQAsA7AABbIANKFIleARg");
	this.shape_27.setTransform(66.3,299.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7BDA5").s().p("AAECHQhGgEgyg1Qg4g7gChbIgBg7IFegDIABA7QACBog2A6QgtAwhCAAIgJAAg");
	this.shape_28.setTransform(67,355);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8BB9D").s().p("AAaBXQgSgCgKgPIhBhVQgLgPACgSQADgTAOgLQAPgLATADQASACAKAPIBBBVQALAPgCASQgDATgPALQgMAJgOAAIgHgBg");
	this.shape_29.setTransform(85.1,345.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#481B06").s().p("An3AkIAAhFIPqgCIAFBHg");
	this.shape_30.setTransform(135.5,319.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E8A341").s().p("An3DbIAAm1IPpADIAGGyg");
	this.shape_31.setTransform(135.5,338.7);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.5,578.2,1,1,0,0,0,13.7,20.2);

	this.instance_3 = new lib.Path_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.2,578.2,1,1,0,0,0,13.7,20.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ah0AUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIDpAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAg");
	this.shape_32.setTransform(163.7,580.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah0AUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIDpAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAg");
	this.shape_33.setTransform(163.7,574);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ah0AUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIDpAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAg");
	this.shape_34.setTransform(163.7,567.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah0AUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIDpAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAg");
	this.shape_35.setTransform(107.5,580.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ah0AUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIDpAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAg");
	this.shape_36.setTransform(107.5,574);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ah0AUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIDpAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAg");
	this.shape_37.setTransform(107.5,567.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#481B06").s().p("AiNCQIAAiRQAAg7AqgqQApgpA6AAQA7AAApApQAqAqAAA7IAACRg");
	this.shape_38.setTransform(107.4,557.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#481B06").s().p("AiNCQIAAiRQAAg7ApgqQAqgpA6AAQA7AAApApQAqAqAAA7IAACRg");
	this.shape_39.setTransform(163.7,557.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#481B06").s().p("AiMCQQg6g7AAhSIAAjMIGNAAIAADMQAABSg6A7Qg7A6hSAAQhSAAg6g6g");
	this.shape_40.setTransform(163.7,578.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#481B06").s().p("AiMCQQg6g7AAhSIAAjMIGNAAIAADMQAABSg6A7Qg6A6hTAAQhSAAg6g6g");
	this.shape_41.setTransform(107.4,578.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E8A341").s().p("AiMK4Qg6g6AAhTIAA0dIGNAAIAAUdQAABTg6A6Qg7A7hSAAQhSAAg6g7g");
	this.shape_42.setTransform(163.7,523);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E8A341").s().p("AiMK4Qg6g6AAhTIAA0dIGNAAIAAUdQAABTg6A6Qg6A7hTAAQhSAAg6g7g");
	this.shape_43.setTransform(107.4,523);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E8A341").s().p("AicKAQhBhBAAhcIAAyjIG7AAIAASjQAABchBBBQhBBBhcAAQhbAAhBhBg");
	this.shape_44.setTransform(163.7,412.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E8A341").s().p("AicKAQhChBAAhcIAAyjIG9AAIAASjQgBBchABBQhCBBhcAAQhbAAhBhBg");
	this.shape_45.setTransform(107.4,412.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#19A499").s().p("An3DbIAAm1IPvAAIAAG1g");
	this.shape_46.setTransform(135.5,338.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FECFAE").s().p("AicKAQhBhBAAhcIAAyjIG7AAIAASjQAABchBBBQhBBBhcAAQhbAAhBhBg");
	this.shape_47.setTransform(163.7,412.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FECFAE").s().p("AicKAQhChBAAhcIAAyjIG9AAIAASjQgBBchABBQhCBBhcAAQhbAAhBhBg");
	this.shape_48.setTransform(107.4,412.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBC6AC").s().p("AiMK4Qg6g6AAhTIAA0dIGNAAIAAUdQAABTg6A6Qg7A7hSAAQhSAAg6g7g");
	this.shape_49.setTransform(163.7,523);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBC6AC").s().p("AiMK4Qg6g6AAhTIAA0dIGNAAIAAUdQAABTg6A6Qg6A7hTAAQhSAAg6g7g");
	this.shape_50.setTransform(107.4,523);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E0392A").s().p("AiBAKIAAgTIEDAAIAAATg");
	this.shape_51.setTransform(168.1,214.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7BD59").s().p("AhFB5QgZAAgRgRQgRgRAAgZIAAi2IEBAAIAAC2QAAAZgRARQgRARgZAAg");
	this.shape_52.setTransform(167.1,226.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F7BD59").s().p("AiGhhQAMgmAfglQA/hJBfAEICqAMQgDADhOB7IhLB5IisANIA6CBIjLBSg");
	this.shape_53.setTransform(158.3,184.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7BD59").s().p("AAnChIA5iAIirgOIhLh4QhMh6gEgCICogOQBggIA+BLQAgAlAMAnIBbFRg");
	this.shape_54.setTransform(112.1,184.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ED523B").s().p("AnHMKQgJgGiu3yIGagfQAJABAOADQAdAGAZAOQBTAsAXBnQAXBlA6DHQBHjUAahhQAUhMBHgsQBMgvBsAJIDnASIhiYBQnuAEj4AAQj5AAgFgEg");
	this.shape_55.setTransform(131.3,238.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FECFAE").s().p("Aj+huQAAhlBGhGQBHhHBkAAIEMApIn9KXg");
	this.shape_56.setTransform(160.1,196.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#481B06").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgNASAAIAHAAQgGAGgBAKQAAAKAGAHQAGAIALAAQANABAHgLQADAHABAHQAAATgOAOQgOANgTAAQgSAAgOgNg");
	this.shape_57.setTransform(157.7,86.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#481B06").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAIAHAAQgHAHAAAJQAAAKAGAHQAHAIAKAAQANABAIgLQACAIAAAGQAAATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_58.setTransform(115.9,86.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E6E6E6").s().p("AgVBOIAAiFQAAgJAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAJIAACFg");
	this.shape_59.setTransform(152.8,138.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E6E6E6").s().p("AgVBOIAAiFQAAgJAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAJIAACFg");
	this.shape_60.setTransform(121.7,138.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#19A499").s().p("AnyDZIAAmxIPlAAIAAGxg");
	this.shape_61.setTransform(135.5,338.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FECFAE").s().p("Ah/FgQhyABhShSQhRhRAAhzIArmCIINgoQBkAABHBGQBGBGAABlIAAHOg");
	this.shape_62.setTransform(95.3,195.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FECFAE").s().p("AgsAaQgTgSAAgaQAAgaA/AAQBAAAAAAaQAAAagTASQgTATgaAAQgaAAgSgTg");
	this.shape_63.setTransform(136.5,103);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6B350E").s().p("AgcAbQgVgPAAgVQAAgaAxAAQAyAAAAAaQAAAWgSAOQgOAKgSAAQgNAAgPgKg");
	this.shape_64.setTransform(136.5,106.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhVAZQAAgjAZgYQAZgaAjAAQAjAAAaAaQAZAYAAAjQAAAkhWAAQhVAAAAgkg");
	this.shape_65.setTransform(115.8,86.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhVAZQAAgjAZgYQAagaAiAAQAjAAAaAaQAZAYAAAjQAAAkhWAAQhVAAAAgkg");
	this.shape_66.setTransform(157.3,86.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FBC6AC").s().p("AhVAZQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkhWAAQhVAAAAgkg");
	this.shape_67.setTransform(115.8,88);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBC6AC").s().p("AhVAZQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAaAAAiQAAAkhWAAQhVAAAAgkg");
	this.shape_68.setTransform(157.3,88);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#804B21").s().p("ABOAoQhOgXhSAOQgNACgMgHQgNgHgDgNQgEgNAJgMQAJgNAQgCQBggQBeAaQAQAFAHANQAIAMgFANQgFANgNAGQgIADgIAAQgFAAgGgBg");
	this.shape_69.setTransform(157.3,71.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#804B21").s().p("AhpAlQgMgGgFgMQgGgOAIgMQAIgNAQgEQBfgaBeARQARADAJANQAJAMgEAMQgEAOgMAHQgMAHgOgDQhRgOhPAVQgFACgGAAQgIAAgIgEg");
	this.shape_70.setTransform(115.8,71.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBC6AC").s().p("ABOAoQhPgXhRAOQgNACgMgHQgNgHgDgNQgEgNAJgMQAJgMAQgDQBggQBeAaQAQAFAHANQAIANgFANQgFAMgNAGQgIADgHAAQgGAAgGgBg");
	this.shape_71.setTransform(157.3,72.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FBC6AC").s().p("AhpAlQgMgGgFgNQgGgNAIgMQAIgNAQgEQBegaBfARQARADAJAMQAJAMgEANQgEANgMAHQgMAHgOgCQhSgPhOAWIgKACQgIAAgJgEg");
	this.shape_72.setTransform(115.8,72.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6E6E6").s().p("AhigfIAAgfQAAgWAJgEQAHgDASAIQA6AcAWAAIBTAAIAAAAQAAA8grAqQgrArg7AAg");
	this.shape_73.setTransform(100.2,55.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#804B21").s().p("AhihjQAAgwAighQAhgiAvAAIBTAAIAAB6QAAA9grApQgrArg7AAIgkCig");
	this.shape_74.setTransform(100.2,59.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E6E6").s().p("AiRCkQgXAAASgKIA5gbQBogzAAgoIAAgPQAAgzhXhPQgigfgFgJQgGgOAiAAQBlAABJBIQBIBIAABlQAAAigYAYQgYAYgiAAg");
	this.shape_75.setTransform(165.7,36.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#804B21").s().p("AjeCkQg1AAglglQglgmAAg1IAAgPQAAhMA2g2QA2g2BOAAIELAAQBlAABJBIQBIBIAABlQAAAigYAYQgYAYgiAAg");
	this.shape_76.setTransform(146.6,36.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6B350E").s().p("AAyAYQgygNgyAKQgJACgIgFQgIgEgCgIQgDgIAGgHQAFgIALgCQA6gMA9APQAKADAFAIQAFAHgDAJQgDAIgIAEQgFACgFAAIgHgBg");
	this.shape_77.setTransform(137.3,127.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#804B21").s().p("AjOFAIibizQgwg5gHhIIghlLIAFAAQBCDOB5AdQArAKBMgHQBygJAYAAQAYAAB1AJQBQAHAtgKQB+gdA1jOIAFAAIghFLQgHBIgwA5IibCzg");
	this.shape_78.setTransform(136.5,114);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EEC0A2").s().p("ABfGfQhOglhEg8QitiUAAiqQAAi6CEiDQCCiEC7AAQjUD3AJDYQAHDEDEDwQg1AAhNgjg");
	this.shape_79.setTransform(114,77.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FECFAE").s().p("AiBGfQhOglhGg8QisiUAAiqQAAi6CEiDQCDiEC6AAQC6AACECEQCECDAAC6QAAC7iECDQiDCEi7AAQg1AAhMgjg");
	this.shape_80.setTransform(136.5,77.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FECFAE").s().p("AnBDwIAAgeQAAi7CEiCQCDiEC6AAQC6AACECEQCECCAAC7IAAAeg");
	this.shape_81.setTransform(136.5,56.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EEC0A2").s().p("AmbFnIAArNIAeBiQAtB3BKBoQDtFNG1A/g");
	this.shape_82.setTransform(136.5,152.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FBC6AC").s().p("AmbFnIAArNIM3AAIAALNg");
	this.shape_83.setTransform(136.5,152.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FECFAE").s().p("AnyI2IhIxrIR0AAIhHRrg");
	this.shape_84.setTransform(135.5,260.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FECFAE").s().p("AjWC0IgFAAIAAloIG3AAIAAFpQjZgBjZAAg");
	this.shape_85.setTransform(163.4,360.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FECFAE").s().p("Ajbi2IG4AAIAAFpIm4AEg");
	this.shape_86.setTransform(107.6,360.3);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.instance_2,this.instance_3,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_3},{t:this.instance_2},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(100));

	// Fondo
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F7BD59").s().p("ApuXCQkfh5jdjdQjejeh5kfQh+kpAAlGQAAlEB+kqQB5kfDejdQDdjeEfh5QEqh+FEAAQFFAAEqB+QEfB5DdDeQDeDdB5EfQB+EqAAFEQAAFGh+EpQh5EfjeDeQjdDdkfB5QkqB+lFAAQlEAAkqh+g");
	this.shape_87.setTransform(160.5,160);

	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.5,160,320,320.1);
// library properties:
lib.properties = {
	id: 'BA2F66A436784B33BCF7E630D8FA30EC',
	width: 320,
	height: 320,
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
an.compositions['BA2F66A436784B33BCF7E630D8FA30EC'] = {
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