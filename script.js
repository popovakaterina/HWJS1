let degree = document.querySelector(".degree");
let button = document.querySelector(".GoFareng");
let fareng = document.querySelector(".fareng");

button.addEventListener("click", function() {
    if (degree.value === ""){
        alert ("Введите температуру в поле ввода")
    }
    else{
        let farengeit = degree.value * 9/5 + 32;
        fareng.textContent = farengeit.toFixed(0) + " F";
    }
    
});

let UserName = document.querySelector(".UserName");
let button2 = document.querySelector(".GoAdmin");
let AdminName = document.querySelector(".AdminName");

button2.addEventListener("click", function() {
    if (UserName.value === "") {
     alert ("Введите имя в поле ввода");   
    }
    else {
      let admin = UserName.value;
      AdminName.textContent = "Новый администратор - "+ admin;  
    }
    
});

