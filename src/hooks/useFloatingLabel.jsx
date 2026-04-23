import { useState } from "react";

export function useFloatingLabel(value) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || Boolean(value);

  return { setIsFocused, isFloating };
}
