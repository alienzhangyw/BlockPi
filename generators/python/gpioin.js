'use strict';

goog.provide('Blockly.Python.gpioin');

goog.require('Blockly.Python');

Blockly.Python['gpio_devices_in'] = function(block) {
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['gpio_input_digital'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + ' = DigitalInputDevice(' + value_pin + ')\n';
  return code;
};

Blockly.Python['gpio_input_smoothed'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + ' = SmoothedInputDevice(' + value_pin + ')\n';
  return code;
};

Blockly.Python['gpio_button'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_button = Blockly.Python.valueToCode(block, 'button', Blockly.Python.ORDER_NONE);
  var code = value_button + ' = Button(' + value_pin + ')\n';
  return code;
};

Blockly.Python['gpio_linesensor'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_linesensor = Blockly.Python.valueToCode(block, 'linesensor', Blockly.Python.ORDER_NONE);
  var code = value_linesensor + ' = LineSensor(' + value_pin + ')\n';
  return code;
};

Blockly.Python['gpio_motionsensor'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_motionsensor = Blockly.Python.valueToCode(block, 'motionsensor', Blockly.Python.ORDER_NONE);
  var code = value_motionsensor + ' = MotionSensor(' + value_pin + ')\n';
  return code;
};

Blockly.Python['gpio_lightsensor'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_lightsensor = Blockly.Python.valueToCode(block, 'lightsensor', Blockly.Python.ORDER_NONE);
  var code = value_lightsensor + ' = LightSensor(' + value_pin + ')\n';
  return code;
};

Blockly.Python['gpio_distancesensor'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_echo = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_NONE);
  var value_trigger = Blockly.Python.valueToCode(block, 'trigger', Blockly.Python.ORDER_NONE);
  var value_distancesensor = Blockly.Python.valueToCode(block, 'distancesensor', Blockly.Python.ORDER_NONE);
  var code = value_distancesensor + ' = DistanceSensor(' + value_echo + ', ' + value_trigger + ')\n';
  return code;
};

Blockly.Python['gpio_input_value'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.value';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['gpio_close_in'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.close()\n';
  return code;
};