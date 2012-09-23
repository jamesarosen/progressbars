Ember.ProgressBars = Ember.ProgressBars || {};

Ember.ProgressBars.Bar = Ember.View.extend({
  template: Em.Handlebars.compile('<div class="bar" {{bindAttr class="statusClass"}}></div>'),

  percent: 0,
  status: undefined,

  init: function() {
    var classNames = this.get('classNames') || [];
    classNames.push('progress');
    this.set('classNames', classNames);
    return this._super.apply(this, arguments);
  },

  onPercentChange: function() {
    var percent = this.get('percent') || 0;
    this.$('.bar').css('width', "%@%".fmt(percent) );
  }.observes('percent'),

  statusClass: Ember.computed(function() {
    var status = this.get('status');
    return status == null ? '' : 'bar-%@'.fmt(status);
  }).property('status').cacheable()
});
