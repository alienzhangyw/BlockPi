'use strict';

goog.provide('Blockly.Blocks.gpioout'); // Deprecated.
goog.provide('Blockly.Constants.GPIOout');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.GPIOout.HUE = 0;

Blockly.defineBlocksWithJsonArray([
  {
    "type": "gpio_devices_out",
    "message0": "%{BKY_GPIO_DEVICES_OUT_TITLE}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}",
        "variableTypes": ["DeviceOUT"],
        "defaultType": "DeviceOUT"
      }
    ],
    "output": "DeviceOUT",
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_DEVICES_OUT_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_output",
    "message0": "%{BKY_GPIO_OUTPUT_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_OUTPUT_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_led",
    "message0": "%{BKY_GPIO_LED_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "led",
        "check": "DeviceOUT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_LED_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_buzzer",
    "message0": "%{BKY_GPIO_BUZZER_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "buzzer",
        "check": "DeviceOUT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_BUZZER_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_output_on",
    "message0": "%{BKY_GPIO_OUTPUT_ON_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "device",
      "check": "DeviceOUT"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_OUTPUT_ON_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_output_off",
    "message0": "%{BKY_GPIO_OUTPUT_OFF_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "device",
      "check": "DeviceOUT"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_OUTPUT_OFF_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_output_toggle",
    "message0": "%{BKY_GPIO_OUTPUT_TOGGLE_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "device",
      "check": "DeviceOUT"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_OUTPUT_TOGGLE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_close_out",
    "message0": "%{BKY_GPIO_CLOSE_OUT_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "device",
      "check": "DeviceOUT"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_CLOSE_OUT_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_rgbled",
    "message0": "%{BKY_GPIO_RGBLED_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "r",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "g",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "b",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "rgbled",
        "check": "DeviceOUT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_RGBLED_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_rgbled_colour",
    "message0": "%{BKY_GPIO_RGBLED_COLOUR_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "rgbled",
        "check": "DeviceOUT"
      },
      {
        "type": "input_value",
        "name": "colour",
        "check": [
          "String",
          "Colour"]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_RGBLED_COLOUR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_pwm",
    "message0": "%{BKY_GPIO_PWM_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_PWM_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_pwm_breath",
    "message0": "%{BKY_GPIO_PWM_BREATH_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "on",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "off",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "in",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "out",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "n",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_PWM_BREATH_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_pwm_dc",
    "message0": "%{BKY_GPIO_PWM_DC_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT"
      },
      {
        "type": "input_value",
        "name": "dc",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_PWM_DC_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_pwm_frequency",
    "message0": "%{BKY_GPIO_PWM_FREQUENCY_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT"
      },
      {
        "type": "input_value",
        "name": "frequency",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_PWM_FREQUENCY_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_output_value",
    "message0": "%{BKY_GPIO_OUTPUT_VALUE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT"
      }
    ],
    "output": [
      "Number",
      "Boolean"
    ],
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_OUTPUT_VALUE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "gpio_output_value_set",
    "message0": "%{BKY_GPIO_OUTPUT_VALUE_SET_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "device",
        "check": "DeviceOUT"
      },
      {
        "type": "input_value",
        "name": "value",
        "check": [
          "Number",
          "Boolean"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_GPIOOUT_HUE}",
    "tooltip": "%{BKY_GPIO_OUTPUT_VALUE_SET_TOOLTIP}",
    "helpUrl": ""
  }]);
