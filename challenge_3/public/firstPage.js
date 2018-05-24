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
      //axios 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9maXJzdFBhZ2UuanN4Il0sIm5hbWVzIjpbIkZpcnN0IiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiY29udGVudFR5cGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJJbnB1dCIsImRvbmUiLCJhbGVydCIsImhhbmRsZVVzZXJDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsInN1Ym1pdCIsImhhbmRsZUNoZWNrT3V0QnRuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJmaXJzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQVk7QUFDVkMsY0FBUSxDQURFO0FBRVZDLGdCQUFTLEVBRkM7QUFHVkMsYUFBTSxFQUhJO0FBSVZDLGdCQUFTO0FBSkMsS0FBWjtBQUZpQjtBQVFsQjs7OztxQ0FDZ0JDLEMsRUFBRTtBQUNqQixXQUFLQyxRQUFMLENBQWMsRUFBQ0osVUFBU0csRUFBRUUsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUwsRUFBRUUsTUFBRixDQUFTQyxLQUFyQjtBQUNEOzs7c0NBQ2lCSCxDLEVBQUU7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNILE9BQU1FLEVBQUVFLE1BQUYsQ0FBU0MsS0FBaEIsRUFBZDtBQUNBQyxjQUFRQyxHQUFSLENBQVlMLEVBQUVFLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDs7O3lDQUNvQkgsQyxFQUFFO0FBQ3JCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDRixVQUFTQyxFQUFFRSxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDQUMsY0FBUUMsR0FBUixDQUFZTCxFQUFFRSxNQUFGLENBQVNDLEtBQXJCO0FBQ0Q7Ozs2QkFDUTtBQUNQO0FBQ0FHLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxNQURIO0FBRUxDLGFBQUssdUJBRkE7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNDLFdBQVUsQ0FBQyxLQUFLbkIsS0FBTCxDQUFXRSxRQUFaLEVBQXFCLEtBQUtGLEtBQUwsQ0FBV0csS0FBaEMsRUFBc0MsS0FBS0gsS0FBTCxDQUFXSSxRQUFqRCxDQUFYLEVBQWY7QUFKRCxPQUFQLEVBTUdnQixJQU5ILENBTVEsVUFBVUosSUFBVixFQUFpQjtBQUNyQkssY0FBTyxpQkFBaUJKLEtBQUtDLFNBQUwsQ0FBZUYsSUFBZixDQUF4QjtBQUNELE9BUkg7QUFTRDs7OzZCQUVPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxVQUFVLEtBQUtNLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUEzRDtBQUZBLFdBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxPQUFWLEVBQWtCLE1BQUssT0FBdkIsRUFBK0IsTUFBSyxNQUFwQyxFQUEyQyxVQUFVLEtBQUtDLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUFyRDtBQUZBLFdBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxVQUFVLEtBQUtFLG9CQUFMLENBQTBCRixJQUExQixDQUErQixJQUEvQixDQUEzRDtBQUZBO0FBVEEsU0FEQTtBQWVGO0FBQUE7QUFBQSxZQUFRLElBQUssUUFBYixFQUFzQixTQUFXO0FBQUEscUJBQUssT0FBS0csTUFBTCxFQUFMO0FBQUEsYUFBakM7QUFBQTtBQUFBLFNBZkU7QUFnQkQ7QUFBQTtBQUFBLFlBQVEsSUFBRyxVQUFYLEVBQXNCLFNBQVc7QUFBQSxxQkFBSSxPQUFLM0IsS0FBTCxDQUFXNEIsaUJBQVgsQ0FBNkIsT0FBSzNCLEtBQUwsQ0FBV0MsTUFBeEMsQ0FBSjtBQUFBLGFBQWpDO0FBQUE7QUFBQTtBQWhCQyxPQURGO0FBcUJEOzs7O0VBekRpQjJCLE1BQU1DLFM7O0FBMkQxQkMsT0FBT0MsS0FBUCxHQUFlakMsS0FBZiIsImZpbGUiOiJmaXJzdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGaXJzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIG51bWJlcjogMixcbiAgICAgIHVzZXJuYW1lOicnLFxuICAgICAgZW1haWw6JycsXG4gICAgICBwYXNzd29yZDonJ1xuICAgIH1cbiAgfVxuICBoYW5kbGVVc2VyQ2hhbmdlKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOmUudGFyZ2V0LnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBoYW5kbGVFbWFpbENoYW5nZShlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDplLnRhcmdldC52YWx1ZX0pXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6ZS50YXJnZXQudmFsdWV9KVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICAvL2F4aW9zIFxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe3VzZXJJbnB1dDpbdGhpcy5zdGF0ZS51c2VybmFtZSx0aGlzLnN0YXRlLmVtYWlsLHRoaXMuc3RhdGUucGFzc3dvcmRdfSlcbiAgICAgIH0pXG4gICAgICAuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcbiAgICAgICAgYWxlcnQoIFwiRGF0YSBTYXZlZDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICB9KTtcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+RW50ZXIgdXNlcm5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVudGVyIGVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+RW50ZXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDxidXR0b24gaWQgPSBcInN1Ym1pdFwiIG9uQ2xpY2sgPSB7KCk9PiB0aGlzLnN1Ym1pdCgpfT5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgPGJ1dHRvbiBpZD1cInRvU2Vjb25kXCIgb25DbGljayA9IHsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDaGVja091dEJ0bih0aGlzLnN0YXRlLm51bWJlcil9Pk5FWFQ8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG53aW5kb3cuZmlyc3QgPSBGaXJzdDtcbiJdfQ==