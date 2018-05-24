'use strict';

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
      number: 3,
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phoneNumber: ''
    };
    return _this;
  }

  _createClass(Second, [{
    key: 'handleLine1Change',
    value: function handleLine1Change(e) {
      var value = e.target.value;
      this.setState({ line1: value });
    }
  }, {
    key: 'handleLine2Change',
    value: function handleLine2Change(e) {
      var value = e.target.value;
      this.setState({ line2: value });
    }
  }, {
    key: 'handleCityChange',
    value: function handleCityChange(e) {
      var value = e.target.value;
      this.setState({ city: value });
    }
  }, {
    key: 'handleStateChange',
    value: function handleStateChange(e) {
      var value = e.target.value;
      this.setState({ state: value });
    }
  }, {
    key: 'handleZipChange',
    value: function handleZipChange(e) {
      var value = e.target.value;
      this.setState({ zip: value });
    }
  }, {
    key: 'handlePhoneNumberChange',
    value: function handlePhoneNumberChange(e) {
      var value = e.target.value;
      this.setState({ phoneNumber: value });
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
              { htmlFor: 'line1' },
              'line1'
            ),
            React.createElement('input', { id: 'line1', name: 'line1', type: 'text', onChange: this.handleLine1Change.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'line2' },
              'line2'
            ),
            React.createElement('input', { id: 'line2', name: 'line2', type: 'text', onChange: this.handleLine2Change.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'city' },
              'Enter city'
            ),
            React.createElement('input', { id: 'city', name: 'city', type: 'text', onChange: this.handleCityChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'lable',
              { htmlFor: 'state' },
              'Enter state'
            ),
            React.createElement('input', { id: 'state', name: 'state', type: 'text', onChange: this.handleStateChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'lable',
              { htmlFor: 'zip' },
              'Enter zip'
            ),
            React.createElement('input', { id: 'zip', name: 'zip', type: 'text', onChange: this.handleZipChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'lable',
              { htmlFor: 'phoneNumber' },
              'phoneNumber'
            ),
            React.createElement('input', { id: 'phoneNumber', name: 'phoneNumber', type: 'text', onChange: this.handlePhoneNumberChange.bind(this) })
          )
        ),
        React.createElement(
          'button',
          { id: 'submit',
            onClick: function onClick() {
              return _this2.props.handleSubmitBtn([_this2.state.line1, _this2.state.line2, _this2.state.city, _this2.state.state, _this2.state.zip, _this2.state.phoneNumber].join(','));
            } },
          'submit'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.handleCheckOutBtn(_this2.state.number);
            } },
          'NEXT'
        )
      );
    }
  }]);

  return Second;
}(React.Component);

window.second = Second;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9zZWNvbmRQYWdlLmpzeCJdLCJuYW1lcyI6WyJTZWNvbmQiLCJwcm9wcyIsInN0YXRlIiwibnVtYmVyIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXAiLCJwaG9uZU51bWJlciIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInNldFN0YXRlIiwiaGFuZGxlTGluZTFDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlTGluZTJDaGFuZ2UiLCJoYW5kbGVDaXR5Q2hhbmdlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJoYW5kbGVaaXBDaGFuZ2UiLCJoYW5kbGVQaG9uZU51bWJlckNoYW5nZSIsImhhbmRsZVN1Ym1pdEJ0biIsImpvaW4iLCJoYW5kbGVDaGVja091dEJ0biIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsZ0hBQ1ZBLEtBRFU7O0FBRWhCLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyxjQUFRLENBREU7QUFFVkMsYUFBTSxFQUZJO0FBR1ZDLGFBQU0sRUFISTtBQUlWQyxZQUFLLEVBSks7QUFLVkosYUFBTSxFQUxJO0FBTVZLLFdBQUksRUFOTTtBQU9WQyxtQkFBWTtBQVBGLEtBQVo7QUFGZ0I7QUFXakI7Ozs7c0NBRWlCQyxDLEVBQUU7QUFDbEIsVUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFdBQUtFLFFBQUwsQ0FBYyxFQUFDUixPQUFNTSxLQUFQLEVBQWQ7QUFDRDs7O3NDQUNpQkQsQyxFQUFFO0FBQ2xCLFVBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBckI7QUFDQSxXQUFLRSxRQUFMLENBQWMsRUFBQ1AsT0FBTUssS0FBUCxFQUFkO0FBQ0Q7OztxQ0FDZ0JELEMsRUFBRTtBQUNqQixVQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0EsV0FBS0UsUUFB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QTNCQTtBQTZCRDtBQUFBO0FBQUEsWUFBUSxTQUFXO0FBQUEscUJBQUksT0FBS3BCLEtBQUwsQ0FBV3FCLGlCQUFYLENBQTZCLE9BQUtwQixLQUFMLENBQVdDLE1BQXhDLENBQUo7QUFBQSxhQUFuQjtBQUFBO0FBQUE7QUE3QkMsT0FERjtBQWtDRDs7OztFQTFFa0JvQixNQUFNQyxTOztBQStFM0JDLE9BQU9DLE1BQVAsR0FBaUIxQixNQUFqQiIsImZpbGUiOiJzZWNvbmRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2Vjb25kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBudW1iZXI6IDMsXG4gICAgICBsaW5lMTonJyxcbiAgICAgIGxpbmUyOicnLFxuICAgICAgY2l0eTonJyxcbiAgICAgIHN0YXRlOicnLFxuICAgICAgemlwOicnLFxuICAgICAgcGhvbmVOdW1iZXI6JydcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMaW5lMUNoYW5nZShlKXtcbiAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtsaW5lMTp2YWx1ZX0pO1xuICB9XG4gIGhhbmRsZUxpbmUyQ2hhbmdlKGUpe1xuICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2xpbmUyOnZhbHVlfSk7XG4gIH1cbiAgaGFuZGxlQ2l0eUNoYW5nZShlKXtcbiAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtjaXR5OnZhbHVlfSk7XG4gIH1cbiAgaGFuZGxlU3RhdGVDaGFuZ2UoZSl7XG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RhdGU6dmFsdWV9KTtcbiAgfVxuICBoYW5kbGVaaXBDaGFuZ2UoZSl7XG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7emlwOnZhbHVlfSk7XG4gIH1cbiAgaGFuZGxlUGhvbmVOdW1iZXJDaGFuZ2UoZSl7XG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmVOdW1iZXI6dmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibGluZTFcIj5saW5lMTwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJsaW5lMVwiIG5hbWU9XCJsaW5lMVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTGluZTFDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaW5lMlwiPmxpbmUyPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImxpbmUyXCIgbmFtZT1cImxpbmUyXCIgdHlwZT1cInRleHRcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTGluZTJDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaXR5XCI+RW50ZXIgY2l0eTwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgbmFtZT1cImNpdHlcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNpdHlDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFibGUgaHRtbEZvcj1cInN0YXRlXCI+RW50ZXIgc3RhdGU8L2xhYmxlPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCJvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJsZSBodG1sRm9yPVwiemlwXCI+RW50ZXIgemlwPC9sYWJsZT5cbiAgICAgICAgPGlucHV0IGlkPVwiemlwXCIgbmFtZT1cInppcFwiIHR5cGU9XCJ0ZXh0XCJvbkNoYW5nZT17dGhpcy5oYW5kbGVaaXBDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFibGUgaHRtbEZvcj1cInBob25lTnVtYmVyXCI+cGhvbmVOdW1iZXI8L2xhYmxlPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwaG9uZU51bWJlclwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHR5cGU9XCJ0ZXh0XCJvbkNoYW5nZT17dGhpcy5oYW5kbGVQaG9uZU51bWJlckNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gaWQgPSBcInN1Ym1pdFwiXG4gICAgICBvbkNsaWNrID0geygpPT4gdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRCdG4oW3RoaXMuc3RhdGUubGluZTEsdGhpcy5zdGF0ZS5saW5lMix0aGlzLnN0YXRlLmNpdHksdGhpcy5zdGF0ZS5zdGF0ZSx0aGlzLnN0YXRlLnppcCx0aGlzLnN0YXRlLnBob25lTnVtYmVyXS5qb2luKCcsJykpfSA+c3VibWl0PC9idXR0b24+XG4gICAgIDxidXR0b24gb25DbGljayA9IHsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDaGVja091dEJ0bih0aGlzLnN0YXRlLm51bWJlcil9Pk5FWFQ8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gICBcblxufVxuXG53aW5kb3cuc2Vjb25kID0gIFNlY29uZDtcbiJdfQ==