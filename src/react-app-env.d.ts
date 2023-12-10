/// <reference types="react-scripts" />
declare global {
interface NodeModule {
    hot?: {
      accept: (path: string, callback: () => void) => void;
    };
}}
