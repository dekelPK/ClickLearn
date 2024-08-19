window.addEventListener("load", function() {
  let PickedCourse = JSON.parse(localStorage.getItem("PickedCourse")) || {};
  let selectedTopicIndex = localStorage.getItem("SelectedTopicIndex");

  if (PickedCourse && PickedCourse.Topic) {
    // הצגת רשימת הנושאים בצד
    displayTopicsList(PickedCourse.Topic);

    // הצגת הנושא שנבחר
    if (selectedTopicIndex !== null && PickedCourse.Topic[selectedTopicIndex]) {
      displaySelectedTopic(selectedTopicIndex);
    }
  }
});
function displaySelectedTopic(topicIndex) {
  let PickedCourse = JSON.parse(localStorage.getItem("PickedCourse")) || {};
  const topic = PickedCourse.Topic[topicIndex];

  if (topic) {
    // עדכון התוכן בדף המרכזי
    document.getElementById('topicTitle').innerText = topic.title;
    document.getElementById('topicLecture').innerHTML = `הרצאה: <a href="${topic.lectureLink}" target="_blank">לחץ כאן לצפייה</a>`;
    document.getElementById('topicPractice').innerHTML = `תרגול: <a href="${topic.practiceLink}" target="_blank">לחץ כאן לצפייה</a>`;
  
    // הסרת מחלקת "selected-topic" מכל הנושאים
    document.querySelectorAll('#sidebar a').forEach(link => {
      link.classList.remove('selected-topic');
    });

    // הוספת מחלקת "selected-topic" לנושא הנבחר
    document.querySelectorAll('#sidebar a')[topicIndex].classList.add('selected-topic');
  }
}

function displayTopicsList(topics) {
  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';

  const topicList = document.createElement('ul');

  topics.forEach((topic, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    // כאשר לוחצים על נושא, נעדכן את התוכן מבלי לטעון את הדף מחדש
    link.href = "#";
    link.innerText = topic.title;
    link.addEventListener("click", function() {
      localStorage.setItem("SelectedTopicIndex", index);
      displaySelectedTopic(index); // הצגת הנושא הנבחר במרכז
    });

    listItem.appendChild(link);
    topicList.appendChild(listItem);
  });

  sidebar.appendChild(topicList);
  document.body.appendChild(sidebar);
}

window.addEventListener("load", NavBar);
