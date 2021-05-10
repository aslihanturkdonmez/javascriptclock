let getName=prompt('Adınız nedir?');
document.getElementById('myName').innerHTML=getName;

function showTime(){

    let date=new Date();
    let day=date.getDay();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    if(day==1){
        day="Pazartesi";
    }else if(day==2){
        day="Salı";
    }else if(day==3){
        day="Çarşamba";
    }else if(day==4){
        day="Perşembe";
    }else if(day==5){
        day="Cuma";
    }else if(day==6){
        day="Cumartesi";
    }else if(day==7){
        day="Pazar";
    }

    if(hour<10)
        hour=`0${hour}`;
    if(minute<10)
        minute=`0${minute}`;   
    if(second<10)
        second=`0${second}`;


    document.getElementById('myClock').innerHTML=`${hour}:${minute}:${second} ${day}`;
    setTimeout(showTime, 1000);
}

showTime();