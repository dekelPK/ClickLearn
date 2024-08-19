let CourseForView = [...courses];

const getCourseHTMLCard = (course) => {
    console.log("Creating card for", course.name);
    const template = `
        <div class="lecture">
            <h1> ${course.name}</h1>
        </div> 
 `;
    const wrapper = document.createElement("div");
    wrapper.className = "course-card";
    wrapper.style.backgroundImage = `url(${course.image})`;
    wrapper.style.backgroundSize = "cover"; // התאמת התמונה לגודל הכרטיסיה
    wrapper.style.backgroundPosition = "center"; // מיקום התמונה במרכז הכרטיסיה
    wrapper.innerHTML = template;
    console.log(course);
    return wrapper;
  };

  function renderAvailableCourses() {
    console.log("Rendering available courses...");
    const CourseCardsContainer = document.getElementById("courses-container");
    CourseCardsContainer.innerHTML = "";
    const CourseCards = CourseForView.map(getCourseHTMLCard);
    CourseCardsContainer.append(...CourseCards);
  }


document.addEventListener("click", (e) => {
    const CourseCard = e.target.closest(".course-card");
    if (CourseCard) {
        const courseName = CourseCard.querySelector("h1").textContent;
      console.log(courseName);
      visitCourse(courseName);
    }
  });
  let PickedCourse ={
          name: "",
          Description:"",
          image: "",
          Topic: "",
          Price : "",
  }

  function visitCourse(courseName) {
    console.log("Course Name:", courseName);
    let chosenCourse = CourseForView.find(
        (course) => course.name.trim() === courseName.trim()
    );
    console.log("Chosen Course:", chosenCourse);
    if (chosenCourse) {
        PickedCourse.name = chosenCourse.name;
        PickedCourse.Description = chosenCourse.Description;
        PickedCourse.image = chosenCourse.image;
        PickedCourse.Topic = chosenCourse.Topic;
        PickedCourse.Tirgul = chosenCourse.Tirgul;
        PickedCourse.Price = chosenCourse.Price;
      
        localStorage.setItem("PickedCourse", JSON.stringify(PickedCourse));
        window.location.href = "course.html";
        
    }
  }


window.addEventListener("load", NavBar);
window.addEventListener("load", renderAvailableCourses);
