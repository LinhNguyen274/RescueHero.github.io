var PlayFab=void 0!==PlayFab?PlayFab:{};PlayFab.settings||(PlayFab.settings={titleId:null,developerSecretKey:null,GlobalHeaderInjection:null,productionServerUrl:".playfabapi.com"}),PlayFab._internalSettings||(PlayFab._internalSettings={entityToken:null,sdkVersion:"1.88.210628",requestGetParams:{sdk:"JavaScriptSDK-1.88.210628"},sessionTicket:null,verticalName:null,errorTitleId:"Must be have PlayFab.settings.titleId set to call this method",errorLoggedIn:"Must be logged in to call this method",errorEntityToken:"You must successfully call GetEntityToken before calling this",errorSecretKey:"Must have PlayFab.settings.developerSecretKey set to call this method",GetServerUrl:function(){return"http"!==PlayFab.settings.productionServerUrl.substring(0,4)?PlayFab._internalSettings.verticalName?"https://"+PlayFab._internalSettings.verticalName+PlayFab.settings.productionServerUrl:"https://"+PlayFab.settings.titleId+PlayFab.settings.productionServerUrl:PlayFab.settings.productionServerUrl},InjectHeaders:function(t,e){if(e)for(var n in e)try{t.setRequestHeader(gHeaderKey,e[n])}catch(a){console.log("Failed to append header: "+n+" = "+e[n]+"Error: "+a)}},ExecuteRequest:function(t,e,n,a,r,i,l){return new Promise(function(o,s){if(null!=r&&"function"!=typeof r)throw"Callback must be null or a function";null==e&&(e={});var u=new Date,y=JSON.stringify(e),c=[t],p=PlayFab._internalSettings.requestGetParams;if(null!=p){var E=!0;for(var d in p)E?(c.push("?"),E=!1):c.push("&"),c.push(d),c.push("="),c.push(p[d])}var b=c.join(""),S=new XMLHttpRequest;S.open("POST",b,!0),S.setRequestHeader("Content-Type","application/json"),S.setRequestHeader("X-PlayFabSDK","JavaScriptSDK-"+PlayFab._internalSettings.sdkVersion),null!=n&&S.setRequestHeader(n,a),PlayFab._internalSettings.InjectHeaders(S,PlayFab.settings.GlobalHeaderInjection),PlayFab._internalSettings.InjectHeaders(S,l),S.onloadend=function(){if(null!=r){var t=PlayFab._internalSettings.GetPlayFabResponse(e,S,u,i);200===t.code?r(t,null):r(null,t)}},S.onerror=function(){if(null!=r){var t=PlayFab._internalSettings.GetPlayFabResponse(e,S,u,i);r(null,t)}},S.send(y),S.onreadystatechange=function(){if(4===this.readyState){var t=PlayFab._internalSettings.GetPlayFabResponse(e,this,u,i);200===this.status?o(t):s(t)}}})},GetPlayFabResponse:function(t,e,n,a){var r=null;try{r=JSON.parse(e.responseText)}catch(i){r={code:503,status:"Service Unavailable",error:"Connection error",errorCode:2,errorMessage:e.responseText}}return r.CallBackTimeMS=new Date-n,r.Request=t,r.CustomData=a,r},authenticationContext:{PlayFabId:null,EntityId:null,EntityType:null,SessionTicket:null,EntityToken:null},UpdateAuthenticationContext:function(t,e){var n={};return null!==e.data.PlayFabId&&(PlayFab._internalSettings.authenticationContext.PlayFabId=e.data.PlayFabId,n.PlayFabId=e.data.PlayFabId),null!==e.data.SessionTicket&&(PlayFab._internalSettings.authenticationContext.SessionTicket=e.data.SessionTicket,n.SessionTicket=e.data.SessionTicket),null!==e.data.EntityToken&&(PlayFab._internalSettings.authenticationContext.EntityId=e.data.EntityToken.Entity.Id,n.EntityId=e.data.EntityToken.Entity.Id,PlayFab._internalSettings.authenticationContext.EntityType=e.data.EntityToken.Entity.Type,n.EntityType=e.data.EntityToken.Entity.Type,PlayFab._internalSettings.authenticationContext.EntityToken=e.data.EntityToken.EntityToken,n.EntityToken=e.data.EntityToken.EntityToken),Object.assign(t,n)},AuthInfoMap:{"X-EntityToken":{authAttr:"entityToken",authError:"errorEntityToken"},"X-Authorization":{authAttr:"sessionTicket",authError:"errorLoggedIn"},"X-SecretKey":{authAttr:"developerSecretKey",authError:"errorSecretKey"}},GetAuthInfo:function(t,e){var n=PlayFab._internalSettings.AuthInfoMap[e].authError,a=PlayFab._internalSettings.AuthInfoMap[e].authAttr,r=null;return"entityToken"===a?r=PlayFab._internalSettings.entityToken:"sessionTicket"===a?r=PlayFab._internalSettings.sessionTicket:"developerSecretKey"===a&&(r=PlayFab.settings.developerSecretKey),{authKey:e,authValue:t.AuthenticationContext?t.AuthenticationContext[a]:r,authError:n}},ExecuteRequestWrapper:function(t,e,n,a,r,i){var l=null;if(null!==n){var o=PlayFab._internalSettings.GetAuthInfo(e,n=n),s=(n=o.authKey,l=o.authValue,o.authError);if(!l)throw s}return PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl()+t,e,n,l,a,r,i)}}),PlayFab.buildIdentifier="jbuild_javascriptsdk_sdk-generic-1_2",PlayFab.sdkVersion="1.88.210628",PlayFab.GenerateErrorReport=function(t){if(null==t)return"";var e=t.errorMessage;for(var n in t.errorDetails)for(var a in t.errorDetails[n])e+="\n"+n+": "+t.errorDetails[n][a];return e},PlayFab.ExperimentationApi={ForgetAllCredentials:function(){PlayFab._internalSettings.sessionTicket=null,PlayFab._internalSettings.entityToken=null},CreateExclusionGroup:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/CreateExclusionGroup",t,"X-EntityToken",e,n,a)},CreateExperiment:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/CreateExperiment",t,"X-EntityToken",e,n,a)},DeleteExclusionGroup:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/DeleteExclusionGroup",t,"X-EntityToken",e,n,a)},DeleteExperiment:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/DeleteExperiment",t,"X-EntityToken",e,n,a)},GetExclusionGroups:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/GetExclusionGroups",t,"X-EntityToken",e,n,a)},GetExclusionGroupTraffic:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/GetExclusionGroupTraffic",t,"X-EntityToken",e,n,a)},GetExperiments:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/GetExperiments",t,"X-EntityToken",e,n,a)},GetLatestScorecard:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/GetLatestScorecard",t,"X-EntityToken",e,n,a)},GetTreatmentAssignment:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/GetTreatmentAssignment",t,"X-EntityToken",e,n,a)},StartExperiment:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/StartExperiment",t,"X-EntityToken",e,n,a)},StopExperiment:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/StopExperiment",t,"X-EntityToken",e,n,a)},UpdateExclusionGroup:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/UpdateExclusionGroup",t,"X-EntityToken",e,n,a)},UpdateExperiment:function(t,e,n,a){return PlayFab._internalSettings.ExecuteRequestWrapper("/Experimentation/UpdateExperiment",t,"X-EntityToken",e,n,a)}};var PlayFabExperimentationSDK=PlayFab.ExperimentationApi;