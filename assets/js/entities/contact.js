ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
	Entities.Contact = Backbone.Model.extend({
		defaults: {
			firstName: 'no first name',
			lastName: 'no last name',
			phoneNumber: 'No phone number!'
		} 
	});
	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,
			comparator: function(a, b){
				var aFirstName = a.get('firstName');
				var bFirstName = b.get('firstName');
				if(aFirstName === bFirstName){
					var aLastName = a.get('lastName');
					var bLastName = b.get('lastName');
					if(aLastName === bLastName){return 0;}
					if(aLastName < bLastName){return -1}
					else{return 1;}
				}else{
					if(aFirstName < bFirstName){return -1;}
					else{ return 1;}
				}
			}
	});

	var contacts;
	var initializeContacts = function(){
		contacts = new Entities.ContactCollection([
			{
				firstName: 'Alice',
				lastName: 'Tampen',
				phoneNumber: '653 53 76 45'
			},
			{
				firstName: 'Bob',
				lastName: 'Brigham',
				phoneNumber: '644 53 76 09'
			},
			{
				firstName: 'Alice',
				lastName: 'Artsy',
				phoneNumber: '852 22 36 23'
			},
			{
				firstName: 'Alice',
				lastName: 'Arten',
				phoneNumber: '852 22 36 23'
			},
			{
				firstName: 'Charlie',
				lastName: 'Campbell',
				phoneNumber: '852 22 36 23'
			},
			{
				firstName: 'Alice',
				lastName: 'Smith',
				phoneNumber: '852 22 36 23'
			}
		]);
	};

	var API = {
		getContactEntities : function(){
			if(contacts === undefined){
				initializeContacts();
			}
			return contacts;
		}
	};

	ContactManager.reqres.setHandler('contact:entities', function(){
		return API.getContactEntities();
	});
});