import React, { useEffect, useState } from "react";
//import axios from "axios";
import SearchBar from "./SearchBar";
//import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, searchVideos] = useVideos('错位时空');


  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={searchVideos} />

      <div class="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={ selectedVideo } />
          </div>

          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>

    </div>
  );

  
};

export default App;
