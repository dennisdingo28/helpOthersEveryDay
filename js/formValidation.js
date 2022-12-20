const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const description = document.querySelector('#description');
const createBtn = document.querySelector('#create');
const formStatus = document.querySelector('.formStatus');
const services = document.querySelectorAll('.radioServices');
const radioInput = document.querySelector('.radioInput');
const descInput = document.querySelector('.descInput');
const formInput = document.querySelectorAll('.formInput');

createBtn.addEventListener('click',validateForm);

const deniedWords = ["matii","pula","retardat","idiot","pisat","cacat","imbecil","taran","familia","pizda","mata","fututi","mortii","raniti","handicapatule","muie","muist","muistilor","mamele","tractorist","handicapat","pizdelor","ula","izda","chizda","sugi","pul","piz","sug","mui","fut","retarda","ma-ta"];

function validateForm(){
    
    setInputStatus(firstName);
    setInputStatus(lastName);
    setInputStatus(email);
    setInputStatus(phone);
    if(checkService(services)){
        radioInput.classList.add('validatedForm');
        radioInput.classList.remove('invalidForm');
    }else{
        radioInput.classList.add('invalidForm'); 
        radioInput.classList.remove('validatedForm');
    }
    if(checkInput(description)){
        descInput.classList.add('validatedForm');
        descInput.classList.remove('invalidForm');
    }else{
        descInput.classList.add('invalidForm'); 
        descInput.classList.remove('validatedForm');
    }

    if(checkInput(firstName) && checkInput(lastName) && isEmail(email.value) && checkInput(phone) && checkInput(description) && checkService(services)){
        let badWord = false;
        if(!compareInput(firstName))
        {
            setParentElement(firstName);
            badWord=true;
        }
        if(!compareInput(lastName)){
            setParentElement(lastName);
            badWord=true;
        }
        if(!compareInput(email))
        {
            setParentElement(email);
            badWord=true;
        }
        if(!compareInput(phone)){
            setParentElement(phone);
            badWord=true;
        }
        if(!compareInput(description)){
            setParentElement(description);
            badWord=true;
        }
        if(!badWord){
            formStatus.textContent='Cererea a fost trimisă cu success. Echipa noastra va raspunde în cel mai scurt timp.';
            

            sendMail();
            formStatus.classList.add('formStatusAccepted');
            formStatus.classList.remove('formStatusRejected');
            setTimeout(refreshInputIcon,2300);
        }else{
            formStatus.textContent='Cererea contine injuraturi.';
            formStatus.classList.add('formStatusRejected');
            formStatus.classList.remove('formStatusAccepted');
            setTimeout(refreshInputIcon,2300);
        }
    }else{
        formStatus.textContent='Cererea nu a fost trimisă';
        formStatus.classList.remove('formStatusAccepted');
        formStatus.classList.add('formStatusRejected');
        setTimeout(refreshInputIcon,2300);
    }

    function sendMail(){
        let selectedService = undefined;
            for(let i=0;i<services.length;i++){
                if(services[i].checked)
                {
                    selectedService=services[i].value;
                }
            }
        const params = {
            name:firstName.value,
            surname:lastName.value,
            textEmail:email.value,
            requestedService:selectedService,
            message:description.value
        }
        emailjs.send("service_zm08qqe","template_sjs86rq", params,"ajXQSRYLbuCvzeb2V")
        .then(res=>{
            console.log("send ",res);
        });
    }
    function setParentElement(input){
        input.parentElement.classList.add('invalidForm');
        input.parentElement.classList.remove('validatedForm');
    }

    function setInputStatus(input){
        if(input==email){
            if(isEmail(email.value.trim())){
                email.parentElement.classList.add('validatedForm');
                email.parentElement.classList.remove('invalidForm');
            }else{
                email.parentElement.classList.add('invalidForm');
                email.parentElement.classList.remove('validatedForm');
            }
            return;
        }
        if(input.value.trim()=='')
        {
            input.parentElement.classList.add('invalidForm');
            input.parentElement.classList.remove('validatedForm');
            return;
        }
        input.parentElement.classList.add('validatedForm');
        input.parentElement.classList.remove('invalidForm');
    }
    function checkService(services){
        for(let i=0;i<services.length;i++)
            if(services[i].checked)
                return true;
        return false;
    }
    function compareInput(input){
        const word = [];

        for(let i=0;i<input.value.trim().length;i++){
            word.push(input.value.trim()[i].toLowerCase());
        }
        let str = "";
        let deniedWord = false;
        
        for(let i=0;i<word.length;i++){
            if(word[i]!=' ')
            {
                str+=word[i];
                for(let j=0;j<deniedWords.length;j++)
                {
                    if(str==deniedWords[j])
                        return false;
                }
            }
            else 
            {
               str="";
            }
        }
        return true;
    }
    function isEmail(input) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
    }
    function checkInput(input){
        if(input.value.trim()=='')
            return false;
        return true;
    }
    function refreshInputIcon(){
        firstName.value='';
        lastName.value='';
        email.value='';
        phone.value='';
        services.forEach(serv=>{
            serv.checked=false;
        });
        description.value='';
        formInput.forEach(form=>{
            form.classList.remove('validatedForm');
            form.classList.remove('invalidForm');
        });
        formStatus.textContent='';
    }
}   
