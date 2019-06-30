import * as React from "react";
export declare type BoxOptions = {
    /**
     * Options passed to `reakit-system-*`
     * @private
     */
    unstable_system?: unknown;
};
export declare type BoxHTMLProps = React.HTMLAttributes<any> & React.RefAttributes<any> & {
    /**
     * Function returned by hook to wrap children.
     */
    unstable_wrap?: (children: React.ReactNode) => JSX.Element;
};
export declare type BoxProps = BoxOptions & BoxHTMLProps;
export declare const useBox: {
    (options?: BoxOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        /**
         * Function returned by hook to wrap children.
         */
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        /**
         * Function returned by hook to wrap children.
         */
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Box: import("reakit-system/src/createComponent").Component<"div", BoxOptions>;
