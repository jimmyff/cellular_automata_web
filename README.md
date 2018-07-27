# cellular_automata_web

[![Pub Package Version](https://img.shields.io/pub/v/cellular_automata_web.svg)](https://pub.dartlang.org/packages/cellular_automata_web)
[![Latest Dartdocs](https://img.shields.io/badge/dartdocs-latest-blue.svg)](https://pub.dartlang.org/documentation/cellular_automata_web/latest)

Library containing various web renderers for the [cellular_automata](https://pub.dartlang.org/packages/cellular_automata) Dart package.

## Web demos

Play with the hosted [demos here](http://jimmyff.github.io/cellular_automata_web_demos). Source code is in the `demos/` [folder]((https://github.com/jimmyff/cellular_automata_web/tree/master/demos)).

## Renderers

- `CanvasRenderer` : HTML Canvas renderer, this is the recommended renderer for web.
- `StageXLRenderer` : WebGL renderer although in this context not quite as performant as Canvas.
- `HtmlTableRenderer` : A HTML table using table cells & css (just for fun!)