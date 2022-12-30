//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['qrcode-kotlin'] = factory(typeof this['qrcode-kotlin'] === 'undefined' ? {} : this['qrcode-kotlin']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  //endregion
  //region block: pre-declaration
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  AbstractMutableMap$keys$1.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractMutableMap$keys$1.prototype.constructor = AbstractMutableMap$keys$1;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  function createJsMap() {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  }
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  LinkedHashSet.prototype = Object.create(HashSet.prototype);
  LinkedHashSet.prototype.constructor = LinkedHashSet;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  CharacterCodingException.prototype = Object.create(Exception.prototype);
  CharacterCodingException.prototype.constructor = CharacterCodingException;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  NumberFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  NumberFormatException.prototype.constructor = NumberFormatException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  ErrorCorrectionLevel.prototype = Object.create(Enum.prototype);
  ErrorCorrectionLevel.prototype.constructor = ErrorCorrectionLevel;
  MaskPattern.prototype = Object.create(Enum.prototype);
  MaskPattern.prototype.constructor = MaskPattern;
  QRCodeDataType.prototype = Object.create(Enum.prototype);
  QRCodeDataType.prototype.constructor = QRCodeDataType;
  QRCodeSquareType.prototype = Object.create(Enum.prototype);
  QRCodeSquareType.prototype.constructor = QRCodeSquareType;
  QRCodeRegion.prototype = Object.create(Enum.prototype);
  QRCodeRegion.prototype.constructor = QRCodeRegion;
  QR8BitByte.prototype = Object.create(QRData.prototype);
  QR8BitByte.prototype.constructor = QR8BitByte;
  QRAlphaNum.prototype = Object.create(QRData.prototype);
  QRAlphaNum.prototype.constructor = QRAlphaNum;
  QRNumber.prototype = Object.create(QRData.prototype);
  QRNumber.prototype.constructor = QRNumber;
  //endregion
  function forEachIndexed(_this__u8e3s4, action) {
    var index = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      action(tmp1, item);
    }
  }
  function sumOf(_this__u8e3s4, selector) {
    var sum = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      sum = sum + selector(element) | 0;
    }
    return sum;
  }
  function indexOfFirst(_this__u8e3s4, predicate) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (predicate(_this__u8e3s4[index])) {
          return index;
        }
      }
       while (inductionVariable <= last);
    return -1;
  }
  function forEachIndexed_0(_this__u8e3s4, action) {
    var index = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      action(tmp1, item);
    }
  }
  function toCollection(_this__u8e3s4, destination) {
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.a(item);
    }
    return destination;
  }
  function firstOrNull(_this__u8e3s4, predicate) {
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (predicate(element))
        return element;
    }
    return null;
  }
  function toSet(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp0_subject = _this__u8e3s4.b();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.e(0);
          } else {
            tmp_0 = _this__u8e3s4.c().d();
          }

          tmp = setOf(tmp_0);
          break;
        default:
          tmp = toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$_0(mapCapacity(_this__u8e3s4.b())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlySet(toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$()));
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform);
  }
  function toCollection_0(_this__u8e3s4, destination) {
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.f()) {
      var item = tmp0_iterator.d();
      destination.a(item);
    }
    return destination;
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.g(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.c();
    $l$loop: while (tmp0_iterator.f()) {
      var element = tmp0_iterator.d();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.g(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.g(truncated);
    }
    buffer.g(postfix);
    return buffer;
  }
  function any(_this__u8e3s4, predicate) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.h();
    } else {
      tmp = false;
    }
    if (tmp)
      return false;
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.d();
      if (predicate(element))
        return true;
    }
    return false;
  }
  function all(_this__u8e3s4, predicate) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.h();
    } else {
      tmp = false;
    }
    if (tmp)
      return true;
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.d();
      if (!predicate(element))
        return false;
    }
    return true;
  }
  function firstOrNull_0(_this__u8e3s4, predicate) {
    var tmp0_iterator = _this__u8e3s4.c();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.d();
      if (predicate(element))
        return element;
    }
    return null;
  }
  function until(_this__u8e3s4, to) {
    if (to <= IntCompanionObject_getInstance().j_1)
      return Companion_getInstance_1().i_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function getOrElse(_this__u8e3s4, index, defaultValue) {
    return (index >= 0 ? index <= get_lastIndex(_this__u8e3s4) : false) ? charSequenceGet(_this__u8e3s4, index) : defaultValue(index).n_1;
  }
  function get_code(_this__u8e3s4) {
    return Char__toInt_impl_vasixd(_this__u8e3s4);
  }
  function Char(code) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    Companion_getInstance_4();
    var tmp0__get_code__88qj9g = _Char___init__impl__6a9atx(0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    if (code < tmp$ret$0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      Companion_getInstance_4();
      var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(65535);
      tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
      tmp = code > tmp$ret$1;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + code);
    }
    return numberToChar(code);
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  AbstractCollection.prototype.o = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this.c();
      while (tmp0_iterator.f()) {
        var element_0 = tmp0_iterator.d();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        tmp$ret$1 = equals(element_0, element);
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.p = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.d();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.o(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.h = function () {
    return this.b() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default(this, ', ', '[', ']', 0, null, AbstractCollection$toString$lambda(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl(this);
  };
  AbstractCollection.$metadata$ = classMeta('AbstractCollection', [Collection]);
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = $this.q();
      var tmp0_iterator = tmp0_firstOrNull.c();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.d();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
        tmp$ret$0 = equals(element.r(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.s = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryHashCode.<anonymous>' call
    var tmp2_safe_receiver = e.r();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp0_safe_receiver = e.t();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion.prototype.u = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryToString.<anonymous>' call
    tmp$ret$0 = toString_1(e.r()) + '=' + toString_1(e.t());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion.prototype.v = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals(e.r(), other.r()) ? equals(e.t(), other.t()) : false;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.y(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance();
    this.w_1 = null;
    this.x_1 = null;
  }
  AbstractMap.prototype.z = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.a1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.r();
    var value = entry.t();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).b1(key);
    var ourValue = tmp$ret$0;
    if (!equals(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).z(key);
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    if (!(this.b() === other.b()))
      return false;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp0_all = other.q();
      var tmp;
      if (isInterface(tmp0_all, Collection)) {
        tmp = tmp0_all.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_all.c();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.d();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
        tmp$ret$1 = this.a1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.b1 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this.q());
  };
  AbstractMap.prototype.h = function () {
    return this.b() === 0;
  };
  AbstractMap.prototype.b = function () {
    return this.q().b();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this.q();
    return joinToString$default(tmp, ', ', '{', '}', 0, null, AbstractMap$toString$lambda(this), 24, null);
  };
  AbstractMap.prototype.y = function (entry) {
    return toString(this, entry.r()) + '=' + toString(this, entry.t());
  };
  AbstractMap.$metadata$ = classMeta('AbstractMap', [Map]);
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.c1 = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.c();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.d();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_0.prototype.d1 = function (c, other) {
    if (!(c.b() === other.b()))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsAll' call
    tmp$ret$0 = c.p(other);
    return tmp$ret$0;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.f = function () {
    return false;
  };
  EmptyIterator.prototype.d = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = objectMeta('EmptyIterator', [ListIterator]);
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function containsAll(_this__u8e3s4, elements) {
    return _this__u8e3s4.p(elements);
  }
  function get(_this__u8e3s4, key) {
    return (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).b1(key);
  }
  function containsKey(_this__u8e3s4, key) {
    return (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).z(key);
  }
  function IntIterator() {
  }
  IntIterator.prototype.d = function () {
    return this.e1();
  };
  IntIterator.$metadata$ = classMeta('IntIterator', [Iterator]);
  function emptySet() {
    return EmptySet_getInstance();
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$(mapCapacity(elements.length)));
  }
  function EmptySet() {
    EmptySet_instance = this;
    this.f1_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype.b = function () {
    return 0;
  };
  EmptySet.prototype.h = function () {
    return true;
  };
  EmptySet.prototype.g1 = function (elements) {
    return elements.h();
  };
  EmptySet.prototype.p = function (elements) {
    return this.g1(elements);
  };
  EmptySet.prototype.c = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = objectMeta('EmptySet', [Set, Serializable]);
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function optimizeReadOnlySet(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.b();
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__u8e3s4.c().d());
      default:
        return _this__u8e3s4;
    }
  }
  function contract(builder) {
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
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
  function Companion_1() {
    Companion_instance_1 = this;
    this.i_1 = new IntRange(1, 0);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_1();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype.h = function () {
    return this.k1_1 > this.l1_1;
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.h() ? other.h() : false) ? true : this.k1_1 === other.k1_1 ? this.l1_1 === other.l1_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.h() ? -1 : imul(31, this.k1_1) + this.l1_1 | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this.k1_1 + '..' + this.l1_1;
  };
  IntRange.$metadata$ = classMeta('IntRange', [ClosedRange, OpenEndRange], undefined, undefined, undefined, IntProgression.prototype);
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.n1_1 = step;
    this.o1_1 = last;
    this.p1_1 = this.n1_1 > 0 ? first <= last : first >= last;
    this.q1_1 = this.p1_1 ? first : this.o1_1;
  }
  IntProgressionIterator.prototype.f = function () {
    return this.p1_1;
  };
  IntProgressionIterator.prototype.e1 = function () {
    var value = this.q1_1;
    if (value === this.o1_1) {
      if (!this.p1_1)
        throw NoSuchElementException_init_$Create$();
      this.p1_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.q1_1 = tmp0_this.q1_1 + this.n1_1 | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = classMeta('IntProgressionIterator', undefined, undefined, undefined, undefined, IntIterator.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_2();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance().j_1)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.k1_1 = start;
    this.l1_1 = getProgressionLastElement(start, endInclusive, step);
    this.m1_1 = step;
  }
  IntProgression.prototype.c = function () {
    return new IntProgressionIterator(this.k1_1, this.l1_1, this.m1_1);
  };
  IntProgression.prototype.h = function () {
    return this.m1_1 > 0 ? this.k1_1 > this.l1_1 : this.k1_1 < this.l1_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.h() ? other.h() : false) ? true : (this.k1_1 === other.k1_1 ? this.l1_1 === other.l1_1 : false) ? this.m1_1 === other.m1_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.h() ? -1 : imul(31, imul(31, this.k1_1) + this.l1_1 | 0) + this.m1_1 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this.m1_1 > 0 ? '' + this.k1_1 + '..' + this.l1_1 + ' step ' + this.m1_1 : '' + this.k1_1 + ' downTo ' + this.l1_1 + ' step ' + (-this.m1_1 | 0);
  };
  IntProgression.$metadata$ = classMeta('IntProgression', [Iterable]);
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = interfaceMeta('ClosedRange');
  function OpenEndRange() {
  }
  OpenEndRange.$metadata$ = interfaceMeta('OpenEndRange');
  function KClassifier() {
  }
  KClassifier.$metadata$ = interfaceMeta('KClassifier');
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.g(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.g(element);
      } else {
        if (element instanceof Char_0) {
          _this__u8e3s4.r1(element.n_1);
        } else {
          _this__u8e3s4.g(toString_1(element));
        }
      }
    }
  }
  function toIntOrNull(_this__u8e3s4) {
    return toIntOrNull_0(_this__u8e3s4, 10);
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$("Invalid number format: '" + input + "'");
  }
  function toIntOrNull_0(_this__u8e3s4, radix) {
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
      if (equals(new Char_0(firstChar), new Char_0(_Char___init__impl__6a9atx(45)))) {
        isNegative = true;
        limit = IntCompanionObject_getInstance().j_1;
      } else if (equals(new Char_0(firstChar), new Char_0(_Char___init__impl__6a9atx(43)))) {
        isNegative = false;
        limit = -IntCompanionObject_getInstance().k_1 | 0;
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = -IntCompanionObject_getInstance().k_1 | 0;
    }
    var limitForMaxRadix = (-IntCompanionObject_getInstance().k_1 | 0) / 36 | 0;
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
  function matches(_this__u8e3s4, regex) {
    return regex.x1(_this__u8e3s4);
  }
  function get_lastIndex(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function check(value) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!value) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
  }
  function check_0(value, lazyMessage) {
    // Inline function 'kotlin.contracts.contract' call
    if (!value) {
      var message = lazyMessage();
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
  }
  function require_0(value, lazyMessage) {
    // Inline function 'kotlin.contracts.contract' call
    if (!value) {
      var message = lazyMessage();
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
  }
  function require_1(value) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!value) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
  }
  function checkNotNull(value) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$_0(toString_2(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function checkNotNull_0(value, lazyMessage) {
    // Inline function 'kotlin.contracts.contract' call
    if (value == null) {
      var message = lazyMessage();
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    } else {
      return value;
    }
  }
  function run(block) {
    // Inline function 'kotlin.contracts.contract' call
    return block();
  }
  function let_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    return block(_this__u8e3s4);
  }
  function run_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    return block(_this__u8e3s4);
  }
  function apply(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    block(_this__u8e3s4);
    return _this__u8e3s4;
  }
  function takeIf(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    return predicate(_this__u8e3s4) ? _this__u8e3s4 : null;
  }
  function with_0(receiver, block) {
    // Inline function 'kotlin.contracts.contract' call
    return block(receiver);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function UShort__toInt_impl_72bkww($this) {
    return _UShort___get_data__impl__g0245($this) & 65535;
  }
  function toUShort(_this__u8e3s4) {
    return _UShort___init__impl__jigrne(toShort(_this__u8e3s4));
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = interfaceMeta('CharSequence');
  function Comparable() {
  }
  Comparable.$metadata$ = interfaceMeta('Comparable');
  function Iterator() {
  }
  Iterator.$metadata$ = interfaceMeta('Iterator');
  function ListIterator() {
  }
  ListIterator.$metadata$ = interfaceMeta('ListIterator', [Iterator]);
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = interfaceMeta('MutableIterator', [Iterator]);
  function Number_0() {
  }
  Number_0.$metadata$ = classMeta('Number');
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = objectMeta('Unit');
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.j_1 = -2147483648;
    this.k_1 = 2147483647;
    this.l_1 = 4;
    this.m_1 = 32;
  }
  IntCompanionObject.prototype.b2 = function () {
    return this.j_1;
  };
  IntCompanionObject.prototype.c2 = function () {
    return this.k_1;
  };
  IntCompanionObject.prototype.d2 = function () {
    return this.l_1;
  };
  IntCompanionObject.prototype.e2 = function () {
    return this.m_1;
  };
  IntCompanionObject.$metadata$ = objectMeta('IntCompanionObject');
  Object.defineProperty(IntCompanionObject.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject.prototype.b2
  });
  Object.defineProperty(IntCompanionObject.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject.prototype.c2
  });
  Object.defineProperty(IntCompanionObject.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject.prototype.d2
  });
  Object.defineProperty(IntCompanionObject.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject.prototype.e2
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function Comparator() {
  }
  Comparator.$metadata$ = interfaceMeta('Comparator');
  function setOf(element) {
    return hashSetOf([element]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    var array = tmp$ret$0;
    var iterator = collection.c();
    while (iterator.f()) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = array;
      tmp$ret$1.push(iterator.d());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.$metadata$ = classMeta('AbstractMutableCollection', [MutableCollection], undefined, undefined, undefined, AbstractCollection.prototype);
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.f2_1 = $entryIterator;
  }
  AbstractMutableMap$keys$1$iterator$1.prototype.f = function () {
    return this.f2_1.f();
  };
  AbstractMutableMap$keys$1$iterator$1.prototype.d = function () {
    return this.f2_1.d().r();
  };
  AbstractMutableMap$keys$1$iterator$1.$metadata$ = classMeta(undefined, [MutableIterator]);
  function SimpleEntry(key, value) {
    this.g2_1 = key;
    this.h2_1 = value;
  }
  SimpleEntry.prototype.r = function () {
    return this.g2_1;
  };
  SimpleEntry.prototype.t = function () {
    return this.h2_1;
  };
  SimpleEntry.prototype.i2 = function (newValue) {
    var oldValue = this.h2_1;
    this.h2_1 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance().s(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance().u(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance().v(this, other);
  };
  SimpleEntry.$metadata$ = classMeta('SimpleEntry', [MutableEntry]);
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.o = function (element) {
    return this.j2(element);
  };
  AbstractEntrySet.$metadata$ = classMeta('AbstractEntrySet', undefined, undefined, undefined, undefined, AbstractMutableSet.prototype);
  function AbstractMutableMap$keys$1(this$0) {
    this.k2_1 = this$0;
    AbstractMutableSet.call(this);
  }
  AbstractMutableMap$keys$1.prototype.l2 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  AbstractMutableMap$keys$1.prototype.a = function (element) {
    return this.l2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.m2 = function (element) {
    return this.k2_1.z(element);
  };
  AbstractMutableMap$keys$1.prototype.o = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.m2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  AbstractMutableMap$keys$1.prototype.c = function () {
    var entryIterator = this.k2_1.q().c();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  AbstractMutableMap$keys$1.prototype.b = function () {
    return this.k2_1.b();
  };
  AbstractMutableMap$keys$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, AbstractMutableSet.prototype);
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.p2_1 = null;
    this.q2_1 = null;
  }
  AbstractMutableMap.prototype.r2 = function () {
    if (this.p2_1 == null) {
      var tmp = this;
      tmp.p2_1 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this.p2_1);
  };
  AbstractMutableMap.$metadata$ = classMeta('AbstractMutableMap', [MutableMap], undefined, undefined, undefined, AbstractMap.prototype);
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_getInstance_0().d1(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_0().c1(this);
  };
  AbstractMutableSet.$metadata$ = classMeta('AbstractMutableSet', [MutableSet], undefined, undefined, undefined, AbstractMutableCollection.prototype);
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.s2 = function (value1, value2) {
    return equals(value1, value2);
  };
  HashCode.prototype.t2 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = objectMeta('HashCode', [EqualityComparator]);
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = interfaceMeta('EqualityComparator');
  function EntrySet($outer) {
    this.u2_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.v2 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.a = function (element) {
    return this.v2((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.j2 = function (element) {
    return this.u2_1.a1(element);
  };
  EntrySet.prototype.c = function () {
    return this.u2_1.a3_1.c();
  };
  EntrySet.prototype.b = function () {
    return this.u2_1.b();
  };
  EntrySet.$metadata$ = classMeta('EntrySet', undefined, undefined, undefined, undefined, AbstractEntrySet.prototype);
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.a3_1 = internalMap;
    $this.b3_1 = internalMap.d3();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    // Inline function 'kotlin.require' call
    var tmp0_require = initialCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$0 = 'Negative initial capacity: ' + initialCapacity;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = loadFactor >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$1 = 'Non-positive load factor: ' + loadFactor;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashMap.prototype.z = function (key) {
    return this.a3_1.m2(key);
  };
  HashMap.prototype.q = function () {
    if (this.c3_1 == null) {
      this.c3_1 = this.e3();
    }
    return ensureNotNull(this.c3_1);
  };
  HashMap.prototype.e3 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.b1 = function (key) {
    return this.a3_1.b1(key);
  };
  HashMap.prototype.f3 = function (key, value) {
    return this.a3_1.f3(key, value);
  };
  HashMap.prototype.b = function () {
    return this.a3_1.b();
  };
  function HashMap() {
    this.c3_1 = null;
  }
  HashMap.$metadata$ = classMeta('HashMap', [MutableMap], undefined, undefined, undefined, AbstractMutableMap.prototype);
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.g3_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_1(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.g3_1 = map;
    return $this;
  }
  HashSet.prototype.a = function (element) {
    var old = this.g3_1.f3(element, this);
    return old == null;
  };
  HashSet.prototype.o = function (element) {
    return this.g3_1.z(element);
  };
  HashSet.prototype.h = function () {
    return this.g3_1.h();
  };
  HashSet.prototype.c = function () {
    return this.g3_1.r2().c();
  };
  HashSet.prototype.b = function () {
    return this.g3_1.b();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = classMeta('HashSet', [MutableSet], undefined, undefined, undefined, AbstractMutableSet.prototype);
  function computeNext($this) {
    if ($this.k3_1 != null ? $this.l3_1 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = $this.k3_1;
      tmp$ret$0 = tmp0_unsafeCast;
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.m3_1 = tmp0_this.m3_1 + 1 | 0;
      if (tmp0_this.m3_1 < chainSize)
        return 0;
    }
    var tmp1_this = $this;
    tmp1_this.j3_1 = tmp1_this.j3_1 + 1 | 0;
    if (tmp1_this.j3_1 < $this.i3_1.length) {
      $this.k3_1 = $this.o3_1.q3_1[$this.i3_1[$this.j3_1]];
      var tmp = $this;
      var tmp_0 = $this.k3_1;
      tmp.l3_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.m3_1 = 0;
      return 0;
    } else {
      $this.k3_1 = null;
      return 1;
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.p3_1.t2(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.p3_1.s2(entry.r(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      var chain = chainOrEntry;
      return findEntryInChain(chain, $this, key);
    }
  }
  function findEntryInChain(_this__u8e3s4, $this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.InternalHashCodeMap.findEntryInChain.<anonymous>' call
        tmp$ret$0 = $this.p3_1.s2(element.r(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode) {
    var chainOrEntry = $this.q3_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.o3_1 = this$0;
    this.h3_1 = -1;
    this.i3_1 = Object.keys(this$0.q3_1);
    this.j3_1 = -1;
    this.k3_1 = null;
    this.l3_1 = false;
    this.m3_1 = -1;
    this.n3_1 = null;
  }
  InternalHashCodeMap$iterator$1.prototype.f = function () {
    if (this.h3_1 === -1)
      this.h3_1 = computeNext(this);
    return this.h3_1 === 0;
  };
  InternalHashCodeMap$iterator$1.prototype.d = function () {
    if (!this.f())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.l3_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.k3_1;
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0[this.m3_1];
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = this.k3_1;
      tmp$ret$1 = tmp1_unsafeCast;
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.n3_1 = lastEntry;
    this.h3_1 = -1;
    return lastEntry;
  };
  InternalHashCodeMap$iterator$1.$metadata$ = classMeta(undefined, [MutableIterator]);
  function InternalHashCodeMap(equality) {
    this.p3_1 = equality;
    this.q3_1 = this.s3();
    this.r3_1 = 0;
  }
  InternalHashCodeMap.prototype.d3 = function () {
    return this.p3_1;
  };
  InternalHashCodeMap.prototype.b = function () {
    return this.r3_1;
  };
  InternalHashCodeMap.prototype.f3 = function (key, value) {
    var hashCode = this.p3_1.t2(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.q3_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.p3_1.s2(entry.r(), key)) {
          return entry.i2(value);
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [entry, new SimpleEntry(key, value)];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          this.q3_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.r3_1;
          tmp0_this.r3_1 = tmp1 + 1 | 0;
          return null;
        }
      } else {
        var chain = chainOrEntry;
        var entry_0 = findEntryInChain(chain, this, key);
        if (!(entry_0 == null)) {
          return entry_0.i2(value);
        }
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = chain;
        tmp$ret$3.push(new SimpleEntry(key, value));
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.r3_1;
    tmp2_this.r3_1 = tmp3 + 1 | 0;
    return null;
  };
  InternalHashCodeMap.prototype.m2 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.b1 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t();
  };
  InternalHashCodeMap.prototype.c = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  InternalHashCodeMap.$metadata$ = classMeta('InternalHashCodeMap', [InternalMap]);
  function InternalMap() {
  }
  InternalMap.$metadata$ = interfaceMeta('InternalMap', [MutableIterable]);
  function EntryIterator($outer) {
    this.v3_1 = $outer;
    this.t3_1 = null;
    this.u3_1 = null;
    this.u3_1 = this.v3_1.g4_1.d4_1;
  }
  EntryIterator.prototype.f = function () {
    return !(this.u3_1 === null);
  };
  EntryIterator.prototype.d = function () {
    if (!this.f())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.u3_1);
    this.t3_1 = current;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = current.j4_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.EntryIterator.next.<anonymous>' call
    tmp$ret$0 = !(tmp0_takeIf === this.v3_1.g4_1.d4_1);
    if (tmp$ret$0) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$1 = tmp_0;
    tmp.u3_1 = tmp$ret$1;
    return current;
  };
  EntryIterator.$metadata$ = classMeta('EntryIterator', [MutableIterator]);
  function ChainEntry($outer, key, value) {
    this.l4_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.j4_1 = null;
    this.k4_1 = null;
  }
  ChainEntry.prototype.i2 = function (newValue) {
    this.l4_1.m4();
    return SimpleEntry.prototype.i2.call(this, newValue);
  };
  ChainEntry.$metadata$ = classMeta('ChainEntry', undefined, undefined, undefined, undefined, SimpleEntry.prototype);
  function EntrySet_0($outer) {
    this.g4_1 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.v2 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.a = function (element) {
    return this.v2((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.j2 = function (element) {
    return this.g4_1.a1(element);
  };
  EntrySet_0.prototype.c = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype.b = function () {
    return this.g4_1.b();
  };
  EntrySet_0.$metadata$ = classMeta('EntrySet', undefined, undefined, undefined, undefined, AbstractEntrySet.prototype);
  function addToEnd(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = _this__u8e3s4.j4_1 == null ? _this__u8e3s4.k4_1 == null : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
    var _head = $this.d4_1;
    if (_head == null) {
      $this.d4_1 = _this__u8e3s4;
      _this__u8e3s4.j4_1 = _this__u8e3s4;
      _this__u8e3s4.k4_1 = _this__u8e3s4;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.checkNotNull' call
      var tmp1_checkNotNull = _head.k4_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_checkNotNull == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.checkNotNull.<anonymous>' call
          tmp$ret$1 = 'Required value was null.';
          var message_0 = tmp$ret$1;
          throw IllegalStateException_init_$Create$_0(toString_2(message_0));
        } else {
          tmp$ret$2 = tmp1_checkNotNull;
          break $l$block;
        }
      }
      tmp$ret$3 = tmp$ret$2;
      var _tail = tmp$ret$3;
      _this__u8e3s4.k4_1 = _tail;
      _this__u8e3s4.j4_1 = _head;
      _head.k4_1 = _this__u8e3s4;
      _tail.j4_1 = _this__u8e3s4;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.e4_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.e4_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.z = function (key) {
    return this.e4_1.z(key);
  };
  LinkedHashMap.prototype.e3 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.b1 = function (key) {
    var tmp0_safe_receiver = this.e4_1.b1(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t();
  };
  LinkedHashMap.prototype.f3 = function (key, value) {
    this.m4();
    var old = this.e4_1.b1(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.e4_1.f3(key, newEntry);
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.i2(value);
    }
  };
  LinkedHashMap.prototype.b = function () {
    return this.e4_1.b();
  };
  LinkedHashMap.prototype.m4 = function () {
    if (this.f4_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.d4_1 = null;
    this.f4_1 = false;
  }
  LinkedHashMap.$metadata$ = classMeta('LinkedHashMap', [MutableMap], undefined, undefined, undefined, HashMap.prototype);
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_1(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_1(LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(initialCapacity) {
    return LinkedHashSet_init_$Init$_1(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet() {
  }
  LinkedHashSet.$metadata$ = classMeta('LinkedHashSet', [MutableSet], undefined, undefined, undefined, HashSet.prototype);
  function asDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCastDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCast(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function Serializable() {
  }
  Serializable.$metadata$ = interfaceMeta('Serializable');
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function get_js(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof KClassImpl ? _this__u8e3s4 : THROW_CCE()).o4();
  }
  function KClass() {
  }
  KClass.$metadata$ = interfaceMeta('KClass', [KClassifier]);
  function KClassImpl(jClass) {
    this.n4_1 = jClass;
  }
  KClassImpl.prototype.o4 = function () {
    return this.n4_1;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this.o4(), other.o4());
    } else {
      tmp = false;
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.p4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return 'class ' + this.p4();
  };
  KClassImpl.$metadata$ = classMeta('KClassImpl', [KClass]);
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.r4_1 = givenSimpleName;
    this.s4_1 = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return KClassImpl.prototype.equals.call(this, other) ? this.r4_1 === other.r4_1 : false;
  };
  PrimitiveKClassImpl.prototype.p4 = function () {
    return this.r4_1;
  };
  PrimitiveKClassImpl.$metadata$ = classMeta('PrimitiveKClassImpl', undefined, undefined, undefined, undefined, KClassImpl.prototype);
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.u4_1 = 'Nothing';
  }
  NothingKClassImpl.prototype.p4 = function () {
    return this.u4_1;
  };
  NothingKClassImpl.prototype.o4 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = objectMeta('NothingKClassImpl', undefined, undefined, undefined, undefined, KClassImpl.prototype);
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.p4 = function () {
    throw IllegalStateException_init_$Create$_0('Unknown simpleName for ErrorKClass');
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = classMeta('ErrorKClass', [KClass]);
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = jClass;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    var tmp0_unsafeCast = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp.w4_1 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype.p4 = function () {
    return this.w4_1;
  };
  SimpleKClassImpl.$metadata$ = classMeta('SimpleKClassImpl', undefined, undefined, undefined, undefined, KClassImpl.prototype);
  function get_functionClasses() {
    init_properties_primitives_kt_rm1w5q();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return isObject(it);
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
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = it;
        tmp = tmp$ret$0.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp_0 = tmp$ret$0;
    tmp.x4_1 = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_0 = Number;
    tmp$ret$1 = tmp0_unsafeCast_0;
    var tmp_2 = tmp$ret$1;
    tmp_1.y4_1 = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.z4_1 = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_1 = Boolean;
    tmp$ret$2 = tmp0_unsafeCast_1;
    var tmp_4 = tmp$ret$2;
    tmp_3.a5_1 = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_2 = Number;
    tmp$ret$3 = tmp0_unsafeCast_2;
    var tmp_6 = tmp$ret$3;
    tmp_5.b5_1 = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_3 = Number;
    tmp$ret$4 = tmp0_unsafeCast_3;
    var tmp_8 = tmp$ret$4;
    tmp_7.c5_1 = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_4 = Number;
    tmp$ret$5 = tmp0_unsafeCast_4;
    var tmp_10 = tmp$ret$5;
    tmp_9.d5_1 = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_5 = Number;
    tmp$ret$6 = tmp0_unsafeCast_5;
    var tmp_12 = tmp$ret$6;
    tmp_11.e5_1 = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_6 = Number;
    tmp$ret$7 = tmp0_unsafeCast_6;
    var tmp_14 = tmp$ret$7;
    tmp_13.f5_1 = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_7 = Array;
    tmp$ret$8 = tmp0_unsafeCast_7;
    var tmp_16 = tmp$ret$8;
    tmp_15.g5_1 = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_8 = String;
    tmp$ret$9 = tmp0_unsafeCast_8;
    var tmp_18 = tmp$ret$9;
    tmp_17.h5_1 = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_9 = Error;
    tmp$ret$10 = tmp0_unsafeCast_9;
    var tmp_20 = tmp$ret$10;
    tmp_19.i5_1 = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    var tmp$ret$11;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_10 = Array;
    tmp$ret$11 = tmp0_unsafeCast_10;
    var tmp_22 = tmp$ret$11;
    tmp_21.j5_1 = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_11 = Uint16Array;
    tmp$ret$12 = tmp0_unsafeCast_11;
    var tmp_24 = tmp$ret$12;
    tmp_23.k5_1 = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_12 = Int8Array;
    tmp$ret$13 = tmp0_unsafeCast_12;
    var tmp_26 = tmp$ret$13;
    tmp_25.l5_1 = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    var tmp$ret$14;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_13 = Int16Array;
    tmp$ret$14 = tmp0_unsafeCast_13;
    var tmp_28 = tmp$ret$14;
    tmp_27.m5_1 = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    var tmp$ret$15;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_14 = Int32Array;
    tmp$ret$15 = tmp0_unsafeCast_14;
    var tmp_30 = tmp$ret$15;
    tmp_29.n5_1 = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    var tmp$ret$16;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_15 = Array;
    tmp$ret$16 = tmp0_unsafeCast_15;
    var tmp_32 = tmp$ret$16;
    tmp_31.o5_1 = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    var tmp$ret$17;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_16 = Float32Array;
    tmp$ret$17 = tmp0_unsafeCast_16;
    var tmp_34 = tmp$ret$17;
    tmp_33.p5_1 = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    var tmp$ret$18;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_17 = Float64Array;
    tmp$ret$18 = tmp0_unsafeCast_17;
    var tmp_36 = tmp$ret$18;
    tmp_35.q5_1 = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  PrimitiveClasses.prototype.r5 = function () {
    return this.x4_1;
  };
  PrimitiveClasses.prototype.s5 = function () {
    return this.y4_1;
  };
  PrimitiveClasses.prototype.t5 = function () {
    return this.z4_1;
  };
  PrimitiveClasses.prototype.u5 = function () {
    return this.a5_1;
  };
  PrimitiveClasses.prototype.v5 = function () {
    return this.b5_1;
  };
  PrimitiveClasses.prototype.w5 = function () {
    return this.c5_1;
  };
  PrimitiveClasses.prototype.x5 = function () {
    return this.d5_1;
  };
  PrimitiveClasses.prototype.y5 = function () {
    return this.e5_1;
  };
  PrimitiveClasses.prototype.z5 = function () {
    return this.f5_1;
  };
  PrimitiveClasses.prototype.a6 = function () {
    return this.g5_1;
  };
  PrimitiveClasses.prototype.b6 = function () {
    return this.h5_1;
  };
  PrimitiveClasses.prototype.c6 = function () {
    return this.i5_1;
  };
  PrimitiveClasses.prototype.d6 = function () {
    return this.j5_1;
  };
  PrimitiveClasses.prototype.e6 = function () {
    return this.k5_1;
  };
  PrimitiveClasses.prototype.f6 = function () {
    return this.l5_1;
  };
  PrimitiveClasses.prototype.g6 = function () {
    return this.m5_1;
  };
  PrimitiveClasses.prototype.h6 = function () {
    return this.n5_1;
  };
  PrimitiveClasses.prototype.i6 = function () {
    return this.o5_1;
  };
  PrimitiveClasses.prototype.j6 = function () {
    return this.p5_1;
  };
  PrimitiveClasses.prototype.k6 = function () {
    return this.q5_1;
  };
  PrimitiveClasses.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlin.reflect.js.internal.PrimitiveClasses.functionClass.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = Function;
      tmp$ret$0 = tmp0_unsafeCast;
      var tmp_0 = tmp$ret$0;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_asDynamic = get_functionClasses();
      tmp$ret$1 = tmp1_asDynamic;
      tmp$ret$1[arity] = result;
      tmp$ret$2 = result;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses.$metadata$ = objectMeta('PrimitiveClasses');
  Object.defineProperty(PrimitiveClasses.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.r5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.s5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.t5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.u5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.v5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.w5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.x5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.y5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.z5
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.a6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.b6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.c6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.d6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.e6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.f6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.g6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.h6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.i6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.j6
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.k6
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function init_properties_primitives_kt_rm1w5q() {
    if (properties_initialized_primitives_kt_jle18u) {
    } else {
      properties_initialized_primitives_kt_jle18u = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      functionClasses = tmp$ret$0;
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = jClass;
      tmp$ret$1 = tmp$ret$0;
      tmp = getKClassM(tmp$ret$1);
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = jClass;
      tmp$ret$3 = tmp$ret$2;
      tmp = getKClass1(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = NothingKClassImpl_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp1_unsafeCast = new ErrorKClass();
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_unsafeCast;
        tmp$ret$3 = tmp$ret$2;

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = PrimitiveClasses_getInstance().h5_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = jClass;
    var metadata = tmp$ret$2.$metadata$;
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
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().h5_1;
        break;
      case 'number':
        var tmp_0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = jsBitwiseOr(e, 0);
        tmp$ret$0 = tmp0_asDynamic;

        if (tmp$ret$0 === e) {
          tmp_0 = PrimitiveClasses_getInstance().d5_1;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().f5_1;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().a5_1;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = e;

        tmp = tmp_1.functionClass(tmp$ret$1.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().j5_1;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().k5_1;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().l5_1;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().m5_1;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().n5_1;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().o5_1;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().p5_1;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().q5_1;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().g5_1;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().x4_1;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().i5_1;
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
    var tmp1_unsafeCast = tmp;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function reset(_this__u8e3s4) {
    _this__u8e3s4.lastIndex = 0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = interfaceMeta('Appendable');
  function CharacterCodingException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, CharacterCodingException);
  }
  CharacterCodingException.$metadata$ = classMeta('CharacterCodingException', undefined, undefined, undefined, undefined, Exception.prototype);
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this.n6_1 = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.y1 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.n6_1;
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.z1 = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.getOrElse' call
    var tmp0_getOrElse = this.n6_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex(tmp0_getOrElse) : false) {
      tmp = charSequenceGet(tmp0_getOrElse, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this.y1() + '}');
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  StringBuilder.prototype.r1 = function (value) {
    var tmp0_this = this;
    tmp0_this.n6_1 = tmp0_this.n6_1 + new Char_0(value);
    return this;
  };
  StringBuilder.prototype.g = function (value) {
    var tmp0_this = this;
    tmp0_this.n6_1 = tmp0_this.n6_1 + toString_1(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this.n6_1;
  };
  StringBuilder.$metadata$ = classMeta('StringBuilder', [Appendable, CharSequence]);
  function uppercaseChar(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.uppercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toUpperCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
  }
  function lowercaseChar(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    return charSequenceGet(tmp$ret$2, 0);
  }
  function uppercase(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toUpperCase();
    tmp$ret$1 = tmp1_unsafeCast;
    return tmp$ret$1;
  }
  function lowercase(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    return tmp$ret$1;
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function toInt(_this__u8e3s4) {
    var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function digitOf(char, radix) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.digitOf.<anonymous>' call
    tmp$ret$0 = tmp0_let >= radix ? -1 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Regex_init_$Init$(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$(pattern) {
    return Regex_init_$Init$(pattern, Object.create(Regex.prototype));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.o6_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this.p6_1 = new RegExp('[\\\\$]', 'g');
    this.q6_1 = new RegExp('\\$', 'g');
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Regex(pattern, options) {
    Companion_getInstance_3();
    this.s1_1 = pattern;
    this.t1_1 = toSet(options);
    this.u1_1 = new RegExp(pattern, toFlags(options, 'gu'));
    this.v1_1 = null;
    this.w1_1 = null;
  }
  Regex.prototype.x1 = function (input) {
    reset(this.u1_1);
    var match = this.u1_1.exec(toString_2(input));
    return (!(match == null) ? match.index === 0 : false) ? this.u1_1.lastIndex === charSequenceLength(input) : false;
  };
  Regex.prototype.toString = function () {
    return this.u1_1.toString();
  };
  Regex.$metadata$ = classMeta('Regex');
  function toFlags(_this__u8e3s4, prepend) {
    return joinToString$default(_this__u8e3s4, '', prepend, null, 0, null, toFlags$lambda, 28, null);
  }
  function toFlags$lambda(it) {
    return it.t6_1;
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function substring(_this__u8e3s4, startIndex, endIndex) {
    init_properties_string_kt_z8k4s7();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.substring(startIndex, endIndex);
  }
  function compareTo(_this__u8e3s4, other, ignoreCase) {
    init_properties_string_kt_z8k4s7();
    if (ignoreCase) {
      var n1 = _this__u8e3s4.length;
      var n2 = other.length;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$0 = Math.min(n1, n2);
      var min = tmp$ret$0;
      if (min === 0)
        return n1 - n2 | 0;
      var inductionVariable = 0;
      if (inductionVariable < min)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var thisChar = charSequenceGet(_this__u8e3s4, index);
          var otherChar = charSequenceGet(other, index);
          if (!equals(new Char_0(thisChar), new Char_0(otherChar))) {
            thisChar = uppercaseChar(thisChar);
            otherChar = uppercaseChar(otherChar);
            if (!equals(new Char_0(thisChar), new Char_0(otherChar))) {
              var tmp$ret$4;
              // Inline function 'kotlin.text.lowercaseChar' call
              var tmp0_lowercaseChar = thisChar;
              var tmp$ret$3;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$2;
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$1;
              // Inline function 'kotlin.js.asDynamic' call
              var tmp0_asDynamic = toString_0(tmp0_lowercaseChar);
              tmp$ret$1 = tmp0_asDynamic;
              var tmp1_unsafeCast = tmp$ret$1.toLowerCase();
              tmp$ret$2 = tmp1_unsafeCast;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = charSequenceGet(tmp$ret$3, 0);
              thisChar = tmp$ret$4;
              var tmp$ret$8;
              // Inline function 'kotlin.text.lowercaseChar' call
              var tmp1_lowercaseChar = otherChar;
              var tmp$ret$7;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$6;
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$5;
              // Inline function 'kotlin.js.asDynamic' call
              var tmp0_asDynamic_0 = toString_0(tmp1_lowercaseChar);
              tmp$ret$5 = tmp0_asDynamic_0;
              var tmp1_unsafeCast_0 = tmp$ret$5.toLowerCase();
              tmp$ret$6 = tmp1_unsafeCast_0;
              tmp$ret$7 = tmp$ret$6;
              tmp$ret$8 = charSequenceGet(tmp$ret$7, 0);
              otherChar = tmp$ret$8;
              if (!equals(new Char_0(thisChar), new Char_0(otherChar))) {
                return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
              }
            }
          }
        }
         while (inductionVariable < min);
      return n1 - n2 | 0;
    } else {
      return compareTo_0(_this__u8e3s4, other);
    }
  }
  function encodeToByteArray(_this__u8e3s4) {
    init_properties_string_kt_z8k4s7();
    return encodeUtf8(_this__u8e3s4, 0, _this__u8e3s4.length, false);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.u6_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.v6 = function (a, b) {
    return this.u6_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.v6(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
    init_properties_string_kt_z8k4s7();
    return compareTo(a, b, true);
  }
  var properties_initialized_string_kt_4g1sj;
  function init_properties_string_kt_z8k4s7() {
    if (properties_initialized_string_kt_4g1sj) {
    } else {
      properties_initialized_string_kt_4g1sj = true;
      var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
      STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_REPLACEMENT_BYTE_SEQUENCE() {
    init_properties_utf8Encoding_kt_xjxnfa();
    return REPLACEMENT_BYTE_SEQUENCE;
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function encodeUtf8(string, startIndex, endIndex, throwOnMalformed) {
    init_properties_utf8Encoding_kt_xjxnfa();
    // Inline function 'kotlin.require' call
    var tmp0_require = (startIndex >= 0 ? endIndex <= string.length : false) ? startIndex <= endIndex : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    var bytes = new Int8Array(imul(endIndex - startIndex | 0, 3));
    var byteIndex = 0;
    var charIndex = startIndex;
    while (charIndex < endIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      var tmp0 = charIndex;
      charIndex = tmp0 + 1 | 0;
      var tmp1__get_code__adl84j = charSequenceGet(string, tmp0);
      tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
      var code = tmp$ret$1;
      if (code < 128) {
        var tmp1 = byteIndex;
        byteIndex = tmp1 + 1 | 0;
        bytes[tmp1] = toByte(code);
      } else if (code < 2048) {
        var tmp2 = byteIndex;
        byteIndex = tmp2 + 1 | 0;
        bytes[tmp2] = toByte(code >> 6 | 192);
        var tmp3 = byteIndex;
        byteIndex = tmp3 + 1 | 0;
        bytes[tmp3] = toByte(code & 63 | 128);
      } else if (code < 55296 ? true : code >= 57344) {
        var tmp4 = byteIndex;
        byteIndex = tmp4 + 1 | 0;
        bytes[tmp4] = toByte(code >> 12 | 224);
        var tmp5 = byteIndex;
        byteIndex = tmp5 + 1 | 0;
        bytes[tmp5] = toByte(code >> 6 & 63 | 128);
        var tmp6 = byteIndex;
        byteIndex = tmp6 + 1 | 0;
        bytes[tmp6] = toByte(code & 63 | 128);
      } else {
        var codePoint = codePointFromSurrogate(string, code, charIndex, endIndex, throwOnMalformed);
        if (codePoint <= 0) {
          var tmp7 = byteIndex;
          byteIndex = tmp7 + 1 | 0;
          bytes[tmp7] = get_REPLACEMENT_BYTE_SEQUENCE()[0];
          var tmp8 = byteIndex;
          byteIndex = tmp8 + 1 | 0;
          bytes[tmp8] = get_REPLACEMENT_BYTE_SEQUENCE()[1];
          var tmp9 = byteIndex;
          byteIndex = tmp9 + 1 | 0;
          bytes[tmp9] = get_REPLACEMENT_BYTE_SEQUENCE()[2];
        } else {
          var tmp10 = byteIndex;
          byteIndex = tmp10 + 1 | 0;
          bytes[tmp10] = toByte(codePoint >> 18 | 240);
          var tmp11 = byteIndex;
          byteIndex = tmp11 + 1 | 0;
          bytes[tmp11] = toByte(codePoint >> 12 & 63 | 128);
          var tmp12 = byteIndex;
          byteIndex = tmp12 + 1 | 0;
          bytes[tmp12] = toByte(codePoint >> 6 & 63 | 128);
          var tmp13 = byteIndex;
          byteIndex = tmp13 + 1 | 0;
          bytes[tmp13] = toByte(codePoint & 63 | 128);
          var tmp14 = charIndex;
          charIndex = tmp14 + 1 | 0;
        }
      }
    }
    return bytes.length === byteIndex ? bytes : copyOf_1(bytes, byteIndex);
  }
  function codePointFromSurrogate(string, high, index, endIndex, throwOnMalformed) {
    init_properties_utf8Encoding_kt_xjxnfa();
    if (!(55296 <= high ? high <= 56319 : false) ? true : index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(string, index);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var low = tmp$ret$0;
    if (!(56320 <= low ? low <= 57343 : false)) {
      return malformed(0, index, throwOnMalformed);
    }
    return 65536 + ((high & 1023) << 10) | 0 | low & 1023;
  }
  function malformed(size, index, throwOnMalformed) {
    init_properties_utf8Encoding_kt_xjxnfa();
    if (throwOnMalformed)
      throw new CharacterCodingException('Malformed sequence starting at ' + (index - 1 | 0));
    return -size | 0;
  }
  var properties_initialized_utf8Encoding_kt_eee1vq;
  function init_properties_utf8Encoding_kt_xjxnfa() {
    if (properties_initialized_utf8Encoding_kt_eee1vq) {
    } else {
      properties_initialized_utf8Encoding_kt_eee1vq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT_BYTE_SEQUENCE = tmp$ret$0;
    }
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    var tmp = _Char___init__impl__6a9atx(tmp$ret$0);
    return tmp;
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__compareTo_impl_ypi4mb_0($this, other) {
    var tmp = $this.n_1;
    return Char__compareTo_impl_ypi4mb(tmp, other instanceof Char_0 ? other.n_1 : THROW_CCE());
  }
  function Char__minus_impl_a2frrh($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function Char__equals_impl_x6719k($this, other) {
    if (!(other instanceof Char_0))
      return false;
    return _get_value__a43j40($this) === _get_value__a43j40(other.n_1);
  }
  function Char__hashCode_impl_otmys($this) {
    return _get_value__a43j40($this);
  }
  function toString_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = String.fromCharCode(_get_value__a43j40($this));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.w6_1 = _Char___init__impl__6a9atx(0);
    this.x6_1 = _Char___init__impl__6a9atx(65535);
    this.y6_1 = _Char___init__impl__6a9atx(55296);
    this.z6_1 = _Char___init__impl__6a9atx(56319);
    this.a7_1 = _Char___init__impl__6a9atx(56320);
    this.b7_1 = _Char___init__impl__6a9atx(57343);
    this.c7_1 = _Char___init__impl__6a9atx(55296);
    this.d7_1 = _Char___init__impl__6a9atx(57343);
    this.e7_1 = 2;
    this.f7_1 = 16;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Char_0(value) {
    Companion_getInstance_4();
    this.n_1 = value;
  }
  Char_0.prototype.g7 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.n_1, other);
  };
  Char_0.prototype.a2 = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  Char_0.prototype.equals = function (other) {
    return Char__equals_impl_x6719k(this.n_1, other);
  };
  Char_0.prototype.hashCode = function () {
    return Char__hashCode_impl_otmys(this.n_1);
  };
  Char_0.prototype.toString = function () {
    return toString_0(this.n_1);
  };
  Char_0.$metadata$ = classMeta('Char', [Comparable]);
  function Iterable() {
  }
  Iterable.$metadata$ = interfaceMeta('Iterable');
  function Set() {
  }
  Set.$metadata$ = interfaceMeta('Set', [Collection]);
  function List() {
  }
  List.$metadata$ = interfaceMeta('List', [Collection]);
  function Collection() {
  }
  Collection.$metadata$ = interfaceMeta('Collection', [Iterable]);
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = interfaceMeta('MutableCollection', [Collection, MutableIterable]);
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = interfaceMeta('MutableIterable', [Iterable]);
  function MutableSet() {
  }
  MutableSet.$metadata$ = interfaceMeta('MutableSet', [Set, MutableCollection]);
  function Entry() {
  }
  Entry.$metadata$ = interfaceMeta('Entry');
  function Map() {
  }
  Map.$metadata$ = interfaceMeta('Map');
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = interfaceMeta('MutableEntry', [Entry]);
  function MutableMap() {
  }
  MutableMap.$metadata$ = interfaceMeta('MutableMap', [Map]);
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_5();
    this.h7_1 = name;
    this.i7_1 = ordinal;
  }
  Enum.prototype.j7 = function () {
    return this.h7_1;
  };
  Enum.prototype.k7 = function () {
    return this.i7_1;
  };
  Enum.prototype.l7 = function (other) {
    return compareTo_0(this.i7_1, other.i7_1);
  };
  Enum.prototype.a2 = function (other) {
    return this.l7(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this.h7_1;
  };
  Enum.$metadata$ = classMeta('Enum', [Comparable]);
  function byteArrayOf(elements) {
    return elements;
  }
  function arrayOf(elements) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = elements;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function intArrayOf(elements) {
    return elements;
  }
  function toString_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function get_buf() {
    init_properties_bitUtils_kt_cxtw9i();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    init_properties_bitUtils_kt_cxtw9i();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    init_properties_bitUtils_kt_cxtw9i();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    init_properties_bitUtils_kt_cxtw9i();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    init_properties_bitUtils_kt_cxtw9i();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    init_properties_bitUtils_kt_cxtw9i();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = jsBitwiseOr(obj, 0);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function init_properties_bitUtils_kt_cxtw9i() {
    if (properties_initialized_bitUtils_kt_i2bo3e) {
    } else {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new Float64Array(get_buf());
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = new Float32Array(get_buf());
      var tmp$ret$0_0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_0 = tmp0_unsafeCast_0;
      tmp$ret$1_0 = tmp$ret$0_0;
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_1 = new Int32Array(get_buf());
      var tmp$ret$0_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_1 = tmp0_unsafeCast_1;
      tmp$ret$1_1 = tmp$ret$0_1;
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0_2;
      // Inline function 'kotlin.js.lowIndex.<anonymous>' call
      get_bufFloat64()[0] = -1.0;
      tmp$ret$0_2 = !(get_bufInt32()[0] === 0) ? 1 : 0;
      tmp$ret$1_2 = tmp$ret$0_2;
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      // Inline function 'kotlin.Char' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.charCodeAt(index);
      tmp$ret$1 = tmp0_unsafeCast;
      var tmp1_Char = tmp$ret$1;
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      Companion_getInstance_4();
      var tmp0__get_code__88qj9g = _Char___init__impl__6a9atx(0);
      tmp$ret$2 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      if (tmp1_Char < tmp$ret$2) {
        tmp_0 = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        Companion_getInstance_4();
        var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(65535);
        tmp$ret$3 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
        tmp_0 = tmp1_Char > tmp$ret$3;
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp1_Char);
      }
      tmp$ret$4 = numberToChar(tmp1_Char);
      tmp = tmp$ret$4;
    } else {
      tmp = a.z1(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.length;
      tmp$ret$1 = tmp0_unsafeCast;
      tmp = tmp$ret$1;
    } else {
      tmp = a.y1();
    }
    return tmp;
  }
  function compareTo_0(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.o7());
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
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 1;
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = 1;
        if (ia === tmp$ret$1 / b) {
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
    return a.a2(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj['kotlinHashCodeValue$'];
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function toString_2(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = o.toString();
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
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
        var tmp_0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.unsafeCast' call
        tmp$ret$0 = obj;

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          tmp_0 = 0;
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
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
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = str;
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = 1;
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = 1;
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = instance;
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
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
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp$ret$0 = dst;
    var arr = tmp$ret$0;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function emptyArray() {
    return [];
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.p7_1 = new Long(0, -2147483648);
    this.q7_1 = new Long(-1, 2147483647);
    this.r7_1 = 8;
    this.s7_1 = 64;
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Long(low, high) {
    Companion_getInstance_6();
    Number_0.call(this);
    this.m7_1 = low;
    this.n7_1 = high;
  }
  Long.prototype.t7 = function (other) {
    return compare(this, other);
  };
  Long.prototype.a2 = function (other) {
    return this.t7(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.u7 = function (other) {
    return add(this, other);
  };
  Long.prototype.v7 = function (other) {
    return divide(this, other);
  };
  Long.prototype.w7 = function () {
    return this.x7().u7(new Long(1, 0));
  };
  Long.prototype.x7 = function () {
    return new Long(~this.m7_1, ~this.n7_1);
  };
  Long.prototype.y7 = function () {
    return this.m7_1;
  };
  Long.prototype.o7 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.o7();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = classMeta('Long', [Comparable], undefined, undefined, undefined, Number_0.prototype);
  function get_ZERO() {
    init_properties_longjs_kt_ttk8rv();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    init_properties_longjs_kt_ttk8rv();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    init_properties_longjs_kt_ttk8rv();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    init_properties_longjs_kt_ttk8rv();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    init_properties_longjs_kt_ttk8rv();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    init_properties_longjs_kt_ttk8rv();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    var a48 = _this__u8e3s4.n7_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.n7_1 & 65535;
    var a16 = _this__u8e3s4.m7_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.m7_1 & 65535;
    var b48 = other.n7_1 >>> 16 | 0;
    var b32 = other.n7_1 & 65535;
    var b16 = other.m7_1 >>> 16 | 0;
    var b00 = other.m7_1 & 65535;
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
    init_properties_longjs_kt_ttk8rv();
    return add(_this__u8e3s4, other.w7());
  }
  function multiply(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
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
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.n7_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.n7_1 & 65535;
    var a16 = _this__u8e3s4.m7_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.m7_1 & 65535;
    var b48 = other.n7_1 >>> 16 | 0;
    var b32 = other.n7_1 & 65535;
    var b16 = other.m7_1 >>> 16 | 0;
    var b00 = other.m7_1 & 65535;
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
    init_properties_longjs_kt_ttk8rv();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.v7(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.v7(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).v7(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).v7(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.v7(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
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
    init_properties_longjs_kt_ttk8rv();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.m7_1 << numBits_0, _this__u8e3s4.n7_1 << numBits_0 | (_this__u8e3s4.m7_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.m7_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    init_properties_longjs_kt_ttk8rv();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.m7_1 >>> numBits_0 | 0 | _this__u8e3s4.n7_1 << (32 - numBits_0 | 0), _this__u8e3s4.n7_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.n7_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.n7_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.n7_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.n7_1 === other.n7_1 ? _this__u8e3s4.m7_1 === other.m7_1 : false;
  }
  function hashCode_0(l) {
    init_properties_longjs_kt_ttk8rv();
    return l.m7_1 ^ l.n7_1;
  }
  function toStringImpl(_this__u8e3s4, radix) {
    init_properties_longjs_kt_ttk8rv();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.v7(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).y7();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = rem;
        var tmp0_unsafeCast = tmp$ret$0.toString(radix);
        tmp$ret$1 = tmp0_unsafeCast;
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.v7(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).y7();
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = intval;
      var tmp1_unsafeCast = tmp$ret$2.toString(radix);
      tmp$ret$3 = tmp1_unsafeCast;
      var digits = tmp$ret$3;
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
  function fromInt(value) {
    init_properties_longjs_kt_ttk8rv();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.n7_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.n7_1 === 0 ? _this__u8e3s4.m7_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return (_this__u8e3s4.m7_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.w7();
  }
  function lessThan(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    init_properties_longjs_kt_ttk8rv();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    init_properties_longjs_kt_ttk8rv();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    init_properties_longjs_kt_ttk8rv();
    return _this__u8e3s4.m7_1 >= 0 ? _this__u8e3s4.m7_1 : 4.294967296E9 + _this__u8e3s4.m7_1;
  }
  var properties_initialized_longjs_kt_5aju7t;
  function init_properties_longjs_kt_ttk8rv() {
    if (properties_initialized_longjs_kt_5aju7t) {
    } else {
      properties_initialized_longjs_kt_5aju7t = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function toByte(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 24 >> 24;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.y7();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 16 >> 16;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = numberToInt(a);
    tmp$ret$0 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  var interfacesCounter;
  function classMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('class', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function createMetadata(kind, name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return {kind: kind, simpleName: name, interfaceId: kind === 'interface' ? -1 : undefined, interfaces: interfaces || [], associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, fastPrototype: fastPrototype, $kClass$: undefined, interfacesCache: {isComplete: fastPrototype === undefined && (interfaces === undefined || interfaces.length === 0), implementInterfaceMemo: {}}};
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Array.isArray(obj);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface) {
      return true;
    }
    var metadata = ctor.$metadata$;
    if (!(metadata == null) ? metadata.interfacesCache == null : false) {
      metadata.interfacesCache = generateInterfaceCache();
    }
    var tmp0_safe_receiver = metadata;
    var interfacesCache = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interfacesCache;
    var tmp;
    if (!(interfacesCache == null)) {
      if (!interfacesCache.isComplete) {
        completeInterfaceCache(ctor);
      }
      var tmp1_safe_receiver = iface.$metadata$;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.interfaceId;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var interfaceId = tmp_0;
      tmp = !!interfacesCache.implementInterfaceMemo[interfaceId];
    } else {
      var tmp3_safe_receiver = fastGetPrototype(ctor);
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.constructor;
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        return false;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }
      var constructor = tmp_1;
      tmp = isInterfaceImpl(constructor, iface);
    }
    return tmp;
  }
  function generateInterfaceCache() {
    return {isComplete: false, implementInterfaceMemo: {}};
  }
  function completeInterfaceCache(ctor) {
    var metadata = ctor.$metadata$;
    if (!(metadata == null) ? metadata.interfacesCache == null : false) {
      metadata.interfacesCache = generateInterfaceCache();
    }
    var tmp0_safe_receiver = metadata;
    var interfacesCache = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interfacesCache;
    if (!(interfacesCache == null)) {
      if (interfacesCache.isComplete === true) {
        return interfacesCache;
      }
      var indexedObject = metadata.interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        extendCacheWithSingle(interfacesCache, i);
        extendCacheWith(interfacesCache, completeInterfaceCache(i));
      }
    }
    var tmp2_safe_receiver = fastGetPrototype(ctor);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.constructor;
    var tmp;
    if (tmp3_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = completeInterfaceCache(tmp3_safe_receiver);
      tmp = tmp$ret$0;
    }
    var parentInterfacesCache = tmp;
    var tmp4_safe_receiver = interfacesCache;
    var tmp_0;
    if (tmp4_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.js.completeInterfaceCache.<anonymous>' call
      extendCacheWith(tmp4_safe_receiver, parentInterfacesCache);
      tmp4_safe_receiver.isComplete = true;
      tmp$ret$1 = tmp4_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    var tmp5_elvis_lhs = tmp_0;
    return tmp5_elvis_lhs == null ? parentInterfacesCache : tmp5_elvis_lhs;
  }
  function fastGetPrototype(ctor) {
    var tmp0_safe_receiver = ctor.$metadata$;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.fastGetPrototype.<anonymous>' call
      if (tmp0_safe_receiver.fastPrototype == null) {
        tmp0_safe_receiver.fastPrototype = getPrototype(ctor);
      }
      tmp$ret$0 = tmp0_safe_receiver.fastPrototype;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? getPrototype(ctor) : tmp1_elvis_lhs;
  }
  function extendCacheWithSingle(_this__u8e3s4, intr) {
    _this__u8e3s4.implementInterfaceMemo[getOrDefineInterfaceId(intr)] = true;
  }
  function extendCacheWith(_this__u8e3s4, cache) {
    var tmp0_safe_receiver = cache;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.implementInterfaceMemo;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var anotherInterfaceMemo = tmp;
    Object.assign(_this__u8e3s4.implementInterfaceMemo, anotherInterfaceMemo);
  }
  function getPrototype(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.prototype;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.getPrototype.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = Object.getPrototypeOf(tmp0_safe_receiver);
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function getOrDefineInterfaceId(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = _this__u8e3s4.$metadata$;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    var metadata = tmp$ret$1;
    var tmp0_elvis_lhs = metadata.interfaceId;
    var interfaceId = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    var tmp;
    if (!equals(interfaceId, -1)) {
      tmp = interfaceId;
    } else {
      var tmp1 = interfacesCounter;
      interfacesCounter = tmp1 + 1 | 0;
      var result = tmp1;
      metadata.interfaceId = result;
      tmp = result;
    }
    return tmp;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = obj;
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:
        return jsInstanceOf(obj, Object);
    }
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
    return typeof value === 'string' ? true : isInterface(value, get_js(getKClass(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return jsInstanceOf(a, Uint16Array) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function interfaceMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, undefined);
  }
  function objectMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('object', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newSize >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    return fillFrom(_this__u8e3s4, new Int32Array(newSize));
  }
  function copyOf_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.slice();
  }
  function copyOf_1(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newSize >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    return fillFrom(_this__u8e3s4, new Int8Array(newSize));
  }
  function minOf(a, b) {
    return Math.min(a, b);
  }
  function digitToIntImpl(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
    var ch = tmp$ret$0;
    var index = binarySearchRange(Digit_getInstance().z7_1, ch);
    var diff = ch - Digit_getInstance().z7_1[index] | 0;
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
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
    tmp.z7_1 = tmp$ret$0;
  }
  Digit.$metadata$ = objectMeta('Digit');
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance == null)
      new Digit();
    return Digit_instance;
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = classMeta('Exception', undefined, undefined, undefined, undefined, Error.prototype);
  function Error_init_$Init$(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$(message, cause) {
    var tmp = Error_init_$Init$(message, cause, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$);
    return tmp;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = classMeta('Error', undefined, undefined, undefined, undefined, Error.prototype);
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = classMeta('IllegalArgumentException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = classMeta('IllegalStateException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = classMeta('NoSuchElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = classMeta('RuntimeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = classMeta('IndexOutOfBoundsException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = classMeta('UnsupportedOperationException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(message, Object.create(NumberFormatException.prototype));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  NumberFormatException.$metadata$ = classMeta('NumberFormatException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = classMeta('NullPointerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = classMeta('NoWhenBranchMatchedException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = classMeta('ClassCastException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = lhs_hack in rhs_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = lhs_hack | rhs_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = typeof value_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    delete obj_hack[property_hack];
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj_hack instanceof jsClass_hack;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function QRCode_init_$Init$(data, errorCorrectionLevel, dataType, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      errorCorrectionLevel = ErrorCorrectionLevel_M_getInstance();
    if (!(($mask0 & 4) === 0))
      dataType = QRUtil_getInstance().getDataType(data);
    QRCode.call($this, data, errorCorrectionLevel, dataType);
    return $this;
  }
  function QRCode_init_$Create$(data, errorCorrectionLevel, dataType, $mask0, $marker) {
    return QRCode_init_$Init$(data, errorCorrectionLevel, dataType, $mask0, $marker, Object.create(QRCode.prototype));
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.a8_1 = 25;
    this.b8_1 = 0;
    this.c8_1 = 236;
    this.d8_1 = 17;
  }
  Companion_7.prototype.e8 = function () {
    return this.a8_1;
  };
  Companion_7.prototype.f8 = function () {
    return this.b8_1;
  };
  Companion_7.prototype.typeForDataAndECL = function (data, errorCorrectionLevel, dataType) {
    return this.g8(data, errorCorrectionLevel, dataType === void 1 ? QRUtil_getInstance().getDataType(data) : dataType);
  };
  Companion_7.prototype.g8 = function (data, errorCorrectionLevel, dataType) {
    var tmp0_subject = dataType;
    var tmp0 = tmp0_subject.i7_1;
    var tmp;
    switch (tmp0) {
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
    var dataLength = qrCodeData.length();
    var inductionVariable = 1;
    var last = errorCorrectionLevel.k8_1;
    if (inductionVariable < last)
      do {
        var typeNum = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (dataLength <= QRUtil_getInstance().getMaxLength(typeNum, dataType, errorCorrectionLevel)) {
          return typeNum;
        }
      }
       while (inductionVariable < last);
    return 40;
  };
  Companion_7.prototype.l8 = function (data, errorCorrectionLevel, dataType, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      dataType = QRUtil_getInstance().getDataType(data);
    return this.g8(data, errorCorrectionLevel, dataType);
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  Object.defineProperty(Companion_7.prototype, 'DEFAULT_CELL_SIZE', {
    configurable: true,
    get: Companion_7.prototype.e8
  });
  Object.defineProperty(Companion_7.prototype, 'DEFAULT_MARGIN', {
    configurable: true,
    get: Companion_7.prototype.f8
  });
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function createData($this, type) {
    var rsBlocks = Companion_getInstance_9().getRSBlocks(type, $this.n8_1);
    var buffer = new BitBuffer();
    buffer.put($this.p8_1.u8_1.t8_1, 4);
    buffer.put($this.p8_1.length(), $this.p8_1.getLengthInBits(type));
    $this.p8_1.write(buffer);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var indexedObject = rsBlocks;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = sum;
      var tmp$ret$0;
      // Inline function 'io.github.g0dkar.qrcode.QRCode.createData.<anonymous>' call
      tmp$ret$0 = element.x8_1;
      sum = tmp + tmp$ret$0 | 0;
    }
    tmp$ret$1 = sum;
    var totalDataCount = imul(tmp$ret$1, 8);
    if (buffer.z8_1 > totalDataCount) {
      throw IllegalArgumentException_init_$Create$('Code length overflow (' + buffer.z8_1 + ' > ' + totalDataCount + ')');
    }
    if ((buffer.z8_1 + 4 | 0) <= totalDataCount) {
      buffer.put(0, 4);
    }
    while (!((buffer.z8_1 % 8 | 0) === 0)) {
      buffer.putBit(false);
    }
    $l$loop_0: while (true) {
      if (buffer.z8_1 >= totalDataCount) {
        break $l$loop_0;
      }
      Companion_getInstance_7();
      buffer.put(236, 8);
      if (buffer.z8_1 >= totalDataCount) {
        break $l$loop_0;
      }
      Companion_getInstance_7();
      buffer.put(17, 8);
    }
    return createBytes($this, buffer, rsBlocks);
  }
  function createBytes($this, buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var totalCodeCount = 0;
    var tmp = 0;
    var tmp_0 = rsBlocks.length;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'io.github.g0dkar.qrcode.QRCode.createBytes.<anonymous>' call
      tmp$ret$1 = new Int32Array(0);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var dcData = tmp_1;
    var tmp_3 = 0;
    var tmp_4 = rsBlocks.length;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(tmp_4), null);
    var tmp_5 = tmp$ret$2;
    while (tmp_3 < tmp_4) {
      var tmp_6 = tmp_3;
      var tmp$ret$3;
      // Inline function 'io.github.g0dkar.qrcode.QRCode.createBytes.<anonymous>' call
      tmp$ret$3 = new Int32Array(0);
      tmp_5[tmp_6] = tmp$ret$3;
      tmp_3 = tmp_3 + 1 | 0;
    }
    var ecData = tmp_5;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject = rsBlocks;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.github.g0dkar.qrcode.QRCode.createBytes.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      var dcCount = item.x8_1;
      var ecCount = item.w8_1 - dcCount | 0;
      totalCodeCount = totalCodeCount + item.w8_1 | 0;
      maxDcCount = coerceAtLeast(maxDcCount, dcCount);
      maxEcCount = coerceAtLeast(maxEcCount, ecCount);
      var tmp_7 = 0;
      var tmp_8 = dcCount;
      var tmp_9 = new Int32Array(tmp_8);
      while (tmp_7 < tmp_8) {
        var tmp_10 = tmp_7;
        var tmp$ret$4;
        // Inline function 'io.github.g0dkar.qrcode.QRCode.createBytes.<anonymous>.<anonymous>' call
        tmp$ret$4 = 255 & buffer.y8_1[tmp_10 + offset | 0];
        tmp_9[tmp_10] = tmp$ret$4;
        tmp_7 = tmp_7 + 1 | 0;
      }
      dcData[tmp0__anonymous__q1qw7t] = tmp_9;
      offset = offset + dcCount | 0;
      var rsPoly = QRUtil_getInstance().getErrorCorrectPolynomial(ecCount);
      var rawPoly = new Polynomial(dcData[tmp0__anonymous__q1qw7t], rsPoly.len() - 1 | 0);
      var modPoly = rawPoly.mod(rsPoly);
      var ecDataSize = rsPoly.len() - 1 | 0;
      var tmp_11 = 0;
      var tmp_12 = ecDataSize;
      var tmp_13 = new Int32Array(tmp_12);
      while (tmp_11 < tmp_12) {
        var tmp_14 = tmp_11;
        var tmp$ret$5;
        // Inline function 'io.github.g0dkar.qrcode.QRCode.createBytes.<anonymous>.<anonymous>' call
        var modIndex = (tmp_14 + modPoly.len() | 0) - ecDataSize | 0;
        tmp$ret$5 = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        tmp_13[tmp_14] = tmp$ret$5;
        tmp_11 = tmp_11 + 1 | 0;
      }
      ecData[tmp0__anonymous__q1qw7t] = tmp_13;
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
              var tmp2 = index_0;
              index_0 = tmp2 + 1 | 0;
              data[tmp2] = dcData[r][i];
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
              var tmp5 = index_0;
              index_0 = tmp5 + 1 | 0;
              data[tmp5] = ecData[r_0][i_0];
            }
          }
           while (inductionVariable_3 <= last_3);
      }
       while (inductionVariable_2 < last_2);
    return data;
  }
  function QRCode$render$lambda($darkColor, $brightColor, $marginColor) {
    return function (cellData, graphics) {
      var tmp;
      if (cellData.d9_1) {
        graphics.fill($darkColor);
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if (!cellData.h9_1.b9_1.equals(QRCodeSquareType_MARGIN_getInstance())) {
          graphics.fill($brightColor);
          tmp_0 = Unit_getInstance();
        } else {
          graphics.fill($marginColor);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function QRCode(data, errorCorrectionLevel, dataType) {
    Companion_getInstance_7();
    var errorCorrectionLevel_0 = errorCorrectionLevel === void 1 ? ErrorCorrectionLevel_M_getInstance() : errorCorrectionLevel;
    var dataType_0 = dataType === void 1 ? QRUtil_getInstance().getDataType(data) : dataType;
    this.m8_1 = data;
    this.n8_1 = errorCorrectionLevel_0;
    this.o8_1 = dataType_0;
    var tmp = this;
    var tmp0_subject = this.o8_1;
    var tmp0 = tmp0_subject.i7_1;
    var tmp_0;
    switch (tmp0) {
      case 0:
        tmp_0 = new QRNumber(this.m8_1);
        break;
      case 1:
        tmp_0 = new QRAlphaNum(this.m8_1);
        break;
      case 2:
        tmp_0 = new QR8BitByte(this.m8_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.p8_1 = tmp_0;
    this.q8_1 = new QRCodeGraphicsFactory();
  }
  QRCode.prototype.i9 = function (_set____db54di) {
    this.q8_1 = _set____db54di;
  };
  QRCode.prototype.j9 = function () {
    return this.q8_1;
  };
  QRCode.prototype.computeImageSizeFromRawData = function (cellSize, margin, rawData) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    var tmp_0 = tmp;
    var tmp_1 = margin === void 1 ? 0 : margin;
    var tmp_2;
    if (rawData === void 1) {
      tmp_2 = this.k9(0, null, 3, null);
    } else {
      tmp_2 = rawData;
    }
    return this.l9(tmp_0, tmp_1, tmp_2);
  };
  QRCode.prototype.l9 = function (cellSize, margin, rawData) {
    return this.m9(cellSize, margin, rawData.length);
  };
  QRCode.prototype.n9 = function (cellSize, margin, rawData, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    if (!(($mask0 & 2) === 0))
      margin = 0;
    if (!(($mask0 & 4) === 0)) {
      rawData = this.k9(0, null, 3, null);
    }
    return this.l9(cellSize, margin, rawData);
  };
  QRCode.prototype.computeImageSize = function (cellSize, margin, size) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (margin === void 1) {
      Companion_getInstance_7();
      tmp_1 = 0;
    } else {
      tmp_1 = margin;
    }
    return this.m9(tmp_0, tmp_1, size);
  };
  QRCode.prototype.m9 = function (cellSize, margin, size) {
    return imul(size, cellSize) + imul(margin, 2) | 0;
  };
  QRCode.prototype.o9 = function (cellSize, margin, size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_7();
      margin = 0;
    }
    return this.m9(cellSize, margin, size);
  };
  QRCode.prototype.render = function (cellSize, margin, brightColor, darkColor, marginColor) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (margin === void 1) {
      Companion_getInstance_7();
      tmp_1 = 0;
    } else {
      tmp_1 = margin;
    }
    var tmp_2 = tmp_1;
    var tmp_3;
    if (brightColor === void 1) {
      Colors_getInstance();
      tmp_3 = -1;
    } else {
      tmp_3 = brightColor;
    }
    var tmp_4 = tmp_3;
    var tmp_5;
    if (darkColor === void 1) {
      Colors_getInstance();
      tmp_5 = -16777216;
    } else {
      tmp_5 = darkColor;
    }
    var tmp_6 = tmp_5;
    var tmp_7;
    if (marginColor === void 1) {
      Colors_getInstance();
      tmp_7 = -1;
    } else {
      tmp_7 = marginColor;
    }
    return this.p9(tmp_0, tmp_2, tmp_4, tmp_6, tmp_7);
  };
  QRCode.prototype.p9 = function (cellSize, margin, brightColor, darkColor, marginColor) {
    var tmp = this.k9(0, null, 3, null);
    return this.q9(cellSize, margin, tmp, null, brightColor, darkColor, marginColor, 8, null);
  };
  QRCode.prototype.r9 = function (cellSize, margin, brightColor, darkColor, marginColor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_7();
      margin = 0;
    }
    if (!(($mask0 & 4) === 0)) {
      Colors_getInstance();
      brightColor = -1;
    }
    if (!(($mask0 & 8) === 0)) {
      Colors_getInstance();
      darkColor = -16777216;
    }
    if (!(($mask0 & 16) === 0)) {
      Colors_getInstance();
      marginColor = -1;
    }
    return this.p9(cellSize, margin, brightColor, darkColor, marginColor);
  };
  QRCode.prototype.renderComputed = function (cellSize, margin, rawData, qrCodeGraphics, brightColor, darkColor, marginColor) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (margin === void 1) {
      Companion_getInstance_7();
      tmp_1 = 0;
    } else {
      tmp_1 = margin;
    }
    var tmp_2 = tmp_1;
    var tmp_3;
    if (rawData === void 1) {
      tmp_3 = this.k9(0, null, 3, null);
    } else {
      tmp_3 = rawData;
    }
    var tmp_4 = tmp_3;
    var tmp_5 = qrCodeGraphics === void 1 ? this.q8_1.newGraphicsSquare(this.l9(cellSize, margin, rawData)) : qrCodeGraphics;
    var tmp_6;
    if (brightColor === void 1) {
      Colors_getInstance();
      tmp_6 = -1;
    } else {
      tmp_6 = brightColor;
    }
    var tmp_7 = tmp_6;
    var tmp_8;
    if (darkColor === void 1) {
      Colors_getInstance();
      tmp_8 = -16777216;
    } else {
      tmp_8 = darkColor;
    }
    var tmp_9 = tmp_8;
    var tmp_10;
    if (marginColor === void 1) {
      Colors_getInstance();
      tmp_10 = -1;
    } else {
      tmp_10 = marginColor;
    }
    return this.s9(tmp_0, tmp_2, tmp_4, tmp_5, tmp_7, tmp_9, tmp_10);
  };
  QRCode.prototype.s9 = function (cellSize, margin, rawData, qrCodeGraphics, brightColor, darkColor, marginColor) {
    return this.t9(cellSize, margin, rawData, qrCodeGraphics, QRCode$render$lambda(darkColor, brightColor, marginColor));
  };
  QRCode.prototype.q9 = function (cellSize, margin, rawData, qrCodeGraphics, brightColor, darkColor, marginColor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_7();
      margin = 0;
    }
    if (!(($mask0 & 4) === 0)) {
      rawData = this.k9(0, null, 3, null);
    }
    if (!(($mask0 & 8) === 0))
      qrCodeGraphics = this.q8_1.newGraphicsSquare(this.l9(cellSize, margin, rawData));
    if (!(($mask0 & 16) === 0)) {
      Colors_getInstance();
      brightColor = -1;
    }
    if (!(($mask0 & 32) === 0)) {
      Colors_getInstance();
      darkColor = -16777216;
    }
    if (!(($mask0 & 64) === 0)) {
      Colors_getInstance();
      marginColor = -1;
    }
    return this.s9(cellSize, margin, rawData, qrCodeGraphics, brightColor, darkColor, marginColor);
  };
  QRCode.prototype.renderShaded = function (cellSize, margin, rawData, qrCodeGraphics, renderer) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (margin === void 1) {
      Companion_getInstance_7();
      tmp_1 = 0;
    } else {
      tmp_1 = margin;
    }
    var tmp_2 = tmp_1;
    var tmp_3;
    if (rawData === void 1) {
      tmp_3 = this.k9(0, null, 3, null);
    } else {
      tmp_3 = rawData;
    }
    return this.t9(tmp_0, tmp_2, tmp_3, qrCodeGraphics === void 1 ? this.q8_1.newGraphicsSquare(this.l9(cellSize, margin, rawData)) : qrCodeGraphics, renderer);
  };
  QRCode.prototype.t9 = function (cellSize, margin, rawData, qrCodeGraphics, renderer) {
    if (margin > 0) {
      var marginSquare = new QRCodeSquare(false, 0, 0, rawData.length, Companion_getInstance_8().u9());
      renderer(marginSquare, qrCodeGraphics);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject = rawData;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.github.g0dkar.qrcode.QRCode.renderShaded.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index_0 = 0;
      var indexedObject_0 = item;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'io.github.g0dkar.qrcode.QRCode.renderShaded.<anonymous>.<anonymous>' call
        var tmp1_0 = index_0;
        index_0 = tmp1_0 + 1 | 0;
        var tmp0__anonymous__q1qw7t_0 = tmp1_0;
        if (!(item_0 == null)) {
          var squareCanvas = this.q8_1.newGraphicsSquare(cellSize);
          renderer(item_0, squareCanvas);
          qrCodeGraphics.drawImage(squareCanvas, margin + imul(cellSize, tmp0__anonymous__q1qw7t_0) | 0, margin + imul(cellSize, tmp0__anonymous__q1qw7t) | 0);
        }
      }
    }
    return qrCodeGraphics;
  };
  QRCode.prototype.v9 = function (cellSize, margin, rawData, qrCodeGraphics, renderer, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    if (!(($mask0 & 2) === 0)) {
      Companion_getInstance_7();
      margin = 0;
    }
    if (!(($mask0 & 4) === 0)) {
      rawData = this.k9(0, null, 3, null);
    }
    if (!(($mask0 & 8) === 0))
      qrCodeGraphics = this.q8_1.newGraphicsSquare(this.l9(cellSize, margin, rawData));
    return this.t9(cellSize, margin, rawData, qrCodeGraphics, renderer);
  };
  QRCode.prototype.encode = function (type, maskPattern) {
    var tmp;
    if (type === void 1) {
      var tmp_0 = Companion_getInstance_7();
      tmp = tmp_0.l8(this.m8_1, this.n8_1, null, 4, null);
    } else {
      tmp = type;
    }
    return this.w9(tmp, maskPattern === void 1 ? MaskPattern_PATTERN000_getInstance() : maskPattern);
  };
  QRCode.prototype.w9 = function (type, maskPattern) {
    var moduleCount = imul(type, 4) + 17 | 0;
    var tmp = 0;
    var tmp_0 = moduleCount;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'io.github.g0dkar.qrcode.QRCode.encode.<anonymous>' call
      var tmp_3 = 0;
      var tmp_4 = moduleCount;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(tmp_4), null);
      var tmp_5 = tmp$ret$1;
      while (tmp_3 < tmp_4) {
        var tmp_6 = tmp_3;
        var tmp$ret$2;
        // Inline function 'io.github.g0dkar.qrcode.QRCode.encode.<anonymous>.<anonymous>' call
        tmp$ret$2 = null;
        tmp_5[tmp_6] = tmp$ret$2;
        tmp_3 = tmp_3 + 1 | 0;
      }
      tmp$ret$3 = tmp_5;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    var modules = tmp_1;
    var tmp_7 = QRCodeSetup_getInstance();
    tmp_7.y9(modules, 0, 2, null);
    var tmp_8 = QRCodeSetup_getInstance();
    tmp_8.z9(modules, 0, 2, null);
    var tmp_9 = QRCodeSetup_getInstance();
    tmp_9.aa(modules, 0, 2, null);
    QRCodeSetup_getInstance().setupPositionAdjustPattern(type, modules);
    QRCodeSetup_getInstance().setupTimingPattern(moduleCount, modules);
    QRCodeSetup_getInstance().setupTypeInfo(this.n8_1, maskPattern, moduleCount, modules);
    if (type >= 7) {
      QRCodeSetup_getInstance().setupTypeNumber(type, moduleCount, modules);
    }
    var data = createData(this, type);
    QRCodeSetup_getInstance().applyMaskPattern(data, maskPattern, moduleCount, modules);
    return modules;
  };
  QRCode.prototype.k9 = function (type, maskPattern, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp = Companion_getInstance_7();
      type = tmp.l8(this.m8_1, this.n8_1, null, 4, null);
    }
    if (!(($mask0 & 2) === 0))
      maskPattern = MaskPattern_PATTERN000_getInstance();
    return this.w9(type, maskPattern);
  };
  QRCode.prototype.toString = function () {
    return 'QRCode(data=' + this.m8_1 + (', errorCorrectionLevel=' + this.n8_1) + (', dataType=' + this.o8_1) + (', qrCodeData=' + getKClassFromExpression(this.p8_1).p4()) + ')';
  };
  QRCode.$metadata$ = classMeta('QRCode');
  Object.defineProperty(QRCode.prototype, 'qrCodeGraphicsFactory', {
    configurable: true,
    get: QRCode.prototype.j9,
    set: QRCode.prototype.i9
  });
  var ErrorCorrectionLevel_L_instance;
  var ErrorCorrectionLevel_M_instance;
  var ErrorCorrectionLevel_Q_instance;
  var ErrorCorrectionLevel_H_instance;
  function values() {
    return [ErrorCorrectionLevel_L_getInstance(), ErrorCorrectionLevel_M_getInstance(), ErrorCorrectionLevel_Q_getInstance(), ErrorCorrectionLevel_H_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'L':
        return ErrorCorrectionLevel_L_getInstance();
      case 'M':
        return ErrorCorrectionLevel_M_getInstance();
      case 'Q':
        return ErrorCorrectionLevel_Q_getInstance();
      case 'H':
        return ErrorCorrectionLevel_H_getInstance();
      default:
        ErrorCorrectionLevel_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ErrorCorrectionLevel_entriesInitialized;
  function ErrorCorrectionLevel_initEntries() {
    if (ErrorCorrectionLevel_entriesInitialized)
      return Unit_getInstance();
    ErrorCorrectionLevel_entriesInitialized = true;
    ErrorCorrectionLevel_L_instance = new ErrorCorrectionLevel('L', 0, 1, 21);
    ErrorCorrectionLevel_M_instance = new ErrorCorrectionLevel('M', 1, 0, 25);
    ErrorCorrectionLevel_Q_instance = new ErrorCorrectionLevel('Q', 2, 3, 30);
    ErrorCorrectionLevel_H_instance = new ErrorCorrectionLevel('H', 3, 2, 34);
  }
  function ErrorCorrectionLevel(name, ordinal, value, maxTypeNum) {
    Enum.call(this, name, ordinal);
    this.j8_1 = value;
    this.k8_1 = maxTypeNum;
  }
  ErrorCorrectionLevel.prototype.t = function () {
    return this.j8_1;
  };
  ErrorCorrectionLevel.prototype.ba = function () {
    return this.k8_1;
  };
  ErrorCorrectionLevel.$metadata$ = classMeta('ErrorCorrectionLevel', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(ErrorCorrectionLevel.prototype, 'value', {
    configurable: true,
    get: ErrorCorrectionLevel.prototype.t
  });
  Object.defineProperty(ErrorCorrectionLevel.prototype, 'maxTypeNum', {
    configurable: true,
    get: ErrorCorrectionLevel.prototype.ba
  });
  Object.defineProperty(ErrorCorrectionLevel.prototype, 'name', {
    configurable: true,
    get: ErrorCorrectionLevel.prototype.j7
  });
  Object.defineProperty(ErrorCorrectionLevel.prototype, 'ordinal', {
    configurable: true,
    get: ErrorCorrectionLevel.prototype.k7
  });
  var MaskPattern_PATTERN000_instance;
  var MaskPattern_PATTERN001_instance;
  var MaskPattern_PATTERN010_instance;
  var MaskPattern_PATTERN011_instance;
  var MaskPattern_PATTERN100_instance;
  var MaskPattern_PATTERN101_instance;
  var MaskPattern_PATTERN110_instance;
  var MaskPattern_PATTERN111_instance;
  function values_0() {
    return [MaskPattern_PATTERN000_getInstance(), MaskPattern_PATTERN001_getInstance(), MaskPattern_PATTERN010_getInstance(), MaskPattern_PATTERN011_getInstance(), MaskPattern_PATTERN100_getInstance(), MaskPattern_PATTERN101_getInstance(), MaskPattern_PATTERN110_getInstance(), MaskPattern_PATTERN111_getInstance()];
  }
  function valueOf_0(value) {
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
        THROW_ISE();
        break;
    }
  }
  var MaskPattern_entriesInitialized;
  function MaskPattern_initEntries() {
    if (MaskPattern_entriesInitialized)
      return Unit_getInstance();
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
  MaskPattern.$metadata$ = classMeta('MaskPattern', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(MaskPattern.prototype, 'name', {
    configurable: true,
    get: MaskPattern.prototype.j7
  });
  Object.defineProperty(MaskPattern.prototype, 'ordinal', {
    configurable: true,
    get: MaskPattern.prototype.k7
  });
  var QRCodeDataType_NUMBERS_instance;
  var QRCodeDataType_UPPER_ALPHA_NUM_instance;
  var QRCodeDataType_DEFAULT_instance;
  function values_1() {
    return [QRCodeDataType_NUMBERS_getInstance(), QRCodeDataType_UPPER_ALPHA_NUM_getInstance(), QRCodeDataType_DEFAULT_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'NUMBERS':
        return QRCodeDataType_NUMBERS_getInstance();
      case 'UPPER_ALPHA_NUM':
        return QRCodeDataType_UPPER_ALPHA_NUM_getInstance();
      case 'DEFAULT':
        return QRCodeDataType_DEFAULT_getInstance();
      default:
        QRCodeDataType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var QRCodeDataType_entriesInitialized;
  function QRCodeDataType_initEntries() {
    if (QRCodeDataType_entriesInitialized)
      return Unit_getInstance();
    QRCodeDataType_entriesInitialized = true;
    QRCodeDataType_NUMBERS_instance = new QRCodeDataType('NUMBERS', 0, 1);
    QRCodeDataType_UPPER_ALPHA_NUM_instance = new QRCodeDataType('UPPER_ALPHA_NUM', 1, 2);
    QRCodeDataType_DEFAULT_instance = new QRCodeDataType('DEFAULT', 2, 4);
  }
  function QRCodeDataType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.t8_1 = value;
  }
  QRCodeDataType.prototype.t = function () {
    return this.t8_1;
  };
  QRCodeDataType.$metadata$ = classMeta('QRCodeDataType', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(QRCodeDataType.prototype, 'value', {
    configurable: true,
    get: QRCodeDataType.prototype.t
  });
  Object.defineProperty(QRCodeDataType.prototype, 'name', {
    configurable: true,
    get: QRCodeDataType.prototype.j7
  });
  Object.defineProperty(QRCodeDataType.prototype, 'ordinal', {
    configurable: true,
    get: QRCodeDataType.prototype.k7
  });
  function ErrorCorrectionLevel_L_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_L_instance;
  }
  function ErrorCorrectionLevel_M_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_M_instance;
  }
  function ErrorCorrectionLevel_Q_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_Q_instance;
  }
  function ErrorCorrectionLevel_H_getInstance() {
    ErrorCorrectionLevel_initEntries();
    return ErrorCorrectionLevel_H_instance;
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
  function get_0($this, index) {
    return (($this.y8_1[index / 8 | 0] >>> (7 - (index % 8 | 0) | 0) | 0) & 1) === 1;
  }
  function BitBuffer() {
    this.a9_1 = 32;
    this.y8_1 = new Int32Array(this.a9_1);
    this.z8_1 = 0;
  }
  BitBuffer.prototype.ea = function () {
    return this.y8_1;
  };
  BitBuffer.prototype.put = function (num, length) {
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.putBit(((num >>> ((length - i | 0) - 1 | 0) | 0) & 1) === 1);
      }
       while (inductionVariable < length);
  };
  BitBuffer.prototype.putBit = function (bit) {
    if (this.z8_1 === imul(this.y8_1.length, 8)) {
      this.y8_1 = copyOf(this.y8_1, this.y8_1.length + this.a9_1 | 0);
    }
    if (bit) {
      this.y8_1[this.z8_1 / 8 | 0] = this.y8_1[this.z8_1 / 8 | 0] | (128 >>> (this.z8_1 % 8 | 0) | 0);
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.z8_1;
    tmp0_this.z8_1 = tmp1 + 1 | 0;
  };
  BitBuffer.prototype.toString = function () {
    var buffer = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = this.z8_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffer.r1(get_0(this, i) ? _Char___init__impl__6a9atx(49) : _Char___init__impl__6a9atx(48));
      }
       while (inductionVariable < last);
    return buffer.toString();
  };
  BitBuffer.$metadata$ = classMeta('BitBuffer');
  function Polynomial_init_$Init$(num, shift, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      shift = 0;
    Polynomial.call($this, num, shift);
    return $this;
  }
  function Polynomial_init_$Create$(num, shift, $mask0, $marker) {
    return Polynomial_init_$Init$(num, shift, $mask0, $marker, Object.create(Polynomial.prototype));
  }
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
    var shift_0 = shift === void 1 ? 0 : shift;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var inductionVariable = 0;
      var last = num.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.github.g0dkar.qrcode.internals.Polynomial.<anonymous>' call
          var tmp0__anonymous__q1qw7t = num[index];
          tmp$ret$0 = !(tmp0__anonymous__q1qw7t === 0);
          if (tmp$ret$0) {
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
    var tmp_1 = (num.length - offset | 0) + shift_0 | 0;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'io.github.g0dkar.qrcode.internals.Polynomial.<anonymous>' call
      tmp$ret$2 = 0;
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.fa_1 = tmp_2;
    arraycopy(this, num, offset, this.fa_1, 0, num.length - offset | 0);
  }
  Polynomial.prototype.get = function (i) {
    return this.fa_1[i];
  };
  Polynomial.prototype.len = function () {
    return this.fa_1.length;
  };
  Polynomial.prototype.multiply = function (other) {
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp = 0;
    var tmp_0 = (this.len() + other.len() | 0) - 1 | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'io.github.g0dkar.qrcode.internals.Polynomial.multiply.<anonymous>' call
      tmp$ret$0 = 0;
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    var tmp0_let = tmp_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.github.g0dkar.qrcode.internals.Polynomial.multiply.<anonymous>' call
    var inductionVariable = 0;
    var last = this.len();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = other.len();
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            tmp0_let[i + j | 0] = tmp0_let[i + j | 0] ^ QRMath_getInstance().gexp(QRMath_getInstance().glog(this.get(i)) + QRMath_getInstance().glog(other.get(j)) | 0);
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    tmp$ret$1 = Polynomial_init_$Create$(tmp0_let, 0, 2, null);
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Polynomial.prototype.mod = function (other) {
    var tmp;
    if ((this.len() - other.len() | 0) < 0) {
      tmp = this;
    } else {
      var ratio = QRMath_getInstance().glog(this.get(0)) - QRMath_getInstance().glog(other.get(0)) | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = this.fa_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyOf;
      tmp$ret$1 = tmp$ret$0.slice();
      var result = tmp$ret$1;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var tmp1_forEachIndexed = other.fa_1;
      var index = 0;
      var indexedObject = tmp1_forEachIndexed;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.github.g0dkar.qrcode.internals.Polynomial.mod.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp2__anonymous__z9zvc9 = tmp1;
        result[tmp2__anonymous__z9zvc9] = result[tmp2__anonymous__z9zvc9] ^ QRMath_getInstance().gexp(QRMath_getInstance().glog(item) + ratio | 0);
      }
      tmp = Polynomial_init_$Create$(result, 0, 2, null).mod(other);
    }
    return tmp;
  };
  Polynomial.$metadata$ = classMeta('Polynomial');
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
    return (0 <= col ? col < probeSize : false) ? row === 0 ? true : row === (probeSize - 1 | 0) : false;
  }
  function isLeftRightColSquare($this, row, col, probeSize) {
    return (0 <= row ? row < probeSize : false) ? col === 0 ? true : col === (probeSize - 1 | 0) : false;
  }
  function isMidSquare($this, row, col, probeSize) {
    return ((2 <= row ? row < (probeSize - 2 | 0) : false) ? 2 <= col : false) ? col <= (probeSize - 3 | 0) : false;
  }
  function findSquareRegion($this, row, col, probeSize) {
    var tmp0_subject = row;
    var tmp;
    if (tmp0_subject === 0) {
      var tmp1_subject = col;
      tmp = tmp1_subject === 0 ? QRCodeRegion_TOP_LEFT_CORNER_getInstance() : tmp1_subject === (probeSize - 1 | 0) ? QRCodeRegion_TOP_RIGHT_CORNER_getInstance() : tmp1_subject === probeSize ? QRCodeRegion_MARGIN_getInstance() : QRCodeRegion_TOP_MID_getInstance();
    } else if (tmp0_subject === (probeSize - 1 | 0)) {
      var tmp2_subject = col;
      tmp = tmp2_subject === 0 ? QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance() : tmp2_subject === (probeSize - 1 | 0) ? QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance() : tmp2_subject === probeSize ? QRCodeRegion_MARGIN_getInstance() : QRCodeRegion_BOTTOM_MID_getInstance();
    } else if (tmp0_subject === probeSize) {
      tmp = QRCodeRegion_MARGIN_getInstance();
    } else {
      var tmp3_subject = col;
      tmp = tmp3_subject === 0 ? QRCodeRegion_LEFT_MID_getInstance() : tmp3_subject === (probeSize - 1 | 0) ? QRCodeRegion_RIGHT_MID_getInstance() : tmp3_subject === probeSize ? QRCodeRegion_MARGIN_getInstance() : QRCodeRegion_CENTER_getInstance();
    }
    return tmp;
  }
  function set($this, row, col, value, modules) {
    var qrCodeSquare = modules[row][col];
    if (!(qrCodeSquare == null)) {
      qrCodeSquare.d9_1 = value;
    } else {
      var tmp = modules[row];
      var tmp_0 = modules.length;
      tmp[col] = QRCodeSquare_init_$Create$(value, row, col, tmp_0, null, 16, null);
    }
  }
  function QRCodeSetup() {
    QRCodeSetup_instance = this;
    this.x9_1 = 7;
  }
  QRCodeSetup.prototype.setupTopLeftPositionProbePattern = function (modules, probeSize) {
    return this.ga(modules, probeSize === void 1 ? 7 : probeSize);
  };
  QRCodeSetup.prototype.ga = function (modules, probeSize) {
    this.ha(0, 0, modules, probeSize);
  };
  QRCodeSetup.prototype.y9 = function (modules, probeSize, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      probeSize = 7;
    return this.ga(modules, probeSize);
  };
  QRCodeSetup.prototype.setupTopRightPositionProbePattern = function (modules, probeSize) {
    return this.ia(modules, probeSize === void 1 ? 7 : probeSize);
  };
  QRCodeSetup.prototype.ia = function (modules, probeSize) {
    this.ha(modules.length - probeSize | 0, 0, modules, probeSize);
  };
  QRCodeSetup.prototype.z9 = function (modules, probeSize, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      probeSize = 7;
    return this.ia(modules, probeSize);
  };
  QRCodeSetup.prototype.setupBottomLeftPositionProbePattern = function (modules, probeSize) {
    return this.ja(modules, probeSize === void 1 ? 7 : probeSize);
  };
  QRCodeSetup.prototype.ja = function (modules, probeSize) {
    this.ha(0, modules.length - probeSize | 0, modules, probeSize);
  };
  QRCodeSetup.prototype.aa = function (modules, probeSize, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      probeSize = 7;
    return this.ja(modules, probeSize);
  };
  QRCodeSetup.prototype.setupPositionProbePattern = function (rowOffset, colOffset, modules, probeSize) {
    return this.ha(rowOffset, colOffset, modules, probeSize === void 1 ? 7 : probeSize);
  };
  QRCodeSetup.prototype.ha = function (rowOffset, colOffset, modules, probeSize) {
    var modulesSize = modules.length;
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
            var isDark = (isTopBottomRowSquare(this, row, col, probeSize) ? true : isLeftRightColSquare(this, row, col, probeSize)) ? true : isMidSquare(this, row, col, probeSize);
            var region = findSquareRegion(this, row, col, probeSize);
            var tmp = modules[row + rowOffset | 0];
            var tmp_0 = col + colOffset | 0;
            var tmp2_row = row + rowOffset | 0;
            var tmp3_col = col + colOffset | 0;
            var tmp4_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_POSITION_PROBE_getInstance(), region);
            tmp[tmp_0] = new QRCodeSquare(isDark, tmp2_row, tmp3_col, modulesSize, tmp4_squareInfo);
          }
           while (!(col === probeSize));
      }
       while (!(row === probeSize));
  };
  QRCodeSetup.prototype.setupPositionAdjustPattern = function (type, modules) {
    var pos = QRUtil_getInstance().getPatternPosition(type);
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
                    var tmp4_dark = (((r === -2 ? true : r === 2) ? true : c === -2) ? true : c === 2) ? true : r === 0 ? c === 0 : false;
                    var tmp5_row = row + r | 0;
                    var tmp6_col = col + c | 0;
                    var tmp7_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_POSITION_ADJUST_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
                    var tmp8_moduleSize = modules.length;
                    tmp[tmp_0] = new QRCodeSquare(tmp4_dark, tmp5_row, tmp6_col, tmp8_moduleSize, tmp7_squareInfo);
                  }
                   while (inductionVariable_2 <= 2);
              }
               while (inductionVariable_1 <= 2);
          }
           while (inductionVariable_0 <= last_0);
      }
       while (inductionVariable <= last);
  };
  QRCodeSetup.prototype.setupTimingPattern = function (moduleCount, modules) {
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
        var tmp1_dark = (r % 2 | 0) === 0;
        var tmp2_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_TIMING_PATTERN_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
        var tmp3_moduleSize = modules.length;
        tmp[6] = new QRCodeSquare(tmp1_dark, r, 6, tmp3_moduleSize, tmp2_squareInfo);
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
        var tmp5_dark = (c % 2 | 0) === 0;
        var tmp6_squareInfo = new QRCodeSquareInfo(QRCodeSquareType_TIMING_PATTERN_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
        var tmp7_moduleSize = modules.length;
        tmp_0[c] = new QRCodeSquare(tmp5_dark, 6, c, tmp7_moduleSize, tmp6_squareInfo);
      }
       while (inductionVariable_0 < last_0);
  };
  QRCodeSetup.prototype.setupTypeInfo = function (errorCorrectionLevel, maskPattern, moduleCount, modules) {
    var data = errorCorrectionLevel.j8_1 << 3 | maskPattern.i7_1;
    var bits = QRUtil_getInstance().getBCHTypeInfo(data);
    var inductionVariable = 0;
    if (inductionVariable <= 14)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var mod = (bits >> i & 1) === 1;
        if (i < 6) {
          set(this, i, 8, mod, modules);
        } else if (i < 8) {
          set(this, i + 1 | 0, 8, mod, modules);
        } else {
          set(this, (moduleCount - 15 | 0) + i | 0, 8, mod, modules);
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
          set(this, 8, (moduleCount - i_0 | 0) - 1 | 0, mod_0, modules);
        } else if (i_0 < 9) {
          set(this, 8, 15 - i_0 | 0, mod_0, modules);
        } else {
          set(this, 8, (15 - i_0 | 0) - 1 | 0, mod_0, modules);
        }
      }
       while (inductionVariable_0 <= 14);
    set(this, moduleCount - 8 | 0, 8, true, modules);
  };
  QRCodeSetup.prototype.setupTypeNumber = function (type, moduleCount, modules) {
    var bits = QRUtil_getInstance().getBCHTypeNumber(type);
    var inductionVariable = 0;
    if (inductionVariable <= 17)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var mod = (bits >> i & 1) === 1;
        set(this, i / 3 | 0, (((i % 3 | 0) + moduleCount | 0) - 8 | 0) - 3 | 0, mod, modules);
      }
       while (inductionVariable <= 17);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 17)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var mod_0 = (bits >> i_0 & 1) === 1;
        set(this, (((i_0 % 3 | 0) + moduleCount | 0) - 8 | 0) - 3 | 0, i_0 / 3 | 0, mod_0, modules);
      }
       while (inductionVariable_0 <= 17);
  };
  QRCodeSetup.prototype.applyMaskPattern = function (data, maskPattern, moduleCount, modules) {
    var inc = -1;
    var bitIndex = 7;
    var byteIndex = 0;
    var row = moduleCount - 1 | 0;
    var col = moduleCount - 1 | 0;
    while (col > 0) {
      if (col === 6) {
        var tmp0 = col;
        col = tmp0 - 1 | 0;
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
              var mask = QRUtil_getInstance().getMask(maskPattern, row, col - c | 0);
              if (mask) {
                dark = !dark;
              }
              set(this, row, col - c | 0, dark, modules);
              var tmp2 = bitIndex;
              bitIndex = tmp2 - 1 | 0;
              if (bitIndex === -1) {
                var tmp3 = byteIndex;
                byteIndex = tmp3 + 1 | 0;
                bitIndex = 7;
              }
            }
          }
           while (inductionVariable <= 1);
        row = row + inc | 0;
        if (row < 0 ? true : moduleCount <= row) {
          row = row - inc | 0;
          inc = -inc | 0;
          break $l$loop;
        }
      }
      col = col - 2 | 0;
    }
  };
  QRCodeSetup.$metadata$ = objectMeta('QRCodeSetup');
  var QRCodeSetup_instance;
  function QRCodeSetup_getInstance() {
    if (QRCodeSetup_instance == null)
      new QRCodeSetup();
    return QRCodeSetup_instance;
  }
  function QRCodeSquare_init_$Init$(dark, row, col, moduleSize, squareInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      squareInfo = new QRCodeSquareInfo(QRCodeSquareType_DEFAULT_getInstance(), QRCodeRegion_UNKNOWN_getInstance());
    QRCodeSquare.call($this, dark, row, col, moduleSize, squareInfo);
    return $this;
  }
  function QRCodeSquare_init_$Create$(dark, row, col, moduleSize, squareInfo, $mask0, $marker) {
    return QRCodeSquare_init_$Init$(dark, row, col, moduleSize, squareInfo, $mask0, $marker, Object.create(QRCodeSquare.prototype));
  }
  function QRCodeSquare(dark, row, col, moduleSize, squareInfo) {
    var squareInfo_0 = squareInfo === void 1 ? new QRCodeSquareInfo(QRCodeSquareType_DEFAULT_getInstance(), QRCodeRegion_UNKNOWN_getInstance()) : squareInfo;
    this.d9_1 = dark;
    this.e9_1 = row;
    this.f9_1 = col;
    this.g9_1 = moduleSize;
    this.h9_1 = squareInfo_0;
  }
  QRCodeSquare.prototype.ka = function (_set____db54di) {
    this.d9_1 = _set____db54di;
  };
  QRCodeSquare.prototype.la = function () {
    return this.d9_1;
  };
  QRCodeSquare.prototype.ma = function () {
    return this.e9_1;
  };
  QRCodeSquare.prototype.na = function () {
    return this.f9_1;
  };
  QRCodeSquare.prototype.oa = function () {
    return this.g9_1;
  };
  QRCodeSquare.prototype.pa = function () {
    return this.h9_1;
  };
  QRCodeSquare.prototype.absoluteX = function (cellSize) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    return this.qa(tmp);
  };
  QRCodeSquare.prototype.qa = function (cellSize) {
    return imul(this.f9_1, cellSize);
  };
  QRCodeSquare.prototype.ra = function (cellSize, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    return this.qa(cellSize);
  };
  QRCodeSquare.prototype.absoluteY = function (cellSize) {
    var tmp;
    if (cellSize === void 1) {
      Companion_getInstance_7();
      tmp = 25;
    } else {
      tmp = cellSize;
    }
    return this.sa(tmp);
  };
  QRCodeSquare.prototype.sa = function (cellSize) {
    return imul(this.e9_1, cellSize);
  };
  QRCodeSquare.prototype.ta = function (cellSize, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance_7();
      cellSize = 25;
    }
    return this.sa(cellSize);
  };
  QRCodeSquare.prototype.component1 = function () {
    return this.d9_1;
  };
  QRCodeSquare.prototype.component2 = function () {
    return this.e9_1;
  };
  QRCodeSquare.prototype.component3 = function () {
    return this.f9_1;
  };
  QRCodeSquare.prototype.component4 = function () {
    return this.g9_1;
  };
  QRCodeSquare.prototype.component5 = function () {
    return this.h9_1;
  };
  QRCodeSquare.prototype.copy = function (dark, row, col, moduleSize, squareInfo) {
    return this.ua(dark === void 1 ? this.d9_1 : dark, row === void 1 ? this.e9_1 : row, col === void 1 ? this.f9_1 : col, moduleSize === void 1 ? this.g9_1 : moduleSize, squareInfo === void 1 ? this.h9_1 : squareInfo);
  };
  QRCodeSquare.prototype.ua = function (dark, row, col, moduleSize, squareInfo) {
    return new QRCodeSquare(dark, row, col, moduleSize, squareInfo);
  };
  QRCodeSquare.prototype.va = function (dark, row, col, moduleSize, squareInfo, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dark = this.d9_1;
    if (!(($mask0 & 2) === 0))
      row = this.e9_1;
    if (!(($mask0 & 4) === 0))
      col = this.f9_1;
    if (!(($mask0 & 8) === 0))
      moduleSize = this.g9_1;
    if (!(($mask0 & 16) === 0))
      squareInfo = this.h9_1;
    return this.ua(dark, row, col, moduleSize, squareInfo);
  };
  QRCodeSquare.prototype.toString = function () {
    return 'QRCodeSquare(dark=' + this.d9_1 + ', row=' + this.e9_1 + ', col=' + this.f9_1 + ', moduleSize=' + this.g9_1 + ', squareInfo=' + this.h9_1 + ')';
  };
  QRCodeSquare.prototype.hashCode = function () {
    var result = this.d9_1 | 0;
    result = imul(result, 31) + this.e9_1 | 0;
    result = imul(result, 31) + this.f9_1 | 0;
    result = imul(result, 31) + this.g9_1 | 0;
    result = imul(result, 31) + this.h9_1.hashCode() | 0;
    return result;
  };
  QRCodeSquare.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QRCodeSquare))
      return false;
    var tmp0_other_with_cast = other instanceof QRCodeSquare ? other : THROW_CCE();
    if (!(this.d9_1 === tmp0_other_with_cast.d9_1))
      return false;
    if (!(this.e9_1 === tmp0_other_with_cast.e9_1))
      return false;
    if (!(this.f9_1 === tmp0_other_with_cast.f9_1))
      return false;
    if (!(this.g9_1 === tmp0_other_with_cast.g9_1))
      return false;
    if (!this.h9_1.equals(tmp0_other_with_cast.h9_1))
      return false;
    return true;
  };
  QRCodeSquare.$metadata$ = classMeta('QRCodeSquare');
  Object.defineProperty(QRCodeSquare.prototype, 'dark', {
    configurable: true,
    get: QRCodeSquare.prototype.la,
    set: QRCodeSquare.prototype.ka
  });
  Object.defineProperty(QRCodeSquare.prototype, 'row', {
    configurable: true,
    get: QRCodeSquare.prototype.ma
  });
  Object.defineProperty(QRCodeSquare.prototype, 'col', {
    configurable: true,
    get: QRCodeSquare.prototype.na
  });
  Object.defineProperty(QRCodeSquare.prototype, 'moduleSize', {
    configurable: true,
    get: QRCodeSquare.prototype.oa
  });
  Object.defineProperty(QRCodeSquare.prototype, 'squareInfo', {
    configurable: true,
    get: QRCodeSquare.prototype.pa
  });
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.prototype.u9 = function () {
    return new QRCodeSquareInfo(QRCodeSquareType_MARGIN_getInstance(), QRCodeRegion_MARGIN_getInstance());
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function QRCodeSquareInfo(type, region) {
    Companion_getInstance_8();
    this.b9_1 = type;
    this.c9_1 = region;
  }
  QRCodeSquareInfo.prototype.wa = function () {
    return this.b9_1;
  };
  QRCodeSquareInfo.prototype.xa = function () {
    return this.c9_1;
  };
  QRCodeSquareInfo.prototype.component1 = function () {
    return this.b9_1;
  };
  QRCodeSquareInfo.prototype.component2 = function () {
    return this.c9_1;
  };
  QRCodeSquareInfo.prototype.copy = function (type, region) {
    return this.ya(type === void 1 ? this.b9_1 : type, region === void 1 ? this.c9_1 : region);
  };
  QRCodeSquareInfo.prototype.ya = function (type, region) {
    return new QRCodeSquareInfo(type, region);
  };
  QRCodeSquareInfo.prototype.za = function (type, region, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.b9_1;
    if (!(($mask0 & 2) === 0))
      region = this.c9_1;
    return this.ya(type, region);
  };
  QRCodeSquareInfo.prototype.toString = function () {
    return 'QRCodeSquareInfo(type=' + this.b9_1 + ', region=' + this.c9_1 + ')';
  };
  QRCodeSquareInfo.prototype.hashCode = function () {
    var result = this.b9_1.hashCode();
    result = imul(result, 31) + this.c9_1.hashCode() | 0;
    return result;
  };
  QRCodeSquareInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QRCodeSquareInfo))
      return false;
    var tmp0_other_with_cast = other instanceof QRCodeSquareInfo ? other : THROW_CCE();
    if (!this.b9_1.equals(tmp0_other_with_cast.b9_1))
      return false;
    if (!this.c9_1.equals(tmp0_other_with_cast.c9_1))
      return false;
    return true;
  };
  QRCodeSquareInfo.$metadata$ = classMeta('QRCodeSquareInfo');
  Object.defineProperty(QRCodeSquareInfo.prototype, 'type', {
    configurable: true,
    get: QRCodeSquareInfo.prototype.wa
  });
  Object.defineProperty(QRCodeSquareInfo.prototype, 'region', {
    configurable: true,
    get: QRCodeSquareInfo.prototype.xa
  });
  var QRCodeSquareType_POSITION_PROBE_instance;
  var QRCodeSquareType_POSITION_ADJUST_instance;
  var QRCodeSquareType_TIMING_PATTERN_instance;
  var QRCodeSquareType_DEFAULT_instance;
  var QRCodeSquareType_MARGIN_instance;
  function values_2() {
    return [QRCodeSquareType_POSITION_PROBE_getInstance(), QRCodeSquareType_POSITION_ADJUST_getInstance(), QRCodeSquareType_TIMING_PATTERN_getInstance(), QRCodeSquareType_DEFAULT_getInstance(), QRCodeSquareType_MARGIN_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'POSITION_PROBE':
        return QRCodeSquareType_POSITION_PROBE_getInstance();
      case 'POSITION_ADJUST':
        return QRCodeSquareType_POSITION_ADJUST_getInstance();
      case 'TIMING_PATTERN':
        return QRCodeSquareType_TIMING_PATTERN_getInstance();
      case 'DEFAULT':
        return QRCodeSquareType_DEFAULT_getInstance();
      case 'MARGIN':
        return QRCodeSquareType_MARGIN_getInstance();
      default:
        QRCodeSquareType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var QRCodeSquareType_entriesInitialized;
  function QRCodeSquareType_initEntries() {
    if (QRCodeSquareType_entriesInitialized)
      return Unit_getInstance();
    QRCodeSquareType_entriesInitialized = true;
    QRCodeSquareType_POSITION_PROBE_instance = new QRCodeSquareType('POSITION_PROBE', 0);
    QRCodeSquareType_POSITION_ADJUST_instance = new QRCodeSquareType('POSITION_ADJUST', 1);
    QRCodeSquareType_TIMING_PATTERN_instance = new QRCodeSquareType('TIMING_PATTERN', 2);
    QRCodeSquareType_DEFAULT_instance = new QRCodeSquareType('DEFAULT', 3);
    QRCodeSquareType_MARGIN_instance = new QRCodeSquareType('MARGIN', 4);
  }
  function QRCodeSquareType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  QRCodeSquareType.$metadata$ = classMeta('QRCodeSquareType', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(QRCodeSquareType.prototype, 'name', {
    configurable: true,
    get: QRCodeSquareType.prototype.j7
  });
  Object.defineProperty(QRCodeSquareType.prototype, 'ordinal', {
    configurable: true,
    get: QRCodeSquareType.prototype.k7
  });
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
  function values_3() {
    return [QRCodeRegion_TOP_LEFT_CORNER_getInstance(), QRCodeRegion_TOP_RIGHT_CORNER_getInstance(), QRCodeRegion_TOP_MID_getInstance(), QRCodeRegion_LEFT_MID_getInstance(), QRCodeRegion_RIGHT_MID_getInstance(), QRCodeRegion_CENTER_getInstance(), QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance(), QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance(), QRCodeRegion_BOTTOM_MID_getInstance(), QRCodeRegion_MARGIN_getInstance(), QRCodeRegion_UNKNOWN_getInstance()];
  }
  function valueOf_3(value) {
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
        THROW_ISE();
        break;
    }
  }
  var QRCodeRegion_entriesInitialized;
  function QRCodeRegion_initEntries() {
    if (QRCodeRegion_entriesInitialized)
      return Unit_getInstance();
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
  QRCodeRegion.$metadata$ = classMeta('QRCodeRegion', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(QRCodeRegion.prototype, 'name', {
    configurable: true,
    get: QRCodeRegion.prototype.j7
  });
  Object.defineProperty(QRCodeRegion.prototype, 'ordinal', {
    configurable: true,
    get: QRCodeRegion.prototype.k7
  });
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
  function QRCodeSquareType_MARGIN_getInstance() {
    QRCodeSquareType_initEntries();
    return QRCodeSquareType_MARGIN_instance;
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
    this.u8_1 = dataType;
    this.v8_1 = data;
  }
  QRData.prototype.getLengthInBits = function (type) {
    var tmp0_subject = type;
    var tmp;
    if (1 <= tmp0_subject ? tmp0_subject <= 9 : false) {
      var tmp1_subject = this.u8_1;
      var tmp0 = tmp1_subject.i7_1;
      var tmp_0;
      switch (tmp0) {
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
    } else if (1 <= tmp0_subject ? tmp0_subject <= 26 : false) {
      var tmp2_subject = this.u8_1;
      var tmp0_0 = tmp2_subject.i7_1;
      var tmp_1;
      switch (tmp0_0) {
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
    } else if (1 <= tmp0_subject ? tmp0_subject <= 40 : false) {
      var tmp3_subject = this.u8_1;
      var tmp0_1 = tmp3_subject.i7_1;
      var tmp_2;
      switch (tmp0_1) {
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
      throw IllegalArgumentException_init_$Create$("'type' must be greater than 0 and cannot be greater than 40: " + type);
    }
    return tmp;
  };
  QRData.$metadata$ = classMeta('QRData');
  function QR8BitByte(data) {
    QRData.call(this, QRCodeDataType_DEFAULT_getInstance(), data);
    this.gb_1 = encodeToByteArray(data);
  }
  QR8BitByte.prototype.write = function (buffer) {
    var inductionVariable = 0;
    var last = this.gb_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffer.put(this.gb_1[i], 8);
      }
       while (inductionVariable <= last);
  };
  QR8BitByte.prototype.length = function () {
    return this.gb_1.length;
  };
  QR8BitByte.$metadata$ = classMeta('QR8BitByte', undefined, undefined, undefined, undefined, QRData.prototype);
  function charCode($this, c) {
    var tmp0_subject = c;
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(48));
    } else if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65)) + 10 | 0;
    } else {
      var tmp1_subject = c;
      var tmp_0;
      if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(32)))) {
        tmp_0 = 36;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(36)))) {
        tmp_0 = 37;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(37)))) {
        tmp_0 = 38;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(42)))) {
        tmp_0 = 39;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(43)))) {
        tmp_0 = 40;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(45)))) {
        tmp_0 = 41;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(46)))) {
        tmp_0 = 42;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(47)))) {
        tmp_0 = 43;
      } else if (equals(new Char_0(tmp1_subject), new Char_0(_Char___init__impl__6a9atx(58)))) {
        tmp_0 = 44;
      } else {
        throw IllegalArgumentException_init_$Create$('Illegal character: ' + new Char_0(c));
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function QRAlphaNum(data) {
    QRData.call(this, QRCodeDataType_UPPER_ALPHA_NUM_getInstance(), data);
  }
  QRAlphaNum.prototype.write = function (buffer) {
    var i = 0;
    var dataLength = this.v8_1.length;
    while ((i + 1 | 0) < dataLength) {
      buffer.put(imul(charCode(this, charSequenceGet(this.v8_1, i)), 45) + charCode(this, charSequenceGet(this.v8_1, i + 1 | 0)) | 0, 11);
      i = i + 2 | 0;
    }
    if (i < dataLength) {
      buffer.put(charCode(this, charSequenceGet(this.v8_1, i)), 6);
    }
  };
  QRAlphaNum.prototype.length = function () {
    return this.v8_1.length;
  };
  QRAlphaNum.$metadata$ = classMeta('QRAlphaNum', undefined, undefined, undefined, undefined, QRData.prototype);
  function QRNumber(data) {
    QRData.call(this, QRCodeDataType_NUMBERS_getInstance(), data);
  }
  QRNumber.prototype.write = function (buffer) {
    var i = 0;
    var len = this.length();
    while ((i + 2 | 0) < len) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = this.v8_1;
      var tmp1_substring = i;
      var tmp2_substring = i + 3 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(tmp1_substring, tmp2_substring);
      var num = toInt(tmp$ret$1);
      buffer.put(num, 10);
      i = i + 3 | 0;
    }
    if (i < len) {
      if ((len - i | 0) === 1) {
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp3_substring = this.v8_1;
        var tmp4_substring = i;
        var tmp5_substring = i + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp3_substring;
        tmp$ret$3 = tmp$ret$2.substring(tmp4_substring, tmp5_substring);
        var num_0 = toInt(tmp$ret$3);
        buffer.put(num_0, 4);
      } else if ((len - i | 0) === 2) {
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp6_substring = this.v8_1;
        var tmp7_substring = i;
        var tmp8_substring = i + 2 | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = tmp6_substring;
        tmp$ret$5 = tmp$ret$4.substring(tmp7_substring, tmp8_substring);
        var num_1 = toInt(tmp$ret$5);
        buffer.put(num_1, 7);
      }
    }
  };
  QRNumber.prototype.length = function () {
    return this.v8_1.length;
  };
  QRNumber.$metadata$ = classMeta('QRNumber', undefined, undefined, undefined, undefined, QRData.prototype);
  function QRMath() {
    QRMath_instance = this;
    this.hb_1 = new Int32Array(256);
    this.ib_1 = new Int32Array(256);
    var inductionVariable = 0;
    if (inductionVariable <= 7)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.hb_1[i] = 1 << i;
      }
       while (inductionVariable <= 7);
    var inductionVariable_0 = 8;
    if (inductionVariable_0 <= 255)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.hb_1[i_0] = this.hb_1[i_0 - 4 | 0] ^ this.hb_1[i_0 - 5 | 0] ^ this.hb_1[i_0 - 6 | 0] ^ this.hb_1[i_0 - 8 | 0];
      }
       while (inductionVariable_0 <= 255);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 <= 254)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        this.ib_1[this.hb_1[i_1]] = i_1;
      }
       while (inductionVariable_1 <= 254);
  }
  QRMath.prototype.glog = function (n) {
    return this.ib_1[n];
  };
  QRMath.prototype.gexp = function (n) {
    var i = n;
    while (i < 0) {
      i = i + 255 | 0;
    }
    while (i >= 256) {
      i = i - 255 | 0;
    }
    return this.hb_1[i];
  };
  QRMath.$metadata$ = objectMeta('QRMath');
  var QRMath_instance;
  function QRMath_getInstance() {
    if (QRMath_instance == null)
      new QRMath();
    return QRMath_instance;
  }
  function isNumber_0($this, s) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.matches' call
    var tmp0_matches = Regex_init_$Create$('^\\d+$');
    tmp$ret$0 = tmp0_matches.x1(s);
    return tmp$ret$0;
  }
  function isAlphaNum($this, s) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.matches' call
    var tmp0_matches = Regex_init_$Create$('^[0-9A-Z $%*+\\-./:]+$');
    tmp$ret$0 = tmp0_matches.x1(s);
    return tmp$ret$0;
  }
  function getBCHDigit($this, data) {
    var i = data;
    var digit = 0;
    while (!(i === 0)) {
      var tmp0 = digit;
      digit = tmp0 + 1 | 0;
      i = i >>> 1 | 0;
    }
    return digit;
  }
  function QRUtil() {
    QRUtil_instance = this;
    var tmp = this;
    var tmp$ret$42;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([]);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$1 = new Int32Array([6, 18]);
    var tmp_1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$2 = new Int32Array([6, 22]);
    var tmp_2 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$3 = new Int32Array([6, 26]);
    var tmp_3 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$4 = new Int32Array([6, 30]);
    var tmp_4 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$5 = new Int32Array([6, 34]);
    var tmp_5 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$6 = new Int32Array([6, 22, 38]);
    var tmp_6 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$7 = new Int32Array([6, 24, 42]);
    var tmp_7 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$8 = new Int32Array([6, 26, 46]);
    var tmp_8 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$9 = new Int32Array([6, 28, 50]);
    var tmp_9 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$10 = new Int32Array([6, 30, 54]);
    var tmp_10 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$11 = new Int32Array([6, 32, 58]);
    var tmp_11 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$12 = new Int32Array([6, 34, 62]);
    var tmp_12 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$13 = new Int32Array([6, 26, 46, 66]);
    var tmp_13 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$14 = new Int32Array([6, 26, 48, 70]);
    var tmp_14 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$15 = new Int32Array([6, 26, 50, 74]);
    var tmp_15 = tmp$ret$15;
    var tmp$ret$16;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$16 = new Int32Array([6, 30, 54, 78]);
    var tmp_16 = tmp$ret$16;
    var tmp$ret$17;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$17 = new Int32Array([6, 30, 56, 82]);
    var tmp_17 = tmp$ret$17;
    var tmp$ret$18;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$18 = new Int32Array([6, 30, 58, 86]);
    var tmp_18 = tmp$ret$18;
    var tmp$ret$19;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$19 = new Int32Array([6, 34, 62, 90]);
    var tmp_19 = tmp$ret$19;
    var tmp$ret$20;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$20 = new Int32Array([6, 28, 50, 72, 94]);
    var tmp_20 = tmp$ret$20;
    var tmp$ret$21;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$21 = new Int32Array([6, 26, 50, 74, 98]);
    var tmp_21 = tmp$ret$21;
    var tmp$ret$22;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$22 = new Int32Array([6, 30, 54, 78, 102]);
    var tmp_22 = tmp$ret$22;
    var tmp$ret$23;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$23 = new Int32Array([6, 28, 54, 80, 106]);
    var tmp_23 = tmp$ret$23;
    var tmp$ret$24;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$24 = new Int32Array([6, 32, 58, 84, 110]);
    var tmp_24 = tmp$ret$24;
    var tmp$ret$25;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$25 = new Int32Array([6, 30, 58, 86, 114]);
    var tmp_25 = tmp$ret$25;
    var tmp$ret$26;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$26 = new Int32Array([6, 34, 62, 90, 118]);
    var tmp_26 = tmp$ret$26;
    var tmp$ret$27;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$27 = new Int32Array([6, 26, 50, 74, 98, 122]);
    var tmp_27 = tmp$ret$27;
    var tmp$ret$28;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$28 = new Int32Array([6, 30, 54, 78, 102, 126]);
    var tmp_28 = tmp$ret$28;
    var tmp$ret$29;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$29 = new Int32Array([6, 26, 52, 78, 104, 130]);
    var tmp_29 = tmp$ret$29;
    var tmp$ret$30;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$30 = new Int32Array([6, 30, 56, 82, 108, 134]);
    var tmp_30 = tmp$ret$30;
    var tmp$ret$31;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$31 = new Int32Array([6, 34, 60, 86, 112, 138]);
    var tmp_31 = tmp$ret$31;
    var tmp$ret$32;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$32 = new Int32Array([6, 30, 58, 86, 114, 142]);
    var tmp_32 = tmp$ret$32;
    var tmp$ret$33;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$33 = new Int32Array([6, 34, 62, 90, 118, 146]);
    var tmp_33 = tmp$ret$33;
    var tmp$ret$34;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$34 = new Int32Array([6, 30, 54, 78, 102, 126, 150]);
    var tmp_34 = tmp$ret$34;
    var tmp$ret$35;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$35 = new Int32Array([6, 24, 50, 76, 102, 128, 154]);
    var tmp_35 = tmp$ret$35;
    var tmp$ret$36;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$36 = new Int32Array([6, 28, 54, 80, 106, 132, 158]);
    var tmp_36 = tmp$ret$36;
    var tmp$ret$37;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$37 = new Int32Array([6, 32, 58, 84, 110, 136, 162]);
    var tmp_37 = tmp$ret$37;
    var tmp$ret$38;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$38 = new Int32Array([6, 26, 54, 82, 110, 138, 166]);
    var tmp_38 = tmp$ret$38;
    var tmp$ret$39;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$39 = new Int32Array([6, 30, 58, 86, 114, 142, 170]);
    var tmp0_arrayOf = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, tmp$ret$39];
    var tmp$ret$41;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$40;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$40 = tmp0_arrayOf;
    tmp$ret$41 = tmp$ret$40;
    tmp$ret$42 = tmp$ret$41;
    tmp.jb_1 = tmp$ret$42;
    var tmp_39 = this;
    var tmp$ret$283;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$49;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$43;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$43 = new Int32Array([41, 25, 17, 10]);
    var tmp_40 = tmp$ret$43;
    var tmp$ret$44;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$44 = new Int32Array([34, 20, 14, 8]);
    var tmp_41 = tmp$ret$44;
    var tmp$ret$45;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$45 = new Int32Array([27, 16, 11, 7]);
    var tmp_42 = tmp$ret$45;
    var tmp$ret$46;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$46 = new Int32Array([17, 10, 7, 4]);
    var tmp0_arrayOf_0 = [tmp_40, tmp_41, tmp_42, tmp$ret$46];
    var tmp$ret$48;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$47;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$47 = tmp0_arrayOf_0;
    tmp$ret$48 = tmp$ret$47;
    tmp$ret$49 = tmp$ret$48;
    var tmp_43 = tmp$ret$49;
    var tmp$ret$56;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$50;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$50 = new Int32Array([77, 47, 32, 20]);
    var tmp_44 = tmp$ret$50;
    var tmp$ret$51;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$51 = new Int32Array([63, 38, 26, 16]);
    var tmp_45 = tmp$ret$51;
    var tmp$ret$52;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$52 = new Int32Array([48, 29, 20, 12]);
    var tmp_46 = tmp$ret$52;
    var tmp$ret$53;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$53 = new Int32Array([34, 20, 14, 8]);
    var tmp1_arrayOf = [tmp_44, tmp_45, tmp_46, tmp$ret$53];
    var tmp$ret$55;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$54;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$54 = tmp1_arrayOf;
    tmp$ret$55 = tmp$ret$54;
    tmp$ret$56 = tmp$ret$55;
    var tmp_47 = tmp$ret$56;
    var tmp$ret$63;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$57;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$57 = new Int32Array([127, 77, 53, 32]);
    var tmp_48 = tmp$ret$57;
    var tmp$ret$58;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$58 = new Int32Array([101, 61, 42, 26]);
    var tmp_49 = tmp$ret$58;
    var tmp$ret$59;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$59 = new Int32Array([77, 47, 32, 20]);
    var tmp_50 = tmp$ret$59;
    var tmp$ret$60;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$60 = new Int32Array([58, 35, 24, 15]);
    var tmp2_arrayOf = [tmp_48, tmp_49, tmp_50, tmp$ret$60];
    var tmp$ret$62;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$61;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$61 = tmp2_arrayOf;
    tmp$ret$62 = tmp$ret$61;
    tmp$ret$63 = tmp$ret$62;
    var tmp_51 = tmp$ret$63;
    var tmp$ret$70;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$64;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$64 = new Int32Array([187, 114, 78, 48]);
    var tmp_52 = tmp$ret$64;
    var tmp$ret$65;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$65 = new Int32Array([149, 90, 62, 38]);
    var tmp_53 = tmp$ret$65;
    var tmp$ret$66;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$66 = new Int32Array([111, 67, 46, 28]);
    var tmp_54 = tmp$ret$66;
    var tmp$ret$67;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$67 = new Int32Array([82, 50, 34, 21]);
    var tmp3_arrayOf = [tmp_52, tmp_53, tmp_54, tmp$ret$67];
    var tmp$ret$69;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$68;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$68 = tmp3_arrayOf;
    tmp$ret$69 = tmp$ret$68;
    tmp$ret$70 = tmp$ret$69;
    var tmp_55 = tmp$ret$70;
    var tmp$ret$77;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$71;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$71 = new Int32Array([255, 154, 106, 65]);
    var tmp_56 = tmp$ret$71;
    var tmp$ret$72;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$72 = new Int32Array([202, 122, 84, 52]);
    var tmp_57 = tmp$ret$72;
    var tmp$ret$73;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$73 = new Int32Array([144, 87, 60, 37]);
    var tmp_58 = tmp$ret$73;
    var tmp$ret$74;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$74 = new Int32Array([106, 64, 44, 27]);
    var tmp4_arrayOf = [tmp_56, tmp_57, tmp_58, tmp$ret$74];
    var tmp$ret$76;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$75;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$75 = tmp4_arrayOf;
    tmp$ret$76 = tmp$ret$75;
    tmp$ret$77 = tmp$ret$76;
    var tmp_59 = tmp$ret$77;
    var tmp$ret$84;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$78;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$78 = new Int32Array([322, 195, 134, 82]);
    var tmp_60 = tmp$ret$78;
    var tmp$ret$79;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$79 = new Int32Array([255, 154, 106, 65]);
    var tmp_61 = tmp$ret$79;
    var tmp$ret$80;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$80 = new Int32Array([178, 108, 74, 45]);
    var tmp_62 = tmp$ret$80;
    var tmp$ret$81;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$81 = new Int32Array([139, 84, 58, 36]);
    var tmp5_arrayOf = [tmp_60, tmp_61, tmp_62, tmp$ret$81];
    var tmp$ret$83;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$82;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$82 = tmp5_arrayOf;
    tmp$ret$83 = tmp$ret$82;
    tmp$ret$84 = tmp$ret$83;
    var tmp_63 = tmp$ret$84;
    var tmp$ret$91;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$85;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$85 = new Int32Array([370, 224, 154, 95]);
    var tmp_64 = tmp$ret$85;
    var tmp$ret$86;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$86 = new Int32Array([293, 178, 122, 75]);
    var tmp_65 = tmp$ret$86;
    var tmp$ret$87;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$87 = new Int32Array([207, 125, 86, 53]);
    var tmp_66 = tmp$ret$87;
    var tmp$ret$88;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$88 = new Int32Array([154, 93, 64, 39]);
    var tmp6_arrayOf = [tmp_64, tmp_65, tmp_66, tmp$ret$88];
    var tmp$ret$90;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$89;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$89 = tmp6_arrayOf;
    tmp$ret$90 = tmp$ret$89;
    tmp$ret$91 = tmp$ret$90;
    var tmp_67 = tmp$ret$91;
    var tmp$ret$98;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$92;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$92 = new Int32Array([461, 279, 192, 118]);
    var tmp_68 = tmp$ret$92;
    var tmp$ret$93;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$93 = new Int32Array([365, 221, 152, 93]);
    var tmp_69 = tmp$ret$93;
    var tmp$ret$94;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$94 = new Int32Array([259, 157, 108, 66]);
    var tmp_70 = tmp$ret$94;
    var tmp$ret$95;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$95 = new Int32Array([202, 122, 84, 52]);
    var tmp7_arrayOf = [tmp_68, tmp_69, tmp_70, tmp$ret$95];
    var tmp$ret$97;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$96;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$96 = tmp7_arrayOf;
    tmp$ret$97 = tmp$ret$96;
    tmp$ret$98 = tmp$ret$97;
    var tmp_71 = tmp$ret$98;
    var tmp$ret$105;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$99;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$99 = new Int32Array([552, 335, 230, 141]);
    var tmp_72 = tmp$ret$99;
    var tmp$ret$100;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$100 = new Int32Array([432, 262, 180, 111]);
    var tmp_73 = tmp$ret$100;
    var tmp$ret$101;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$101 = new Int32Array([312, 189, 130, 80]);
    var tmp_74 = tmp$ret$101;
    var tmp$ret$102;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$102 = new Int32Array([235, 143, 98, 60]);
    var tmp8_arrayOf = [tmp_72, tmp_73, tmp_74, tmp$ret$102];
    var tmp$ret$104;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$103;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$103 = tmp8_arrayOf;
    tmp$ret$104 = tmp$ret$103;
    tmp$ret$105 = tmp$ret$104;
    var tmp_75 = tmp$ret$105;
    var tmp$ret$112;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$106;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$106 = new Int32Array([652, 395, 271, 167]);
    var tmp_76 = tmp$ret$106;
    var tmp$ret$107;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$107 = new Int32Array([513, 311, 213, 131]);
    var tmp_77 = tmp$ret$107;
    var tmp$ret$108;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$108 = new Int32Array([364, 221, 151, 93]);
    var tmp_78 = tmp$ret$108;
    var tmp$ret$109;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$109 = new Int32Array([288, 174, 119, 74]);
    var tmp9_arrayOf = [tmp_76, tmp_77, tmp_78, tmp$ret$109];
    var tmp$ret$111;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$110;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$110 = tmp9_arrayOf;
    tmp$ret$111 = tmp$ret$110;
    tmp$ret$112 = tmp$ret$111;
    var tmp_79 = tmp$ret$112;
    var tmp$ret$119;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$113;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$113 = new Int32Array([772, 468, 321, 198]);
    var tmp_80 = tmp$ret$113;
    var tmp$ret$114;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$114 = new Int32Array([604, 366, 251, 155]);
    var tmp_81 = tmp$ret$114;
    var tmp$ret$115;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$115 = new Int32Array([427, 259, 177, 109]);
    var tmp_82 = tmp$ret$115;
    var tmp$ret$116;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$116 = new Int32Array([331, 200, 137, 85]);
    var tmp10_arrayOf = [tmp_80, tmp_81, tmp_82, tmp$ret$116];
    var tmp$ret$118;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$117;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$117 = tmp10_arrayOf;
    tmp$ret$118 = tmp$ret$117;
    tmp$ret$119 = tmp$ret$118;
    var tmp_83 = tmp$ret$119;
    var tmp$ret$126;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$120;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$120 = new Int32Array([883, 535, 367, 226]);
    var tmp_84 = tmp$ret$120;
    var tmp$ret$121;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$121 = new Int32Array([691, 419, 287, 177]);
    var tmp_85 = tmp$ret$121;
    var tmp$ret$122;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$122 = new Int32Array([489, 296, 203, 125]);
    var tmp_86 = tmp$ret$122;
    var tmp$ret$123;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$123 = new Int32Array([374, 227, 155, 96]);
    var tmp11_arrayOf = [tmp_84, tmp_85, tmp_86, tmp$ret$123];
    var tmp$ret$125;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$124;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$124 = tmp11_arrayOf;
    tmp$ret$125 = tmp$ret$124;
    tmp$ret$126 = tmp$ret$125;
    var tmp_87 = tmp$ret$126;
    var tmp$ret$133;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$127;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$127 = new Int32Array([1022, 619, 425, 262]);
    var tmp_88 = tmp$ret$127;
    var tmp$ret$128;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$128 = new Int32Array([796, 483, 331, 204]);
    var tmp_89 = tmp$ret$128;
    var tmp$ret$129;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$129 = new Int32Array([580, 352, 241, 149]);
    var tmp_90 = tmp$ret$129;
    var tmp$ret$130;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$130 = new Int32Array([427, 259, 177, 109]);
    var tmp12_arrayOf = [tmp_88, tmp_89, tmp_90, tmp$ret$130];
    var tmp$ret$132;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$131;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$131 = tmp12_arrayOf;
    tmp$ret$132 = tmp$ret$131;
    tmp$ret$133 = tmp$ret$132;
    var tmp_91 = tmp$ret$133;
    var tmp$ret$140;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$134;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$134 = new Int32Array([1101, 667, 458, 282]);
    var tmp_92 = tmp$ret$134;
    var tmp$ret$135;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$135 = new Int32Array([871, 528, 362, 223]);
    var tmp_93 = tmp$ret$135;
    var tmp$ret$136;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$136 = new Int32Array([621, 376, 258, 159]);
    var tmp_94 = tmp$ret$136;
    var tmp$ret$137;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$137 = new Int32Array([468, 283, 194, 120]);
    var tmp13_arrayOf = [tmp_92, tmp_93, tmp_94, tmp$ret$137];
    var tmp$ret$139;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$138;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$138 = tmp13_arrayOf;
    tmp$ret$139 = tmp$ret$138;
    tmp$ret$140 = tmp$ret$139;
    var tmp_95 = tmp$ret$140;
    var tmp$ret$147;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$141;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$141 = new Int32Array([1250, 758, 520, 320]);
    var tmp_96 = tmp$ret$141;
    var tmp$ret$142;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$142 = new Int32Array([991, 600, 412, 254]);
    var tmp_97 = tmp$ret$142;
    var tmp$ret$143;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$143 = new Int32Array([703, 426, 292, 180]);
    var tmp_98 = tmp$ret$143;
    var tmp$ret$144;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$144 = new Int32Array([530, 321, 220, 136]);
    var tmp14_arrayOf = [tmp_96, tmp_97, tmp_98, tmp$ret$144];
    var tmp$ret$146;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$145;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$145 = tmp14_arrayOf;
    tmp$ret$146 = tmp$ret$145;
    tmp$ret$147 = tmp$ret$146;
    var tmp_99 = tmp$ret$147;
    var tmp$ret$154;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$148;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$148 = new Int32Array([1408, 854, 586, 361]);
    var tmp_100 = tmp$ret$148;
    var tmp$ret$149;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$149 = new Int32Array([1082, 656, 450, 277]);
    var tmp_101 = tmp$ret$149;
    var tmp$ret$150;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$150 = new Int32Array([775, 470, 322, 198]);
    var tmp_102 = tmp$ret$150;
    var tmp$ret$151;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$151 = new Int32Array([602, 365, 250, 154]);
    var tmp15_arrayOf = [tmp_100, tmp_101, tmp_102, tmp$ret$151];
    var tmp$ret$153;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$152;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$152 = tmp15_arrayOf;
    tmp$ret$153 = tmp$ret$152;
    tmp$ret$154 = tmp$ret$153;
    var tmp_103 = tmp$ret$154;
    var tmp$ret$161;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$155;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$155 = new Int32Array([1548, 938, 644, 397]);
    var tmp_104 = tmp$ret$155;
    var tmp$ret$156;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$156 = new Int32Array([1212, 734, 504, 310]);
    var tmp_105 = tmp$ret$156;
    var tmp$ret$157;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$157 = new Int32Array([876, 531, 364, 224]);
    var tmp_106 = tmp$ret$157;
    var tmp$ret$158;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$158 = new Int32Array([674, 408, 280, 173]);
    var tmp16_arrayOf = [tmp_104, tmp_105, tmp_106, tmp$ret$158];
    var tmp$ret$160;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$159;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$159 = tmp16_arrayOf;
    tmp$ret$160 = tmp$ret$159;
    tmp$ret$161 = tmp$ret$160;
    var tmp_107 = tmp$ret$161;
    var tmp$ret$168;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$162;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$162 = new Int32Array([1725, 1046, 718, 442]);
    var tmp_108 = tmp$ret$162;
    var tmp$ret$163;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$163 = new Int32Array([1346, 816, 560, 345]);
    var tmp_109 = tmp$ret$163;
    var tmp$ret$164;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$164 = new Int32Array([948, 574, 394, 243]);
    var tmp_110 = tmp$ret$164;
    var tmp$ret$165;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$165 = new Int32Array([746, 452, 310, 191]);
    var tmp17_arrayOf = [tmp_108, tmp_109, tmp_110, tmp$ret$165];
    var tmp$ret$167;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$166;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$166 = tmp17_arrayOf;
    tmp$ret$167 = tmp$ret$166;
    tmp$ret$168 = tmp$ret$167;
    var tmp_111 = tmp$ret$168;
    var tmp$ret$175;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$169;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$169 = new Int32Array([1903, 1153, 792, 488]);
    var tmp_112 = tmp$ret$169;
    var tmp$ret$170;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$170 = new Int32Array([1500, 909, 624, 384]);
    var tmp_113 = tmp$ret$170;
    var tmp$ret$171;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$171 = new Int32Array([1063, 644, 442, 272]);
    var tmp_114 = tmp$ret$171;
    var tmp$ret$172;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$172 = new Int32Array([813, 493, 338, 208]);
    var tmp18_arrayOf = [tmp_112, tmp_113, tmp_114, tmp$ret$172];
    var tmp$ret$174;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$173;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$173 = tmp18_arrayOf;
    tmp$ret$174 = tmp$ret$173;
    tmp$ret$175 = tmp$ret$174;
    var tmp_115 = tmp$ret$175;
    var tmp$ret$182;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$176;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$176 = new Int32Array([2061, 1249, 858, 528]);
    var tmp_116 = tmp$ret$176;
    var tmp$ret$177;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$177 = new Int32Array([1600, 970, 666, 410]);
    var tmp_117 = tmp$ret$177;
    var tmp$ret$178;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$178 = new Int32Array([1159, 702, 482, 297]);
    var tmp_118 = tmp$ret$178;
    var tmp$ret$179;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$179 = new Int32Array([919, 557, 382, 235]);
    var tmp19_arrayOf = [tmp_116, tmp_117, tmp_118, tmp$ret$179];
    var tmp$ret$181;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$180;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$180 = tmp19_arrayOf;
    tmp$ret$181 = tmp$ret$180;
    tmp$ret$182 = tmp$ret$181;
    var tmp_119 = tmp$ret$182;
    var tmp$ret$189;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$183;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$183 = new Int32Array([2232, 1352, 929, 572]);
    var tmp_120 = tmp$ret$183;
    var tmp$ret$184;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$184 = new Int32Array([1708, 1035, 711, 438]);
    var tmp_121 = tmp$ret$184;
    var tmp$ret$185;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$185 = new Int32Array([1224, 742, 509, 314]);
    var tmp_122 = tmp$ret$185;
    var tmp$ret$186;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$186 = new Int32Array([969, 587, 403, 248]);
    var tmp20_arrayOf = [tmp_120, tmp_121, tmp_122, tmp$ret$186];
    var tmp$ret$188;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$187;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$187 = tmp20_arrayOf;
    tmp$ret$188 = tmp$ret$187;
    tmp$ret$189 = tmp$ret$188;
    var tmp_123 = tmp$ret$189;
    var tmp$ret$196;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$190;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$190 = new Int32Array([2409, 1460, 1003, 618]);
    var tmp_124 = tmp$ret$190;
    var tmp$ret$191;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$191 = new Int32Array([1872, 1134, 779, 480]);
    var tmp_125 = tmp$ret$191;
    var tmp$ret$192;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$192 = new Int32Array([1358, 823, 565, 348]);
    var tmp_126 = tmp$ret$192;
    var tmp$ret$193;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$193 = new Int32Array([1056, 640, 439, 270]);
    var tmp21_arrayOf = [tmp_124, tmp_125, tmp_126, tmp$ret$193];
    var tmp$ret$195;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$194;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$194 = tmp21_arrayOf;
    tmp$ret$195 = tmp$ret$194;
    tmp$ret$196 = tmp$ret$195;
    var tmp_127 = tmp$ret$196;
    var tmp$ret$203;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$197;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$197 = new Int32Array([2620, 1588, 1091, 672]);
    var tmp_128 = tmp$ret$197;
    var tmp$ret$198;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$198 = new Int32Array([2059, 1248, 857, 528]);
    var tmp_129 = tmp$ret$198;
    var tmp$ret$199;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$199 = new Int32Array([1468, 890, 611, 376]);
    var tmp_130 = tmp$ret$199;
    var tmp$ret$200;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$200 = new Int32Array([1108, 672, 461, 284]);
    var tmp22_arrayOf = [tmp_128, tmp_129, tmp_130, tmp$ret$200];
    var tmp$ret$202;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$201;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$201 = tmp22_arrayOf;
    tmp$ret$202 = tmp$ret$201;
    tmp$ret$203 = tmp$ret$202;
    var tmp_131 = tmp$ret$203;
    var tmp$ret$210;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$204;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$204 = new Int32Array([2812, 1704, 1171, 721]);
    var tmp_132 = tmp$ret$204;
    var tmp$ret$205;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$205 = new Int32Array([2188, 1326, 911, 561]);
    var tmp_133 = tmp$ret$205;
    var tmp$ret$206;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$206 = new Int32Array([1588, 963, 661, 407]);
    var tmp_134 = tmp$ret$206;
    var tmp$ret$207;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$207 = new Int32Array([1228, 744, 511, 315]);
    var tmp23_arrayOf = [tmp_132, tmp_133, tmp_134, tmp$ret$207];
    var tmp$ret$209;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$208;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$208 = tmp23_arrayOf;
    tmp$ret$209 = tmp$ret$208;
    tmp$ret$210 = tmp$ret$209;
    var tmp_135 = tmp$ret$210;
    var tmp$ret$217;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$211;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$211 = new Int32Array([3057, 1853, 1273, 784]);
    var tmp_136 = tmp$ret$211;
    var tmp$ret$212;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$212 = new Int32Array([2395, 1451, 997, 614]);
    var tmp_137 = tmp$ret$212;
    var tmp$ret$213;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$213 = new Int32Array([1718, 1041, 715, 440]);
    var tmp_138 = tmp$ret$213;
    var tmp$ret$214;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$214 = new Int32Array([1286, 779, 535, 330]);
    var tmp24_arrayOf = [tmp_136, tmp_137, tmp_138, tmp$ret$214];
    var tmp$ret$216;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$215;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$215 = tmp24_arrayOf;
    tmp$ret$216 = tmp$ret$215;
    tmp$ret$217 = tmp$ret$216;
    var tmp_139 = tmp$ret$217;
    var tmp$ret$224;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$218;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$218 = new Int32Array([3283, 1990, 1367, 842]);
    var tmp_140 = tmp$ret$218;
    var tmp$ret$219;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$219 = new Int32Array([2544, 1542, 1059, 652]);
    var tmp_141 = tmp$ret$219;
    var tmp$ret$220;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$220 = new Int32Array([1804, 1094, 751, 462]);
    var tmp_142 = tmp$ret$220;
    var tmp$ret$221;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$221 = new Int32Array([1425, 864, 593, 365]);
    var tmp25_arrayOf = [tmp_140, tmp_141, tmp_142, tmp$ret$221];
    var tmp$ret$223;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$222;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$222 = tmp25_arrayOf;
    tmp$ret$223 = tmp$ret$222;
    tmp$ret$224 = tmp$ret$223;
    var tmp_143 = tmp$ret$224;
    var tmp$ret$231;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$225;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$225 = new Int32Array([3517, 2132, 1465, 902]);
    var tmp_144 = tmp$ret$225;
    var tmp$ret$226;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$226 = new Int32Array([2701, 1637, 1125, 692]);
    var tmp_145 = tmp$ret$226;
    var tmp$ret$227;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$227 = new Int32Array([1933, 1172, 805, 496]);
    var tmp_146 = tmp$ret$227;
    var tmp$ret$228;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$228 = new Int32Array([1501, 910, 625, 385]);
    var tmp26_arrayOf = [tmp_144, tmp_145, tmp_146, tmp$ret$228];
    var tmp$ret$230;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$229;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$229 = tmp26_arrayOf;
    tmp$ret$230 = tmp$ret$229;
    tmp$ret$231 = tmp$ret$230;
    var tmp_147 = tmp$ret$231;
    var tmp$ret$238;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$232;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$232 = new Int32Array([3669, 2223, 1528, 940]);
    var tmp_148 = tmp$ret$232;
    var tmp$ret$233;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$233 = new Int32Array([2857, 1732, 1190, 732]);
    var tmp_149 = tmp$ret$233;
    var tmp$ret$234;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$234 = new Int32Array([2085, 1263, 868, 534]);
    var tmp_150 = tmp$ret$234;
    var tmp$ret$235;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$235 = new Int32Array([1581, 958, 658, 405]);
    var tmp27_arrayOf = [tmp_148, tmp_149, tmp_150, tmp$ret$235];
    var tmp$ret$237;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$236;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$236 = tmp27_arrayOf;
    tmp$ret$237 = tmp$ret$236;
    tmp$ret$238 = tmp$ret$237;
    var tmp_151 = tmp$ret$238;
    var tmp$ret$245;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$239;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$239 = new Int32Array([3909, 2369, 1628, 1002]);
    var tmp_152 = tmp$ret$239;
    var tmp$ret$240;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$240 = new Int32Array([3035, 1839, 1264, 778]);
    var tmp_153 = tmp$ret$240;
    var tmp$ret$241;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$241 = new Int32Array([2181, 1322, 908, 559]);
    var tmp_154 = tmp$ret$241;
    var tmp$ret$242;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$242 = new Int32Array([1677, 1016, 698, 430]);
    var tmp28_arrayOf = [tmp_152, tmp_153, tmp_154, tmp$ret$242];
    var tmp$ret$244;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$243;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$243 = tmp28_arrayOf;
    tmp$ret$244 = tmp$ret$243;
    tmp$ret$245 = tmp$ret$244;
    var tmp_155 = tmp$ret$245;
    var tmp$ret$252;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$246;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$246 = new Int32Array([4158, 2520, 1732, 1066]);
    var tmp_156 = tmp$ret$246;
    var tmp$ret$247;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$247 = new Int32Array([3289, 1994, 1370, 843]);
    var tmp_157 = tmp$ret$247;
    var tmp$ret$248;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$248 = new Int32Array([2358, 1429, 982, 604]);
    var tmp_158 = tmp$ret$248;
    var tmp$ret$249;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$249 = new Int32Array([1782, 1080, 742, 457]);
    var tmp29_arrayOf = [tmp_156, tmp_157, tmp_158, tmp$ret$249];
    var tmp$ret$251;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$250;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$250 = tmp29_arrayOf;
    tmp$ret$251 = tmp$ret$250;
    tmp$ret$252 = tmp$ret$251;
    var tmp_159 = tmp$ret$252;
    var tmp$ret$259;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$253;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$253 = new Int32Array([4417, 2677, 1840, 1132]);
    var tmp_160 = tmp$ret$253;
    var tmp$ret$254;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$254 = new Int32Array([3486, 2113, 1452, 894]);
    var tmp_161 = tmp$ret$254;
    var tmp$ret$255;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$255 = new Int32Array([2473, 1499, 1030, 634]);
    var tmp_162 = tmp$ret$255;
    var tmp$ret$256;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$256 = new Int32Array([1897, 1150, 790, 486]);
    var tmp30_arrayOf = [tmp_160, tmp_161, tmp_162, tmp$ret$256];
    var tmp$ret$258;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$257;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$257 = tmp30_arrayOf;
    tmp$ret$258 = tmp$ret$257;
    tmp$ret$259 = tmp$ret$258;
    var tmp_163 = tmp$ret$259;
    var tmp$ret$266;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$260;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$260 = new Int32Array([4686, 2840, 1952, 1201]);
    var tmp_164 = tmp$ret$260;
    var tmp$ret$261;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$261 = new Int32Array([3693, 2238, 1538, 947]);
    var tmp_165 = tmp$ret$261;
    var tmp$ret$262;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$262 = new Int32Array([2670, 1618, 1112, 684]);
    var tmp_166 = tmp$ret$262;
    var tmp$ret$263;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$263 = new Int32Array([2022, 1226, 842, 518]);
    var tmp31_arrayOf = [tmp_164, tmp_165, tmp_166, tmp$ret$263];
    var tmp$ret$265;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$264;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$264 = tmp31_arrayOf;
    tmp$ret$265 = tmp$ret$264;
    tmp$ret$266 = tmp$ret$265;
    var tmp_167 = tmp$ret$266;
    var tmp$ret$273;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$267;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$267 = new Int32Array([4965, 3009, 2068, 1273]);
    var tmp_168 = tmp$ret$267;
    var tmp$ret$268;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$268 = new Int32Array([3909, 2369, 1628, 1002]);
    var tmp_169 = tmp$ret$268;
    var tmp$ret$269;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$269 = new Int32Array([2805, 1700, 1168, 719]);
    var tmp_170 = tmp$ret$269;
    var tmp$ret$270;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$270 = new Int32Array([2157, 1307, 898, 553]);
    var tmp32_arrayOf = [tmp_168, tmp_169, tmp_170, tmp$ret$270];
    var tmp$ret$272;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$271;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$271 = tmp32_arrayOf;
    tmp$ret$272 = tmp$ret$271;
    tmp$ret$273 = tmp$ret$272;
    var tmp_171 = tmp$ret$273;
    var tmp$ret$280;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$274;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$274 = new Int32Array([5253, 3183, 2188, 1347]);
    var tmp_172 = tmp$ret$274;
    var tmp$ret$275;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$275 = new Int32Array([4134, 2506, 1722, 1060]);
    var tmp_173 = tmp$ret$275;
    var tmp$ret$276;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$276 = new Int32Array([2949, 1787, 1228, 756]);
    var tmp_174 = tmp$ret$276;
    var tmp$ret$277;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$277 = new Int32Array([2301, 1394, 958, 590]);
    var tmp33_arrayOf = [tmp_172, tmp_173, tmp_174, tmp$ret$277];
    var tmp$ret$279;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$278;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$278 = tmp33_arrayOf;
    tmp$ret$279 = tmp$ret$278;
    tmp$ret$280 = tmp$ret$279;
    var tmp34_arrayOf = [tmp_43, tmp_47, tmp_51, tmp_55, tmp_59, tmp_63, tmp_67, tmp_71, tmp_75, tmp_79, tmp_83, tmp_87, tmp_91, tmp_95, tmp_99, tmp_103, tmp_107, tmp_111, tmp_115, tmp_119, tmp_123, tmp_127, tmp_131, tmp_135, tmp_139, tmp_143, tmp_147, tmp_151, tmp_155, tmp_159, tmp_163, tmp_167, tmp_171, tmp$ret$280];
    var tmp$ret$282;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$281;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$281 = tmp34_arrayOf;
    tmp$ret$282 = tmp$ret$281;
    tmp$ret$283 = tmp$ret$282;
    tmp_39.kb_1 = tmp$ret$283;
    this.lb_1 = 1335;
    this.mb_1 = 7973;
    this.nb_1 = 21522;
  }
  QRUtil.prototype.getPatternPosition = function (typeNumber) {
    return this.jb_1[typeNumber - 1 | 0];
  };
  QRUtil.prototype.getMaxLength = function (typeNumber, dataType, errorCorrectionLevel) {
    return this.kb_1[typeNumber - 1 | 0][errorCorrectionLevel.i7_1][dataType.i7_1];
  };
  QRUtil.prototype.getErrorCorrectPolynomial = function (errorCorrectLength) {
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1]);
    var tmp = tmp$ret$0;
    var a = Polynomial_init_$Create$(tmp, 0, 2, null);
    var inductionVariable = 0;
    if (inductionVariable < errorCorrectLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = a;
        var tmp$ret$1;
        // Inline function 'kotlin.intArrayOf' call
        var tmp0_intArrayOf = new Int32Array([1, QRMath_getInstance().gexp(i)]);
        tmp$ret$1 = tmp0_intArrayOf;
        var tmp_1 = tmp$ret$1;
        a = tmp_0.multiply(Polynomial_init_$Create$(tmp_1, 0, 2, null));
      }
       while (inductionVariable < errorCorrectLength);
    return a;
  };
  QRUtil.prototype.getMask = function (maskPattern, i, j) {
    var tmp0_subject = maskPattern;
    var tmp0 = tmp0_subject.i7_1;
    var tmp;
    switch (tmp0) {
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
  QRUtil.prototype.getDataType = function (s) {
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
  QRUtil.prototype.getBCHTypeInfo = function (data) {
    var d = data << 10;
    while ((getBCHDigit(this, d) - getBCHDigit(this, 1335) | 0) >= 0) {
      d = d ^ 1335 << (getBCHDigit(this, d) - getBCHDigit(this, 1335) | 0);
    }
    return (data << 10 | d) ^ 21522;
  };
  QRUtil.prototype.getBCHTypeNumber = function (data) {
    var d = data << 12;
    while ((getBCHDigit(this, d) - getBCHDigit(this, 7973) | 0) >= 0) {
      d = d ^ 7973 << (getBCHDigit(this, d) - getBCHDigit(this, 7973) | 0);
    }
    return data << 12 | d;
  };
  QRUtil.$metadata$ = objectMeta('QRUtil');
  var QRUtil_instance;
  function QRUtil_getInstance() {
    if (QRUtil_instance == null)
      new QRUtil();
    return QRUtil_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp$ret$162;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([1, 26, 19]);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$1 = new Int32Array([1, 26, 16]);
    var tmp_1 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$2 = new Int32Array([1, 26, 13]);
    var tmp_2 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$3 = new Int32Array([1, 26, 9]);
    var tmp_3 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$4 = new Int32Array([1, 44, 34]);
    var tmp_4 = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$5 = new Int32Array([1, 44, 28]);
    var tmp_5 = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$6 = new Int32Array([1, 44, 22]);
    var tmp_6 = tmp$ret$6;
    var tmp$ret$7;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$7 = new Int32Array([1, 44, 16]);
    var tmp_7 = tmp$ret$7;
    var tmp$ret$8;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$8 = new Int32Array([1, 70, 55]);
    var tmp_8 = tmp$ret$8;
    var tmp$ret$9;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$9 = new Int32Array([1, 70, 44]);
    var tmp_9 = tmp$ret$9;
    var tmp$ret$10;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$10 = new Int32Array([2, 35, 17]);
    var tmp_10 = tmp$ret$10;
    var tmp$ret$11;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$11 = new Int32Array([2, 35, 13]);
    var tmp_11 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$12 = new Int32Array([1, 100, 80]);
    var tmp_12 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$13 = new Int32Array([2, 50, 32]);
    var tmp_13 = tmp$ret$13;
    var tmp$ret$14;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$14 = new Int32Array([2, 50, 24]);
    var tmp_14 = tmp$ret$14;
    var tmp$ret$15;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$15 = new Int32Array([4, 25, 9]);
    var tmp_15 = tmp$ret$15;
    var tmp$ret$16;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$16 = new Int32Array([1, 134, 108]);
    var tmp_16 = tmp$ret$16;
    var tmp$ret$17;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$17 = new Int32Array([2, 67, 43]);
    var tmp_17 = tmp$ret$17;
    var tmp$ret$18;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$18 = new Int32Array([2, 33, 15, 2, 34, 16]);
    var tmp_18 = tmp$ret$18;
    var tmp$ret$19;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$19 = new Int32Array([2, 33, 11, 2, 34, 12]);
    var tmp_19 = tmp$ret$19;
    var tmp$ret$20;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$20 = new Int32Array([2, 86, 68]);
    var tmp_20 = tmp$ret$20;
    var tmp$ret$21;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$21 = new Int32Array([4, 43, 27]);
    var tmp_21 = tmp$ret$21;
    var tmp$ret$22;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$22 = new Int32Array([4, 43, 19]);
    var tmp_22 = tmp$ret$22;
    var tmp$ret$23;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$23 = new Int32Array([4, 43, 15]);
    var tmp_23 = tmp$ret$23;
    var tmp$ret$24;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$24 = new Int32Array([2, 98, 78]);
    var tmp_24 = tmp$ret$24;
    var tmp$ret$25;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$25 = new Int32Array([4, 49, 31]);
    var tmp_25 = tmp$ret$25;
    var tmp$ret$26;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$26 = new Int32Array([2, 32, 14, 4, 33, 15]);
    var tmp_26 = tmp$ret$26;
    var tmp$ret$27;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$27 = new Int32Array([4, 39, 13, 1, 40, 14]);
    var tmp_27 = tmp$ret$27;
    var tmp$ret$28;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$28 = new Int32Array([2, 121, 97]);
    var tmp_28 = tmp$ret$28;
    var tmp$ret$29;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$29 = new Int32Array([2, 60, 38, 2, 61, 39]);
    var tmp_29 = tmp$ret$29;
    var tmp$ret$30;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$30 = new Int32Array([4, 40, 18, 2, 41, 19]);
    var tmp_30 = tmp$ret$30;
    var tmp$ret$31;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$31 = new Int32Array([4, 40, 14, 2, 41, 15]);
    var tmp_31 = tmp$ret$31;
    var tmp$ret$32;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$32 = new Int32Array([2, 146, 116]);
    var tmp_32 = tmp$ret$32;
    var tmp$ret$33;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$33 = new Int32Array([3, 58, 36, 2, 59, 37]);
    var tmp_33 = tmp$ret$33;
    var tmp$ret$34;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$34 = new Int32Array([4, 36, 16, 4, 37, 17]);
    var tmp_34 = tmp$ret$34;
    var tmp$ret$35;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$35 = new Int32Array([4, 36, 12, 4, 37, 13]);
    var tmp_35 = tmp$ret$35;
    var tmp$ret$36;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$36 = new Int32Array([2, 86, 68, 2, 87, 69]);
    var tmp_36 = tmp$ret$36;
    var tmp$ret$37;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$37 = new Int32Array([4, 69, 43, 1, 70, 44]);
    var tmp_37 = tmp$ret$37;
    var tmp$ret$38;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$38 = new Int32Array([6, 43, 19, 2, 44, 20]);
    var tmp_38 = tmp$ret$38;
    var tmp$ret$39;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$39 = new Int32Array([6, 43, 15, 2, 44, 16]);
    var tmp_39 = tmp$ret$39;
    var tmp$ret$40;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$40 = new Int32Array([4, 101, 81]);
    var tmp_40 = tmp$ret$40;
    var tmp$ret$41;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$41 = new Int32Array([1, 80, 50, 4, 81, 51]);
    var tmp_41 = tmp$ret$41;
    var tmp$ret$42;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$42 = new Int32Array([4, 50, 22, 4, 51, 23]);
    var tmp_42 = tmp$ret$42;
    var tmp$ret$43;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$43 = new Int32Array([3, 36, 12, 8, 37, 13]);
    var tmp_43 = tmp$ret$43;
    var tmp$ret$44;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$44 = new Int32Array([2, 116, 92, 2, 117, 93]);
    var tmp_44 = tmp$ret$44;
    var tmp$ret$45;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$45 = new Int32Array([6, 58, 36, 2, 59, 37]);
    var tmp_45 = tmp$ret$45;
    var tmp$ret$46;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$46 = new Int32Array([4, 46, 20, 6, 47, 21]);
    var tmp_46 = tmp$ret$46;
    var tmp$ret$47;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$47 = new Int32Array([7, 42, 14, 4, 43, 15]);
    var tmp_47 = tmp$ret$47;
    var tmp$ret$48;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$48 = new Int32Array([4, 133, 107]);
    var tmp_48 = tmp$ret$48;
    var tmp$ret$49;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$49 = new Int32Array([8, 59, 37, 1, 60, 38]);
    var tmp_49 = tmp$ret$49;
    var tmp$ret$50;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$50 = new Int32Array([8, 44, 20, 4, 45, 21]);
    var tmp_50 = tmp$ret$50;
    var tmp$ret$51;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$51 = new Int32Array([12, 33, 11, 4, 34, 12]);
    var tmp_51 = tmp$ret$51;
    var tmp$ret$52;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$52 = new Int32Array([3, 145, 115, 1, 146, 116]);
    var tmp_52 = tmp$ret$52;
    var tmp$ret$53;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$53 = new Int32Array([4, 64, 40, 5, 65, 41]);
    var tmp_53 = tmp$ret$53;
    var tmp$ret$54;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$54 = new Int32Array([11, 36, 16, 5, 37, 17]);
    var tmp_54 = tmp$ret$54;
    var tmp$ret$55;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$55 = new Int32Array([11, 36, 12, 5, 37, 13]);
    var tmp_55 = tmp$ret$55;
    var tmp$ret$56;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$56 = new Int32Array([5, 109, 87, 1, 110, 88]);
    var tmp_56 = tmp$ret$56;
    var tmp$ret$57;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$57 = new Int32Array([5, 65, 41, 5, 66, 42]);
    var tmp_57 = tmp$ret$57;
    var tmp$ret$58;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$58 = new Int32Array([5, 54, 24, 7, 55, 25]);
    var tmp_58 = tmp$ret$58;
    var tmp$ret$59;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$59 = new Int32Array([11, 36, 12, 7, 37, 13]);
    var tmp_59 = tmp$ret$59;
    var tmp$ret$60;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$60 = new Int32Array([5, 122, 98, 1, 123, 99]);
    var tmp_60 = tmp$ret$60;
    var tmp$ret$61;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$61 = new Int32Array([7, 73, 45, 3, 74, 46]);
    var tmp_61 = tmp$ret$61;
    var tmp$ret$62;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$62 = new Int32Array([15, 43, 19, 2, 44, 20]);
    var tmp_62 = tmp$ret$62;
    var tmp$ret$63;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$63 = new Int32Array([3, 45, 15, 13, 46, 16]);
    var tmp_63 = tmp$ret$63;
    var tmp$ret$64;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$64 = new Int32Array([1, 135, 107, 5, 136, 108]);
    var tmp_64 = tmp$ret$64;
    var tmp$ret$65;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$65 = new Int32Array([10, 74, 46, 1, 75, 47]);
    var tmp_65 = tmp$ret$65;
    var tmp$ret$66;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$66 = new Int32Array([1, 50, 22, 15, 51, 23]);
    var tmp_66 = tmp$ret$66;
    var tmp$ret$67;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$67 = new Int32Array([2, 42, 14, 17, 43, 15]);
    var tmp_67 = tmp$ret$67;
    var tmp$ret$68;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$68 = new Int32Array([5, 150, 120, 1, 151, 121]);
    var tmp_68 = tmp$ret$68;
    var tmp$ret$69;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$69 = new Int32Array([9, 69, 43, 4, 70, 44]);
    var tmp_69 = tmp$ret$69;
    var tmp$ret$70;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$70 = new Int32Array([17, 50, 22, 1, 51, 23]);
    var tmp_70 = tmp$ret$70;
    var tmp$ret$71;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$71 = new Int32Array([2, 42, 14, 19, 43, 15]);
    var tmp_71 = tmp$ret$71;
    var tmp$ret$72;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$72 = new Int32Array([3, 141, 113, 4, 142, 114]);
    var tmp_72 = tmp$ret$72;
    var tmp$ret$73;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$73 = new Int32Array([3, 70, 44, 11, 71, 45]);
    var tmp_73 = tmp$ret$73;
    var tmp$ret$74;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$74 = new Int32Array([17, 47, 21, 4, 48, 22]);
    var tmp_74 = tmp$ret$74;
    var tmp$ret$75;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$75 = new Int32Array([9, 39, 13, 16, 40, 14]);
    var tmp_75 = tmp$ret$75;
    var tmp$ret$76;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$76 = new Int32Array([3, 135, 107, 5, 136, 108]);
    var tmp_76 = tmp$ret$76;
    var tmp$ret$77;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$77 = new Int32Array([3, 67, 41, 13, 68, 42]);
    var tmp_77 = tmp$ret$77;
    var tmp$ret$78;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$78 = new Int32Array([15, 54, 24, 5, 55, 25]);
    var tmp_78 = tmp$ret$78;
    var tmp$ret$79;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$79 = new Int32Array([15, 43, 15, 10, 44, 16]);
    var tmp_79 = tmp$ret$79;
    var tmp$ret$80;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$80 = new Int32Array([4, 144, 116, 4, 145, 117]);
    var tmp_80 = tmp$ret$80;
    var tmp$ret$81;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$81 = new Int32Array([17, 68, 42]);
    var tmp_81 = tmp$ret$81;
    var tmp$ret$82;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$82 = new Int32Array([17, 50, 22, 6, 51, 23]);
    var tmp_82 = tmp$ret$82;
    var tmp$ret$83;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$83 = new Int32Array([19, 46, 16, 6, 47, 17]);
    var tmp_83 = tmp$ret$83;
    var tmp$ret$84;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$84 = new Int32Array([2, 139, 111, 7, 140, 112]);
    var tmp_84 = tmp$ret$84;
    var tmp$ret$85;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$85 = new Int32Array([17, 74, 46]);
    var tmp_85 = tmp$ret$85;
    var tmp$ret$86;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$86 = new Int32Array([7, 54, 24, 16, 55, 25]);
    var tmp_86 = tmp$ret$86;
    var tmp$ret$87;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$87 = new Int32Array([34, 37, 13]);
    var tmp_87 = tmp$ret$87;
    var tmp$ret$88;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$88 = new Int32Array([4, 151, 121, 5, 152, 122]);
    var tmp_88 = tmp$ret$88;
    var tmp$ret$89;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$89 = new Int32Array([4, 75, 47, 14, 76, 48]);
    var tmp_89 = tmp$ret$89;
    var tmp$ret$90;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$90 = new Int32Array([11, 54, 24, 14, 55, 25]);
    var tmp_90 = tmp$ret$90;
    var tmp$ret$91;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$91 = new Int32Array([16, 45, 15, 14, 46, 16]);
    var tmp_91 = tmp$ret$91;
    var tmp$ret$92;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$92 = new Int32Array([6, 147, 117, 4, 148, 118]);
    var tmp_92 = tmp$ret$92;
    var tmp$ret$93;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$93 = new Int32Array([6, 73, 45, 14, 74, 46]);
    var tmp_93 = tmp$ret$93;
    var tmp$ret$94;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$94 = new Int32Array([11, 54, 24, 16, 55, 25]);
    var tmp_94 = tmp$ret$94;
    var tmp$ret$95;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$95 = new Int32Array([30, 46, 16, 2, 47, 17]);
    var tmp_95 = tmp$ret$95;
    var tmp$ret$96;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$96 = new Int32Array([8, 132, 106, 4, 133, 107]);
    var tmp_96 = tmp$ret$96;
    var tmp$ret$97;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$97 = new Int32Array([8, 75, 47, 13, 76, 48]);
    var tmp_97 = tmp$ret$97;
    var tmp$ret$98;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$98 = new Int32Array([7, 54, 24, 22, 55, 25]);
    var tmp_98 = tmp$ret$98;
    var tmp$ret$99;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$99 = new Int32Array([22, 45, 15, 13, 46, 16]);
    var tmp_99 = tmp$ret$99;
    var tmp$ret$100;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$100 = new Int32Array([10, 142, 114, 2, 143, 115]);
    var tmp_100 = tmp$ret$100;
    var tmp$ret$101;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$101 = new Int32Array([19, 74, 46, 4, 75, 47]);
    var tmp_101 = tmp$ret$101;
    var tmp$ret$102;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$102 = new Int32Array([28, 50, 22, 6, 51, 23]);
    var tmp_102 = tmp$ret$102;
    var tmp$ret$103;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$103 = new Int32Array([33, 46, 16, 4, 47, 17]);
    var tmp_103 = tmp$ret$103;
    var tmp$ret$104;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$104 = new Int32Array([8, 152, 122, 4, 153, 123]);
    var tmp_104 = tmp$ret$104;
    var tmp$ret$105;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$105 = new Int32Array([22, 73, 45, 3, 74, 46]);
    var tmp_105 = tmp$ret$105;
    var tmp$ret$106;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$106 = new Int32Array([8, 53, 23, 26, 54, 24]);
    var tmp_106 = tmp$ret$106;
    var tmp$ret$107;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$107 = new Int32Array([12, 45, 15, 28, 46, 16]);
    var tmp_107 = tmp$ret$107;
    var tmp$ret$108;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$108 = new Int32Array([3, 147, 117, 10, 148, 118]);
    var tmp_108 = tmp$ret$108;
    var tmp$ret$109;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$109 = new Int32Array([3, 73, 45, 23, 74, 46]);
    var tmp_109 = tmp$ret$109;
    var tmp$ret$110;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$110 = new Int32Array([4, 54, 24, 31, 55, 25]);
    var tmp_110 = tmp$ret$110;
    var tmp$ret$111;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$111 = new Int32Array([11, 45, 15, 31, 46, 16]);
    var tmp_111 = tmp$ret$111;
    var tmp$ret$112;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$112 = new Int32Array([7, 146, 116, 7, 147, 117]);
    var tmp_112 = tmp$ret$112;
    var tmp$ret$113;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$113 = new Int32Array([21, 73, 45, 7, 74, 46]);
    var tmp_113 = tmp$ret$113;
    var tmp$ret$114;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$114 = new Int32Array([1, 53, 23, 37, 54, 24]);
    var tmp_114 = tmp$ret$114;
    var tmp$ret$115;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$115 = new Int32Array([19, 45, 15, 26, 46, 16]);
    var tmp_115 = tmp$ret$115;
    var tmp$ret$116;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$116 = new Int32Array([5, 145, 115, 10, 146, 116]);
    var tmp_116 = tmp$ret$116;
    var tmp$ret$117;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$117 = new Int32Array([19, 75, 47, 10, 76, 48]);
    var tmp_117 = tmp$ret$117;
    var tmp$ret$118;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$118 = new Int32Array([15, 54, 24, 25, 55, 25]);
    var tmp_118 = tmp$ret$118;
    var tmp$ret$119;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$119 = new Int32Array([23, 45, 15, 25, 46, 16]);
    var tmp_119 = tmp$ret$119;
    var tmp$ret$120;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$120 = new Int32Array([13, 145, 115, 3, 146, 116]);
    var tmp_120 = tmp$ret$120;
    var tmp$ret$121;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$121 = new Int32Array([2, 74, 46, 29, 75, 47]);
    var tmp_121 = tmp$ret$121;
    var tmp$ret$122;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$122 = new Int32Array([42, 54, 24, 1, 55, 25]);
    var tmp_122 = tmp$ret$122;
    var tmp$ret$123;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$123 = new Int32Array([23, 45, 15, 28, 46, 16]);
    var tmp_123 = tmp$ret$123;
    var tmp$ret$124;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$124 = new Int32Array([17, 145, 115]);
    var tmp_124 = tmp$ret$124;
    var tmp$ret$125;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$125 = new Int32Array([10, 74, 46, 23, 75, 47]);
    var tmp_125 = tmp$ret$125;
    var tmp$ret$126;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$126 = new Int32Array([10, 54, 24, 35, 55, 25]);
    var tmp_126 = tmp$ret$126;
    var tmp$ret$127;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$127 = new Int32Array([19, 45, 15, 35, 46, 16]);
    var tmp_127 = tmp$ret$127;
    var tmp$ret$128;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$128 = new Int32Array([17, 145, 115, 1, 146, 116]);
    var tmp_128 = tmp$ret$128;
    var tmp$ret$129;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$129 = new Int32Array([14, 74, 46, 21, 75, 47]);
    var tmp_129 = tmp$ret$129;
    var tmp$ret$130;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$130 = new Int32Array([29, 54, 24, 19, 55, 25]);
    var tmp_130 = tmp$ret$130;
    var tmp$ret$131;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$131 = new Int32Array([11, 45, 15, 46, 46, 16]);
    var tmp_131 = tmp$ret$131;
    var tmp$ret$132;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$132 = new Int32Array([13, 145, 115, 6, 146, 116]);
    var tmp_132 = tmp$ret$132;
    var tmp$ret$133;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$133 = new Int32Array([14, 74, 46, 23, 75, 47]);
    var tmp_133 = tmp$ret$133;
    var tmp$ret$134;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$134 = new Int32Array([44, 54, 24, 7, 55, 25]);
    var tmp_134 = tmp$ret$134;
    var tmp$ret$135;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$135 = new Int32Array([59, 46, 16, 1, 47, 17]);
    var tmp_135 = tmp$ret$135;
    var tmp$ret$136;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$136 = new Int32Array([12, 151, 121, 7, 152, 122]);
    var tmp_136 = tmp$ret$136;
    var tmp$ret$137;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$137 = new Int32Array([12, 75, 47, 26, 76, 48]);
    var tmp_137 = tmp$ret$137;
    var tmp$ret$138;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$138 = new Int32Array([39, 54, 24, 14, 55, 25]);
    var tmp_138 = tmp$ret$138;
    var tmp$ret$139;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$139 = new Int32Array([22, 45, 15, 41, 46, 16]);
    var tmp_139 = tmp$ret$139;
    var tmp$ret$140;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$140 = new Int32Array([6, 151, 121, 14, 152, 122]);
    var tmp_140 = tmp$ret$140;
    var tmp$ret$141;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$141 = new Int32Array([6, 75, 47, 34, 76, 48]);
    var tmp_141 = tmp$ret$141;
    var tmp$ret$142;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$142 = new Int32Array([46, 54, 24, 10, 55, 25]);
    var tmp_142 = tmp$ret$142;
    var tmp$ret$143;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$143 = new Int32Array([2, 45, 15, 64, 46, 16]);
    var tmp_143 = tmp$ret$143;
    var tmp$ret$144;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$144 = new Int32Array([17, 152, 122, 4, 153, 123]);
    var tmp_144 = tmp$ret$144;
    var tmp$ret$145;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$145 = new Int32Array([29, 74, 46, 14, 75, 47]);
    var tmp_145 = tmp$ret$145;
    var tmp$ret$146;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$146 = new Int32Array([49, 54, 24, 10, 55, 25]);
    var tmp_146 = tmp$ret$146;
    var tmp$ret$147;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$147 = new Int32Array([24, 45, 15, 46, 46, 16]);
    var tmp_147 = tmp$ret$147;
    var tmp$ret$148;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$148 = new Int32Array([4, 152, 122, 18, 153, 123]);
    var tmp_148 = tmp$ret$148;
    var tmp$ret$149;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$149 = new Int32Array([13, 74, 46, 32, 75, 47]);
    var tmp_149 = tmp$ret$149;
    var tmp$ret$150;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$150 = new Int32Array([48, 54, 24, 14, 55, 25]);
    var tmp_150 = tmp$ret$150;
    var tmp$ret$151;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$151 = new Int32Array([42, 45, 15, 32, 46, 16]);
    var tmp_151 = tmp$ret$151;
    var tmp$ret$152;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$152 = new Int32Array([20, 147, 117, 4, 148, 118]);
    var tmp_152 = tmp$ret$152;
    var tmp$ret$153;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$153 = new Int32Array([40, 75, 47, 7, 76, 48]);
    var tmp_153 = tmp$ret$153;
    var tmp$ret$154;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$154 = new Int32Array([43, 54, 24, 22, 55, 25]);
    var tmp_154 = tmp$ret$154;
    var tmp$ret$155;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$155 = new Int32Array([10, 45, 15, 67, 46, 16]);
    var tmp_155 = tmp$ret$155;
    var tmp$ret$156;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$156 = new Int32Array([19, 148, 118, 6, 149, 119]);
    var tmp_156 = tmp$ret$156;
    var tmp$ret$157;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$157 = new Int32Array([18, 75, 47, 31, 76, 48]);
    var tmp_157 = tmp$ret$157;
    var tmp$ret$158;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$158 = new Int32Array([34, 54, 24, 34, 55, 25]);
    var tmp_158 = tmp$ret$158;
    var tmp$ret$159;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$159 = new Int32Array([20, 45, 15, 61, 46, 16]);
    var tmp0_arrayOf = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, tmp_39, tmp_40, tmp_41, tmp_42, tmp_43, tmp_44, tmp_45, tmp_46, tmp_47, tmp_48, tmp_49, tmp_50, tmp_51, tmp_52, tmp_53, tmp_54, tmp_55, tmp_56, tmp_57, tmp_58, tmp_59, tmp_60, tmp_61, tmp_62, tmp_63, tmp_64, tmp_65, tmp_66, tmp_67, tmp_68, tmp_69, tmp_70, tmp_71, tmp_72, tmp_73, tmp_74, tmp_75, tmp_76, tmp_77, tmp_78, tmp_79, tmp_80, tmp_81, tmp_82, tmp_83, tmp_84, tmp_85, tmp_86, tmp_87, tmp_88, tmp_89, tmp_90, tmp_91, tmp_92, tmp_93, tmp_94, tmp_95, tmp_96, tmp_97, tmp_98, tmp_99, tmp_100, tmp_101, tmp_102, tmp_103, tmp_104, tmp_105, tmp_106, tmp_107, tmp_108, tmp_109, tmp_110, tmp_111, tmp_112, tmp_113, tmp_114, tmp_115, tmp_116, tmp_117, tmp_118, tmp_119, tmp_120, tmp_121, tmp_122, tmp_123, tmp_124, tmp_125, tmp_126, tmp_127, tmp_128, tmp_129, tmp_130, tmp_131, tmp_132, tmp_133, tmp_134, tmp_135, tmp_136, tmp_137, tmp_138, tmp_139, tmp_140, tmp_141, tmp_142, tmp_143, tmp_144, tmp_145, tmp_146, tmp_147, tmp_148, tmp_149, tmp_150, tmp_151, tmp_152, tmp_153, tmp_154, tmp_155, tmp_156, tmp_157, tmp_158, tmp$ret$159];
    var tmp$ret$161;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$160;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$160 = tmp0_arrayOf;
    tmp$ret$161 = tmp$ret$160;
    tmp$ret$162 = tmp$ret$161;
    tmp.ob_1 = tmp$ret$162;
  }
  Companion_9.prototype.getRSBlocks = function (typeNumber, errorCorrectionLevel) {
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.ob_1[imul(typeNumber - 1 | 0, 4) + errorCorrectionLevel.i7_1 | 0];
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.github.g0dkar.qrcode.internals.Companion.getRSBlocks.<anonymous>' call
    var tmp;
    if (tmp0_let.length === 3) {
      var block = new RSBlock(tmp0_let[1], tmp0_let[2]);
      var tmp_0 = 0;
      var tmp_1 = tmp0_let[0];
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
      var tmp_2 = tmp$ret$0;
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        var tmp$ret$1;
        // Inline function 'io.github.g0dkar.qrcode.internals.Companion.getRSBlocks.<anonymous>.<anonymous>' call
        tmp$ret$1 = block;
        tmp_2[tmp_3] = tmp$ret$1;
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp = tmp_2;
    } else {
      var blocksSize = tmp0_let[0] + tmp0_let[3] | 0;
      var firstBlock = new RSBlock(tmp0_let[1], tmp0_let[2]);
      var secondBlock = new RSBlock(tmp0_let[4], tmp0_let[5]);
      var tmp_4 = 0;
      var tmp_5 = blocksSize;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$2 = fillArrayVal(Array(tmp_5), null);
      var tmp_6 = tmp$ret$2;
      while (tmp_4 < tmp_5) {
        var tmp_7 = tmp_4;
        var tmp$ret$3;
        // Inline function 'io.github.g0dkar.qrcode.internals.Companion.getRSBlocks.<anonymous>.<anonymous>' call
        var tmp_8;
        if (tmp_7 < tmp0_let[0]) {
          tmp_8 = firstBlock;
        } else {
          tmp_8 = secondBlock;
        }
        tmp$ret$3 = tmp_8;
        tmp_6[tmp_7] = tmp$ret$3;
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp = tmp_6;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function RSBlock(totalCount, dataCount) {
    Companion_getInstance_9();
    this.w8_1 = totalCount;
    this.x8_1 = dataCount;
  }
  RSBlock.prototype.pb = function () {
    return this.w8_1;
  };
  RSBlock.prototype.qb = function () {
    return this.x8_1;
  };
  RSBlock.prototype.copy = function (totalCount, dataCount) {
    return this.rb(totalCount === void 1 ? this.w8_1 : totalCount, dataCount === void 1 ? this.x8_1 : dataCount);
  };
  RSBlock.prototype.rb = function (totalCount, dataCount) {
    return new RSBlock(totalCount, dataCount);
  };
  RSBlock.prototype.toString = function () {
    return 'RSBlock(totalCount=' + this.w8_1 + ', dataCount=' + this.x8_1 + ')';
  };
  RSBlock.prototype.hashCode = function () {
    var result = this.w8_1;
    result = imul(result, 31) + this.x8_1 | 0;
    return result;
  };
  RSBlock.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RSBlock))
      return false;
    var tmp0_other_with_cast = other instanceof RSBlock ? other : THROW_CCE();
    if (!(this.w8_1 === tmp0_other_with_cast.w8_1))
      return false;
    if (!(this.x8_1 === tmp0_other_with_cast.x8_1))
      return false;
    return true;
  };
  RSBlock.$metadata$ = classMeta('RSBlock');
  function Colors() {
    Colors_instance = this;
    this.sb_1 = -984833;
    this.tb_1 = -332841;
    this.ub_1 = -16711681;
    this.vb_1 = -8388652;
    this.wb_1 = -983041;
    this.xb_1 = -657956;
    this.yb_1 = -6972;
    this.zb_1 = -16777216;
    this.ac_1 = -5171;
    this.bc_1 = -16776961;
    this.cc_1 = -7722014;
    this.dc_1 = -5952982;
    this.ec_1 = -2180985;
    this.fc_1 = -10510688;
    this.gc_1 = -8388864;
    this.hc_1 = -2987746;
    this.ic_1 = -32944;
    this.jc_1 = -10185235;
    this.kc_1 = -1828;
    this.lc_1 = -2354116;
    this.mc_1 = -16711681;
    this.nc_1 = -16777077;
    this.oc_1 = -16741493;
    this.pc_1 = -4684277;
    this.qc_1 = -5658199;
    this.rc_1 = -5658199;
    this.sc_1 = -16751616;
    this.tc_1 = -4343957;
    this.uc_1 = -7667573;
    this.vc_1 = -11179217;
    this.wc_1 = -29696;
    this.xc_1 = -6737204;
    this.yc_1 = -7667712;
    this.zc_1 = -1468806;
    this.ad_1 = -7357297;
    this.bd_1 = -12042869;
    this.cd_1 = -13676721;
    this.dd_1 = -13676721;
    this.ed_1 = -16724271;
    this.fd_1 = -7077677;
    this.gd_1 = -60269;
    this.hd_1 = -16728065;
    this.id_1 = -9868951;
    this.jd_1 = -9868951;
    this.kd_1 = -14774017;
    this.ld_1 = -5103070;
    this.md_1 = -1296;
    this.nd_1 = -14513374;
    this.od_1 = -65281;
    this.pd_1 = -2302756;
    this.qd_1 = -460545;
    this.rd_1 = -10496;
    this.sd_1 = -2448096;
    this.td_1 = -8355712;
    this.ud_1 = -8355712;
    this.vd_1 = -16744448;
    this.wd_1 = -5374161;
    this.xd_1 = -983056;
    this.yd_1 = -38476;
    this.zd_1 = -3318692;
    this.ae_1 = -11861886;
    this.be_1 = -16;
    this.ce_1 = -989556;
    this.de_1 = -1644806;
    this.ee_1 = -3851;
    this.fe_1 = -8586240;
    this.ge_1 = -1331;
    this.he_1 = -5383962;
    this.ie_1 = -1015680;
    this.je_1 = -2031617;
    this.ke_1 = -329006;
    this.le_1 = -2894893;
    this.me_1 = -2894893;
    this.ne_1 = -7278960;
    this.oe_1 = -18751;
    this.pe_1 = -24454;
    this.qe_1 = -14634326;
    this.re_1 = -7876870;
    this.se_1 = -8943463;
    this.te_1 = -8943463;
    this.ue_1 = -5192482;
    this.ve_1 = -32;
    this.we_1 = -16711936;
    this.xe_1 = -13447886;
    this.ye_1 = -331546;
    this.ze_1 = -65281;
    this.af_1 = -8388608;
    this.bf_1 = -10039894;
    this.cf_1 = -16777011;
    this.df_1 = -4565549;
    this.ef_1 = -7114533;
    this.ff_1 = -12799119;
    this.gf_1 = -8689426;
    this.hf_1 = -16713062;
    this.if_1 = -12004916;
    this.jf_1 = -3730043;
    this.kf_1 = -15132304;
    this.lf_1 = -655366;
    this.mf_1 = -6943;
    this.nf_1 = -6987;
    this.of_1 = -8531;
    this.pf_1 = -16777088;
    this.qf_1 = -133658;
    this.rf_1 = -8355840;
    this.sf_1 = -9728477;
    this.tf_1 = -23296;
    this.uf_1 = -47872;
    this.vf_1 = -2461482;
    this.wf_1 = -1120086;
    this.xf_1 = -6751336;
    this.yf_1 = -5247250;
    this.zf_1 = -2396013;
    this.ag_1 = -4139;
    this.bg_1 = -9543;
    this.cg_1 = -3308225;
    this.dg_1 = -16181;
    this.eg_1 = -2252579;
    this.fg_1 = -5185306;
    this.gg_1 = -8388480;
    this.hg_1 = -10079335;
    this.ig_1 = -65536;
    this.jg_1 = -4419697;
    this.kg_1 = -12490271;
    this.lg_1 = -7650029;
    this.mg_1 = -360334;
    this.ng_1 = -744352;
    this.og_1 = -13726889;
    this.pg_1 = -2578;
    this.qg_1 = -6270419;
    this.rg_1 = -4144960;
    this.sg_1 = -7876885;
    this.tg_1 = -9807155;
    this.ug_1 = -9404272;
    this.vg_1 = -9404272;
    this.wg_1 = -1286;
    this.xg_1 = -16711809;
    this.yg_1 = -12156236;
    this.zg_1 = -2968436;
    this.ah_1 = -16744320;
    this.bh_1 = -2572328;
    this.ch_1 = -40121;
    this.dh_1 = -12525360;
    this.eh_1 = -1146130;
    this.fh_1 = -663885;
    this.gh_1 = -1;
    this.hh_1 = -657931;
    this.ih_1 = -256;
    this.jh_1 = -6632142;
  }
  Colors.$metadata$ = objectMeta('Colors');
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function QRCodeGraphicsFactory() {
  }
  QRCodeGraphicsFactory.prototype.newGraphicsSquare = function (size) {
    return this.newGraphics(size, size);
  };
  QRCodeGraphicsFactory.prototype.newGraphics = function (width, height) {
    return new QRCodeGraphics(width, height);
  };
  QRCodeGraphicsFactory.$metadata$ = classMeta('QRCodeGraphicsFactory');
  function Companion_10() {
    Companion_instance_10 = this;
    this.kh_1 = 'Canvas seems to not be supported :(';
  }
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function rgba($this, color) {
    var r = color >> 16 & 255;
    var g = color >> 8 & 255;
    var b = color >> 0 & 255;
    var a = (color >> 24 & 255) / 255.0;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  function draw($this, color, action) {
    var colorString = rgba($this, color);
    $this.oh_1.fillStyle = colorString;
    $this.oh_1.strokeStyle = colorString;
    action();
  }
  function tryGet($this, what) {
    var tmp;
    try {
      tmp = what();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        Companion_getInstance_10();
        throw Error_init_$Create$('Canvas seems to not be supported :(', $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function QRCodeGraphics$lambda() {
    var tmp = document.createElement('canvas');
    return tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
  }
  function QRCodeGraphics$lambda_0($canvas) {
    return function () {
      var tmp = $canvas.getContext('2d');
      return tmp instanceof CanvasRenderingContext2D ? tmp : THROW_CCE();
    };
  }
  function QRCodeGraphics$drawLine$lambda(this$0, $x1, $y1, $x2, $y2) {
    return function () {
      this$0.oh_1.moveTo($x1, $y1);
      this$0.oh_1.lineTo($x2, $y2);
      return Unit_getInstance();
    };
  }
  function QRCodeGraphics$drawRect$lambda(this$0, $x, $y, $width, $height) {
    return function () {
      this$0.oh_1.strokeRect($x, $y, $width, $height);
      return Unit_getInstance();
    };
  }
  function QRCodeGraphics$fillRect$lambda(this$0, $x, $y, $width, $height) {
    return function () {
      this$0.oh_1.fillRect($x, $y, $width, $height);
      return Unit_getInstance();
    };
  }
  function QRCodeGraphics(width, height) {
    Companion_getInstance_10();
    this.lh_1 = width;
    this.mh_1 = height;
    var canvas = tryGet(this, QRCodeGraphics$lambda);
    canvas.width = this.lh_1;
    canvas.height = this.mh_1;
    var context = tryGet(this, QRCodeGraphics$lambda_0(canvas));
    this.nh_1 = canvas;
    this.oh_1 = context;
  }
  QRCodeGraphics.prototype.ph = function () {
    return this.lh_1;
  };
  QRCodeGraphics.prototype.qh = function () {
    return this.mh_1;
  };
  QRCodeGraphics.prototype.toDataURL = function (format) {
    return this.rh(format === void 1 ? 'png' : format);
  };
  QRCodeGraphics.prototype.rh = function (format) {
    return this.nh_1.toDataURL(format);
  };
  QRCodeGraphics.prototype.sh = function (format, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      format = 'png';
    return $handler == null ? this.rh(format) : $handler(format);
  };
  QRCodeGraphics.prototype.toBlob = function (callback) {
    return this.nh_1.toBlob(callback);
  };
  QRCodeGraphics.prototype.getBytes = function () {
    return this.getBytesForFormat('png');
  };
  QRCodeGraphics.prototype.getBytesForFormat = function (format) {
    return encodeToByteArray(this.nh_1.toDataURL(format));
  };
  QRCodeGraphics.prototype.availableFormats = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['png'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  QRCodeGraphics.prototype.nativeImage = function () {
    return this.nh_1;
  };
  QRCodeGraphics.prototype.drawLine = function (x1, y1, x2, y2, color) {
    draw(this, color, QRCodeGraphics$drawLine$lambda(this, x1, y1, x2, y2));
  };
  QRCodeGraphics.prototype.drawRect = function (x, y, width, height, color) {
    draw(this, color, QRCodeGraphics$drawRect$lambda(this, x, y, width, height));
  };
  QRCodeGraphics.prototype.fillRect = function (x, y, width, height, color) {
    draw(this, color, QRCodeGraphics$fillRect$lambda(this, x, y, width, height));
  };
  QRCodeGraphics.prototype.fill = function (color) {
    this.fillRect(0, 0, this.lh_1, this.mh_1, color);
  };
  QRCodeGraphics.prototype.drawRoundRect = function (x, y, width, height, borderRadius, color) {
    this.drawRect(x, y, width, height, color);
  };
  QRCodeGraphics.prototype.fillRoundRect = function (x, y, width, height, borderRadius, color) {
    this.fillRect(x, y, width, height, color);
  };
  QRCodeGraphics.prototype.drawImage = function (img, x, y) {
    this.oh_1.drawImage(img.nh_1, x, y);
  };
  QRCodeGraphics.$metadata$ = classMeta('QRCodeGraphics');
  Object.defineProperty(QRCodeGraphics.prototype, 'width', {
    configurable: true,
    get: QRCodeGraphics.prototype.ph
  });
  Object.defineProperty(QRCodeGraphics.prototype, 'height', {
    configurable: true,
    get: QRCodeGraphics.prototype.qh
  });
  //region block: post-declaration
  InternalHashCodeMap.prototype.s3 = createJsMap;
  //endregion
  //region block: init
  interfacesCounter = 0;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $io = _.io || (_.io = {});
    var $io$github = $io.github || ($io.github = {});
    var $io$github$g0dkar = $io$github.g0dkar || ($io$github.g0dkar = {});
    var $io$github$g0dkar$qrcode = $io$github$g0dkar.qrcode || ($io$github$g0dkar.qrcode = {});
    $io$github$g0dkar$qrcode.QRCode = QRCode;
    Object.defineProperty($io$github$g0dkar$qrcode.QRCode, 'Companion', {
      configurable: true,
      get: Companion_getInstance_7
    });
    var $io = _.io || (_.io = {});
    var $io$github = $io.github || ($io.github = {});
    var $io$github$g0dkar = $io$github.g0dkar || ($io$github.g0dkar = {});
    var $io$github$g0dkar$qrcode = $io$github$g0dkar.qrcode || ($io$github$g0dkar.qrcode = {});
    $io$github$g0dkar$qrcode.ErrorCorrectionLevel = ErrorCorrectionLevel;
    $io$github$g0dkar$qrcode.ErrorCorrectionLevel.values = values;
    $io$github$g0dkar$qrcode.ErrorCorrectionLevel.valueOf = valueOf;
    Object.defineProperty($io$github$g0dkar$qrcode.ErrorCorrectionLevel, 'L', {
      configurable: true,
      get: ErrorCorrectionLevel_L_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.ErrorCorrectionLevel, 'M', {
      configurable: true,
      get: ErrorCorrectionLevel_M_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.ErrorCorrectionLevel, 'Q', {
      configurable: true,
      get: ErrorCorrectionLevel_Q_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.ErrorCorrectionLevel, 'H', {
      configurable: true,
      get: ErrorCorrectionLevel_H_getInstance
    });
    $io$github$g0dkar$qrcode.MaskPattern = MaskPattern;
    $io$github$g0dkar$qrcode.MaskPattern.values = values_0;
    $io$github$g0dkar$qrcode.MaskPattern.valueOf = valueOf_0;
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN000', {
      configurable: true,
      get: MaskPattern_PATTERN000_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN001', {
      configurable: true,
      get: MaskPattern_PATTERN001_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN010', {
      configurable: true,
      get: MaskPattern_PATTERN010_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN011', {
      configurable: true,
      get: MaskPattern_PATTERN011_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN100', {
      configurable: true,
      get: MaskPattern_PATTERN100_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN101', {
      configurable: true,
      get: MaskPattern_PATTERN101_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN110', {
      configurable: true,
      get: MaskPattern_PATTERN110_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.MaskPattern, 'PATTERN111', {
      configurable: true,
      get: MaskPattern_PATTERN111_getInstance
    });
    $io$github$g0dkar$qrcode.QRCodeDataType = QRCodeDataType;
    $io$github$g0dkar$qrcode.QRCodeDataType.values = values_1;
    $io$github$g0dkar$qrcode.QRCodeDataType.valueOf = valueOf_1;
    Object.defineProperty($io$github$g0dkar$qrcode.QRCodeDataType, 'NUMBERS', {
      configurable: true,
      get: QRCodeDataType_NUMBERS_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.QRCodeDataType, 'UPPER_ALPHA_NUM', {
      configurable: true,
      get: QRCodeDataType_UPPER_ALPHA_NUM_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode.QRCodeDataType, 'DEFAULT', {
      configurable: true,
      get: QRCodeDataType_DEFAULT_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$github = $io.github || ($io.github = {});
    var $io$github$g0dkar = $io$github.g0dkar || ($io$github.g0dkar = {});
    var $io$github$g0dkar$qrcode = $io$github$g0dkar.qrcode || ($io$github$g0dkar.qrcode = {});
    var $io$github$g0dkar$qrcode$internals = $io$github$g0dkar$qrcode.internals || ($io$github$g0dkar$qrcode.internals = {});
    $io$github$g0dkar$qrcode$internals.QRCodeSquare = QRCodeSquare;
    $io$github$g0dkar$qrcode$internals.QRCodeSquareInfo = QRCodeSquareInfo;
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeSquareInfo, 'Companion', {
      configurable: true,
      get: Companion_getInstance_8
    });
    $io$github$g0dkar$qrcode$internals.QRCodeSquareType = QRCodeSquareType;
    $io$github$g0dkar$qrcode$internals.QRCodeSquareType.values = values_2;
    $io$github$g0dkar$qrcode$internals.QRCodeSquareType.valueOf = valueOf_2;
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeSquareType, 'POSITION_PROBE', {
      configurable: true,
      get: QRCodeSquareType_POSITION_PROBE_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeSquareType, 'POSITION_ADJUST', {
      configurable: true,
      get: QRCodeSquareType_POSITION_ADJUST_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeSquareType, 'TIMING_PATTERN', {
      configurable: true,
      get: QRCodeSquareType_TIMING_PATTERN_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeSquareType, 'DEFAULT', {
      configurable: true,
      get: QRCodeSquareType_DEFAULT_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeSquareType, 'MARGIN', {
      configurable: true,
      get: QRCodeSquareType_MARGIN_getInstance
    });
    $io$github$g0dkar$qrcode$internals.QRCodeRegion = QRCodeRegion;
    $io$github$g0dkar$qrcode$internals.QRCodeRegion.values = values_3;
    $io$github$g0dkar$qrcode$internals.QRCodeRegion.valueOf = valueOf_3;
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'TOP_LEFT_CORNER', {
      configurable: true,
      get: QRCodeRegion_TOP_LEFT_CORNER_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'TOP_RIGHT_CORNER', {
      configurable: true,
      get: QRCodeRegion_TOP_RIGHT_CORNER_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'TOP_MID', {
      configurable: true,
      get: QRCodeRegion_TOP_MID_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'LEFT_MID', {
      configurable: true,
      get: QRCodeRegion_LEFT_MID_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'RIGHT_MID', {
      configurable: true,
      get: QRCodeRegion_RIGHT_MID_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'CENTER', {
      configurable: true,
      get: QRCodeRegion_CENTER_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'BOTTOM_LEFT_CORNER', {
      configurable: true,
      get: QRCodeRegion_BOTTOM_LEFT_CORNER_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'BOTTOM_RIGHT_CORNER', {
      configurable: true,
      get: QRCodeRegion_BOTTOM_RIGHT_CORNER_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'BOTTOM_MID', {
      configurable: true,
      get: QRCodeRegion_BOTTOM_MID_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'MARGIN', {
      configurable: true,
      get: QRCodeRegion_MARGIN_getInstance
    });
    Object.defineProperty($io$github$g0dkar$qrcode$internals.QRCodeRegion, 'UNKNOWN', {
      configurable: true,
      get: QRCodeRegion_UNKNOWN_getInstance
    });
    var $io = _.io || (_.io = {});
    var $io$github = $io.github || ($io.github = {});
    var $io$github$g0dkar = $io$github.g0dkar || ($io$github.g0dkar = {});
    var $io$github$g0dkar$qrcode = $io$github$g0dkar.qrcode || ($io$github$g0dkar.qrcode = {});
    var $io$github$g0dkar$qrcode$render = $io$github$g0dkar$qrcode.render || ($io$github$g0dkar$qrcode.render = {});
    $io$github$g0dkar$qrcode$render.QRCodeGraphicsFactory = QRCodeGraphicsFactory;
    var $io = _.io || (_.io = {});
    var $io$github = $io.github || ($io.github = {});
    var $io$github$g0dkar = $io$github.g0dkar || ($io$github.g0dkar = {});
    var $io$github$g0dkar$qrcode = $io$github$g0dkar.qrcode || ($io$github$g0dkar.qrcode = {});
    var $io$github$g0dkar$qrcode$render = $io$github$g0dkar$qrcode.render || ($io$github$g0dkar$qrcode.render = {});
    $io$github$g0dkar$qrcode$render.QRCodeGraphics = QRCodeGraphics;
    Object.defineProperty($io$github$g0dkar$qrcode$render.QRCodeGraphics, 'Companion', {
      configurable: true,
      get: Companion_getInstance_10
    });
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=qrcode-kotlin.js.map
