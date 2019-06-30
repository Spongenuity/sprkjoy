/// <reference types="react" />
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
export declare type SeparatorOptions = BoxOptions & {
    /**
     * Separator's orientation.
     */
    orientation?: "horizontal" | "vertical";
};
export declare type SeparatorHTMLProps = BoxHTMLProps;
export declare type SeparatorProps = SeparatorOptions & SeparatorHTMLProps;
export declare const useSeparator: {
    (options?: SeparatorOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & {
        /**
         * Separator's orientation.
         */
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & {
        /**
         * Separator's orientation.
         */
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Separator: import("reakit-system/src/createComponent").Component<"hr", SeparatorOptions>;
