'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var First = function (_React$Component) {
  _inherits(First, _React$Component);

  function First(props) {
    _classCallCheck(this, First);

    var _this = _possibleConstructorReturn(this, (First.__proto__ || Object.getPrototypeOf(First)).call(this, props));

    _this.state = {
      number: 2,
      name: '',
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(First, [{
    key: 'handleUserChange',
    value: function handleUserChange(e) {
      var value = e.target.value;
      this.setState({ name: value });
    }
  }, {
    key: 'handleEmailChange',
    value: function handleEmailChange(e) {
      var value = e.target.value;
      this.setState({ email: value });
    }
  }, {
    key: 'handlePasswordChange',
    value: function handlePasswordChange(e) {
      var value = e.target.value;
      this.setState({ password: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'username' },
              'Enter username'
            ),
            React.createElement('input', { id: 'username', name: 'username', type: 'text', onChange: this.handleUserChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'email' },
              'Enter email'
            ),
            React.createElement('input', { id: 'email', name: 'email', type: 'text', onChange: this.handleEmailChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'password' },
              'Enter password'
            ),
            React.createElement('input', { id: 'password', name: 'password', type: 'text', onChange: this.handlePasswordChange.bind(this) })
          )
        ),
        React.createElement(
          'button',
          { id: 'submit', onClick: function onClick() {
              return _this2.props.handleSubmitBtn([_this2.state.name, _this2.state.email, _this2.state.password].join(','));
            } },
          'submit'
        ),
        React.createElement(
          'button',
          { id: 'toSecond', onClick: function onClick() {
              return _this2.props.handleCheckOutBtn(_this2.state.number);
            } },
          'NEXT'
        )
      );
    }
  }]);

  return First;
}(React.Component);

window.first = First;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9maXJzdFBhZ2UuanN4Il0sIm5hbWVzIjpbIkZpcnN0IiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJoYW5kbGVVc2VyQ2hhbmdlIiwiYmluZCIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJoYW5kbGVTdWJtaXRCdG4iLCJqb2luIiwiaGFuZGxlQ2hlY2tPdXRCdG4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsImZpcnN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyxjQUFRLENBREU7QUFFVkMsWUFBSyxFQUZLO0FBR1ZDLGFBQU0sRUFISTtBQUlWQyxnQkFBUztBQUpDLEtBQVo7QUFGaUI7QUFRbEI7Ozs7cUNBQ2dCQyxDLEVBQUU7QUFDakIsVUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFdBQUtFLFFBQUwsQ0FBYyxFQUFDTixNQUFLSSxLQUFOLEVBQWQ7QUFDRDs7O3NDQUNpQkQsQyxFQUFFO0FBQ2xCLFVBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBckI7QUFDQSxXQUFLRSxRQUFMLENBQWMsRUFBQ0wsT0FBTUcsS0FBUCxFQUFkO0FBQ0Q7Ozt5Q0FDb0JELEMsRUFBRTtBQUNyQixVQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjLEVBQUNKLFVBQVNFLEtBQVYsRUFBZDtBQUNEOzs7NkJBRU87QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxNQUFLLE1BQTFDLEVBQWlELFVBQVUsS0FBS0csZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQTNEO0FBRkEsV0FEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLE9BQVYsRUFBa0IsTUFBSyxPQUF2QixFQUErQixNQUFLLE1BQXBDLEVBQTJDLFVBQVUsS0FBS0MsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBQXJEO0FBRkEsV0FMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLGFBREE7QUFFQSwyQ0FBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxNQUFLLE1BQTFDLEVBQWlELFVBQVUsS0FBS0Usb0JBQUwsQ0FBMEJGLElBQTFCLENBQStCLElBQS9CLENBQTNEO0FBRkE7QUFUQSxTQURBO0FBZUY7QUFBQTtBQUFBLFlBQVEsSUFBSyxRQUFiLEVBQXNCLFNBQVc7QUFBQSxxQkFBSyxPQUFLWCxLQUFMLENBQVdjLGVBQVgsQ0FBMkIsQ0FBQyxPQUFLYixLQUFMLENBQVdFLElBQVosRUFBaUIsT0FBS0YsS0FBTCxDQUFXRyxLQUE1QixFQUFrQyxPQUFLSCxLQUFMLENBQVdJLFFBQTdDLEVBQXVEVSxJQUF2RCxDQUE0RCxHQUE1RCxDQUEzQixDQUFMO0FBQUEsYUFBakM7QUFBQTtBQUFBLFNBZkU7QUFnQkQ7QUFBQTtBQUFBLFlBQVEsSUFBRyxVQUFYLEVBQXNCLFNBQVc7QUFBQSxxQkFBSSxPQUFLZixLQUFMLENBQVdnQixpQkFBWCxDQUE2QixPQUFLZixLQUFMLENBQVdDLE1BQXhDLENBQUo7QUFBQSxhQUFqQztBQUFBO0FBQUE7QUFoQkMsT0FERjtBQXFCRDs7OztFQTdDaUJlLE1BQU1DLFM7O0FBK0MxQkMsT0FBT0MsS0FBUCxHQUFlckIsS0FBZiIsImZpbGUiOiJmaXJzdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIG51bWJlcjogMixcbiAgICAgIG5hbWU6JycsXG4gICAgICBlbWFpbDonJyxcbiAgICAgIHBhc3N3b3JkOicnLFxuICAgIH1cbiAgfVxuICBoYW5kbGVVc2VyQ2hhbmdlKGUpe1xuICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6dmFsdWV9KTtcbiAgfVxuICBoYW5kbGVFbWFpbENoYW5nZShlKXtcbiAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDp2YWx1ZX0pO1xuICB9XG4gIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpe1xuICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOnZhbHVlfSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPkVudGVyIHVzZXJuYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VyQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbnRlciBlbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkVudGVyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8YnV0dG9uIGlkID0gXCJzdWJtaXRcIiBvbkNsaWNrID0geygpPT4gdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRCdG4oW3RoaXMuc3RhdGUubmFtZSx0aGlzLnN0YXRlLmVtYWlsLHRoaXMuc3RhdGUucGFzc3dvcmRdLmpvaW4oJywnKSl9PnN1Ym1pdDwvYnV0dG9uPlxuICAgICA8YnV0dG9uIGlkPVwidG9TZWNvbmRcIiBvbkNsaWNrID0geygpPT50aGlzLnByb3BzLmhhbmRsZUNoZWNrT3V0QnRuKHRoaXMuc3RhdGUubnVtYmVyKX0+TkVYVDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbndpbmRvdy5maXJzdCA9IEZpcnN0O1xuIl19