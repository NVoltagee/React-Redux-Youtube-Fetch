import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_Key = "AIzaSyB9Qlk0zUcvp6UTv_32wttbHanl_eN8YXA";

// create a new component. This component should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Official Overwatch Highlights");
  }

  videoSearch(term) {
    YTSearch({ key: API_Key, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
//Take this component's generated HTML and put it
//on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
