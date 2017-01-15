"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alarm = function (_React$Component) {
	_inherits(Alarm, _React$Component);

	function Alarm(props) {
		_classCallCheck(this, Alarm);

		return _possibleConstructorReturn(this, (Alarm.__proto__ || Object.getPrototypeOf(Alarm)).call(this, props));
	}

	_createClass(Alarm, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row-fluid", id: "alarm" },
				React.createElement("div", { className: "col-md-12", id: "alarmPlayer" })
			);
		}
	}]);

	return Alarm;
}(React.Component);

window.Alarm = Alarm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FsYXJtLmpzeCJdLCJuYW1lcyI6WyJBbGFybSIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0wsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx1R0FDWEEsS0FEVztBQUVqQjs7OzsyQkFFTztBQUNQLFVBRUU7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmLEVBQTJCLElBQUcsT0FBOUI7QUFDQyxpQ0FBSyxXQUFVLFdBQWYsRUFBMkIsSUFBRyxhQUE5QjtBQURELElBRkY7QUFRQTs7OztFQWRrQkMsTUFBTUMsUzs7QUFpQjFCQyxPQUFPSixLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiQWxhcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBbGFybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3ctZmx1aWRcIiBpZD1cImFsYXJtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIiBpZD1cImFsYXJtUGxheWVyXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BbGFybSA9IEFsYXJtOyJdfQ==