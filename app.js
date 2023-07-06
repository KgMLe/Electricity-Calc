window.onload = () =>
	//the function called when Calculate button is clicked.
	{
		
        const btn = document.getElementById('calculate');
        btn.addEventListener('click', ElectricityCalc);
	}

function ElectricityCalc() {
	
	let amount = parseFloat(document.getElementById('units').value);
	let persons = document.getElementById('fullname').value;
	let idnum = document.getElementById('idnumber').value;
    
    let out1 = document.getElementById('output1');
    let out2 = document.getElementById('output2');
    let out3 = document.getElementById('output3');
    let out4 = document.getElementById('output4');
    let out5 = document.getElementById('output5');
    let out6 = document.getElementById('output6');


	if (amount === '') {
		alert("Please enter valid values");
		return;
	}


	//now we are checking the usage and determining the cost
	if (amount >= 1 && amount <=100 ) {
        amount = amount + (amount * 1.2)
    }
    else if (amount > 100 && amount <= 300)
    {
        amount = amount + (amount * 1.5);
    }
    else if (amount > 300 && amount <= 500)
    {
        amount = amount + (amount * 2.1);
    }
    else if (amount > 500)
    {
        amount = amount + (amount * 2.5);
    }
    else{
        amount = amount;
    }


    const adminfee = parseFloat(325.60) ;
    const vat = parseFloat(0.15 * amount );
    const total_cost = adminfee + vat + amount;



    out1.innerHTML = "Full Name : " + persons;
    out2.innerHTML = "ID : " + idnum;
    out3.innerHTML = "Cost: " + amount.toFixed(2);
    out4.innerHTML = "VAT: " + vat.toFixed(2);
    out5.innerHTML = "Admin Cost: " + adminfee;
    out6.innerHTML = "Total Cost Due: " + total_cost.toFixed(2);
 


}
