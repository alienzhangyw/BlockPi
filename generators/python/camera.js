'use strict';

goog.provide('Blockly.Python.camera');

goog.require('Blockly.Python');

Blockly.Python['camera_enable'] = function (block) {
  var dropdown_do = block.getFieldValue('DO');
  if (dropdown_do == 'ENABLE') {
    Blockly.Python.definitions_['from_picamera_import_PiCamera'] = 'from picamera import PiCamera';
    return 'camera = PiCamera()\n';
  } else if (dropdown_do == 'STOP') {
    return 'camera.close()\n';
  }
};

Blockly.Python['camera_preview'] = function(block) {
  var dropdown_do = block.getFieldValue('DO');
  if (dropdown_do == 'START') {
    return 'camera.start_preview(fullscreen=False, window=(0,0,800,600))\n';
  } else if (dropdown_do == 'STOP') {
    return 'camera.stop_preview()\n';
  }
};

Blockly.Python['camera_capture'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var type = block.getFieldValue('TYPE');
  return 'camera.capture(' + name + '+\'.' + type + '\')\n';
};

Blockly.Python['camera_record'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  return 'camera.start_recording(' + name + '+\'.h264\'' + ')\n';
};

Blockly.Python['camera_stop_recording'] = function(block) {
  return 'camera.stop_recording()\n';
};

Blockly.Python['camera_web_stream'] = function (block) {
  Blockly.Python.definitions_['import_io'] = 'import io';
  Blockly.Python.definitions_['import_logging'] = 'import logging';
  Blockly.Python.definitions_['import_socketserver'] = 'import socketserver';
  Blockly.Python.definitions_['from_threading_import_Condition'] = 'from threading import Condition';
  Blockly.Python.definitions_['from_http_import_server'] = 'from http import server';
  var functionName = Blockly.Python.provideFunction_(
    'picamera_webstream',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(camera, port):',
      '  class StreamingOutput(object):',
      '    def __init__(self):',
      '      self.frame = None',
      '      self.buffer = io.BytesIO()',
      '      self.condition = Condition()',
      '    def write(self, buf):',
      '      if buf.startswith(b\'\\xff\\xd8\'):',
      '        self.buffer.truncate()',
      '        with self.condition:',
      '          self.frame = self.buffer.getvalue()',
      '          self.condition.notify_all()',
      '        self.buffer.seek(0)',
      '      return self.buffer.write(buf)',
      '',
      '  class StreamingHandler(server.BaseHTTPRequestHandler):',
      '    def do_GET(self):',
      '      if self.path == \'/stream.mjpg\':',
      '        self.send_response(200)',
      '        self.send_header(\'Age\', 0)',
      '        self.send_header(\'Cache-Control\', \'no-cache, private\')',
      '        self.send_header(\'Pragma\', \'no-cache\')',
      '        self.send_header(\'Content-Type\', \'multipart/x-mixed-replace; boundary=FRAME\')',
      '        self.end_headers()',
      '        try:',
      '          while True:',
      '            with output.condition:',
      '              output.condition.wait()',
      '              frame = output.frame',
      '            self.wfile.write(b\'--FRAME\\r\\n\')',
      '            self.send_header(\'Content-Type\', \'image/jpeg\')',
      '            self.send_header(\'Content-Length\', len(frame))',
      '            self.end_headers()',
      '            self.wfile.write(frame)',
      '            self.wfile.write(b\'\\r\\n\')',
      '        except Exception as e:',
      '          logging.warning(\'Removed streaming client %s: %s\', self.client_address, str(e))',
      '        else:',
      '          self.send_error(404)',
      '          self.end_headers()',
      '',
      '  class StreamingServer(socketserver.ThreadingMixIn, server.HTTPServer):',
      '    allow_reuse_address = True',
      '    daemon_threads = True',
      '',
      '  output = StreamingOutput()',
      '  camera.start_recording(output, format=\'mjpeg\')',
      '  try:',
      '    piserver = StreamingServer((\'\', port), StreamingHandler)',
      '    piserver.serve_forever()',
      '  finally:',
      '    camera.stop_recording()',
      '    camera.close()'      
    ]
  );
  var port = block.getFieldValue('PORT');
  return functionName + '(camera, ' + port + ')\n';
};

Blockly.Python['camera_resolution'] = function(block) {
  var w = block.getFieldValue('W');
  var h = block.getFieldValue('H');
  return 'camera.resolution = (' + w + ', ' + h + ')\n';
};

Blockly.Python['camera_flip'] = function(block) {
  var flip = block.getFieldValue('FLIP');
  return 'camera.' + flip + ' = True\n';
};

Blockly.Python['camera_rotate'] = function(block) {
  var degree = block.getFieldValue('DEGREE');
  return 'camera.rotation = ' + degree + '\n';
};

Blockly.Python['camera_framerate'] = function(block) {
  var fps = block.getFieldValue('FPS');
  return 'camera.framerate = ' + fps + '\n';
};

Blockly.Python['camera_annotate_text'] = function(block) {
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || '\'\'';
  return 'camera.annotate_text = ' + text + '\n';
};

Blockly.Python['camera_annotate_size'] = function(block) {
  var size = block.getFieldValue('SIZE');
  return 'camera.annotate_text_size = ' + size + '\n';
};

Blockly.Python['camera_annotate_colour'] = function (block) {
  Blockly.Python.definitions_['from_picamera_import_Color'] = 'from picamera import Color';
  var pick = block.getFieldValue('PICK');
  var colour = Blockly.Python.quote_(block.getFieldValue('COLOUR'));
  return 'camera.annotate_' + pick + ' = Color(' + colour + ')\n';
};

Blockly.Python['camera_iso'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.iso = ' + value + '\n';
};

Blockly.Python['camera_shutter_speed'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.shutter_speed = ' + value + '\n';
};

Blockly.Python['camera_brightness'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.brightness = ' + value + '\n';
};

Blockly.Python['camera_sharpness'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.sharpness = ' + value + '\n';
};

Blockly.Python['camera_contrast'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.contrast = ' + value + '\n';
};

Blockly.Python['camera_saturation'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.saturation = ' + value + '\n';
};

Blockly.Python['camera_awb_mode'] = function(block) {
  var mode = Blockly.Python.quote_(block.getFieldValue('MODE'));
  return 'camera.awb_mode = ' + mode + '\n';
};

Blockly.Python['camera_exposure_compensation'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return 'camera.exposure_compensation = ' + value + '\n';
};

Blockly.Python['camera_exposure_mode'] = function(block) {
  var mode = Blockly.Python.quote_(block.getFieldValue('MODE'));
  return 'camera.exposure_mode = ' + mode + '\n';
};

Blockly.Python['camera_meter_mode'] = function(block) {
  var mode = Blockly.Python.quote_(block.getFieldValue('MODE'));
  return 'camera.meter_mode = ' + mode + '\n';
};

Blockly.Python['camera_image_effect'] = function(block) {
  var mode = Blockly.Python.quote_(block.getFieldValue('MODE'));
  return 'camera.image_effect = ' + mode + '\n';
};