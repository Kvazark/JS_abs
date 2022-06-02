function addItem() {
    let text = document.getElementById('newItemText').value;
    let val = document.getElementById('newItemValue').value;

    document.getElementById('menu').appendChild(new Option(text, val)); 

    document.getElementById('newItemText').value ='';
    document.getElementById('newItemValue').value =''; 
}