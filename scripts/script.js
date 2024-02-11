function addButtonListeners() {
    document.querySelectorAll(".project-expand-button").forEach(button => {
        button.addEventListener("click", ()=> {
            let expandable = button.nextElementSibling;
            let svg = button.querySelector("svg");

            if (expandable.style.maxHeight) {
                expandable.style.maxHeight = null;
                svg.setAttribute('transform', 'scale(-1, 1)');
            } else {
                expandable.style.maxHeight = expandable.scrollHeight + 'px';
                svg.setAttribute('transform', 'scale(1, -1)');
            }
        })
    });
}

addButtonListeners();