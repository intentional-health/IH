(function(){
window.addEventListener('load', function(){
loader.engine.on('compute-form-rules-done', function() {

//Title
var value = loader.getDOMAbstractionLayer().getControlValueById('437502'); // id of Title Value hidden control
loader.getDOMAbstractionLayer().setControlValueById('371934', value); // id of Title Dropdown



});
});
})();