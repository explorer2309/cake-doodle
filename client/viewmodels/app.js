function CreateDoodleViewModel() {
	var self = this;
	self.name = ko.observable('Build break 5929');
	self.options = ko.observableArray([]);
	self.optionToAdd = ko.observable();

	self.addOption = function() {
		addNewOptionToOptionsList();
	};

	self.removeOption = function(optionToRemove) {
		console.log(arguments);
		var optionsToRemain = self.options().filter(function(option) {
			return option !== optionToRemove;
		});
		self.options(optionsToRemain);
	};

	self.createDoodle = function() {
		addNewOptionToOptionsList();
		var data = {
			name: self.name(),
			options: self.options()
		};
		console.log(data);
		saveData(data);
	};

	function addNewOptionToOptionsList() {
		var optionToAdd = self.optionToAdd();
		if (optionToAdd){
			self.options.push(optionToAdd);
		}
		self.optionToAdd('');
	}

	function saveData(data) {
		reqwest({
			url: '/doodle/create',
			method: 'post',
			data: data
		}).then(function(data){
			console.log(data);
			console.log('saved');
		});
	}
}

ko.applyBindings(new CreateDoodleViewModel(), document.getElementById('createDoodle'));


////