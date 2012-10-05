//  Ember-Progressbars.js version 1.0.0
//  (c) 2012 James A. Rosen, Zendesk Inc.
//  Timecop.js is freely distributable under the Apache v2 License
//  For all details, documentation, and bug reports, see
//  http://github.com/jamesarosen/ember-progressbars
(function(){
(function() {var get = typeof(Ember) !== 'undefined' ?
            Ember.get :
            function get(obj, prop) { return obj[prop]; };

function containerTemplate(context) {
  return '<div class="progress">' +
            barTemplate(context) +
         '</div>';
}

function barTemplate(context) {
  var statusClass = get(context, 'statusClass'),
      percent     = get(context, 'percent'),
      styleAttr   = "style='" + widthStyle(percent) + "'";

  return "<div class='bar" +
                 (statusClass ? " " + statusClass : '') +
               "' " + styleAttr + "></div>";
}

function widthStyle(percent) {
  return 'width: ' + percent + '%;';
}

function ProgressBar(options) {
  $.extend(this, options);
  this.el = $( containerTemplate(this) );
}

$.extend(ProgressBar, {
  barTemplate: barTemplate,

  statusClass: function statusClass(status) {
    return status == null ? '' : 'bar-' + status;
  }
});

$.extend(ProgressBar.prototype, {
  percent: 0,
  currentStatus: null,

  // Update the ProgressBar's completion percentage.
  //
  //     bar.update( 50 ); // half-done
  update: function update(percent) {
    this.percent = percent;
    this.el.find('.bar').attr( 'style', widthStyle(percent) );
  },

  // Get or set the ProgressBar's status.
  //
  //     bar.status( 'foo' );
  //     bar.status(); // 'foo'
  status: function status(newStatus) {
    if ( newStatus === undefined ) { return this.currentStatus; }

    this.el.find('.bar').removeClass( this.statusClass() );
    this.currentStatus = newStatus;
    this.el.find('.bar').addClass( this.statusClass() );
  },

  statusClass: function() {
    return ProgressBar.statusClass( this.currentStatus );
  }
});

window.ProgressBar = ProgressBar;
}());
(function() {if ( typeof(Ember) !== 'undefined' ) {

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

}}());

}());