document.getElementById("fetchBtn").addEventListener("click" ,()=>{
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = "Loading.....";


    fetchUserProfile().then(user=>{
        statusDiv.innerHTML= `User Loaded !<br>
        name:${user.name}<br>
        Email:${user.email}`;
    })
    .catch(error=>{
        statusDiv.innerHTML = `Error: ${error}`;
    });
});

function fetchUserProfile(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const success = Math.random() > 0.1;
            if(success){
                resolve({
                name:"John Doe",
                email :"abc@example.com"
            });
        }else{
            reject("Error");
        }

    }, 1000);
});
}