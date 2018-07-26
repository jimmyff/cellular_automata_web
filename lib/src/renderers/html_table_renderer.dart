import 'dart:html';
import 'package:logging/logging.dart';
import 'package:cellular_automata/cellular_automata.dart';

final _log = new Logger('cellular_automata.renderers.html.table');

/// StageXL WebGL renderer for displaying CA on the web
class HtmlTableRenderer extends CARenderer {
  int _width;
  int _height;

  HtmlTableRenderer({int width, int height})
      : _width = width ?? 128,
        _height = height ?? 128;

  /// StageXL specific setup
  void initCanvas(
      {TableElement table,
      RendererDisplayMode displayMode = RendererDisplayMode.fixed,
      num tableWidth: 256,
      num tableHeight: 256,
      bool paintFullSize: false}) {
    _log.fine('Canvas: ${_width}x$_height (${tableWidth}x${tableHeight}px)');

    table.style.borderSpacing = '0px';

    // handle scaling
    switch (displayMode) {
      case RendererDisplayMode.fixed:
        break;
      case RendererDisplayMode.fullscreen:
        table.style
          ..width = '100%'
          ..height = '100%'
          ..position = 'fixed'
          ..top = '0px'
          ..left = '0px'
          ..right = '0px'
          ..bottom = '0px';
        break;
    }

    for (num y = 0; y < _height; y++) {
      final row = new TableRowElement();
      for (num x = 0; x < _width; x++) {
        _cellMap['c${x}x$y'] = new TableCellElement()..id = 'c${x}x$y';
        row.append(_cellMap['c${x}x$y']);
      }
      table.append(row);
    }
  }

  final Map<String, TableCellElement> _cellMap = {};

  @override
  void render<T>(CellGrid<T> renderData) {
    for (num x = 0; x < renderData.width; x++)
      for (num y = 0; y < renderData.height; y++) {
        final color = renderData.get(x, y);
        if (color == null) continue; // Patches pass nulls if no change
        _cellMap['c${x}x$y'].style.backgroundColor = color.toString();
      }
  }
}
