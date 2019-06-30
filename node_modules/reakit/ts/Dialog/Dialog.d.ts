import * as React from "react";
import { HiddenOptions, HiddenHTMLProps } from "../Hidden/Hidden";
import { DialogStateReturn } from "./DialogState";
export declare type DialogOptions = HiddenOptions & Pick<Partial<DialogStateReturn>, "hide"> & Pick<DialogStateReturn, "unstable_hiddenId"> & {
    /**
     * Toggles Dialog's `modal` state.
     *  - Non-modal: `preventBodyScroll` doesn't work and focus is free.
     *  - Modal: `preventBodyScroll` is automatically enabled, focus is
     * trapped within the dialog and the dialog is rendered within a `Portal`
     * by default.
     */
    modal?: boolean;
    /**
     * When enabled, user can hide the dialog by pressing `Escape`.
     */
    hideOnEsc?: boolean;
    /**
     * When enabled, user can hide the dialog by clicking outside it.
     */
    hideOnClickOutside?: boolean;
    /**
     * When enabled, user can't scroll on body when the dialog is visible.
     * This option doesn't work if the dialog isn't modal.
     */
    preventBodyScroll?: boolean;
    /**
     * The element that will be focused when the dialog shows.
     * When not set, the first tabbable element within the dialog will be used.
     */
    unstable_initialFocusRef?: React.RefObject<HTMLElement>;
    /**
     * The element that will be focused when the dialog hides.
     * When not set, the disclosure component will be used.
     */
    unstable_finalFocusRef?: React.RefObject<HTMLElement>;
    /**
     * Whether or not the dialog should be rendered within `Portal`.
     * It's `true` by default if `modal` is `true`.
     */
    unstable_portal?: boolean;
    /**
     * Whether or not the dialog should be a child of its parent.
     * Opening a nested orphan dialog will close its parent dialog if
     * `hideOnClickOutside` is set to `true` on the parent.
     * It will be set to `false` if `modal` is `false`.
     */
    unstable_orphan?: boolean;
    /**
     * Whether or not to move focus when the dialog shows.
     * @private
     */
    unstable_autoFocusOnShow?: boolean;
    /**
     * Whether or not to move focus when the dialog hides.
     * @private
     */
    unstable_autoFocusOnHide?: boolean;
};
export declare type DialogHTMLProps = HiddenHTMLProps;
export declare type DialogProps = DialogOptions & DialogHTMLProps;
export declare const useDialog: {
    (options?: DialogOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & Pick<Partial<import("..").HiddenStateReturn>, "hide"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId"> & {
        /**
         * Toggles Dialog's `modal` state.
         *  - Non-modal: `preventBodyScroll` doesn't work and focus is free.
         *  - Modal: `preventBodyScroll` is automatically enabled, focus is
         * trapped within the dialog and the dialog is rendered within a `Portal`
         * by default.
         */
        modal?: boolean | undefined;
        /**
         * When enabled, user can hide the dialog by pressing `Escape`.
         */
        hideOnEsc?: boolean | undefined;
        /**
         * When enabled, user can hide the dialog by clicking outside it.
         */
        hideOnClickOutside?: boolean | undefined;
        /**
         * When enabled, user can't scroll on body when the dialog is visible.
         * This option doesn't work if the dialog isn't modal.
         */
        preventBodyScroll?: boolean | undefined;
        /**
         * The element that will be focused when the dialog shows.
         * When not set, the first tabbable element within the dialog will be used.
         */
        unstable_initialFocusRef?: React.RefObject<HTMLElement> | undefined;
        /**
         * The element that will be focused when the dialog hides.
         * When not set, the disclosure component will be used.
         */
        unstable_finalFocusRef?: React.RefObject<HTMLElement> | undefined;
        /**
         * Whether or not the dialog should be rendered within `Portal`.
         * It's `true` by default if `modal` is `true`.
         */
        unstable_portal?: boolean | undefined;
        /**
         * Whether or not the dialog should be a child of its parent.
         * Opening a nested orphan dialog will close its parent dialog if
         * `hideOnClickOutside` is set to `true` on the parent.
         * It will be set to `false` if `modal` is `false`.
         */
        unstable_orphan?: boolean | undefined;
        /**
         * Whether or not to move focus when the dialog shows.
         * @private
         */
        unstable_autoFocusOnShow?: boolean | undefined;
        /**
         * Whether or not to move focus when the dialog hides.
         * @private
         */
        unstable_autoFocusOnHide?: boolean | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & Pick<Partial<import("..").HiddenStateReturn>, "hide"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId"> & {
        /**
         * Toggles Dialog's `modal` state.
         *  - Non-modal: `preventBodyScroll` doesn't work and focus is free.
         *  - Modal: `preventBodyScroll` is automatically enabled, focus is
         * trapped within the dialog and the dialog is rendered within a `Portal`
         * by default.
         */
        modal?: boolean | undefined;
        /**
         * When enabled, user can hide the dialog by pressing `Escape`.
         */
        hideOnEsc?: boolean | undefined;
        /**
         * When enabled, user can hide the dialog by clicking outside it.
         */
        hideOnClickOutside?: boolean | undefined;
        /**
         * When enabled, user can't scroll on body when the dialog is visible.
         * This option doesn't work if the dialog isn't modal.
         */
        preventBodyScroll?: boolean | undefined;
        /**
         * The element that will be focused when the dialog shows.
         * When not set, the first tabbable element within the dialog will be used.
         */
        unstable_initialFocusRef?: React.RefObject<HTMLElement> | undefined;
        /**
         * The element that will be focused when the dialog hides.
         * When not set, the disclosure component will be used.
         */
        unstable_finalFocusRef?: React.RefObject<HTMLElement> | undefined;
        /**
         * Whether or not the dialog should be rendered within `Portal`.
         * It's `true` by default if `modal` is `true`.
         */
        unstable_portal?: boolean | undefined;
        /**
         * Whether or not the dialog should be a child of its parent.
         * Opening a nested orphan dialog will close its parent dialog if
         * `hideOnClickOutside` is set to `true` on the parent.
         * It will be set to `false` if `modal` is `false`.
         */
        unstable_orphan?: boolean | undefined;
        /**
         * Whether or not to move focus when the dialog shows.
         * @private
         */
        unstable_autoFocusOnShow?: boolean | undefined;
        /**
         * Whether or not to move focus when the dialog hides.
         * @private
         */
        unstable_autoFocusOnHide?: boolean | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Dialog: import("reakit-system/src/createComponent").Component<"div", DialogOptions>;
