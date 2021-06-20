// import react from "react";
import { Remarkable } from "remarkable";

const MdParser = (mds: string) => {
  var md = new Remarkable();
  return md.render(mds);
  // return react.createElement("div", {
  //   dangerouslySetInnerHTML: {
  //     __html: md.render(props.md)
  //   }
  // });
}

export default MdParser;