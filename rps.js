
function game(userChoice){
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = 'r';
    } else if(computerChoice <= 0.67) {
      computerChoice = 'p';
    } else {
      computerChoice = 's';
    }
    displayImage("user_image", userChoice);
    displayImage("computer_image", computerChoice);

    var ans = compare(userChoice, computerChoice);
    incrementValue(ans);
}

userScore = 0;
computerScore = 0;
tie = 0;

function incrementValue(ans)
{
  if(ans === 0){
    ++userScore;
    document.getElementById("win_message").innerHTML = "You Win!";
    document.getElementById("u_score").innerHTML = userScore;
  }
  else if(ans === 1){
    ++computerScore;
    document.getElementById("win_message").innerHTML = "Computer Wins!";
    document.getElementById("c_score").innerHTML = computerScore;
  }
  else{
    ++tie;
    document.getElementById("win_message").innerHTML = "Tie!";
    document.getElementById("tie").innerHTML = tie;
  }
}

function displayImage(where,choice){
  if(choice === 'r'){
    document.getElementById(where).src = "img/rock.jpg";
  }
  else if(choice === 'p'){
    document.getElementById(where).src = "img/paper.jpg";
  }
  else{
    document.getElementById(where).src = "img/scissors.jpg";
  }
}

var compare = function(choice1,choice2){
  if(choice1 === choice2){
    return 2;
    game();
  }
  else if(choice1 === 'r'){
    if(choice2 === 's'){
        return 0;
    }
    else{
        return 1;
    }
  }
  else if(choice1 === 'p'){
    if(choice2 === 'r'){
        return 0;
    }
    else{
        return 1;
    }   
  }
  else{
    if(choice2 === 'p'){
        return 0;
    }
    else{
        return 1;
    }
  }
}