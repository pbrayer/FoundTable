$(function() {
    
    $.get("/api/tables", function(data) {
        for(var i = 0; i < data.length; i++) {
            let x = i+1

            

          if($("[data-id= " + x + "]").attr("class", "tableBlue") || $("[data-id= " + x + "]").attr("class", "tableRed")){
            $("[data-id= " + x + "]").attr("data-state", data[i].partySize);
          }
        
           if(data[i].taken == 0){ //Deciding which column the buttons will go to based on favorited state
            $("[data-id= " + x + "]").attr("class", "tableBlue");

              if($("[data-id= " + x + "]").is("#boothTable1")){
                $("[data-id= " + x + "]").attr("src","./assets/images/booth-table-blue-one.png");
              }

              if($("[data-id= " + x + "]").is("#boothTable2")){
                $("[data-id= " + x + "]").attr("src","./assets/images/booth-table-blue-two.png");
              }

              if($("[data-id= " + x + "]").is("#longTable1")){
                $("[data-id= " + x + "]").attr("src","./assets/images/long-table-blue-one.png");
              }

              if($("[data-id= " + x + "]").is("#longTable2")){
                $("[data-id= " + x + "]").attr("src","./assets/images/long-table-blue-two.png");
              }

              if($("[data-id= " + x + "]").is("#roundTable1")){
                $("[data-id= " + x + "]").attr("src","./assets/images/round-table-blue-one.png");
              }

              if($("[data-id= " + x + "]").is("#roundTable2")){
                $("[data-id= " + x + "]").attr("src","./assets/images/round-table-blue-two.png");
              }

           }
            else{
            $("[data-id= " + x + "]").attr("class", "tableRed");

             if($("[data-id= " + x + "]").is("#boothTable1")){
                $("[data-id= " + x + "]").attr("src","./assets/images/booth-table-red-one.png");
              }
              if($("[data-id= " + x + "]").is("#boothTable2")){
                $("[data-id= " + x + "]").attr("src","./assets/images/booth-table-red-two.png");
              }
              if($("[data-id= " + x + "]").is("#longTable1")){
                $("[data-id= " + x + "]").attr("src","./assets/images/long-table-red-one.png");
              }
              if($("[data-id= " + x + "]").is("#longTable2")){
                $("[data-id= " + x + "]").attr("src","./assets/images/long-table-red-two.png");
              }
              if($("[data-id= " + x + "]").is("#roundTable1")){
                $("[data-id= " + x + "]").attr("src","./assets/images/round-table-red-one.png");
              }
              if($("[data-id= " + x + "]").is("#roundTable2")){
                $("[data-id= " + x + "]").attr("src","./assets/images/round-table-red-two.png");
              }
            }
        }
        console.log(data)
    });
    

    $(document).on("click", ".tableBlue", function(){
       let tableSize = $(this).attr("data-state");

        if(sessionStorage.partySize <= tableSize){

        let id = $(this).data("id");
      console.log(id)

      $("#confirmText").text("You are about to reserve a table for " + sessionStorage.partySize + " people. Please confirm you have read our policy on cancellations.")

       $("#confirmModal").modal("toggle");

       $(document).on("click", "#confirm", function(){
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
        window.location.replace("https://foundtable.herokuapp.com/contact");
      }
    );
  });
}
else{
    $('#partySizeModal').modal('toggle');
}
    });

        $(document).on("click", ".tableRed", function(){
            $('#reservedModal').modal('toggle');
        });

});