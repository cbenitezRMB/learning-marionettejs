var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: '#main-region'
});

ContactManager.on('before:start', function(){
	ContactManager.ContactsApp.List.Controller.listContacts();
});