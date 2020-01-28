// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36280){
var map__36281 = p__36280;
var map__36281__$1 = (((((!((map__36281 == null))))?(((((map__36281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36281):map__36281);
var m = map__36281__$1;
var n = cljs.core.get.call(null,map__36281__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36281__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36283_36315 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36284_36316 = null;
var count__36285_36317 = (0);
var i__36286_36318 = (0);
while(true){
if((i__36286_36318 < count__36285_36317)){
var f_36319 = cljs.core._nth.call(null,chunk__36284_36316,i__36286_36318);
cljs.core.println.call(null,"  ",f_36319);


var G__36320 = seq__36283_36315;
var G__36321 = chunk__36284_36316;
var G__36322 = count__36285_36317;
var G__36323 = (i__36286_36318 + (1));
seq__36283_36315 = G__36320;
chunk__36284_36316 = G__36321;
count__36285_36317 = G__36322;
i__36286_36318 = G__36323;
continue;
} else {
var temp__5720__auto___36324 = cljs.core.seq.call(null,seq__36283_36315);
if(temp__5720__auto___36324){
var seq__36283_36325__$1 = temp__5720__auto___36324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36283_36325__$1)){
var c__4550__auto___36326 = cljs.core.chunk_first.call(null,seq__36283_36325__$1);
var G__36327 = cljs.core.chunk_rest.call(null,seq__36283_36325__$1);
var G__36328 = c__4550__auto___36326;
var G__36329 = cljs.core.count.call(null,c__4550__auto___36326);
var G__36330 = (0);
seq__36283_36315 = G__36327;
chunk__36284_36316 = G__36328;
count__36285_36317 = G__36329;
i__36286_36318 = G__36330;
continue;
} else {
var f_36331 = cljs.core.first.call(null,seq__36283_36325__$1);
cljs.core.println.call(null,"  ",f_36331);


var G__36332 = cljs.core.next.call(null,seq__36283_36325__$1);
var G__36333 = null;
var G__36334 = (0);
var G__36335 = (0);
seq__36283_36315 = G__36332;
chunk__36284_36316 = G__36333;
count__36285_36317 = G__36334;
i__36286_36318 = G__36335;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36336 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36336);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36336)))?cljs.core.second.call(null,arglists_36336):arglists_36336));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36287_36337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36288_36338 = null;
var count__36289_36339 = (0);
var i__36290_36340 = (0);
while(true){
if((i__36290_36340 < count__36289_36339)){
var vec__36301_36341 = cljs.core._nth.call(null,chunk__36288_36338,i__36290_36340);
var name_36342 = cljs.core.nth.call(null,vec__36301_36341,(0),null);
var map__36304_36343 = cljs.core.nth.call(null,vec__36301_36341,(1),null);
var map__36304_36344__$1 = (((((!((map__36304_36343 == null))))?(((((map__36304_36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36304_36343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36304_36343):map__36304_36343);
var doc_36345 = cljs.core.get.call(null,map__36304_36344__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36346 = cljs.core.get.call(null,map__36304_36344__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36342);

cljs.core.println.call(null," ",arglists_36346);

if(cljs.core.truth_(doc_36345)){
cljs.core.println.call(null," ",doc_36345);
} else {
}


var G__36347 = seq__36287_36337;
var G__36348 = chunk__36288_36338;
var G__36349 = count__36289_36339;
var G__36350 = (i__36290_36340 + (1));
seq__36287_36337 = G__36347;
chunk__36288_36338 = G__36348;
count__36289_36339 = G__36349;
i__36290_36340 = G__36350;
continue;
} else {
var temp__5720__auto___36351 = cljs.core.seq.call(null,seq__36287_36337);
if(temp__5720__auto___36351){
var seq__36287_36352__$1 = temp__5720__auto___36351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36287_36352__$1)){
var c__4550__auto___36353 = cljs.core.chunk_first.call(null,seq__36287_36352__$1);
var G__36354 = cljs.core.chunk_rest.call(null,seq__36287_36352__$1);
var G__36355 = c__4550__auto___36353;
var G__36356 = cljs.core.count.call(null,c__4550__auto___36353);
var G__36357 = (0);
seq__36287_36337 = G__36354;
chunk__36288_36338 = G__36355;
count__36289_36339 = G__36356;
i__36290_36340 = G__36357;
continue;
} else {
var vec__36306_36358 = cljs.core.first.call(null,seq__36287_36352__$1);
var name_36359 = cljs.core.nth.call(null,vec__36306_36358,(0),null);
var map__36309_36360 = cljs.core.nth.call(null,vec__36306_36358,(1),null);
var map__36309_36361__$1 = (((((!((map__36309_36360 == null))))?(((((map__36309_36360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36309_36360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36309_36360):map__36309_36360);
var doc_36362 = cljs.core.get.call(null,map__36309_36361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36363 = cljs.core.get.call(null,map__36309_36361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36359);

cljs.core.println.call(null," ",arglists_36363);

if(cljs.core.truth_(doc_36362)){
cljs.core.println.call(null," ",doc_36362);
} else {
}


var G__36364 = cljs.core.next.call(null,seq__36287_36352__$1);
var G__36365 = null;
var G__36366 = (0);
var G__36367 = (0);
seq__36287_36337 = G__36364;
chunk__36288_36338 = G__36365;
count__36289_36339 = G__36366;
i__36290_36340 = G__36367;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__36311 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36312 = null;
var count__36313 = (0);
var i__36314 = (0);
while(true){
if((i__36314 < count__36313)){
var role = cljs.core._nth.call(null,chunk__36312,i__36314);
var temp__5720__auto___36368__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36368__$1)){
var spec_36369 = temp__5720__auto___36368__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36369));
} else {
}


var G__36370 = seq__36311;
var G__36371 = chunk__36312;
var G__36372 = count__36313;
var G__36373 = (i__36314 + (1));
seq__36311 = G__36370;
chunk__36312 = G__36371;
count__36313 = G__36372;
i__36314 = G__36373;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__36311);
if(temp__5720__auto____$1){
var seq__36311__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36311__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36311__$1);
var G__36374 = cljs.core.chunk_rest.call(null,seq__36311__$1);
var G__36375 = c__4550__auto__;
var G__36376 = cljs.core.count.call(null,c__4550__auto__);
var G__36377 = (0);
seq__36311 = G__36374;
chunk__36312 = G__36375;
count__36313 = G__36376;
i__36314 = G__36377;
continue;
} else {
var role = cljs.core.first.call(null,seq__36311__$1);
var temp__5720__auto___36378__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36378__$2)){
var spec_36379 = temp__5720__auto___36378__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36379));
} else {
}


var G__36380 = cljs.core.next.call(null,seq__36311__$1);
var G__36381 = null;
var G__36382 = (0);
var G__36383 = (0);
seq__36311 = G__36380;
chunk__36312 = G__36381;
count__36313 = G__36382;
i__36314 = G__36383;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36384 = cljs.core.conj.call(null,via,t);
var G__36385 = cljs.core.ex_cause.call(null,t);
via = G__36384;
t = G__36385;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36388 = datafied_throwable;
var map__36388__$1 = (((((!((map__36388 == null))))?(((((map__36388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36388):map__36388);
var via = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36389 = cljs.core.last.call(null,via);
var map__36389__$1 = (((((!((map__36389 == null))))?(((((map__36389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36389):map__36389);
var type = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36390 = data;
var map__36390__$1 = (((((!((map__36390 == null))))?(((((map__36390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36390):map__36390);
var problems = cljs.core.get.call(null,map__36390__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__36390__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__36390__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36391 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__36391__$1 = (((((!((map__36391 == null))))?(((((map__36391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36391):map__36391);
var top_data = map__36391__$1;
var source = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__36396 = phase;
var G__36396__$1 = (((G__36396 instanceof cljs.core.Keyword))?G__36396.fqn:null);
switch (G__36396__$1) {
case "read-source":
var map__36397 = data;
var map__36397__$1 = (((((!((map__36397 == null))))?(((((map__36397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36397):map__36397);
var line = cljs.core.get.call(null,map__36397__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36397__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36399 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__36399__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36399,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36399);
var G__36399__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36399__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36399__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36399__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36400 = top_data;
var G__36400__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36400,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36400);
var G__36400__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36400__$1);
var G__36400__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36400__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36400__$2);
var G__36400__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36400__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36400__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36400__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36400__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36401 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36401,(0),null);
var method = cljs.core.nth.call(null,vec__36401,(1),null);
var file = cljs.core.nth.call(null,vec__36401,(2),null);
var line = cljs.core.nth.call(null,vec__36401,(3),null);
var G__36404 = top_data;
var G__36404__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__36404,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36404);
var G__36404__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__36404__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36404__$1);
var G__36404__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__36404__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36404__$2);
var G__36404__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36404__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36404__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36404__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36404__$4;
}

break;
case "execution":
var vec__36405 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36405,(0),null);
var method = cljs.core.nth.call(null,vec__36405,(1),null);
var file = cljs.core.nth.call(null,vec__36405,(2),null);
var line = cljs.core.nth.call(null,vec__36405,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__36405,source__$1,method,file,line,G__36396,G__36396__$1,map__36388,map__36388__$1,via,trace,phase,map__36389,map__36389__$1,type,message,data,map__36390,map__36390__$1,problems,fn,caller,map__36391,map__36391__$1,top_data,source){
return (function (p1__36387_SHARP_){
var or__4131__auto__ = (p1__36387_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__36387_SHARP_);
}
});})(vec__36405,source__$1,method,file,line,G__36396,G__36396__$1,map__36388,map__36388__$1,via,trace,phase,map__36389,map__36389__$1,type,message,data,map__36390,map__36390__$1,problems,fn,caller,map__36391,map__36391__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__36408 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36408__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__36408,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36408);
var G__36408__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36408__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36408__$1);
var G__36408__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__36408__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36408__$2);
var G__36408__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__36408__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36408__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36408__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36408__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36396__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36412){
var map__36413 = p__36412;
var map__36413__$1 = (((((!((map__36413 == null))))?(((((map__36413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36413):map__36413);
var triage_data = map__36413__$1;
var phase = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36415 = phase;
var G__36415__$1 = (((G__36415 instanceof cljs.core.Keyword))?G__36415.fqn:null);
switch (G__36415__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36416_36425 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36417_36426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36418_36427 = true;
var _STAR_print_fn_STAR__temp_val__36419_36428 = ((function (_STAR_print_newline_STAR__orig_val__36416_36425,_STAR_print_fn_STAR__orig_val__36417_36426,_STAR_print_newline_STAR__temp_val__36418_36427,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36416_36425,_STAR_print_fn_STAR__orig_val__36417_36426,_STAR_print_newline_STAR__temp_val__36418_36427,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36418_36427;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36419_36428;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36416_36425,_STAR_print_fn_STAR__orig_val__36417_36426,_STAR_print_newline_STAR__temp_val__36418_36427,_STAR_print_fn_STAR__temp_val__36419_36428,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__36416_36425,_STAR_print_fn_STAR__orig_val__36417_36426,_STAR_print_newline_STAR__temp_val__36418_36427,_STAR_print_fn_STAR__temp_val__36419_36428,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36410_SHARP_){
return cljs.core.dissoc.call(null,p1__36410_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36416_36425,_STAR_print_fn_STAR__orig_val__36417_36426,_STAR_print_newline_STAR__temp_val__36418_36427,_STAR_print_fn_STAR__temp_val__36419_36428,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36416_36425,_STAR_print_fn_STAR__orig_val__36417_36426,_STAR_print_newline_STAR__temp_val__36418_36427,_STAR_print_fn_STAR__temp_val__36419_36428,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36417_36426;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36416_36425;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36420_36429 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36421_36430 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36422_36431 = true;
var _STAR_print_fn_STAR__temp_val__36423_36432 = ((function (_STAR_print_newline_STAR__orig_val__36420_36429,_STAR_print_fn_STAR__orig_val__36421_36430,_STAR_print_newline_STAR__temp_val__36422_36431,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36420_36429,_STAR_print_fn_STAR__orig_val__36421_36430,_STAR_print_newline_STAR__temp_val__36422_36431,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36422_36431;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36423_36432;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36420_36429,_STAR_print_fn_STAR__orig_val__36421_36430,_STAR_print_newline_STAR__temp_val__36422_36431,_STAR_print_fn_STAR__temp_val__36423_36432,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__36420_36429,_STAR_print_fn_STAR__orig_val__36421_36430,_STAR_print_newline_STAR__temp_val__36422_36431,_STAR_print_fn_STAR__temp_val__36423_36432,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36411_SHARP_){
return cljs.core.dissoc.call(null,p1__36411_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36420_36429,_STAR_print_fn_STAR__orig_val__36421_36430,_STAR_print_newline_STAR__temp_val__36422_36431,_STAR_print_fn_STAR__temp_val__36423_36432,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36420_36429,_STAR_print_fn_STAR__orig_val__36421_36430,_STAR_print_newline_STAR__temp_val__36422_36431,_STAR_print_fn_STAR__temp_val__36423_36432,sb__4661__auto__,G__36415,G__36415__$1,loc,class_name,simple_class,cause_type,format,map__36413,map__36413__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36421_36430;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36420_36429;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36415__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1580192146585
