function toggle() {
    let button = document.getElementsByClassName('button')[0];

    let block = document.getElementById('extra');

    if (button.innerText === 'MORE') {
        button.innerText = 'LESS';
        block.style.display = 'block';
    }else{
        button.innerText = 'MORE';
        block.style.display = 'none';
    }
}
