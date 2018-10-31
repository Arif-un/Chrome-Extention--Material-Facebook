/* Author : Muhammad Arif Uddin
GitHub : GitHub.com/arif-un */


// add style
let css =
  `
  ._50tj { -webkit-box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.58); 
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.58);} /* top blue bar */
  ._585-, ._585- ._4w98{ color:#fff !important;background:#284e86; border:none; border-radius:30px!important } /*search*/
  ._1frb { color:#fff !important; } /* search */
  ._2md{ border-radius: 5px; } /*logo*/
  ._5va1 {border-radius:15px !important} /*page inside post*/
  ._11qy { padding:5px } /*side stories bar*/
  ._4-u2{ border:none!important; border-radius:15px!important;
    margin-top:20px;
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.2);} /*post*/
  ._2yq ._4-u2::before{ border:none; } /* post*/

  ._5vb_, ._5vb_ #contentCol, html ._4lh, ._4lh .fbTimelineTimePeriod, ._4lh .fbTimelineSectionExpandPager .uiMorePagerLoader, ._4lh .fbTimelineSectionLoading .loadingIndicator , .fbChatSidebar{ background-color:#fff !important } /*body color*/
  .fbChatSidebar, ._5pr2 .fbChatSidebar { border:none; box-shadow:none !important } /*fb chatbar*/
  ._rv { border-radius:50%; } /*chat manu hover pic*/
  ._53ij{border-radius: 15px !important} 
  ._55ln { margin: 3px;border-radius : 20px; transition : box-shadow .3s} /*chat people hover*/
  ._55ln:hover{ border-radius:20px; background:#fff;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.43); 
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.43); } /*chat people hover*/

  .coverBorder, .coverPhotoImg  { border-radius:0 0 15px 15px } /* cover photo */
  .uiContextualLayer, ._50c9 { border-radius:15px } /*search suggest*/
  ._5vsj .UFIRow._2o9m{ border-radius:0 0 15px 15px!important } /*comnt*/
  ._5vsj._5vsj._5vsj{ border-radius:0 0 15px 15px!important } /* comnt*/
  ._fmi { border:none; background-color:#efefef!important } /*comnt box*/
  ._fmi:focus-within { border:2px solid #aacbff!important } /*comnt box*/
  ._1ndf:hover { border-radius:0 0 15px 15px!important } /*share hover */
  ._3ubp { border-radius:15px 15px 0 0 !important } /*status head*/
  ._2dck{border-radius :0 0 15px 15px!important} /* status bar focus bottom */
  ._5afe::after { border:none !important; border-radius:15px!important } /*sidebar li*/
  ._2jq5 { border-radius:15px!important } /*sidebar li*/
  ._3m75 .sideNavItem .uiSideNavEditButton a { border-radius:15px!important } /*sidebar li*/
  ._1mtp ._3wv2:hover, ._1mtp ._4k43:hover, ._1mtp ._4noj:hover, ._1mtp ._60p-:hover, ._1mtp ._1mtq:hover, ._1mtp ._38qe:hover, ._1mtp ._4292:hover, ._1mtp ._1ka4:hover { border-radius:15px!important } /*like btn*/
  ._2s25:hover {border-radius:20px!important} /*top bar btn*/
  ._2s25:focus {border-radius:20px!important} /*top bar btn*/
  ._54ng {border:none !important; border-radius:15px!important} /*logout manu*/
  .jewelHeader {border-radius:15px 10px 0 0 !important} /*notification , msg, request manus*/
  .uiToggleFlyout { border:none; border-radius:15px 10px 15px 15px !important} /*notification , msg, request manus*/
  .jewelFooter a {border-radius:0 0 15px 15px !important} /*notification , msg, request manus*/
  ._1nv3 ._11kf { border-radius:50% }  /* profile pic */
  ._1nv5 { border-radius:50% } /* profile pic */
  ._517h { border: none; border-radius:20px !important;} /* btn style */
  button { border-radius:20px!important; }
  button:active { border-radius:20px!important; }
  .fbTimelineTopSection { border:none !important; border-radius:15px!important } /* above cover photo section */
  ._3y89 { border:none }
  ._59s7 { border-radius: 20px!important} /* modal */
  ._50f4 { border-radius: 20px!important} /* modal */
  ._4t2a { border-radius: 20px!important} /* modal */
  ._4-i0 { border-radius:20px 20px 0 0 } /* modal head */
  .photoUfiContainer {border-radius: 0 20px 20px 0} /* pic modal */
  .stageWrapper  {border-radius: 20px 0 0 20px} /* pic modal */
  ._4g9v {border-radius: 20px 0 0 0} /* pic modal */
  ._6vu5 { border-radius:15px 15px 0 0!important } 
  ._69pt { border-radius:15px 15px 0 0!important } 
  ._2orx { border-radius:0 0 15px 15px!important }

   ._5sqx { margin : 0; border-radius: 0px !important}
   ._5sqx { margin : 0; border-radius: 0px !important}
   ._58al,._4oes { border-radius: 20px !important }
   .uiButtonGroup, .uiButtonGroupItem {border:none !important; border-radius:20px!important} /* profile top bar */
   .back {border-radius:0 0 15px 15px !important } /* profile top bar */
   ._4jhq , ._2dgj, ._qa1 { border:none ;border-radius : 15px} /* page profile pic */
   ._4-u5 { background : #fff } /* page background */
   ._3o_h::after, ._2yaa ._2yau::after  { border:none ; border-radius : 20px } /* page button */
   ._3_gi .uiSearchInput::after, ._3_gi .uiTypeahead::after, ._3_gi ._58ak::after { border-radius : 20px } /* group search button */
   ._2tev { border-radius: 15px 15px 0 0} /* group suggest  */
   ._hoc { margin:0; border-radius: 0 0 15px 15px!important } /* unliked page top bar */
   ._hij { border-radius: 15px }
   ._h5y { border-radius: 15px 15px 0 0 !important }/*  profile pop up */
   ._572u { border-radius: 0 0 15px 15px !important }  /* profile pop up */
  `;


let style = document.createElement("style");

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName("head")[0].appendChild(style);


var node = document.createElement("script");
var textnode = document.createTextNode(`Waves.attach('button');
Waves.init(); `);
node.appendChild(textnode);

let js = `
<script src="data/waves.js "></script><script>
Waves.attach('button',"._517h");
Waves.init();   
</script>`;

let j = document.createElement("script");

j.type = 'text/javascript';
j.src = 'data/waves.js';

document.getElementsByTagName("body")[0].appendChild(j);
document.getElementsByTagName("body")[0].appendChild(node);

