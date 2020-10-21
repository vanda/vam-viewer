import React from 'react';
import './MobileAnnotationView.scss';
import { Annotation } from 'manifesto.js';
declare type Selector = {
    type?: string;
    value?: string;
    x: number;
    y: number;
    width?: number | null;
    height?: number | null;
};
interface MobileAnnotationProps {
    animationFramePadding: number;
    disabled: boolean;
    annotations: Array<{
        annotation: Annotation;
        on: {
            selector: Selector;
        };
    }>;
    viewport: any;
    bem: any;
    children: any;
}
declare const _default: React.FC<Pick<MobileAnnotationProps, "children" | "viewport" | "animationFramePadding" | "disabled" | "annotations">>;
export default _default;
//# sourceMappingURL=MobileAnnotationView.d.ts.map