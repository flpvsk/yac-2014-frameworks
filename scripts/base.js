"use strict";function _sumArray(t,e){var o,n=t.length,i=[];for(e.length>n&&(n=e.length),o=0;n>o;o++)i[o]=(t[o]||0)+(e[o]||0);return i}!function(){var t=function(){this.from=0,this.to=void 0};t.prototype.addSeries=function(t){return this.series=this.series||[],this.series.push(t),this},t.prototype.setTitle=function(t){return this.title=t,this},t.prototype.setSubTitle=function(t){return this.subTitle=t,this},t.prototype.setXAxis=function(t){return this.categories=t,this},t.prototype.setDOMId=function(t){return this.domId=t,this},t.prototype.setYAxisName=function(t){return this.yAxisName=t,this},t.prototype.setFrom=function(t){return this.from=t,this},t.prototype.setTo=function(t){return this.to=t,this},t.prototype.draw=function(){this.chart=new Highcharts.Chart({title:{text:this.title||"",x:-20},subtitle:{text:this.subTitle||"",x:-20},chart:{renderTo:this.domId,type:"spline"},xAxis:{labels:{overflow:"justify",step:5},title:{text:"Month"},categories:this.categories.slice(this.from,this.to)},yAxis:{min:0,title:{text:this.yAxisName||""}},plotOptions:{spline:{marker:{enabled:!1}}},tooltip:{crosshairs:!0,shared:!0},series:this.series.map(function(t){return{name:t.name,data:t.data.slice(this.from,this.to),color:t.color,lineWidth:3}},this)})},t.prototype.drawInside=function(e){t.id=t.id||0;var o=document.querySelector(e),n=document.createElement("div");n.id=t.id,o.appendChild(n),this.setDOMId(n.id),this.draw(),t.id+=1},window.Chart=t}(),function(){function t(t){return t.reduce(function(t,e){return 0===t.length?(t.push(e),t):(t.push(e+t[t.length-1]),t)},[])}function e(t){return t.reduce(function(e,o){var n,i;return n=0===e.length?0:t[e.length-1],0>=n?(e.push(0),e):(i=Math.floor(100*(o-n)/n),e.push(i),e)},[])}function o(t){return t.reduce(function(e,o){if(0===e.length)return e.push(0),e;var n=t[e.length-1];return 0>=n?(e.push(0),e):(e.push(o-n),e)},[])}var n,i,r,s,u=[],a=[],c={},l={},m={},h={},d={},f={},p={},w={},b={},y={},g={};for(r=["Angular","Backbone","Ember","Famous","Flight","Flux","Ionic","Knockout","Marionette","Meteor","Om","Polymer","React"],s={binding:{"binding/twoWay":["angular","ember","polymer","knockout","ionic","om"],"binding/oneWay":["backbone","marionette"]},model:{"model/mv*":["angular","ember","knockout","meteor","marionette","ionic"],"model/component":["react","polymer","om","flight"],"model/flux":["flux"]},templates:{"templates/string":["ember","backbone","marionette"],"templates/dom":["angular","polymer","knockout","react","meteor"]},swiss:{"swiss/monolythic":["meteor","angular","ember","polymer","knockout","backbone","marionette"],"swiss/SRP":["react","flight","flux","om"]},"mob-desk":{"mob-desk/mobile":["famous","ionic"],"mob-desk/desktop":["angular","react","flux","om","knockout","ember","marionette","meteor","polymer"]}},p.Polymer="#FE6599",p.Angular="#DD1B16",p.Knockout="#2b6525",p.React="#61DAFB",p.Backbone="#0071B5",p.Ember="#B9824C",p.Meteor="#000000",a=[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=2010;2014>=i;i++)for(n=1;12>=n&&(2014!==i||10!==n);n++)u.push(a[n]+" "+i);c.backbone=[0,0,0,0,0,0,0,0,0,0,5,11,7,26,36,53,84,80,104,142,163,197,192,256,260,337,317,346,412,472,474,470,366,431,363,438,553,553,526,485,525,457,516,544,468,491,506,425,509,532,519,489,401,365,404,333,306],c.angular=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,2,1,2,3,1,1,1,3,7,10,33,74,97,174,187,287,303,343,602,679,913,1113,1233,1246,1639,1904,1945,2266,2273,2186,2965,3241,3750,3729,3783,3886,4584,4448,4579],c.ember=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,31,54,89,126,118,124,136,175,190,207,166,169,200,344,401,458,425,365,299,495,529,538,480,462,470,435,501,543,574,536,565,531,570,504],c.knockout=[0,0,0,0,0,0,0,0,0,3,5,14,11,12,16,18,29,42,44,65,77,60,78,100,109,170,209,189,226,244,253,274,218,314,332,306,381,381,455,487,430,421,422,363,365,422,419,396,416,439,389,369,365,322,300,322,284],c.meteor=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,129,87,61,64,81,37,89,108,111,184,164,220,180,179,207,221,235,171,212,242,285,343,325,428,359,353,312,348,390,472],c.polymer=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,24,29,11,14,12,20,23,58,66,70,81,264,195,157],c.react=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,9,5,7,21,45,46,45,35,65,63,77,72,96],c.flight=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,3,0,0,0,0,1,1,1,1,0,1,1,1,0,0,2],c.ampersand=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],c.famous=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,35,76,66,37,42,25],c.ionic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,9,33,52,54,86,100,156,179],c.marionette=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,3,17,35,38,41,23,28,23,28,35,41,56,56,76,66,90,75,75,77,82,46,74,78,75,66,53,49,54,51,70],c.flux=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,6,4,10],c.om=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,5,6,4,3,6],d.angular=[453,842,1296,2386,3086,3774,4163,4597,5041,5565,6355,7245,8140,9207,10254,11225,12301,13641,14875,16074,17386,18518,19703,21011,22247,23279,24489,25572,26713,28010,29316],d.ember=[2499,2757,3269,3700,4079,4397,4620,4845,5045,5287,5574,6075,6497,6859,7134,7384,7625,7904,8316,8539,8784,9015,9251,9492,9747,10043,10341,10620,10891,11157,11348],d.react=[1115,1633,1799,1988,2165,2389,2676,3619,4549,5002,5470,5987,6948,7395,8134,8704,9370],d.backbone=[7171,7837,8448,9034,9688,10214,10603,11029,11415,11878,12405,12834,13450,13908,14350,14736,15158,15508,15808,16096,16348,16643,16933,17189,17507,17824,18141,18452,18690,18984,19226],d.knockout=[1672,1843,2038,2216,2392,2542,2661,2804,2948,3050,3174,3341,3479,3639,3759,3868,4011,4124,4211,4315,4407,4484,4577,4685,4806,4902,5027,5144,5258,5399,5492],d.meteor=[13,3016,3615,3990,4807,5308,5538,5921,6225,6763,7188,7536,8017,8339,8650,8989,9278,9532,9769,10153,10562,10920,11248,11557,11961,12348,12651,16955,17625,18239,18805],d.polymer=[1503,1760,1967,2198,2468,2722,2935,3106,3296,3563,3847,4084,4428,4993,5445,5791,6026],d.ionic=[1656,2404,2853,3547,4392,5012,6248,6862,7905,8900,9755],d.flux=[1349,1980,2265],d.famous=[3095,4480,4796,5032,5430,5645],d.flight=[4225,4321,4396,4488,4591,4654,4860,4988,5139,5248,5311,5384,5431,5507,5588],d.marionette=[1377,1541,1697,1836,2049,2308,2563,2866,3046,3239,3427,3621,3775,3937,4114,4258,4448,4568,4693,4820,4955,5085,5227,5338,5452],d.om=[964,1475,1655,1821,1980,2188,2342,2458,2606,2757],Object.keys(d).forEach(function(t){for(;d[t].length!==c[t].length;)d[t].unshift(0)}),r.forEach(function(n){var i=n.toLowerCase();f[i]=e(d[i]),h[i]=o(d[i]),l[i]=t(c[i]),m[i]=e(l[i])}),Object.keys(s).forEach(function(t){Object.keys(s[t]).forEach(function(o){var n=[],i=[];s[t][o].forEach(function(t){n=_sumArray(n,l[t]),i=_sumArray(i,d[t])}),w[o]=n,b[o]=e(n),y[o]=i,g[o]=e(i)})}),window.DATES=u,window.TAGS=s,window.FRAMEWORKS=r,window.COLOR_BY_FRAMEWORK=p,window.STACK_OVERFLOW_NEW=c,window.STACK_OVERFLOW_ABS=l,window.STACK_OVERFLOW_NORM=m,window.GITHUB_NEW_STARS=h,window.GITHUB_ABS_STARS=d,window.GITHUB_NORM_STARS=f,window.STACK_OVERFLOW_ABS_BY_TAG=w,window.STACK_OVERFLOW_NORM_BY_TAG=b,window.GITHUB_ABS_BY_TAG=y,window.GITHUB_NORM_BY_TAG=g}();