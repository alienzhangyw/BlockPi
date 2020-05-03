'use strict';

goog.provide('Blockly.Blocks.dictionaries'); // Deprecated
goog.provide('Blockly.Constants.Dictionaries');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.Mutator');
goog.require('Blockly.FieldDropdown');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['DICTIONARIES_HUE']. (2018 April 5)
 */
Blockly.Constants.Dictionaries.HUE = 275;

Blockly.defineBlocksWithJsonArray([{
  "type": "dictionaries_length",
  "message0": "%{BKY_DICTIONARIES_LENGTH_TITLE}",
  "args0": [{
    "type": "input_value",
    "name": "DICT",
    "check": "Dictionary"
  }],
  "output": "Number",
  "colour": "%{BKY_DICTIONARIES_HUE}",
  "tooltip": "%{BKY_DICTIONARIES_LENGTH_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "dictionaries_create_with_list",
  "message0": "%{BKY_DICTIONARIES_CREATE_WITH_LIST_TITLE}",
  "args0": [{
    "type": "input_value",
    "name": "KEYS",
    "check": "Array"
  },
  {
    "type": "input_value",
    "name": "VALUE"
  }
  ],
  "inputsInline": true,
  "output": "Dictionary",
  "colour": "%{BKY_DICTIONARIES_HUE}",
  "tooltip": "%{BKY_DICTIONARIES_CREATE_WITH_LIST_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "dictionaries_isEmpty",
  "message0": "%{BKY_DICTIONARIES_ISEMPTY_TITLE}",
  "args0": [{
    "type": "input_value",
    "name": "DICT",
    "check": "Dictionary"
  }],
  "inputsInline": true,
  "output": "Boolean",
  "colour": "%{BKY_DICTIONARIES_HUE}",
  "tooltip": "%{BKY_DICTIONARIES_ISEMPTY_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "dictionaries_update",
  "message0": "%{BKY_DICTIONARIES_UPDATE_TITLE}",
  "args0": [{
    "type": "input_value",
    "name": "DICT1",
    "check": "Dictionary"
  },
  {
    "type": "input_value",
    "name": "DICT2",
    "check": "Dictionary"
  }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_DICTIONARIES_HUE}",
  "tooltip": "%{BKY_DICTIONARIES_UPDATE_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "dictionaries_set_key",
  "message0": "%{BKY_DICTIONARIES_SET_KEY_TITLE}",
  "args0": [{
    "type": "input_value",
    "name": "DICT",
    "check": "Dictionary"
  },
  {
    "type": "input_value",
    "name": "KEY",
    "check": "String"
  },
  {
    "type": "input_value",
    "name": "VALUE"
  }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_DICTIONARIES_HUE}",
  "tooltip": "%{BKY_DICTIONARIES_SET_KEY_TOOLTIP}",
  "helpUrl": ""
},
{
  "type": "dictionaries_key_in",
  "message0": "%{BKY_DICTIONARIES_KEY_IN_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "KEY",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        [
          "%{BKY_DICTIONARIES_KEY_IN}",
          "in"
        ],
        [
          "%{BKY_DICTIONARIES_KEY_NOT_IN}",
          "not in"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "DICT",
      "check": "Dictionary"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": "%{BKY_DICTIONARIES_HUE}",
  "tooltip": "%{BKY_DICTIONARIES_KEY_IN_TOOLTIP}",
  "helpUrl": ""
}
]);

Blockly.Blocks['dictionaries_create_with'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setColour(Blockly.Msg['DICTIONARIES_HUE']);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Dictionary');
    this.setMutator(new Blockly.Mutator(['dictionaries_create_with_item']));
    this.setTooltip(Blockly.Msg['DICTIONARIES_CREATE_WITH_TOOLTIP']);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('dictionaries_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('dictionaries_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('VALUE' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'VALUE' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('VALUE' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
      this.setTooltip(Blockly.Msg['DICTIONARIES_CREATE_WITH_TOOLTIP']);
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['DICTIONARIES_CREATE_EMPTY_TITLE']);
      this.setTooltip(Blockly.Msg['DICTIONARIES_CREATE_EMPTY_TOOLTIP']);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('VALUE' + i)) {
        var input = this.appendValueInput('VALUE' + i);
        if (i == 0) {
          input.appendField(Blockly.Msg['DICTIONARIES_CREATE_WITH_INPUT_WITH']);
        }
        input.setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg['DICTIONARIES_CREATE_WITH_INPUT_KEY'])
            .appendField(new Blockly.FieldTextInput(''), 'KEY' + i)
            .appendField(Blockly.Msg['DICTIONARIES_CREATE_WITH_INPUT_VALUE']);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('VALUE' + i)) {
      this.removeInput('VALUE' + i);
      i++;
    }
  }
};

Blockly.Blocks['dictionaries_create_with_container'] = {
  /**
   * Mutator block for dictionary container.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setColour(Blockly.Msg['DICTIONARIES_HUE']);
    this.appendDummyInput()
        .appendField(Blockly.Msg['DICTIONARIES_CREATE_WITH_CONTAINER_TITLE_VALUE']);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg['DICTIONARIES_CREATE_WITH_CONTAINER_TOOLTIP']);
    this.contextMenu = false;
  }
};

Blockly.Blocks['dictionaries_create_with_item'] = {
  /**
   * Mutator block for adding items.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setColour(Blockly.Msg['DICTIONARIES_HUE']);
    this.appendDummyInput()
        .appendField(Blockly.Msg['DICTIONARIES_CREATE_WITH_ITEM_TITLE']);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg['DICTIONARIES_CREATE_WITH_ITEM_TOOLTIP']);
    this.contextMenu = false;
  }
};

Blockly.Blocks['dictionaries_get_key'] = {
  init: function() {
    var MODE =
        [
          [Blockly.Msg['DICTIONARIES_GET_KEY'], "GET"],
          [Blockly.Msg['DICTIONARIES_POP_KEY'], "POP"],
          [Blockly.Msg['DICTIONARIES_DEL_KEY'], "DEL"]
      ];
    var modeMenu = new Blockly.FieldDropdown(MODE, function(value) {
      var isStatement = (value == 'DEL');
      this.getSourceBlock().updateStatement_(isStatement);
    });
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField(Blockly.Msg['DICTIONARIES_GET_KEY_DICT']);
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField(modeMenu, "MODE");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Msg['DICTIONARIES_HUE']);
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('MODE');
      if (mode == 'GET') {
        return Blockly.Msg['DICTIONARIES_GET_KEY_TOOLTIP'];
      } else if (mode == 'POP') {
        return Blockly.Msg['DICTIONARIES_POP_KEY_TOOLTIP'];
      } else if (mode == 'DEL') {
        return Blockly.Msg['DICTIONARIES_DEL_KEY_TOOLTIP']
      }
      throw Error('Unknown mode: ' + mode);
    });
    this.setHelpUrl("");
  },
  /**
   * Create XML to represent whether the block is a statement or a value.
   * @return {Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
     var container = Blockly.utils.xml.createElement('mutation');
     var isStatement = !this.outputConnection;
     container.setAttribute('statement', isStatement);
     return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'statement' defaults to false.
    var isStatement = (xmlElement.getAttribute('statement') == 'true');
    this.updateStatement_(isStatement);
  },
  /**
   * Switch between a value block and a statement block.
   * @param {boolean} newStatement True if the block should be a statement.
   *     False if the block should be a value.
   * @private
   * @this {Blockly.Block}
   */
  updateStatement_: function (newStatement) {
    var oldStatement = !this.outputConnection;
    if (newStatement != oldStatement) {
      this.unplug(true, true);
      if (newStatement) {
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      } else {
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setOutput(true);
      }
    }
  }
};

Blockly.Blocks['dictionaries_keys'] = {
  init: function() {
    var thisBlock = this;
    var dropdown = new Blockly.FieldDropdown(
        [
          [Blockly.Msg['DICTIONARIES_KEYS_KEY'], "KEY"],
          [Blockly.Msg['DICTIONARIES_KEYS_VALUE'], "VALUE"]
        ]);
    this.appendValueInput("DICT")
        .setCheck("Dictionary")
        .appendField(Blockly.Msg['DICTIONARIES_KEYS_DICT']);
    this.appendDummyInput()
        .appendField(dropdown, "MODE");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(Blockly.Msg['DICTIONARIES_HUE']);
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('MODE');
      if (mode == 'KEY') {
        return Blockly.Msg['DICTIONARIES_KEYS_TOOLTIP'];
      } else if (mode == 'VALUE') {
        return Blockly.Msg['DICTIONARIES_VALUES_TOOLTIP'];
      }
      throw Error('Unknown mode: ' + mode);
    });
    this.setHelpUrl("");
  }
};
