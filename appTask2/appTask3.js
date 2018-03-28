var key = "listValues"
var myTasks = [];

function config() {

  if(localStorage.getItem(key) !== null) {
    let myTasksString = localStorage.getItem(key);
    myTasks = JSON.parse(myTasksString);
    $(myTasks).each(function() {
      addTask(this);
    });
  }
  else {

  }

  $("#add").on("click", function() {
    let curVal = $("#taskInput").val()
    addTask(curVal);
    myTasks.push(curVal);
    updateStorage();
  });
}


function addTask(newTask) {
  $newTaskItem = $("<li></li>").text(newTask);
  $delete = $("<button type=button id=delete> Delete </button>");
  $("#list").append($newTaskItem);
  let lastItem = $newTaskItem;
  $("#list").append($delete);
  $delete.on("click", function() {
    deleteTask(this);
    deleteTask(lastItem);
  });
}

function deleteTask(taskItem) {
  let taskText = $(taskItem).text();
  let index = myTasks.indexOf(taskText);
  if(index != -1){
    myTasks.splice(index, 1);
    updateStorage();
  }
  $(taskItem).remove();
}

function updateStorage() {
  let myTasksString = JSON.stringify(myTasks);
  localStorage.setItem(key, myTasksString);
}

  $("#uberDelete").on("click", function() {
    $("#list").remove();
    updateStorage();
  }


$(function() {
  config();
});
