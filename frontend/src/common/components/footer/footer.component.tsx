import * as React from "react";
import { cnc } from "../../../util";

const style = require("./footer.style.scss");

const Statement = () => (
  <div className={style.statementArea}>
    © Microsoft 2018
  </div>
);

export const FooterComponent = ({className = null}) => {
  return (
    <footer className={cnc(style.footer, className)}>
      <Statement />
    </footer>
  );
}