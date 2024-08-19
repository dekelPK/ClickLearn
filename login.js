// Make sure Firebase is initialized
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');

    function showForm(formType) {
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

    loginTab.addEventListener('click', () => showForm('login'));
    registerTab.addEventListener('click', () => showForm('register'));

    // התחברות למשתמש קיים
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User logged in:", user.email);
                window.location.href = 'index.html'; // Redirect on successful login
            })
            .catch((error) => {
                console.error("Error logging in:", error.code, error.message);
                alert("הייתה בעיה בהתחברות. בדוק את פרטי הכניסה ונסה שוב.");
            });
    });

    // הרשמת משתמש חדש
    document.getElementById('registerForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const phone = document.getElementById('register-phone').value;
        const password = document.getElementById('register-password').value;

        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Add user data to Firestore
            await firebase.firestore().collection('users').doc(user.uid).set({
                name: name,
                email: email,
                phone: phone
            });

            console.log("User registered and added to Firestore:", user.email);
            window.location.href = 'index.html'; // Redirect on successful registration
        } catch (error) {
            console.error("Error registering:", error.code, error.message);
            if (error.code === 'auth/email-already-in-use') {
                alert("המייל כבר בשימוש. נסה מייל אחר.");
            } else if (error.code === 'auth/invalid-email') {
                alert("כתובת המייל אינה תקינה.");
            } else if (error.code === 'auth/weak-password') {
                alert("הסיסמה חייבת להיות לפחות 6 תווים.");
            } else {
                alert("הייתה בעיה בהרשמה. נסה שוב מאוחר יותר.");
            }
        }
    });

    NavBar();
});
