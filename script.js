document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('proxy-frame');
    const status = document.getElementById('status');

    try {
        iframe.src = 'https://script.google.com/a/~/macros/s/AKfycbyaVXeDOUaMg3YRw1VhrwEzMTqG2afdt7OD061b47ow0X67EpMQiLjItxFH_POh9WSBGg/exec';
        iframe.onload = () => {
            status.textContent = 'Iframe loaded successfully';
        };
        iframe.onerror = () => {
            status.textContent = 'Error loading iframe';
        };
    } catch (error) {
        status.textContent = 'Error: ' + error.message;
    }
});
