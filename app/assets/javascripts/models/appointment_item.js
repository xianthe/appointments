window.AppointmentItem = Backbone.Model.extend({
  toggleStatus: function(){
    var status;
    //console.log("Changing status:" + status);
    if(this.get('status') == 'incomplete'){
      //console.log("set to complete...");
      this.set({'status': 'complete'});
      status = 'complete';
    }
    else{
      //console.log("set to incomplete...");
      //this.set({'status': 'incomplete'});
      status = 'incomplete';
    }

    //console.log("calling save ===>");
    this.save(
    {'status' : status},
    {
      success: function(m,r){
        console.log("I am saved!");        
      },
      error: function(){
        console.log("Oh noes: ");
      }
    });
    console.log("After save.");

    //this.save({'status' : status });
  }
}); 

