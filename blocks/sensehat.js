'use strict';

goog.provide('Blockly.Blocks.sensehat'); // Deprecated.
goog.provide('Blockly.Constants.Sensehat');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Sensehat.HUE = 40;

Blockly.defineBlocksWithJsonArray([{
  "type": "sensehat_initialize",
  "message0": "%{BKY_SENSEHAT_INITIALIZE_TITLE}",
  "args0": [
    {
      "type": "field_checkbox",
      "name": "EMU",
      "checked": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_INITIALIZE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_set_rotation",
  "message0": "%{BKY_SENSEHAT_SET_ROTATION_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ROTATION",
      "options": [
        [
          "0°",
          "0"
        ],
        [
          "90°",
          "90"
        ],
        [
          "180°",
          "180"
        ],
        [
          "270°",
          "270"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_SET_ROTATION_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_flip_h",
  "message0": "%{BKY_SENSEHAT_FLIP_H_TITLE}",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_FLIP_H_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_flip_v",
  "message0": "%{BKY_SENSEHAT_FLIP_V_TITLE}",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_FLIP_V_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_pixels",
  "message0": "%1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71",
  "args0": [
    {
      "type": "field_colour",
      "name": "0",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "1",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "2",
      "colour": "#009900"
    },
    {
      "type": "field_colour",
      "name": "3",
      "colour": "#006600"
    },
    {
      "type": "field_colour",
      "name": "4",
      "colour": "#006600"
    },
    {
      "type": "field_colour",
      "name": "5",
      "colour": "#009900"
    },
    {
      "type": "field_colour",
      "name": "6",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "7",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "8",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "9",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "10",
      "colour": "#006600"
    },
    {
      "type": "field_colour",
      "name": "11",
      "colour": "#009900"
    },
    {
      "type": "field_colour",
      "name": "12",
      "colour": "#009900"
    },
    {
      "type": "field_colour",
      "name": "13",
      "colour": "#006600"
    },
    {
      "type": "field_colour",
      "name": "14",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "15",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "16",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "17",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "18",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "19",
      "colour": "#003300"
    },
    {
      "type": "field_colour",
      "name": "20",
      "colour": "#003300"
    },
    {
      "type": "field_colour",
      "name": "21",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "22",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "23",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "24",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "25",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "26",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "27",
      "colour": "#cc0000"
    },
    {
      "type": "field_colour",
      "name": "28",
      "colour": "#cc0000"
    },
    {
      "type": "field_colour",
      "name": "29",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "30",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "31",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "32",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "33",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "34",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "35",
      "colour": "#cc0000"
    },
    {
      "type": "field_colour",
      "name": "36",
      "colour": "#cc0000"
    },
    {
      "type": "field_colour",
      "name": "37",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "38",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "39",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "40",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "41",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "42",
      "colour": "#ff0000"
    },
    {
      "type": "field_colour",
      "name": "43",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "44",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "45",
      "colour": "#ff0000"
    },
    {
      "type": "field_colour",
      "name": "46",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "47",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "48",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "49",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "50",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "51",
      "colour": "#cc0000"
    },
    {
      "type": "field_colour",
      "name": "52",
      "colour": "#cc0000"
    },
    {
      "type": "field_colour",
      "name": "53",
      "colour": "#660000"
    },
    {
      "type": "field_colour",
      "name": "54",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "55",
      "colour": "#000000"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_colour",
      "name": "56",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "57",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "58",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "59",
      "colour": "#990000"
    },
    {
      "type": "field_colour",
      "name": "60",
      "colour": "#990000"
    },
    {
      "type": "field_colour",
      "name": "61",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "62",
      "colour": "#000000"
    },
    {
      "type": "field_colour",
      "name": "63",
      "colour": "#000000"
    }
  ],
  "output": "Array",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_PIXELS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_set_pixels",
  "message0": "%{BKY_SENSEHAT_SET_PIXELS_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "PIXELS",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_SET_PIXELS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_set_pixel",
  "message0": "%{BKY_SENSEHAT_SET_PIXEL_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "COLOUR",
      "check": "Colour",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_SET_PIXEL_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_load_image",
  "message0": "%{BKY_SENSEHAT_LOAD_IMAGE_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "FILE",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_LOAD_IMAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_clear",
  "message0": "%{BKY_SENSEHAT_CLEAR_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOUR",
      "check": "Colour"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_CLEAR_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_show_message",
  "message0": "%{BKY_SENSEHAT_SHOW_MESSAGE_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "MESSAGE",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "SPEED",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "TEXTCOLOUR",
      "check": "Colour",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "BACKCOLOUR",
      "check": "Colour",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_SHOW_MESSAGE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_show_letter",
  "message0": "%{BKY_SENSEHAT_SHOW_LETTER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "LETTER",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "TEXTCOLOUR",
      "check": "Colour",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "BACKCOLOUR",
      "check": "Colour",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_SHOW_LETTER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_low_light",
  "message0": "%{BKY_SENSEHAT_LOW_LIGHT_TITLE}",
  "args0": [
    {
      "type": "field_checkbox",
      "name": "LOW",
      "checked": true
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_LOW_LIGHT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_humidity",
  "message0": "%{BKY_SENSEHAT_GET_HUMIDITY_TITLE}",
  "output": "Number",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_HUMIDITY_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_temperature",
  "message0": "%{BKY_SENSEHAT_GET_TEMPERATURE_TITLE}",
  "output": "Number",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_TEMPERATURE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_pressure",
  "message0": "%{BKY_SENSEHAT_GET_PRESSURE_TITLE}",
  "output": "Number",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_PRESSURE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_set_imu_config",
  "message0": "%{BKY_SENSEHAT_SET_IMU_CONFIG_TITLE}",
  "args0": [
    {
      "type": "field_checkbox",
      "name": "COMPASS",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "GYRO",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "ACCEL",
      "checked": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_SET_IMU_CONFIG_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_orientation",
  "message0": "%{BKY_SENSEHAT_GET_ORIENTATION_TITLE}",
  "output": "Dictionary",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_ORIENTATION_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_compass",
  "message0": "%{BKY_SENSEHAT_GET_COMPASS_TITLE}",
  "output": "Number",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_COMPASS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_gyroscope",
  "message0": "%{BKY_SENSEHAT_GET_GYROSCOPE_TITLE}",
  "output": "Dictionary",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_GYROSCOPE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_accelerometer",
  "message0": "%{BKY_SENSEHAT_GET_ACCELEROMETER_TITLE}",
  "output": "Dictionary",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_ACCELEROMETER_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_wait_for_event",
  "message0": "%{BKY_SENSEHAT_WAIT_FOR_EVENT_TITLE}",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_WAIT_FOR_EVENT_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_event_timestamp",
  "message0": "%{BKY_SENSEHAT_EVENT_TIMESTAMP_TITLE}",
  "output": "Number",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_EVENT_TIMESTAMP_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_event_direction",
  "message0": "%{BKY_SENSEHAT_EVENT_DIRECTION_TITLE}",
  "output": "String",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_EVENT_DIRECTION_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_event_action",
  "message0": "%{BKY_SENSEHAT_EVENT_ACTION_TITLE}",
  "output": "String",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_EVENT_ACTION_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_get_events",
  "message0": "%{BKY_SENSEHAT_GET_EVENTS_TITLE}",
  "output": "Array",
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_GET_EVENTS_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "sensehat_joystick_pushed",
  "message0": "%{BKY_SENSEHAT_JOYSTICK_PUSHED_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DIRECTION",
      "options": [
        [
          "%{BKY_SENSEHAT_JOYSTICK_PUSHED_ANY}",
          "any"
        ],
        [
          "%{BKY_SENSEHAT_JOYSTICK_PUSHED_LEFT}",
          "left"
        ],
        [
          "%{BKY_SENSEHAT_JOYSTICK_PUSHED_UP}",
          "up"
        ],
        [
          "%{BKY_SENSEHAT_JOYSTICK_PUSHED_RIGHT}",
          "right"
        ],
        [
          "%{BKY_SENSEHAT_JOYSTICK_PUSHED_DOWN}",
          "down"
        ],
        [
          "%{BKY_SENSEHAT_JOYSTICK_PUSHED_MIDDLE}",
          "middle"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_SENSEHAT_HUE}",
  "tooltip": "%{BKY_SENSEHAT_JOYSTICK_PUSHED_TOOLTIP}",
  "helpUrl": ""
}]);
