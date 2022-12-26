function getClickedService(element){
    const serivceValue = element.children[0].children[1].textContent;
    checkService(serivceValue);
    function checkService(val){
        services.forEach(serv=>{
            if(serv.value==val)
                serv.checked=true;
        });
    }
}