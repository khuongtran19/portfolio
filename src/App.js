import React, { Component } from "react";
import "./css/App.css";
import * as Scroll from "react-scroll";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Mainpage from "./Mainpage";
import Mywork from "./Mywork";
// import Contact from "./Contact";

class App extends Component {
  componentDidMount() {
    document.title = "Portfolio";
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <Element name="Mainpage" className="element">
          <Mainpage />
        </Element>
        <Element name="Resume" className="element">
          <Resume />
        </Element>
        <Element name="Mywork" className="element">
          <Mywork />
        </Element>
        {/* <Element name="Contact" className="element">
          <Contact />
        </Element> */}
      </div>
    );
  }
}

export default App;
