document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');

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

    // רישום משתמש חדש
    document.getElementById('signup-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // ודא ש-supabase מאותחל לפני השימוש בו
        if (!supabase) {
            console.error('Supabase is not initialized!');
            return;
        }

        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            console.error('Error signing up:', error.message);
            alert('הייתה בעיה בתהליך ההרשמה. אנא נסה שוב.');
        } else {
            console.log('User created:', user.email);

            const { data, insertError } = await supabase
                .from('Users')
                .insert([
                    {
                        user_id: user.id,
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        phone: phone
                    }
                ]);

            if (insertError) {
                console.error('Error inserting user data:', insertError.message);
            } else {
                console.log('User data inserted successfully:', data);
                window.location.href = 'index.html';
            }
        }
    });
});

window.addEventListener("load", NavBar);