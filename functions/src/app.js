// after the document has loaded
 // store the form
//  store the input of the form
//  check on click of the submit button of the form
document.addEventListener('DOMContentLoaded', () =>{

    const form = document.querySelector('form')
    const user_email = document.querySelector('input[type="email"]')

    form.addEventListener("submit", (event)=>{
        event.preventDefault()

        const email = user_email.value.trim()

        if( email == "") {
            alert("Please enter an email address")
        }
        else if (!check_mail(email)){
            alert('Enter a valid email!')
        }
        else{
            console.log("Email: ",email)
            //....
        }

    })

    function check_mail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(email)
    }
})
