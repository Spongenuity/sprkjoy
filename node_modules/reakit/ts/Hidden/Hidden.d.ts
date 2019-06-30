import * as React from "react";
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
import { HiddenStateReturn } from "./HiddenState";
export declare type HiddenOptions = BoxOptions & Pick<Partial<HiddenStateReturn>, "unstable_hiddenId" | "visible" | "unstable_animating" | "unstable_animated" | "unstable_stopAnimation" | "unstable_setIsMounted">;
export declare type HiddenHTMLProps = BoxHTMLProps;
export declare type HiddenProps = HiddenOptions & HiddenHTMLProps;
export declare const useHidden: {
    (options?: HiddenOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & Pick<Partial<HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & Pick<Partial<HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Hidden: import("reakit-system/src/createComponent").Component<"div", HiddenOptions>;
