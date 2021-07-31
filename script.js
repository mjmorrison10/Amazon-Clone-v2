function getItems() {
    db.collection("users").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                make: doc.data().make,
                rating: doc.data().rating,
                price: doc.data().price,
            })
        });
        generateItems(items);
    });
}


function addToCart(item) {
    let cartItem = db.collection('cart-item').doc(item.id);
    cartItem.get()
    .then(function(doc){
        if(doc.exists){
            cartItem.update({
                quantity: doc.data().quantity + 1
            })
        } else {
            .set({ 
                image: item.image,
                make: item.make,
                name: item.name,
                rating: item.rating,
                price: item.price,
                quantity: 1
            })
        }
    })
    
    
    .set({ 
        image: item.image,
        make: item.make,
        name: item.name,
        rating: item.rating,
        price: item.price,
        quantity: 1
    })
}

function generateItems(items) {
    let itemsHTML = "";
    items.forEach(item) => {
        let doc = document.createElement('div');
        doc.classList.add('main-product', "mr-5");
        doc.innerHTML = `
        <!-- Img -->
        <div class="product-image w-48 h-52 bg-white rounded-lg">
            <img
            class="w-full h-full object-contain p-4"
            src="${price.image}"
            alt=""
            />
        </div>

        <!-- desc -->
        <div
            class="product-name w-48 text-blue-500 font-bold mt-2 text-sm"
        >
            ${item.name}
        </div>
        <div class="product-make text-blue-300 font-bold">${item.make}</div>
        <div class="product-rating text-yellow-300 font-bold my-1">
            ⭐⭐⭐⭐⭐ ${item.rating}
        </div>
        <div class="product-price font-bold text-blue-500 text-lg">
            $ ${item.price}
        </div>
`

    let addToCartEl = document.createElement('div');
    addToCartEl.classList.add("hover:bg-yellow-600", "cursor-pointer", "product-add", "h-8", "w-28", "rounded", "bg-yellow-500", "text-white", "text-md", "flex", "justify-center", "items-center");
    addToCartEl.innerHTML = 'Add to cart';
    addToCartEl.addEventListener('click', function({
        addToCart(item)
    }))
    doc.appendChild(addToCartEl);
    document.querySelector('.main-section-products').appendChild(doc);
    }
}

getItems();


// Add to cart functionality ^^^^^^


