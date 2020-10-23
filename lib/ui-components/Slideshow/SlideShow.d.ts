import React from 'react';
import './SlideShow.scss';
interface SlideShowProps {
    mobileBreakPoint?: number;
    backgroundColor?: string;
    addressable?: boolean;
    id?: number;
    jsonLd?: object;
    manifestUri: string;
    renderPanel?: () => void;
    bem: any;
}
declare const _default: React.FC<Pick<SlideShowProps, "renderPanel" | "backgroundColor" | "manifestUri" | "addressable" | "id" | "mobileBreakPoint" | "jsonLd">>;
export default _default;
//# sourceMappingURL=SlideShow.d.ts.map