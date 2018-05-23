"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zero = function (_React$Component) {
  _inherits(Zero, _React$Component);

  function Zero(props) {
    _classCallCheck(this, Zero);

    var _this = _possibleConstructorReturn(this, (Zero.__proto__ || Object.getPrototypeOf(Zero)).call(this, props));

    _this.state = {
      number: 1
    };
    return _this;
  }

  _createClass(Zero, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Hello"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.props.handleCheckOutBtn(_this2.state.number);
            } },
          "CheckOut "
        )
      );
    }
  }]);

  return Zero;
}(React.Component);

window.zero = Zero;
//()=>this.props.handleCheckOutBtn(this.state.number)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC96ZXJvUGFnZS5qc3giXSwibmFtZXMiOlsiWmVybyIsInByb3BzIiwic3RhdGUiLCJudW1iZXIiLCJoYW5kbGVDaGVja091dEJ0biIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93IiwiemVybyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQVk7QUFDVkMsY0FBUTtBQURFLEtBQVo7QUFGZ0I7QUFLakI7Ozs7NkJBQ087QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBO0FBQUE7QUFBQSxZQUFRLFNBQVc7QUFBQSxxQkFBSSxPQUFLRixLQUFMLENBQVdHLGlCQUFYLENBQTZCLE9BQUtGLEtBQUwsQ0FBV0MsTUFBeEMsQ0FBSjtBQUFBLGFBQW5CO0FBQUE7QUFBQTtBQUZBLE9BREY7QUFNRDs7OztFQWRnQkUsTUFBTUMsUzs7QUFnQnpCQyxPQUFPQyxJQUFQLEdBQWNSLElBQWQ7QUFDQSIsImZpbGUiOiJ6ZXJvUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFplcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIG51bWJlcjogMVxuICAgIH1cbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCk9PnRoaXMucHJvcHMuaGFuZGxlQ2hlY2tPdXRCdG4odGhpcy5zdGF0ZS5udW1iZXIpfT5DaGVja091dCA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbndpbmRvdy56ZXJvID0gWmVybztcbi8vKCk9PnRoaXMucHJvcHMuaGFuZGxlQ2hlY2tPdXRCdG4odGhpcy5zdGF0ZS5udW1iZXIpXG4iXX0=