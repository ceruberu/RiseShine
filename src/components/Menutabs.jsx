// props.activeTab = Alarm
class Menutabs extends React.Component{
	constructor(props){
		super(props);
	}
	// clickAlarm(Alarm){
	// 	this.props.handleTabClick(Alarm)
	// }
	render(){
		let active = this.props.activeTab;
		let handleAlarmClick = this.props.handleAlarmClick;
		let handleSongClick = this.props.handleSongClick;
		let handleSettingsClick = this.props.handleSettingsClick;

		return (
			<div className="row-fluid clearfix" id="menu">
					<div className={"col-md-4 col-xs-12 menutab " + (active === "Alarm"? "activeTab":"")} 
					id="alarmTab" onClick={handleAlarmClick}>Alarm</div>
					<div className={"col-md-4 col-xs-12 menutab " + (active === "Song"? "activeTab":"")} 
					id="songTab" onClick={handleSongClick}>Song</div>
					<div className={"col-md-4 col-xs-12 menutab " + (active === "Settings"? "activeTab":"")} 
					id="settingsTab" onClick={handleSettingsClick}>Settings</div>
			</div>
		)
	}
}

window.Menutabs = Menutabs;