"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// props.activeTab = Alarm
var Menutabs = function (_React$Component) {
	_inherits(Menutabs, _React$Component);

	function Menutabs(props) {
		_classCallCheck(this, Menutabs);

		return _possibleConstructorReturn(this, (Menutabs.__proto__ || Object.getPrototypeOf(Menutabs)).call(this, props));
	}
	// clickAlarm(Alarm){
	// 	this.props.handleTabClick(Alarm)
	// }


	_createClass(Menutabs, [{
		key: "render",
		value: function render() {
			var active = this.props.activeTab;
			var handleAlarmClick = this.props.handleAlarmClick;
			var handleSongClick = this.props.handleSongClick;
			var handleSettingsClick = this.props.handleSettingsClick;

			return React.createElement(
				"div",
				{ className: "row-fluid clearfix", id: "menu" },
				React.createElement(
					"div",
					{ className: "col-md-4 col-xs-12 menutab " + (active === "Alarm" ? "activeTab" : ""),
						id: "alarmTab", onClick: handleAlarmClick },
					"Alarm"
				),
				React.createElement(
					"div",
					{ className: "col-md-4 col-xs-12 menutab " + (active === "Song" ? "activeTab" : ""),
						id: "songTab", onClick: handleSongClick },
					"Song"
				),
				React.createElement(
					"div",
					{ className: "col-md-4 col-xs-12 menutab " + (active === "Settings" ? "activeTab" : ""),
						id: "settingsTab", onClick: handleSettingsClick },
					"Settings"
				)
			);
		}
	}]);

	return Menutabs;
}(React.Component);

window.Menutabs = Menutabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lbnV0YWJzLmpzeCJdLCJuYW1lcyI6WyJNZW51dGFicyIsInByb3BzIiwiYWN0aXZlIiwiYWN0aXZlVGFiIiwiaGFuZGxlQWxhcm1DbGljayIsImhhbmRsZVNvbmdDbGljayIsImhhbmRsZVNldHRpbmdzQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBQ01BLFE7OztBQUNMLG1CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7QUFFakI7QUFDRDtBQUNBO0FBQ0E7Ozs7OzJCQUNRO0FBQ1AsT0FBSUMsU0FBUyxLQUFLRCxLQUFMLENBQVdFLFNBQXhCO0FBQ0EsT0FBSUMsbUJBQW1CLEtBQUtILEtBQUwsQ0FBV0csZ0JBQWxDO0FBQ0EsT0FBSUMsa0JBQWtCLEtBQUtKLEtBQUwsQ0FBV0ksZUFBakM7QUFDQSxPQUFJQyxzQkFBc0IsS0FBS0wsS0FBTCxDQUFXSyxtQkFBckM7O0FBRUEsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLG9CQUFmLEVBQW9DLElBQUcsTUFBdkM7QUFDRTtBQUFBO0FBQUEsT0FBSyxXQUFXLGlDQUFpQ0osV0FBVyxPQUFYLEdBQW9CLFdBQXBCLEdBQWdDLEVBQWpFLENBQWhCO0FBQ0EsVUFBRyxVQURILEVBQ2MsU0FBU0UsZ0JBRHZCO0FBQUE7QUFBQSxLQURGO0FBR0U7QUFBQTtBQUFBLE9BQUssV0FBVyxpQ0FBaUNGLFdBQVcsTUFBWCxHQUFtQixXQUFuQixHQUErQixFQUFoRSxDQUFoQjtBQUNBLFVBQUcsU0FESCxFQUNhLFNBQVNHLGVBRHRCO0FBQUE7QUFBQSxLQUhGO0FBS0U7QUFBQTtBQUFBLE9BQUssV0FBVyxpQ0FBaUNILFdBQVcsVUFBWCxHQUF1QixXQUF2QixHQUFtQyxFQUFwRSxDQUFoQjtBQUNBLFVBQUcsYUFESCxFQUNpQixTQUFTSSxtQkFEMUI7QUFBQTtBQUFBO0FBTEYsSUFERDtBQVVBOzs7O0VBdkJxQkMsTUFBTUMsUzs7QUEwQjdCQyxPQUFPVCxRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJNZW51dGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHByb3BzLmFjdGl2ZVRhYiA9IEFsYXJtXG5jbGFzcyBNZW51dGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXHQvLyBjbGlja0FsYXJtKEFsYXJtKXtcblx0Ly8gXHR0aGlzLnByb3BzLmhhbmRsZVRhYkNsaWNrKEFsYXJtKVxuXHQvLyB9XG5cdHJlbmRlcigpe1xuXHRcdGxldCBhY3RpdmUgPSB0aGlzLnByb3BzLmFjdGl2ZVRhYjtcblx0XHRsZXQgaGFuZGxlQWxhcm1DbGljayA9IHRoaXMucHJvcHMuaGFuZGxlQWxhcm1DbGljaztcblx0XHRsZXQgaGFuZGxlU29uZ0NsaWNrID0gdGhpcy5wcm9wcy5oYW5kbGVTb25nQ2xpY2s7XG5cdFx0bGV0IGhhbmRsZVNldHRpbmdzQ2xpY2sgPSB0aGlzLnByb3BzLmhhbmRsZVNldHRpbmdzQ2xpY2s7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3ctZmx1aWQgY2xlYXJmaXhcIiBpZD1cIm1lbnVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJjb2wtbWQtNCBjb2wteHMtMTIgbWVudXRhYiBcIiArIChhY3RpdmUgPT09IFwiQWxhcm1cIj8gXCJhY3RpdmVUYWJcIjpcIlwiKX0gXG5cdFx0XHRcdFx0aWQ9XCJhbGFybVRhYlwiIG9uQ2xpY2s9e2hhbmRsZUFsYXJtQ2xpY2t9PkFsYXJtPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY29sLW1kLTQgY29sLXhzLTEyIG1lbnV0YWIgXCIgKyAoYWN0aXZlID09PSBcIlNvbmdcIj8gXCJhY3RpdmVUYWJcIjpcIlwiKX0gXG5cdFx0XHRcdFx0aWQ9XCJzb25nVGFiXCIgb25DbGljaz17aGFuZGxlU29uZ0NsaWNrfT5Tb25nPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY29sLW1kLTQgY29sLXhzLTEyIG1lbnV0YWIgXCIgKyAoYWN0aXZlID09PSBcIlNldHRpbmdzXCI/IFwiYWN0aXZlVGFiXCI6XCJcIil9IFxuXHRcdFx0XHRcdGlkPVwic2V0dGluZ3NUYWJcIiBvbkNsaWNrPXtoYW5kbGVTZXR0aW5nc0NsaWNrfT5TZXR0aW5nczwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5NZW51dGFicyA9IE1lbnV0YWJzOyJdfQ==