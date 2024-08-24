
let courses = [
  {
    name: "פיזיקה 1",
    Description: "קורס זה מקנה הבנה יסודית של עקרונות הפיזיקה הקלאסית, כולל ניתוח תנועות, חוקים של ניוטון, עבודה ואנרגיה, תנע וקינמטיקה. הקורס מתאים לסטודנטים להנדסה ולמדעים, ומספק בסיס חזק להמשך לימודים בתחומים מדעיים והנדסיים.",
    image: "images/physics1.webp",
    Topic: [
      { 
        title: "וקטורים",
        lectureLink: "https://example.com/vectors-lecture",
        practiceLink: "https://example.com/vectors-practice"
      },
      { 
        title: "קינמטיקה",
        lectureLink: "https://example.com/kinematics-lecture",
        practiceLink: "https://example.com/kinematics-practice"
      },
      { 
        title: "תנועה מעגלית",
        lectureLink: "https://example.com/circular-motion-lecture",
        practiceLink: "https://example.com/circular-motion-practice"
      },
      { 
        title: "תנועה יחסית",
        lectureLink: "https://example.com/relative-motion-lecture",
        practiceLink: "https://example.com/relative-motion-practice"
      },
      { 
        title: "חוקי ניוטון",
        lectureLink: "https://example.com/newton-lecture",
        practiceLink: "https://example.com/newton-practice"
      },
      { 
        title: "כח גרר",
        lectureLink: "https://example.com/drag-force-lecture",
        practiceLink: "https://example.com/drag-force-practice"
      },
      { 
        title: "עבודה ואנרגיה",
        lectureLink: "https://example.com/work-energy-lecture",
        practiceLink: "https://example.com/work-energy-practice"
      },
      { 
        title: "כח משמר",
        lectureLink: "https://example.com/conservative-force-lecture",
        practiceLink: "https://example.com/conservative-force-practice"
      },
      { 
        title: "תנועה הרמונית פשוטה",
        lectureLink: "https://example.com/simple-harmonic-motion-lecture",
        practiceLink: "https://example.com/simple-harmonic-motion-practice"
      },
      { 
        title: "תנע קווי",
        lectureLink: "https://example.com/linear-momentum-lecture",
        practiceLink: "https://example.com/linear-momentum-practice"
      },
      { 
        title: "תנע זוויתי",
        lectureLink: "https://example.com/angular-momentum-lecture",
        practiceLink: "https://example.com/angular-momentum-practice"
      },
      { 
        title: "מומנט כח",
        lectureLink: "https://example.com/torque-lecture",
        practiceLink: "https://example.com/torque-practice"
      },
      { 
        title: "תנועת גוף קשיח",
        lectureLink: "https://example.com/rigid-body-motion-lecture",
        practiceLink: "https://example.com/rigid-body-motion-practice"
      },
      { 
        title: "מומנט התמד של גוף קשיח",
        lectureLink: "https://example.com/moment-of-inertia-lecture",
        practiceLink: "https://example.com/moment-of-inertia-practice"
      }
    ],
    Price: "100₪"
  },
  {
    name: "פיזיקה 2",
    Description: "בקורס זה נעמיק את ההבנה בנושאים מרכזיים בפיזיקה הקלאסית, תוך התמקדות בחשמל ומגנטיות. נלמד על התנהגותם של שדות חשמליים ומגנטיים, אינטראקציות בין מטענים חשמליים, וזרמים חשמליים במעגלים. הקורס משלב תאוריה עם תרגולים מעשיים, על מנת לפתח הבנה עמוקה ויכולת פתרון בעיות ברמה מתקדמת.",
    image: "images/physics2.webp",
    Topic: [
      { 
        title: "שדות חשמליים",
        lectureLink: "https://example.com/electric-fields-lecture",
        practiceLink: "https://example.com/electric-fields-practice"
      },
      { 
        title: "שדות מגנטיים",
        lectureLink: "https://example.com/magnetic-fields-lecture",
        practiceLink: "https://example.com/magnetic-fields-practice"
      }
    ],
    Price: "100₪"
  }
];

function NavBar() {
    const template = `
    <button id="Cart">עגלת קניות</button>
    <button id="PandD">חבילות ומבצעים</button>
    <button id="Courses"> הקורסים שלנו</button>
    <button id="About">קצת עלינו</button>
    <button id="Profile">פרטים אישיים</button>
    <button id="Login">הרשמה / התחברות</button>
  `;
    const wrapper = document.createElement("div");
    wrapper.className = "topNavbar";
    wrapper.innerHTML = template;
    const headerElement = document.querySelector("header");
    headerElement.appendChild(wrapper);
  
    //לחיצה על כפתור הבית
    document.getElementById("Cart").addEventListener("click", function () {
      window.location.href = "cart.html";
    });
    document.getElementById("PandD").addEventListener("click", function () {
      window.location.href = "PackagesAndDeals.html";
    });
    document.getElementById("Courses").addEventListener("click", function () {
        window.location.href = "Courses.html";
      });
  
    document.getElementById("About").addEventListener("click", function () {
        window.location.href = "index.html";
      });
  
    document.getElementById("Profile").addEventListener("click", function () {
        window.location.href = "profile.html";
      });
  
    document.getElementById("Login").addEventListener("click", function () {
        window.location.href = "login.html";
      });
    
  
  }