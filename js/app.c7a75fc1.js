(function(t){function e(e){for(var s,r,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},o=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09ea":function(t,e,n){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},22:function(t,e){},"2fa7":function(t,e,n){"use strict";var s=n("09ea"),a=n.n(s);a.a},3:function(t,e){},4:function(t,e){},5:function(t,e){},"52c7":function(t,e,n){t.exports=n.p+"img/metamask.a0103549.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-4 h-full min-h-full bg-blue-800 flex justify-center font-body",attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEnabled,expression:"isEnabled"}],staticClass:"w-full max-w-500px"},[n("EthereumBalance"),n("TokensTable")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEnabled,expression:"!isEnabled"}],staticClass:"w-full max-w-500px flex flex-col items-center justify-center"},[n("ConnectMetamask")],1)])},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white rounded-t-md shadow-xl text-center mt-12 mx-2 px-8 py-4"},[n("p",{staticClass:"mb-2 text-2xl"},[t._v("Your ETH balance is:")]),t.isLoading?n("p",{staticClass:"mb-0 font-mono text-3xl",domProps:{textContent:t._s("Loading...")}}):n("p",{staticClass:"mb-0 font-mono text-3xl"},[n("span",{domProps:{textContent:t._s(t.balance[0])}}),n("small",{staticClass:"opacity-50",domProps:{textContent:t._s("."+(t.balance[1]||0))}})]),n("p",{staticClass:"mb-0 text-xs opacity-50",domProps:{textContent:t._s("Address: "+t.address)}})]),n("div",{staticClass:"bg-white rounded-b-md shadow-xl mb-12 mx-2 px-6 py-3 border-t"},[n("p",{staticClass:"font-bold",domProps:{textContent:t._s("Send Ethereum:")}}),n("div",{staticClass:"flex my-1"},[n("label",{staticClass:"mr-2",attrs:{for:"address"}},[t._v("Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.addressTo,expression:"addressTo"}],staticClass:"flex-1 border rounded px-2",attrs:{id:"address",placeholder:"0x..."},domProps:{value:t.addressTo},on:{input:function(e){e.target.composing||(t.addressTo=e.target.value)}}})]),n("div",{staticClass:"flex my-1"},[n("label",{staticClass:"mr-2",attrs:{for:"amount"}},[t._v("Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"flex-1 border rounded px-2",attrs:{id:"amount",placeholder:"0"},domProps:{value:t.amount},on:{input:[function(e){e.target.composing||(t.amount=e.target.value)},t.checkComma]}})]),n("div",{staticClass:"mt-2 flex"},[n("p",{staticClass:"flex-1 py-1",domProps:{textContent:t._s(""!==t.status?"Status: "+t.status:"")}}),""!==t.tx?n("a",{staticClass:"px-2 py-1 rounded mx-2",attrs:{href:"https://etherscan.io/tx/"+t.tx,target:"_blank"},domProps:{textContent:t._s("View on Etherscan")}}):t._e(),n("button",{staticClass:"px-4 py-1 rounded bg-yellow-500 hover:bg-yellow-300",class:{"opacity-50":t.disabled},attrs:{disabled:t.disabled},domProps:{textContent:t._s("🚀 Send ETH")},on:{click:t.send}})])])])},u=[],c=(n("99af"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("96cf"),n("1da1"));n("5319");function d(t){return Math.round(100*t)/100}function l(t){return t.replace(/,/g,".")}var p={name:"EthereumBalance",data:function(){return{ether:0,isLoading:!0,isSending:!1,addressTo:"",amount:"",tx:"",status:""}},watch:{address:function(){this.checkBalance()}},computed:{balance:function(){return this.ether.split(".")},address:function(){return this.$store.getters.address},disabled:function(){return""===this.addressTo||""===this.amount||this.isSending}},methods:{setDefaults:function(){this.ether=0,this.isLoading=!0,this.isSending=!1,this.addressTo="",this.amount="",this.tx="",this.status=""},checkBalance:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setDefaults(),window.web3.eth.getBalance(t.address).then((function(e){t.ether=window.web3.utils.fromWei(e,"ether"),t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},send:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=window.web3.utils.toWei(t.amount.toString(),"ether"),confirm("Are you sure want to send ".concat(t.amount,"ETH to ").concat(t.addressTo," address?"))&&(t.isSending=!0,t.status="Pending",window.web3.eth.sendTransaction({from:t.address,to:t.addressTo,value:n}).on("transactionHash",(function(e){t.tx=e})).on("confirmation",(function(){t.status="Success",t.isSending=!1})).on("error",(function(){t.status="Fail",t.isSending=!1})));case 2:case"end":return e.stop()}}),e)})))()},checkComma:function(){this.amount=l(this.amount)}}},m=p,f=n("2877"),b=Object(f["a"])(m,i,u,!1,null,null,null),h=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tokens,(function(t,e){return n("TokenRow",{key:e,attrs:{token:t}})})),1)},v=[],x=n("bc3a"),w=n.n(x),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex\n        flex-column\n        items-center\n        justify-between\n        rounded\n        shadow-md\n        bg-white\n        mx-4\n        py-2\n        px-4",class:{hidden:"Unnamed Token"===t.name,"mb-6":!t.isSendButtonActive,"mb-3":t.isSendButtonActive}},[t.info.image?n("figure",{staticClass:"flex items-center w-12 h-12 mr-4"},[n("img",{attrs:{src:"https://ethplorer.io"+t.info.image,alt:t.name}})]):t._e(),n("div",{staticClass:"flex-1"},[n("p",{staticClass:"text-lg"},[t._v(" "+t._s(t.name)+" "),t.symbol?n("span",{staticClass:"font-bold",domProps:{textContent:t._s("("+t.symbol+")")}}):t._e()]),n("p",{staticClass:"text-sm opacity-75"},[t._v(" Balance: "),n("span",{staticClass:"font-mono",domProps:{textContent:t._s(t.balance)}}),t.info.price?n("span",{staticClass:"ml-2",domProps:{textContent:t._s(t.price)}}):t._e()])]),n("div",{staticClass:"font-bold"},[n("button",{staticClass:"px-2 py-1 rounded",class:{"bg-gray-200":t.isSendButtonActive},on:{click:function(e){t.isSendButtonActive=!t.isSendButtonActive}}},[t._v(" 📮 Send ")])])]),n("transition",{attrs:{name:"fade"}},[t.isSendButtonActive?n("SendToken",{attrs:{token:t.token}}):t._e()],1)],1)},C=[],_=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-6 mx-4 py-2 px-4 bg-white rounded"},[n("p",{staticClass:"font-bold",domProps:{textContent:t._s("Send "+t.info.name+":")}}),n("div",{staticClass:"flex my-1"},[n("label",{staticClass:"mr-2",attrs:{for:"address"}},[t._v("Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.addressTo,expression:"addressTo"}],staticClass:"flex-1 border rounded px-2",attrs:{id:"address",placeholder:"0x..."},domProps:{value:t.addressTo},on:{input:function(e){e.target.composing||(t.addressTo=e.target.value)}}})]),n("div",{staticClass:"flex my-1"},[n("label",{staticClass:"mr-2",attrs:{for:"amount"}},[t._v("Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"flex-1 border rounded px-2",attrs:{id:"amount",placeholder:"0"},domProps:{value:t.amount},on:{input:[function(e){e.target.composing||(t.amount=e.target.value)},t.checkComma]}})]),n("div",{staticClass:"mt-2 flex"},[n("p",{staticClass:"flex-1 py-1",domProps:{textContent:t._s(""!==t.status?"Status: "+t.status:"")}}),""!==t.tx?n("a",{staticClass:"px-2 py-1 rounded mx-2",attrs:{href:"https://etherscan.io/tx/"+t.tx,target:"_blank"},domProps:{textContent:t._s("View on Etherscan")}}):t._e(),n("button",{staticClass:"px-4 py-1 rounded bg-yellow-500 hover:bg-yellow-300 disabled:opacity-50",class:{"opacity-50":t.disabled},attrs:{disabled:t.disabled},domProps:{textContent:t._s("🚀 Confirm")},on:{click:t.send}})])])}),k=[],T=n("f85f"),S={name:"SendToken",props:{token:{type:Object,required:!0}},data:function(){return{addressTo:"",amount:"",tx:"",isSending:!1,status:""}},computed:{info:function(){return this.token.tokenInfo},address:function(){return this.$store.getters.address},disabled:function(){return""===this.addressTo||""===this.amount||this.isSending}},methods:{send:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:confirm("Are you sure want to send ".concat(t.amount).concat(t.info.symbol," to ").concat(t.addressTo," address?"))&&(t.isSending=!0,t.status="Pending",n=t.info.address,s=new window.web3.eth.Contract(T,n),a=Math.round(t.amount*Math.pow(10,t.info.decimals)),s.methods.transfer(t.addressTo,a).send({from:t.address}).on("transactionHash",(function(e){t.tx=e})).on("confirmation",(function(){t.status="Success",t.isSending=!1})).on("error",(function(){t.status="Fail",t.isSending=!1})));case 1:case"end":return e.stop()}}),e)})))()},checkComma:function(){this.amount=l(this.amount)}}},P=S,M=Object(f["a"])(P,_,k,!1,null,null,null),O=M.exports,j={name:"TokenRow",props:{token:{type:Object,required:!0}},components:{SendToken:O},data:function(){return{isSendButtonActive:!1}},computed:{info:function(){return this.token.tokenInfo},name:function(){return this.info.name||"Unnamed Token"},symbol:function(){return this.info.symbol||!1},balance:function(){return this.token.balance/(Math.pow(10,this.info.decimals)||1)},price:function(){return!!this.info.price&&"($".concat(d(this.balance*this.info.price.rate),")")}}},E=j,A=(n("2fa7"),Object(f["a"])(E,g,C,!1,null,null,null)),B=A.exports,$={name:"TokensTable",components:{TokenRow:B},data:function(){return{tokens:[]}},watch:{address:function(t){var e=this;""!==t&&w.a.get("https://api.ethplorer.io/getAddressInfo/".concat(this.address,"?apiKey=").concat("freekey")).then((function(t){var n=t.data;e.tokens=n.tokens}))}},computed:{address:function(){return this.$store.getters.address}}},R=$,N=Object(f["a"])(R,y,v,!1,null,null,null),H=N.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"rounded shadow-md bg-white px-4 py-2 mx-2 leading-8",on:{click:t.connectMetamask}},[s("img",{staticClass:"inline-block mr-2",attrs:{src:n("52c7"),width:"24",height:"24",alt:"Metamask"}}),t._v(" Connect Metamask ")])},q=[],F=n("3835"),I=n("99e5"),J=n.n(I),D={name:"ConnectMetamask",methods:{connectMetamask:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=11;break}return window.web3=new J.a(window.ethereum),window.ethereum.enable(),e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:n=e.sent,s=Object(F["a"])(n,1),a=s[0],t.$store.commit("address",a),e.next=12;break;case 11:console.error("MetaMask is not detected!");case 12:case"end":return e.stop()}}),e)})))()}}},U=D,V=Object(f["a"])(U,L,q,!1,null,null,null),W=V.exports,K={components:{EthereumBalance:h,TokensTable:H,ConnectMetamask:W},computed:{address:function(){return this.$store.getters.address},isEnabled:function(){return""!==this.address}}},Y=K,z=Object(f["a"])(Y,o,r,!1,null,null,null),G=z.exports;n("ba8c");s["a"].use(a["a"]);var Q=new a["a"].Store({state:{address:""},getters:{address:function(t){return t.address}},mutations:{address:function(t,e){t.address=e}}});s["a"].config.productionTip=!1,new s["a"]({store:Q,render:function(t){return t(G)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},ba8c:function(t,e,n){},f85f:function(t){t.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')}});
//# sourceMappingURL=app.c7a75fc1.js.map