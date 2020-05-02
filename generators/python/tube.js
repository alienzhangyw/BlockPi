'use strict';

goog.provide('Blockly.Python.tube');

goog.require('Blockly.Python');
goog.require('Blockly.Python.texts');

Blockly.Python['tube_initialize'] = function (block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  var clk = Blockly.Python.valueToCode(block, 'CLK', Blockly.Python.ORDER_NONE);
  var dio = Blockly.Python.valueToCode(block, 'DIO', Blockly.Python.ORDER_NONE);
  var device = Blockly.Python.valueToCode(block, 'Device', Blockly.Python.ORDER_NONE);
  var brightness = block.getFieldValue('Brightness');
  var dp = block.getFieldValue('DP') == 'TRUE';
  if (dp) {
    var code = device + ' = tm1637.TM1637Decimal(clk=' + clk + ', dio=' + dio +', brightness=' + brightness + ')\n';
  } else {
    var code = device + ' = tm1637.TM1637(clk=' + clk + ', dio=' + dio +', brightness=' + brightness + ')\n';
  };
  return code;
};

Blockly.Python['tube_brightness'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var brightness = block.getFieldValue('Brightness');
  return device + '.brightness(' + brightness + ')\n';
};

Blockly.Python['tube_write'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_NONE) || '\' \'';
  var pos = Blockly.Python.valueToCode(block, 'POS', Blockly.Python.ORDER_NONE);
  value = Blockly.Python.text.forceString_(value);
  var code = device + '.write(' + device + '.encode_string(' + value + '), pos=' + pos + ')\n';
  return code;
};

Blockly.Python['tube_number'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_NONE) || 0;
  return device + '.number(' + value + ')\n';
};

Blockly.Python['tube_numbers'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var value1 = Blockly.Python.valueToCode(block, 'Value1', Blockly.Python.ORDER_NONE) || 0;
  var colon = block.getFieldValue('Colon') == 'TRUE' ? 'True' : 'False';
  var value2 = Blockly.Python.valueToCode(block, 'Value2', Blockly.Python.ORDER_NONE) || 0;
  return device + '.numbers(' + value1 + ', ' + value2 + ', ' + colon + ')\n';
};

Blockly.Python['tube_temperature'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_NONE || 0);
  return device + '.temperature(' + value + ')\n';
};

Blockly.Python['tube_show'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_NONE) || '\'    \'';
  return device + '.show(' + value + ')\n';
};

Blockly.Python['tube_scroll'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  var value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_NONE);
  var delay = block.getFieldValue('Delay');
  return device + '.scroll(' + value + ', ' + delay + ')\n';
};

Blockly.Python['tube_clear'] = function(block) {
  var device = Blockly.Python.variableDB_.getName(block.getFieldValue('Device'), Blockly.Variables.NAME_TYPE);
  return device + '.show(\'    \')\n';
};