class Settings extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
				<div className="row-fluid" id="settings">
					<div className="col-md-12" id="settingsPlayer"/>
				</div>
		)
	}
}

window.Settings = Settings;