(function(){
window.addEventListener('load', function(){
loader.engine.on('compute-form-rules-done', function() {

//Your Title
var value = loader.getDOMAbstractionLayer().getControlValueById('422744'); // id of Your Title Value hidden control
loader.getDOMAbstractionLayer().setControlValueById('371550', value); // id of Your Title Dropdown

//Denomination
var value = loader.getDOMAbstractionLayer().getControlValueById('422766'); // id of Denomination Value hidden control
loader.getDOMAbstractionLayer().setControlValueById('371558', value); // id of Church Denomination Dropdown

// Church Leader Title
var value = loader.getDOMAbstractionLayer().getControlValueById('422745'); // id of Church Leader's Title Value hidden control
loader.getDOMAbstractionLayer().setControlValueById('371562', value); // id of urch Leader's Title  Dropdown

//Treasurer Title
var value = loader.getDOMAbstractionLayer().getControlValueById('422746'); // id of  Treasurer's Title Value hidden control
loader.getDOMAbstractionLayer().setControlValueById('389891', value); // id of Treasurer's Title Dropdown

//How did you hear about IH?
var value = loader.getDOMAbstractionLayer().getControlValueById('422767'); // id of Organisation Source hidden control
loader.getDOMAbstractionLayer().setControlValueById('389810', value); // id of How did you hear about IH Dropdown

// Funding source
var value = loader.getDOMAbstractionLayer().getControlValueById('422768'); // id of Funding Source Value hidden control
loader.getDOMAbstractionLayer().setControlValueById('371679', value); // id of How will you fund Dropdown

});
});
})();