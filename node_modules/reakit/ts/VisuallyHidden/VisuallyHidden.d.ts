/// <reference types="react" />
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
export declare type VisuallyHiddenOptions = BoxOptions;
export declare type VisuallyHiddenHTMLProps = BoxHTMLProps;
export declare type VisuallyHiddenProps = VisuallyHiddenOptions & VisuallyHiddenHTMLProps;
export declare const useVisuallyHidden: {
    (options?: BoxOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const VisuallyHidden: import("reakit-system/src/createComponent").Component<"span", BoxOptions>;
