import React from "react";
class Typer extends React.Component {
  state = {
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 200
  };
  componentDidMount() {
    this.handleType();
  }
  handleType = () => {
    const { textData } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % textData.length;
    const fullText = textData[i];
    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 70 : 200
    });
    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }
    setTimeout(this.handleType, typingSpeed);
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <span>{text}</span>
      </div>
    );
  }
}
export default Typer;
