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
declare const _default: React.FC<Pick<SlideShowProps, "addressable" | "id" | "manifestUri" | "renderPanel" | "backgroundColor" | "mobileBreakPoint" | "jsonLd">>;
export default _default;
//# sourceMappingURL=SlideShow.d.ts.map