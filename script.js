
// let workWithUs = document.getElementById('WWU-btn')
// workWithUs.onclick=()=>{
//     alert('Than You For Your Response . We Will Reach back you !!')
// }


<script src="https://smtpjs.com/v3/smtp.js"></script>


const sendEmail=()=>{



Email.send({
    Host : "smtp.gmail.com",
    Username : "jayanths2004@gmail.com",
    Password : "9916337836",
    To : 'jayanths2004@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("sucessfull")
);
}