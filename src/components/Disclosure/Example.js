import React, { useRef, useEffect } from "react";

import Disclosure from "./Disclosure";

export function Example() {
  const example = useRef(null);

  useEffect(() => {
    const el = example.current.querySelector("button");

    const disclosure = new Disclosure(el);

    return () => {
      disclosure.destroy();
    };
  }, []);

  return (
    <div ref={example}>
      <button type="button">Click Me</button>
    </div>
  );
}
