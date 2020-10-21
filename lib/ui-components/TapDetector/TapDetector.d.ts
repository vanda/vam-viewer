export default TapDetector;
declare class TapDetector {
    constructor($el: any, options: any);
    $el: any;
    options: any;
    unbind(): void;
    onTaps: any[];
    onTap: (func: any) => void;
    handleTap: () => void;
    touchData: {
        clientX: number;
        clientY: number;
        tap: boolean;
        stopped: boolean;
        noDoubleTap: null;
        timeout: null;
        doubleTapTimeout: null;
    };
    handleTouchStart: (e: any) => void;
    handleTouchMove: (e: any) => void;
    handleTouchEnd: () => void;
}
//# sourceMappingURL=TapDetector.d.ts.map