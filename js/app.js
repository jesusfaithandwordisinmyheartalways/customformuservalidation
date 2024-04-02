

const loginError = document.getElementById('login-error');
const passwordError = document.getElementById('password-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const userLoginIcon = document.getElementById('user-icon');
const eyeLoginIcon = document.getElementById('eye-icon');
const emailIconLogin = document.getElementById('email-icon');
const phoneLoginIcon = document.getElementById('phone-icon');



function userLogin() {
    const userLogin = document.getElementById('user-login').value;
    if(userLogin.length == 0) {
      loginError.innerHTML = 'Please Enter an valid Username';
      loginError.style.display = 'block';
      userLoginIcon.style.color = 'red';
      return false;
    }
  
    if(!userLogin.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/)) {
      loginError.innerHTML = 'Please Enter an valid Username';
      loginError.style.display = 'block';
      userLoginIcon.style.color = 'red';
      return false;
    }
  
    loginError.innerHTML = '';
    loginError.style.display = 'none';
    userLoginIcon.style.color = 'green';
    return true;
}






function userPassword() {
    let userPassword = document.getElementById('user-password').value;
    let regexEp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    


    if(userPassword.length == 0 ) {
        passwordError.innerHTML = 'Please Enter Your Password';
        passwordError.style.display = 'block'; 
        eyeLoginIcon.style.color = 'red';
        return false;
    }

    if(!userPassword.match(regexEp)) {
        passwordError.innerHTML = 'Password Invalid';
        passwordError.style.display = 'block'; 
        eyeLoginIcon.style.color = 'red';
        return false;
    }
    

    passwordError.innerHTML = '';
    passwordError.style.display = 'none';
    eyeLoginIcon.style.color = 'green';
    return true;

}



function userEmail() {
    let emailLogin = document.getElementById('user-email').value;
    if(!emailLogin.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'email does not meet requirements';
        emailError.style.display = 'block';
        emailIconLogin.style.color = 'red';
        return false;
    }

    if(emailLogin.length == 0) {
         emailError.innerHTML = 'email does not meet requirements';
        emailError.style.display = 'block';
        emailIconLogin.style.color = 'red';
        return false;
    }
    
     
    emailError.innerHTML = '';
    emailError.style.display = 'none';
    emailIconLogin.style.color = 'green';
    return true;
    
}





function userPhone() {
    let phoneLogin = document.getElementById('user-phone').value;
    if(phoneLogin.length == 0) {
        phoneError.innerHTML = 'Enter Phone Number';
        phoneError.style.display = 'block';
        phoneLoginIcon.style.color = 'red';
        return false;
    }

    if(!phoneLogin.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        phoneError.innerHTML = 'Enter Valid Phone Number ';
        phoneError.style.display = 'block';
        phoneLoginIcon.style.color = 'red';
        return false;
    }

    phoneError.style.display = 'none';
    phoneLoginIcon.style.color = 'green';
    return true;
}


function userSignInSuccess() {
    if(!userLogin || !userPassword() || !userEmail() || !userPhone()) {
        alert(' Username, Password, Email or Phone does not match our records')
        return false;
    }

    alert('Email verification has been sent to complete the Sign In')
}





function userLoginPage() {
    window.location.href = 'login.html';
}

function userHomeLogin() {
    window.location.href = 'home.html';
}







/* -----------------------------Code for Login.html file --------------------------------*/


   const createUserNameError = document.getElementById('user-name-create');
   const loginIcon = document.getElementById('user-icon-login');
   const userEmailCreate = document.getElementById('user-email-create');
   const emailIcon = document.getElementById('email-icon-login');
  


   function createUserName() {
       let createName =  document.getElementById('user-username-create').value;
       let weakExp = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
       let userExp = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

        if(createName.length == 0) {
            createUserNameError.innerHTML = 'username cannot be zero ';
            createUserNameError.style.color = 'red';
            loginIcon.style.color = 'red';
            return false;
        }

        if(createName.match(weakExp)) {
            createUserNameError.innerHTML = 'valid, but not strong';
            createUserNameError.style.color = 'purple';
            loginIcon.style.color = 'purple';
        }

        if(!createName.match(userExp)) {
            createUserNameError.innerHTML = "username not valid"
            createUserNameError.style.color = 'red';
            loginIcon.style.color = 'red'
            return false;
        }

        createUserNameError.innerHTML = " Username Accepted ";
        createUserNameError.style.color = 'green';
        loginIcon.style.color = 'green'

   }


   function createUserEmail() {
       let userEmailLogin = document.getElementById('user-email-login');
       let userEmailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(!userEmailLogin.value.match(userEmailExp)) {
        userEmailCreate.innerHTML = 'not an valid email';
        userEmailCreate.style.color = 'red';
        emailIcon.style.color = 'red';
        return false;
       }

       
       userEmailCreate.innerHTML = " Email Accepted ";
       userEmailCreate.style.color = 'green';
       emailIcon.style.color = 'green';
       return true;

   }



  function formLogin() {
        if(!createUserName || !createUserEmail()) {
            alert('please enter an username & email address');
            document.getElementById('form').reset();
            return false;
        }
        
        if(createUserName() || createUserEmail()) {
            alert('You will receive an email confirmation on how to proceed with the Local Host')
             return true;            
        }
  }








    
  
   