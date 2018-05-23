"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirmation = function (_React$Component) {
  _inherits(Confirmation, _React$Component);

  function Confirmation(props) {
    _classCallCheck(this, Confirmation);

    var _this = _possibleConstructorReturn(this, (Confirmation.__proto__ || Object.getPrototypeOf(Confirmation)).call(this, props));

    var _this = _possibleConstructorReturn(this, (Confirmation.__proto__ || Object.getPrototypeOf(Confirmation)).call(this, props));

    _this.state = {
      number: 0
    };
    return _this;
  }

  _createClass(Confirmation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "Confirmation"
        ),
        React.createElement("div", { id: "confirm" }),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.props.handleCheckOutBtn(_this2.state.number);
            } },
          "Purchase"
        )
      );
    }
  }]);

  return Confirmation;
}(React.Component);

window.confirmation = Confirmation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb25maXJtYXRpb25QYWdlLmpzeCJdLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJwcm9wcyIsInN0YXRlIiwibnVtYmVyIiwiaGFuZGxlQ2hlY2tPdXRCdG4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsImNvbmZpcm1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDRIQUNWQSxLQURVOztBQUFBLDRIQUVWQSxLQUZVOztBQUdoQixVQUFLQyxLQUFMLEdBQVk7QUFDVkMsY0FBUTtBQURFLEtBQVo7QUFIZ0I7QUFNakI7Ozs7NkJBQ087QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBLHFDQUFLLElBQUksU0FBVCxHQUZBO0FBR0E7QUFBQTtBQUFBLFlBQVMsU0FBVztBQUFBLHFCQUFJLE9BQUtGLEtBQUwsQ0FBV0csaUJBQVgsQ0FBNkIsT0FBS0YsS0FBTCxDQUFXQyxNQUF4QyxDQUFKO0FBQUEsYUFBcEI7QUFBQTtBQUFBO0FBSEEsT0FERjtBQU9EOzs7O0VBaEJ3QkUsTUFBTUMsUzs7QUFrQmpDQyxPQUFPQyxZQUFQLEdBQXNCUixZQUF0QiIsImZpbGUiOiJjb25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZT0ge1xuICAgICAgbnVtYmVyOiAwXG4gICAgfVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj5Db25maXJtYXRpb248L2Rpdj5cbiAgICAgIDxkaXYgaWQgPVwiY29uZmlybVwiPjwvZGl2PlxuICAgICAgPGJ1dHRvbiAgb25DbGljayA9IHsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDaGVja091dEJ0bih0aGlzLnN0YXRlLm51bWJlcil9PlB1cmNoYXNlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuY29uZmlybWF0aW9uID0gQ29uZmlybWF0aW9uO1xuIl19