document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.card');
    const totalElement = document.querySelector('.total');

    products.forEach(product => {
        const plusButton = product.querySelector('.fa-plus-circle');
        const minusButton = product.querySelector('.fa-minus-circle');
        const trashButton = product.querySelector('.fa-trash-alt');
        const heartButton = product.querySelector('.fa-heart');
        const quantityElement = product.querySelector('.quantity');
        const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace('$', ''));

        // Increment quantity
        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;
            updateTotal();
        });

        // Decrement quantity
        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = --quantity;
                updateTotal();
            }
        });

        // Remove item
        trashButton.addEventListener('click', () => {
            product.parentElement.removeChild(product);
            updateTotal();
        });

        // Like item
        heartButton.addEventListener('click', () => {
            heartButton.classList.toggle('liked');
        });
    });

    // Update total price
    function updateTotal() {
        let total = 0;
        products.forEach(product => {
            const quantity = parseInt(product.querySelector('.quantity').textContent);
            const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace('$', ''));
            total += quantity * unitPrice;
        });
        totalElement.textContent = `${total} $`;
    }
});
