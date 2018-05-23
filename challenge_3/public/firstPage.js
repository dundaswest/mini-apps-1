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
      username: '',
      email: '',
      password: ''
      //inputData:{username:this.username,email:this.email,password:this.password}
    };
    return _this;
  }

  _createClass(First, [{
    key: 'handleUserChange',
    value: function handleUserChange(e) {
      this.setState({ username: e.target.value });
      console.log(e.target.value);
    }
  }, {
    key: 'handleEmailChange',
    value: function handleEmailChange(e) {
      this.setState({ email: e.target.value });
      console.log(e.target.value);
    }
  }, {
    key: 'handlePasswordChange',
    value: function handlePasswordChange(e) {
      this.setState({ password: e.target.value });
      console.log(e.target.value);
    }
  }, {
    key: 'submit',
    value: function submit() {
      $.ajax({
        method: "POST",
        url: "http://localhost:3000",
        contentType: "application/json",
        data: JSON.stringify({ userInput: [this.state.username, this.state.email, this.state.password] })
      }).done(function (data) {
        alert("Data Saved: " + JSON.stringify(data));
      });
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
              return _this2.submit();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9maXJzdFBhZ2UuanN4Il0sIm5hbWVzIjpbIkZpcnN0IiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiY29udGVudFR5cGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJJbnB1dCIsImRvbmUiLCJhbGVydCIsImhhbmRsZVVzZXJDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsInN1Ym1pdCIsImhhbmRsZUNoZWNrT3V0QnRuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJmaXJzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQVk7QUFDVkMsY0FBUSxDQURFO0FBRVZDLGdCQUFTLEVBRkM7QUFHVkMsYUFBTSxFQUhJO0FBSVZDLGdCQUFTO0FBQ1Q7QUFMVSxLQUFaO0FBRmlCO0FBU2xCOzs7O3FDQUNnQkMsQyxFQUFFO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixVQUFTRyxFQUFFRSxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZTCxFQUFFRSxNQUFGLENBQVNDLEtBQXJCO0FBQ0Q7OztzQ0FDaUJILEMsRUFBRTtBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ0gsT0FBTUUsRUFBRUUsTUFBRixDQUFTQyxLQUFoQixFQUFkO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUwsRUFBRUUsTUFBRixDQUFTQyxLQUFyQjtBQUNEOzs7eUNBQ29CSCxDLEVBQUU7QUFDckIsV0FBS0MsUUFBTCxDQUFjLEVBQUNGLFVBQVNDLEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNBQyxjQUFRQyxHQUFSLENBQVlMLEVBQUVFLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDs7OzZCQUNRO0FBQ1BHLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxNQURIO0FBRUxDLGFBQUssdUJBRkE7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNDLFdBQVUsQ0FBQyxLQUFLbkIsS0FBTCxDQUFXRSxRQUFaLEVBQXFCLEtBQUtGLEtBQUwsQ0FBV0csS0FBaEMsRUFBc0MsS0FBS0gsS0FBTCxDQUFXSSxRQUFqRCxDQUFYLEVBQWY7QUFKRCxPQUFQLEVBTUdnQixJQU5ILENBTVEsVUFBVUosSUFBVixFQUFpQjtBQUNyQkssY0FBTyxpQkFBaUJKLEtBQUtDLFNBQUwsQ0FBZUYsSUFBZixDQUF4QjtBQUNELE9BUkg7QUFTRDs7OzZCQUVPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxVQUFVLEtBQUtNLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUEzRDtBQUZBLFdBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxPQUFWLEVBQWtCLE1BQUssT0FBdkIsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxVQUFVLEtBQUtDLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUFyRDtBQUZBLFdBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxVQUFVLEtBQUtFLG9CQUFMLENBQTBCRixJQUExQixDQUErQixJQUEvQixDQUEzRDtBQUZBO0FBVEEsU0FEQTtBQWVGO0FBQUE7QUFBQSxZQUFRLElBQUssUUFBYixFQUFzQixTQUFXO0FBQUEscUJBQUssT0FBS0csTUFBTCxFQUFMO0FBQUEsYUFBakM7QUFBQTtBQUFBLFNBZkU7QUFnQkQ7QUFBQTtBQUFBLFlBQVEsSUFBRyxVQUFYLEVBQXNCLFNBQVc7QUFBQSxxQkFBSSxPQUFLM0IsS0FBTCxDQUFXNEIsaUJBQVgsQ0FBNkIsT0FBSzNCLEtBQUwsQ0FBV0MsTUFBeEMsQ0FBSjtBQUFBLGFBQWpDO0FBQUE7QUFBQTtBQWhCQyxPQURGO0FBcUJEOzs7O0VBekRpQjJCLE1BQU1DLFM7O0FBMkQxQkMsT0FBT0MsS0FBUCxHQUFlakMsS0FBZiIsImZpbGUiOiJmaXJzdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIG51bWJlcjogMixcbiAgICAgIHVzZXJuYW1lOicnLFxuICAgICAgZW1haWw6JycsXG4gICAgICBwYXNzd29yZDonJyxcbiAgICAgIC8vaW5wdXREYXRhOnt1c2VybmFtZTp0aGlzLnVzZXJuYW1lLGVtYWlsOnRoaXMuZW1haWwscGFzc3dvcmQ6dGhpcy5wYXNzd29yZH1cbiAgICB9XG4gIH1cbiAgaGFuZGxlVXNlckNoYW5nZShlKXtcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTplLnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgaGFuZGxlRW1haWxDaGFuZ2UoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZS50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOmUudGFyZ2V0LnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBzdWJtaXQoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG4gICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7dXNlcklucHV0Olt0aGlzLnN0YXRlLnVzZXJuYW1lLHRoaXMuc3RhdGUuZW1haWwsdGhpcy5zdGF0ZS5wYXNzd29yZF19KVxuICAgICAgfSlcbiAgICAgIC5kb25lKGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgICBhbGVydCggXCJEYXRhIFNhdmVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIH0pO1xuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5FbnRlciB1c2VybmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlckNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW50ZXIgZW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5FbnRlciBwYXNzd29yZDwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPGJ1dHRvbiBpZCA9IFwic3VibWl0XCIgb25DbGljayA9IHsoKT0+IHRoaXMuc3VibWl0KCl9PnN1Ym1pdDwvYnV0dG9uPlxuICAgICA8YnV0dG9uIGlkPVwidG9TZWNvbmRcIiBvbkNsaWNrID0geygpPT50aGlzLnByb3BzLmhhbmRsZUNoZWNrT3V0QnRuKHRoaXMuc3RhdGUubnVtYmVyKX0+TkVYVDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbndpbmRvdy5maXJzdCA9IEZpcnN0O1xuIl19