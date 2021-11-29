//Функция №1
const form1 = document.querySelector("#f1 form");
const result1 = document.querySelector("#f1 p");
const input1 = document.querySelector("#f1 input[type='text']");
form1.onsubmit = function(e){
    e.preventDefault();
    result1.innerText = input1.value
    input1.value = ''
    console.log(`Функция №1: ${result1.innerText}`)
}


//Функция №2
const form2 = document.querySelector("#f2 form");
const result2 = document.querySelector("#f2 p");
const inputs2 = document.querySelectorAll("#f2 input[type='number']");
form2.onsubmit = function(e){
    e.preventDefault();
    result2.innerText = inputs2[0].value * inputs2[1].value
    inputs2[0].value = inputs2[1].value = ''
    console.log(`Функция №2: ${result2.innerText}`)
}


//Функция №3
const form3 = document.querySelector("#f3 form");
const result3 = document.querySelector("#f3 p");
const input3 = document.querySelector("#f3 input[type='number']");
form3.onsubmit = function(e){
    e.preventDefault();
    result3.innerText = Math.sqrt(input3.value) 
    input3.value = ''
    console.log(`Функция №3: ${result3.innerText}`)
}


//Функция №4
const form4 = document.querySelector("#f4 form");
const result4 = document.querySelector("#f4 p");
const input4 = document.querySelector("#f4 input[type='number']");
form4.onsubmit = function(e){
    e.preventDefault();
    result4.innerText = input4.value / 0.62137 
    input4.value = ''
    console.log(`Функция №4: ${result4.innerText}`)
}


//Функция №5
const form5 = document.querySelector("#f5 form");
const result5 = document.querySelector("#f5 p");
const inputs5 = document.querySelectorAll("#f5 input[type='number']");
form5.onsubmit = function(e){
    e.preventDefault();
    result5.innerText = Math.floor(Math.random() * (inputs5[1].value - inputs5[0].value) + inputs5[0].value);
    inputs5[0].value = inputs5[1].value = ''
    console.log(`Функция №5: ${result5.innerText}`)
}

//Функция №6
const form6 = document.querySelector("#f6 form");
const result6 = document.querySelector("#f6 p");
const input6 = document.querySelector("#f6 input[type='number']");
form6.onsubmit = function(e){
    e.preventDefault();
    if(input6.value > 0){
        result6.innerText = "положительное"
    }
    else if(input6.value < 0 ){
        result6.innerText = "отрицательное" 

    }
    else{
        result6.innerText = "нуль" 
    }
    input6.value = ''
    console.log(`Функция №6: ${result6.innerText}`)
}


//Функция №7
const form7 = document.querySelector("#f7 form");
const result7 = document.querySelector("#f7 p");
const input7 = document.querySelector("#f7 input[type='number']");
form7.onsubmit = function(e){
    e.preventDefault();
    if(input7.value % 2){
        result7.innerText = "нечетное"
    }
    else{
        result7.innerText = "четное" 
    }
    input7.value = ''
    console.log(`Функция №7: ${result7.innerText}`)
}

//Функция №8
const form8 = document.querySelector("#f8 form");
const result8 = document.querySelector("#f8 p");
const input8 = document.querySelector("#f8 input[type='number']");
form8.onsubmit = function(e){
    e.preventDefault();
    result8.innerText = "невисокосный" 
    if(input8.value % 4 == 0){
        if(input8.value % 100 != 0){
            result8.innerText = "високосный"
            
        }
        else if(input8.value % 400 == 0){
            result8.innerText = "високосный"

        }
    }
    input8.value = ''
    console.log(`Функция №8: ${result8.innerText}`)
}

//Функция №9
const form9 = document.querySelector("#f9 form");
const result9 = document.querySelector("#f9 p");
const inputs9 = document.querySelectorAll("#f9 input[type='number']");
form9.onsubmit = function(e){
    e.preventDefault();
    result9.innerText = `Максимальное число: ${Math.max(inputs9[0].value, inputs9[1].value, inputs9[2].value)}`
    inputs9.value = ''
    console.log(`Функция №9: ${result9.innerText}`)
}

//Функция №10
const form10 = document.querySelector("#f10 form");
const result10 = document.querySelector("#f10 p");
const input10 = document.querySelector("#f10 input[type='number']");
form10.onsubmit = function(e){
    e.preventDefault();
    let a = true;

    for (let i = 1; i <= input10.value; i++) {
        console.log(i);
        if(input10.value % i == 0){
            if (i != 1 && i != input10.value)
                a = false
        }
    }
    if (input10.value > 1 && a){
        result10.innerText = "простое число"
    }
    else{
        result10.innerText = "непростое число"
    }

    input10.value = ''
    console.log(`Функция №10: ${result10.innerText}`)
}

//Функция №11
const form11 = document.querySelector("#f11 form");
const result11 = document.querySelector("#f11 p");
const inputs11 = document.querySelectorAll("#f11 input[type='number']");
form11.onsubmit = function(e){
    e.preventDefault();
    result11.innerText = '';
    for (let i = inputs11[0].value; i <= inputs11[1].value; i++) {
        let a = true;
        for (let j = 1; j <= i; j++) {
            if(i % j == 0){
                if (j != 1 && j != i)
                    a = false
            }
        }
        if (i > 1 && a){
            result11.innerText += ' ' + i;
        }
    }
    inputs11.value = ''
    console.log(`Функция №11: ${result11.innerText}`)
}


//Функция №12
const form12 = document.querySelector("#f12 form");
const result12 = document.querySelector("#f12 p");
const input12 = document.querySelector("#f12 input[type='number']");
form12.onsubmit = function(e){
    e.preventDefault();
    result12.innerText = '';
    for (let i = 2; i <= 10; i++) {
        result12.innerHTML += `${input12.value} x ${i} = ${input12.value * i}<br>`  
       
    }
    input12.value = '';
    console.log(`Функция №12: ${result12.innerText}`)
}


//Функция №13
const form13 = document.querySelector("#f13 form");
const result13 = document.querySelector("#f13 p");
const input13 = document.querySelector("#f13 input[type='text']");
form13.onsubmit = function(e){
    e.preventDefault();
    result13.innerText = '';
    let str = input13.value.toLowerCase();
    if(str == str.split('').reverse().join('')){
        result13.innerText = 'строка полиндром'
    }
    else{
        result13.innerText = 'строка не полиндром'
    }
    input13.value = '';
    console.log(`Функция №12: ${result13.innerText}`)
}

//Функция №14
const form14 = document.querySelector("#f14 form");
const result14 = document.querySelector("#f14 p");
const input14 = document.querySelector("#f14 input[type='text']");
form14.onsubmit = function(e){
    e.preventDefault();
    result14.innerText = '';   
    result14.innerText = input14.value.charAt(0).toUpperCase() + input14.value.slice(1);   
    console.log(`Функция №12: ${result14.innerText}`)
}

