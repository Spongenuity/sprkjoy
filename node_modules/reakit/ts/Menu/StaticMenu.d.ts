import * as React from "react";
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
import { MenuStateReturn } from "./MenuState";
export declare type StaticMenuOptions = BoxOptions & Pick<Partial<MenuStateReturn>, "orientation"> & Pick<MenuStateReturn, "stops" | "move" | "next" | "previous">;
export declare type StaticMenuHTMLProps = BoxHTMLProps;
export declare type StaticMenuProps = StaticMenuOptions & StaticMenuHTMLProps;
export declare const useStaticMenu: {
    (options?: StaticMenuOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & Pick<Partial<MenuStateReturn>, "orientation"> & Pick<MenuStateReturn, "move" | "stops" | "next" | "previous"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & Pick<Partial<MenuStateReturn>, "orientation"> & Pick<MenuStateReturn, "move" | "stops" | "next" | "previous"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const StaticMenu: import("reakit-system/src/createComponent").Component<"div", StaticMenuOptions>;
