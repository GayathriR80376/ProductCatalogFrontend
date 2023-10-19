// fetch ('api.php', {
//     method: 'POST',
//     body: formData1
// }).then(response => {
//     return response.text()
// }).then(response => {        
//    if (response === 'INVALIDauthentication') { 
//         loginStatus.hidden = false;            	
//     } else {                
//         loginStatus.hidden = true;
        // document.getElementById('loginModal').data-dismiss="modal";
    //    document.getElementById('loginModal').modal('hide');  
    //   **this is where I like to add code to hide the modal pupop**           	
//     }
// }
// )


$(document).ready(function() {             
    $('#loginModal').modal('show');
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    });