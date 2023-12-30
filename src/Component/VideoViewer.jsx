import "../Styles/videoViewer.css"

function VideoViewer() {
  return (
    <>
      <div className="VideoViewer">
        <div className="video">
          <iframe
            width="368"
            height="655"
            src="https://www.youtube.com/embed/I0EIev4jdpc"
            title="my first MacBook air m1 | MacBook air M1 | apple MacBook air |  MacBook unboxing | Gaurav&#39;s MacBook"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default VideoViewer;
