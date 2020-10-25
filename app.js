let total = 0;
let person1 = 0;
let person2 = 0;

let percent1 = 0;
let percent2 = 0;

// Get vote buttons
const btn1 = document.getElementById('vote1');
const btn2 = document.getElementById('vote2');

// Add event listeners to vote buttons
btn1.addEventListener('click', handleVotes);
btn2.addEventListener('click', handleVotes);


function handleVotes(event) {
    // Get the id of the button that was clicked
    const clickedBtn = event.target.id;

    // Increase the person's votes
    if (clickedBtn == 'vote1') 
        person1++;        
    if (clickedBtn == 'vote2') 
        person2++; 
    
    // Increase the total votes 
    total = person1 + person2;

    // Convert the votes to percentage
    percent1 = (person1/total)*100;
    percent2 = (person2/total)*100;

    // Change HTML
    // 1. Increase vote percentage
    // Get percentage html element
    const p1 = document.querySelector('#person1 .percentage');
    const p2 = document.querySelector('#person2 .percentage');
    const t = document.getElementById('total');
    

    p1.innerText = percent1.toFixed(2) + '%';
    p2.innerText = percent2.toFixed(2) + '%';
    t.innerText = total;


    // 2. Increase progress bar width
    const bar1 = document.querySelector('#person1 .progress .bar');
    const bar2 = document.querySelector('#person2 .progress .bar');

    bar1.style.width = percent1 + "%";
    bar2.style.width = percent2 + "%";

}