import "../App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import NavigationBar from "../components/NavigationBar";
import CardS from "../components/CardS";
import color from "../color/main";

mapboxgl.accessToken =
  "pk.eyJ1Ijoidmlzd2FuYXRoYW5wIiwiYSI6ImNsYnowY29vcDBjc3ozcmp5ZGtwNWc0b3oifQ.HtiFjooBbq0iX5KciX7zYQ";
function App() {
  const data = [
    {
      key: 1,
      longitude: 80.23543784105739,
      latitude: 13.011239807106302,
      text: "Maths",
      link: "https://goo.gl/maps/J3C7tdg1hS4Mmw4z7",
      colors: color.primary,
      img: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-File.png",
    },
    {
      key: 2,
      longitude: 80.23725582327573,
      latitude: 13.011582064876572,
      text: "Ground",
      link: "https://goo.gl/maps/PCK4kPneypZsnUqGA",
      colors: color.background,
      img: "https://www.pngall.com/wp-content/uploads/10/Map-Marker-PNG.png",
    },
    {
      key: 3,
      longitude: 80.23592008323126,
      latitude: 13.013291184760574,
      text: "IT",
      link: "https://goo.gl/maps/SuLVZ1axeAsmGLgQA",
      colors: color.primary,
      img: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-File.png",
    },
  ];
  return (
    <>
      <div id="map">
        <Map
          initialViewState={{
            longitude: 80.23543784105739,
            latitude: 13.011239807106302,
            zoom: 16,
            pitch: 0,
            bearing: 12,
          }}
          mapStyle="mapbox://styles/viswanathanp/clbz169kb002o14pru0u2b7iz"
        >
          {data.map((i) => (
            <Marker
              key={i.key}
              longitude={i.longitude}
              latitude={i.latitude}
              anchor="bottom"
            >
              {/* <a href={i.link}>
                <img
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 80,
                    border: "2px solid red",
                  }}
                  src={i.img}
                />
              </a> */}
              <a
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                href={i.link}
              >
                <CardS color={i.colors} title={i.text} img={i.img} />
              </a>
            </Marker>
          ))}
        </Map>
      </div>
    </>
  );
}

export default App;
