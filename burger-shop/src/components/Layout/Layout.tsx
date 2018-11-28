import * as React from "react";

const layout = (props: any) => (
  <div>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </div>
);

export default layout;