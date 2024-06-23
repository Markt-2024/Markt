import './productCard.css'
export default function productCard(){
    const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slider img');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }
            slider.style.transform = `translateX(-${currentIndex * 100 / slides.length}%)`;
        }

        prevButton.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        nextButton.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        // Automatically show the first slide
        showSlide(currentIndex);

    return(
    <div>
        <div class="product-card">
        <div class="slider-controls">
            <button id="prev">‹</button>
        </div>
        <div class="slider-container">
            <div class="slider">
                <img src="./hi.jpeg" alt="Product Image 1"/>
                <img src="./hi.jpeg" alt="Product Image 2"/>
                <img src="./hi.jpeg" alt="Product Image 3"/>
                <img src="./hi.jpeg" alt="Product Image 4"/>
                <img src="./hi.jpeg" alt="Product Image 5"/>
            </div>
            <div class="product-details">
                <h2>Product Title</h2>
                <p>Description of the product goes here. It can be a few sentences long.</p>
                <div class="product-price">$99.99</div>
                <p>Posted by: User Name</p>
                <p>Room Number: 123</p>
                <p>Phone Number: 123-456-7890</p>
            </div>
        </div>
        <div class="slider-controls">
            <button id="next">›</button>
        </div>
        </div>
    </div>
    );
}