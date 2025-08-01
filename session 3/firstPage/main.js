var form = document.getElementById("myForm");

form.addEventListener("submit" , (e)=>{
    const username = form[0].value;
    const password = form[1].value;
    const link = document.getElementById("para");
    if( username === "admin" && password === "123" ){
        
        link.className = "d-block";    
        form.className = "d-none";
    
    }else{
        
        link.className = "d-block";
        link.innerHTML = "not registered";
        form.className = "d-none";
    }
   
})
