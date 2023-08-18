import { useState } from "react";
import "./style.scss";
import { ContentWrapper } from "../../../components";
import { VideoPopup } from "../../../components";
import { Img } from "../../../components";
import { PlayIcon } from "../PlayIcon";

export const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => {
              {
                return (
                  <div
                    key={video.id}
                    className="videoItem"
                    onClick={() => {
                      if (video) {
                        setShow(true);
                        setVideoId(video.key);
                      } else {
                        alert("Video not found");
                      }
                    }}
                  >
                    <div className="videoThumbnail">
                      <Img
                        src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                      />
                      <PlayIcon />
                    </div>
                    <div className="videoTitle">{video.name}</div>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>

      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};
