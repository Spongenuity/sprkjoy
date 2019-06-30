/// <reference types="react" />
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
export declare type GroupOptions = BoxOptions;
export declare type GroupHTMLProps = BoxHTMLProps;
export declare type GroupProps = GroupOptions & GroupHTMLProps;
export declare const useGroup: {
    (options?: BoxOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Group: import("reakit-system/src/createComponent").Component<"div", BoxOptions>;
