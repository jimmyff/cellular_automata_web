// Copyright (c) 2017, jimmyff. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:async';
import 'dart:html';

import 'package:logging/logging.dart';
// import 'package:params/client.dart';

import 'package:cellular_automata/cellular_automata.dart';
import 'package:cellular_automata/rules.dart';
import 'package:cellular_automata/rules_mcell.dart';

import 'package:cellular_automata_web/renderer_canvas.dart';

Map initParams() {
  final params = <String, String>{};
  if (window.location.search != "") {
    final List<String> s1 =
        window.location.search.replaceFirst("?", "").split("&");

    for (var i = 0, l = s1.length; i < l; i++) {
      final List<String> pairList = s1[i].split("=");
      params[pairList[0]] = pairList[1];
    }
  }
  //addlocationToParams(window.location);
  return params;
}

Automaton automatonBasedOnParams(Map params, int width, int height) {
  final List<String> gens = [];
  for (var gen in MathematicalGenerators.values)
    gens.add(gen.toString().substring(gen.toString().indexOf('\.') + 1));

  if (params.containsKey('generator') && !gens.contains(params['generator']))
    throw new Exception('Unknown generator: "${params['generator']}"');

  final generatorType = params.containsKey('generator')
      ? MathematicalGenerators.values[gens.indexOf(params['generator'])]
      : (new List.from(MathematicalGenerators.values)..shuffle()).first;

  print(generatorType);
  switch (params['rules'] ?? 'game_of_life') {
    case 'majority_vote':
      return new Automaton<bool, String>(
          rules: MajorityVote(),
          width: width,
          height: height,
          defaultState: false,
          wrap: true,
          palette:
              new Map<bool, String>.from({false: '#000000', true: '#FFFE01'}))
        ..applyGenerator(new MathematicalGenerator<bool>(
            type: generatorType, valueTrue: true, valueFalse: false));

    case 'brians_brain':
      return new Automaton<BriansBrainStates, String>(
          rules: new BriansBrain(),
          width: width,
          height: height,
          defaultState: BriansBrainStates.dead,
          wrap: true,
          palette: new Map<BriansBrainStates, String>.from({
            BriansBrainStates.dead: '#556B2F',
            BriansBrainStates.dying: '#FF4500',
            BriansBrainStates.living: '#FFA500',
          }))
        ..applyGenerator(new MathematicalGenerator<BriansBrainStates>(
            type: generatorType,
            valueTrue: BriansBrainStates.living,
            valueFalse: BriansBrainStates.dead));

    case 'mcell_generations':
      return new Automaton<int, String>(
          rules: new MCellGenerations.fromConfigString(params['rules_config']),
          width: width,
          height: height,
          defaultState: 0,
          wrap: true,
          palette: new Map<int, String>.from({
            0: '#000000',
            1: '#A2EAF9',
            2: '#F5A2F9',
            3: '#D0DE34',
            4: '#C35E00',
            5: '#C3005F',
          }))
        ..applyGenerator(new MathematicalGenerator<int>(
            type: generatorType, valueTrue: 1, valueFalse: 0));

    case 'game_of_life_simple':
      return new Automaton<bool, String>(
          rules: new GameOfLifeSimple(),
          width: width,
          height: height,
          defaultState: false,
          wrap: true,
          palette: new Map<bool, String>.from({
            false: '#8B0000',
            true: '#ADFE2F',
          }))
        ..applyGenerator(new MathematicalGenerator<bool>(
            type: generatorType, valueTrue: true, valueFalse: false));

    case 'game_of_life':
      return new Automaton<GameOfLifeStates, String>(
          rules: new GameOfLife(),
          width: width,
          height: height,
          defaultState: GameOfLifeStates.dead,
          wrap: true,
          palette: new Map<GameOfLifeStates, String>.from({
            GameOfLifeStates.dead: '#0000FF',
            GameOfLifeStates.deadUnderPopulated: '#00008B',
            GameOfLifeStates.deadOverPopulated: '#8A2BE2',
            GameOfLifeStates.alive: '#FFFE01',
            GameOfLifeStates.aliveBorn: '#FEFEE0',
          }))
        ..applyGenerator(new MathematicalGenerator<GameOfLifeStates>(
            type: generatorType,
            valueTrue: GameOfLifeStates.alive,
            valueFalse: GameOfLifeStates.dead));

    default:
      throw new Exception('Unknown rules reference: ${params['rules']}');
  }
}

void main() {
  Logger.root.level = Level.ALL;
  Logger.root.onRecord.listen((LogRecord rec) {
    print(
        '${rec.level.name}: ${rec.time.hour}:${rec.time.minute}:${rec.time.second}: ${rec.message}');
  });

  final params = initParams();
  final renderSize = int.parse(params['render_size']);

  CanvasRenderer renderer;
  num canvasWidth;
  num canvasHeight;
  int automatonWidth;
  int automatonHeight;

  void calculateSizes() {
    canvasWidth = params['display'] == 'fullscreen'
        ? window.innerWidth
        : int.parse(params['width']) * renderSize;
    canvasHeight = params['display'] == 'fullscreen'
        ? window.innerHeight
        : int.parse(params['height']) * renderSize;

    automatonWidth = params['display'] == 'fullscreen'
        ? (window.innerWidth / renderSize).round()
        : int.parse(params['width']);
    automatonHeight = params['display'] == 'fullscreen'
        ? (window.innerHeight / renderSize).round()
        : int.parse(params['height']);
  }

  calculateSizes();

  switch (params['display']) {
    case 'fullscreen':
      renderer =
          new CanvasRenderer(width: automatonWidth, height: automatonHeight)
            ..initCanvas(
                canvas: querySelector('#canvas'),
                displayMode: RendererDisplayMode.fullscreen,
                canvasWidth: canvasWidth,
                canvasHeight: canvasHeight,
                paintFullSize: true);

      // TODO: this should stop current simulation
      // window.onResize.listen(_initSimulation);

      break;
    case 'fixed':
    default:
      renderer =
          new CanvasRenderer(width: automatonWidth, height: automatonHeight)
            ..initCanvas(
              canvas: querySelector('#canvas'),
              displayMode: RendererDisplayMode.fixed,
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
            );
  }

  final scene = new Scene<String>(
      width: automatonWidth,
      height: automatonHeight,
      fpsTarget: params.containsKey('fps') ? int.parse(params['fps']) : 30);

  scene
    ..onPrepare.listen((int count) {
      scene
        ..clearAutomata()
        ..addAutomaton(
            automaton: automatonBasedOnParams(
                params, automatonWidth, automatonHeight));
    })
    ..onPaint.listen(renderer.render)
    ..onComplete.listen((SceneCompleteReason s) {
      scene
        ..stop()
        ..start();
    })
    ..start();

  window.onResize.listen((_) async {
    await scene.stop();
    scene.clearAutomata();
    calculateSizes();
    final w = window.innerWidth;
    final h = window.innerHeight;
    await new Future.delayed(const Duration(seconds: 1));
    if (w == window.innerWidth && h == window.innerHeight) {
      scene
        ..width = automatonWidth
        ..height = automatonHeight
        ..start();
    }
    // scene.start();
  });
}
