import React from 'react';
import './Slide.scss';
interface SlideProps {
    bem: any;
    behaviors: any;
    manifest: any;
    canvas: any;
    region: any;
    renderPanel?: (args: any) => void;
    fullscreenProps: any;
    backgroundColor: string;
    mobile: boolean;
    manifestUri: string;
}
declare const _default: React.FC<Pick<SlideProps, "canvas" | "manifest" | "fullscreenProps" | "region" | "manifestUri" | "behaviors" | "renderPanel" | "backgroundColor" | "mobile">>;
export default _default;
//# sourceMappingURL=Slide.d.ts.map