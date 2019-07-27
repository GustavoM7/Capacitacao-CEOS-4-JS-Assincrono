function recebo3 (arg1, arg2, arg3){
    console.log("Sou o recebo3");
    arg1(arg2, arg3);
}

function recebo2(arg1, arg2){
    console.log("Sou o recebo2");
    arg1(arg2);
}

function recebo1(arg1){
    console.log("Sou o recebo1");
    arg1();
}

function recebo0(){
    console.log("Sou o recebo0");
}

recebo3(recebo2, recebo1, recebo0);