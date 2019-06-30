import * as React from "react";
import { MenuStateReturn } from "../MenuState";
export declare type MenuContextType = Pick<MenuStateReturn, "orientation" | "next" | "previous"> & {
    parent?: MenuContextType | null;
};
export declare const MenuContext: React.Context<MenuContextType | null>;
