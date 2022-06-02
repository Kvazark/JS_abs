function lockedProfile() {
    let profiles = document.getElementsByClassName('profile');

    for (let i = 0; i < profiles.length; i++) {
        let divBlock = document.getElementById(`user${i + 1}HiddenFields`);

        let unlockedRadio = profiles[i].querySelectorAll(`input[name="user${i + 1}Locked"]`)[1];

        let button = profiles[i].querySelector('button');

        button.addEventListener('click', () => {
            
            if(unlockedRadio.checked){
                let style = getComputedStyle(divBlock).display;
                if (style === 'none') {
                    button.innerText = 'Hide It'
                    divBlock.style.display = 'block'
                } else {
                    button.innerText = 'Show more'
                    divBlock.style.display = 'none'
                }
            }
            
        })
        
        
    }
}
