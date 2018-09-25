// Array of objects with quotes
const quotes = [
    {
        quote: `I think one of the big challenges is actually cultivating beginners’ minds and making sure you’re still open to the world and continue to see new things. You can actually get jaded. You can stop seeing things that are new. You can start fearing failure. Those are the things an entrepreneur needs—an open mind and the ability to see the world with new eyes.`,
        source: 'Caterina Fake',
        title: 'Co-Founder of Flickr and Hunch',
        citation: 'Readwrite'
    },
    {
        quote: `I think the best piece of advice I can give to anyone with a dream is to never be afraid to share your dreams and talk about what you wish to create and see in the world. It’s often hard to share those pipedreams at the risk that they might not work out, but you never know who has the collaborations, networks, and visions to make your dreams a reality. So be careful and vigilant and protect yourself intelligently of course, but never be afraid to ask for help.`,
        source: 'Shree Bose',
        title: 'Co-Founder of Piper',
        year: 2015
    },
    {
        quote: `A diversity of thought, perspective and culture is important in any field, not just engineering. Surround yourself with people who support you and get involved in [coding] programs.`,
        source: 'Sarah Friar',
        citation: 'International Business Times',
        year: 2014
    },
    {
        quote: `It’s so easy for us to get caught up in negative patterns, versus seeing what positive change you can make. Especially for women and minorities, we need to learn to see challenges as stepping stones instead of hurdles. They really can bring you experience and closer to your goals.`,
        source: 'Rebecca Garcia',
        title: 'Technical Head of Product at Next Caller',
        year: 2014
    },
    {
        quote: `Women no longer have an ‘if I can’ mindset. Now it’s more about ‘how I can’—be in tech, start something in tech, fund something in tech. That shift is exciting! And it happened because we created a network where we show, daily, that women are innovating.`,
        source: 'Shaherose Charania',
        citation: 'Glamour'
    }
];

// An array of hex codes
const colors = ['#36b55c', '#5D3137', '#A6494F', '#48a59f', '#5f3277', '#3f85b7', '#962a96'];

// Get a random number
function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
}

// Return a random quote object from the array
function getRandomQuote(array) {
    const index = getRandomNumber(array);
    return array[index];
}

// Change the background to a random color
function getRandomColor(array) {
    const index = getRandomNumber(array);
    document.querySelector('body').style.background = array[index];
}

// Insert the random quote into the DOM and change the background color
// Only show the title, citation and year if they exist in the object
function printQuote() {
    const random = getRandomQuote(quotes);
    
    const markup = `
        <p class="quote">${random.quote}</p>
        <p class="source">${random.source}${random.title ? `<span class="title">${random.title}</span>` : ''}${random.citation ? `<span class="citation">${random.citation}</span>` : ''}${random.year ? `<span class="year">${random.year}</span>` : ''}</p>
    `;
    document.getElementById('quote-box').innerHTML = markup;

    getRandomColor(colors);
}

// Initialize
printQuote();

// When the "Show another quote" button is clicked the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);