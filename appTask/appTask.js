function taskManager() {

  $("#add").on("click", function() {
    let newTask = $("#taskInput").val();
    $newListItem = $("<li></li>").text(newTask);
    $("#delete").on("click", function() {
      $newListItem.remove();
    });
    $("#list").append($newListItem);
  });
}

taskManager();
