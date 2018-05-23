"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Second = function (_React$Component) {
  _inherits(Second, _React$Component);

  function Second(props) {
    _classCallCheck(this, Second);

    return _possibleConstructorReturn(this, (Second.__proto__ || Object.getPrototypeOf(Second)).call(this, props));
  }

  _createClass(Second, [{
    key: "render",
    value: function render() {
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
          null,
          "NEXT"
        )
      );
    }
  }]);

  return Second;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zZWNvbmRQYWdlLmpzeCJdLCJuYW1lcyI6WyJTZWNvbmQiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMkdBQ1ZBLEtBRFU7QUFFakI7Ozs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDO0FBRkEsV0FEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDO0FBRkEsV0FMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE1BQVYsRUFBaUIsTUFBSyxNQUF0QixFQUE2QixNQUFLLE1BQWxDO0FBRkEsV0FUQTtBQWFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDO0FBRkYsV0FiQTtBQWlCQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxLQUFmO0FBQUE7QUFBQSxhQURGO0FBRUUsMkNBQU8sSUFBRyxLQUFWLEVBQWdCLE1BQUssS0FBckIsRUFBMkIsTUFBSyxNQUFoQztBQUZGLFdBakJBO0FBcUJBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLGFBQWY7QUFBQTtBQUFBLGFBREY7QUFFRSwyQ0FBTyxJQUFHLGFBQVYsRUFBd0IsTUFBSyxhQUE3QixFQUEyQyxNQUFLLE1BQWhEO0FBRkY7QUFyQkEsU0FEQTtBQTRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJDLE9BREY7QUFpQ0Q7Ozs7RUF0Q2tCQyxNQUFNQyxTIiwiZmlsZSI6InNlY29uZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWNvbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibGluZTFcIj5saW5lMTwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJsaW5lMVwiIG5hbWU9XCJsaW5lMVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaW5lMlwiPmxpbmUyPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImxpbmUyXCIgbmFtZT1cImxpbmUyXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNpdHlcIj5FbnRlciBjaXR5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiBuYW1lPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFibGUgaHRtbEZvcj1cInN0YXRlXCI+RW50ZXIgc3RhdGU8L2xhYmxlPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFibGUgaHRtbEZvcj1cInppcFwiPkVudGVyIHppcDwvbGFibGU+XG4gICAgICAgIDxpbnB1dCBpZD1cInppcFwiIG5hbWU9XCJ6aXBcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmxlIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPnBob25lTnVtYmVyPC9sYWJsZT5cbiAgICAgICAgPGlucHV0IGlkPVwicGhvbmVOdW1iZXJcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgIDxidXR0b24+TkVYVDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgIFxuXG59XG4iXX0=