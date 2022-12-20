const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const autoAssurance = document.querySelector('#asigAuto');
const docsTranlsate = document.querySelector('#tradDoc');
const englishCourse = document.querySelector('#lbEng');
const windowsInstall = document.querySelector('#instalWin');
const ukResidence = document.querySelector('#rezUk');
const other = document.querySelector('#altceva');
const description = document.querySelector('#description');
const createBtn = document.querySelector('#create');
const formStatus = document.querySelector('.formStatus');


createBtn.addEventListener('click',validateForm);

function validateForm(){
    
    setInputStatus(firstName);
    setInputStatus(lastName);
    setInputStatus(email);
    setInputStatus(phone);

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
    function isEmail(input) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
    }
}
