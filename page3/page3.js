let likeCount1 = 0;
let likeCount2 = 0;
let likeCount3 = 0;
let likeCount4 = 0;
let likeCount5 = 0;
let likeCount6 = 0;

let dislikeCount1 = 0;
let dislikeCount2 = 0;
let dislikeCount3 = 0;
let dislikeCount4 = 0;
let dislikeCount5 = 0;
let dislikeCount6 = 0;

let x = 0;


function like(x) 
{
  if (x == 1)
  {
    likeCount1++;
    document.getElementById("like-count1").innerHTML = likeCount1;
  }
  else if (x == 2)
  {
    likeCount2++;
    document.getElementById("like-count2").innerHTML = likeCount2;
  }
  else if (x == 3)
  {
    likeCount3++;
    document.getElementById("like-count3").innerHTML = likeCount3;
  }
  else if (x == 4)
  {
    likeCount4++;
    document.getElementById("like-count4").innerHTML = likeCount4;
  }
  else if (x == 5)
  {
    likeCount5++;
    document.getElementById("like-count5").innerHTML = likeCount5;
  }
  else if (x == 6)
  {
    likeCount6++;
    document.getElementById("like-count6").innerHTML = likeCount6;
  }
 
}

function dislike(x) 
{
  if(x == 1)
  {
    dislikeCount1++;
    document.getElementById("dislike-count1").innerHTML = dislikeCount1;
  }
  else if(x == 2)
  {
    dislikeCount2++;
    document.getElementById("dislike-count2").innerHTML = dislikeCount2;
  }
  else if(x == 3)
  {
    dislikeCount3++;
    document.getElementById("dislike-count3").innerHTML = dislikeCount3;
  }
  else if(x == 4)
  {
    dislikeCount4++;
    document.getElementById("dislike-count4").innerHTML = dislikeCount4;
  }
  else if(x == 5)
  {
    dislikeCount5++;
    document.getElementById("dislike-count5").innerHTML = dislikeCount5;
  }
  else if (x == 6)
  {
    dislikeCount6++;
    document.getElementById("dislike-count6").innerHTML = dislikeCount6;
  }
}