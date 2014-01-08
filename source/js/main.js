//= require "vendor/jquery-1.8.0.min"
//= require "plugins"

var fizz = 5,
    buzz = 2,
    limit = 50,
    counter = 0;
    solution = "";


function check_solution(text){
    if(counter != 0){
        solution  = text;
    }
    $("#jquery_solution p").append("<span>"+solution+"</span> ");

}

function count(){
    $("#jquery_solution").append("<p></p>");
    for( i = 0; i <= limit; i++){
        //console.log("counter "+counter);
        //console.log("fizz "+counter%fizz);
        //console.log("buzz"+ counter%buzz);
        var modulus_fizz = counter%fizz;
        var modulus_buzz = counter%buzz;

        $("#jquery_solution p").append("<span>"+counter+"</span> ");

        if(modulus_fizz == 0 && modulus_buzz != 0){
            check_solution("fizz");
        }

        if(modulus_buzz == 0 && modulus_fizz != 0){

            check_solution("buzz");
        }

        if(modulus_fizz == 0 && modulus_buzz == 0){
            check_solution("fizzbuzz");
        }
        counter++;
    }
}

count();

