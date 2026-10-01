"use client";

import { useSyncExternalStore } from "react";

// Shared flag: has the intro loader video started playing (or been dismissed)?
// The hero video waits for it so the intro gets the bandwidth first on slow connections.
let introStarted = false;
const listeners = new Set();

export function markIntroStarted() {
  if (introStarted) return;
  introStarted = true;
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useIntroStarted() {
  return useSyncExternalStore(
    subscribe,
    () => introStarted,
    () => false
  );
}
