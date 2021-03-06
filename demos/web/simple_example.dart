// Copyright (c) 2017, jimmyff. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'package:cellular_automata/cellular_automata.dart';
import 'package:cellular_automata/rules.dart';

import 'package:cellular_automata_web/renderer_canvas.dart';

// Simple example of using cellular_automata
void main() {
  Logger.root.level = Level.ALL;
  Logger.root.onRecord.listen((LogRecord rec) {
    print(
        '${rec.level.name}: ${rec.time.hour}:${rec.time.minute}:${rec.time.second}: ${rec.message}');
  });
  // configure the palette
  final palette = new Map<GameOfLifeStates, String>.from({
    GameOfLifeStates.dead: '#000',
    GameOfLifeStates.deadUnderPopulated: '#483D8B',
    GameOfLifeStates.deadOverPopulated: '#00008B',
    GameOfLifeStates.alive: '#FF69B4',
    GameOfLifeStates.aliveBorn: '#FFC0CB',
  });

  final int width = 64;
  final int height = 64;

  final scene = new Scene<String>(width: width, height: height, fpsTarget: 15);

  final renderer = new CanvasRenderer(width: width, height: height)
    ..initCanvas(
        canvas: querySelector('#canvas'),
        canvasWidth: 512,
        canvasHeight: 512,
        paintFullSize: true);

  scene
    ..onPrepare.listen((int count) {
      scene
        ..clearAutomata()
        ..addAutomaton(
            automaton: new Automaton<GameOfLifeStates, String>(
          width: width,
          height: height,
          palette: palette,
          defaultState: GameOfLifeStates.dead,
          wrap: true,
          rules: new GameOfLife(),
        )..applyGenerator(new MathematicalGenerator<GameOfLifeStates>(
                type: MathematicalGenerators.random,
                valueTrue: GameOfLifeStates.alive,
                valueFalse: GameOfLifeStates.dead)));
    })
    ..onPaint.listen(renderer.render)
    ..onComplete.listen((SceneCompleteReason s) {
      scene
        ..stop()
        ..start();
    });

  // attach controls
  final ButtonElement back = querySelector('#controls_back');
  final ButtonElement pause = querySelector('#controls_pause');
  final ButtonElement play = querySelector('#controls_play');
  final ButtonElement forward = querySelector('#controls_forward');

  pause.onClick.listen((e) => scene.pause());
  play.onClick.listen((e) => scene.resume());
  back.onClick.listen((e) => scene.stepBack());
  forward.onClick.listen((e) => scene.stepForward());

  scene.start();
}
