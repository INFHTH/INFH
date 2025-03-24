document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    fetch('https://script.google.com/a/~/macros/s/AKfycbyaVXeDOUaMg3YRw1VhrwEzMTqG2afdt7OD061b47ow0X67EpMQiLjItxFH_POh9WSBGg/exec')
        .then(response => {
            if (response.ok) {
                status.textContent = 'Script loaded successfully';
                return response.text();
            }
            throw new Error('Failed to load script');
        })
        .then(data => console.log(data))
        .catch(error => {
            status.textContent = 'Error: ' + error.message;
        });
});
