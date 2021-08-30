player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" :";
document.getElementById("player2_name").innerHTML=player2_name+" :";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn  : "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn  : "+player2_name;


function send(){
get_word=document.getElementById("word").value ;
word=get_word.toLowerCase();
console.log("word in a lower case="+word);

Charat1=word.charAt(1);
console.log(Charat1);


length_divide_2=Math.floor(word.length/2);
Charat2=word.charAt(length_divide_2);
console.log(Charat2);


length_minius_1=word.length-1;
Charat3=word.charAt(length_minius_1);
console.log(Charat3);


remove_Charat1=word.replace(Charat1,"_");
remove_Charat2=remove_Charat1.replace(Charat2,"_");
remove_Charat3=remove_Charat2.replace(Charat3,"_");
console.log(remove_Charat3);


question_word="<h4 id='word_display'>Q. "+remove_Charat3+"</h4>";
input_box="<br>Answer : <input type='text' id='input'>";
check="<br><br><button class='btn btn-info'onclick='check()'>check</button>";
row=question_word+input_box+check;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input").value ;
    answer=get_answer.toLowerCase();
    console.log("answer in lowerCase"+answer);
if(answer==word){


    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
    player2_score=player1_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if (question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn- "+player2_name;
}else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn-"+player1_name;

}
if(answer_turn=="player1"){
 answer_turn="player2";
 document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
}
document.getElementById("output").innerHTML="";
}
