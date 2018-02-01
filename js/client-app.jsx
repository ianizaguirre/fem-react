/* jshint strict: false */
function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired
};

function Player(props) {
	return (
		<div className="player">
			<div className="player-name">{props.name}</div>

			<div className="player-score">
				<div className="counter">
					<button className="counter-action decrement"> - </button>
					<div className="counter-score"> {props.score} </div>
					<button className="counter-action increment"> + </button>
				</div>
			</div>
		</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired
};

var PLAYERS = [
	{
		name: 'Ian Izaguirre',
		score: 52,
		id: 1
	},

	{
		name: 'Antho Marin',
		score: 28,
		id: 2
	},

	{
		name: 'Maria Izaguirre',
		score: 89,
		id: 3
	}
];

function Application(props) {
	return (
		<div className="scoreboard">
			<Header title={props.title} />

			<div className="players">
				{props.users.map(function(player) {
					return <Player name={player.name} score={player.score} key={player.id} />;
				})}
			</div>
		</div>
	);
}

let x = 5;

Application.propTypes = {
	title: React.PropTypes.string,
	users: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			score: React.PropTypes.number.isRequired,
			id: React.PropTypes.number.isRequired
		})
	).isRequired
};

Application.defaultProps = {
	title: 'Scoreboard'
};

ReactDOM.render(<Application users={PLAYERS} />, document.getElementById('container'));
