//region block: polyfills
(function () {
  if (typeof globalThis === 'object')
    return;
  Object.defineProperty(Object.prototype, '__magic__', {get: function () {
    return this;
  }, configurable: true});
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
}());
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
//endregion
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['io.github.g0dkar:qrcode-kotlin'] = factory(typeof globalThis['io.github.g0dkar:qrcode-kotlin'] === 'undefined' ? {} : globalThis['io.github.g0dkar:qrcode-kotlin']);
}(function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var clz32 = Math.clz32;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(CharSequence, 'CharSequence');
  initMetadataForClass(Number_0, 'Number');
  initMetadataForClass(Char, 'Char');
  initMetadataForInterface(Collection, 'Collection');
  initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
  initMetadataForInterface(KtSet, 'Set', VOID, VOID, [Collection]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(KtMap, 'Map');
  initMetadataForCompanion(Companion);
  initMetadataForClass(Enum, 'Enum');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Long, 'Long', VOID, Number_0);
  initMetadataForInterface(FunctionAdapter, 'FunctionAdapter');
  initMetadataForObject(Digit, 'Digit');
  initMetadataForInterface(Comparator, 'Comparator');
  initMetadataForObject(Unit, 'Unit');
  initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
  initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, AbstractCollection, [AbstractCollection, Collection]);
  initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, AbstractMutableCollection, [AbstractMutableCollection, Collection, KtSet]);
  initMetadataForClass(HashSet, 'HashSet', HashSet_init_$Create$, AbstractMutableSet, [AbstractMutableSet, Collection, KtSet]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Itr, 'Itr');
  initMetadataForClass(KeysItr, 'KeysItr', VOID, Itr);
  initMetadataForClass(EntriesItr, 'EntriesItr', VOID, Itr);
  initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
  function containsAllEntries(m) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(m, Collection)) {
        tmp = m.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = m.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var entry = element;
        var tmp_0;
        if (!(entry == null) ? isInterface(entry, Entry) : false) {
          tmp_0 = this.p3(entry);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  initMetadataForInterface(InternalMap, 'InternalMap');
  initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap_init_$Create$, VOID, [InternalMap]);
  initMetadataForClass(LinkedHashSet, 'LinkedHashSet', LinkedHashSet_init_$Create$, HashSet, [HashSet, Collection, KtSet]);
  initMetadataForClass(Exception, 'Exception', Exception_init_$Create$, Error);
  initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException_init_$Create$, Exception);
  initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException_init_$Create$, RuntimeException);
  initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException_init_$Create$, RuntimeException);
  initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException_init_$Create$, RuntimeException);
  initMetadataForClass(Error_0, 'Error', Error_init_$Create$, Error);
  initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException_init_$Create$, RuntimeException);
  initMetadataForClass(NumberFormatException, 'NumberFormatException', NumberFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException_init_$Create$, RuntimeException);
  initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException_init_$Create$, RuntimeException);
  initMetadataForClass(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', NoWhenBranchMatchedException_init_$Create$, RuntimeException);
  initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException_init_$Create$, RuntimeException);
  initMetadataForInterface(KClass, 'KClass');
  initMetadataForClass(KClassImpl, 'KClassImpl', VOID, VOID, [KClass]);
  initMetadataForObject(NothingKClassImpl, 'NothingKClassImpl', VOID, KClassImpl);
  initMetadataForClass(ErrorKClass, 'ErrorKClass', ErrorKClass, VOID, [KClass]);
  initMetadataForClass(PrimitiveKClassImpl, 'PrimitiveKClassImpl', VOID, KClassImpl);
  initMetadataForClass(SimpleKClassImpl, 'SimpleKClassImpl', VOID, KClassImpl);
  initMetadataForObject(PrimitiveClasses, 'PrimitiveClasses');
  initMetadataForClass(CharacterCodingException, 'CharacterCodingException', CharacterCodingException_init_$Create$, Exception);
  initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder_init_$Create$_0, VOID, [CharSequence]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Regex, 'Regex');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject(EmptyIterator, 'EmptyIterator');
  initMetadataForClass(IntIterator, 'IntIterator');
  initMetadataForObject(EmptySet, 'EmptySet', VOID, VOID, [KtSet]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(IntProgression, 'IntProgression');
  function isEmpty() {
    return compareTo(this.m(), this.l()) > 0;
  }
  initMetadataForInterface(ClosedRange, 'ClosedRange');
  initMetadataForClass(IntRange, 'IntRange', VOID, IntProgression, [IntProgression, ClosedRange]);
  initMetadataForClass(IntProgressionIterator, 'IntProgressionIterator', VOID, IntIterator);
  initMetadataForCompanion(Companion_6);
  function isEmpty_0() {
    return !this.r(this.m(), this.l());
  }
  initMetadataForInterface(ClosedFloatingPointRange, 'ClosedFloatingPointRange', VOID, VOID, [ClosedRange]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(QRCode, 'QRCode');
  initMetadataForClass(QRCodeBuilder, 'QRCodeBuilder');
  initMetadataForClass(QRCodeShapesEnum, 'QRCodeShapesEnum', VOID, Enum);
  initMetadataForObject(Colors, 'Colors');
  function colorFn(square, qrCode, qrCodeGraphics) {
    return square.dark === true ? this.fg(square.row, square.col, qrCode, qrCodeGraphics) : this.bg(square.row, square.col, qrCode, qrCodeGraphics);
  }
  function beforeRender(qrCode, qrCodeGraphics) {
  }
  initMetadataForInterface(QRCodeColorFunction, 'QRCodeColorFunction');
  initMetadataForClass(DefaultColorFunction, 'DefaultColorFunction', DefaultColorFunction, VOID, [QRCodeColorFunction]);
  initMetadataForClass(LinearGradientColorFunction, 'LinearGradientColorFunction', VOID, VOID, [QRCodeColorFunction]);
  initMetadataForClass(InsufficientInformationDensityException, 'InsufficientInformationDensityException', InsufficientInformationDensityException, IllegalArgumentException);
  initMetadataForClass(BitBuffer, 'BitBuffer', BitBuffer);
  initMetadataForClass(Polynomial, 'Polynomial');
  initMetadataForObject(QRCodeSetup, 'QRCodeSetup');
  initMetadataForClass(QRCodeSquare, 'QRCodeSquare');
  initMetadataForClass(QRCodeSquareInfo, 'QRCodeSquareInfo');
  initMetadataForClass(QRCodeSquareType, 'QRCodeSquareType', VOID, Enum);
  initMetadataForClass(QRCodeRegion, 'QRCodeRegion', VOID, Enum);
  initMetadataForClass(QRData, 'QRData');
  initMetadataForClass(QR8BitByte, 'QR8BitByte', VOID, QRData);
  initMetadataForClass(QRAlphaNum, 'QRAlphaNum', VOID, QRData);
  initMetadataForClass(QRNumber, 'QRNumber', VOID, QRData);
  initMetadataForObject(QRMath, 'QRMath');
  initMetadataForObject(QRUtil, 'QRUtil');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(RSBlock, 'RSBlock');
  initMetadataForClass(ErrorCorrectionLevel, 'ErrorCorrectionLevel', VOID, Enum);
  initMetadataForClass(MaskPattern, 'MaskPattern', VOID, Enum);
  initMetadataForClass(QRCodeDataType, 'QRCodeDataType', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(QRCodeProcessor, 'QRCodeProcessor');
  initMetadataForClass(QRCodeGraphicsFactory, 'QRCodeGraphicsFactory', QRCodeGraphicsFactory);
  initMetadataForCompanion(Companion_10);
  function beforeRender_0(qrCode, qrCodeGraphics) {
  }
  initMetadataForInterface(QRCodeShapeFunction, 'QRCodeShapeFunction');
  initMetadataForClass(DefaultShapeFunction, 'DefaultShapeFunction', DefaultShapeFunction, VOID, [QRCodeShapeFunction]);
  initMetadataForClass(RoundSquaresShapeFunction, 'RoundSquaresShapeFunction', RoundSquaresShapeFunction, DefaultShapeFunction);
  initMetadataForClass(CircleShapeFunction, 'CircleShapeFunction', CircleShapeFunction, RoundSquaresShapeFunction);
  initMetadataForCompanion(Companion_11);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(QRCodeGraphics, 'QRCodeGraphics');
  //endregion
  function CharSequence() {
  }
  function Number_0() {
  }
  function toCollection(_this__u8e3s4, destination) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.c(item);
    }
    return destination;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.d(prefix);
    var count = 0;
    var _iterator__ex2g4s = _this__u8e3s4.e();
    $l$loop: while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.d(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.d(truncated);
    }
    buffer.d(postfix);
    return buffer;
  }
  function toSet(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.h()) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, KtList)) {
            tmp_0 = _this__u8e3s4.i(0);
          } else {
            tmp_0 = _this__u8e3s4.e().g();
          }

          tmp = setOf(tmp_0);
          break;
        default:
          tmp = toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$_0(mapCapacity(_this__u8e3s4.h())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlySet(toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$()));
  }
  function toCollection_0(_this__u8e3s4, destination) {
    var _iterator__ex2g4s = _this__u8e3s4.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      destination.c(item);
    }
    return destination;
  }
  function until(_this__u8e3s4, to) {
    if (to <= -2147483648)
      return Companion_getInstance_5().j_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function coerceIn(_this__u8e3s4, range) {
    if (isInterface(range, ClosedFloatingPointRange)) {
      return coerceIn_0(_this__u8e3s4, range);
    }
    if (range.k())
      throw IllegalArgumentException_init_$Create$_0('Cannot coerce value to an empty range: ' + toString_1(range) + '.');
    return _this__u8e3s4 < range.m() ? range.m() : _this__u8e3s4 > range.l() ? range.l() : _this__u8e3s4;
  }
  function step(_this__u8e3s4, step) {
    checkStepIsPositive(step > 0, step);
    return Companion_instance_6.q(_this__u8e3s4.n_1, _this__u8e3s4.o_1, _this__u8e3s4.p_1 > 0 ? step : -step | 0);
  }
  function coerceIn_0(_this__u8e3s4, range) {
    if (range.k())
      throw IllegalArgumentException_init_$Create$_0('Cannot coerce value to an empty range: ' + toString_1(range) + '.');
    return range.r(_this__u8e3s4, range.m()) && !range.r(range.m(), _this__u8e3s4) ? range.m() : range.r(range.l(), _this__u8e3s4) && !range.r(_this__u8e3s4, range.l()) ? range.l() : _this__u8e3s4;
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    // Inline function 'kotlin.UShort.toInt' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    return _Char___init__impl__6a9atx(tmp$ret$0);
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__minus_impl_a2frrh($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function toString($this) {
    // Inline function 'kotlin.js.unsafeCast' call
    return String.fromCharCode(_get_value__a43j40($this));
  }
  function Char() {
  }
  function KtList() {
  }
  function Collection() {
  }
  function KtSet() {
  }
  function Entry() {
  }
  function KtMap() {
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Enum(name, ordinal) {
    this.x_1 = name;
    this.y_1 = ordinal;
  }
  protoOf(Enum).z = function () {
    return this.x_1;
  };
  protoOf(Enum).a1 = function () {
    return this.y_1;
  };
  protoOf(Enum).b1 = function (other) {
    return compareTo(this.y_1, other.y_1);
  };
  protoOf(Enum).c1 = function (other) {
    return this.b1(other instanceof Enum ? other : THROW_CCE());
  };
  protoOf(Enum).equals = function (other) {
    return this === other;
  };
  protoOf(Enum).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(Enum).toString = function () {
    return this.x_1;
  };
  function toString_0(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.d1_1 = new Long(0, -2147483648);
    this.e1_1 = new Long(-1, 2147483647);
    this.f1_1 = 8;
    this.g1_1 = 64;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Long(low, high) {
    Companion_getInstance_0();
    Number_0.call(this);
    this.h1_1 = low;
    this.i1_1 = high;
  }
  protoOf(Long).j1 = function (other) {
    return compare(this, other);
  };
  protoOf(Long).c1 = function (other) {
    return this.j1(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(Long).k1 = function (other) {
    return add(this, other);
  };
  protoOf(Long).l1 = function (other) {
    return divide(this, other);
  };
  protoOf(Long).m1 = function () {
    return this.n1().k1(new Long(1, 0));
  };
  protoOf(Long).n1 = function () {
    return new Long(~this.h1_1, ~this.i1_1);
  };
  protoOf(Long).o1 = function () {
    return this.h1_1;
  };
  protoOf(Long).p1 = function () {
    return toNumber(this);
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  protoOf(Long).equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Long).hashCode = function () {
    return hashCode_0(this);
  };
  protoOf(Long).valueOf = function () {
    return this.p1();
  };
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var inductionVariable = 0;
    var last = interfaces.length;
    while (inductionVariable < last) {
      var i = interfaces[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp0_elvis_lhs = i.prototype.$imask$;
      var imask = tmp0_elvis_lhs == null ? i.$imask$ : tmp0_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp;
      if (iid == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = bitMaskWith(iid);
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var numberIndex = activeBit >> 5;
    var intArray = new Int32Array(numberIndex + 1 | 0);
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = new Int32Array(capacity);
    while (tmp < capacity) {
      var tmp_1 = tmp;
      var result = 0;
      var inductionVariable = 0;
      var last = masks.length;
      while (inductionVariable < last) {
        var mask = masks[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_1 < mask.length) {
          result = result | mask[tmp_1];
        }
      }
      tmp_0[tmp_1] = result;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function isBitSet(_this__u8e3s4, possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > _this__u8e3s4.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
  }
  function FunctionAdapter() {
  }
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    // Inline function 'kotlin.js.jsBitwiseOr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    if ((obj | 0) === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (!properties_initialized_bitUtils_kt_i2bo3e) {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat64 = new Float64Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat32 = new Float32Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufInt32 = new Int32Array(get_buf());
      // Inline function 'kotlin.run' call
      get_bufFloat64()[0] = -1.0;
      lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1 = a.charCodeAt(index);
      tmp = numberToChar(tmp$ret$1);
    } else {
      tmp = a.b(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = a.length;
    } else {
      tmp = a.a();
    }
    return tmp;
  }
  function compareTo(a, b) {
    var tmp;
    switch (typeof a) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.p1());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var ia = 1 / a;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (ia === 1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.c1(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    // Inline function 'kotlin.js.jsIn' call
    if (!('kotlinHashCodeValue$' in obj)) {
      var hash = calculateRandomHash();
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    return obj['kotlinHashCodeValue$'];
  }
  function calculateRandomHash() {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    return Math.random() * 4.294967296E9 | 0;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    proto = proto === VOID ? null : proto;
    return Object.create(proto);
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else if (!(typeof o.toString === 'function')) {
      tmp = anyToString(o);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = o.toString();
    }
    return tmp;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var typeOf = typeof obj;
    var tmp;
    switch (typeOf) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBooleanHashCode(obj);
        break;
      case 'string':
        tmp = getStringHashCode(String(obj));
        break;
      case 'bigint':
        tmp = getBigIntHashCode(obj);
        break;
      case 'symbol':
        tmp = getSymbolHashCode(obj);
        break;
      default:
        tmp = function () {
          throw new Error('Unexpected typeof `' + typeOf + '`');
        }();
        break;
    }
    return tmp;
  }
  function getBooleanHashCode(value) {
    return value ? 1231 : 1237;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function getBigIntHashCode(value) {
    var shiftNumber = BigInt(32);
    var MASK = BigInt(4.294967295E9);
    var bigNumber = value < 0 ? -value : value;
    var hashCode = 0;
    var signum = value < 0 ? -1 : 1;
    while (bigNumber != 0) {
      // Inline function 'kotlin.js.unsafeCast' call
      var chunk = Number(bigNumber & MASK);
      hashCode = imul(31, hashCode) + chunk | 0;
      bigNumber = bigNumber >> shiftNumber;
    }
    return imul(hashCode, signum);
  }
  function getSymbolHashCode(value) {
    var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
    var cachedHashCode = hashCodeMap.get(value);
    if (cachedHashCode !== VOID)
      return cachedHashCode;
    var hash = calculateRandomHash();
    hashCodeMap.set(value, hash);
    return hash;
  }
  function symbolIsSharable(symbol) {
    return Symbol.keyFor(symbol) != VOID;
  }
  function getSymbolMap() {
    if (symbolMap === VOID) {
      symbolMap = new Map();
    }
    return symbolMap;
  }
  function getSymbolWeakMap() {
    if (symbolWeakMap === VOID) {
      symbolWeakMap = new WeakMap();
    }
    return symbolWeakMap;
  }
  var symbolMap;
  var symbolWeakMap;
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' && typeof obj2 === 'number') {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = 1 / obj1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp_1 === 1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function unboxIntrinsic(x) {
    var message = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      instance.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
    if ((errorInfo & 1) === 0) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp1_elvis_lhs = cause == null ? null : cause.toString();
          tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
        } else {
          tmp_0 = VOID;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if ((errorInfo & 2) === 0) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function THROW_IAE(msg) {
    throw IllegalArgumentException_init_$Create$_0(msg);
  }
  function get_ZERO() {
    _init_properties_longJs_kt__elc2w5();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_longJs_kt__elc2w5();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_longJs_kt__elc2w5();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_longJs_kt__elc2w5();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_longJs_kt__elc2w5();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_longJs_kt__elc2w5();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    var a48 = _this__u8e3s4.i1_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.i1_1 & 65535;
    var a16 = _this__u8e3s4.h1_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.h1_1 & 65535;
    var b48 = other.i1_1 >>> 16 | 0;
    var b32 = other.i1_1 & 65535;
    var b16 = other.h1_1 >>> 16 | 0;
    var b00 = other.h1_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return add(_this__u8e3s4, other.m1());
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.i1_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.i1_1 & 65535;
    var a16 = _this__u8e3s4.h1_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.h1_1 & 65535;
    var b48 = other.i1_1 >>> 16 | 0;
    var b32 = other.i1_1 & 65535;
    var b16 = other.h1_1 >>> 16 | 0;
    var b00 = other.h1_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (isZero(other)) {
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.l1(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.l1(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).l1(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).l1(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.l1(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_longJs_kt__elc2w5();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.h1_1 << numBits_0, _this__u8e3s4.i1_1 << numBits_0 | (_this__u8e3s4.h1_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.h1_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_longJs_kt__elc2w5();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.h1_1 >>> numBits_0 | 0 | _this__u8e3s4.i1_1 << (32 - numBits_0 | 0), _this__u8e3s4.i1_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.i1_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.i1_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.i1_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_longJs_kt__elc2w5();
    if (radix < 2 || 36 < radix) {
      throw Exception_init_$Create$_0('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.l1(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).o1();
        var tmp = toStringImpl(div, radix);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        return tmp + rem.toString(radix);
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.l1(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).o1();
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var digits = intval.toString(radix);
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.i1_1 === other.i1_1 && _this__u8e3s4.h1_1 === other.h1_1;
  }
  function hashCode_0(l) {
    _init_properties_longJs_kt__elc2w5();
    return l.h1_1 ^ l.i1_1;
  }
  function fromInt(value) {
    _init_properties_longJs_kt__elc2w5();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.i1_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.i1_1 === 0 && _this__u8e3s4.h1_1 === 0;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return (_this__u8e3s4.h1_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.m1();
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_longJs_kt__elc2w5();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp = value % twoPwr32 | 0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp$ret$1 = value / twoPwr32 | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.h1_1 >= 0 ? _this__u8e3s4.h1_1 : 4.294967296E9 + _this__u8e3s4.h1_1;
  }
  var properties_initialized_longJs_kt_4syf89;
  function _init_properties_longJs_kt__elc2w5() {
    if (!properties_initialized_longJs_kt_4syf89) {
      properties_initialized_longJs_kt_4syf89 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    var undef = VOID;
    var iid = kind === 'interface' ? generateInterfaceId() : VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
  }
  function generateInterfaceId() {
    if (globalInterfaceId === VOID) {
      globalInterfaceId = 0;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    globalInterfaceId = globalInterfaceId + 1 | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    return globalInterfaceId;
  }
  var globalInterfaceId;
  function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !equals(metadata.iid, VOID) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'class';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'object';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'interface';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
    initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function toByte(a) {
    // Inline function 'kotlin.js.unsafeCast' call
    return a << 24 >> 24;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.o1();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2147483647) {
      tmp = 2147483647;
    } else if (a < -2147483648) {
      tmp = -2147483648;
    } else {
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp = a | 0;
    }
    return tmp;
  }
  function toShort(a) {
    // Inline function 'kotlin.js.unsafeCast' call
    return a << 16 >> 16;
  }
  function numberToChar(a) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = numberToInt(a);
    var tmp$ret$0 = _UShort___init__impl__jigrne(toShort(this_0));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function isArrayish(o) {
    return isJsArray(o) || isView(o);
  }
  function isJsArray(obj) {
    // Inline function 'kotlin.js.unsafeCast' call
    return Array.isArray(obj);
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return isBitSet(mask, iface);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' || isInterface(value, CharSequence);
  }
  function isBooleanArray(a) {
    return isJsArray(a) && a.$type$ === 'BooleanArray';
  }
  function isByteArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int8Array;
  }
  function isShortArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int16Array;
  }
  function isCharArray(a) {
    var tmp;
    // Inline function 'kotlin.js.jsInstanceOf' call
    if (a instanceof Uint16Array) {
      tmp = a.$type$ === 'CharArray';
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isIntArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int32Array;
  }
  function isFloatArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float32Array;
  }
  function isLongArray(a) {
    return isJsArray(a) && a.$type$ === 'LongArray';
  }
  function isDoubleArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float64Array;
  }
  function calculateErrorInfo(proto) {
    var tmp0_safe_receiver = proto.constructor;
    var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
    var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp2_safe_receiver;
    }
    var result = 0;
    if (hasProp(proto, 'message'))
      result = result | 1;
    if (hasProp(proto, 'cause'))
      result = result | 2;
    if (!(result === 3)) {
      var parentProto = getPrototypeOf(proto);
      if (parentProto != Error.prototype) {
        result = result | calculateErrorInfo(parentProto);
      }
    }
    if (!(metadata == null)) {
      metadata.errorInfo = result;
    }
    return result;
  }
  function hasProp(proto, propName) {
    return proto.hasOwnProperty(propName);
  }
  function getPrototypeOf(obj) {
    return Object.getPrototypeOf(obj);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (!properties_initialized_void_kt_e4ret2) {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return fillFrom(_this__u8e3s4, new Int32Array(newSize));
  }
  function toTypedArray(_this__u8e3s4) {
    return [].slice.call(_this__u8e3s4);
  }
  function copyOf_0(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return fillFrom(_this__u8e3s4, new Int8Array(newSize));
  }
  function copyOf_1(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return arrayCopyResize(_this__u8e3s4, newSize, null);
  }
  function digitToIntImpl(_this__u8e3s4) {
    // Inline function 'kotlin.code' call
    var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
    var index = binarySearchRange(Digit_getInstance().r1_1, ch);
    var diff = ch - Digit_getInstance().r1_1[index] | 0;
    return diff < 10 ? diff : -1;
  }
  function binarySearchRange(array, needle) {
    var bottom = 0;
    var top = array.length - 1 | 0;
    var middle = -1;
    var value = 0;
    while (bottom <= top) {
      middle = (bottom + top | 0) / 2 | 0;
      value = array[middle];
      if (needle > value)
        bottom = middle + 1 | 0;
      else if (needle === value)
        return middle;
      else
        top = middle - 1 | 0;
    }
    return middle - (needle < value ? 1 : 0) | 0;
  }
  function Digit() {
    Digit_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.r1_1 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
  }
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance == null)
      new Digit();
    return Digit_instance;
  }
  function Comparator() {
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function takeHighestOneBit(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 === 0) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
    }
    return tmp;
  }
  function Unit() {
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    return Unit_instance;
  }
  function collectionToArray(collection) {
    return collectionToArrayCommonImpl(collection);
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  protoOf(AbstractMutableSet).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtSet) : false))
      return false;
    return Companion_instance_4.s1(this, other);
  };
  protoOf(AbstractMutableSet).hashCode = function () {
    return Companion_instance_4.t1(this);
  };
  function arrayOfUninitializedElements(capacity) {
    // Inline function 'kotlin.require' call
    if (!(capacity >= 0)) {
      var message = 'capacity must be non-negative.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return Array(capacity);
  }
  function resetRange(_this__u8e3s4, fromIndex, toIndex) {
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(null, fromIndex, toIndex);
  }
  function copyOfUninitializedElements(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return copyOf_1(_this__u8e3s4, newSize);
  }
  function HashSet_init_$Init$(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.u1_1 = map;
    return $this;
  }
  function HashSet_init_$Init$_0($this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$(), $this);
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$_0(objectCreate(protoOf(HashSet)));
  }
  function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    return $this;
  }
  function HashSet_init_$Init$_2(initialCapacity, $this) {
    HashSet_init_$Init$_1(initialCapacity, 1.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_2(initialCapacity, objectCreate(protoOf(HashSet)));
  }
  protoOf(HashSet).c = function (element) {
    return this.u1_1.v1(element, true) == null;
  };
  protoOf(HashSet).s = function (element) {
    return this.u1_1.w1(element);
  };
  protoOf(HashSet).k = function () {
    return this.u1_1.h() === 0;
  };
  protoOf(HashSet).e = function () {
    return this.u1_1.x1();
  };
  protoOf(HashSet).h = function () {
    return this.u1_1.h();
  };
  function HashSet() {
  }
  function computeHashSize($this, capacity) {
    return takeHighestOneBit(imul(coerceAtLeast(capacity, 1), 3));
  }
  function computeShift($this, hashSize) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return clz32(hashSize) + 1 | 0;
  }
  function checkForComodification($this) {
    if (!($this.i2_1.f2_1 === $this.k2_1))
      throw ConcurrentModificationException_init_$Create$_0('The backing map has been modified after this entry was obtained.');
  }
  function InternalHashMap_init_$Init$($this) {
    InternalHashMap_init_$Init$_0(8, $this);
    return $this;
  }
  function InternalHashMap_init_$Create$() {
    return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
  }
  function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
    InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_1, initialCapacity)), 2, 0);
    return $this;
  }
  function InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    InternalHashMap_init_$Init$_0(initialCapacity, $this);
    // Inline function 'kotlin.require' call
    if (!(loadFactor > 0)) {
      var message = 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return $this;
  }
  function InternalHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(InternalHashMap)));
  }
  function _get_capacity__a9k9f3($this) {
    return $this.y1_1.length;
  }
  function _get_hashSize__tftcho($this) {
    return $this.b2_1.length;
  }
  function registerModification($this) {
    $this.f2_1 = $this.f2_1 + 1 | 0;
  }
  function ensureExtraCapacity($this, n) {
    if (shouldCompact($this, n)) {
      compact($this, true);
    } else {
      ensureCapacity($this, $this.d2_1 + n | 0);
    }
  }
  function shouldCompact($this, extraCapacity) {
    var spareCapacity = _get_capacity__a9k9f3($this) - $this.d2_1 | 0;
    var gaps = $this.d2_1 - $this.h() | 0;
    return spareCapacity < extraCapacity && (gaps + spareCapacity | 0) >= extraCapacity && gaps >= (_get_capacity__a9k9f3($this) / 4 | 0);
  }
  function ensureCapacity($this, minCapacity) {
    if (minCapacity < 0)
      throw RuntimeException_init_$Create$_0('too many elements');
    if (minCapacity > _get_capacity__a9k9f3($this)) {
      var newSize = Companion_instance_3.m2(_get_capacity__a9k9f3($this), minCapacity);
      $this.y1_1 = copyOfUninitializedElements($this.y1_1, newSize);
      var tmp = $this;
      var tmp0_safe_receiver = $this.z1_1;
      tmp.z1_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
      $this.a2_1 = copyOf($this.a2_1, newSize);
      var newHashSize = computeHashSize(Companion_instance_1, newSize);
      if (newHashSize > _get_hashSize__tftcho($this)) {
        rehash($this, newHashSize);
      }
    }
  }
  function allocateValuesArray($this) {
    var curValuesArray = $this.z1_1;
    if (!(curValuesArray == null))
      return curValuesArray;
    var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
    $this.z1_1 = newValuesArray;
    return newValuesArray;
  }
  function hash($this, key) {
    return key == null ? 0 : imul(hashCode(key), -1640531527) >>> $this.e2_1 | 0;
  }
  function compact($this, updateHashArray) {
    var i = 0;
    var j = 0;
    var valuesArray = $this.z1_1;
    while (i < $this.d2_1) {
      var hash = $this.a2_1[i];
      if (hash >= 0) {
        $this.y1_1[j] = $this.y1_1[i];
        if (!(valuesArray == null)) {
          valuesArray[j] = valuesArray[i];
        }
        if (updateHashArray) {
          $this.a2_1[j] = hash;
          $this.b2_1[hash] = j + 1 | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    resetRange($this.y1_1, j, $this.d2_1);
    if (valuesArray == null)
      null;
    else {
      resetRange(valuesArray, j, $this.d2_1);
    }
    $this.d2_1 = j;
  }
  function rehash($this, newHashSize) {
    registerModification($this);
    if ($this.d2_1 > $this.g2_1) {
      compact($this, false);
    }
    $this.b2_1 = new Int32Array(newHashSize);
    $this.e2_1 = computeShift(Companion_instance_1, newHashSize);
    var i = 0;
    while (i < $this.d2_1) {
      var _unary__edvuaz = i;
      i = _unary__edvuaz + 1 | 0;
      if (!putRehash($this, _unary__edvuaz)) {
        throw IllegalStateException_init_$Create$_0('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
      }
    }
  }
  function putRehash($this, i) {
    var hash_0 = hash($this, $this.y1_1[i]);
    var probesLeft = $this.c2_1;
    while (true) {
      var index = $this.b2_1[hash_0];
      if (index === 0) {
        $this.b2_1[hash_0] = i + 1 | 0;
        $this.a2_1[i] = hash_0;
        return true;
      }
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return false;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findKey($this, key) {
    var hash_0 = hash($this, key);
    var probesLeft = $this.c2_1;
    while (true) {
      var index = $this.b2_1[hash_0];
      if (index === 0)
        return -1;
      if (index > 0 && equals($this.y1_1[index - 1 | 0], key))
        return index - 1 | 0;
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return -1;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function addKey($this, key) {
    $this.n2();
    retry: while (true) {
      var hash_0 = hash($this, key);
      var tentativeMaxProbeDistance = coerceAtMost(imul($this.c2_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
      var probeDistance = 0;
      while (true) {
        var index = $this.b2_1[hash_0];
        if (index <= 0) {
          if ($this.d2_1 >= _get_capacity__a9k9f3($this)) {
            ensureExtraCapacity($this, 1);
            continue retry;
          }
          var _unary__edvuaz = $this.d2_1;
          $this.d2_1 = _unary__edvuaz + 1 | 0;
          var putIndex = _unary__edvuaz;
          $this.y1_1[putIndex] = key;
          $this.a2_1[putIndex] = hash_0;
          $this.b2_1[hash_0] = putIndex + 1 | 0;
          $this.g2_1 = $this.g2_1 + 1 | 0;
          registerModification($this);
          if (probeDistance > $this.c2_1)
            $this.c2_1 = probeDistance;
          return putIndex;
        }
        if (equals($this.y1_1[index - 1 | 0], key)) {
          return -index | 0;
        }
        probeDistance = probeDistance + 1 | 0;
        if (probeDistance > tentativeMaxProbeDistance) {
          rehash($this, imul(_get_hashSize__tftcho($this), 2));
          continue retry;
        }
        var _unary__edvuaz_0 = hash_0;
        hash_0 = _unary__edvuaz_0 - 1 | 0;
        if (_unary__edvuaz_0 === 0)
          hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      }
    }
  }
  function contentEquals($this, other) {
    return $this.g2_1 === other.h() && $this.o2(other.w());
  }
  function Companion_1() {
    this.p2_1 = -1640531527;
    this.q2_1 = 8;
    this.r2_1 = 2;
    this.s2_1 = -1;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function Itr(map) {
    this.t2_1 = map;
    this.u2_1 = 0;
    this.v2_1 = -1;
    this.w2_1 = this.t2_1.f2_1;
    this.x2();
  }
  protoOf(Itr).x2 = function () {
    while (this.u2_1 < this.t2_1.d2_1 && this.t2_1.a2_1[this.u2_1] < 0) {
      this.u2_1 = this.u2_1 + 1 | 0;
    }
  };
  protoOf(Itr).f = function () {
    return this.u2_1 < this.t2_1.d2_1;
  };
  protoOf(Itr).y2 = function () {
    if (!(this.t2_1.f2_1 === this.w2_1))
      throw ConcurrentModificationException_init_$Create$();
  };
  function KeysItr(map) {
    Itr.call(this, map);
  }
  protoOf(KeysItr).g = function () {
    this.y2();
    if (this.u2_1 >= this.t2_1.d2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.u2_1;
    this.u2_1 = _unary__edvuaz + 1 | 0;
    tmp.v2_1 = _unary__edvuaz;
    var result = this.t2_1.y1_1[this.v2_1];
    this.x2();
    return result;
  };
  function EntriesItr(map) {
    Itr.call(this, map);
  }
  protoOf(EntriesItr).g = function () {
    this.y2();
    if (this.u2_1 >= this.t2_1.d2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.u2_1;
    this.u2_1 = _unary__edvuaz + 1 | 0;
    tmp.v2_1 = _unary__edvuaz;
    var result = new EntryRef(this.t2_1, this.v2_1);
    this.x2();
    return result;
  };
  protoOf(EntriesItr).h3 = function () {
    if (this.u2_1 >= this.t2_1.d2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.u2_1;
    this.u2_1 = _unary__edvuaz + 1 | 0;
    tmp.v2_1 = _unary__edvuaz;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t2_1.y1_1[this.v2_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = ensureNotNull(this.t2_1.z1_1)[this.v2_1];
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
    this.x2();
    return result;
  };
  protoOf(EntriesItr).i3 = function (sb) {
    if (this.u2_1 >= this.t2_1.d2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.u2_1;
    this.u2_1 = _unary__edvuaz + 1 | 0;
    tmp.v2_1 = _unary__edvuaz;
    var key = this.t2_1.y1_1[this.v2_1];
    if (equals(key, this.t2_1))
      sb.l3('(this Map)');
    else
      sb.k3(key);
    sb.m3(_Char___init__impl__6a9atx(61));
    var value = ensureNotNull(this.t2_1.z1_1)[this.v2_1];
    if (equals(value, this.t2_1))
      sb.l3('(this Map)');
    else
      sb.k3(value);
    this.x2();
  };
  function EntryRef(map, index) {
    this.i2_1 = map;
    this.j2_1 = index;
    this.k2_1 = this.i2_1.f2_1;
  }
  protoOf(EntryRef).u = function () {
    checkForComodification(this);
    return this.i2_1.y1_1[this.j2_1];
  };
  protoOf(EntryRef).v = function () {
    checkForComodification(this);
    return ensureNotNull(this.i2_1.z1_1)[this.j2_1];
  };
  protoOf(EntryRef).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.u(), this.u());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.v(), this.v());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EntryRef).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.v();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(EntryRef).toString = function () {
    return toString_0(this.u()) + '=' + toString_0(this.v());
  };
  function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
    this.y1_1 = keysArray;
    this.z1_1 = valuesArray;
    this.a2_1 = presenceArray;
    this.b2_1 = hashArray;
    this.c2_1 = maxProbeDistance;
    this.d2_1 = length;
    this.e2_1 = computeShift(Companion_instance_1, _get_hashSize__tftcho(this));
    this.f2_1 = 0;
    this.g2_1 = 0;
    this.h2_1 = false;
  }
  protoOf(InternalHashMap).h = function () {
    return this.g2_1;
  };
  protoOf(InternalHashMap).w1 = function (key) {
    return findKey(this, key) >= 0;
  };
  protoOf(InternalHashMap).v1 = function (key, value) {
    var index = addKey(this, key);
    var valuesArray = allocateValuesArray(this);
    if (index < 0) {
      var oldValue = valuesArray[(-index | 0) - 1 | 0];
      valuesArray[(-index | 0) - 1 | 0] = value;
      return oldValue;
    } else {
      valuesArray[index] = value;
      return null;
    }
  };
  protoOf(InternalHashMap).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      if (!(other == null) ? isInterface(other, KtMap) : false) {
        tmp_0 = contentEquals(this, other);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(InternalHashMap).hashCode = function () {
    var result = 0;
    var it = this.n3();
    while (it.f()) {
      result = result + it.h3() | 0;
    }
    return result;
  };
  protoOf(InternalHashMap).toString = function () {
    var sb = StringBuilder_init_$Create$(2 + imul(this.g2_1, 3) | 0);
    sb.l3('{');
    var i = 0;
    var it = this.n3();
    while (it.f()) {
      if (i > 0) {
        sb.l3(', ');
      }
      it.i3(sb);
      i = i + 1 | 0;
    }
    sb.l3('}');
    return sb.toString();
  };
  protoOf(InternalHashMap).n2 = function () {
    if (this.h2_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(InternalHashMap).o3 = function (entry) {
    var index = findKey(this, entry.u());
    if (index < 0)
      return false;
    return equals(ensureNotNull(this.z1_1)[index], entry.v());
  };
  protoOf(InternalHashMap).p3 = function (entry) {
    return this.o3(isInterface(entry, Entry) ? entry : THROW_CCE());
  };
  protoOf(InternalHashMap).x1 = function () {
    return new KeysItr(this);
  };
  protoOf(InternalHashMap).n3 = function () {
    return new EntriesItr(this);
  };
  function InternalMap() {
  }
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_0($this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(objectCreate(protoOf(LinkedHashSet)));
  }
  function LinkedHashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_0(initialCapacity, 1.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(initialCapacity) {
    return LinkedHashSet_init_$Init$_1(initialCapacity, objectCreate(protoOf(LinkedHashSet)));
  }
  function LinkedHashSet() {
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$() {
    var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_0(message) {
    var tmp = RuntimeException_init_$Init$_0(message, objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$_0);
    return tmp;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function Error_init_$Init$($this) {
    extendThrowable($this);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$() {
    var tmp = Error_init_$Init$(objectCreate(protoOf(Error_0)));
    captureStack(tmp, Error_init_$Create$);
    return tmp;
  }
  function Error_init_$Init$_0(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_0(message, cause) {
    var tmp = Error_init_$Init$_0(message, cause, objectCreate(protoOf(Error_0)));
    captureStack(tmp, Error_init_$Create$_0);
    return tmp;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function NumberFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$() {
    var tmp = NumberFormatException_init_$Init$(objectCreate(protoOf(NumberFormatException)));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$_0(message) {
    var tmp = NumberFormatException_init_$Init$_0(message, objectCreate(protoOf(NumberFormatException)));
    captureStack(tmp, NumberFormatException_init_$Create$_0);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  function ConcurrentModificationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$() {
    var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$);
    return tmp;
  }
  function ConcurrentModificationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$_0(message) {
    var tmp = ConcurrentModificationException_init_$Init$_0(message, objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$_0);
    return tmp;
  }
  function ConcurrentModificationException() {
    captureStack(this, ConcurrentModificationException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(objectCreate(protoOf(NoWhenBranchMatchedException)));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    // Inline function 'kotlin.js.unsafeCast' call
    var arr = dst;
    while (index < srcLen && index < dstLen) {
      var tmp = index;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      arr[tmp] = src[_unary__edvuaz];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    // Inline function 'kotlin.js.unsafeCast' call
    var result = source.slice(0, newSize);
    // Inline function 'kotlin.copyArrayType' call
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }
    var index = source.length;
    if (newSize > index) {
      // Inline function 'kotlin.js.asDynamic' call
      result.length = newSize;
      while (index < newSize) {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = defaultValue;
      }
    }
    return result;
  }
  function roundToInt(_this__u8e3s4) {
    var tmp;
    if (isNaN_0(_this__u8e3s4)) {
      throw IllegalArgumentException_init_$Create$_0('Cannot round NaN value.');
    } else if (_this__u8e3s4 > 2147483647) {
      tmp = 2147483647;
    } else if (_this__u8e3s4 < -2147483648) {
      tmp = -2147483648;
    } else {
      tmp = numberToInt(Math.round(_this__u8e3s4));
    }
    return tmp;
  }
  function KClass() {
  }
  function KClassImpl(jClass) {
    this.t3_1 = jClass;
  }
  protoOf(KClassImpl).u3 = function () {
    return this.t3_1;
  };
  protoOf(KClassImpl).equals = function (other) {
    var tmp;
    if (other instanceof NothingKClassImpl) {
      tmp = false;
    } else {
      if (other instanceof ErrorKClass) {
        tmp = false;
      } else {
        if (other instanceof KClassImpl) {
          tmp = equals(this.u3(), other.u3());
        } else {
          tmp = false;
        }
      }
    }
    return tmp;
  };
  protoOf(KClassImpl).hashCode = function () {
    var tmp0_safe_receiver = this.s3();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(KClassImpl).toString = function () {
    return 'class ' + this.s3();
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.w3_1 = 'Nothing';
  }
  protoOf(NothingKClassImpl).s3 = function () {
    return this.w3_1;
  };
  protoOf(NothingKClassImpl).u3 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  protoOf(NothingKClassImpl).equals = function (other) {
    return other === this;
  };
  protoOf(NothingKClassImpl).hashCode = function () {
    return 0;
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  protoOf(ErrorKClass).s3 = function () {
    var message = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(ErrorKClass).equals = function (other) {
    return other === this;
  };
  protoOf(ErrorKClass).hashCode = function () {
    return 0;
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.y3_1 = givenSimpleName;
    this.z3_1 = isInstanceFunction;
  }
  protoOf(PrimitiveKClassImpl).equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return protoOf(KClassImpl).equals.call(this, other) && this.y3_1 === other.y3_1;
  };
  protoOf(PrimitiveKClassImpl).s3 = function () {
    return this.y3_1;
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = jClass.$metadata$;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp.b4_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
  }
  protoOf(SimpleKClassImpl).s3 = function () {
    return this.b4_1;
  };
  function get_functionClasses() {
    _init_properties_primitives_kt__3fums4();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return !(it == null);
  }
  function PrimitiveClasses$numberClass$lambda(it) {
    return isNumber(it);
  }
  function PrimitiveClasses$booleanClass$lambda(it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  }
  function PrimitiveClasses$byteClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$shortClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$intClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$floatClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$doubleClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$arrayClass$lambda(it) {
    return !(it == null) ? isArray(it) : false;
  }
  function PrimitiveClasses$stringClass$lambda(it) {
    return !(it == null) ? typeof it === 'string' : false;
  }
  function PrimitiveClasses$throwableClass$lambda(it) {
    return it instanceof Error;
  }
  function PrimitiveClasses$booleanArrayClass$lambda(it) {
    return !(it == null) ? isBooleanArray(it) : false;
  }
  function PrimitiveClasses$charArrayClass$lambda(it) {
    return !(it == null) ? isCharArray(it) : false;
  }
  function PrimitiveClasses$byteArrayClass$lambda(it) {
    return !(it == null) ? isByteArray(it) : false;
  }
  function PrimitiveClasses$shortArrayClass$lambda(it) {
    return !(it == null) ? isShortArray(it) : false;
  }
  function PrimitiveClasses$intArrayClass$lambda(it) {
    return !(it == null) ? isIntArray(it) : false;
  }
  function PrimitiveClasses$longArrayClass$lambda(it) {
    return !(it == null) ? isLongArray(it) : false;
  }
  function PrimitiveClasses$floatArrayClass$lambda(it) {
    return !(it == null) ? isFloatArray(it) : false;
  }
  function PrimitiveClasses$doubleArrayClass$lambda(it) {
    return !(it == null) ? isDoubleArray(it) : false;
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = it.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_0 = Object;
    tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_2 = Number;
    tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_4 = Boolean;
    tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_6 = Number;
    tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_8 = Number;
    tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_10 = Number;
    tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_12 = Number;
    tmp_11.floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_14 = Number;
    tmp_13.doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_16 = Array;
    tmp_15.arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_18 = String;
    tmp_17.stringClass = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_20 = Error;
    tmp_19.throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_22 = Array;
    tmp_21.booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_24 = Uint16Array;
    tmp_23.charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_26 = Int8Array;
    tmp_25.byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_28 = Int16Array;
    tmp_27.shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_30 = Int32Array;
    tmp_29.intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_32 = Array;
    tmp_31.longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_34 = Float32Array;
    tmp_33.floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_36 = Float64Array;
    tmp_35.doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  protoOf(PrimitiveClasses).c4 = function () {
    return this.anyClass;
  };
  protoOf(PrimitiveClasses).d4 = function () {
    return this.numberClass;
  };
  protoOf(PrimitiveClasses).e4 = function () {
    return this.nothingClass;
  };
  protoOf(PrimitiveClasses).f4 = function () {
    return this.booleanClass;
  };
  protoOf(PrimitiveClasses).g4 = function () {
    return this.byteClass;
  };
  protoOf(PrimitiveClasses).h4 = function () {
    return this.shortClass;
  };
  protoOf(PrimitiveClasses).i4 = function () {
    return this.intClass;
  };
  protoOf(PrimitiveClasses).j4 = function () {
    return this.floatClass;
  };
  protoOf(PrimitiveClasses).k4 = function () {
    return this.doubleClass;
  };
  protoOf(PrimitiveClasses).l4 = function () {
    return this.arrayClass;
  };
  protoOf(PrimitiveClasses).m4 = function () {
    return this.stringClass;
  };
  protoOf(PrimitiveClasses).n4 = function () {
    return this.throwableClass;
  };
  protoOf(PrimitiveClasses).o4 = function () {
    return this.booleanArrayClass;
  };
  protoOf(PrimitiveClasses).p4 = function () {
    return this.charArrayClass;
  };
  protoOf(PrimitiveClasses).q4 = function () {
    return this.byteArrayClass;
  };
  protoOf(PrimitiveClasses).r4 = function () {
    return this.shortArrayClass;
  };
  protoOf(PrimitiveClasses).s4 = function () {
    return this.intArrayClass;
  };
  protoOf(PrimitiveClasses).t4 = function () {
    return this.longArrayClass;
  };
  protoOf(PrimitiveClasses).u4 = function () {
    return this.floatArrayClass;
  };
  protoOf(PrimitiveClasses).v4 = function () {
    return this.doubleArrayClass;
  };
  protoOf(PrimitiveClasses).functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_0 = Function;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      // Inline function 'kotlin.js.asDynamic' call
      get_functionClasses()[arity] = result;
      tmp = result;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function _init_properties_primitives_kt__3fums4() {
    if (!properties_initialized_primitives_kt_jle18u) {
      properties_initialized_primitives_kt_jle18u = true;
      // Inline function 'kotlin.arrayOfNulls' call
      functionClasses = Array(0);
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = getKClassM(jClass);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = getKClass1(jClass);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp;
    switch (jClasses.length) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        // Inline function 'kotlin.js.unsafeCast' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp = NothingKClassImpl_getInstance();
        break;
      default:
        // Inline function 'kotlin.js.unsafeCast' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp = new ErrorKClass();
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return PrimitiveClasses_getInstance().stringClass;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp;
    switch (typeof e) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().stringClass;
        break;
      case 'number':
        var tmp_0;
        // Inline function 'kotlin.js.jsBitwiseOr' call

        // Inline function 'kotlin.js.asDynamic' call

        if ((e | 0) === e) {
          tmp_0 = PrimitiveClasses_getInstance().intClass;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().doubleClass;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        // Inline function 'kotlin.js.asDynamic' call

        tmp = tmp_1.functionClass(e.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().anyClass;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                            } else {
                              var jsClass = constructor;
                              tmp_3 = getKClass1(jsClass);
                            }
                            tmp_2 = tmp_3;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  }
  function reset(_this__u8e3s4) {
    _this__u8e3s4.lastIndex = 0;
  }
  function CharacterCodingException_init_$Init$($this) {
    CharacterCodingException.call($this, null);
    return $this;
  }
  function CharacterCodingException_init_$Create$() {
    var tmp = CharacterCodingException_init_$Init$(objectCreate(protoOf(CharacterCodingException)));
    captureStack(tmp, CharacterCodingException_init_$Create$);
    return tmp;
  }
  function CharacterCodingException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, CharacterCodingException);
  }
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.j3_1 = content;
  }
  protoOf(StringBuilder).a = function () {
    // Inline function 'kotlin.js.asDynamic' call
    return this.j3_1.length;
  };
  protoOf(StringBuilder).b = function (index) {
    // Inline function 'kotlin.text.getOrElse' call
    var this_0 = this.j3_1;
    var tmp;
    if (0 <= index ? index <= (charSequenceLength(this_0) - 1 | 0) : false) {
      tmp = charSequenceGet(this_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', length: ' + this.a() + '}');
    }
    return tmp;
  };
  protoOf(StringBuilder).m3 = function (value) {
    this.j3_1 = this.j3_1 + toString(value);
    return this;
  };
  protoOf(StringBuilder).d = function (value) {
    this.j3_1 = this.j3_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).k3 = function (value) {
    this.j3_1 = this.j3_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).l3 = function (value) {
    var tmp = this;
    var tmp_0 = this.j3_1;
    tmp.j3_1 = tmp_0 + (value == null ? 'null' : value);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.j3_1;
  };
  function uppercaseChar(_this__u8e3s4) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var uppercase = toString(_this__u8e3s4).toUpperCase();
    return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$_0('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function toInt(_this__u8e3s4, radix) {
    var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4, radix);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function toInt_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = toIntOrNull_0(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function digitOf(char, radix) {
    // Inline function 'kotlin.let' call
    var it = Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
    return it >= radix ? -1 : it;
  }
  function Regex_init_$Init$(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$(pattern) {
    return Regex_init_$Init$(pattern, objectCreate(protoOf(Regex)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.w4_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this.x4_1 = new RegExp('[\\\\$]', 'g');
    this.y4_1 = new RegExp('\\$', 'g');
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Regex(pattern, options) {
    Companion_getInstance_2();
    this.z4_1 = pattern;
    this.a5_1 = toSet(options);
    this.b5_1 = new RegExp(pattern, toFlags(options, 'gu'));
    this.c5_1 = null;
    this.d5_1 = null;
  }
  protoOf(Regex).e5 = function (input) {
    reset(this.b5_1);
    var match = this.b5_1.exec(toString_1(input));
    return !(match == null) && match.index === 0 && this.b5_1.lastIndex === charSequenceLength(input);
  };
  protoOf(Regex).toString = function () {
    return this.b5_1.toString();
  };
  function toFlags(_this__u8e3s4, prepend) {
    return joinToString(_this__u8e3s4, '', prepend, VOID, VOID, VOID, toFlags$lambda);
  }
  function toFlags$lambda(it) {
    return it.h5_1;
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function compareTo_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    _init_properties_stringJs_kt__bg7zye();
    if (ignoreCase) {
      var n1 = _this__u8e3s4.length;
      var n2 = other.length;
      // Inline function 'kotlin.comparisons.minOf' call
      var min = Math.min(n1, n2);
      if (min === 0)
        return n1 - n2 | 0;
      var inductionVariable = 0;
      if (inductionVariable < min)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var thisChar = charSequenceGet(_this__u8e3s4, index);
          var otherChar = charSequenceGet(other, index);
          if (!(thisChar === otherChar)) {
            thisChar = uppercaseChar(thisChar);
            otherChar = uppercaseChar(otherChar);
            if (!(thisChar === otherChar)) {
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_0 = thisChar;
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$3 = toString(this_0).toLowerCase();
              thisChar = charSequenceGet(tmp$ret$3, 0);
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_1 = otherChar;
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$7 = toString(this_1).toLowerCase();
              otherChar = charSequenceGet(tmp$ret$7, 0);
              if (!(thisChar === otherChar)) {
                return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
              }
            }
          }
        }
         while (inductionVariable < min);
      return n1 - n2 | 0;
    } else {
      return compareTo(_this__u8e3s4, other);
    }
  }
  function encodeToByteArray(_this__u8e3s4) {
    _init_properties_stringJs_kt__bg7zye();
    return encodeUtf8(_this__u8e3s4, 0, _this__u8e3s4.length, false);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.i5_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).j5 = function (a, b) {
    return this.i5_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.j5(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).q1 = function () {
    return this.i5_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q1(), other.q1());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.q1());
  };
  function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
    _init_properties_stringJs_kt__bg7zye();
    return compareTo_0(a, b, true);
  }
  var properties_initialized_stringJs_kt_nta8o4;
  function _init_properties_stringJs_kt__bg7zye() {
    if (!properties_initialized_stringJs_kt_nta8o4) {
      properties_initialized_stringJs_kt_nta8o4 = true;
      var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
      STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_REPLACEMENT_BYTE_SEQUENCE() {
    _init_properties_utf8Encoding_kt__9thjs4();
    return REPLACEMENT_BYTE_SEQUENCE;
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function encodeUtf8(string, startIndex, endIndex, throwOnMalformed) {
    _init_properties_utf8Encoding_kt__9thjs4();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0 && endIndex <= string.length && startIndex <= endIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    var bytes = new Int8Array(imul(endIndex - startIndex | 0, 3));
    var byteIndex = 0;
    var charIndex = startIndex;
    while (charIndex < endIndex) {
      var _unary__edvuaz = charIndex;
      charIndex = _unary__edvuaz + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(string, _unary__edvuaz);
      var code = Char__toInt_impl_vasixd(this_0);
      if (code < 128) {
        var _unary__edvuaz_0 = byteIndex;
        byteIndex = _unary__edvuaz_0 + 1 | 0;
        bytes[_unary__edvuaz_0] = toByte(code);
      } else if (code < 2048) {
        var _unary__edvuaz_1 = byteIndex;
        byteIndex = _unary__edvuaz_1 + 1 | 0;
        bytes[_unary__edvuaz_1] = toByte(code >> 6 | 192);
        var _unary__edvuaz_2 = byteIndex;
        byteIndex = _unary__edvuaz_2 + 1 | 0;
        bytes[_unary__edvuaz_2] = toByte(code & 63 | 128);
      } else if (code < 55296 || code >= 57344) {
        var _unary__edvuaz_3 = byteIndex;
        byteIndex = _unary__edvuaz_3 + 1 | 0;
        bytes[_unary__edvuaz_3] = toByte(code >> 12 | 224);
        var _unary__edvuaz_4 = byteIndex;
        byteIndex = _unary__edvuaz_4 + 1 | 0;
        bytes[_unary__edvuaz_4] = toByte(code >> 6 & 63 | 128);
        var _unary__edvuaz_5 = byteIndex;
        byteIndex = _unary__edvuaz_5 + 1 | 0;
        bytes[_unary__edvuaz_5] = toByte(code & 63 | 128);
      } else {
        var codePoint = codePointFromSurrogate(string, code, charIndex, endIndex, throwOnMalformed);
        if (codePoint <= 0) {
          var _unary__edvuaz_6 = byteIndex;
          byteIndex = _unary__edvuaz_6 + 1 | 0;
          bytes[_unary__edvuaz_6] = get_REPLACEMENT_BYTE_SEQUENCE()[0];
          var _unary__edvuaz_7 = byteIndex;
          byteIndex = _unary__edvuaz_7 + 1 | 0;
          bytes[_unary__edvuaz_7] = get_REPLACEMENT_BYTE_SEQUENCE()[1];
          var _unary__edvuaz_8 = byteIndex;
          byteIndex = _unary__edvuaz_8 + 1 | 0;
          bytes[_unary__edvuaz_8] = get_REPLACEMENT_BYTE_SEQUENCE()[2];
        } else {
          var _unary__edvuaz_9 = byteIndex;
          byteIndex = _unary__edvuaz_9 + 1 | 0;
          bytes[_unary__edvuaz_9] = toByte(codePoint >> 18 | 240);
          var _unary__edvuaz_10 = byteIndex;
          byteIndex = _unary__edvuaz_10 + 1 | 0;
          bytes[_unary__edvuaz_10] = toByte(codePoint >> 12 & 63 | 128);
          var _unary__edvuaz_11 = byteIndex;
          byteIndex = _unary__edvuaz_11 + 1 | 0;
          bytes[_unary__edvuaz_11] = toByte(codePoint >> 6 & 63 | 128);
          var _unary__edvuaz_12 = byteIndex;
          byteIndex = _unary__edvuaz_12 + 1 | 0;
          bytes[_unary__edvuaz_12] = toByte(codePoint & 63 | 128);
          charIndex = charIndex + 1 | 0;
        }
      }
    }
    return bytes.length === byteIndex ? bytes : copyOf_0(bytes, byteIndex);
  }
  function codePointFromSurrogate(string, high, index, endIndex, throwOnMalformed) {
    _init_properties_utf8Encoding_kt__9thjs4();
    if (!(55296 <= high ? high <= 56319 : false) || index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(string, index);
    var low = Char__toInt_impl_vasixd(this_0);
    if (!(56320 <= low ? low <= 57343 : false)) {
      return malformed(0, index, throwOnMalformed);
    }
    return 65536 + ((high & 1023) << 10) | 0 | low & 1023;
  }
  function malformed(size, index, throwOnMalformed) {
    _init_properties_utf8Encoding_kt__9thjs4();
    if (throwOnMalformed)
      throw new CharacterCodingException('Malformed sequence starting at ' + (index - 1 | 0));
    return -size | 0;
  }
  var properties_initialized_utf8Encoding_kt_eee1vq;
  function _init_properties_utf8Encoding_kt__9thjs4() {
    if (!properties_initialized_utf8Encoding_kt_eee1vq) {
      properties_initialized_utf8Encoding_kt_eee1vq = true;
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT_BYTE_SEQUENCE = new Int8Array([-17, -65, -67]);
    }
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_0(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).s = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = this.e();
      while (_iterator__ex2g4s.f()) {
        var element_0 = _iterator__ex2g4s.g();
        if (equals(element_0, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).t = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        if (!this.s(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).k = function () {
    return this.h() === 0;
  };
  protoOf(AbstractCollection).toString = function () {
    return joinToString(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return collectionToArray(this);
  };
  function Companion_3() {
    this.l2_1 = 2147483639;
  }
  protoOf(Companion_3).m2 = function (oldCapacity, minCapacity) {
    var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
    if ((newCapacity - minCapacity | 0) < 0)
      newCapacity = minCapacity;
    if ((newCapacity - 2147483639 | 0) > 0)
      newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
    return newCapacity;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).t1 = function (c) {
    var hashCode_0 = 0;
    var _iterator__ex2g4s = c.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      var tmp = hashCode_0;
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      hashCode_0 = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_4).s1 = function (c, other) {
    if (!(c.h() === other.h()))
      return false;
    return c.t(other);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function collectionToArrayCommonImpl(collection) {
    if (collection.k()) {
      // Inline function 'kotlin.emptyArray' call
      return [];
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = collection.h();
    var destination = Array(size);
    var iterator = collection.e();
    var index = 0;
    while (iterator.f()) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      destination[_unary__edvuaz] = iterator.g();
    }
    return destination;
  }
  function EmptyIterator() {
  }
  protoOf(EmptyIterator).f = function () {
    return false;
  };
  protoOf(EmptyIterator).g = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    return EmptyIterator_instance;
  }
  function IntIterator() {
  }
  protoOf(IntIterator).g = function () {
    return this.k5();
  };
  function emptySet() {
    return EmptySet_getInstance();
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$_0(mapCapacity(elements.length)));
  }
  function EmptySet() {
    EmptySet_instance = this;
    this.l5_1 = new Long(1993859828, 793161749);
  }
  protoOf(EmptySet).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, KtSet) : false) {
      tmp = other.k();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptySet).hashCode = function () {
    return 0;
  };
  protoOf(EmptySet).toString = function () {
    return '[]';
  };
  protoOf(EmptySet).h = function () {
    return 0;
  };
  protoOf(EmptySet).k = function () {
    return true;
  };
  protoOf(EmptySet).m5 = function (elements) {
    return elements.k();
  };
  protoOf(EmptySet).t = function (elements) {
    return this.m5(elements);
  };
  protoOf(EmptySet).e = function () {
    return EmptyIterator_instance;
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function optimizeReadOnlySet(_this__u8e3s4) {
    switch (_this__u8e3s4.h()) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__u8e3s4.e().g());
      default:
        return _this__u8e3s4;
    }
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b | 0;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.j_1 = new IntRange(1, 0);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_5();
    IntProgression.call(this, start, endInclusive, 1);
  }
  protoOf(IntRange).m = function () {
    return this.n_1;
  };
  protoOf(IntRange).l = function () {
    return this.o_1;
  };
  protoOf(IntRange).k = function () {
    return this.n_1 > this.o_1;
  };
  protoOf(IntRange).equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = this.k() && other.k() || (this.n_1 === other.n_1 && this.o_1 === other.o_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntRange).hashCode = function () {
    return this.k() ? -1 : imul(31, this.n_1) + this.o_1 | 0;
  };
  protoOf(IntRange).toString = function () {
    return '' + this.n_1 + '..' + this.o_1;
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.q5_1 = step;
    this.r5_1 = last;
    this.s5_1 = this.q5_1 > 0 ? first <= last : first >= last;
    this.t5_1 = this.s5_1 ? first : this.r5_1;
  }
  protoOf(IntProgressionIterator).f = function () {
    return this.s5_1;
  };
  protoOf(IntProgressionIterator).k5 = function () {
    var value = this.t5_1;
    if (value === this.r5_1) {
      if (!this.s5_1)
        throw NoSuchElementException_init_$Create$();
      this.s5_1 = false;
    } else {
      this.t5_1 = this.t5_1 + this.q5_1 | 0;
    }
    return value;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).q = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function IntProgression(start, endInclusive, step) {
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === -2147483648)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.n_1 = start;
    this.o_1 = getProgressionLastElement(start, endInclusive, step);
    this.p_1 = step;
  }
  protoOf(IntProgression).e = function () {
    return new IntProgressionIterator(this.n_1, this.o_1, this.p_1);
  };
  protoOf(IntProgression).k = function () {
    return this.p_1 > 0 ? this.n_1 > this.o_1 : this.n_1 < this.o_1;
  };
  protoOf(IntProgression).equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = this.k() && other.k() || (this.n_1 === other.n_1 && this.o_1 === other.o_1 && this.p_1 === other.p_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntProgression).hashCode = function () {
    return this.k() ? -1 : imul(31, imul(31, this.n_1) + this.o_1 | 0) + this.p_1 | 0;
  };
  protoOf(IntProgression).toString = function () {
    return this.p_1 > 0 ? '' + this.n_1 + '..' + this.o_1 + ' step ' + this.p_1 : '' + this.n_1 + ' downTo ' + this.o_1 + ' step ' + (-this.p_1 | 0);
  };
  function ClosedRange() {
  }
  function ClosedFloatingPointRange() {
  }
  function checkStepIsPositive(isPositive, step) {
    if (!isPositive)
      throw IllegalArgumentException_init_$Create$_0('Step must be positive, was: ' + toString_1(step) + '.');
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.d(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.d(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.m3(element.u5_1);
        else {
          _this__u8e3s4.d(toString_1(element));
        }
      }
    }
  }
  function toIntOrNull(_this__u8e3s4, radix) {
    checkRadix(radix);
    var length = _this__u8e3s4.length;
    if (length === 0)
      return null;
    var start;
    var isNegative;
    var limit;
    var firstChar = charSequenceGet(_this__u8e3s4, 0);
    if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar === _Char___init__impl__6a9atx(45)) {
        isNegative = true;
        limit = -2147483648;
      } else if (firstChar === _Char___init__impl__6a9atx(43)) {
        isNegative = false;
        limit = -2147483647;
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = -2147483647;
    }
    var limitForMaxRadix = -59652323;
    var limitBeforeMul = limitForMaxRadix;
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this__u8e3s4, i), radix);
        if (digit < 0)
          return null;
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = limit / radix | 0;
            if (result < limitBeforeMul) {
              return null;
            }
          } else {
            return null;
          }
        }
        result = imul(result, radix);
        if (result < (limit + digit | 0))
          return null;
        result = result - digit | 0;
      }
       while (inductionVariable < length);
    return isNegative ? result : -result | 0;
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$_0("Invalid number format: '" + input + "'");
  }
  function toIntOrNull_0(_this__u8e3s4) {
    return toIntOrNull(_this__u8e3s4, 10);
  }
  function substring(_this__u8e3s4, range) {
    var tmp1 = range.m();
    // Inline function 'kotlin.text.substring' call
    var endIndex = range.l() + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(tmp1, endIndex);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function QRCode$Companion$EMPTY_FN$lambda(_this__u8e3s4, _unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    return Unit_instance;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    tmp.v5_1 = QRCode$Companion$EMPTY_FN$lambda;
    this.DEFAULT_SQUARE_SIZE = 25;
    this.DEFAULT_QRCODE_SIZE = 0;
    this.DEFAULT_X_OFFSET = 0;
    this.DEFAULT_Y_OFFSET = 0;
  }
  protoOf(Companion_7).w5 = function () {
    return this.v5_1;
  };
  protoOf(Companion_7).x5 = function () {
    return this.DEFAULT_SQUARE_SIZE;
  };
  protoOf(Companion_7).y5 = function () {
    return this.DEFAULT_QRCODE_SIZE;
  };
  protoOf(Companion_7).z5 = function () {
    return this.DEFAULT_X_OFFSET;
  };
  protoOf(Companion_7).a6 = function () {
    return this.DEFAULT_Y_OFFSET;
  };
  protoOf(Companion_7).ofSquares = function () {
    return new QRCodeBuilder(QRCodeShapesEnum_SQUARE_getInstance());
  };
  protoOf(Companion_7).ofCircles = function () {
    return new QRCodeBuilder(QRCodeShapesEnum_CIRCLE_getInstance());
  };
  protoOf(Companion_7).ofRoundedSquares = function () {
    return new QRCodeBuilder(QRCodeShapesEnum_ROUNDED_SQUARE_getInstance());
  };
  protoOf(Companion_7).ofCustomShape = function (customShapeFunction) {
    return new QRCodeBuilder(QRCodeShapesEnum_CUSTOM_getInstance(), customShapeFunction);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function draw($this, xOffset, yOffset, rawData, canvas) {
    var tmp = $this.squareSize;
    return $this.qrCodeProcessor.renderShaded(tmp, rawData, canvas, QRCode$draw$lambda($this, xOffset, yOffset, canvas));
  }
  function QRCode$draw$lambda(this$0, $xOffset, $yOffset, $canvas) {
    return function (x, y, currentSquare, _unused_var__etf5q3) {
      var tmp0_elvis_lhs = currentSquare.parent;
      var actualSquare = tmp0_elvis_lhs == null ? currentSquare : tmp0_elvis_lhs;
      var tmp;
      if (!actualSquare.rendered) {
        switch (currentSquare.squareInfo.type.y_1) {
          case 0:
          case 1:
            this$0.shapeFn.renderControlSquare($xOffset, $yOffset, this$0.colorFn, actualSquare, $canvas, this$0);
            break;
          default:
            this$0.shapeFn.renderSquare($xOffset + x | 0, $yOffset + y | 0, this$0.colorFn, currentSquare, $canvas, this$0);
            break;
        }
        actualSquare.rendered = true;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function QRCode(data, squareSize, canvasSize, xOffset, yOffset, colorFn, shapeFn, graphicsFactory, errorCorrectionLevel, informationDensity, maskPattern, doBefore, doAfter) {
    Companion_getInstance_7();
    squareSize = squareSize === VOID ? 25 : squareSize;
    canvasSize = canvasSize === VOID ? 0 : canvasSize;
    xOffset = xOffset === VOID ? 0 : xOffset;
    yOffset = yOffset === VOID ? 0 : yOffset;
    colorFn = colorFn === VOID ? new DefaultColorFunction() : colorFn;
    shapeFn = shapeFn === VOID ? new DefaultShapeFunction(squareSize, 0) : shapeFn;
    graphicsFactory = graphicsFactory === VOID ? new QRCodeGraphicsFactory() : graphicsFactory;
    errorCorrectionLevel = errorCorrectionLevel === VOID ? ErrorCorrectionLevel_LOW_getInstance() : errorCorrectionLevel;
    informationDensity = informationDensity === VOID ? Companion_instance_9.infoDensityForDataAndECL(data, errorCorrectionLevel) : informationDensity;
    maskPattern = maskPattern === VOID ? MaskPattern_PATTERN000_getInstance() : maskPattern;
    doBefore = doBefore === VOID ? Companion_getInstance_7().v5_1 : doBefore;
    doAfter = doAfter === VOID ? Companion_getInstance_7().v5_1 : doAfter;
    this.data = data;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.colorFn = colorFn;
    this.shapeFn = shapeFn;
    this.graphicsFactory = graphicsFactory;
    this.errorCorrectionLevel = errorCorrectionLevel;
    this.informationDensity = informationDensity;
    this.maskPattern = maskPattern;
    this.b6_1 = doBefore;
    this.c6_1 = doAfter;
    this.squareSize = squareSize;
    this.qrCodeProcessor = new QRCodeProcessor(this.data, this.errorCorrectionLevel, VOID, this.graphicsFactory);
    this.rawData = this.qrCodeProcessor.encode(this.informationDensity, this.maskPattern);
    this.canvasSize = canvasSize > 0 ? canvasSize : this.qrCodeProcessor.computeImageSizeFromRawData(squareSize, this.rawData);
    this.graphics = this.graphicsFactory.newGraphicsSquare(this.canvasSize);
  }
  protoOf(QRCode).d6 = function () {
    return this.data;
  };
  protoOf(QRCode).e6 = function () {
    return this.xOffset;
  };
  protoOf(QRCode).f6 = function () {
    return this.yOffset;
  };
  protoOf(QRCode).g6 = function () {
    return this.colorFn;
  };
  protoOf(QRCode).h6 = function () {
    return this.shapeFn;
  };
  protoOf(QRCode).i6 = function (_set____db54di) {
    this.graphicsFactory = _set____db54di;
  };
  protoOf(QRCode).j6 = function () {
    return this.graphicsFactory;
  };
  protoOf(QRCode).k6 = function () {
    return this.errorCorrectionLevel;
  };
  protoOf(QRCode).l6 = function () {
    return this.informationDensity;
  };
  protoOf(QRCode).m6 = function () {
    return this.maskPattern;
  };
  protoOf(QRCode).n6 = function () {
    return this.squareSize;
  };
  protoOf(QRCode).o6 = function () {
    return this.qrCodeProcessor;
  };
  protoOf(QRCode).p6 = function () {
    return this.informationDensity;
  };
  protoOf(QRCode).q6 = function () {
    return this.rawData;
  };
  protoOf(QRCode).r6 = function () {
    return this.canvasSize;
  };
  protoOf(QRCode).s6 = function () {
    return this.canvasSize;
  };
  protoOf(QRCode).t6 = function () {
    return this.graphics;
  };
  protoOf(QRCode).resize = function (size) {
    this.canvasSize = size;
    this.graphics = this.graphicsFactory.newGraphicsSquare(this.canvasSize);
    return this;
  };
  protoOf(QRCode).fitIntoArea = function (width, height) {
    // Inline function 'kotlin.math.min' call
    var reference = Math.min(width, height);
    var tmp = this;
    // Inline function 'kotlin.math.floor' call
    var x = reference / this.rawData.length;
    var tmp$ret$1 = Math.floor(x);
    tmp.squareSize = numberToInt(tmp$ret$1);
    this.shapeFn.resize(this.squareSize);
    this.canvasSize = reference;
    this.graphics = this.graphicsFactory.newGraphicsSquare(this.canvasSize);
    return this;
  };
  protoOf(QRCode).u6 = function (qrCodeGraphics, xOffset, yOffset) {
    this.colorFn.beforeRender(this, qrCodeGraphics);
    this.shapeFn.beforeRender(this, qrCodeGraphics);
    this.graphics.fill(this.colorFn.bg(0, 0, this, this.graphics));
    this.b6_1(this, qrCodeGraphics, xOffset, yOffset);
    // Inline function 'kotlin.also' call
    var this_0 = draw(this, xOffset, yOffset, this.rawData, qrCodeGraphics);
    this.c6_1(this, this_0, xOffset, yOffset);
    return this_0;
  };
  protoOf(QRCode).render = function (qrCodeGraphics, xOffset, yOffset, $super) {
    qrCodeGraphics = qrCodeGraphics === VOID ? this.graphics : qrCodeGraphics;
    xOffset = xOffset === VOID ? this.xOffset : xOffset;
    yOffset = yOffset === VOID ? this.yOffset : yOffset;
    return $super === VOID ? this.u6(qrCodeGraphics, xOffset, yOffset) : $super.u6.call(this, qrCodeGraphics, xOffset, yOffset);
  };
  protoOf(QRCode).v6 = function (qrCodeGraphics, xOffset, yOffset, format) {
    return this.render(qrCodeGraphics, xOffset, yOffset).getBytesForFormat(format);
  };
  protoOf(QRCode).renderToBytes = function (qrCodeGraphics, xOffset, yOffset, format, $super) {
    qrCodeGraphics = qrCodeGraphics === VOID ? this.graphics : qrCodeGraphics;
    xOffset = xOffset === VOID ? this.xOffset : xOffset;
    yOffset = yOffset === VOID ? this.yOffset : yOffset;
    format = format === VOID ? 'PNG' : format;
    return $super === VOID ? this.v6(qrCodeGraphics, xOffset, yOffset, format) : $super.v6.call(this, qrCodeGraphics, xOffset, yOffset, format);
  };
  protoOf(QRCode).reset = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.rawData;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable_0 = 0;
      var last_0 = element.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = element[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        element_0.rendered = false;
        var tmp0_safe_receiver = element_0.parent;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.rendered = false;
        }
      }
    }
    this.graphics.reset();
  };
  protoOf(QRCode).toString = function () {
    return 'QRCode(data=' + this.data + ', squareSize=' + this.squareSize + ', canvasSize=' + this.canvasSize + ', xOffset=' + this.xOffset + ', yOffset=' + this.yOffset + (', errorCorrectionLevel=' + this.errorCorrectionLevel.toString() + ', informationDensity=' + this.informationDensity) + (', maskPattern=' + this.maskPattern.toString() + ')');
  };
  function innerSpace($this) {
    var tmp;
    switch ($this.w6_1.y_1) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = Companion_instance_10.defaultInnerSpace($this.z6_1);
        break;
      case 2:
        tmp = Companion_instance_11.defaultInnerSpace($this.z6_1);
        break;
      case 3:
        tmp = 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = tmp;
    var tmp_0;
    if (this_0 < $this.z6_1) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  function _get_beforeFn__5052ik($this) {
    return QRCodeBuilder$_get_beforeFn_$lambda_n0dxjk($this);
  }
  function _get_afterFn__jaczeb($this) {
    return QRCodeBuilder$_get_afterFn_$lambda_eq0wxh($this);
  }
  function _get_colorFunction__6g154a($this) {
    var tmp;
    if ($this.b7_1 == null) {
      var tmp1_elvis_lhs = $this.y6_1;
      tmp = tmp1_elvis_lhs == null ? new DefaultColorFunction($this.a7_1, $this.d7_1) : tmp1_elvis_lhs;
    } else {
      var tmp2_elvis_lhs = $this.y6_1;
      tmp = tmp2_elvis_lhs == null ? new LinearGradientColorFunction($this.a7_1, ensureNotNull($this.b7_1), $this.d7_1) : tmp2_elvis_lhs;
    }
    return tmp;
  }
  function QRCodeBuilder$withLogo$lambda($width, $height) {
    return function (_this__u8e3s4, _unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var logoX = (_this__u8e3s4.canvasSize - $width | 0) / 2 | 0;
      var logoY = (_this__u8e3s4.canvasSize - $height | 0) / 2 | 0;
      // Inline function 'kotlin.collections.forEach' call
      var indexedObject = _this__u8e3s4.rawData;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = element.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = element[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var cellX = element_0.absoluteX(_this__u8e3s4.squareSize);
          var cellY = element_0.absoluteY(_this__u8e3s4.squareSize);
          element_0.rendered = !QRMath_getInstance().u7(logoX, logoY, $width, $height, cellX, cellY, _this__u8e3s4.squareSize, _this__u8e3s4.squareSize);
        }
      }
      return Unit_instance;
    };
  }
  function QRCodeBuilder$withLogo$lambda_0($width, $height, $logo) {
    return function (_this__u8e3s4, canvas, xOffset, yOffset) {
      var logoX = xOffset + ((_this__u8e3s4.canvasSize - $width | 0) / 2 | 0) | 0;
      var logoY = yOffset + ((_this__u8e3s4.canvasSize - $height | 0) / 2 | 0) | 0;
      canvas.drawImageFromBytes($logo, logoX, logoY);
      return Unit_instance;
    };
  }
  function QRCodeBuilder$withAfterRenderAction$lambda($action) {
    return function (_this__u8e3s4, it, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $action(_this__u8e3s4, it);
      return Unit_instance;
    };
  }
  function QRCodeBuilder$withBeforeRenderAction$lambda($action) {
    return function (_this__u8e3s4, it, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $action(_this__u8e3s4, it);
      return Unit_instance;
    };
  }
  function QRCodeBuilder$_get_beforeFn_$lambda_n0dxjk(this$0) {
    return function (_this__u8e3s4, canvas, xOffset, yOffset) {
      this$0.h7_1(_this__u8e3s4, canvas, xOffset, yOffset);
      this$0.j7_1(_this__u8e3s4, canvas, xOffset, yOffset);
      return Unit_instance;
    };
  }
  function QRCodeBuilder$_get_afterFn_$lambda_eq0wxh(this$0) {
    return function (_this__u8e3s4, canvas, xOffset, yOffset) {
      this$0.g7_1(_this__u8e3s4, canvas, xOffset, yOffset);
      this$0.i7_1(_this__u8e3s4, canvas, xOffset, yOffset);
      return Unit_instance;
    };
  }
  function QRCodeBuilder(shape, customShapeFunction) {
    customShapeFunction = customShapeFunction === VOID ? null : customShapeFunction;
    this.w6_1 = shape;
    this.x6_1 = customShapeFunction;
    this.y6_1 = null;
    this.z6_1 = 25;
    this.a7_1 = -16777216;
    this.b7_1 = null;
    this.c7_1 = true;
    this.d7_1 = 0;
    this.e7_1 = innerSpace(this);
    this.f7_1 = Companion_instance_11.defaultRadius(this.z6_1);
    this.g7_1 = Companion_getInstance_7().v5_1;
    this.h7_1 = Companion_getInstance_7().v5_1;
    this.i7_1 = Companion_getInstance_7().v5_1;
    this.j7_1 = Companion_getInstance_7().v5_1;
    this.k7_1 = new QRCodeGraphicsFactory();
    this.l7_1 = ErrorCorrectionLevel_LOW_getInstance();
    this.m7_1 = 0;
    this.n7_1 = MaskPattern_PATTERN000_getInstance();
    this.o7_1 = 0;
    this.p7_1 = 0;
    this.q7_1 = 0;
    this.r7_1 = 0;
  }
  protoOf(QRCodeBuilder).withShape = function (shape) {
    this.w6_1 = shape;
    return this.withInnerSpacing(innerSpace(this));
  };
  protoOf(QRCodeBuilder).withSize = function (size) {
    this.z6_1 = coerceAtLeast(size, 1);
    return this.withInnerSpacing(innerSpace(this));
  };
  protoOf(QRCodeBuilder).withColor = function (color) {
    this.a7_1 = color;
    return this;
  };
  protoOf(QRCodeBuilder).withBackgroundColor = function (bgColor) {
    this.d7_1 = bgColor;
    return this;
  };
  protoOf(QRCodeBuilder).v7 = function (startColor, endColor, vertical) {
    this.a7_1 = startColor;
    this.b7_1 = endColor;
    this.c7_1 = vertical;
    return this;
  };
  protoOf(QRCodeBuilder).withGradientColor = function (startColor, endColor, vertical, $super) {
    vertical = vertical === VOID ? true : vertical;
    return $super === VOID ? this.v7(startColor, endColor, vertical) : $super.v7.call(this, startColor, endColor, vertical);
  };
  protoOf(QRCodeBuilder).withRadius = function (radius) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    if (radius >= 0) {
      tmp_0 = radius;
    } else {
      tmp_0 = null;
    }
    var tmp0_elvis_lhs = tmp_0;
    tmp.f7_1 = tmp0_elvis_lhs == null ? Companion_instance_11.defaultRadius(this.z6_1) : tmp0_elvis_lhs;
    return this;
  };
  protoOf(QRCodeBuilder).w7 = function (innerSpacing) {
    var tmp = this;
    var tmp_0;
    if (innerSpacing == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      if (innerSpacing >= 0) {
        tmp_1 = innerSpacing;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.e7_1 = tmp1_elvis_lhs == null ? innerSpace(this) : tmp1_elvis_lhs;
    return this;
  };
  protoOf(QRCodeBuilder).withInnerSpacing = function (innerSpacing, $super) {
    innerSpacing = innerSpacing === VOID ? null : innerSpacing;
    return $super === VOID ? this.w7(innerSpacing) : $super.w7.call(this, innerSpacing);
  };
  protoOf(QRCodeBuilder).x7 = function (logo, width, height, clearLogoArea) {
    if (!(logo == null)) {
      if (clearLogoArea) {
        var tmp = this;
        tmp.h7_1 = QRCodeBuilder$withLogo$lambda(width, height);
      } else {
        this.h7_1 = Companion_getInstance_7().v5_1;
      }
      var tmp_0 = this;
      tmp_0.g7_1 = QRCodeBuilder$withLogo$lambda_0(width, height, logo);
    }
    return this;
  };
  protoOf(QRCodeBuilder).withLogo = function (logo, width, height, clearLogoArea, $super) {
    clearLogoArea = clearLogoArea === VOID ? true : clearLogoArea;
    return $super === VOID ? this.x7(logo, width, height, clearLogoArea) : $super.x7.call(this, logo, width, height, clearLogoArea);
  };
  protoOf(QRCodeBuilder).withAfterRenderAction = function (action) {
    var tmp = this;
    tmp.i7_1 = QRCodeBuilder$withAfterRenderAction$lambda(action);
    return this;
  };
  protoOf(QRCodeBuilder).withBeforeRenderAction = function (action) {
    var tmp = this;
    tmp.j7_1 = QRCodeBuilder$withBeforeRenderAction$lambda(action);
    return this;
  };
  protoOf(QRCodeBuilder).withGraphicsFactory = function (factory) {
    this.k7_1 = factory;
    return this;
  };
  protoOf(QRCodeBuilder).withCustomColorFunction = function (colorFn) {
    this.y6_1 = colorFn;
    return this;
  };
  protoOf(QRCodeBuilder).withCustomShapeFunction = function (shapeFn) {
    this.x6_1 = shapeFn;
    return this;
  };
  protoOf(QRCodeBuilder).withErrorCorrectionLevel = function (ecl) {
    this.l7_1 = ecl;
    return this;
  };
  protoOf(QRCodeBuilder).withInformationDensity = function (informationDensity) {
    this.m7_1 = coerceIn(informationDensity, numberRangeToNumber(0, 40));
    return this;
  };
  protoOf(QRCodeBuilder).withMaskPattern = function (maskPattern) {
    this.n7_1 = maskPattern;
    return this;
  };
  protoOf(QRCodeBuilder).withCanvasSize = function (size) {
    this.o7_1 = size;
    return this;
  };
  protoOf(QRCodeBuilder).withXOffset = function (xOffset) {
    this.p7_1 = xOffset;
    return this;
  };
  protoOf(QRCodeBuilder).withYOffset = function (yOffset) {
    this.q7_1 = yOffset;
    return this;
  };
  protoOf(QRCodeBuilder).withMargin = function (margin) {
    this.r7_1 = margin;
    return this;
  };
  protoOf(QRCodeBuilder).build = function (data) {
    var tmp = this.z6_1;
    var tmp_0 = this.o7_1;
    var tmp_1 = this.p7_1 + this.r7_1 | 0;
    var tmp_2 = this.q7_1 + this.r7_1 | 0;
    var tmp_3 = _get_colorFunction__6g154a(this);
    var tmp0_elvis_lhs = this.x6_1;
    var tmp_4;
    if (tmp0_elvis_lhs == null) {
      var tmp_5;
      switch (this.w6_1.y_1) {
        case 0:
        case 3:
          tmp_5 = new DefaultShapeFunction(this.z6_1, this.e7_1);
          break;
        case 1:
          tmp_5 = new CircleShapeFunction(this.z6_1, this.e7_1);
          break;
        case 2:
          tmp_5 = new RoundSquaresShapeFunction(this.z6_1, this.f7_1, this.e7_1);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp_4 = tmp_5;
    } else {
      tmp_4 = tmp0_elvis_lhs;
    }
    var tmp_6 = tmp_4;
    var tmp_7 = this.k7_1;
    var tmp_8 = this.l7_1;
    var tmp2_subject = this.m7_1;
    // Inline function 'kotlin.apply' call
    var this_0 = new QRCode(data, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_6, tmp_7, tmp_8, tmp2_subject === 0 ? Companion_instance_9.infoDensityForDataAndECL(data, this.l7_1) : this.m7_1, this.n7_1, _get_beforeFn__5052ik(this), _get_afterFn__jaczeb(this));
    if (this.r7_1 > 0) {
      this_0.resize(this_0.canvasSize + imul(this.r7_1, 2) | 0);
    }
    return this_0;
  };
  var QRCodeShapesEnum_SQUARE_instance;
  var QRCodeShapesEnum_CIRCLE_instance;
  var QRCodeShapesEnum_ROUNDED_SQUARE_instance;
  var QRCodeShapesEnum_CUSTOM_instance;
  var QRCodeShapesEnum_entriesInitialized;
  function QRCodeShapesEnum_initEntries() {
    if (QRCodeShapesEnum_entriesInitialized)
      return Unit_instance;
    QRCodeShapesEnum_entriesInitialized = true;
    QRCodeShapesEnum_SQUARE_instance = new QRCodeShapesEnum('SQUARE', 0);
    QRCodeShapesEnum_CIRCLE_instance = new QRCodeShapesEnum('CIRCLE', 1);
    QRCodeShapesEnum_ROUNDED_SQUARE_instance = new QRCodeShapesEnum('ROUNDED_SQUARE', 2);
    QRCodeShapesEnum_CUSTOM_instance = new QRCodeShapesEnum('CUSTOM', 3);
  }
  function QRCodeShapesEnum(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function QRCodeShapesEnum_SQUARE_getInstance() {
    QRCodeShapesEnum_initEntries();
    return QRCodeShapesEnum_SQUARE_instance;
  }
  function QRCodeShapesEnum_CIRCLE_getInstance() {
    QRCodeShapesEnum_initEntries();
    return QRCodeShapesEnum_CIRCLE_instance;
  }
  function QRCodeShapesEnum_ROUNDED_SQUARE_getInstance() {
    QRCodeShapesEnum_initEntries();
    return QRCodeShapesEnum_ROUNDED_SQUARE_instance;
  }
  function QRCodeShapesEnum_CUSTOM_getInstance() {
    QRCodeShapesEnum_initEntries();
    return QRCodeShapesEnum_CUSTOM_instance;
  }
  function Colors() {
    this.TRANSPARENT = 0;
    this.ALICE_BLUE = -984833;
    this.ANTIQUE_WHITE = -332841;
    this.AQUA = -16711681;
    this.AQUAMARINE = -8388652;
    this.AZURE = -983041;
    this.BEIGE = -657956;
    this.BISQUE = -6972;
    this.BLACK = -16777216;
    this.BLANCHED_ALMOND = -5171;
    this.BLUE = -16776961;
    this.BLUE_VIOLET = -7722014;
    this.BROWN = -5952982;
    this.BURLY_WOOD = -2180985;
    this.CADET_BLUE = -10510688;
    this.CHARTREUSE = -8388864;
    this.CHOCOLATE = -2987746;
    this.CORAL = -32944;
    this.CORNFLOWER_BLUE = -10185235;
    this.CORNSILK = -1828;
    this.CRIMSON = -2354116;
    this.CYAN = -16711681;
    this.DARK_BLUE = -16777077;
    this.DARK_CYAN = -16741493;
    this.DARK_GOLDEN_ROD = -4684277;
    this.DARK_GRAY = -5658199;
    this.DARK_GREY = -5658199;
    this.DARK_GREEN = -16751616;
    this.DARK_KHAKI = -4343957;
    this.DARK_MAGENTA = -7667573;
    this.DARK_OLIVE_GREEN = -11179217;
    this.DARK_ORANGE = -29696;
    this.DARK_ORCHID = -6737204;
    this.DARK_RED = -7667712;
    this.DARK_SALMON = -1468806;
    this.DARK_SEA_GREEN = -7357297;
    this.DARK_SLATE_BLUE = -12042869;
    this.DARK_SLATE_GRAY = -13676721;
    this.DARK_SLATE_GREY = -13676721;
    this.DARK_TURQUOISE = -16724271;
    this.DARK_VIOLET = -7077677;
    this.DEEP_PINK = -60269;
    this.DEEP_SKY_BLUE = -16728065;
    this.DIM_GRAY = -9868951;
    this.DIM_GREY = -9868951;
    this.DODGER_BLUE = -14774017;
    this.FIRE_BRICK = -5103070;
    this.FLORAL_WHITE = -1296;
    this.FOREST_GREEN = -14513374;
    this.FUCHSIA = -65281;
    this.GAINSBORO = -2302756;
    this.GHOST_WHITE = -460545;
    this.GOLD = -10496;
    this.GOLDEN_ROD = -2448096;
    this.GRAY = -8355712;
    this.GREY = -8355712;
    this.GREEN = -16744448;
    this.GREEN_YELLOW = -5374161;
    this.HONEY_DEW = -983056;
    this.HOT_PINK = -38476;
    this.INDIAN_RED = -3318692;
    this.INDIGO = -11861886;
    this.IVORY = -16;
    this.KHAKI = -989556;
    this.LAVENDER = -1644806;
    this.LAVENDER_BLUSH = -3851;
    this.LAWN_GREEN = -8586240;
    this.LEMON_CHIFFON = -1331;
    this.LIGHT_BLUE = -5383962;
    this.LIGHT_CORAL = -1015680;
    this.LIGHT_CYAN = -2031617;
    this.LIGHT_GOLDEN_ROD_YELLOW = -329006;
    this.LIGHT_GRAY = -2894893;
    this.LIGHT_GREY = -2894893;
    this.LIGHT_GREEN = -7278960;
    this.LIGHT_PINK = -18751;
    this.LIGHT_SALMON = -24454;
    this.LIGHT_SEA_GREEN = -14634326;
    this.LIGHT_SKY_BLUE = -7876870;
    this.LIGHT_SLATE_GRAY = -8943463;
    this.LIGHT_SLATE_GREY = -8943463;
    this.LIGHT_STEEL_BLUE = -5192482;
    this.LIGHT_YELLOW = -32;
    this.LIME = -16711936;
    this.LIME_GREEN = -13447886;
    this.LINEN = -331546;
    this.MAGENTA = -65281;
    this.MAROON = -8388608;
    this.MEDIUM_AQUA_MARINE = -10039894;
    this.MEDIUM_BLUE = -16777011;
    this.MEDIUM_ORCHID = -4565549;
    this.MEDIUM_PURPLE = -7114533;
    this.MEDIUM_SEA_GREEN = -12799119;
    this.MEDIUM_SLATE_BLUE = -8689426;
    this.MEDIUM_SPRING_GREEN = -16713062;
    this.MEDIUM_TURQUOISE = -12004916;
    this.MEDIUM_VIOLET_RED = -3730043;
    this.MIDNIGHT_BLUE = -15132304;
    this.MINT_CREAM = -655366;
    this.MISTY_ROSE = -6943;
    this.MOCCASIN = -6987;
    this.NAVAJO_WHITE = -8531;
    this.NAVY = -16777088;
    this.OLD_LACE = -133658;
    this.OLIVE = -8355840;
    this.OLIVE_DRAB = -9728477;
    this.ORANGE = -23296;
    this.ORANGE_RED = -47872;
    this.ORCHID = -2461482;
    this.PALE_GOLDEN_ROD = -1120086;
    this.PALE_GREEN = -6751336;
    this.PALE_TURQUOISE = -5247250;
    this.PALE_VIOLET_RED = -2396013;
    this.PAPAYA_WHIP = -4139;
    this.PEACH_PUFF = -9543;
    this.PERU = -3308225;
    this.PINK = -16181;
    this.PLUM = -2252579;
    this.POWDER_BLUE = -5185306;
    this.PURPLE = -8388480;
    this.REBECCA_PURPLE = -10079335;
    this.RED = -65536;
    this.ROSY_BROWN = -4419697;
    this.ROYAL_BLUE = -12490271;
    this.SADDLE_BROWN = -7650029;
    this.SALMON = -360334;
    this.SANDY_BROWN = -744352;
    this.SEA_GREEN = -13726889;
    this.SEA_SHELL = -2578;
    this.SIENNA = -6270419;
    this.SILVER = -4144960;
    this.SKY_BLUE = -7876885;
    this.SLATE_BLUE = -9807155;
    this.SLATE_GRAY = -9404272;
    this.SLATE_GREY = -9404272;
    this.SNOW = -1286;
    this.SPRING_GREEN = -16711809;
    this.STEEL_BLUE = -12156236;
    this.TAN = -2968436;
    this.TEAL = -16744320;
    this.THISTLE = -2572328;
    this.TOMATO = -40121;
    this.TURQUOISE = -12525360;
    this.VIOLET = -1146130;
    this.WHEAT = -663885;
    this.WHITE = -1;
    this.WHITE_SMOKE = -657931;
    this.YELLOW = -256;
    this.YELLOW_GREEN = -6632142;
  }
  protoOf(Colors).css = function (str) {
    return toInt(substring(str, numberRangeToNumber(1, 6)), 16) | -16777216;
  };
  protoOf(Colors).y7 = function (r, g, b, a) {
    return (coerceIn(a, numberRangeToNumber(0, 255)) & 255) << 24 | (coerceIn(r, numberRangeToNumber(0, 255)) & 255) << 16 | (coerceIn(g, numberRangeToNumber(0, 255)) & 255) << 8 | (coerceIn(b, numberRangeToNumber(0, 255)) & 255) << 0;
  };
  protoOf(Colors).rgba = function (r, g, b, a, $super) {
    a = a === VOID ? 255 : a;
    return $super === VOID ? this.y7(r, g, b, a) : $super.y7.call(this, r, g, b, a);
  };
  protoOf(Colors).getRGBA = function (color) {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([color >> 16 & 255, color >> 8 & 255, color >> 0 & 255, color >> 24 & 255]);
  };
  protoOf(Colors).z7 = function (color, maxValue) {
    // Inline function 'kotlin.doubleArrayOf' call
    return new Float64Array([(color >> 16 & 255) / maxValue, (color >> 8 & 255) / maxValue, (color >> 0 & 255) / maxValue, (color >> 24 & 255) / maxValue]);
  };
  protoOf(Colors).getRGBAPercentages = function (color, maxValue, $super) {
    maxValue = maxValue === VOID ? 255.0 : maxValue;
    return $super === VOID ? this.z7(color, maxValue) : $super.z7.call(this, color, maxValue);
  };
  protoOf(Colors).withAlpha = function (color, alpha) {
    return (coerceIn(alpha, numberRangeToNumber(0, 255)) << 24) + (color & 16777215) | 0;
  };
  protoOf(Colors).a8 = function () {
    return this.TRANSPARENT;
  };
  protoOf(Colors).b8 = function () {
    return this.ALICE_BLUE;
  };
  protoOf(Colors).c8 = function () {
    return this.ANTIQUE_WHITE;
  };
  protoOf(Colors).d8 = function () {
    return this.AQUA;
  };
  protoOf(Colors).e8 = function () {
    return this.AQUAMARINE;
  };
  protoOf(Colors).f8 = function () {
    return this.AZURE;
  };
  protoOf(Colors).g8 = function () {
    return this.BEIGE;
  };
  protoOf(Colors).h8 = function () {
    return this.BISQUE;
  };
  protoOf(Colors).i8 = function () {
    return this.BLACK;
  };
  protoOf(Colors).j8 = function () {
    return this.BLANCHED_ALMOND;
  };
  protoOf(Colors).k8 = function () {
    return this.BLUE;
  };
  protoOf(Colors).l8 = function () {
    return this.BLUE_VIOLET;
  };
  protoOf(Colors).m8 = function () {
    return this.BROWN;
  };
  protoOf(Colors).n8 = function () {
    return this.BURLY_WOOD;
  };
  protoOf(Colors).o8 = function () {
    return this.CADET_BLUE;
  };
  protoOf(Colors).p8 = function () {
    return this.CHARTREUSE;
  };
  protoOf(Colors).q8 = function () {
    return this.CHOCOLATE;
  };
  protoOf(Colors).r8 = function () {
    return this.CORAL;
  };
  protoOf(Colors).s8 = function () {
    return this.CORNFLOWER_BLUE;
  };
  protoOf(Colors).t8 = function () {
    return this.CORNSILK;
  };
  protoOf(Colors).u8 = function () {
    return this.CRIMSON;
  };
  protoOf(Colors).v8 = function () {
    return this.CYAN;
  };
  protoOf(Colors).w8 = function () {
    return this.DARK_BLUE;
  };
  protoOf(Colors).x8 = function () {
    return this.DARK_CYAN;
  };
  protoOf(Colors).y8 = function () {
    return this.DARK_GOLDEN_ROD;
  };
  protoOf(Colors).z8 = function () {
    return this.DARK_GRAY;
  };
  protoOf(Colors).a9 = function () {
    return this.DARK_GREY;
  };
  protoOf(Colors).b9 = function () {
    return this.DARK_GREEN;
  };
  protoOf(Colors).c9 = function () {
    return this.DARK_KHAKI;
  };
  protoOf(Colors).d9 = function () {
    return this.DARK_MAGENTA;
  };
  protoOf(Colors).e9 = function () {
    return this.DARK_OLIVE_GREEN;
  };
  protoOf(Colors).f9 = function () {
    return this.DARK_ORANGE;
  };
  protoOf(Colors).g9 = function () {
    return this.DARK_ORCHID;
  };
  protoOf(Colors).h9 = function () {
    return this.DARK_RED;
  };
  protoOf(Colors).i9 = function () {
    return this.DARK_SALMON;
  };
  protoOf(Colors).j9 = function () {
    return this.DARK_SEA_GREEN;
  };
  protoOf(Colors).k9 = function () {
    return this.DARK_SLATE_BLUE;
  };
  protoOf(Colors).l9 = function () {
    return this.DARK_SLATE_GRAY;
  };
  protoOf(Colors).m9 = function () {
    return this.DARK_SLATE_GREY;
  };
  protoOf(Colors).n9 = function () {
    return this.DARK_TURQUOISE;
  };
  protoOf(Colors).o9 = function () {
    return this.DARK_VIOLET;
  };
  protoOf(Colors).p9 = function () {
    return this.DEEP_PINK;
  };
  protoOf(Colors).q9 = function () {
    return this.DEEP_SKY_BLUE;
  };
  protoOf(Colors).r9 = function () {
    return this.DIM_GRAY;
  };
  protoOf(Colors).s9 = function () {
    return this.DIM_GREY;
  };
  protoOf(Colors).t9 = function () {
    return this.DODGER_BLUE;
  };
  protoOf(Colors).u9 = function () {
    return this.FIRE_BRICK;
  };
  protoOf(Colors).v9 = function () {
    return this.FLORAL_WHITE;
  };
  protoOf(Colors).w9 = function () {
    return this.FOREST_GREEN;
  };
  protoOf(Colors).x9 = function () {
    return this.FUCHSIA;
  };
  protoOf(Colors).y9 = function () {
    return this.GAINSBORO;
  };
  protoOf(Colors).z9 = function () {
    return this.GHOST_WHITE;
  };
  protoOf(Colors).aa = function () {
    return this.GOLD;
  };
  protoOf(Colors).ba = function () {
    return this.GOLDEN_ROD;
  };
  protoOf(Colors).ca = function () {
    return this.GRAY;
  };
  protoOf(Colors).da = function () {
    return this.GREY;
  };
  protoOf(Colors).ea = function () {
    return this.GREEN;
  };
  protoOf(Colors).fa = function () {
    return this.GREEN_YELLOW;
  };
  protoOf(Colors).ga = function () {
    return this.HONEY_DEW;
  };
  protoOf(Colors).ha = function () {
    return this.HOT_PINK;
  };
  protoOf(Colors).ia = function () {
    return this.INDIAN_RED;
  };
  protoOf(Colors).ja = function () {
    return this.INDIGO;
  };
  protoOf(Colors).ka = function () {
    return this.IVORY;
  };
  protoOf(Colors).la = function () {
    return this.KHAKI;
  };
  protoOf(Colors).ma = function () {
    return this.LAVENDER;
  };
  protoOf(Colors).na = function () {
    return this.LAVENDER_BLUSH;
  };
  protoOf(Colors).oa = function () {
    return this.LAWN_GREEN;
  };
  protoOf(Colors).pa = function () {
    return this.LEMON_CHIFFON;
  };
  protoOf(Colors).qa = function () {
    return this.LIGHT_BLUE;
  };
  protoOf(Colors).ra = function () {
    return this.LIGHT_CORAL;
  };
  protoOf(Colors).sa = function () {
    return this.LIGHT_CYAN;
  };
  protoOf(Colors).ta = function () {
    return this.LIGHT_GOLDEN_ROD_YELLOW;
  };
  protoOf(Colors).ua = function () {
    return this.LIGHT_GRAY;
  };
  protoOf(Colors).va = function () {
    return this.LIGHT_GREY;
  };
  protoOf(Colors).wa = function () {
    return this.LIGHT_GREEN;
  };
  protoOf(Colors).xa = function () {
    return this.LIGHT_PINK;
  };
  protoOf(Colors).ya = function () {
    return this.LIGHT_SALMON;
  };
  protoOf(Colors).za = function () {
    return this.LIGHT_SEA_GREEN;
  };
  protoOf(Colors).ab = function () {
    return this.LIGHT_SKY_BLUE;
  };
  protoOf(Colors).bb = function () {
    return this.LIGHT_SLATE_GRAY;
  };
  protoOf(Colors).cb = function () {
    return this.LIGHT_SLATE_GREY;
  };
  protoOf(Colors).db = function () {
    return this.LIGHT_STEEL_BLUE;
  };
  protoOf(Colors).eb = function () {
    return this.LIGHT_YELLOW;
  };
  protoOf(Colors).fb = function () {
    return this.LIME;
  };
  protoOf(Colors).gb = function () {
    return this.LIME_GREEN;
  };
  protoOf(Colors).hb = function () {
    return this.LINEN;
  };
  protoOf(Colors).ib = function () {
    return this.MAGENTA;
  };
  protoOf(Colors).jb = function () {
    return this.MAROON;
  };
  protoOf(Colors).kb = function () {
    return this.MEDIUM_AQUA_MARINE;
  };
  protoOf(Colors).lb = function () {
    return this.MEDIUM_BLUE;
  };
  protoOf(Colors).mb = function () {
    return this.MEDIUM_ORCHID;
  };
  protoOf(Colors).nb = function () {
    return this.MEDIUM_PURPLE;
  };
  protoOf(Colors).ob = function () {
    return this.MEDIUM_SEA_GREEN;
  };
  protoOf(Colors).pb = function () {
    return this.MEDIUM_SLATE_BLUE;
  };
  protoOf(Colors).qb = function () {
    return this.MEDIUM_SPRING_GREEN;
  };
  protoOf(Colors).rb = function () {
    return this.MEDIUM_TURQUOISE;
  };
  protoOf(Colors).sb = function () {
    return this.MEDIUM_VIOLET_RED;
  };
  protoOf(Colors).tb = function () {
    return this.MIDNIGHT_BLUE;
  };
  protoOf(Colors).ub = function () {
    return this.MINT_CREAM;
  };
  protoOf(Colors).vb = function () {
    return this.MISTY_ROSE;
  };
  protoOf(Colors).wb = function () {
    return this.MOCCASIN;
  };
  protoOf(Colors).xb = function () {
    return this.NAVAJO_WHITE;
  };
  protoOf(Colors).yb = function () {
    return this.NAVY;
  };
  protoOf(Colors).zb = function () {
    return this.OLD_LACE;
  };
  protoOf(Colors).ac = function () {
    return this.OLIVE;
  };
  protoOf(Colors).bc = function () {
    return this.OLIVE_DRAB;
  };
  protoOf(Colors).cc = function () {
    return this.ORANGE;
  };
  protoOf(Colors).dc = function () {
    return this.ORANGE_RED;
  };
  protoOf(Colors).ec = function () {
    return this.ORCHID;
  };
  protoOf(Colors).fc = function () {
    return this.PALE_GOLDEN_ROD;
  };
  protoOf(Colors).gc = function () {
    return this.PALE_GREEN;
  };
  protoOf(Colors).hc = function () {
    return this.PALE_TURQUOISE;
  };
  protoOf(Colors).ic = function () {
    return this.PALE_VIOLET_RED;
  };
  protoOf(Colors).jc = function () {
    return this.PAPAYA_WHIP;
  };
  protoOf(Colors).kc = function () {
    return this.PEACH_PUFF;
  };
  protoOf(Colors).lc = function () {
    return this.PERU;
  };
  protoOf(Colors).mc = function () {
    return this.PINK;
  };
  protoOf(Colors).nc = function () {
    return this.PLUM;
  };
  protoOf(Colors).oc = function () {
    return this.POWDER_BLUE;
  };
  protoOf(Colors).pc = function () {
    return this.PURPLE;
  };
  protoOf(Colors).qc = function () {
    return this.REBECCA_PURPLE;
  };
  protoOf(Colors).rc = function () {
    return this.RED;
  };
  protoOf(Colors).sc = function () {
    return this.ROSY_BROWN;
  };
  protoOf(Colors).tc = function () {
    return this.ROYAL_BLUE;
  };
  protoOf(Colors).uc = function () {
    return this.SADDLE_BROWN;
  };
  protoOf(Colors).vc = function () {
    return this.SALMON;
  };
  protoOf(Colors).wc = function () {
    return this.SANDY_BROWN;
  };
  protoOf(Colors).xc = function () {
    return this.SEA_GREEN;
  };
  protoOf(Colors).yc = function () {
    return this.SEA_SHELL;
  };
  protoOf(Colors).zc = function () {
    return this.SIENNA;
  };
  protoOf(Colors).ad = function () {
    return this.SILVER;
  };
  protoOf(Colors).bd = function () {
    return this.SKY_BLUE;
  };
  protoOf(Colors).cd = function () {
    return this.SLATE_BLUE;
  };
  protoOf(Colors).dd = function () {
    return this.SLATE_GRAY;
  };
  protoOf(Colors).ed = function () {
    return this.SLATE_GREY;
  };
  protoOf(Colors).fd = function () {
    return this.SNOW;
  };
  protoOf(Colors).gd = function () {
    return this.SPRING_GREEN;
  };
  protoOf(Colors).hd = function () {
    return this.STEEL_BLUE;
  };
  protoOf(Colors).id = function () {
    return this.TAN;
  };
  protoOf(Colors).jd = function () {
    return this.TEAL;
  };
  protoOf(Colors).kd = function () {
    return this.THISTLE;
  };
  protoOf(Colors).ld = function () {
    return this.TOMATO;
  };
  protoOf(Colors).md = function () {
    return this.TURQUOISE;
  };
  protoOf(Colors).nd = function () {
    return this.VIOLET;
  };
  protoOf(Colors).od = function () {
    return this.WHEAT;
  };
  protoOf(Colors).pd = function () {
    return this.WHITE;
  };
  protoOf(Colors).qd = function () {
    return this.WHITE_SMOKE;
  };
  protoOf(Colors).rd = function () {
    return this.YELLOW;
  };
  protoOf(Colors).sd = function () {
    return this.YELLOW_GREEN;
  };
  var Colors_instance;
  function Colors_getInstance() {
    return Colors_instance;
  }
  function DefaultColorFunction(foreground, background) {
    foreground = foreground === VOID ? -16777216 : foreground;
    background = background === VOID ? 0 : background;
    this.td_1 = foreground;
    this.ud_1 = background;
  }
  protoOf(DefaultColorFunction).fg = function (row, col, qrCode, qrCodeGraphics) {
    return this.td_1;
  };
  protoOf(DefaultColorFunction).bg = function (row, col, qrCode, qrCodeGraphics) {
    return this.ud_1;
  };
  function LinearGradientColorFunction(startForegroundColor, endForegroundColor, backgroundColor, vertical) {
    backgroundColor = backgroundColor === VOID ? -1 : backgroundColor;
    vertical = vertical === VOID ? true : vertical;
    this.startForegroundColor = startForegroundColor;
    this.endForegroundColor = endForegroundColor;
    this.backgroundColor = backgroundColor;
    this.vertical = vertical;
    this.vd_1 = Colors_instance.getRGBA(this.startForegroundColor);
    this.wd_1 = Colors_instance.getRGBA(this.endForegroundColor);
  }
  protoOf(LinearGradientColorFunction).xd = function () {
    return this.startForegroundColor;
  };
  protoOf(LinearGradientColorFunction).yd = function () {
    return this.endForegroundColor;
  };
  protoOf(LinearGradientColorFunction).zd = function () {
    return this.backgroundColor;
  };
  protoOf(LinearGradientColorFunction).ae = function (_set____db54di) {
    this.vertical = _set____db54di;
  };
  protoOf(LinearGradientColorFunction).be = function () {
    return this.vertical;
  };
  protoOf(LinearGradientColorFunction).fg = function (row, col, qrCode, qrCodeGraphics) {
    var tmp;
    if (this.vertical) {
      tmp = row;
    } else {
      tmp = col;
    }
    var pct = tmp / qrCode.rawData.length;
    var r = this.vd_1[0] * (1 - pct) + this.wd_1[0] * pct;
    var g = this.vd_1[1] * (1 - pct) + this.wd_1[1] * pct;
    var b = this.vd_1[2] * (1 - pct) + this.wd_1[2] * pct;
    return Colors_instance.rgba(coerceIn(roundToInt(r), numberRangeToNumber(0, 255)), coerceIn(roundToInt(g), numberRangeToNumber(0, 255)), coerceIn(roundToInt(b), numberRangeToNumber(0, 255)), 255);
  };
  protoOf(LinearGradientColorFunction).bg = function (row, col, qrCode, qrCodeGraphics) {
    return this.backgroundColor;
  };
  function QRCodeColorFunction() {
  }
  function InsufficientInformationDensityException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    IllegalArgumentException_init_$Init$_1(message, cause, this);
    captureStack(this, InsufficientInformationDensityException);
    this.ce_1 = message;
    this.de_1 = cause;
  }
  protoOf(InsufficientInformationDensityException).q3 = function () {
    return this.ce_1;
  };
  protoOf(InsufficientInformationDensityException).r3 = function () {
    return this.de_1;
  };
  function get($this, index) {
    return (($this.ee_1[index / 8 | 0] >>> (7 - (index % 8 | 0) | 0) | 0) & 1) === 1;
  }
  function BitBuffer() {
    this.ge_1 = 32;
    this.ee_1 = new Int32Array(this.ge_1);
    this.fe_1 = 0;
  }
  protoOf(BitBuffer).he = function (num, length) {
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.putBit(((num >>> ((length - i | 0) - 1 | 0) | 0) & 1) === 1);
      }
       while (inductionVariable < length);
  };
  protoOf(BitBuffer).putBit = function (bit) {
    if (this.fe_1 === imul(this.ee_1.length, 8)) {
      this.ee_1 = copyOf(this.ee_1, this.ee_1.length + this.ge_1 | 0);
    }
    if (bit) {
      this.ee_1[this.fe_1 / 8 | 0] = this.ee_1[this.fe_1 / 8 | 0] | (128 >>> (this.fe_1 % 8 | 0) | 0);
    }
    this.fe_1 = this.fe_1 + 1 | 0;
  };
  protoOf(BitBuffer).toString = function () {
    var buffer = StringBuilder_init_$Create$_0();
    var inductionVariable = 0;
    var last = this.fe_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffer.m3(get(this, i) ? _Char___init__impl__6a9atx(49) : _Char___init__impl__6a9atx(48));
      }
       while (inductionVariable < last);
    return buffer.toString();
  };
  function arraycopy($this, from, fromPos, to, toPos, length) {
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        to[toPos + i | 0] = from[fromPos + i | 0];
      }
       while (inductionVariable < length);
  }
  function Polynomial(num, shift) {
    shift = shift === VOID ? 0 : shift;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var inductionVariable = 0;
      var last = num.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(num[index] === 0)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var offset = coerceAtLeast(tmp$ret$1, 0);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = (num.length - offset | 0) + shift | 0;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ie_1 = tmp_2;
    arraycopy(this, num, offset, this.ie_1, 0, num.length - offset | 0);
  }
  protoOf(Polynomial).i = function (i) {
    return this.ie_1[i];
  };
  protoOf(Polynomial).je = function () {
    return this.ie_1.length;
  };
  protoOf(Polynomial).ke = function (other) {
    var tmp = 0;
    var tmp_0 = (this.je() + other.je() | 0) - 1 | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    // Inline function 'kotlin.let' call
    var inductionVariable = 0;
    var last = this.je();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = other.je();
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            tmp_1[i + j | 0] = tmp_1[i + j | 0] ^ QRMath_getInstance().me(QRMath_getInstance().le(this.i(i)) + QRMath_getInstance().le(other.i(j)) | 0);
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    return new Polynomial(tmp_1);
  };
  protoOf(Polynomial).ne = function (other) {
    var tmp;
    if ((this.je() - other.je() | 0) < 0) {
      tmp = this;
    } else {
      var ratio = QRMath_getInstance().le(this.i(0)) - QRMath_getInstance().le(other.i(0)) | 0;
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var result = this.ie_1.slice();
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = other.ie_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = result[_unary__edvuaz] ^ QRMath_getInstance().me(QRMath_getInstance().le(item) + ratio | 0);
      }
      tmp = (new Polynomial(result)).ne(other);
    }
    return tmp;
  };
  function isInsideModules($this, row, rowOffset, col, colOffset, modulesSize) {
    var tmp;
    var containsArg = row + rowOffset | 0;
    if (0 <= containsArg ? containsArg < modulesSize : false) {
      var containsArg_0 = col + colOffset | 0;
      tmp = 0 <= containsArg_0 ? containsArg_0 < modulesSize : false;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isTopBottomRowSquare($this, row, col, probeSize) {
    return (0 <= col ? col < probeSize : false) && (row === 0 || row === (probeSize - 1 | 0));
  }
  function isLeftRightColSquare($this, row, col, probeSize) {
    return (0 <= row ? row < probeSize : false) && (col === 0 || col === (probeSize - 1 | 0));
  }
  function isMidSquare($this, row, col, probeSize) {
    return (2 <= row ? row < (probeSize - 2 | 0) : false) && 2 <= col && col <= (probeSize - 3 | 0);
  }
  function findSquareRegion($this, row, col, probeSize) {
    var tmp;
    if (row === 0) {
      tmp = col === 0 ? QRCodeRegion_TOP_LEFT_CORNER_getInstance() : col === (probeSize - 1 | 0) ? QRCodeRegion_TOP_RIGHT_CORNER_getInstance() : col === probeSize ? QRCodeRegion_MARGIN_getInstance() : QRCodeRegion_TOP_MID_getInstance();
    } else if (row === (probeSize - 1 | 0)) {
      tmp = col === 0 ? QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance() : col === (probeSize - 1 | 0) ? QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance() : col === probeSize ? QRCodeRegion_MARGIN_getInstance() : QRCodeRegion_BOTTOM_MID_getInstance();
    } else if (row === probeSize) {
      tmp = QRCodeRegion_MARGIN_getInstance();
    } else {
      tmp = col === 0 ? QRCodeRegion_LEFT_MID_getInstance() : col === (probeSize - 1 | 0) ? QRCodeRegion_RIGHT_MID_getInstance() : col === probeSize ? QRCodeRegion_MARGIN_getInstance() : QRCodeRegion_CENTER_getInstance();
    }
    return tmp;
  }
  function set($this, row, col, value, modules, parent) {
    var qrCodeSquare = modules[row][col];
    if (!(qrCodeSquare == null)) {
      qrCodeSquare.dark = value;
    } else {
      modules[row][col] = new QRCodeSquare(value, row, col, modules.length, VOID, VOID, VOID, parent);
    }
  }
  function set$default($this, row, col, value, modules, parent, $super) {
    parent = parent === VOID ? null : parent;
    return set($this, row, col, value, modules, parent);
  }
  function QRCodeSetup() {
    this.oe_1 = 7;
  }
  protoOf(QRCodeSetup).pe = function (modules, probeSize) {
    this.qe(0, 0, modules, probeSize);
  };
  protoOf(QRCodeSetup).re = function (modules, probeSize, $super) {
    probeSize = probeSize === VOID ? 7 : probeSize;
    var tmp;
    if ($super === VOID) {
      this.pe(modules, probeSize);
      tmp = Unit_instance;
    } else {
      tmp = $super.pe.call(this, modules, probeSize);
    }
    return tmp;
  };
  protoOf(QRCodeSetup).se = function (modules, probeSize) {
    this.qe(modules.length - probeSize | 0, 0, modules, probeSize);
  };
  protoOf(QRCodeSetup).te = function (modules, probeSize, $super) {
    probeSize = probeSize === VOID ? 7 : probeSize;
    var tmp;
    if ($super === VOID) {
      this.se(modules, probeSize);
      tmp = Unit_instance;
    } else {
      tmp = $super.se.call(this, modules, probeSize);
    }
    return tmp;
  };
  protoOf(QRCodeSetup).ue = function (modules, probeSize) {
    this.qe(0, modules.length - probeSize | 0, modules, probeSize);
  };
  protoOf(QRCodeSetup).ve = function (modules, probeSize, $super) {
    probeSize = probeSize === VOID ? 7 : probeSize;
    var tmp;
    if ($super === VOID) {
      this.ue(modules, probeSize);
      tmp = Unit_instance;
    } else {
      tmp = $super.ue.call(this, modules, probeSize);
    }
    return tmp;
  };
  protoOf(QRCodeSetup).qe = function (rowOffset, colOffset, modules, probeSize) {
    var modulesSize = modules.length;
    var tmp0_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_POSITION_PROBE_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
    var squareData = new QRCodeSquare(false, rowOffset, colOffset, modulesSize, tmp0_squareInfo, probeSize, probeSize);
    var inductionVariable = -1;
    if (inductionVariable <= probeSize)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = -1;
        if (inductionVariable_0 <= probeSize)
          $l$loop: do {
            var col = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!isInsideModules(this, row, rowOffset, col, colOffset, modulesSize)) {
              continue $l$loop;
            }
            var isDark = isTopBottomRowSquare(this, row, col, probeSize) || isLeftRightColSquare(this, row, col, probeSize) || isMidSquare(this, row, col, probeSize);
            var region = findSquareRegion(this, row, col, probeSize);
            var tmp = modules[row + rowOffset | 0];
            var tmp_0 = col + colOffset | 0;
            var tmp1_row = row + rowOffset | 0;
            var tmp2_col = col + colOffset | 0;
            var tmp3_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_POSITION_PROBE_getInstance(), region);
            tmp[tmp_0] = new QRCodeSquare(isDark, tmp1_row, tmp2_col, modulesSize, tmp3_squareInfo, VOID, VOID, squareData);
          }
           while (!(col === probeSize));
      }
       while (!(row === probeSize));
  };
  protoOf(QRCodeSetup).we = function (type, modules) {
    var pos = QRUtil_getInstance().cf(type);
    var inductionVariable = 0;
    var last = pos.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = pos.length - 1 | 0;
        if (inductionVariable_0 <= last_0)
          $l$loop: do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var row = pos[i];
            var col = pos[j];
            if (!(modules[row][col] == null)) {
              continue $l$loop;
            }
            var tmp0_row = row - 2 | 0;
            var tmp1_col = col - 2 | 0;
            var tmp2_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_POSITION_ADJUST_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
            var tmp3_moduleSize = modules.length;
            var squareData = new QRCodeSquare(false, tmp0_row, tmp1_col, tmp3_moduleSize, tmp2_squareInfo, 6, 6);
            var inductionVariable_1 = -2;
            if (inductionVariable_1 <= 2)
              do {
                var r = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var inductionVariable_2 = -2;
                if (inductionVariable_2 <= 2)
                  do {
                    var c = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var tmp = modules[row + r | 0];
                    var tmp_0 = col + c | 0;
                    var tmp4_dark = r === -2 || r === 2 || c === -2 || c === 2 || (r === 0 && c === 0);
                    var tmp5_row = row + r | 0;
                    var tmp6_col = col + c | 0;
                    var tmp7_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_POSITION_ADJUST_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
                    var tmp8_moduleSize = modules.length;
                    tmp[tmp_0] = new QRCodeSquare(tmp4_dark, tmp5_row, tmp6_col, tmp8_moduleSize, tmp7_squareInfo, VOID, VOID, squareData);
                  }
                   while (inductionVariable_2 <= 2);
              }
               while (inductionVariable_1 <= 2);
          }
           while (inductionVariable_0 <= last_0);
      }
       while (inductionVariable <= last);
  };
  protoOf(QRCodeSetup).df = function (moduleCount, modules) {
    var inductionVariable = 8;
    var last = moduleCount - 8 | 0;
    if (inductionVariable < last)
      $l$loop: do {
        var r = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(modules[r][6] == null)) {
          continue $l$loop;
        }
        var tmp = modules[r];
        var tmp0_dark = (r % 2 | 0) === 0;
        var tmp1_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_TIMING_PATTERN_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
        var tmp2_moduleSize = modules.length;
        tmp[6] = new QRCodeSquare(tmp0_dark, r, 6, tmp2_moduleSize, tmp1_squareInfo, VOID, VOID, null);
      }
       while (inductionVariable < last);
    var inductionVariable_0 = 8;
    var last_0 = moduleCount - 8 | 0;
    if (inductionVariable_0 < last_0)
      $l$loop_0: do {
        var c = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!(modules[6][c] == null)) {
          continue $l$loop_0;
        }
        var tmp_0 = modules[6];
        var tmp3_dark = (c % 2 | 0) === 0;
        var tmp4_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_TIMING_PATTERN_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
        var tmp5_moduleSize = modules.length;
        tmp_0[c] = new QRCodeSquare(tmp3_dark, 6, c, tmp5_moduleSize, tmp4_squareInfo, VOID, VOID, null);
      }
       while (inductionVariable_0 < last_0);
  };
  protoOf(QRCodeSetup).ef = function (errorCorrectionLevel, maskPattern, moduleCount, modules) {
    var data = errorCorrectionLevel.value << 3 | maskPattern.y_1;
    var bits = QRUtil_getInstance().hf(data);
    var inductionVariable = 0;
    if (inductionVariable <= 14)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var mod = (bits >> i & 1) === 1;
        if (i < 6) {
          set$default(this, i, 8, mod, modules);
        } else if (i < 8) {
          set$default(this, i + 1 | 0, 8, mod, modules);
        } else {
          set$default(this, (moduleCount - 15 | 0) + i | 0, 8, mod, modules);
        }
      }
       while (inductionVariable <= 14);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 14)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var mod_0 = (bits >> i_0 & 1) === 1;
        if (i_0 < 8) {
          set$default(this, 8, (moduleCount - i_0 | 0) - 1 | 0, mod_0, modules);
        } else if (i_0 < 9) {
          set$default(this, 8, 15 - i_0 | 0, mod_0, modules);
        } else {
          set$default(this, 8, (15 - i_0 | 0) - 1 | 0, mod_0, modules);
        }
      }
       while (inductionVariable_0 <= 14);
    set$default(this, moduleCount - 8 | 0, 8, true, modules);
  };
  protoOf(QRCodeSetup).if = function (type, moduleCount, modules) {
    var bits = QRUtil_getInstance().jf(type);
    var inductionVariable = 0;
    if (inductionVariable <= 17)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var mod = (bits >> i & 1) === 1;
        set$default(this, i / 3 | 0, (((i % 3 | 0) + moduleCount | 0) - 8 | 0) - 3 | 0, mod, modules);
      }
       while (inductionVariable <= 17);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 17)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var mod_0 = (bits >> i_0 & 1) === 1;
        set$default(this, (((i_0 % 3 | 0) + moduleCount | 0) - 8 | 0) - 3 | 0, i_0 / 3 | 0, mod_0, modules);
      }
       while (inductionVariable_0 <= 17);
  };
  protoOf(QRCodeSetup).kf = function (data, maskPattern, moduleCount, modules) {
    var inc = -1;
    var bitIndex = 7;
    var byteIndex = 0;
    var row = moduleCount - 1 | 0;
    var col = moduleCount - 1 | 0;
    while (col > 0) {
      if (col === 6) {
        col = col - 1 | 0;
      }
      $l$loop: while (true) {
        var inductionVariable = 0;
        if (inductionVariable <= 1)
          do {
            var c = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (modules[row][col - c | 0] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = ((data[byteIndex] >>> bitIndex | 0) & 1) === 1;
              }
              var mask = QRUtil_getInstance().lf(maskPattern, row, col - c | 0);
              if (mask) {
                dark = !dark;
              }
              set$default(this, row, col - c | 0, dark, modules);
              bitIndex = bitIndex - 1 | 0;
              if (bitIndex === -1) {
                byteIndex = byteIndex + 1 | 0;
                bitIndex = 7;
              }
            }
          }
           while (inductionVariable <= 1);
        row = row + inc | 0;
        if (row < 0 || moduleCount <= row) {
          row = row - inc | 0;
          inc = -inc | 0;
          break $l$loop;
        }
      }
      col = col - 2 | 0;
    }
  };
  var QRCodeSetup_instance;
  function QRCodeSetup_getInstance() {
    return QRCodeSetup_instance;
  }
  function QRCodeSquare(dark, row, col, moduleSize, squareInfo, rowSize, colSize, parent) {
    squareInfo = squareInfo === VOID ? new QRCodeSquareInfo(QRCodeSquareType_DEFAULT_getInstance(), QRCodeRegion_UNKNOWN_getInstance()) : squareInfo;
    rowSize = rowSize === VOID ? 1 : rowSize;
    colSize = colSize === VOID ? 1 : colSize;
    parent = parent === VOID ? null : parent;
    this.dark = dark;
    this.row = row;
    this.col = col;
    this.moduleSize = moduleSize;
    this.squareInfo = squareInfo;
    this.rowSize = rowSize;
    this.colSize = colSize;
    this.parent = parent;
    this.rendered = false;
  }
  protoOf(QRCodeSquare).mf = function (_set____db54di) {
    this.dark = _set____db54di;
  };
  protoOf(QRCodeSquare).nf = function () {
    return this.dark;
  };
  protoOf(QRCodeSquare).of = function () {
    return this.row;
  };
  protoOf(QRCodeSquare).pf = function () {
    return this.col;
  };
  protoOf(QRCodeSquare).qf = function () {
    return this.moduleSize;
  };
  protoOf(QRCodeSquare).rf = function () {
    return this.squareInfo;
  };
  protoOf(QRCodeSquare).sf = function () {
    return this.rowSize;
  };
  protoOf(QRCodeSquare).tf = function () {
    return this.colSize;
  };
  protoOf(QRCodeSquare).uf = function () {
    return this.parent;
  };
  protoOf(QRCodeSquare).vf = function (_set____db54di) {
    this.rendered = _set____db54di;
  };
  protoOf(QRCodeSquare).wf = function () {
    return this.rendered;
  };
  protoOf(QRCodeSquare).xf = function (cellSize) {
    return imul(this.col, cellSize);
  };
  protoOf(QRCodeSquare).absoluteX = function (cellSize, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    return $super === VOID ? this.xf(cellSize) : $super.xf.call(this, cellSize);
  };
  protoOf(QRCodeSquare).yf = function (cellSize) {
    return imul(this.row, cellSize);
  };
  protoOf(QRCodeSquare).absoluteY = function (cellSize, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    return $super === VOID ? this.yf(cellSize) : $super.yf.call(this, cellSize);
  };
  protoOf(QRCodeSquare).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof QRCodeSquare))
      THROW_CCE();
    if (!(this.row === other.row))
      return false;
    if (!(this.col === other.col))
      return false;
    if (!(this.rowSize === other.rowSize))
      return false;
    if (!(this.colSize === other.colSize))
      return false;
    return true;
  };
  protoOf(QRCodeSquare).hashCode = function () {
    var result = this.row;
    result = imul(31, result) + this.col | 0;
    result = imul(31, result) + this.rowSize | 0;
    result = imul(31, result) + this.colSize | 0;
    return result;
  };
  protoOf(QRCodeSquare).zf = function () {
    return this.dark;
  };
  protoOf(QRCodeSquare).ag = function () {
    return this.row;
  };
  protoOf(QRCodeSquare).cg = function () {
    return this.col;
  };
  protoOf(QRCodeSquare).dg = function () {
    return this.moduleSize;
  };
  protoOf(QRCodeSquare).eg = function () {
    return this.squareInfo;
  };
  protoOf(QRCodeSquare).gg = function () {
    return this.rowSize;
  };
  protoOf(QRCodeSquare).hg = function () {
    return this.colSize;
  };
  protoOf(QRCodeSquare).ig = function () {
    return this.parent;
  };
  protoOf(QRCodeSquare).jg = function (dark, row, col, moduleSize, squareInfo, rowSize, colSize, parent) {
    return new QRCodeSquare(dark, row, col, moduleSize, squareInfo, rowSize, colSize, parent);
  };
  protoOf(QRCodeSquare).copy = function (dark, row, col, moduleSize, squareInfo, rowSize, colSize, parent, $super) {
    dark = dark === VOID ? this.dark : dark;
    row = row === VOID ? this.row : row;
    col = col === VOID ? this.col : col;
    moduleSize = moduleSize === VOID ? this.moduleSize : moduleSize;
    squareInfo = squareInfo === VOID ? this.squareInfo : squareInfo;
    rowSize = rowSize === VOID ? this.rowSize : rowSize;
    colSize = colSize === VOID ? this.colSize : colSize;
    parent = parent === VOID ? this.parent : parent;
    return $super === VOID ? this.jg(dark, row, col, moduleSize, squareInfo, rowSize, colSize, parent) : $super.jg.call(this, dark, row, col, moduleSize, squareInfo, rowSize, colSize, parent);
  };
  protoOf(QRCodeSquare).toString = function () {
    return 'QRCodeSquare(dark=' + this.dark + ', row=' + this.row + ', col=' + this.col + ', moduleSize=' + this.moduleSize + ', squareInfo=' + this.squareInfo.toString() + ', rowSize=' + this.rowSize + ', colSize=' + this.colSize + ', parent=' + toString_0(this.parent) + ')';
  };
  function QRCodeSquareInfo(type, region) {
    this.type = type;
    this.region = region;
  }
  protoOf(QRCodeSquareInfo).kg = function () {
    return this.type;
  };
  protoOf(QRCodeSquareInfo).lg = function () {
    return this.region;
  };
  protoOf(QRCodeSquareInfo).zf = function () {
    return this.type;
  };
  protoOf(QRCodeSquareInfo).ag = function () {
    return this.region;
  };
  protoOf(QRCodeSquareInfo).mg = function (type, region) {
    return new QRCodeSquareInfo(type, region);
  };
  protoOf(QRCodeSquareInfo).copy = function (type, region, $super) {
    type = type === VOID ? this.type : type;
    region = region === VOID ? this.region : region;
    return $super === VOID ? this.mg(type, region) : $super.mg.call(this, type, region);
  };
  protoOf(QRCodeSquareInfo).toString = function () {
    return 'QRCodeSquareInfo(type=' + this.type.toString() + ', region=' + this.region.toString() + ')';
  };
  protoOf(QRCodeSquareInfo).hashCode = function () {
    var result = this.type.hashCode();
    result = imul(result, 31) + this.region.hashCode() | 0;
    return result;
  };
  protoOf(QRCodeSquareInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QRCodeSquareInfo))
      return false;
    var tmp0_other_with_cast = other instanceof QRCodeSquareInfo ? other : THROW_CCE();
    if (!this.type.equals(tmp0_other_with_cast.type))
      return false;
    if (!this.region.equals(tmp0_other_with_cast.region))
      return false;
    return true;
  };
  var QRCodeSquareType_POSITION_PROBE_instance;
  var QRCodeSquareType_POSITION_ADJUST_instance;
  var QRCodeSquareType_TIMING_PATTERN_instance;
  var QRCodeSquareType_DEFAULT_instance;
  function values() {
    return [QRCodeSquareType_POSITION_PROBE_getInstance(), QRCodeSquareType_POSITION_ADJUST_getInstance(), QRCodeSquareType_TIMING_PATTERN_getInstance(), QRCodeSquareType_DEFAULT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'POSITION_PROBE':
        return QRCodeSquareType_POSITION_PROBE_getInstance();
      case 'POSITION_ADJUST':
        return QRCodeSquareType_POSITION_ADJUST_getInstance();
      case 'TIMING_PATTERN':
        return QRCodeSquareType_TIMING_PATTERN_getInstance();
      case 'DEFAULT':
        return QRCodeSquareType_DEFAULT_getInstance();
      default:
        QRCodeSquareType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var QRCodeSquareType_entriesInitialized;
  function QRCodeSquareType_initEntries() {
    if (QRCodeSquareType_entriesInitialized)
      return Unit_instance;
    QRCodeSquareType_entriesInitialized = true;
    QRCodeSquareType_POSITION_PROBE_instance = new QRCodeSquareType('POSITION_PROBE', 0);
    QRCodeSquareType_POSITION_ADJUST_instance = new QRCodeSquareType('POSITION_ADJUST', 1);
    QRCodeSquareType_TIMING_PATTERN_instance = new QRCodeSquareType('TIMING_PATTERN', 2);
    QRCodeSquareType_DEFAULT_instance = new QRCodeSquareType('DEFAULT', 3);
  }
  function QRCodeSquareType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var QRCodeRegion_TOP_LEFT_CORNER_instance;
  var QRCodeRegion_TOP_RIGHT_CORNER_instance;
  var QRCodeRegion_TOP_MID_instance;
  var QRCodeRegion_LEFT_MID_instance;
  var QRCodeRegion_RIGHT_MID_instance;
  var QRCodeRegion_CENTER_instance;
  var QRCodeRegion_BOTTOM_LEFT_CORNER_instance;
  var QRCodeRegion_BOTTOM_RIGHT_CORNER_instance;
  var QRCodeRegion_BOTTOM_MID_instance;
  var QRCodeRegion_MARGIN_instance;
  var QRCodeRegion_UNKNOWN_instance;
  function values_0() {
    return [QRCodeRegion_TOP_LEFT_CORNER_getInstance(), QRCodeRegion_TOP_RIGHT_CORNER_getInstance(), QRCodeRegion_TOP_MID_getInstance(), QRCodeRegion_LEFT_MID_getInstance(), QRCodeRegion_RIGHT_MID_getInstance(), QRCodeRegion_CENTER_getInstance(), QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance(), QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance(), QRCodeRegion_BOTTOM_MID_getInstance(), QRCodeRegion_MARGIN_getInstance(), QRCodeRegion_UNKNOWN_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TOP_LEFT_CORNER':
        return QRCodeRegion_TOP_LEFT_CORNER_getInstance();
      case 'TOP_RIGHT_CORNER':
        return QRCodeRegion_TOP_RIGHT_CORNER_getInstance();
      case 'TOP_MID':
        return QRCodeRegion_TOP_MID_getInstance();
      case 'LEFT_MID':
        return QRCodeRegion_LEFT_MID_getInstance();
      case 'RIGHT_MID':
        return QRCodeRegion_RIGHT_MID_getInstance();
      case 'CENTER':
        return QRCodeRegion_CENTER_getInstance();
      case 'BOTTOM_LEFT_CORNER':
        return QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance();
      case 'BOTTOM_RIGHT_CORNER':
        return QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance();
      case 'BOTTOM_MID':
        return QRCodeRegion_BOTTOM_MID_getInstance();
      case 'MARGIN':
        return QRCodeRegion_MARGIN_getInstance();
      case 'UNKNOWN':
        return QRCodeRegion_UNKNOWN_getInstance();
      default:
        QRCodeRegion_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var QRCodeRegion_entriesInitialized;
  function QRCodeRegion_initEntries() {
    if (QRCodeRegion_entriesInitialized)
      return Unit_instance;
    QRCodeRegion_entriesInitialized = true;
    QRCodeRegion_TOP_LEFT_CORNER_instance = new QRCodeRegion('TOP_LEFT_CORNER', 0);
    QRCodeRegion_TOP_RIGHT_CORNER_instance = new QRCodeRegion('TOP_RIGHT_CORNER', 1);
    QRCodeRegion_TOP_MID_instance = new QRCodeRegion('TOP_MID', 2);
    QRCodeRegion_LEFT_MID_instance = new QRCodeRegion('LEFT_MID', 3);
    QRCodeRegion_RIGHT_MID_instance = new QRCodeRegion('RIGHT_MID', 4);
    QRCodeRegion_CENTER_instance = new QRCodeRegion('CENTER', 5);
    QRCodeRegion_BOTTOM_LEFT_CORNER_instance = new QRCodeRegion('BOTTOM_LEFT_CORNER', 6);
    QRCodeRegion_BOTTOM_RIGHT_CORNER_instance = new QRCodeRegion('BOTTOM_RIGHT_CORNER', 7);
    QRCodeRegion_BOTTOM_MID_instance = new QRCodeRegion('BOTTOM_MID', 8);
    QRCodeRegion_MARGIN_instance = new QRCodeRegion('MARGIN', 9);
    QRCodeRegion_UNKNOWN_instance = new QRCodeRegion('UNKNOWN', 10);
  }
  function QRCodeRegion(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function QRCodeSquareType_POSITION_PROBE_getInstance() {
    QRCodeSquareType_initEntries();
    return QRCodeSquareType_POSITION_PROBE_instance;
  }
  function QRCodeSquareType_POSITION_ADJUST_getInstance() {
    QRCodeSquareType_initEntries();
    return QRCodeSquareType_POSITION_ADJUST_instance;
  }
  function QRCodeSquareType_TIMING_PATTERN_getInstance() {
    QRCodeSquareType_initEntries();
    return QRCodeSquareType_TIMING_PATTERN_instance;
  }
  function QRCodeSquareType_DEFAULT_getInstance() {
    QRCodeSquareType_initEntries();
    return QRCodeSquareType_DEFAULT_instance;
  }
  function QRCodeRegion_TOP_LEFT_CORNER_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_TOP_LEFT_CORNER_instance;
  }
  function QRCodeRegion_TOP_RIGHT_CORNER_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_TOP_RIGHT_CORNER_instance;
  }
  function QRCodeRegion_TOP_MID_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_TOP_MID_instance;
  }
  function QRCodeRegion_LEFT_MID_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_LEFT_MID_instance;
  }
  function QRCodeRegion_RIGHT_MID_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_RIGHT_MID_instance;
  }
  function QRCodeRegion_CENTER_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_CENTER_instance;
  }
  function QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_BOTTOM_LEFT_CORNER_instance;
  }
  function QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_BOTTOM_RIGHT_CORNER_instance;
  }
  function QRCodeRegion_BOTTOM_MID_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_BOTTOM_MID_instance;
  }
  function QRCodeRegion_MARGIN_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_MARGIN_instance;
  }
  function QRCodeRegion_UNKNOWN_getInstance() {
    QRCodeRegion_initEntries();
    return QRCodeRegion_UNKNOWN_instance;
  }
  function QRData(dataType, data) {
    this.rg_1 = dataType;
    this.sg_1 = data;
  }
  protoOf(QRData).vg = function (type) {
    var tmp;
    if (1 <= type ? type <= 9 : false) {
      var tmp_0;
      switch (this.rg_1.y_1) {
        case 0:
          tmp_0 = 10;
          break;
        case 1:
          tmp_0 = 9;
          break;
        case 2:
          tmp_0 = 8;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (1 <= type ? type <= 26 : false) {
      var tmp_1;
      switch (this.rg_1.y_1) {
        case 0:
          tmp_1 = 12;
          break;
        case 1:
          tmp_1 = 11;
          break;
        case 2:
          tmp_1 = 16;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else if (1 <= type ? type <= 40 : false) {
      var tmp_2;
      switch (this.rg_1.y_1) {
        case 0:
          tmp_2 = 14;
          break;
        case 1:
          tmp_2 = 13;
          break;
        case 2:
          tmp_2 = 16;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_2;
    } else {
      throw IllegalArgumentException_init_$Create$_0("'type' must be greater than 0 and cannot be greater than 40: " + type);
    }
    return tmp;
  };
  function QR8BitByte(data) {
    QRData.call(this, QRCodeDataType_DEFAULT_getInstance(), data);
    this.yg_1 = encodeToByteArray(data);
  }
  protoOf(QR8BitByte).ug = function (buffer) {
    var inductionVariable = 0;
    var last = this.yg_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffer.he(this.yg_1[i], 8);
      }
       while (inductionVariable <= last);
  };
  protoOf(QR8BitByte).tg = function () {
    return this.yg_1.length;
  };
  function charCode($this, c) {
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(48));
    } else if (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65)) + 10 | 0;
    } else {
      var tmp_0;
      if (c === _Char___init__impl__6a9atx(32)) {
        tmp_0 = 36;
      } else if (c === _Char___init__impl__6a9atx(36)) {
        tmp_0 = 37;
      } else if (c === _Char___init__impl__6a9atx(37)) {
        tmp_0 = 38;
      } else if (c === _Char___init__impl__6a9atx(42)) {
        tmp_0 = 39;
      } else if (c === _Char___init__impl__6a9atx(43)) {
        tmp_0 = 40;
      } else if (c === _Char___init__impl__6a9atx(45)) {
        tmp_0 = 41;
      } else if (c === _Char___init__impl__6a9atx(46)) {
        tmp_0 = 42;
      } else if (c === _Char___init__impl__6a9atx(47)) {
        tmp_0 = 43;
      } else if (c === _Char___init__impl__6a9atx(58)) {
        tmp_0 = 44;
      } else {
        throw IllegalArgumentException_init_$Create$_0('Illegal character: ' + toString(c));
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function QRAlphaNum(data) {
    QRData.call(this, QRCodeDataType_UPPER_ALPHA_NUM_getInstance(), data);
  }
  protoOf(QRAlphaNum).ug = function (buffer) {
    var i = 0;
    var dataLength = this.sg_1.length;
    while ((i + 1 | 0) < dataLength) {
      buffer.he(imul(charCode(this, charSequenceGet(this.sg_1, i)), 45) + charCode(this, charSequenceGet(this.sg_1, i + 1 | 0)) | 0, 11);
      i = i + 2 | 0;
    }
    if (i < dataLength) {
      buffer.he(charCode(this, charSequenceGet(this.sg_1, i)), 6);
    }
  };
  protoOf(QRAlphaNum).tg = function () {
    return this.sg_1.length;
  };
  function QRNumber(data) {
    QRData.call(this, QRCodeDataType_NUMBERS_getInstance(), data);
  }
  protoOf(QRNumber).ug = function (buffer) {
    var i = 0;
    var len = this.tg();
    while ((i + 2 | 0) < len) {
      var tmp0 = this.sg_1;
      var tmp1 = i;
      // Inline function 'kotlin.text.substring' call
      var endIndex = i + 3 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = tmp0.substring(tmp1, endIndex);
      var num = toInt_0(tmp$ret$1);
      buffer.he(num, 10);
      i = i + 3 | 0;
    }
    if (i < len) {
      if ((len - i | 0) === 1) {
        var tmp3 = this.sg_1;
        var tmp4 = i;
        // Inline function 'kotlin.text.substring' call
        var endIndex_0 = i + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = tmp3.substring(tmp4, endIndex_0);
        var num_0 = toInt_0(tmp$ret$3);
        buffer.he(num_0, 4);
      } else if ((len - i | 0) === 2) {
        var tmp6 = this.sg_1;
        var tmp7 = i;
        // Inline function 'kotlin.text.substring' call
        var endIndex_1 = i + 2 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$5 = tmp6.substring(tmp7, endIndex_1);
        var num_1 = toInt_0(tmp$ret$5);
        buffer.he(num_1, 7);
      }
    }
  };
  protoOf(QRNumber).tg = function () {
    return this.sg_1.length;
  };
  function QRMath() {
    QRMath_instance = this;
    this.s7_1 = new Int32Array(256);
    this.t7_1 = new Int32Array(256);
    var inductionVariable = 0;
    if (inductionVariable <= 7)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.s7_1[i] = 1 << i;
      }
       while (inductionVariable <= 7);
    var inductionVariable_0 = 8;
    if (inductionVariable_0 <= 255)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.s7_1[i_0] = this.s7_1[i_0 - 4 | 0] ^ this.s7_1[i_0 - 5 | 0] ^ this.s7_1[i_0 - 6 | 0] ^ this.s7_1[i_0 - 8 | 0];
      }
       while (inductionVariable_0 <= 255);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 254)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        this.t7_1[this.s7_1[i_1]] = i_1;
      }
       while (inductionVariable_1 <= 254);
  }
  protoOf(QRMath).le = function (n) {
    return this.t7_1[n];
  };
  protoOf(QRMath).me = function (n) {
    var i = n;
    while (i < 0) {
      i = i + 255 | 0;
    }
    while (i >= 256) {
      i = i - 255 | 0;
    }
    return this.s7_1[i];
  };
  protoOf(QRMath).u7 = function (x1, y1, w1, h1, x2, y2, w2, h2) {
    var x1End = x1 + w1 | 0;
    var y1End = y1 + h1 | 0;
    var x2End = x2 + w2 | 0;
    var y2End = y2 + h2 | 0;
    return x1End < x2 || x1 > x2End || y1End < y2 || y1 > y2End;
  };
  var QRMath_instance;
  function QRMath_getInstance() {
    if (QRMath_instance == null)
      new QRMath();
    return QRMath_instance;
  }
  function isNumber_0($this, s) {
    // Inline function 'kotlin.text.matches' call
    return Regex_init_$Create$('^\\d+$').e5(s);
  }
  function isAlphaNum($this, s) {
    // Inline function 'kotlin.text.matches' call
    return Regex_init_$Create$('^[0-9A-Z $%*+\\-./:]+$').e5(s);
  }
  function getBCHDigit($this, data) {
    var i = data;
    var digit = 0;
    while (!(i === 0)) {
      digit = digit + 1 | 0;
      i = i >>> 1 | 0;
    }
    return digit;
  }
  function QRUtil() {
    QRUtil_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    var tmp_0 = new Int32Array([]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_1 = new Int32Array([6, 18]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_2 = new Int32Array([6, 22]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_3 = new Int32Array([6, 26]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_4 = new Int32Array([6, 30]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_5 = new Int32Array([6, 34]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_6 = new Int32Array([6, 22, 38]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_7 = new Int32Array([6, 24, 42]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_8 = new Int32Array([6, 26, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_9 = new Int32Array([6, 28, 50]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_10 = new Int32Array([6, 30, 54]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_11 = new Int32Array([6, 32, 58]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_12 = new Int32Array([6, 34, 62]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_13 = new Int32Array([6, 26, 46, 66]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_14 = new Int32Array([6, 26, 48, 70]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_15 = new Int32Array([6, 26, 50, 74]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_16 = new Int32Array([6, 30, 54, 78]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_17 = new Int32Array([6, 30, 56, 82]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_18 = new Int32Array([6, 30, 58, 86]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_19 = new Int32Array([6, 34, 62, 90]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_20 = new Int32Array([6, 28, 50, 72, 94]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_21 = new Int32Array([6, 26, 50, 74, 98]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_22 = new Int32Array([6, 30, 54, 78, 102]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_23 = new Int32Array([6, 28, 54, 80, 106]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_24 = new Int32Array([6, 32, 58, 84, 110]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_25 = new Int32Array([6, 30, 58, 86, 114]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_26 = new Int32Array([6, 34, 62, 90, 118]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_27 = new Int32Array([6, 26, 50, 74, 98, 122]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_28 = new Int32Array([6, 30, 54, 78, 102, 126]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_29 = new Int32Array([6, 26, 52, 78, 104, 130]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_30 = new Int32Array([6, 30, 56, 82, 108, 134]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_31 = new Int32Array([6, 34, 60, 86, 112, 138]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_32 = new Int32Array([6, 30, 58, 86, 114, 142]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_33 = new Int32Array([6, 34, 62, 90, 118, 146]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_34 = new Int32Array([6, 30, 54, 78, 102, 126, 150]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_35 = new Int32Array([6, 24, 50, 76, 102, 128, 154]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_36 = new Int32Array([6, 28, 54, 80, 106, 132, 158]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_37 = new Int32Array([6, 32, 58, 84, 110, 136, 162]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_38 = new Int32Array([6, 26, 54, 82, 110, 138, 166]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xe_1 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, new Int32Array([6, 30, 58, 86, 114, 142, 170])];
    var tmp_39 = this;
    // Inline function 'kotlin.intArrayOf' call
    var tmp_40 = new Int32Array([41, 25, 17, 10]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_41 = new Int32Array([34, 20, 14, 8]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_42 = new Int32Array([27, 16, 11, 7]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_43 = [tmp_40, tmp_41, tmp_42, new Int32Array([17, 10, 7, 4])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_44 = new Int32Array([77, 47, 32, 20]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_45 = new Int32Array([63, 38, 26, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_46 = new Int32Array([48, 29, 20, 12]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_47 = [tmp_44, tmp_45, tmp_46, new Int32Array([34, 20, 14, 8])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_48 = new Int32Array([127, 77, 53, 32]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_49 = new Int32Array([101, 61, 42, 26]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_50 = new Int32Array([77, 47, 32, 20]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_51 = [tmp_48, tmp_49, tmp_50, new Int32Array([58, 35, 24, 15])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_52 = new Int32Array([187, 114, 78, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_53 = new Int32Array([149, 90, 62, 38]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_54 = new Int32Array([111, 67, 46, 28]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_55 = [tmp_52, tmp_53, tmp_54, new Int32Array([82, 50, 34, 21])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_56 = new Int32Array([255, 154, 106, 65]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_57 = new Int32Array([202, 122, 84, 52]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_58 = new Int32Array([144, 87, 60, 37]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_59 = [tmp_56, tmp_57, tmp_58, new Int32Array([106, 64, 44, 27])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_60 = new Int32Array([322, 195, 134, 82]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_61 = new Int32Array([255, 154, 106, 65]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_62 = new Int32Array([178, 108, 74, 45]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_63 = [tmp_60, tmp_61, tmp_62, new Int32Array([139, 84, 58, 36])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_64 = new Int32Array([370, 224, 154, 95]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_65 = new Int32Array([293, 178, 122, 75]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_66 = new Int32Array([207, 125, 86, 53]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_67 = [tmp_64, tmp_65, tmp_66, new Int32Array([154, 93, 64, 39])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_68 = new Int32Array([461, 279, 192, 118]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_69 = new Int32Array([365, 221, 152, 93]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_70 = new Int32Array([259, 157, 108, 66]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_71 = [tmp_68, tmp_69, tmp_70, new Int32Array([202, 122, 84, 52])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_72 = new Int32Array([552, 335, 230, 141]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_73 = new Int32Array([432, 262, 180, 111]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_74 = new Int32Array([312, 189, 130, 80]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_75 = [tmp_72, tmp_73, tmp_74, new Int32Array([235, 143, 98, 60])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_76 = new Int32Array([652, 395, 271, 167]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_77 = new Int32Array([513, 311, 213, 131]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_78 = new Int32Array([364, 221, 151, 93]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_79 = [tmp_76, tmp_77, tmp_78, new Int32Array([288, 174, 119, 74])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_80 = new Int32Array([772, 468, 321, 198]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_81 = new Int32Array([604, 366, 251, 155]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_82 = new Int32Array([427, 259, 177, 109]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_83 = [tmp_80, tmp_81, tmp_82, new Int32Array([331, 200, 137, 85])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_84 = new Int32Array([883, 535, 367, 226]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_85 = new Int32Array([691, 419, 287, 177]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_86 = new Int32Array([489, 296, 203, 125]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_87 = [tmp_84, tmp_85, tmp_86, new Int32Array([374, 227, 155, 96])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_88 = new Int32Array([1022, 619, 425, 262]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_89 = new Int32Array([796, 483, 331, 204]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_90 = new Int32Array([580, 352, 241, 149]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_91 = [tmp_88, tmp_89, tmp_90, new Int32Array([427, 259, 177, 109])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_92 = new Int32Array([1101, 667, 458, 282]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_93 = new Int32Array([871, 528, 362, 223]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_94 = new Int32Array([621, 376, 258, 159]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_95 = [tmp_92, tmp_93, tmp_94, new Int32Array([468, 283, 194, 120])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_96 = new Int32Array([1250, 758, 520, 320]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_97 = new Int32Array([991, 600, 412, 254]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_98 = new Int32Array([703, 426, 292, 180]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_99 = [tmp_96, tmp_97, tmp_98, new Int32Array([530, 321, 220, 136])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_100 = new Int32Array([1408, 854, 586, 361]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_101 = new Int32Array([1082, 656, 450, 277]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_102 = new Int32Array([775, 470, 322, 198]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_103 = [tmp_100, tmp_101, tmp_102, new Int32Array([602, 365, 250, 154])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_104 = new Int32Array([1548, 938, 644, 397]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_105 = new Int32Array([1212, 734, 504, 310]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_106 = new Int32Array([876, 531, 364, 224]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_107 = [tmp_104, tmp_105, tmp_106, new Int32Array([674, 408, 280, 173])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_108 = new Int32Array([1725, 1046, 718, 442]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_109 = new Int32Array([1346, 816, 560, 345]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_110 = new Int32Array([948, 574, 394, 243]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_111 = [tmp_108, tmp_109, tmp_110, new Int32Array([746, 452, 310, 191])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_112 = new Int32Array([1903, 1153, 792, 488]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_113 = new Int32Array([1500, 909, 624, 384]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_114 = new Int32Array([1063, 644, 442, 272]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_115 = [tmp_112, tmp_113, tmp_114, new Int32Array([813, 493, 338, 208])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_116 = new Int32Array([2061, 1249, 858, 528]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_117 = new Int32Array([1600, 970, 666, 410]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_118 = new Int32Array([1159, 702, 482, 297]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_119 = [tmp_116, tmp_117, tmp_118, new Int32Array([919, 557, 382, 235])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_120 = new Int32Array([2232, 1352, 929, 572]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_121 = new Int32Array([1708, 1035, 711, 438]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_122 = new Int32Array([1224, 742, 509, 314]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_123 = [tmp_120, tmp_121, tmp_122, new Int32Array([969, 587, 403, 248])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_124 = new Int32Array([2409, 1460, 1003, 618]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_125 = new Int32Array([1872, 1134, 779, 480]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_126 = new Int32Array([1358, 823, 565, 348]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_127 = [tmp_124, tmp_125, tmp_126, new Int32Array([1056, 640, 439, 270])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_128 = new Int32Array([2620, 1588, 1091, 672]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_129 = new Int32Array([2059, 1248, 857, 528]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_130 = new Int32Array([1468, 890, 611, 376]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_131 = [tmp_128, tmp_129, tmp_130, new Int32Array([1108, 672, 461, 284])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_132 = new Int32Array([2812, 1704, 1171, 721]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_133 = new Int32Array([2188, 1326, 911, 561]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_134 = new Int32Array([1588, 963, 661, 407]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_135 = [tmp_132, tmp_133, tmp_134, new Int32Array([1228, 744, 511, 315])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_136 = new Int32Array([3057, 1853, 1273, 784]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_137 = new Int32Array([2395, 1451, 997, 614]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_138 = new Int32Array([1718, 1041, 715, 440]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_139 = [tmp_136, tmp_137, tmp_138, new Int32Array([1286, 779, 535, 330])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_140 = new Int32Array([3283, 1990, 1367, 842]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_141 = new Int32Array([2544, 1542, 1059, 652]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_142 = new Int32Array([1804, 1094, 751, 462]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_143 = [tmp_140, tmp_141, tmp_142, new Int32Array([1425, 864, 593, 365])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_144 = new Int32Array([3517, 2132, 1465, 902]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_145 = new Int32Array([2701, 1637, 1125, 692]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_146 = new Int32Array([1933, 1172, 805, 496]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_147 = [tmp_144, tmp_145, tmp_146, new Int32Array([1501, 910, 625, 385])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_148 = new Int32Array([3669, 2223, 1528, 940]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_149 = new Int32Array([2857, 1732, 1190, 732]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_150 = new Int32Array([2085, 1263, 868, 534]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_151 = [tmp_148, tmp_149, tmp_150, new Int32Array([1581, 958, 658, 405])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_152 = new Int32Array([3909, 2369, 1628, 1002]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_153 = new Int32Array([3035, 1839, 1264, 778]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_154 = new Int32Array([2181, 1322, 908, 559]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_155 = [tmp_152, tmp_153, tmp_154, new Int32Array([1677, 1016, 698, 430])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_156 = new Int32Array([4158, 2520, 1732, 1066]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_157 = new Int32Array([3289, 1994, 1370, 843]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_158 = new Int32Array([2358, 1429, 982, 604]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_159 = [tmp_156, tmp_157, tmp_158, new Int32Array([1782, 1080, 742, 457])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_160 = new Int32Array([4417, 2677, 1840, 1132]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_161 = new Int32Array([3486, 2113, 1452, 894]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_162 = new Int32Array([2473, 1499, 1030, 634]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_163 = [tmp_160, tmp_161, tmp_162, new Int32Array([1897, 1150, 790, 486])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_164 = new Int32Array([4686, 2840, 1952, 1201]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_165 = new Int32Array([3693, 2238, 1538, 947]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_166 = new Int32Array([2670, 1618, 1112, 684]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_167 = [tmp_164, tmp_165, tmp_166, new Int32Array([2022, 1226, 842, 518])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_168 = new Int32Array([4965, 3009, 2068, 1273]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_169 = new Int32Array([3909, 2369, 1628, 1002]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_170 = new Int32Array([2805, 1700, 1168, 719]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_171 = [tmp_168, tmp_169, tmp_170, new Int32Array([2157, 1307, 898, 553])];
    // Inline function 'kotlin.intArrayOf' call
    var tmp_172 = new Int32Array([5253, 3183, 2188, 1347]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_173 = new Int32Array([4134, 2506, 1722, 1060]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_174 = new Int32Array([2949, 1787, 1228, 756]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_39.ye_1 = [tmp_43, tmp_47, tmp_51, tmp_55, tmp_59, tmp_63, tmp_67, tmp_71, tmp_75, tmp_79, tmp_83, tmp_87, tmp_91, tmp_95, tmp_99, tmp_103, tmp_107, tmp_111, tmp_115, tmp_119, tmp_123, tmp_127, tmp_131, tmp_135, tmp_139, tmp_143, tmp_147, tmp_151, tmp_155, tmp_159, tmp_163, tmp_167, tmp_171, [tmp_172, tmp_173, tmp_174, new Int32Array([2301, 1394, 958, 590])]];
    this.ze_1 = 1335;
    this.af_1 = 7973;
    this.bf_1 = 21522;
  }
  protoOf(QRUtil).cf = function (typeNumber) {
    return this.xe_1[typeNumber - 1 | 0];
  };
  protoOf(QRUtil).dh = function (typeNumber, dataType, errorCorrectionLevel) {
    return this.ye_1[typeNumber - 1 | 0][errorCorrectionLevel.y_1][dataType.y_1];
  };
  protoOf(QRUtil).eh = function (errorCorrectLength) {
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$0 = new Int32Array([1]);
    var a = new Polynomial(tmp$ret$0);
    var inductionVariable = 0;
    if (inductionVariable < errorCorrectLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = a;
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$1 = new Int32Array([1, QRMath_getInstance().me(i)]);
        a = tmp.ke(new Polynomial(tmp$ret$1));
      }
       while (inductionVariable < errorCorrectLength);
    return a;
  };
  protoOf(QRUtil).lf = function (maskPattern, i, j) {
    var tmp;
    switch (maskPattern.y_1) {
      case 0:
        tmp = ((i + j | 0) % 2 | 0) === 0;
        break;
      case 1:
        tmp = (i % 2 | 0) === 0;
        break;
      case 2:
        tmp = (j % 3 | 0) === 0;
        break;
      case 3:
        tmp = ((i + j | 0) % 3 | 0) === 0;
        break;
      case 4:
        tmp = (((i / 2 | 0) + (j / 3 | 0) | 0) % 2 | 0) === 0;
        break;
      case 5:
        tmp = ((imul(i, j) % 2 | 0) + (imul(i, j) % 3 | 0) | 0) === 0;
        break;
      case 6:
        tmp = (((imul(i, j) % 2 | 0) + (imul(i, j) % 3 | 0) | 0) % 2 | 0) === 0;
        break;
      case 7:
        tmp = (((imul(i, j) % 3 | 0) + ((i + j | 0) % 2 | 0) | 0) % 2 | 0) === 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(QRUtil).fh = function (s) {
    var tmp;
    if (isAlphaNum(this, s)) {
      var tmp_0;
      if (isNumber_0(this, s)) {
        tmp_0 = QRCodeDataType_NUMBERS_getInstance();
      } else {
        tmp_0 = QRCodeDataType_UPPER_ALPHA_NUM_getInstance();
      }
      tmp = tmp_0;
    } else {
      tmp = QRCodeDataType_DEFAULT_getInstance();
    }
    return tmp;
  };
  protoOf(QRUtil).hf = function (data) {
    var d = data << 10;
    while ((getBCHDigit(this, d) - getBCHDigit(this, 1335) | 0) >= 0) {
      d = d ^ 1335 << (getBCHDigit(this, d) - getBCHDigit(this, 1335) | 0);
    }
    return (data << 10 | d) ^ 21522;
  };
  protoOf(QRUtil).jf = function (data) {
    var d = data << 12;
    while ((getBCHDigit(this, d) - getBCHDigit(this, 7973) | 0) >= 0) {
      d = d ^ 7973 << (getBCHDigit(this, d) - getBCHDigit(this, 7973) | 0);
    }
    return data << 12 | d;
  };
  var QRUtil_instance;
  function QRUtil_getInstance() {
    if (QRUtil_instance == null)
      new QRUtil();
    return QRUtil_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    var tmp_0 = new Int32Array([1, 26, 19]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_1 = new Int32Array([1, 26, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_2 = new Int32Array([1, 26, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_3 = new Int32Array([1, 26, 9]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_4 = new Int32Array([1, 44, 34]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_5 = new Int32Array([1, 44, 28]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_6 = new Int32Array([1, 44, 22]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_7 = new Int32Array([1, 44, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_8 = new Int32Array([1, 70, 55]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_9 = new Int32Array([1, 70, 44]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_10 = new Int32Array([2, 35, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_11 = new Int32Array([2, 35, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_12 = new Int32Array([1, 100, 80]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_13 = new Int32Array([2, 50, 32]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_14 = new Int32Array([2, 50, 24]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_15 = new Int32Array([4, 25, 9]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_16 = new Int32Array([1, 134, 108]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_17 = new Int32Array([2, 67, 43]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_18 = new Int32Array([2, 33, 15, 2, 34, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_19 = new Int32Array([2, 33, 11, 2, 34, 12]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_20 = new Int32Array([2, 86, 68]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_21 = new Int32Array([4, 43, 27]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_22 = new Int32Array([4, 43, 19]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_23 = new Int32Array([4, 43, 15]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_24 = new Int32Array([2, 98, 78]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_25 = new Int32Array([4, 49, 31]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_26 = new Int32Array([2, 32, 14, 4, 33, 15]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_27 = new Int32Array([4, 39, 13, 1, 40, 14]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_28 = new Int32Array([2, 121, 97]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_29 = new Int32Array([2, 60, 38, 2, 61, 39]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_30 = new Int32Array([4, 40, 18, 2, 41, 19]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_31 = new Int32Array([4, 40, 14, 2, 41, 15]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_32 = new Int32Array([2, 146, 116]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_33 = new Int32Array([3, 58, 36, 2, 59, 37]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_34 = new Int32Array([4, 36, 16, 4, 37, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_35 = new Int32Array([4, 36, 12, 4, 37, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_36 = new Int32Array([2, 86, 68, 2, 87, 69]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_37 = new Int32Array([4, 69, 43, 1, 70, 44]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_38 = new Int32Array([6, 43, 19, 2, 44, 20]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_39 = new Int32Array([6, 43, 15, 2, 44, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_40 = new Int32Array([4, 101, 81]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_41 = new Int32Array([1, 80, 50, 4, 81, 51]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_42 = new Int32Array([4, 50, 22, 4, 51, 23]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_43 = new Int32Array([3, 36, 12, 8, 37, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_44 = new Int32Array([2, 116, 92, 2, 117, 93]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_45 = new Int32Array([6, 58, 36, 2, 59, 37]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_46 = new Int32Array([4, 46, 20, 6, 47, 21]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_47 = new Int32Array([7, 42, 14, 4, 43, 15]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_48 = new Int32Array([4, 133, 107]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_49 = new Int32Array([8, 59, 37, 1, 60, 38]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_50 = new Int32Array([8, 44, 20, 4, 45, 21]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_51 = new Int32Array([12, 33, 11, 4, 34, 12]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_52 = new Int32Array([3, 145, 115, 1, 146, 116]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_53 = new Int32Array([4, 64, 40, 5, 65, 41]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_54 = new Int32Array([11, 36, 16, 5, 37, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_55 = new Int32Array([11, 36, 12, 5, 37, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_56 = new Int32Array([5, 109, 87, 1, 110, 88]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_57 = new Int32Array([5, 65, 41, 5, 66, 42]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_58 = new Int32Array([5, 54, 24, 7, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_59 = new Int32Array([11, 36, 12, 7, 37, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_60 = new Int32Array([5, 122, 98, 1, 123, 99]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_61 = new Int32Array([7, 73, 45, 3, 74, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_62 = new Int32Array([15, 43, 19, 2, 44, 20]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_63 = new Int32Array([3, 45, 15, 13, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_64 = new Int32Array([1, 135, 107, 5, 136, 108]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_65 = new Int32Array([10, 74, 46, 1, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_66 = new Int32Array([1, 50, 22, 15, 51, 23]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_67 = new Int32Array([2, 42, 14, 17, 43, 15]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_68 = new Int32Array([5, 150, 120, 1, 151, 121]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_69 = new Int32Array([9, 69, 43, 4, 70, 44]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_70 = new Int32Array([17, 50, 22, 1, 51, 23]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_71 = new Int32Array([2, 42, 14, 19, 43, 15]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_72 = new Int32Array([3, 141, 113, 4, 142, 114]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_73 = new Int32Array([3, 70, 44, 11, 71, 45]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_74 = new Int32Array([17, 47, 21, 4, 48, 22]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_75 = new Int32Array([9, 39, 13, 16, 40, 14]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_76 = new Int32Array([3, 135, 107, 5, 136, 108]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_77 = new Int32Array([3, 67, 41, 13, 68, 42]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_78 = new Int32Array([15, 54, 24, 5, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_79 = new Int32Array([15, 43, 15, 10, 44, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_80 = new Int32Array([4, 144, 116, 4, 145, 117]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_81 = new Int32Array([17, 68, 42]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_82 = new Int32Array([17, 50, 22, 6, 51, 23]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_83 = new Int32Array([19, 46, 16, 6, 47, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_84 = new Int32Array([2, 139, 111, 7, 140, 112]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_85 = new Int32Array([17, 74, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_86 = new Int32Array([7, 54, 24, 16, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_87 = new Int32Array([34, 37, 13]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_88 = new Int32Array([4, 151, 121, 5, 152, 122]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_89 = new Int32Array([4, 75, 47, 14, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_90 = new Int32Array([11, 54, 24, 14, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_91 = new Int32Array([16, 45, 15, 14, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_92 = new Int32Array([6, 147, 117, 4, 148, 118]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_93 = new Int32Array([6, 73, 45, 14, 74, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_94 = new Int32Array([11, 54, 24, 16, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_95 = new Int32Array([30, 46, 16, 2, 47, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_96 = new Int32Array([8, 132, 106, 4, 133, 107]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_97 = new Int32Array([8, 75, 47, 13, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_98 = new Int32Array([7, 54, 24, 22, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_99 = new Int32Array([22, 45, 15, 13, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_100 = new Int32Array([10, 142, 114, 2, 143, 115]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_101 = new Int32Array([19, 74, 46, 4, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_102 = new Int32Array([28, 50, 22, 6, 51, 23]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_103 = new Int32Array([33, 46, 16, 4, 47, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_104 = new Int32Array([8, 152, 122, 4, 153, 123]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_105 = new Int32Array([22, 73, 45, 3, 74, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_106 = new Int32Array([8, 53, 23, 26, 54, 24]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_107 = new Int32Array([12, 45, 15, 28, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_108 = new Int32Array([3, 147, 117, 10, 148, 118]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_109 = new Int32Array([3, 73, 45, 23, 74, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_110 = new Int32Array([4, 54, 24, 31, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_111 = new Int32Array([11, 45, 15, 31, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_112 = new Int32Array([7, 146, 116, 7, 147, 117]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_113 = new Int32Array([21, 73, 45, 7, 74, 46]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_114 = new Int32Array([1, 53, 23, 37, 54, 24]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_115 = new Int32Array([19, 45, 15, 26, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_116 = new Int32Array([5, 145, 115, 10, 146, 116]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_117 = new Int32Array([19, 75, 47, 10, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_118 = new Int32Array([15, 54, 24, 25, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_119 = new Int32Array([23, 45, 15, 25, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_120 = new Int32Array([13, 145, 115, 3, 146, 116]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_121 = new Int32Array([2, 74, 46, 29, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_122 = new Int32Array([42, 54, 24, 1, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_123 = new Int32Array([23, 45, 15, 28, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_124 = new Int32Array([17, 145, 115]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_125 = new Int32Array([10, 74, 46, 23, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_126 = new Int32Array([10, 54, 24, 35, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_127 = new Int32Array([19, 45, 15, 35, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_128 = new Int32Array([17, 145, 115, 1, 146, 116]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_129 = new Int32Array([14, 74, 46, 21, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_130 = new Int32Array([29, 54, 24, 19, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_131 = new Int32Array([11, 45, 15, 46, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_132 = new Int32Array([13, 145, 115, 6, 146, 116]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_133 = new Int32Array([14, 74, 46, 23, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_134 = new Int32Array([44, 54, 24, 7, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_135 = new Int32Array([59, 46, 16, 1, 47, 17]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_136 = new Int32Array([12, 151, 121, 7, 152, 122]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_137 = new Int32Array([12, 75, 47, 26, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_138 = new Int32Array([39, 54, 24, 14, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_139 = new Int32Array([22, 45, 15, 41, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_140 = new Int32Array([6, 151, 121, 14, 152, 122]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_141 = new Int32Array([6, 75, 47, 34, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_142 = new Int32Array([46, 54, 24, 10, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_143 = new Int32Array([2, 45, 15, 64, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_144 = new Int32Array([17, 152, 122, 4, 153, 123]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_145 = new Int32Array([29, 74, 46, 14, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_146 = new Int32Array([49, 54, 24, 10, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_147 = new Int32Array([24, 45, 15, 46, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_148 = new Int32Array([4, 152, 122, 18, 153, 123]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_149 = new Int32Array([13, 74, 46, 32, 75, 47]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_150 = new Int32Array([48, 54, 24, 14, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_151 = new Int32Array([42, 45, 15, 32, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_152 = new Int32Array([20, 147, 117, 4, 148, 118]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_153 = new Int32Array([40, 75, 47, 7, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_154 = new Int32Array([43, 54, 24, 22, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_155 = new Int32Array([10, 45, 15, 67, 46, 16]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_156 = new Int32Array([19, 148, 118, 6, 149, 119]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_157 = new Int32Array([18, 75, 47, 31, 76, 48]);
    // Inline function 'kotlin.intArrayOf' call
    var tmp_158 = new Int32Array([34, 54, 24, 34, 55, 25]);
    // Inline function 'kotlin.intArrayOf' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gh_1 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, tmp_39, tmp_40, tmp_41, tmp_42, tmp_43, tmp_44, tmp_45, tmp_46, tmp_47, tmp_48, tmp_49, tmp_50, tmp_51, tmp_52, tmp_53, tmp_54, tmp_55, tmp_56, tmp_57, tmp_58, tmp_59, tmp_60, tmp_61, tmp_62, tmp_63, tmp_64, tmp_65, tmp_66, tmp_67, tmp_68, tmp_69, tmp_70, tmp_71, tmp_72, tmp_73, tmp_74, tmp_75, tmp_76, tmp_77, tmp_78, tmp_79, tmp_80, tmp_81, tmp_82, tmp_83, tmp_84, tmp_85, tmp_86, tmp_87, tmp_88, tmp_89, tmp_90, tmp_91, tmp_92, tmp_93, tmp_94, tmp_95, tmp_96, tmp_97, tmp_98, tmp_99, tmp_100, tmp_101, tmp_102, tmp_103, tmp_104, tmp_105, tmp_106, tmp_107, tmp_108, tmp_109, tmp_110, tmp_111, tmp_112, tmp_113, tmp_114, tmp_115, tmp_116, tmp_117, tmp_118, tmp_119, tmp_120, tmp_121, tmp_122, tmp_123, tmp_124, tmp_125, tmp_126, tmp_127, tmp_128, tmp_129, tmp_130, tmp_131, tmp_132, tmp_133, tmp_134, tmp_135, tmp_136, tmp_137, tmp_138, tmp_139, tmp_140, tmp_141, tmp_142, tmp_143, tmp_144, tmp_145, tmp_146, tmp_147, tmp_148, tmp_149, tmp_150, tmp_151, tmp_152, tmp_153, tmp_154, tmp_155, tmp_156, tmp_157, tmp_158, new Int32Array([20, 45, 15, 61, 46, 16])];
  }
  protoOf(Companion_8).hh = function (typeNumber, errorCorrectionLevel) {
    // Inline function 'kotlin.let' call
    var rsBlock = this.gh_1[imul(typeNumber - 1 | 0, 4) + errorCorrectionLevel.y_1 | 0];
    var tmp;
    if (rsBlock.length === 3) {
      var block = new RSBlock(rsBlock[1], rsBlock[2]);
      var tmp_0 = 0;
      var tmp_1 = rsBlock[0];
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_2 = Array(tmp_1);
      while (tmp_0 < tmp_1) {
        tmp_2[tmp_0] = block;
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp = tmp_2;
    } else {
      var blocksSize = rsBlock[0] + rsBlock[3] | 0;
      var firstBlock = new RSBlock(rsBlock[1], rsBlock[2]);
      var secondBlock = new RSBlock(rsBlock[4], rsBlock[5]);
      var tmp_3 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_4 = Array(blocksSize);
      while (tmp_3 < blocksSize) {
        var tmp_5 = tmp_3;
        var tmp_6;
        if (tmp_5 < rsBlock[0]) {
          tmp_6 = firstBlock;
        } else {
          tmp_6 = secondBlock;
        }
        tmp_4[tmp_5] = tmp_6;
        tmp_3 = tmp_3 + 1 | 0;
      }
      tmp = tmp_4;
    }
    return tmp;
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function RSBlock(totalCount, dataCount) {
    Companion_getInstance_8();
    this.ih_1 = totalCount;
    this.jh_1 = dataCount;
  }
  protoOf(RSBlock).toString = function () {
    return 'RSBlock(totalCount=' + this.ih_1 + ', dataCount=' + this.jh_1 + ')';
  };
  protoOf(RSBlock).hashCode = function () {
    var result = this.ih_1;
    result = imul(result, 31) + this.jh_1 | 0;
    return result;
  };
  protoOf(RSBlock).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RSBlock))
      return false;
    var tmp0_other_with_cast = other instanceof RSBlock ? other : THROW_CCE();
    if (!(this.ih_1 === tmp0_other_with_cast.ih_1))
      return false;
    if (!(this.jh_1 === tmp0_other_with_cast.jh_1))
      return false;
    return true;
  };
  var ErrorCorrectionLevel_LOW_instance;
  var ErrorCorrectionLevel_MEDIUM_instance;
  var ErrorCorrectionLevel_HIGH_instance;
  var ErrorCorrectionLevel_VERY_HIGH_instance;
  function values_1() {
    return [ErrorCorrectionLevel_LOW_getInstance(), ErrorCorrectionLevel_MEDIUM_getInstance(), ErrorCorrectionLevel_HIGH_getInstance(), ErrorCorrectionLevel_VERY_HIGH_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'LOW':
        return ErrorCorrectionLevel_LOW_getInstance();
      case 'MEDIUM':
        return ErrorCorrectionLevel_MEDIUM_getInstance();
      case 'HIGH':
        return ErrorCorrectionLevel_HIGH_getInstance();
      case 'VERY_HIGH':
        return ErrorCorrectionLevel_VERY_HIGH_getInstance();
      default:
        ErrorCorrectionLevel_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var ErrorCorrectionLevel_entriesInitialized;
  function ErrorCorrectionLevel_initEntries() {
    if (ErrorCorrectionLevel_entriesInitialized)
      return Unit_instance;
    ErrorCorrectionLevel_entriesInitialized = true;
    ErrorCorrectionLevel_LOW_instance = new ErrorCorrectionLevel('LOW', 0, 1, 21);
    ErrorCorrectionLevel_MEDIUM_instance = new ErrorCorrectionLevel('MEDIUM', 1, 0, 25);
    ErrorCorrectionLevel_HIGH_instance = new ErrorCorrectionLevel('HIGH', 2, 3, 30);
    ErrorCorrectionLevel_VERY_HIGH_instance = new ErrorCorrectionLevel('VERY_HIGH', 3, 2, 34);
  }
  function ErrorCorrectionLevel(name, ordinal, value, maxTypeNum) {
    Enum.call(this, name, ordinal);
    this.value = value;
    this.maxTypeNum = maxTypeNum;
  }
  protoOf(ErrorCorrectionLevel).v = function () {
    return this.value;
  };
  protoOf(ErrorCorrectionLevel).kh = function () {
    return this.maxTypeNum;
  };
  var MaskPattern_PATTERN000_instance;
  var MaskPattern_PATTERN001_instance;
  var MaskPattern_PATTERN010_instance;
  var MaskPattern_PATTERN011_instance;
  var MaskPattern_PATTERN100_instance;
  var MaskPattern_PATTERN101_instance;
  var MaskPattern_PATTERN110_instance;
  var MaskPattern_PATTERN111_instance;
  function values_2() {
    return [MaskPattern_PATTERN000_getInstance(), MaskPattern_PATTERN001_getInstance(), MaskPattern_PATTERN010_getInstance(), MaskPattern_PATTERN011_getInstance(), MaskPattern_PATTERN100_getInstance(), MaskPattern_PATTERN101_getInstance(), MaskPattern_PATTERN110_getInstance(), MaskPattern_PATTERN111_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'PATTERN000':
        return MaskPattern_PATTERN000_getInstance();
      case 'PATTERN001':
        return MaskPattern_PATTERN001_getInstance();
      case 'PATTERN010':
        return MaskPattern_PATTERN010_getInstance();
      case 'PATTERN011':
        return MaskPattern_PATTERN011_getInstance();
      case 'PATTERN100':
        return MaskPattern_PATTERN100_getInstance();
      case 'PATTERN101':
        return MaskPattern_PATTERN101_getInstance();
      case 'PATTERN110':
        return MaskPattern_PATTERN110_getInstance();
      case 'PATTERN111':
        return MaskPattern_PATTERN111_getInstance();
      default:
        MaskPattern_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var MaskPattern_entriesInitialized;
  function MaskPattern_initEntries() {
    if (MaskPattern_entriesInitialized)
      return Unit_instance;
    MaskPattern_entriesInitialized = true;
    MaskPattern_PATTERN000_instance = new MaskPattern('PATTERN000', 0);
    MaskPattern_PATTERN001_instance = new MaskPattern('PATTERN001', 1);
    MaskPattern_PATTERN010_instance = new MaskPattern('PATTERN010', 2);
    MaskPattern_PATTERN011_instance = new MaskPattern('PATTERN011', 3);
    MaskPattern_PATTERN100_instance = new MaskPattern('PATTERN100', 4);
    MaskPattern_PATTERN101_instance = new MaskPattern('PATTERN101', 5);
    MaskPattern_PATTERN110_instance = new MaskPattern('PATTERN110', 6);
    MaskPattern_PATTERN111_instance = new MaskPattern('PATTERN111', 7);
  }
  function MaskPattern(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var QRCodeDataType_NUMBERS_instance;
  var QRCodeDataType_UPPER_ALPHA_NUM_instance;
  var QRCodeDataType_DEFAULT_instance;
  function values_3() {
    return [QRCodeDataType_NUMBERS_getInstance(), QRCodeDataType_UPPER_ALPHA_NUM_getInstance(), QRCodeDataType_DEFAULT_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'NUMBERS':
        return QRCodeDataType_NUMBERS_getInstance();
      case 'UPPER_ALPHA_NUM':
        return QRCodeDataType_UPPER_ALPHA_NUM_getInstance();
      case 'DEFAULT':
        return QRCodeDataType_DEFAULT_getInstance();
      default:
        QRCodeDataType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var QRCodeDataType_entriesInitialized;
  function QRCodeDataType_initEntries() {
    if (QRCodeDataType_entriesInitialized)
      return Unit_instance;
    QRCodeDataType_entriesInitialized = true;
    QRCodeDataType_NUMBERS_instance = new QRCodeDataType('NUMBERS', 0, 1);
    QRCodeDataType_UPPER_ALPHA_NUM_instance = new QRCodeDataType('UPPER_ALPHA_NUM', 1, 2);
    QRCodeDataType_DEFAULT_instance = new QRCodeDataType('DEFAULT', 2, 4);
  }
  function QRCodeDataType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value = value;
  }
  protoOf(QRCodeDataType).v = function () {
    return this.value;
  };
  function ErrorCorrectionLevel_LOW_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_LOW_instance;
  }
  function ErrorCorrectionLevel_MEDIUM_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_MEDIUM_instance;
  }
  function ErrorCorrectionLevel_HIGH_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_HIGH_instance;
  }
  function ErrorCorrectionLevel_VERY_HIGH_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_VERY_HIGH_instance;
  }
  function MaskPattern_PATTERN000_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN000_instance;
  }
  function MaskPattern_PATTERN001_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN001_instance;
  }
  function MaskPattern_PATTERN010_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN010_instance;
  }
  function MaskPattern_PATTERN011_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN011_instance;
  }
  function MaskPattern_PATTERN100_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN100_instance;
  }
  function MaskPattern_PATTERN101_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN101_instance;
  }
  function MaskPattern_PATTERN110_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN110_instance;
  }
  function MaskPattern_PATTERN111_getInstance() {
    MaskPattern_initEntries();
    return MaskPattern_PATTERN111_instance;
  }
  function QRCodeDataType_NUMBERS_getInstance() {
    QRCodeDataType_initEntries();
    return QRCodeDataType_NUMBERS_instance;
  }
  function QRCodeDataType_UPPER_ALPHA_NUM_getInstance() {
    QRCodeDataType_initEntries();
    return QRCodeDataType_UPPER_ALPHA_NUM_instance;
  }
  function QRCodeDataType_DEFAULT_getInstance() {
    QRCodeDataType_initEntries();
    return QRCodeDataType_DEFAULT_instance;
  }
  function Companion_9() {
    this.DEFAULT_CELL_SIZE = 25;
    this.ph_1 = 236;
    this.qh_1 = 17;
    this.MAXIMUM_INFO_DENSITY = 40;
  }
  protoOf(Companion_9).rh = function () {
    return this.DEFAULT_CELL_SIZE;
  };
  protoOf(Companion_9).sh = function () {
    return this.MAXIMUM_INFO_DENSITY;
  };
  protoOf(Companion_9).th = function (data, errorCorrectionLevel, dataType) {
    var tmp;
    switch (dataType.y_1) {
      case 0:
        tmp = new QRNumber(data);
        break;
      case 1:
        tmp = new QRAlphaNum(data);
        break;
      case 2:
        tmp = new QR8BitByte(data);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var qrCodeData = tmp;
    var dataLength = qrCodeData.tg();
    var inductionVariable = 1;
    var last = errorCorrectionLevel.maxTypeNum;
    if (inductionVariable < last)
      do {
        var typeNum = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (dataLength <= QRUtil_getInstance().dh(typeNum, dataType, errorCorrectionLevel)) {
          return typeNum;
        }
      }
       while (inductionVariable < last);
    return 40;
  };
  protoOf(Companion_9).infoDensityForDataAndECL = function (data, errorCorrectionLevel, dataType, $super) {
    dataType = dataType === VOID ? QRUtil_getInstance().fh(data) : dataType;
    return $super === VOID ? this.th(data, errorCorrectionLevel, dataType) : $super.th.call(this, data, errorCorrectionLevel, dataType);
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function createData($this, type) {
    var rsBlocks = Companion_getInstance_8().hh(type, $this.vh_1);
    var buffer = new BitBuffer();
    buffer.he($this.xh_1.rg_1.value, 4);
    buffer.he($this.xh_1.tg(), $this.xh_1.vg(type));
    $this.xh_1.ug(buffer);
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var inductionVariable = 0;
    var last = rsBlocks.length;
    while (inductionVariable < last) {
      var element = rsBlocks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = sum;
      sum = tmp + element.jh_1 | 0;
    }
    var tmp$ret$1 = sum;
    var totalDataCount = imul(tmp$ret$1, 8);
    if (buffer.fe_1 > totalDataCount) {
      var errorMessage = 'Insufficient Information Density Parameter: ' + type + ' [neededBits=' + buffer.fe_1 + ', maximumBitsForDensityLevel=' + totalDataCount + '] - Try increasing the Information Density parameter value or use 0 (zero) to automatically compute the least amount needed to fit the QRCode data being encoded.';
      throw new InsufficientInformationDensityException(errorMessage);
    }
    if ((buffer.fe_1 + 4 | 0) <= totalDataCount) {
      buffer.he(0, 4);
    }
    while (!((buffer.fe_1 % 8 | 0) === 0)) {
      buffer.putBit(false);
    }
    $l$loop_0: while (buffer.fe_1 < totalDataCount) {
      buffer.he(236, 8);
      if (buffer.fe_1 >= totalDataCount) {
        break $l$loop_0;
      }
      buffer.he(17, 8);
    }
    return createBytes($this, buffer, rsBlocks);
  }
  function createBytes($this, buffer, rsBlocks) {
    var offset = {_v: 0};
    var maxDcCount = 0;
    var maxEcCount = 0;
    var totalCodeCount = 0;
    var tmp = 0;
    var tmp_0 = rsBlocks.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new Int32Array(0);
      tmp = tmp + 1 | 0;
    }
    var dcData = tmp_1;
    var tmp_2 = 0;
    var tmp_3 = rsBlocks.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_4 = Array(tmp_3);
    while (tmp_2 < tmp_3) {
      tmp_4[tmp_2] = new Int32Array(0);
      tmp_2 = tmp_2 + 1 | 0;
    }
    var ecData = tmp_4;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    var last = rsBlocks.length;
    while (inductionVariable < last) {
      var item = rsBlocks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var dcCount = item.jh_1;
      var ecCount = item.ih_1 - dcCount | 0;
      totalCodeCount = totalCodeCount + item.ih_1 | 0;
      maxDcCount = coerceAtLeast(maxDcCount, dcCount);
      maxEcCount = coerceAtLeast(maxEcCount, ecCount);
      var tmp_5 = 0;
      var tmp_6 = new Int32Array(dcCount);
      while (tmp_5 < dcCount) {
        var tmp_7 = tmp_5;
        tmp_6[tmp_7] = 255 & buffer.ee_1[tmp_7 + offset._v | 0];
        tmp_5 = tmp_5 + 1 | 0;
      }
      dcData[_unary__edvuaz] = tmp_6;
      offset._v = offset._v + dcCount | 0;
      var rsPoly = QRUtil_getInstance().eh(ecCount);
      var rawPoly = new Polynomial(dcData[_unary__edvuaz], rsPoly.je() - 1 | 0);
      var modPoly = rawPoly.ne(rsPoly);
      var ecDataSize = rsPoly.je() - 1 | 0;
      var tmp_8 = 0;
      var tmp_9 = new Int32Array(ecDataSize);
      while (tmp_8 < ecDataSize) {
        var tmp_10 = tmp_8;
        var modIndex = (tmp_10 + modPoly.je() | 0) - ecDataSize | 0;
        tmp_9[tmp_10] = modIndex >= 0 ? modPoly.i(modIndex) : 0;
        tmp_8 = tmp_8 + 1 | 0;
      }
      ecData[_unary__edvuaz] = tmp_9;
    }
    var index_0 = 0;
    var data = new Int32Array(totalCodeCount);
    var inductionVariable_0 = 0;
    var last_0 = maxDcCount;
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var inductionVariable_1 = 0;
        var last_1 = rsBlocks.length - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var r = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (i < dcData[r].length) {
              var _unary__edvuaz_0 = index_0;
              index_0 = _unary__edvuaz_0 + 1 | 0;
              data[_unary__edvuaz_0] = dcData[r][i];
            }
          }
           while (inductionVariable_1 <= last_1);
      }
       while (inductionVariable_0 < last_0);
    var inductionVariable_2 = 0;
    var last_2 = maxEcCount;
    if (inductionVariable_2 < last_2)
      do {
        var i_0 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var inductionVariable_3 = 0;
        var last_3 = rsBlocks.length - 1 | 0;
        if (inductionVariable_3 <= last_3)
          do {
            var r_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            if (i_0 < ecData[r_0].length) {
              var _unary__edvuaz_1 = index_0;
              index_0 = _unary__edvuaz_1 + 1 | 0;
              data[_unary__edvuaz_1] = ecData[r_0][i_0];
            }
          }
           while (inductionVariable_3 <= last_3);
      }
       while (inductionVariable_2 < last_2);
    return data;
  }
  function QRCodeProcessor$render$lambda($cellSize, $darkColor, $brightColor) {
    return function (x, y, cellData, graphics) {
      var tmp;
      if (cellData.dark) {
        graphics.fillRect(x, y, $cellSize, $cellSize, $darkColor);
        tmp = Unit_instance;
      } else {
        graphics.fillRect(x, y, $cellSize, $cellSize, $brightColor);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function QRCodeProcessor(data, errorCorrectionLevel, dataType, graphicsFactory) {
    errorCorrectionLevel = errorCorrectionLevel === VOID ? ErrorCorrectionLevel_MEDIUM_getInstance() : errorCorrectionLevel;
    dataType = dataType === VOID ? QRUtil_getInstance().fh(data) : dataType;
    graphicsFactory = graphicsFactory === VOID ? new QRCodeGraphicsFactory() : graphicsFactory;
    this.uh_1 = data;
    this.vh_1 = errorCorrectionLevel;
    this.wh_1 = dataType;
    this.graphicsFactory = graphicsFactory;
    var tmp = this;
    var tmp_0;
    switch (this.wh_1.y_1) {
      case 0:
        tmp_0 = new QRNumber(this.uh_1);
        break;
      case 1:
        tmp_0 = new QRAlphaNum(this.uh_1);
        break;
      case 2:
        tmp_0 = new QR8BitByte(this.uh_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.xh_1 = tmp_0;
  }
  protoOf(QRCodeProcessor).j6 = function () {
    return this.graphicsFactory;
  };
  protoOf(QRCodeProcessor).yh = function (cellSize, rawData) {
    return this.computeImageSize(cellSize, rawData.length);
  };
  protoOf(QRCodeProcessor).computeImageSizeFromRawData = function (cellSize, rawData, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    rawData = rawData === VOID ? this.encode() : rawData;
    return $super === VOID ? this.yh(cellSize, rawData) : $super.yh.call(this, cellSize, rawData);
  };
  protoOf(QRCodeProcessor).zh = function (cellSize, size) {
    return imul(size, cellSize);
  };
  protoOf(QRCodeProcessor).computeImageSize = function (cellSize, size, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    return $super === VOID ? this.zh(cellSize, size) : $super.zh.call(this, cellSize, size);
  };
  protoOf(QRCodeProcessor).ai = function (cellSize, brightColor, darkColor) {
    return this.renderComputed(cellSize, this.encode(), VOID, brightColor, darkColor);
  };
  protoOf(QRCodeProcessor).render = function (cellSize, brightColor, darkColor, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    brightColor = brightColor === VOID ? -1 : brightColor;
    darkColor = darkColor === VOID ? -16777216 : darkColor;
    return $super === VOID ? this.ai(cellSize, brightColor, darkColor) : $super.ai.call(this, cellSize, brightColor, darkColor);
  };
  protoOf(QRCodeProcessor).bi = function (cellSize, rawData, qrCodeGraphics, brightColor, darkColor) {
    return this.renderShaded(cellSize, rawData, qrCodeGraphics, QRCodeProcessor$render$lambda(cellSize, darkColor, brightColor));
  };
  protoOf(QRCodeProcessor).renderComputed = function (cellSize, rawData, qrCodeGraphics, brightColor, darkColor, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    rawData = rawData === VOID ? this.encode() : rawData;
    qrCodeGraphics = qrCodeGraphics === VOID ? this.graphicsFactory.newGraphicsSquare(this.computeImageSizeFromRawData(cellSize, rawData)) : qrCodeGraphics;
    brightColor = brightColor === VOID ? -1 : brightColor;
    darkColor = darkColor === VOID ? -16777216 : darkColor;
    return $super === VOID ? this.bi(cellSize, rawData, qrCodeGraphics, brightColor, darkColor) : $super.bi.call(this, cellSize, rawData, qrCodeGraphics, brightColor, darkColor);
  };
  protoOf(QRCodeProcessor).ci = function (cellSize, rawData, qrCodeGraphics, renderer) {
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = rawData.length;
    while (inductionVariable < last) {
      var element = rawData[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable_0 = 0;
      var last_0 = element.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = element[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!element_0.rendered) {
          renderer(element_0.absoluteX(cellSize), element_0.absoluteY(cellSize), element_0, qrCodeGraphics);
          element_0.rendered = true;
        }
      }
    }
    return qrCodeGraphics;
  };
  protoOf(QRCodeProcessor).renderShaded = function (cellSize, rawData, qrCodeGraphics, renderer, $super) {
    cellSize = cellSize === VOID ? 25 : cellSize;
    rawData = rawData === VOID ? this.encode() : rawData;
    qrCodeGraphics = qrCodeGraphics === VOID ? this.graphicsFactory.newGraphicsSquare(this.computeImageSizeFromRawData(cellSize, rawData)) : qrCodeGraphics;
    return $super === VOID ? this.ci(cellSize, rawData, qrCodeGraphics, renderer) : $super.ci.call(this, cellSize, rawData, qrCodeGraphics, renderer);
  };
  protoOf(QRCodeProcessor).di = function (type, maskPattern) {
    var moduleCount = imul(type, 4) + 17 | 0;
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(moduleCount);
    while (tmp < moduleCount) {
      var tmp_1 = tmp;
      var tmp_2 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_3 = Array(moduleCount);
      while (tmp_2 < moduleCount) {
        tmp_3[tmp_2] = null;
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_0[tmp_1] = tmp_3;
      tmp = tmp + 1 | 0;
    }
    var modules = tmp_0;
    QRCodeSetup_instance.re(modules);
    QRCodeSetup_instance.te(modules);
    QRCodeSetup_instance.ve(modules);
    QRCodeSetup_instance.we(type, modules);
    QRCodeSetup_instance.df(moduleCount, modules);
    QRCodeSetup_instance.ef(this.vh_1, maskPattern, moduleCount, modules);
    if (type >= 7) {
      QRCodeSetup_instance.if(type, moduleCount, modules);
    }
    var data = createData(this, type);
    QRCodeSetup_instance.kf(data, maskPattern, moduleCount, modules);
    var tmp_4 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_5 = Array(moduleCount);
    while (tmp_4 < moduleCount) {
      var tmp_6 = tmp_4;
      var tmp_7 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_8 = Array(moduleCount);
      while (tmp_7 < moduleCount) {
        var tmp_9 = tmp_7;
        var tmp0_elvis_lhs = modules[tmp_6][tmp_9];
        tmp_8[tmp_9] = tmp0_elvis_lhs == null ? new QRCodeSquare(false, tmp_6, tmp_9, moduleCount) : tmp0_elvis_lhs;
        tmp_7 = tmp_7 + 1 | 0;
      }
      tmp_5[tmp_6] = tmp_8;
      tmp_4 = tmp_4 + 1 | 0;
    }
    return tmp_5;
  };
  protoOf(QRCodeProcessor).encode = function (type, maskPattern, $super) {
    type = type === VOID ? Companion_instance_9.infoDensityForDataAndECL(this.uh_1, this.vh_1) : type;
    maskPattern = maskPattern === VOID ? MaskPattern_PATTERN000_getInstance() : maskPattern;
    return $super === VOID ? this.di(type, maskPattern) : $super.di.call(this, type, maskPattern);
  };
  protoOf(QRCodeProcessor).toString = function () {
    return 'QRCode(data=' + this.uh_1 + (', errorCorrectionLevel=' + this.vh_1.toString()) + (', dataType=' + this.wh_1.toString()) + (', qrCodeData=' + getKClassFromExpression(this.xh_1).s3()) + ')';
  };
  function QRCodeGraphicsFactory() {
  }
  protoOf(QRCodeGraphicsFactory).newGraphicsSquare = function (size) {
    return this.newGraphics(size, size);
  };
  protoOf(QRCodeGraphicsFactory).newGraphics = function (width, height) {
    return new QRCodeGraphics(width, height);
  };
  function Companion_10() {
  }
  protoOf(Companion_10).defaultRadius = function (squareSize) {
    return roundToInt(squareSize / 1.75);
  };
  protoOf(Companion_10).defaultInnerSpace = function (squareSize) {
    return roundToInt(squareSize * 0.05);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function CircleShapeFunction(squareSize, innerSpace) {
    squareSize = squareSize === VOID ? 25 : squareSize;
    innerSpace = innerSpace === VOID ? Companion_instance_10.defaultInnerSpace(squareSize) : innerSpace;
    RoundSquaresShapeFunction.call(this, squareSize, squareSize, innerSpace);
  }
  function drawSquaresLine($this, x, y, amount, skip, color, canvas) {
    var progression = step(until(0, amount), skip);
    var inductionVariable = progression.n_1;
    var last = progression.o_1;
    var step_0 = progression.p_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        $this.fillRect((x + imul($this.squareSize, i) | 0) + $this.ei_1 | 0, y + $this.ei_1 | 0, $this.squareSize - imul($this.ei_1, 2) | 0, $this.squareSize - imul($this.ei_1, 2) | 0, color, canvas);
      }
       while (!(i === last));
  }
  function DefaultShapeFunction(squareSize, innerSpace) {
    squareSize = squareSize === VOID ? 25 : squareSize;
    innerSpace = innerSpace === VOID ? 1 : innerSpace;
    this.innerSpace = innerSpace;
    this.ei_1 = coerceIn(this.innerSpace, numberRangeToNumber(0, squareSize / 2 | 0));
    this.squareSize = squareSize;
  }
  protoOf(DefaultShapeFunction).fi = function () {
    return this.innerSpace;
  };
  protoOf(DefaultShapeFunction).n6 = function () {
    return this.squareSize;
  };
  protoOf(DefaultShapeFunction).resize = function (newSquareSize) {
    var sizeRatio = newSquareSize / this.squareSize;
    this.squareSize = newSquareSize;
    this.ei_1 = coerceIn(numberToInt(this.innerSpace * sizeRatio), numberRangeToNumber(0, newSquareSize / 2 | 0));
  };
  protoOf(DefaultShapeFunction).renderSquare = function (x, y, colorFn, square, canvas, qrCode) {
    var bg = colorFn.bg(square.row, square.col, qrCode, canvas);
    var fg = colorFn.fg(square.row, square.col, qrCode, canvas);
    var color = square.dark ? fg : bg;
    this.fillRect(x + this.ei_1 | 0, y + this.ei_1 | 0, this.squareSize - imul(this.ei_1, 2) | 0, this.squareSize - imul(this.ei_1, 2) | 0, color, canvas);
  };
  protoOf(DefaultShapeFunction).renderControlSquare = function (xOffset, yOffset, colorFn, square, canvas, qrCode) {
    var tmp0_elvis_lhs = square.parent;
    var actualSquare = tmp0_elvis_lhs == null ? square : tmp0_elvis_lhs;
    var bg = colorFn.bg(actualSquare.row, actualSquare.col, qrCode, canvas);
    var fg = colorFn.fg(actualSquare.row, actualSquare.col, qrCode, canvas);
    var size = imul(this.squareSize, actualSquare.rowSize);
    var startX = xOffset + actualSquare.absoluteX(this.squareSize) | 0;
    var startY = yOffset + actualSquare.absoluteY(this.squareSize) | 0;
    if (actualSquare.squareInfo.type.y_1 === 0) {
      canvas.fillRect(startX, startY, size + imul(this.squareSize, 2) | 0, size + imul(this.squareSize, 2) | 0, bg);
      this.drawRect(startX + this.ei_1 | 0, startY + this.ei_1 | 0, size - imul(this.ei_1, 2) | 0, size - imul(this.ei_1, 2) | 0, fg, this.squareSize, canvas);
      this.fillRect(startX + imul(this.squareSize, 2) | 0, startY + imul(this.squareSize, 2) | 0, size - imul(this.squareSize, 4) | 0, size - imul(this.squareSize, 4) | 0, fg, canvas);
    } else {
      canvas.fillRect(startX, startY, size, size, bg);
      drawSquaresLine(this, startX, startY, 5, 1, fg, canvas);
      drawSquaresLine(this, startX, startY + this.squareSize | 0, 5, 4, fg, canvas);
      drawSquaresLine(this, startX, startY + imul(this.squareSize, 2) | 0, 5, 2, fg, canvas);
      drawSquaresLine(this, startX, startY + imul(this.squareSize, 3) | 0, 5, 4, fg, canvas);
      drawSquaresLine(this, startX, startY + imul(this.squareSize, 4) | 0, 5, 1, fg, canvas);
    }
  };
  protoOf(DefaultShapeFunction).fillRect = function (x, y, width, height, color, canvas) {
    canvas.fillRect(x, y, width, height, color);
  };
  protoOf(DefaultShapeFunction).drawRect = function (x, y, width, height, color, thickness, canvas) {
    canvas.drawRect(x, y, width, height, color, thickness);
  };
  function QRCodeShapeFunction() {
  }
  function Companion_11() {
  }
  protoOf(Companion_11).defaultRadius = function (squareSize) {
    return roundToInt(squareSize / 1.75);
  };
  protoOf(Companion_11).defaultInnerSpace = function (squareSize) {
    return roundToInt(squareSize * 0.05);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function RoundSquaresShapeFunction(squareSize, radius, innerSpace) {
    squareSize = squareSize === VOID ? 25 : squareSize;
    radius = radius === VOID ? Companion_instance_11.defaultRadius(squareSize) : radius;
    innerSpace = innerSpace === VOID ? Companion_instance_11.defaultInnerSpace(squareSize) : innerSpace;
    DefaultShapeFunction.call(this, squareSize, innerSpace);
    this.hi_1 = radius;
  }
  protoOf(RoundSquaresShapeFunction).fillRect = function (x, y, width, height, color, canvas) {
    canvas.fillRoundRect(x, y, width, height, this.hi_1, color);
  };
  protoOf(RoundSquaresShapeFunction).drawRect = function (x, y, width, height, color, thickness, canvas) {
    canvas.drawRoundRect(x, y, width, height, this.hi_1, color, thickness);
  };
  function Companion_12() {
    this.ii_1 = 'Canvas seems to not be supported :(';
    this.ji_1 = 6.283185307179586;
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function rgba($this, color) {
    var r = color >> 16 & 255;
    var g = color >> 8 & 255;
    var b = color >> 0 & 255;
    var a = (color >> 24 & 255) / 255.0;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  function draw_0($this, color, action) {
    $this.li_1 = true;
    var context = tryGet($this, QRCodeGraphics$draw$lambda($this));
    var colorString = rgba($this, color);
    context.fillStyle = colorString;
    context.strokeStyle = colorString;
    var lineWidth = context.lineWidth;
    action(context);
    context.lineWidth = lineWidth;
  }
  function tryGet($this, what) {
    var tmp;
    try {
      tmp = what();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var t = $p;
        throw Error_init_$Create$_0('Canvas seems to not be supported :(', t);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function QRCodeGraphics$lambda() {
    var tmp = document.createElement('canvas');
    return tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
  }
  function QRCodeGraphics$draw$lambda(this$0) {
    return function () {
      var tmp = this$0.ki_1.getContext('2d');
      return tmp instanceof CanvasRenderingContext2D ? tmp : THROW_CCE();
    };
  }
  function QRCodeGraphics$reset$lambda(this$0) {
    return function ($this$draw) {
      $this$draw.clearRect(0.0, 0.0, this$0.width, this$0.height);
      return Unit_instance;
    };
  }
  function QRCodeGraphics$drawLine$lambda($x1, $y1, $x2, $y2) {
    return function ($this$draw) {
      $this$draw.moveTo($x1, $y1);
      $this$draw.lineTo($x2, $y2);
      return Unit_instance;
    };
  }
  function QRCodeGraphics$drawRect$lambda($thickness, $x, $y, $width, $height) {
    return function ($this$draw) {
      $this$draw.lineWidth = $thickness;
      var halfThickness = $thickness / 2.0;
      $this$draw.strokeRect($x + halfThickness, $y + halfThickness, $width - $thickness, $height - $thickness);
      return Unit_instance;
    };
  }
  function QRCodeGraphics$fillRect$lambda($x, $y, $width, $height) {
    return function ($this$draw) {
      $this$draw.fillRect($x, $y, $width, $height);
      return Unit_instance;
    };
  }
  function QRCodeGraphics$drawEllipse$lambda($width, $height, $thickness, $x, $y) {
    return function ($this$draw) {
      var radiusX = $width / 2.0;
      var radiusY = $height / 2.0;
      $this$draw.lineWidth = $thickness;
      $this$draw.beginPath();
      $this$draw.ellipse(radiusX + $x, radiusY + $y, radiusX, radiusY, 0.0, 0.0, 6.283185307179586, false);
      $this$draw.stroke();
      return Unit_instance;
    };
  }
  function QRCodeGraphics$fillEllipse$lambda($width, $height, $x, $y) {
    return function ($this$draw) {
      var radiusX = $width / 2.0;
      var radiusY = $height / 2.0;
      $this$draw.beginPath();
      $this$draw.ellipse(radiusX + $x, radiusY + $y, radiusX, radiusY, 0.0, 0.0, 6.283185307179586, false);
      $this$draw.fill();
      return Unit_instance;
    };
  }
  function QRCodeGraphics$drawImage$lambda($rawData, this$0, $x, $y) {
    return function ($this$draw) {
      var imageData = new ImageData(new Uint8ClampedArray(toTypedArray($rawData)), this$0.width);
      $this$draw.putImageData(imageData, $x, $y);
      return Unit_instance;
    };
  }
  function QRCodeGraphics(width, height) {
    this.width = width;
    this.height = height;
    this.li_1 = false;
    var canvas = tryGet(this, QRCodeGraphics$lambda);
    canvas.width = this.width;
    canvas.height = this.height;
    this.ki_1 = canvas;
  }
  protoOf(QRCodeGraphics).mi = function () {
    return this.width;
  };
  protoOf(QRCodeGraphics).ni = function () {
    return this.height;
  };
  protoOf(QRCodeGraphics).changed = function () {
    return this.li_1;
  };
  protoOf(QRCodeGraphics).reset = function () {
    if (this.li_1) {
      this.li_1 = false;
      draw_0(this, 0, QRCodeGraphics$reset$lambda(this));
    }
  };
  protoOf(QRCodeGraphics).dimensions = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.width, this.height];
  };
  protoOf(QRCodeGraphics).oi = function (format) {
    return this.ki_1.toDataURL(format);
  };
  protoOf(QRCodeGraphics).toDataURL = function (format, $super) {
    format = format === VOID ? 'png' : format;
    return $super === VOID ? this.oi(format) : $super.oi.call(this, format);
  };
  protoOf(QRCodeGraphics).toBlob = function (callback) {
    return this.ki_1.toBlob(callback);
  };
  protoOf(QRCodeGraphics).getBytes = function () {
    return this.getBytesForFormat('png');
  };
  protoOf(QRCodeGraphics).getBytesForFormat = function (format) {
    return encodeToByteArray(this.ki_1.toDataURL(format));
  };
  protoOf(QRCodeGraphics).availableFormats = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return ['png'];
  };
  protoOf(QRCodeGraphics).nativeImage = function () {
    return this.ki_1;
  };
  protoOf(QRCodeGraphics).drawLine = function (x1, y1, x2, y2, color, thickness) {
    draw_0(this, color, QRCodeGraphics$drawLine$lambda(x1, y1, x2, y2));
  };
  protoOf(QRCodeGraphics).drawRect = function (x, y, width, height, color, thickness) {
    draw_0(this, color, QRCodeGraphics$drawRect$lambda(thickness, x, y, width, height));
  };
  protoOf(QRCodeGraphics).fillRect = function (x, y, width, height, color) {
    draw_0(this, color, QRCodeGraphics$fillRect$lambda(x, y, width, height));
  };
  protoOf(QRCodeGraphics).fill = function (color) {
    this.fillRect(0, 0, this.width, this.height, color);
  };
  protoOf(QRCodeGraphics).drawRoundRect = function (x, y, width, height, borderRadius, color, thickness) {
    this.drawRect(x, y, width, height, color, 1.0);
  };
  protoOf(QRCodeGraphics).fillRoundRect = function (x, y, width, height, borderRadius, color) {
    this.fillRect(x, y, width, height, color);
  };
  protoOf(QRCodeGraphics).drawEllipse = function (x, y, width, height, color, thickness) {
    draw_0(this, color, QRCodeGraphics$drawEllipse$lambda(width, height, thickness, x, y));
  };
  protoOf(QRCodeGraphics).fillEllipse = function (x, y, width, height, color) {
    draw_0(this, color, QRCodeGraphics$fillEllipse$lambda(width, height, x, y));
  };
  protoOf(QRCodeGraphics).drawImageFromBytes = function (rawData, x, y) {
    var tmp;
    if (!(rawData == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = !(rawData.length === 0);
    } else {
      tmp = false;
    }
    if (tmp) {
      draw_0(this, 0, QRCodeGraphics$drawImage$lambda(rawData, this, x, y));
    }
  };
  //region block: post-declaration
  protoOf(InternalHashMap).o2 = containsAllEntries;
  defineProp(protoOf(QRCode), 'typeNum', protoOf(QRCode).p6);
  defineProp(protoOf(QRCode), 'computedSize', protoOf(QRCode).s6);
  protoOf(DefaultColorFunction).colorFn = colorFn;
  protoOf(DefaultColorFunction).beforeRender = beforeRender;
  protoOf(LinearGradientColorFunction).colorFn = colorFn;
  protoOf(LinearGradientColorFunction).beforeRender = beforeRender;
  defineProp(protoOf(InsufficientInformationDensityException), 'message', function () {
    return this.q3();
  });
  defineProp(protoOf(InsufficientInformationDensityException), 'cause', function () {
    return this.r3();
  });
  defineProp(protoOf(QRCodeSquareType), 'name', protoOf(QRCodeSquareType).z);
  defineProp(protoOf(QRCodeSquareType), 'ordinal', protoOf(QRCodeSquareType).a1);
  defineProp(protoOf(QRCodeRegion), 'name', protoOf(QRCodeRegion).z);
  defineProp(protoOf(QRCodeRegion), 'ordinal', protoOf(QRCodeRegion).a1);
  defineProp(protoOf(ErrorCorrectionLevel), 'name', protoOf(ErrorCorrectionLevel).z);
  defineProp(protoOf(ErrorCorrectionLevel), 'ordinal', protoOf(ErrorCorrectionLevel).a1);
  defineProp(protoOf(MaskPattern), 'name', protoOf(MaskPattern).z);
  defineProp(protoOf(MaskPattern), 'ordinal', protoOf(MaskPattern).a1);
  defineProp(protoOf(QRCodeDataType), 'name', protoOf(QRCodeDataType).z);
  defineProp(protoOf(QRCodeDataType), 'ordinal', protoOf(QRCodeDataType).a1);
  protoOf(DefaultShapeFunction).beforeRender = beforeRender_0;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Unit_instance = new Unit();
  Companion_instance_1 = new Companion_1();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  EmptyIterator_instance = new EmptyIterator();
  Companion_instance_6 = new Companion_6();
  Colors_instance = new Colors();
  QRCodeSetup_instance = new QRCodeSetup();
  Companion_instance_9 = new Companion_9();
  Companion_instance_10 = new Companion_10();
  Companion_instance_11 = new Companion_11();
  Companion_instance_12 = new Companion_12();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $qrcode = _.qrcode || (_.qrcode = {});
    $qrcode.QRCode = QRCode;
    defineProp($qrcode.QRCode, 'Companion', Companion_getInstance_7);
    var $qrcode = _.qrcode || (_.qrcode = {});
    $qrcode.QRCodeBuilder = QRCodeBuilder;
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$color = $qrcode.color || ($qrcode.color = {});
    defineProp($qrcode$color, 'Colors', Colors_getInstance);
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$color = $qrcode.color || ($qrcode.color = {});
    $qrcode$color.DefaultColorFunction = DefaultColorFunction;
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$color = $qrcode.color || ($qrcode.color = {});
    $qrcode$color.LinearGradientColorFunction = LinearGradientColorFunction;
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$color = $qrcode.color || ($qrcode.color = {});
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$internals = $qrcode.internals || ($qrcode.internals = {});
    $qrcode$internals.QRCodeSquare = QRCodeSquare;
    $qrcode$internals.QRCodeSquareInfo = QRCodeSquareInfo;
    $qrcode$internals.QRCodeSquareType = QRCodeSquareType;
    $qrcode$internals.QRCodeSquareType.values = values;
    $qrcode$internals.QRCodeSquareType.valueOf = valueOf;
    defineProp($qrcode$internals.QRCodeSquareType, 'POSITION_PROBE', QRCodeSquareType_POSITION_PROBE_getInstance);
    defineProp($qrcode$internals.QRCodeSquareType, 'POSITION_ADJUST', QRCodeSquareType_POSITION_ADJUST_getInstance);
    defineProp($qrcode$internals.QRCodeSquareType, 'TIMING_PATTERN', QRCodeSquareType_TIMING_PATTERN_getInstance);
    defineProp($qrcode$internals.QRCodeSquareType, 'DEFAULT', QRCodeSquareType_DEFAULT_getInstance);
    $qrcode$internals.QRCodeRegion = QRCodeRegion;
    $qrcode$internals.QRCodeRegion.values = values_0;
    $qrcode$internals.QRCodeRegion.valueOf = valueOf_0;
    defineProp($qrcode$internals.QRCodeRegion, 'TOP_LEFT_CORNER', QRCodeRegion_TOP_LEFT_CORNER_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'TOP_RIGHT_CORNER', QRCodeRegion_TOP_RIGHT_CORNER_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'TOP_MID', QRCodeRegion_TOP_MID_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'LEFT_MID', QRCodeRegion_LEFT_MID_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'RIGHT_MID', QRCodeRegion_RIGHT_MID_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'CENTER', QRCodeRegion_CENTER_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'BOTTOM_LEFT_CORNER', QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'BOTTOM_RIGHT_CORNER', QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'BOTTOM_MID', QRCodeRegion_BOTTOM_MID_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'MARGIN', QRCodeRegion_MARGIN_getInstance);
    defineProp($qrcode$internals.QRCodeRegion, 'UNKNOWN', QRCodeRegion_UNKNOWN_getInstance);
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$raw = $qrcode.raw || ($qrcode.raw = {});
    $qrcode$raw.ErrorCorrectionLevel = ErrorCorrectionLevel;
    $qrcode$raw.ErrorCorrectionLevel.values = values_1;
    $qrcode$raw.ErrorCorrectionLevel.valueOf = valueOf_1;
    defineProp($qrcode$raw.ErrorCorrectionLevel, 'LOW', ErrorCorrectionLevel_LOW_getInstance);
    defineProp($qrcode$raw.ErrorCorrectionLevel, 'MEDIUM', ErrorCorrectionLevel_MEDIUM_getInstance);
    defineProp($qrcode$raw.ErrorCorrectionLevel, 'HIGH', ErrorCorrectionLevel_HIGH_getInstance);
    defineProp($qrcode$raw.ErrorCorrectionLevel, 'VERY_HIGH', ErrorCorrectionLevel_VERY_HIGH_getInstance);
    $qrcode$raw.MaskPattern = MaskPattern;
    $qrcode$raw.MaskPattern.values = values_2;
    $qrcode$raw.MaskPattern.valueOf = valueOf_2;
    defineProp($qrcode$raw.MaskPattern, 'PATTERN000', MaskPattern_PATTERN000_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN001', MaskPattern_PATTERN001_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN010', MaskPattern_PATTERN010_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN011', MaskPattern_PATTERN011_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN100', MaskPattern_PATTERN100_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN101', MaskPattern_PATTERN101_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN110', MaskPattern_PATTERN110_getInstance);
    defineProp($qrcode$raw.MaskPattern, 'PATTERN111', MaskPattern_PATTERN111_getInstance);
    $qrcode$raw.QRCodeDataType = QRCodeDataType;
    $qrcode$raw.QRCodeDataType.values = values_3;
    $qrcode$raw.QRCodeDataType.valueOf = valueOf_3;
    defineProp($qrcode$raw.QRCodeDataType, 'NUMBERS', QRCodeDataType_NUMBERS_getInstance);
    defineProp($qrcode$raw.QRCodeDataType, 'UPPER_ALPHA_NUM', QRCodeDataType_UPPER_ALPHA_NUM_getInstance);
    defineProp($qrcode$raw.QRCodeDataType, 'DEFAULT', QRCodeDataType_DEFAULT_getInstance);
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$raw = $qrcode.raw || ($qrcode.raw = {});
    $qrcode$raw.QRCodeProcessor = QRCodeProcessor;
    defineProp($qrcode$raw.QRCodeProcessor, 'Companion', Companion_getInstance_9);
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$render = $qrcode.render || ($qrcode.render = {});
    $qrcode$render.QRCodeGraphicsFactory = QRCodeGraphicsFactory;
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$shape = $qrcode.shape || ($qrcode.shape = {});
    $qrcode$shape.CircleShapeFunction = CircleShapeFunction;
    defineProp($qrcode$shape.CircleShapeFunction, 'Companion', Companion_getInstance_10);
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$shape = $qrcode.shape || ($qrcode.shape = {});
    $qrcode$shape.DefaultShapeFunction = DefaultShapeFunction;
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$shape = $qrcode.shape || ($qrcode.shape = {});
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$shape = $qrcode.shape || ($qrcode.shape = {});
    $qrcode$shape.RoundSquaresShapeFunction = RoundSquaresShapeFunction;
    defineProp($qrcode$shape.RoundSquaresShapeFunction, 'Companion', Companion_getInstance_11);
    var $qrcode = _.qrcode || (_.qrcode = {});
    var $qrcode$render = $qrcode.render || ($qrcode.render = {});
    $qrcode$render.QRCodeGraphics = QRCodeGraphics;
    defineProp($qrcode$render.QRCodeGraphics, 'Companion', Companion_getInstance_12);
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=qrcode-kotlin.js.map
