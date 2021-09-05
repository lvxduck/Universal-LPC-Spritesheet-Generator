import create from "zustand";

export enum AnimType {
  Spellcast = "Spellcast",
  Thrust = "Thrust",
  Walk = "Walk",
  Slash = "Slash",
  Shoot = "Shoot",
  Hurt = "Hurt",
  Smash = "Smash",
};

export interface store {
  animType: AnimType;
  imageData: ImageData | undefined;
  imageDataURL: string;
  setAnimType: (filter: AnimType) => void;
  setImageData: (imageData: ImageData | undefined) => void;
  setImageDataURL: (imageDataURL: string) => void;
}

export const useStore = create<store>((set) => ({
  animType: AnimType.Walk,
  imageData: undefined,
  imageDataURL: "",
  setAnimType: (animType: AnimType) => set((state) => ({
    ...state,
    animType,
  })),
  setImageData: (imageData: ImageData | undefined) => set((state) => ({
    ...state,
    imageData,
  })),
  setImageDataURL: (imageDataURL: string) => set((state) => ({
    ...state,
    imageDataURL,
  }))
}))
