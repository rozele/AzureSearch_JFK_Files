import * as React from "react"

const style = require("./caption.style.scss");

export const CaptionComponent = () => (
  <div className={style.caption}>
    <p className={style.title}>Document Search</p>
    <p className={style.subtitle}>Find documents containing the given keywords.</p>
  </div>
);