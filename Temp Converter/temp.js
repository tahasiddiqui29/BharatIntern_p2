var DegreeCelcius =
document.getElementById('DegreeCelcius');
var Farenheit =
document.getElementById('Farenheit');



DegreeCelcius.addEventListener('input', function(){
    let d = this.value;
    let f = d * 9/5 + 32;
    Farenheit.value = f;
});

Farenheit.addEventListener('input', function(){
    let f = this.value;
    let d = (f - 32) * 5/9 ;
    DegreeCelcius.value = d;
});

