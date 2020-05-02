'use strict';

goog.provide('Blockly.Python.sensehat');

goog.require('Blockly.Python');

Blockly.Python['sensehat_initialize'] = function (block) {
  if (block.getFieldValue('EMU') == 'TRUE') {
    Blockly.Python.definitions_['from_sense_emu_import_SenseHat'] = 'from sense_emu import SenseHat';
  } else Blockly.Python.definitions_['from_sense_hat_import_SenseHat'] = 'from sense_hat import SenseHat';
  var code = 'sense = SenseHat()\n';
  return code;
};

Blockly.Python['sensehat_set_rotation'] = function (block) {
  var dropdown_rotation = parseInt(block.getFieldValue('ROTATION'));
  var code = 'sense.set_rotation(' + dropdown_rotation + ')\n';
  return code;
};

Blockly.Python['sensehat_flip_h'] = function (block) {
  var code = 'sense.flip_h()\n';
  return code;
};

Blockly.Python['sensehat_flip_v'] = function (block) {
  var code = 'sense.flip_v()\n';
  return code;
};

Blockly.Python['sensehat_pixels'] = function (block) {
  var code = '['
  for (var i = 0; i < 64; i++) {
    var colour = block.getFieldValue(i.toString());
    var r = parseInt(colour.substr(1, 2), 16);
    var g = parseInt(colour.substr(3, 2), 16);
    var b = parseInt(colour.substr(5, 2), 16);
    code += '[' + r + ', ' + g + ', ' + b + '], ';
  }
  code = code.slice(0, -2) + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensehat_set_pixels'] = function (block) {
  var value_pixels = Blockly.Python.valueToCode(block, 'PIXELS', Blockly.Python.ORDER_NONE) || '[[0, 0, 0]] * 64';
  var code = 'sense.set_pixels(' + value_pixels + ')\n';
  return code;
};

Blockly.Python['sensehat_set_pixel'] = function (block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_colour = Blockly.Python.valueToCode(block, 'COLOUR', Blockly.Python.ORDER_ATOMIC);
  var r = parseInt(value_colour.substr(2, 2), 16);
  var g = parseInt(value_colour.substr(4, 2), 16);
  var b = parseInt(value_colour.substr(6, 2), 16);
  var code = 'sense.set_pixel(' + value_x + ', ' + value_y + ', ' + r + ', ' + g + ', ' + b + ')\n';
  return code;
};

Blockly.Python['sensehat_load_image'] = function (block) {
  var value_file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
  var code = 'sense.load_image(' + value_file + ')\n';
  return code;
};

Blockly.Python['sensehat_clear'] = function (block) {
  var value_colour = Blockly.Python.valueToCode(block, 'COLOUR', Blockly.Python.ORDER_ATOMIC);
  var r = parseInt(value_colour.substr(2, 2), 16);
  var g = parseInt(value_colour.substr(4, 2), 16);
  var b = parseInt(value_colour.substr(6, 2), 16);
  var code = 'sense.clear(' + r + ', ' + g + ', ' + b + ')\n';
  return code;
};

Blockly.Python['sensehat_show_message'] = function (block) {
  var value_message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var value_textcolour = Blockly.Python.valueToCode(block, 'TEXTCOLOUR', Blockly.Python.ORDER_ATOMIC);
  var tr = parseInt(value_textcolour.substr(2, 2), 16);
  var tg = parseInt(value_textcolour.substr(4, 2), 16);
  var tb = parseInt(value_textcolour.substr(6, 2), 16);
  var textcolour = '[' + tr + ', ' + tg + ', ' + tb + ']';
  var value_backcolour = Blockly.Python.valueToCode(block, 'BACKCOLOUR', Blockly.Python.ORDER_ATOMIC);
  var br = parseInt(value_backcolour.substr(2, 2), 16);
  var bg = parseInt(value_backcolour.substr(4, 2), 16);
  var bb = parseInt(value_backcolour.substr(6, 2), 16);
  var backcolour = '[' + br + ', ' + bg + ', ' + bb + ']';
  var code = 'sense.show_message(' + value_message + ', ' + value_speed + ', ' + textcolour + ', ' + backcolour + ')\n';
  return code;
};

Blockly.Python['sensehat_show_letter'] = function (block) {
  var value_letter = Blockly.Python.valueToCode(block, 'LETTER', Blockly.Python.ORDER_ATOMIC);
  var value_textcolour = Blockly.Python.valueToCode(block, 'TEXTCOLOUR', Blockly.Python.ORDER_ATOMIC);
  var tr = parseInt(value_textcolour.substr(2, 2), 16);
  var tg = parseInt(value_textcolour.substr(4, 2), 16);
  var tb = parseInt(value_textcolour.substr(6, 2), 16);
  var textcolour = '[' + tr + ', ' + tg + ', ' + tb + ']';
  var value_backcolour = Blockly.Python.valueToCode(block, 'BACKCOLOUR', Blockly.Python.ORDER_ATOMIC);
  var br = parseInt(value_backcolour.substr(2, 2), 16);
  var bg = parseInt(value_backcolour.substr(4, 2), 16);
  var bb = parseInt(value_backcolour.substr(6, 2), 16);
  var backcolour = '[' + br + ', ' + bg + ', ' + bb + ']';
  var code = 'sense.show_letter(' + value_letter + ', ' + textcolour + ', ' + backcolour + ')\n';
  return code;
};

Blockly.Python['sensehat_low_light'] = function (block) {
  var checkbox_low = (block.getFieldValue('LOW') == 'TRUE') ? 'True' : 'False';
  var code = 'sense.low_light = ' + checkbox_low + '\n';
  return code;
};

Blockly.Python['sensehat_get_humidity'] = function (block) {
  var code = 'sense.get_humidity()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_get_temperature'] = function (block) {
  var code = 'sense.get_temperature()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_get_pressure'] = function (block) {
  var code = 'sense.get_pressure()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_set_imu_config'] = function (block) {
  var checkbox_compass = (block.getFieldValue('COMPASS') == 'TRUE') ? 'True' : 'False';
  var checkbox_gyro = (block.getFieldValue('GYRO') == 'TRUE') ? 'True' : 'False';
  var checkbox_accel = (block.getFieldValue('ACCEL') == 'TRUE') ? 'True' : 'False';
  var code = 'sense.set_imu_config(' + checkbox_compass + ', ' + checkbox_gyro + ', ' + checkbox_accel + ')\n';
  return code;
};

Blockly.Python['sensehat_get_orientation'] = function (block) {
  var code = 'sense.get_orientation()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_get_compass'] = function (block) {
  var code = 'sense.get_compass()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_get_gyroscope'] = function (block) {
  var code = 'sense.get_gyroscope()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_get_accelerometer'] = function (block) {
  var code = 'sense.get_accelerometer_raw()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensehat_wait_for_event'] = function (block) {
  var code = 'event = sense.stick.wait_for_event()\n';
  return code;
};

Blockly.Python['sensehat_event_timestamp'] = function (block) {
  var code = 'event.timestamp';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['sensehat_event_direction'] = function (block) {
  var code = 'event.direction';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['sensehat_event_action'] = function (block) {
  var code = 'event.action';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['sensehat_get_events'] = function (block) {
  var code = 'sense.stick.get_events()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensehat_joystick_pushed'] = function (block) {
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    globals.push(Blockly.Python.variableDB_.getName(varName,
      Blockly.VARIABLE_CATEGORY_NAME));
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
      Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
    Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  var direction = block.getFieldValue('DIRECTION');
  var funcName = 'pushed_' + direction;
  var xfix1 = '';
  if (Blockly.Python.STATEMENT_PREFIX) {
    xfix1 += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, block);
  }
  if (Blockly.Python.STATEMENT_SUFFIX) {
    xfix1 += Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = Blockly.Python.prefixLines(xfix1, Blockly.Python.INDENT);
  }

  var branch = Blockly.Python.statementToCode(block, 'CODE');
  if (!branch) {
    branch = Blockly.Python.PASS;
  }
  var fcode = 'def ' + funcName + '(event):\n' +
    globals + xfix1 + branch;
  fcode = Blockly.Python.scrub_(block, fcode, true);
  Blockly.Python.definitions_['%' + funcName] = fcode;
  var code = 'sense.stick.direction_' + direction + ' = ' + funcName + '\n';
  return code;
};