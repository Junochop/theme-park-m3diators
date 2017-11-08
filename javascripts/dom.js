"use strict";

const domString = (areaArray) => {
	let parkString = '';
	console.log("theme park array",areaArray);
	for (let i= 0; i < areaArray.length; i++){
		let areaObj = areaArray[i];
		console.log("areaObj", areaObj);
				if (i >= 6) {
					parkString += ` <div class="col-md-4 col-md-offset-8 card" id="${areaObj.id}">`;
				} else {
					parkString += `<div class="col-md-4 card" id="${areaObj.id}">`;
				}	
				parkString += `<h1>${areaObj.name}</h1>`;
				parkString += `<p>${areaObj.description}</p>`;
				parkString += `</div>`;	
	}
	printToDom(parkString);
};

const printToDom = (strang) => {
	$('#parkContainer').html(strang);
};

const attractionDomString = (attractionArray) => {
	let attractionString = '';
	for (let j = 0; j < attractionArray.length; j++ ) {
		attractionString += `<div id="attractionCard">`;
		attractionString += `<h4>${attractionArray[j].name}</h4>`;
		attractionString += `<p><${attractionArray[j].description}/p>`;
		attractionString += `</div>`;
	}
	printAttractions(attractionString);
};

const printAttractions = (strang) => {
	$("#attractionContainer").append(strang);
};


module.exports = {domString, attractionDomString};
