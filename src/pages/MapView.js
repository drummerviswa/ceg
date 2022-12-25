import "../App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import NavigationBar from "../components/NavigationBar";
import CardS from "../components/CardS";
import color from "../color/main";
import book from "../img/markers/book.png";
import school from "../img/markers/school.png";
import computer from "../img/markers/Computer.png";
import dept from "../img/markers/department.png";
import Trans from "../img/markers/Trans.png";
import Hospital from "../img/markers/Hospital.png";
import edu from "../img/markers/Education.png";
import Auditorium from "../img/markers/Auditorium.png";

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
      width: "50px",
      img: dept,
    },
    {
      key: 2,
      longitude: 80.23521981070795,
      latitude: 13.013297976115032,
      text: "Printing",
      link: "https://goo.gl/maps/dxUprefWh2s4SQ6Y6",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 3,
      longitude: 80.23592008323126,
      latitude: 13.013291184760574,
      text: "IT",
      link: "https://goo.gl/maps/SuLVZ1axeAsmGLgQA",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 4,
      longitude: 80.23614722685286,
      latitude: 13.012168322887128,
      text: "Applied Chemistry",
      link: "https://goo.gl/maps/f1XgKXipsoUtzq119",
      colors: color.primary,
      width: "70px",
      img: dept,
    },
    {
      key: 5,
      longitude: 80.23582495718757,
      latitude: 13.012585786896388,
      text: "CSE",
      link: "https://goo.gl/maps/SsKLwk5GDSjVhRrn6",
      colors: color.primary,
      width: "30px",
      img: dept,
    },
    {
      key: 6,
      longitude: 80.23534498144961,
      latitude: 13.012516144304646,
      text: "ECE",
      link: "https://goo.gl/maps/d9fopwNouySimtR77",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 7,
      longitude: 80.23448737078915,
      latitude: 13.011491554161118,
      text: "EEE",
      link: "https://goo.gl/maps/P2HiEReeyKHLpg4T9",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 8,
      longitude: 80.23327108268742,
      latitude: 13.013003572054103,
      text: "Bio Medical",
      link: "https://goo.gl/maps/sXHxwshvss7DEQi77",
      colors: color.primary,
      width: "60px",
      img: dept,
    },
    {
      key: 9,
      longitude: 80.23423138281963,
      latitude: 13.012030605383856,
      text: "Manufacturing",
      link: "https://goo.gl/maps/EJ3ucvNqGnBExHaC7",
      colors: color.primary,
      width: "80px",
      img: dept,
    },
    {
      key: 10,
      longitude: 80.23364977510067,
      latitude: 13.010523542232907,
      text: "Civil",
      link: "https://goo.gl/maps/D1N7riTryUsoEfGu7",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 11,
      longitude: 80.23539188221811,
      latitude: 13.011975701947238,
      text: "Physicis & Chemistry",
      link: "https://goo.gl/maps/YvYBPMzvXftUzneZ8",
      colors: color.primary,
      width: "70px",
      img: dept,
    },
    {
      key: 12,
      longitude: 80.23574054497604,
      latitude: 13.012009512976993,
      text: "English",
      link: "https://goo.gl/maps/1Ap9jfSBokENKxhS6",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 13,
      longitude: 80.23581364426782,
      latitude: 13.013895841114682,
      text: "Geology",
      link: "https://goo.gl/maps/kYqo9UypJGPP3hDv9",
      colors: color.primary,
      width: "50px",
      img: dept,
    },
    {
      key: 14,
      longitude: 80.23409273115905,
      latitude: 13.009933669612185,
      text: "Industiral Engineering",
      link: "https://goo.gl/maps/W4yH4WisxFoypUow8",
      colors: color.primary,
      width: "70px",
      img: dept,
    },
    {
      key: 15,
      longitude: 80.23639480274335,
      latitude: 13.01259072264905,
      text: "Management Studies",
      link: "https://goo.gl/maps/kYeKV2d2cB9dcsAu6",
      colors: color.primary,
      width: "75px",
      img: dept,
    },
    {
      key: 16,
      longitude: 80.23260144671903,
      latitude: 13.01141061474175,
      text: "Mechanical Engineering",
      link: "https://goo.gl/maps/XSzQJSXELX1QYBSj8",
      colors: color.primary,
      width: "75px",
      img: dept,
    },
    {
      key: 17,
      longitude: 80.23711732375635,
      latitude: 13.009581834592154,
      text: "Media Science",
      link: "https://goo.gl/maps/g669H6ecp5cwz1CB8",
      colors: color.primary,
      width: "60px",
      img: dept,
    },
    {
      key: 18,
      longitude: 80.23405067541024,
      latitude: 13.012673325423963,
      text: "Mining Engineering",
      link: "https://goo.gl/maps/XoAuQmftw88ozxdD7",
      colors: color.primary,
      width: "70px",
      img: dept,
    },
    {
      key: 51,
      longitude: 80.23777175027668,
      latitude: 13.010359765940237,
      text: "Library",
      link: "https://goo.gl/maps/Gjde3i68PKer4cG27",
      colors: color.background,
      width: "50px",
      img: book,
    },
    {
      key: 52,
      longitude: 80.23720883647081,
      latitude: 13.010497420526386,
      text: "RCC",
      link: "https://goo.gl/maps/cEqxpcY7cpnfkrc67",
      colors: color.background,
      width: "50px",
      img: computer,
    },
    {
      key: 53,
      longitude: 80.23521066258391,
      latitude: 13.013721124740565,
      text: "Knowledge Park",
      link: "https://goo.gl/maps/CeKZJL78QHd9zXBa9",
      colors: color.background,
      width: "63px",
      img: school,
    },
    {
      key: 54,
      longitude: 80.23929168737384,
      latitude: 13.013556135949141,
      text: "Health Center",
      link: "https://goo.gl/maps/4gT457SRxe9XXPw88",
      colors: color.background,
      width: "63px",
      img: Hospital,
    },
    {
      key: 55,
      longitude: 80.23725582327573,
      latitude: 13.011582064876572,
      text: "Ground",
      link: "https://goo.gl/maps/ZFgtuZCaXrz7WFUV7",
      colors: color.background,
      width: "50px",
      img: Trans,
    },
    {
      key: 56,
      longitude: 80.236529064679,
      latitude: 13.011482170234775,
      text: "Vivek Audi",
      link: "https://goo.gl/maps/FD1apb8HHzbQdVhYA",
      colors: color.background,
      width: "60px",
      img: Auditorium,
    },
    {
      key: 70,
      longitude: 80.2356429923096,
      latitude: 13.012084060087867,
      text: "Sci&Human",
      link: "https://goo.gl/maps/eNZGQsE97zPrtJuL6",
      colors: color.secondary,
      width: "75px",
      img: edu,
    },
    {
      key: 100,
      longitude: 80.27650531205241,
      latitude: 13.032764212773934,
      text: "school",
      link: "#",
      colors: color.background,
      width: "50px",
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
                <CardS
                  width={i.width}
                  color={i.colors}
                  title={i.text}
                  img={i.img}
                />
              </a>
            </Marker>
          ))}
        </Map>
      </div>
    </>
  );
}

export default App;
