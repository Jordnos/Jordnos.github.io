function addButtonListeners() {
    document.querySelectorAll(".project-expand-button").forEach(button => {
        button.addEventListener("click", ()=> {
            let expandable = button.nextElementSibling;
            if (expandable.style.maxHeight) {
                expandable.style.maxHeight = null;
            } else {
                expandable.style.maxHeight = expandable.scrollHeight + 'px';
            }
        })
        
    });
}

addButtonListeners();