'use strict';

goog.provide('Blockly.Python.gpioout');

goog.require('Blockly.Python');

Blockly.Python['gpio_devices_out'] = function(block) {
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['gpio_output'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var pin_num = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + ' = DigitalOutputDevice(' + pin_num + ')\n';
  return code;
};

Blockly.Python['gpio_led'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var pin_num = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_led = Blockly.Python.valueToCode(block, 'led', Blockly.Python.ORDER_NONE);
  var code = value_led + ' = LED(' + pin_num + ')\n';
  return code;
};

Blockly.Python['gpio_buzzer'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var pin_num = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_buzzer = Blockly.Python.valueToCode(block, 'buzzer', Blockly.Python.ORDER_NONE);
  var code = value_buzzer + ' = Buzzer(' + pin_num + ')\n';
  return code;
};

Blockly.Python['gpio_output_on'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.on()\n';
  return code;
};

Blockly.Python['gpio_output_off'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.off()\n';
  return code;
};

Blockly.Python['gpio_output_toggle'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.toggle()\n';
  return code;
};

Blockly.Python['gpio_close_out'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.close()\n';
  return code;
};

Blockly.Python['gpio_rgbled'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var value_r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_NONE);
  var value_g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_NONE);
  var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_NONE);
  var value_rgbled = Blockly.Python.valueToCode(block, 'rgbled', Blockly.Python.ORDER_NONE);
  var code = value_rgbled + ' = RGBLED(' + value_r + ', ' + value_g + ', ' + value_b +')\n';
  return code;
};

Blockly.Python['gpio_rgbled_colour'] = function (block) {
  Blockly.Python.definitions_['from_colorzero_import_Color'] = 'from colorzero import Color';
  var value_rgbled = Blockly.Python.valueToCode(block, 'rgbled', Blockly.Python.ORDER_NONE);
  var value_colour = Blockly.Python.valueToCode(block, 'colour', Blockly.Python.ORDER_NONE);
  var code = value_rgbled + '.color = Color(' + value_colour + ')\n';
  return code;
};

Blockly.Python['gpio_pwm'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var pin_num = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + ' = PWMOutputDevice(' + pin_num + ')\n';
  return code;
};

Blockly.Python['gpio_pwm_breath'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var value_on = Blockly.Python.valueToCode(block, 'on', Blockly.Python.ORDER_NONE);
  var value_off = Blockly.Python.valueToCode(block, 'off', Blockly.Python.ORDER_NONE);
  var value_in = Blockly.Python.valueToCode(block, 'in', Blockly.Python.ORDER_NONE);
  var value_out = Blockly.Python.valueToCode(block, 'out', Blockly.Python.ORDER_NONE);
  var value_n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_NONE);
  var code = value_device + '.blink(on_time=' + value_on + ', off_time=' + value_off + ', fade_in_time=' + value_in + ', fade_out_time=' + value_out + ', n=' + value_n + ', background=False)\n';
  return code;
};

Blockly.Python['gpio_pwm_dc'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var value_dc = Blockly.Python.valueToCode(block, 'dc', Blockly.Python.ORDER_NONE);
  var code = value_device + '.value = ' + value_dc + '/100\n';
  return code;
};

Blockly.Python['gpio_pwm_frequency'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_NONE);
  var code = value_device + '.frequency = ' + value_frequency + '\n';
  return code;
};

Blockly.Python['gpio_output_value'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.value';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['gpio_output_value_set'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_NONE);
  var code = value_device + '.value = ' + value_value + '\n';
  return code;
};