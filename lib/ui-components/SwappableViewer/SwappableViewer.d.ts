import React from 'react';
import './SwappableViewer.scss';
interface SwappableViewerProps {
    canvas: any;
    manifest: any;
    isInteractive: boolean;
    fullscreenProps: {
        isFullscreen: boolean;
        isFullscreenEnabled: boolean;
        exitFullscreen: () => void;
        goFullscreen: () => void;
    };
    region: any;
    bem: any;
    manifestUri: string;
}
declare const _default: React.FC<Pick<SwappableViewerProps, "isInteractive" | "canvas" | "manifest" | "fullscreenProps" | "region" | "manifestUri">>;
export default _default;
//# sourceMappingURL=SwappableViewer.d.ts.map