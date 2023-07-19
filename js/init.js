const senha = ''
const Regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const email = document.querySelector('#Email')
const password = document.querySelector('#Password')
const button = document.querySelector('#button')

function emaill (){
    const span = document.querySelector('.span_disable')
    if(Regex.test(email.value)){
        email.style.border = ''
        span.style.display = 'none'
        return true
    }else{
        span.style.display = 'block'
        email.style.border = '3px solid #ff0008'
    }
}
function ppassword(){
    const span_password = document.querySelector('.span_disable_password')
    if(password.value === senha){
        span_password.style.display = 'none'
        password.style.border = ''
        return true
    }else{
        password.style.border = '3px solid #ff0008'
        span_password.style.display = 'block'
    }
}


function verificar (){
    if(emaill() && ppassword()){
        window.location.href = "movie.html"
        return true
    } else {
        console.log('erro')
    }
}

button.addEventListener('click', verificar)





    