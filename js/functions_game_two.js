var nextGame = 0;
function dragIniciado(e)
{
    this.style.background = "blue";
    elementMove = this;
    var father = document.createElement('p');
    var clone = this.cloneNode(true);
  
    clone.style.background = '#F8BE4F';
    clone.classList.add('normal');
    father.appendChild(clone);
    e.dataTransfer.setData('text', father.innerHTML);
}
function dragFinalizado(e){
    
    this.style.background = "red";
};

function dragSobreContainer(e)
{
    e.preventDefault();
    this.classList.add('over');
    return false;
}

function dragSalioContainer(e)
{
    e.preventDefault();
    this.classList.remove('over');
    return false;
}

function manejarDrop(e)
{
    e.preventDefault();
    if (this.getAttribute('data-box') == elementMove.getAttribute('data-answer')) {
        var datos = e.dataTransfer.getData('text');
        this.innerHTML += datos;
        elementMove.parentNode.removeChild(elementMove);
        nextGame = nextGame + 1;
        if (nextGame == 7) {
            $(".nextGame").removeClass('none-display');
            $(".todayGame").addClass('none-display');
        }
    }
    this.classList.remove('over');
}