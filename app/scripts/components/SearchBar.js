var SearchBar = React.createClass({
	handleChange: function () {
		this.props.onFilterInput(
			this.refs.filterTextInput.getDOMNode().value
		);
	},
	render: function () {
		return (
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<input ref="filterTextInput" type="search" value={this.props.filterText} onChange={this.handleChange} className="form-control" placeholder="Search for episode" />
				</div>
			</div>
		);
	}
});