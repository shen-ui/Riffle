(this.webpackJsonprifflev1=this.webpackJsonprifflev1||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.bf2c47e6.svg"},35:function(e,t,a){e.exports=a(49)},40:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){},46:function(e,t){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),i=a.n(r),o=(a(40),a(9)),s=a(10),c=a(12),u=a(11),m=a(32),p=a(3),f=(a(41),a(66)),h=a(28),d=a.n(h),v=function(){return l.a.createElement("nav",{className:"nav-wrapper",style:{background:"#1DB954"}},l.a.createElement("img",{src:d.a,className:"App-logo left",alt:"logo"}),l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(f.a,{className:"nav-tabs",to:"/playlists"},"Playlists")),l.a.createElement("li",null,l.a.createElement(f.a,{className:"nav-tabs",to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(f.a,{className:"nav-tabs",to:"/profile"},"Profile")))))},y=a(16),E=a.n(y),g=(a(45),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={item:null,album:null,artists:null,song_name:null,song_uri:null,is_playing:null,progress_ms:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPlayerData()}},{key:"getPlayerData",value:function(){var e=this;E.a.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.props.token)},success:function(t){t&&e.setState({item:t.item,album:t.item.album,artists:t.item.artists,song_name:t.item.name,song_uri:t.item.uri,is_playing:t.is_playing,progress_ms:t.progress_ms})}})}},{key:"render",value:function(){return null!=this.state.item?l.a.createElement("div",null,l.a.createElement("h1",null,"Currently Playing"),l.a.createElement("img",{src:this.state.album.images[1].url,alt:"coverart"}),l.a.createElement("p",null,l.a.createElement("b",null,"Title:")," ",this.state.song_name),l.a.createElement("p",null,l.a.createElement("b",null,"Album:")," ",this.state.album.name)):l.a.createElement("h3",null,"Nothing Playing")}}]),a}(n.Component)),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={display_name:null,email:null,href:null,id:null,followers:null,profile_pic:null,product:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"getUserData",value:function(){var e=this;E.a.ajax({url:"https://api.spotify.com/v1/me/","Content-Type":"application/json",headers:{Authorization:"Bearer "+this.props.token},type:"GET",success:function(t){e.setState({email:t.email,display_name:t.display_name,href:t.href,followers:t.followers.total,id:t.id,profile_pic:t.images[0].url,product:t.product})},fail:function(){alert("API Playlist call failed.")}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"User"),l.a.createElement("img",{src:this.state.profile_pic,alt:"profile picture"}),l.a.createElement("p",null,l.a.createElement("b",null,"TOKEN"),": ",this.props.token),l.a.createElement("p",null,l.a.createElement("b",null,"EMAIL"),": ",this.state.email),l.a.createElement("p",null,l.a.createElement("b",null,"ID"),": ",this.state.id),l.a.createElement("p",null,l.a.createElement("b",null,"PRODUCT"),": ",this.state.product),l.a.createElement("p",null,l.a.createElement("b",null,"FOLLOWERS"),": ",this.state.followers))}}]),a}(n.Component),k=(a(46),a(67)),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={recents:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPrevData(),this.getEachPrev()}},{key:"getPrevData",value:function(){var e=this;E.a.ajax({url:"https://api.spotify.com/v1/me/player/recently-played",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.props.token)},success:function(t){e.setState({recents:t.items})}})}},{key:"getEachPrev",value:function(){return this.state.recents?this.state.recents.map((function(e){return l.a.createElement(k.a,null,l.a.createElement("b",null,l.a.createElement("p",null,e.track.name)),l.a.createElement("p",null,e.track.artists[0].name))})):l.a.createElement("div",null," No Recent Replays ")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Recently Played"),this.getEachPrev())}}]),a}(n.Component),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).fetchPlaylists=function(){E.a.ajax({url:"https://api.spotify.com/v1/me/playlists",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+n.props.token)},success:function(e){e?n.setState({playlists:e.items}):console.log("No Data!")}})},n.state={playlists:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchPlaylists()}},{key:"getCurrentState",value:function(){var e=this;return this.state.playlists?this.state.playlists.map((function(t){return l.a.createElement("li",{className:"playlist-element",key:e.state.playlists.offset},l.a.createElement(k.a,{className:"Playlist-cards"},l.a.createElement("div",null,e.state.playlists.offset),l.a.createElement("div",null,t.name),l.a.createElement("img",{src:t.image})))})):l.a.createElement("div",null," No Playlists Found! ")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Playlists"),l.a.createElement("ul",null,this.getCurrentState()))}}]),a}(n.Component),O=["user-read-currently-playing","user-read-playback-state","user-read-recently-played","user-read-private","user-read-email","streaming"],P=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var _=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={token:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=P.access_token;e&&this.setState({token:e})}},{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement(v,{token:this.state.token},l.a.createElement(p.a,{path:"/playlists"},"Playlists"),l.a.createElement(p.a,{path:"/about"},"About"),l.a.createElement(p.a,{path:"/profile"},"Profile")),!this.state.token&&l.a.createElement("a",{className:"btn btn--loginApp-link center",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9110bb9fbfc4422c85e722040cf63bc8","&redirect_uri=").concat("http://localhost:3000/Riffle","&scope=").concat(O.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"),this.state.token&&l.a.createElement("div",null,l.a.createElement(g,{token:this.state.token}),l.a.createElement(b,{token:this.state.token}),l.a.createElement(w,{token:this.state.token}),l.a.createElement(j,{token:this.state.token}))))}}]),a}(n.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Riffle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Riffle","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.4e682ed7.chunk.js.map