// import ItemText from "./ItemText";

function Item(props: {
  texthand: string;
  text: string;
  image: string;
  name: string;
}) {
  if (props.texthand === "right") {
    return (
      <div className="projectsflex">
        <div className="fleximage">
          <img src="./images/Vest_with_LEDs.jpg" width="400px" height="400px" />
        </div>

        <div className="flextext">
          <h2>
            <strong>Arduino</strong> - Vest with programmable LEDs
          </h2>
          <p>This vest created for my persona for the Cybertown event.</p>
          <p>
            It included six LEDs soldered to cables running into one Arduino
            Uno, running on a 9V battery.
          </p>
          <a href="#/images/1_Vest_with_LEDs.html" className="r">
            Read more
          </a>
        </div>
      </div>
    );
  } else if (props.texthand === "left") {
    return (
      <div className="projectsflex">
        <div className="flextext">
          <h2>
            <strong>Arduino</strong> - Automatic window
          </h2>
          <p>
            This window prototype adjusts its opening and closing based on
            weather forecasts, room temperature or if it is time to ventilate
            your room.
          </p>
          <a href="./Project_pages/2_Automatic_Window.html" className="r">
            Read more
          </a>
        </div>
        <div className="fleximage">
          <img
            src="#/public/images/Automatic_Window.jpeg"
            width="400px"
            height="400px"
          />
        </div>
      </div>
    );
  }
}

export default Item;
