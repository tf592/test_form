

function displayFormValues() {

var name=document.myform.name.value;  
var password=document.myform.password.value;  
var number=document.myform.number.value;  
var x=document.myform.email.value;  

var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");

    if (name == null || name == "") {

        document.getElementById("form_name").innerHTML = "Name can not be blank";

        return false;

    }else if(password.length<6){


        document.getElementById("form_password").innerHTML = "assword must be at least 6 characters long.";

        return false;

    }else if(isNaN(number) || number.length<10) {

        document.getElementById("form_mobileno").innerHTML = "Please enter valid Phone Number";
        if (true) {}

        return false;

    }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  


        // alert("Please enter a valid e-mail address ");  

        document.getElementById("form_email").innerHTML = "Please enter a valid e-mail address";

        return false;

    }


}

// const displayFormValues = (event) => {
//    event.preventDefault();
//    let nameInHtml = event.target.name.value

//    let emailInHtml = event.target.email.value
//    let mobilenoInHtml = event.target.mobileno.value
//    let passInHtml = event.target.password.value

//    document.getElementById('nm').innerHTML = nameInHtml

//    document.getElementById('ema').innerHTML = emailInHtml
//    document.getElementById('mb').innerHTML = mobilenoInHtml
//    document.getElementById('pass').innerHTML = passInHtml

// }




