// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicPage2 } from "./plasmic/copy_of_chat_box_sg/PlasmicPage2";

function Page2_(props, ref) {
  // Use PlasmicPage2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPage2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Page2Props here, but feel free
  // to do whatever works for you.
  return <PlasmicPage2 root={{ ref }} {...props} />;
}

const Page2 = React.forwardRef(Page2_);

export default Page2;