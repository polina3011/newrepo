btn.addEventListener("click",fnc);
function fnc() {
  a1 = a.value;
  b1 = b.value;
  c1 = c.value;
  d1 = d.value;
 let data =[a1,b1,c1,d1];
    for (let i = 1; i < 4; i++) {
        y = Math.min.apply(null, data);
        answer2.innerHTML = "Минимальное: " + y;
        z = Math.max.apply(null, data);
        answer.innerHTML = "Максимальное: " + z;
    }

}
