// Copyright (c) 2017, jimmyff. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'package:cellular_automata/cellular_automata.dart';
import 'package:cellular_automata/rules.dart';

import 'package:cellular_automata_web/renderer_stagexl.dart';

import 'package:stagexl/src/ui/color.dart';

// Simple example of using cellular_automata
void main() {
  Logger.root.level = Level.ALL;
  Logger.root.onRecord.listen((LogRecord rec) {
    print(
        '${rec.level.name}: ${rec.time.hour}:${rec.time.minute}:${rec.time.second}: ${rec.message}');
  });
  // configure the palette

  final palette = new Map<GameOfLifeStates, int>.from({
    GameOfLifeStates.dead: Color.Black,
    GameOfLifeStates.deadUnderPopulated: Color.DarkBlue,
    GameOfLifeStates.deadOverPopulated: Color.DarkSlateBlue,
    GameOfLifeStates.alive: Color.Pink,
    GameOfLifeStates.aliveBorn: Color.HotPink,
  });
  final int width = 128;
  final int height = 128;
  // Create the simulator object. This holds the world (the grid) and
  // the rules (the cellular automaton). It also controls the seeding & timing
  final scene = new Scene<int>(width: width, height: height, fpsTarget: 15);

  final renderer = new StageXLRenderer(width: width, height: height)
    ..initStageXL(
      canvas: querySelector('#canvas'),
      stageWidth: 512,
      stageHeight: 512,
      palette: palette.values.toList(growable: false),
    );
  scene
    ..onPrepare.listen((int count) {
      scene
        ..clearAutomata()
        ..addAutomaton(
            automaton: new Automaton<GameOfLifeStates, int>(
          width: width,
          height: height,
          palette: palette,
          defaultState: GameOfLifeStates.dead,
          wrap: true,
          rules: new GameOfLife(),
        )..applyGenerator(new MathematicalGenerator<GameOfLifeStates>(
                type: MathematicalGenerators.random,
                valueTrue: GameOfLifeStates.aliveBorn,
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
