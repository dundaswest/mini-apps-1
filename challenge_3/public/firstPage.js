"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var First = function (_React$Component) {
  _inherits(First, _React$Component);

  function First(props) {
    _classCallCheck(this, First);

    return _possibleConstructorReturn(this, (First.__proto__ || Object.getPrototypeOf(First)).call(this, props));
  }

  _createClass(First, [{
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
              { htmlFor: "username" },
              "Enter username"
            ),
            React.createElement("input", { id: "username", name: "username", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "username" },
              "Enter email"
            ),
            React.createElement("input", { id: "email", name: "email", type: "text" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "password" },
              "Enter password"
            ),
            React.createElement("input", { id: "password", name: "password", type: "text" })
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

  return First;
}(React.Component);

window.First = First;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9maXJzdFBhZ2UuanN4Il0sIm5hbWVzIjpbIkZpcnN0IiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxNQUExQztBQUZBLFdBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxPQUFWLEVBQWtCLE1BQUssT0FBdkIsRUFBK0IsTUFBSyxNQUFwQztBQUZBLFdBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxNQUExQztBQUZBO0FBVEEsU0FEQTtBQWdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJDLE9BREY7QUFxQkQ7Ozs7RUExQmlCQyxNQUFNQyxTOztBQTRCMUJDLE9BQU9KLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJmaXJzdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPkVudGVyIHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+RW50ZXIgZW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5FbnRlciBwYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgPGJ1dHRvbj5ORVhUPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxud2luZG93LkZpcnN0ID0gRmlyc3Q7XG4iXX0=