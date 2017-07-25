$(document).ready( function(){
    var answers = document.getElementsByClassName('answers');
    var boxAnswers = document.getElementsByClassName('box-answer');
    var elementMove;
    for(i in answers){
        var answer = answers[i];
        if (typeof answer.style != "undefined"){
            
        answer.addEventListener('dragstart', dragIniciado, false);
        answer.addEventListener('dragend', dragFinalizado, false);
        }
    }
    for(i in boxAnswers){
        var boxAnswer = boxAnswers[i];
        if (typeof boxAnswer.style != "undefined"){
             boxAnswer.addEventListener('dragover', dragSobreContainer, false);
             boxAnswer.addEventListener('dragleave', dragSalioContainer, false);
            boxAnswer.addEventListener('drop', manejarDrop, false);
        }
    }
    
});
