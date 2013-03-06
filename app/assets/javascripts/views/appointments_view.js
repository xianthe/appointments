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

  // testOne: function(appointmentItem){
  //   console.log("Testing");
  // },

  addAll: function(){
    console.log("Calling add all");
    this.$el.empty();
    var size_coll = this.collection.size();
    console.log("sizeof collection: " + size_coll);
    this.collection.forEach(this.addOne, this);
    // this.collection.forEach(this.testOne, this);
  },

  addOne: function(appointmentItem){
    var appointmentView = new AppointmentView({model: appointmentItem});
    this.$el.append(appointmentView.render().el);
  }
});