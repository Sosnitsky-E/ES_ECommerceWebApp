const createNav = () =>{
  let  nav = document.querySelector('.navbar');
  nav.innerHTML = ` 
    <div class="nav">
        <img src="img/dark-logo.png" class="brand-logo" alt="logo">
        <div class="nav-items">
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>

    </ul>
            <div class="search">
                    <input class="search-box" type="text"
                           placeholder="search brand,product">

                <button class="search-bth">search</button>

            </div>
            <a href="#"><img src="img/user2.png" alt=""></a>
            <a href="#"><img src="img/cart.png" alt=""></a>

        </div>

    </div>
    `
}
createNav();