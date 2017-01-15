"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Song = function (_React$Component) {
	_inherits(Song, _React$Component);

	function Song(props) {
		_classCallCheck(this, Song);

		return _possibleConstructorReturn(this, (Song.__proto__ || Object.getPrototypeOf(Song)).call(this, props));
	}

	_createClass(Song, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row-fluid", id: "song" },
				React.createElement("div", { className: "col-md-12", id: "songPlayer" })
			);
		}
	}]);

	return Song;
}(React.Component);

window.Song = Song;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NvbmcuanN4Il0sIm5hbWVzIjpbIlNvbmciLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNMLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxxR0FDWEEsS0FEVztBQUVqQjs7OzsyQkFDTztBQUNQLFVBRUU7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmLEVBQTJCLElBQUcsTUFBOUI7QUFDQyxpQ0FBSyxXQUFVLFdBQWYsRUFBMkIsSUFBRyxZQUE5QjtBQURELElBRkY7QUFTQTs7OztFQWRpQkMsTUFBTUMsUzs7QUFrQnpCQyxPQUFPSixJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoiU29uZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNvbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3ctZmx1aWRcIiBpZD1cInNvbmdcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiIGlkPVwic29uZ1BsYXllclwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdClcblxuXHR9XG5cbn1cblxud2luZG93LlNvbmcgPSBTb25nOyJdfQ==