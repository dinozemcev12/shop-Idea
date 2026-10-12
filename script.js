const storeData = {
    home: {
        title: "ПОПУЛЯРНІ ТОВАРИ",
        items: [
            { id: 1, name: "SuperBook", price: 10000, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 15.6\" IPS (1920x1080)", "Процесор: Intel Core i3-1115G4", "Оперативна пам'ять: 8 ГБ", "Накопичувач: SSD 256 ГБ"] },
            { id: 2, name: "AsusBook", price: 13000, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 14\" FHD (1920x1080)", "Процесор: AMD Ryzen 3 5300U", "Оперативна пам'ять: 8 ГБ", "Накопичувач: SSD 512 ГБ"] },
            { id: 3, name: "Veebook", price: 20000, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 15.6\" IPS", "Процесор: Intel Core i5-1135G7", "Оперативна пам'ять: 16 ГБ", "Накопичувач: SSD 512 ГБ"] },
            { id: 4, name: "ZenBook", price: 35000, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 14\" OLED 2.8K", "Процесор: Intel Core i7-12700H", "Оперативна пам'ять: 16 ГБ", "Накопичувач: SSD 1 ТБ"] },
            { id: 5, name: "MacBook", price: 40000, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 13.3\" Retina (2560x1600)", "Процесор: Apple M1", "Оперативна пам'ять: 8 ГБ", "Накопичувач: SSD 256 ГБ"] },
            { id: 6, name: "TUFBooK", price: 50000, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 15.6\" 144Hz", "Процесор: AMD Ryzen 7 6800H", "Відеокарта: RTX 3050", "Оперативна пам'ять: 16 ГБ"] }
        ]
    },
    laptops: {
        title: "НОУТБУКИ",
        items: [
            { id: 7, name: "SuperBook", price: 10000, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 15.6\" IPS", "Процесор: Intel Core i3", "ОЗП: 8 ГБ", "SSD: 256 ГБ"] },
            { id: 8, name: "AsusBook", price: 13000, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 14\"", "Процесор: AMD Ryzen 3", "ОЗП: 8 ГБ", "SSD: 512 ГБ"] },
            { id: 9, name: "Veebook", price: 20000, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 15.6\"", "Процесор: Intel Core i5", "ОЗП: 16 ГБ", "SSD: 512 ГБ"] },
            { id: 10, name: "ZenBook", price: 35000, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 14\" OLED", "Процесор: Intel Core i7", "ОЗП: 16 ГБ", "SSD: 1 ТБ"] },
            { id: 11, name: "MacBook", price: 40000, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 13.3\" Retina", "Чіп: Apple M1", "ОЗП: 8 ГБ", "SSD: 256 ГБ"] },
            { id: 12, name: "TUFBooK", price: 50000, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 15.6\" 144Hz", "Процесор: Ryzen 7", "Відеокарта: RTX 3050", "ОЗП: 16 ГБ"] }
        ]
    },
    phones: {
        title: "ТЕЛЕФОНИ",
        items: [
            { id: 13, name: "Redmi Note", price: 8500, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 6.67\" AMOLED 120Hz", "Процесор: MediaTek Helio G99", "Камера: 108 МП", "Акумулятор: 5000 мАг"] },
            { id: 14, name: "Galaxy A54", price: 15000, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 6.4\" Super AMOLED", "Процесор: Exynos 1380", "Камера: 50 МП з OIS", "Вологозахист: IP67"] },
            { id: 15, name: "Pixel 7", price: 22000, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 6.3\" OLED 90Hz", "Процесор: Google Tensor G2", "Пам'ять: 8/128 ГБ", "Чистий Android"] },
            { id: 16, name: "iPhone 13", price: 28000, img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 6.1\" Super Retina XDR", "Процесор: Apple A15 Bionic", "Подвійна камера 12 МП", "Face ID"] },
            { id: 17, name: "Galaxy S23", price: 34000, img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 6.1\" Dynamic AMOLED 2X", "Процесор: Snapdragon 8 Gen 2", "Пам'ять: 8/256 ГБ", "Акумулятор: 3900 мАг"] },
            { id: 18, name: "iPhone 15 Pro", price: 45000, img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 6.1\" ProMotion 120Hz", "Процесор: Apple A17 Pro", "Титан корпус", "USB Type-C"] }
        ]
    },
    tablets: {
        title: "ПЛАНШЕТИ",
        items: [
            { id: 19, name: "Lenovo Tab M", price: 7500, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 10.1\" IPS", "Процесор: MediaTek Helio P22T", "Пам'ять: 4/64 ГБ", "Батарея: 5000 мАг"] },
            { id: 20, name: "Redmi Pad", price: 10500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTF339z78bpk8Zcs2_vDS2Zk6YSsoHpwKkPoEM3qJg8w&s", specs: ["Екран: 10.61\" 90Hz", "Процесор: MediaTek Helio G99", "Пам'ять: 4/128 ГБ", "4 динаміки Dolby Atmos"] },
            { id: 21, name: "Galaxy Tab A", price: 14000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdd5RzjESBs8033BlddRhms0l3i35Gtmd7ToJZnJ6Qw&s=10", specs: ["Екран: 10.4\"", "Процесор: Exynos", "Пам'ять: 4/64 ГБ", "Металевий корпус"] },
            { id: 22, name: "iPad 10.2", price: 18500, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 10.2\" Retina", "Процесор: Apple A13 Bionic", "Підтримка Apple Pencil", "iPadOS"] },
            { id: 23, name: "iPad Air", price: 27000, img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60", specs: ["Екран: 10.9\" Liquid Retina", "Процесор: Apple M1", "Touch ID в кнопці", "USB-C"] },
            { id: 24, name: "Galaxy Tab S9", price: 36000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJ_75UGg0qiUuZHwmUcOsa4sbUW1FujSVK2NWSjlXoA&s=10", specs: ["Екран: 11\" Dynamic AMOLED 2X", "Процесор: Snapdragon 8 Gen 2", "Перо S-Pen у комплекті", "IP68"] }
        ]
    }
};

let cart = [];

function switchTab(tabKey, clickedButton) {
    const buttons = document.querySelectorAll('.tab-btn:not(.cart-btn):not(.logo-btn)');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    const currentCategory = storeData[tabKey];
    document.getElementById('page-title').innerText = currentCategory.title;

    renderProducts(currentCategory.items);
}

function renderProducts(items) {
    const container = document.getElementById('tovars-container');
    container.innerHTML = '';

    items.forEach(item => {
        const productCard = document.createElement('div');
        productCard.className = 'tovarex';
        productCard.onclick = (e) => {
            if (!e.target.classList.contains('buy-btn')) {
                openProductModal(item);
            }
        };

        productCard.innerHTML = `
            <div class="img-container">
                <img class="imgex" src="${item.img}" alt="${item.name}">
            </div>
            <div class="tovar-info">
                <p class="nameex">${item.name}</p>
                <p class="sellex">${item.price.toLocaleString()}₴</p>
                <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${item.id}, '${item.name}', ${item.price})">Купити</button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

function openProductModal(item) {
    document.getElementById('modalImg').src = item.img;
    document.getElementById('modalTitle').innerText = item.name;
    document.getElementById('modalPrice').innerText = item.price.toLocaleString() + '₴';
    
    const specsList = document.getElementById('modalSpecsList');
    specsList.innerHTML = '';
    item.specs.forEach(spec => {
        const li = document.createElement('li');
        li.innerText = spec;
        specsList.appendChild(li);
    });

    const buyBtn = document.getElementById('modalBuyBtn');
    buyBtn.onclick = function() {
        addToCart(item.id, item.name, item.price);
        closeProductModal();
    };

    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function openAboutModal() {
    document.getElementById('aboutModal').classList.add('active');
}

function closeAboutModal() {
    document.getElementById('aboutModal').classList.remove('active');
}

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCartCount();
    alert(`Товар "${name}" додано до кошика!`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function openCart() {
    const listContainer = document.getElementById('cartItemsList');
    const totalContainer = document.getElementById('cartTotal');

    listContainer.innerHTML = '';

    if (cart.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #777;">Кошик порожній</p>';
        totalContainer.innerText = 'Загалом: 0₴';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">${item.price.toLocaleString()}₴</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Видалити</button>
            `;
            listContainer.appendChild(itemDiv);
        });
        totalContainer.innerText = `Загалом: ${total.toLocaleString()}₴`;
    }

    document.getElementById('cartModal').classList.add('active');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Ваш кошик порожній!');
        return;
    }
    alert("Дякуємо за замовлення! Менеджер зв'яжеться з вами найближчим часом.");
    cart = [];
    updateCartCount();
    closeCart();
}

window.onload = function() {
    renderProducts(storeData['home'].items);
};