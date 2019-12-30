(this["webpackJsonpreact-sudoku"]=this["webpackJsonpreact-sudoku"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(10),a=n.n(i),c=(n(17),n(7)),l=n(1),u=n(2),s=n(5),v=n(4),f=n(3),h=n(6),d=(n(18),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",{className:"title"},"Sudoku!"))}}]),t}(r.Component)),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(v.a)(t).call(this))).handleChange=e.handleChange.bind(Object(f.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e,t,n){e.preventDefault(),console.log(e.target.value);var r=t,o=n;/^$|[1-9]/.test(e.target.value)&&this.props.updateGrid(r,o,e.target.value)}},{key:"componentDidMount",value:function(){this.props.newGrid("grid_01")}},{key:"clickHandler",value:function(e){e.target.select()}},{key:"col",value:function(e,t){var n=this;return Object(c.a)(Array(9).keys()).map((function(r){return o.a.createElement("textarea",{className:"box",maxLength:"1",onClick:n.clickHandler,key:"col-".concat(r+1),value:t[e][r],onChange:function(t){return n.handleChange(t,e,r)},style:{color:n.props.solved?"Green":""}})}))}},{key:"render",value:function(){var e=this,t=this.props.grid;return o.a.createElement("div",{className:"sudokuBoxContainer"},o.a.createElement("div",{className:"sudokuBox"},Object(c.a)(Array(9).keys()).map((function(n){return o.a.createElement("div",{className:"row",key:"row-".concat(n+1)},e.col(n,t))}))))}}]),t}(r.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.solved?e=o.a.createElement("p",null,"Solution is Correct!"):!1===this.props.solved&&(e=o.a.createElement("p",null,"That's not a valid solution! :(")),o.a.createElement("div",{className:"window"},o.a.createElement(p,{grid:this.props.grid,solved:this.props.solved,newGrid:this.props.newGrid,updateGrid:this.props.updateGrid}),o.a.createElement("div",{className:"grid-choices"},o.a.createElement("p",null,"Scenarios:",o.a.createElement("button",{onClick:function(){return t.props.newGrid()}},"Empty Grid"),o.a.createElement("button",{onClick:function(){return t.props.newGrid("grid_01")}},"New Grid 01"),o.a.createElement("button",{onClick:function(){return t.props.newGrid("grid_02")}},"New Grid 02"),o.a.createElement("button",{onClick:function(){return t.props.newGrid("grid_03")}},"New Grid 03"))),o.a.createElement("div",{className:"check-sol-button"},o.a.createElement("button",{onClick:function(){return t.props.checkSolution()}},"Check Solution"),e))}}]),t}(r.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"rightBox"},o.a.createElement("p",null,"Console Commands:",o.a.createElement("button",{onClick:function(){return e.props.calcOptions()}},"Calculate Options"),o.a.createElement("button",{onClick:function(){return e.props.calcUniqueOptions()}},"Calculate Unique Options")),o.a.createElement("div",null,"Depreciated Solution Methods",o.a.createElement("div",{className:"sol-1-buttons"},o.a.createElement("p",null,"Method 1:",o.a.createElement("button",{onClick:function(){return e.props.solveSol1()}},"x1"),o.a.createElement("button",{onClick:function(){return e.props.solveSol1(5)}},"x5"),o.a.createElement("button",{onClick:function(){return e.props.solveSol1(10)}},"x10"))),o.a.createElement("div",{className:"sol-2-buttons"},o.a.createElement("p",null,"Method 2:",o.a.createElement("button",{onClick:function(){return e.props.solveSol2()}},"x1"),o.a.createElement("button",{onClick:function(){return e.props.solveSol2(5)}},"x5"),o.a.createElement("button",{onClick:function(){return e.props.solveSol2(10)}},"x10"))),o.a.createElement("div",{className:"full-sol-button"},o.a.createElement("button",{onClick:function(){return e.props.attemptFullSolve(10)}},"Attempt Full Solve (M1+2)")),o.a.createElement("p",null,"..............................")),o.a.createElement("div",null,"Iterative Solver:",o.a.createElement("div",{className:"brute-sol-button"},o.a.createElement("p",null,"TRY:"),o.a.createElement("button",{onClick:function(){return e.props.bruteSolve()}},"Brute Solve"))))}}]),t}(r.Component);function g(e,t){var n=[];for(var r in t)n.push(t[r][e]);return n}function k(e,t,n){return new Array(9).fill("").map((function(r,o){var i=Math.floor(o/3)+3*Math.floor(e/3),a=o-3*Math.floor(o/3)+3*Math.floor(t/3);return n[i][a]}))}function y(e){for(var t=[],n=0,r=[1,2,3,4,5,6,7,8,9];n<r.length;n++){var o=r[n];e.includes(o)||t.push(o)}return t}var O=function(e){var t=[];for(var n in e){var r=e[n];for(var o in e[n])if(""===e[n][o]){var i=g(o,e),a=k(n,o,e),c=[].concat(r).concat(i).concat(a);t[9*Number(n)+Number(o)]=y(c)}else t[9*Number(n)+Number(o)]=[]}return t};function S(e,t){var n=[];for(var r in t)n.push(t[r][e]);return n}function j(e,t,n){return new Array(9).fill(0).map((function(r,o){var i=Math.floor(o/3)+3*Math.floor(e/3),a=o-3*Math.floor(o/3)+3*Math.floor(t/3);return n[i][a]||0}))}function w(e,t){var n=[],r=e.reduce((function(e,t){return e.concat(t)})),o=!0,i=!1,a=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;r.includes(u)||n.push(u)}}catch(s){i=!0,a=s}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return n}var C=function(e){var t=[];for(var n in e){var r=e[n];for(var o in e[n])if(e[n][o]!==[]){var i=Object(c.a)(r),a=S(o,e),l=j(n,o,e);i.splice(o,1),a.splice(n,1),l.splice(o-3*Math.floor(o/3)+3*n-9*Math.floor(n/3),1),t[9*Number(n)+Number(o)]=w(i,e[n][o]).concat(w(a,e[n][o])).concat(w(l,e[n][o])).splice(0,1)}else t[9*Number(n)+Number(o)]=[]}return t},E=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"checkGrid",value:function(e){return this.checkRows(e)&&this.checkColumns(e)&&this.checkSquares(e)}},{key:"checkRows",value:function(e){for(var t=0;t<9;t++){var n=e[t];if(!this.containsOneToNine(n))return!1}return!0}},{key:"checkColumns",value:function(e){for(var t=this,n=function(n){var r=e.map((function(e){return e[n]}));if(!t.containsOneToNine(r))return{v:!1}},r=0;r<9;r++){var o=n(r);if("object"===typeof o)return o.v}return!0}},{key:"checkSquares",value:function(e){for(var t=this,n=function(n){var r=e.filter((function(e,t){return Math.floor(t/3)===Math.floor(n/3)})).map((function(e){return e.slice(n%3*3,n%3*3+3)})).flat();if(!t.containsOneToNine(r))return{v:!1}},r=0;r<9;r++){var o=n(r);if("object"===typeof o)return o.v}return!0}},{key:"containsOneToNine",value:function(e){for(var t=1;t<=9;t++)if(!e.includes(t))return!1;return!0}}]),e}();function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=O(e),r={};for(var o in t-=1,console.log("Run Sol 1. Iterations left: ".concat(t)),n){var i=n[o];1===i.length&&(r[o]=i[0])}return 0===Object.keys(r).length?{grid:e,iterLeft:t}:(e=x(e,r),t>=1?N(e,t):{grid:e,iterLeft:t})}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=O(e),r=C(M(n)),o={};for(var i in t-=1,console.log("Run Sol 2. Iterations left: ".concat(t)),r){var a=r[i];1===a.length&&(o[i]=a[0])}return 0===Object.keys(o).length?{grid:e,iterLeft:t}:(e=x(e,o),t>=1?G(e,t):{grid:e,iterLeft:t})}function x(e,t){for(var n in t){var r=Math.floor(n/9),o=n-9*r;console.log("Changing ".concat(r,":").concat(o,",(").concat(n,")   :  ").concat(t[n])),e[r][o]=t[n]}return e}function M(e){var t=new Array(9).fill("").map((function(){return new Array(9).fill("").map((function(){return""}))}));for(var n in t)for(var r in t)t[n][r]=e[Number(r)+9*Number(n)];return t}var q=n(8),F=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"grid",value:function(e){return this.checkRows(e)&&this.checkColumns(e)&&this.checkSquares(e)}},{key:"checkRows",value:function(e){for(var t=0;t<9;t++){var n=e[t];if(this.hasDuplicates(n))return!1}return!0}},{key:"checkColumns",value:function(e){for(var t=this,n=function(n){var r=e.map((function(e){return e[n]}));if(t.hasDuplicates(r))return{v:!1}},r=0;r<9;r++){var o=n(r);if("object"===typeof o)return o.v}return!0}},{key:"checkSquares",value:function(e){for(var t=this,n=function(n){var r=e.filter((function(e,t){return Math.floor(t/3)===Math.floor(n/3)})).map((function(e){return e.slice(n%3*3,n%3*3+3)})).flat();if(t.hasDuplicates(r))return{v:!1}},r=0;r<9;r++){var o=n(r);if("object"===typeof o)return o.v}return!0}},{key:"hasDuplicates",value:function(e){for(var t=[],n=0;n<=e.length;n++)if(void 0===t[e[n]])t[e[n]]=1;else if(""!==e[n])return!0;return!1}}]),e}();function A(e){var t=[],n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;t.push(Object(c.a)(l))}}catch(u){r=!0,o=u}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return t}var T=new E,U=new F,_=function(){function e(){Object(l.a)(this,e),this.iterations=0,this.maxIterations=1e5}return Object(u.a)(e,[{key:"solve",value:function(e){this.iterations=0;var t=this.iterativeFill(e);return t?{grid:t}:{grid:e}}},{key:"recursivelyFillGrid",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=Object(q.a)(t,2),r=n[0],o=n[1];if(this.iterations++,this.iterations>this.maxIterations)throw console.table(e),console.log("iterations: ".concat(this.iterations)),new Error("Unsolvable");var i=O(e),a=i[9*r+o];if(i.filter((function(e){return 0!==e.length})).length+e.flat().filter((function(e){return 0!==e.length})).length<81)return!1;if(8===r&&8===o)return""===e[r][o]&&(e[r][o]=i[9*r+o]),console.log("Completed in : ".concat(this.iterations," iterations.")),!!T.checkGrid(e)&&e;if(0===a.length){if(""===e[r][o])return!1;var c=this.recursivelyFillGrid(e,this.nextCoordinate(r,o));if(c)return c}else{var l=!0,u=!1,s=void 0;try{for(var v,f=a[Symbol.iterator]();!(l=(v=f.next()).done);l=!0){var h=v.value,d=A(e);d[r][o]=h;var p=this.recursivelyFillGrid(d,this.nextCoordinate(r,o));if(p)return p}}catch(b){u=!0,s=b}finally{try{l||null==f.return||f.return()}finally{if(u)throw s}}}return!1}},{key:"iterativeFill",value:function(e){for(var t=A(e),n=0,r=0;n>=0&&n<9;){if(this.iterations++,this.iterations>this.maxIterations)return console.table(t),console.log("Max iterations hit: ".concat(this.iterations)),null;if(""!==e[n][r]){var o=this.nextCoordinate(n,r),i=Object(q.a)(o,2);n=i[0],r=i[1]}if(""===t[n][r]&&(t[n][r]=1),t[n][r]>9){t[n][r]="";var a=this.prevCoordinate(n,r),c=Object(q.a)(a,2);for(n=c[0],r=c[1];n>=0&&""!==e[n][r];){var l=this.prevCoordinate(n,r),u=Object(q.a)(l,2);n=u[0],r=u[1]}if(n<0)return console.table(t),console.log("Unsolvable. Iterations: ".concat(this.iterations)),null;t[n][r]++}if(U.grid(t)&&t[n][r]<=9){var s=this.nextCoordinate(n,r),v=Object(q.a)(s,2);for(n=v[0],r=v[1];n<9&&""!==e[n][r];){var f=this.nextCoordinate(n,r),h=Object(q.a)(f,2);n=h[0],r=h[1]}}else t[n][r]++}return console.log("Iterations for solution: ".concat(this.iterations)),t}},{key:"nextCoordinate",value:function(e,t){return t<8?t++:(e++,t=0),[e,t]}},{key:"prevCoordinate",value:function(e,t){return t>0?t--:(e--,t=8),[e,t]}},{key:"updateGrid",value:function(e,t){for(var n in t){var r=Math.floor(n/9),o=n-9*r;console.log("Changing ".concat(r,":").concat(o,",(").concat(n,")   :  ").concat(t[n])),e[r][o]=t[n]}return e}}]),e}(),I={grid_empty:new Array(9).fill("").map((function(){return new Array(9).fill("").map((function(){return""}))})),grid_01:[[2,"",9,"",8,"",5,"",""],["","",4,7,6,9,"","",""],[3,"","","",1,2,"",4,""],["","",3,6,"","","",5,4],["",4,"","","","","",8,""],[8,5,"","","",7,6,"",""],["",2,"",8,7,"","","",9],["","","",1,9,6,2,"",""],["","",5,"",4,"",1,"",8]],grid_02:[["","","",6,7,"","",4,""],[1,"","","","","","",3,6],["",4,2,1,"","","","",""],[4,"","",7,"","","","",""],["","",5,"","","",3,"",""],["","","","","",2,"","",8],["","","","","",1,6,7,""],[5,8,"","","","","","",3],["",3,"","",2,9,"","",""]],grid_03:[[8,"",3,"","","",2,1,9],[9,"",5,"",1,"",7,"",""],["",6,1,9,"","",3,"",""],[2,3,4,5,6,1,9,"",""],[1,8,9,4,3,7,5,2,6],["","","","","",9,1,4,3],["","","","","",4,8,9,""],["","",8,"",9,"",6,"",5],["",9,2,"","","",4,"",1]]},R=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(v.a)(t).call(this))).newGrid=e.newGrid.bind(Object(f.a)(e)),e.updateGrid=e.updateGrid.bind(Object(f.a)(e)),e.calcOptions=e.calcOptions.bind(Object(f.a)(e)),e.calcUniqueOptions=e.calcUniqueOptions.bind(Object(f.a)(e)),e.solveSol1=e.solveSol1.bind(Object(f.a)(e)),e.solveSol2=e.solveSol2.bind(Object(f.a)(e)),e.attemptFullSolve=e.attemptFullSolve.bind(Object(f.a)(e)),e.checkSolution=e.checkSolution.bind(Object(f.a)(e)),e.bruteSolve=e.bruteSolve.bind(Object(f.a)(e)),e.bruteSolver=new _,e.isSolutionCorrect=new E,e.state={grid:I.grid_empty,gridOptions:[],uniqueOptions:[],solved:null},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"newGrid",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"grid_empty",n=A(I[t]);this.setState({grid:n}),this.setState({solved:e})}},{key:"updateGrid",value:function(e,t,n){var r=Object(c.a)(this.state.grid);r[e][t]=""===n?n:1*n,this.setState({grid:r}),this.setState({solved:void 0})}},{key:"calcOptions",value:function(){var e=O(this.state.grid);this.setState({gridOptions:e}),console.table(e)}},{key:"calcUniqueOptions",value:function(){var e=O(this.state.grid),t=C(M(e));this.setState({uniqueOptions:t}),console.table(t)}},{key:"solveSol1",value:function(e){var t=N(this.state.grid,e).grid;this.setState({grid:t})}},{key:"solveSol2",value:function(e){var t=G(this.state.grid,e).grid;this.setState({grid:t})}},{key:"attemptFullSolve",value:function(e){for(var t=0;t<e;t++)this.solveSol1(10),this.solveSol2(10)}},{key:"bruteSolve",value:function(){var e=this.bruteSolver.solve(this.state.grid).grid;this.setState({grid:e})}},{key:"checkSolution",value:function(){var e=!1;this.isSolutionCorrect.checkGrid(this.state.grid)?(console.log("The solution is correct!"),e=!0):console.log("This is not the correct solution!"),this.setState({solved:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement("div",{className:"body"},o.a.createElement(b,{grid:this.state.grid,solved:this.state.solved,updateGrid:this.updateGrid,newGrid:this.newGrid,checkSolution:this.checkSolution}),o.a.createElement(m,{calcOptions:this.calcOptions,calcUniqueOptions:this.calcUniqueOptions,solveSol1:this.solveSol1,solveSol2:this.solveSol2,attemptFullSolve:this.attemptFullSolve,bruteSolve:this.bruteSolve})))}}]),t}(r.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(o.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-sudoku",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-sudoku","/service-worker.js");D?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):L(e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.63c1dce9.chunk.js.map