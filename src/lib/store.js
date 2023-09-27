import { writable } from 'svelte/store';

export const fullPageInfo = writable({
  prevSection: 0,
  nextSection: null,
  direction: null,
});