'use strict';

goog.provide('Blockly.Blocks.gpioin'); // Deprecated.
goog.provide('Blockly.Constants.GPIOin');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.GPIOin.HUE = 180;

Blockly.defineBlocksWithJsonArray([
  {
    "type": "gpio_devices_in",
    "message0": "%{BKY_GPIO_DEVICES_IN_TITLE}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["DeviceIN"],
        "defaultType": "DeviceIN"
      }
    ],
    "output": "DeviceIN",
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_DEVICES_IN_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_input_digital",
    "message0": "%{BKY_GPIO_INPUT_DIGITAL_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_INPUT_DIGITAL_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_input_smoothed",
    "message0": "%{BKY_GPIO_INPUT_SMOOTHED_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_INPUT_SMOOTHED_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_button",
    "message0": "%{BKY_GPIO_BUTTON_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "button",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_BUTTON_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_linesensor",
    "message0": "%{BKY_GPIO_LINESENSOR_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "linesensor",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_LINESENSOR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_motionsensor",
    "message0": "%{BKY_GPIO_MOTIONSENSOR_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "motionsensor",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_MOTIONSENSOR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_lightsensor",
    "message0": "%{BKY_GPIO_LIGHTSENSOR_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "lightsensor",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_LIGHTSENSOR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_distancesensor",
    "message0": "%{BKY_GPIO_DISTANCESENSOR_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "echo",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "trigger",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "distancesensor",
        "check": "DeviceIN"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_DISTANCESENSOR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_input_value",
    "message0": "%{BKY_GPIO_INPUT_VALUE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceIN"
      }
    ],
    "output": [
      "Number",
      "Boolean"
    ],
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_INPUT_VALUE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_close_in",
    "message0": "%{BKY_GPIO_CLOSE_IN_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "device",
      "check": "DeviceIN"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOIN_HUE}",
    "tooltip": "%{BKY_GPIO_CLOSE_IN_TOOLTIP}",
    "helpUrl": ""
  }
]);
