
test ={
question_arr : ['1.	Метод исследования, заключающийся в определении местонахождения объектов и нанесении их на карту называется…', "2. Метод исследования, заключающийся в изучении материалов, хранящихся в архивах и музеях, анализе статистических данных называется…", "3. Метод исследования, который позволяет узнать о природе древних геологических эпох путем изучения горных пород, остатков растений и животных называется…", "4. Что относится к физической географии?", "5. Что изучает общественная география?"],
 a1_arr : ["картографическим", "экспедиционным", 'аэрокосмическим'," геоморфология", "жизнь во всех ее проявлениях" ],
a2_arr : ["историческим", "историческим", 'палеогеографическим', "политическая география", "географическую оболочку и ее отдельные компоненты - рельеф, климат, воды суши и океаны, почвы, распространение растительности и животного мира"],
a3_arr : ["экспедиционным","описательным", 'историческим', "география транспорта", "территориальную организацию общества и его составляющих - населения, экономической, социальной, политической сфер" ],
answer_arr : ["картографическим", "историческим", "палеогеографическим", " геоморфология", "территориальную организацию общества и его составляющих - населения, экономической, социальной, политической сфер "],
n_right_answer_arr: [1,2,2,1,3],
}
let n_answer = 4;
let right_answers = 0;
console.log(test);
answers (n_question.value);
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(n1.checked);
    console.log(n2.checked);
    console.log(n3.checked);
    if (n1.checked){ n_a = 1;}
    if (n2.checked){ n_a = 2;}
    if (n3.checked){ n_a = 3;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Правильных ответов:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }
}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
}
function answers(k) {
    n_question.value = k;
    question.innerHTML=test.question_arr[n_question.value];
    a1.innerHTML = test.a1_arr[n_question.value];
    a2.innerHTML = test.a2_arr[n_question.value];
    a3.innerHTML = test.a3_arr[n_question.value];
    answer.innerHTML = test.answer_arr[n_question.value];
    n_right_answer = test.n_right_answer_arr[n_question.value];
}




