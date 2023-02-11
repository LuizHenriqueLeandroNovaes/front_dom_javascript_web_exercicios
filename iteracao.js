const btnUnderline = document.querySelector(".btn_Underline");
const btnItalic = document.querySelector(".btn_Italic");
const btnBold = document.querySelector(".btn_Bold");

const btnPluss = document.querySelector(".btn_Pluss");
const btnMines = document.querySelector(".btn_Mines");

const btnRed = document.querySelector(".vermelho");
const btnBlue = document.querySelector(".azul");
const btnPurple = document.querySelector(".roxo");
const btnBlack = document.querySelector(".preto");

const text = document.querySelector(".text");  

const texto = document.querySelector(".btn_text");

console.log(text.style.fontSize);

//text.style.fontSize = "16 px";

let tamanho = 16 ;

function funcPluss (){
    tamanho += 1 ;
    text.style.fontSize = tamanho + "px"  ; 
    texto.textContent = tamanho;
}

function funcMines (){
    if(tamanho <= 9){
        return;
    }
    tamanho -= 1 ;
    text.style.fontSize = tamanho + "px"  ; 
    texto.textContent = tamanho;  
}

                btnUnderline.onclick = () => {
                    if(!text.style.textDecoration || text.style.textDecoration === 'none'){
                        text.style.textDecoration = 'underline';
                        return;
                    }

                    text.style.textDecoration = 'none';
                }

                btnItalic.onclick = () => {
                    if(!text.style.fontStyle || text.style.fontStyle === 'normal'){
                        text.style.fontStyle = 'italic';
                        return;
                    }

                    text.style.fontStyle = 'normal';
                }

                btnBold.onclick = () => {
                    if(!text.style.fontWeight || text.style.fontWeight === 'normal'){
                        text.style.fontWeight = 'bold';
                        return;
                    }

                    text.style.fontWeight  = 'normal';
                }

                btnRed.onclick = () => {
                    text.style.color = 'red';
                }

                btnBlue.onclick = () => {
                    text.style.color = 'blue';
                }

                btnPurple.onclick = () => {
                    text.style.color = 'purple';
                }

                btnBlack.onclick = () => {
                    text.style.color = 'black';
                }

                btnPluss.onclick = funcPluss ;

                btnMines.onclick = funcMines ;

