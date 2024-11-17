
let firstJs=true;
let firstJava =true;
let firsthtml=true;
let firstpython =true;
let firstcplus =true;

function extendExJs(){
const exjs = document.getElementById("btn-js");
const additionalTextJs = document.getElementById("additonalTextJs");
   if(firstJs){
    additionalTextJs.style.display ="block";
    exjs.innerHTML = " Show less";
    firstJs = false;
 }
else{ 
    additionalTextJs.style.display ="none";
    firstJs =true;
    exjs.innerHTML = "More";
}
}
function extendExJava(){
    const btnJava = document.getElementById("btn-java");
    const additionalTextJava = document.getElementById("additonalTextJava");
       if(firstJava){
        additionalTextJava.style.display ="block";
        btnJava.innerHTML = " Show less";
        firstJava = false;
     }
    else{ 
        additionalTextJava.style.display ="none";
        firstJava =true;
        btnJava.innerHTML = "More";
    }
}


function extendExHtml(){
    const btnHtml = document.getElementById("btn-html");
    const additionalTextHtml = document.getElementById("additonalTextHtml");
       if(firsthtml){
        additionalTextHtml.style.display ="block";
        btnHtml.innerHTML = " Show less";
        firsthtml = false;
     }
    else{ 
        additionalTextHtml.style.display ="none";
        firsthtml =true;
        btnHtml.innerHTML = "More";
    }
}
function extendExPython(){

    const btnPy = document.getElementById("btn-py");
    const additionalTextPy = document.getElementById("additonalTextPy");
       if(firstpython){
        additionalTextPy.style.display ="block";
        btnPy.innerHTML = " Show less";
        firstpython = false;
     }
    else{ 
        additionalTextPy.style.display ="none";
        firstpython =true;
        btnPy.innerHTML = "More";
    }
}

function extendExCplus(){
    const btnCplus = document.getElementById("btn-Cplus");
    const additionalTextCplus = document.getElementById("additonalTextCplus");
       if(firstcplus){
        additionalTextCplus.style.display ="block";
        btnCplus.innerHTML = " Show less";
        firstcplus = false;
     }
    else{ 
        additionalTextCplus.style.display ="none";
        firstcplus =true;
        btnCplus.innerHTML = "More";
    }
}

