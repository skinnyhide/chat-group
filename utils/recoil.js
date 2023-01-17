import { atom } from "recoil";

// Atom / State

export const activeChannelState = atom({
  key: "activeChannelState",
  default: 0,
});

export const isNavChannelOpenState = atom({
  key: "isNavChannelOpenState",
  default: false,
});

export const isNavAllChannelOpenState = atom({
  key: "isNavAllChannelOpenState",
  default: false,
});

export const isModalAddChannelState = atom({
  key: "isModalAddChannelState",
  default: false,
});

export const isModalProfileMenuState = atom({
  key: "isModalProfileMenuState",
  default: false,
});
