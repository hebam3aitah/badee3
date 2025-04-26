// JavaScript for Car Selection Page

document.addEventListener('DOMContentLoaded', function() {
    // Select all car cards
    const carCards = document.querySelectorAll('.car-card');
    
    // Select all buttons
    const detailButtons = document.querySelectorAll('.btn-primary');
    const bookButtons = document.querySelectorAll('.btn-outline');
    const selectButtons = document.querySelectorAll('.btn-success');
    
    // Add event listeners to car cards for hover effects
    carCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click event listeners to buttons
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const carName = this.closest('.car-card').querySelector('h3').textContent;
            alert(`Viewing details for ${carName}`);
        });
    });
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const carName = this.closest('.car-card').querySelector('h3').textContent;
            alert(`Booking ${carName}`);
        });
    });
    
    selectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const carName = this.closest('.car-card').querySelector('h3').textContent;
            const price = this.closest('.car-card').querySelector('.price').textContent;
            alert(`You've selected ${carName} at ${price} per day!`);
            
            // Highlight the selected card
            carCards.forEach(card => {
                card.style.border = 'none';
            });
            this.closest('.car-card').style.border = '2px solid #28a745';
        });
    });
    
    // Add event listeners to pagination
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            paginationLinks.forEach(item => {
                item.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.parentElement.classList.add('active');
            
            // You would typically load new car data here
            console.log(`Loading page ${this.textContent}`);
        });
    });
});