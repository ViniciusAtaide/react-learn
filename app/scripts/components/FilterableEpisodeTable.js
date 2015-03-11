var episodes = [{
  title: 'Angular with Yeoman',
  link: 'http://tagtree.tv/angular-with-yeoman',
  date: new Date(2013,11,14)
},{
  title: 'Using d3 with Rickshaw and Angular',
  link: 'http://tagtree.tv/d3-with-rickshaw-and-angular',
  date: new Date(2013,11,30)
},{
  title: 'Canvas with paper.js',
  link: 'http://tagtree.tv/canvas-with-paper-js',
  date: new Date(2014,0,29)
},{
  title: 'yay.js',
  link: 'www.google.com',
  date: new Date(2014,0,29)
}];



var FilterableEpisodeTable = React.createClass({
	getInitialState: function () {
		return {
			filterText: '',
			episodes: episodes
		};
	},
	onFilterInput: function (filterText) {
		this.setState({
			filterText: filterText
		});		
	},
	onAddEpisode: function (episode) {	
		this.setState({
			episodes: episodes.concat([episode])
		});
	},
  newEpisode: function () {

  },

	render: function() {
		return (
			<div className="col-sm-12">
				<SearchBar onFilterInput={this.onFilterInput} filterText={this.state.filterText}/>
				<EpisodeTable episodes={this.state.episodes}  filterText={this.state.filterText} />
        <FormAddEpisode episode={this.state.newEpisode} />
      </div>
		);
	}
});

React.render(<FilterableEpisodeTable />, document.getElementById('container'));