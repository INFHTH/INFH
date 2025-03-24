document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    fetch('https://script.google.com/a/~/macros/s/AKfycbyaVXeDOUaMg3YRw1VhrwEzMTqG2afdt7OD061b47ow0X67EpMQiLjItxFH_POh9WSBGg/exec', {
        mode: 'no-cors'
    })
        .then(response => {
            status.textContent = 'Script loaded (no-cors mode)';
            // ไม่สามารถอ่าน response ได้ในโหมด no-cors
        })
        .catch(error => {
            status.textContent = 'Error: ' + error.message;
        });
});
