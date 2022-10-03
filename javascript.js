var playing = false;
var correctanswer;
var score=0;
var wronganswer;
document.getElementById("start").onclick = function () 
 {
	if(playing == true)
		{
			
		location.reload();
			
      
	
	
			
		}
	else
	{ 
		    playing=true;
		    ques();
		    document.getElementById("start").innerHTML = "reset" ;
		    document.getElementById("timer").innerHTML  ="time remaining 60 sec."
			starttimer();
		    show("timer");
		    hide("gameover");
		     score=0;
		    document.getElementById("score").innerHTML = score;
		    
		
		
	}
}

for(i=1; i<5; i++)
{
document.getElementById("box"+i).onclick = function()
{
	if(playing==true)
		{
	if(this.innerHTML == correctanswer)
		{
			show("correctbox");
			score ++;
			document.getElementById("score").innerHTML = score;
			setTimeout(function()
					  { hide("correctbox");
				},1000);
			ques();
		}
	else{
		show("wrongbox");
		setTimeout(function()
					  { hide("wrongbox");
				},1000);
		
	}
			}
}
}







function starttimer()
{ 
	 var timeremaining=60;
	 var action = setInterval(function()
					   { timeremaining -=1 ;
						document.getElementById("timer").innerHTML = "time remaining " +timeremaining+" sec.";
           if(timeremaining == 0)
			   {
				   show("gameover");
				   clearInterval(action);
				   document.getElementById("finalscore").innerHTML = score;
				   hide("timer");
				   playing=false;
				   document.getElementById("start").innerHTML = "start game";
				  
			   }
					   },1000);
	
}

function show(id)
{
	document.getElementById(id).style.display="block";
}
function hide(id)
{
	document.getElementById(id).style.display="none";
}
function ques()
{
	var x= Math.round(9*Math.random())+1;
	var y= Math.round(9*Math.random())+1;
	document.getElementById("question").innerHTML = x+" * "+y;
	correctanswer=x*y;
	var n= Math.round(3*Math.random())+1;
	document.getElementById("box"+n).innerHTML = correctanswer;
	for(i=1; i<5; i++)
		{
			if(i!=n)
				{  
					wronganswer= Math.round(9*Math.random())+1* Math.round(9*Math.random())+1
					if(wronganswer==correctanswer)
						{
							document.getElementById("box"+i).innerHTML = wronganswer +1;
						}
					else{
						document.getElementById("box"+i).innerHTML =  wronganswer ;
					}
					
				}
		}
	
}



