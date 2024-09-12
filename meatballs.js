document.addEventListener('DOMContentLoaded', () => {
    console.log('script loaded');
    
    const meatball1Button = document.getElementById('meatball-1-button');
    const meatball2Button = document.getElementById('meatball-2-button');
    const meatball3Button = document.getElementById('meatball-3-button');
    const meatball4Button = document.getElementById('meatball-4-button');
    const meatball5Button = document.getElementById('meatball-5-button');

    const meatball1 = document.getElementById('meatball-1');
    const meatball2 = document.getElementById('meatball-2');
    const meatball3 = document.getElementById('meatball-3');
    const meatball4 = document.getElementById('meatball-4');
    const meatball5 = document.getElementById('meatball-5');

    function toggleMeatball(meatball) {
        meatball.classList.toggle('visible');
    }
    
    meatball1Button.addEventListener('click', () => toggleMeatball(meatball1));
    meatball2Button.addEventListener('click', () => toggleMeatball(meatball2));
    meatball3Button.addEventListener('click', () => toggleMeatball(meatball3));
    meatball4Button.addEventListener('click', () => toggleMeatball(meatball4));
    meatball5Button.addEventListener('click', () => toggleMeatball(meatball5));
});
