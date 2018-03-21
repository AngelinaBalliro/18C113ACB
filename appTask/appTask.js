function taskManager() {

  $("#add").on("click", function() {
    let newTask = $("#taskInput").val();
    $newListItem = $("<li></li>").text(newTask);
    let lastItem = $newListItem;
    $("#delete").on("click", function() {
      lastItem.remove(":last-of-type");
    });
    $("#list").append($newListItem);
  });
}

taskManager();
