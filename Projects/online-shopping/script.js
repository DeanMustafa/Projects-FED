// script.js

const itemCountObj = {
    1: { count: 0, name: "Waffle with Berries", price: 6.50 },
    2: { count: 0, name: "Vanilla Bean Creme Brulee", price: 7.00 },
    3: { count: 0, name: "Macaron Mix of Five", price: 8.00 },
    4: { count: 0, name: "Classic Tiramisu", price: 5.50 },
    5: { count: 0, name: "Pistachio Baklava", price: 4.00 },
    6: { count: 0, name: "Lemon Maringue Pie", price: 5.00 },
    7: { count: 0, name: "Red Velvet Cake", price: 4.50 },
    8: { count: 0, name: "Salted Caramel Brownie", price: 5.50 },
    9: { count: 0, name: "Vanilla Panna Cotta", price: 6.50 },
};

function updateCartCount() {
    const totalCount = Object.values(itemCountObj).reduce((sum, item) => sum + item.count, 0);
    document.querySelector('.cart-item-count').textContent = totalCount;
}

function updateCartVisibility() {
	const purchaseBtn = document.querySelector('.purchase')
    const cartEmpty = document.querySelector('.cart-empty');
    const cartItemTemplate = document.querySelector('.cart-item-template');
    const totalCount = Object.values(itemCountObj).reduce((sum, item) => sum + item.count, 0);

    if (totalCount === 0) {
        cartEmpty.classList.remove('hidden');
        cartItemTemplate.innerHTML = '';
		purchaseBtn.classList.remove('active-purchase')
    } else {
		purchaseBtn.classList.add('active-purchase')
		cartEmpty.classList.add('hidden');
        updateCartItems();
    }
}

function updateCartItems() {
    const cartItemTemplate = document.querySelector('.cart-item-template');
    cartItemTemplate.innerHTML = '';

    for (const [id, item] of Object.entries(itemCountObj)) {
        if (item.count > 0) {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-each-item-count">Quantity: ${item.count}</p>
                <p class="cart-each-item-price">Price: $${(item.price * item.count).toFixed(2)}</p>
            `;
            cartItemTemplate.appendChild(itemElement);
        }
    }
}

function setupItemManager() {
    document.addEventListener('click', (e) => {
        const target = e.target;
        let actionType, item, id;

        if (target.closest('.js_add_btn')) {
            actionType = 'add';
            item = target.closest('.item');
            id = target.closest('.js_add_btn').getAttribute('data-id');
        } else if (target.closest('.increase') || target.closest('.decrease')) {
            actionType = target.closest('.increase') ? 'increase' : 'decrease';
            item = target.closest('.item');
            id = item.querySelector('.js_add_btn').getAttribute('data-id');
        } else if (target.closest('.active-purchase')) {
            actionType = 'purchase';
        }

        if (actionType === 'purchase') {
            // Reset all item counts to 0
            for (const id in itemCountObj) {
                itemCountObj[id].count = 0;
            }
            // Reset UI for all items
            document.querySelectorAll('.item').forEach(item => {
                const addToCartElement = item.querySelector('.js_add_btn');
                const addToCartSelectionElement = item.querySelector('.js_add_btn_active');
                const countElement = item.querySelector('.count');
                
                addToCartElement.style.display = 'flex';
                addToCartSelectionElement.style.display = 'none';
                countElement.textContent = '0';
            });
            // Update cart
            updateCartCount();
            updateCartVisibility();
        } else if (actionType && item && id) {
            const countElement = item.querySelector('.count');
            const addToCartElement = item.querySelector('.js_add_btn');
            const addToCartSelectionElement = item.querySelector('.js_add_btn_active');

            switch (actionType) {
                case 'add':
                case 'increase':
                    itemCountObj[id].count++;
                    addToCartElement.style.display = 'none';
                    addToCartSelectionElement.style.display = 'flex';
                    break;
                case 'decrease':
                    if (itemCountObj[id].count > 0) {
                        itemCountObj[id].count--;
                        if (itemCountObj[id].count === 0) {
                            addToCartElement.style.display = 'flex';
                            addToCartSelectionElement.style.display = 'none';
                        }
                    }
                    break;
            }

            countElement.textContent = itemCountObj[id].count;
            updateCartCount();
            updateCartVisibility();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupItemManager();
    updateCartVisibility();
});




























// import { appearOnActive } from "../module/uiManager.js";

// // global variable
// const addBtns = document.querySelectorAll(".js_add_btn");

// // #######################################################################
// //                          Add itens to cart
// // #######################################################################

// addBtns.forEach((btn) => {
// 	btn.addEventListener("click", (e) => {
// 		let button = e.currentTarget;
// 		// Upon click active class will be added and thing changes VTF
// 		appearOnActive(button);
// 	});
// });

