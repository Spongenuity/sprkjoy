import * as React from "react";
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
export declare type RadioGroupOptions = BoxOptions;
export declare type RadioGroupHTMLProps = BoxHTMLProps & React.FieldsetHTMLAttributes<any>;
export declare type RadioGroupProps = RadioGroupOptions & RadioGroupHTMLProps;
export declare const RadioGroup: import("reakit-system/src/createComponent").Component<"fieldset", BoxOptions>;
