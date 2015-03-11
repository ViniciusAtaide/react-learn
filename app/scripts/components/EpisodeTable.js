var EpisodeTable = React.createClass({
  newEpisode: function (e) {

    e.preventDefault();

  },
	render: function () {
		var props = this.props;
		
		var rows = this.props.episodes
		.filter(function (episode) {
			return episode.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
		})
		.map(function (episode) {
			return <EpisodeRow key={episode.title} episode={episode} />
		});

		return (
      <div className="col-sm-6">
        <h3 className="text-center">Episode List</h3>
        <table className="table table-hover table-stripped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
		);
	}
});
