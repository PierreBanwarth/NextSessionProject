angular.module("app.additions",[]).run(["$templateCache",function(e){e.put("modules/shell/shell.html",'<section id="shell" class="shell"><header><nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle" ng-click="shell.toggleMenu()" aria-expanded="{{!shell.menuHidden}}"><span class="sr-only" translate>Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="https://github.com/thales-poles-ra/starter-kit/"><span translate>APP_NAME</span></a></div><div class="navbar-collapse" uib-collapse="shell.menuHidden"><ul class="nav navbar-nav"><li ng-class="{ active: shell.stateContains(\'app.session\') }"><a class="nav-item text-uppercase" ui-sref="app.session"><i class="fa fa-home"></i> <span translate>Session</span></a></li><li ng-class="{ active: shell.stateContains(\'app.about\') }"><a class="nav-item text-uppercase" ui-sref="app.about"><i class="fa fa-question-circle"></i> <span translate>About</span></a></li></ul><div class="navbar-form navbar-right"><div class="form-group" uib-dropdown><button type="button" class="btn btn-default" uib-dropdown-toggle aria-haspopup="true" aria-expanded="false">{{shell.currentLocale.id}} <span class="caret"></span></button><ul class="dropdown-menu"><li ng-repeat="language in ::shell.languages"><a href="" ng-click="setLanguage(language)">{{language}}</a></li></ul></div></div></div></div></nav></header><div ui-view></div></section>'),e.put("modules/screens/about/about.html",'<section id="about-screen" class="container-fluid"><div class="jumbotron text-center"><h1 translate>APP_NAME</h1><p><i class="fa fa-bookmark-o"></i> <span translate>Version</span> {{vm.version}}</p></div></section>'),e.put("modules/screens/home/home.html",'<md-sidenav md-component-id="left" class="md-sidenav-left" md-is-open="isOpen"><div ng-repeat="marker in vm.markers"><div tabelement name="marker.name" car="marker.availableCar" free="marker.totalSpace"></div></div></md-sidenav><md-content><section id="home-screen" class="home-screen container-fluid"><div ui-loading="vm.isLoading"></div><div class="well"><leaflet class="map" defaults="vm.defaults" lf-center="vm.center" markers="vm.markers"></leaflet><button ng-click="isOpen=!isOpen" ng-init="isOpen=false">Liste des stations</button></div></section></md-content>'),e.put("modules/screens/session/modale.tpl.html",'<md-dialog class="md-default-theme md-content-overflow transition-in"><md-dialog-content><div><md-input-container><label>Adress</label><input type="text" ng-model="label" required></md-input-container></div><div><md-input-container><label>Place name</label><input type="text" ng-model="place" required></md-input-container><md-input-container><label>Frequence</label><input type="text" ng-model="frquence" required></md-input-container><md-input-container><label>Start time</label><input type="text" ng-model="start" required></md-input-container><md-input-container><label>About</label><input type="text" ng-model="description" required></md-input-container></div><md-button class="md-primary" ng-click="closeDialog()">Cancel</md-button><md-button class="md-primary" ng-click="validDialog()">Ok</md-button></md-dialog-content></md-dialog>'),e.put("modules/screens/session/session.html",'<md-content><md-sidenav md-component-id="left" class="md-sidenav-left" md-is-open="vm.isOpen"><md-list flex=""><md-divider ng-repeat="marker in markers"><md-list-item class="md-2-line" aria-label="centrer" ng-click="vm.setCenter(marker)"><div tabelement name="marker.message" description="marker.description"></div></md-list-item></md-divider></md-list></md-sidenav><section id="home-screen" class="home-screen container-fluid"><div ui-loading="vm.isLoading"></div><div class="well"><md-autocomplete md-search-text-change=" vm.getLocation()" md-selected-item-change="vm.selectedUpdate()" md-selected-item="vm.selectedItem" md-search-text="vm.searchText" md-items="item in vm.places" md-delay="150" md-item-text="item.properties.label"><span md-highlight-text="searchText">{{item.properties.label}}</span><md-not-found>No matches found.</md-not-found></md-autocomplete><leaflet class="map" defaults="vm.defaults" bounds="vm.bounds" lf-center="vm.center" markers="markers" controls="controls" event-broadcast="events"></leaflet><md-button class="md-raised" ng-click="vm.switch()">Sessions</md-button><md-card ng-if="vm.currentSessionShow"><md-card-content><h2>{{vm.currentSession.message}}</h2><p>{{vm.currentSession.description}}</p></md-card-content><md-card-footer><md-button class="md-warn" ng-click="vm.remove()">Remove session</md-button></md-card-footer></md-card></div><li ng-repeat="label in labels track by $index">{{label}}</li></section></md-content>'),e.put("modules/ui-components/loading/loading.html",'<div ng-show="isLoading" class="text-center"><i class="fa fa-cog fa-spin fa-3x"></i> <span>{{message}}</span></div>'),e.put("modules/ui-components/tabElement/tabelement.html",'<div class="tabelement">{{stationName}} : {{stationDescription}}<div ng-if="stationFreeCar && stationFreeSpace"><i class="fa fa-car" aria-hidden="true"></i> {{stationFreeCar}} / {{stationFreeSpace}}</div></div>')}]),angular.module("app.additions").run(["gettextCatalog",function(e){e.setStrings("en-US",{About:"About",Session:"Session",APP_NAME:"Starter Kit","Hello world !":"Hello world !",Home:"Home","Toggle navigation":"Toggle navigation",Version:"Version"})}]),angular.module("app.additions").run(["gettextCatalog",function(e){e.setStrings("fr-FR",{About:"A propos",Session:"Session",APP_NAME:"Starter Kit","Hello world !":"Bonjour le monde !",Home:"Accueil","Toggle navigation":"Basculer la navigation",Version:"Version"})}]),function(){"use strict";angular.module("app",["app.additions","gettext","ngAnimate","ngSanitize","ui.router","ui.bootstrap","leaflet-directive","ngMessages","ngMaterial","firebase"])}(),function(){"use strict";function e(e,t,n,a){function o(){n.log("init")}n=n.getLogger("shell");var r=this;r.currentLocale=e,r.languages=a.supportedLanguages,r.menuHidden=!0,r.toggleMenu=function(){r.menuHidden=!r.menuHidden},r.stateContains=function(e){return t.current.name.indexOf(e)!==-1},o()}e.$inject=["$locale","$state","logger","config"],angular.module("app").controller("shellController",e)}(),function(){"use strict";function e(e,t,n){var a={allStation:"http://www.metromobilite.fr/data/Carto/Statique/ListeDesStationsOMMS.json",dataStation:"http://www.metromobilite.fr/data/Carto/Dynamique/dynDetailDesVehiculesOMMS.json"},o={};return t=t.getLogger("webStationService"),o.getAllStation=function(){return n.get(a.allStation,null,!0).then(function(t){return t.data?t.data:e.reject()})["catch"](function(){t.log("Error, could not load stations")})},o.getDataStation=function(){return n.get(a.dataStation,null,!0).then(function(t){if(t.data){var n=[];return n=angular.fromJson(t.data)}return e.reject()})["catch"](function(){t.log("Error, could not load stations")})},o}e.$inject=["$q","logger","restService"],angular.module("app").factory("webStationService",e)}(),function(){"use strict";function e(e,t,n){var a={apiKey:"",authDomain:"",databaseURL:"https://dazzling-fire-3293.firebaseio.com/",storageBucket:""};firebase.initializeApp(a);var o,r=firebase.database().ref(),i={};return i.addSession=function(t){return r.child("features").push(t).then(function(t){return t?reponse:e.reject()})["catch"](function(){return"Error, could not add session"})},i.removeSession=function(e){console.log(o);for(var t in o)o[t]&&o[t].properties&&o[t].properties.description===e.description&&o[t].properties.name===e.message&&delete o[t];return o.$save().then(function(e){},function(e){console.log("Error:",e)})},i.getSessions=function(n){return o=t(r.child("features")),o.$loaded().then(function(t){return t?t:e.reject()})["catch"](function(){return"Error, could not load joke :-("})},i}e.$inject=["$q","$firebaseObject","restService"],angular.module("app").factory("webSessionService",e)}(),function(){"use strict";function e(e,t,n){var a={randomJoke:"https://search.mapzen.com/v1/search"},o={};return o.getRandomJoke=function(o){return n.get(t.inject(a.randomJoke,o),null,!0).then(function(t){return t.data&&t.data.value?t.data.value.joke:e.reject()})["catch"](function(){return"Error, could not load joke :-("})},o}e.$inject=["$q","contextService","restService"],angular.module("app").factory("quoteService",e)}(),function(){"use strict";function e(e,t){var n={search:"https://search.mapzen.com/v1/search",reverse:"https://search.mapzen.com/v1/reverse"},a=function(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)},o={};return o.getReverseGeocoding=function(o,r){var i=[];return o=a(o,6),r=a(r,6),i.api_key="mapzen-ch8t7iL",i["point.lon"]=r,i["point.lat"]=o,console.log("https://search.mapzen.com/v1/reverse?api_key=mapzen-ch8t7iL&point.lon="+r+"&point.lat="+o),t.get(n.reverse,i,"force",!0).then(function(t){return t?t.data:e.reject()})["catch"](function(){return"Error, could not load reverse geocoding Data"})},o.getLocation=function(a){var o=[];return o.text=a,o.api_key="mapzen-ch8t7iL",t.get(n.search,o,"force",!0).then(function(t){return t?t:e.reject()})["catch"](function(){return"Error, could not load geographical data"})},o}e.$inject=["$q","restService"],angular.module("app").factory("webGeoCoding",e)}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"modules/ui-components/tabElement/tabelement.html",scope:{stationName:"=name",stationDescription:"=description",stationFreeCar:"=car",stationFreeSpace:"=free"}}}angular.module("app").directive("tabelement",e)}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"modules/ui-components/loading/loading.html",scope:{message:"<",isLoading:"<uiLoading"}}}angular.module("app").directive("uiLoading",e)}(),function(){"use strict";function e(e,t,n,a){var o,r,i,s={},c=[];a=a.getLogger("station"),s.updateDataStation=function(){return n.getDataStation().then(function(e){return r=e,n.getAllStation().then(function(e){i=e,l()})["catch"](function(){a.log("error while tryng to get allstation")})})["catch"](function(){a.log("error while trying to get dataStation")})},s.getCentre=function(){if(o&&angular.isDefined(o))return o},s.getMarkers=function(){return c&&angular.isDefined(c)?c:"error"};var l=function(){o={lat:i.zone.areas[0].area_map_lat,lng:i.zone.areas[0].area_map_lng,zoom:i.zone.areas[0].map_level};for(var e=i.zone.areas[0].stations,t=0;t<e.length;t++){var n=e[t].station_id;if(n){var a=r[n].station.available_car,s=r[n].station.parking_space_free,l={lat:e[t].station_lat,lng:e[t].station_lng,focus:!1,name:e[t].station_name,draggable:!1,availableCar:a,totalSpace:s};c.push(l)}}};return s}e.$inject=["$q","contextService","webStationService","logger"],angular.module("app").factory("stationService",e)}(),function(){"use strict";function e(e,t,n,a){var o,r,i={},s=[];a=a.getLogger("Session logic"),i.addSessions=function(e,t,o,r){var i={lat:o,lng:r,focus:!1,message:t,draggable:!1};s.push(i);var c={coordinates:[r,o,0]},i={geometry:c,properties:{description:t,name:e}};return n.addSession(i).then(function(e){a.log("Adding new session")})},i.getSessions=function(e){return n.getSessions().then(function(t){return r=t,c(e),r})["catch"](function(){a.log("error while trying to get dataSession")})},i.removeSession=function(e){return n.removeSession(e).then(function(e){return r=e,c(),r})["catch"](function(){a.log("error while trying to get dataSession")})},i.getCentre=function(){if(o&&angular.isDefined(o))return o},i.getMarkers=function(){return s&&angular.isDefined(s)?s:"error"};var c=function(e){angular.forEach(r,function(e,t){var n={lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0],focus:!1,message:e.properties.name,description:e.properties.description,draggable:!1};s.push(n)}),s.sort(function(t,n){return l(e.lat,e.lng,t.lat,t.lng,"K")-l(e.lat,e.lng,n.lat,n.lng,"K")})},l=function(e,t,n,a,o){var r=Math.PI*e/180,i=Math.PI*n/180,s=t-a,c=Math.PI*s/180,l=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(c);return l=Math.acos(l),l=180*l/Math.PI,l=60*l*1.1515,"K"==o&&(l=1.609344*l),"N"==o&&(l=.8684*l),l};return i}e.$inject=["$q","contextService","webSessionService","logger"],angular.module("app").factory("sessionService",e)}(),function(){"use strict";function e(e,t,n,a,o){var r={};return o=o.getLogger("Geocoding logic"),r.getUserLocation=function(){var a=e.defer();return t.navigator?t.navigator.geolocation.getCurrentPosition(function(e){n.$apply(function(){a.resolve(e)})},function(e){n.$apply(function(){a.reject(e)})}):n.$apply(function(){a.reject(new Error("Geolocation is not supported"))}),a.promise},r.distance=function(e,t,n,a,o){var r=Math.PI*e/180,i=Math.PI*n/180,s=t-a,c=Math.PI*s/180,l=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(c);return l=Math.acos(l),l=180*l/Math.PI,l=60*l*1.1515,"K"==o&&(l=1.609344*l),"N"==o&&(l=.8684*l),l},r.getReverseGeocode=function(t,n){return a.getReverseGeocoding(t,n).then(function(t){return t&&t.features&&t.features[0]&&t.features[0].properties?t.features[0].properties:e.reject()})["catch"](function(){o.log("error while trying to get reverse geocoding Data")})},r.getGeocode=function(t){return a.getLocation(t).then(function(t){return t.data&&t.data.features?t.data.features:e.reject()})["catch"](function(){o.log("error while trying to get geocoding Data")})},r}e.$inject=["$q","$window","$rootScope","webGeoCoding","logger"],angular.module("app").factory("geoService",e)}(),function(){"use strict";angular.module("app").controller("sessionController",["$scope","$mdDialog","$q","logger","sessionService","geoService","leafletBoundsHelpers","leafletMarkerEvents",function(e,t,n,a,o,r,i,s){a=a.getLogger("Session");var c=this;c.isOpen=!1,e.events={markers:{enable:s.getAvailableEvents()}};var l=s.getAvailableEvents();for(var u in l){var d="leafletDirectiveMarker."+l[u];e.$on(d,function(e,t){"leafletDirectiveMarker.click"===e.name&&c.setCurrentSession(t.model)})}c.isLoading=!0,c.currentSessionShow=!1,c.defaults={zoomControlPosition:"topright"},c.selectedItem,c.places=[],c.getUserLocation=function(){var e=n.defer();return r.getUserLocation().then(function(t){if(!t)return e.reject("no user location");var n={lat:t.coords.latitude,lng:t.coords.longitude};c.setCenter(n),e.resolve(n)}),e.promise},c.setCurrentSession=function(e){c.currentSession=e,c.currentSessionShow=!0},c.setCenter=function(e){var t=15;(e.message||e.description)&&(c.setCurrentSession(e),t=18),c.center={lat:e.lat,lng:e.lng,zoom:t}},c["switch"]=function(){c.isOpen=!c.isOpen},c.getLocation=function(){""!==c.searchText&&angular.isDefined(c.searchText)&&r.getGeocode(c.searchText).then(function(e){c.places=e})},c.selectedUpdate=function(){angular.isDefined(c.selectedItem.bbox)?c.bounds=i.createBoundsFromArray([[c.selectedItem.bbox[1],c.selectedItem.bbox[0]],[c.selectedItem.bbox[3],c.selectedItem.bbox[2]]]):c.center={lat:c.selectedItem.geometry.coordinates[1],lng:c.selectedItem.geometry.coordinates[0],zoom:18}},e.showCustom=function(n){r.getReverseGeocode(n.latlng.lat,n.latlng.lng).then(function(t){e.cleanScope(),t&&(t.country&&(e.country=t.country),t.country_a&&(e.country_a=t.country_a),t.county&&(e.county=t.county),t.label&&(e.label=t.label),t.street&&(e.street=t.street),t.locality&&(e.locality=t.locality),t.localadmin&&(e.localadmin=t.localadmin),t.macrocounty&&(e.macrocounty=t.macrocounty),t.macroregion&&(e.macroregion=t.macroregion),t.name&&(e.name=t.name),t.region&&(e.region=t.region))})["finally"](function(){t.show({clickOutsideToClose:!0,scope:e,preserveScope:!0,templateUrl:"modules/screens/session/modale.tpl.html",parent:angular.element(document.body),controller:["$scope","$mdDialog","geoService",function(e,t,a){e.closeDialog=function(){t.hide()},e.validDialog=function(){e.description&&e.place&&(o.addSessions(e.place,e.description,n.latlng.lat,n.latlng.lng),t.hide(),e.description="",e.place="",c.update())}}]})})},e.cleanScope=function(){e.country="",e.country_a="",e.county="",e.label="",e.street="",e.locality="",e.localadmin="",e.macrocounty="",e.macroregion="",e.name="",e.region=""},e.$on("leafletDirectiveMap.click",function(t,n){var a=n.leafletEvent;e.showCustom(a)}),c.remove=function(){o.removeSession(c.currentSession).then(function(t){e.dataSession=t}),c.init()},c.update=function(){o.getSessions(c.userLocation).then(function(t){e.dataSession=t}),e.markers=o.getMarkers()},c.init=function(){a.log("init sessions"),c.center={lat:45.188616,lng:5.725969,zoom:1},c.getUserLocation().then(function(t){c.userLocation=t,o.getSessions(c.userLocation).then(function(t){e.dataSession=t})["finally"](function(){c.isLoading=!1}),e.markers=o.getMarkers()})},c.init()}])}(),function(){"use strict";function e(e,t){e=e.getLogger("home");var n=this;n.isLoading=!0,n.center={lat:45.188616,lng:5.725969,zoom:1},n.defaults={zoomControlPosition:"topright"},n.markers=[];var a=function(){return t.updateDataStation().then(function(e){return n.center=t.getCentre(),n.markers=t.getMarkers(),e})["catch"](function(){e.log("error while tryng to updateDataStation")})},o=function(){e.log("init stations"),a()["catch"](function(){e.log("error while loading datas")})["finally"](function(){n.isLoading=!1})};o()}e.$inject=["logger","stationService"],angular.module("app").controller("homeController",e)}(),function(){"use strict";function e(e,t){function n(){e.log("init")}e=e.getLogger("about");var a=this;a.version=t.version,n()}e.$inject=["logger","config"],angular.module("app").controller("aboutController",e)}(),function(){"use strict";function e(e,t,n,a){function o(e,t){return u(l(e,t),t)}n=n.getLogger("restService");var r={};r.get=function(r,i,c,l){var g=s+r,m=function(){return t.get(g,{params:i})};if(c){var f="force"===c?null:a.getCacheData(r,i);if(null!==f&&(f=d(f)),null===f)return n.log("GET request: "+r),o(m,l).then(function(e){return a.setCacheData(r,i,e),angular.copy(e)});var p=e.defer();return p.resolve(angular.copy(f)),u(p.promise,l)}return o(m,l)},r.post=function(e,a,r){n.log("POST request: "+e);var i=function(){return t.post(s+e,a,c)};return o(i,r)},r.put=function(e,a,r){n.log("PUT request: "+e);var i=function(){return t.put(s+e,a,c)};return o(i,r)},r["delete"]=function(e,a){n.log("DELETE request: "+e);var r=function(){return t["delete"](s+e,c)};return o(r,a)},r.setServer=function(e){i=e,s=e.restServerUrl+e.restUri},r.getServer=function(){return i},r.getBaseUri=function(){return s},r.setRequestHandler=function(e){l=e},r.getRequestHandler=function(){return l},r.setErrorHandler=function(e){u=e},r.getErrorHandler=function(){return u},r.setCacheHandler=function(e){d=e},r.getCacheHandler=function(){return d};var i="",s="",c={headers:{"content-type":"application/json","Access-Control-Allow-Headers":"content-type"}},l=function(e){return e()},u=function(t,a){return a&&a.skipErrors||t["catch"](function(t){var a;if(404===t.status)a="Server unavailable or URL does not exist";else if(t.data){var o=t.data.message?t.data.message:null,r=t.data.error?t.data.error:null;a=o||r||angular.toJson(t.data)}return a&&n.error(a),e.reject(t)}),t},d=angular.identity;return r}e.$inject=["$q","$http","logger","cacheService"],angular.module("app").factory("restService",e)}(),function(){"use strict";function e(e){function t(e,t,n,a,r){n(t?"["+t+"]":"",e,""),angular.forEach(o,function(n){n(e,t,a,r)})}function n(e){this.moduleName=e}var a={};a.getLogger=function(e){return new n(e)},a.addObserver=function(e){o.push(e)};var o=[];return n.prototype.log=function(n,a){t(n,this.moduleName,e.log,"log",a)},n.prototype.info=function(n,a){t(n,this.moduleName,e.info,"info",a)},n.prototype.warning=function(n,a){t(n,this.moduleName,e.warn,"warning",a)},n.prototype.error=function(n,a){t(n,this.moduleName,e.error,"error",a)},a}e.$inject=["$log"],angular.module("app").factory("logger",e)}(),function(){"use strict";function e(e){e=e.getLogger("contextService");var t={};return t.inject=function(t,n){if(e.log("Injecting context in: "+t),!n)throw"inject: context must be defined";var a=t.match(/(:\w+)/g);return angular.forEach(a,function(a){var o=a.substring(1),r=n[o];if(void 0===r)throw"inject: context."+o+" expected but undefined";r=encodeURIComponent(r),t=t.replace(a,r),e.log("Injected "+r+" for "+a)}),e.log("Resulting REST API: "+t),t},t}e.$inject=["logger"],angular.module("app").factory("contextService",e)}(),function(){"use strict";function e(e,t){function n(e,t){return e+(t?angular.toJson(t):"")}function a(){s&&(s.cachedData=angular.toJson(i))}function o(){var e=s?s.cachedData:null;i=e?angular.fromJson(e):{}}t=t.getLogger("cacheService");var r={};r.setCacheData=function(e,o,r,s){var c=n(e,o);i[c]={date:s||new Date,data:r},t.log('Cache set for key: "'+c+'"'),a()},r.getCacheData=function(e,a){var o=n(e,a),r=i[o];return r?(t.log('Cache hit for key: "'+o+'"'),r.data):null},r.getCacheDate=function(e,t){var a=n(e,t),o=i[a];return o?o.date:null},r.clearCacheData=function(e,o){var r=n(e,o);i[r]=void 0,t.log('Cache cleared for key: "'+r+'"'),a()},r.cleanCache=function(e){e?angular.forEach(i,function(t,n){e>=t.date&&(i[n]=void 0)}):i={},a()},r.setPersistence=function(t){r.cleanCache(),s="local"===t||"session"===t?e[t+"Storage"]:null,o()};var i={},s=null;return o(),r}e.$inject=["$window","logger"],angular.module("app").factory("cacheService",e)}(),function(){"use strict";angular.module("app").constant("_",window._)}(),function(){"use strict";function e(e,t,n,a,o,r,i){function s(){a.debug=r.debug,l.setLanguage(),i.setServer(r.server)}function c(e){l.pageTitle=a.getString("APP_NAME"),e&&(l.pageTitle+=" | "+a.getString(e))}var l=t;l.pageTitle="",l.setLanguage=function(t){var n=o.includes(r.supportedLanguages,t);n||(t="en-US"),a.setCurrentLanguage(t),e.id=t},l.$on("$stateChangeSuccess",function(e,t){c(t.data?t.data.title:null)}),l.$on("gettextLanguageChanged",function(){c(n.current.data?n.current.data.title:null)}),s()}e.$inject=["$locale","$rootScope","$state","gettextCatalog","_","config","restService"],angular.module("app").run(e)}(),function(){"use strict";function e(e,t,n){t.otherwise("/"),e.state("app",{templateUrl:"modules/shell/shell.html",controller:"shellController as shell"}).state("app.home",{url:"/home",templateUrl:"modules/screens/home/home.html",controller:"homeController as vm",data:{title:n("Home")}}).state("app.about",{url:"/about",templateUrl:"modules/screens/about/about.html",controller:"aboutController as vm",data:{title:n("About")}}).state("app.session",{url:"/",templateUrl:"modules/screens/session/session.html",controller:"sessionController as vm",data:{title:n("Session")}})}e.$inject=["$stateProvider","$urlRouterProvider","gettext"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app").constant("config",{debug:!1,version:"1.1.2",supportedLanguages:["en-US","fr-FR"],server:{restServerUrl:"",restUri:""}})}(),function(){"use strict";function e(e,t,n){e.decorator("$exceptionHandler",["$delegate","$injector",function(e,t){return function(n,a){e(n,a);var o=t.get("logger").getLogger("exceptionHandler");o.error(n+(a?" ("+a+")":""))}}]),e.decorator("$log",["$delegate",function(e){return n.debug||(e.log=angular.noop,e.debug=angular.noop),e}]),t.debugInfoEnabled(n.debug)}e.$inject=["$provide","$compileProvider","config"],angular.module("app").config(e)}();