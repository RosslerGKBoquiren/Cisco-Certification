// create an array of contacts based on the previous LAB Variables' data

let contacts = [
	{
		name: 'Maxwell Wright',
		phone: '(0191) 719 6495',
		email: 'Curabitur.egestas.nunc@nonummyac.co.uk'
	},
	{
		name: 'Raja Villareal',
		phone: '0866 398 2895', 
		email: 'posuere.vulputate@sed.com'
	},
	{
		name: 'Helen Richards',
		phone: '0800 1111',
		email: 'libero@convallis.edu'
	}

];

// add a new contact at the end of the list Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

contacts.push({
	name: 'Maisie Haley',
	phone: '0913 531 3030',
	email: 'risus.Quisque@urna.ca'
});

// display the first and last contact
console.log(`The first and last contacts are as follows respectively: ${contacts[0].name} and ${contacts[3].name}`);

/*
'The first and last contacts are as follows respectively: 
Maxwell Wright and Maisie Haley'
*/


// Use length property of the array to determine the index of the last element
console.log(contact.length); // 4

