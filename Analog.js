function clock(){
    var date= new Date();
    let Hour=date.getHours();
    let Minute=date.getMinutes();
    let Second=date.getSeconds();
    console.log(Hour,Minute,Second);

    let targetHour=document.getElementById("hour");
    let targetMinute=document.getElementById("minute");
    let targetSecond=document.getElementById("second");

    console.log(targetHour);
    console.log(targetMinute);
    console.log(targetSecond);


     const HourPointer=(Hour+Minute/60)*30    /*30 is degree to rotate so multipying*/
     const  MinutePointer=(Minute+Second/60)*6 ;  /*6 is degree */
     const SecondPointer=(Second)*6;
   
   
     targetHour.style.transform=`rotate(${HourPointer}deg)`
    targetMinute.style.transform=`rotate( ${MinutePointer}deg)`
    targetSecond.style.transform=`rotate(${SecondPointer}deg)`

    setInterval(clock,1000);

    if(Hour<10){

    }
    
    let a=[10,20,30,40,50,60];

    for(const x of a ){
        
    }




}
clock();