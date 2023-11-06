type Nullable<T> = T | null | undefined
export declare namespace qrcode {
    class QRCode {
        constructor(data: string, squareSize?: number, colorFn?: qrcode.color.QRCodeColorFunction, shapeFn?: qrcode.shape.QRCodeShapeFunction, graphicsFactory?: qrcode.render.QRCodeGraphicsFactory, doBefore?: (p0: qrcode.QRCode, p1: qrcode.render.QRCodeGraphics, p2: number, p3: number) => void, doAfter?: (p0: qrcode.QRCode, p1: qrcode.render.QRCodeGraphics, p2: number, p3: number) => void);
        get data(): string;
        get squareSize(): number;
        get colorFn(): qrcode.color.QRCodeColorFunction;
        get shapeFn(): qrcode.shape.QRCodeShapeFunction;
        get graphicsFactory(): qrcode.render.QRCodeGraphicsFactory;
        set graphicsFactory(value: qrcode.render.QRCodeGraphicsFactory);
        get qrCodeProcessor(): qrcode.raw.QRCodeProcessor;
        get typeNum(): number;
        get rawData(): Array<Array<qrcode.internals.QRCodeSquare>>;
        get computedSize(): number;
        get graphics(): qrcode.render.QRCodeGraphics;
        renderToGraphics(qrCodeGraphics?: qrcode.render.QRCodeGraphics, xOffset?: number, yOffset?: number): qrcode.render.QRCodeGraphics;
        render(format?: string): Int8Array;
        reset(): void;
        static get Companion(): {
            get DEFAULT_SQUARE_SIZE(): number;
            ofSquares(): qrcode.QRCodeBuilder;
            ofCircles(): qrcode.QRCodeBuilder;
            ofRoundedSquares(): qrcode.QRCodeBuilder;
            ofCustomShape(customShapeFunction: qrcode.shape.QRCodeShapeFunction): qrcode.QRCodeBuilder;
        };
    }
}
export declare namespace qrcode {
    class QRCodeBuilder {
        constructor(shape: qrcode.QRCodeBuilder.QRCodeShapesEnum, customShapeFunction?: Nullable<qrcode.shape.QRCodeShapeFunction>);
        withSize(size: number): qrcode.QRCodeBuilder;
        withColor(color: number): qrcode.QRCodeBuilder;
        withBackgroundColor(bgColor: number): qrcode.QRCodeBuilder;
        withGradientColor(startColor: number, endColor: Nullable<number>, vertical?: boolean): qrcode.QRCodeBuilder;
        withRadius(radius: number): qrcode.QRCodeBuilder;
        withInnerSpacing(innerSpacing?: Nullable<number>): qrcode.QRCodeBuilder;
        withLogo(logo: Nullable<Int8Array>, width: number, height: number, clearLogoArea?: boolean): qrcode.QRCodeBuilder;
        withAfterRenderAction(action: (p0: qrcode.QRCode, p1: qrcode.render.QRCodeGraphics) => void): qrcode.QRCodeBuilder;
        withBeforeRenderAction(action: (p0: qrcode.QRCode, p1: qrcode.render.QRCodeGraphics) => void): qrcode.QRCodeBuilder;
        withGraphicsFactory(factory: qrcode.render.QRCodeGraphicsFactory): qrcode.QRCodeBuilder;
        withCustomColorFunction(colorFn: Nullable<qrcode.color.QRCodeColorFunction>): qrcode.QRCodeBuilder;
        withCustomShapeFunction(shapeFn: Nullable<qrcode.shape.QRCodeShapeFunction>): qrcode.QRCodeBuilder;
        build(data: string): qrcode.QRCode;
    }
    namespace QRCodeBuilder {
        abstract class QRCodeShapesEnum {
            private constructor();
            static get SQUARE(): qrcode.QRCodeBuilder.QRCodeShapesEnum & {
                get name(): "SQUARE";
                get ordinal(): 0;
            };
            static get CIRCLE(): qrcode.QRCodeBuilder.QRCodeShapesEnum & {
                get name(): "CIRCLE";
                get ordinal(): 1;
            };
            static get ROUNDED_SQUARE(): qrcode.QRCodeBuilder.QRCodeShapesEnum & {
                get name(): "ROUNDED_SQUARE";
                get ordinal(): 2;
            };
            static get CUSTOM(): qrcode.QRCodeBuilder.QRCodeShapesEnum & {
                get name(): "CUSTOM";
                get ordinal(): 3;
            };
            static values(): Array<qrcode.QRCodeBuilder.QRCodeShapesEnum>;
            static valueOf(value: string): qrcode.QRCodeBuilder.QRCodeShapesEnum;
            get name(): "SQUARE" | "CIRCLE" | "ROUNDED_SQUARE" | "CUSTOM";
            get ordinal(): 0 | 1 | 2 | 3;
        }
    }
}
export declare namespace qrcode.color {
    const Colors: {
        css(str: string): number;
        rgba(r: number, g: number, b: number, a?: number): number;
        getRGBA(color: number): Int32Array;
        withAlpha(color: number, alpha: number): number;
        get TRANSPARENT(): number;
        get ALICE_BLUE(): number;
        get ANTIQUE_WHITE(): number;
        get AQUA(): number;
        get AQUAMARINE(): number;
        get AZURE(): number;
        get BEIGE(): number;
        get BISQUE(): number;
        get BLACK(): number;
        get BLANCHED_ALMOND(): number;
        get BLUE(): number;
        get BLUE_VIOLET(): number;
        get BROWN(): number;
        get BURLY_WOOD(): number;
        get CADET_BLUE(): number;
        get CHARTREUSE(): number;
        get CHOCOLATE(): number;
        get CORAL(): number;
        get CORNFLOWER_BLUE(): number;
        get CORNSILK(): number;
        get CRIMSON(): number;
        get CYAN(): number;
        get DARK_BLUE(): number;
        get DARK_CYAN(): number;
        get DARK_GOLDEN_ROD(): number;
        get DARK_GRAY(): number;
        get DARK_GREY(): number;
        get DARK_GREEN(): number;
        get DARK_KHAKI(): number;
        get DARK_MAGENTA(): number;
        get DARK_OLIVE_GREEN(): number;
        get DARK_ORANGE(): number;
        get DARK_ORCHID(): number;
        get DARK_RED(): number;
        get DARK_SALMON(): number;
        get DARK_SEA_GREEN(): number;
        get DARK_SLATE_BLUE(): number;
        get DARK_SLATE_GRAY(): number;
        get DARK_SLATE_GREY(): number;
        get DARK_TURQUOISE(): number;
        get DARK_VIOLET(): number;
        get DEEP_PINK(): number;
        get DEEP_SKY_BLUE(): number;
        get DIM_GRAY(): number;
        get DIM_GREY(): number;
        get DODGER_BLUE(): number;
        get FIRE_BRICK(): number;
        get FLORAL_WHITE(): number;
        get FOREST_GREEN(): number;
        get FUCHSIA(): number;
        get GAINSBORO(): number;
        get GHOST_WHITE(): number;
        get GOLD(): number;
        get GOLDEN_ROD(): number;
        get GRAY(): number;
        get GREY(): number;
        get GREEN(): number;
        get GREEN_YELLOW(): number;
        get HONEY_DEW(): number;
        get HOT_PINK(): number;
        get INDIAN_RED(): number;
        get INDIGO(): number;
        get IVORY(): number;
        get KHAKI(): number;
        get LAVENDER(): number;
        get LAVENDER_BLUSH(): number;
        get LAWN_GREEN(): number;
        get LEMON_CHIFFON(): number;
        get LIGHT_BLUE(): number;
        get LIGHT_CORAL(): number;
        get LIGHT_CYAN(): number;
        get LIGHT_GOLDEN_ROD_YELLOW(): number;
        get LIGHT_GRAY(): number;
        get LIGHT_GREY(): number;
        get LIGHT_GREEN(): number;
        get LIGHT_PINK(): number;
        get LIGHT_SALMON(): number;
        get LIGHT_SEA_GREEN(): number;
        get LIGHT_SKY_BLUE(): number;
        get LIGHT_SLATE_GRAY(): number;
        get LIGHT_SLATE_GREY(): number;
        get LIGHT_STEEL_BLUE(): number;
        get LIGHT_YELLOW(): number;
        get LIME(): number;
        get LIME_GREEN(): number;
        get LINEN(): number;
        get MAGENTA(): number;
        get MAROON(): number;
        get MEDIUM_AQUA_MARINE(): number;
        get MEDIUM_BLUE(): number;
        get MEDIUM_ORCHID(): number;
        get MEDIUM_PURPLE(): number;
        get MEDIUM_SEA_GREEN(): number;
        get MEDIUM_SLATE_BLUE(): number;
        get MEDIUM_SPRING_GREEN(): number;
        get MEDIUM_TURQUOISE(): number;
        get MEDIUM_VIOLET_RED(): number;
        get MIDNIGHT_BLUE(): number;
        get MINT_CREAM(): number;
        get MISTY_ROSE(): number;
        get MOCCASIN(): number;
        get NAVAJO_WHITE(): number;
        get NAVY(): number;
        get OLD_LACE(): number;
        get OLIVE(): number;
        get OLIVE_DRAB(): number;
        get ORANGE(): number;
        get ORANGE_RED(): number;
        get ORCHID(): number;
        get PALE_GOLDEN_ROD(): number;
        get PALE_GREEN(): number;
        get PALE_TURQUOISE(): number;
        get PALE_VIOLET_RED(): number;
        get PAPAYA_WHIP(): number;
        get PEACH_PUFF(): number;
        get PERU(): number;
        get PINK(): number;
        get PLUM(): number;
        get POWDER_BLUE(): number;
        get PURPLE(): number;
        get REBECCA_PURPLE(): number;
        get RED(): number;
        get ROSY_BROWN(): number;
        get ROYAL_BLUE(): number;
        get SADDLE_BROWN(): number;
        get SALMON(): number;
        get SANDY_BROWN(): number;
        get SEA_GREEN(): number;
        get SEA_SHELL(): number;
        get SIENNA(): number;
        get SILVER(): number;
        get SKY_BLUE(): number;
        get SLATE_BLUE(): number;
        get SLATE_GRAY(): number;
        get SLATE_GREY(): number;
        get SNOW(): number;
        get SPRING_GREEN(): number;
        get STEEL_BLUE(): number;
        get TAN(): number;
        get TEAL(): number;
        get THISTLE(): number;
        get TOMATO(): number;
        get TURQUOISE(): number;
        get VIOLET(): number;
        get WHEAT(): number;
        get WHITE(): number;
        get WHITE_SMOKE(): number;
        get YELLOW(): number;
        get YELLOW_GREEN(): number;
    };
}
export declare namespace qrcode.color {
    class DefaultColorFunction implements qrcode.color.QRCodeColorFunction {
        constructor(foreground?: number, background?: number);
        fg(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        bg(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        margin(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        colorFn(square: qrcode.internals.QRCodeSquare, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        readonly __doNotUseOrImplementIt: qrcode.color.QRCodeColorFunction["__doNotUseOrImplementIt"];
    }
}
export declare namespace qrcode.color {
    class LinearGradientColorFunction implements qrcode.color.QRCodeColorFunction {
        constructor(startForegroundColor: number, endForegroundColor: number, backgroundColor?: number, vertical?: boolean);
        get startForegroundColor(): number;
        get endForegroundColor(): number;
        get backgroundColor(): number;
        get vertical(): boolean;
        set vertical(value: boolean);
        fg(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        bg(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        margin(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        colorFn(square: qrcode.internals.QRCodeSquare, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        readonly __doNotUseOrImplementIt: qrcode.color.QRCodeColorFunction["__doNotUseOrImplementIt"];
    }
}
export declare namespace qrcode.color {
    interface QRCodeColorFunction {
        colorFn(square: qrcode.internals.QRCodeSquare, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        fg(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        bg(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        margin(row: number, col: number, qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): number;
        readonly __doNotUseOrImplementIt: {
            readonly "qrcode.color.QRCodeColorFunction": unique symbol;
        };
    }
}
export declare namespace qrcode.internals {
    class QRCodeSquare {
        constructor(dark: boolean, row: number, col: number, moduleSize: number, squareInfo?: qrcode.internals.QRCodeSquareInfo, rowSize?: number, colSize?: number, parent?: Nullable<qrcode.internals.QRCodeSquare>);
        get dark(): boolean;
        set dark(value: boolean);
        get row(): number;
        get col(): number;
        get moduleSize(): number;
        get squareInfo(): qrcode.internals.QRCodeSquareInfo;
        get rowSize(): number;
        get colSize(): number;
        get parent(): Nullable<qrcode.internals.QRCodeSquare>;
        get rendered(): boolean;
        set rendered(value: boolean);
        absoluteX(cellSize?: number): number;
        absoluteY(cellSize?: number): number;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        copy(dark?: boolean, row?: number, col?: number, moduleSize?: number, squareInfo?: qrcode.internals.QRCodeSquareInfo, rowSize?: number, colSize?: number, parent?: Nullable<qrcode.internals.QRCodeSquare>): qrcode.internals.QRCodeSquare;
        toString(): string;
    }
    class QRCodeSquareInfo {
        constructor(type: qrcode.internals.QRCodeSquareType, region: qrcode.internals.QRCodeRegion);
        get type(): qrcode.internals.QRCodeSquareType;
        get region(): qrcode.internals.QRCodeRegion;
        copy(type?: qrcode.internals.QRCodeSquareType, region?: qrcode.internals.QRCodeRegion): qrcode.internals.QRCodeSquareInfo;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    abstract class QRCodeSquareType {
        private constructor();
        static get POSITION_PROBE(): qrcode.internals.QRCodeSquareType & {
            get name(): "POSITION_PROBE";
            get ordinal(): 0;
        };
        static get POSITION_ADJUST(): qrcode.internals.QRCodeSquareType & {
            get name(): "POSITION_ADJUST";
            get ordinal(): 1;
        };
        static get TIMING_PATTERN(): qrcode.internals.QRCodeSquareType & {
            get name(): "TIMING_PATTERN";
            get ordinal(): 2;
        };
        static get DEFAULT(): qrcode.internals.QRCodeSquareType & {
            get name(): "DEFAULT";
            get ordinal(): 3;
        };
        static get MARGIN(): qrcode.internals.QRCodeSquareType & {
            get name(): "MARGIN";
            get ordinal(): 4;
        };
        static values(): Array<qrcode.internals.QRCodeSquareType>;
        static valueOf(value: string): qrcode.internals.QRCodeSquareType;
        get name(): "POSITION_PROBE" | "POSITION_ADJUST" | "TIMING_PATTERN" | "DEFAULT" | "MARGIN";
        get ordinal(): 0 | 1 | 2 | 3 | 4;
    }
    abstract class QRCodeRegion {
        private constructor();
        static get TOP_LEFT_CORNER(): qrcode.internals.QRCodeRegion & {
            get name(): "TOP_LEFT_CORNER";
            get ordinal(): 0;
        };
        static get TOP_RIGHT_CORNER(): qrcode.internals.QRCodeRegion & {
            get name(): "TOP_RIGHT_CORNER";
            get ordinal(): 1;
        };
        static get TOP_MID(): qrcode.internals.QRCodeRegion & {
            get name(): "TOP_MID";
            get ordinal(): 2;
        };
        static get LEFT_MID(): qrcode.internals.QRCodeRegion & {
            get name(): "LEFT_MID";
            get ordinal(): 3;
        };
        static get RIGHT_MID(): qrcode.internals.QRCodeRegion & {
            get name(): "RIGHT_MID";
            get ordinal(): 4;
        };
        static get CENTER(): qrcode.internals.QRCodeRegion & {
            get name(): "CENTER";
            get ordinal(): 5;
        };
        static get BOTTOM_LEFT_CORNER(): qrcode.internals.QRCodeRegion & {
            get name(): "BOTTOM_LEFT_CORNER";
            get ordinal(): 6;
        };
        static get BOTTOM_RIGHT_CORNER(): qrcode.internals.QRCodeRegion & {
            get name(): "BOTTOM_RIGHT_CORNER";
            get ordinal(): 7;
        };
        static get BOTTOM_MID(): qrcode.internals.QRCodeRegion & {
            get name(): "BOTTOM_MID";
            get ordinal(): 8;
        };
        static get MARGIN(): qrcode.internals.QRCodeRegion & {
            get name(): "MARGIN";
            get ordinal(): 9;
        };
        static get UNKNOWN(): qrcode.internals.QRCodeRegion & {
            get name(): "UNKNOWN";
            get ordinal(): 10;
        };
        static values(): Array<qrcode.internals.QRCodeRegion>;
        static valueOf(value: string): qrcode.internals.QRCodeRegion;
        get name(): "TOP_LEFT_CORNER" | "TOP_RIGHT_CORNER" | "TOP_MID" | "LEFT_MID" | "RIGHT_MID" | "CENTER" | "BOTTOM_LEFT_CORNER" | "BOTTOM_RIGHT_CORNER" | "BOTTOM_MID" | "MARGIN" | "UNKNOWN";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    }
}
export declare namespace qrcode.raw {
    abstract class ErrorCorrectionLevel {
        private constructor();
        get value(): number;
        get maxTypeNum(): number;
        static get L(): qrcode.raw.ErrorCorrectionLevel & {
            get name(): "L";
            get ordinal(): 0;
        };
        static get M(): qrcode.raw.ErrorCorrectionLevel & {
            get name(): "M";
            get ordinal(): 1;
        };
        static get Q(): qrcode.raw.ErrorCorrectionLevel & {
            get name(): "Q";
            get ordinal(): 2;
        };
        static get H(): qrcode.raw.ErrorCorrectionLevel & {
            get name(): "H";
            get ordinal(): 3;
        };
        static values(): Array<qrcode.raw.ErrorCorrectionLevel>;
        static valueOf(value: string): qrcode.raw.ErrorCorrectionLevel;
        get name(): "L" | "M" | "Q" | "H";
        get ordinal(): 0 | 1 | 2 | 3;
    }
    abstract class MaskPattern {
        private constructor();
        static get PATTERN000(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN000";
            get ordinal(): 0;
        };
        static get PATTERN001(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN001";
            get ordinal(): 1;
        };
        static get PATTERN010(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN010";
            get ordinal(): 2;
        };
        static get PATTERN011(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN011";
            get ordinal(): 3;
        };
        static get PATTERN100(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN100";
            get ordinal(): 4;
        };
        static get PATTERN101(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN101";
            get ordinal(): 5;
        };
        static get PATTERN110(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN110";
            get ordinal(): 6;
        };
        static get PATTERN111(): qrcode.raw.MaskPattern & {
            get name(): "PATTERN111";
            get ordinal(): 7;
        };
        static values(): Array<qrcode.raw.MaskPattern>;
        static valueOf(value: string): qrcode.raw.MaskPattern;
        get name(): "PATTERN000" | "PATTERN001" | "PATTERN010" | "PATTERN011" | "PATTERN100" | "PATTERN101" | "PATTERN110" | "PATTERN111";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    }
    abstract class QRCodeDataType {
        private constructor();
        get value(): number;
        static get NUMBERS(): qrcode.raw.QRCodeDataType & {
            get name(): "NUMBERS";
            get ordinal(): 0;
        };
        static get UPPER_ALPHA_NUM(): qrcode.raw.QRCodeDataType & {
            get name(): "UPPER_ALPHA_NUM";
            get ordinal(): 1;
        };
        static get DEFAULT(): qrcode.raw.QRCodeDataType & {
            get name(): "DEFAULT";
            get ordinal(): 2;
        };
        static values(): Array<qrcode.raw.QRCodeDataType>;
        static valueOf(value: string): qrcode.raw.QRCodeDataType;
        get name(): "NUMBERS" | "UPPER_ALPHA_NUM" | "DEFAULT";
        get ordinal(): 0 | 1 | 2;
    }
}
export declare namespace qrcode.raw {
    class QRCodeProcessor {
        constructor(data: string, errorCorrectionLevel?: qrcode.raw.ErrorCorrectionLevel, dataType?: qrcode.raw.QRCodeDataType, graphicsFactory?: qrcode.render.QRCodeGraphicsFactory);
        get graphicsFactory(): qrcode.render.QRCodeGraphicsFactory;
        computeImageSizeFromRawData(cellSize?: number, margin?: number, rawData?: Array<Array<qrcode.internals.QRCodeSquare>>): number;
        computeImageSize(cellSize: number | undefined, margin: number | undefined, size: number): number;
        render(cellSize?: number, margin?: number, brightColor?: number, darkColor?: number, marginColor?: number): qrcode.render.QRCodeGraphics;
        renderComputed(cellSize?: number, margin?: number, rawData?: Array<Array<qrcode.internals.QRCodeSquare>>, qrCodeGraphics?: qrcode.render.QRCodeGraphics, brightColor?: number, darkColor?: number, marginColor?: number): qrcode.render.QRCodeGraphics;
        renderShaded(cellSize: number | undefined, margin: number | undefined, rawData: Array<Array<qrcode.internals.QRCodeSquare>> | undefined, qrCodeGraphics: qrcode.render.QRCodeGraphics | undefined, renderer: (p0: number, p1: number, p2: qrcode.internals.QRCodeSquare, p3: qrcode.render.QRCodeGraphics) => void): qrcode.render.QRCodeGraphics;
        encode(type?: number, maskPattern?: qrcode.raw.MaskPattern): Array<Array<qrcode.internals.QRCodeSquare>>;
        toString(): string;
        static get Companion(): {
            get DEFAULT_CELL_SIZE(): number;
            get DEFAULT_MARGIN(): number;
            typeForDataAndECL(data: string, errorCorrectionLevel: qrcode.raw.ErrorCorrectionLevel, dataType?: qrcode.raw.QRCodeDataType): number;
        };
    }
}
export declare namespace qrcode.render {
    class QRCodeGraphicsFactory {
        constructor();
        newGraphicsSquare(size: number): qrcode.render.QRCodeGraphics;
        newGraphics(width: number, height: number): qrcode.render.QRCodeGraphics;
    }
}
export declare namespace qrcode.shape {
    class CircleShapeFunction extends qrcode.shape.RoundSquaresShapeFunction {
        constructor(squareSize?: number, innerSpace?: number);
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        static get Companion(): {
            defaultRadius(squareSize: number): number;
            defaultInnerSpace(squareSize: number): number;
        };
    }
}
export declare namespace qrcode.shape {
    class DefaultShapeFunction implements qrcode.shape.QRCodeShapeFunction {
        constructor(squareSize?: number, innerSpace?: number);
        get squareSize(): number;
        renderSquare(x: number, y: number, colorFn: qrcode.color.QRCodeColorFunction, square: qrcode.internals.QRCodeSquare, canvas: qrcode.render.QRCodeGraphics, qrCode: qrcode.QRCode): void;
        renderControlSquare(xOffset: number, yOffset: number, colorFn: qrcode.color.QRCodeColorFunction, square: qrcode.internals.QRCodeSquare, canvas: qrcode.render.QRCodeGraphics, qrCode: qrcode.QRCode): void;
        fillRect(x: number, y: number, width: number, height: number, color: number, canvas: qrcode.render.QRCodeGraphics): void;
        drawRect(x: number, y: number, width: number, height: number, color: number, thickness: number, canvas: qrcode.render.QRCodeGraphics): void;
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        readonly __doNotUseOrImplementIt: qrcode.shape.QRCodeShapeFunction["__doNotUseOrImplementIt"];
    }
}
export declare namespace qrcode.shape {
    interface QRCodeShapeFunction {
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        renderSquare(x: number, y: number, colorFn: qrcode.color.QRCodeColorFunction, square: qrcode.internals.QRCodeSquare, canvas: qrcode.render.QRCodeGraphics, qrCode: qrcode.QRCode): void;
        renderControlSquare(xOffset: number, yOffset: number, colorFn: qrcode.color.QRCodeColorFunction, square: qrcode.internals.QRCodeSquare, canvas: qrcode.render.QRCodeGraphics, qrCode: qrcode.QRCode): void;
        readonly __doNotUseOrImplementIt: {
            readonly "qrcode.shape.QRCodeShapeFunction": unique symbol;
        };
    }
}
export declare namespace qrcode.shape {
    class RoundSquaresShapeFunction extends qrcode.shape.DefaultShapeFunction {
        constructor(squareSize?: number, radius?: number, innerSpace?: number);
        fillRect(x: number, y: number, width: number, height: number, color: number, canvas: qrcode.render.QRCodeGraphics): void;
        drawRect(x: number, y: number, width: number, height: number, color: number, thickness: number, canvas: qrcode.render.QRCodeGraphics): void;
        beforeRender(qrCode: qrcode.QRCode, qrCodeGraphics: qrcode.render.QRCodeGraphics): void;
        static get Companion(): {
            defaultRadius(squareSize: number): number;
            defaultInnerSpace(squareSize: number): number;
        };
    }
}
export declare namespace qrcode.render {
    class QRCodeGraphics {
        constructor(width: number, height: number);
        get width(): number;
        get height(): number;
        changed(): boolean;
        reset(): void;
        dimensions(): Array<number>;
        toDataURL(format?: string): string;
        toBlob(callback: (p0: Nullable<Blob>) => void): void;
        getBytes(): Int8Array;
        getBytesForFormat(format: string): Int8Array;
        availableFormats(): Array<string>;
        nativeImage(): any;
        drawLine(x1: number, y1: number, x2: number, y2: number, color: number, thickness: number): void;
        drawRect(x: number, y: number, width: number, height: number, color: number, thickness: number): void;
        fillRect(x: number, y: number, width: number, height: number, color: number): void;
        fill(color: number): void;
        drawRoundRect(x: number, y: number, width: number, height: number, borderRadius: number, color: number, thickness: number): void;
        fillRoundRect(x: number, y: number, width: number, height: number, borderRadius: number, color: number): void;
        drawEllipse(x: number, y: number, width: number, height: number, color: number, thickness: number): void;
        fillEllipse(x: number, y: number, width: number, height: number, color: number): void;
        drawImageFromBytes(rawData: Nullable<Int8Array>, x: number, y: number): void;
        static get Companion(): {
        };
    }
}
export as namespace io_github_g0dkar_qrcode_kotlin;