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
          "div",
          null,
          this.props.finalInfo
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.props.handleCheckOutBtn(_this2.state.number);
            } },
          "GoBack"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.props.confirm(_this2.props.finalInfo);
            } },
          "CHECKOUT"
        )
      );
    }
  }]);

  return Confirmation;
}(React.Component);

window.confirmation = Confirmation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9jb25maXJtYXRpb25QYWdlLmpzeCJdLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJwcm9wcyIsInN0YXRlIiwibnVtYmVyIiwiZmluYWxJbmZvIiwiaGFuZGxlQ2hlY2tPdXRCdG4iLCJjb25maXJtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJjb25maXJtYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw0SEFDVkEsS0FEVTs7QUFBQSw0SEFFVkEsS0FGVTs7QUFHaEIsVUFBS0MsS0FBTCxHQUFZO0FBQ1ZDLGNBQVE7QUFERSxLQUFaO0FBSGdCO0FBTWpCOzs7OzZCQUNPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQSxxQ0FBSyxJQUFJLFNBQVQsR0FGQTtBQUdBO0FBQUE7QUFBQTtBQUFNLGVBQUtGLEtBQUwsQ0FBV0c7QUFBakIsU0FIQTtBQUlBO0FBQUE7QUFBQSxZQUFTLFNBQVc7QUFBQSxxQkFBSSxPQUFLSCxLQUFMLENBQVdJLGlCQUFYLENBQTZCLE9BQUtILEtBQUwsQ0FBV0MsTUFBeEMsQ0FBSjtBQUFBLGFBQXBCO0FBQUE7QUFBQSxTQUpBO0FBS0E7QUFBQTtBQUFBLFlBQVEsU0FBVztBQUFBLHFCQUFLLE9BQUtGLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQixPQUFLTCxLQUFMLENBQVdHLFNBQTlCLENBQUw7QUFBQSxhQUFuQjtBQUFBO0FBQUE7QUFMQSxPQURGO0FBU0Q7Ozs7RUFsQndCRyxNQUFNQyxTOztBQW9CakNDLE9BQU9DLFlBQVAsR0FBc0JWLFlBQXRCIiwiZmlsZSI6ImNvbmZpcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBudW1iZXI6IDBcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2PkNvbmZpcm1hdGlvbjwvZGl2PlxuICAgICAgPGRpdiBpZCA9XCJjb25maXJtXCI+PC9kaXY+XG4gICAgICA8ZGl2Pnt0aGlzLnByb3BzLmZpbmFsSW5mb308L2Rpdj5cbiAgICAgIDxidXR0b24gIG9uQ2xpY2sgPSB7KCk9PnRoaXMucHJvcHMuaGFuZGxlQ2hlY2tPdXRCdG4odGhpcy5zdGF0ZS5udW1iZXIpfT5Hb0JhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljayA9IHsoKT0+IHRoaXMucHJvcHMuY29uZmlybSh0aGlzLnByb3BzLmZpbmFsSW5mbyl9PkNIRUNLT1VUPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuY29uZmlybWF0aW9uID0gQ29uZmlybWF0aW9uO1xuIl19