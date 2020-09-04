// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
      const id = $(this).data("id");
      const burgerstatus = $(this).data("burgerstatus");
  
      const burgerState = {
        devoured: burgerstatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: burgerstatus
      }).then(
        function() {
          console.log("changed sleep to", burgerState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });