const courseList = [];
const teacherlist = [];
const courseCart = [];

class Course {
    constructor(courseSubject, courseName, courseDescription, teacher) {
        this.courseSubject = courseSubject;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.teacher = teacher;
    }
}

class Teacher {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

teacherlist.push( new Teacher ("Niklas", "Hjelm", "email@teacher.com"))
courseList.push(new Course("Webdevelopment", "Javascript", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere odit perspiciatis optio nesciunt sequi animi corporis, iste ipsam vitae quis tenetur doloremque. Ipsum consectetur quia provident, necessitatibus fugit ut!", ))
courseList.push(new Course("Gamedevelopment", "C++", "Officia facere odit perspiciatis optio nesciunt sequi animi corporis, iste ipsam vitae quis tenetur doloremque. Ipsum consectetur quia provident, necessitatibus fugit ut!"))
courseList.push(new Course("Database", "SQL", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere odit perspiciatis optio nesciunt sequi animi corporis, iste ipsam vitae quis tenetur doloremque. Ipsum consectetur quia provident, necessitatibus fugit ut!"))

for (let i = 0; i < courseList.length; i++) {
    const course = courseList[i];
    const courseDiv = 
    `  <div class="card text-dark bg-primary mb-3" style="max-width: 18rem">
        <div class="card-header bg-secondary text-faded">${course.courseSubject}</div>
        <div class="card-body">
          <h5 class="card-title">${course.courseName}</h5>
          <p class="card-text">${course.courseDescription}
          </p>
          <button id="addCourse${i}" type="button align-bottom" class="btn btn-secondary text-faded ">Add to cart!</button>
        </div>
      </div>
    `;
    document.getElementById("courseDiv").innerHTML += courseDiv;
}

var modal = document.getElementById("courseModal");
var modalBtn = document.getElementById("modalBtn");
modalBtn.onclick = function () {
    modal.style.display = "block";
}

// for (let i = 0; i < courseList.length; i++) {
//     const course = courseList[i];
//     const courseDiv = 
//     ` 
//     <section class="page-section">
//       <div class="container">
//         <div class="product-item">
//           <div class="product-item-title d-flex">
//             <div class="bg-faded p-5 d-flex ms-auto rounded">
//               <h2 class="section-heading mb-0">
//                 <spa class="section-heading-upper"> ${course.courseSubject}</span>
//                 <span class="section-heading-lower">${course.courseName}</span>
//               </h2>
//             </div>
//           </div>
//           <img
//             class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
//             src="assets\img\products-01.jpg"
//             alt="..."
//           />
//           <div class="product-item-description d-flex me-auto">
//             <div class="bg-faded p-5 rounded">
//               <p class="mb-0"> ${course.courseDescription}</p>

//               <div class="intro-button mx-auto">
//                 <a class="btn btn-primary btn-l" href="#!">Sign up!</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     `;
//     document.getElementById("courseDiv").innerHTML += courseDiv;
// }
