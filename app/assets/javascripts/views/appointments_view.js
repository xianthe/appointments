window.AppointmentsView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  render: function(){
    console.log("Calling render for appointments view");
    this.addAll()
    return this;
  },

  addAll: function(){
    console.log("Calling add all");
    this.$el.empty();
    var size_coll = this.collection.size();
    console.log("sizeof collection: " + size_coll);
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(appointmentItem){
    var appointmentView = new AppointmentView({model: appointmentItem});
    this.$el.append(appointmentView.render().el);
    console.log("Rendering from addOne: ");
    console.log(appointmentView.render().el);
  }
});