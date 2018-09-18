function email(emask){
	var emAsk = prompt("What is your email address?");
		if(emAsk !== ""){
			var notice = document.getElementById('ptext');
			notice.textContent = "You have successfully joined our launch list! An email confirming this will be sent to " + emAsk;
	}
		else{
			var note = document.getElementById('ptext');
			note.textContent = "Please refresh the page and enter a valid email.";
	}
}

var launchAdd = document.getElementById('launchList');

launchAdd.addEventListener('click', email, false);