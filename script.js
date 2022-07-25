var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var flag = false;

function start(){
    flag = true;
    stopwatch();
}
function stop(){
    flag = false;
}
function reset(){
    flag = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch(){
    if(flag == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;


        
        if(count < 10){
            countString = "0" + countString;
        }
        if(sec < 10){
            secString = "0" +  secString;  
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(hr < 10){
            hrString = "0" + hrString;
        }
        
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout(stopwatch,10);
    }


    

}