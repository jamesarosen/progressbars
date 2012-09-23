Ember.ProgressBars = Ember.ProgressBars || {};

Ember.ProgressBars.Bar = Ember.View.extend({
  template: Em.Handlebars.compile('<div class="progress"><div class="bar"></div></div>')
});
