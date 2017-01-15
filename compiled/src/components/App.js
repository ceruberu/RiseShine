"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			activeTab: Alarm
		};
		return _this;
	}

	_createClass(App, [{
		key: "changeTab",
		value: function changeTab(tab) {
			this.setState(tab);
		}
	}, {
		key: "handleAlarmClick",
		value: function handleAlarmClick() {
			this.setState({ activeTab: Alarm });
		}
	}, {
		key: "handleSettingsClick",
		value: function handleSettingsClick() {
			this.setState({ activeTab: Settings });
		}
	}, {
		key: "handleSongClick",
		value: function handleSongClick() {
			this.setState({ activeTab: Song });
		}
	}, {
		key: "render",
		value: function render() {
			var Active = this.state.activeTab;
			return React.createElement(
				"div",
				{ className: "container-fluid", id: "main" },
				React.createElement(Nav, null),
				React.createElement(Menutabs, {
					activeTab: Active.name,
					handleAlarmClick: this.handleAlarmClick.bind(this),
					handleSettingsClick: this.handleSettingsClick.bind(this),
					handleSongClick: this.handleSongClick.bind(this) }),
				React.createElement(Active, null)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZVRhYiIsIkFsYXJtIiwidGFiIiwic2V0U3RhdGUiLCJTZXR0aW5ncyIsIlNvbmciLCJBY3RpdmUiLCJuYW1lIiwiaGFuZGxlQWxhcm1DbGljayIsImJpbmQiLCJoYW5kbGVTZXR0aW5nc0NsaWNrIiwiaGFuZGxlU29uZ0NsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHdHQUNYQSxLQURXOztBQUVqQixRQUFLQyxLQUFMLEdBQVk7QUFDWEMsY0FBV0M7QUFEQSxHQUFaO0FBRmlCO0FBS2pCOzs7OzRCQUVTQyxHLEVBQUk7QUFDYixRQUFLQyxRQUFMLENBQWNELEdBQWQ7QUFDQTs7O3FDQUVpQjtBQUNqQixRQUFLQyxRQUFMLENBQWMsRUFBQ0gsV0FBV0MsS0FBWixFQUFkO0FBQ0E7Ozt3Q0FFb0I7QUFDcEIsUUFBS0UsUUFBTCxDQUFjLEVBQUNILFdBQVdJLFFBQVosRUFBZDtBQUVBOzs7b0NBRWdCO0FBQ2hCLFFBQUtELFFBQUwsQ0FBYyxFQUFDSCxXQUFXSyxJQUFaLEVBQWQ7QUFDQTs7OzJCQUlPO0FBQ1AsT0FBSUMsU0FBUyxLQUFLUCxLQUFMLENBQVdDLFNBQXhCO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGlCQUFmLEVBQWlDLElBQUcsTUFBcEM7QUFDQyx3QkFBQyxHQUFELE9BREQ7QUFFQyx3QkFBQyxRQUFEO0FBQ0MsZ0JBQVdNLE9BQU9DLElBRG5CO0FBRUMsdUJBQWtCLEtBQUtDLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUZuQjtBQUdDLDBCQUFxQixLQUFLQyxtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FIdEI7QUFJQyxzQkFBaUIsS0FBS0UsZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FKbEIsR0FGRDtBQU9DLHdCQUFDLE1BQUQ7QUFQRCxJQUREO0FBV0E7Ozs7RUF4Q2dCRyxNQUFNQyxTOztBQTJDeEJDLE9BQU9qQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGU9IHtcblx0XHRcdGFjdGl2ZVRhYjogQWxhcm1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VUYWIodGFiKXtcblx0XHR0aGlzLnNldFN0YXRlKHRhYik7XG5cdH1cblxuXHRoYW5kbGVBbGFybUNsaWNrKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiBBbGFybX0pXG5cdH1cblxuXHRoYW5kbGVTZXR0aW5nc0NsaWNrKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiBTZXR0aW5nc30pXG5cblx0fVxuXG5cdGhhbmRsZVNvbmdDbGljaygpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogU29uZ30pXG5cdH1cblxuXG5cblx0cmVuZGVyKCl7XG5cdFx0bGV0IEFjdGl2ZSA9IHRoaXMuc3RhdGUuYWN0aXZlVGFiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwibWFpblwiPlxuXHRcdFx0XHQ8TmF2IC8+XG5cdFx0XHRcdDxNZW51dGFicyBcblx0XHRcdFx0XHRhY3RpdmVUYWI9e0FjdGl2ZS5uYW1lfSBcblx0XHRcdFx0XHRoYW5kbGVBbGFybUNsaWNrPXt0aGlzLmhhbmRsZUFsYXJtQ2xpY2suYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0aGFuZGxlU2V0dGluZ3NDbGljaz17dGhpcy5oYW5kbGVTZXR0aW5nc0NsaWNrLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0aGFuZGxlU29uZ0NsaWNrPXt0aGlzLmhhbmRsZVNvbmdDbGljay5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDxBY3RpdmUgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG4iXX0=