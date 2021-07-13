let button1= document.getElementById('addValue');
let button2= document.getElementById('getDrink');
let button3= document.getElementById('deleteDrink');
let button4= document.getElementById('getKeys');


class HashStorageClass {
    obj = {};
    addValue(key, value) {
        this.obj[key] = value;
    }
    getValue(key) {
        if (this.obj[key] === undefined) {
            return undefined;
        } else {
            return this.obj[key];
        }
    }
    deleteValue(key) {
        if (this.obj[key] === undefined) {
            return false;
        } else {
            delete this.obj[key];
            return true;
        }
    }
    getKeys() {
        return Object.keys(this.obj);
    }
}
const drinkStorage = new HashStorageClass();
console.log(drinkStorage);

button1.addEventListener('click', addValue);
button2.addEventListener('click', getDrink);
button4.addEventListener('click', getKeys);
button3.addEventListener('click', deleteDrink);

function addValue() {
    var drinkName = prompt("введите название напитка");
    var isAlc = prompt("он алкогольный?");
    var structure = prompt("способ приготовления");
    var result = `алкогольный? ${isAlc}, 
    способ приготовления: ${structure}`;
    drinkStorage.addValue(drinkName, result);
}

function getDrink() {
    var drinkName = prompt("введите название напитка");
    return alert(drinkStorage.getValue(drinkName));
}

function getKeys() {
    return alert(drinkStorage.getKeys());
}

function deleteDrink() {
    var drinkName = prompt("введите название напитка, информацию о котором необходимо удалить");
    if (drinkStorage.deleteValue(drinkName)) {
        alert("напиток удален");
    } else {
        alert("напиток не найден");
    }    
}