"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Third = function (_React$Component) {
  _inherits(Third, _React$Component);

  function Third(props) {
    _classCallCheck(this, Third);

    var _this = _possibleConstructorReturn(this, (Third.__proto__ || Object.getPrototypeOf(Third)).call(this, props));

    _this.state = {
      number: 4
    };
    return _this;
  }

  _createClass(Third, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "creditCard" },
              "Enter creditCard"
            ),
            React.createElement("input", { id: "creditCard", name: "creditCard", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "expiry date" },
              "Enter expiry date"
            ),
            React.createElement("input", { id: "expiry date", name: "expiry date", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "CVV" },
              "Enter CVV"
            ),
            React.createElement("input", { id: "CVV", name: "CVV,", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "billing zip code" },
              "Enter billing zip code"
            ),
            React.createElement("input", { id: "billing zip code", name: "billing zip code", type: "text" })
          )
        ),
        React.createElement(
          "button",
          { id: "submit" },
          "submit"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.props.handleCheckOutBtn(_this2.state.number);
            } },
          "NEXT"
        )
      );
    }
  }]);

  return Third;
}(React.Component);

window.third = Third;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC90aGlyZFBhZ2UuanN4Il0sIm5hbWVzIjpbIlRoaXJkIiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlciIsImhhbmRsZUNoZWNrT3V0QnRuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJ0aGlyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQVk7QUFDVkMsY0FBUTtBQURFLEtBQVo7QUFGaUI7QUFLbEI7Ozs7NkJBQ087QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLFlBQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLFlBQVYsRUFBdUIsTUFBSyxZQUE1QixFQUF5QyxNQUFLLE1BQTlDO0FBRkEsV0FEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLGFBQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLGFBQVYsRUFBd0IsTUFBSyxhQUE3QixFQUEyQyxNQUFLLE1BQWhEO0FBRkEsV0FMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLEtBQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLEtBQVYsRUFBZ0IsTUFBSyxNQUFyQixFQUE0QixNQUFLLE1BQWpDO0FBRkEsV0FUQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLGtCQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxrQkFBVixFQUE2QixNQUFLLGtCQUFsQyxFQUFxRCxNQUFLLE1BQTFEO0FBRkE7QUFiQSxTQURBO0FBbUJGO0FBQUE7QUFBQSxZQUFRLElBQUssUUFBYjtBQUFBO0FBQUEsU0FuQkU7QUFvQkQ7QUFBQTtBQUFBLFlBQVEsU0FBVztBQUFBLHFCQUFJLE9BQUtGLEtBQUwsQ0FBV0csaUJBQVgsQ0FBNkIsT0FBS0YsS0FBTCxDQUFXQyxNQUF4QyxDQUFKO0FBQUEsYUFBbkI7QUFBQTtBQUFBO0FBcEJDLE9BREY7QUF5QkQ7Ozs7RUFqQ2lCRSxNQUFNQyxTOztBQW1DMUJDLE9BQU9DLEtBQVAsR0FBZVIsS0FBZiIsImZpbGUiOiJ0aGlyZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaGlyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIG51bWJlcjogNFxuICAgIH1cbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3JlZGl0Q2FyZFwiPkVudGVyIGNyZWRpdENhcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiY3JlZGl0Q2FyZFwiIG5hbWU9XCJjcmVkaXRDYXJkXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGlyeSBkYXRlXCI+RW50ZXIgZXhwaXJ5IGRhdGU8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiZXhwaXJ5IGRhdGVcIiBuYW1lPVwiZXhwaXJ5IGRhdGVcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiQ1ZWXCI+RW50ZXIgQ1ZWPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cIkNWVlwiIG5hbWU9XCJDVlYsXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImJpbGxpbmcgemlwIGNvZGVcIj5FbnRlciBiaWxsaW5nIHppcCBjb2RlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImJpbGxpbmcgemlwIGNvZGVcIiBuYW1lPVwiYmlsbGluZyB6aXAgY29kZVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPGJ1dHRvbiBpZCA9IFwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XG4gICAgIDxidXR0b24gb25DbGljayA9IHsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDaGVja091dEJ0bih0aGlzLnN0YXRlLm51bWJlcil9Pk5FWFQ8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG53aW5kb3cudGhpcmQgPSBUaGlyZDtcbiJdfQ==