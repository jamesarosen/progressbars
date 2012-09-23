## Ember-Progressbars

This component provides Progressbar views for [Ember.js](http://emberjs.com/)
that are compatible with
[http://twitter.github.com/bootstrap/](Twitter-Bootstrap).

### Installation

With [http://twitter.github.com/bower/](Bower):

1. add "ember-progressbars" to your project's `component.json`
1. run `bower install`

### Usage

```handlebars
<h3>Progress:</h3>
{{view Em.Progressbars.Bar
       percentBinding="App.jobController.percentComplete"}}
```
