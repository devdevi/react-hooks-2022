import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos"
import usePosts from "../hooks/usePosts";
const App = () => {
  const [videos, search] = useVideos("buildings");
  const [posts] = usePosts()
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  const renderPosts = () => posts.map(post => {
    return <li key={post.key}>{JSON.stringify(post.title)}</li>
   })

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <ul>
            {renderPosts()}
          </ul>
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
