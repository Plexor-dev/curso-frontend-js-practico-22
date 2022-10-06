const navEmail = document.querySelector('#navcart');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cartIcon = document.querySelector('.navbar-shopping-cart');
const openCartMenu = document.querySelector('.product-detail');

const dialog = document.querySelector('#dialog');


navEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMobile);
cartIcon.addEventListener('click', toggleCart);

function toggleMenu(){
    desktopMenu.classList.toggle('inactive');
    openCartMenu.classList.add('inactive');
}

function toggleMobile(){

    openCartMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

}

function toggleCart(){

    openCartMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');


}



function dialogOpen(dialog) {
    if(dialog.open) {
        console.log('open')
        mobileMenu.classList.add('inactive');
        openCartMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
}



const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cartIcon: './icons/bt_add_to_cart.svg'
})

productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cartIcon: './icons/bt_add_to_cart.svg'
})

productList.push({
    name: 'PC',
    price: '520',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cartIcon: './icons/bt_add_to_cart.svg'
})

productList.push({
    name: 'Moto',
    price: '550',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cartIcon: './icons/bt_add_to_cart.svg'
})

productList.push({
    name: 'keyboard',
    price: '520',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cartIcon: './icons/bt_add_to_cart.svg'

})



function renderProduct(arr){
    arr.map(product => {
        /*
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div> 
        */
    
        const cardContainer = document.querySelector('.cards-container')
    
        const productCard = document.createElement("div");
        productCard.className = "product-card";
    
        const image = document.createElement("img");
        image.src = `${product.image}`;
        image.onclick = () => { 
            dialog.showModal();  
            dialogOpen(dialog)
        };
    
    
        //*begin card div products
        const productInfo = document.createElement('div');
        productInfo.className = "product-info";
    
        const productInfoDiv = document.createElement('div');
    
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
    
        productName.textContent = `${product.name}`;
        productPrice.textContent = `$${product.price}`;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
        
        
        const figureImage = document.createElement('figure');
        const imgCart = document.createElement('img');
        
        imgCart.src = `${product.cartIcon}`
        
        figureImage.appendChild(imgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figureImage);
    
    
    
        //*end card div products
    
        productCard.appendChild(image);
    
    
        productCard.appendChild(productInfo)
    
        cardContainer.appendChild(productCard);
    
    })
}

renderProduct(productList);