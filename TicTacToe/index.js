
let turno =false;
let victoria = false;
let contador=0;
const handleclick = (event) => {
  const {id} = event.target;

  const div= document.getElementById(id);

  if(div.innerText ==="" && victoria===false)
  {
  div.innerText = turno ? "O" : "X";
  verificarVictoria();
  turno=!turno;
  }
}

const verificarVictoria = () =>{
    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 =
        div1.innerText === div2.innerText && 
        div1.innerText === div3.innerText &&
        div1.innerText !=="";
    
    const forma2 =
        div4.innerText === div5.innerText && 
        div4.innerText === div6.innerText &&
        div4.innerText !=="";
    
    const forma3 =
        div7.innerText === div8.innerText && 
        div7.innerText === div9.innerText &&
        div7.innerText !=="";
    
    const forma4 =
        div1.innerText === div4.innerText && 
        div1.innerText === div7.innerText &&
        div1.innerText !=="";
    
    const forma5 =
        div2.innerText === div5.innerText && 
        div2.innerText === div8.innerText &&
        div2.innerText !=="";
    
    const forma6 =
        div3.innerText === div6.innerText && 
        div3.innerText === div9.innerText &&
        div3.innerText !=="";
    
    const forma7 =
        div1.innerText === div5.innerText && 
        div1.innerText === div9.innerText &&
        div1.innerText !=="";
    
    const forma8 =
        div3.innerText === div5.innerText && 
        div3.innerText === div7.innerText &&
        div3.innerText !=="";

    if(forma1){
        const line = document.getElementById("line");

        line.style.height = '10px';
        line.style.width = '100%';
        line.style.top='85px';
        line.style.left='0px';
        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
    } 
    else if(forma2){
        const line = document.getElementById("line");

        line.style.height = '10px';
        line.style.width = '100%';
        line.style.top='300px';
        line.style.left='0px';

        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
    }
    else if(forma3){
        const line = document.getElementById("line");

        line.style.height = '10px';
        line.style.width = '100%';
        line.style.top='500px';
        line.style.left='0px';

        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
    }
    else if(forma4){
        const line = document.getElementById("line");

        line.style.height = '100%';
        line.style.width = '10px';
        line.style.top='0px';
        line.style.left='85px';

        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
    }
      else if(forma5){
        const line = document.getElementById("line");

        line.style.height = '100%';
        line.style.width = '10px';
        line.style.top='0px';
        line.style.left='295px';
        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
      } 
      else if(forma6){
        line.style.height = '100%';
        line.style.width = '10px';
        line.style.top='0px';
        line.style.left='500px';

        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
      }   
      else if(forma7){
        const line = document.getElementById("line");

        line.style.height = '10px';
        line.style.width = '600px';
        line.style.top='300px';
        line.style.left='0px';
        line.style.transform = 'rotate(45deg)';
       

        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 
      }
       else if(forma8){
        const line = document.getElementById("line");

        line.style.height = '10px';
        line.style.width = '600px';
        line.style.top='300px';
        line.style.left='0px';
        line.style.transform = 'rotate(-45deg)';

        console.log(line);
        victoria=true;
        alert(`Ganador: ${turno ? "O" : "X"}`); 

       }
      
    else{
        if(contador===9)
        {
         alert("Empate");
        }
    }
}

const reload = () =>{
    turno = false;
    victoria=false;
    contador=0;

    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    div1.innerText="";
    div2.innerText="";
    div3.innerText="";
    div4.innerText="";
    div5.innerText="";
    div6.innerText="";
    div7.innerText="";
    div8.innerText="";
    div9.innerText="";

    const line = document.getElementById("line");

        line.style.height = '0px';
        line.style.width = '0%';
        line.style.top='0px';
        line.style.left='0px';



}