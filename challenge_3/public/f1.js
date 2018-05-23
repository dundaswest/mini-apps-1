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
          React.createElement("input", { id: "username", name: "username", type: "text" })
        )
      );
    }
  }]);

  return First;
}(React.Component);

window.First = First;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9mMS5qc3giXSwibmFtZXMiOlsiRmlyc3QiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBQ087QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBLHlDQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLFVBQTFCLEVBQXFDLE1BQUssTUFBMUM7QUFEQTtBQURBLE9BREY7QUFPRDs7OztFQVppQkMsTUFBTUMsUzs7QUFjMUJDLE9BQU9KLEtBQVAsR0FBZUEsS0FBZiIsImZpbGUiOiJmMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpcnN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxud2luZG93LkZpcnN0ID0gRmlyc3Q7XG4iXX0=