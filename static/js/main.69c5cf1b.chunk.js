(this.webpackJsonpbeatbox=this.webpackJsonpbeatbox||[]).push([[0],[,function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/background.5d2a7332.jpeg"},,,,,,,,function(t,e,i){},,,,,,,function(t,e,i){},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/rengoku.72fc2214.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/OOR.3a7778ef.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/Ur_u.4a6824d0.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/arcadefire.9adee80d.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/bandPerry.8d7af48f.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/green_day.9ff2e092.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/\u523b\u5728\u6211\u5fc3\u5e95\u7684\u540d.aeb57864.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/jay.aae5a852.jpg"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/3000.ccf7c3de.jpg"},function(t,e,i){"use strict";i.r(e);var a=i(0),n=i(2),s=i.n(n),r=i(10),u=i.n(r),o=(i(16),i(8)),c=i(3),l=i(4),d=i(6),p=i(5),h=(i(9),function(t){Object(d.a)(i,t);var e=Object(p.a)(i);function i(t){var a;return Object(c.a)(this,i),(a=e.call(this,t)).triggerColour=function(){a.setState({bgColor:a.props.bgColour,boxShadow:"0px 0px 17px 0px ".concat(a.props.bgColour)}),setTimeout((function(){a.setState({bgColor:"#3333336c",boxShadow:""})}),250)},a.state={bgColor:"",boxShadow:""},a}return Object(l.a)(i,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{class:"container",style:{backgroundColor:this.state.bgColor,borderColor:this.props.boColour,boxShadow:this.state.boxShadow},onClick:function(){!0===t.props.boxOrmusic?(t.props.playMusic(),t.props.recordAudio()):(t.props.switchMusicplay(),t.props.switchPict(t.props.bgPict)),t.triggerColour()},children:[this.state.count,this.props.letterDisplayed]})})}}]),i}(s.a.Component)),f=function t(e){var i=this;Object(c.a)(this,t),this.playThis=function(){i.audio.currentTime=0,i.audio.play()},this.stopMusic=function(){i.audio.pause(),i.audio.currentTime=0},this.audio=new Audio(e)},g=function t(e,i,a,n,s,r){var u=this;Object(c.a)(this,t),this.keycode="",this.activeColour="",this.borderColour="",this.individualBeats=null,this.backgroundPict="",this.getColour=function(){return u.activeColour},this.getBorderColour=function(){return u.borderColour},this.getKeyCode=function(){return u.keycode},this.getId=function(){return u.id},this.getBeat=function(){return u.individualBeats.playThis},this.getAudio=function(){return u.individualBeats},this.stopBeat=function(){return u.individualBeats.stopMusic},this.getPict=function(){return u.backgroundPict},this.id=e,this.keycode=i,this.activeColour=a,this.individualBeats=n,this.borderColour=s,this.backgroundPict=r},b=function(){function t(e){Object(c.a)(this,t),this.boxes=[],this.boxes=e}return Object(l.a)(t,[{key:"getBoxes",value:function(){return this.boxes}}]),t}(),y=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={entireBeatbox:new b([new g("0","A","turquoise",new f("assets/Piano Chord 208.mp3"),"aqua",i(1)),new g("1","B","turquoise",new f("assets/Piano Chord 209.mp3"),"aqua",i(1)),new g("2","C","turquoise",new f("assets/Piano Chord 331.mp3"),"aqua",i(1)),new g("2","D","pink",new f("assets/Drum Sticks Hit 3.mp3"),"aqua",i(1)),new g("2","E","pink",new f("assets/Drum Snare Roll.mp3"),"aqua",i(1)),new g("2","F","pink",new f("assets/PREL Musical 57.mp3"),"aqua",i(1)),new g("2","G","#F6E7D2",new f("assets/Cymbal Suspended 2.mp3"),"aqua",i(1)),new g("2","H","#F6E7D2",new f("assets/Musical Compos 33.mp3"),"aqua",i(1)),new g("2","I","#F6E7D2",new f("assets/Musical Orches 4.mp3"),"aqua",i(1))]),musicPlayer:new b([new g("0","J1","turquoise",new f("assets/Homura.mp3"),"aqua",i(17).default),new g("1","J2","turquoise",new f("assets/ONE OK ROCK - Mighty Long Fall.mp3"),"aqua",i(18).default),new g("2","J3","turquoise",new f("assets/Uru-\u3042\u306a\u305f\u304c\u3044\u308b\u3053\u3068\u3067\u56e0\u70ba\u6709\u4f60.mp3"),"aqua",i(19).default),new g("2","E1","pink",new f("assets/Arcade Fire - Wake Up.mp3"),"aqua",i(20).default),new g("2","E2","pink",new f("assets/The Band Perry - If I Die Young.mp3"),"aqua",i(21).default),new g("2","E3","pink",new f("assets/Green Day -Boulevard of Broken Dreams.mp3"),"aqua",i(22).default),new g("2","C1","#F6E7D2",new f("assets/\u76e7\u5ee3\u4ef2-\u523b\u5728\u6211\u5fc3\u5e95\u7684\u540d\u5b57.mp3"),"aqua",i(23).default),new g("2","C2","#F6E7D2",new f("assets/\u5468\u6770\u502b \u4e00\u8def\u5411\u5317.mp3"),"aqua",i(24).default),new g("2","C3","#F6E7D2",new f("assets/\u516b\u4e09\u592d 831\u60f3\u898b\u4f60\u60f3\u898b\u4f60\u60f3\u898b\u4f60.mp3"),"aqua",i(25).default)]),active:new b([]),currentActive:0,currentlyPlaying:null,currentPict:i(1).default},t.switchUse=function(){(1===t.state.currentActive?t.setState({currentActive:2,active:t.state.musicPlayer}):t.setState({currentActive:1,active:t.state.entireBeatbox,currentPict:i(1).default}),null!=t.state.currentlyPlaying)&&(t.state.currentlyPlaying.stopMusic(),t.state.currentlyPlaying.currentTime=0)},t.recordBboxbeat=function(e){t.setState({currentlyPlaying:e})},t.switchPict=function(e){t.setState({currentPict:e})},t.switchMusic=function(e){null===t.state.currentlyPlaying?(e.playThis(),t.setState({currentlyPlaying:e})):(t.state.currentlyPlaying.stopMusic(),t.state.currentlyPlaying.currentTime=0,e.playThis(),t.setState({currentlyPlaying:e}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("App").focus(),this.setState({active:this.state.entireBeatbox,currentActive:1})}},{key:"displayBoxes",value:function(){var t=this,e=[];if(1===this.state.currentActive||0===this.state.currentActive){var i,n=Object(o.a)(this.state.entireBeatbox.getBoxes());try{var s=function(){var n=i.value;e.push(Object(a.jsx)(h,{boxOrmusic:!0,bgColour:n.getColour(),boColour:n.getBorderColour(),letterDisplayed:n.getKeyCode(),playMusic:n.getBeat(),recordAudio:function(){t.recordBboxbeat(n.getAudio())}},n.getKeyCode()))};for(n.s();!(i=n.n()).done;)s()}catch(l){n.e(l)}finally{n.f()}}else{var r,u=Object(o.a)(this.state.musicPlayer.getBoxes());try{var c=function(){var i=r.value;e.push(Object(a.jsx)(h,{boxOrmusic:!1,bgColour:i.getColour(),boColour:i.getBorderColour(),letterDisplayed:i.getKeyCode(),playMusic:i.getBeat(),switchMusicplay:function(){t.switchMusic(i.getAudio())},bgPict:i.getPict(),switchPict:t.switchPict},i.getKeyCode()+"M"))};for(u.s();!(r=u.n()).done;)c()}catch(l){u.e(l)}finally{u.f()}}return e}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"App",children:Object(a.jsxs)("div",{id:"bigBox",style:{backgroundImage:"url(".concat(this.state.currentPict,")"),backgroundSize:"cover"},children:[Object(a.jsx)("button",{id:"changeUse",onClick:this.switchUse,children:" Click for more surprises "}),Object(a.jsx)("div",{class:"entireBox",children:this.displayBoxes()})]})})}}]),n}(s.a.Component),w=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,27)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),a(t),n(t),s(t),r(t)}))};u.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),w()}],[[26,1,2]]]);
//# sourceMappingURL=main.69c5cf1b.chunk.js.map