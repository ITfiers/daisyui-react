import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function ClientOnlyPortal({
  children,
  selector,
}: {
  children: React.ReactNode;
  selector: "#modal";
}) {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as Element;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
}
