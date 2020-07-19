function myfunction(){
	document.getElementById('myform').style.display='block';
	var d = new Date();
	document.getElementById("dateandtime").innerHTML =d.toString();
	myVar = setTimeout(function(){ alert("Time up!"); }, 180000);
}
function submitform(){
	if(validatefname()){
		if(validatelname()){
			if(validatepass1()){
				if(validatepass2()){
					if(validatenum()){
						if(validatedob()){
							if(validateemail()){
								alert("user registration successfull");
								return true;
							}
						}
					}
				}
			}
		}
	}
	return false;
}
function validatefname(){
	var fn=document.form1.fname;
	var fn1=/^[a-zA-Z]+$/;
	if(fn.value.match(fn1))
		return true;
	else{
		alert(" Please enter only alphabets in first name");
		document.form1.fname.focus();
		return false;
	}
}
function validatelname(){
	var fn1=/^[a-zA-Z]+$/;
	var ln=document.form1.lname;
	if(ln.value.match(fn1))
		return true;
	else{
		alert(" Please enter only alphabets in last name");
		document.form1.lname.focus();
		return false;
	}
}
function validatepass1(){
	var password1=document.getElementById("pass1");
	if(password1.value.length>5 && password1.value.length<21)
		return true;
	else{
		document.form1.pass1.focus();
		alert("Please enter a password of length between 6 to 20 characters");
		return false;
	}
}
function validatepass2(){
	var password2=document.getElementById("pass2");
	var password1=document.getElementById("pass1");
	if(password2.value.length>5 && password1.value.length<21){
		if(password1.value==password2.value)
			return true;
		else{
			document.form1.pass2.focus();
			alert("Password dosen't match.");
			return false;
		}
	}
	else{
		document.form1.pass2.focus();
		alert("Please enter a password of length between 6 to 20 characters");
		return false;
	}
}
function validatenum(){
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var number=document.form1.num.value;
	if(number.match(phoneno))
		return true;
	else{
		document.form1.num.focus();
	    alert("Please enter a valid 10 digit number in above format");
	    return false;
	}
}
function validatedob(){
	var dateofbirth=document.form1.dob;
	var date=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	if(date.test(dateofbirth.value)==false){

		alert("Enter correct date");
		return false;
	}
	else
	return true;
}
function validateemail(){
	var mail=document.form1.emailid;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(mail.value) == false) 
    {
        alert('Invalid Email Address');
        document.form1.emailid.focus();
        return false;
    }

    return true;
}