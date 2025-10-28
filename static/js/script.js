document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
        const csrftoken = getCookie('csrftoken');
        
        fetch('/login/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrftoken
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('ログイン成功！');
                window.location.href = '/'; // ログイン後のリダイレクト先
            } else {
                alert('ログイン失敗。ユーザー名またはパスワードが間違っています。');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('エラーが発生しました。もう一度お試しください。');
        });
    });
});