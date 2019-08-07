let cars=[{id:1,name:'Maruthi Suzuki'},
    {id:2,name:'Hyndai Motors'},
    {id:3,name:'Suzuki NEXA'}];

let models = [{id:1,car_id:1,name:'Brezza'},{id:2,car_id:1,name:'Swift'},
    {id:3,car_id:1,name:'waganor'},{id:4,car_id:2,name:'Creta'},
    {id:5,car_id:2,name:'Grand i20'},{id:6,car_id:2,name:'Verna'},
    {id:7,car_id:3,name:'Baleno'},{id:8,car_id:3,name:'Scross'},
    {id:9,car_id:3,name:'Ciaz'}];

// Get the HTML elements
let carSelectBox = $('#car-select');
let modelSelectBox = $('#model-select');

// Populate Data on Car Select Box
let carOptions = `<option value="">Select a Car</option>`;
for(let car of cars){
    carOptions += `<option value="${car.id}">${car.name}</option> \n`;
}
carSelectBox.append(carOptions);

// Change Event on Car Select Box
carSelectBox.change(function () {
    let selectedId = Number.parseInt(carSelectBox.val());
    let selectedModels = models.filter(function(model) {
        return model.car_id === selectedId;
    });
    let modelOptions = `<option value="">Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option value="${model.id}">${model.name}</option> \n`;
    }
    modelSelectBox.empty().append(modelOptions);
});
