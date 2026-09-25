/* =========================================================
   LearnSphere — Application Logic (Vanilla JavaScript)
   All data is saved in localStorage to simulate persistence.
   ========================================================= */

/* ---------------- 1. SAMPLE DATA ---------------- */
const COURSES = [
  { id: 1, name: "Java Programming", instructor: "John Smith", category: "Programming", level: "Intermediate", rating: 4.8, hours: 18, students: 12450, icon: "☕", color: "#fde68a",
    description: "Master Java from basics to object-oriented programming with hands-on examples.",
    objectives: ["Understand Java syntax", "Write OOP programs", "Handle exceptions", "Build mini projects"],
    modules: [
      { title: "Module 1 – Introduction", lessons: ["Introduction to Programming", "Variables and Data Types", "Operators"] },
      { title: "Module 2 – Control Statements", lessons: ["If-Else", "Loops", "Switch"] },
      { title: "Module 3 – OOP", lessons: ["Classes and Objects", "Constructors", "Inheritance", "Polymorphism"] } ] },
  { id: 2, name: "Python Programming", instructor: "Priya Raman", category: "Programming", level: "Beginner", rating: 4.9, hours: 15, students: 18300, icon: "🐍", color: "#bfdbfe",
    description: "Learn Python, the most beginner-friendly language, for scripting and data work.",
    objectives: ["Python basics", "Functions & modules", "File handling", "Intro to libraries"],
    modules: [
      { title: "Module 1 – Basics", lessons: ["Installing Python", "Variables", "Input/Output"] },
      { title: "Module 2 – Logic", lessons: ["Conditions", "Loops", "Functions"] },
      { title: "Module 3 – Data", lessons: ["Lists", "Dictionaries", "Files"] } ] },
  { id: 3, name: "Web Development", instructor: "David Lee", category: "Web Development", level: "Beginner", rating: 4.7, hours: 22, students: 15200, icon: "🌐", color: "#c7d2fe",
    description: "Build modern websites with HTML, CSS and JavaScript.",
    objectives: ["Semantic HTML", "Responsive CSS", "JavaScript DOM", "Deploy a site"],
    modules: [
      { title: "Module 1 – HTML", lessons: ["HTML Structure", "Forms", "Semantic Tags"] },
      { title: "Module 2 – CSS", lessons: ["Selectors", "Flexbox", "Grid"] },
      { title: "Module 3 – JavaScript", lessons: ["Variables", "JavaScript DOM", "Events", "Local Storage"] } ] },
  { id: 4, name: "Data Structures", instructor: "Anita Kumar", category: "Programming", level: "Advanced", rating: 4.6, hours: 26, students: 9800, icon: "🧩", color: "#fbcfe8",
    description: "Arrays, linked lists, trees and graphs explained with problems.",
    objectives: ["Analyse complexity", "Implement lists & stacks", "Trees & graphs", "Solve interview problems"],
    modules: [
      { title: "Module 1 – Linear", lessons: ["Arrays", "Linked Lists", "Stacks & Queues"] },
      { title: "Module 2 – Non-linear", lessons: ["Trees", "Heaps", "Graphs"] } ] },
  { id: 5, name: "SQL & Database", instructor: "Ravi Shankar", category: "Database", level: "Beginner", rating: 4.7, hours: 12, students: 11000, icon: "🗄️", color: "#bbf7d0",
    description: "Design databases and write powerful SQL queries.",
    objectives: ["Relational concepts", "SQL Queries", "Joins", "Normalization"],
    modules: [
      { title: "Module 1 – Basics", lessons: ["What is a Database", "Tables & Keys", "SQL Queries"] },
      { title: "Module 2 – Advanced", lessons: ["Joins", "Group By", "Normalization"] } ] },
  { id: 6, name: "C Programming", instructor: "Meena Iyer", category: "Programming", level: "Beginner", rating: 4.5, hours: 14, students: 14000, icon: "©️", color: "#e9d5ff",
    description: "Learn the foundations of programming with C.",
    objectives: ["Syntax & data types", "Pointers", "Arrays & strings", "File I/O"],
    modules: [
      { title: "Module 1 – Basics", lessons: ["Hello World", "Data Types", "Operators"] },
      { title: "Module 2 – Core", lessons: ["Arrays", "Pointers", "Structures"] } ] },
  { id: 7, name: "Machine Learning", instructor: "Dr. Kavya Nair", category: "AI & ML", level: "Advanced", rating: 4.8, hours: 30, students: 8700, icon: "🤖", color: "#fecaca",
    description: "Supervised and unsupervised learning with practical examples.",
    objectives: ["ML workflow", "Regression", "Classification", "Model evaluation"],
    modules: [
      { title: "Module 1 – Foundations", lessons: ["What is ML", "Datasets", "Linear Regression"] },
      { title: "Module 2 – Models", lessons: ["Classification", "Clustering", "Evaluation"] } ] },
  { id: 8, name: "Communication Skills", instructor: "Sarah Thomas", category: "Communication", level: "Beginner", rating: 4.6, hours: 8, students: 20100, icon: "🗣️", color: "#fed7aa",
    description: "Speak, write and present with confidence.",
    objectives: ["Public speaking", "Email writing", "Group discussions", "Interview skills"],
    modules: [
      { title: "Module 1 – Speaking", lessons: ["Confidence", "Presentations", "Group Discussion"] },
      { title: "Module 2 – Writing", lessons: ["Emails", "Resumes"] } ] },
  { id: 9, name: "Data Science with Python", instructor: "Arjun Mehta", category: "Data Science", level: "Intermediate", rating: 4.7, hours: 24, students: 7600, icon: "📊", color: "#a5f3fc",
    description: "Analyse and visualise data using Pandas and Matplotlib.",
    objectives: ["Data cleaning", "Pandas", "Visualisation", "Mini project"],
    modules: [
      { title: "Module 1 – Data", lessons: ["NumPy", "Pandas", "Cleaning Data"] },
      { title: "Module 2 – Visuals", lessons: ["Charts", "Dashboards"] } ] },
  { id: 10, name: "Quantitative Aptitude", instructor: "Karthik R", category: "Aptitude", level: "Intermediate", rating: 4.4, hours: 10, students: 16500, icon: "🧮", color: "#d9f99d",
    description: "Crack placement aptitude tests with shortcuts and practice.",
    objectives: ["Percentages", "Time & work", "Probability", "Mock tests"],
    modules: [
      { title: "Module 1 – Arithmetic", lessons: ["Percentages", "Profit & Loss", "Time & Work"] },
      { title: "Module 2 – Advanced", lessons: ["Permutations", "Probability"] } ] }
];
const CATEGORIES = ["All", "Programming", "Web Development", "Database", "Data Science", "AI & ML", "Communication", "Aptitude"];

const QUIZ_BANK = {
  Java: [
    ["Which keyword creates an object in Java?", ["new", "create", "make", "object"], 0],
    ["Java is ___ typed.", ["Weakly", "Statically", "Not", "Loosely"], 1],
    ["Which is not a Java primitive?", ["int", "boolean", "String", "char"], 2],
    ["Default value of int field?", ["null", "0", "undefined", "1"], 1],
    ["Which supports multiple inheritance in Java?", ["Class", "Interface", "Package", "Enum"], 1],
    ["JVM stands for?", ["Java Virtual Machine", "Java Variable Model", "Joint VM", "Java Visual Mode"], 0],
    ["Which method is the entry point?", ["start()", "run()", "main()", "init()"], 2],
    ["Keyword to inherit a class?", ["implements", "extends", "inherits", "super"], 1],
    ["Size of int in Java?", ["2 bytes", "4 bytes", "8 bytes", "Depends"], 1],
    ["Which is used for exception handling?", ["try-catch", "if-else", "switch", "for"], 0]
  ],
  C: [
    ["Symbol to get address of a variable?", ["*", "&", "#", "@"], 1],
    ["printf is defined in?", ["stdlib.h", "stdio.h", "math.h", "string.h"], 1],
    ["Which is a loop?", ["for", "if", "switch", "goto"], 0],
    ["Format specifier for int?", ["%c", "%f", "%d", "%s"], 2],
    ["C was developed by?", ["Dennis Ritchie", "James Gosling", "Guido", "Bjarne"], 0]
  ],
  HTML: [
    ["HTML stands for?", ["Hyper Text Markup Language", "High Text Machine", "Hyper Tool ML", "None"], 0],
    ["Tag for largest heading?", ["<h6>", "<head>", "<h1>", "<header>"], 2],
    ["Tag for a link?", ["<link>", "<a>", "<href>", "<url>"], 1],
    ["Attribute for image source?", ["href", "src", "alt", "link"], 1],
    ["Semantic tag for navigation?", ["<div>", "<nav>", "<span>", "<menu>"], 1]
  ],
  CSS: [
    ["CSS stands for?", ["Cascading Style Sheets", "Creative Style", "Computer Style", "Color Sheets"], 0],
    ["Property for text color?", ["font-color", "color", "text-color", "fg"], 1],
    ["Flex container property?", ["display:flex", "flex:1", "float", "position"], 0],
    ["Select element by id?", [".", "#", "*", "&"], 1],
    ["Which makes rounded corners?", ["border-radius", "corner", "round", "radius"], 0]
  ],
  JavaScript: [
    ["Declare a constant?", ["var", "let", "const", "static"], 2],
    ["typeof null is?", ["null", "object", "undefined", "number"], 1],
    ["Method to select by id?", ["getElementById", "querySelectorAll", "getById", "select"], 0],
    ["Strict equality operator?", ["==", "=", "===", "!="], 2],
    ["Store data in browser?", ["localStorage", "cookieJar", "database", "cache()"], 0]
  ],
  SQL: [
    ["Command to fetch data?", ["GET", "SELECT", "FETCH", "SHOW"], 1],
    ["Remove all rows keep table?", ["DROP", "DELETE", "TRUNCATE", "REMOVE"], 2],
    ["Clause to filter rows?", ["WHERE", "ORDER BY", "GROUP", "HAVING"], 0],
    ["Primary key must be?", ["Unique & not null", "Nullable", "Duplicate", "Text"], 0],
    ["Combine rows from two tables?", ["JOIN", "MERGE", "ADD", "UNION ALL only"], 0]
  ],
  Aptitude: [
    ["20% of 150?", ["25", "30", "35", "40"], 1],
    ["Next: 2, 4, 8, 16, ?", ["24", "30", "32", "34"], 2],
    ["Speed 60km/h, time 2h, distance?", ["100", "110", "120", "130"], 2],
    ["Average of 10, 20, 30?", ["15", "20", "25", "30"], 1],
    ["If A does work in 10 days, per day?", ["1/5", "1/10", "10", "1/20"], 1]
  ]
};

const DEFAULT_ASSIGNMENTS = [
  { id: 1, title: "Java OOP Assignment", course: "Java Programming", due: "2026-09-28", status: "Pending" },
  { id: 2, title: "Responsive Portfolio Page", course: "Web Development", due: "2026-10-02", status: "Pending" },
  { id: 3, title: "SQL Joins Worksheet", course: "SQL & Database", due: "2026-09-20", status: "Overdue" },
  { id: 4, title: "Python Functions Lab", course: "Python Programming", due: "2026-09-15", status: "Graded" },
  { id: 5, title: "Linked List Implementation", course: "Data Structures", due: "2026-10-06", status: "Submitted" }
];

const DEFAULT_SCHEDULE = [
  { id: 1, day: "Monday", subject: "Java", topic: "Java OOP", start: "10:00", end: "11:00" },
  { id: 2, day: "Monday", subject: "Aptitude", topic: "Percentages", start: "14:00", end: "15:00" },
  { id: 3, day: "Monday", subject: "SQL", topic: "SQL Practice", start: "18:00", end: "19:00" },
  { id: 4, day: "Wednesday", subject: "Web", topic: "JavaScript DOM", start: "16:00", end: "17:30" },
  { id: 5, day: "Friday", subject: "Python", topic: "Lists & Dicts", start: "11:00", end: "12:00" }
];

const DEFAULT_NOTIFICATIONS = [
  { id: 1, text: "New lesson added to Java Programming", read: false },
  { id: 2, text: "Assignment 'Java OOP' due in 3 days", read: false },
  { id: 3, text: "You earned a certificate in Communication Skills 🎉", read: false },
  { id: 4, text: "Quiz: SQL basics is now available", read: true }
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/* ---------------- 2. STATE & STORAGE ---------------- */
const STORE_KEY = "learnsphere_state";

function defaultState() {
  // Pre-completed lessons create starting progress for sample courses
  return {
    loggedIn: true,
    dark: false,
    enrolled: [1, 3, 5, 8, 2],
    completedLessons: {
      1: [0, 1, 2, 3, 4, 5, 6], // Java ~72%
      3: [0, 1, 2, 3, 4, 5],    // Web ~55%
      5: [0, 1],                // SQL ~35%
      8: [0, 1, 2, 3, 4]        // Communication 100%
    },
    currentLesson: {},
    lastAccessed: { 1: "Today", 3: "Yesterday", 5: "2 days ago", 8: "Last week" },
    notes: {},
    assignments: DEFAULT_ASSIGNMENTS,
    schedule: DEFAULT_SCHEDULE,
    notifications: DEFAULT_NOTIFICATIONS,
    quizScores: [],
    profile: {
      name: "Arumugavalli K G", degree: "B.E Electronics and Communication Engineering",
      email: "arumugavalli@learnsphere.edu", phone: "+91 98765 43210",
      college: "Sunrise College of Engineering", department: "ECE", year: "2027"
    },
    settings: { email: true, assign: true, updates: false, language: "English" }
  };
}

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    return saved ? { ...defaultState(), ...saved } : defaultState();
  } catch (e) {
    return defaultState();
  }
}
function saveState() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

/* ---------------- 3. HELPERS ---------------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const getCourse = (id) => COURSES.find((c) => c.id === Number(id));
const allLessons = (course) => course.modules.flatMap((m) => m.lessons);
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function courseProgress(id) {
  const course = getCourse(id);
  const done = (state.completedLessons[id] || []).length;
  return Math.round((done / allLessons(course).length) * 100);
}
function isEnrolled(id) { return state.enrolled.includes(Number(id)); }
function formatDate(iso) {
  return new Date(iso + "T00:00").toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
function formatTime(t) {
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}

/* ---------------- 4. TOAST & MODAL ---------------- */
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  $("#toastContainer").appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
function openModal(html) { $("#modalContent").innerHTML = html; $("#modal").classList.remove("hidden"); }
function closeModal() { $("#modal").classList.add("hidden"); }

/* ---------------- 5. NAVIGATION ---------------- */
const PAGE_TITLES = {
  dashboard: "Dashboard", mycourses: "My Courses", explore: "Explore Courses", course: "Course Details",
  progress: "My Progress", assignments: "Assignments", quizzes: "Quizzes", certificates: "Certificates",
  schedule: "Study Schedule", profile: "Profile", settings: "Settings"
};
let previousPage = "dashboard";
let currentPage = "dashboard";

function showPage(page) {
  if (page !== "course") previousPage = page;
  currentPage = page;
  $$(".page").forEach((p) => p.classList.remove("active"));
  $(`#page-${page}`).classList.add("active");
  $$(".nav-link").forEach((l) => l.classList.toggle("active", l.dataset.page === page));
  $("#pageTitle").textContent = PAGE_TITLES[page];
  closeSidebar();
  renderPage(page);
  window.scrollTo(0, 0);
}

function renderPage(page) {
  const renderers = {
    dashboard: renderDashboard, mycourses: renderMyCourses, explore: renderExplore,
    progress: renderProgress, assignments: renderAssignments, quizzes: renderQuizzes,
    certificates: renderCertificates, schedule: renderSchedule, profile: renderProfile, settings: renderSettings
  };
  if (renderers[page]) renderers[page]();
}

function closeSidebar() { $("#sidebar").classList.remove("open"); $("#overlay").classList.remove("show"); }

/* ---------------- 6. COURSE CARDS ---------------- */
function courseCardHTML(course) {
  const enrolled = isEnrolled(course.id);
  return `
    <article class="course-card">
      <div class="course-thumb" style="background:${course.color}">${course.icon}</div>
      <div class="course-body">
        <h4 data-open="${course.id}">${course.name}</h4>
        <p class="muted small">Instructor: ${course.instructor}</p>
        <div class="course-meta">
          <span>📖 ${allLessons(course).length} Lessons</span><span>⏱ ${course.hours} Hours</span>
        </div>
        <div class="course-foot">
          <span class="tag ${course.level}">${course.level}</span><span>⭐ ${course.rating}</span>
        </div>
        ${enrolled
          ? `<button class="btn ghost sm" data-open="${course.id}">Go to Course</button>`
          : `<button class="btn primary sm" data-enroll="${course.id}">Enroll Now</button>`}
      </div>
    </article>`;
}

function progressCardHTML(course) {
  const pct = courseProgress(course.id);
  const done = (state.completedLessons[course.id] || []).length;
  const lessons = allLessons(course);
  const current = lessons[Math.min(done, lessons.length - 1)];
  return `
    <article class="course-card">
      <div class="course-thumb" style="background:${course.color}">${course.icon}</div>
      <div class="course-body">
        <h4 data-open="${course.id}">${course.name}</h4>
        <p class="muted small">Instructor: ${course.instructor}</p>
        <p class="small">${pct === 100 ? "✅ Completed" : "Current lesson: <strong>" + current + "</strong>"}</p>
        <div class="course-meta"><span>${done}/${lessons.length} lessons</span><span>Last accessed: ${state.lastAccessed[course.id] || "Not yet"}</span></div>
        <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="course-foot"><strong>${pct}%</strong>
          <button class="btn primary sm" data-open="${course.id}">${pct === 0 ? "Start" : pct === 100 ? "Review" : "Continue Learning"}</button></div>
      </div>
    </article>`;
}

function enrollCourse(id) {
  id = Number(id);
  if (isEnrolled(id)) return;
  state.enrolled.push(id);
  state.lastAccessed[id] = "Not yet";
  saveState();
  showToast(`Enrolled in ${getCourse(id).name}!`);
  addNotification(`You enrolled in ${getCourse(id).name}`);
  renderPage(currentPage);
  updateStats();
}

/* ---------------- 7. DASHBOARD ---------------- */
function getStats() {
  const completed = state.enrolled.filter((id) => courseProgress(id) === 100).length;
  const lessons = Object.values(state.completedLessons).reduce((s, arr) => s + arr.length, 0);
  const hours = Math.round(state.enrolled.reduce((s, id) => s + (getCourse(id).hours * courseProgress(id)) / 100, 0));
  return { enrolled: state.enrolled.length, completed, lessons, hours, certs: completed };
}
function updateStats() {
  const s = getStats();
  $("#statEnrolled").textContent = s.enrolled;
  $("#statCompleted").textContent = s.completed;
  $("#statHours").textContent = s.hours;
  $("#statCerts").textContent = s.certs;
}
function renderDashboard() {
  updateStats();
  const inProgress = state.enrolled.filter((id) => courseProgress(id) < 100).map(getCourse);
  $("#continueGrid").innerHTML = inProgress.length
    ? inProgress.slice(0, 3).map(progressCardHTML).join("")
    : `<p class="empty">No courses in progress. Explore new courses!</p>`;
  $("#recommendedGrid").innerHTML = COURSES.slice(0, 8).map(courseCardHTML).join("");
}

/* ---------------- 8. MY COURSES ---------------- */
let myCourseFilter = "all";
function renderMyCourses() {
  const list = state.enrolled.map(getCourse).filter((c) => {
    const p = courseProgress(c.id);
    if (myCourseFilter === "progress") return p > 0 && p < 100;
    if (myCourseFilter === "completed") return p === 100;
    if (myCourseFilter === "notstarted") return p === 0;
    return true;
  });
  $("#myCoursesGrid").innerHTML = list.length ? list.map(progressCardHTML).join("") : `<p class="empty">No courses found for this filter.</p>`;
}

/* ---------------- 9. EXPLORE ---------------- */
let exploreCategory = "All";
function renderExplore() {
  $("#categoryFilters").innerHTML = CATEGORIES.map((c) => `<button class="chip ${c === exploreCategory ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  const q = $("#exploreSearch").value.toLowerCase().trim();
  const level = $("#difficultyFilter").value;
  const sort = $("#sortSelect").value;
  let list = COURSES.filter((c) =>
    (exploreCategory === "All" || c.category === exploreCategory) &&
    (level === "all" || c.level === level) &&
    c.name.toLowerCase().includes(q));
  const sorters = {
    popular: (a, b) => b.students - a.students, rating: (a, b) => b.rating - a.rating,
    name: (a, b) => a.name.localeCompare(b.name), short: (a, b) => a.hours - b.hours
  };
  list.sort(sorters[sort]);
  $("#exploreGrid").innerHTML = list.length ? list.map(courseCardHTML).join("") : `<p class="empty">No courses match your search.</p>`;
}

/* ---------------- 10. COURSE DETAILS + LESSON PLAYER ---------------- */
let openCourseId = null;
function openCourse(id) {
  openCourseId = Number(id);
  if (isEnrolled(id)) { state.lastAccessed[id] = "Today"; saveState(); }
  showPage("course");
  renderCourseDetail();
}

function renderCourseDetail() {
  const c = getCourse(openCourseId);
  const lessons = allLessons(c);
  const done = state.completedLessons[c.id] || [];
  const enrolled = isEnrolled(c.id);
  if (state.currentLesson[c.id] === undefined) state.currentLesson[c.id] = Math.min(done.length, lessons.length - 1);
  const cur = state.currentLesson[c.id];
  const pct = courseProgress(c.id);
  let index = 0;
  const curriculum = c.modules.map((m) => `
    <div class="module"><h4>${m.title}</h4>
      ${m.lessons.map((l) => { const i = index++; return `
        <button class="lesson-item ${done.includes(i) ? "done" : ""} ${i === cur && enrolled ? "current" : ""}" data-lesson="${i}">
          <span class="mark">${done.includes(i) ? "✓" : "○"}</span>${l}</button>`; }).join("")}
    </div>`).join("");

  $("#courseDetail").innerHTML = `
    <div class="detail-head">
      <div class="card">
        <h2>${c.icon} ${c.name}</h2>
        <p class="muted" style="margin:8px 0">${c.description}</p>
        <div class="course-meta"><span>👨‍🏫 ${c.instructor}</span><span>⭐ ${c.rating}</span>
          <span>👥 ${c.students.toLocaleString()} students</span><span>⏱ ${c.hours} hours</span>
          <span class="tag ${c.level}">${c.level}</span></div>
        <h4 style="margin-top:14px">Course Objectives</h4>
        <ul>${c.objectives.map((o) => `<li>${o}</li>`).join("")}</ul>
      </div>
      <div class="card">
        <h3>Your Progress</h3>
        <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>
        <p style="margin:10px 0"><strong>${pct}%</strong> · ${done.length}/${lessons.length} lessons completed</p>
        ${enrolled ? "" : `<button class="btn primary full" data-enroll="${c.id}">Enroll Now</button>`}
      </div>
    </div>
    <div class="lesson-layout">
      <div class="card">
        ${enrolled ? `
          <div class="video-box"><div><div class="play">▶</div>Video Lesson</div></div>
          <h3>${lessons[cur]}</h3>
          <p class="muted">In this lesson you will learn about <strong>${lessons[cur]}</strong> in ${c.name}, with examples and practice exercises.</p>
          <div class="btn-row" style="margin:14px 0">
            <button class="btn ghost" id="prevLesson" ${cur === 0 ? "disabled" : ""}>← Previous</button>
            <button class="btn ${done.includes(cur) ? "success" : "primary"}" id="markComplete">${done.includes(cur) ? "✓ Completed" : "Mark as Completed"}</button>
            <button class="btn ghost" id="nextLesson" ${cur === lessons.length - 1 ? "disabled" : ""}>Next →</button>
          </div>
          <label><strong>My Notes</strong><textarea id="lessonNotes" rows="4" placeholder="Write your notes here...">${escapeHTML(state.notes[c.id + "-" + cur] || "")}</textarea></label>
          <button class="btn ghost sm" id="saveNotes" style="margin-top:8px">Save Notes</button>`
        : `<div class="video-box"><div><div class="play">🔒</div>Enroll to start learning</div></div>`}
      </div>
      <div class="card"><h3>Course Curriculum</h3>${curriculum}</div>
    </div>`;
}

function toggleLessonComplete() {
  const id = openCourseId, cur = state.currentLesson[id];
  const list = state.completedLessons[id] || (state.completedLessons[id] = []);
  if (list.includes(cur)) return;
  list.push(cur);
  const total = allLessons(getCourse(id)).length;
  if (list.length === total) {
    showToast(`🎉 Course completed! Certificate unlocked for ${getCourse(id).name}`);
    addNotification(`Certificate earned: ${getCourse(id).name}`);
  } else showToast("Lesson marked as completed");
  if (cur < total - 1) state.currentLesson[id] = cur + 1;
  saveState();
  renderCourseDetail();
}

/* ---------------- 11. PROGRESS ---------------- */
function renderProgress() {
  const s = getStats();
  const totalLessons = state.enrolled.reduce((sum, id) => sum + allLessons(getCourse(id)).length, 0);
  $("#progOverall").textContent = (totalLessons ? Math.round((s.lessons / totalLessons) * 100) : 0) + "%";
  $("#progHours").textContent = s.hours + " hrs";
  $("#progCourses").textContent = s.completed;
  $("#progLessons").textContent = s.lessons;

  const subjects = [["Java", 1], ["HTML/CSS", 3], ["JavaScript", 3], ["SQL", 5], ["C Programming", 6]];
  $("#subjectBars").innerHTML = subjects.map(([name, id], i) => {
    let p = courseProgress(id);
    if (i === 2) p = Math.max(0, p - 15); // JavaScript slightly behind overall web course
    return `<div class="subject-row"><div><span>${name}</span><strong>${p}%</strong></div>
      <div class="progress"><div class="progress-fill" style="width:${p}%"></div></div></div>`;
  }).join("");

  const weekly = [3.5, 4.5, 2, 5, 3, 4.5, 1.5];
  const max = Math.max(...weekly);
  $("#weeklyChart").innerHTML = weekly.map((h, i) => `
    <div class="bar-col"><span>${h}</span><div class="bar" style="height:${(h / max) * 80}%"></div><span>${DAYS[i].slice(0, 3)}</span></div>`).join("");
}

/* ---------------- 12. ASSIGNMENTS ---------------- */
function renderAssignments() {
  $("#assignmentBody").innerHTML = state.assignments.map((a) => `
    <tr><td><strong>${a.title}</strong></td><td>${a.course}</td><td>${formatDate(a.due)}</td>
      <td><span class="status ${a.status}">${a.status}</span></td>
      <td>${a.status === "Pending" || a.status === "Overdue"
        ? `<button class="btn primary sm" data-submit="${a.id}">Submit</button>`
        : `<span class="muted small">${a.status === "Graded" ? "Score: 92%" : "Awaiting grade"}</span>`}</td></tr>`).join("");
}
function openSubmitModal(id) {
  const a = state.assignments.find((x) => x.id === Number(id));
  openModal(`<h3>Submit: ${a.title}</h3>
    <form id="submitForm" data-id="${a.id}">
      <label>Submission Text<textarea id="subText" rows="5" required placeholder="Write your answer..."></textarea></label>
      <label>File Name (optional)<input id="subFile" placeholder="e.g. assignment.pdf" /></label>
      <button class="btn primary" type="submit">Submit Assignment</button>
    </form>`);
}

/* ---------------- 13. QUIZZES ---------------- */
let quiz = { category: "Java", index: 0, answers: [], finished: false };
function renderQuizzes() {
  $("#quizCategories").innerHTML = Object.keys(QUIZ_BANK).map((c) => `<button class="chip ${c === quiz.category ? "active" : ""}" data-quiz="${c}">${c}</button>`).join("");
  renderQuizQuestion();
  $("#quizHistory").innerHTML = state.quizScores.length
    ? state.quizScores.slice().reverse().map((s) => `<li><span>${s.category} · ${s.date}</span><strong>${s.score}/${s.total} (${s.pct}%)</strong></li>`).join("")
    : `<li class="muted">No quiz attempts yet.</li>`;
}
function renderQuizQuestion() {
  const qs = QUIZ_BANK[quiz.category];
  if (quiz.finished) {
    const correct = qs.filter((q, i) => quiz.answers[i] === q[2]).length;
    $("#quizArea").innerHTML = `<div class="quiz-result"><h2>Quiz Completed!</h2>
      <div class="score">${correct} / ${qs.length}</div>
      <p>Percentage: <strong>${Math.round((correct / qs.length) * 100)}%</strong></p>
      <p>Correct Answers: ${correct} · Wrong Answers: ${qs.length - correct}</p>
      <button class="btn primary" id="retryQuiz">Retry Quiz</button></div>`;
    return;
  }
  const [question, options] = qs[quiz.index];
  $("#quizArea").innerHTML = `
    <p class="muted small">${quiz.category} Quiz · Question ${quiz.index + 1} of ${qs.length}</p>
    <div class="progress" style="margin:8px 0 16px"><div class="progress-fill" style="width:${((quiz.index + 1) / qs.length) * 100}%"></div></div>
    <h3>${escapeHTML(question)}</h3>
    <div class="options">${options.map((o, i) => `<button class="option ${quiz.answers[quiz.index] === i ? "selected" : ""}" data-option="${i}">${String.fromCharCode(65 + i)}. ${escapeHTML(o)}</button>`).join("")}</div>
    <div class="quiz-nav">
      <button class="btn ghost" id="quizPrev" ${quiz.index === 0 ? "disabled" : ""}>← Previous</button>
      ${quiz.index < qs.length - 1 ? `<button class="btn primary" id="quizNext">Next →</button>` : `<button class="btn success" id="quizSubmit">Submit Quiz</button>`}
    </div>`;
}
function submitQuiz() {
  const qs = QUIZ_BANK[quiz.category];
  const unanswered = qs.length - quiz.answers.filter((a) => a !== undefined).length;
  if (unanswered && !confirm(`${unanswered} question(s) unanswered. Submit anyway?`)) return;
  const score = qs.filter((q, i) => quiz.answers[i] === q[2]).length;
  state.quizScores.push({ category: quiz.category, score, total: qs.length, pct: Math.round((score / qs.length) * 100), date: new Date().toLocaleDateString("en-GB") });
  saveState();
  quiz.finished = true;
  showToast(`Quiz submitted: ${score}/${qs.length}`);
  renderQuizzes();
}

/* ---------------- 14. CERTIFICATES ---------------- */
function certificateHTML(course) {
  const score = 80 + (course.id * 7) % 18;
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return `<div class="certificate">
      <h3>Certificate of Completion</h3><p>This is to certify that</p>
      <p class="cert-name">${escapeHTML(state.profile.name)}</p>
      <p>has successfully completed</p><p><strong>${course.name}</strong></p>
      <p>with a score of ${score}%.</p><p class="muted small">Date: ${date} · LearnSphere</p></div>`;
}
function renderCertificates() {
  const done = state.enrolled.filter((id) => courseProgress(id) === 100).map(getCourse);
  $("#certGrid").innerHTML = done.length ? done.map((c) => `<div>${certificateHTML(c)}
      <div class="btn-row" style="margin-top:10px;justify-content:center">
        <button class="btn ghost sm" data-viewcert="${c.id}">View Certificate</button>
        <button class="btn primary sm" data-printcert="${c.id}">Download Certificate</button></div></div>`).join("")
    : `<p class="empty">Complete a course to earn your first certificate.</p>`;
}
function printCertificate(id) {
  const area = document.createElement("div");
  area.id = "printArea";
  area.innerHTML = certificateHTML(getCourse(id));
  document.body.appendChild(area);
  window.print();
  area.remove();
}

/* ---------------- 15. STUDY SCHEDULE ---------------- */
function renderSchedule() {
  $("#scheduleGrid").innerHTML = DAYS.map((day) => {
    const slots = state.schedule.filter((s) => s.day === day).sort((a, b) => a.start.localeCompare(b.start));
    return `<div class="day-card"><h4>${day}</h4>
      ${slots.length ? slots.map((s) => `<div class="slot"><strong>${formatTime(s.start)} – ${formatTime(s.end)}</strong><br>${escapeHTML(s.subject)}: ${escapeHTML(s.topic)}
        <div class="slot-actions"><button data-editslot="${s.id}">Edit</button><button class="del" data-delslot="${s.id}">Delete</button></div></div>`).join("")
        : `<p class="muted small">No sessions planned.</p>`}</div>`;
  }).join("");
}
function openScheduleModal(id) {
  const s = state.schedule.find((x) => x.id === Number(id)) || { day: "Monday", subject: "", topic: "", start: "10:00", end: "11:00" };
  openModal(`<h3>${id ? "Edit" : "Add"} Schedule</h3>
    <form id="scheduleForm" data-id="${id || ""}">
      <label>Day<select id="schDay">${DAYS.map((d) => `<option ${d === s.day ? "selected" : ""}>${d}</option>`).join("")}</select></label>
      <label>Subject<input id="schSubject" required value="${escapeHTML(s.subject)}" /></label>
      <label>Topic<input id="schTopic" required value="${escapeHTML(s.topic)}" /></label>
      <label>Start Time<input type="time" id="schStart" required value="${s.start}" /></label>
      <label>End Time<input type="time" id="schEnd" required value="${s.end}" /></label>
      <button class="btn primary" type="submit">Save</button>
    </form>`);
}

/* ---------------- 16. PROFILE ---------------- */
function renderProfile() {
  const p = state.profile;
  $("#profileName").textContent = p.name;
  $("#profileDegree").textContent = p.degree;
  $("#profileAvatar").textContent = p.name.charAt(0).toUpperCase();
  $("#profileInfo").innerHTML = [["Email", p.email], ["Phone", p.phone], ["College", p.college], ["Department", p.department], ["Graduation Year", p.year]]
    .map(([k, v]) => `<div><span>${k}</span>${escapeHTML(v)}</div>`).join("");
}
function updateHeaderProfile() {
  const first = state.profile.name.split(" ")[0];
  $("#headerName").textContent = first;
  $("#headerAvatar").textContent = first.charAt(0).toUpperCase();
  $$(".studentFirstName").forEach((el) => (el.textContent = first));
}
function openProfileModal() {
  const p = state.profile;
  const field = (id, label, val, type = "text") => `<label>${label}<input id="${id}" type="${type}" required value="${escapeHTML(val)}" /></label>`;
  openModal(`<h3>Edit Profile</h3><form id="profileForm">
    ${field("pfName", "Name", p.name)}${field("pfEmail", "Email", p.email, "email")}${field("pfPhone", "Phone", p.phone)}
    ${field("pfCollege", "College", p.college)}${field("pfDept", "Department", p.department)}
    <button class="btn primary" type="submit">Save Changes</button></form>`);
}

/* ---------------- 17. SETTINGS & DARK MODE ---------------- */
function applyTheme() {
  document.body.classList.toggle("dark", state.dark);
  $("#themeToggle").textContent = state.dark ? "☀️" : "🌙";
}
function renderSettings() {
  $("#setDark").checked = state.dark;
  $("#setEmail").checked = state.settings.email;
  $("#setAssign").checked = state.settings.assign;
  $("#setUpdates").checked = state.settings.updates;
  $("#setLanguage").value = state.settings.language;
}

/* ---------------- 18. NOTIFICATIONS ---------------- */
function addNotification(text) {
  state.notifications.unshift({ id: Date.now(), text, read: false });
  saveState();
  renderNotifications();
}
function renderNotifications() {
  const unread = state.notifications.filter((n) => !n.read).length;
  $("#notifCount").textContent = unread;
  $("#notifCount").classList.toggle("hidden", unread === 0);
  $("#notifList").innerHTML = state.notifications.map((n) => `<li class="${n.read ? "" : "unread"}" data-notif="${n.id}">${escapeHTML(n.text)}</li>`).join("") || `<li>No notifications</li>`;
}

/* ---------------- 19. GLOBAL SEARCH ---------------- */
function handleGlobalSearch() {
  const q = $("#globalSearch").value.toLowerCase().trim();
  const box = $("#searchResults");
  if (!q) { box.classList.add("hidden"); return; }
  const results = [];
  COURSES.forEach((c) => {
    if (c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) results.push({ label: `📚 ${c.name}`, id: c.id });
    allLessons(c).forEach((l) => { if (l.toLowerCase().includes(q)) results.push({ label: `📖 ${l} — ${c.name}`, id: c.id }); });
  });
  box.innerHTML = results.length ? results.slice(0, 8).map((r) => `<button data-open="${r.id}">${escapeHTML(r.label)}</button>`).join("") : `<p class="muted" style="padding:12px">No results found</p>`;
  box.classList.remove("hidden");
}

/* ---------------- 20. LOGIN / LOGOUT ---------------- */
function logout() {
  if (!confirm("Are you sure you want to logout?")) return;
  state.loggedIn = false;
  saveState();
  $("#profileDropdown").classList.add("hidden");
  $("#loginPage").classList.remove("hidden");
  showToast("Logged out successfully", "info");
}

/* ---------------- 21. EVENT LISTENERS ---------------- */
function setupEvents() {
  // Sidebar navigation
  $$(".nav-link[data-page]").forEach((btn) => btn.addEventListener("click", () => showPage(btn.dataset.page)));
  $("#sidebarLogout").addEventListener("click", logout);
  $("#dropdownLogout").addEventListener("click", logout);
  $("#menuToggle").addEventListener("click", () => { $("#sidebar").classList.add("open"); $("#overlay").classList.add("show"); });
  $("#overlay").addEventListener("click", closeSidebar);
  $("#backBtn").addEventListener("click", () => showPage(previousPage));

  // Header dropdowns
  $("#profileBtn").addEventListener("click", (e) => { e.stopPropagation(); $("#notifPanel").classList.add("hidden"); $("#profileDropdown").classList.toggle("hidden"); });
  $("#notifBtn").addEventListener("click", (e) => { e.stopPropagation(); $("#profileDropdown").classList.add("hidden"); $("#notifPanel").classList.toggle("hidden"); });
  $("#markAllRead").addEventListener("click", (e) => { e.stopPropagation(); state.notifications.forEach((n) => (n.read = true)); saveState(); renderNotifications(); });
  $("#msgBtn").addEventListener("click", () => showToast("You have no new messages", "info"));
  $("#themeToggle").addEventListener("click", () => { state.dark = !state.dark; saveState(); applyTheme(); renderSettings(); });

  // Global search
  $("#globalSearch").addEventListener("input", handleGlobalSearch);

  // Explore filters
  $("#exploreSearch").addEventListener("input", renderExplore);
  $("#difficultyFilter").addEventListener("change", renderExplore);
  $("#sortSelect").addEventListener("change", renderExplore);

  // Settings
  $("#setDark").addEventListener("change", (e) => { state.dark = e.target.checked; saveState(); applyTheme(); });
  [["#setEmail", "email"], ["#setAssign", "assign"], ["#setUpdates", "updates"]].forEach(([sel, key]) =>
    $(sel).addEventListener("change", (e) => { state.settings[key] = e.target.checked; saveState(); showToast("Preference saved"); }));
  $("#setLanguage").addEventListener("change", (e) => { state.settings.language = e.target.value; saveState(); showToast(`Language set to ${e.target.value}`); });
  $("#changePwBtn").addEventListener("click", () => openModal(`<h3>Change Password</h3><form id="pwForm">
      <label>Current Password<input type="password" required /></label>
      <label>New Password<input type="password" id="pwNew" required minlength="6" /></label>
      <label>Confirm Password<input type="password" id="pwConfirm" required minlength="6" /></label>
      <button class="btn primary" type="submit">Update Password</button></form>`));
  $("#resetDataBtn").addEventListener("click", () => {
    if (!confirm("Reset all progress and data?")) return;
    localStorage.removeItem(STORE_KEY); state = defaultState(); saveState();
    applyTheme(); updateHeaderProfile(); renderNotifications(); showPage("dashboard"); showToast("All data reset", "warning");
  });

  // Other buttons
  $("#editProfileBtn").addEventListener("click", openProfileModal);
  $("#addScheduleBtn").addEventListener("click", () => openScheduleModal());
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  // Login
  $("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.loggedIn = true; saveState();
    $("#loginPage").classList.add("hidden");
    showPage("dashboard");
    showToast(`Welcome back, ${state.profile.name.split(" ")[0]}!`);
  });

  // Delegated click handler for dynamic content
  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, h4, li");
    if (!e.target.closest(".dropdown-wrap")) { $("#profileDropdown").classList.add("hidden"); $("#notifPanel").classList.add("hidden"); }
    if (!e.target.closest(".search-wrap")) $("#searchResults").classList.add("hidden");
    if (!t) return;
    const d = t.dataset;
    if (d.goto) { showPage(d.goto); $("#profileDropdown").classList.add("hidden"); }
    else if (d.enroll) enrollCourse(d.enroll);
    else if (d.open) { openCourse(d.open); $("#searchResults").classList.add("hidden"); $("#globalSearch").value = ""; }
    else if (d.filter) { myCourseFilter = d.filter; $$("#myCourseFilters .chip").forEach((c) => c.classList.toggle("active", c === t)); renderMyCourses(); }
    else if (d.cat) { exploreCategory = d.cat; renderExplore(); }
    else if (d.lesson !== undefined) {
      if (!isEnrolled(openCourseId)) return showToast("Enroll to access lessons", "warning");
      state.currentLesson[openCourseId] = Number(d.lesson); saveState(); renderCourseDetail();
    }
    else if (d.submit) openSubmitModal(d.submit);
    else if (d.quiz) { quiz = { category: d.quiz, index: 0, answers: [], finished: false }; renderQuizzes(); }
    else if (d.option !== undefined) { quiz.answers[quiz.index] = Number(d.option); renderQuizQuestion(); }
    else if (d.viewcert) openModal(certificateHTML(getCourse(d.viewcert)));
    else if (d.printcert) printCertificate(d.printcert);
    else if (d.editslot) openScheduleModal(d.editslot);
    else if (d.delslot) { if (confirm("Delete this session?")) { state.schedule = state.schedule.filter((s) => s.id !== Number(d.delslot)); saveState(); renderSchedule(); showToast("Session deleted", "info"); } }
    else if (d.notif) { const n = state.notifications.find((x) => x.id === Number(d.notif)); if (n) { n.read = true; saveState(); renderNotifications(); } }

    // Buttons with IDs rendered dynamically
    switch (t.id) {
      case "prevLesson": state.currentLesson[openCourseId]--; saveState(); renderCourseDetail(); break;
      case "nextLesson": state.currentLesson[openCourseId]++; saveState(); renderCourseDetail(); break;
      case "markComplete": toggleLessonComplete(); break;
      case "saveNotes": state.notes[openCourseId + "-" + state.currentLesson[openCourseId]] = $("#lessonNotes").value; saveState(); showToast("Notes saved"); break;
      case "quizPrev": quiz.index--; renderQuizQuestion(); break;
      case "quizNext": quiz.index++; renderQuizQuestion(); break;
      case "quizSubmit": submitQuiz(); break;
      case "retryQuiz": quiz = { category: quiz.category, index: 0, answers: [], finished: false }; renderQuizQuestion(); break;
    }
  });

  // Delegated form submissions (modal forms)
  document.addEventListener("submit", (e) => {
    const f = e.target;
    if (f.id === "loginForm") return;
    e.preventDefault();
    if (f.id === "submitForm") {
      const a = state.assignments.find((x) => x.id === Number(f.dataset.id));
      a.status = "Submitted"; a.text = $("#subText").value; a.file = $("#subFile").value;
      saveState(); closeModal(); renderAssignments(); showToast("Assignment submitted successfully");
    } else if (f.id === "scheduleForm") {
      const data = { day: $("#schDay").value, subject: $("#schSubject").value, topic: $("#schTopic").value, start: $("#schStart").value, end: $("#schEnd").value };
      if (data.end <= data.start) return showToast("End time must be after start time", "error");
      if (f.dataset.id) Object.assign(state.schedule.find((s) => s.id === Number(f.dataset.id)), data);
      else state.schedule.push({ id: Date.now(), ...data });
      saveState(); closeModal(); renderSchedule(); showToast("Schedule saved");
    } else if (f.id === "profileForm") {
      Object.assign(state.profile, { name: $("#pfName").value, email: $("#pfEmail").value, phone: $("#pfPhone").value, college: $("#pfCollege").value, department: $("#pfDept").value });
      saveState(); closeModal(); renderProfile(); updateHeaderProfile(); showToast("Profile updated");
    } else if (f.id === "pwForm") {
      if ($("#pwNew").value !== $("#pwConfirm").value) return showToast("Passwords do not match", "error");
      closeModal(); showToast("Password updated");
    }
  });
}

/* ---------------- 22. INITIALISE ---------------- */
function init() {
  applyTheme();
  updateHeaderProfile();
  renderNotifications();
  setupEvents();
  if (!state.loggedIn) $("#loginPage").classList.remove("hidden");
  showPage("dashboard");
}
document.addEventListener("DOMContentLoaded", init);
