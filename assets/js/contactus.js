

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()
    removeErr()
    const email = document.getElementById('email')
    const name = document.getElementById('name')
    const message = document.getElementById('message')
    const submitMsg = document.getElementById('submit-msg')
    submitMsg.textContent= ""

    if (validate(email, name, message)){
        const data = {
            email: email.value.trim(),
            message: message.value.trim(),
            name: name.value.trim()
        }
        emailjs.send('service_gue8h5p', 'template_ufsikko', data, 'user_dIOQmX5kgZ21smpmt37kf')
            .then((res) => {
                submitMsg.classList.add('success-msg')
                submitMsg.textContent = "Mail Sent Successfully!";
                setEmpty()
            }).catch( err => {
                console.log(err)
                submitMsg.classList.add('error-msg')
                submitMsg.textContent = "Mail not sent!"
                setEmpty()
            });
    }
});

const setEmpty = () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    name.value = ""
    email.value = ""
    message.value = ""
}

const removeErr = () => {
    const nameErr = document.getElementById('name-err')
    const emailErr = document.getElementById('email-err')
    const messageErr = document.getElementById('message-err')
    
    nameErr.textContent = ""
    emailErr.textContent = ""
    messageErr.textContent = ""

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')

    name.classList.remove("is-danger")
    email.classList.remove("is-danger")
    message.classList.remove("is-danger")
}

const isEmail= (val) => {
    const atIndex = val.indexOf('@')
    const dotIndex = val.lastIndexOf('.')
    if (atIndex < 1) return false
    else if(dotIndex < atIndex + 2 || dotIndex === val.length - 1) return false 
    return true
}

const setErrorMsg = (id, error) => {
    const element = document.getElementById(id+'-err')
    const inputElement = document.getElementById(id)
    inputElement.classList.add("is-danger")
    element.textContent = error
} 

const validate = (email, name, message) => {
    const emailVal = email.value.trim()
    const nameVal = name.value.trim()
    const messageVal = message.value.trim()
    var flag = 1

    if (emailVal === ""){
        setErrorMsg('email', "Email cannot be blank")
        flag = 0
    } else if(!isEmail(emailVal)) {
        setErrorMsg('email', "Email is not valid")
        flag = 0
    }

    if (nameVal === ""){
        setErrorMsg('name', "name cannot be blank")
        flag = 0
    }else if(nameVal.length <= 5){
        setErrorMsg('name', "name is too short")
        flag = 0
    }

    if (messageVal === ""){
        setErrorMsg('message', "Message cannot be blank")
        flag = 0
    } else if (messageVal.length <= 5) {
        setErrorMsg('message', "Message too short")
        flag = 0
    }

    if (flag == 0 ) return false
    return true
}