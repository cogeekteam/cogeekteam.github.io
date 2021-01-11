import React from "react";
import $ from "jquery";
import { render } from "@testing-library/react";
class ButtonScrollTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.clickScrollTop = this.clickScrollTop.bind(this);
  }
  clickScrollTop = () => {
    $("html, body").animate({ scrollTop: 0 });
  };
  pre = 0;
  displayButton = () => {
    var cur = window.pageYOffset;
    if (this.pre > cur && cur > 100) {
      $(".btn-scrollTop").css("opacity", "1");
    } else {
      $(".btn-scrollTop").css("opacity", "0");
    }

    this.pre = cur;
  };
  componentDidMount() {
    window.addEventListener("scroll", this.displayButton);
  }

  render() {
    return (
      <button onClick={this.clickScrollTop} className="btn-scrollTop">
        <i className="fad fa-angle-double-up"></i>
      </button>
    );
  }
}

export default ButtonScrollTop;
