/// <reference path="three.d.ts" />

declare module THREE {
   export class OBJLoader extends EventDispatcher {
      constructor();
      load(url: string, callback?: (response: any) => any, onProgress?: (item: any, loaded: any, total: any) => any, onError?: (response: any) => any): void;
      parse(data: any): any; // Not sure if the return value can be typed. Seems to be a group but I can't find a definition for that in three.d.ts?
   }

   export class MTLLoader extends EventDispatcher {
      baseUrl: string;
      options: any;
      crossOrigin: boolean;
      constructor(baseurl?: string, options?: any, crossorigin?: boolean);
      load(url: string, onLoad: Function, onProgress?: ProgressEventInit, onError?: (response: any) => any): void;
      parse(data: any);
      setBaseUrl(baseUrl:string);
   }

   export class OBJMTLLoader extends EventDispatcher {
      constructor();
      load(url: string, mtlUrl: string, callback?: (response: any) => any, onProgress?: (item: any, loaded: any, total: any) => any, onError?: (response: any) => any): void;
      parse(data: any): any; // Not sure if the return value can be typed. Seems to be a group but I can't find a definition for that in three.d.ts?

   }
   export class DDSLoader extends EventDispatcher {
      constructor();
      parse(buffer: any, loadMipmaps: any): any;
   }
}
