/* Author : Muhammad Arif Uddin
GitHub : GitHub.com/arif-un */


// add style
let css =
  `
  ._h2p ._3nzl .jewelButton ._2n_9, ._h2p ._3nzl .jewelButton:hover ._2n_9, ._h2p ._3nzl .jewelButton:focus ._2n_9{
    background-image:url(/icons/icon.png) !important;
  }
  ._50tj {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.13);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.13);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.13);
    
   } /* top blue bar */

  /*top bar btn*/
  ._2s25{color:#1f1f1f !important}
  ._2s25:hover {border-radius:20px!important;
    background: #f2f3f5!important;
    color: #3e3e3e!important;} 
  ._2s25:focus {border-radius:20px!important;
     color:#3e3e3e} 
  ._2s25:active{
      border-radius:20px!important;
      color:#3e3e3e;
    }
    #facebook ._-kb div {
      font-family: inherit;
  }

  ._585-, ._585- ._4w98{ color:#fff !important;background:#f2f3f5; border:none; border-radius:30px!important } /*search*/
  ._1frb { color:#000 !important; } /* search */
 /* search suggestmenu */
  ._5tlx{
    border:none !important;
    border-radius:15px!important;
    overflow:hidden!important;
    margin-left:7px!important;
  }

  ._19eb{background: #284e86; /* logo */
    padding: 3px;
    margin-right: 20px;
    border-radius: 5px}
    ._2s1x ._2s1y{background-color:white; border:none; zoom:102%}
  ._5va1 {border-radius:15px !important} /*page inside post*/
  ._11qy { padding:5px } /*side stories bar*/

  /* post */
  .mbm {
    overflow:hidden
  }
  ._3ubp,._sg1,._16ve{ background:white;border:none} /*status update head bottom */
  ._5qtn ._5qtp{margin-left:10px}
  ._4-u2{ border:none!important; border-radius:15px!important;
    margin-top:20px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.15); 
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.15);} /*post*/
  ._2yq ._4-u2::before{ border:none; } /* post*/
  #u_0_1m > div, #u_ps_fetchstream_3_3_0 > div{
    box-shadow:none !important;
  }
  ._3vum{
    border:none !important;
  }
  #timeline_story_column {
    margin-left: 5px !important;
    margin-right: 5px;
  }

  ._h2p ._3nzl.hasNew .jewelButton ._2n_9, ._h2p ._3nzl .jewelButton:active ._2n_9, ._h2p ._3nzl.openToggler .jewelButton ._2n_9{
    background-position: -25px -354px !important; 
  }

  ._h2p ._330i._1z4y.hasNew .jewelButton ._2n_9, ._h2p ._330i._1z4y .jewelButton:active ._2n_9, ._h2p ._330i._1z4y.openToggler .jewelButton ._2n_9{
    background-position: -75px -354px !important; 
  }
  ._h2p ._4xi2.hasNew a.jewelButton ._2n_9, ._h2p ._4xi2 a.jewelButton:active ._2n_9, ._h2p ._4xi2.openToggler a.jewelButton ._2n_9{
    background-position: -50px -279px;
  }
  
  ._h2p ._4d1i ._59fc:active ._59fb, ._h2p ._4d1i.openToggler ._59fc ._59fb{
    background-position: -227px -352px;
  }
  ._h2p ._5lxs:active ._5lxt, ._h2p .openToggler ._5lxs ._5lxt, ._h2p ._5lxs:active ._6qfu, ._h2p .openToggler ._5lxs ._6qfu{
    background-position: -250px -329px;
  }
  ._3sod{
   /*  border:none!important; */
    border-radius:15px!important;
  } /* notification ballon */

  ._5vb_, ._5vb_ #contentCol, html ._4lh, ._4lh .fbTimelineTimePeriod, ._4lh .fbTimelineSectionExpandPager .uiMorePagerLoader, ._4lh .fbTimelineSectionLoading .loadingIndicator , .fbChatSidebar{ background-color:#fff !important } /*body color*/
  .fbChatSidebar, ._5pr2 .fbChatSidebar { border:none; box-shadow:none !important } /*fb chatbar*/
  ._rv { border-radius:50%; } /*chat manu hover pic*/
  ._53ij{border-radius: 15px !important} 
  ._55ln { margin: 3px;border-radius : 20px; transition : box-shadow .3s} /*chat people hover*/
  ._qhr:hover{ border-radius:20px; background:#fff;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2); } /*chat people hover*/
  ._40qq{background:#2d2d2d;} /* close btn */
  .coverBorder, .coverPhotoImg  { border-radius:0 0 15px 15px } /* cover photo */
  .uiContextualLayer, ._50c9 { border-radius:15px } /*search suggest*/
  ._3w53{border-radius: 0 0 20px 20px;}
  ._129h{border:none!important;border-radius:50px}
  ._129h:focus-within{border:2px solid #95bbff!important}
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

  /* like butons */
  ._18vj._18vj{
    border-radius: 50px! important;
    outline: none;
  }

  /* notification pop */
  ._2xwp{
    border:none;
    border-radius:15px;
  }

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

   /* grps side link */
   ._2yau::after{
     border:none;
     border-radius:50px
   }
   #pagelet_ego_pane{
     margin-top:14px !important;
   }
   ._2yaa{
     border:none!important;
     border-radius:20px !important;
   }
   ._36nj::after{
     border:none!important;
   }
   ._36nj::before{
    border:none!important;
    }
    ._2tev{
      border-radius:15px 15px 0 0 !important;
    }
  `;


let style = document.createElement("style");

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName("head")[0].appendChild(style);



