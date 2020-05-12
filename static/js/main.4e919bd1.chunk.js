(this.webpackJsonpsimplestocktools=this.webpackJsonpsimplestocktools||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/github-logo.5e2743b8.svg"},44:function(e,t,a){e.exports=a.p+"static/media/logo.ed98c4a6.svg"},51:function(e,t,a){e.exports=a(66)},56:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),c=(a(56),a(47)),i=a(20),s=(a(57),a(18)),u=a(10),m=a(14),p=a(16),h=a(15),d=function e(){Object(u.a)(this,e)};d.base={display:"flex",alignItems:"center"},d.row={display:"flex",alignItems:"center",flexDirection:"row"},d.col={display:"flex",alignItems:"center",flexDirection:"column"},d.spacer={flexGrow:1};var E=function e(){Object(u.a)(this,e)};E.primary="#e91e63",E.secondary="#20232a",E.brandName={color:E.primary,fontWeight:"bold",fontSize:"24px"},E.image={color:E.primary,width:"36px",height:"36px"},E.imageLarge={color:E.primary,width:"75px",height:"75px"},E.text={color:E.primary,fontSize:"28px",fontWeight:"bold"},E.textCenter={color:E.primary,fontSize:"56px",fontWeight:"bold",textAlign:"center"};var g=a(43),f=a.n(g),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("a",{target:"_new",href:"https://github.com/rycharlind/simplestocktools-react",style:{textDecoration:"none",color:E.primary,display:"flex",alignItems:"center"}},l.a.createElement("img",{alt:"View Source",src:f.a,width:"40",height:"40",style:{marginRight:"12px"}}),l.a.createElement("span",null,"View Source"))}}]),a}(l.a.Component),y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},d.row),{height:"100px",padding:"32px",justifyContent:"center"})},l.a.createElement("span",{style:{marginRight:"16px"}},"Created with ",l.a.createElement("a",{target:"_new",href:"https://reactjs.org/"},"React.js")," and ",l.a.createElement("a",{target:"_new",href:"https://react-bootstrap.github.io"},"React Bootstrap")),l.a.createElement(b,null))}}]),a}(l.a.Component),v=a(44),k=a.n(v),C=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:Object(s.a)(Object(s.a)({},d.row),{height:"100px",padding:"0px 32px"})},l.a.createElement("a",{href:"/",style:{textDecoration:"none",display:"flex",alignItems:"center"}},l.a.createElement("img",{src:k.a,width:"40",height:"40",alt:"OptionsCalc",style:{marginRight:"16px"}}),l.a.createElement("span",{style:E.brandName},"Simple Stock Tools")),l.a.createElement("div",{style:d.spacer}),l.a.createElement(b,null))}}]),a}(l.a.Component),x=a(33),P=a(19),O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.a,{style:{backgroundColor:"#37474f"}},l.a.createElement("h1",null,"Simple Stock Tools"),l.a.createElement("p",null,"An open-source React app that brings easy-to-use web tools for analyzing stock data."),l.a.createElement("p",null,l.a.createElement(P.a,{as:"a",href:"/options-calculator",variant:"primary"},"Try the Stock Options Calculator"))))}}]),a}(l.a.Component),w=a(32),S=a(21),j=a(50),I=a(23),V=a(46),T=a(9),D=a(7),N=a(31),z=a(12),A=a(30),$=a(25),L={padding:"3px",backgroundColor:"#546e7a",color:"#fff"},R={textAlign:"right"},B=l.a.createElement(z.a,{id:"popover-basic"},l.a.createElement(z.a.Title,{as:"h3"},"# of Contracts"),l.a.createElement(z.a.Content,null,"The total number of contracts that you will purchase for this trade. Each contract equals 100 shares of the underlying stock.")),G=l.a.createElement(z.a,{id:"popover-basic"},l.a.createElement(z.a.Title,{as:"h3"},"Option Price"),l.a.createElement(z.a.Content,null,"This is the price, or premium that you pay for each contract.  Your total investment will be the Option Price x # of Contracts.",l.a.createElement("a",{target:"_new",href:"https://www.investopedia.com/terms/o/option-premium.asp"},"Learn More"))),W=l.a.createElement(z.a,{id:"popover-basic"},l.a.createElement(z.a.Title,{as:"h3"},"Strike Price"),l.a.createElement(z.a.Content,null,"The strike price is the target price at which your contract can be bought or sold when it is exercised. In order to make a profit, you need the unerlying stock price to be greater than the stock price for a Call, and less than for a Put.",l.a.createElement("a",{target:"_new",href:"https://www.investopedia.com/terms/s/strikeprice.asp"},"Learn More"))),_=l.a.createElement(z.a,{id:"popover-basic"},l.a.createElement(z.a.Title,{as:"h3"},"Stock Price"),l.a.createElement(z.a.Content,null,"This is the price of the stock that you think it will be at in the future. Change this up and down to see what price gets you the highest profit.")),M=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={callOrPut:"call",numberOfContracts:5,optionPrice:1,strikePrice:50,stockPrice:70,totalInvestment:0,stockPriceValue:0,strikePriceValue:0,profit:0,profitColor:"#4caf50"},n.handleInputChange=n.handleInputChange.bind(Object(S.a)(n)),n.handleOptionChange=n.handleOptionChange.bind(Object(S.a)(n)),n.calculate=n.calculate.bind(Object(S.a)(n)),n.getDollarValue=n.getDollarValue.bind(Object(S.a)(n)),n.getProfitsCell=n.getProfitsCell.bind(Object(S.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.a,{style:{backgroundColor:"#37474f"}},l.a.createElement("h1",null,"Stock Options Profit Calculator"),l.a.createElement("p",null,"A simple and lightweight app for calculating your stock option profits.  Enter in the below information and click ",l.a.createElement("strong",null,"Calculate")," to see how much money you can make on a single trade."),l.a.createElement("p",null,l.a.createElement(P.a,{as:"a",target:"_new",href:"https://www.investopedia.com/articles/optioninvestor/03/073003.asp",variant:"primary"},"Learn more about Stock Options"))),l.a.createElement(V.a,null,l.a.createElement(I.a,{bg:"dark"},l.a.createElement(I.a.Header,null,l.a.createElement("h2",null,"Inputs")),l.a.createElement(I.a.Body,null,l.a.createElement("div",{style:{maxWidth:"350px"}},l.a.createElement("div",{style:{marginBottom:"16px"}},l.a.createElement(T.a.Group,{controlId:"callOrPut"},l.a.createElement(T.a.Check,{inline:!0,label:"Call",value:"call",type:"radio",id:"option-call",checked:"call"===this.state.callOrPut,onChange:this.handleOptionChange}),l.a.createElement(T.a.Check,{inline:!0,label:"Put",value:"put",type:"radio",id:"option-put",checked:"put"===this.state.callOrPut,onChange:this.handleOptionChange}))),l.a.createElement(T.a.Group,{controlId:"numberOfContracts"},l.a.createElement(T.a.Label,null,"# of Contracts (",l.a.createElement("span",{style:{color:"#eceff1",fontSize:"14px"}},"1 contract = 100 shares"),")"),l.a.createElement(D.a,null,l.a.createElement(D.a.Prepend,null,l.a.createElement(D.a.Text,null,"#")),l.a.createElement(T.a.Control,{size:"lg",type:"number",placeholder:"Number",value:this.state.numberOfContracts,onChange:this.handleInputChange}),l.a.createElement(D.a.Append,null,l.a.createElement(N.a,{trigger:"hover",placement:"right",overlay:B},l.a.createElement(P.a,{variant:"outline-secondary"},"?"))))),l.a.createElement(T.a.Group,{controlId:"optionPrice"},l.a.createElement(T.a.Label,null,"Option Price (",l.a.createElement("span",{style:{color:"#eceff1",fontSize:"14px"}},"Premium"),")"),l.a.createElement(D.a,null,l.a.createElement(D.a.Prepend,null,l.a.createElement(D.a.Text,null,"$")),l.a.createElement(T.a.Control,{size:"lg",type:"number",placeholder:"Number",value:this.state.optionPrice,onChange:this.handleInputChange}),l.a.createElement(D.a.Append,null,l.a.createElement(N.a,{trigger:"hover",placement:"right",overlay:G},l.a.createElement(P.a,{variant:"outline-secondary"},"?"))))),l.a.createElement(T.a.Group,{controlId:"strikePrice"},l.a.createElement(T.a.Label,null,"Strike Price"),l.a.createElement(D.a,null,l.a.createElement(D.a.Prepend,null,l.a.createElement(D.a.Text,null,"$")),l.a.createElement(T.a.Control,{size:"lg",type:"number",placeholder:"Number",value:this.state.strikePrice,onChange:this.handleInputChange}),l.a.createElement(D.a.Append,null,l.a.createElement(N.a,{trigger:"hover",placement:"right",overlay:W},l.a.createElement(P.a,{variant:"outline-secondary"},"?"))))),l.a.createElement(T.a.Group,{controlId:"stockPrice"},l.a.createElement(T.a.Label,null,"Stock Price"),l.a.createElement(D.a,null,l.a.createElement(D.a.Prepend,null,l.a.createElement(D.a.Text,null,"$")),l.a.createElement(T.a.Control,{size:"lg",type:"number",placeholder:"Number",value:this.state.stockPrice,onChange:this.handleInputChange}),l.a.createElement(D.a.Append,null,l.a.createElement(N.a,{trigger:"hover",placement:"right",overlay:_},l.a.createElement(P.a,{variant:"outline-secondary"},"?"))))))),l.a.createElement(I.a.Footer,null,l.a.createElement(P.a,{variant:"primary",size:"lg",onClick:this.calculate},"Calculate"))),l.a.createElement(I.a,{bg:"dark"},l.a.createElement(I.a.Header,null,l.a.createElement("h2",null,"Results")),l.a.createElement(I.a.Body,null,l.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Total Investment"),l.a.createElement("td",{style:R},l.a.createElement($.a,{value:this.state.totalInvestment,displayType:"text",thousandSeparator:!0,prefix:"$"}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},"Option Price ",this.getDollarValue(Number(this.state.optionPrice))," x # of Contracts",l.a.createElement("span",{style:L},this.state.numberOfContracts)," x 100")))),l.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Stock Price Value"),l.a.createElement("td",{style:R},l.a.createElement($.a,{value:this.state.stockPriceValue,displayType:"text",thousandSeparator:!0,prefix:"$"}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},"Total Investment ",this.getDollarValue(this.state.totalInvestment)," x Stock Price ",this.getDollarValue(Number(this.state.stockPrice)))))),l.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Strike Price Value"),l.a.createElement("td",{style:R},l.a.createElement($.a,{value:this.state.strikePriceValue,displayType:"text",thousandSeparator:!0,prefix:"$"}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},"Total Investment ",this.getDollarValue(this.state.totalInvestment)," x Strike Price ",this.getDollarValue(Number(this.state.strikePrice)))))),l.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{fontSize:"32px"}},"Profit"),l.a.createElement("td",{style:Object(s.a)(Object(s.a)({},R),{fontSize:"32px",color:this.state.profitColor})},l.a.createElement($.a,{value:this.state.profit,displayType:"text",thousandSeparator:!0,prefix:"$"}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},this.getProfitsCell()))))))))}},{key:"getProfitsCell",value:function(){var e=[],t=l.a.createElement("div",null,"Stock Price Value ",this.getDollarValue(this.state.stockPriceValue)," - Strike Price Value ",this.getDollarValue(this.state.strikePriceValue)," - Total Investment ",this.getDollarValue(this.state.totalInvestment)),a=l.a.createElement("div",null,"Strike Price Value ",this.getDollarValue(this.state.strikePriceValue)," - Stock Price Value ",this.getDollarValue(this.state.stockPriceValue)," - Total Investment ",this.getDollarValue(this.state.totalInvestment));"call"===this.state.callOrPut?e.push(t):e.push(a);var n=l.a.createElement(j.a,{variant:"info",style:{marginTop:"16px"}},"NOTE: Your total losses cannot exceed your total investment.");return this.state.profit<0&&e.push(n),e}},{key:"getDollarValue",value:function(e){return l.a.createElement("span",{style:L},l.a.createElement($.a,{value:e,displayType:"text",thousandSeparator:!0,prefix:"$"}))}},{key:"calculate",value:function(){var e=Number(this.state.optionPrice)*(100*Number(this.state.numberOfContracts)),t=e*Number(this.state.stockPrice),a=e*Number(this.state.strikePrice),n=t-a-e;"put"===this.state.callOrPut&&(n=a-t-e),n<=e&&(n=-e),this.setState({totalInvestment:e,stockPriceValue:t,strikePriceValue:a,profit:n}),n<0?this.setState({profitColor:"#f44336"}):this.setState({profitColor:"#4caf50"})}},{key:"handleInputChange",value:function(e){this.setState(Object(w.a)({},e.target.id,e.target.value))}},{key:"handleOptionChange",value:function(e){this.setState({callOrPut:e.target.value})}}]),a}(l.a.Component);var H=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement("div",{className:"AppContent"},l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/simplestocktools/"},l.a.createElement(O,null)),l.a.createElement(i.a,{path:"/simplestocktools/options-calc"},l.a.createElement(M,null))))),l.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.4e919bd1.chunk.js.map