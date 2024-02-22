function postTweet() {
    const tweetInput = document.getElementById('tweetInput').value;
    if (tweetInput.trim() !== '') {
        const tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';
        tweetDiv.innerHTML = `<p>${tweetInput}</p>`;
        
        document.getElementById('tweets').appendChild(tweetDiv);

        // Clear the tweet input
        document.getElementById('tweetInput').value = '';
    }
}
