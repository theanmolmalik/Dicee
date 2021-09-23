var random1;
var random2;

random1=Math.floor(Math.random() * 6+1);

function randomno()
{
    random2=Math.floor(Math.random()*6+1);
    
    if(random2==random1)
    {
        randomno();
    }
}

randomno();

function text()
{
    if(random1>random2)
    {
        document.querySelector("h1").innerHTML="Player 1 Won ❤️";
    }
    else
    {
        document.querySelector("h1").innerHTML="Player 2 Won ❤️";
    }
}

function changeImage() 
{
    console.log(random1);
    console.log(random2);
    document.getElementById("dice1").src="./images/"+ random1 + ".png";
    document.getElementById("dice2").src="./images/"+ random2 + ".png";
    text();
}

changeImage();