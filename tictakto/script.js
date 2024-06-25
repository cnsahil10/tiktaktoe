let cvalue="x";
        let count=0;
        
        const cells=document.querySelectorAll(".box");
        cells.forEach(values=>{
            values.addEventListener("click",()=>{
                values.textContent=cvalue;
                cvalue=cvalue=='x'?'0':'x';
                values.classList.add("disabled")
                count++;
                checkwinning(count);
                // if(gameactive){ draw()};
                
            })
        })
        const reset=document.querySelector("#reset");
        reset.addEventListener("click",()=>{
            cells.forEach(values=>{
                values.textContent="";
                cvalue="x";
                values.classList.remove("disabled")
                document.querySelector("p").innerHTML="";
                count=0;
            })
        })
 
        function checkwinning()

{
  const winningcombo = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                    ];
                    let gameactive=true;
                    let winner=false;
                    winningcombo.forEach(combo=>{
                        const [a,b,c]=combo;
                        let value_a=cells[a].textContent;
                        let value_b=cells[b].textContent;
                        let value_c=cells[c].textContent;
                        
                        if(value_a&&value_a==value_b && value_a==value_c)
                        {

                        document.querySelector("p").innerHTML=`${value_a} Wins`;
                        gameactive=false;
                        let winner=true;
                        disablecells();
                      
                        }
                    
                    });
                    
                        function disablecells(){
                        cells.forEach(values => {
                            values.classList.add("disabled")
                        });
                        }

                             
         
     } 
     draw();
     function draw(count){
        if(count==9 && !winner){
            // cells.forEach(values=>{
            //     if(values.every.textContent!== "")
            //     {
            //         alert("sssss")
                    
            //     }    
    
            // })
            document.querySelector("p").innerHTML=`DRAW`;
            
    }
     }
     
              
                       
                    
        