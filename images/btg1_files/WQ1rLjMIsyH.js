if (self.CavalryLogger) { CavalryLogger.start_js(["EufJH"]); }

__d("CometFeedStoryLocationStrategy_location$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryLocationStrategy_location"},name:"CometFeedStoryLocationStrategy_location$normalization",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"implicit_place",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Page"},{alias:null,args:null,kind:"ScalarField",name:"contextual_name",storageKey:null},b],storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryLocationStrategy_location.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryLocationStrategy_location",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"implicit_place",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"contextual_name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Page"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"}],type:"CometFeedStoryLocationStrategy"};e.exports=a}),null);
__d("CometFeedStoryLocationStrategy.react",["CometFeedStoryMetaSectionMiddot.react","CometLink.react","CometRelay","React","useCometFeedStoryMatchDebugger","CometFeedStoryLocationStrategy_location.graphql"],(function(a,b,c,d,e,f){"use strict";var g;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var h=b("React");function a(a){a=a.location;b("useCometFeedStoryMatchDebugger")(a);a=(a=a.story)==null?void 0:a.implicit_place;var c=a==null?void 0:a.contextual_name;a=a==null?void 0:a.url;return c==null?null:h.jsxs(h.Fragment,{children:[h.jsx(b("CometFeedStoryMetaSectionMiddot.react"),{}),a!=null?h.jsx(b("CometLink.react"),{href:a,children:c}):c]})}e.exports=c(a,{location:g!==void 0?g:g=b("CometFeedStoryLocationStrategy_location.graphql")})}),null);
__d("MWChatBusinessNullStateCTA.bs",[],(function(a,b,c,d,e,f){}),null);