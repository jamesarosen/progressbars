if ( typeof(Ember) !== 'undefined' ) {

  Ember.ProgressBars = Ember.ProgressBars || {};
  var PB = window.ProgressBar;

  Ember.ProgressBars.Bar = Ember.View.extend({
    classNames: 'progress',

    template: PB.barTemplate,

    percent: 0,
    status: undefined,

    percentDidChange: Ember.observer(function() {
      var percent = this.get('percent') || 0;
      this.$('.bar').css('width', percent + "%");
    }, 'percent'),

    statusClass: Ember.computed(function() {
      return PB.statusClass( this.get('status') );
    }).property('status').cacheable(),

    // This is more annoying than doing the same thing in a template,
    // but it eliminates a dependency on the Handlebars compiler at
    // runtime.
    statusClassWillChange: Ember.beforeObserver(function() {
      this.$('.bar').removeClass(this.get('statusClass'));
    }, 'statusClass'),

    statusClassDidChange: Ember.observer(function() {
      this.$('.bar').addClass(this.get('statusClass'));
    }, 'statusClass')
  });

}