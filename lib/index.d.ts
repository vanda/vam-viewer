import { SlideShow } from './viewers/slideshow';
import { PopOutViewer } from './viewers/full-page-plugin';
import { PatchworkPlugin } from './viewers/patch-work-plugin/src';
export { SlideShow, PopOutViewer, PatchworkPlugin };
export declare function createSlideShow(container: HTMLElement, iiifResource: string, addressable?: boolean, backgroundColor?: string, id?: number): void;
export declare function createFullScreenTour(container: HTMLElement, iiifResource: string, title: string, innerHtml: string): void;
export declare function createEmbeddedZoom(container: HTMLElement, iiifResource: string, width: number, height: number): void;
//# sourceMappingURL=index.d.ts.map