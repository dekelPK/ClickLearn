let CourseForView = [...courses];
let PickedCourse = JSON.parse(localStorage.getItem("PickedCourse")) || {};

console.log(PickedCourse);

function rendercourse() {
  const coursepickedName = document.getElementById("name");
  const coursepickeDesc = document.getElementById("Desc");
  const coursepickedTopic = document.getElementById("Topic");
  const coursepickedPrice = document.getElementById("Buy-It");
  
  if (coursepickedName && PickedCourse.name) {
    coursepickedName.innerText = `${PickedCourse.name}`;
  }

  if (coursepickeDesc && PickedCourse.Description) {
    coursepickeDesc.innerText = `${PickedCourse.Description}`;
  }

  if (coursepickedTopic && PickedCourse.Topic && PickedCourse.Topic.length > 0) {
    // ניקוי התוכן של האלמנט לפני הוספת הכרטיסיות החדשות
    coursepickedTopic.innerHTML = "";

    // ניצור כרטיסיות עבור כל נושא
    PickedCourse.Topic.forEach((topic, index) => {
      let card = document.createElement('div');
      card.classList.add('topic-card');
      
      // נוסיף את שם הנושא לכרטיסייה
      card.innerHTML = `<h3>${topic.title}</h3>`;
      
      // נוסיף אירוע לחיצה שינחה את המשתמש לעמוד הנושא
      card.addEventListener('click', () => {
        // נעדכן את הנושא הנבחר ב-localStorage
        localStorage.setItem("SelectedTopicIndex", index);
        // נעביר את המשתמש לעמוד נושא עם פרמטר ייחודי ל-URL
        window.location.href = `topic.html?course=${PickedCourse.name}&topic=${index}`;
      });

      coursepickedTopic.appendChild(card);
    });
  }

  if (coursepickedPrice && PickedCourse.Price) {
    coursepickedPrice.innerText = `${PickedCourse.Price} לרכישה `;
  }
}

// יש להוסיף את הפונקציה לאירוע בצורה הזו:
window.addEventListener("load", NavBar);
window.addEventListener("load", rendercourse); // בלי סוגריים כאן כדי שהפונקציה תתבצע בזמן הטעינה
