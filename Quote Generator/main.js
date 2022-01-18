const arrayOfQuotes = [
    {
        'author' : 'Jeetu Bhaiya, Kota Factory',
        'quote': 'Dekh bheekh toh maang mat, kuch chaiye toh mehnat kar aur cheen le.'
    },
    {
        'author' : 'Dalai Lama',
        'quote': 'The purpose of our lives is to be happy'
    },
    {
        'author' : 'Mahatma Gandhi',
        'quote': 'Be the change you wish to see in thw world.'
    },
    {
        'author' : 'Joyce Meyers',
        'quote': 'It\'s never too late for new beginning in your life'
    },
    {
        'author' : 'Earlene Grey',
        'quote': 'Tea is to the body as music is to the soul'
    },
    {
        'author' : 'Vanessa Paradis',
        'quote': 'Life is like the ocean, it goes up and down'
    },
    {
        'author' : 'Maya Angelou',
        'quote': 'You will face many defeacts in life, but never let yourself be defeated'
    },
    {
        'author' : 'Nikki Giovanni',
        'quote': 'Mistakes are a fact of life. It is the response to the errors that count'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-- ${arrayOfQuotes[random].author}`;
}