Ember.ProgressBars = Ember.ProgressBars || {};

Ember.ProgressBars.Bar = Ember.View.extend({
  template: Em.Handlebars.compile('<div class="progress"><div class="bar"></div></div>'),
  percent: 0,
  onPercentChange: function() {
    var percent = this.get('percent') || 0;
    this.$('.bar').css('width', "%@%".fmt(percent) );
  }.observes('percent')
});
