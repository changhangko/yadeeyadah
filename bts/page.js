import './review.js';
const key='garry_portfolio_lang_v2';
function translate(){
 document.querySelectorAll('[data-en][data-zh]').forEach(el=>el.textContent=document.documentElement.lang.startsWith('zh')?el.dataset.zh:el.dataset.en);
}
document.documentElement.lang=localStorage.getItem(key)==='zh'?'zh-CN':'en';translate();
document.getElementById('btsLang').addEventListener('click',()=>{
 const language=document.documentElement.lang.startsWith('zh')?'en':'zh-CN';
 document.documentElement.lang=language;localStorage.setItem(key,language==='en'?'en':'zh');translate();
});
fetch('/DESIGN_GUARDRAILS.md').then(r=>{if(!r.ok)throw Error('Rules unavailable');return r.text();}).then(text=>document.getElementById('guardrailSource').textContent=text).catch(()=>document.getElementById('guardrailSource').textContent='Open the repository source link to read the rules.');
