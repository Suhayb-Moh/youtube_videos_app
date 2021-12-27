import react from "react";
import VideosItem from "./VideosItem";

const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
        return <VideosItem video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;