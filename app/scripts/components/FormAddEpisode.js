
var FormAddEpisode = React.createClass({
  style: {
    marginBottom: 50
  },
  newEpisode: function () {
  },
	render: function() {
		return (
      <div className="col-sm-6">
        <form episode={this.props.episode} onSubmit={this.newEpisode}>
          <h3 className="text-center" style={this.style}>New Episode</h3>
          <input type="text" ref="title" className="form-control" placeholder="New Title" />
          <input type="text" ref="link" placeholder="New Link" className="form-control" />
          <input type="date" ref="date" placeholder="New Date" className="form-control" />
          <input type="submit" className="btn btn-primary btn-block" value="Add new episode" />
        </form>
      </div>
		);
	}
});