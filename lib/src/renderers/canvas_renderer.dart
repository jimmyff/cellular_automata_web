import 'dart:html';
import 'package:logging/logging.dart';
import 'package:cellular_automata/cellular_automata.dart';

final _log = new Logger('cellular_automata.renderers.canvas');

/// StageXL WebGL renderer for displaying CA on the web
class CanvasRenderer extends CARenderer {
  int _width;
  int _height;
  int _cellWidth;
  int _cellHeight;
  CanvasElement _canvas;
  CanvasRenderingContext2D _ctx;

  CanvasRenderer({int width, int height})
      : _width = width ?? 128,
        _height = height ?? 128;

  /// StageXL specific setup
  void initCanvas(
      {CanvasElement canvas,
      RendererDisplayMode displayMode = RendererDisplayMode.fixed,
      num canvasWidth = 256,
      num canvasHeight = 256,
      bool paintFullSize = false}) {
    _log.fine('Canvas: ${_width}x$_height (${canvasWidth}x${canvasHeight}px)');

    _canvas = canvas
      ..width = paintFullSize ? canvasWidth : _width
      ..height = paintFullSize ? canvasHeight : _height;

    _cellWidth = paintFullSize ? (canvasWidth / _width).round() : 1;
    _cellHeight = paintFullSize ? (canvasHeight / _height).round() : 1;

    _ctx = _canvas.context2D;

    // handle scaling
    switch (displayMode) {
      case RendererDisplayMode.fixed:
        canvas.style
          ..imageRendering = 'pixelated'
          ..imageRendering = 'optimizespeed'
          ..width = '${canvasWidth}px'
          ..height = '${canvasHeight}px';
        break;
      case RendererDisplayMode.fullscreen:
        canvas.style
          ..imageRendering = 'pixelated'
          ..width = '100%'
          ..height = '100%'
          ..position = 'fixed'
          ..top = '0px'
          ..left = '0px'
          ..right = '0px'
          ..bottom = '0px';
        break;
    }
  }

  @override
  void render<T>(CellGrid renderData) {
    for (int x = 0; x < renderData.width; x++)
      for (int y = 0; y < renderData.height; y++) {
        final color = renderData.get(x, y);
        if (color == null) continue; // Patches pass nulls if no change
        _ctx
          ..fillStyle = renderData.get(x, y)
          ..fillRect(x * _cellWidth, y * _cellHeight, _cellWidth, _cellHeight);
      }
  }
}
