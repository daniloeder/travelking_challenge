const travelGroupButton = document.getElementById('travel-group-button');
const travelGroupPopup = document.getElementById('travel-group-popup');
const overlay = document.getElementById('overlay');
const groupSummary = document.getElementById('group-summary');

const adultsCount = document.getElementById('adults-count');
const childrenCount = document.getElementById('children-count');

const adultsDecrease = document.getElementById('adults-decrease');
const adultsIncrease = document.getElementById('adults-increase');

const childrenDecrease = document.getElementById('children-decrease');
const childrenIncrease = document.getElementById('children-increase');

const confirmTravelGroup = document.getElementById('confirm-travel-group');

let adults = 2;
let children = 0;

function updateCounts() {
    adultsCount.textContent = adults;
    childrenCount.textContent = children;
    groupSummary.textContent = `${adults} adults, ${children} children`;
}

adultsDecrease.addEventListener('click', () => {
    if (adults > 1) adults--;
    updateCounts();
});

adultsIncrease.addEventListener('click', () => {
    adults++;
    updateCounts();
});

childrenDecrease.addEventListener('click', () => {
    if (children > 0) children--;
    updateCounts();
});

childrenIncrease.addEventListener('click', () => {
    children++;
    updateCounts();
});

travelGroupButton.addEventListener('click', () => {
    travelGroupPopup.style.display = 'block';
    overlay.style.display = 'block';
});

confirmTravelGroup.addEventListener('click', () => {
    travelGroupPopup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    travelGroupPopup.style.display = 'none';
    overlay.style.display = 'none';
});
