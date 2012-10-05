## Ember-ProgressBars

This component generates progress bars that are compatible with
[http://twitter.github.com/bootstrap/](Twitter-Bootstrap). It also includes
an optional [Ember.js](http://emberjs.com/) view class.

### Installation

With [http://twitter.github.com/bower/](Bower):

1. add "progressbars" to your project's `component.json`
1. run `bower install`

### Usage

#### Standalone

```javascript
// Create a ProgressBar:
var progressBar = new ProgressBar();

// Add it to the DOM:
progressBar.el.appendTo( 'body' );

// Move the bar to 50%:
progressBar.update( 50 );

// We've encountered an error:
progressBar.status( 'error' );
```

This will result in

```html
<div class="progress">
  <div class="bar bar-error" style="width: 50%;"></div>
</div>
```

#### With Ember

For examples, see [this Fiddle](http://jsfiddle.net/YQMWD/1/). The simplest
thing that will work:

```handlebars
<h3>Progress:</h3>
{{view Em.ProgressBars.Bar
       percentBinding="App.jobController.percentComplete"}}
```

```html
<h3>Progress:</h3>
<div class="progress">
  <div class="bar" style="width: 48%;"></div>
</div>
```

To add classes to the `.progress` container element (like `progress-striped` or
`active`), add them with `classNames`. The container *will retain* the
`.progress` class.

```handlebars
{{view Em.ProgressBars.Bar classNames="progress-striped" ...}}
```

```html
<div class="progress progress-striped">
  ...
</div>
```

Setting the "status" property on a `Bar` will cause the contained `.bar`
element to gain the class `.bar-{status}`:

```handlebars
{{view Em.ProgressBars.Bar status="warning" ...}}
```

```html
<div class="progress">
  <div class="bar bar-warning"...></div>
</div>
```
