"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_React$Component) {
	_inherits(Settings, _React$Component);

	function Settings(props) {
		_classCallCheck(this, Settings);

		return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));
	}

	_createClass(Settings, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row-fluid", id: "settings" },
				React.createElement("div", { className: "col-md-12", id: "settingsPlayer" })
			);
		}
	}]);

	return Settings;
}(React.Component);

window.Settings = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzLmpzeCJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0wsbUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDWEEsS0FEVztBQUVqQjs7OzsyQkFDTztBQUNQLFVBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmLEVBQTJCLElBQUcsVUFBOUI7QUFDQyxpQ0FBSyxXQUFVLFdBQWYsRUFBMkIsSUFBRyxnQkFBOUI7QUFERCxJQURGO0FBS0E7Ozs7RUFWcUJDLE1BQU1DLFM7O0FBYTdCQyxPQUFPSixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJTZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3ctZmx1aWRcIiBpZD1cInNldHRpbmdzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBpZD1cInNldHRpbmdzUGxheWVyXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LlNldHRpbmdzID0gU2V0dGluZ3M7Il19