console.log("hi");
function getdata(){
    fetch("https://dreamthemonline.com/sample/getNewQuizData/600")
    .then((response)=>{
        
        return response.json()
    }).then(data=>{
        console.log(data)
    })
     
}
getdata();