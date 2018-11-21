var Mocha = require('mocha'), fs = require('fs'), path = require('path');
open = require('open');
var mocha = new Mocha({
	reporter : 'mochawesome',
	reporterOptions : {
		reportDir : '../ApiTest/Reports/',
		reportFilename : 'ApiReport',
		reportDir : '../ApiReport',
		reportPageTitle : "CP Api Automation Report",
		reportTitle : 'Api Reports',
		autoOpen : true,
	},
	timeout: 60000,
});
var file = [ '../Core/Tests/', '../Call/Tests/' ];
for (var i = 0; i < file.length; i++) {
	fs.readdirSync(file[i]).forEach(function(filename) {
		mocha.addFile(file[i] + filename);
	});
}
mocha.run(function(failures) {
	process.on('exit', function() {
		process.exit(failures);
	});
});