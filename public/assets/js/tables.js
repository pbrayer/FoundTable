$(function() {

    if($("#roundTable1").hasClass("tableRed")){
        $(this).attr("src","./assets/images/round-table-red-one.png");
    }

    if($("#roundTable2").hasClass("tableRed")){
        $(this).attr("src","./assets/images/round-table-red-two.png");
    }

    if($("#roundTable1").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/round-table-blue-one.png");
    }

    if($("#roundTable2").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/round-table-blue-two.png");
    }

    if($("#longTable1").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/long-table-blue-one.png");
    }

    if($("#longTable2").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/long-table-blue-two.png");
    }

    if($("#longTable1").hasClass("tableRed")){
        $(this).attr("src","./assets/images/long-table-red-one.png");
    }

    if($("#longTable2").hasClass("tableRed")){
        $(this).attr("src","./assets/images/long-table-red-two.png");
    }
    
    if($("#boothTable1").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/booth-table-blue-one.png");
    }

    if($("#boothTable2").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/booth-table-blue-two.png");
    }
    
    if($("#boothTable1").hasClass("tableRed")){
        $(this).attr("src","./assets/images/booth-table-red-one.png");
    }

    if($("#boothTable2").hasClass("tableBlue")){
        $(this).attr("src","./assets/images/booth-table-red-two.png");
    }
    
    $.get("/api/tables", function(data) {
        for(var i = 0; i < data.length; i++) {
            let x = i+1
        
           if(data[i].favorited == 0){ //Deciding which column the buttons will go to based on favorited state
            $("[data-id= " + x + "]").attr("class", "tableBlue");
           }
            else{
            $("[data-id= " + x + "]").attr("class", "tableRed");
            }
        }

        console.log(data)
    });
    

    $(document).on("click", ".tableBlue", function(){
        let id = $(this).data("id");
      console.log(id)
        let newTableState = {
          taken: 1
        };

          // Send the PUT request.
  $.ajax("/api/tables/" + id, {
    type: "PUT",
    data: newTableState
  }).then(
    function() {
      console.log("changed table status to taken");
      // Reload the page to get the updated list
      location.reload();
    }
  );
    });

        $(document).on("click", ".tableRed", function(){
          alert("Table is taken!");
        });

});