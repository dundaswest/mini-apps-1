'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Third = function (_React$Component) {
  _inherits(Third, _React$Component);

  function Third(props) {
    _classCallCheck(this, Third);

    var _this = _possibleConstructorReturn(this, (Third.__proto__ || Object.getPrototypeOf(Third)).call(this, props));

    _this.state = {
      number: 4,
      creditCard: '',
      expiryDate: '',
      CVV: '',
      billing: ''
    };
    return _this;
  }

  _createClass(Third, [{
    key: 'handlecreditCardChange',
    value: function handlecreditCardChange(e) {
      var value = e.target.value;
      this.setState({ creditCard: value });
    }
  }, {
    key: 'handleExpiryDateChange',
    value: function handleExpiryDateChange(e) {
      var value = e.target.value;
      this.setState({ expiryDate: value });
    }
  }, {
    key: 'handleCVVChange',
    value: function handleCVVChange(e) {
      var value = e.target.value;
      this.setState({ CVV: value });
    }
  }, {
    key: 'handlebillingChange',
    value: function handlebillingChange(e) {
      var value = e.target.value;
      this.setState({ billing: value });
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
              { htmlFor: 'creditCard' },
              'Enter creditCard'
            ),
            React.createElement('input', { id: 'creditCard', name: 'creditCard', type: 'text', onChange: this.handlecreditCardChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'expiry date' },
              'Enter expiry date'
            ),
            React.createElement('input', { id: 'expiry date', name: 'expiry date', type: 'text', onChange: this.handleExpiryDateChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'CVV' },
              'Enter CVV'
            ),
            React.createElement('input', { id: 'CVV', name: 'CVV,', type: 'text', onChange: this.handleCVVChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: 'billing zip code' },
              'Enter billing zip code'
            ),
            React.createElement('input', { id: 'billing zip code', name: 'billing zip code', type: 'text', onChange: this.handlebillingChange.bind(this) })
          )
        ),
        React.createElement(
          'button',
          { id: 'submit', onClick: function onClick() {
              return _this2.props.handleSubmitBtn([_this2.state.creditCard, _this2.state.expiryDate, _this2.state.CVV, _this2.state.billing].join(','));
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

  return Third;
}(React.Component);

window.third = Third;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC90aGlyZFBhZ2UuanN4Il0sIm5hbWVzIjpbIlRoaXJkIiwicHJvcHMiLCJzdGF0ZSIsIm51bWJlciIsImNyZWRpdENhcmQiLCJleHBpcnlEYXRlIiwiQ1ZWIiwiYmlsbGluZyIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInNldFN0YXRlIiwiaGFuZGxlY3JlZGl0Q2FyZENoYW5nZSIsImJpbmQiLCJoYW5kbGVFeHBpcnlEYXRlQ2hhbmdlIiwiaGFuZGxlQ1ZWQ2hhbmdlIiwiaGFuZGxlYmlsbGluZ0NoYW5nZSIsImhhbmRsZVN1Ym1pdEJ0biIsImpvaW4iLCJoYW5kbGVDaGVja091dEJ0biIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93IiwidGhpcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFZO0FBQ1ZDLGNBQVEsQ0FERTtBQUVWQyxrQkFBVyxFQUZEO0FBR1ZDLGtCQUFXLEVBSEQ7QUFJVkMsV0FBSSxFQUpNO0FBS1ZDLGVBQVE7QUFMRSxLQUFaO0FBRmlCO0FBU2xCOzs7OzJDQUNzQkMsQyxFQUFFO0FBQ3ZCLFVBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBckI7QUFDQSxXQUFLRSxRQUFMLENBQWMsRUFBQ1AsWUFBV0ssS0FBWixFQUFkO0FBQ0Q7OzsyQ0FDc0JELEMsRUFBRTtBQUN2QixVQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjLEVBQUNOLFlBQVdJLEtBQVosRUFBZDtBQUNEOzs7b0NBQ2VELEMsRUFBRTtBQUNoQixVQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjLEVBQUNMLEtBQUlHLEtBQUwsRUFBZDtBQUNEOzs7d0NBQ21CRCxDLEVBQUU7QUFDcEIsVUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFdBQUtFLFFBQUwsQ0FBYyxFQUFDSixTQUFRRSxLQUFULEVBQWQ7QUFDRDs7OzZCQUNPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxZQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxZQUFWLEVBQXVCLE1BQUssWUFBNUIsRUFBeUMsTUFBSyxNQUE5QyxFQUFvRCxVQUFVLEtBQUtHLHNCQUFMLENBQTRCQyxJQUE1QixDQUFpQyxJQUFqQyxDQUE5RDtBQUZBLFdBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxhQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxhQUFWLEVBQXdCLE1BQUssYUFBN0IsRUFBMkMsTUFBSyxNQUFoRCxFQUF1RCxVQUFVLEtBQUtDLHNCQUFMLENBQTRCRCxJQUE1QixDQUFpQyxJQUFqQyxDQUFqRTtBQUZBLFdBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxLQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxLQUFWLEVBQWdCLE1BQUssTUFBckIsRUFBNEIsTUFBSyxNQUFqQyxFQUF3QyxVQUFVLEtBQUtFLGVBQUwsQ0FBcUJGLElBQXJCLENBQTBCLElBQTFCLENBQWxEO0FBRkEsV0FUQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLGtCQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEsMkNBQU8sSUFBRyxrQkFBVixFQUE2QixNQUFLLGtCQUFsQyxFQUFxRCxNQUFLLE1BQTFELEVBQWdFLFVBQVUsS0FBS0csbUJBQUwsQ0FBeUJILElBQXpCLENBQThCLElBQTlCLENBQTFFO0FBRkE7QUFiQSxTQURBO0FBbUJGO0FBQUE7QUFBQSxZQUFRLElBQUssUUFBYixFQUFzQixTQUFXO0FBQUEscUJBQUssT0FBS1osS0FBTCxDQUFXZ0IsZUFBWCxDQUEyQixDQUFDLE9BQUtmLEtBQUwsQ0FBV0UsVUFBWixFQUF1QixPQUFLRixLQUFMLENBQVlHLFVBQW5DLEVBQThDLE9BQUtILEtBQUwsQ0FBV0ksR0FBekQsRUFBNkQsT0FBS0osS0FBTCxDQUFXSyxPQUF4RSxFQUFpRlcsSUFBakYsQ0FBc0YsR0FBdEYsQ0FBM0IsQ0FBTDtBQUFBLGFBQWpDO0FBQUE7QUFBQSxTQW5CRTtBQW9CRDtBQUFBO0FBQUEsWUFBUSxTQUFXO0FBQUEscUJBQUksT0FBS2pCLEtBQUwsQ0FBV2tCLGlCQUFYLENBQTZCLE9BQUtqQixLQUFMLENBQVdDLE1BQXhDLENBQUo7QUFBQSxhQUFuQjtBQUFBO0FBQUE7QUFwQkMsT0FERjtBQXlCRDs7OztFQXJEaUJpQixNQUFNQyxTOztBQXVEMUJDLE9BQU9DLEtBQVAsR0FBZXZCLEtBQWYiLCJmaWxlIjoidGhpcmRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGhpcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBudW1iZXI6IDQsXG4gICAgICBjcmVkaXRDYXJkOicnLFxuICAgICAgZXhwaXJ5RGF0ZTonJyxcbiAgICAgIENWVjonJyxcbiAgICAgIGJpbGxpbmc6JycsXG4gICAgfVxuICB9XG4gIGhhbmRsZWNyZWRpdENhcmRDaGFuZ2UoZSl7XG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3JlZGl0Q2FyZDp2YWx1ZX0pO1xuICB9XG4gIGhhbmRsZUV4cGlyeURhdGVDaGFuZ2UoZSl7XG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXhwaXJ5RGF0ZTp2YWx1ZX0pO1xuICB9XG4gIGhhbmRsZUNWVkNoYW5nZShlKXtcbiAgICB2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtDVlY6dmFsdWV9KTtcbiAgfVxuICBoYW5kbGViaWxsaW5nQ2hhbmdlKGUpe1xuICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2JpbGxpbmc6dmFsdWV9KTtcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxmb3JtPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3JlZGl0Q2FyZFwiPkVudGVyIGNyZWRpdENhcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiY3JlZGl0Q2FyZFwiIG5hbWU9XCJjcmVkaXRDYXJkXCIgdHlwZT1cInRleHRcIm9uQ2hhbmdlPXt0aGlzLmhhbmRsZWNyZWRpdENhcmRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleHBpcnkgZGF0ZVwiPkVudGVyIGV4cGlyeSBkYXRlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cImV4cGlyeSBkYXRlXCIgbmFtZT1cImV4cGlyeSBkYXRlXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFeHBpcnlEYXRlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiQ1ZWXCI+RW50ZXIgQ1ZWPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cIkNWVlwiIG5hbWU9XCJDVlYsXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDVlZDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaWxsaW5nIHppcCBjb2RlXCI+RW50ZXIgYmlsbGluZyB6aXAgY29kZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJiaWxsaW5nIHppcCBjb2RlXCIgbmFtZT1cImJpbGxpbmcgemlwIGNvZGVcIiB0eXBlPVwidGV4dFwib25DaGFuZ2U9e3RoaXMuaGFuZGxlYmlsbGluZ0NoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8YnV0dG9uIGlkID0gXCJzdWJtaXRcIiBvbkNsaWNrID0geygpPT4gdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRCdG4oW3RoaXMuc3RhdGUuY3JlZGl0Q2FyZCx0aGlzLnN0YXRlLiBleHBpcnlEYXRlLHRoaXMuc3RhdGUuQ1ZWLHRoaXMuc3RhdGUuYmlsbGluZ10uam9pbignLCcpKX0+c3VibWl0PC9idXR0b24+XG4gICAgIDxidXR0b24gb25DbGljayA9IHsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDaGVja091dEJ0bih0aGlzLnN0YXRlLm51bWJlcil9Pk5FWFQ8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG53aW5kb3cudGhpcmQgPSBUaGlyZDtcbiJdfQ==