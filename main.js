const card = document.querySelector("#main");
const taskInput = document.querySelector("#task");
const addingBtn = document.querySelector("#add");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");
const collection = document.querySelector(".collection");

addingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (taskInput.value !== " ") {
    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.append(link);
    collection.append(li);

    link.addEventListener("click", function (e) {
      e.preventDefault();
      li.remove();
      console.log(li);
    });
  }
  taskInput.value = "";
});

clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //   collection.remove();
  document.querySelectorAll("li").forEach(function (i) {
    i.remove();
    filter.value = "";
  });
});

filter.addEventListener("keyup", function (e) {
  e.preventDefault();
  document.querySelectorAll("li").forEach(function (i) {
    if (i.textContent.indexOf(filter.value) !== -1) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
  });   
});
