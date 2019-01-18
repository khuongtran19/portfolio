import React from "react";
import capture1 from "./css/image/gif0.gif";
import capture2 from "./css/image/gif1.gif";
import capture3 from "./css/image/gif2.gif";
import capture4 from "./css/image/gif3.gif";
import capture5 from "./css/image/gif4.gif";
import { UncontrolledCarousel } from "reactstrap";
import "./css/Mywork.css";
const items = [
  {
    src: capture5,
    altText: "Posts",
    header: "Create Posts (Grolo Beta)",
    caption:
      "Allow Business Owner post to all Social Media with just 1 - Click or schedule for future post. Business Owner can choose what Social Media they want to post (Business Owner will provide access to their Social Media when apply with Grolo)."
  },
  {
    src: capture1,
    altText: "Posts",
    header: "Posts (Grolo Beta)",
    caption:
      "Show all posts that business want to post to social media. As Owner Business only allow to see and update their own posts while Business Rep allow to see multiple businesses' posts."
  },
  {
    src: capture2,
    altText: "Tag",
    header: "Tag (Grolo Beta)",
    caption: "Quick look at all posts associated with tag."
  },
  {
    src: capture3,
    altText: "Flyer",
    header: "Flyer (Grolo Beta)",
    caption:
      "Allow business quick access to print out infomation of the business and reward. Also with QR Code for customer quickly apply for membership for that business."
  },
  {
    src: capture4,
    header: "Campain (Grolo Beta)",
    altText: "Campain",
    caption: "All posts associated with Campain."
  }
];
const Mywork = () => (
  <div style={{ height: "100vh", backgroundColor: "black" }}>
    <UncontrolledCarousel items={items} />
  </div>
);
export default Mywork;
