/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export function useAsyncEffect(func: () => Promise<void>, deps = []) {
  useEffect(() => {
    func().then();
  }, deps);
}
