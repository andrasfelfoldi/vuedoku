(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ce99fb3"],{"132b":function(e,t,l){},3198:function(e,t,l){},"7d36":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"container"},[l("router-link",{staticClass:"back-button",attrs:{to:"/"}},[l("i",{staticClass:"fas fa-chevron-left"}),e._v("\n        Back to Main Menu\n    ")]),l("div",{staticClass:"grid-container"},[e._l(e.puzzle,function(t,n){return e._l(t,function(e,t){return l("Cell",{key:""+n+t,attrs:{row:n,col:t,value:e}})})})],2),l("div",{staticClass:"input-container"},[l("Inputs")],1)],1)},o=[],s=l("cebc"),c=l("2f62"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"container"},e._l(e.buttons,function(t){return l("div",{key:t.value,staticClass:"button",class:t.typeClass,style:t.positionStyle,on:{click:function(l){return e.enterCellValue(t.value)}}},[e._v("\n        "+e._s(t.value||"x")+"\n    ")])}),0)},a=[],u={name:"Inputs",methods:Object(s["a"])({},Object(c["b"])(["enterCellValue"])),data:function(){return{buttons:[{value:1,positionStyle:"left: 0px; top: 0px;",typeClass:"number"},{value:2,positionStyle:"left: 50px; top: 0px;",typeClass:"number"},{value:3,positionStyle:"left: 100px; top: 0px;",typeClass:"number"},{value:4,positionStyle:"left: 150px; top: 0px;",typeClass:"number"},{value:5,positionStyle:"left: 200px; top: 0px;",typeClass:"number"},{value:6,positionStyle:"left: 0px; top: 50px;",typeClass:"number"},{value:7,positionStyle:"left: 50px; top: 50px;",typeClass:"number"},{value:8,positionStyle:"left: 100px; top: 50px;",typeClass:"number"},{value:9,positionStyle:"left: 150px; top: 50px;",typeClass:"number"},{value:0,positionStyle:"left: 200px; top: 50px;",typeClass:"delete"}]}}},r=u,p=(l("cf1a"),l("2877")),f=Object(p["a"])(r,i,a,!1,null,"b1153e44",null),b=f.exports,d=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cell",class:{selected:e.selectedRow===e.row&&e.selectedCol===e.col,highlighted:e.selectedRow===e.row||e.selectedCol===e.col,editable:!e.initialPuzzle[e.row][e.col]},style:e.positionStyle,on:{click:function(t){return e.selectCell({row:e.row,col:e.col})}}},[e._v("\n        "+e._s(e.value)+"\n")])},C=[],v={name:"Cell",props:["row","col","value"],computed:Object(s["a"])({},Object(c["c"])({initialPuzzle:"getInitialPuzzle",selectedCell:"getSelectedCell"}),{selectedRow:function(){return this.selectedCell.row},selectedCol:function(){return this.selectedCell.col},positionStyle:function(){return"top: ".concat(50*this.row,"px;\n                    left: ").concat(50*this.col,"px;\n                    border-bottom-color: ").concat(2===this.row||5===this.row?"#000000":"#5e6975",";\n                    border-top-color: ").concat(3===this.row||6===this.row?"#000000":"#5e6975",";\n                    border-right-color: ").concat(2===this.col||5===this.col?"#000000":"#5e6975",";\n                    border-left-color: ").concat(3===this.col||6===this.col?"#000000":"#5e6975",";")}}),methods:Object(s["a"])({},Object(c["b"])(["selectCell"]))},y=v,x=(l("df59"),Object(p["a"])(y,d,C,!1,null,"7822d884",null)),h=x.exports,m={name:"Game",components:{Inputs:b,Cell:h},computed:Object(s["a"])({},Object(c["c"])({puzzle:"getPuzzle",initialPuzzle:"getInitialPuzzle",selectedCell:"getSelectedCell"}))},w=m,z=(l("88fd"),Object(p["a"])(w,n,o,!1,null,"1de34776",null));t["default"]=z.exports},"88fd":function(e,t,l){"use strict";var n=l("ab4c"),o=l.n(n);o.a},ab4c:function(e,t,l){},cf1a:function(e,t,l){"use strict";var n=l("132b"),o=l.n(n);o.a},df59:function(e,t,l){"use strict";var n=l("3198"),o=l.n(n);o.a}}]);
//# sourceMappingURL=chunk-2ce99fb3.86f53c50.js.map