// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31124 = arguments.length;
switch (G__31124) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31125 = (function (f,blockable,meta31126){
this.f = f;
this.blockable = blockable;
this.meta31126 = meta31126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31127,meta31126__$1){
var self__ = this;
var _31127__$1 = this;
return (new cljs.core.async.t_cljs$core$async31125(self__.f,self__.blockable,meta31126__$1));
});

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31127){
var self__ = this;
var _31127__$1 = this;
return self__.meta31126;
});

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31126","meta31126",333811632,null)], null);
});

cljs.core.async.t_cljs$core$async31125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31125";

cljs.core.async.t_cljs$core$async31125.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31125");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31125.
 */
cljs.core.async.__GT_t_cljs$core$async31125 = (function cljs$core$async$__GT_t_cljs$core$async31125(f__$1,blockable__$1,meta31126){
return (new cljs.core.async.t_cljs$core$async31125(f__$1,blockable__$1,meta31126));
});

}

return (new cljs.core.async.t_cljs$core$async31125(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31131 = arguments.length;
switch (G__31131) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31134 = arguments.length;
switch (G__31134) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31137 = arguments.length;
switch (G__31137) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31139 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31139);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31139,ret){
return (function (){
return fn1.call(null,val_31139);
});})(val_31139,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31141 = arguments.length;
switch (G__31141) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___31143 = n;
var x_31144 = (0);
while(true){
if((x_31144 < n__4607__auto___31143)){
(a[x_31144] = x_31144);

var G__31145 = (x_31144 + (1));
x_31144 = G__31145;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31146 = (function (flag,meta31147){
this.flag = flag;
this.meta31147 = meta31147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31148,meta31147__$1){
var self__ = this;
var _31148__$1 = this;
return (new cljs.core.async.t_cljs$core$async31146(self__.flag,meta31147__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31148){
var self__ = this;
var _31148__$1 = this;
return self__.meta31147;
});})(flag))
;

cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31146.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31147","meta31147",1868148959,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31146";

cljs.core.async.t_cljs$core$async31146.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31146");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31146.
 */
cljs.core.async.__GT_t_cljs$core$async31146 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31146(flag__$1,meta31147){
return (new cljs.core.async.t_cljs$core$async31146(flag__$1,meta31147));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31146(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31149 = (function (flag,cb,meta31150){
this.flag = flag;
this.cb = cb;
this.meta31150 = meta31150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31151,meta31150__$1){
var self__ = this;
var _31151__$1 = this;
return (new cljs.core.async.t_cljs$core$async31149(self__.flag,self__.cb,meta31150__$1));
});

cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31151){
var self__ = this;
var _31151__$1 = this;
return self__.meta31150;
});

cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31150","meta31150",1955243389,null)], null);
});

cljs.core.async.t_cljs$core$async31149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31149";

cljs.core.async.t_cljs$core$async31149.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31149");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31149.
 */
cljs.core.async.__GT_t_cljs$core$async31149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31149(flag__$1,cb__$1,meta31150){
return (new cljs.core.async.t_cljs$core$async31149(flag__$1,cb__$1,meta31150));
});

}

return (new cljs.core.async.t_cljs$core$async31149(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31152_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31152_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31153_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31153_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31154 = (i + (1));
i = G__31154;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31160 = arguments.length;
var i__4731__auto___31161 = (0);
while(true){
if((i__4731__auto___31161 < len__4730__auto___31160)){
args__4736__auto__.push((arguments[i__4731__auto___31161]));

var G__31162 = (i__4731__auto___31161 + (1));
i__4731__auto___31161 = G__31162;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31157){
var map__31158 = p__31157;
var map__31158__$1 = (((((!((map__31158 == null))))?(((((map__31158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31158):map__31158);
var opts = map__31158__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31155){
var G__31156 = cljs.core.first.call(null,seq31155);
var seq31155__$1 = cljs.core.next.call(null,seq31155);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31156,seq31155__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31164 = arguments.length;
switch (G__31164) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29201__auto___31210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___31210){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___31210){
return (function (state_31188){
var state_val_31189 = (state_31188[(1)]);
if((state_val_31189 === (7))){
var inst_31184 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31190_31211 = state_31188__$1;
(statearr_31190_31211[(2)] = inst_31184);

(statearr_31190_31211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (1))){
var state_31188__$1 = state_31188;
var statearr_31191_31212 = state_31188__$1;
(statearr_31191_31212[(2)] = null);

(statearr_31191_31212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (4))){
var inst_31167 = (state_31188[(7)]);
var inst_31167__$1 = (state_31188[(2)]);
var inst_31168 = (inst_31167__$1 == null);
var state_31188__$1 = (function (){var statearr_31192 = state_31188;
(statearr_31192[(7)] = inst_31167__$1);

return statearr_31192;
})();
if(cljs.core.truth_(inst_31168)){
var statearr_31193_31213 = state_31188__$1;
(statearr_31193_31213[(1)] = (5));

} else {
var statearr_31194_31214 = state_31188__$1;
(statearr_31194_31214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (13))){
var state_31188__$1 = state_31188;
var statearr_31195_31215 = state_31188__$1;
(statearr_31195_31215[(2)] = null);

(statearr_31195_31215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (6))){
var inst_31167 = (state_31188[(7)]);
var state_31188__$1 = state_31188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31188__$1,(11),to,inst_31167);
} else {
if((state_val_31189 === (3))){
var inst_31186 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31188__$1,inst_31186);
} else {
if((state_val_31189 === (12))){
var state_31188__$1 = state_31188;
var statearr_31196_31216 = state_31188__$1;
(statearr_31196_31216[(2)] = null);

(statearr_31196_31216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (2))){
var state_31188__$1 = state_31188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31188__$1,(4),from);
} else {
if((state_val_31189 === (11))){
var inst_31177 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
if(cljs.core.truth_(inst_31177)){
var statearr_31197_31217 = state_31188__$1;
(statearr_31197_31217[(1)] = (12));

} else {
var statearr_31198_31218 = state_31188__$1;
(statearr_31198_31218[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (9))){
var state_31188__$1 = state_31188;
var statearr_31199_31219 = state_31188__$1;
(statearr_31199_31219[(2)] = null);

(statearr_31199_31219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (5))){
var state_31188__$1 = state_31188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31200_31220 = state_31188__$1;
(statearr_31200_31220[(1)] = (8));

} else {
var statearr_31201_31221 = state_31188__$1;
(statearr_31201_31221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (14))){
var inst_31182 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31202_31222 = state_31188__$1;
(statearr_31202_31222[(2)] = inst_31182);

(statearr_31202_31222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (10))){
var inst_31174 = (state_31188[(2)]);
var state_31188__$1 = state_31188;
var statearr_31203_31223 = state_31188__$1;
(statearr_31203_31223[(2)] = inst_31174);

(statearr_31203_31223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31189 === (8))){
var inst_31171 = cljs.core.async.close_BANG_.call(null,to);
var state_31188__$1 = state_31188;
var statearr_31204_31224 = state_31188__$1;
(statearr_31204_31224[(2)] = inst_31171);

(statearr_31204_31224[(1)] = (10));


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
});})(c__29201__auto___31210))
;
return ((function (switch__29034__auto__,c__29201__auto___31210){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_31205 = [null,null,null,null,null,null,null,null];
(statearr_31205[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_31205[(1)] = (1));

return statearr_31205;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_31188){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31206){if((e31206 instanceof Object)){
var ex__29038__auto__ = e31206;
var statearr_31207_31225 = state_31188;
(statearr_31207_31225[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31226 = state_31188;
state_31188 = G__31226;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_31188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_31188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___31210))
})();
var state__29203__auto__ = (function (){var statearr_31208 = f__29202__auto__.call(null);
(statearr_31208[(6)] = c__29201__auto___31210);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___31210))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31227){
var vec__31228 = p__31227;
var v = cljs.core.nth.call(null,vec__31228,(0),null);
var p = cljs.core.nth.call(null,vec__31228,(1),null);
var job = vec__31228;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29201__auto___31399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___31399,res,vec__31228,v,p,job,jobs,results){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___31399,res,vec__31228,v,p,job,jobs,results){
return (function (state_31235){
var state_val_31236 = (state_31235[(1)]);
if((state_val_31236 === (1))){
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31235__$1,(2),res,v);
} else {
if((state_val_31236 === (2))){
var inst_31232 = (state_31235[(2)]);
var inst_31233 = cljs.core.async.close_BANG_.call(null,res);
var state_31235__$1 = (function (){var statearr_31237 = state_31235;
(statearr_31237[(7)] = inst_31232);

return statearr_31237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31235__$1,inst_31233);
} else {
return null;
}
}
});})(c__29201__auto___31399,res,vec__31228,v,p,job,jobs,results))
;
return ((function (switch__29034__auto__,c__29201__auto___31399,res,vec__31228,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0 = (function (){
var statearr_31238 = [null,null,null,null,null,null,null,null];
(statearr_31238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__);

(statearr_31238[(1)] = (1));

return statearr_31238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1 = (function (state_31235){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31239){if((e31239 instanceof Object)){
var ex__29038__auto__ = e31239;
var statearr_31240_31400 = state_31235;
(statearr_31240_31400[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31401 = state_31235;
state_31235 = G__31401;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___31399,res,vec__31228,v,p,job,jobs,results))
})();
var state__29203__auto__ = (function (){var statearr_31241 = f__29202__auto__.call(null);
(statearr_31241[(6)] = c__29201__auto___31399);

return statearr_31241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___31399,res,vec__31228,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31242){
var vec__31243 = p__31242;
var v = cljs.core.nth.call(null,vec__31243,(0),null);
var p = cljs.core.nth.call(null,vec__31243,(1),null);
var job = vec__31243;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___31402 = n;
var __31403 = (0);
while(true){
if((__31403 < n__4607__auto___31402)){
var G__31246_31404 = type;
var G__31246_31405__$1 = (((G__31246_31404 instanceof cljs.core.Keyword))?G__31246_31404.fqn:null);
switch (G__31246_31405__$1) {
case "compute":
var c__29201__auto___31407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31403,c__29201__auto___31407,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (__31403,c__29201__auto___31407,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async){
return (function (state_31259){
var state_val_31260 = (state_31259[(1)]);
if((state_val_31260 === (1))){
var state_31259__$1 = state_31259;
var statearr_31261_31408 = state_31259__$1;
(statearr_31261_31408[(2)] = null);

(statearr_31261_31408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (2))){
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31259__$1,(4),jobs);
} else {
if((state_val_31260 === (3))){
var inst_31257 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31259__$1,inst_31257);
} else {
if((state_val_31260 === (4))){
var inst_31249 = (state_31259[(2)]);
var inst_31250 = process.call(null,inst_31249);
var state_31259__$1 = state_31259;
if(cljs.core.truth_(inst_31250)){
var statearr_31262_31409 = state_31259__$1;
(statearr_31262_31409[(1)] = (5));

} else {
var statearr_31263_31410 = state_31259__$1;
(statearr_31263_31410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (5))){
var state_31259__$1 = state_31259;
var statearr_31264_31411 = state_31259__$1;
(statearr_31264_31411[(2)] = null);

(statearr_31264_31411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (6))){
var state_31259__$1 = state_31259;
var statearr_31265_31412 = state_31259__$1;
(statearr_31265_31412[(2)] = null);

(statearr_31265_31412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (7))){
var inst_31255 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31266_31413 = state_31259__$1;
(statearr_31266_31413[(2)] = inst_31255);

(statearr_31266_31413[(1)] = (3));


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
});})(__31403,c__29201__auto___31407,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async))
;
return ((function (__31403,switch__29034__auto__,c__29201__auto___31407,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null];
(statearr_31267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1 = (function (state_31259){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31268){if((e31268 instanceof Object)){
var ex__29038__auto__ = e31268;
var statearr_31269_31414 = state_31259;
(statearr_31269_31414[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31415 = state_31259;
state_31259 = G__31415;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = function(state_31259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1.call(this,state_31259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__;
})()
;})(__31403,switch__29034__auto__,c__29201__auto___31407,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async))
})();
var state__29203__auto__ = (function (){var statearr_31270 = f__29202__auto__.call(null);
(statearr_31270[(6)] = c__29201__auto___31407);

return statearr_31270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(__31403,c__29201__auto___31407,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async))
);


break;
case "async":
var c__29201__auto___31416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31403,c__29201__auto___31416,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (__31403,c__29201__auto___31416,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async){
return (function (state_31283){
var state_val_31284 = (state_31283[(1)]);
if((state_val_31284 === (1))){
var state_31283__$1 = state_31283;
var statearr_31285_31417 = state_31283__$1;
(statearr_31285_31417[(2)] = null);

(statearr_31285_31417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (2))){
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31283__$1,(4),jobs);
} else {
if((state_val_31284 === (3))){
var inst_31281 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31283__$1,inst_31281);
} else {
if((state_val_31284 === (4))){
var inst_31273 = (state_31283[(2)]);
var inst_31274 = async.call(null,inst_31273);
var state_31283__$1 = state_31283;
if(cljs.core.truth_(inst_31274)){
var statearr_31286_31418 = state_31283__$1;
(statearr_31286_31418[(1)] = (5));

} else {
var statearr_31287_31419 = state_31283__$1;
(statearr_31287_31419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (5))){
var state_31283__$1 = state_31283;
var statearr_31288_31420 = state_31283__$1;
(statearr_31288_31420[(2)] = null);

(statearr_31288_31420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (6))){
var state_31283__$1 = state_31283;
var statearr_31289_31421 = state_31283__$1;
(statearr_31289_31421[(2)] = null);

(statearr_31289_31421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (7))){
var inst_31279 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31290_31422 = state_31283__$1;
(statearr_31290_31422[(2)] = inst_31279);

(statearr_31290_31422[(1)] = (3));


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
});})(__31403,c__29201__auto___31416,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async))
;
return ((function (__31403,switch__29034__auto__,c__29201__auto___31416,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0 = (function (){
var statearr_31291 = [null,null,null,null,null,null,null];
(statearr_31291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__);

(statearr_31291[(1)] = (1));

return statearr_31291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1 = (function (state_31283){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31292){if((e31292 instanceof Object)){
var ex__29038__auto__ = e31292;
var statearr_31293_31423 = state_31283;
(statearr_31293_31423[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31424 = state_31283;
state_31283 = G__31424;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = function(state_31283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1.call(this,state_31283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__;
})()
;})(__31403,switch__29034__auto__,c__29201__auto___31416,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async))
})();
var state__29203__auto__ = (function (){var statearr_31294 = f__29202__auto__.call(null);
(statearr_31294[(6)] = c__29201__auto___31416);

return statearr_31294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(__31403,c__29201__auto___31416,G__31246_31404,G__31246_31405__$1,n__4607__auto___31402,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31246_31405__$1)].join('')));

}

var G__31425 = (__31403 + (1));
__31403 = G__31425;
continue;
} else {
}
break;
}

var c__29201__auto___31426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___31426,jobs,results,process,async){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___31426,jobs,results,process,async){
return (function (state_31316){
var state_val_31317 = (state_31316[(1)]);
if((state_val_31317 === (7))){
var inst_31312 = (state_31316[(2)]);
var state_31316__$1 = state_31316;
var statearr_31318_31427 = state_31316__$1;
(statearr_31318_31427[(2)] = inst_31312);

(statearr_31318_31427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31317 === (1))){
var state_31316__$1 = state_31316;
var statearr_31319_31428 = state_31316__$1;
(statearr_31319_31428[(2)] = null);

(statearr_31319_31428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31317 === (4))){
var inst_31297 = (state_31316[(7)]);
var inst_31297__$1 = (state_31316[(2)]);
var inst_31298 = (inst_31297__$1 == null);
var state_31316__$1 = (function (){var statearr_31320 = state_31316;
(statearr_31320[(7)] = inst_31297__$1);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31298)){
var statearr_31321_31429 = state_31316__$1;
(statearr_31321_31429[(1)] = (5));

} else {
var statearr_31322_31430 = state_31316__$1;
(statearr_31322_31430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31317 === (6))){
var inst_31302 = (state_31316[(8)]);
var inst_31297 = (state_31316[(7)]);
var inst_31302__$1 = cljs.core.async.chan.call(null,(1));
var inst_31303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31304 = [inst_31297,inst_31302__$1];
var inst_31305 = (new cljs.core.PersistentVector(null,2,(5),inst_31303,inst_31304,null));
var state_31316__$1 = (function (){var statearr_31323 = state_31316;
(statearr_31323[(8)] = inst_31302__$1);

return statearr_31323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31316__$1,(8),jobs,inst_31305);
} else {
if((state_val_31317 === (3))){
var inst_31314 = (state_31316[(2)]);
var state_31316__$1 = state_31316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31316__$1,inst_31314);
} else {
if((state_val_31317 === (2))){
var state_31316__$1 = state_31316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31316__$1,(4),from);
} else {
if((state_val_31317 === (9))){
var inst_31309 = (state_31316[(2)]);
var state_31316__$1 = (function (){var statearr_31324 = state_31316;
(statearr_31324[(9)] = inst_31309);

return statearr_31324;
})();
var statearr_31325_31431 = state_31316__$1;
(statearr_31325_31431[(2)] = null);

(statearr_31325_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31317 === (5))){
var inst_31300 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31316__$1 = state_31316;
var statearr_31326_31432 = state_31316__$1;
(statearr_31326_31432[(2)] = inst_31300);

(statearr_31326_31432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31317 === (8))){
var inst_31302 = (state_31316[(8)]);
var inst_31307 = (state_31316[(2)]);
var state_31316__$1 = (function (){var statearr_31327 = state_31316;
(statearr_31327[(10)] = inst_31307);

return statearr_31327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31316__$1,(9),results,inst_31302);
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
});})(c__29201__auto___31426,jobs,results,process,async))
;
return ((function (switch__29034__auto__,c__29201__auto___31426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0 = (function (){
var statearr_31328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__);

(statearr_31328[(1)] = (1));

return statearr_31328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1 = (function (state_31316){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31329){if((e31329 instanceof Object)){
var ex__29038__auto__ = e31329;
var statearr_31330_31433 = state_31316;
(statearr_31330_31433[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31434 = state_31316;
state_31316 = G__31434;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = function(state_31316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1.call(this,state_31316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___31426,jobs,results,process,async))
})();
var state__29203__auto__ = (function (){var statearr_31331 = f__29202__auto__.call(null);
(statearr_31331[(6)] = c__29201__auto___31426);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___31426,jobs,results,process,async))
);


var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__,jobs,results,process,async){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__,jobs,results,process,async){
return (function (state_31369){
var state_val_31370 = (state_31369[(1)]);
if((state_val_31370 === (7))){
var inst_31365 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31371_31435 = state_31369__$1;
(statearr_31371_31435[(2)] = inst_31365);

(statearr_31371_31435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (20))){
var state_31369__$1 = state_31369;
var statearr_31372_31436 = state_31369__$1;
(statearr_31372_31436[(2)] = null);

(statearr_31372_31436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (1))){
var state_31369__$1 = state_31369;
var statearr_31373_31437 = state_31369__$1;
(statearr_31373_31437[(2)] = null);

(statearr_31373_31437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (4))){
var inst_31334 = (state_31369[(7)]);
var inst_31334__$1 = (state_31369[(2)]);
var inst_31335 = (inst_31334__$1 == null);
var state_31369__$1 = (function (){var statearr_31374 = state_31369;
(statearr_31374[(7)] = inst_31334__$1);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31335)){
var statearr_31375_31438 = state_31369__$1;
(statearr_31375_31438[(1)] = (5));

} else {
var statearr_31376_31439 = state_31369__$1;
(statearr_31376_31439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (15))){
var inst_31347 = (state_31369[(8)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31369__$1,(18),to,inst_31347);
} else {
if((state_val_31370 === (21))){
var inst_31360 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31377_31440 = state_31369__$1;
(statearr_31377_31440[(2)] = inst_31360);

(statearr_31377_31440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (13))){
var inst_31362 = (state_31369[(2)]);
var state_31369__$1 = (function (){var statearr_31378 = state_31369;
(statearr_31378[(9)] = inst_31362);

return statearr_31378;
})();
var statearr_31379_31441 = state_31369__$1;
(statearr_31379_31441[(2)] = null);

(statearr_31379_31441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (6))){
var inst_31334 = (state_31369[(7)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31369__$1,(11),inst_31334);
} else {
if((state_val_31370 === (17))){
var inst_31355 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31355)){
var statearr_31380_31442 = state_31369__$1;
(statearr_31380_31442[(1)] = (19));

} else {
var statearr_31381_31443 = state_31369__$1;
(statearr_31381_31443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (3))){
var inst_31367 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31369__$1,inst_31367);
} else {
if((state_val_31370 === (12))){
var inst_31344 = (state_31369[(10)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31369__$1,(14),inst_31344);
} else {
if((state_val_31370 === (2))){
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31369__$1,(4),results);
} else {
if((state_val_31370 === (19))){
var state_31369__$1 = state_31369;
var statearr_31382_31444 = state_31369__$1;
(statearr_31382_31444[(2)] = null);

(statearr_31382_31444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (11))){
var inst_31344 = (state_31369[(2)]);
var state_31369__$1 = (function (){var statearr_31383 = state_31369;
(statearr_31383[(10)] = inst_31344);

return statearr_31383;
})();
var statearr_31384_31445 = state_31369__$1;
(statearr_31384_31445[(2)] = null);

(statearr_31384_31445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (9))){
var state_31369__$1 = state_31369;
var statearr_31385_31446 = state_31369__$1;
(statearr_31385_31446[(2)] = null);

(statearr_31385_31446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (5))){
var state_31369__$1 = state_31369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31386_31447 = state_31369__$1;
(statearr_31386_31447[(1)] = (8));

} else {
var statearr_31387_31448 = state_31369__$1;
(statearr_31387_31448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (14))){
var inst_31347 = (state_31369[(8)]);
var inst_31349 = (state_31369[(11)]);
var inst_31347__$1 = (state_31369[(2)]);
var inst_31348 = (inst_31347__$1 == null);
var inst_31349__$1 = cljs.core.not.call(null,inst_31348);
var state_31369__$1 = (function (){var statearr_31388 = state_31369;
(statearr_31388[(8)] = inst_31347__$1);

(statearr_31388[(11)] = inst_31349__$1);

return statearr_31388;
})();
if(inst_31349__$1){
var statearr_31389_31449 = state_31369__$1;
(statearr_31389_31449[(1)] = (15));

} else {
var statearr_31390_31450 = state_31369__$1;
(statearr_31390_31450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (16))){
var inst_31349 = (state_31369[(11)]);
var state_31369__$1 = state_31369;
var statearr_31391_31451 = state_31369__$1;
(statearr_31391_31451[(2)] = inst_31349);

(statearr_31391_31451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (10))){
var inst_31341 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31392_31452 = state_31369__$1;
(statearr_31392_31452[(2)] = inst_31341);

(statearr_31392_31452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (18))){
var inst_31352 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31393_31453 = state_31369__$1;
(statearr_31393_31453[(2)] = inst_31352);

(statearr_31393_31453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (8))){
var inst_31338 = cljs.core.async.close_BANG_.call(null,to);
var state_31369__$1 = state_31369;
var statearr_31394_31454 = state_31369__$1;
(statearr_31394_31454[(2)] = inst_31338);

(statearr_31394_31454[(1)] = (10));


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
});})(c__29201__auto__,jobs,results,process,async))
;
return ((function (switch__29034__auto__,c__29201__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0 = (function (){
var statearr_31395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__);

(statearr_31395[(1)] = (1));

return statearr_31395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1 = (function (state_31369){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31396){if((e31396 instanceof Object)){
var ex__29038__auto__ = e31396;
var statearr_31397_31455 = state_31369;
(statearr_31397_31455[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31456 = state_31369;
state_31369 = G__31456;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__ = function(state_31369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1.call(this,state_31369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__,jobs,results,process,async))
})();
var state__29203__auto__ = (function (){var statearr_31398 = f__29202__auto__.call(null);
(statearr_31398[(6)] = c__29201__auto__);

return statearr_31398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__,jobs,results,process,async))
);

return c__29201__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31458 = arguments.length;
switch (G__31458) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31461 = arguments.length;
switch (G__31461) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31464 = arguments.length;
switch (G__31464) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29201__auto___31513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___31513,tc,fc){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___31513,tc,fc){
return (function (state_31490){
var state_val_31491 = (state_31490[(1)]);
if((state_val_31491 === (7))){
var inst_31486 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31492_31514 = state_31490__$1;
(statearr_31492_31514[(2)] = inst_31486);

(statearr_31492_31514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (1))){
var state_31490__$1 = state_31490;
var statearr_31493_31515 = state_31490__$1;
(statearr_31493_31515[(2)] = null);

(statearr_31493_31515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (4))){
var inst_31467 = (state_31490[(7)]);
var inst_31467__$1 = (state_31490[(2)]);
var inst_31468 = (inst_31467__$1 == null);
var state_31490__$1 = (function (){var statearr_31494 = state_31490;
(statearr_31494[(7)] = inst_31467__$1);

return statearr_31494;
})();
if(cljs.core.truth_(inst_31468)){
var statearr_31495_31516 = state_31490__$1;
(statearr_31495_31516[(1)] = (5));

} else {
var statearr_31496_31517 = state_31490__$1;
(statearr_31496_31517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (13))){
var state_31490__$1 = state_31490;
var statearr_31497_31518 = state_31490__$1;
(statearr_31497_31518[(2)] = null);

(statearr_31497_31518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (6))){
var inst_31467 = (state_31490[(7)]);
var inst_31473 = p.call(null,inst_31467);
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31473)){
var statearr_31498_31519 = state_31490__$1;
(statearr_31498_31519[(1)] = (9));

} else {
var statearr_31499_31520 = state_31490__$1;
(statearr_31499_31520[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (3))){
var inst_31488 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31490__$1,inst_31488);
} else {
if((state_val_31491 === (12))){
var state_31490__$1 = state_31490;
var statearr_31500_31521 = state_31490__$1;
(statearr_31500_31521[(2)] = null);

(statearr_31500_31521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (2))){
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31490__$1,(4),ch);
} else {
if((state_val_31491 === (11))){
var inst_31467 = (state_31490[(7)]);
var inst_31477 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31490__$1,(8),inst_31477,inst_31467);
} else {
if((state_val_31491 === (9))){
var state_31490__$1 = state_31490;
var statearr_31501_31522 = state_31490__$1;
(statearr_31501_31522[(2)] = tc);

(statearr_31501_31522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (5))){
var inst_31470 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31471 = cljs.core.async.close_BANG_.call(null,fc);
var state_31490__$1 = (function (){var statearr_31502 = state_31490;
(statearr_31502[(8)] = inst_31470);

return statearr_31502;
})();
var statearr_31503_31523 = state_31490__$1;
(statearr_31503_31523[(2)] = inst_31471);

(statearr_31503_31523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (14))){
var inst_31484 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31504_31524 = state_31490__$1;
(statearr_31504_31524[(2)] = inst_31484);

(statearr_31504_31524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (10))){
var state_31490__$1 = state_31490;
var statearr_31505_31525 = state_31490__$1;
(statearr_31505_31525[(2)] = fc);

(statearr_31505_31525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (8))){
var inst_31479 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31479)){
var statearr_31506_31526 = state_31490__$1;
(statearr_31506_31526[(1)] = (12));

} else {
var statearr_31507_31527 = state_31490__$1;
(statearr_31507_31527[(1)] = (13));

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
});})(c__29201__auto___31513,tc,fc))
;
return ((function (switch__29034__auto__,c__29201__auto___31513,tc,fc){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_31508 = [null,null,null,null,null,null,null,null,null];
(statearr_31508[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_31508[(1)] = (1));

return statearr_31508;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_31490){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31509){if((e31509 instanceof Object)){
var ex__29038__auto__ = e31509;
var statearr_31510_31528 = state_31490;
(statearr_31510_31528[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31529 = state_31490;
state_31490 = G__31529;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_31490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_31490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___31513,tc,fc))
})();
var state__29203__auto__ = (function (){var statearr_31511 = f__29202__auto__.call(null);
(statearr_31511[(6)] = c__29201__auto___31513);

return statearr_31511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___31513,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__){
return (function (state_31550){
var state_val_31551 = (state_31550[(1)]);
if((state_val_31551 === (7))){
var inst_31546 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31552_31570 = state_31550__$1;
(statearr_31552_31570[(2)] = inst_31546);

(statearr_31552_31570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (1))){
var inst_31530 = init;
var state_31550__$1 = (function (){var statearr_31553 = state_31550;
(statearr_31553[(7)] = inst_31530);

return statearr_31553;
})();
var statearr_31554_31571 = state_31550__$1;
(statearr_31554_31571[(2)] = null);

(statearr_31554_31571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (4))){
var inst_31533 = (state_31550[(8)]);
var inst_31533__$1 = (state_31550[(2)]);
var inst_31534 = (inst_31533__$1 == null);
var state_31550__$1 = (function (){var statearr_31555 = state_31550;
(statearr_31555[(8)] = inst_31533__$1);

return statearr_31555;
})();
if(cljs.core.truth_(inst_31534)){
var statearr_31556_31572 = state_31550__$1;
(statearr_31556_31572[(1)] = (5));

} else {
var statearr_31557_31573 = state_31550__$1;
(statearr_31557_31573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (6))){
var inst_31533 = (state_31550[(8)]);
var inst_31530 = (state_31550[(7)]);
var inst_31537 = (state_31550[(9)]);
var inst_31537__$1 = f.call(null,inst_31530,inst_31533);
var inst_31538 = cljs.core.reduced_QMARK_.call(null,inst_31537__$1);
var state_31550__$1 = (function (){var statearr_31558 = state_31550;
(statearr_31558[(9)] = inst_31537__$1);

return statearr_31558;
})();
if(inst_31538){
var statearr_31559_31574 = state_31550__$1;
(statearr_31559_31574[(1)] = (8));

} else {
var statearr_31560_31575 = state_31550__$1;
(statearr_31560_31575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (3))){
var inst_31548 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31550__$1,inst_31548);
} else {
if((state_val_31551 === (2))){
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31550__$1,(4),ch);
} else {
if((state_val_31551 === (9))){
var inst_31537 = (state_31550[(9)]);
var inst_31530 = inst_31537;
var state_31550__$1 = (function (){var statearr_31561 = state_31550;
(statearr_31561[(7)] = inst_31530);

return statearr_31561;
})();
var statearr_31562_31576 = state_31550__$1;
(statearr_31562_31576[(2)] = null);

(statearr_31562_31576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (5))){
var inst_31530 = (state_31550[(7)]);
var state_31550__$1 = state_31550;
var statearr_31563_31577 = state_31550__$1;
(statearr_31563_31577[(2)] = inst_31530);

(statearr_31563_31577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (10))){
var inst_31544 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31564_31578 = state_31550__$1;
(statearr_31564_31578[(2)] = inst_31544);

(statearr_31564_31578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (8))){
var inst_31537 = (state_31550[(9)]);
var inst_31540 = cljs.core.deref.call(null,inst_31537);
var state_31550__$1 = state_31550;
var statearr_31565_31579 = state_31550__$1;
(statearr_31565_31579[(2)] = inst_31540);

(statearr_31565_31579[(1)] = (10));


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
});})(c__29201__auto__))
;
return ((function (switch__29034__auto__,c__29201__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29035__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29035__auto____0 = (function (){
var statearr_31566 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31566[(0)] = cljs$core$async$reduce_$_state_machine__29035__auto__);

(statearr_31566[(1)] = (1));

return statearr_31566;
});
var cljs$core$async$reduce_$_state_machine__29035__auto____1 = (function (state_31550){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31567){if((e31567 instanceof Object)){
var ex__29038__auto__ = e31567;
var statearr_31568_31580 = state_31550;
(statearr_31568_31580[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31581 = state_31550;
state_31550 = G__31581;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29035__auto__ = function(state_31550){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29035__auto____1.call(this,state_31550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29035__auto____0;
cljs$core$async$reduce_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29035__auto____1;
return cljs$core$async$reduce_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__))
})();
var state__29203__auto__ = (function (){var statearr_31569 = f__29202__auto__.call(null);
(statearr_31569[(6)] = c__29201__auto__);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__))
);

return c__29201__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__,f__$1){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__,f__$1){
return (function (state_31587){
var state_val_31588 = (state_31587[(1)]);
if((state_val_31588 === (1))){
var inst_31582 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31587__$1,(2),inst_31582);
} else {
if((state_val_31588 === (2))){
var inst_31584 = (state_31587[(2)]);
var inst_31585 = f__$1.call(null,inst_31584);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31587__$1,inst_31585);
} else {
return null;
}
}
});})(c__29201__auto__,f__$1))
;
return ((function (switch__29034__auto__,c__29201__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29035__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29035__auto____0 = (function (){
var statearr_31589 = [null,null,null,null,null,null,null];
(statearr_31589[(0)] = cljs$core$async$transduce_$_state_machine__29035__auto__);

(statearr_31589[(1)] = (1));

return statearr_31589;
});
var cljs$core$async$transduce_$_state_machine__29035__auto____1 = (function (state_31587){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31590){if((e31590 instanceof Object)){
var ex__29038__auto__ = e31590;
var statearr_31591_31593 = state_31587;
(statearr_31591_31593[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31594 = state_31587;
state_31587 = G__31594;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29035__auto__ = function(state_31587){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29035__auto____1.call(this,state_31587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29035__auto____0;
cljs$core$async$transduce_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29035__auto____1;
return cljs$core$async$transduce_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__,f__$1))
})();
var state__29203__auto__ = (function (){var statearr_31592 = f__29202__auto__.call(null);
(statearr_31592[(6)] = c__29201__auto__);

return statearr_31592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__,f__$1))
);

return c__29201__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31596 = arguments.length;
switch (G__31596) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__){
return (function (state_31621){
var state_val_31622 = (state_31621[(1)]);
if((state_val_31622 === (7))){
var inst_31603 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31623_31644 = state_31621__$1;
(statearr_31623_31644[(2)] = inst_31603);

(statearr_31623_31644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (1))){
var inst_31597 = cljs.core.seq.call(null,coll);
var inst_31598 = inst_31597;
var state_31621__$1 = (function (){var statearr_31624 = state_31621;
(statearr_31624[(7)] = inst_31598);

return statearr_31624;
})();
var statearr_31625_31645 = state_31621__$1;
(statearr_31625_31645[(2)] = null);

(statearr_31625_31645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (4))){
var inst_31598 = (state_31621[(7)]);
var inst_31601 = cljs.core.first.call(null,inst_31598);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31621__$1,(7),ch,inst_31601);
} else {
if((state_val_31622 === (13))){
var inst_31615 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31626_31646 = state_31621__$1;
(statearr_31626_31646[(2)] = inst_31615);

(statearr_31626_31646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (6))){
var inst_31606 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31606)){
var statearr_31627_31647 = state_31621__$1;
(statearr_31627_31647[(1)] = (8));

} else {
var statearr_31628_31648 = state_31621__$1;
(statearr_31628_31648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (3))){
var inst_31619 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31621__$1,inst_31619);
} else {
if((state_val_31622 === (12))){
var state_31621__$1 = state_31621;
var statearr_31629_31649 = state_31621__$1;
(statearr_31629_31649[(2)] = null);

(statearr_31629_31649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (2))){
var inst_31598 = (state_31621[(7)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31598)){
var statearr_31630_31650 = state_31621__$1;
(statearr_31630_31650[(1)] = (4));

} else {
var statearr_31631_31651 = state_31621__$1;
(statearr_31631_31651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (11))){
var inst_31612 = cljs.core.async.close_BANG_.call(null,ch);
var state_31621__$1 = state_31621;
var statearr_31632_31652 = state_31621__$1;
(statearr_31632_31652[(2)] = inst_31612);

(statearr_31632_31652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (9))){
var state_31621__$1 = state_31621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31633_31653 = state_31621__$1;
(statearr_31633_31653[(1)] = (11));

} else {
var statearr_31634_31654 = state_31621__$1;
(statearr_31634_31654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (5))){
var inst_31598 = (state_31621[(7)]);
var state_31621__$1 = state_31621;
var statearr_31635_31655 = state_31621__$1;
(statearr_31635_31655[(2)] = inst_31598);

(statearr_31635_31655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (10))){
var inst_31617 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31636_31656 = state_31621__$1;
(statearr_31636_31656[(2)] = inst_31617);

(statearr_31636_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (8))){
var inst_31598 = (state_31621[(7)]);
var inst_31608 = cljs.core.next.call(null,inst_31598);
var inst_31598__$1 = inst_31608;
var state_31621__$1 = (function (){var statearr_31637 = state_31621;
(statearr_31637[(7)] = inst_31598__$1);

return statearr_31637;
})();
var statearr_31638_31657 = state_31621__$1;
(statearr_31638_31657[(2)] = null);

(statearr_31638_31657[(1)] = (2));


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
});})(c__29201__auto__))
;
return ((function (switch__29034__auto__,c__29201__auto__){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_31639 = [null,null,null,null,null,null,null,null];
(statearr_31639[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_31639[(1)] = (1));

return statearr_31639;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_31621){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31640){if((e31640 instanceof Object)){
var ex__29038__auto__ = e31640;
var statearr_31641_31658 = state_31621;
(statearr_31641_31658[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31659 = state_31621;
state_31621 = G__31659;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_31621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_31621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__))
})();
var state__29203__auto__ = (function (){var statearr_31642 = f__29202__auto__.call(null);
(statearr_31642[(6)] = c__29201__auto__);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__))
);

return c__29201__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31660 = (function (ch,cs,meta31661){
this.ch = ch;
this.cs = cs;
this.meta31661 = meta31661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31662,meta31661__$1){
var self__ = this;
var _31662__$1 = this;
return (new cljs.core.async.t_cljs$core$async31660(self__.ch,self__.cs,meta31661__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31662){
var self__ = this;
var _31662__$1 = this;
return self__.meta31661;
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31661","meta31661",-11255182,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31660";

cljs.core.async.t_cljs$core$async31660.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31660");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31660.
 */
cljs.core.async.__GT_t_cljs$core$async31660 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31660(ch__$1,cs__$1,meta31661){
return (new cljs.core.async.t_cljs$core$async31660(ch__$1,cs__$1,meta31661));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31660(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29201__auto___31882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___31882,cs,m,dchan,dctr,done){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___31882,cs,m,dchan,dctr,done){
return (function (state_31797){
var state_val_31798 = (state_31797[(1)]);
if((state_val_31798 === (7))){
var inst_31793 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31799_31883 = state_31797__$1;
(statearr_31799_31883[(2)] = inst_31793);

(statearr_31799_31883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (20))){
var inst_31696 = (state_31797[(7)]);
var inst_31708 = cljs.core.first.call(null,inst_31696);
var inst_31709 = cljs.core.nth.call(null,inst_31708,(0),null);
var inst_31710 = cljs.core.nth.call(null,inst_31708,(1),null);
var state_31797__$1 = (function (){var statearr_31800 = state_31797;
(statearr_31800[(8)] = inst_31709);

return statearr_31800;
})();
if(cljs.core.truth_(inst_31710)){
var statearr_31801_31884 = state_31797__$1;
(statearr_31801_31884[(1)] = (22));

} else {
var statearr_31802_31885 = state_31797__$1;
(statearr_31802_31885[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (27))){
var inst_31665 = (state_31797[(9)]);
var inst_31745 = (state_31797[(10)]);
var inst_31738 = (state_31797[(11)]);
var inst_31740 = (state_31797[(12)]);
var inst_31745__$1 = cljs.core._nth.call(null,inst_31738,inst_31740);
var inst_31746 = cljs.core.async.put_BANG_.call(null,inst_31745__$1,inst_31665,done);
var state_31797__$1 = (function (){var statearr_31803 = state_31797;
(statearr_31803[(10)] = inst_31745__$1);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31804_31886 = state_31797__$1;
(statearr_31804_31886[(1)] = (30));

} else {
var statearr_31805_31887 = state_31797__$1;
(statearr_31805_31887[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (1))){
var state_31797__$1 = state_31797;
var statearr_31806_31888 = state_31797__$1;
(statearr_31806_31888[(2)] = null);

(statearr_31806_31888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (24))){
var inst_31696 = (state_31797[(7)]);
var inst_31715 = (state_31797[(2)]);
var inst_31716 = cljs.core.next.call(null,inst_31696);
var inst_31674 = inst_31716;
var inst_31675 = null;
var inst_31676 = (0);
var inst_31677 = (0);
var state_31797__$1 = (function (){var statearr_31807 = state_31797;
(statearr_31807[(13)] = inst_31674);

(statearr_31807[(14)] = inst_31715);

(statearr_31807[(15)] = inst_31677);

(statearr_31807[(16)] = inst_31676);

(statearr_31807[(17)] = inst_31675);

return statearr_31807;
})();
var statearr_31808_31889 = state_31797__$1;
(statearr_31808_31889[(2)] = null);

(statearr_31808_31889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (39))){
var state_31797__$1 = state_31797;
var statearr_31812_31890 = state_31797__$1;
(statearr_31812_31890[(2)] = null);

(statearr_31812_31890[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (4))){
var inst_31665 = (state_31797[(9)]);
var inst_31665__$1 = (state_31797[(2)]);
var inst_31666 = (inst_31665__$1 == null);
var state_31797__$1 = (function (){var statearr_31813 = state_31797;
(statearr_31813[(9)] = inst_31665__$1);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31666)){
var statearr_31814_31891 = state_31797__$1;
(statearr_31814_31891[(1)] = (5));

} else {
var statearr_31815_31892 = state_31797__$1;
(statearr_31815_31892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (15))){
var inst_31674 = (state_31797[(13)]);
var inst_31677 = (state_31797[(15)]);
var inst_31676 = (state_31797[(16)]);
var inst_31675 = (state_31797[(17)]);
var inst_31692 = (state_31797[(2)]);
var inst_31693 = (inst_31677 + (1));
var tmp31809 = inst_31674;
var tmp31810 = inst_31676;
var tmp31811 = inst_31675;
var inst_31674__$1 = tmp31809;
var inst_31675__$1 = tmp31811;
var inst_31676__$1 = tmp31810;
var inst_31677__$1 = inst_31693;
var state_31797__$1 = (function (){var statearr_31816 = state_31797;
(statearr_31816[(13)] = inst_31674__$1);

(statearr_31816[(15)] = inst_31677__$1);

(statearr_31816[(16)] = inst_31676__$1);

(statearr_31816[(18)] = inst_31692);

(statearr_31816[(17)] = inst_31675__$1);

return statearr_31816;
})();
var statearr_31817_31893 = state_31797__$1;
(statearr_31817_31893[(2)] = null);

(statearr_31817_31893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (21))){
var inst_31719 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31821_31894 = state_31797__$1;
(statearr_31821_31894[(2)] = inst_31719);

(statearr_31821_31894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (31))){
var inst_31745 = (state_31797[(10)]);
var inst_31749 = done.call(null,null);
var inst_31750 = cljs.core.async.untap_STAR_.call(null,m,inst_31745);
var state_31797__$1 = (function (){var statearr_31822 = state_31797;
(statearr_31822[(19)] = inst_31749);

return statearr_31822;
})();
var statearr_31823_31895 = state_31797__$1;
(statearr_31823_31895[(2)] = inst_31750);

(statearr_31823_31895[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (32))){
var inst_31737 = (state_31797[(20)]);
var inst_31739 = (state_31797[(21)]);
var inst_31738 = (state_31797[(11)]);
var inst_31740 = (state_31797[(12)]);
var inst_31752 = (state_31797[(2)]);
var inst_31753 = (inst_31740 + (1));
var tmp31818 = inst_31737;
var tmp31819 = inst_31739;
var tmp31820 = inst_31738;
var inst_31737__$1 = tmp31818;
var inst_31738__$1 = tmp31820;
var inst_31739__$1 = tmp31819;
var inst_31740__$1 = inst_31753;
var state_31797__$1 = (function (){var statearr_31824 = state_31797;
(statearr_31824[(22)] = inst_31752);

(statearr_31824[(20)] = inst_31737__$1);

(statearr_31824[(21)] = inst_31739__$1);

(statearr_31824[(11)] = inst_31738__$1);

(statearr_31824[(12)] = inst_31740__$1);

return statearr_31824;
})();
var statearr_31825_31896 = state_31797__$1;
(statearr_31825_31896[(2)] = null);

(statearr_31825_31896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (40))){
var inst_31765 = (state_31797[(23)]);
var inst_31769 = done.call(null,null);
var inst_31770 = cljs.core.async.untap_STAR_.call(null,m,inst_31765);
var state_31797__$1 = (function (){var statearr_31826 = state_31797;
(statearr_31826[(24)] = inst_31769);

return statearr_31826;
})();
var statearr_31827_31897 = state_31797__$1;
(statearr_31827_31897[(2)] = inst_31770);

(statearr_31827_31897[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (33))){
var inst_31756 = (state_31797[(25)]);
var inst_31758 = cljs.core.chunked_seq_QMARK_.call(null,inst_31756);
var state_31797__$1 = state_31797;
if(inst_31758){
var statearr_31828_31898 = state_31797__$1;
(statearr_31828_31898[(1)] = (36));

} else {
var statearr_31829_31899 = state_31797__$1;
(statearr_31829_31899[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (13))){
var inst_31686 = (state_31797[(26)]);
var inst_31689 = cljs.core.async.close_BANG_.call(null,inst_31686);
var state_31797__$1 = state_31797;
var statearr_31830_31900 = state_31797__$1;
(statearr_31830_31900[(2)] = inst_31689);

(statearr_31830_31900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (22))){
var inst_31709 = (state_31797[(8)]);
var inst_31712 = cljs.core.async.close_BANG_.call(null,inst_31709);
var state_31797__$1 = state_31797;
var statearr_31831_31901 = state_31797__$1;
(statearr_31831_31901[(2)] = inst_31712);

(statearr_31831_31901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (36))){
var inst_31756 = (state_31797[(25)]);
var inst_31760 = cljs.core.chunk_first.call(null,inst_31756);
var inst_31761 = cljs.core.chunk_rest.call(null,inst_31756);
var inst_31762 = cljs.core.count.call(null,inst_31760);
var inst_31737 = inst_31761;
var inst_31738 = inst_31760;
var inst_31739 = inst_31762;
var inst_31740 = (0);
var state_31797__$1 = (function (){var statearr_31832 = state_31797;
(statearr_31832[(20)] = inst_31737);

(statearr_31832[(21)] = inst_31739);

(statearr_31832[(11)] = inst_31738);

(statearr_31832[(12)] = inst_31740);

return statearr_31832;
})();
var statearr_31833_31902 = state_31797__$1;
(statearr_31833_31902[(2)] = null);

(statearr_31833_31902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (41))){
var inst_31756 = (state_31797[(25)]);
var inst_31772 = (state_31797[(2)]);
var inst_31773 = cljs.core.next.call(null,inst_31756);
var inst_31737 = inst_31773;
var inst_31738 = null;
var inst_31739 = (0);
var inst_31740 = (0);
var state_31797__$1 = (function (){var statearr_31834 = state_31797;
(statearr_31834[(20)] = inst_31737);

(statearr_31834[(21)] = inst_31739);

(statearr_31834[(11)] = inst_31738);

(statearr_31834[(27)] = inst_31772);

(statearr_31834[(12)] = inst_31740);

return statearr_31834;
})();
var statearr_31835_31903 = state_31797__$1;
(statearr_31835_31903[(2)] = null);

(statearr_31835_31903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (43))){
var state_31797__$1 = state_31797;
var statearr_31836_31904 = state_31797__$1;
(statearr_31836_31904[(2)] = null);

(statearr_31836_31904[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (29))){
var inst_31781 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31837_31905 = state_31797__$1;
(statearr_31837_31905[(2)] = inst_31781);

(statearr_31837_31905[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (44))){
var inst_31790 = (state_31797[(2)]);
var state_31797__$1 = (function (){var statearr_31838 = state_31797;
(statearr_31838[(28)] = inst_31790);

return statearr_31838;
})();
var statearr_31839_31906 = state_31797__$1;
(statearr_31839_31906[(2)] = null);

(statearr_31839_31906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (6))){
var inst_31729 = (state_31797[(29)]);
var inst_31728 = cljs.core.deref.call(null,cs);
var inst_31729__$1 = cljs.core.keys.call(null,inst_31728);
var inst_31730 = cljs.core.count.call(null,inst_31729__$1);
var inst_31731 = cljs.core.reset_BANG_.call(null,dctr,inst_31730);
var inst_31736 = cljs.core.seq.call(null,inst_31729__$1);
var inst_31737 = inst_31736;
var inst_31738 = null;
var inst_31739 = (0);
var inst_31740 = (0);
var state_31797__$1 = (function (){var statearr_31840 = state_31797;
(statearr_31840[(20)] = inst_31737);

(statearr_31840[(30)] = inst_31731);

(statearr_31840[(21)] = inst_31739);

(statearr_31840[(29)] = inst_31729__$1);

(statearr_31840[(11)] = inst_31738);

(statearr_31840[(12)] = inst_31740);

return statearr_31840;
})();
var statearr_31841_31907 = state_31797__$1;
(statearr_31841_31907[(2)] = null);

(statearr_31841_31907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (28))){
var inst_31737 = (state_31797[(20)]);
var inst_31756 = (state_31797[(25)]);
var inst_31756__$1 = cljs.core.seq.call(null,inst_31737);
var state_31797__$1 = (function (){var statearr_31842 = state_31797;
(statearr_31842[(25)] = inst_31756__$1);

return statearr_31842;
})();
if(inst_31756__$1){
var statearr_31843_31908 = state_31797__$1;
(statearr_31843_31908[(1)] = (33));

} else {
var statearr_31844_31909 = state_31797__$1;
(statearr_31844_31909[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (25))){
var inst_31739 = (state_31797[(21)]);
var inst_31740 = (state_31797[(12)]);
var inst_31742 = (inst_31740 < inst_31739);
var inst_31743 = inst_31742;
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31743)){
var statearr_31845_31910 = state_31797__$1;
(statearr_31845_31910[(1)] = (27));

} else {
var statearr_31846_31911 = state_31797__$1;
(statearr_31846_31911[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (34))){
var state_31797__$1 = state_31797;
var statearr_31847_31912 = state_31797__$1;
(statearr_31847_31912[(2)] = null);

(statearr_31847_31912[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (17))){
var state_31797__$1 = state_31797;
var statearr_31848_31913 = state_31797__$1;
(statearr_31848_31913[(2)] = null);

(statearr_31848_31913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (3))){
var inst_31795 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31797__$1,inst_31795);
} else {
if((state_val_31798 === (12))){
var inst_31724 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31849_31914 = state_31797__$1;
(statearr_31849_31914[(2)] = inst_31724);

(statearr_31849_31914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (2))){
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(4),ch);
} else {
if((state_val_31798 === (23))){
var state_31797__$1 = state_31797;
var statearr_31850_31915 = state_31797__$1;
(statearr_31850_31915[(2)] = null);

(statearr_31850_31915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (35))){
var inst_31779 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31851_31916 = state_31797__$1;
(statearr_31851_31916[(2)] = inst_31779);

(statearr_31851_31916[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (19))){
var inst_31696 = (state_31797[(7)]);
var inst_31700 = cljs.core.chunk_first.call(null,inst_31696);
var inst_31701 = cljs.core.chunk_rest.call(null,inst_31696);
var inst_31702 = cljs.core.count.call(null,inst_31700);
var inst_31674 = inst_31701;
var inst_31675 = inst_31700;
var inst_31676 = inst_31702;
var inst_31677 = (0);
var state_31797__$1 = (function (){var statearr_31852 = state_31797;
(statearr_31852[(13)] = inst_31674);

(statearr_31852[(15)] = inst_31677);

(statearr_31852[(16)] = inst_31676);

(statearr_31852[(17)] = inst_31675);

return statearr_31852;
})();
var statearr_31853_31917 = state_31797__$1;
(statearr_31853_31917[(2)] = null);

(statearr_31853_31917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (11))){
var inst_31696 = (state_31797[(7)]);
var inst_31674 = (state_31797[(13)]);
var inst_31696__$1 = cljs.core.seq.call(null,inst_31674);
var state_31797__$1 = (function (){var statearr_31854 = state_31797;
(statearr_31854[(7)] = inst_31696__$1);

return statearr_31854;
})();
if(inst_31696__$1){
var statearr_31855_31918 = state_31797__$1;
(statearr_31855_31918[(1)] = (16));

} else {
var statearr_31856_31919 = state_31797__$1;
(statearr_31856_31919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (9))){
var inst_31726 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31857_31920 = state_31797__$1;
(statearr_31857_31920[(2)] = inst_31726);

(statearr_31857_31920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (5))){
var inst_31672 = cljs.core.deref.call(null,cs);
var inst_31673 = cljs.core.seq.call(null,inst_31672);
var inst_31674 = inst_31673;
var inst_31675 = null;
var inst_31676 = (0);
var inst_31677 = (0);
var state_31797__$1 = (function (){var statearr_31858 = state_31797;
(statearr_31858[(13)] = inst_31674);

(statearr_31858[(15)] = inst_31677);

(statearr_31858[(16)] = inst_31676);

(statearr_31858[(17)] = inst_31675);

return statearr_31858;
})();
var statearr_31859_31921 = state_31797__$1;
(statearr_31859_31921[(2)] = null);

(statearr_31859_31921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (14))){
var state_31797__$1 = state_31797;
var statearr_31860_31922 = state_31797__$1;
(statearr_31860_31922[(2)] = null);

(statearr_31860_31922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (45))){
var inst_31787 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31861_31923 = state_31797__$1;
(statearr_31861_31923[(2)] = inst_31787);

(statearr_31861_31923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (26))){
var inst_31729 = (state_31797[(29)]);
var inst_31783 = (state_31797[(2)]);
var inst_31784 = cljs.core.seq.call(null,inst_31729);
var state_31797__$1 = (function (){var statearr_31862 = state_31797;
(statearr_31862[(31)] = inst_31783);

return statearr_31862;
})();
if(inst_31784){
var statearr_31863_31924 = state_31797__$1;
(statearr_31863_31924[(1)] = (42));

} else {
var statearr_31864_31925 = state_31797__$1;
(statearr_31864_31925[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (16))){
var inst_31696 = (state_31797[(7)]);
var inst_31698 = cljs.core.chunked_seq_QMARK_.call(null,inst_31696);
var state_31797__$1 = state_31797;
if(inst_31698){
var statearr_31865_31926 = state_31797__$1;
(statearr_31865_31926[(1)] = (19));

} else {
var statearr_31866_31927 = state_31797__$1;
(statearr_31866_31927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (38))){
var inst_31776 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31867_31928 = state_31797__$1;
(statearr_31867_31928[(2)] = inst_31776);

(statearr_31867_31928[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (30))){
var state_31797__$1 = state_31797;
var statearr_31868_31929 = state_31797__$1;
(statearr_31868_31929[(2)] = null);

(statearr_31868_31929[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (10))){
var inst_31677 = (state_31797[(15)]);
var inst_31675 = (state_31797[(17)]);
var inst_31685 = cljs.core._nth.call(null,inst_31675,inst_31677);
var inst_31686 = cljs.core.nth.call(null,inst_31685,(0),null);
var inst_31687 = cljs.core.nth.call(null,inst_31685,(1),null);
var state_31797__$1 = (function (){var statearr_31869 = state_31797;
(statearr_31869[(26)] = inst_31686);

return statearr_31869;
})();
if(cljs.core.truth_(inst_31687)){
var statearr_31870_31930 = state_31797__$1;
(statearr_31870_31930[(1)] = (13));

} else {
var statearr_31871_31931 = state_31797__$1;
(statearr_31871_31931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (18))){
var inst_31722 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31872_31932 = state_31797__$1;
(statearr_31872_31932[(2)] = inst_31722);

(statearr_31872_31932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (42))){
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(45),dchan);
} else {
if((state_val_31798 === (37))){
var inst_31665 = (state_31797[(9)]);
var inst_31756 = (state_31797[(25)]);
var inst_31765 = (state_31797[(23)]);
var inst_31765__$1 = cljs.core.first.call(null,inst_31756);
var inst_31766 = cljs.core.async.put_BANG_.call(null,inst_31765__$1,inst_31665,done);
var state_31797__$1 = (function (){var statearr_31873 = state_31797;
(statearr_31873[(23)] = inst_31765__$1);

return statearr_31873;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31874_31933 = state_31797__$1;
(statearr_31874_31933[(1)] = (39));

} else {
var statearr_31875_31934 = state_31797__$1;
(statearr_31875_31934[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (8))){
var inst_31677 = (state_31797[(15)]);
var inst_31676 = (state_31797[(16)]);
var inst_31679 = (inst_31677 < inst_31676);
var inst_31680 = inst_31679;
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31680)){
var statearr_31876_31935 = state_31797__$1;
(statearr_31876_31935[(1)] = (10));

} else {
var statearr_31877_31936 = state_31797__$1;
(statearr_31877_31936[(1)] = (11));

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
});})(c__29201__auto___31882,cs,m,dchan,dctr,done))
;
return ((function (switch__29034__auto__,c__29201__auto___31882,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29035__auto__ = null;
var cljs$core$async$mult_$_state_machine__29035__auto____0 = (function (){
var statearr_31878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31878[(0)] = cljs$core$async$mult_$_state_machine__29035__auto__);

(statearr_31878[(1)] = (1));

return statearr_31878;
});
var cljs$core$async$mult_$_state_machine__29035__auto____1 = (function (state_31797){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_31797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e31879){if((e31879 instanceof Object)){
var ex__29038__auto__ = e31879;
var statearr_31880_31937 = state_31797;
(statearr_31880_31937[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31938 = state_31797;
state_31797 = G__31938;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29035__auto__ = function(state_31797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29035__auto____1.call(this,state_31797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29035__auto____0;
cljs$core$async$mult_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29035__auto____1;
return cljs$core$async$mult_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___31882,cs,m,dchan,dctr,done))
})();
var state__29203__auto__ = (function (){var statearr_31881 = f__29202__auto__.call(null);
(statearr_31881[(6)] = c__29201__auto___31882);

return statearr_31881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___31882,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31940 = arguments.length;
switch (G__31940) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31952 = arguments.length;
var i__4731__auto___31953 = (0);
while(true){
if((i__4731__auto___31953 < len__4730__auto___31952)){
args__4736__auto__.push((arguments[i__4731__auto___31953]));

var G__31954 = (i__4731__auto___31953 + (1));
i__4731__auto___31953 = G__31954;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31946){
var map__31947 = p__31946;
var map__31947__$1 = (((((!((map__31947 == null))))?(((((map__31947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31947):map__31947);
var opts = map__31947__$1;
var statearr_31949_31955 = state;
(statearr_31949_31955[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__31947,map__31947__$1,opts){
return (function (val){
var statearr_31950_31956 = state;
(statearr_31950_31956[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31947,map__31947__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31951_31957 = state;
(statearr_31951_31957[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31942){
var G__31943 = cljs.core.first.call(null,seq31942);
var seq31942__$1 = cljs.core.next.call(null,seq31942);
var G__31944 = cljs.core.first.call(null,seq31942__$1);
var seq31942__$2 = cljs.core.next.call(null,seq31942__$1);
var G__31945 = cljs.core.first.call(null,seq31942__$2);
var seq31942__$3 = cljs.core.next.call(null,seq31942__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31943,G__31944,G__31945,seq31942__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31958 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31959){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31959 = meta31959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31960,meta31959__$1){
var self__ = this;
var _31960__$1 = this;
return (new cljs.core.async.t_cljs$core$async31958(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31959__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31960){
var self__ = this;
var _31960__$1 = this;
return self__.meta31959;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31959","meta31959",131391010,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31958";

cljs.core.async.t_cljs$core$async31958.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31958");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31958.
 */
cljs.core.async.__GT_t_cljs$core$async31958 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31958(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31959){
return (new cljs.core.async.t_cljs$core$async31958(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31959));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31958(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29201__auto___32122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32062){
var state_val_32063 = (state_32062[(1)]);
if((state_val_32063 === (7))){
var inst_31977 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32064_32123 = state_32062__$1;
(statearr_32064_32123[(2)] = inst_31977);

(statearr_32064_32123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (20))){
var inst_31989 = (state_32062[(7)]);
var state_32062__$1 = state_32062;
var statearr_32065_32124 = state_32062__$1;
(statearr_32065_32124[(2)] = inst_31989);

(statearr_32065_32124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (27))){
var state_32062__$1 = state_32062;
var statearr_32066_32125 = state_32062__$1;
(statearr_32066_32125[(2)] = null);

(statearr_32066_32125[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (1))){
var inst_31964 = (state_32062[(8)]);
var inst_31964__$1 = calc_state.call(null);
var inst_31966 = (inst_31964__$1 == null);
var inst_31967 = cljs.core.not.call(null,inst_31966);
var state_32062__$1 = (function (){var statearr_32067 = state_32062;
(statearr_32067[(8)] = inst_31964__$1);

return statearr_32067;
})();
if(inst_31967){
var statearr_32068_32126 = state_32062__$1;
(statearr_32068_32126[(1)] = (2));

} else {
var statearr_32069_32127 = state_32062__$1;
(statearr_32069_32127[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (24))){
var inst_32036 = (state_32062[(9)]);
var inst_32022 = (state_32062[(10)]);
var inst_32013 = (state_32062[(11)]);
var inst_32036__$1 = inst_32013.call(null,inst_32022);
var state_32062__$1 = (function (){var statearr_32070 = state_32062;
(statearr_32070[(9)] = inst_32036__$1);

return statearr_32070;
})();
if(cljs.core.truth_(inst_32036__$1)){
var statearr_32071_32128 = state_32062__$1;
(statearr_32071_32128[(1)] = (29));

} else {
var statearr_32072_32129 = state_32062__$1;
(statearr_32072_32129[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (4))){
var inst_31980 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_31980)){
var statearr_32073_32130 = state_32062__$1;
(statearr_32073_32130[(1)] = (8));

} else {
var statearr_32074_32131 = state_32062__$1;
(statearr_32074_32131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (15))){
var inst_32007 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_32007)){
var statearr_32075_32132 = state_32062__$1;
(statearr_32075_32132[(1)] = (19));

} else {
var statearr_32076_32133 = state_32062__$1;
(statearr_32076_32133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (21))){
var inst_32012 = (state_32062[(12)]);
var inst_32012__$1 = (state_32062[(2)]);
var inst_32013 = cljs.core.get.call(null,inst_32012__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32014 = cljs.core.get.call(null,inst_32012__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32015 = cljs.core.get.call(null,inst_32012__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32062__$1 = (function (){var statearr_32077 = state_32062;
(statearr_32077[(13)] = inst_32014);

(statearr_32077[(12)] = inst_32012__$1);

(statearr_32077[(11)] = inst_32013);

return statearr_32077;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32062__$1,(22),inst_32015);
} else {
if((state_val_32063 === (31))){
var inst_32044 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_32044)){
var statearr_32078_32134 = state_32062__$1;
(statearr_32078_32134[(1)] = (32));

} else {
var statearr_32079_32135 = state_32062__$1;
(statearr_32079_32135[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (32))){
var inst_32021 = (state_32062[(14)]);
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32062__$1,(35),out,inst_32021);
} else {
if((state_val_32063 === (33))){
var inst_32012 = (state_32062[(12)]);
var inst_31989 = inst_32012;
var state_32062__$1 = (function (){var statearr_32080 = state_32062;
(statearr_32080[(7)] = inst_31989);

return statearr_32080;
})();
var statearr_32081_32136 = state_32062__$1;
(statearr_32081_32136[(2)] = null);

(statearr_32081_32136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (13))){
var inst_31989 = (state_32062[(7)]);
var inst_31996 = inst_31989.cljs$lang$protocol_mask$partition0$;
var inst_31997 = (inst_31996 & (64));
var inst_31998 = inst_31989.cljs$core$ISeq$;
var inst_31999 = (cljs.core.PROTOCOL_SENTINEL === inst_31998);
var inst_32000 = ((inst_31997) || (inst_31999));
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_32000)){
var statearr_32082_32137 = state_32062__$1;
(statearr_32082_32137[(1)] = (16));

} else {
var statearr_32083_32138 = state_32062__$1;
(statearr_32083_32138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (22))){
var inst_32021 = (state_32062[(14)]);
var inst_32022 = (state_32062[(10)]);
var inst_32020 = (state_32062[(2)]);
var inst_32021__$1 = cljs.core.nth.call(null,inst_32020,(0),null);
var inst_32022__$1 = cljs.core.nth.call(null,inst_32020,(1),null);
var inst_32023 = (inst_32021__$1 == null);
var inst_32024 = cljs.core._EQ_.call(null,inst_32022__$1,change);
var inst_32025 = ((inst_32023) || (inst_32024));
var state_32062__$1 = (function (){var statearr_32084 = state_32062;
(statearr_32084[(14)] = inst_32021__$1);

(statearr_32084[(10)] = inst_32022__$1);

return statearr_32084;
})();
if(cljs.core.truth_(inst_32025)){
var statearr_32085_32139 = state_32062__$1;
(statearr_32085_32139[(1)] = (23));

} else {
var statearr_32086_32140 = state_32062__$1;
(statearr_32086_32140[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (36))){
var inst_32012 = (state_32062[(12)]);
var inst_31989 = inst_32012;
var state_32062__$1 = (function (){var statearr_32087 = state_32062;
(statearr_32087[(7)] = inst_31989);

return statearr_32087;
})();
var statearr_32088_32141 = state_32062__$1;
(statearr_32088_32141[(2)] = null);

(statearr_32088_32141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (29))){
var inst_32036 = (state_32062[(9)]);
var state_32062__$1 = state_32062;
var statearr_32089_32142 = state_32062__$1;
(statearr_32089_32142[(2)] = inst_32036);

(statearr_32089_32142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (6))){
var state_32062__$1 = state_32062;
var statearr_32090_32143 = state_32062__$1;
(statearr_32090_32143[(2)] = false);

(statearr_32090_32143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (28))){
var inst_32032 = (state_32062[(2)]);
var inst_32033 = calc_state.call(null);
var inst_31989 = inst_32033;
var state_32062__$1 = (function (){var statearr_32091 = state_32062;
(statearr_32091[(15)] = inst_32032);

(statearr_32091[(7)] = inst_31989);

return statearr_32091;
})();
var statearr_32092_32144 = state_32062__$1;
(statearr_32092_32144[(2)] = null);

(statearr_32092_32144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (25))){
var inst_32058 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32093_32145 = state_32062__$1;
(statearr_32093_32145[(2)] = inst_32058);

(statearr_32093_32145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (34))){
var inst_32056 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32094_32146 = state_32062__$1;
(statearr_32094_32146[(2)] = inst_32056);

(statearr_32094_32146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (17))){
var state_32062__$1 = state_32062;
var statearr_32095_32147 = state_32062__$1;
(statearr_32095_32147[(2)] = false);

(statearr_32095_32147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (3))){
var state_32062__$1 = state_32062;
var statearr_32096_32148 = state_32062__$1;
(statearr_32096_32148[(2)] = false);

(statearr_32096_32148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (12))){
var inst_32060 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32062__$1,inst_32060);
} else {
if((state_val_32063 === (2))){
var inst_31964 = (state_32062[(8)]);
var inst_31969 = inst_31964.cljs$lang$protocol_mask$partition0$;
var inst_31970 = (inst_31969 & (64));
var inst_31971 = inst_31964.cljs$core$ISeq$;
var inst_31972 = (cljs.core.PROTOCOL_SENTINEL === inst_31971);
var inst_31973 = ((inst_31970) || (inst_31972));
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_31973)){
var statearr_32097_32149 = state_32062__$1;
(statearr_32097_32149[(1)] = (5));

} else {
var statearr_32098_32150 = state_32062__$1;
(statearr_32098_32150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (23))){
var inst_32021 = (state_32062[(14)]);
var inst_32027 = (inst_32021 == null);
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_32027)){
var statearr_32099_32151 = state_32062__$1;
(statearr_32099_32151[(1)] = (26));

} else {
var statearr_32100_32152 = state_32062__$1;
(statearr_32100_32152[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (35))){
var inst_32047 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_32047)){
var statearr_32101_32153 = state_32062__$1;
(statearr_32101_32153[(1)] = (36));

} else {
var statearr_32102_32154 = state_32062__$1;
(statearr_32102_32154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (19))){
var inst_31989 = (state_32062[(7)]);
var inst_32009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31989);
var state_32062__$1 = state_32062;
var statearr_32103_32155 = state_32062__$1;
(statearr_32103_32155[(2)] = inst_32009);

(statearr_32103_32155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (11))){
var inst_31989 = (state_32062[(7)]);
var inst_31993 = (inst_31989 == null);
var inst_31994 = cljs.core.not.call(null,inst_31993);
var state_32062__$1 = state_32062;
if(inst_31994){
var statearr_32104_32156 = state_32062__$1;
(statearr_32104_32156[(1)] = (13));

} else {
var statearr_32105_32157 = state_32062__$1;
(statearr_32105_32157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (9))){
var inst_31964 = (state_32062[(8)]);
var state_32062__$1 = state_32062;
var statearr_32106_32158 = state_32062__$1;
(statearr_32106_32158[(2)] = inst_31964);

(statearr_32106_32158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (5))){
var state_32062__$1 = state_32062;
var statearr_32107_32159 = state_32062__$1;
(statearr_32107_32159[(2)] = true);

(statearr_32107_32159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (14))){
var state_32062__$1 = state_32062;
var statearr_32108_32160 = state_32062__$1;
(statearr_32108_32160[(2)] = false);

(statearr_32108_32160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (26))){
var inst_32022 = (state_32062[(10)]);
var inst_32029 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32022);
var state_32062__$1 = state_32062;
var statearr_32109_32161 = state_32062__$1;
(statearr_32109_32161[(2)] = inst_32029);

(statearr_32109_32161[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (16))){
var state_32062__$1 = state_32062;
var statearr_32110_32162 = state_32062__$1;
(statearr_32110_32162[(2)] = true);

(statearr_32110_32162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (38))){
var inst_32052 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32111_32163 = state_32062__$1;
(statearr_32111_32163[(2)] = inst_32052);

(statearr_32111_32163[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (30))){
var inst_32014 = (state_32062[(13)]);
var inst_32022 = (state_32062[(10)]);
var inst_32013 = (state_32062[(11)]);
var inst_32039 = cljs.core.empty_QMARK_.call(null,inst_32013);
var inst_32040 = inst_32014.call(null,inst_32022);
var inst_32041 = cljs.core.not.call(null,inst_32040);
var inst_32042 = ((inst_32039) && (inst_32041));
var state_32062__$1 = state_32062;
var statearr_32112_32164 = state_32062__$1;
(statearr_32112_32164[(2)] = inst_32042);

(statearr_32112_32164[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (10))){
var inst_31964 = (state_32062[(8)]);
var inst_31985 = (state_32062[(2)]);
var inst_31986 = cljs.core.get.call(null,inst_31985,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31987 = cljs.core.get.call(null,inst_31985,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31988 = cljs.core.get.call(null,inst_31985,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31989 = inst_31964;
var state_32062__$1 = (function (){var statearr_32113 = state_32062;
(statearr_32113[(16)] = inst_31986);

(statearr_32113[(17)] = inst_31988);

(statearr_32113[(18)] = inst_31987);

(statearr_32113[(7)] = inst_31989);

return statearr_32113;
})();
var statearr_32114_32165 = state_32062__$1;
(statearr_32114_32165[(2)] = null);

(statearr_32114_32165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (18))){
var inst_32004 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32115_32166 = state_32062__$1;
(statearr_32115_32166[(2)] = inst_32004);

(statearr_32115_32166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (37))){
var state_32062__$1 = state_32062;
var statearr_32116_32167 = state_32062__$1;
(statearr_32116_32167[(2)] = null);

(statearr_32116_32167[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32063 === (8))){
var inst_31964 = (state_32062[(8)]);
var inst_31982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31964);
var state_32062__$1 = state_32062;
var statearr_32117_32168 = state_32062__$1;
(statearr_32117_32168[(2)] = inst_31982);

(statearr_32117_32168[(1)] = (10));


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
});})(c__29201__auto___32122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29034__auto__,c__29201__auto___32122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29035__auto__ = null;
var cljs$core$async$mix_$_state_machine__29035__auto____0 = (function (){
var statearr_32118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32118[(0)] = cljs$core$async$mix_$_state_machine__29035__auto__);

(statearr_32118[(1)] = (1));

return statearr_32118;
});
var cljs$core$async$mix_$_state_machine__29035__auto____1 = (function (state_32062){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32119){if((e32119 instanceof Object)){
var ex__29038__auto__ = e32119;
var statearr_32120_32169 = state_32062;
(statearr_32120_32169[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32170 = state_32062;
state_32062 = G__32170;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29035__auto__ = function(state_32062){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29035__auto____1.call(this,state_32062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29035__auto____0;
cljs$core$async$mix_$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29035__auto____1;
return cljs$core$async$mix_$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29203__auto__ = (function (){var statearr_32121 = f__29202__auto__.call(null);
(statearr_32121[(6)] = c__29201__auto___32122);

return statearr_32121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32172 = arguments.length;
switch (G__32172) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32176 = arguments.length;
switch (G__32176) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__32174_SHARP_){
if(cljs.core.truth_(p1__32174_SHARP_.call(null,topic))){
return p1__32174_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32178 = meta32178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32179,meta32178__$1){
var self__ = this;
var _32179__$1 = this;
return (new cljs.core.async.t_cljs$core$async32177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32179){
var self__ = this;
var _32179__$1 = this;
return self__.meta32178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32178","meta32178",1323219539,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32177";

cljs.core.async.t_cljs$core$async32177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32177");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32177.
 */
cljs.core.async.__GT_t_cljs$core$async32177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32178){
return (new cljs.core.async.t_cljs$core$async32177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29201__auto___32297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32297,mults,ensure_mult,p){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32297,mults,ensure_mult,p){
return (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (7))){
var inst_32247 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32253_32298 = state_32251__$1;
(statearr_32253_32298[(2)] = inst_32247);

(statearr_32253_32298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (20))){
var state_32251__$1 = state_32251;
var statearr_32254_32299 = state_32251__$1;
(statearr_32254_32299[(2)] = null);

(statearr_32254_32299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (1))){
var state_32251__$1 = state_32251;
var statearr_32255_32300 = state_32251__$1;
(statearr_32255_32300[(2)] = null);

(statearr_32255_32300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (24))){
var inst_32230 = (state_32251[(7)]);
var inst_32239 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32230);
var state_32251__$1 = state_32251;
var statearr_32256_32301 = state_32251__$1;
(statearr_32256_32301[(2)] = inst_32239);

(statearr_32256_32301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32182 = (state_32251[(8)]);
var inst_32182__$1 = (state_32251[(2)]);
var inst_32183 = (inst_32182__$1 == null);
var state_32251__$1 = (function (){var statearr_32257 = state_32251;
(statearr_32257[(8)] = inst_32182__$1);

return statearr_32257;
})();
if(cljs.core.truth_(inst_32183)){
var statearr_32258_32302 = state_32251__$1;
(statearr_32258_32302[(1)] = (5));

} else {
var statearr_32259_32303 = state_32251__$1;
(statearr_32259_32303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (15))){
var inst_32224 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32260_32304 = state_32251__$1;
(statearr_32260_32304[(2)] = inst_32224);

(statearr_32260_32304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (21))){
var inst_32244 = (state_32251[(2)]);
var state_32251__$1 = (function (){var statearr_32261 = state_32251;
(statearr_32261[(9)] = inst_32244);

return statearr_32261;
})();
var statearr_32262_32305 = state_32251__$1;
(statearr_32262_32305[(2)] = null);

(statearr_32262_32305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (13))){
var inst_32206 = (state_32251[(10)]);
var inst_32208 = cljs.core.chunked_seq_QMARK_.call(null,inst_32206);
var state_32251__$1 = state_32251;
if(inst_32208){
var statearr_32263_32306 = state_32251__$1;
(statearr_32263_32306[(1)] = (16));

} else {
var statearr_32264_32307 = state_32251__$1;
(statearr_32264_32307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (22))){
var inst_32236 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
if(cljs.core.truth_(inst_32236)){
var statearr_32265_32308 = state_32251__$1;
(statearr_32265_32308[(1)] = (23));

} else {
var statearr_32266_32309 = state_32251__$1;
(statearr_32266_32309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (6))){
var inst_32182 = (state_32251[(8)]);
var inst_32232 = (state_32251[(11)]);
var inst_32230 = (state_32251[(7)]);
var inst_32230__$1 = topic_fn.call(null,inst_32182);
var inst_32231 = cljs.core.deref.call(null,mults);
var inst_32232__$1 = cljs.core.get.call(null,inst_32231,inst_32230__$1);
var state_32251__$1 = (function (){var statearr_32267 = state_32251;
(statearr_32267[(11)] = inst_32232__$1);

(statearr_32267[(7)] = inst_32230__$1);

return statearr_32267;
})();
if(cljs.core.truth_(inst_32232__$1)){
var statearr_32268_32310 = state_32251__$1;
(statearr_32268_32310[(1)] = (19));

} else {
var statearr_32269_32311 = state_32251__$1;
(statearr_32269_32311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (25))){
var inst_32241 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32270_32312 = state_32251__$1;
(statearr_32270_32312[(2)] = inst_32241);

(statearr_32270_32312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (17))){
var inst_32206 = (state_32251[(10)]);
var inst_32215 = cljs.core.first.call(null,inst_32206);
var inst_32216 = cljs.core.async.muxch_STAR_.call(null,inst_32215);
var inst_32217 = cljs.core.async.close_BANG_.call(null,inst_32216);
var inst_32218 = cljs.core.next.call(null,inst_32206);
var inst_32192 = inst_32218;
var inst_32193 = null;
var inst_32194 = (0);
var inst_32195 = (0);
var state_32251__$1 = (function (){var statearr_32271 = state_32251;
(statearr_32271[(12)] = inst_32217);

(statearr_32271[(13)] = inst_32195);

(statearr_32271[(14)] = inst_32192);

(statearr_32271[(15)] = inst_32193);

(statearr_32271[(16)] = inst_32194);

return statearr_32271;
})();
var statearr_32272_32313 = state_32251__$1;
(statearr_32272_32313[(2)] = null);

(statearr_32272_32313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var inst_32249 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (12))){
var inst_32226 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32273_32314 = state_32251__$1;
(statearr_32273_32314[(2)] = inst_32226);

(statearr_32273_32314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(4),ch);
} else {
if((state_val_32252 === (23))){
var state_32251__$1 = state_32251;
var statearr_32274_32315 = state_32251__$1;
(statearr_32274_32315[(2)] = null);

(statearr_32274_32315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (19))){
var inst_32182 = (state_32251[(8)]);
var inst_32232 = (state_32251[(11)]);
var inst_32234 = cljs.core.async.muxch_STAR_.call(null,inst_32232);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32251__$1,(22),inst_32234,inst_32182);
} else {
if((state_val_32252 === (11))){
var inst_32192 = (state_32251[(14)]);
var inst_32206 = (state_32251[(10)]);
var inst_32206__$1 = cljs.core.seq.call(null,inst_32192);
var state_32251__$1 = (function (){var statearr_32275 = state_32251;
(statearr_32275[(10)] = inst_32206__$1);

return statearr_32275;
})();
if(inst_32206__$1){
var statearr_32276_32316 = state_32251__$1;
(statearr_32276_32316[(1)] = (13));

} else {
var statearr_32277_32317 = state_32251__$1;
(statearr_32277_32317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (9))){
var inst_32228 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32278_32318 = state_32251__$1;
(statearr_32278_32318[(2)] = inst_32228);

(statearr_32278_32318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (5))){
var inst_32189 = cljs.core.deref.call(null,mults);
var inst_32190 = cljs.core.vals.call(null,inst_32189);
var inst_32191 = cljs.core.seq.call(null,inst_32190);
var inst_32192 = inst_32191;
var inst_32193 = null;
var inst_32194 = (0);
var inst_32195 = (0);
var state_32251__$1 = (function (){var statearr_32279 = state_32251;
(statearr_32279[(13)] = inst_32195);

(statearr_32279[(14)] = inst_32192);

(statearr_32279[(15)] = inst_32193);

(statearr_32279[(16)] = inst_32194);

return statearr_32279;
})();
var statearr_32280_32319 = state_32251__$1;
(statearr_32280_32319[(2)] = null);

(statearr_32280_32319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (14))){
var state_32251__$1 = state_32251;
var statearr_32284_32320 = state_32251__$1;
(statearr_32284_32320[(2)] = null);

(statearr_32284_32320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (16))){
var inst_32206 = (state_32251[(10)]);
var inst_32210 = cljs.core.chunk_first.call(null,inst_32206);
var inst_32211 = cljs.core.chunk_rest.call(null,inst_32206);
var inst_32212 = cljs.core.count.call(null,inst_32210);
var inst_32192 = inst_32211;
var inst_32193 = inst_32210;
var inst_32194 = inst_32212;
var inst_32195 = (0);
var state_32251__$1 = (function (){var statearr_32285 = state_32251;
(statearr_32285[(13)] = inst_32195);

(statearr_32285[(14)] = inst_32192);

(statearr_32285[(15)] = inst_32193);

(statearr_32285[(16)] = inst_32194);

return statearr_32285;
})();
var statearr_32286_32321 = state_32251__$1;
(statearr_32286_32321[(2)] = null);

(statearr_32286_32321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (10))){
var inst_32195 = (state_32251[(13)]);
var inst_32192 = (state_32251[(14)]);
var inst_32193 = (state_32251[(15)]);
var inst_32194 = (state_32251[(16)]);
var inst_32200 = cljs.core._nth.call(null,inst_32193,inst_32195);
var inst_32201 = cljs.core.async.muxch_STAR_.call(null,inst_32200);
var inst_32202 = cljs.core.async.close_BANG_.call(null,inst_32201);
var inst_32203 = (inst_32195 + (1));
var tmp32281 = inst_32192;
var tmp32282 = inst_32193;
var tmp32283 = inst_32194;
var inst_32192__$1 = tmp32281;
var inst_32193__$1 = tmp32282;
var inst_32194__$1 = tmp32283;
var inst_32195__$1 = inst_32203;
var state_32251__$1 = (function (){var statearr_32287 = state_32251;
(statearr_32287[(13)] = inst_32195__$1);

(statearr_32287[(14)] = inst_32192__$1);

(statearr_32287[(15)] = inst_32193__$1);

(statearr_32287[(16)] = inst_32194__$1);

(statearr_32287[(17)] = inst_32202);

return statearr_32287;
})();
var statearr_32288_32322 = state_32251__$1;
(statearr_32288_32322[(2)] = null);

(statearr_32288_32322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (18))){
var inst_32221 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32289_32323 = state_32251__$1;
(statearr_32289_32323[(2)] = inst_32221);

(statearr_32289_32323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (8))){
var inst_32195 = (state_32251[(13)]);
var inst_32194 = (state_32251[(16)]);
var inst_32197 = (inst_32195 < inst_32194);
var inst_32198 = inst_32197;
var state_32251__$1 = state_32251;
if(cljs.core.truth_(inst_32198)){
var statearr_32290_32324 = state_32251__$1;
(statearr_32290_32324[(1)] = (10));

} else {
var statearr_32291_32325 = state_32251__$1;
(statearr_32291_32325[(1)] = (11));

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
});})(c__29201__auto___32297,mults,ensure_mult,p))
;
return ((function (switch__29034__auto__,c__29201__auto___32297,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32292[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32292[(1)] = (1));

return statearr_32292;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32251){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32293){if((e32293 instanceof Object)){
var ex__29038__auto__ = e32293;
var statearr_32294_32326 = state_32251;
(statearr_32294_32326[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32327 = state_32251;
state_32251 = G__32327;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32297,mults,ensure_mult,p))
})();
var state__29203__auto__ = (function (){var statearr_32295 = f__29202__auto__.call(null);
(statearr_32295[(6)] = c__29201__auto___32297);

return statearr_32295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32297,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32329 = arguments.length;
switch (G__32329) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32332 = arguments.length;
switch (G__32332) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32335 = arguments.length;
switch (G__32335) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29201__auto___32402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32374){
var state_val_32375 = (state_32374[(1)]);
if((state_val_32375 === (7))){
var state_32374__$1 = state_32374;
var statearr_32376_32403 = state_32374__$1;
(statearr_32376_32403[(2)] = null);

(statearr_32376_32403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (1))){
var state_32374__$1 = state_32374;
var statearr_32377_32404 = state_32374__$1;
(statearr_32377_32404[(2)] = null);

(statearr_32377_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (4))){
var inst_32338 = (state_32374[(7)]);
var inst_32340 = (inst_32338 < cnt);
var state_32374__$1 = state_32374;
if(cljs.core.truth_(inst_32340)){
var statearr_32378_32405 = state_32374__$1;
(statearr_32378_32405[(1)] = (6));

} else {
var statearr_32379_32406 = state_32374__$1;
(statearr_32379_32406[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (15))){
var inst_32370 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
var statearr_32380_32407 = state_32374__$1;
(statearr_32380_32407[(2)] = inst_32370);

(statearr_32380_32407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (13))){
var inst_32363 = cljs.core.async.close_BANG_.call(null,out);
var state_32374__$1 = state_32374;
var statearr_32381_32408 = state_32374__$1;
(statearr_32381_32408[(2)] = inst_32363);

(statearr_32381_32408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (6))){
var state_32374__$1 = state_32374;
var statearr_32382_32409 = state_32374__$1;
(statearr_32382_32409[(2)] = null);

(statearr_32382_32409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (3))){
var inst_32372 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32374__$1,inst_32372);
} else {
if((state_val_32375 === (12))){
var inst_32360 = (state_32374[(8)]);
var inst_32360__$1 = (state_32374[(2)]);
var inst_32361 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32360__$1);
var state_32374__$1 = (function (){var statearr_32383 = state_32374;
(statearr_32383[(8)] = inst_32360__$1);

return statearr_32383;
})();
if(cljs.core.truth_(inst_32361)){
var statearr_32384_32410 = state_32374__$1;
(statearr_32384_32410[(1)] = (13));

} else {
var statearr_32385_32411 = state_32374__$1;
(statearr_32385_32411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (2))){
var inst_32337 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32338 = (0);
var state_32374__$1 = (function (){var statearr_32386 = state_32374;
(statearr_32386[(9)] = inst_32337);

(statearr_32386[(7)] = inst_32338);

return statearr_32386;
})();
var statearr_32387_32412 = state_32374__$1;
(statearr_32387_32412[(2)] = null);

(statearr_32387_32412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (11))){
var inst_32338 = (state_32374[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32374,(10),Object,null,(9));
var inst_32347 = chs__$1.call(null,inst_32338);
var inst_32348 = done.call(null,inst_32338);
var inst_32349 = cljs.core.async.take_BANG_.call(null,inst_32347,inst_32348);
var state_32374__$1 = state_32374;
var statearr_32388_32413 = state_32374__$1;
(statearr_32388_32413[(2)] = inst_32349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32374__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (9))){
var inst_32338 = (state_32374[(7)]);
var inst_32351 = (state_32374[(2)]);
var inst_32352 = (inst_32338 + (1));
var inst_32338__$1 = inst_32352;
var state_32374__$1 = (function (){var statearr_32389 = state_32374;
(statearr_32389[(10)] = inst_32351);

(statearr_32389[(7)] = inst_32338__$1);

return statearr_32389;
})();
var statearr_32390_32414 = state_32374__$1;
(statearr_32390_32414[(2)] = null);

(statearr_32390_32414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (5))){
var inst_32358 = (state_32374[(2)]);
var state_32374__$1 = (function (){var statearr_32391 = state_32374;
(statearr_32391[(11)] = inst_32358);

return statearr_32391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32374__$1,(12),dchan);
} else {
if((state_val_32375 === (14))){
var inst_32360 = (state_32374[(8)]);
var inst_32365 = cljs.core.apply.call(null,f,inst_32360);
var state_32374__$1 = state_32374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32374__$1,(16),out,inst_32365);
} else {
if((state_val_32375 === (16))){
var inst_32367 = (state_32374[(2)]);
var state_32374__$1 = (function (){var statearr_32392 = state_32374;
(statearr_32392[(12)] = inst_32367);

return statearr_32392;
})();
var statearr_32393_32415 = state_32374__$1;
(statearr_32393_32415[(2)] = null);

(statearr_32393_32415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (10))){
var inst_32342 = (state_32374[(2)]);
var inst_32343 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32374__$1 = (function (){var statearr_32394 = state_32374;
(statearr_32394[(13)] = inst_32342);

return statearr_32394;
})();
var statearr_32395_32416 = state_32374__$1;
(statearr_32395_32416[(2)] = inst_32343);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32374__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32375 === (8))){
var inst_32356 = (state_32374[(2)]);
var state_32374__$1 = state_32374;
var statearr_32396_32417 = state_32374__$1;
(statearr_32396_32417[(2)] = inst_32356);

(statearr_32396_32417[(1)] = (5));


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
});})(c__29201__auto___32402,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29034__auto__,c__29201__auto___32402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32397[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32397[(1)] = (1));

return statearr_32397;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32374){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32398){if((e32398 instanceof Object)){
var ex__29038__auto__ = e32398;
var statearr_32399_32418 = state_32374;
(statearr_32399_32418[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32419 = state_32374;
state_32374 = G__32419;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32402,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29203__auto__ = (function (){var statearr_32400 = f__29202__auto__.call(null);
(statearr_32400[(6)] = c__29201__auto___32402);

return statearr_32400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32402,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32422 = arguments.length;
switch (G__32422) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29201__auto___32476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32476,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32476,out){
return (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32434 = (state_32454[(7)]);
var inst_32433 = (state_32454[(8)]);
var inst_32433__$1 = (state_32454[(2)]);
var inst_32434__$1 = cljs.core.nth.call(null,inst_32433__$1,(0),null);
var inst_32435 = cljs.core.nth.call(null,inst_32433__$1,(1),null);
var inst_32436 = (inst_32434__$1 == null);
var state_32454__$1 = (function (){var statearr_32456 = state_32454;
(statearr_32456[(7)] = inst_32434__$1);

(statearr_32456[(8)] = inst_32433__$1);

(statearr_32456[(9)] = inst_32435);

return statearr_32456;
})();
if(cljs.core.truth_(inst_32436)){
var statearr_32457_32477 = state_32454__$1;
(statearr_32457_32477[(1)] = (8));

} else {
var statearr_32458_32478 = state_32454__$1;
(statearr_32458_32478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var inst_32423 = cljs.core.vec.call(null,chs);
var inst_32424 = inst_32423;
var state_32454__$1 = (function (){var statearr_32459 = state_32454;
(statearr_32459[(10)] = inst_32424);

return statearr_32459;
})();
var statearr_32460_32479 = state_32454__$1;
(statearr_32460_32479[(2)] = null);

(statearr_32460_32479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32424 = (state_32454[(10)]);
var state_32454__$1 = state_32454;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32454__$1,(7),inst_32424);
} else {
if((state_val_32455 === (6))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32461_32480 = state_32454__$1;
(statearr_32461_32480[(2)] = inst_32450);

(statearr_32461_32480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (2))){
var inst_32424 = (state_32454[(10)]);
var inst_32426 = cljs.core.count.call(null,inst_32424);
var inst_32427 = (inst_32426 > (0));
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32427)){
var statearr_32463_32481 = state_32454__$1;
(statearr_32463_32481[(1)] = (4));

} else {
var statearr_32464_32482 = state_32454__$1;
(statearr_32464_32482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (11))){
var inst_32424 = (state_32454[(10)]);
var inst_32443 = (state_32454[(2)]);
var tmp32462 = inst_32424;
var inst_32424__$1 = tmp32462;
var state_32454__$1 = (function (){var statearr_32465 = state_32454;
(statearr_32465[(10)] = inst_32424__$1);

(statearr_32465[(11)] = inst_32443);

return statearr_32465;
})();
var statearr_32466_32483 = state_32454__$1;
(statearr_32466_32483[(2)] = null);

(statearr_32466_32483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var inst_32434 = (state_32454[(7)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32454__$1,(11),out,inst_32434);
} else {
if((state_val_32455 === (5))){
var inst_32448 = cljs.core.async.close_BANG_.call(null,out);
var state_32454__$1 = state_32454;
var statearr_32467_32484 = state_32454__$1;
(statearr_32467_32484[(2)] = inst_32448);

(statearr_32467_32484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32446 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32468_32485 = state_32454__$1;
(statearr_32468_32485[(2)] = inst_32446);

(statearr_32468_32485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32424 = (state_32454[(10)]);
var inst_32434 = (state_32454[(7)]);
var inst_32433 = (state_32454[(8)]);
var inst_32435 = (state_32454[(9)]);
var inst_32438 = (function (){var cs = inst_32424;
var vec__32429 = inst_32433;
var v = inst_32434;
var c = inst_32435;
return ((function (cs,vec__32429,v,c,inst_32424,inst_32434,inst_32433,inst_32435,state_val_32455,c__29201__auto___32476,out){
return (function (p1__32420_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32420_SHARP_);
});
;})(cs,vec__32429,v,c,inst_32424,inst_32434,inst_32433,inst_32435,state_val_32455,c__29201__auto___32476,out))
})();
var inst_32439 = cljs.core.filterv.call(null,inst_32438,inst_32424);
var inst_32424__$1 = inst_32439;
var state_32454__$1 = (function (){var statearr_32469 = state_32454;
(statearr_32469[(10)] = inst_32424__$1);

return statearr_32469;
})();
var statearr_32470_32486 = state_32454__$1;
(statearr_32470_32486[(2)] = null);

(statearr_32470_32486[(1)] = (2));


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
});})(c__29201__auto___32476,out))
;
return ((function (switch__29034__auto__,c__29201__auto___32476,out){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32471 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32471[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32471[(1)] = (1));

return statearr_32471;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32454){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32472){if((e32472 instanceof Object)){
var ex__29038__auto__ = e32472;
var statearr_32473_32487 = state_32454;
(statearr_32473_32487[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32488 = state_32454;
state_32454 = G__32488;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32476,out))
})();
var state__29203__auto__ = (function (){var statearr_32474 = f__29202__auto__.call(null);
(statearr_32474[(6)] = c__29201__auto___32476);

return statearr_32474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32476,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32490 = arguments.length;
switch (G__32490) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29201__auto___32535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32535,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32535,out){
return (function (state_32514){
var state_val_32515 = (state_32514[(1)]);
if((state_val_32515 === (7))){
var inst_32496 = (state_32514[(7)]);
var inst_32496__$1 = (state_32514[(2)]);
var inst_32497 = (inst_32496__$1 == null);
var inst_32498 = cljs.core.not.call(null,inst_32497);
var state_32514__$1 = (function (){var statearr_32516 = state_32514;
(statearr_32516[(7)] = inst_32496__$1);

return statearr_32516;
})();
if(inst_32498){
var statearr_32517_32536 = state_32514__$1;
(statearr_32517_32536[(1)] = (8));

} else {
var statearr_32518_32537 = state_32514__$1;
(statearr_32518_32537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (1))){
var inst_32491 = (0);
var state_32514__$1 = (function (){var statearr_32519 = state_32514;
(statearr_32519[(8)] = inst_32491);

return statearr_32519;
})();
var statearr_32520_32538 = state_32514__$1;
(statearr_32520_32538[(2)] = null);

(statearr_32520_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (4))){
var state_32514__$1 = state_32514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32514__$1,(7),ch);
} else {
if((state_val_32515 === (6))){
var inst_32509 = (state_32514[(2)]);
var state_32514__$1 = state_32514;
var statearr_32521_32539 = state_32514__$1;
(statearr_32521_32539[(2)] = inst_32509);

(statearr_32521_32539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (3))){
var inst_32511 = (state_32514[(2)]);
var inst_32512 = cljs.core.async.close_BANG_.call(null,out);
var state_32514__$1 = (function (){var statearr_32522 = state_32514;
(statearr_32522[(9)] = inst_32511);

return statearr_32522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32514__$1,inst_32512);
} else {
if((state_val_32515 === (2))){
var inst_32491 = (state_32514[(8)]);
var inst_32493 = (inst_32491 < n);
var state_32514__$1 = state_32514;
if(cljs.core.truth_(inst_32493)){
var statearr_32523_32540 = state_32514__$1;
(statearr_32523_32540[(1)] = (4));

} else {
var statearr_32524_32541 = state_32514__$1;
(statearr_32524_32541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (11))){
var inst_32491 = (state_32514[(8)]);
var inst_32501 = (state_32514[(2)]);
var inst_32502 = (inst_32491 + (1));
var inst_32491__$1 = inst_32502;
var state_32514__$1 = (function (){var statearr_32525 = state_32514;
(statearr_32525[(10)] = inst_32501);

(statearr_32525[(8)] = inst_32491__$1);

return statearr_32525;
})();
var statearr_32526_32542 = state_32514__$1;
(statearr_32526_32542[(2)] = null);

(statearr_32526_32542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (9))){
var state_32514__$1 = state_32514;
var statearr_32527_32543 = state_32514__$1;
(statearr_32527_32543[(2)] = null);

(statearr_32527_32543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (5))){
var state_32514__$1 = state_32514;
var statearr_32528_32544 = state_32514__$1;
(statearr_32528_32544[(2)] = null);

(statearr_32528_32544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (10))){
var inst_32506 = (state_32514[(2)]);
var state_32514__$1 = state_32514;
var statearr_32529_32545 = state_32514__$1;
(statearr_32529_32545[(2)] = inst_32506);

(statearr_32529_32545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (8))){
var inst_32496 = (state_32514[(7)]);
var state_32514__$1 = state_32514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32514__$1,(11),out,inst_32496);
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
});})(c__29201__auto___32535,out))
;
return ((function (switch__29034__auto__,c__29201__auto___32535,out){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32530[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32514){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32531){if((e32531 instanceof Object)){
var ex__29038__auto__ = e32531;
var statearr_32532_32546 = state_32514;
(statearr_32532_32546[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32547 = state_32514;
state_32514 = G__32547;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32535,out))
})();
var state__29203__auto__ = (function (){var statearr_32533 = f__29202__auto__.call(null);
(statearr_32533[(6)] = c__29201__auto___32535);

return statearr_32533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32535,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32549 = (function (f,ch,meta32550){
this.f = f;
this.ch = ch;
this.meta32550 = meta32550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32551,meta32550__$1){
var self__ = this;
var _32551__$1 = this;
return (new cljs.core.async.t_cljs$core$async32549(self__.f,self__.ch,meta32550__$1));
});

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32551){
var self__ = this;
var _32551__$1 = this;
return self__.meta32550;
});

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32552 = (function (f,ch,meta32550,_,fn1,meta32553){
this.f = f;
this.ch = ch;
this.meta32550 = meta32550;
this._ = _;
this.fn1 = fn1;
this.meta32553 = meta32553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32554,meta32553__$1){
var self__ = this;
var _32554__$1 = this;
return (new cljs.core.async.t_cljs$core$async32552(self__.f,self__.ch,self__.meta32550,self__._,self__.fn1,meta32553__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32554){
var self__ = this;
var _32554__$1 = this;
return self__.meta32553;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32548_SHARP_){
return f1.call(null,(((p1__32548_SHARP_ == null))?null:self__.f.call(null,p1__32548_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32552.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32550","meta32550",-1966785247,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32549","cljs.core.async/t_cljs$core$async32549",-1819134604,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32553","meta32553",-270231369,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32552";

cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32552");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32552.
 */
cljs.core.async.__GT_t_cljs$core$async32552 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32552(f__$1,ch__$1,meta32550__$1,___$2,fn1__$1,meta32553){
return (new cljs.core.async.t_cljs$core$async32552(f__$1,ch__$1,meta32550__$1,___$2,fn1__$1,meta32553));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32552(self__.f,self__.ch,self__.meta32550,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32550","meta32550",-1966785247,null)], null);
});

cljs.core.async.t_cljs$core$async32549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32549";

cljs.core.async.t_cljs$core$async32549.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32549");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32549.
 */
cljs.core.async.__GT_t_cljs$core$async32549 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32549(f__$1,ch__$1,meta32550){
return (new cljs.core.async.t_cljs$core$async32549(f__$1,ch__$1,meta32550));
});

}

return (new cljs.core.async.t_cljs$core$async32549(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32555 = (function (f,ch,meta32556){
this.f = f;
this.ch = ch;
this.meta32556 = meta32556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32557,meta32556__$1){
var self__ = this;
var _32557__$1 = this;
return (new cljs.core.async.t_cljs$core$async32555(self__.f,self__.ch,meta32556__$1));
});

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32557){
var self__ = this;
var _32557__$1 = this;
return self__.meta32556;
});

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32556","meta32556",152732118,null)], null);
});

cljs.core.async.t_cljs$core$async32555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32555";

cljs.core.async.t_cljs$core$async32555.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32555");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32555.
 */
cljs.core.async.__GT_t_cljs$core$async32555 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32555(f__$1,ch__$1,meta32556){
return (new cljs.core.async.t_cljs$core$async32555(f__$1,ch__$1,meta32556));
});

}

return (new cljs.core.async.t_cljs$core$async32555(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32558 = (function (p,ch,meta32559){
this.p = p;
this.ch = ch;
this.meta32559 = meta32559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32560,meta32559__$1){
var self__ = this;
var _32560__$1 = this;
return (new cljs.core.async.t_cljs$core$async32558(self__.p,self__.ch,meta32559__$1));
});

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32560){
var self__ = this;
var _32560__$1 = this;
return self__.meta32559;
});

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32559","meta32559",-517853816,null)], null);
});

cljs.core.async.t_cljs$core$async32558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32558";

cljs.core.async.t_cljs$core$async32558.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32558");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32558.
 */
cljs.core.async.__GT_t_cljs$core$async32558 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32558(p__$1,ch__$1,meta32559){
return (new cljs.core.async.t_cljs$core$async32558(p__$1,ch__$1,meta32559));
});

}

return (new cljs.core.async.t_cljs$core$async32558(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32562 = arguments.length;
switch (G__32562) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29201__auto___32602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32602,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32602,out){
return (function (state_32583){
var state_val_32584 = (state_32583[(1)]);
if((state_val_32584 === (7))){
var inst_32579 = (state_32583[(2)]);
var state_32583__$1 = state_32583;
var statearr_32585_32603 = state_32583__$1;
(statearr_32585_32603[(2)] = inst_32579);

(statearr_32585_32603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (1))){
var state_32583__$1 = state_32583;
var statearr_32586_32604 = state_32583__$1;
(statearr_32586_32604[(2)] = null);

(statearr_32586_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (4))){
var inst_32565 = (state_32583[(7)]);
var inst_32565__$1 = (state_32583[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var state_32583__$1 = (function (){var statearr_32587 = state_32583;
(statearr_32587[(7)] = inst_32565__$1);

return statearr_32587;
})();
if(cljs.core.truth_(inst_32566)){
var statearr_32588_32605 = state_32583__$1;
(statearr_32588_32605[(1)] = (5));

} else {
var statearr_32589_32606 = state_32583__$1;
(statearr_32589_32606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (6))){
var inst_32565 = (state_32583[(7)]);
var inst_32570 = p.call(null,inst_32565);
var state_32583__$1 = state_32583;
if(cljs.core.truth_(inst_32570)){
var statearr_32590_32607 = state_32583__$1;
(statearr_32590_32607[(1)] = (8));

} else {
var statearr_32591_32608 = state_32583__$1;
(statearr_32591_32608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (3))){
var inst_32581 = (state_32583[(2)]);
var state_32583__$1 = state_32583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32583__$1,inst_32581);
} else {
if((state_val_32584 === (2))){
var state_32583__$1 = state_32583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32583__$1,(4),ch);
} else {
if((state_val_32584 === (11))){
var inst_32573 = (state_32583[(2)]);
var state_32583__$1 = state_32583;
var statearr_32592_32609 = state_32583__$1;
(statearr_32592_32609[(2)] = inst_32573);

(statearr_32592_32609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (9))){
var state_32583__$1 = state_32583;
var statearr_32593_32610 = state_32583__$1;
(statearr_32593_32610[(2)] = null);

(statearr_32593_32610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (5))){
var inst_32568 = cljs.core.async.close_BANG_.call(null,out);
var state_32583__$1 = state_32583;
var statearr_32594_32611 = state_32583__$1;
(statearr_32594_32611[(2)] = inst_32568);

(statearr_32594_32611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (10))){
var inst_32576 = (state_32583[(2)]);
var state_32583__$1 = (function (){var statearr_32595 = state_32583;
(statearr_32595[(8)] = inst_32576);

return statearr_32595;
})();
var statearr_32596_32612 = state_32583__$1;
(statearr_32596_32612[(2)] = null);

(statearr_32596_32612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32584 === (8))){
var inst_32565 = (state_32583[(7)]);
var state_32583__$1 = state_32583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32583__$1,(11),out,inst_32565);
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
});})(c__29201__auto___32602,out))
;
return ((function (switch__29034__auto__,c__29201__auto___32602,out){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32597 = [null,null,null,null,null,null,null,null,null];
(statearr_32597[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32597[(1)] = (1));

return statearr_32597;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32583){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32598){if((e32598 instanceof Object)){
var ex__29038__auto__ = e32598;
var statearr_32599_32613 = state_32583;
(statearr_32599_32613[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_32583;
state_32583 = G__32614;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32602,out))
})();
var state__29203__auto__ = (function (){var statearr_32600 = f__29202__auto__.call(null);
(statearr_32600[(6)] = c__29201__auto___32602);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32602,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32616 = arguments.length;
switch (G__32616) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto__){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto__){
return (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (7))){
var inst_32675 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32681_32719 = state_32679__$1;
(statearr_32681_32719[(2)] = inst_32675);

(statearr_32681_32719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (20))){
var inst_32645 = (state_32679[(7)]);
var inst_32656 = (state_32679[(2)]);
var inst_32657 = cljs.core.next.call(null,inst_32645);
var inst_32631 = inst_32657;
var inst_32632 = null;
var inst_32633 = (0);
var inst_32634 = (0);
var state_32679__$1 = (function (){var statearr_32682 = state_32679;
(statearr_32682[(8)] = inst_32631);

(statearr_32682[(9)] = inst_32632);

(statearr_32682[(10)] = inst_32656);

(statearr_32682[(11)] = inst_32634);

(statearr_32682[(12)] = inst_32633);

return statearr_32682;
})();
var statearr_32683_32720 = state_32679__$1;
(statearr_32683_32720[(2)] = null);

(statearr_32683_32720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (1))){
var state_32679__$1 = state_32679;
var statearr_32684_32721 = state_32679__$1;
(statearr_32684_32721[(2)] = null);

(statearr_32684_32721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32620 = (state_32679[(13)]);
var inst_32620__$1 = (state_32679[(2)]);
var inst_32621 = (inst_32620__$1 == null);
var state_32679__$1 = (function (){var statearr_32685 = state_32679;
(statearr_32685[(13)] = inst_32620__$1);

return statearr_32685;
})();
if(cljs.core.truth_(inst_32621)){
var statearr_32686_32722 = state_32679__$1;
(statearr_32686_32722[(1)] = (5));

} else {
var statearr_32687_32723 = state_32679__$1;
(statearr_32687_32723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (15))){
var state_32679__$1 = state_32679;
var statearr_32691_32724 = state_32679__$1;
(statearr_32691_32724[(2)] = null);

(statearr_32691_32724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (21))){
var state_32679__$1 = state_32679;
var statearr_32692_32725 = state_32679__$1;
(statearr_32692_32725[(2)] = null);

(statearr_32692_32725[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (13))){
var inst_32631 = (state_32679[(8)]);
var inst_32632 = (state_32679[(9)]);
var inst_32634 = (state_32679[(11)]);
var inst_32633 = (state_32679[(12)]);
var inst_32641 = (state_32679[(2)]);
var inst_32642 = (inst_32634 + (1));
var tmp32688 = inst_32631;
var tmp32689 = inst_32632;
var tmp32690 = inst_32633;
var inst_32631__$1 = tmp32688;
var inst_32632__$1 = tmp32689;
var inst_32633__$1 = tmp32690;
var inst_32634__$1 = inst_32642;
var state_32679__$1 = (function (){var statearr_32693 = state_32679;
(statearr_32693[(14)] = inst_32641);

(statearr_32693[(8)] = inst_32631__$1);

(statearr_32693[(9)] = inst_32632__$1);

(statearr_32693[(11)] = inst_32634__$1);

(statearr_32693[(12)] = inst_32633__$1);

return statearr_32693;
})();
var statearr_32694_32726 = state_32679__$1;
(statearr_32694_32726[(2)] = null);

(statearr_32694_32726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (22))){
var state_32679__$1 = state_32679;
var statearr_32695_32727 = state_32679__$1;
(statearr_32695_32727[(2)] = null);

(statearr_32695_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (6))){
var inst_32620 = (state_32679[(13)]);
var inst_32629 = f.call(null,inst_32620);
var inst_32630 = cljs.core.seq.call(null,inst_32629);
var inst_32631 = inst_32630;
var inst_32632 = null;
var inst_32633 = (0);
var inst_32634 = (0);
var state_32679__$1 = (function (){var statearr_32696 = state_32679;
(statearr_32696[(8)] = inst_32631);

(statearr_32696[(9)] = inst_32632);

(statearr_32696[(11)] = inst_32634);

(statearr_32696[(12)] = inst_32633);

return statearr_32696;
})();
var statearr_32697_32728 = state_32679__$1;
(statearr_32697_32728[(2)] = null);

(statearr_32697_32728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (17))){
var inst_32645 = (state_32679[(7)]);
var inst_32649 = cljs.core.chunk_first.call(null,inst_32645);
var inst_32650 = cljs.core.chunk_rest.call(null,inst_32645);
var inst_32651 = cljs.core.count.call(null,inst_32649);
var inst_32631 = inst_32650;
var inst_32632 = inst_32649;
var inst_32633 = inst_32651;
var inst_32634 = (0);
var state_32679__$1 = (function (){var statearr_32698 = state_32679;
(statearr_32698[(8)] = inst_32631);

(statearr_32698[(9)] = inst_32632);

(statearr_32698[(11)] = inst_32634);

(statearr_32698[(12)] = inst_32633);

return statearr_32698;
})();
var statearr_32699_32729 = state_32679__$1;
(statearr_32699_32729[(2)] = null);

(statearr_32699_32729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (3))){
var inst_32677 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32679__$1,inst_32677);
} else {
if((state_val_32680 === (12))){
var inst_32665 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32700_32730 = state_32679__$1;
(statearr_32700_32730[(2)] = inst_32665);

(statearr_32700_32730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (2))){
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32679__$1,(4),in$);
} else {
if((state_val_32680 === (23))){
var inst_32673 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32701_32731 = state_32679__$1;
(statearr_32701_32731[(2)] = inst_32673);

(statearr_32701_32731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (19))){
var inst_32660 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32702_32732 = state_32679__$1;
(statearr_32702_32732[(2)] = inst_32660);

(statearr_32702_32732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (11))){
var inst_32631 = (state_32679[(8)]);
var inst_32645 = (state_32679[(7)]);
var inst_32645__$1 = cljs.core.seq.call(null,inst_32631);
var state_32679__$1 = (function (){var statearr_32703 = state_32679;
(statearr_32703[(7)] = inst_32645__$1);

return statearr_32703;
})();
if(inst_32645__$1){
var statearr_32704_32733 = state_32679__$1;
(statearr_32704_32733[(1)] = (14));

} else {
var statearr_32705_32734 = state_32679__$1;
(statearr_32705_32734[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (9))){
var inst_32667 = (state_32679[(2)]);
var inst_32668 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32679__$1 = (function (){var statearr_32706 = state_32679;
(statearr_32706[(15)] = inst_32667);

return statearr_32706;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32707_32735 = state_32679__$1;
(statearr_32707_32735[(1)] = (21));

} else {
var statearr_32708_32736 = state_32679__$1;
(statearr_32708_32736[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var inst_32623 = cljs.core.async.close_BANG_.call(null,out);
var state_32679__$1 = state_32679;
var statearr_32709_32737 = state_32679__$1;
(statearr_32709_32737[(2)] = inst_32623);

(statearr_32709_32737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (14))){
var inst_32645 = (state_32679[(7)]);
var inst_32647 = cljs.core.chunked_seq_QMARK_.call(null,inst_32645);
var state_32679__$1 = state_32679;
if(inst_32647){
var statearr_32710_32738 = state_32679__$1;
(statearr_32710_32738[(1)] = (17));

} else {
var statearr_32711_32739 = state_32679__$1;
(statearr_32711_32739[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (16))){
var inst_32663 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32712_32740 = state_32679__$1;
(statearr_32712_32740[(2)] = inst_32663);

(statearr_32712_32740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (10))){
var inst_32632 = (state_32679[(9)]);
var inst_32634 = (state_32679[(11)]);
var inst_32639 = cljs.core._nth.call(null,inst_32632,inst_32634);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32679__$1,(13),out,inst_32639);
} else {
if((state_val_32680 === (18))){
var inst_32645 = (state_32679[(7)]);
var inst_32654 = cljs.core.first.call(null,inst_32645);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32679__$1,(20),out,inst_32654);
} else {
if((state_val_32680 === (8))){
var inst_32634 = (state_32679[(11)]);
var inst_32633 = (state_32679[(12)]);
var inst_32636 = (inst_32634 < inst_32633);
var inst_32637 = inst_32636;
var state_32679__$1 = state_32679;
if(cljs.core.truth_(inst_32637)){
var statearr_32713_32741 = state_32679__$1;
(statearr_32713_32741[(1)] = (10));

} else {
var statearr_32714_32742 = state_32679__$1;
(statearr_32714_32742[(1)] = (11));

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
});})(c__29201__auto__))
;
return ((function (switch__29034__auto__,c__29201__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29035__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29035__auto____0 = (function (){
var statearr_32715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32715[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29035__auto__);

(statearr_32715[(1)] = (1));

return statearr_32715;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29035__auto____1 = (function (state_32679){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32716){if((e32716 instanceof Object)){
var ex__29038__auto__ = e32716;
var statearr_32717_32743 = state_32679;
(statearr_32717_32743[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32744 = state_32679;
state_32679 = G__32744;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29035__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29035__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29035__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29035__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto__))
})();
var state__29203__auto__ = (function (){var statearr_32718 = f__29202__auto__.call(null);
(statearr_32718[(6)] = c__29201__auto__);

return statearr_32718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto__))
);

return c__29201__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32746 = arguments.length;
switch (G__32746) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32749 = arguments.length;
switch (G__32749) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32752 = arguments.length;
switch (G__32752) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29201__auto___32799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32799,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32799,out){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32771 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_32800 = state_32776__$1;
(statearr_32778_32800[(2)] = inst_32771);

(statearr_32778_32800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var inst_32753 = null;
var state_32776__$1 = (function (){var statearr_32779 = state_32776;
(statearr_32779[(7)] = inst_32753);

return statearr_32779;
})();
var statearr_32780_32801 = state_32776__$1;
(statearr_32780_32801[(2)] = null);

(statearr_32780_32801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32756 = (state_32776[(8)]);
var inst_32756__$1 = (state_32776[(2)]);
var inst_32757 = (inst_32756__$1 == null);
var inst_32758 = cljs.core.not.call(null,inst_32757);
var state_32776__$1 = (function (){var statearr_32781 = state_32776;
(statearr_32781[(8)] = inst_32756__$1);

return statearr_32781;
})();
if(inst_32758){
var statearr_32782_32802 = state_32776__$1;
(statearr_32782_32802[(1)] = (5));

} else {
var statearr_32783_32803 = state_32776__$1;
(statearr_32783_32803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var state_32776__$1 = state_32776;
var statearr_32784_32804 = state_32776__$1;
(statearr_32784_32804[(2)] = null);

(statearr_32784_32804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32773 = (state_32776[(2)]);
var inst_32774 = cljs.core.async.close_BANG_.call(null,out);
var state_32776__$1 = (function (){var statearr_32785 = state_32776;
(statearr_32785[(9)] = inst_32773);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),ch);
} else {
if((state_val_32777 === (11))){
var inst_32756 = (state_32776[(8)]);
var inst_32765 = (state_32776[(2)]);
var inst_32753 = inst_32756;
var state_32776__$1 = (function (){var statearr_32786 = state_32776;
(statearr_32786[(7)] = inst_32753);

(statearr_32786[(10)] = inst_32765);

return statearr_32786;
})();
var statearr_32787_32805 = state_32776__$1;
(statearr_32787_32805[(2)] = null);

(statearr_32787_32805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var inst_32756 = (state_32776[(8)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(11),out,inst_32756);
} else {
if((state_val_32777 === (5))){
var inst_32756 = (state_32776[(8)]);
var inst_32753 = (state_32776[(7)]);
var inst_32760 = cljs.core._EQ_.call(null,inst_32756,inst_32753);
var state_32776__$1 = state_32776;
if(inst_32760){
var statearr_32789_32806 = state_32776__$1;
(statearr_32789_32806[(1)] = (8));

} else {
var statearr_32790_32807 = state_32776__$1;
(statearr_32790_32807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32768 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32791_32808 = state_32776__$1;
(statearr_32791_32808[(2)] = inst_32768);

(statearr_32791_32808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32753 = (state_32776[(7)]);
var tmp32788 = inst_32753;
var inst_32753__$1 = tmp32788;
var state_32776__$1 = (function (){var statearr_32792 = state_32776;
(statearr_32792[(7)] = inst_32753__$1);

return statearr_32792;
})();
var statearr_32793_32809 = state_32776__$1;
(statearr_32793_32809[(2)] = null);

(statearr_32793_32809[(1)] = (2));


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
});})(c__29201__auto___32799,out))
;
return ((function (switch__29034__auto__,c__29201__auto___32799,out){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32794[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32794[(1)] = (1));

return statearr_32794;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32776){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32795){if((e32795 instanceof Object)){
var ex__29038__auto__ = e32795;
var statearr_32796_32810 = state_32776;
(statearr_32796_32810[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32811 = state_32776;
state_32776 = G__32811;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32799,out))
})();
var state__29203__auto__ = (function (){var statearr_32797 = f__29202__auto__.call(null);
(statearr_32797[(6)] = c__29201__auto___32799);

return statearr_32797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32799,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32813 = arguments.length;
switch (G__32813) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29201__auto___32879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32879,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32879,out){
return (function (state_32851){
var state_val_32852 = (state_32851[(1)]);
if((state_val_32852 === (7))){
var inst_32847 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
var statearr_32853_32880 = state_32851__$1;
(statearr_32853_32880[(2)] = inst_32847);

(statearr_32853_32880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (1))){
var inst_32814 = (new Array(n));
var inst_32815 = inst_32814;
var inst_32816 = (0);
var state_32851__$1 = (function (){var statearr_32854 = state_32851;
(statearr_32854[(7)] = inst_32815);

(statearr_32854[(8)] = inst_32816);

return statearr_32854;
})();
var statearr_32855_32881 = state_32851__$1;
(statearr_32855_32881[(2)] = null);

(statearr_32855_32881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (4))){
var inst_32819 = (state_32851[(9)]);
var inst_32819__$1 = (state_32851[(2)]);
var inst_32820 = (inst_32819__$1 == null);
var inst_32821 = cljs.core.not.call(null,inst_32820);
var state_32851__$1 = (function (){var statearr_32856 = state_32851;
(statearr_32856[(9)] = inst_32819__$1);

return statearr_32856;
})();
if(inst_32821){
var statearr_32857_32882 = state_32851__$1;
(statearr_32857_32882[(1)] = (5));

} else {
var statearr_32858_32883 = state_32851__$1;
(statearr_32858_32883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (15))){
var inst_32841 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
var statearr_32859_32884 = state_32851__$1;
(statearr_32859_32884[(2)] = inst_32841);

(statearr_32859_32884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (13))){
var state_32851__$1 = state_32851;
var statearr_32860_32885 = state_32851__$1;
(statearr_32860_32885[(2)] = null);

(statearr_32860_32885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (6))){
var inst_32816 = (state_32851[(8)]);
var inst_32837 = (inst_32816 > (0));
var state_32851__$1 = state_32851;
if(cljs.core.truth_(inst_32837)){
var statearr_32861_32886 = state_32851__$1;
(statearr_32861_32886[(1)] = (12));

} else {
var statearr_32862_32887 = state_32851__$1;
(statearr_32862_32887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (3))){
var inst_32849 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32851__$1,inst_32849);
} else {
if((state_val_32852 === (12))){
var inst_32815 = (state_32851[(7)]);
var inst_32839 = cljs.core.vec.call(null,inst_32815);
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32851__$1,(15),out,inst_32839);
} else {
if((state_val_32852 === (2))){
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32851__$1,(4),ch);
} else {
if((state_val_32852 === (11))){
var inst_32831 = (state_32851[(2)]);
var inst_32832 = (new Array(n));
var inst_32815 = inst_32832;
var inst_32816 = (0);
var state_32851__$1 = (function (){var statearr_32863 = state_32851;
(statearr_32863[(10)] = inst_32831);

(statearr_32863[(7)] = inst_32815);

(statearr_32863[(8)] = inst_32816);

return statearr_32863;
})();
var statearr_32864_32888 = state_32851__$1;
(statearr_32864_32888[(2)] = null);

(statearr_32864_32888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (9))){
var inst_32815 = (state_32851[(7)]);
var inst_32829 = cljs.core.vec.call(null,inst_32815);
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32851__$1,(11),out,inst_32829);
} else {
if((state_val_32852 === (5))){
var inst_32815 = (state_32851[(7)]);
var inst_32824 = (state_32851[(11)]);
var inst_32819 = (state_32851[(9)]);
var inst_32816 = (state_32851[(8)]);
var inst_32823 = (inst_32815[inst_32816] = inst_32819);
var inst_32824__$1 = (inst_32816 + (1));
var inst_32825 = (inst_32824__$1 < n);
var state_32851__$1 = (function (){var statearr_32865 = state_32851;
(statearr_32865[(11)] = inst_32824__$1);

(statearr_32865[(12)] = inst_32823);

return statearr_32865;
})();
if(cljs.core.truth_(inst_32825)){
var statearr_32866_32889 = state_32851__$1;
(statearr_32866_32889[(1)] = (8));

} else {
var statearr_32867_32890 = state_32851__$1;
(statearr_32867_32890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (14))){
var inst_32844 = (state_32851[(2)]);
var inst_32845 = cljs.core.async.close_BANG_.call(null,out);
var state_32851__$1 = (function (){var statearr_32869 = state_32851;
(statearr_32869[(13)] = inst_32844);

return statearr_32869;
})();
var statearr_32870_32891 = state_32851__$1;
(statearr_32870_32891[(2)] = inst_32845);

(statearr_32870_32891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (10))){
var inst_32835 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
var statearr_32871_32892 = state_32851__$1;
(statearr_32871_32892[(2)] = inst_32835);

(statearr_32871_32892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (8))){
var inst_32815 = (state_32851[(7)]);
var inst_32824 = (state_32851[(11)]);
var tmp32868 = inst_32815;
var inst_32815__$1 = tmp32868;
var inst_32816 = inst_32824;
var state_32851__$1 = (function (){var statearr_32872 = state_32851;
(statearr_32872[(7)] = inst_32815__$1);

(statearr_32872[(8)] = inst_32816);

return statearr_32872;
})();
var statearr_32873_32893 = state_32851__$1;
(statearr_32873_32893[(2)] = null);

(statearr_32873_32893[(1)] = (2));


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
});})(c__29201__auto___32879,out))
;
return ((function (switch__29034__auto__,c__29201__auto___32879,out){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32874[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32874[(1)] = (1));

return statearr_32874;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32851){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32875){if((e32875 instanceof Object)){
var ex__29038__auto__ = e32875;
var statearr_32876_32894 = state_32851;
(statearr_32876_32894[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32895 = state_32851;
state_32851 = G__32895;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32879,out))
})();
var state__29203__auto__ = (function (){var statearr_32877 = f__29202__auto__.call(null);
(statearr_32877[(6)] = c__29201__auto___32879);

return statearr_32877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32879,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32897 = arguments.length;
switch (G__32897) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29201__auto___32967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29201__auto___32967,out){
return (function (){
var f__29202__auto__ = (function (){var switch__29034__auto__ = ((function (c__29201__auto___32967,out){
return (function (state_32939){
var state_val_32940 = (state_32939[(1)]);
if((state_val_32940 === (7))){
var inst_32935 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32941_32968 = state_32939__$1;
(statearr_32941_32968[(2)] = inst_32935);

(statearr_32941_32968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (1))){
var inst_32898 = [];
var inst_32899 = inst_32898;
var inst_32900 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32939__$1 = (function (){var statearr_32942 = state_32939;
(statearr_32942[(7)] = inst_32899);

(statearr_32942[(8)] = inst_32900);

return statearr_32942;
})();
var statearr_32943_32969 = state_32939__$1;
(statearr_32943_32969[(2)] = null);

(statearr_32943_32969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (4))){
var inst_32903 = (state_32939[(9)]);
var inst_32903__$1 = (state_32939[(2)]);
var inst_32904 = (inst_32903__$1 == null);
var inst_32905 = cljs.core.not.call(null,inst_32904);
var state_32939__$1 = (function (){var statearr_32944 = state_32939;
(statearr_32944[(9)] = inst_32903__$1);

return statearr_32944;
})();
if(inst_32905){
var statearr_32945_32970 = state_32939__$1;
(statearr_32945_32970[(1)] = (5));

} else {
var statearr_32946_32971 = state_32939__$1;
(statearr_32946_32971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (15))){
var inst_32929 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32947_32972 = state_32939__$1;
(statearr_32947_32972[(2)] = inst_32929);

(statearr_32947_32972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (13))){
var state_32939__$1 = state_32939;
var statearr_32948_32973 = state_32939__$1;
(statearr_32948_32973[(2)] = null);

(statearr_32948_32973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (6))){
var inst_32899 = (state_32939[(7)]);
var inst_32924 = inst_32899.length;
var inst_32925 = (inst_32924 > (0));
var state_32939__$1 = state_32939;
if(cljs.core.truth_(inst_32925)){
var statearr_32949_32974 = state_32939__$1;
(statearr_32949_32974[(1)] = (12));

} else {
var statearr_32950_32975 = state_32939__$1;
(statearr_32950_32975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (3))){
var inst_32937 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32939__$1,inst_32937);
} else {
if((state_val_32940 === (12))){
var inst_32899 = (state_32939[(7)]);
var inst_32927 = cljs.core.vec.call(null,inst_32899);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32939__$1,(15),out,inst_32927);
} else {
if((state_val_32940 === (2))){
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(4),ch);
} else {
if((state_val_32940 === (11))){
var inst_32903 = (state_32939[(9)]);
var inst_32907 = (state_32939[(10)]);
var inst_32917 = (state_32939[(2)]);
var inst_32918 = [];
var inst_32919 = inst_32918.push(inst_32903);
var inst_32899 = inst_32918;
var inst_32900 = inst_32907;
var state_32939__$1 = (function (){var statearr_32951 = state_32939;
(statearr_32951[(7)] = inst_32899);

(statearr_32951[(11)] = inst_32917);

(statearr_32951[(12)] = inst_32919);

(statearr_32951[(8)] = inst_32900);

return statearr_32951;
})();
var statearr_32952_32976 = state_32939__$1;
(statearr_32952_32976[(2)] = null);

(statearr_32952_32976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (9))){
var inst_32899 = (state_32939[(7)]);
var inst_32915 = cljs.core.vec.call(null,inst_32899);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32939__$1,(11),out,inst_32915);
} else {
if((state_val_32940 === (5))){
var inst_32900 = (state_32939[(8)]);
var inst_32903 = (state_32939[(9)]);
var inst_32907 = (state_32939[(10)]);
var inst_32907__$1 = f.call(null,inst_32903);
var inst_32908 = cljs.core._EQ_.call(null,inst_32907__$1,inst_32900);
var inst_32909 = cljs.core.keyword_identical_QMARK_.call(null,inst_32900,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32910 = ((inst_32908) || (inst_32909));
var state_32939__$1 = (function (){var statearr_32953 = state_32939;
(statearr_32953[(10)] = inst_32907__$1);

return statearr_32953;
})();
if(cljs.core.truth_(inst_32910)){
var statearr_32954_32977 = state_32939__$1;
(statearr_32954_32977[(1)] = (8));

} else {
var statearr_32955_32978 = state_32939__$1;
(statearr_32955_32978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (14))){
var inst_32932 = (state_32939[(2)]);
var inst_32933 = cljs.core.async.close_BANG_.call(null,out);
var state_32939__$1 = (function (){var statearr_32957 = state_32939;
(statearr_32957[(13)] = inst_32932);

return statearr_32957;
})();
var statearr_32958_32979 = state_32939__$1;
(statearr_32958_32979[(2)] = inst_32933);

(statearr_32958_32979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (10))){
var inst_32922 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32959_32980 = state_32939__$1;
(statearr_32959_32980[(2)] = inst_32922);

(statearr_32959_32980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (8))){
var inst_32899 = (state_32939[(7)]);
var inst_32903 = (state_32939[(9)]);
var inst_32907 = (state_32939[(10)]);
var inst_32912 = inst_32899.push(inst_32903);
var tmp32956 = inst_32899;
var inst_32899__$1 = tmp32956;
var inst_32900 = inst_32907;
var state_32939__$1 = (function (){var statearr_32960 = state_32939;
(statearr_32960[(7)] = inst_32899__$1);

(statearr_32960[(14)] = inst_32912);

(statearr_32960[(8)] = inst_32900);

return statearr_32960;
})();
var statearr_32961_32981 = state_32939__$1;
(statearr_32961_32981[(2)] = null);

(statearr_32961_32981[(1)] = (2));


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
});})(c__29201__auto___32967,out))
;
return ((function (switch__29034__auto__,c__29201__auto___32967,out){
return (function() {
var cljs$core$async$state_machine__29035__auto__ = null;
var cljs$core$async$state_machine__29035__auto____0 = (function (){
var statearr_32962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32962[(0)] = cljs$core$async$state_machine__29035__auto__);

(statearr_32962[(1)] = (1));

return statearr_32962;
});
var cljs$core$async$state_machine__29035__auto____1 = (function (state_32939){
while(true){
var ret_value__29036__auto__ = (function (){try{while(true){
var result__29037__auto__ = switch__29034__auto__.call(null,state_32939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29037__auto__;
}
break;
}
}catch (e32963){if((e32963 instanceof Object)){
var ex__29038__auto__ = e32963;
var statearr_32964_32982 = state_32939;
(statearr_32964_32982[(5)] = ex__29038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32983 = state_32939;
state_32939 = G__32983;
continue;
} else {
return ret_value__29036__auto__;
}
break;
}
});
cljs$core$async$state_machine__29035__auto__ = function(state_32939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29035__auto____1.call(this,state_32939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29035__auto____0;
cljs$core$async$state_machine__29035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29035__auto____1;
return cljs$core$async$state_machine__29035__auto__;
})()
;})(switch__29034__auto__,c__29201__auto___32967,out))
})();
var state__29203__auto__ = (function (){var statearr_32965 = f__29202__auto__.call(null);
(statearr_32965[(6)] = c__29201__auto___32967);

return statearr_32965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29203__auto__);
});})(c__29201__auto___32967,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1580192143649
