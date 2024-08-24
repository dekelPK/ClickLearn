// addCourses.js
const mongoose = require('mongoose');
const Course = require('./models/Course'); // ייבוא המודל של הקורסים

// חיבור ל-MongoDB
mongoose.connect('mongodb://localhost:27017/mycourses', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// יצירת קורסים חדשים עם הרצאות
async function addCourses() {
    const courses = [
        {
            course_name: "עקרונות התכנות בשפת C",
            lectures: [
                "סוגי משתנים",
                "בקרת זרימה ולולאות",
                "פונקציות",
                "מערכים",
                "מחרוזות",
                "מצביעים",
                "הקצאת זיכרון דינאמית",
                "מבנים"
            ]
        },
        {
            course_name: "פיזיקה 1",
            lectures: [
                "וקטורים",
                "קינמטיקה",
                "תנועה מעגלית",
                "תנועה יחסית",
                "חוקי ניוטון",
                "כח גרר",
                "עבודה ואנרגיה",
                "כח משמר",
                "תנועה הרמונית פשוטה",
                "תנע קווי",
                "תנע זוויתי",
                "מומנט כח",
                "תנועת גוף קשיח",
                "מומנט התמד של גוף קשיח"
            ]
        },
        {
            course_name: "משוואות דיפרנציאליות רגילות",
            lectures: [
                "מושגים והגדרות",
                "משוואות מדויקות וגורם אינטגרציה",
                "משוואות ליניאריות",
                "משוואת ברנולי",
                "משוואת ריקטי",
                "מד״ר מסדר שני",
                "שיטות הורדת סדר המשוואה",
                "מדר מסדר n",
                "שיטת המקדמים הלא מוגדרים",
                "שיטת לגרנז",
                "משוואת אויילר",
                "שיטת ההצבה"
            ]
        }
    ];

    try {
        for (let courseData of courses) {
            const course = new Course(courseData);
            await course.save(); // שמירת הקורס בדאטה בייס
            console.log(`Course added: ${course.course_name}`);
        }
    } catch (error) {
        console.error('Error adding courses:', error);
    } finally {
        mongoose.connection.close(); // סגירת החיבור לדאטה בייס
    }
}

// קריאה לפונקציה להוספת הקורסים
addCourses();
