// Activity Data (Static JSON / Array)
let activities = [
  { id: 1, name: "Wake up early", completed: false },
  { id: 2, name: "Exercise", completed: false },
  { id: 3, name: "Study JavaScript", completed: false },
  { id: 4, name: "Build project", completed: false },
  { id: 5, name: "Read book", completed: false }
];

// Select Elements
const list = document.getElementById("activityList");
const progressText = document.getElementById("progress");

// Render Activities
function renderActivities() {
  list.innerHTML = "";

  activities.forEach(activity => {
    const li = document.createElement("li");

    li.textContent = activity.name;

    if (activity.completed) {
      li.classList.add("completed");
    }

    // Button
    const btn = document.createElement("button");
    btn.textContent = activity.completed ? "✔ Done" : "Mark Done";

    btn.onclick = () => toggleActivity(activity.id);

    li.appendChild(btn);
    list.appendChild(li);
  });

  updateProgress();
}

// Toggle Status
function toggleActivity(id) {
  activities = activities.map(activity => {
    if (activity.id === id) {
      return { ...activity, completed: !activity.completed };
    }
    return activity;
  });

  renderActivities();
}

// Update Progress
function updateProgress() {
  const completedCount = activities.filter(a => a.completed).length;
  const total = activities.length;

  progressText.textContent = `${completedCount} out of ${total} activities completed`;

  // Edge Case: All Completed
  if (completedCount === total) {
    progressText.textContent += " 🎉 All done!";
  }
}

// Initial Load
renderActivities();