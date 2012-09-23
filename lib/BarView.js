Ember.ProgressBars = Ember.ProgressBars || {};

Ember.ProgressBars.Bar = Ember.View.extend({
  template: Em.Handlebars.compile('<div class="bar"></div>'),

  percent: 0,

  init: function() {
    var classNames = this.get('classNames') || [];
    classNames.push('progress');
    this.set('classNames', classNames);
    return this._super.apply(this, arguments);
  },

  onPercentChange: function() {
    var percent = this.get('percent') || 0;
    this.$('.bar').css('width', "%@%".fmt(percent) );
  }.observes('percent')
});
