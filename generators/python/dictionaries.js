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

goog.provide('Blockly.Python.dictionaries');

goog.require('Blockly.Python');

Blockly.Python['dictionaries_create_with'] = function (block) {
  // Create a dictionary with any number of elements of any type.
  var keys = new Array(block.itemCount_);
  var values = new Array(block.itemCount_);
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    keys[i] = Blockly.Python.quote_(block.getFieldValue('KEY' + i));
    values[i] = Blockly.Python.valueToCode(block, 'VALUE' + i,
      Blockly.Python.ORDER_NONE) || 'None';
    elements[i] = keys[i] + ': ' + values[i];
  }
  var code = '{' + elements.join(', ') + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['dictionaries_length'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE || '{}');
  return ['len(' + dict + ')', Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['dictionaries_create_with_list'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, 'KEYS', Blockly.Python.ORDER_NONE) || '[]';
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || 'None';
  return ['dict.fromkeys(' + keys + ', ' + value + ')', Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['dictionaries_isEmpty'] = function (block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE || '{}');
  var code = 'not len(' + dict + ')';
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

Blockly.Python['dictionaries_key_in'] = function(block) {
  var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE || '\'\'');
  var mode = block.getFieldValue('MODE');
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE || '{}');
  return [key + ' ' + mode + ' ' + dict, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.Python['dictionaries_update'] = function(block) {
  var dict1 = Blockly.Python.valueToCode(block, 'DICT1', Blockly.Python.ORDER_NONE || '{}');
  var dict2 = Blockly.Python.valueToCode(block, 'DICT2', Blockly.Python.ORDER_NONE || '{}');
  var code = dict1 + '.update(' + dict2 + ')\n';
  return code;
};

Blockly.Python['dictionaries_set_key'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE || '{}');
  var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE || '\'\'');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE || 'None');
  var code = dict + '[' + key + '] = ' + value + '\n';
  return code;
};

Blockly.Python['dictionaries_get_key'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE || '{}');
  var mode = block.getFieldValue('MODE');
  var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_NONE || '\'\'');
  if (mode == 'GET') {
    return [dict + '[' + key + ']', Blockly.Python.ORDER_MEMBER];
  } else if (mode == 'POP') {
    return [dict + '.pop(' + key + ')', Blockly.Python.ORDER_FUNCTION_CALL];
  } else if (mode == 'DEL') {
    return 'del ' + dict + '[' + key + ']\n';
  }
};

Blockly.Python['dictionaries_keys'] = function(block) {
  var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_NONE || '{}');
  var mode = block.getFieldValue('MODE');
  if (mode == 'KEY') {
    return ['list(' + dict + '.keys())', Blockly.Python.ORDER_FUNCTION_CALL];
  } else if (mode == 'VALUE') {
    return ['list(' + dict + '.values())', Blockly.Python.ORDER_FUNCTION_CALL];
  }
};