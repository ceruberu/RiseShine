
class App extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			activeTab: Alarm
		}
	}

	changeTab(tab){
		this.setState(tab);
	}

	handleAlarmClick(){
		this.setState({activeTab: Alarm})
	}

	handleSettingsClick(){
		this.setState({activeTab: Settings})

	}

	handleSongClick(){
		this.setState({activeTab: Song})
	}



	render(){
		let Active = this.state.activeTab;
		return (
			<div className="container-fluid" id="main">
				<Nav />
				<Menutabs 
					activeTab={Active.name} 
					handleAlarmClick={this.handleAlarmClick.bind(this)} 
					handleSettingsClick={this.handleSettingsClick.bind(this)}
					handleSongClick={this.handleSongClick.bind(this)}/>
				<Active />
			</div>
		)
	}
}

window.App = App;

