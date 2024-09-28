// Smooth scroll to trending section when "Explore Recipes" is clicked
document.getElementById('explore').addEventListener('click', function () {
    document.querySelector('.trending').scrollIntoView({ behavior: 'smooth' });
});

// Add functionality for "Add to Favourite" buttons
let favouriteCount = 0;
const favouriteButtons = document.querySelectorAll('.favourite');
favouriteButtons.forEach(button => {
    button.addEventListener('click', function () {
        favouriteCount++;
        alert('Added to your favourites! You now have ' + favouriteCount + ' favourite recipes.');
    });
});
