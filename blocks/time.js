'use strict';

goog.provide('Blockly.Blocks.time'); // Deprecated.
goog.provide('Blockly.Constants.Time');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Time.HUE = 65;

Blockly.defineBlocksWithJsonArray([
  {
    "type": "time_sleep",
    "message0": "%{BKY_TIME_SLEEP_TITLE}",
    "args0": [{
      "type": "input_value",
      "name": "SECONDS",
      "check": "Number"
    }],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_TIME_HUE}",
    "tooltip": "%{BKY_TIME_SLEEP_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "time_stamp",
    "message0": "%{BKY_TIME_STAMP_TITLE}",
    "output": "Number",
    "colour": "%{BKY_TIME_HUE}",
    "tooltip": "%{BKY_TIME_STAMP_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "time_struct",
    "message0": "%{BKY_TIME_TIME_STRUCT_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "struct",
        "options": [
          [
            "%{BKY_TIME_TIME_STRUCT_YEAR}",
            "year"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_MON}",
            "mon"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_MDAY}",
            "mday"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_HOUR}",
            "hour"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_MIN}",
            "min"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_SEC}",
            "sec"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_WDAY}",
            "wday"
          ],
          [
            "%{BKY_TIME_TIME_STRUCT_YDAY}",
            "yday"
          ]
        ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_TIME_HUE}",
    "tooltip": "%{BKY_TIME_TIME_STRUCT_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "time_time",
    "message0": "%{BKY_TIME_TIME_TITLE}",
    "output": "String",
    "colour": "%{BKY_TIME_HUE}",
    "tooltip": "%{BKY_TIME_TIME_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "time_date",
    "message0": "%{BKY_TIME_DATE_TITLE}",
    "output": "String",
    "colour": "%{BKY_TIME_HUE}",
    "tooltip": "%{BKY_TIME_DATE_TOOLTIP}",
    "helpUrl": ""
  }]);
