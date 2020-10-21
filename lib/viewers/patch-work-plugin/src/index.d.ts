export function create(el: any, userConfiguration: any): void;
export function help(): void;
export class PatchworkPlugin extends React.Component<any, any, any> {
    static defaultProps: {
        cssClassPrefix: string;
        manifest: null;
        jsonLdManifest: null;
        cssClassMap: {};
        animationSpeed: number;
        animationSpeedMap: {};
        fitContainer: boolean;
        height: number;
        annotationMargin: number;
        width: number;
        mobileHeight: number;
        renderAnnotation: null;
        allowFullScreen: boolean;
        events: {};
        osdOptions: {};
        dispatch: () => null;
        disableMouseEventsOnMobile: boolean;
        mobileBreakpoint: number;
        growthStyle: string;
        closeText: string;
        relativeContainer: boolean;
        clickToClose: boolean;
        hideSlideShowNav: () => void;
    };
    static propTypes: {};
    constructor(props: any);
    constructor(props: any, context: any);
    viewport: any;
    animationSpeed: number;
    setViewport: (viewport: any) => any;
    onClickAnnotation: (annotation: any, bounds: any) => void;
    getAnimationSpeed(name: any): number;
    toggleMobileFullscreen: () => void;
    handleOnScroll: () => void;
    onClose: () => void;
    dispatch: (name: any, args: any) => void;
    setRef: (ref: any) => any;
    ref: any;
    getClasses({ fullscreenEnabled, isFullscreen, isMobileFullscreen }: {
        fullscreenEnabled: any;
        isFullscreen: any;
        isMobileFullscreen: any;
    }): string[];
}
import React from "react";
//# sourceMappingURL=index.d.ts.map