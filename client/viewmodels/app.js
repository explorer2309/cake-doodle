function CreateDoodleViewModel() {
	var self = this;
	self.name = ko.observable('Build break 5929');
	self.options = ko.observableArray([]);
	self.optionToAdd = ko.observable();

	self.addOption = function() {
		addNewOptionToOptionsList();
	};

	self.removeOption = function(optionToRemove) {
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
	};

	function addNewOptionToOptionsList() {
		if (self.optionToAdd()){
			self.options.push(self.optionToAdd());
		}
		self.optionToAdd(null);
	}

	function saveData(data) {

	}
}

ko.applyBindings(new CreateDoodleViewModel(), document.getElementById('createDoodle'));


////