/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, DependencyList } from "react";
import deepEqual from "lodash/isEqual";

function checkDeps(deps: DependencyList) {
  if (!deps || !deps.length) {
    throw new Error(
      "useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.",
    );
  }
  if (deps.every(isPrimitive)) {
    throw new Error(
      "useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.",
    );
  }
}

function isPrimitive(val: any) {
  return val == null || /^[sbn]/.test(typeof val);
}

function useDeepCompareMemoize(value: DependencyList) {
  const ref = useRef<DependencyList | undefined>(undefined);

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffect(
  callback: () => void,
  dependencies: DependencyList,
) {
  if (process.env.NODE_ENV !== "production") {
    checkDeps(dependencies);
  }
  useEffect(callback, useDeepCompareMemoize(dependencies));
}

export function useDeepCompareEffectNoCheck(
  callback: () => void,
  dependencies: DependencyList,
) {
  useEffect(callback, useDeepCompareMemoize(dependencies));
}

export default useDeepCompareEffect;
