window.ApptApp = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "appointments/:id": "show"
  },

  initialize: function(){
    console.log("<==== Calling initialize ====>");
    this.appointmentItems = new AppointmentItems();
    this.appointmentsView = new AppointmentsView({collection: this.appointmentItems});
    this.appointmentsView.render();
  },

  index: function(){
    console.log("<==== Calling index ====>");
    $('#app').html(this.appointmentsView.el);
    this.appointmentItems.fetch();

    // this.appointmentItems.fetch({
    //     success: function(m,r){
    //       console.log("success");
    //       console.log(r); // => 2 (collection have been populated)
    //     },
    //     error: function(m,r) {
    //       console.log("error");
    //       console.log(r.responseText);
    //     }
    // });
    
  },

  start: function(){
    console.log("<==== Calling start === >");
    Backbone.history.start();
  },

  show: function(id){
    console.log("<====== Calling show ====>");
    this.appointmentItems.focusOnAppointmentItem(id);
  }

}));