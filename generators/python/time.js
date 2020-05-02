'use strict';

goog.provide('Blockly.Python.time');

goog.require('Blockly.Python');

Blockly.Python['time_sleep'] = function (block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_NONE);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep(' + value_seconds + ')\n';
  return code;
};

Blockly.Python['time_stamp'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.time()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['time_struct'] = function(block) {
  var dropdown_struct = block.getFieldValue('struct');
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.localtime(time.time()).tm_' + dropdown_struct;
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['time_time'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.strftime("%H:%M:%S", time.localtime())';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['time_date'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.strftime("%Y-%m-%d", time.localtime())';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
