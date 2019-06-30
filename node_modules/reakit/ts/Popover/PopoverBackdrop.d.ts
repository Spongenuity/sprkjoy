/// <reference types="react" />
import { DialogBackdropOptions, DialogBackdropHTMLProps } from "../Dialog/DialogBackdrop";
export declare type PopoverBackdropOptions = DialogBackdropOptions;
export declare type PopoverBackdropHTMLProps = DialogBackdropHTMLProps;
export declare type PopoverBackdropProps = PopoverBackdropOptions & PopoverBackdropHTMLProps;
export declare const usePopoverBackdrop: {
    (options?: import("..").HiddenOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const PopoverBackdrop: import("reakit-system/src/createComponent").Component<"div", import("..").HiddenOptions>;
