import React from "react";
import Typer from "./Typer";
class Mainpage extends React.Component {
  render() {
    return (
      <div
        className="mainpage"
        style={{
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          fontWeight: "normal",
          fontFamily: "san-serif",
          margin: "auto",
          paddingTop: "150px",
          height: "100vh",
          textShadow: "1px 1px 8px black"
        }}
      >
        <h5>HELLO,</h5>
        <h1>I AM KHUONG TRAN.</h1>
        <h2>
          <Typer
            textData={[
              "A DEVELOPER.",
              "PASSIONATE ABOUT CODING.",
              "A TEAMPLAYER."
            ]}
          />
        </h2>
      </div>
    );
  }
}
export default Mainpage;
