'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageSliderHoc = require('./ImageSliderHoc');

var _ImageSliderHoc2 = _interopRequireDefault(_ImageSliderHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.scrollLeft = _this.scrollLeft.bind(_this);
    _this.scrollRight = _this.scrollRight.bind(_this);
    _this.updatePosition = _this.updatePosition.bind(_this);
    _this.setVisibleItems = _this.setVisibleItems.bind(_this);
    _this.sliderStyle = _this.sliderStyle.bind(_this);
    _this.isOpaque = _this.isOpaque.bind(_this);
    _this.animate = _this.animate.bind(_this);

    _this.state = {
      images: [],
      currentPosition: 0,
      interval: null
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setVisibleItems(this.props.visibleItems);
      window.addEventListener('resize', this.setVisibleItems.bind(this, this.props.visibleItems));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearAnimate();
      window.removeEventListener('resize', this.setVisibleItems.bind(this, this.props.visibleItems));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.currentPosition !== nextState.currentPosition) {
        this.animate();
      }
    }
  }, {
    key: 'scrollLeft',
    value: function scrollLeft() {
      var currentPosition = this.updatePosition(this.state.currentPosition - 1);
      this.setState({ currentPosition: currentPosition });
    }
  }, {
    key: 'scrollRight',
    value: function scrollRight() {
      var currentPosition = this.updatePosition(this.state.currentPosition + 1);
      this.setState({ currentPosition: currentPosition });
    }
  }, {
    key: 'setVisibleItems',
    value: function setVisibleItems(currentVisibleItems) {
      var container = document.querySelector('.rsc-slider');
      var visibleItems = container && container.offsetWidth < 720 ? 1 : currentVisibleItems;
      this.setState({ visibleItems: visibleItems });
    }
  }, {
    key: 'sliderStyle',
    value: function sliderStyle(classname) {
      var items = document.querySelector(classname);
      var itemWidth = items ? items.offsetWidth : 0;
      var shift = itemWidth * this.state.currentPosition;
      return { transform: 'translateX(-' + shift + 'px)' };
    }
  }, {
    key: 'isOpaque',
    value: function isOpaque(key) {
      var nextPosition = this.state.visibleItems + this.state.currentPosition;
      var opaque = this.props.children.slice(this.state.currentPosition, nextPosition);
      return opaque.indexOf(this.props.children[key]) !== -1;
    }
  }, {
    key: 'animate',
    value: function animate() {
      if (this.state.interval) {
        window.clearInterval(this.state.interval);
      }
      if (!this.props.delay) {
        return false;
      }
      var interval = window.setInterval(this.scrollRight, this.props.delay);
      this.setState({ interval: interval });
    }
  }, {
    key: 'clearAnimate',
    value: function clearAnimate() {
      if (this.state.interval) {
        clearInterval(this.state.interval);
        this.setState({ interval: null });
      }
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition(nextPosition) {
      var _state = this.state,
          visibleItems = _state.visibleItems,
          currentPosition = _state.currentPosition;

      var skipScrollIfEnd = this.props.calculator.skipScrollIfEnd(visibleItems, currentPosition, nextPosition);
      var skipScrollIfNonInfinite = this.props.calculator.skipScrollIfNonInfinite(visibleItems, currentPosition, nextPosition);
      var scrollIfInfinite = this.props.calculator.scrollIfInfinite(visibleItems, currentPosition, nextPosition);
      var scrollToBeginningIfEnd = this.props.calculator.scrollToBeginningIfEnd(visibleItems, currentPosition, nextPosition);
      if (skipScrollIfEnd !== undefined) {
        return skipScrollIfEnd;
      }
      if (skipScrollIfNonInfinite !== undefined) {
        return skipScrollIfNonInfinite;
      }
      if (scrollIfInfinite !== undefined) {
        return scrollIfInfinite;
      }
      if (scrollToBeginningIfEnd !== undefined) {
        return scrollToBeginningIfEnd;
      }
      return nextPosition;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sliderStyle = this.sliderStyle('.rsc-slider-item');
      var imgWidth = 100 / this.state.visibleItems;
      var images = this.props.children.map(function (item, key) {
        return {
          itemClass: _this2.isOpaque(key) ? 'rsc-slider-item' : 'rsc-slider-item rsc-slider-item_transparent',
          src: item
        };
      });

      return _react2.default.createElement(
        'div',
        { className: 'rsc-container' },
        _react2.default.createElement(
          'div',
          { className: 'rsc-slider', style: sliderStyle },
          images.map(function (item, key) {
            return _react2.default.createElement(
              'div',
              { className: item.itemClass, key: key, style: { 'flex': '0 0 ' + imgWidth + '%' } },
              _react2.default.createElement(
                'div',
                { className: 'rsc-slider-item-img' },
                item.src
              )
            );
          })
        ),
        images.length > this.state.visibleItems ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: 'rsc-navigation rsc-navigation_left rsc-arrow_left', onClick: this.scrollLeft }),
          _react2.default.createElement('div', { className: 'rsc-navigation rsc-navigation_right rsc-arrow_right', onClick: this.scrollRight })
        ) : null
      );
    }
  }]);

  return Slider;
}(_react2.default.Component);

Slider.propTypes = _react2.default.PropTypes.shape({
  visibleItems: _react.PropTypes.number.isRequired,
  images: _react.PropTypes.array.isRequired,
  delay: _react.PropTypes.number.isRequired,
  calculator: _react.PropTypes.func.isRequired
}).isRequired;

exports.default = (0, _ImageSliderHoc2.default)(Slider);