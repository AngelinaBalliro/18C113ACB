function taskManager() {

  $("#add").on("click", function() {
    let newTask = $("#taskInput").val();
    $newListItem = $("<li id=items></li>").text(newTask);
    let lastItem = $newListItem;
    $("#list").append($newListItem);
    $delete = $("<button type=button id=delete> Delete </button>");
    $delete.click(function() {
    lastItem.remove(":visible");
   });
		$newListItem.append($delete);
  });
}

taskManager();
