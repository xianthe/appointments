window.AppointmentItems = Backbone.Collection.extend({
  model: AppointmentItem,
  url: '/appointments',

  initialize: function(){
    this.on('remove', this.hideModel, this);
  },

  hideModel: function(model){
    model.trigger('hide');
  },

  focusOnAppointmentItem: function(id){
    var modelsToRemove = this.filter(function(appointmentItem){
      return appointmentItem.id != id;
    });

    this.remove(modelsToRemove);
  }
})