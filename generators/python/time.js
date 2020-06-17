/**
 * @license
 * Copyright 2020 Zhang Yiwei
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
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
