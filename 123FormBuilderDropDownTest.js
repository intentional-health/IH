(function(){
window.addEventListener('load', function(){
loader.engine.on('compute-form-rules-done', function() {
var value = loader.getDOMAbstractionLayer().getControlValueById('422898'); // id of Hidden Salutation
loader.getDOMAbstractionLayer().setControlValueById('422899', value); // id of Salutation Dropdown
});
});
})();