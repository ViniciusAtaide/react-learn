
var EpisodeRow = React.createClass({
	render: function () {
		return (
			<tr>
				<td>{this.props.episode.title}</td>
				<td>
					<a href={this.props.episode.link}>View</a>
				</td>
			</tr>
		);
	}
});