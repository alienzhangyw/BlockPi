'use strict';

goog.provide('Blockly.Blocks.tube'); // Deprecated.

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([{
  "type": "tube_initialize",
  "message0": "%{BKY_TUBE_INITIALIZE_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "CLK",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "DIO",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Device",
      "check": "DeviceOUT"
    },
    {
      "type": "field_number",
      "name": "Brightness",
      "value": 7,
      "min": 0,
      "max": 7,
      "precision": 1
    },
    {
      "type": "field_checkbox",
      "name": "DP",
      "checked": false
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_INITIALIZE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_brightness",
  "message0": "%{BKY_TUBE_BRIGHTNESS_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "field_number",
      "name": "Brightness",
      "value": 7,
      "min": 0,
      "max": 7,
      "precision": 1
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_BRIGHTNESS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_write",
  "message0": "%{BKY_TUBE_WRITE_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "input_value",
      "name": "Value",
      "check": [
        "Number",
        "String"
      ]
    },
    {
      "type": "input_value",
      "name": "POS",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_WRITE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_number",
  "message0": "%{BKY_TUBE_NUMBER_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "input_value",
      "name": "Value",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_NUMBER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_numbers",
  "message0": "%{BKY_TUBE_NUMBERS_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "input_value",
      "name": "Value1",
      "check": "Number"
    },
    {
      "type": "field_checkbox",
      "name": "Colon",
      "checked": true
    },
    {
      "type": "input_value",
      "name": "Value2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_NUMBERS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_temperature",
  "message0": "%{BKY_TUBE_TEMPERATURE_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "input_value",
      "name": "Value",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_TEMPERATURE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_show",
  "message0": "%{BKY_TUBE_SHOW_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "input_value",
      "name": "Value",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_SHOW_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_scroll",
  "message0": "%{BKY_TUBE_SCROLL_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    },
    {
      "type": "input_value",
      "name": "Value",
      "check": "String"
    },
    {
      "type": "field_number",
      "name": "Delay",
      "value": 250,
      "min": 0,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_SCROLL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "tube_clear",
  "message0": "%{BKY_TUBE_CLEAR_TITLE}",
  "args0": [
    {
      "type": "field_variable",
      "name": "Device",
      "variable": "tube",
      "variableTypes": ["DeviceOUT"],
      "defaultType": "DeviceOUT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_GPIOOUT_HUE}",
  "tooltip": "%{BKY_TUBE_CLEAR_TOOLTIP}",
  "helpUrl": ""
}]);
