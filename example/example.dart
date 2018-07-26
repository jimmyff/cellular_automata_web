// Copyright (c) 2017, jimmyff. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'package:cellular_automata/cellular_automata.dart';
import 'package:cellular_automata/rules.dart';

import 'package:cellular_automata_web/renderer_canvas.dart';

// Simple example of using cellular_automata with a web canvas renderer
// Include a canvas element in your html: <canvas id="canvas"></canvas>
void main() {
  final palette = new Map<GameOfLifeStates, String>.from({
    GameOfLifeStates.dead: '#000',
    GameOfLifeStates.deadUnderPopulated: '#483D8B',
    GameOfLifeStates.deadOverPopulated: '#00008B',
    GameOfLifeStates.alive: '#FF69B4',
    GameOfLifeStates.aliveBorn: '#FFC0CB',
  });
  const width = 64;
  const height = 64;

  final scene = new Scene<String>(width: width, height: height, fpsTarget: 15);

  // create the Cnvas renderer that will paint our scene
  final renderer = new CanvasRenderer(width: width, height: height)
    ..initCanvas(
        canvas: querySelector('#canvas'),
        canvasWidth: 512,
        canvasHeight: 512,
        paintFullSize: true);

  scene
    ..onPrepare.listen((int count) {
      // setup the scene
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
      // restart the scene when complete
      scene
        ..stop()
        ..start();
    })
    ..start();
}
