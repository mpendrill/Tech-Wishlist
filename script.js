document.addEventListener('DOMContentLoaded', function () {
    // Create variables for the tasks list and the task form
    const wishlist = document.getElementById('wishlist');
    const wishlistForm = document.getElementById('wishlist-form');
    
    wishlistForm.addEventListener('submit', function (event) {
        // Use preventDefault to prevent the full page for reloading
        event.preventDefault();

        const nameInput = document.getElementById('name-input');
        const nameText = nameInput.value;
        
        if (nameText.trim() !== '') {
            addInputs(nameText);
            nameInput.value = '';
        }
    });
    
    function addInputs(nameInput) {
        const itemName = document.createElement('h1');
        itemName.innerHTML = `
            <span>${nameInput}</span>
        `;

        wishlist.appendChild(itemName);
    };
    
});