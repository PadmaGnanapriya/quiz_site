(this.webpackJsonpquiz_site=this.webpackJsonpquiz_site||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),s=(n(12),n(2)),u=n(6),l=function(e){var t=e.handleAnswer,n=e.data,a=n.question,r=n.correct_answer,o=n.incorrect_answers,s=n.showAnswers,l=(n.handleNextQuestion,[r].concat(Object(u.a)(o)).sort((function(){return Math.random()-.5}))),i=function(){alert("Not define this function")};return c.a.createElement("div",null,c.a.createElement("h2",{className:"flex justify-center"}," MCQ Question "),c.a.createElement("hr",{className:"p-6"}),c.a.createElement("div",{className:"p-2"},a," ****"),c.a.createElement("div",{className:"grid cols-2 gap-2 mt-4 p-2"},l.map((function(e){var n=s?e==r?"bg-green-500":"bg-red-500":"bg-white";return c.a.createElement("button",{className:"".concat(n," \n                        p-4 text-purple-800 \n                        round shadow"),onClick:function(){return t(e)}},e)}))),c.a.createElement("button",{onClick:function(){return i()},className:"ml-auto bg-purple-700 text-white p-4 round shadow mt-6"},"Show answer"),c.a.createElement("button",{onClick:function(){return i()},className:"ml-auto bg-purple-700 text-white p-4 round shadow mt-6"},"Next Question"))};var i=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),u=Object(s.a)(o,2),i=u[0],m=u[1],h=Object(a.useState)(0),d=Object(s.a)(h,2),p=d[0],f=d[1],b=Object(a.useState)(!1),w=Object(s.a)(b,2),E=w[0],g=w[1];return Object(a.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple").then((function(e){return e.json()})).then((function(e){r(e.results),m(0)}))}),[]),n.length>0?c.a.createElement("div",{className:"container"},i>=n.length?c.a.createElement("h2",null,"Your score is ",p," "):c.a.createElement(l,{data:n[i],handleAnswer:function(e){E||e===n[i].correct_answer&&f(p+1),g(!0),m(i+1)},showAnswers:E,handleNextQuestion:function(){g(!1),m(i+1)}})):c.a.createElement("div",null," Loading")};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1bbfeb8d.chunk.js.map