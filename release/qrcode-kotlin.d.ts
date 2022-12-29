type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace io.github.g0dkar.qrcode {
    class QRCode {
        constructor(data: string, errorCorrectionLevel?: io.github.g0dkar.qrcode.ErrorCorrectionLevel, dataType?: io.github.g0dkar.qrcode.QRCodeDataType);
        get qrCodeGraphicsFactory(): io.github.g0dkar.qrcode.render.QRCodeGraphicsFactory;
        set qrCodeGraphicsFactory(value: io.github.g0dkar.qrcode.render.QRCodeGraphicsFactory);
        computeImageSizeFromRawData(cellSize?: number, margin?: number, rawData?: Array<Array<Nullable<io.github.g0dkar.qrcode.internals.QRCodeSquare>>>): number;
        computeImageSize(cellSize?: number, margin?: number, size: number): number;
        render(cellSize?: number, margin?: number, brightColor?: number, darkColor?: number, marginColor?: number): io.github.g0dkar.qrcode.render.QRCodeGraphics;
        renderComputed(cellSize?: number, margin?: number, rawData?: Array<Array<Nullable<io.github.g0dkar.qrcode.internals.QRCodeSquare>>>, qrCodeGraphics?: io.github.g0dkar.qrcode.render.QRCodeGraphics, brightColor?: number, darkColor?: number, marginColor?: number): io.github.g0dkar.qrcode.render.QRCodeGraphics;
        renderShaded(cellSize?: number, margin?: number, rawData?: Array<Array<Nullable<io.github.g0dkar.qrcode.internals.QRCodeSquare>>>, qrCodeGraphics?: io.github.g0dkar.qrcode.render.QRCodeGraphics, renderer: (p0: io.github.g0dkar.qrcode.internals.QRCodeSquare, p1: io.github.g0dkar.qrcode.render.QRCodeGraphics) => void): io.github.g0dkar.qrcode.render.QRCodeGraphics;
        encode(type?: number, maskPattern?: io.github.g0dkar.qrcode.MaskPattern): Array<Array<Nullable<io.github.g0dkar.qrcode.internals.QRCodeSquare>>>;
        toString(): string;
        static get Companion(): {
            get DEFAULT_CELL_SIZE(): number;
            get DEFAULT_MARGIN(): number;
            typeForDataAndECL(data: string, errorCorrectionLevel: io.github.g0dkar.qrcode.ErrorCorrectionLevel, dataType?: io.github.g0dkar.qrcode.QRCodeDataType): number;
        };
    }
}
export namespace io.github.g0dkar.qrcode {
    abstract class ErrorCorrectionLevel {
        private constructor();
        get value(): number;
        get maxTypeNum(): number;
        static get L(): io.github.g0dkar.qrcode.ErrorCorrectionLevel & {
            get name(): "L";
            get ordinal(): 0;
        };
        static get M(): io.github.g0dkar.qrcode.ErrorCorrectionLevel & {
            get name(): "M";
            get ordinal(): 1;
        };
        static get Q(): io.github.g0dkar.qrcode.ErrorCorrectionLevel & {
            get name(): "Q";
            get ordinal(): 2;
        };
        static get H(): io.github.g0dkar.qrcode.ErrorCorrectionLevel & {
            get name(): "H";
            get ordinal(): 3;
        };
        static values(): Array<io.github.g0dkar.qrcode.ErrorCorrectionLevel>;
        static valueOf(value: string): io.github.g0dkar.qrcode.ErrorCorrectionLevel;
        get name(): "L" | "M" | "Q" | "H";
        get ordinal(): 0 | 1 | 2 | 3;
    }
    abstract class MaskPattern {
        private constructor();
        static get PATTERN000(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN000";
            get ordinal(): 0;
        };
        static get PATTERN001(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN001";
            get ordinal(): 1;
        };
        static get PATTERN010(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN010";
            get ordinal(): 2;
        };
        static get PATTERN011(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN011";
            get ordinal(): 3;
        };
        static get PATTERN100(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN100";
            get ordinal(): 4;
        };
        static get PATTERN101(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN101";
            get ordinal(): 5;
        };
        static get PATTERN110(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN110";
            get ordinal(): 6;
        };
        static get PATTERN111(): io.github.g0dkar.qrcode.MaskPattern & {
            get name(): "PATTERN111";
            get ordinal(): 7;
        };
        static values(): Array<io.github.g0dkar.qrcode.MaskPattern>;
        static valueOf(value: string): io.github.g0dkar.qrcode.MaskPattern;
        get name(): "PATTERN000" | "PATTERN001" | "PATTERN010" | "PATTERN011" | "PATTERN100" | "PATTERN101" | "PATTERN110" | "PATTERN111";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    }
    abstract class QRCodeDataType {
        private constructor();
        get value(): number;
        static get NUMBERS(): io.github.g0dkar.qrcode.QRCodeDataType & {
            get name(): "NUMBERS";
            get ordinal(): 0;
        };
        static get UPPER_ALPHA_NUM(): io.github.g0dkar.qrcode.QRCodeDataType & {
            get name(): "UPPER_ALPHA_NUM";
            get ordinal(): 1;
        };
        static get DEFAULT(): io.github.g0dkar.qrcode.QRCodeDataType & {
            get name(): "DEFAULT";
            get ordinal(): 2;
        };
        static values(): Array<io.github.g0dkar.qrcode.QRCodeDataType>;
        static valueOf(value: string): io.github.g0dkar.qrcode.QRCodeDataType;
        get name(): "NUMBERS" | "UPPER_ALPHA_NUM" | "DEFAULT";
        get ordinal(): 0 | 1 | 2;
    }
}
export namespace io.github.g0dkar.qrcode.internals {
    class QRCodeSquare {
        constructor(dark: boolean, row: number, col: number, moduleSize: number, squareInfo?: io.github.g0dkar.qrcode.internals.QRCodeSquareInfo);
        get dark(): boolean;
        set dark(value: boolean);
        get row(): number;
        get col(): number;
        get moduleSize(): number;
        get squareInfo(): io.github.g0dkar.qrcode.internals.QRCodeSquareInfo;
        absoluteX(cellSize?: number): number;
        absoluteY(cellSize?: number): number;
        component1(): boolean;
        component2(): number;
        component3(): number;
        component4(): number;
        component5(): io.github.g0dkar.qrcode.internals.QRCodeSquareInfo;
        copy(dark?: boolean, row?: number, col?: number, moduleSize?: number, squareInfo?: io.github.g0dkar.qrcode.internals.QRCodeSquareInfo): io.github.g0dkar.qrcode.internals.QRCodeSquare;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class QRCodeSquareInfo {
        constructor(type: io.github.g0dkar.qrcode.internals.QRCodeSquareType, region: io.github.g0dkar.qrcode.internals.QRCodeRegion);
        get type(): io.github.g0dkar.qrcode.internals.QRCodeSquareType;
        get region(): io.github.g0dkar.qrcode.internals.QRCodeRegion;
        component1(): io.github.g0dkar.qrcode.internals.QRCodeSquareType;
        component2(): io.github.g0dkar.qrcode.internals.QRCodeRegion;
        copy(type?: io.github.g0dkar.qrcode.internals.QRCodeSquareType, region?: io.github.g0dkar.qrcode.internals.QRCodeRegion): io.github.g0dkar.qrcode.internals.QRCodeSquareInfo;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    abstract class QRCodeSquareType {
        private constructor();
        static get POSITION_PROBE(): io.github.g0dkar.qrcode.internals.QRCodeSquareType & {
            get name(): "POSITION_PROBE";
            get ordinal(): 0;
        };
        static get POSITION_ADJUST(): io.github.g0dkar.qrcode.internals.QRCodeSquareType & {
            get name(): "POSITION_ADJUST";
            get ordinal(): 1;
        };
        static get TIMING_PATTERN(): io.github.g0dkar.qrcode.internals.QRCodeSquareType & {
            get name(): "TIMING_PATTERN";
            get ordinal(): 2;
        };
        static get DEFAULT(): io.github.g0dkar.qrcode.internals.QRCodeSquareType & {
            get name(): "DEFAULT";
            get ordinal(): 3;
        };
        static get MARGIN(): io.github.g0dkar.qrcode.internals.QRCodeSquareType & {
            get name(): "MARGIN";
            get ordinal(): 4;
        };
        static values(): Array<io.github.g0dkar.qrcode.internals.QRCodeSquareType>;
        static valueOf(value: string): io.github.g0dkar.qrcode.internals.QRCodeSquareType;
        get name(): "POSITION_PROBE" | "POSITION_ADJUST" | "TIMING_PATTERN" | "DEFAULT" | "MARGIN";
        get ordinal(): 0 | 1 | 2 | 3 | 4;
    }
    abstract class QRCodeRegion {
        private constructor();
        static get TOP_LEFT_CORNER(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "TOP_LEFT_CORNER";
            get ordinal(): 0;
        };
        static get TOP_RIGHT_CORNER(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "TOP_RIGHT_CORNER";
            get ordinal(): 1;
        };
        static get TOP_MID(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "TOP_MID";
            get ordinal(): 2;
        };
        static get LEFT_MID(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "LEFT_MID";
            get ordinal(): 3;
        };
        static get RIGHT_MID(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "RIGHT_MID";
            get ordinal(): 4;
        };
        static get CENTER(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "CENTER";
            get ordinal(): 5;
        };
        static get BOTTOM_LEFT_CORNER(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "BOTTOM_LEFT_CORNER";
            get ordinal(): 6;
        };
        static get BOTTOM_RIGHT_CORNER(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "BOTTOM_RIGHT_CORNER";
            get ordinal(): 7;
        };
        static get BOTTOM_MID(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "BOTTOM_MID";
            get ordinal(): 8;
        };
        static get MARGIN(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "MARGIN";
            get ordinal(): 9;
        };
        static get UNKNOWN(): io.github.g0dkar.qrcode.internals.QRCodeRegion & {
            get name(): "UNKNOWN";
            get ordinal(): 10;
        };
        static values(): Array<io.github.g0dkar.qrcode.internals.QRCodeRegion>;
        static valueOf(value: string): io.github.g0dkar.qrcode.internals.QRCodeRegion;
        get name(): "TOP_LEFT_CORNER" | "TOP_RIGHT_CORNER" | "TOP_MID" | "LEFT_MID" | "RIGHT_MID" | "CENTER" | "BOTTOM_LEFT_CORNER" | "BOTTOM_RIGHT_CORNER" | "BOTTOM_MID" | "MARGIN" | "UNKNOWN";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    }
}
export namespace io.github.g0dkar.qrcode.render {
    class QRCodeGraphicsFactory {
        constructor();
        newGraphicsSquare(size: number): io.github.g0dkar.qrcode.render.QRCodeGraphics;
        newGraphics(width: number, height: number): io.github.g0dkar.qrcode.render.QRCodeGraphics;
    }
}
export namespace io.github.g0dkar.qrcode.render {
    class QRCodeGraphics {
        constructor(width: number, height: number);
        get width(): number;
        get height(): number;
        toDataURL(format?: string): string;
        toBlob(callback: (p0: Nullable<Blob>) => void): void;
        getBytes(): Int8Array;
        getBytesForFormat(format: string): Int8Array;
        availableFormats(): Array<string>;
        nativeImage(): any;
        drawLine(x1: number, y1: number, x2: number, y2: number, color: number): void;
        drawRect(x: number, y: number, width: number, height: number, color: number): void;
        fillRect(x: number, y: number, width: number, height: number, color: number): void;
        fill(color: number): void;
        drawRoundRect(x: number, y: number, width: number, height: number, borderRadius: number, color: number): void;
        fillRoundRect(x: number, y: number, width: number, height: number, borderRadius: number, color: number): void;
        drawImage(img: io.github.g0dkar.qrcode.render.QRCodeGraphics, x: number, y: number): void;
        static get Companion(): {
        };
    }
}
export as namespace qrcode_kotlin;