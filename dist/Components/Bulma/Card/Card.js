"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "getLink",
    value: function getLink() {
      if (typeof this.props.url !== 'undefined') {
        return this.props.url;
      }
    }
  }, {
    key: "getContentFragment",
    value: function getContentFragment(fragment) {
      var image = this.renderCardImage();
      var video = this.renderCardYoutubeVideo();
      var header = this.renderCardHeader();
      var content = this.cardContent();
      var link = this.getLink();
      var fragments = {
        card: _react["default"].createElement("div", {
          className: "card"
        }, image, video, header, content),
        cardHeader: _react["default"].createElement("div", {
          className: "card-header"
        }, _react["default"].createElement("div", {
          className: "card-header-title"
        }, this.props.title))
      };
      fragments.linkCard = '';

      if (typeof this.props.url !== 'undefined') {
        fragments.linkCard = _react["default"].createElement("a", {
          href: link
        }, fragments.card);
      }

      return fragments[fragment];
    }
    /**
     * Render the Card component.
     * @returns {*}
     */

  }, {
    key: "render",
    value: function render() {
      if (typeof this.props.url !== 'undefined') {
        return this.getContentFragment('linkCard');
      }

      return this.getContentFragment('card');
    }
  }, {
    key: "renderCardHeader",
    value: function renderCardHeader() {
      var meta;
      var title = '';
      var header;

      if (typeof this.props.title !== 'undefined') {
        title = this.props.title;
      }

      var date = '';

      if (typeof this.props.date !== 'undefined') {
        date = this.props.date;
      }

      meta = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("i", null), date);

      if (typeof this.props.title !== 'undefined') {
        header = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
          className: "card-meta"
        }, meta), _react["default"].createElement("div", {
          className: "card-header"
        }, _react["default"].createElement("div", {
          className: "card-header-title"
        }, title)));
      }

      return header;
    }
  }, {
    key: "cardContent",
    value: function cardContent() {
      if (this.props.children) {
        var content = this.props.children;
        return _react["default"].createElement("div", {
          className: "card-content"
        }, content);
      }
    }
  }, {
    key: "renderCardImage",
    value: function renderCardImage() {
      if (typeof this.props.image !== 'undefined') {
        var title = this.props.title || '';
        return _react["default"].createElement("img", {
          src: this.props.image,
          alt: title
        });
      }

      return '';
    }
  }, {
    key: "renderCardYoutubeVideo",
    value: function renderCardYoutubeVideo() {
      var height = this.props.videoHeight || '175px';

      if (typeof this.props.ytVideo !== 'undefined') {
        var video = 'https://www.youtube.com/embed/' + this.props.ytVideo;
        return _react["default"].createElement("iframe", {
          width: "100%",
          height: height,
          src: video,
          frameBorder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        });
      }

      return '';
    }
  }]);

  return Card;
}(_react["default"].Component);

exports.Card = Card;
Card.propTypes = {
  /**
   * Card Title
   */
  title: {
    type: _propTypes["default"].string
  }
};
Card.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getLink",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getContentFragment",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "fragment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderCardHeader",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "cardContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderCardImage",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderCardYoutubeVideo",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "Card",
  "props": {
    "title": {
      "type": {
        "name": "custom",
        "raw": "{\n  type: PropTypes.string,\n}"
      },
      "required": false,
      "description": "Card Title"
    }
  }
};