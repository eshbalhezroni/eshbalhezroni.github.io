/* Every page opens at its top, never part-way down (also stops the browser restoring an old scroll position). */
(function(){try{history.scrollRestoration='manual'}catch(e){}
  var held=true;
  /* instant, never the smooth glide some pages set for in-page links: a new page must not be seen scrolling up */
  var top=function(){if(location.hash)return;try{window.scrollTo({top:0,left:0,behavior:'instant'})}catch(e){window.scrollTo(0,0)}};
  var early=function(){if(held)top()};top();document.addEventListener('DOMContentLoaded',early);addEventListener('load',early);addEventListener('pageshow',function(e){if(!e.persisted)early()});
  /* until the visitor first scrolls or touches, anything that moves the page (a restored position, content that appears after load) is put back at the top */
  var stop=function(){held=false};['wheel','touchstart','keydown','pointerdown'].forEach(function(t){addEventListener(t,stop,{once:true,passive:true})});
  var t0=Date.now();setTimeout(stop,800);(function tick(){if(!held||Date.now()-t0>800)return;if((window.scrollY||0)>0)top();requestAnimationFrame(tick)})();
})();
/* Phone menu: builds the header, button and panel, and runs them. Below 600px only (see menu.css). The existing menu stays for wider screens and for browsers without JavaScript. */
(function(){
  var root=document.documentElement,body=document.body;
  if(!body||document.querySelector('.mm-head'))return;
  root.classList.add('mm');
  var file=(location.pathname.split('/').pop()||'').toLowerCase();
  var cur=/^(work|varonis|intent-based-promotions|campaigns-board|journey-flow)/.test(file)?'work':file.indexOf('blog')===0?'blog':file.indexOf('about')===0?'about':'home';
  if(cur==='home')root.classList.add('mm-home');
  var pages=[['home','Home','./'],['work','Work','work.html'],['blog','Blog','blog.html'],['about','About','about.html']];
  /* Work, Blog and About: once the page title has scrolled away, it appears in the top bar between the mark and the menu button */
  var isCase=!!body.getAttribute('data-case'),title=/^(work|blog|about)(\.html)?$/.test(file),h1=null;
  var links=pages.map(function(p){return '<a href="'+p[2]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join('');
  body.insertAdjacentHTML('afterbegin',
    '<header class="mm-head" style="visibility:hidden"><a class="mm-logo" href="./" aria-label="Eshbal Hezroni, home"><span aria-hidden="true"></span></a>'+
    (title?'<button class="mm-title" type="button"></button>':'')+
    '<button class="mm-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">'+
    '<svg class="mm-bars" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'+
    '<svg class="mm-x" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>'+(isCase?'<i class="mm-prog"></i>':'')+'</header>'+
    '<div class="mm-panel" id="mobile-menu" style="display:none"><div class="mm-list" role="navigation" aria-label="Main menu">'+links+'</div></div>');
  var head=body.querySelector('.mm-head'),btn=head.querySelector('.mm-btn'),panel=body.querySelector('.mm-panel');
  var mq=matchMedia('(max-width:600px),(max-height:500px) and (orientation:landscape)');
  function others(on){Array.prototype.forEach.call(body.children,function(el){if(el===head||el===panel||el.tagName==='SCRIPT'||el.tagName==='STYLE'||el.tagName==='LINK')return;if(on)el.setAttribute('inert','');else el.removeAttribute('inert')})}
  function set(open){
    if(open&&panel.style.display==='none'){panel.style.display='';void panel.offsetWidth}
    root.classList.toggle('mm-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    others(open);
  }
  btn.addEventListener('click',function(){set(!root.classList.contains('mm-open'))});
  panel.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&root.classList.contains('mm-open')){set(false);btn.focus()}});
  var ttl=head.querySelector('.mm-title');
  function findTitle(){if(!ttl||h1||isCase)return;h1=document.querySelector('main h1,.head h1');if(h1){ttl.textContent=h1.textContent.trim();ttl.setAttribute('aria-label',ttl.textContent+', scroll to top')}}
  if(ttl)ttl.addEventListener('click',function(){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});
  /* case pages: the bar names the section you are in, and a thin line shows how far down the page you are */
  var secs=null,curSec='',swapTm,prog=head.querySelector('.mm-prog');
  function caseBar(){
    if(ttl){if(!secs||!secs.length)secs=[].slice.call(document.querySelectorAll('#case-root h2'));
      var name='';for(var i=0;i<secs.length;i++){if(secs[i].getBoundingClientRect().top<=84)name=secs[i].textContent.trim();else break}
      head.classList.toggle('mm-titled',!!name);
      if(name&&name!==curSec){var first=!curSec;curSec=name;clearTimeout(swapTm);
        if(first){ttl.textContent=name;ttl.setAttribute('aria-label',name+', scroll to top');ttl.classList.remove('mm-out')}
        else{ttl.classList.add('mm-out');swapTm=setTimeout(function(){ttl.textContent=name;ttl.setAttribute('aria-label',name+', scroll to top');ttl.classList.remove('mm-out')},110)}}
      if(!name)curSec=''}
    if(prog){var max=document.documentElement.scrollHeight-window.innerHeight;prog.style.transform='scaleX('+(max>0?Math.max(0,Math.min(1,(window.scrollY||0)/max)):0)+')'}}
  function scrolled(){findTitle();head.classList.toggle('mm-scrolled',(window.scrollY||0)>8);if(isCase)caseBar();else if(ttl&&h1)head.classList.toggle('mm-titled',h1.getBoundingClientRect().bottom<72)}
  addEventListener('scroll',scrolled,{passive:true});scrolled();
  addEventListener('pageshow',function(e){if(e.persisted)set(false)});
  (mq.addEventListener?mq.addEventListener('change',function(){if(!mq.matches)set(false)}):mq.addListener(function(){if(!mq.matches)set(false)}));
  /* never show the header or the panel before their stylesheet is applied (that flash looked like the menu popping up) */
  (function reveal(n){var styled=getComputedStyle(head).position==='fixed'||!mq.matches;if(styled||n>120){head.style.visibility='';return}requestAnimationFrame(function(){reveal((n||0)+1)})})(0);
})();
