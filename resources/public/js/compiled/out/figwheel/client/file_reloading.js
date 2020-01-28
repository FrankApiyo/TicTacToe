// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33968_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33968_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33969 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33970 = null;
var count__33971 = (0);
var i__33972 = (0);
while(true){
if((i__33972 < count__33971)){
var n = cljs.core._nth.call(null,chunk__33970,i__33972);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__33973 = seq__33969;
var G__33974 = chunk__33970;
var G__33975 = count__33971;
var G__33976 = (i__33972 + (1));
seq__33969 = G__33973;
chunk__33970 = G__33974;
count__33971 = G__33975;
i__33972 = G__33976;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33969);
if(temp__5720__auto__){
var seq__33969__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33969__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33969__$1);
var G__33977 = cljs.core.chunk_rest.call(null,seq__33969__$1);
var G__33978 = c__4550__auto__;
var G__33979 = cljs.core.count.call(null,c__4550__auto__);
var G__33980 = (0);
seq__33969 = G__33977;
chunk__33970 = G__33978;
count__33971 = G__33979;
i__33972 = G__33980;
continue;
} else {
var n = cljs.core.first.call(null,seq__33969__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__33981 = cljs.core.next.call(null,seq__33969__$1);
var G__33982 = null;
var G__33983 = (0);
var G__33984 = (0);
seq__33969 = G__33981;
chunk__33970 = G__33982;
count__33971 = G__33983;
i__33972 = G__33984;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__33985){
var vec__33986 = p__33985;
var _ = cljs.core.nth.call(null,vec__33986,(0),null);
var v = cljs.core.nth.call(null,vec__33986,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__33989){
var vec__33990 = p__33989;
var k = cljs.core.nth.call(null,vec__33990,(0),null);
var v = cljs.core.nth.call(null,vec__33990,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34002_34010 = cljs.core.seq.call(null,deps);
var chunk__34003_34011 = null;
var count__34004_34012 = (0);
var i__34005_34013 = (0);
while(true){
if((i__34005_34013 < count__34004_34012)){
var dep_34014 = cljs.core._nth.call(null,chunk__34003_34011,i__34005_34013);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_34014;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34014));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34014,(depth + (1)),state);
} else {
}


var G__34015 = seq__34002_34010;
var G__34016 = chunk__34003_34011;
var G__34017 = count__34004_34012;
var G__34018 = (i__34005_34013 + (1));
seq__34002_34010 = G__34015;
chunk__34003_34011 = G__34016;
count__34004_34012 = G__34017;
i__34005_34013 = G__34018;
continue;
} else {
var temp__5720__auto___34019 = cljs.core.seq.call(null,seq__34002_34010);
if(temp__5720__auto___34019){
var seq__34002_34020__$1 = temp__5720__auto___34019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34002_34020__$1)){
var c__4550__auto___34021 = cljs.core.chunk_first.call(null,seq__34002_34020__$1);
var G__34022 = cljs.core.chunk_rest.call(null,seq__34002_34020__$1);
var G__34023 = c__4550__auto___34021;
var G__34024 = cljs.core.count.call(null,c__4550__auto___34021);
var G__34025 = (0);
seq__34002_34010 = G__34022;
chunk__34003_34011 = G__34023;
count__34004_34012 = G__34024;
i__34005_34013 = G__34025;
continue;
} else {
var dep_34026 = cljs.core.first.call(null,seq__34002_34020__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_34026;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34026));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34026,(depth + (1)),state);
} else {
}


var G__34027 = cljs.core.next.call(null,seq__34002_34020__$1);
var G__34028 = null;
var G__34029 = (0);
var G__34030 = (0);
seq__34002_34010 = G__34027;
chunk__34003_34011 = G__34028;
count__34004_34012 = G__34029;
i__34005_34013 = G__34030;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34006){
var vec__34007 = p__34006;
var seq__34008 = cljs.core.seq.call(null,vec__34007);
var first__34009 = cljs.core.first.call(null,seq__34008);
var seq__34008__$1 = cljs.core.next.call(null,seq__34008);
var x = first__34009;
var xs = seq__34008__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34007,seq__34008,first__34009,seq__34008__$1,x,xs,get_deps__$1){
return (function (p1__33993_SHARP_){
return clojure.set.difference.call(null,p1__33993_SHARP_,x);
});})(vec__34007,seq__34008,first__34009,seq__34008__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34031 = cljs.core.seq.call(null,provides);
var chunk__34032 = null;
var count__34033 = (0);
var i__34034 = (0);
while(true){
if((i__34034 < count__34033)){
var prov = cljs.core._nth.call(null,chunk__34032,i__34034);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34043_34051 = cljs.core.seq.call(null,requires);
var chunk__34044_34052 = null;
var count__34045_34053 = (0);
var i__34046_34054 = (0);
while(true){
if((i__34046_34054 < count__34045_34053)){
var req_34055 = cljs.core._nth.call(null,chunk__34044_34052,i__34046_34054);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34055,prov);


var G__34056 = seq__34043_34051;
var G__34057 = chunk__34044_34052;
var G__34058 = count__34045_34053;
var G__34059 = (i__34046_34054 + (1));
seq__34043_34051 = G__34056;
chunk__34044_34052 = G__34057;
count__34045_34053 = G__34058;
i__34046_34054 = G__34059;
continue;
} else {
var temp__5720__auto___34060 = cljs.core.seq.call(null,seq__34043_34051);
if(temp__5720__auto___34060){
var seq__34043_34061__$1 = temp__5720__auto___34060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34043_34061__$1)){
var c__4550__auto___34062 = cljs.core.chunk_first.call(null,seq__34043_34061__$1);
var G__34063 = cljs.core.chunk_rest.call(null,seq__34043_34061__$1);
var G__34064 = c__4550__auto___34062;
var G__34065 = cljs.core.count.call(null,c__4550__auto___34062);
var G__34066 = (0);
seq__34043_34051 = G__34063;
chunk__34044_34052 = G__34064;
count__34045_34053 = G__34065;
i__34046_34054 = G__34066;
continue;
} else {
var req_34067 = cljs.core.first.call(null,seq__34043_34061__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34067,prov);


var G__34068 = cljs.core.next.call(null,seq__34043_34061__$1);
var G__34069 = null;
var G__34070 = (0);
var G__34071 = (0);
seq__34043_34051 = G__34068;
chunk__34044_34052 = G__34069;
count__34045_34053 = G__34070;
i__34046_34054 = G__34071;
continue;
}
} else {
}
}
break;
}


var G__34072 = seq__34031;
var G__34073 = chunk__34032;
var G__34074 = count__34033;
var G__34075 = (i__34034 + (1));
seq__34031 = G__34072;
chunk__34032 = G__34073;
count__34033 = G__34074;
i__34034 = G__34075;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34031);
if(temp__5720__auto__){
var seq__34031__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34031__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34031__$1);
var G__34076 = cljs.core.chunk_rest.call(null,seq__34031__$1);
var G__34077 = c__4550__auto__;
var G__34078 = cljs.core.count.call(null,c__4550__auto__);
var G__34079 = (0);
seq__34031 = G__34076;
chunk__34032 = G__34077;
count__34033 = G__34078;
i__34034 = G__34079;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34031__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34047_34080 = cljs.core.seq.call(null,requires);
var chunk__34048_34081 = null;
var count__34049_34082 = (0);
var i__34050_34083 = (0);
while(true){
if((i__34050_34083 < count__34049_34082)){
var req_34084 = cljs.core._nth.call(null,chunk__34048_34081,i__34050_34083);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34084,prov);


var G__34085 = seq__34047_34080;
var G__34086 = chunk__34048_34081;
var G__34087 = count__34049_34082;
var G__34088 = (i__34050_34083 + (1));
seq__34047_34080 = G__34085;
chunk__34048_34081 = G__34086;
count__34049_34082 = G__34087;
i__34050_34083 = G__34088;
continue;
} else {
var temp__5720__auto___34089__$1 = cljs.core.seq.call(null,seq__34047_34080);
if(temp__5720__auto___34089__$1){
var seq__34047_34090__$1 = temp__5720__auto___34089__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34047_34090__$1)){
var c__4550__auto___34091 = cljs.core.chunk_first.call(null,seq__34047_34090__$1);
var G__34092 = cljs.core.chunk_rest.call(null,seq__34047_34090__$1);
var G__34093 = c__4550__auto___34091;
var G__34094 = cljs.core.count.call(null,c__4550__auto___34091);
var G__34095 = (0);
seq__34047_34080 = G__34092;
chunk__34048_34081 = G__34093;
count__34049_34082 = G__34094;
i__34050_34083 = G__34095;
continue;
} else {
var req_34096 = cljs.core.first.call(null,seq__34047_34090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34096,prov);


var G__34097 = cljs.core.next.call(null,seq__34047_34090__$1);
var G__34098 = null;
var G__34099 = (0);
var G__34100 = (0);
seq__34047_34080 = G__34097;
chunk__34048_34081 = G__34098;
count__34049_34082 = G__34099;
i__34050_34083 = G__34100;
continue;
}
} else {
}
}
break;
}


var G__34101 = cljs.core.next.call(null,seq__34031__$1);
var G__34102 = null;
var G__34103 = (0);
var G__34104 = (0);
seq__34031 = G__34101;
chunk__34032 = G__34102;
count__34033 = G__34103;
i__34034 = G__34104;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34105_34109 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34106_34110 = null;
var count__34107_34111 = (0);
var i__34108_34112 = (0);
while(true){
if((i__34108_34112 < count__34107_34111)){
var ns_34113 = cljs.core._nth.call(null,chunk__34106_34110,i__34108_34112);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34113);


var G__34114 = seq__34105_34109;
var G__34115 = chunk__34106_34110;
var G__34116 = count__34107_34111;
var G__34117 = (i__34108_34112 + (1));
seq__34105_34109 = G__34114;
chunk__34106_34110 = G__34115;
count__34107_34111 = G__34116;
i__34108_34112 = G__34117;
continue;
} else {
var temp__5720__auto___34118 = cljs.core.seq.call(null,seq__34105_34109);
if(temp__5720__auto___34118){
var seq__34105_34119__$1 = temp__5720__auto___34118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34105_34119__$1)){
var c__4550__auto___34120 = cljs.core.chunk_first.call(null,seq__34105_34119__$1);
var G__34121 = cljs.core.chunk_rest.call(null,seq__34105_34119__$1);
var G__34122 = c__4550__auto___34120;
var G__34123 = cljs.core.count.call(null,c__4550__auto___34120);
var G__34124 = (0);
seq__34105_34109 = G__34121;
chunk__34106_34110 = G__34122;
count__34107_34111 = G__34123;
i__34108_34112 = G__34124;
continue;
} else {
var ns_34125 = cljs.core.first.call(null,seq__34105_34119__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34125);


var G__34126 = cljs.core.next.call(null,seq__34105_34119__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__34105_34109 = G__34126;
chunk__34106_34110 = G__34127;
count__34107_34111 = G__34128;
i__34108_34112 = G__34129;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34130__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34131__i = 0, G__34131__a = new Array(arguments.length -  0);
while (G__34131__i < G__34131__a.length) {G__34131__a[G__34131__i] = arguments[G__34131__i + 0]; ++G__34131__i;}
  args = new cljs.core.IndexedSeq(G__34131__a,0,null);
} 
return G__34130__delegate.call(this,args);};
G__34130.cljs$lang$maxFixedArity = 0;
G__34130.cljs$lang$applyTo = (function (arglist__34132){
var args = cljs.core.seq(arglist__34132);
return G__34130__delegate(args);
});
G__34130.cljs$core$IFn$_invoke$arity$variadic = G__34130__delegate;
return G__34130;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34133_SHARP_,p2__34134_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34133_SHARP_)),p2__34134_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34135_SHARP_,p2__34136_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34135_SHARP_),p2__34136_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34137 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34137.addCallback(((function (G__34137){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34137))
);

G__34137.addErrback(((function (G__34137){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34137))
);

return G__34137;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34138){if((e34138 instanceof Error)){
var e = e34138;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34138;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34139){if((e34139 instanceof Error)){
var e = e34139;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34139;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34140 = cljs.core._EQ_;
var expr__34141 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34140.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34141))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34140.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34141))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34140.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34141))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34140,expr__34141){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34140,expr__34141))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34143,callback){
var map__34144 = p__34143;
var map__34144__$1 = (((((!((map__34144 == null))))?(((((map__34144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34144):map__34144);
var file_msg = map__34144__$1;
var request_url = cljs.core.get.call(null,map__34144__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34144,map__34144__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34144,map__34144__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__){
return (function (state_34182){
var state_val_34183 = (state_34182[(1)]);
if((state_val_34183 === (7))){
var inst_34178 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34184_34210 = state_34182__$1;
(statearr_34184_34210[(2)] = inst_34178);

(statearr_34184_34210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (1))){
var state_34182__$1 = state_34182;
var statearr_34185_34211 = state_34182__$1;
(statearr_34185_34211[(2)] = null);

(statearr_34185_34211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (4))){
var inst_34148 = (state_34182[(7)]);
var inst_34148__$1 = (state_34182[(2)]);
var state_34182__$1 = (function (){var statearr_34186 = state_34182;
(statearr_34186[(7)] = inst_34148__$1);

return statearr_34186;
})();
if(cljs.core.truth_(inst_34148__$1)){
var statearr_34187_34212 = state_34182__$1;
(statearr_34187_34212[(1)] = (5));

} else {
var statearr_34188_34213 = state_34182__$1;
(statearr_34188_34213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (15))){
var inst_34161 = (state_34182[(8)]);
var inst_34163 = (state_34182[(9)]);
var inst_34165 = inst_34163.call(null,inst_34161);
var state_34182__$1 = state_34182;
var statearr_34189_34214 = state_34182__$1;
(statearr_34189_34214[(2)] = inst_34165);

(statearr_34189_34214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (13))){
var inst_34172 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34190_34215 = state_34182__$1;
(statearr_34190_34215[(2)] = inst_34172);

(statearr_34190_34215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (6))){
var state_34182__$1 = state_34182;
var statearr_34191_34216 = state_34182__$1;
(statearr_34191_34216[(2)] = null);

(statearr_34191_34216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (17))){
var inst_34169 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34192_34217 = state_34182__$1;
(statearr_34192_34217[(2)] = inst_34169);

(statearr_34192_34217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (3))){
var inst_34180 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34182__$1,inst_34180);
} else {
if((state_val_34183 === (12))){
var state_34182__$1 = state_34182;
var statearr_34193_34218 = state_34182__$1;
(statearr_34193_34218[(2)] = null);

(statearr_34193_34218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (2))){
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34182__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34183 === (11))){
var inst_34153 = (state_34182[(10)]);
var inst_34159 = figwheel.client.file_reloading.blocking_load.call(null,inst_34153);
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34182__$1,(14),inst_34159);
} else {
if((state_val_34183 === (9))){
var inst_34153 = (state_34182[(10)]);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34153)){
var statearr_34194_34219 = state_34182__$1;
(statearr_34194_34219[(1)] = (11));

} else {
var statearr_34195_34220 = state_34182__$1;
(statearr_34195_34220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (5))){
var inst_34148 = (state_34182[(7)]);
var inst_34154 = (state_34182[(11)]);
var inst_34153 = cljs.core.nth.call(null,inst_34148,(0),null);
var inst_34154__$1 = cljs.core.nth.call(null,inst_34148,(1),null);
var state_34182__$1 = (function (){var statearr_34196 = state_34182;
(statearr_34196[(11)] = inst_34154__$1);

(statearr_34196[(10)] = inst_34153);

return statearr_34196;
})();
if(cljs.core.truth_(inst_34154__$1)){
var statearr_34197_34221 = state_34182__$1;
(statearr_34197_34221[(1)] = (8));

} else {
var statearr_34198_34222 = state_34182__$1;
(statearr_34198_34222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (14))){
var inst_34163 = (state_34182[(9)]);
var inst_34153 = (state_34182[(10)]);
var inst_34161 = (state_34182[(2)]);
var inst_34162 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34163__$1 = cljs.core.get.call(null,inst_34162,inst_34153);
var state_34182__$1 = (function (){var statearr_34199 = state_34182;
(statearr_34199[(8)] = inst_34161);

(statearr_34199[(9)] = inst_34163__$1);

return statearr_34199;
})();
if(cljs.core.truth_(inst_34163__$1)){
var statearr_34200_34223 = state_34182__$1;
(statearr_34200_34223[(1)] = (15));

} else {
var statearr_34201_34224 = state_34182__$1;
(statearr_34201_34224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (16))){
var inst_34161 = (state_34182[(8)]);
var inst_34167 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34161);
var state_34182__$1 = state_34182;
var statearr_34202_34225 = state_34182__$1;
(statearr_34202_34225[(2)] = inst_34167);

(statearr_34202_34225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (10))){
var inst_34174 = (state_34182[(2)]);
var state_34182__$1 = (function (){var statearr_34203 = state_34182;
(statearr_34203[(12)] = inst_34174);

return statearr_34203;
})();
var statearr_34204_34226 = state_34182__$1;
(statearr_34204_34226[(2)] = null);

(statearr_34204_34226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (8))){
var inst_34154 = (state_34182[(11)]);
var inst_34156 = eval(inst_34154);
var state_34182__$1 = state_34182;
var statearr_34205_34227 = state_34182__$1;
(statearr_34205_34227[(2)] = inst_34156);

(statearr_34205_34227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29201__auto__))
;
return ((function (switch__29034__auto__,c__29201__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29035__auto__ = null;
var figwheel$client$file_reloading$state_machine__29035__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = figwheel$client$file_reloading$state_machine__29035__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var figwheel$client$file_reloading$state_machine__29035__auto____1 = (function (state_34182){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_34182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e34207){if((e34207 instanceof Object)){
var ex__29038__auto__ = e34207;
var statearr_34208_34228 = state_34182;
(statearr_34208_34228[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34229 = state_34182;
state_34182 = G__34229;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29035__auto__ = function(state_34182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29035__auto____1.call(this,state_34182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29035__auto____0;
figwheel$client$file_reloading$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29035__auto____1;
return figwheel$client$file_reloading$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__))
})();
var state__29203__auto__ = (function (){var statearr_34209 = f__29202__auto__.call(null);
(statearr_34209[(6)] = c__29201__auto__);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__))
);

return c__29201__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34231 = arguments.length;
switch (G__34231) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34233,callback){
var map__34234 = p__34233;
var map__34234__$1 = (((((!((map__34234 == null))))?(((((map__34234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34234):map__34234);
var file_msg = map__34234__$1;
var namespace = cljs.core.get.call(null,map__34234__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34234,map__34234__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34234,map__34234__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34236){
var map__34237 = p__34236;
var map__34237__$1 = (((((!((map__34237 == null))))?(((((map__34237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34237):map__34237);
var file_msg = map__34237__$1;
var namespace = cljs.core.get.call(null,map__34237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34239){
var map__34240 = p__34239;
var map__34240__$1 = (((((!((map__34240 == null))))?(((((map__34240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34240):map__34240);
var file_msg = map__34240__$1;
var namespace = cljs.core.get.call(null,map__34240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34242,callback){
var map__34243 = p__34242;
var map__34243__$1 = (((((!((map__34243 == null))))?(((((map__34243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34243):map__34243);
var file_msg = map__34243__$1;
var request_url = cljs.core.get.call(null,map__34243__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34243__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29201__auto___34293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___34293,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___34293,out){
return (function (state_34278){
var state_val_34279 = (state_34278[(1)]);
if((state_val_34279 === (1))){
var inst_34252 = cljs.core.seq.call(null,files);
var inst_34253 = cljs.core.first.call(null,inst_34252);
var inst_34254 = cljs.core.next.call(null,inst_34252);
var inst_34255 = files;
var state_34278__$1 = (function (){var statearr_34280 = state_34278;
(statearr_34280[(7)] = inst_34254);

(statearr_34280[(8)] = inst_34253);

(statearr_34280[(9)] = inst_34255);

return statearr_34280;
})();
var statearr_34281_34294 = state_34278__$1;
(statearr_34281_34294[(2)] = null);

(statearr_34281_34294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (2))){
var inst_34261 = (state_34278[(10)]);
var inst_34255 = (state_34278[(9)]);
var inst_34260 = cljs.core.seq.call(null,inst_34255);
var inst_34261__$1 = cljs.core.first.call(null,inst_34260);
var inst_34262 = cljs.core.next.call(null,inst_34260);
var inst_34263 = (inst_34261__$1 == null);
var inst_34264 = cljs.core.not.call(null,inst_34263);
var state_34278__$1 = (function (){var statearr_34282 = state_34278;
(statearr_34282[(10)] = inst_34261__$1);

(statearr_34282[(11)] = inst_34262);

return statearr_34282;
})();
if(inst_34264){
var statearr_34283_34295 = state_34278__$1;
(statearr_34283_34295[(1)] = (4));

} else {
var statearr_34284_34296 = state_34278__$1;
(statearr_34284_34296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (3))){
var inst_34276 = (state_34278[(2)]);
var state_34278__$1 = state_34278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34278__$1,inst_34276);
} else {
if((state_val_34279 === (4))){
var inst_34261 = (state_34278[(10)]);
var inst_34266 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34261);
var state_34278__$1 = state_34278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34278__$1,(7),inst_34266);
} else {
if((state_val_34279 === (5))){
var inst_34272 = cljs.core.async.close_BANG_.call(null,out);
var state_34278__$1 = state_34278;
var statearr_34285_34297 = state_34278__$1;
(statearr_34285_34297[(2)] = inst_34272);

(statearr_34285_34297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (6))){
var inst_34274 = (state_34278[(2)]);
var state_34278__$1 = state_34278;
var statearr_34286_34298 = state_34278__$1;
(statearr_34286_34298[(2)] = inst_34274);

(statearr_34286_34298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34279 === (7))){
var inst_34262 = (state_34278[(11)]);
var inst_34268 = (state_34278[(2)]);
var inst_34269 = cljs.core.async.put_BANG_.call(null,out,inst_34268);
var inst_34255 = inst_34262;
var state_34278__$1 = (function (){var statearr_34287 = state_34278;
(statearr_34287[(12)] = inst_34269);

(statearr_34287[(9)] = inst_34255);

return statearr_34287;
})();
var statearr_34288_34299 = state_34278__$1;
(statearr_34288_34299[(2)] = null);

(statearr_34288_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29201__auto___34293,out))
;
return ((function (switch__29034__auto__,c__29201__auto___34293,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto____0 = (function (){
var statearr_34289 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34289[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto__);

(statearr_34289[(1)] = (1));

return statearr_34289;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto____1 = (function (state_34278){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_34278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e34290){if((e34290 instanceof Object)){
var ex__29038__auto__ = e34290;
var statearr_34291_34300 = state_34278;
(statearr_34291_34300[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34301 = state_34278;
state_34278 = G__34301;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto__ = function(state_34278){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto____1.call(this,state_34278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___34293,out))
})();
var state__29203__auto__ = (function (){var statearr_34292 = f__29202__auto__.call(null);
(statearr_34292[(6)] = c__29201__auto___34293);

return statearr_34292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___34293,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34302,opts){
var map__34303 = p__34302;
var map__34303__$1 = (((((!((map__34303 == null))))?(((((map__34303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34303):map__34303);
var eval_body = cljs.core.get.call(null,map__34303__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34305){var e = e34305;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34306_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34306_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34307){
var vec__34308 = p__34307;
var k = cljs.core.nth.call(null,vec__34308,(0),null);
var v = cljs.core.nth.call(null,vec__34308,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34311){
var vec__34312 = p__34311;
var k = cljs.core.nth.call(null,vec__34312,(0),null);
var v = cljs.core.nth.call(null,vec__34312,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34318,p__34319){
var map__34320 = p__34318;
var map__34320__$1 = (((((!((map__34320 == null))))?(((((map__34320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34320):map__34320);
var opts = map__34320__$1;
var before_jsload = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34321 = p__34319;
var map__34321__$1 = (((((!((map__34321 == null))))?(((((map__34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34321):map__34321);
var msg = map__34321__$1;
var files = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (7))){
var inst_34337 = (state_34475[(7)]);
var inst_34336 = (state_34475[(8)]);
var inst_34338 = (state_34475[(9)]);
var inst_34335 = (state_34475[(10)]);
var inst_34343 = cljs.core._nth.call(null,inst_34336,inst_34338);
var inst_34344 = figwheel.client.file_reloading.eval_body.call(null,inst_34343,opts);
var inst_34345 = (inst_34338 + (1));
var tmp34477 = inst_34337;
var tmp34478 = inst_34336;
var tmp34479 = inst_34335;
var inst_34335__$1 = tmp34479;
var inst_34336__$1 = tmp34478;
var inst_34337__$1 = tmp34477;
var inst_34338__$1 = inst_34345;
var state_34475__$1 = (function (){var statearr_34480 = state_34475;
(statearr_34480[(11)] = inst_34344);

(statearr_34480[(7)] = inst_34337__$1);

(statearr_34480[(8)] = inst_34336__$1);

(statearr_34480[(9)] = inst_34338__$1);

(statearr_34480[(10)] = inst_34335__$1);

return statearr_34480;
})();
var statearr_34481_34564 = state_34475__$1;
(statearr_34481_34564[(2)] = null);

(statearr_34481_34564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (20))){
var inst_34378 = (state_34475[(12)]);
var inst_34386 = figwheel.client.file_reloading.sort_files.call(null,inst_34378);
var state_34475__$1 = state_34475;
var statearr_34482_34565 = state_34475__$1;
(statearr_34482_34565[(2)] = inst_34386);

(statearr_34482_34565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (27))){
var state_34475__$1 = state_34475;
var statearr_34483_34566 = state_34475__$1;
(statearr_34483_34566[(2)] = null);

(statearr_34483_34566[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (1))){
var inst_34327 = (state_34475[(13)]);
var inst_34324 = before_jsload.call(null,files);
var inst_34325 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34326 = (function (){return ((function (inst_34327,inst_34324,inst_34325,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34315_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34315_SHARP_);
});
;})(inst_34327,inst_34324,inst_34325,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34327__$1 = cljs.core.filter.call(null,inst_34326,files);
var inst_34328 = cljs.core.not_empty.call(null,inst_34327__$1);
var state_34475__$1 = (function (){var statearr_34484 = state_34475;
(statearr_34484[(14)] = inst_34325);

(statearr_34484[(15)] = inst_34324);

(statearr_34484[(13)] = inst_34327__$1);

return statearr_34484;
})();
if(cljs.core.truth_(inst_34328)){
var statearr_34485_34567 = state_34475__$1;
(statearr_34485_34567[(1)] = (2));

} else {
var statearr_34486_34568 = state_34475__$1;
(statearr_34486_34568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (24))){
var state_34475__$1 = state_34475;
var statearr_34487_34569 = state_34475__$1;
(statearr_34487_34569[(2)] = null);

(statearr_34487_34569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (39))){
var inst_34428 = (state_34475[(16)]);
var state_34475__$1 = state_34475;
var statearr_34488_34570 = state_34475__$1;
(statearr_34488_34570[(2)] = inst_34428);

(statearr_34488_34570[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (46))){
var inst_34470 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34489_34571 = state_34475__$1;
(statearr_34489_34571[(2)] = inst_34470);

(statearr_34489_34571[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (4))){
var inst_34372 = (state_34475[(2)]);
var inst_34373 = cljs.core.List.EMPTY;
var inst_34374 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34373);
var inst_34375 = (function (){return ((function (inst_34372,inst_34373,inst_34374,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34316_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34316_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34316_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34316_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_34372,inst_34373,inst_34374,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34376 = cljs.core.filter.call(null,inst_34375,files);
var inst_34377 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34378 = cljs.core.concat.call(null,inst_34376,inst_34377);
var state_34475__$1 = (function (){var statearr_34490 = state_34475;
(statearr_34490[(17)] = inst_34372);

(statearr_34490[(18)] = inst_34374);

(statearr_34490[(12)] = inst_34378);

return statearr_34490;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34491_34572 = state_34475__$1;
(statearr_34491_34572[(1)] = (16));

} else {
var statearr_34492_34573 = state_34475__$1;
(statearr_34492_34573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (15))){
var inst_34362 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34493_34574 = state_34475__$1;
(statearr_34493_34574[(2)] = inst_34362);

(statearr_34493_34574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (21))){
var inst_34388 = (state_34475[(19)]);
var inst_34388__$1 = (state_34475[(2)]);
var inst_34389 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34388__$1);
var state_34475__$1 = (function (){var statearr_34494 = state_34475;
(statearr_34494[(19)] = inst_34388__$1);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34475__$1,(22),inst_34389);
} else {
if((state_val_34476 === (31))){
var inst_34473 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (32))){
var inst_34428 = (state_34475[(16)]);
var inst_34433 = inst_34428.cljs$lang$protocol_mask$partition0$;
var inst_34434 = (inst_34433 & (64));
var inst_34435 = inst_34428.cljs$core$ISeq$;
var inst_34436 = (cljs.core.PROTOCOL_SENTINEL === inst_34435);
var inst_34437 = ((inst_34434) || (inst_34436));
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34437)){
var statearr_34495_34575 = state_34475__$1;
(statearr_34495_34575[(1)] = (35));

} else {
var statearr_34496_34576 = state_34475__$1;
(statearr_34496_34576[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (40))){
var inst_34450 = (state_34475[(20)]);
var inst_34449 = (state_34475[(2)]);
var inst_34450__$1 = cljs.core.get.call(null,inst_34449,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34451 = cljs.core.get.call(null,inst_34449,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34452 = cljs.core.not_empty.call(null,inst_34450__$1);
var state_34475__$1 = (function (){var statearr_34497 = state_34475;
(statearr_34497[(21)] = inst_34451);

(statearr_34497[(20)] = inst_34450__$1);

return statearr_34497;
})();
if(cljs.core.truth_(inst_34452)){
var statearr_34498_34577 = state_34475__$1;
(statearr_34498_34577[(1)] = (41));

} else {
var statearr_34499_34578 = state_34475__$1;
(statearr_34499_34578[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (33))){
var state_34475__$1 = state_34475;
var statearr_34500_34579 = state_34475__$1;
(statearr_34500_34579[(2)] = false);

(statearr_34500_34579[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (13))){
var inst_34348 = (state_34475[(22)]);
var inst_34352 = cljs.core.chunk_first.call(null,inst_34348);
var inst_34353 = cljs.core.chunk_rest.call(null,inst_34348);
var inst_34354 = cljs.core.count.call(null,inst_34352);
var inst_34335 = inst_34353;
var inst_34336 = inst_34352;
var inst_34337 = inst_34354;
var inst_34338 = (0);
var state_34475__$1 = (function (){var statearr_34501 = state_34475;
(statearr_34501[(7)] = inst_34337);

(statearr_34501[(8)] = inst_34336);

(statearr_34501[(9)] = inst_34338);

(statearr_34501[(10)] = inst_34335);

return statearr_34501;
})();
var statearr_34502_34580 = state_34475__$1;
(statearr_34502_34580[(2)] = null);

(statearr_34502_34580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (22))){
var inst_34391 = (state_34475[(23)]);
var inst_34388 = (state_34475[(19)]);
var inst_34392 = (state_34475[(24)]);
var inst_34396 = (state_34475[(25)]);
var inst_34391__$1 = (state_34475[(2)]);
var inst_34392__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34391__$1);
var inst_34393 = (function (){var all_files = inst_34388;
var res_SINGLEQUOTE_ = inst_34391__$1;
var res = inst_34392__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34391,inst_34388,inst_34392,inst_34396,inst_34391__$1,inst_34392__$1,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34317_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34317_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34391,inst_34388,inst_34392,inst_34396,inst_34391__$1,inst_34392__$1,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34394 = cljs.core.filter.call(null,inst_34393,inst_34391__$1);
var inst_34395 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34396__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34395);
var inst_34397 = cljs.core.not_empty.call(null,inst_34396__$1);
var state_34475__$1 = (function (){var statearr_34503 = state_34475;
(statearr_34503[(23)] = inst_34391__$1);

(statearr_34503[(24)] = inst_34392__$1);

(statearr_34503[(26)] = inst_34394);

(statearr_34503[(25)] = inst_34396__$1);

return statearr_34503;
})();
if(cljs.core.truth_(inst_34397)){
var statearr_34504_34581 = state_34475__$1;
(statearr_34504_34581[(1)] = (23));

} else {
var statearr_34505_34582 = state_34475__$1;
(statearr_34505_34582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (36))){
var state_34475__$1 = state_34475;
var statearr_34506_34583 = state_34475__$1;
(statearr_34506_34583[(2)] = false);

(statearr_34506_34583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (41))){
var inst_34450 = (state_34475[(20)]);
var inst_34454 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34455 = cljs.core.map.call(null,inst_34454,inst_34450);
var inst_34456 = cljs.core.pr_str.call(null,inst_34455);
var inst_34457 = ["figwheel-no-load meta-data: ",inst_34456].join('');
var inst_34458 = figwheel.client.utils.log.call(null,inst_34457);
var state_34475__$1 = state_34475;
var statearr_34507_34584 = state_34475__$1;
(statearr_34507_34584[(2)] = inst_34458);

(statearr_34507_34584[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (43))){
var inst_34451 = (state_34475[(21)]);
var inst_34461 = (state_34475[(2)]);
var inst_34462 = cljs.core.not_empty.call(null,inst_34451);
var state_34475__$1 = (function (){var statearr_34508 = state_34475;
(statearr_34508[(27)] = inst_34461);

return statearr_34508;
})();
if(cljs.core.truth_(inst_34462)){
var statearr_34509_34585 = state_34475__$1;
(statearr_34509_34585[(1)] = (44));

} else {
var statearr_34510_34586 = state_34475__$1;
(statearr_34510_34586[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (29))){
var inst_34391 = (state_34475[(23)]);
var inst_34388 = (state_34475[(19)]);
var inst_34392 = (state_34475[(24)]);
var inst_34394 = (state_34475[(26)]);
var inst_34428 = (state_34475[(16)]);
var inst_34396 = (state_34475[(25)]);
var inst_34424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34427 = (function (){var all_files = inst_34388;
var res_SINGLEQUOTE_ = inst_34391;
var res = inst_34392;
var files_not_loaded = inst_34394;
var dependencies_that_loaded = inst_34396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34428,inst_34396,inst_34424,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34426){
var map__34511 = p__34426;
var map__34511__$1 = (((((!((map__34511 == null))))?(((((map__34511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34511):map__34511);
var namespace = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34428,inst_34396,inst_34424,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34428__$1 = cljs.core.group_by.call(null,inst_34427,inst_34394);
var inst_34430 = (inst_34428__$1 == null);
var inst_34431 = cljs.core.not.call(null,inst_34430);
var state_34475__$1 = (function (){var statearr_34513 = state_34475;
(statearr_34513[(28)] = inst_34424);

(statearr_34513[(16)] = inst_34428__$1);

return statearr_34513;
})();
if(inst_34431){
var statearr_34514_34587 = state_34475__$1;
(statearr_34514_34587[(1)] = (32));

} else {
var statearr_34515_34588 = state_34475__$1;
(statearr_34515_34588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (44))){
var inst_34451 = (state_34475[(21)]);
var inst_34464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34451);
var inst_34465 = cljs.core.pr_str.call(null,inst_34464);
var inst_34466 = ["not required: ",inst_34465].join('');
var inst_34467 = figwheel.client.utils.log.call(null,inst_34466);
var state_34475__$1 = state_34475;
var statearr_34516_34589 = state_34475__$1;
(statearr_34516_34589[(2)] = inst_34467);

(statearr_34516_34589[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (6))){
var inst_34369 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34517_34590 = state_34475__$1;
(statearr_34517_34590[(2)] = inst_34369);

(statearr_34517_34590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (28))){
var inst_34394 = (state_34475[(26)]);
var inst_34421 = (state_34475[(2)]);
var inst_34422 = cljs.core.not_empty.call(null,inst_34394);
var state_34475__$1 = (function (){var statearr_34518 = state_34475;
(statearr_34518[(29)] = inst_34421);

return statearr_34518;
})();
if(cljs.core.truth_(inst_34422)){
var statearr_34519_34591 = state_34475__$1;
(statearr_34519_34591[(1)] = (29));

} else {
var statearr_34520_34592 = state_34475__$1;
(statearr_34520_34592[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (25))){
var inst_34392 = (state_34475[(24)]);
var inst_34408 = (state_34475[(2)]);
var inst_34409 = cljs.core.not_empty.call(null,inst_34392);
var state_34475__$1 = (function (){var statearr_34521 = state_34475;
(statearr_34521[(30)] = inst_34408);

return statearr_34521;
})();
if(cljs.core.truth_(inst_34409)){
var statearr_34522_34593 = state_34475__$1;
(statearr_34522_34593[(1)] = (26));

} else {
var statearr_34523_34594 = state_34475__$1;
(statearr_34523_34594[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (34))){
var inst_34444 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34444)){
var statearr_34524_34595 = state_34475__$1;
(statearr_34524_34595[(1)] = (38));

} else {
var statearr_34525_34596 = state_34475__$1;
(statearr_34525_34596[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (17))){
var state_34475__$1 = state_34475;
var statearr_34526_34597 = state_34475__$1;
(statearr_34526_34597[(2)] = recompile_dependents);

(statearr_34526_34597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (3))){
var state_34475__$1 = state_34475;
var statearr_34527_34598 = state_34475__$1;
(statearr_34527_34598[(2)] = null);

(statearr_34527_34598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (12))){
var inst_34365 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34528_34599 = state_34475__$1;
(statearr_34528_34599[(2)] = inst_34365);

(statearr_34528_34599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (2))){
var inst_34327 = (state_34475[(13)]);
var inst_34334 = cljs.core.seq.call(null,inst_34327);
var inst_34335 = inst_34334;
var inst_34336 = null;
var inst_34337 = (0);
var inst_34338 = (0);
var state_34475__$1 = (function (){var statearr_34529 = state_34475;
(statearr_34529[(7)] = inst_34337);

(statearr_34529[(8)] = inst_34336);

(statearr_34529[(9)] = inst_34338);

(statearr_34529[(10)] = inst_34335);

return statearr_34529;
})();
var statearr_34530_34600 = state_34475__$1;
(statearr_34530_34600[(2)] = null);

(statearr_34530_34600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (23))){
var inst_34391 = (state_34475[(23)]);
var inst_34388 = (state_34475[(19)]);
var inst_34392 = (state_34475[(24)]);
var inst_34394 = (state_34475[(26)]);
var inst_34396 = (state_34475[(25)]);
var inst_34399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34401 = (function (){var all_files = inst_34388;
var res_SINGLEQUOTE_ = inst_34391;
var res = inst_34392;
var files_not_loaded = inst_34394;
var dependencies_that_loaded = inst_34396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34396,inst_34399,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34400){
var map__34531 = p__34400;
var map__34531__$1 = (((((!((map__34531 == null))))?(((((map__34531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34531):map__34531);
var request_url = cljs.core.get.call(null,map__34531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34396,inst_34399,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34402 = cljs.core.reverse.call(null,inst_34396);
var inst_34403 = cljs.core.map.call(null,inst_34401,inst_34402);
var inst_34404 = cljs.core.pr_str.call(null,inst_34403);
var inst_34405 = figwheel.client.utils.log.call(null,inst_34404);
var state_34475__$1 = (function (){var statearr_34533 = state_34475;
(statearr_34533[(31)] = inst_34399);

return statearr_34533;
})();
var statearr_34534_34601 = state_34475__$1;
(statearr_34534_34601[(2)] = inst_34405);

(statearr_34534_34601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (35))){
var state_34475__$1 = state_34475;
var statearr_34535_34602 = state_34475__$1;
(statearr_34535_34602[(2)] = true);

(statearr_34535_34602[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (19))){
var inst_34378 = (state_34475[(12)]);
var inst_34384 = figwheel.client.file_reloading.expand_files.call(null,inst_34378);
var state_34475__$1 = state_34475;
var statearr_34536_34603 = state_34475__$1;
(statearr_34536_34603[(2)] = inst_34384);

(statearr_34536_34603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (11))){
var state_34475__$1 = state_34475;
var statearr_34537_34604 = state_34475__$1;
(statearr_34537_34604[(2)] = null);

(statearr_34537_34604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (9))){
var inst_34367 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34538_34605 = state_34475__$1;
(statearr_34538_34605[(2)] = inst_34367);

(statearr_34538_34605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (5))){
var inst_34337 = (state_34475[(7)]);
var inst_34338 = (state_34475[(9)]);
var inst_34340 = (inst_34338 < inst_34337);
var inst_34341 = inst_34340;
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34341)){
var statearr_34539_34606 = state_34475__$1;
(statearr_34539_34606[(1)] = (7));

} else {
var statearr_34540_34607 = state_34475__$1;
(statearr_34540_34607[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (14))){
var inst_34348 = (state_34475[(22)]);
var inst_34357 = cljs.core.first.call(null,inst_34348);
var inst_34358 = figwheel.client.file_reloading.eval_body.call(null,inst_34357,opts);
var inst_34359 = cljs.core.next.call(null,inst_34348);
var inst_34335 = inst_34359;
var inst_34336 = null;
var inst_34337 = (0);
var inst_34338 = (0);
var state_34475__$1 = (function (){var statearr_34541 = state_34475;
(statearr_34541[(7)] = inst_34337);

(statearr_34541[(8)] = inst_34336);

(statearr_34541[(9)] = inst_34338);

(statearr_34541[(10)] = inst_34335);

(statearr_34541[(32)] = inst_34358);

return statearr_34541;
})();
var statearr_34542_34608 = state_34475__$1;
(statearr_34542_34608[(2)] = null);

(statearr_34542_34608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (45))){
var state_34475__$1 = state_34475;
var statearr_34543_34609 = state_34475__$1;
(statearr_34543_34609[(2)] = null);

(statearr_34543_34609[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (26))){
var inst_34391 = (state_34475[(23)]);
var inst_34388 = (state_34475[(19)]);
var inst_34392 = (state_34475[(24)]);
var inst_34394 = (state_34475[(26)]);
var inst_34396 = (state_34475[(25)]);
var inst_34411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34413 = (function (){var all_files = inst_34388;
var res_SINGLEQUOTE_ = inst_34391;
var res = inst_34392;
var files_not_loaded = inst_34394;
var dependencies_that_loaded = inst_34396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34396,inst_34411,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34412){
var map__34544 = p__34412;
var map__34544__$1 = (((((!((map__34544 == null))))?(((((map__34544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34544):map__34544);
var namespace = cljs.core.get.call(null,map__34544__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34396,inst_34411,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34414 = cljs.core.map.call(null,inst_34413,inst_34392);
var inst_34415 = cljs.core.pr_str.call(null,inst_34414);
var inst_34416 = figwheel.client.utils.log.call(null,inst_34415);
var inst_34417 = (function (){var all_files = inst_34388;
var res_SINGLEQUOTE_ = inst_34391;
var res = inst_34392;
var files_not_loaded = inst_34394;
var dependencies_that_loaded = inst_34396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34396,inst_34411,inst_34413,inst_34414,inst_34415,inst_34416,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34391,inst_34388,inst_34392,inst_34394,inst_34396,inst_34411,inst_34413,inst_34414,inst_34415,inst_34416,state_val_34476,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34418 = setTimeout(inst_34417,(10));
var state_34475__$1 = (function (){var statearr_34546 = state_34475;
(statearr_34546[(33)] = inst_34411);

(statearr_34546[(34)] = inst_34416);

return statearr_34546;
})();
var statearr_34547_34610 = state_34475__$1;
(statearr_34547_34610[(2)] = inst_34418);

(statearr_34547_34610[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (16))){
var state_34475__$1 = state_34475;
var statearr_34548_34611 = state_34475__$1;
(statearr_34548_34611[(2)] = reload_dependents);

(statearr_34548_34611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (38))){
var inst_34428 = (state_34475[(16)]);
var inst_34446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34428);
var state_34475__$1 = state_34475;
var statearr_34549_34612 = state_34475__$1;
(statearr_34549_34612[(2)] = inst_34446);

(statearr_34549_34612[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (30))){
var state_34475__$1 = state_34475;
var statearr_34550_34613 = state_34475__$1;
(statearr_34550_34613[(2)] = null);

(statearr_34550_34613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (10))){
var inst_34348 = (state_34475[(22)]);
var inst_34350 = cljs.core.chunked_seq_QMARK_.call(null,inst_34348);
var state_34475__$1 = state_34475;
if(inst_34350){
var statearr_34551_34614 = state_34475__$1;
(statearr_34551_34614[(1)] = (13));

} else {
var statearr_34552_34615 = state_34475__$1;
(statearr_34552_34615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (18))){
var inst_34382 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34382)){
var statearr_34553_34616 = state_34475__$1;
(statearr_34553_34616[(1)] = (19));

} else {
var statearr_34554_34617 = state_34475__$1;
(statearr_34554_34617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (42))){
var state_34475__$1 = state_34475;
var statearr_34555_34618 = state_34475__$1;
(statearr_34555_34618[(2)] = null);

(statearr_34555_34618[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (37))){
var inst_34441 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34556_34619 = state_34475__$1;
(statearr_34556_34619[(2)] = inst_34441);

(statearr_34556_34619[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (8))){
var inst_34335 = (state_34475[(10)]);
var inst_34348 = (state_34475[(22)]);
var inst_34348__$1 = cljs.core.seq.call(null,inst_34335);
var state_34475__$1 = (function (){var statearr_34557 = state_34475;
(statearr_34557[(22)] = inst_34348__$1);

return statearr_34557;
})();
if(inst_34348__$1){
var statearr_34558_34620 = state_34475__$1;
(statearr_34558_34620[(1)] = (10));

} else {
var statearr_34559_34621 = state_34475__$1;
(statearr_34559_34621[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29034__auto__,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto____0 = (function (){
var statearr_34560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34560[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto__);

(statearr_34560[(1)] = (1));

return statearr_34560;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto____1 = (function (state_34475){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_34475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e34561){if((e34561 instanceof Object)){
var ex__29038__auto__ = e34561;
var statearr_34562_34622 = state_34475;
(statearr_34562_34622[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34623 = state_34475;
state_34475 = G__34623;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29203__auto__ = (function (){var statearr_34563 = f__29202__auto__.call(null);
(statearr_34563[(6)] = c__29201__auto__);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__,map__34320,map__34320__$1,opts,before_jsload,on_jsload,reload_dependents,map__34321,map__34321__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29201__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34626,link){
var map__34627 = p__34626;
var map__34627__$1 = (((((!((map__34627 == null))))?(((((map__34627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34627):map__34627);
var file = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__34627,map__34627__$1,file){
return (function (p1__34624_SHARP_,p2__34625_SHARP_){
if(cljs.core._EQ_.call(null,p1__34624_SHARP_,p2__34625_SHARP_)){
return p1__34624_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__34627,map__34627__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34630){
var map__34631 = p__34630;
var map__34631__$1 = (((((!((map__34631 == null))))?(((((map__34631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34631):map__34631);
var match_length = cljs.core.get.call(null,map__34631__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34631__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34629_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34629_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34633_SHARP_,p2__34634_SHARP_){
return cljs.core.assoc.call(null,p1__34633_SHARP_,cljs.core.get.call(null,p2__34634_SHARP_,key),p2__34634_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34635 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34635);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34635);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34636,p__34637){
var map__34638 = p__34636;
var map__34638__$1 = (((((!((map__34638 == null))))?(((((map__34638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34638):map__34638);
var on_cssload = cljs.core.get.call(null,map__34638__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34639 = p__34637;
var map__34639__$1 = (((((!((map__34639 == null))))?(((((map__34639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34639):map__34639);
var files_msg = map__34639__$1;
var files = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1580192144592
