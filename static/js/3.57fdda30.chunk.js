(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/profil-1.5a408285.png"},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/hair-cross.f284c208.svg"},50:function(e,t,a){e.exports=a.p+"static/media/trophy.fb91c22c.svg"},51:function(e,t,a){e.exports=a.p+"static/media/game-controller.78b77002.svg"},52:function(e,t,a){e.exports=a.p+"static/media/clock.5e97ac5e.svg"},53:function(e,t,a){e.exports=a.p+"static/media/area-graph.83a3c18d.svg"},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var s=a(9),c=a(10),r=a(12),l=a(11),n=a(13),o=a(0),i=a.n(o),u=(a(46),a(47)),m=a.n(u),p=(a(48),a(49)),d=a.n(p),f=a(50),_=a.n(f),h=a(51),v=a.n(h),E=a(52),N=a.n(E),y=a(53),g=a.n(y),k=function(e){var t=e.stats.stats;return i.a.createElement("ul",{className:"user-stats"},i.a.createElement("li",{className:"user-stats__item"},i.a.createElement("img",{src:d.a,alt:"",className:"user-stats__icon"}),i.a.createElement("span",{className:"user-stats__category"},"Kills"),i.a.createElement("span",{className:"user-stats__value"},t.kills)),i.a.createElement("li",{className:"user-stats__item"},i.a.createElement("img",{src:_.a,alt:"",className:"user-stats__icon"}),i.a.createElement("span",{className:"user-stats__category"},"Wins"),i.a.createElement("span",{className:"user-stats__value"},t.wins)),i.a.createElement("li",{className:"user-stats__item"},i.a.createElement("img",{src:v.a,alt:"",className:"user-stats__icon"}),i.a.createElement("span",{className:"user-stats__category"},"Matches"),i.a.createElement("span",{className:"user-stats__value"},t.matches)),i.a.createElement("li",{className:"user-stats__item"},i.a.createElement("img",{src:g.a,alt:"",className:"user-stats__icon"}),i.a.createElement("span",{className:"user-stats__category"},"Score"),i.a.createElement("span",{className:"user-stats__value"},t.score)),i.a.createElement("li",{className:"user-stats__item"},i.a.createElement("img",{src:N.a,alt:"",className:"user-stats__icon"}),i.a.createElement("span",{className:"user-stats__category"},"Players out lived"),i.a.createElement("span",{className:"user-stats__value"},t.playersoutlived)))},b=(a(54),function(e){var t=e.matches,a=Object.entries(t).slice(1).filter(function(e){return void 0!==e[1]});return i.a.createElement("div",{className:"category ".concat(t.name)},i.a.createElement("h2",{className:"category__heading"},t.name),i.a.createElement("ul",{className:"category-list"},a.map(function(e,t){return i.a.createElement("li",{key:t,className:"category-list__item"},"".concat(e[0],": ").concat(e[1]))})))}),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={nick:"",player:{stats:{kills:0,wins:0,matches:0,playersoutlived:0,score:0}},matches:[{name:"solo",kills:0,top1:0,top10:0,top25:0,matches:0,score:0},{name:"duo",kills:0,top1:0,top5:0,top12:0,matches:0,score:0},{name:"squad",kills:0,top1:0,top3:0,top6:0,matches:0,score:0}],informationStatus:!1,error:!1},a}return Object(n.a)(t,e),Object(c.a)(t,[{key:"createPlayer",value:function(e){return{stats:{kills:e.kills,wins:e.placetop1,matches:e.matchesplayed,playersoutlived:e.playersoutlived,score:e.score}}}},{key:"createMatches",value:function(e){var t=e.defaultsolo,a=e.defaultduo,s=e.defaultsquad,c=[];return t&&c.push({name:"solo",kills:t.default.kills,top1:t.default.placetop1,top10:t.default.placetop10,top25:t.default.placetop25,matches:t.default.matchesplayed,score:t.default.score}),a&&c.push({name:"duo",kills:a.default.kills,top1:a.default.placetop1,top5:a.default.placetop5,top12:a.defaultplacetop12,matches:a.default.matchesplayed,score:a.default.score}),s&&c.push({name:"squad",kills:s.default.kills,top1:s.default.placetop1,top3:s.default.placetop3,top6:s.defaultplacetop6,matches:s.default.matchesplayed,score:s.default.score}),c}},{key:"componentDidMount",value:function(){var e=this,t="https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=".concat(this.props.match.params.userNick);fetch(t).then(function(e){return e.json()}).then(function(e){return e.uid}).then(function(e){return fetch("https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=".concat(e))}).then(function(e){return e.json()}).then(function(t){!1===t.success||0===t.devices.length?e.setState(function(){return{error:!0}}):e.setState(function(){return{nick:t.epicName,player:e.createPlayer(t.overallData.defaultModes),matches:e.createMatches(t.data.keyboardmouse),informationStatus:!0}})})}},{key:"render",value:function(){var e=this.state,t=e.nick,a=e.player,s=e.matches,c=e.informationStatus;return!0===e.error?i.a.createElement("div",{className:"error"},i.a.createElement("p",{className:"error__text"},"Player doesn't exist !!!!")):i.a.createElement("section",{className:"section-profil"},i.a.createElement("div",{className:"container"},i.a.createElement("figure",null,i.a.createElement("img",{id:"user-avatar",className:"avatar",src:m.a,alt:""}),i.a.createElement("figcaption",{className:"avatar__name"},t)),c&&i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{stats:a}),i.a.createElement("div",{className:"categoris"},s.map(function(e){return i.a.createElement(b,{key:e.name,matches:e})})))))}}]),t}(o.Component);t.default=w}}]);
//# sourceMappingURL=3.57fdda30.chunk.js.map