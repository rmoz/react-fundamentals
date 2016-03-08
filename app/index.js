var USERDATA = {
	name: 'Remo Zaros',
	username: 'RMOZ',
	imageUrl: 'https://avatars1.githubusercontent.com/u/3270555?v=3&s=460'
}

var React = require('react')
var ReactDOM = require('react-dom')


var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.imageUrl} style={{height:100, width:100}} />
	}
})

var ProfileName = React.createClass({
	render: function() {
		return <div>{this.props.name}</div>
	}
})

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
})


var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.imageUrl} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
})


var Test = React.createClass({
	render: function() {
		return <div>this is a test</div>
	}
})

ReactDOM.render(
	<Avatar user={USERDATA} />, 
	document.getElementById('app') 

)
