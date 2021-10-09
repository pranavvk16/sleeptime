import "./App.css";
import Harry from './accets/music/harryporter.mp3';
import Magic from './accets/music/themagicshop.mp3';
import Zone from './accets/music/thetuckerzone.mp3';
import Play from "./accets/play.png";
import Pause from "./accets/pause.png";
import Next from "./accets/next.png";
import Previous from "./accets/previous.png";
import { Howl, Howler } from 'howler';
import picharry from './accets/music/picharry.jpeg';
import picmagic from './accets/music/picmagic.jpg'
import pictucker from './accets/music/pictucker.jpeg'
import { useState } from "react";


function App() {
  const databases = [
    { source: Harry, name: "Harry Potter", artist: "JK Rowling", album: picharry },
    { source: Magic, name: "The Magic Shop", artist: "H G Wells", album: picmagic },
    { source: Zone, name: "The Tucker Zone", artist: "Joe", album: pictucker }];


  const [current, setcurrent] = useState("");
  const [play, setplay] = useState(false);

  const soundplay = (src) => {
    const sound = new Howl({ src, html5: true })
    sound.play();
    setplay(previous => !previous)
    setcurrent(src)

  };
  const soundpause = (src) => {
    const sound = new Howl({ src, html5: true })
    sound.pause();
    setplay(previous => !previous)
    console.log(play);
  };

  Howler.volume(1.0)
  console.log(play);
  console.log(current);
  return (
    <div className="maincontainer">
      <div className="primarycolum">
        <div className="cover">
          <img className="albumcover" src={picmagic} alt="album" />
        </div>
        <div className="details">
          <span className="nowplaying">Now Playing</span>
          Fur Elise < span className="artist">Ludwig van Beethoven</span>
        </div>
      </div>
      {/*almbum art */}
      <div className="secondarycoloum">
        {/* <button >Prev</button>
        <button className="playpause">Play/Pause</button>
        <button>Next</button> */}
        <div title="Previous" className="previous mediabutton"><img className="mediabutton" src={Previous} alt="previous" /></div>
        <div title={play ? "Play" : "Pause"} onClick={() => { play ? soundplay(databases[0].source) : soundpause(databases[0].source) }} className="play"><img className="mediabutton" src={play ? Pause : Play} alt="play" /></div>
        <div title="Next" className="next"><img className="mediabutton" src={Next} alt="next" /></div>
      </div>

    </div>
  );
}

export default App;
