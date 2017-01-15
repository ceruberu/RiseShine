"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menutabs = function (_React$Component) {
	_inherits(Menutabs, _React$Component);

	function Menutabs(props) {
		_classCallCheck(this, Menutabs);

		return _possibleConstructorReturn(this, (Menutabs.__proto__ || Object.getPrototypeOf(Menutabs)).call(this, props));
	}

	_createClass(Menutabs, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row-fluid", id: "menu" },
				React.createElement(
					"div",
					{ className: "col-md-4 col-xs-12 menutab", id: "alarmTab" },
					"Alarm"
				),
				React.createElement(
					"div",
					{ className: "col-md-4 col-xs-12 menutab", id: "songTab" },
					"Song"
				),
				React.createElement(
					"div",
					{ className: "col-md-4 col-xs-12 menutab", id: "settingsTab" },
					"Settings"
				)
			);
		}
	}]);

	return Menutabs;
}(React.Component);

window.Menutabs = Menutabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL01lbnV0YWJzLmpzIl0sIm5hbWVzIjpbIk1lbnV0YWJzIiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDTCxtQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXO0FBRWpCOzs7OzJCQUVPO0FBQ1AsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLFdBQWYsRUFBMkIsSUFBRyxNQUE5QjtBQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVUsNEJBQWYsRUFBNEMsSUFBRyxVQUEvQztBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxPQUFLLFdBQVUsNEJBQWYsRUFBNEMsSUFBRyxTQUEvQztBQUFBO0FBQUEsS0FGRjtBQUdFO0FBQUE7QUFBQSxPQUFLLFdBQVUsNEJBQWYsRUFBNEMsSUFBRyxhQUEvQztBQUFBO0FBQUE7QUFIRixJQUREO0FBT0E7Ozs7RUFicUJDLE1BQU1DLFM7O0FBZ0I3QkMsT0FBT0osUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiTWVudXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNZW51dGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdy1mbHVpZFwiIGlkPVwibWVudVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXhzLTEyIG1lbnV0YWJcIiBpZD1cImFsYXJtVGFiXCI+QWxhcm08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC14cy0xMiBtZW51dGFiXCIgaWQ9XCJzb25nVGFiXCI+U29uZzwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXhzLTEyIG1lbnV0YWJcIiBpZD1cInNldHRpbmdzVGFiXCI+U2V0dGluZ3M8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuTWVudXRhYnMgPSBNZW51dGFiczsiXX0=