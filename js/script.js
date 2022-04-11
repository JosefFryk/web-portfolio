// // add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})




//  validation form


// function validateForm()                                    
// { 
//     const name = document.forms["myForm"]["name"];                
//     const email = document.forms["myForm"]["email"];    
//     const message = document.forms["myForm"]["message"];   
   
//     if (name.value == "")                                  
//     { 
//         document.getElementById('errorname').innerHTML="Please enter a valid name";  
//         name.focus(); 
//         return false; 
//     }else{
//         document.getElementById('errorname').innerHTML="";  
//     }
       
//     if (email.value == "")                                   
//     { 
//         document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
//         email.focus(); 
//         return false; 
//     }else{
//         document.getElementById('erroremail').innerHTML="";  
//     }
   
//     if (email.value.indexOf("@", 0) < 0)                 
//     { 
//         document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (email.value.indexOf(".", 0) < 0)                 
//     { 
//         document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
//         email.focus(); 
//         return false; 
//     } 
   
//     if (message.value == "")                           
//     {
//         document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
//         message.focus(); 
//         return false; 
//     }else{
//         document.getElementById('errormsg').innerHTML="";  
//     }
   
//     return true; 
// }

function sendemail() {
    const userid = "7YEjmjUlLyIXoRsz7"
    emailjs.init(userid);
    const thename = document.getElementById('name').value;
    const themail = document.getElementById('mail').value;
    const thesub = document.getElementById('subject').value;
    const themsg = document.getElementById('comment').value;
    const validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (thename == "") {
      alert("Please Enter Name");
    }
    else if (themail == "" || themail.match(!validmail)) {
      alert("Please Enter Valid Email");
    }

    else if (themsg == "") {
      alert("Please Enter Message");
    }
    else {
      var contactdetail = {
        from_name: thename,
        from_email: themail,
        subject: thesub,
        message: themsg
      };

      emailjs.send('service_1rm3w9k', 'template_zimf3gb', contactdetail).then(function (res) {
        alert("Email Sent Successfully");
        console.log("Email Sent Successfully")
      },
        reason => {
          alert("Error Occur");
          console.log("Error")
        })
    }
  }
