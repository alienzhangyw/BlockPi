'use strict';

goog.provide('Blockly.Blocks.camera'); // Deprecated.
goog.provide('Blockly.Constants.Camera');

Blockly.Constants.Camera.HUE = 135;

Blockly.defineBlocksWithJsonArray(
  [{
    "type": "camera_enable",
    "message0": "%{BKY_CAMERA_ENABLE_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DO",
        "options": [
          [
            "%{BKY_CAMERA_ENABLE_ENABLE}",
            "ENABLE"
          ],
          [
            "%{BKY_CAMERA_ENABLE_STOP}",
            "STOP"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_ENABLE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_preview",
    "message0": "%{BKY_CAMERA_PREVIEW_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DO",
        "options": [
          [
            "%{BKY_CAMERA_PREVIEW_OPEN}",
            "START"
          ],
          [
            "%{BKY_CAMERA_PREVIEW_CLOSE}",
            "STOP"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_PREVIEW_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_capture",
    "message0": "%{BKY_CAMERA_CAPTURE_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          [
            "jpg",
            "jpg"
          ],
          [
            "png",
            "png"
          ],
          [
            "gif",
            "gif"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_CAPTURE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_record",
    "message0": "%{BKY_CAMERA_RECORD_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_RECORD_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_stop_recording",
    "message0": "%{BKY_CAMERA_STOP_RECORDING_TITLE}",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_STOP_RECORDING_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_web_stream",
    "lastDummyAlign0": "RIGHT",
    "message0": "%{BKY_CAMERA_WEB_STREAM_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "PORT",
        "value": 8000,
        "min": 0,
        "max": 65535,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_WEB_STREAM_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_resolution",
    "message0": "%{BKY_CAMERA_RESOLUTION_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "W",
        "value": 1280,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "H",
        "value": 720,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_RESOLUTION_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_flip",
    "message0": "%{BKY_CAMERA_FLIP_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FLIP",
        "options": [
          [
            "%{BKY_CAMERA_FLIP_H}",
            "hflip"
          ],
          [
            "%{BKY_CAMERA_FLIP_V}",
            "vflip"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_FLIP_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_rotate",
    "message0": "%{BKY_CAMERA_ROTATE_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DEGREE",
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
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_ROTATE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_framerate",
    "message0": "%{BKY_CAMERA_FRAMERATE_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "FPS",
        "value": 30,
        "min": 0.1,
        "max": 90,
        "precision": 0.1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_FRAMERATE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_annotate_text",
    "message0": "%{BKY_CAMERA_ANNOTATE_TEXT_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_ANNOTATE_TEXT_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_annotate_size",
    "message0": "%{BKY_CAMERA_ANNOTATE_SIZE_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "SIZE",
        "value": 32,
        "min": 6,
        "max": 160,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_ANNOTATE_SIZE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_annotate_colour",
    "message0": "%{BKY_CAMERA_ANNOTATE_COLOUR_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "PICK",
        "options": [
          [
            "%{BKY_CAMERA_ANNOTATE_COLOUR_FOREGROUND}",
            "foreground"
          ],
          [
            "%{BKY_CAMERA_ANNOTATE_COLOUR_BACKGROUND}",
            "background"
          ]
        ]
      },
      {
        "type": "field_colour",
        "name": "COLOUR",
        "colour": "#ffffff"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_ANNOTATE_COLOUR_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_iso",
    "message0": "%{BKY_CAMERA_ISO_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          [
            "%{BKY_CAMERA_ISO_AUTO}",
            "0"
          ],
          [
            "100",
            "100"
          ],
          [
            "200",
            "200"
          ],
          [
            "320",
            "320"
          ],
          [
            "400",
            "400"
          ],
          [
            "500",
            "500"
          ],
          [
            "640",
            "640"
          ],
          [
            "800",
            "800"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_ISO_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_shutter_speed",
    "message0": "%{BKY_CAMERA_SHUTTER_SPEED_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 0,
        "min": 0,
        "max": 5000000,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_SHUTTER_SPEED_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_brightness",
    "message0": "%{BKY_CAMERA_BRIGHTNESS_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 50,
        "min": 0,
        "max": 100,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_BRIGHTNESS_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_sharpness",
    "message0": "%{BKY_CAMERA_SHARPNESS_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 0,
        "min": -100,
        "max": 100,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_SHARPNESS_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_contrast",
    "message0": "%{BKY_CAMERA_CONTRAST_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 0,
        "min": -100,
        "max": 100,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_CONTRAST_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_saturation",
    "message0": "%{BKY_CAMERA_SATURATION_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 0,
        "min": -100,
        "max": 100,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_SATURATION_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_awb_mode",
    "message0": "%{BKY_CAMERA_AWB_MODE_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "%{BKY_CAMERA_AWB_MODE_AUTO}",
            "auto"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_SUNLIGHT}",
            "sunlight"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_CLOUDY}",
            "cloudy"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_SHADE}",
            "shade"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_TUNGSTEN}",
            "tungsten"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_FLUORESCENT}",
            "fluorescent"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_INCANDESCENT}",
            "incandescent"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_FLASH}",
            "flash"
          ],
          [
            "%{BKY_CAMERA_AWB_MODE_HORIZON}",
            "horizon"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_AWB_MODE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_exposure_compensation",
    "message0": "%{BKY_CAMERA_EXPOSURE_COMPENSATION_TITLE}",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE",
        "value": 0,
        "min": -25,
        "max": 25,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_EXPOSURE_COMPENSATION_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_exposure_mode",
    "message0": "%{BKY_CAMERA_EXPOSURE_MODE_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_AUTO}",
            "auto"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_NIGHT}",
            "night"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_NIGHTPREVIEW}",
            "nightpreview"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_BACKLIGHT}",
            "backlight"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_SPOTLIGHT}",
            "spotlight"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_SPORTS}",
            "sports"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_SNOW}",
            "snow"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_BEACH}",
            "beach"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_VERYLONG}",
            "verylong"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_FIXEDFPS}",
            "fixedfps"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_ANTISHAKE}",
            "antishake"
          ],
          [
            "%{BKY_CAMERA_EXPOSURE_MODE_FIREWORKS}",
            "fireworks"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_EXPOSURE_MODE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_meter_mode",
    "message0": "%{BKY_CAMERA_METER_MODE_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "%{BKY_CAMERA_METER_MODE_AVERAGE}",
            "average"
          ],
          [
            "%{BKY_CAMERA_METER_MODE_SPOT}",
            "spot"
          ],
          [
            "%{BKY_CAMERA_METER_MODE_BACKLIT}",
            "backlit"
          ],
          [
            "%{BKY_CAMERA_METER_MODE_MATRIX}",
            "matrix"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_METER_MODE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "camera_image_effect",
    "message0": "%{BKY_CAMERA_IMAGE_EFFECT_TITLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_NONE}",
            "none"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_NEGATIVE}",
            "negative"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_SOLARIZE}",
            "solarize"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_SKETCH}",
            "sketch"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_DENOISE}",
            "denoise"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_EMBOSS}",
            "emboss"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_OILPAINT}",
            "oilpaint"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_HATCH}",
            "hatch"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_GPEN}",
            "gpen"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_PASTEL}",
            "pastel"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_WATERCOLOR}",
            "watercolor"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_FILM}",
            "film"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_BLUR}",
            "blur"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_SATURATION}",
            "saturation"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_COLORSWAP}",
            "colorswap"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_WASHEDOUT}",
            "washedout"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_POSTERISE}",
            "posterise"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_COLORPOINT}",
            "colorpoint"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_COLORBALANCE}",
            "colorbalance"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_CARTOON}",
            "cartoon"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_DEINTERLACE1}",
            "deinterlace1"
          ],
          [
            "%{BKY_CAMERA_IMAGE_EFFECT_DEINTERLACE2}",
            "deinterlace2"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_CAMERA_HUE}",
    "tooltip": "%{BKY_CAMERA_IMAGE_EFFECT_TOOLTIP}",
    "helpUrl": ""
  }]
);
