(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/tree.1e2f6b96.png"},124:function(e,t,a){e.exports=a(334)},129:function(e,t,a){},18:function(e){e.exports=JSON.parse('[{"name":"CO2","dataType":"plot","description":"Carbon dioxide is one of the many gases that contributes to global warming. Its concentration in our atmosphere has been growing a lot especially due to fossil fuels combustion. However, during the social isolation its emission has greatly decreased, since people have had to stay home and cannot use their vehicles. Also, polluting industries reduced their emission due to the lack of workers in the marketplace. It was found in April 2020 that after some countries decreed a more flexible quarantine the CO2 emission rate rose again. Hopefully during and after the lockdown we can work on reducing the CO2 emission.","visualization":"PATH","references":"NASA Global Climate Change - Vital Signs of the Planet,"},{"name":"NO2","dataType":"rangeinput","description":"Nitrogen dioxide, despite contributing to environmental problems such as acid rain, is also very toxic to the lungs. As CO2, it is released in the atmosphere due to the burning of fuel, and its emission has also been reduced due to the Covid quarantine for the same reasons as CO2. NASA was able to create an amazing comparison of the NO2 pollution along the american east coast from 2015 to 2020, and the visible impact generated from the lockdown is absolutely amazing as you can see below. Nitrogen dioxide, despite contributing to environmental problems such as acid rain, is also very toxic to the lungs. As CO2, it is released in the atmosphere due to the burning of fuel, and its emission has also been reduced due to the Covid quarantine for the same reasons as CO2. NASA was able to create an amazing comparison of the global NO2 pollution from 2015 to 2020, and the visible impact generated from the lockdown is absolutely amazing as you can see below.","visualization":["no2/September2019.jpg","no2/October2019.jpg","no2/November2019.jpg","no2/December2019.jpg","no2/January2020.jpg","no2/February2020.jpg","no2/March2020.jpg","no2/April2020.jpg"],"references":"NASA Aura Validation Data Center - Tropospheric NO2 CS30 vertical column densities (VCD)"},{"name":"Deforestation","dataType":"text","description":"Soon...","visualization":"PATH","references":""},{"name":"Urban Heats","dataType":"text","description":"Soon...","visualization":"PATH","references":""}]')},306:function(e,t,a){var n={"./no2/April2020.jpg":307,"./no2/December2019.jpg":308,"./no2/February2020.jpg":309,"./no2/January2020.jpg":310,"./no2/March2020.jpg":311,"./no2/November2019.jpg":312,"./no2/October2019.jpg":313,"./no2/September2019.jpg":314,"./tree.png":101};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=306},307:function(e,t,a){e.exports=a.p+"static/media/April2020.2d20d48a.jpg"},308:function(e,t,a){e.exports=a.p+"static/media/December2019.89879593.jpg"},309:function(e,t,a){e.exports=a.p+"static/media/February2020.a19ce31b.jpg"},310:function(e,t,a){e.exports=a.p+"static/media/January2020.dc408c46.jpg"},311:function(e,t,a){e.exports=a.p+"static/media/March2020.1ef4508b.jpg"},312:function(e,t,a){e.exports=a.p+"static/media/November2019.5adacc08.jpg"},313:function(e,t,a){e.exports=a.p+"static/media/October2019.da30288b.jpg"},314:function(e,t,a){e.exports=a.p+"static/media/September2019.3ee45257.jpg"},334:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),s=(a(129),a(118)),c=a(10),l=a(34),u=a(106),p=a(107),h=a(46),m=a(120),g=a(119),d=a(24),f=a(335),v=a(350),y=a(352),b=a(353),S=a(351),E=a(347),j=a(354),x=a(348),z=a(355),C=a(117),O=a(116),k=a(18),w=a(108),A=a(50),N=a(1),Q=a(110),D=a.n(Q),T=a(349);function R(){var e=Object(d.a)(["",""]);return R=function(){return e},e}function B(){var e=Object(d.a)(["animation: 2s ",""]);return B=function(){return e},e}function Y(){var e=Object(d.a)(["",""]);return Y=function(){return e},e}function I(){var e=Object(d.a)(["animation: 3s ",""]);return I=function(){return e},e}function M(){var e=Object(d.a)(["",""]);return M=function(){return e},e}function P(){var e=Object(d.a)(["animation: 2s ",""]);return P=function(){return e},e}var q=N.default.div(P(),Object(N.keyframes)(M(),A.rollIn)),F=N.default.div(I(),Object(N.keyframes)(Y(),A.fadeIn)),H=(N.default.div(B(),Object(N.keyframes)(R(),A.zoomIn)),0),V=0,J={labels:["Nov19","Dec19","Jan20","Feb20","Mar20","Apr20"],datasets:[{label:"CO2 mensal ppm variation",backgroundColor:"#C6EC5B",data:[.300000000000011,.189999999999998,.629999999999995,.189999999999998,-.240000000000009,.360000000000014]}]},L=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={searchOptions:[],options:[],dataName:"",description:"",dataType:"",visualizationPath:[],rangeInputValue:0,value:"",firstQuestionYes:"",firstQuestionNo:"",secondQuestionYes:"",secondQuestionNo:"",thirdQuestionYes:"",thirdQuestionNo:"",fourthQuestionYes:"",fourthQuestionNo:"",quizResult:"You're okay!",resultColor:"#808080"},a.getQuizResult=a.getQuizResult.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){for(var e in k)this.state.searchOptions.push(k[e].name);this.state.options=this.state.searchOptions,this.state.visualizationPath=["no2/September2019.jpg"],this.updateQuery("NO2")}},{key:"onChangeRangeInput",value:function(e){this.setState({rangeInputValue:e.target.value})}},{key:"updateQuery",value:function(e){for(var t in this.setState({dataName:e}),k)k[t].name===e&&(this.setState({description:k[t].description}),this.setState({visualizationPath:k[t].visualization}),this.setState({dataType:k[t].dataType}),this.setState({references:k[t].references}))}},{key:"renderRangeInputDtype",value:function(){var e=this,t=parseInt(this.state.rangeInputValue/(100/7)),n=this.state.visualizationPath[t];return n=n.split("/")[1].split(".")[0].replace("2"," 2"),r.a.createElement(f.a,{pad:"large",justify:"center"},r.a.createElement(v.a,{alignSelf:"center",style:{width:"25vw"},src:a(306)("./".concat(this.state.visualizationPath[t]))}),r.a.createElement(y.a,{alignSelf:"center",style:{fontSize:"2vh",letterSpacing:"1.5px",marginTop:"2vh"}}," ",n," "),r.a.createElement(f.a,{alignSelf:"center",pad:"medium",style:{width:"10vw"}},r.a.createElement(b.a,{value:this.state.rangeInputValue,onChange:function(t){return e.onChangeRangeInput(t)}})),r.a.createElement(y.a,{alignSelf:"center",style:{fontSize:"1vh",letterSpacing:"1.5px",marginTop:"2vh"}}," ",r.a.createElement("a",{href:"https://gs614-avdc1-pz.gsfc.nasa.gov/index.php?site=356862610&type=1&iDayShow=0&chProductCaptionHere=Monthly%20Average"},this.state.references," ")))}},{key:"renderDataChartDtype",value:function(){return r.a.createElement(f.a,{alignSelf:"center",style:{width:"35vw"}},r.a.createElement(y.a,{alignSelf:"center",style:{fontSize:"2.5vh",letterSpacing:"1.5px",marginTop:"2.5vh"}}," Variation "),r.a.createElement(w.a,{data:J}),r.a.createElement(y.a,{alignSelf:"center",style:{fontSize:"1vh",letterSpacing:"1.5px",marginTop:"2vh"}}," ",r.a.createElement("a",{href:"https://climate.nasa.gov/vital-signs/carbon-dioxide/"},this.state.references," ")))}},{key:"getQuizResult",value:function(e,t){var a,n,r="".concat(t,"QuestionYes"),i="".concat(t,"QuestionNo");"yes"===e?(H++,this.setState((a={},Object(l.a)(a,r,!0),Object(l.a)(a,i,!1),a))):(V++,this.setState((n={},Object(l.a)(n,i,!0),Object(l.a)(n,r,!1),n)));H>V&&this.setState({quizResult:"You're doing great",resultColor:"green"}),H===V&&this.setState({quizResult:"You're okay!",resultColor:"gray"}),V>H&&this.setState({quizResult:"You could be doing more...",resultColor:"red"})}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{theme:U},r.a.createElement(F,null,r.a.createElement(E.a,{background:"#C6EC5B",pad:"small"},r.a.createElement(y.a,{textAlign:"center",style:{color:"#000000",fontSize:"2vh",letterSpacing:"1.5px",marginLeft:"4vw"}},"Lockdown Hope"),r.a.createElement(f.a,{direction:"row",gap:"medium",style:{marginRight:"2vw"}},r.a.createElement(j.a,{color:"#000000",label:"About us",style:{fontSize:"1.5vh",letterSpacing:"2px"},href:"https://covid19.spaceappschallenge.org/challenges/covid-challenges/quiet-planet/teams/toruk-makto-1/project"}),r.a.createElement("a",{href:"https://github.com/Gustavobb/NASA-covid19-challenge"},r.a.createElement(T.a,{size:"medium",color:"#000000"}))))),r.a.createElement(f.a,{background:"#EDEDED",direction:"row",pad:"xlarge",justify:"center"},r.a.createElement(f.a,{direction:"row",justify:"start",gap:"xlarge"},r.a.createElement(q,null,r.a.createElement(v.a,{style:{width:"15vw"},src:a(101)})),r.a.createElement(f.a,{direction:"column",justify:"center"},r.a.createElement(y.a,{textAlign:"center",style:{fontSize:"3.5vh",marginBottom:"2vh",letterSpacing:"1.5px"}},r.a.createElement(F,null,"Does quarantine affect the enviroment?")),r.a.createElement(y.a,{textAlign:"center",style:{fontSize:"1.5vh",letterSpacing:"1.5px"}},r.a.createElement(F,null,"The covid-19 pandemic changed several human activities.",r.a.createElement("br",null),"Maybe for the environment this has a positive meaning."))))),r.a.createElement(f.a,{background:"#E1FF8D",pad:"large",justify:"center"},r.a.createElement(y.a,{textAlign:"center",style:{fontSize:"3.5vh",letterSpacing:"1.5px",marginBottom:"3.5vh"}}," ",this.state.dataName," "),r.a.createElement(f.a,{alignSelf:"center",style:{width:"12vw"}},r.a.createElement(x.a,{size:"medium",placeholder:"Select",value:this.state.value,options:this.state.options,onChange:function(t){var a=t.option;return e.updateQuery(a)},onClose:function(){return e.setState({options:e.state.searchOptions})},onSearch:function(t){var a=t.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp(a,"i");e.setState({options:e.state.searchOptions.filter((function(e){return n.test(e)}))})}})),r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{fontSize:"1.5vh",letterSpacing:"1.5px",marginTop:"3.5vh",width:"50vw"}},this.state.description),"rangeinput"===this.state.dataType?this.renderRangeInputDtype():"plot"===this.state.dataType?this.renderDataChartDtype():null),r.a.createElement(D.a,{animateIn:"fadeIn"},r.a.createElement(f.a,{background:"#EDEDED",pad:"xlarge",justify:"center"},r.a.createElement(y.a,{textAlign:"center",style:{fontSize:"3vh",letterSpacing:"1.5px",marginBottom:"4vh"}},"Measure your contribution to the environment"),r.a.createElement(f.a,{direction:"column",justify:"center"},r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{fontSize:"2vh",letterSpacing:"1px"}}," Are you driving a car that uses fossil fuels? "),r.a.createElement(f.a,{direction:"row",justify:"center",style:{marginTop:"2vh",marginBottom:"2vh"},gap:"medium"},r.a.createElement(z.a,{name:"firstButtonYes",label:"Yes",checked:this.state.firstQuestionYes,onChange:function(t){return e.getQuizResult("yes","first")}}),r.a.createElement(z.a,{name:"firstButtonNo",label:"No",checked:this.state.firstQuestionNo,onChange:function(t){return e.getQuizResult("no","first")}})),r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{fontSize:"2vh",letterSpacing:"1px"}}," Are you using public transportation? "),r.a.createElement(f.a,{direction:"row",justify:"center",style:{marginTop:"2vh",marginBottom:"2vh"},gap:"medium"},r.a.createElement(z.a,{name:"secondButtonYes",label:"Yes",checked:this.state.secondQuestionYes,onChange:function(t){return e.getQuizResult("yes","second")}}),r.a.createElement(z.a,{name:"firstButtonNo",label:"No",checked:this.state.secondQuestionNo,onChange:function(t){return e.getQuizResult("no","second")}})),r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{fontSize:"2vh",letterSpacing:"1px"}}," Is anyone in your household studying at a distance? "),r.a.createElement(f.a,{direction:"row",justify:"center",style:{marginTop:"2vh",marginBottom:"2vh"},gap:"medium"},r.a.createElement(z.a,{name:"thirdButtonYes",label:"Yes",checked:this.state.thirdQuestionYes,onChange:function(t){return e.getQuizResult("yes","third")}}),r.a.createElement(z.a,{name:"thirdButtonNo",label:"No",checked:this.state.thirdQuestionNo,onChange:function(t){return e.getQuizResult("no","third")}})),r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{fontSize:"2vh",letterSpacing:"1px"}}," Are you eating food prepared at home? "),r.a.createElement(f.a,{direction:"row",justify:"center",style:{marginTop:"2vh",marginBottom:"2vh"},gap:"medium"},r.a.createElement(z.a,{name:"fourthButtonYes",label:"Yes",checked:this.state.fourthQuestionYes,onChange:function(t){return e.getQuizResult("yes","fourth")}}),r.a.createElement(z.a,{name:"fourthButtonNo",label:"No",checked:this.state.fourthQuestionNo,onChange:function(t){return e.getQuizResult("no","fourth")}})),r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{fontSize:"2vh",letterSpacing:"2px",marginTop:"2vh"}}," Result: "),r.a.createElement(y.a,{alignSelf:"center",textAlign:"center",style:{color:this.state.resultColor,fontSize:"2vh",letterSpacing:"2px",marginTop:"2vh"}},this.state.quizResult)))),r.a.createElement(f.a,{background:"#E1FF8D",pad:"large",justify:"center"},r.a.createElement(y.a,{textAlign:"center",style:{fontSize:"3vh",letterSpacing:"1.5px"}},"Perhaps Nature needs a break...")))}}]),n}(r.a.Component),U=Object(O.deepMerge)(C.grommet,{global:{colors:{focus:"#C6EC5B",selected:{background:"#C6EC5B"}},hover:{background:"#C6EC5B"}},select:{icons:{color:"#808080"}},radioButton:{check:{color:{light:"#808080"}},hover:{border:{color:"#808080"}}},rangeInput:{thumb:{color:"#808080"}}}),G=L;var $=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{exact:!0,path:"",component:G})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.38124c2f.chunk.js.map