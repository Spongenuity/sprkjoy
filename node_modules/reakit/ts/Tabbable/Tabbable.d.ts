import * as React from "react";
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
export declare type TabbableOptions = BoxOptions & {
    /**
     * Same as the HTML attribute.
     */
    disabled?: boolean;
    /**
     * When an element is `disabled`, it may still be `focusable`. It works
     * similarly to `readOnly` on form elements. In this case, only
     * `aria-disabled` will be set.
     */
    focusable?: boolean;
    /**
     * Keyboard keys to trigger click.
     * @private
     */
    unstable_clickKeys?: string[];
};
export declare type TabbableHTMLProps = BoxHTMLProps & {
    disabled?: boolean;
};
export declare type TabbableProps = TabbableOptions & TabbableHTMLProps;
export declare const useTabbable: {
    (options?: TabbableOptions | undefined, htmlProps?: TabbableHTMLProps | undefined): TabbableHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & {
        /**
         * Same as the HTML attribute.
         */
        disabled?: boolean | undefined;
        /**
         * When an element is `disabled`, it may still be `focusable`. It works
         * similarly to `readOnly` on form elements. In this case, only
         * `aria-disabled` will be set.
         */
        focusable?: boolean | undefined;
        /**
         * Keyboard keys to trigger click.
         * @private
         */
        unstable_clickKeys?: string[] | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }, next: BoxOptions & {
        /**
         * Same as the HTML attribute.
         */
        disabled?: boolean | undefined;
        /**
         * When an element is `disabled`, it may still be `focusable`. It works
         * similarly to `readOnly` on form elements. In this case, only
         * `aria-disabled` will be set.
         */
        focusable?: boolean | undefined;
        /**
         * Keyboard keys to trigger click.
         * @private
         */
        unstable_clickKeys?: string[] | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }) => boolean) | undefined;
};
export declare const Tabbable: import("reakit-system/src/createComponent").Component<"button", TabbableOptions>;
