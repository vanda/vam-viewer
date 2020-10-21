export default AnnotationListView;
declare class AnnotationListView extends React.Component<any, any, any> {
    static defaultProps: {
        offset: number;
        animationFramePadding: number;
        animationSpeed: number;
        bezierEasing: number[];
        annotationPosition: string;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    setTweenFromAnnotations: ({ annotations, width, height }: {
        annotations: any;
        width: any;
        height: any;
    }) => void;
    tween: any;
    updateEasing([a, b, c, d]: [any, any, any, any]): void;
    ease: BezierEasing.EasingFunction | undefined;
    update: (n: any) => void;
    updateView(newProps: any): void;
    onNext: (annotation: any, key: any) => (() => any) | null;
    onPrevious: (annotation: any, key: any) => (() => any) | null;
}
import React from "react";
import BezierEasing from "bezier-easing";
//# sourceMappingURL=AnnotationListView.d.ts.map