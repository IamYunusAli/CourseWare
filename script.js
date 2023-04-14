const btn = document.querySelector(".btn-open");
const form = document.querySelector(".course-form");
const courseList = document.querySelector(".course-lists");

courseList.innerHTML = "";

loadCourse();

async function loadCourse() {
  const res = await fetch(
    "https://cluwenguxyodwixzwnxh.supabase.co/rest/v1/courses",
    {
      headers: {
        apikey: "",
        authorization: "",
      },
    }
  );
  const data = await res.json();
  createCourseList(data);
}

function createCourseList(dataArray) {
  const htmlArr = dataArray.map(
    (course) => `<li class="course">
    <p>
    ${course.text}
      <a
        class="source"
        href="${course.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag">${course.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  courseList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a course";
  }
});
