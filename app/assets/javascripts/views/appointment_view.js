window.AppointmentView = Backbone.View.extend({
  template: _.template('<h3 class="<%= status %>"><input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/> <%= description %> <a href="/#appointments/<%= id %>"></a></h3>'),
  //template: _.template('<h3><%= description %></h3>'),

  events: {
    'change input': 'toggleStatus'
  },

  intitalize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function(){
    var attributes = this.model.toJSON();
    console.log("This model: " + attributes);
    this.$el.html(this.template(this.model.toJSON()));
    //this.$el.html(this.template(attributes));
    return this;
  },

  remove: function(){
    this.$el.remove();
  },

  toggleStatus: function(){
    this.model.toggleStatus()
  }

});

