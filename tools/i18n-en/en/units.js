// ===================== English build: units (lb/ft-in default, kg/cm optional) =====================
// Internally everything stays metric (kg, cm, ml) so BMI/TDEE math is unchanged.
const LB = 0.45359237, INCH = 2.54, OZ = 29.5735;
function kg2lb(k) { return k / LB; }
function lb2kg(l) { return l * LB; }
function ftin2cm(ft, inch) { return ((+ft || 0) * 12 + (+inch || 0)) * INCH; }
function cm2ftin(cm) { if (!(cm > 0)) return null; let t = Math.round(cm / INCH * 2) / 2, f = Math.floor(t / 12), i = t - f * 12; return [f, i]; }
function uMode() {
  try { if (typeof D !== 'undefined' && D && D.profile && document.getElementById('ob') && document.getElementById('ob').classList.contains('on')) return D.profile.units === 'metric' ? 'metric' : 'us'; } catch(e) {}
  try { return S && S.profile && S.profile.units === 'metric' ? 'metric' : 'us'; } catch(e) { return 'us'; }
}
function wU() { return uMode() === 'us' ? 'lb' : 'kg'; }
function wNum(kg, dp) { const p = Math.pow(10, dp === undefined ? 1 : dp), v = uMode() === 'us' ? kg2lb(+kg) : +kg; return Math.round(v * p) / p; }
function wTxt(kg, dp) { return wNum(kg, dp) + ' ' + wU(); }
function wInKg(v) { return uMode() === 'us' ? lb2kg(+v) : +v; }
function hTxt(cm) { if (uMode() !== 'us') return Math.round(+cm) + ' cm'; const x = cm2ftin(+cm); return x ? x[0] + '′ ' + x[1] + '″' : ''; }
// Rates shown in static copy: rounded to ½ lb in US mode, with kg alongside
function half(x) { return Math.max(0.5, Math.round(x * 2) / 2); }
function wRate(a, b) {
  const kg = b === undefined ? a + ' kg' : a + '–' + b + ' kg';
  if (uMode() !== 'us') return kg;
  return (b === undefined ? half(kg2lb(a)) : half(kg2lb(a)) + '–' + half(kg2lb(b))) + ' lb (' + kg + ')';
}
function volTxt(ml, fine) { if (uMode() === 'us') return Math.round(+ml / OZ) + ' oz'; return fine ? Math.round(+ml) + ' ml' : (+ml / 1000).toFixed(1) + ' L'; }
function dayTxt(n) { return n + (+n === 1 ? ' day' : ' days'); }
function setUnits(u) { S.profile.units = u === 'metric' ? 'metric' : 'us'; save(); rerender(); toast(u === 'metric' ? 'Showing kg · cm.' : 'Showing lb · ft/in.'); }
