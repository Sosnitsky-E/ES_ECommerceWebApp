const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
              <ul class="category">
                  <li class="category_title">men</li>
                  <li><a href="#" class="footer-link">t-shirts</a></li>
                  <li><a href="#" class="footer-link">sweatshirts</a></li>
                  <li><a href="#" class="footer-link">shirts</a></li>
                  <li><a href="#" class="footer-link">jeans</a></li>
                  <li><a href="#" class="footer-link">trousers</a></li>
                  <li><a href="#" class="footer-link">shoes</a></li>
                  <li><a href="#" class="footer-link">casuals</a></li>
                  <li><a href="#" class="footer-link">formals</a></li>
                  <li><a href="#" class="footer-link">sports</a></li>
                  <li><a href="#" class="footer-link">watch</a></li>
              </ul>

                <ul class="category">
                    <li class="category_title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>

        </div>
        <p class="footer-title">about company</p>
        <p class="info">At Fashion Haven, we understand that clothing is not just about covering your body; it's a way of expressing your unique style, personality, and confidence. Our clothing shop is more than just a store; it's an experience that caters to your fashion needs and desires.

            Our Collections

            Explore a diverse range of fashion collections that cater to every taste and occasion. Whether you're looking for casual wear, formal attire, or the latest trend, we have it all. From timeless classics to cutting-edge fashion, our curated collections ensure that you stay ahead of the style curve.

            Quality & Comfort

            We are dedicated to providing you with clothing that not only looks good but feels good too. Our products are crafted from premium materials to ensure durability and comfort. When you shop at Fashion Haven, you're investing in quality that lasts.

            Personalized Service

            Our knowledgeable and friendly staff is here to assist you in finding the perfect outfit. We believe in the power of personal style, and our team is always ready to offer expert advice to help you create your signature look.

            Size Inclusivity

            At Fashion Haven, we celebrate diversity, and that includes size diversity. Our clothing comes in a wide range of sizes to ensure that every body type finds something that fits and flatters.

            Affordable Luxury

            We believe that looking stylish shouldn't break the bank. That's why we offer competitive prices without compromising on quality. Fashion Haven is where affordability meets luxury.

            Online Shopping

            Can't visit us in person? No problem! Explore our online store, where you can browse our collections from the comfort of your home. We offer secure and convenient online shopping with prompt delivery to your doorstep.

            Stay Connected

            Be the first to know about our latest arrivals, special promotions, and fashion tips by following us on social media and subscribing to our newsletter. Fashion inspiration is just a click away!

            Visit Fashion Haven today and discover a world of fashion that inspires confidence and individuality. We're not just a clothing store; we're your fashion destination. Come, experience style at its best.
        </p>
        <p class="info">support emails - help@clothing.com, customer_support@clothing.com</p>
        <p class="info">phone - 329-298-67-89</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & cervices</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();