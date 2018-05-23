"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Second = function (_React$Component) {
  _inherits(Second, _React$Component);

  function Second(props) {
    _classCallCheck(this, Second);

    var _this = _possibleConstructorReturn(this, (Second.__proto__ || Object.getPrototypeOf(Second)).call(this, props));

    _this.state = {
      number: 3
    };
    return _this;
  }

  _createClass(Second, [{
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
              { htmlFor: "line1" },
              "line1"
            ),
            React.createElement("input", { id: "line1", name: "line1", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "line2" },
              "line2"
            ),
            React.createElement("input", { id: "line2", name: "line2", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "city" },
              "Enter city"
            ),
            React.createElement("input", { id: "city", name: "city", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "lable",
              { htmlFor: "state" },
              "Enter state"
            ),
            React.createElement("input", { id: "state", name: "state", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "lable",
              { htmlFor: "zip" },
              "Enter zip"
            ),
            React.createElement("input", { id: "zip", name: "zip", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "lable",
              { htmlFor: "phoneNumber" },
              "phoneNumber"
            ),
            React.createElement("input", { id: "phoneNumber", name: "phoneNumber", type: "text" })
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

  return Second;
}(React.Component);

window.second = Second;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zZWNvbmRQYWdlLmpzeCJdLCJuYW1lcyI6WyJTZWNvbmQiLCJwcm9wcyIsInN0YXRlIiwibnVtYmVyIiwiaGFuZGxlQ2hlY2tPdXRCdG4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsInNlY29uZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLGdIQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQVk7QUFDVkMsY0FBUTtBQURFLEtBQVo7QUFGZ0I7QUFLakI7Ozs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDO0FBRkEsV0FEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDO0FBRkEsV0FMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE1BQVYsRUFBaUIsTUFBSyxNQUF0QixFQUE2QixNQUFLLE1BQWxDO0FBRkEsV0FUQTtBQWFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDO0FBRkYsV0FiQTtBQWlCQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxLQUFmO0FBQUE7QUFBQSxhQURGO0FBRUUsMkNBQU8sSUFBRyxLQUFWLEVBQWdCLE1BQUssS0FBckIsRUFBMkIsTUFBSyxNQUFoQztBQUZGLFdBakJBO0FBcUJBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLGFBQWY7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxJQUFHLGFBQVYsRUFBd0IsTUFBSyxhQUE3QixFQUEyQyxNQUFLLE1BQWhEO0FBRkY7QUFyQkEsU0FEQTtBQTJCQTtBQUFBO0FBQUEsWUFBUSxJQUFLLFFBQWI7QUFBQTtBQUFBLFNBM0JBO0FBNEJEO0FBQUE7QUFBQSxZQUFRLFNBQVc7QUFBQSxxQkFBSSxPQUFLRixLQUFMLENBQVdHLGlCQUFYLENBQTZCLE9BQUtGLEtBQUwsQ0FBV0MsTUFBeEMsQ0FBSjtBQUFBLGFBQW5CO0FBQUE7QUFBQTtBQTVCQyxPQURGO0FBaUNEOzs7O0VBekNrQkUsTUFBTUMsUzs7QUE4QzNCQyxPQUFPQyxNQUFQLEdBQWlCUixNQUFqQiIsImZpbGUiOiJzZWNvbmRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2Vjb25kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBudW1iZXI6IDNcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaW5lMVwiPmxpbmUxPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImxpbmUxXCIgbmFtZT1cImxpbmUxXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImxpbmUyXCI+bGluZTI8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwibGluZTJcIiBuYW1lPVwibGluZTJcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPkVudGVyIGNpdHk8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJsZSBodG1sRm9yPVwic3RhdGVcIj5FbnRlciBzdGF0ZTwvbGFibGU+XG4gICAgICAgIDxpbnB1dCBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJsZSBodG1sRm9yPVwiemlwXCI+RW50ZXIgemlwPC9sYWJsZT5cbiAgICAgICAgPGlucHV0IGlkPVwiemlwXCIgbmFtZT1cInppcFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFibGUgaHRtbEZvcj1cInBob25lTnVtYmVyXCI+cGhvbmVOdW1iZXI8L2xhYmxlPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwaG9uZU51bWJlclwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnV0dG9uIGlkID0gXCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpPT50aGlzLnByb3BzLmhhbmRsZUNoZWNrT3V0QnRuKHRoaXMuc3RhdGUubnVtYmVyKX0+TkVYVDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgIFxuXG59XG5cbndpbmRvdy5zZWNvbmQgPSAgU2Vjb25kO1xuIl19