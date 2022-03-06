
const courseList = [];
const courseCart = [];
class Course {
    constructor(courseNumber, courseTitle, courseDescription, courseLength) {
        this.courseNumber = courseNumber;
        this.courseTitle = courseTitle;
        this.courseDescription = courseDescription;
        this.courseLength = courseLength;
    }
}

courseList.push(new Course(1 , "Javascript", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere odit perspiciatis optio nesciunt sequi animi corporis, iste ipsam vitae quis tenetur doloremque. Ipsum consectetur quia provident, necessitatibus fugit ut!", 4 ))
courseList.push(new Course(2 , "C++", "Officia facere odit perspiciatis optio nesciunt sequi animi corporis, iste ipsam vitae quis tenetur doloremque. Ipsum consectetur quia provident, necessitatibus fugit ut!", 4))
courseList.push(new Course(3 , "SQL", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere odit perspiciatis optio nesciunt sequi animi corporis, iste ipsam vitae quis tenetur doloremque. Ipsum consectetur quia provident, necessitatibus fugit ut!", 4))
courseCart.push(courseList[1]);
courseCart.push(courseList[2]);

//Presentera kurserna
for (let i = 0; i < courseList.length; i++) {
    const course = courseList[i];
    const courseDiv = 
    `  <div class="card text-dark bg-primary mb-3" style="max-width: 18rem">
        <div class="card-header bg-secondary text-faded">${course.courseNumber}</div>
        <div class="card-body">
          <h5 class="card-title">${course.courseTitle}</h5>
          <p class="card-text">${course.courseDescription}
          </p>
          <button onclick="signUpBtnClick(${i})"  type="button align-bottom" class="signUpBtn btn btn-secondary text-faded ">Sign up!</button>
        </div>
       </div>
    `;
    document.getElementById("courseDiv").innerHTML += courseDiv;
}
//Lägg till kursen från modalen
function newCourse() {
  var courseNumber = courseList.length + 1;
  var courseTitle = document.getElementById("courseTitle");
  var courseDisc = document.getElementById("courseDescription");
  var courseLength = document.getElementById("courseLength");
  if (courseTitle === "" ) {
    alert("Please enter course title!");
    return;
  }
  if (courseDisc === "" ) {
    alert("Please enter course discription!");
    return;
  }
  if (courseLength === "" || !isNaN(courseLength)) {
    alert("Please enter course length with numbers!");
    return;
  }
  const newCourse = new Course(courseNumber, courseTitle.value, courseDisc.value, courseLength.value);
  courseList.push(newCourse);
  const courseDiv = 
    `  <div class="card text-dark bg-primary mb-3" style="max-width: 18rem">
        <div class="card-header bg-secondary text-faded">${newCourse.courseNumber}</div>
        <div class="card-body">
          <h5 class="card-title">${newCourse.courseTitle}</h5>
          <p class="card-text">${newCourse.courseDescription}
          </p>
          <button onclick="signUpBtnClick(${newCourse.courseNumber - 1})"  type="button align-bottom" class="signUpBtn btn btn-secondary text-faded ">Sign up!</button>
        </div>
       </div>
    `;
    document.getElementById("courseDiv").innerHTML += courseDiv;

}

//Knapp för att lägga kurs i kundvagns array
var signUpBtn = document.getElementsByClassName("signUpBtn");
function signUpBtnClick(courseNum) {
  if (courseCart.includes(courseList[courseNum])) {
    alert("This course is already in your cart!");
    return;
  }
    courseCart.push(courseList[courseNum]);
    addOneCourseToCart();
}

//Presentera kundvagnen
function showCart() {
  for (let i = 0; i < courseCart.length; i++) {
    const course = courseCart[i];
    const cartDiv = 
        `   <h5 class="card-title">${course.courseTitle}</h5>
    `;
    document.getElementById("cartDiv").innerHTML += cartDiv;
}
}
showCart();

//Lägg till och visa en kurs i kundvagnens HTML
function addOneCourseToCart() {
     const course = courseCart[courseCart.length - 1];
    const cartDiv = 
        `   <h5 class="card-title">${course.courseTitle}</h5>
    `;
    document.getElementById("cartDiv").innerHTML += cartDiv;
}

//Tabs för kurserna
function openCity(evt, courseName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(courseName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}