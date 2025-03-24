addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = 'https://script.google.com/a/~/macros/s/AKfycbyaVXeDOUaMg3YRw1VhrwEzMTqG2afdt7OD061b47ow0X67EpMQiLjItxFH_POh9WSBGg/exec';
    const response = await fetch(url);
    return new Response(response.body, {
        headers: {
            'Access-Control-Allow-Origin': 'https://infhth.github.io',
            'Content-Type': 'text/plain'
        }
    });
}
