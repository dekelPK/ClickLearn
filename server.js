const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Course = require('./models/Course');
const User = require('./models/user');
const Lecture = require('./models/Lecture');
const Exercise = require('./models/Exercise');
const Order = require('./models/Order');


// יצירת אפליקציית Express
const app = express();
const PORT = process.env.PORT || 3000;

// הגדרת CORS
const corsOptions = {
    origin: 'https://click-learn.vercel.app', // הדומיין של ה-Frontend שלך
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// חיבור ל-MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// שימוש ב-body-parser כדי לטפל בבקשות POST
app.use(bodyParser.json());

// נתיבים עבור קורסים
app.get('/api/courses', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

app.post('/api/courses', async (req, res) => {
    const course = new Course({
        course_name: req.body.course_name,
        description: req.body.description,
        lectures: []  // אפשר להוסיף הרצאות בהמשך
    });
    await course.save();
    res.send(course);
});

app.put('/api/courses/:id', async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, {
        course_name: req.body.course_name,
        description: req.body.description
    }, { new: true });
    
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    
    res.send(course);
});

app.delete('/api/courses/:id', async (req, res) => {
    const course = await Course.findByIdAndRemove(req.params.id);
    
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    
    res.send(course);
});

// נתיבים עבור משתמשים
app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.post('/api/users', async (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password, // Note: In production, you should hash the password
        enrolled_courses: []
    });
    await user.save();
    res.send(user);
});
    
// נתיב לרישום משתמש חדש
app.post('/api/register', async (req, res) => {
    console.log('Received a request to /api/register');
    const { first_name, last_name, email, phone, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = new User({
            first_name,
            last_name,
            email,
            phone,
            password,  // שמירת הסיסמה כפי שהיא
        });

        await newUser.save(); // שמירת המשתמש בדאטה בייס
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user.' });
    }
});

// נתיבים נוספים עבור הרצאות, תרגילים והזמנות
// תוכלי להוסיף נתיבים דומים כמו עבור קורסים ומשתמשים

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
