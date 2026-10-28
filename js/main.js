const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const hdr=$('.hdr');const onS=()=>hdr.classList.toggle('solid',scrollY>40);addEventListener('scroll',onS,{passive:true});onS();
const b=$('#burger'),n=$('#nav');b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};$$('#nav a').forEach(a=>a.onclick=()=>n.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
$$('.tabs button').forEach(t=>t.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.remove('on'));t.classList.add('on');const f=t.dataset.f;$$('.gi').forEach(g=>{g.classList.toggle('hide',f!=='all'&&g.dataset.cat!==f);g.classList.add('in')})});
const lb=$('#lb'),li=lb.querySelector('img');let cur=0;const vis=()=>$$('.gi:not(.hide)');
const show=i=>{const v=vis();cur=(i+v.length)%v.length;li.src=v[cur].href;li.alt=v[cur].querySelector('img').alt;lb.hidden=false};
$$('.gi').forEach(g=>g.onclick=e=>{e.preventDefault();show(vis().indexOf(g))});
lb.querySelector('.x').onclick=()=>lb.hidden=true;lb.querySelector('.pv').onclick=()=>show(cur-1);lb.querySelector('.nx').onclick=()=>show(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.hidden=true};addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
// open-now (Ocala = America/New_York)
try{const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',weekday:'short',hour:'numeric',hour12:false}).formatToParts(new Date());const wd=p.find(x=>x.type==='weekday').value,h=+p.find(x=>x.type==='hour').value;const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],di=days.indexOf(wd);
const open=di<6&&h>=10&&h<18;$('#opendot').classList.toggle('open',open);$('#openmsg').textContent=open?'Open now · Walk right in · till 6PM':'Closed now · Mon–Sat 10AM–6PM';$$('#hours tr')[di]?.classList.add('today')}catch(e){}
const hb=$('.hero-bg');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)addEventListener('scroll',()=>{if(scrollY<innerHeight)hb.style.translate=`0 ${scrollY*.3}px`},{passive:true});
