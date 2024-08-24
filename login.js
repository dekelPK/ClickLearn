
    window.showForm = function(formType) {
        if (formType === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
        } else {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('signup-form').addEventListener('submit', async function (e) {
            e.preventDefault();
    
            // קבלת הערכים מהטופס
            const first_name = document.getElementById('first-name').value;
            const last_name = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
    
            // שליחת הנתונים לשרת
            const response = await fetch('https://click-learn.vercel.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    phone,
                    password
                })
            });
            
    
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
            } else {
                const errorData = await response.json();
                alert(`Failed to register: ${errorData.error}`);
            }
        });
    });
    
    window.addEventListener("load", NavBar);