# cellular_automata_web

Library containing various web renderers for the [cellular_automata](https://pub.dartlang.org/packages/cellular_automata) Dart package.

## Web demos

Play with the hosted [demos here](http://jimmyff.github.io/cellular_automata_web_demos). Source code is in the `demos/` [folder]((https://github.com/jimmyff/cellular_automata_web/tree/master/demos)).

## Renderers

- `CanvasRenderer` : HTML Canvas renderer, this is the recommended renderer for web.
- `StageXLRenderer` : WebGL renderer although in this context not quite as performant as Canvas.
- `HtmlTableRenderer` : A HTML table using table cells & css (just for fun!)