var OldProgressBar = window.ProgressBar,
    get = typeof(Ember) !== 'undefined' ?
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
  noConflict: function() {
    window.ProgressBar = OldProgressBar;
    return ProgressBar;
  },

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
