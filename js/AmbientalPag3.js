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
	mask.graphics.p("ApuXCQkfh5jejdQjdjeh6kfQh9kqAAlFQAAlFB9kpQB6kfDdjeQDejdEfh5QEph+FFAAQFGAAEoB+QEgB5DeDdQDdDeB5EfQB+EpAAFFQAAFFh+EqQh5EfjdDeQjeDdkgB5QkoB+lGAAQlFAAkph+g");
	mask.setTransform(174.2,160);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AB3kZQgHgIgLAAQgKAAgIAIIhVBXIAAgdQAAgKgIgIQgIgIgLAAQgKAAgHAIQgGAHAAALIAABfIgdgdQgGgGgNABQgNADgFAAQgIAPAAAIQAAAHAIAIIA9BBIABFaIAzAAIACmaIB6h8QAHgHABgLQAAgMgIgHg");
	this.shape.setTransform(67.5,198.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19A499").s().p("Ag4EiIgBlaIg9hBQgIgIAAgHQAAgIAIgPIASgDQANgBAGAGIAdAdIAAhfQAAgLAGgHQAHgIAKAAQALAAAIAIQAIAIAAAKIAAAdIBVhXQAIgIAKAAQALAAAHAIQAIAHAAAMQgBALgHAHIh6B8IgCGag");
	this.shape_1.setTransform(67.5,198.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.4).p("AA+g5QAOAOAAATIAAAwQAAAUgOAOQgOAOgUAAIg3AAQgUAAgNgOQgOgOAAgUIAAgwQAAgTAOgOQANgOAUAAIA3AAQAUAAAOAOg");
	this.shape_2.setTransform(53.3,184.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87D8B6").s().p("AgaBIQgVAAgNgOQgPgOAAgUIAAgwQAAgTAPgOQANgOAVAAIA2AAQAUAAAOAOQAOAOgBATIAAAwQABAUgOAOQgOAOgUAAg");
	this.shape_3.setTransform(53.3,184.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.4).p("AANhHQAaAAASASQASASAAAaIAAATQAAAagSASQgSASgaAAIgZAAQgaAAgSgSQgSgSAAgaIAAgTQAAgaASgSQASgSAaAAg");
	this.shape_4.setTransform(79.6,171.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87D8B6").s().p("AgMBIQgaAAgSgSQgSgSAAgaIAAgTQAAgaASgSQASgSAaAAIAZAAQAaAAASASQASASAAAaIAAATQAAAagSASQgSASgaAAg");
	this.shape_5.setTransform(79.6,171.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.4).p("ACCjlQAuAAAgAgQAgAgAAAuIAADvQAAAuggAgQggAgguAAIkDAAQguAAggggQggggAAguIAAjvQAAguAgggQAgggAuAAg");
	this.shape_6.setTransform(65.6,173.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19A499").s().p("AiBDmQguAAggggQggggAAguIAAjvQAAguAgggQAgggAuAAIEDAAQAuAAAgAgQAgAgAAAuIAADvQAAAuggAgQggAgguAAg");
	this.shape_7.setTransform(65.6,173.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AiSlbQAKgKALAAQALAAAJAKIBoBsIAAgkQAAgMAMgIQAMgGAPAAQANAAAJAGQAIAIAAAMIAAB1IAjgiQAJgIAOAAQANABAKAIQAJAHAAAOQAAAOgJAJIhNBPIAAGqIhJAAIAAn+IiWiXQgIgJACgNQABgNAKgJg");
	this.shape_8.setTransform(121.4,190.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19A499").s().p("AgBFmIAAn+IiWiXQgIgJACgNQABgNAKgJQAKgKALAAQALAAAJAKIBoBsIAAgkQAAgMAMgIQAMgGAPAAQANAAAJAGQAIAIAAAMIAAB1IAjgiQAJgIAOAAQANABAKAIQAJAHAAAOQAAAOgJAJIhNBPIAAGqg");
	this.shape_9.setTransform(121.4,190.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.4).p("ABPhLQgOgOgUAAIhZAAQgUAAgOAOQgOAOAAAUIAABSQAAAUAOAOQAOAOAUAAIBZAAQAUAAAOgOQAOgOAAgUIAAhSQAAgUgOgOg");
	this.shape_10.setTransform(139.1,173.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#87D8B6").s().p("AgsBZQgUAAgOgOQgOgOAAgUIAAhRQAAgVAOgNQAOgPAUAAIBZAAQAUAAAOAPQAOANAAAVIAABRQAAAUgOAOQgOAOgUAAg");
	this.shape_11.setTransform(139.1,173.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.4).p("AgehYQgaAAgSASQgTATAAAaIAAA0QAAAaATASQASASAaAAIA8AAQAaAAATgSQASgSAAgaIAAg0QAAgagSgTQgTgSgaAAg");
	this.shape_12.setTransform(106.6,157);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#87D8B6").s().p("AgeBaQgaAAgSgTQgTgSAAgaIAAg0QAAgaATgTQASgTAaABIA8AAQAbgBASATQATATAAAaIAAA0QAAAagTASQgSATgbAAg");
	this.shape_13.setTransform(106.6,157);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.4).p("AC6kcIl0AAQguAAggAgQghAhAAAuIAAFbQAAAuAhAhQAgAgAuAAIF0AAQAvAAAgggQAhghAAguIAAlbQAAgughghQgggggvAAg");
	this.shape_14.setTransform(123.8,159.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19A499").s().p("Ai6EdQgtAAghggQggghgBguIAAlbQABguAgggQAhghAtAAIF1AAQAuAAAgAhQAgAgAAAuIAAFbQAAAuggAhQggAgguAAg");
	this.shape_15.setTransform(123.8,159.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("AB3kZQgHgIgLAAQgLAAgHAIIhXBXIAAgdQAAgKgHgIQgHgIgLAAQgKAAgHAIQgIAIAAAKIAABfIgcgdQgGgGgMABQgNADgFAAQgIAPAAAIQAAAHAIAIIA9BBIABFaIAzAAIACmaIB6h8QAHgHABgLQAAgMgIgHg");
	this.shape_16.setTransform(229.7,198.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#19A499").s().p("Ag4EiIgBlaIg9hBQgIgIAAgHQAAgIAIgPIASgDQAMgBAGAGIAcAdIAAhfQAAgKAIgIQAHgIAKAAQALAAAHAIQAHAIAAAKIAAAdIBXhXQAHgIALAAQALAAAHAIQAIAHAAAMQgBALgHAHIh6B8IgCGag");
	this.shape_17.setTransform(229.7,198.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.4).p("AA+g5QAOAOAAATIAAAwQAAAUgOAOQgOAOgUAAIg3AAQgUAAgNgOQgOgOAAgUIAAgwQAAgTAOgOQANgOAUAAIA3AAQAUAAAOAOg");
	this.shape_18.setTransform(215.5,184.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#87D8B6").s().p("AgbBIQgTAAgOgOQgOgOgBgUIAAgwQABgTAOgOQAOgOATAAIA2AAQAVAAANAOQAOAOABATIAAAwQgBAUgOAOQgNAOgVAAg");
	this.shape_19.setTransform(215.5,184.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.4).p("AgMhHIAZAAQAaAAASASQASASAAAaIAAATQAAAagSASQgSASgaAAIgZAAQgaAAgSgSQgSgSAAgaIAAgTQAAgaASgSQASgSAaAAg");
	this.shape_20.setTransform(241.7,171.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#87D8B6").s().p("AgMBIQgaAAgSgSQgSgSAAgaIAAgTQAAgaASgSQASgSAaAAIAZAAQAaAAASASQASASAAAaIAAATQAAAagSASQgSASgaAAg");
	this.shape_21.setTransform(241.7,171.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.4).p("ACCjlQAuAAAgAgQAgAgAAAuIAADvQAAAuggAgQggAgguAAIkDAAQguAAggggQggggAAguIAAjvQAAguAgggQAgggAuAAg");
	this.shape_22.setTransform(227.8,173.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19A499").s().p("AiBDmQguAAggggQggggAAguIAAjvQAAguAgggQAgggAuAAIEDAAQAuAAAgAgQAgAgAAAuIAADvQAAAuggAgQggAgguAAg");
	this.shape_23.setTransform(227.8,173.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("AiRlbQAJgKALAAQAKAAAKAKIBnBsIAAgkQAAgMANgIQAMgGAPAAQAOAAAHAGQAIAHAAANIAAB1IAkgiQAJgIAOAAQANABAKAIQAKAHAAAOQAAAOgKAJIhMBPIgBGqIhKAAIAAn+IiViXQgJgJADgNQACgNAKgJg");
	this.shape_24.setTransform(283.5,190.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19A499").s().p("AgCFmIAAn+IiViXQgJgJADgNQACgNAKgJQAJgKALAAQAKAAAKAKIBnBsIAAgkQAAgMANgIQAMgGAPAAQAOAAAHAGQAIAHAAANIAAB1IAkgiQAJgIAOAAQANABAKAIQAKAHAAAOQAAAOgKAJIhMBPIgBGqg");
	this.shape_25.setTransform(283.5,190.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.4).p("ABPhLQgOgOgUAAIhZAAQgUAAgOAOQgOAOAAAUIAABSQAAAUAOAOQAOAOAUAAIBZAAQAUAAAOgOQAOgOAAgUIAAhSQAAgUgOgOg");
	this.shape_26.setTransform(301.2,173.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#87D8B6").s().p("AgsBZQgUAAgOgOQgOgOAAgUIAAhRQAAgVAOgNQAOgPAUAAIBZAAQAUAAAOAPQAOANAAAVIAABRQAAAUgOAOQgOAOgUAAg");
	this.shape_27.setTransform(301.2,173.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.4).p("AgehYQgaAAgSASQgTATAAAaIAAA0QAAAaATASQASASAaAAIA8AAQAaAAATgSQASgSAAgaIAAg0QAAgagSgTQgTgSgaAAg");
	this.shape_28.setTransform(268.7,157);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#87D8B6").s().p("AgdBaQgaAAgTgTQgSgSAAgaIAAg0QAAgaASgTQATgTAaABIA7AAQAbgBASATQASATAAAaIAAA0QAAAagSASQgSATgbAAg");
	this.shape_29.setTransform(268.7,157);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.4).p("AC7kcIl0AAQgvAAggAgQghAhAAAuIAAFbQAAAuAhAhQAgAgAvAAIF0AAQAuAAAgggQAhghAAguIAAlbQAAgughghQggggguAAg");
	this.shape_30.setTransform(286,159.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19A499").s().p("Ai6EdQgtAAghggQghghABguIAAlbQgBguAhggQAhghAtAAIF0AAQAuAAAhAhQAgAgABAuIAAFbQgBAuggAhQghAgguAAg");
	this.shape_31.setTransform(286,159.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19A499").s().p("AiiCkQhEhEAAhgQAAhfBEhDQBDhEBfAAQBgAABEBEQBDBDAABfQAABghDBEQhEBDhgAAQhfAAhDhDg");
	this.shape_32.setTransform(265.7,299.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19A499").s().p("AiiCkQhEhEAAhgQAAhfBEhDQBDhEBfAAQBgAABEBEQBDBDAABfQAABghDBEQhEBDhgAAQhfAAhDhDg");
	this.shape_33.setTransform(219.9,299.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19A499").s().p("AiiCkQhEhEAAhgQAAhfBEhDQBDhEBfAAQBgAABEBEQBDBDAABfQAABghDBEQhEBDhgAAQhfAAhDhDg");
	this.shape_34.setTransform(174.2,299.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19A499").s().p("AijCkQhDhEAAhgQAAhfBDhDQBEhEBfAAQBgAABEBEQBDBDAABfQAABghDBEQhEBDhgAAQhfAAhEhDg");
	this.shape_35.setTransform(128.4,299.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19A499").s().p("AijCkQhDhEAAhgQAAhfBDhDQBEhEBfAAQBgAABEBEQBDBDAABfQAABghDBEQhEBDhgAAQhfAAhEhDg");
	this.shape_36.setTransform(82.7,299.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#40CDB1","#40CDB1"],[0,1],0,0,0,0,0,84.9).s().p("AyqBuIAAjbMAlVAAAIAADbg");
	this.shape_37.setTransform(170.2,284);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#40CDB1","#40CDB1"],[0,1],0,0,0,0,0,28.9).s().p("AjLDMQhVhVAAh3QAAh2BVhVQBUhUB3AAQB3AABVBUQBUBVAAB2QAAB3hUBVQhVBVh3AAQh3AAhUhVg");
	this.shape_38.setTransform(288.4,276.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#40CDB1","#40CDB1"],[0,1],0,0,0,0,0,28.9).s().p("AjLDMQhUhVAAh3QAAh2BUhVQBVhUB2AAQB4AABUBUQBUBVABB2QgBB3hUBVQhUBVh4AAQh2AAhVhVg");
	this.shape_39.setTransform(231.3,276.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#40CDB1","#40CDB1"],[0,1],0,0,0,0,0,28.9).s().p("AjLDMQhUhVAAh3QAAh2BUhVQBVhUB2AAQB3AABVBUQBUBVAAB2QAAB3hUBVQhUBVh4AAQh2AAhVhVg");
	this.shape_40.setTransform(174.2,276.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#40CDB1","#40CDB1"],[0,1],0,0,0,0,0,28.9).s().p("AjLDMQhUhVAAh3QAAh2BUhVQBVhUB2AAQB4AABUBUQBVBVAAB2QAAB3hVBVQhUBVh4AAQh2AAhVhVg");
	this.shape_41.setTransform(117.1,276.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#40CDB1","#40CDB1"],[0,1],0,0,0,0,0,28.9).s().p("AjLDMQhUhVgBh3QABh2BUhVQBVhUB2AAQB4AABUBUQBVBVgBB2QABB3hVBVQhUBVh4AAQh3AAhUhVg");
	this.shape_42.setTransform(60,276.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#87D8B6").s().p("A2QHbIAAu1MAshAAAIAAO1g");
	this.shape_43.setTransform(173.2,274.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.6).p("ACZgTQgHABgGAHQgGgWgSgNQgSgOgXAAQgWAAgRAMIACgLQABgKgCgHQgCgIgFgBQgFAAgEAHQgEAGgCAKIAAAIQgSgaggAAQgbAAgTAVQAAgTgJgBQgFgBgEAHQgEAHgBAKIgBAEQgFgEgDACQgGADAFAOQgJgEgLAAQgWAAgRAOQgCgLgIgBQgGgBgFAGQgFAGgBAJIAAACQgIgEgGAEQgEADABAIQABAHAFAHIABABQgVAEgOARQgOASAAAWQAAAIACAIIIFAAIAAgDQAAgagSgSQgSgSgaAAIgLABQgFgHgHgFQALgBAAgEQABgCgGgDQgFgBgIAAIgCgBQAEgKgGgFQgEgEgHACg");
	this.shape_44.setTransform(128.6,218.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.6).p("AAVhOQgEAGgBAKIgBAIQgSgaggAAQgbAAgUAVQACgTgKgBQgFgBgEAHQgEAHgCAKIAAAEQgFgEgDACQgGADAFAOQgJgEgLAAQgVAAgSAOQgCgLgIgBQgFgBgFAGQgFAGgCAJIAAACQgIgEgGAEQgEADABAIQAAAHAGAHIABABQgVAEgOARQgOARAAAXQAAAKACAGIIFAAIAAgDQAAgagSgSQgSgSgaAAIgLABQgDgGgJgGQALgBAAgEQABgCgGgDQgFgBgIAAIgCgBQADgLgFgEQgEgEgHACQgHABgGAHQgGgWgSgNQgSgOgYAAQgVAAgRAMQABgDABgIQABgKgCgHQgDgIgEgBQgFAAgEAHg");
	this.shape_45.setTransform(322.2,218.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#19A499").s().p("AkBBWQgCgGAAgKQAAgXAOgRQAOgRAVgEIgBgBQgGgHgBgHQAAgIAEgDQAGgEAIAEIAAgCQABgJAGgGQAEgGAGABQAHABADALQARgOAWAAQALAAAJAEQgFgOAGgDQADgCAFAEIABgEQABgKAEgHQAEgHAFABQAKABgCATQAUgVAbAAQAgAAASAaIAAgIQABgKAFgGQAEgHAFAAQAFABACAIQACAHgBAKQgBAIgCADQASgMAWAAQAWAAASAOQATANAGAWQAGgHAHgBQAHgCAEAEQAGAEgEALIACABQAHAAAGABQAFADAAACQAAAEgLABQAIAGAEAGIAKgBQAaAAASASQATASAAAaIAAADg");
	this.shape_46.setTransform(322.2,218.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").p("AHlCHQAAgqgdggQgegggqAAQgGAAgLABQgIgLgLgIQARgBABgGQAAgEgIgDQgJgEgNgBIgDAAQAHgRgKgJQgHgGgLADQgLADgKAKQgKgjgdgVQgegXglAAQgjAAgcAUQADgJABgJQACgQgEgMQgEgNgHgBQgIAAgHAKQgHALgCARIAAAEIgDAEQgfgmgxAAQgsAAgeAiQAAgOgEgJQgEgJgGgBQgIAAgHAKQgHALgCARIAAAGQgJgGgFADQgEACgBAIQAAAHADAKQgQgFgQAAQgdAAgZAQIgLgCQgFgLgJgBQgHgBgGAFQgHAFgEAKQgKAFgJAJIgDABQgBgUgJgBQgFgBgFAIQgFAIgCALIAAAFQgFgEgEABQgIAEAGAQQgKgEgNAAQgZAAgUAPQgCgMgKgBQgGgBgGAGQgGAGgBALIAAACQgKgEgGAEQgFAEABAJQABAJAGAIIABABQgYAFgQAXQgQAWAAAaQAAALACAMIPHAAg");
	this.shape_47.setTransform(235.6,213.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#148E80").s().p("AniCQQgCgMAAgLQAAgaAQgWQAQgXAYgFIgBgBQgGgIgBgJQgBgJAFgEQAGgEAKAEIAAgCQABgLAGgGQAGgGAGABQAKABACAMQAUgPAZAAQANAAAKAEQgGgQAIgEQAEgBAFAEIAAgFQACgLAFgIQAFgIAFABQAJABABAUIADgBQAJgJAKgFQAEgKAHgFQAGgFAHABQAJABAFALIALACQAZgQAdAAQAQAAAQAFQgDgKAAgHQABgIAEgCQAFgDAJAGIAAgGQACgRAHgLQAHgKAIAAQAGABAEAJQAEAJAAAOQAegiAsAAQAxAAAfAmIADgEIAAgEQACgRAHgLQAHgKAIAAQAHABAEANQAEAMgCAQQgBAJgDAJQAcgUAjAAQAlAAAeAXQAdAVAKAjQAKgKALgDQALgDAHAGQAKAJgHARIADAAQANABAJAEQAIADAAAEQgBAGgRABQALAIAIALIARgBQAqAAAeAgQAdAgAAAqIAAAJg");
	this.shape_48.setTransform(235.6,213.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").p("AGiALQAKgFAGAFQAFAEgBAJQgBAJgHAIIgBABQAYAFARAYQAQAXAAAbQAAAOgDAMIvHAAIgBgMQAAgqAeghQAegiAqAAIARABQAJgLAKgIQgRgCgBgGQAAgDAIgDQAKgEAMgBIADAAQgGgSAKgIQAGgGALADQALADAKAKQAKgjAdgWQAegWAmAAQAiAAAdATQgDgHgCgKQgCgQAEgNQAEgMAHgBQAJgBAGALQAHALACARIABAEIADAEQAOgSAVgKQAVgKAXAAQAtAAAeAhQgBgNAEgJQAEgJAHgBQAHgBAHALQAHALACARIABAGQAIgGAFADQAFACAAAIQABAHgEAKQAPgFARAAQAeAAAZAPIAKgBQAFgLAKgBQAGgBAHAFQAGAFAEAKQALAFAJAJIACABQABgUAJgCQAGAAAFAHQAFAIABAMIABAFQAFgFAEACQADACABAFQAAAGgDAHQAMgEALAAQAZAAAUAPQADgMAJgCQAHAAAFAGQAGAHABAKg");
	this.shape_49.setTransform(49.1,214.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#19A499").s().p("AnkCTIAAgMQAAgqAeghQAdgiAqAAIARABQAJgLALgIQgSgCAAgGQgBgDAJgDQAIgEANgBIAEAAQgIgSALgIQAGgGAMADQAKADAKAKQAKgjAegWQAdgWAmAAQAiAAAcATQgCgHgCgKQgCgQAEgNQAEgMAHgBQAJgBAHALQAGALACARIABAEIADAEQAOgSAVgKQAVgKAXAAQAtAAAdAhQAAgNAEgJQAEgJAHgBQAHgBAHALQAHALACARIAAAGQAJgGAFADQAFACAAAIQAAAHgDAKQAPgFARAAQAdAAAaAPIAKgBQAFgLAKgBQAGgBAHAFQAGAFAEAKQAKAFAJAJIADABQABgUAJgCQAGAAAFAHQAEAIACAMIABAFQAFgFAEACQADACAAAFQABAGgDAHQAMgEALAAQAYAAAVAPQADgMAJgCQAHAAAFAGQAFAHACAKIABACQAKgFAGAFQAEAEgBAJQgBAJgGAIIgBABQAYAFARAYQAPAXAAAbQAAAOgCAMg");
	this.shape_50.setTransform(49.1,214.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7BD59").s().p("ApuXCQkfh5jejdQjdjeh6kfQh9kqAAlFQAAlFB9kpQB6kfDdjeQDejdEfh5QEph+FFAAQFGAAEoB+QEgB5DeDdQDdDeB5EfQB+EpAAFFQAAFFh+EqQh5EfjdDeQjeDdkgB5QkoB+lGAAQlFAAkph+g");
	this.shape_51.setTransform(174.2,160);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(14.2,0,320,320.1), null);


(lib.Animar12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBAB2E").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A6hTAAQhSAAg7g6g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD835").s().p("AjfDhQhdhdAAiEQAAiDBdhcQBdheCCAAQCDAABdBeQBdBcAACDQAACEhdBdQhdBdiDgBQiCABhdhdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF4C0").s().p("AlDFEQiGiHAAi9QAAi8CGiGQCGiGC9AAQC+AACGCGQCGCGAAC8QAAC9iGCHQiHCGi9AAQi9AAiGiGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-45.7,91.6,91.5);


(lib.Animar11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBAB2E").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A6hTAAQhSAAg7g6g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD835").s().p("AjfDhQhdhdAAiEQAAiDBdhcQBdheCCAAQCDAABdBeQBdBcAACDQAACEhdBdQhdBdiDgBQiCABhdhdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF4C0").s().p("AlDFEQiGiHAAi9QAAi8CGiGQCGiGC9AAQC+AACGCGQCGCGAAC8QAAC9iGCHQiHCGi9AAQi9AAiGiGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-45.7,91.6,91.5);


(lib.Animar10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBAB2E").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A6hTAAQhSAAg7g6g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD835").s().p("AjfDhQhdhdAAiEQAAiDBdhcQBdheCCAAQCDAABdBeQBdBcAACDQAACEhdBdQhdBdiDgBQiCABhdhdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF4C0").s().p("AlDFEQiGiHAAi9QAAi8CGiGQCGiGC9AAQC+AACGCGQCGCGAAC8QAAC9iGCHQiHCGi9AAQi9AAiGiGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-45.7,91.6,91.5);


(lib.Animar8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAEgFQgUgJgQADQAJgIAMgCQAMgBALAFQAKAFAGAMQAGAKgBAMQgLgUgSgHg");
	this.shape.setTransform(7.8,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("AgmgEQALgOARgFQAPgGARAGQASAFALANQgegJgaAKQgfAKgOAVQABgRALgOg");
	this.shape_1.setTransform(-11.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("ABRAoQgEgWgUgJQgJgEgKAAQgLABgHAGQgFgPgMgNQgKgMgQgGQgQgFgRACQgRACgNAKQAOgWAYgIIAIgBQAXAAARAOQASAOAHAVQAHgDAKAAQATAAANAMQANANAAATQAAALgGAMQABgIgBgJg");
	this.shape_2.setTransform(17.5,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AiLAfQAXgOAbAAQANAAAOAEQAPgmAigYQAigZArAAQAiAAAcAPQAdAOASAaQgYgXgbgKQgcgKgeACQgdADgaAOQgYAQgQAYQgQAaAAAdQgRgSgYgGQgZgGgWAJQgXAIgOAUQAMgWAVgOg");
	this.shape_3.setTransform(-7.8,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDED").s().p("AinCIQgoAAgbgcQgcgbAAgnQAAgnAcgbQAbgbAoAAQANAAAOAEQAPgnAigYQAjgZArAAQA4AAAoAnQAnAoAAA4IAAABIANgBQAWAAASAOQASANAHAWQAHgDAKgBQATAAANANQAOAOAAASQAAATgOAOQgNANgTAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-13.6,52.5,27.2);


(lib.Animar7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("AhbAdQgmASgsAAQgoAAgkgPQgkgPgbgaIAAAAQgRgigGghQAPAjAlAYQAiAWApAFQAnAGAngPQAngOAZgeQAVAhAjAPQAgARAogEQAngEAhgXQAggZAOgkQBTAZBJgYQgaAcgjAQQgkAQgoABQgbAngrAWQgrAYgyAAQhIAAg3gwg");
	this.shape.setTransform(-22.4,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("ACaAdQgegKgfADQgkADgKATQhEgwg7gHQgngEgeAIQglAKgTAaQAhg7BFgdIAOAAQAtAAAnATQAlATAbAhQAUgHAWAAQAgAAAdAPQAbAPARAZQgXgUgdgLg");
	this.shape_1.setTransform(6.2,-8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AjVB4QAZgSAdgHQAIhsBQhKQBPhMBuAAQBJAAA/AkQg5gTg6AEQg9ACg0AaQhDAggqBDQgrBBACBLQgigIgjALQgjAKgZAaQAQgaAYgSg");
	this.shape_2.setTransform(-42.5,-15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AgfAOQgRgKgIgQQAdAPAegDQAigDAUgSQgFASgQALQgPAMgSACIgEAAQgPAAgPgIg");
	this.shape_3.setTransform(-3.5,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D9D9").s().p("AgtATQgYgOgLgXQApAXArgFQAxgFAcgZQgHAZgWAQQgVASgbACIgFAAQgXAAgVgMg");
	this.shape_4.setTransform(-29.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4F4F4").s().p("AAEgFQgwgIgiAPQAOgVAagKQAagLAYAGQAaAFATAVQATATAEAaQghgigrgIg");
	this.shape_5.setTransform(-14.4,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDEDED").s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNg");
	this.shape_6.setTransform(65.8,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDEDED").s().p("Ag2A3QgWgXAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAXQgWAWggAAQgfAAgXgWg");
	this.shape_7.setTransform(44.4,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDED").s().p("AhuESQgmARgsABQgoAAgjgPQgkgPgbgbIgNAAQg/ABgsgtQgsgsgBg+QAAg1AigpQAggpAzgMQAIhtBPhKQBRhMBuAAQBWAABHAyQBFAvAfBPIAUgBQAtAAAoATQAmATAbAiQAUgIAWAAQA1AAAkAlQAmAmAAAzQAAA0gmAmQgkAlg1AAQgWAAgUgHQgbAhglASQgnAUgrAAQgcAogqAXQgsAYgyAAQhHAAg4gwg");
	this.shape_8.setTransform(-20.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-32.1,140.3,64.3);


(lib.Animar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAFgFQgVgJgQADQAJgIAMgCQAMgBALAFQAKAGAGALQAGAKgBAMQgLgUgRgHg");
	this.shape.setTransform(7.8,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("AgmgEQALgOARgFQAPgFASAFQARAFALANQgegJgaAKQgfAKgOAVQABgRALgOg");
	this.shape_1.setTransform(-11.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("ABRAoQgEgWgUgJQgJgEgKAAQgLABgHAGQgFgQgMgMQgLgNgQgFQgPgFgRACQgRACgNAKQANgVAZgJIAIgBQAXAAARAOQASAOAGAVQAKgDAIAAQASAAAOAMQANANAAATQAAALgGAMQABgLgBgGg");
	this.shape_2.setTransform(17.6,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AiKAfQAWgOAaAAQAPAAANAEQAPgmAigZQAigYArAAQAiAAAcAPQAdAOASAaQgWgWgdgLQgcgKgeACQgdACgaAPQgYAQgPAYQgRAaAAAdQgRgSgYgGQgZgGgWAIQgXAJgOAUQAMgXAWgNg");
	this.shape_3.setTransform(-7.8,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDED").s().p("AioCIQgnAAgbgbQgbgcAAgnQAAgnAbgaQAbgcAnAAQAPAAANAEQAPgnAigZQAjgYArAAQA4AAAoAoQAnAoAAA3IAAABIANgBQAWAAASAOQATANAGAWQAJgEAJABQASAAANANQAOANAAATQAAASgOANQgNAOgSAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-13.6,52.5,27.2);


(lib.Animar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAEgFQgUgJgQADQAJgIAMgCQAMgBALAFQAKAFAGAMQAGAKgBAMQgLgUgSgHg");
	this.shape.setTransform(7.8,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("AgmgEQALgOARgFQAPgGARAGQASAFALANQgegJgaAKQgfAKgOAVQABgRALgOg");
	this.shape_1.setTransform(-11.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("ABRAoQgEgWgUgJQgJgEgKAAQgLABgHAGQgFgPgMgNQgKgMgQgGQgQgFgRACQgRACgNAKQAOgWAYgIIAIgBQAXAAARAOQASAOAHAVQAHgDAKAAQATAAANAMQANANAAATQAAALgGAMQABgIgBgJg");
	this.shape_2.setTransform(17.5,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AiLAfQAXgOAbAAQANAAAOAEQAPgmAigYQAigZArAAQAiAAAcAPQAdAOASAaQgYgXgbgKQgcgKgeACQgdADgaAOQgYAQgQAYQgQAaAAAdQgRgSgYgGQgZgGgWAJQgXAIgOAUQAMgWAVgOg");
	this.shape_3.setTransform(-7.8,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDED").s().p("AinCIQgoAAgbgcQgcgbAAgnQAAgnAcgbQAbgbAoAAQANAAAOAEQAPgnAigYQAjgZArAAQA4AAAoAnQAnAoAAA4IAAABIANgBQAWAAASAOQASANAHAWQAHgDAKgBQATAAANANQAOAOAAASQAAATgOAOQgNANgTAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-13.6,52.5,27.2);


(lib.Animar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAEgFQgUgJgQADQAJgIAMgCQAMgBALAFQAKAFAGAMQAGAKgBAMQgLgUgSgHg");
	this.shape.setTransform(7.8,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("AgmgEQALgOARgFQAPgGARAGQASAFALANQgegJgaAKQgfAKgOAVQABgRALgOg");
	this.shape_1.setTransform(-11.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("ABRAoQgEgWgUgJQgJgEgKAAQgLABgHAGQgFgPgMgNQgKgMgQgGQgQgFgRACQgRACgNAKQAOgWAYgIIAIgBQAXAAARAOQASAOAHAVQAHgDAKAAQATAAANAMQANANAAATQAAALgGAMQABgIgBgJg");
	this.shape_2.setTransform(17.5,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AiLAfQAXgOAbAAQANAAAOAEQAPgmAigYQAigZArAAQAiAAAcAPQAdAOASAaQgYgXgbgKQgcgKgeACQgdADgaAOQgYAQgQAYQgQAaAAAdQgRgSgYgGQgZgGgWAJQgXAIgOAUQAMgWAVgOg");
	this.shape_3.setTransform(-7.8,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDED").s().p("AinCIQgoAAgbgcQgcgbAAgnQAAgnAcgbQAbgbAoAAQANAAAOAEQAPgnAigYQAjgZArAAQA4AAAoAnQAnAoAAA4IAAABIANgBQAWAAASAOQASANAHAWQAHgDAKgBQATAAANANQAOAOAAASQAAATgOAOQgNANgTAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-13.6,52.5,27.2);


(lib.Animar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("AhbAdQgmASgsAAQgoAAgkgPQgkgPgbgaIAAAAQgRgigGghQAPAjAlAYQAiAWApAFQAnAGAngPQAngOAZgeQAVAhAjAPQAgARAogEQAngEAhgXQAggZAOgkQBTAZBJgYQgaAcgjAQQgkAQgoABQgbAngrAWQgrAYgyAAQhIAAg3gwg");
	this.shape.setTransform(-22.4,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("ACaAdQgegKgfADQgkADgKATQhEgwg7gHQgngEgeAIQglAKgTAaQAhg7BFgdIAOAAQAtAAAnATQAlATAbAhQAUgHAWAAQAgAAAdAPQAbAPARAZQgXgUgdgLg");
	this.shape_1.setTransform(6.2,-8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AjVB4QAZgSAdgHQAIhsBQhKQBPhMBuAAQBJAAA/AkQg5gTg6AEQg9ACg0AaQhDAggqBDQgrBBACBLQgigIgjALQgjAKgZAaQAQgaAYgSg");
	this.shape_2.setTransform(-42.5,-15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AgfAOQgRgKgIgQQAdAPAegDQAigDAUgSQgFASgQALQgPAMgSACIgEAAQgPAAgPgIg");
	this.shape_3.setTransform(-3.5,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D9D9").s().p("AgtATQgYgOgLgXQApAXArgFQAxgFAcgZQgHAZgWAQQgVASgbACIgFAAQgXAAgVgMg");
	this.shape_4.setTransform(-29.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4F4F4").s().p("AAEgFQgwgIgiAPQAOgVAagKQAagLAYAGQAaAFATAVQATATAEAaQghgigrgIg");
	this.shape_5.setTransform(-14.4,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDEDED").s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNg");
	this.shape_6.setTransform(65.8,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDEDED").s().p("Ag2A3QgWgXAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAXQgWAWggAAQgfAAgXgWg");
	this.shape_7.setTransform(44.4,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDED").s().p("AhuESQgmARgsABQgoAAgjgPQgkgPgbgbIgNAAQg/ABgsgtQgsgsgBg+QAAg1AigpQAggpAzgMQAIhtBPhKQBRhMBuAAQBWAABHAyQBFAvAfBPIAUgBQAtAAAoATQAmATAbAiQAUgIAWAAQA1AAAkAlQAmAmAAAzQAAA0gmAmQgkAlg1AAQgWAAgUgHQgbAhglASQgnAUgrAAQgcAogqAXQgsAYgyAAQhHAAg4gwg");
	this.shape_8.setTransform(-20.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-32.1,140.3,64.3);


(lib.Animar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("AhbAdQgmASgsAAQgoAAgkgPQgkgPgbgaIAAAAQgRgigGghQAPAjAlAYQAiAWApAFQAnAGAngPQAngOAZgeQAVAhAjAPQAgARAogEQAngEAhgXQAggZAOgkQBTAZBJgYQgaAcgjAQQgkAQgoABQgbAngrAWQgrAYgyAAQhIAAg3gwg");
	this.shape.setTransform(-22.4,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4F4").s().p("ACaAdQgegKgfADQgkADgKATQhEgwg7gHQgngEgeAIQglAKgTAaQAhg7BFgdIAOAAQAtAAAnATQAlATAbAhQAUgHAWAAQAgAAAdAPQAbAPARAZQgXgUgdgLg");
	this.shape_1.setTransform(6.2,-8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AjVB4QAZgSAdgHQAIhsBQhKQBPhMBuAAQBJAAA/AkQg5gTg6AEQg9ACg0AaQhDAggqBDQgrBBACBLQgigIgjALQgjAKgZAaQAQgaAYgSg");
	this.shape_2.setTransform(-42.5,-15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AgfAOQgRgKgIgQQAdAPAegDQAigDAUgSQgFASgQALQgPAMgSACIgEAAQgPAAgPgIg");
	this.shape_3.setTransform(-3.5,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D9D9").s().p("AgtATQgYgOgLgXQApAXArgFQAxgFAcgZQgHAZgWAQQgVASgbACIgFAAQgXAAgVgMg");
	this.shape_4.setTransform(-29.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4F4F4").s().p("AAEgFQgwgIgiAPQAOgVAagKQAagLAYAGQAaAFATAVQATATAEAaQghgigrgIg");
	this.shape_5.setTransform(-14.4,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDEDED").s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNg");
	this.shape_6.setTransform(65.8,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDEDED").s().p("Ag2A3QgWgXAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAXQgWAWggAAQgfAAgXgWg");
	this.shape_7.setTransform(44.4,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDED").s().p("AhuESQgmARgsABQgoAAgjgPQgkgPgbgbIgNAAQg/ABgsgtQgsgsgBg+QAAg1AigpQAggpAzgMQAIhtBPhKQBRhMBuAAQBWAABHAyQBFAvAfBPIAUgBQAtAAAoATQAmATAbAiQAUgIAWAAQA1AAAkAlQAmAmAAAzQAAA0gmAmQgkAlg1AAQgWAAgUgHQgbAhglASQgnAUgrAAQgcAogqAXQgsAYgyAAQhHAAg4gwg");
	this.shape_8.setTransform(-20.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-32.1,140.3,64.3);


// stage content:
(lib.AmbientalPag3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxrRrQnUnUgBqXQABqWHUnVQHVnVKWAAQKXAAHVHVQHUHVABKWQgBKXnUHUQnVHWqXgBQqWABnVnWg");
	var mask_graphics_149 = new cjs.Graphics().p("AxrRrQnUnUgBqXQABqWHUnVQHVnVKWAAQKXAAHVHVQHUHVABKWQgBKXnUHUQnVHWqXgBQqWABnVnWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:160.1,y:160}).wait(149).to({graphics:mask_graphics_149,x:160.1,y:160}).wait(1));

	// Sol
	this.instance = new lib.Animar10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(242.8,52.9);

	this.instance_1 = new lib.Animar11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.8,52.9,0.716,0.716);
	this.instance_1._off = true;

	this.instance_2 = new lib.Animar12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.8,52.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},75).to({state:[{t:this.instance_2}]},74).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.72,scaleY:0.72},75).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},75).to({_off:true,scaleX:1,scaleY:1},74).wait(1));

	// Nube3
	this.instance_3 = new lib.Animar5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(40.9,125.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:172.9},75).to({x:40.9},74).wait(1));

	// Mascara (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AxrRrQnUnUgBqXQABqWHUnVQHVnVKWAAQKXAAHVHVQHUHVABKWQgBKXnUHUQnVHWqXgBQqWABnVnWg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AxrRrQnUnUgBqXQABqWHUnVQHVnVKWAAQKXAAHVHVQHUHVABKWQgBKXnUHUQnVHWqXgBQqWABnVnWg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:160.1,y:160}).wait(149).to({graphics:mask_1_graphics_149,x:160.1,y:160}).wait(1));

	// Nube2
	this.instance_4 = new lib.Animar3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(67.6,32.9);

	this.instance_5 = new lib.Animar4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(144.6,32.9);
	this.instance_5._off = true;

	this.instance_6 = new lib.Animar8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(67.6,32.9);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},75).to({state:[{t:this.instance_6}]},74).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:144.6},75).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},75).to({_off:true,x:67.6},74).wait(1));

	// Mascara (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AxrRrQnUnUgBqXQABqWHUnVQHVnVKWAAQKXAAHVHVQHUHVABKWQgBKXnUHUQnVHWqXgBQqWABnVnWg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AxrRrQnUnUgBqXQABqWHUnVQHVnVKWAAQKXAAHVHVQHUHVABKWQgBKXnUHUQnVHWqXgBQqWABnVnWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:160.1,y:160}).wait(149).to({graphics:mask_2_graphics_149,x:160.1,y:160}).wait(1));

	// Nube1
	this.instance_7 = new lib.Animar1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(173,81.7);

	this.instance_8 = new lib.Animar2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.1,81.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.Animar7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(173,81.7);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},75).to({state:[{t:this.instance_9}]},74).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,x:66.1},75).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},75).to({_off:true,x:173},74).wait(1));

	// Fondo
	this.instance_10 = new lib.ClipGroup();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,161.2,1,1,0,0,0,174.2,161.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.7,160,348.6,322.4);
// library properties:
lib.properties = {
	id: 'E13EF2236FE3402CAE073E775B3EDC68',
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
an.compositions['E13EF2236FE3402CAE073E775B3EDC68'] = {
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