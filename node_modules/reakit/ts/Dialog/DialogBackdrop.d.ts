/// <reference types="react" />
import { HiddenOptions, HiddenHTMLProps } from "../Hidden/Hidden";
export declare type DialogBackdropOptions = HiddenOptions;
export declare type DialogBackdropHTMLProps = HiddenHTMLProps;
export declare type DialogBackdropProps = DialogBackdropOptions & DialogBackdropHTMLProps;
export declare const useDialogBackdrop: {
    (options?: HiddenOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const DialogBackdrop: import("reakit-system/src/createComponent").Component<"div", HiddenOptions>;
