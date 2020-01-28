// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37290){if((e37290 instanceof Error)){
var e = e37290;
return "Error: Unable to stringify";
} else {
throw e37290;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37293 = arguments.length;
switch (G__37293) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37291_SHARP_){
if(typeof p1__37291_SHARP_ === 'string'){
return p1__37291_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37291_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37296 = arguments.length;
var i__4731__auto___37297 = (0);
while(true){
if((i__4731__auto___37297 < len__4730__auto___37296)){
args__4736__auto__.push((arguments[i__4731__auto___37297]));

var G__37298 = (i__4731__auto___37297 + (1));
i__4731__auto___37297 = G__37298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37295));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37300 = arguments.length;
var i__4731__auto___37301 = (0);
while(true){
if((i__4731__auto___37301 < len__4730__auto___37300)){
args__4736__auto__.push((arguments[i__4731__auto___37301]));

var G__37302 = (i__4731__auto___37301 + (1));
i__4731__auto___37301 = G__37302;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37299){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37299));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37303){
var map__37304 = p__37303;
var map__37304__$1 = (((((!((map__37304 == null))))?(((((map__37304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37304):map__37304);
var message = cljs.core.get.call(null,map__37304__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37304__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29201__auto___37383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___37383,ch){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___37383,ch){
return (function (state_37355){
var state_val_37356 = (state_37355[(1)]);
if((state_val_37356 === (7))){
var inst_37351 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37357_37384 = state_37355__$1;
(statearr_37357_37384[(2)] = inst_37351);

(statearr_37357_37384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (1))){
var state_37355__$1 = state_37355;
var statearr_37358_37385 = state_37355__$1;
(statearr_37358_37385[(2)] = null);

(statearr_37358_37385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (4))){
var inst_37308 = (state_37355[(7)]);
var inst_37308__$1 = (state_37355[(2)]);
var state_37355__$1 = (function (){var statearr_37359 = state_37355;
(statearr_37359[(7)] = inst_37308__$1);

return statearr_37359;
})();
if(cljs.core.truth_(inst_37308__$1)){
var statearr_37360_37386 = state_37355__$1;
(statearr_37360_37386[(1)] = (5));

} else {
var statearr_37361_37387 = state_37355__$1;
(statearr_37361_37387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (15))){
var inst_37315 = (state_37355[(8)]);
var inst_37330 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37315);
var inst_37331 = cljs.core.first.call(null,inst_37330);
var inst_37332 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37331);
var inst_37333 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37332)].join('');
var inst_37334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37333);
var state_37355__$1 = state_37355;
var statearr_37362_37388 = state_37355__$1;
(statearr_37362_37388[(2)] = inst_37334);

(statearr_37362_37388[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (13))){
var inst_37339 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37363_37389 = state_37355__$1;
(statearr_37363_37389[(2)] = inst_37339);

(statearr_37363_37389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (6))){
var state_37355__$1 = state_37355;
var statearr_37364_37390 = state_37355__$1;
(statearr_37364_37390[(2)] = null);

(statearr_37364_37390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (17))){
var inst_37337 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37365_37391 = state_37355__$1;
(statearr_37365_37391[(2)] = inst_37337);

(statearr_37365_37391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (3))){
var inst_37353 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37355__$1,inst_37353);
} else {
if((state_val_37356 === (12))){
var inst_37314 = (state_37355[(9)]);
var inst_37328 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37314,opts);
var state_37355__$1 = state_37355;
if(inst_37328){
var statearr_37366_37392 = state_37355__$1;
(statearr_37366_37392[(1)] = (15));

} else {
var statearr_37367_37393 = state_37355__$1;
(statearr_37367_37393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (2))){
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37355__$1,(4),ch);
} else {
if((state_val_37356 === (11))){
var inst_37315 = (state_37355[(8)]);
var inst_37320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37321 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37315);
var inst_37322 = cljs.core.async.timeout.call(null,(1000));
var inst_37323 = [inst_37321,inst_37322];
var inst_37324 = (new cljs.core.PersistentVector(null,2,(5),inst_37320,inst_37323,null));
var state_37355__$1 = state_37355;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37355__$1,(14),inst_37324);
} else {
if((state_val_37356 === (9))){
var inst_37315 = (state_37355[(8)]);
var inst_37341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37342 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37315);
var inst_37343 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37342);
var inst_37344 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37343)].join('');
var inst_37345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37344);
var state_37355__$1 = (function (){var statearr_37368 = state_37355;
(statearr_37368[(10)] = inst_37341);

return statearr_37368;
})();
var statearr_37369_37394 = state_37355__$1;
(statearr_37369_37394[(2)] = inst_37345);

(statearr_37369_37394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (5))){
var inst_37308 = (state_37355[(7)]);
var inst_37310 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37311 = (new cljs.core.PersistentArrayMap(null,2,inst_37310,null));
var inst_37312 = (new cljs.core.PersistentHashSet(null,inst_37311,null));
var inst_37313 = figwheel.client.focus_msgs.call(null,inst_37312,inst_37308);
var inst_37314 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37313);
var inst_37315 = cljs.core.first.call(null,inst_37313);
var inst_37316 = figwheel.client.autoload_QMARK_.call(null);
var state_37355__$1 = (function (){var statearr_37370 = state_37355;
(statearr_37370[(8)] = inst_37315);

(statearr_37370[(9)] = inst_37314);

return statearr_37370;
})();
if(cljs.core.truth_(inst_37316)){
var statearr_37371_37395 = state_37355__$1;
(statearr_37371_37395[(1)] = (8));

} else {
var statearr_37372_37396 = state_37355__$1;
(statearr_37372_37396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (14))){
var inst_37326 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37373_37397 = state_37355__$1;
(statearr_37373_37397[(2)] = inst_37326);

(statearr_37373_37397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (16))){
var state_37355__$1 = state_37355;
var statearr_37374_37398 = state_37355__$1;
(statearr_37374_37398[(2)] = null);

(statearr_37374_37398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (10))){
var inst_37347 = (state_37355[(2)]);
var state_37355__$1 = (function (){var statearr_37375 = state_37355;
(statearr_37375[(11)] = inst_37347);

return statearr_37375;
})();
var statearr_37376_37399 = state_37355__$1;
(statearr_37376_37399[(2)] = null);

(statearr_37376_37399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (8))){
var inst_37314 = (state_37355[(9)]);
var inst_37318 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37314,opts);
var state_37355__$1 = state_37355;
if(cljs.core.truth_(inst_37318)){
var statearr_37377_37400 = state_37355__$1;
(statearr_37377_37400[(1)] = (11));

} else {
var statearr_37378_37401 = state_37355__$1;
(statearr_37378_37401[(1)] = (12));

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
});})(c__29201__auto___37383,ch))
;
return ((function (switch__29034__auto__,c__29201__auto___37383,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29035__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29035__auto____0 = (function (){
var statearr_37379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37379[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29035__auto__);

(statearr_37379[(1)] = (1));

return statearr_37379;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29035__auto____1 = (function (state_37355){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_37355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e37380){if((e37380 instanceof Object)){
var ex__29038__auto__ = e37380;
var statearr_37381_37402 = state_37355;
(statearr_37381_37402[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37403 = state_37355;
state_37355 = G__37403;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29035__auto__ = function(state_37355){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29035__auto____1.call(this,state_37355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29035__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29035__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___37383,ch))
})();
var state__29203__auto__ = (function (){var statearr_37382 = f__29202__auto__.call(null);
(statearr_37382[(6)] = c__29201__auto___37383);

return statearr_37382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___37383,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37404_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37404_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37410 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37410){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37406 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37407 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37408 = true;
var _STAR_print_fn_STAR__temp_val__37409 = ((function (_STAR_print_newline_STAR__orig_val__37406,_STAR_print_fn_STAR__orig_val__37407,_STAR_print_newline_STAR__temp_val__37408,sb,base_path_37410){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37406,_STAR_print_fn_STAR__orig_val__37407,_STAR_print_newline_STAR__temp_val__37408,sb,base_path_37410))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37408;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37409;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37407;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37406;
}}catch (e37405){if((e37405 instanceof Error)){
var e = e37405;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37410], null));
} else {
var e = e37405;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37410))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37411){
var map__37412 = p__37411;
var map__37412__$1 = (((((!((map__37412 == null))))?(((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37412):map__37412);
var opts = map__37412__$1;
var build_id = cljs.core.get.call(null,map__37412__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37412,map__37412__$1,opts,build_id){
return (function (p__37414){
var vec__37415 = p__37414;
var seq__37416 = cljs.core.seq.call(null,vec__37415);
var first__37417 = cljs.core.first.call(null,seq__37416);
var seq__37416__$1 = cljs.core.next.call(null,seq__37416);
var map__37418 = first__37417;
var map__37418__$1 = (((((!((map__37418 == null))))?(((((map__37418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37418):map__37418);
var msg = map__37418__$1;
var msg_name = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37416__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37415,seq__37416,first__37417,seq__37416__$1,map__37418,map__37418__$1,msg,msg_name,_,map__37412,map__37412__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37415,seq__37416,first__37417,seq__37416__$1,map__37418,map__37418__$1,msg,msg_name,_,map__37412,map__37412__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37412,map__37412__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37420){
var vec__37421 = p__37420;
var seq__37422 = cljs.core.seq.call(null,vec__37421);
var first__37423 = cljs.core.first.call(null,seq__37422);
var seq__37422__$1 = cljs.core.next.call(null,seq__37422);
var map__37424 = first__37423;
var map__37424__$1 = (((((!((map__37424 == null))))?(((((map__37424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37424):map__37424);
var msg = map__37424__$1;
var msg_name = cljs.core.get.call(null,map__37424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37422__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37426){
var map__37427 = p__37426;
var map__37427__$1 = (((((!((map__37427 == null))))?(((((map__37427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37427):map__37427);
var on_compile_warning = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37427,map__37427__$1,on_compile_warning,on_compile_fail){
return (function (p__37429){
var vec__37430 = p__37429;
var seq__37431 = cljs.core.seq.call(null,vec__37430);
var first__37432 = cljs.core.first.call(null,seq__37431);
var seq__37431__$1 = cljs.core.next.call(null,seq__37431);
var map__37433 = first__37432;
var map__37433__$1 = (((((!((map__37433 == null))))?(((((map__37433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37433):map__37433);
var msg = map__37433__$1;
var msg_name = cljs.core.get.call(null,map__37433__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37431__$1;
var pred__37435 = cljs.core._EQ_;
var expr__37436 = msg_name;
if(cljs.core.truth_(pred__37435.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37436))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37435.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37436))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37427,map__37427__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__,msg_hist,msg_names,msg){
return (function (state_37525){
var state_val_37526 = (state_37525[(1)]);
if((state_val_37526 === (7))){
var inst_37445 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
if(cljs.core.truth_(inst_37445)){
var statearr_37527_37574 = state_37525__$1;
(statearr_37527_37574[(1)] = (8));

} else {
var statearr_37528_37575 = state_37525__$1;
(statearr_37528_37575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (20))){
var inst_37519 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37529_37576 = state_37525__$1;
(statearr_37529_37576[(2)] = inst_37519);

(statearr_37529_37576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (27))){
var inst_37515 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37530_37577 = state_37525__$1;
(statearr_37530_37577[(2)] = inst_37515);

(statearr_37530_37577[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (1))){
var inst_37438 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37525__$1 = state_37525;
if(cljs.core.truth_(inst_37438)){
var statearr_37531_37578 = state_37525__$1;
(statearr_37531_37578[(1)] = (2));

} else {
var statearr_37532_37579 = state_37525__$1;
(statearr_37532_37579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (24))){
var inst_37517 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37533_37580 = state_37525__$1;
(statearr_37533_37580[(2)] = inst_37517);

(statearr_37533_37580[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (4))){
var inst_37523 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37525__$1,inst_37523);
} else {
if((state_val_37526 === (15))){
var inst_37521 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37534_37581 = state_37525__$1;
(statearr_37534_37581[(2)] = inst_37521);

(statearr_37534_37581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (21))){
var inst_37474 = (state_37525[(2)]);
var inst_37475 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37476 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37475);
var state_37525__$1 = (function (){var statearr_37535 = state_37525;
(statearr_37535[(7)] = inst_37474);

return statearr_37535;
})();
var statearr_37536_37582 = state_37525__$1;
(statearr_37536_37582[(2)] = inst_37476);

(statearr_37536_37582[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (31))){
var inst_37504 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37525__$1 = state_37525;
if(inst_37504){
var statearr_37537_37583 = state_37525__$1;
(statearr_37537_37583[(1)] = (34));

} else {
var statearr_37538_37584 = state_37525__$1;
(statearr_37538_37584[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (32))){
var inst_37513 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37539_37585 = state_37525__$1;
(statearr_37539_37585[(2)] = inst_37513);

(statearr_37539_37585[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (33))){
var inst_37500 = (state_37525[(2)]);
var inst_37501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37502 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37501);
var state_37525__$1 = (function (){var statearr_37540 = state_37525;
(statearr_37540[(8)] = inst_37500);

return statearr_37540;
})();
var statearr_37541_37586 = state_37525__$1;
(statearr_37541_37586[(2)] = inst_37502);

(statearr_37541_37586[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (13))){
var inst_37459 = figwheel.client.heads_up.clear.call(null);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(16),inst_37459);
} else {
if((state_val_37526 === (22))){
var inst_37480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37481 = figwheel.client.heads_up.append_warning_message.call(null,inst_37480);
var state_37525__$1 = state_37525;
var statearr_37542_37587 = state_37525__$1;
(statearr_37542_37587[(2)] = inst_37481);

(statearr_37542_37587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (36))){
var inst_37511 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37543_37588 = state_37525__$1;
(statearr_37543_37588[(2)] = inst_37511);

(statearr_37543_37588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (29))){
var inst_37491 = (state_37525[(2)]);
var inst_37492 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37493 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37492);
var state_37525__$1 = (function (){var statearr_37544 = state_37525;
(statearr_37544[(9)] = inst_37491);

return statearr_37544;
})();
var statearr_37545_37589 = state_37525__$1;
(statearr_37545_37589[(2)] = inst_37493);

(statearr_37545_37589[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (6))){
var inst_37440 = (state_37525[(10)]);
var state_37525__$1 = state_37525;
var statearr_37546_37590 = state_37525__$1;
(statearr_37546_37590[(2)] = inst_37440);

(statearr_37546_37590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (28))){
var inst_37487 = (state_37525[(2)]);
var inst_37488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37489 = figwheel.client.heads_up.display_warning.call(null,inst_37488);
var state_37525__$1 = (function (){var statearr_37547 = state_37525;
(statearr_37547[(11)] = inst_37487);

return statearr_37547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(29),inst_37489);
} else {
if((state_val_37526 === (25))){
var inst_37485 = figwheel.client.heads_up.clear.call(null);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(28),inst_37485);
} else {
if((state_val_37526 === (34))){
var inst_37506 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(37),inst_37506);
} else {
if((state_val_37526 === (17))){
var inst_37465 = (state_37525[(2)]);
var inst_37466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37467 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37466);
var state_37525__$1 = (function (){var statearr_37548 = state_37525;
(statearr_37548[(12)] = inst_37465);

return statearr_37548;
})();
var statearr_37549_37591 = state_37525__$1;
(statearr_37549_37591[(2)] = inst_37467);

(statearr_37549_37591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (3))){
var inst_37457 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37525__$1 = state_37525;
if(inst_37457){
var statearr_37550_37592 = state_37525__$1;
(statearr_37550_37592[(1)] = (13));

} else {
var statearr_37551_37593 = state_37525__$1;
(statearr_37551_37593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (12))){
var inst_37453 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37552_37594 = state_37525__$1;
(statearr_37552_37594[(2)] = inst_37453);

(statearr_37552_37594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (2))){
var inst_37440 = (state_37525[(10)]);
var inst_37440__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37525__$1 = (function (){var statearr_37553 = state_37525;
(statearr_37553[(10)] = inst_37440__$1);

return statearr_37553;
})();
if(cljs.core.truth_(inst_37440__$1)){
var statearr_37554_37595 = state_37525__$1;
(statearr_37554_37595[(1)] = (5));

} else {
var statearr_37555_37596 = state_37525__$1;
(statearr_37555_37596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (23))){
var inst_37483 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37525__$1 = state_37525;
if(inst_37483){
var statearr_37556_37597 = state_37525__$1;
(statearr_37556_37597[(1)] = (25));

} else {
var statearr_37557_37598 = state_37525__$1;
(statearr_37557_37598[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (35))){
var state_37525__$1 = state_37525;
var statearr_37558_37599 = state_37525__$1;
(statearr_37558_37599[(2)] = null);

(statearr_37558_37599[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (19))){
var inst_37478 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37525__$1 = state_37525;
if(inst_37478){
var statearr_37559_37600 = state_37525__$1;
(statearr_37559_37600[(1)] = (22));

} else {
var statearr_37560_37601 = state_37525__$1;
(statearr_37560_37601[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (11))){
var inst_37449 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37561_37602 = state_37525__$1;
(statearr_37561_37602[(2)] = inst_37449);

(statearr_37561_37602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (9))){
var inst_37451 = figwheel.client.heads_up.clear.call(null);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(12),inst_37451);
} else {
if((state_val_37526 === (5))){
var inst_37442 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37525__$1 = state_37525;
var statearr_37562_37603 = state_37525__$1;
(statearr_37562_37603[(2)] = inst_37442);

(statearr_37562_37603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (14))){
var inst_37469 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37525__$1 = state_37525;
if(inst_37469){
var statearr_37563_37604 = state_37525__$1;
(statearr_37563_37604[(1)] = (18));

} else {
var statearr_37564_37605 = state_37525__$1;
(statearr_37564_37605[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (26))){
var inst_37495 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37525__$1 = state_37525;
if(inst_37495){
var statearr_37565_37606 = state_37525__$1;
(statearr_37565_37606[(1)] = (30));

} else {
var statearr_37566_37607 = state_37525__$1;
(statearr_37566_37607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (16))){
var inst_37461 = (state_37525[(2)]);
var inst_37462 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37463 = figwheel.client.heads_up.display_exception.call(null,inst_37462);
var state_37525__$1 = (function (){var statearr_37567 = state_37525;
(statearr_37567[(13)] = inst_37461);

return statearr_37567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(17),inst_37463);
} else {
if((state_val_37526 === (30))){
var inst_37497 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37498 = figwheel.client.heads_up.display_warning.call(null,inst_37497);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(33),inst_37498);
} else {
if((state_val_37526 === (10))){
var inst_37455 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37568_37608 = state_37525__$1;
(statearr_37568_37608[(2)] = inst_37455);

(statearr_37568_37608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (18))){
var inst_37471 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37472 = figwheel.client.heads_up.display_exception.call(null,inst_37471);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(21),inst_37472);
} else {
if((state_val_37526 === (37))){
var inst_37508 = (state_37525[(2)]);
var state_37525__$1 = state_37525;
var statearr_37569_37609 = state_37525__$1;
(statearr_37569_37609[(2)] = inst_37508);

(statearr_37569_37609[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37526 === (8))){
var inst_37447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37525__$1 = state_37525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37525__$1,(11),inst_37447);
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
});})(c__29201__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29034__auto__,c__29201__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto____0 = (function (){
var statearr_37570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37570[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto__);

(statearr_37570[(1)] = (1));

return statearr_37570;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto____1 = (function (state_37525){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_37525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e37571){if((e37571 instanceof Object)){
var ex__29038__auto__ = e37571;
var statearr_37572_37610 = state_37525;
(statearr_37572_37610[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37611 = state_37525;
state_37525 = G__37611;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto__ = function(state_37525){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto____1.call(this,state_37525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__,msg_hist,msg_names,msg))
})();
var state__29203__auto__ = (function (){var statearr_37573 = f__29202__auto__.call(null);
(statearr_37573[(6)] = c__29201__auto__);

return statearr_37573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__,msg_hist,msg_names,msg))
);

return c__29201__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29201__auto___37640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___37640,ch){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___37640,ch){
return (function (state_37626){
var state_val_37627 = (state_37626[(1)]);
if((state_val_37627 === (1))){
var state_37626__$1 = state_37626;
var statearr_37628_37641 = state_37626__$1;
(statearr_37628_37641[(2)] = null);

(statearr_37628_37641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37627 === (2))){
var state_37626__$1 = state_37626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37626__$1,(4),ch);
} else {
if((state_val_37627 === (3))){
var inst_37624 = (state_37626[(2)]);
var state_37626__$1 = state_37626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37626__$1,inst_37624);
} else {
if((state_val_37627 === (4))){
var inst_37614 = (state_37626[(7)]);
var inst_37614__$1 = (state_37626[(2)]);
var state_37626__$1 = (function (){var statearr_37629 = state_37626;
(statearr_37629[(7)] = inst_37614__$1);

return statearr_37629;
})();
if(cljs.core.truth_(inst_37614__$1)){
var statearr_37630_37642 = state_37626__$1;
(statearr_37630_37642[(1)] = (5));

} else {
var statearr_37631_37643 = state_37626__$1;
(statearr_37631_37643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37627 === (5))){
var inst_37614 = (state_37626[(7)]);
var inst_37616 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37614);
var state_37626__$1 = state_37626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37626__$1,(8),inst_37616);
} else {
if((state_val_37627 === (6))){
var state_37626__$1 = state_37626;
var statearr_37632_37644 = state_37626__$1;
(statearr_37632_37644[(2)] = null);

(statearr_37632_37644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37627 === (7))){
var inst_37622 = (state_37626[(2)]);
var state_37626__$1 = state_37626;
var statearr_37633_37645 = state_37626__$1;
(statearr_37633_37645[(2)] = inst_37622);

(statearr_37633_37645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37627 === (8))){
var inst_37618 = (state_37626[(2)]);
var state_37626__$1 = (function (){var statearr_37634 = state_37626;
(statearr_37634[(8)] = inst_37618);

return statearr_37634;
})();
var statearr_37635_37646 = state_37626__$1;
(statearr_37635_37646[(2)] = null);

(statearr_37635_37646[(1)] = (2));


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
});})(c__29201__auto___37640,ch))
;
return ((function (switch__29034__auto__,c__29201__auto___37640,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29035__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29035__auto____0 = (function (){
var statearr_37636 = [null,null,null,null,null,null,null,null,null];
(statearr_37636[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29035__auto__);

(statearr_37636[(1)] = (1));

return statearr_37636;
});
var figwheel$client$heads_up_plugin_$_state_machine__29035__auto____1 = (function (state_37626){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_37626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e37637){if((e37637 instanceof Object)){
var ex__29038__auto__ = e37637;
var statearr_37638_37647 = state_37626;
(statearr_37638_37647[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37648 = state_37626;
state_37626 = G__37648;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29035__auto__ = function(state_37626){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29035__auto____1.call(this,state_37626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29035__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29035__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___37640,ch))
})();
var state__29203__auto__ = (function (){var statearr_37639 = f__29202__auto__.call(null);
(statearr_37639[(6)] = c__29201__auto___37640);

return statearr_37639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___37640,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__){
return (function (state_37654){
var state_val_37655 = (state_37654[(1)]);
if((state_val_37655 === (1))){
var inst_37649 = cljs.core.async.timeout.call(null,(3000));
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37654__$1,(2),inst_37649);
} else {
if((state_val_37655 === (2))){
var inst_37651 = (state_37654[(2)]);
var inst_37652 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37654__$1 = (function (){var statearr_37656 = state_37654;
(statearr_37656[(7)] = inst_37651);

return statearr_37656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37654__$1,inst_37652);
} else {
return null;
}
}
});})(c__29201__auto__))
;
return ((function (switch__29034__auto__,c__29201__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29035__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29035__auto____0 = (function (){
var statearr_37657 = [null,null,null,null,null,null,null,null];
(statearr_37657[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29035__auto__);

(statearr_37657[(1)] = (1));

return statearr_37657;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29035__auto____1 = (function (state_37654){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_37654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e37658){if((e37658 instanceof Object)){
var ex__29038__auto__ = e37658;
var statearr_37659_37661 = state_37654;
(statearr_37659_37661[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37662 = state_37654;
state_37654 = G__37662;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29035__auto__ = function(state_37654){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29035__auto____1.call(this,state_37654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29035__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29035__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__))
})();
var state__29203__auto__ = (function (){var statearr_37660 = f__29202__auto__.call(null);
(statearr_37660[(6)] = c__29201__auto__);

return statearr_37660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__))
);

return c__29201__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__,figwheel_version,temp__5720__auto__){
return (function (state_37669){
var state_val_37670 = (state_37669[(1)]);
if((state_val_37670 === (1))){
var inst_37663 = cljs.core.async.timeout.call(null,(2000));
var state_37669__$1 = state_37669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37669__$1,(2),inst_37663);
} else {
if((state_val_37670 === (2))){
var inst_37665 = (state_37669[(2)]);
var inst_37666 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37667 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37666);
var state_37669__$1 = (function (){var statearr_37671 = state_37669;
(statearr_37671[(7)] = inst_37665);

return statearr_37671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37669__$1,inst_37667);
} else {
return null;
}
}
});})(c__29201__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__29034__auto__,c__29201__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto____0 = (function (){
var statearr_37672 = [null,null,null,null,null,null,null,null];
(statearr_37672[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto__);

(statearr_37672[(1)] = (1));

return statearr_37672;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto____1 = (function (state_37669){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_37669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e37673){if((e37673 instanceof Object)){
var ex__29038__auto__ = e37673;
var statearr_37674_37676 = state_37669;
(statearr_37674_37676[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37677 = state_37669;
state_37669 = G__37677;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto__ = function(state_37669){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto____1.call(this,state_37669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__,figwheel_version,temp__5720__auto__))
})();
var state__29203__auto__ = (function (){var statearr_37675 = f__29202__auto__.call(null);
(statearr_37675[(6)] = c__29201__auto__);

return statearr_37675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__,figwheel_version,temp__5720__auto__))
);

return c__29201__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37678){
var map__37679 = p__37678;
var map__37679__$1 = (((((!((map__37679 == null))))?(((((map__37679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37679):map__37679);
var file = cljs.core.get.call(null,map__37679__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37679__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37679__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37681 = "";
var G__37681__$1 = (cljs.core.truth_(file)?[G__37681,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37681);
var G__37681__$2 = (cljs.core.truth_(line)?[G__37681__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37681__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__37681__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37681__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37682){
var map__37683 = p__37682;
var map__37683__$1 = (((((!((map__37683 == null))))?(((((map__37683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37683):map__37683);
var ed = map__37683__$1;
var exception_data = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37686 = (function (){var G__37685 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37685)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__37685;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37686);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37687){
var map__37688 = p__37687;
var map__37688__$1 = (((((!((map__37688 == null))))?(((((map__37688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37688):map__37688);
var w = map__37688__$1;
var message = cljs.core.get.call(null,map__37688__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37690 = cljs.core.seq.call(null,plugins);
var chunk__37691 = null;
var count__37692 = (0);
var i__37693 = (0);
while(true){
if((i__37693 < count__37692)){
var vec__37700 = cljs.core._nth.call(null,chunk__37691,i__37693);
var k = cljs.core.nth.call(null,vec__37700,(0),null);
var plugin = cljs.core.nth.call(null,vec__37700,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37706 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37690,chunk__37691,count__37692,i__37693,pl_37706,vec__37700,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37706.call(null,msg_hist);
});})(seq__37690,chunk__37691,count__37692,i__37693,pl_37706,vec__37700,k,plugin))
);
} else {
}


var G__37707 = seq__37690;
var G__37708 = chunk__37691;
var G__37709 = count__37692;
var G__37710 = (i__37693 + (1));
seq__37690 = G__37707;
chunk__37691 = G__37708;
count__37692 = G__37709;
i__37693 = G__37710;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37690);
if(temp__5720__auto__){
var seq__37690__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37690__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37690__$1);
var G__37711 = cljs.core.chunk_rest.call(null,seq__37690__$1);
var G__37712 = c__4550__auto__;
var G__37713 = cljs.core.count.call(null,c__4550__auto__);
var G__37714 = (0);
seq__37690 = G__37711;
chunk__37691 = G__37712;
count__37692 = G__37713;
i__37693 = G__37714;
continue;
} else {
var vec__37703 = cljs.core.first.call(null,seq__37690__$1);
var k = cljs.core.nth.call(null,vec__37703,(0),null);
var plugin = cljs.core.nth.call(null,vec__37703,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37715 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37690,chunk__37691,count__37692,i__37693,pl_37715,vec__37703,k,plugin,seq__37690__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37715.call(null,msg_hist);
});})(seq__37690,chunk__37691,count__37692,i__37693,pl_37715,vec__37703,k,plugin,seq__37690__$1,temp__5720__auto__))
);
} else {
}


var G__37716 = cljs.core.next.call(null,seq__37690__$1);
var G__37717 = null;
var G__37718 = (0);
var G__37719 = (0);
seq__37690 = G__37716;
chunk__37691 = G__37717;
count__37692 = G__37718;
i__37693 = G__37719;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37721 = arguments.length;
switch (G__37721) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37722_37727 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37723_37728 = null;
var count__37724_37729 = (0);
var i__37725_37730 = (0);
while(true){
if((i__37725_37730 < count__37724_37729)){
var msg_37731 = cljs.core._nth.call(null,chunk__37723_37728,i__37725_37730);
figwheel.client.socket.handle_incoming_message.call(null,msg_37731);


var G__37732 = seq__37722_37727;
var G__37733 = chunk__37723_37728;
var G__37734 = count__37724_37729;
var G__37735 = (i__37725_37730 + (1));
seq__37722_37727 = G__37732;
chunk__37723_37728 = G__37733;
count__37724_37729 = G__37734;
i__37725_37730 = G__37735;
continue;
} else {
var temp__5720__auto___37736 = cljs.core.seq.call(null,seq__37722_37727);
if(temp__5720__auto___37736){
var seq__37722_37737__$1 = temp__5720__auto___37736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37722_37737__$1)){
var c__4550__auto___37738 = cljs.core.chunk_first.call(null,seq__37722_37737__$1);
var G__37739 = cljs.core.chunk_rest.call(null,seq__37722_37737__$1);
var G__37740 = c__4550__auto___37738;
var G__37741 = cljs.core.count.call(null,c__4550__auto___37738);
var G__37742 = (0);
seq__37722_37727 = G__37739;
chunk__37723_37728 = G__37740;
count__37724_37729 = G__37741;
i__37725_37730 = G__37742;
continue;
} else {
var msg_37743 = cljs.core.first.call(null,seq__37722_37737__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37743);


var G__37744 = cljs.core.next.call(null,seq__37722_37737__$1);
var G__37745 = null;
var G__37746 = (0);
var G__37747 = (0);
seq__37722_37727 = G__37744;
chunk__37723_37728 = G__37745;
count__37724_37729 = G__37746;
i__37725_37730 = G__37747;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37752 = arguments.length;
var i__4731__auto___37753 = (0);
while(true){
if((i__4731__auto___37753 < len__4730__auto___37752)){
args__4736__auto__.push((arguments[i__4731__auto___37753]));

var G__37754 = (i__4731__auto___37753 + (1));
i__4731__auto___37753 = G__37754;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37749){
var map__37750 = p__37749;
var map__37750__$1 = (((((!((map__37750 == null))))?(((((map__37750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37750):map__37750);
var opts = map__37750__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37748){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37748));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37755){if((e37755 instanceof Error)){
var e = e37755;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37755;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37756){
var map__37757 = p__37756;
var map__37757__$1 = (((((!((map__37757 == null))))?(((((map__37757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37757):map__37757);
var msg_name = cljs.core.get.call(null,map__37757__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1580192147360
