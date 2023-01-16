import { atom } from "recoil";

// Atom / State
export const activeChannelState = atom({
  key: "activeChannelState",
  default: 0,
});

export const isModalAddChannelState = atom({
  key: "isModalAddChannelState",
  default: true,
});
