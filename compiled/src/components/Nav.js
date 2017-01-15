"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
	_inherits(Nav, _React$Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
	}

	_createClass(Nav, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row-fluid", id: "nav" },
				React.createElement(
					"span",
					{ id: "logo" },
					React.createElement(
						"a",
						null,
						"Rise and Shine"
					)
				)
			);
		}
	}]);

	return Nav;
}(React.Component);

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsbUdBQ1hBLEtBRFc7QUFHakI7Ozs7MkJBRU87QUFDUCxVQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLEtBQTlCO0FBQ0M7QUFBQTtBQUFBLE9BQU0sSUFBRyxNQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREQsSUFERjtBQU9BOzs7O0VBZGdCQyxNQUFNQyxTOztBQWlCeEJDLE9BQU9KLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93LWZsdWlkXCIgaWQ9XCJuYXZcIj5cblx0XHRcdFx0XHQ8c3BhbiBpZD1cImxvZ29cIj5cblx0XHRcdFx0XHRcdCA8YT5SaXNlIGFuZCBTaGluZTwvYT5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuTmF2ID0gTmF2OyJdfQ==