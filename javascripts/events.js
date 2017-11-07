"use strict";

const dom = require('./dom');
const dataPage = require('./data');

const pressEnter = (press) => {
	$(document).keypress((event) => {
		if(event.key === 'Enter'){
		let txt = ($('#searchBar').val());
		dataPage.initializer(txt);

		let areaData = dataPage.getAreas(); //figure out if function is still needed
		let results = areaData.filter(function(thing){
			return thing.name.indexOf(txt)>-1; //figure out if still works after everything else is working;
		});
		console.log("pressEnter", results);
	}
	});
};

const clickAreaToSeeAttractions = () => {
	console.log("attractions event");
	$(document).on("click", '.card', (e) => {
		dataPage.searchAttractions();
		console.log("attractions event", e.target.closest(".card").id);
	}); 	
};


//Copyright will display in copyright ID. 
const date = new Date();
const month = date.getMonth()+1;
const day = date.getDate();
const outputDate = '&copy ' + date.getFullYear() + '/' + (month < 10 ? '0': '') + month +
				'/' + (day < 10 ? '0' : '') + day + ', The Indecisive Park';				

$('#copyright').html(outputDate);				



module.exports = {pressEnter, clickAreaToSeeAttractions};