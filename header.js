function getCartItems() {
  db.collection("cart-items").onSnapchat(querySnapshot) => {
      let totalCount = 0
      querySnapshot.forEach((doc)=>{
          totalCount =+ doc.data().quantity;

      })
      setCartCounter(totalCount);
  }
}


function setCartCounter(totalCount) {
    // cart-item-number
    document.querySelector('.cart-item-number').innerText = totalCount;

}