module.exports=(()=>{var t={932:(t,n,r)=>{"use strict";var e=r(260);e.main()},351:function(t,n,r){"use strict";var e=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var r in t)if(Object.hasOwnProperty.call(t,r))n[r]=t[r];n["default"]=t;return n};Object.defineProperty(n,"__esModule",{value:true});const o=e(r(87));function issueCommand(t,n,r){const e=new Command(t,n,r);process.stdout.write(e.toString()+o.EOL)}n.issueCommand=issueCommand;function issue(t,n=""){issueCommand(t,{},n)}n.issue=issue;const i="::";class Command{constructor(t,n,r){if(!t){t="missing.command"}this.command=t;this.properties=n;this.message=r}toString(){let t=i+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let n=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const e=this.properties[r];if(e){if(n){n=false}else{t+=","}t+=`${r}=${escapeProperty(e)}`}}}}t+=`${i}${escapeData(this.message)}`;return t}}function toCommandValue(t){if(t===null||t===undefined){return""}else if(typeof t==="string"||t instanceof String){return t}return JSON.stringify(t)}n.toCommandValue=toCommandValue;function escapeData(t){return toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(t){return toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(t,n,r){"use strict";var e=this&&this.__awaiter||function(t,n,r,e){function adopt(t){return t instanceof r?t:new r(function(n){n(t)})}return new(r||(r=Promise))(function(r,o){function fulfilled(t){try{step(e.next(t))}catch(t){o(t)}}function rejected(t){try{step(e["throw"](t))}catch(t){o(t)}}function step(t){t.done?r(t.value):adopt(t.value).then(fulfilled,rejected)}step((e=e.apply(t,n||[])).next())})};var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var r in t)if(Object.hasOwnProperty.call(t,r))n[r]=t[r];n["default"]=t;return n};Object.defineProperty(n,"__esModule",{value:true});const i=r(351);const u=o(r(87));const a=o(r(622));var c;(function(t){t[t["Success"]=0]="Success";t[t["Failure"]=1]="Failure"})(c=n.ExitCode||(n.ExitCode={}));function exportVariable(t,n){const r=i.toCommandValue(n);process.env[t]=r;i.issueCommand("set-env",{name:t},r)}n.exportVariable=exportVariable;function setSecret(t){i.issueCommand("add-mask",{},t)}n.setSecret=setSecret;function addPath(t){i.issueCommand("add-path",{},t);process.env["PATH"]=`${t}${a.delimiter}${process.env["PATH"]}`}n.addPath=addPath;function getInput(t,n){const r=process.env[`INPUT_${t.replace(/ /g,"_").toUpperCase()}`]||"";if(n&&n.required&&!r){throw new Error(`Input required and not supplied: ${t}`)}return r.trim()}n.getInput=getInput;function setOutput(t,n){i.issueCommand("set-output",{name:t},n)}n.setOutput=setOutput;function setCommandEcho(t){i.issue("echo",t?"on":"off")}n.setCommandEcho=setCommandEcho;function setFailed(t){process.exitCode=c.Failure;error(t)}n.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}n.isDebug=isDebug;function debug(t){i.issueCommand("debug",{},t)}n.debug=debug;function error(t){i.issue("error",t instanceof Error?t.toString():t)}n.error=error;function warning(t){i.issue("warning",t instanceof Error?t.toString():t)}n.warning=warning;function info(t){process.stdout.write(t+u.EOL)}n.info=info;function startGroup(t){i.issue("group",t)}n.startGroup=startGroup;function endGroup(){i.issue("endgroup")}n.endGroup=endGroup;function group(t,n){return e(this,void 0,void 0,function*(){startGroup(t);let r;try{r=yield n()}finally{endGroup()}return r})}n.group=group;function saveState(t,n){i.issueCommand("save-state",{name:t},n)}n.saveState=saveState;function getState(t){return process.env[`STATE_${t}`]||""}n.getState=getState},260:(t,n,r)=>{var e={};(function(t){"use strict";t["Data.Functor"]=t["Data.Functor"]||{};var n=t["Data.Functor"];var r=function(t){this.map=t};var e=function(t){return t.map};n["Functor"]=r;n["map"]=e})(e);(function(t){"use strict";t["Control.Apply"]=t["Control.Apply"]||{};var n=t["Control.Apply"];var r=t["Data.Functor"];var e=function(t,n){this.Functor0=t;this.apply=n};var o=function(t){return t.apply};var i=function(t){return function(n){return function(e){return function(i){return o(t)(r.map(t.Functor0())(n)(e))(i)}}}};n["Apply"]=e;n["apply"]=o;n["lift2"]=i})(e);(function(t){"use strict";t["Control.Applicative"]=t["Control.Applicative"]||{};var n=t["Control.Applicative"];var r=t["Control.Apply"];var e=function(t,n){this.Apply0=t;this.pure=n};var o=function(t){return t.pure};var i=function(t){return function(n){return function(e){return r.apply(t.Apply0())(o(t)(n))(e)}}};n["Applicative"]=e;n["pure"]=o;n["liftA1"]=i})(e);(function(t){"use strict";t["Control.Bind"]=t["Control.Bind"]||{};var n=t["Control.Bind"];var r=function(t,n){this.Apply0=t;this.bind=n};var e=function(t){return t.bind};n["Bind"]=r;n["bind"]=e})(e);(function(t){"use strict";t["Control.Semigroupoid"]=t["Control.Semigroupoid"]||{};var n=t["Control.Semigroupoid"];var r=function(t){this.compose=t};var e=new r(function(t){return function(n){return function(r){return t(n(r))}}});n["semigroupoidFn"]=e})(e);(function(t){"use strict";t["Control.Category"]=t["Control.Category"]||{};var n=t["Control.Category"];var r=t["Control.Semigroupoid"];var e=function(t,n){this.Semigroupoid0=t;this.identity=n};var o=function(t){return t.identity};var i=new e(function(){return r.semigroupoidFn},function(t){return t});n["identity"]=o;n["categoryFn"]=i})(e);(function(t){"use strict";t["Control.Monad"]=t["Control.Monad"]||{};var n=t["Control.Monad"];var r=t["Control.Applicative"];var e=t["Control.Bind"];var o=function(t,n){this.Applicative0=t;this.Bind1=n};var i=function(t){return function(n){return function(o){return e.bind(t.Bind1())(n)(function(n){return e.bind(t.Bind1())(o)(function(e){return r.pure(t.Applicative0())(n(e))})})}}};n["Monad"]=o;n["ap"]=i})(e);(function(t){"use strict";t["Data.Either"]=t["Data.Either"]||{};var n=t["Data.Either"];var r=t["Data.Functor"];var e=function(){function Left(t){this.value0=t}Left.create=function(t){return new Left(t)};return Left}();var o=function(){function Right(t){this.value0=t}Right.create=function(t){return new Right(t)};return Right}();var i=new r.Functor(function(t){return function(n){if(n instanceof e){return new e(n.value0)}if(n instanceof o){return new o(t(n.value0))}throw new Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): "+[n.constructor.name])}});var u=function(t){return function(n){return function(r){if(r instanceof e){return t(r.value0)}if(r instanceof o){return n(r.value0)}throw new Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): "+[t.constructor.name,n.constructor.name,r.constructor.name])}}};n["Left"]=e;n["Right"]=o;n["either"]=u;n["functorEither"]=i})(e);(function(t){"use strict";t["Data.Function"]=t["Data.Function"]||{};var n=t["Data.Function"];var r=function(t){return function(n){return function(r){return t(r)(n)}}};n["flip"]=r})(e);(function(t){"use strict";t.pureE=function(t){return function(){return t}};t.bindE=function(t){return function(n){return function(){return n(t())()}}}})(e["Effect"]=e["Effect"]||{});(function(t){"use strict";t.unit={}})(e["Data.Unit"]=e["Data.Unit"]||{});(function(t){"use strict";t["Data.Unit"]=t["Data.Unit"]||{};var n=t["Data.Unit"];var r=t["Data.Unit"];n["unit"]=r.unit})(e);(function(t){"use strict";t["Data.Semigroup"]=t["Data.Semigroup"]||{};var n=t["Data.Semigroup"];var r=t["Data.Unit"];var e=function(t){this.append=t};var o=new e(function(t){return function(t){return r.unit}});var i=function(t){return t.append};n["Semigroup"]=e;n["append"]=i;n["semigroupUnit"]=o})(e);(function(t){"use strict";t["Data.Monoid"]=t["Data.Monoid"]||{};var n=t["Data.Monoid"];var r=t["Data.Semigroup"];var e=t["Data.Unit"];var o=function(t,n){this.Semigroup0=t;this.mempty=n};var i=new o(function(){return r.semigroupUnit},e.unit);var u=function(t){return t.mempty};n["Monoid"]=o;n["mempty"]=u;n["monoidUnit"]=i})(e);(function(t){"use strict";t["Effect"]=t["Effect"]||{};var n=t["Effect"];var r=t["Effect"];var e=t["Control.Applicative"];var o=t["Control.Apply"];var i=t["Control.Bind"];var u=t["Control.Monad"];var a=t["Data.Functor"];var c=t["Data.Monoid"];var f=t["Data.Semigroup"];var s=new u.Monad(function(){return v},function(){return p});var p=new i.Bind(function(){return l},r.bindE);var l=new o.Apply(function(){return d},u.ap(s));var v=new e.Applicative(function(){return l},r.pureE);var d=new a.Functor(e.liftA1(v));var m=function(t){return new f.Semigroup(o.lift2(l)(f.append(t)))};var E=function(t){return new c.Monoid(function(){return m(t.Semigroup0())},r.pureE(c.mempty(t)))};n["monadEffect"]=s;n["monoidEffect"]=E})(e);(function(t){"use strict";t.message=function(t){return t.message};t.throwException=function(t){return function(){throw t}};t.catchException=function(t){return function(n){return function(){try{return n()}catch(n){if(n instanceof Error||Object.prototype.toString.call(n)==="[object Error]"){return t(n)()}else{return t(new Error(n.toString()))()}}}}}})(e["Effect.Exception"]=e["Effect.Exception"]||{});(function(t){"use strict";t["Effect.Exception"]=t["Effect.Exception"]||{};var n=t["Effect.Exception"];var r=t["Effect.Exception"];n["message"]=r.message;n["throwException"]=r.throwException;n["catchException"]=r.catchException})(e);(function(t){"use strict";t["Control.Monad.Error.Class"]=t["Control.Monad.Error.Class"]||{};var n=t["Control.Monad.Error.Class"];var r=t["Control.Applicative"];var e=t["Data.Either"];var o=t["Data.Function"];var i=t["Data.Functor"];var u=t["Effect"];var a=t["Effect.Exception"];var c=function(t,n){this.Monad0=t;this.throwError=n};var f=function(t,n){this.MonadThrow0=t;this.catchError=n};var s=new c(function(){return u.monadEffect},a.throwException);var p=new f(function(){return s},o.flip(a.catchException));var l=function(t){return t.catchError};var v=function(t){return function(n){return l(t)(i.map(t.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(e.Right.create)(n))(function(){var n=r.pure(t.MonadThrow0().Monad0().Applicative0());return function(t){return n(e.Left.create(t))}}())}};n["try"]=v;n["monadErrorEffect"]=p})(e);(function(t){"use strict";t["Control.Monad.Trans.Class"]=t["Control.Monad.Trans.Class"]||{};var n=t["Control.Monad.Trans.Class"];var r=function(t){this.lift=t};var e=function(t){return t.lift};n["lift"]=e;n["MonadTrans"]=r})(e);(function(t){"use strict";t["Effect.Class"]=t["Effect.Class"]||{};var n=t["Effect.Class"];var r=t["Control.Category"];var e=t["Effect"];var o=function(t,n){this.Monad0=t;this.liftEffect=n};var i=new o(function(){return e.monadEffect},r.identity(r.categoryFn));var u=function(t){return t.liftEffect};n["liftEffect"]=u;n["MonadEffect"]=o;n["monadEffectEffect"]=i})(e);(function(t){"use strict";t["Control.Monad.Except.Trans"]=t["Control.Monad.Except.Trans"]||{};var n=t["Control.Monad.Except.Trans"];var r=t["Control.Applicative"];var e=t["Control.Apply"];var o=t["Control.Bind"];var i=t["Control.Monad"];var u=t["Control.Monad.Trans.Class"];var a=t["Data.Either"];var c=t["Data.Functor"];var f=t["Effect.Class"];var s=function(t){return t};var p=function(t){return t};var l=new u.MonadTrans(function(t){return function(n){return o.bind(t.Bind1())(n)(function(n){return r.pure(t.Applicative0())(new a.Right(n))})}});var v=function(t){return function(n){return t(n)}};var d=function(t){return new c.Functor(function(n){return v(c.map(t)(c.map(a.functorEither)(n)))})};var m=function(t){return new i.Monad(function(){return g(t)},function(){return E(t)})};var E=function(t){return new o.Bind(function(){return h(t)},function(n){return function(e){return o.bind(t.Bind1())(n)(a.either(function(){var n=r.pure(t.Applicative0());return function(t){return n(a.Left.create(t))}}())(function(t){var n=e(t);return n}))}})};var h=function(t){return new e.Apply(function(){return d(t.Bind1().Apply0().Functor0())},i.ap(m(t)))};var g=function(t){return new r.Applicative(function(){return h(t)},function(){var n=r.pure(t.Applicative0());return function(t){return s(n(a.Right.create(t)))}}())};var C=function(t){return new f.MonadEffect(function(){return m(t.Monad0())},function(){var n=u.lift(l)(t.Monad0());var r=f.liftEffect(t);return function(t){return n(r(t))}}())};n["ExceptT"]=s;n["runExceptT"]=p;n["bindExceptT"]=E;n["monadEffectExceptT"]=C})(e);(function(t){"use strict";t["Data.Maybe"]=t["Data.Maybe"]||{};var n=t["Data.Maybe"];var r=function(){function Nothing(){}Nothing.value=new Nothing;return Nothing}();var e=function(){function Just(t){this.value0=t}Just.create=function(t){return new Just(t)};return Just}();n["Nothing"]=r;n["Just"]=e})(e);(function(t){"use strict";t.runEffectFn1=function runEffectFn1(t){return function(n){return function(){return t(n)}}}})(e["Effect.Uncurried"]=e["Effect.Uncurried"]||{});(function(t){"use strict";t["Effect.Uncurried"]=t["Effect.Uncurried"]||{};var n=t["Effect.Uncurried"];var r=t["Effect.Uncurried"];n["runEffectFn1"]=r.runEffectFn1})(e);(function(t){"use strict";const n=r(186);t.getInput1Impl=n.getInput;t.getInput2Impl=n.getInput;t.setFailedImpl=n.setFailed;t.infoImpl=n.info})(e["GitHub.Actions.Core"]=e["GitHub.Actions.Core"]||{});(function(t){"use strict";t["GitHub.Actions.Core"]=t["GitHub.Actions.Core"]||{};var n=t["GitHub.Actions.Core"];var r=t["GitHub.Actions.Core"];var e=t["Control.Monad.Error.Class"];var o=t["Control.Monad.Except.Trans"];var i=t["Data.Maybe"];var u=t["Effect.Uncurried"];var a=u.runEffectFn1(r.setFailedImpl);var c=u.runEffectFn1(r.infoImpl);var f=function(){var t=function(t){if(t.options instanceof i.Nothing){return function(){return r.getInput1Impl(t.name)}}if(t.options instanceof i.Just){return function(){return r.getInput2Impl(t.name,t.options.value0)}}throw new Error("Failed pattern match at GitHub.Actions.Core (line 85, column 37 - line 87, column 54): "+[t.options.constructor.name])};var n=e["try"](e.monadErrorEffect);return function(r){return o.ExceptT(n(t(r)))}}();n["getInput"]=f;n["setFailed"]=a;n["info"]=c})(e);(function(t){"use strict";t["Main"]=t["Main"]||{};var n=t["Main"];var r=t["Control.Bind"];var e=t["Control.Monad.Except.Trans"];var o=t["Data.Either"];var i=t["Data.Maybe"];var u=t["Data.Monoid"];var a=t["Effect"];var c=t["Effect.Class"];var f=t["Effect.Exception"];var s=t["GitHub.Actions.Core"];var p=function __do(){var t=e.runExceptT(r.bind(e.bindExceptT(a.monadEffect))(s.getInput({name:"who-to-greet",options:new i.Just({required:true})}))(function(t){return c.liftEffect(e.monadEffectExceptT(c.monadEffectEffect))(s.info("Hello, "+(t+"!")))}))();if(t instanceof o.Right){return u.mempty(a.monoidEffect(u.monoidUnit))()}if(t instanceof o.Left){return s.setFailed(f.message(t.value0))()}throw new Error("Failed pattern match at Main (line 18, column 3 - line 21, column 35): "+[t.constructor.name])};n["main"]=p})(e);t.exports=e["Main"]},87:t=>{"use strict";t.exports=require("os")},622:t=>{"use strict";t.exports=require("path")}};var n={};function __webpack_require__(r){if(n[r]){return n[r].exports}var e=n[r]={exports:{}};var o=true;try{t[r].call(e.exports,e,e.exports,__webpack_require__);o=false}finally{if(o)delete n[r]}return e.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(932)})();