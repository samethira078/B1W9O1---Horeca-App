//Code begint te werken nadat gebruiker op onclick button drukt.
function order(){
	//Begingetal drank & bitterballen
	bier = 0;
	cola = 0;
	wijn = 0;
	bitterballen_8 = 0;
	bitterballen_16 = 0;

	//Bestelling plaatsen
	function bestelling(){
	//Laat loop werken
	bestellen = true;
	var order = prompt("Wat wilt u bestellen? [Bier/Cola/Wijn]");
	//Maak input lowercase
	var order = order.toLowerCase();
	while(bestellen == true){
		//checkt of het de juiste woorden bevat, zo niet, typ je het opnieuw in.
		if(order == "bier" || order == "cola" || order == "wijn" || order=="bitterballen"){
			if(order == "bier"){
				hoeveel = prompt("Per stuk: 8,99 euro. Hoeveel wil je er?");
				//Checkt of het een nummer is
				while(isNaN(hoeveel)){
					hoeveel = prompt("Vul alleen een nummer in!");
				}
				//Update het getal
				bier +=+ hoeveel;
				alert(bier + "x bier in uw winkelmand toegevoegd!");
				//Verlaat de loop
				bestellen = false;
			}
			else if(order == "cola"){
				hoeveel = prompt("Per stuk: 1,99 euro. Hoeveel wil je er?");
				while(isNaN(hoeveel)){
				hoeveel = prompt("Vul alleen een nummer in!");
				}
				cola =+ hoeveel;
				alert(cola + "x cola in uw winkelmand toegevoegd!");
				bestellen = false;
			}
			else if(order == "wijn"){
				hoeveel = prompt("Per stuk: 10,99 euro. Hoeveel wil je er?");
				while(isNaN(hoeveel)){
				hoeveel = prompt("Vul alleen een nummer in!");
				}
				wijn =+ hoeveel;
				alert(wijn + "x wijn in uw winkelmand toegevoegd!");
				bestellen = false;
			} 
		} else {
			order = prompt("Voer alleen Bier/Cola/Wijn in!");
		}
	}
}
	//Begint de loop
	bestelling();
	//Herhaalt de loop nadat het voor het eerst is gebruikt
	for(;;) {
	var keuze = prompt("Wil je nog een bestelling plaatsen? [Ja/Nee]");
	var keuze = keuze.toLowerCase();
		if(keuze == "ja" || keuze == "nee"){
			if(keuze == "ja"){
				bestelling();
			} else {
				break;
			} 
		} else {
			alert("Alleen Ja/Nee invoeren!");
		}
	}
	//Vraagt voor bittenvallen
	alert("We verkopen ook bitterballen: 8x voor 1,99 & 16x voor 3,49");
	ballenkopen = true;

	while(ballenkopen == true){
	var ballen = prompt("Wil je nog bitterballen erbij? [Ja/Nee]");
	var ballen = ballen.toLowerCase();
		if(ballen == "ja"){
			var aantal = prompt("Hoeveel bitterballen erbij? [8/16]");
			while(aantal != "8" && aantal != "16"){
				var aantal = prompt("Vul alleen 8 of 16 in!");
			}
			if(aantal == "8"){
				bitterballen_8++;
				alert("8 bitterballen in uw winkelmand toegevoegd!");
			}
			else {
				bitterballen_16++;
				alert("16 bitterballen in uw winkelmand toegevoegd!");
			}
		} else {
			ballenkopen = false;
		}

	}


	//Verbergt div blokken
	document.getElementsByClassName('bestellingen')[0].style.display="none";
	document.getElementsByClassName('bollen')[0].style.display="none";
	//Laat de resultaat div zien. Eerst was die verborgen in CSS
	document.getElementsByClassName('resultaat')[0].style.display="block";

	//Laat aantal en totaalprijzen per vak zien
	document.querySelector('.bier').innerText = "Bier: " + bier + " x in uw winkelmand: " + bier * 8.99 + "€";
	document.querySelector('.cola').innerText = "Cola: " + cola + " x in uw winkelmand: " + cola * 1.99 + "€";
	document.querySelector('.wijn').innerText = "Wijn: " + wijn + " x in uw winkelmand: " + wijn * 10.99 + "€";
	document.querySelector('.bal8').innerText = "Bitterballen 8: " + bitterballen_8 + " x in uw winkelmand: " + bitterballen_8 * 1.99 + "€";
	document.querySelector('.bal16').innerText = "bitterballen 16: " + bitterballen_16 + " x in uw winkelmand: " + bitterballen_16 * 3.49 + "€";

	//Telt alles bij elkaar op
	var totaalprijs = (bier * 8.99) + (cola * 1.99) + (wijn * 10.99) + (bitterballen_8 * 1.99) + (bitterballen_16 * 3.49);
	//Rond af op 2 getallen achter de komma
	totaalprijs = totaalprijs.toFixed(2);
	//laat totaalprijs zien
	document.querySelector('.totaal').innerText = "Alles bij elkaar opgeteld: " + totaalprijs;
}
