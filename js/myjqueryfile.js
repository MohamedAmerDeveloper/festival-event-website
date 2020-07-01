//navigator open
$("#open").click(function(){
  $("#navigator").css("left","0px");
  $("#over-lay").css("margin-left","250px");
});


//navigator close
$('#close').click(function(){
  $(".navigator").css("left","-250px");
  $("#over-lay").css("margin-left","0");
});



//drob box (collaps) bootstrap collaps didnot admire me so i made it .
$("h2").click(function(){
    $(this).next().slideToggle().siblings("p").slideUp();
});



//timer
let dataTimer={   //data container
    timeInSecond:0,
    timeInMin:0,
    timeInhours:0,
    timeInDays:0
}


let theDate =new Date(2020,10,12,10,15,50,500);


setInterval(myTimer,1000);

function myTimer(){
    let currentTime=new Date();
    let timeDistance=theDate -currentTime;
    dataTimer.timeInSecond=Math.floor((timeDistance%(1000*60))/1000)+" sec" ;
    dataTimer.timeInMin=Math.floor((timeDistance%(1000*60*60))/(1000*60))+" min";
    dataTimer.timeInhours=Math.floor((timeDistance%(1000*60*60*24))/(1000*60*60))+" hours";
    dataTimer.timeInDays=Math.floor(timeDistance/(1000*60*60*24))+" days";
    displayTime();
   
    
}
//to display the time
function displayTime(){
    $('#days').text( dataTimer.timeInDays);
    $('#hours').text( dataTimer.timeInhours);
    $('#min').text(  dataTimer.timeInMin);
    $('#seconds').text( dataTimer.timeInSecond);
}

//the remain Characyer

$("textarea").keyup(function(){
    let num=this.value.length;
   /// let ValueNumber=Number($('#reamining').text());
    let remainCharacyer=100 -num;
    $('#reamining').text(remainCharacyer);
});



