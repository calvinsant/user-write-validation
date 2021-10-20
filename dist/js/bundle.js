/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/blueimp-load-image/js/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global module, require */
module.exports = __webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js");

__webpack_require__(/*! ./load-image-scale */ "./node_modules/blueimp-load-image/js/load-image-scale.js");

__webpack_require__(/*! ./load-image-meta */ "./node_modules/blueimp-load-image/js/load-image-meta.js");

__webpack_require__(/*! ./load-image-fetch */ "./node_modules/blueimp-load-image/js/load-image-fetch.js");

__webpack_require__(/*! ./load-image-exif */ "./node_modules/blueimp-load-image/js/load-image-exif.js");

__webpack_require__(/*! ./load-image-exif-map */ "./node_modules/blueimp-load-image/js/load-image-exif-map.js");

__webpack_require__(/*! ./load-image-iptc */ "./node_modules/blueimp-load-image/js/load-image-iptc.js");

__webpack_require__(/*! ./load-image-iptc-map */ "./node_modules/blueimp-load-image/js/load-image-iptc-map.js");

__webpack_require__(/*! ./load-image-orientation */ "./node_modules/blueimp-load-image/js/load-image-orientation.js");

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-exif-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-exif-map.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Exif tags mapping based on
 * https://github.com/jseidelin/exif-js
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js"), __webpack_require__(/*! ./load-image-exif */ "./node_modules/blueimp-load-image/js/load-image-exif.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var ExifMapProto = loadImage.ExifMap.prototype;
  ExifMapProto.tags = {
    // =================
    // TIFF tags (IFD0):
    // =================
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011c: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011a: 'XResolution',
    0x011b: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012d: 'TransferFunction',
    0x013e: 'WhitePoint',
    0x013f: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013b: 'Artist',
    0x8298: 'Copyright',
    0x8769: {
      // ExifIFDPointer
      0x9000: 'ExifVersion',
      // EXIF version
      0xa000: 'FlashpixVersion',
      // Flashpix format version
      0xa001: 'ColorSpace',
      // Color space information tag
      0xa002: 'PixelXDimension',
      // Valid width of meaningful image
      0xa003: 'PixelYDimension',
      // Valid height of meaningful image
      0xa500: 'Gamma',
      0x9101: 'ComponentsConfiguration',
      // Information about channels
      0x9102: 'CompressedBitsPerPixel',
      // Compressed bits per pixel
      0x927c: 'MakerNote',
      // Any desired information written by the manufacturer
      0x9286: 'UserComment',
      // Comments by user
      0xa004: 'RelatedSoundFile',
      // Name of related sound file
      0x9003: 'DateTimeOriginal',
      // Date and time when the original image was generated
      0x9004: 'DateTimeDigitized',
      // Date and time when the image was stored digitally
      0x9290: 'SubSecTime',
      // Fractions of seconds for DateTime
      0x9291: 'SubSecTimeOriginal',
      // Fractions of seconds for DateTimeOriginal
      0x9292: 'SubSecTimeDigitized',
      // Fractions of seconds for DateTimeDigitized
      0x829a: 'ExposureTime',
      // Exposure time (in seconds)
      0x829d: 'FNumber',
      0x8822: 'ExposureProgram',
      // Exposure program
      0x8824: 'SpectralSensitivity',
      // Spectral sensitivity
      0x8827: 'PhotographicSensitivity',
      // EXIF 2.3, ISOSpeedRatings in EXIF 2.2
      0x8828: 'OECF',
      // Optoelectric conversion factor
      0x8830: 'SensitivityType',
      0x8831: 'StandardOutputSensitivity',
      0x8832: 'RecommendedExposureIndex',
      0x8833: 'ISOSpeed',
      0x8834: 'ISOSpeedLatitudeyyy',
      0x8835: 'ISOSpeedLatitudezzz',
      0x9201: 'ShutterSpeedValue',
      // Shutter speed
      0x9202: 'ApertureValue',
      // Lens aperture
      0x9203: 'BrightnessValue',
      // Value of brightness
      0x9204: 'ExposureBias',
      // Exposure bias
      0x9205: 'MaxApertureValue',
      // Smallest F number of lens
      0x9206: 'SubjectDistance',
      // Distance to subject in meters
      0x9207: 'MeteringMode',
      // Metering mode
      0x9208: 'LightSource',
      // Kind of light source
      0x9209: 'Flash',
      // Flash status
      0x9214: 'SubjectArea',
      // Location and area of main subject
      0x920a: 'FocalLength',
      // Focal length of the lens in mm
      0xa20b: 'FlashEnergy',
      // Strobe energy in BCPS
      0xa20c: 'SpatialFrequencyResponse',
      0xa20e: 'FocalPlaneXResolution',
      // Number of pixels in width direction per FPRUnit
      0xa20f: 'FocalPlaneYResolution',
      // Number of pixels in height direction per FPRUnit
      0xa210: 'FocalPlaneResolutionUnit',
      // Unit for measuring the focal plane resolution
      0xa214: 'SubjectLocation',
      // Location of subject in image
      0xa215: 'ExposureIndex',
      // Exposure index selected on camera
      0xa217: 'SensingMethod',
      // Image sensor type
      0xa300: 'FileSource',
      // Image source (3 == DSC)
      0xa301: 'SceneType',
      // Scene type (1 == directly photographed)
      0xa302: 'CFAPattern',
      // Color filter array geometric pattern
      0xa401: 'CustomRendered',
      // Special processing
      0xa402: 'ExposureMode',
      // Exposure mode
      0xa403: 'WhiteBalance',
      // 1 = auto white balance, 2 = manual
      0xa404: 'DigitalZoomRatio',
      // Digital zoom ratio
      0xa405: 'FocalLengthIn35mmFilm',
      0xa406: 'SceneCaptureType',
      // Type of scene
      0xa407: 'GainControl',
      // Degree of overall image gain adjustment
      0xa408: 'Contrast',
      // Direction of contrast processing applied by camera
      0xa409: 'Saturation',
      // Direction of saturation processing applied by camera
      0xa40a: 'Sharpness',
      // Direction of sharpness processing applied by camera
      0xa40b: 'DeviceSettingDescription',
      0xa40c: 'SubjectDistanceRange',
      // Distance to subject
      0xa420: 'ImageUniqueID',
      // Identifier assigned uniquely to each image
      0xa430: 'CameraOwnerName',
      0xa431: 'BodySerialNumber',
      0xa432: 'LensSpecification',
      0xa433: 'LensMake',
      0xa434: 'LensModel',
      0xa435: 'LensSerialNumber'
    },
    0x8825: {
      // GPSInfoIFDPointer
      0x0000: 'GPSVersionID',
      0x0001: 'GPSLatitudeRef',
      0x0002: 'GPSLatitude',
      0x0003: 'GPSLongitudeRef',
      0x0004: 'GPSLongitude',
      0x0005: 'GPSAltitudeRef',
      0x0006: 'GPSAltitude',
      0x0007: 'GPSTimeStamp',
      0x0008: 'GPSSatellites',
      0x0009: 'GPSStatus',
      0x000a: 'GPSMeasureMode',
      0x000b: 'GPSDOP',
      0x000c: 'GPSSpeedRef',
      0x000d: 'GPSSpeed',
      0x000e: 'GPSTrackRef',
      0x000f: 'GPSTrack',
      0x0010: 'GPSImgDirectionRef',
      0x0011: 'GPSImgDirection',
      0x0012: 'GPSMapDatum',
      0x0013: 'GPSDestLatitudeRef',
      0x0014: 'GPSDestLatitude',
      0x0015: 'GPSDestLongitudeRef',
      0x0016: 'GPSDestLongitude',
      0x0017: 'GPSDestBearingRef',
      0x0018: 'GPSDestBearing',
      0x0019: 'GPSDestDistanceRef',
      0x001a: 'GPSDestDistance',
      0x001b: 'GPSProcessingMethod',
      0x001c: 'GPSAreaInformation',
      0x001d: 'GPSDateStamp',
      0x001e: 'GPSDifferential',
      0x001f: 'GPSHPositioningError'
    },
    0xa005: {
      // InteroperabilityIFDPointer
      0x0001: 'InteroperabilityIndex'
    }
  };
  ExifMapProto.stringValues = {
    ExposureProgram: {
      0: 'Undefined',
      1: 'Manual',
      2: 'Normal program',
      3: 'Aperture priority',
      4: 'Shutter priority',
      5: 'Creative program',
      6: 'Action program',
      7: 'Portrait mode',
      8: 'Landscape mode'
    },
    MeteringMode: {
      0: 'Unknown',
      1: 'Average',
      2: 'CenterWeightedAverage',
      3: 'Spot',
      4: 'MultiSpot',
      5: 'Pattern',
      6: 'Partial',
      255: 'Other'
    },
    LightSource: {
      0: 'Unknown',
      1: 'Daylight',
      2: 'Fluorescent',
      3: 'Tungsten (incandescent light)',
      4: 'Flash',
      9: 'Fine weather',
      10: 'Cloudy weather',
      11: 'Shade',
      12: 'Daylight fluorescent (D 5700 - 7100K)',
      13: 'Day white fluorescent (N 4600 - 5400K)',
      14: 'Cool white fluorescent (W 3900 - 4500K)',
      15: 'White fluorescent (WW 3200 - 3700K)',
      17: 'Standard light A',
      18: 'Standard light B',
      19: 'Standard light C',
      20: 'D55',
      21: 'D65',
      22: 'D75',
      23: 'D50',
      24: 'ISO studio tungsten',
      255: 'Other'
    },
    Flash: {
      0x0000: 'Flash did not fire',
      0x0001: 'Flash fired',
      0x0005: 'Strobe return light not detected',
      0x0007: 'Strobe return light detected',
      0x0009: 'Flash fired, compulsory flash mode',
      0x000d: 'Flash fired, compulsory flash mode, return light not detected',
      0x000f: 'Flash fired, compulsory flash mode, return light detected',
      0x0010: 'Flash did not fire, compulsory flash mode',
      0x0018: 'Flash did not fire, auto mode',
      0x0019: 'Flash fired, auto mode',
      0x001d: 'Flash fired, auto mode, return light not detected',
      0x001f: 'Flash fired, auto mode, return light detected',
      0x0020: 'No flash function',
      0x0041: 'Flash fired, red-eye reduction mode',
      0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
      0x0047: 'Flash fired, red-eye reduction mode, return light detected',
      0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
      0x004d: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
      0x004f: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
      0x0059: 'Flash fired, auto mode, red-eye reduction mode',
      0x005d: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
      0x005f: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    },
    SensingMethod: {
      1: 'Undefined',
      2: 'One-chip color area sensor',
      3: 'Two-chip color area sensor',
      4: 'Three-chip color area sensor',
      5: 'Color sequential area sensor',
      7: 'Trilinear sensor',
      8: 'Color sequential linear sensor'
    },
    SceneCaptureType: {
      0: 'Standard',
      1: 'Landscape',
      2: 'Portrait',
      3: 'Night scene'
    },
    SceneType: {
      1: 'Directly photographed'
    },
    CustomRendered: {
      0: 'Normal process',
      1: 'Custom process'
    },
    WhiteBalance: {
      0: 'Auto white balance',
      1: 'Manual white balance'
    },
    GainControl: {
      0: 'None',
      1: 'Low gain up',
      2: 'High gain up',
      3: 'Low gain down',
      4: 'High gain down'
    },
    Contrast: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    Saturation: {
      0: 'Normal',
      1: 'Low saturation',
      2: 'High saturation'
    },
    Sharpness: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    SubjectDistanceRange: {
      0: 'Unknown',
      1: 'Macro',
      2: 'Close view',
      3: 'Distant view'
    },
    FileSource: {
      3: 'DSC'
    },
    ComponentsConfiguration: {
      0: '',
      1: 'Y',
      2: 'Cb',
      3: 'Cr',
      4: 'R',
      5: 'G',
      6: 'B'
    },
    Orientation: {
      1: 'top-left',
      2: 'top-right',
      3: 'bottom-right',
      4: 'bottom-left',
      5: 'left-top',
      6: 'right-top',
      7: 'right-bottom',
      8: 'left-bottom'
    }
  };

  ExifMapProto.getText = function (name) {
    var value = this.get(name);

    switch (name) {
      case 'LightSource':
      case 'Flash':
      case 'MeteringMode':
      case 'ExposureProgram':
      case 'SensingMethod':
      case 'SceneCaptureType':
      case 'SceneType':
      case 'CustomRendered':
      case 'WhiteBalance':
      case 'GainControl':
      case 'Contrast':
      case 'Saturation':
      case 'Sharpness':
      case 'SubjectDistanceRange':
      case 'FileSource':
      case 'Orientation':
        return this.stringValues[name][value];

      case 'ExifVersion':
      case 'FlashpixVersion':
        if (!value) return;
        return String.fromCharCode(value[0], value[1], value[2], value[3]);

      case 'ComponentsConfiguration':
        if (!value) return;
        return this.stringValues[name][value[0]] + this.stringValues[name][value[1]] + this.stringValues[name][value[2]] + this.stringValues[name][value[3]];

      case 'GPSVersionID':
        if (!value) return;
        return value[0] + '.' + value[1] + '.' + value[2] + '.' + value[3];
    }

    return String(value);
  };

  ExifMapProto.getAll = function () {
    var map = {};
    var prop;
    var obj;
    var name;

    for (prop in this) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        obj = this[prop];

        if (obj && obj.getAll) {
          map[this.privateIFDs[prop].name] = obj.getAll();
        } else {
          name = this.tags[prop];
          if (name) map[name] = this.getText(name);
        }
      }
    }

    return map;
  };

  ExifMapProto.getName = function (tagCode) {
    var name = this.tags[tagCode];
    if (typeof name === 'object') return this.privateIFDs[tagCode].name;
    return name;
  } // Extend the map of tag names to tag codes:
  ;

  (function () {
    var tags = ExifMapProto.tags;
    var prop;
    var privateIFD;
    var subTags; // Map the tag names to tags:

    for (prop in tags) {
      if (Object.prototype.hasOwnProperty.call(tags, prop)) {
        privateIFD = ExifMapProto.privateIFDs[prop];

        if (privateIFD) {
          subTags = tags[prop];

          for (prop in subTags) {
            if (Object.prototype.hasOwnProperty.call(subTags, prop)) {
              privateIFD.map[subTags[prop]] = Number(prop);
            }
          }
        } else {
          ExifMapProto.map[tags[prop]] = Number(prop);
        }
      }
    }
  })();
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-exif.js":
/*!***************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-exif.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView */

/* eslint-disable no-console */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js"), __webpack_require__(/*! ./load-image-meta */ "./node_modules/blueimp-load-image/js/load-image-meta.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';
  /**
   * Exif tag map
   *
   * @name ExifMap
   * @class
   * @param {number} tagCode Private IFD tag code
   */

  function ExifMap(tagCode) {
    if (tagCode) {
      Object.defineProperty(this, 'map', {
        value: this.privateIFDs[tagCode].map
      });
      Object.defineProperty(this, 'tags', {
        value: this.tags && this.tags[tagCode] || {}
      });
    }
  }

  ExifMap.prototype.map = {
    Orientation: 0x0112,
    Thumbnail: 0x0201,
    Exif: 0x8769,
    GPSInfo: 0x8825,
    Interoperability: 0xa005
  };
  ExifMap.prototype.privateIFDs = {
    0x8769: {
      name: 'Exif',
      map: {}
    },
    0x8825: {
      name: 'GPSInfo',
      map: {}
    },
    0xa005: {
      name: 'Interoperability',
      map: {}
    }
  };
  /**
   * Retrieves exif tag value
   *
   * @param {number|string} id Exif tag code or name
   * @returns {object} Exif tag value
   */

  ExifMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]];
  };
  /**
   * Returns the Exif Thumbnail data as Blob.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Thumbnail data offset
   * @param {number} length Thumbnail data length
   * @returns {undefined|Blob} Returns the Thumbnail Blob or undefined
   */


  function getExifThumbnail(dataView, offset, length) {
    if (!length || offset + length > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid thumbnail data.');
      return;
    }

    return new Blob([dataView.buffer.slice(offset, offset + length)], {
      type: 'image/jpeg'
    });
  }

  var ExifTagTypes = {
    // byte, 8-bit unsigned int:
    1: {
      getValue: function (dataView, dataOffset) {
        return dataView.getUint8(dataOffset);
      },
      size: 1
    },
    // ascii, 8-bit byte:
    2: {
      getValue: function (dataView, dataOffset) {
        return String.fromCharCode(dataView.getUint8(dataOffset));
      },
      size: 1,
      ascii: true
    },
    // short, 16 bit int:
    3: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint16(dataOffset, littleEndian);
      },
      size: 2
    },
    // long, 32 bit int:
    4: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian);
      },
      size: 4
    },
    // rational = two long values, first is numerator, second is denominator:
    5: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian) / dataView.getUint32(dataOffset + 4, littleEndian);
      },
      size: 8
    },
    // slong, 32 bit signed int:
    9: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian);
      },
      size: 4
    },
    // srational, two slongs, first is numerator, second is denominator:
    10: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian) / dataView.getInt32(dataOffset + 4, littleEndian);
      },
      size: 8
    }
  }; // undefined, 8-bit byte, value depending on field:

  ExifTagTypes[7] = ExifTagTypes[1];
  /**
   * Returns Exif tag value.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {number} offset Tag offset
   * @param {number} type Tag type
   * @param {number} length Tag length
   * @param {boolean} littleEndian Little endian encoding
   * @returns {object} Tag value
   */

  function getExifValue(dataView, tiffOffset, offset, type, length, littleEndian) {
    var tagType = ExifTagTypes[type];
    var tagSize;
    var dataOffset;
    var values;
    var i;
    var str;
    var c;

    if (!tagType) {
      console.log('Invalid Exif data: Invalid tag type.');
      return;
    }

    tagSize = tagType.size * length; // Determine if the value is contained in the dataOffset bytes,
    // or if the value at the dataOffset is a pointer to the actual data:

    dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32(offset + 8, littleEndian) : offset + 8;

    if (dataOffset + tagSize > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid data offset.');
      return;
    }

    if (length === 1) {
      return tagType.getValue(dataView, dataOffset, littleEndian);
    }

    values = [];

    for (i = 0; i < length; i += 1) {
      values[i] = tagType.getValue(dataView, dataOffset + i * tagType.size, littleEndian);
    }

    if (tagType.ascii) {
      str = ''; // Concatenate the chars:

      for (i = 0; i < values.length; i += 1) {
        c = values[i]; // Ignore the terminating NULL byte(s):

        if (c === '\u0000') {
          break;
        }

        str += c;
      }

      return str;
    }

    return values;
  }
  /**
   * Parses Exif tags.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {number} dirOffset Directory offset
   * @param {boolean} littleEndian Little endian encoding
   * @param {ExifMap} tags Map to store parsed exif tags
   * @param {ExifMap} tagOffsets Map to store parsed exif tag offsets
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   * @returns {number} Next directory offset
   */


  function parseExifTags(dataView, tiffOffset, dirOffset, littleEndian, tags, tagOffsets, includeTags, excludeTags) {
    var tagsNumber, dirEndOffset, i, tagOffset, tagNumber, tagValue;

    if (dirOffset + 6 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory offset.');
      return;
    }

    tagsNumber = dataView.getUint16(dirOffset, littleEndian);
    dirEndOffset = dirOffset + 2 + 12 * tagsNumber;

    if (dirEndOffset + 4 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory size.');
      return;
    }

    for (i = 0; i < tagsNumber; i += 1) {
      tagOffset = dirOffset + 2 + 12 * i;
      tagNumber = dataView.getUint16(tagOffset, littleEndian);
      if (includeTags && !includeTags[tagNumber]) continue;
      if (excludeTags && excludeTags[tagNumber] === true) continue;
      tagValue = getExifValue(dataView, tiffOffset, tagOffset, dataView.getUint16(tagOffset + 2, littleEndian), // tag type
      dataView.getUint32(tagOffset + 4, littleEndian), // tag length
      littleEndian);
      tags[tagNumber] = tagValue;

      if (tagOffsets) {
        tagOffsets[tagNumber] = tagOffset;
      }
    } // Return the offset to the next directory:


    return dataView.getUint32(dirEndOffset, littleEndian);
  }
  /**
   * Parses Private IFD tags.
   *
   * @param {object} data Data object to store exif tags and offsets
   * @param {number} tagCode Private IFD tag code
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {boolean} littleEndian Little endian encoding
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   */


  function parseExifPrivateIFD(data, tagCode, dataView, tiffOffset, littleEndian, includeTags, excludeTags) {
    var dirOffset = data.exif[tagCode];

    if (dirOffset) {
      data.exif[tagCode] = new ExifMap(tagCode);

      if (data.exifOffsets) {
        data.exifOffsets[tagCode] = new ExifMap(tagCode);
      }

      parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data.exif[tagCode], data.exifOffsets && data.exifOffsets[tagCode], includeTags && includeTags[tagCode], excludeTags && excludeTags[tagCode]);
    }
  }

  loadImage.parseExifData = function (dataView, offset, length, data, options) {
    if (options.disableExif) {
      return;
    }

    var includeTags = options.includeExifTags;
    var excludeTags = options.excludeExifTags || {
      0x8769: {
        // ExifIFDPointer
        0x927c: true // MakerNote

      }
    };
    var tiffOffset = offset + 10;
    var littleEndian;
    var dirOffset;
    var privateIFDs; // Check for the ASCII code for "Exif" (0x45786966):

    if (dataView.getUint32(offset + 4) !== 0x45786966) {
      // No Exif data, might be XMP data instead
      return;
    }

    if (tiffOffset + 8 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid segment size.');
      return;
    } // Check for the two null bytes:


    if (dataView.getUint16(offset + 8) !== 0x0000) {
      console.log('Invalid Exif data: Missing byte alignment offset.');
      return;
    } // Check the byte alignment:


    switch (dataView.getUint16(tiffOffset)) {
      case 0x4949:
        littleEndian = true;
        break;

      case 0x4d4d:
        littleEndian = false;
        break;

      default:
        console.log('Invalid Exif data: Invalid byte alignment marker.');
        return;
    } // Check for the TIFF tag marker (0x002A):


    if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002a) {
      console.log('Invalid Exif data: Missing TIFF marker.');
      return;
    } // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:


    dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian); // Create the exif object to store the tags:

    data.exif = new ExifMap();

    if (!options.disableExifOffsets) {
      data.exifOffsets = new ExifMap();
      data.exifTiffOffset = tiffOffset;
      data.exifLittleEndian = littleEndian;
    } // Parse the tags of the main image directory and retrieve the
    // offset to the next directory, usually the thumbnail directory:


    dirOffset = parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data.exif, data.exifOffsets, includeTags, excludeTags);

    if (dirOffset && !options.disableExifThumbnail) {
      dirOffset = parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data.exif, data.exifOffsets, includeTags, excludeTags); // Check for JPEG Thumbnail offset:

      if (data.exif[0x0201] && data.exif[0x0202]) {
        data.exif[0x0201] = getExifThumbnail(dataView, tiffOffset + data.exif[0x0201], data.exif[0x0202] // Thumbnail data length
        );
      }
    }

    privateIFDs = Object.keys(data.exif.privateIFDs);
    privateIFDs.forEach(function (tagCode) {
      parseExifPrivateIFD(data, tagCode, dataView, tiffOffset, littleEndian, includeTags, excludeTags);
    });
  }; // Registers the Exif parser for the APP1 JPEG meta data segment:


  loadImage.metaDataParsers.jpeg[0xffe1].push(loadImage.parseExifData);
  loadImage.exifWriters = {
    // Orientation writer:
    0x0112: function (buffer, data, value) {
      var view = new DataView(buffer, data.exifOffsets[0x0112] + 8, 2);
      view.setUint16(0, value, data.exifLittleEndian);
      return buffer;
    }
  };

  loadImage.writeExifData = function (buffer, data, id, value) {
    loadImage.exifWriters[data.exif.map[id]](buffer, data, value);
  };

  loadImage.ExifMap = ExifMap; // Adds the following properties to the parseMetaData callback data:
  // - exif: The parsed Exif tags
  // - exifOffsets: The parsed Exif tag offsets
  // - exifTiffOffset: TIFF header offset (used for offset pointers)
  // - exifLittleEndian: little endian order if true, big endian if false
  // Adds the following options to the parseMetaData method:
  // - disableExif: Disables Exif parsing when true.
  // - disableExifThumbnail: Disables parsing of Thumbnail data when true.
  // - disableExifOffsets: Disables storing Exif tag offsets when true.
  // - includeExifTags: A map of Exif tags to include for parsing.
  // - excludeExifTags: A map of Exif tags to exclude from parsing.
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-fetch.js":
/*!****************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-fetch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Fetch
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2017, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  if (typeof fetch !== 'undefined' && typeof Request !== 'undefined') {
    loadImage.fetchBlob = function (url, callback, options) {
      fetch(new Request(url, options)).then(function (response) {
        return response.blob();
      }).then(callback).catch(function (err) {
        callback(null, err);
      });
    };
  } else if ( // Check for XHR2 support:
  typeof XMLHttpRequest !== 'undefined' && typeof ProgressEvent !== 'undefined') {
    loadImage.fetchBlob = function (url, callback, options) {
      // eslint-disable-next-line no-param-reassign
      options = options || {};
      var req = new XMLHttpRequest();
      req.open(options.method || 'GET', url);

      if (options.headers) {
        Object.keys(options.headers).forEach(function (key) {
          req.setRequestHeader(key, options.headers[key]);
        });
      }

      req.withCredentials = options.credentials === 'include';
      req.responseType = 'blob';

      req.onload = function () {
        callback(req.response);
      };

      req.onerror = req.onabort = req.ontimeout = function (err) {
        callback(null, err);
      };

      req.send(options.body);
    };
  }
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-iptc-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-iptc-map.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image IPTC Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * Copyright 2018, Dave Bevan
 *
 * IPTC tags mapping based on
 * https://iptc.org/standards/photo-metadata
 * https://exiftool.org/TagNames/IPTC.html
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js"), __webpack_require__(/*! ./load-image-iptc */ "./node_modules/blueimp-load-image/js/load-image-iptc.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var IptcMapProto = loadImage.IptcMap.prototype;
  IptcMapProto.tags = {
    0: 'ApplicationRecordVersion',
    3: 'ObjectTypeReference',
    4: 'ObjectAttributeReference',
    5: 'ObjectName',
    7: 'EditStatus',
    8: 'EditorialUpdate',
    10: 'Urgency',
    12: 'SubjectReference',
    15: 'Category',
    20: 'SupplementalCategories',
    22: 'FixtureIdentifier',
    25: 'Keywords',
    26: 'ContentLocationCode',
    27: 'ContentLocationName',
    30: 'ReleaseDate',
    35: 'ReleaseTime',
    37: 'ExpirationDate',
    38: 'ExpirationTime',
    40: 'SpecialInstructions',
    42: 'ActionAdvised',
    45: 'ReferenceService',
    47: 'ReferenceDate',
    50: 'ReferenceNumber',
    55: 'DateCreated',
    60: 'TimeCreated',
    62: 'DigitalCreationDate',
    63: 'DigitalCreationTime',
    65: 'OriginatingProgram',
    70: 'ProgramVersion',
    75: 'ObjectCycle',
    80: 'Byline',
    85: 'BylineTitle',
    90: 'City',
    92: 'Sublocation',
    95: 'State',
    100: 'CountryCode',
    101: 'Country',
    103: 'OriginalTransmissionReference',
    105: 'Headline',
    110: 'Credit',
    115: 'Source',
    116: 'CopyrightNotice',
    118: 'Contact',
    120: 'Caption',
    121: 'LocalCaption',
    122: 'Writer',
    125: 'RasterizedCaption',
    130: 'ImageType',
    131: 'ImageOrientation',
    135: 'LanguageIdentifier',
    150: 'AudioType',
    151: 'AudioSamplingRate',
    152: 'AudioSamplingResolution',
    153: 'AudioDuration',
    154: 'AudioOutcue',
    184: 'JobID',
    185: 'MasterDocumentID',
    186: 'ShortDocumentID',
    187: 'UniqueDocumentID',
    188: 'OwnerID',
    200: 'ObjectPreviewFileFormat',
    201: 'ObjectPreviewFileVersion',
    202: 'ObjectPreviewData',
    221: 'Prefs',
    225: 'ClassifyState',
    228: 'SimilarityIndex',
    230: 'DocumentNotes',
    231: 'DocumentHistory',
    232: 'ExifCameraInfo',
    255: 'CatalogSets'
  };
  IptcMapProto.stringValues = {
    10: {
      0: '0 (reserved)',
      1: '1 (most urgent)',
      2: '2',
      3: '3',
      4: '4',
      5: '5 (normal urgency)',
      6: '6',
      7: '7',
      8: '8 (least urgent)',
      9: '9 (user-defined priority)'
    },
    75: {
      a: 'Morning',
      b: 'Both Morning and Evening',
      p: 'Evening'
    },
    131: {
      L: 'Landscape',
      P: 'Portrait',
      S: 'Square'
    }
  };

  IptcMapProto.getText = function (id) {
    var value = this.get(id);
    var tagCode = this.map[id];
    var stringValue = this.stringValues[tagCode];
    if (stringValue) return stringValue[value];
    return String(value);
  };

  IptcMapProto.getAll = function () {
    var map = {};
    var prop;
    var name;

    for (prop in this) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        name = this.tags[prop];
        if (name) map[name] = this.getText(name);
      }
    }

    return map;
  };

  IptcMapProto.getName = function (tagCode) {
    return this.tags[tagCode];
  } // Extend the map of tag names to tag codes:
  ;

  (function () {
    var tags = IptcMapProto.tags;
    var map = IptcMapProto.map || {};
    var prop; // Map the tag names to tags:

    for (prop in tags) {
      if (Object.prototype.hasOwnProperty.call(tags, prop)) {
        map[tags[prop]] = Number(prop);
      }
    }
  })();
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-iptc.js":
/*!***************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-iptc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image IPTC Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * Copyright 2018, Dave Bevan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js"), __webpack_require__(/*! ./load-image-meta */ "./node_modules/blueimp-load-image/js/load-image-meta.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';
  /**
   * IPTC tag map
   *
   * @name IptcMap
   * @class
   */

  function IptcMap() {}

  IptcMap.prototype.map = {
    ObjectName: 5
  };
  IptcMap.prototype.types = {
    0: 'Uint16',
    // ApplicationRecordVersion
    200: 'Uint16',
    // ObjectPreviewFileFormat
    201: 'Uint16',
    // ObjectPreviewFileVersion
    202: 'binary' // ObjectPreviewData

  };
  /**
   * Retrieves IPTC tag value
   *
   * @param {number|string} id IPTC tag code or name
   * @returns {object} IPTC tag value
   */

  IptcMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]];
  };
  /**
   * Retrieves string for the given DataView and range
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Offset start
   * @param {number} length Offset length
   * @returns {string} String value
   */


  function getStringValue(dataView, offset, length) {
    var outstr = '';
    var end = offset + length;

    for (var n = offset; n < end; n += 1) {
      outstr += String.fromCharCode(dataView.getUint8(n));
    }

    return outstr;
  }
  /**
   * Retrieves tag value for the given DataView and range
   *
   * @param {number} tagCode Private IFD tag code
   * @param {IptcMap} map IPTC tag map
   * @param {DataView} dataView Data view interface
   * @param {number} offset Range start
   * @param {number} length Range length
   * @returns {object} Tag value
   */


  function getTagValue(tagCode, map, dataView, offset, length) {
    if (map.types[tagCode] === 'binary') {
      return new Blob([dataView.buffer.slice(offset, offset + length)]);
    }

    if (map.types[tagCode] === 'Uint16') {
      return dataView.getUint16(offset);
    }

    return getStringValue(dataView, offset, length);
  }
  /**
   * Combines IPTC value with existing ones.
   *
   * @param {object} value Existing IPTC field value
   * @param {object} newValue New IPTC field value
   * @returns {object} Resulting IPTC field value
   */


  function combineTagValues(value, newValue) {
    if (value === undefined) return newValue;

    if (value instanceof Array) {
      value.push(newValue);
      return value;
    }

    return [value, newValue];
  }
  /**
   * Parses IPTC tags.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} segmentOffset Segment offset
   * @param {number} segmentLength Segment length
   * @param {object} data Data export object
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   */


  function parseIptcTags(dataView, segmentOffset, segmentLength, data, includeTags, excludeTags) {
    var value, tagSize, tagCode;
    var segmentEnd = segmentOffset + segmentLength;
    var offset = segmentOffset;

    while (offset < segmentEnd) {
      if (dataView.getUint8(offset) === 0x1c && // tag marker
      dataView.getUint8(offset + 1) === 0x02 // record number, only handles v2
      ) {
        tagCode = dataView.getUint8(offset + 2);

        if ((!includeTags || includeTags[tagCode]) && (!excludeTags || !excludeTags[tagCode])) {
          tagSize = dataView.getInt16(offset + 3);
          value = getTagValue(tagCode, data.iptc, dataView, offset + 5, tagSize);
          data.iptc[tagCode] = combineTagValues(data.iptc[tagCode], value);

          if (data.iptcOffsets) {
            data.iptcOffsets[tagCode] = offset;
          }
        }
      }

      offset += 1;
    }
  }
  /**
   * Tests if field segment starts at offset.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Segment offset
   * @returns {boolean} True if '8BIM<EOT><EOT>' exists at offset
   */


  function isSegmentStart(dataView, offset) {
    return dataView.getUint32(offset) === 0x3842494d && // Photoshop segment start
    dataView.getUint16(offset + 4) === 0x0404 // IPTC segment start
    ;
  }
  /**
   * Returns header length.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Segment offset
   * @returns {number} Header length
   */


  function getHeaderLength(dataView, offset) {
    var length = dataView.getUint8(offset + 7);
    if (length % 2 !== 0) length += 1; // Check for pre photoshop 6 format

    if (length === 0) {
      // Always 4
      length = 4;
    }

    return length;
  }

  loadImage.parseIptcData = function (dataView, offset, length, data, options) {
    if (options.disableIptc) {
      return;
    }

    var markerLength = offset + length;

    while (offset + 8 < markerLength) {
      if (isSegmentStart(dataView, offset)) {
        var headerLength = getHeaderLength(dataView, offset);
        var segmentOffset = offset + 8 + headerLength;

        if (segmentOffset > markerLength) {
          // eslint-disable-next-line no-console
          console.log('Invalid IPTC data: Invalid segment offset.');
          break;
        }

        var segmentLength = dataView.getUint16(offset + 6 + headerLength);

        if (offset + segmentLength > markerLength) {
          // eslint-disable-next-line no-console
          console.log('Invalid IPTC data: Invalid segment size.');
          break;
        } // Create the iptc object to store the tags:


        data.iptc = new IptcMap();

        if (!options.disableIptcOffsets) {
          data.iptcOffsets = new IptcMap();
        }

        parseIptcTags(dataView, segmentOffset, segmentLength, data, options.includeIptcTags, options.excludeIptcTags || {
          202: true
        } // ObjectPreviewData
        );
        return;
      } // eslint-disable-next-line no-param-reassign


      offset += 1;
    }
  }; // Registers this IPTC parser for the APP13 JPEG meta data segment:


  loadImage.metaDataParsers.jpeg[0xffed].push(loadImage.parseIptcData);
  loadImage.IptcMap = IptcMap; // Adds the following properties to the parseMetaData callback data:
  // - iptc: The iptc tags, parsed by the parseIptcData method
  // Adds the following options to the parseMetaData method:
  // - disableIptc: Disables IPTC parsing when true.
  // - disableIptcOffsets: Disables storing IPTC tag offsets when true.
  // - includeIptcTags: A map of IPTC tags to include for parsing.
  // - excludeIptcTags: A map of IPTC tags to exclude from parsing.
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-meta.js":
/*!***************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-meta.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Meta
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Image meta data handling implementation
 * based on the help and contribution of
 * Achim Stöhr.
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView, Uint8Array */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var hasblobSlice = typeof Blob !== 'undefined' && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

  loadImage.blobSlice = hasblobSlice && function () {
    var slice = this.slice || this.webkitSlice || this.mozSlice;
    return slice.apply(this, arguments);
  };

  loadImage.metaDataParsers = {
    jpeg: {
      0xffe1: [],
      // APP1 marker
      0xffed: [] // APP13 marker

    }
  }; // Parses image meta data and calls the callback with an object argument
  // with the following properties:
  // * imageHead: The complete image head as ArrayBuffer (Uint8Array for IE10)
  // The options argument accepts an object and supports the following
  // properties:
  // * maxMetaDataSize: Defines the maximum number of bytes to parse.
  // * disableImageHead: Disables creating the imageHead property.

  loadImage.parseMetaData = function (file, callback, options, data) {
    // eslint-disable-next-line no-param-reassign
    options = options || {}; // eslint-disable-next-line no-param-reassign

    data = data || {};
    var that = this; // 256 KiB should contain all EXIF/ICC/IPTC segments:

    var maxMetaDataSize = options.maxMetaDataSize || 262144;
    var noMetaData = !(typeof DataView !== 'undefined' && file && file.size >= 12 && file.type === 'image/jpeg' && loadImage.blobSlice);

    if (noMetaData || !loadImage.readFile(loadImage.blobSlice.call(file, 0, maxMetaDataSize), function (e) {
      if (e.target.error) {
        // FileReader error
        // eslint-disable-next-line no-console
        console.log(e.target.error);
        callback(data);
        return;
      } // Note on endianness:
      // Since the marker and length bytes in JPEG files are always
      // stored in big endian order, we can leave the endian parameter
      // of the DataView methods undefined, defaulting to big endian.


      var buffer = e.target.result;
      var dataView = new DataView(buffer);
      var offset = 2;
      var maxOffset = dataView.byteLength - 4;
      var headLength = offset;
      var markerBytes;
      var markerLength;
      var parsers;
      var i; // Check for the JPEG marker (0xffd8):

      if (dataView.getUint16(0) === 0xffd8) {
        while (offset < maxOffset) {
          markerBytes = dataView.getUint16(offset); // Search for APPn (0xffeN) and COM (0xfffe) markers,
          // which contain application-specific meta-data like
          // Exif, ICC and IPTC data and text comments:

          if (markerBytes >= 0xffe0 && markerBytes <= 0xffef || markerBytes === 0xfffe) {
            // The marker bytes (2) are always followed by
            // the length bytes (2), indicating the length of the
            // marker segment, which includes the length bytes,
            // but not the marker bytes, so we add 2:
            markerLength = dataView.getUint16(offset + 2) + 2;

            if (offset + markerLength > dataView.byteLength) {
              // eslint-disable-next-line no-console
              console.log('Invalid meta data: Invalid segment size.');
              break;
            }

            parsers = loadImage.metaDataParsers.jpeg[markerBytes];

            if (parsers && !options.disableMetaDataParsers) {
              for (i = 0; i < parsers.length; i += 1) {
                parsers[i].call(that, dataView, offset, markerLength, data, options);
              }
            }

            offset += markerLength;
            headLength = offset;
          } else {
            // Not an APPn or COM marker, probably safe to
            // assume that this is the end of the meta data
            break;
          }
        } // Meta length must be longer than JPEG marker (2)
        // plus APPn marker (2), followed by length bytes (2):


        if (!options.disableImageHead && headLength > 6) {
          if (buffer.slice) {
            data.imageHead = buffer.slice(0, headLength);
          } else {
            // Workaround for IE10, which does not yet
            // support ArrayBuffer.slice:
            data.imageHead = new Uint8Array(buffer).subarray(0, headLength);
          }
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Invalid JPEG file: Missing JPEG marker.');
      }

      callback(data);
    }, 'readAsArrayBuffer')) {
      callback(data);
    }
  }; // Replaces the image head of a JPEG blob with the given one.
  // Calls the callback with the new Blob:


  loadImage.replaceHead = function (blob, head, callback) {
    loadImage.parseMetaData(blob, function (data) {
      callback(new Blob([head, loadImage.blobSlice.call(blob, data.imageHead.byteLength)], {
        type: 'image/jpeg'
      }));
    }, {
      maxMetaDataSize: 256,
      disableMetaDataParsers: true
    });
  };

  var originalTransform = loadImage.transform;

  loadImage.transform = function (img, options, callback, file, data) {
    if (loadImage.hasMetaOption(options)) {
      loadImage.parseMetaData(file, function (data) {
        originalTransform.call(loadImage, img, options, callback, file, data);
      }, options, data);
    } else {
      originalTransform.apply(loadImage, arguments);
    }
  };
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-orientation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-orientation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Orientation
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js"), __webpack_require__(/*! ./load-image-scale */ "./node_modules/blueimp-load-image/js/load-image-scale.js"), __webpack_require__(/*! ./load-image-meta */ "./node_modules/blueimp-load-image/js/load-image-meta.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var originalHasCanvasOption = loadImage.hasCanvasOption;
  var originalHasMetaOption = loadImage.hasMetaOption;
  var originalTransformCoordinates = loadImage.transformCoordinates;
  var originalGetTransformedOptions = loadImage.getTransformedOptions;

  (function () {
    // black 2x1 JPEG, with the following meta information set:
    // - EXIF Orientation: 6 (Rotated 90° CCW)
    var testImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
    var img = document.createElement('img');

    img.onload = function () {
      // Check if browser supports automatic image orientation:
      loadImage.orientation = img.width === 1 && img.height === 2;
    };

    img.src = testImageURL;
  })(); // Determines if the target image should be a canvas element:


  loadImage.hasCanvasOption = function (options) {
    return !!options.orientation === true && !loadImage.orientation || options.orientation > 1 && options.orientation < 9 || originalHasCanvasOption.call(loadImage, options);
  }; // Determines if meta data should be loaded automatically:


  loadImage.hasMetaOption = function (options) {
    return options && options.orientation === true && !loadImage.orientation || originalHasMetaOption.call(loadImage, options);
  }; // Transform image orientation based on
  // the given EXIF orientation option:


  loadImage.transformCoordinates = function (canvas, options) {
    originalTransformCoordinates.call(loadImage, canvas, options);
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var styleWidth = canvas.style.width;
    var styleHeight = canvas.style.height;
    var orientation = options.orientation;

    if (!(orientation > 1 && orientation < 9)) {
      return;
    }

    if (orientation > 4) {
      canvas.width = height;
      canvas.height = width;
      canvas.style.width = styleHeight;
      canvas.style.height = styleWidth;
    }

    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        break;

      case 3:
        // 180° rotate left
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;

      case 4:
        // vertical flip
        ctx.translate(0, height);
        ctx.scale(1, -1);
        break;

      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.scale(1, -1);
        break;

      case 6:
        // 90° rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -height);
        break;

      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(width, -height);
        ctx.scale(-1, 1);
        break;

      case 8:
        // 90° rotate left
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-width, 0);
        break;
    }
  }; // Transforms coordinate and dimension options
  // based on the given orientation option:


  loadImage.getTransformedOptions = function (img, opts, data) {
    var options = originalGetTransformedOptions.call(loadImage, img, opts);
    var orientation = options.orientation;
    var newOptions;
    var i;

    if (orientation === true) {
      if (loadImage.orientation) {
        // Browser supports automatic image orientation
        return options;
      }

      orientation = data && data.exif && data.exif.get('Orientation');
    }

    if (!(orientation > 1 && orientation < 9)) {
      return options;
    }

    newOptions = {};

    for (i in options) {
      if (Object.prototype.hasOwnProperty.call(options, i)) {
        newOptions[i] = options[i];
      }
    }

    newOptions.orientation = orientation;

    switch (orientation) {
      case 2:
        // horizontal flip
        newOptions.left = options.right;
        newOptions.right = options.left;
        break;

      case 3:
        // 180° rotate left
        newOptions.left = options.right;
        newOptions.top = options.bottom;
        newOptions.right = options.left;
        newOptions.bottom = options.top;
        break;

      case 4:
        // vertical flip
        newOptions.top = options.bottom;
        newOptions.bottom = options.top;
        break;

      case 5:
        // vertical flip + 90 rotate right
        newOptions.left = options.top;
        newOptions.top = options.left;
        newOptions.right = options.bottom;
        newOptions.bottom = options.right;
        break;

      case 6:
        // 90° rotate right
        newOptions.left = options.top;
        newOptions.top = options.right;
        newOptions.right = options.bottom;
        newOptions.bottom = options.left;
        break;

      case 7:
        // horizontal flip + 90 rotate right
        newOptions.left = options.bottom;
        newOptions.top = options.right;
        newOptions.right = options.top;
        newOptions.bottom = options.left;
        break;

      case 8:
        // 90° rotate left
        newOptions.left = options.bottom;
        newOptions.top = options.left;
        newOptions.right = options.top;
        newOptions.bottom = options.right;
        break;
    }

    if (newOptions.orientation > 4) {
      newOptions.maxWidth = options.maxHeight;
      newOptions.maxHeight = options.maxWidth;
      newOptions.minWidth = options.minHeight;
      newOptions.minHeight = options.minWidth;
      newOptions.sourceWidth = options.sourceHeight;
      newOptions.sourceHeight = options.sourceWidth;
    }

    return newOptions;
  };
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image-scale.js":
/*!****************************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image-scale.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Scaling
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */
;

(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./load-image */ "./node_modules/blueimp-load-image/js/load-image.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (loadImage) {
  'use strict';

  var originalTransform = loadImage.transform;

  loadImage.transform = function (img, options, callback, file, data) {
    originalTransform.call(loadImage, loadImage.scale(img, options, data), options, callback, file, data);
  }; // Transform image coordinates, allows to override e.g.
  // the canvas orientation based on the orientation option,
  // gets canvas, options passed as arguments:


  loadImage.transformCoordinates = function () {}; // Returns transformed options, allows to override e.g.
  // maxWidth, maxHeight and crop options based on the aspectRatio.
  // gets img, options passed as arguments:


  loadImage.getTransformedOptions = function (img, options) {
    var aspectRatio = options.aspectRatio;
    var newOptions;
    var i;
    var width;
    var height;

    if (!aspectRatio) {
      return options;
    }

    newOptions = {};

    for (i in options) {
      if (Object.prototype.hasOwnProperty.call(options, i)) {
        newOptions[i] = options[i];
      }
    }

    newOptions.crop = true;
    width = img.naturalWidth || img.width;
    height = img.naturalHeight || img.height;

    if (width / height > aspectRatio) {
      newOptions.maxWidth = height * aspectRatio;
      newOptions.maxHeight = height;
    } else {
      newOptions.maxWidth = width;
      newOptions.maxHeight = width / aspectRatio;
    }

    return newOptions;
  }; // Canvas render method, allows to implement a different rendering algorithm:


  loadImage.renderImageToCanvas = function (canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, options) {
    var ctx = canvas.getContext('2d');

    if (options.imageSmoothingEnabled === false) {
      ctx.imageSmoothingEnabled = false;
    } else if (options.imageSmoothingQuality) {
      ctx.imageSmoothingQuality = options.imageSmoothingQuality;
    }

    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    return canvas;
  }; // Determines if the target image should be a canvas element:


  loadImage.hasCanvasOption = function (options) {
    return options.canvas || options.crop || !!options.aspectRatio;
  }; // Scales and/or crops the given image (img or canvas HTML element)
  // using the given options.
  // Returns a canvas object if the browser supports canvas
  // and the hasCanvasOption method returns true or a canvas
  // object is passed as image, else the scaled image:


  loadImage.scale = function (img, options, data) {
    // eslint-disable-next-line no-param-reassign
    options = options || {};
    var canvas = document.createElement('canvas');
    var useCanvas = img.getContext || loadImage.hasCanvasOption(options) && canvas.getContext;
    var width = img.naturalWidth || img.width;
    var height = img.naturalHeight || img.height;
    var destWidth = width;
    var destHeight = height;
    var maxWidth;
    var maxHeight;
    var minWidth;
    var minHeight;
    var sourceWidth;
    var sourceHeight;
    var sourceX;
    var sourceY;
    var pixelRatio;
    var downsamplingRatio;
    var tmp;
    /**
     * Scales up image dimensions
     */

    function scaleUp() {
      var scale = Math.max((minWidth || destWidth) / destWidth, (minHeight || destHeight) / destHeight);

      if (scale > 1) {
        destWidth *= scale;
        destHeight *= scale;
      }
    }
    /**
     * Scales down image dimensions
     */


    function scaleDown() {
      var scale = Math.min((maxWidth || destWidth) / destWidth, (maxHeight || destHeight) / destHeight);

      if (scale < 1) {
        destWidth *= scale;
        destHeight *= scale;
      }
    }

    if (useCanvas) {
      // eslint-disable-next-line no-param-reassign
      options = loadImage.getTransformedOptions(img, options, data);
      sourceX = options.left || 0;
      sourceY = options.top || 0;

      if (options.sourceWidth) {
        sourceWidth = options.sourceWidth;

        if (options.right !== undefined && options.left === undefined) {
          sourceX = width - sourceWidth - options.right;
        }
      } else {
        sourceWidth = width - sourceX - (options.right || 0);
      }

      if (options.sourceHeight) {
        sourceHeight = options.sourceHeight;

        if (options.bottom !== undefined && options.top === undefined) {
          sourceY = height - sourceHeight - options.bottom;
        }
      } else {
        sourceHeight = height - sourceY - (options.bottom || 0);
      }

      destWidth = sourceWidth;
      destHeight = sourceHeight;
    }

    maxWidth = options.maxWidth;
    maxHeight = options.maxHeight;
    minWidth = options.minWidth;
    minHeight = options.minHeight;

    if (useCanvas && maxWidth && maxHeight && options.crop) {
      destWidth = maxWidth;
      destHeight = maxHeight;
      tmp = sourceWidth / sourceHeight - maxWidth / maxHeight;

      if (tmp < 0) {
        sourceHeight = maxHeight * sourceWidth / maxWidth;

        if (options.top === undefined && options.bottom === undefined) {
          sourceY = (height - sourceHeight) / 2;
        }
      } else if (tmp > 0) {
        sourceWidth = maxWidth * sourceHeight / maxHeight;

        if (options.left === undefined && options.right === undefined) {
          sourceX = (width - sourceWidth) / 2;
        }
      }
    } else {
      if (options.contain || options.cover) {
        minWidth = maxWidth = maxWidth || minWidth;
        minHeight = maxHeight = maxHeight || minHeight;
      }

      if (options.cover) {
        scaleDown();
        scaleUp();
      } else {
        scaleUp();
        scaleDown();
      }
    }

    if (useCanvas) {
      pixelRatio = options.pixelRatio;

      if (pixelRatio > 1) {
        canvas.style.width = destWidth + 'px';
        canvas.style.height = destHeight + 'px';
        destWidth *= pixelRatio;
        destHeight *= pixelRatio;
        canvas.getContext('2d').scale(pixelRatio, pixelRatio);
      }

      downsamplingRatio = options.downsamplingRatio;

      if (downsamplingRatio > 0 && downsamplingRatio < 1 && destWidth < sourceWidth && destHeight < sourceHeight) {
        while (sourceWidth * downsamplingRatio > destWidth) {
          canvas.width = sourceWidth * downsamplingRatio;
          canvas.height = sourceHeight * downsamplingRatio;
          loadImage.renderImageToCanvas(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height, options);
          sourceX = 0;
          sourceY = 0;
          sourceWidth = canvas.width;
          sourceHeight = canvas.height; // eslint-disable-next-line no-param-reassign

          img = document.createElement('canvas');
          img.width = sourceWidth;
          img.height = sourceHeight;
          loadImage.renderImageToCanvas(img, canvas, 0, 0, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight, options);
        }
      }

      canvas.width = destWidth;
      canvas.height = destHeight;
      loadImage.transformCoordinates(canvas, options);
      return loadImage.renderImageToCanvas(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight, options);
    }

    img.width = destWidth;
    img.height = destHeight;
    return img;
  };
});

/***/ }),

/***/ "./node_modules/blueimp-load-image/js/load-image.js":
/*!**********************************************************!*\
  !*** ./node_modules/blueimp-load-image/js/load-image.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, webkitURL, module */
;

(function ($) {
  'use strict';
  /**
   * Loads an image for a given File object.
   * Invokes the callback with an img or optional canvas element
   * (if supported by the browser) as parameter:.
   *
   * @param {File|Blob|string} file File or Blob object or image URL
   * @param {Function} [callback] Image load event callback
   * @param {object} [options] Options object
   * @returns {HTMLImageElement|HTMLCanvasElement|FileReader} image object
   */

  function loadImage(file, callback, options) {
    var img = document.createElement('img');
    var url;
    /**
     * Callback for the fetchBlob call.
     *
     * @param {Blob} blob Blob object
     * @param {Error} err Error object
     */

    function fetchBlobCallback(blob, err) {
      if (err) console.log(err); // eslint-disable-line no-console

      if (blob && loadImage.isInstanceOf('Blob', blob)) {
        // eslint-disable-next-line no-param-reassign
        file = blob;
        url = loadImage.createObjectURL(file);
      } else {
        url = file;

        if (options && options.crossOrigin) {
          img.crossOrigin = options.crossOrigin;
        }
      }

      img.src = url;
    }

    img.onerror = function (event) {
      return loadImage.onerror(img, event, file, url, callback, options);
    };

    img.onload = function (event) {
      return loadImage.onload(img, event, file, url, callback, options);
    };

    if (typeof file === 'string') {
      if (loadImage.hasMetaOption(options)) {
        loadImage.fetchBlob(file, fetchBlobCallback, options);
      } else {
        fetchBlobCallback();
      }

      return img;
    } else if (loadImage.isInstanceOf('Blob', file) || // Files are also Blob instances, but some browsers
    // (Firefox 3.6) support the File API but not Blobs:
    loadImage.isInstanceOf('File', file)) {
      url = loadImage.createObjectURL(file);

      if (url) {
        img.src = url;
        return img;
      }

      return loadImage.readFile(file, function (e) {
        var target = e.target;

        if (target && target.result) {
          img.src = target.result;
        } else if (callback) {
          callback(e);
        }
      });
    }
  } // The check for URL.revokeObjectURL fixes an issue with Opera 12,
  // which provides URL.createObjectURL but doesn't properly implement it:


  var urlAPI = $.createObjectURL && $ || $.URL && URL.revokeObjectURL && URL || $.webkitURL && webkitURL;
  /**
   * Helper function to revoke an object URL
   *
   * @param {string} url Blob Object URL
   * @param {object} [options] Options object
   */

  function revokeHelper(url, options) {
    if (url && url.slice(0, 5) === 'blob:' && !(options && options.noRevoke)) {
      loadImage.revokeObjectURL(url);
    }
  } // Determines if meta data should be loaded automatically.
  // Requires the load image meta extension to load meta data.


  loadImage.hasMetaOption = function (options) {
    return options && options.meta;
  }; // If the callback given to this function returns a blob, it is used as image
  // source instead of the original url and overrides the file argument used in
  // the onload and onerror event callbacks:


  loadImage.fetchBlob = function (url, callback) {
    callback();
  };

  loadImage.isInstanceOf = function (type, obj) {
    // Cross-frame instanceof check
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };

  loadImage.transform = function (img, options, callback, file, data) {
    callback(img, data);
  };

  loadImage.onerror = function (img, event, file, url, callback, options) {
    revokeHelper(url, options);

    if (callback) {
      callback.call(img, event);
    }
  };

  loadImage.onload = function (img, event, file, url, callback, options) {
    revokeHelper(url, options);

    if (callback) {
      loadImage.transform(img, options, callback, file, {
        originalWidth: img.naturalWidth || img.width,
        originalHeight: img.naturalHeight || img.height
      });
    }
  };

  loadImage.createObjectURL = function (file) {
    return urlAPI ? urlAPI.createObjectURL(file) : false;
  };

  loadImage.revokeObjectURL = function (url) {
    return urlAPI ? urlAPI.revokeObjectURL(url) : false;
  }; // Loads a given File object via FileReader interface,
  // invokes the callback with the event object (load or error).
  // The result can be read via event.target.result:


  loadImage.readFile = function (file, callback, method) {
    if ($.FileReader) {
      var fileReader = new FileReader();
      fileReader.onload = fileReader.onerror = callback; // eslint-disable-next-line no-param-reassign

      method = method || 'readAsDataURL';

      if (fileReader[method]) {
        fileReader[method](file);
        return fileReader;
      }
    }

    return false;
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return loadImage;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' && window || this);

/***/ }),

/***/ "./node_modules/is-electron/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// https://github.com/electron/electron/issues/2288
function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  } // Main process


  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  } // Detect the user agent when the `nodeIntegration` option is set to true


  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}

module.exports = isElectron;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)
void function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  function resolveUrl() {
    var numUrls = arguments.length;

    if (numUrls === 0) {
      throw new Error("resolveUrl requires at least one argument; got none.");
    }

    var base = document.createElement("base");
    base.href = arguments[0];

    if (numUrls === 1) {
      return base.href;
    }

    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    var a = document.createElement("a");
    var resolved;

    for (var index = 1; index < numUrls; index++) {
      a.href = arguments[index];
      resolved = a.href;
      base.href = resolved;
    }

    head.removeChild(base);
    return resolved;
  }

  return resolveUrl;
});

/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, collective, contributors, dependencies, deprecated, description, devDependencies, homepage, jsdelivr, license, main, name, repository, scripts, types, unpkg, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"tesseract.js\",\"_id\":\"tesseract.js@2.1.5\",\"_inBundle\":false,\"_integrity\":\"sha512-7CIS3SWr7TXpeaH9+HS7iUtVbCfPFYOO3p6rkRAkdtsOtrbz6496x59na6SCbFAIaZulQxy8BjwSu3qL3AoDRg==\",\"_location\":\"/tesseract.js\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"tesseract.js\",\"name\":\"tesseract.js\",\"escapedName\":\"tesseract.js\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/tesseract.js/-/tesseract.js-2.1.5.tgz\",\"_shasum\":\"2f757ff059f249721096fe9f94029c349650902c\",\"_spec\":\"tesseract.js\",\"_where\":\"/Applications/MAMP/htdocs/user-write-validation\",\"author\":\"\",\"browser\":{\"./src/worker/node/index.js\":\"./src/worker/browser/index.js\"},\"bugs\":{\"url\":\"https://github.com/naptha/tesseract.js/issues\"},\"bundleDependencies\":false,\"collective\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/tesseractjs\"},\"contributors\":[{\"name\":\"jeromewu\"}],\"dependencies\":{\"blueimp-load-image\":\"^3.0.0\",\"bmp-js\":\"^0.1.0\",\"file-type\":\"^12.4.1\",\"idb-keyval\":\"^3.2.0\",\"is-electron\":\"^2.2.0\",\"is-url\":\"^1.2.4\",\"jpeg-autorotate\":\"^7.1.1\",\"node-fetch\":\"^2.6.0\",\"opencollective-postinstall\":\"^2.0.2\",\"regenerator-runtime\":\"^0.13.3\",\"resolve-url\":\"^0.2.1\",\"tesseract.js-core\":\"^2.2.0\",\"zlibjs\":\"^0.3.1\"},\"deprecated\":false,\"description\":\"Pure Javascript Multilingual OCR\",\"devDependencies\":{\"@babel/core\":\"^7.7.7\",\"@babel/preset-env\":\"^7.7.7\",\"acorn\":\"^6.4.0\",\"babel-loader\":\"^8.1.0\",\"cors\":\"^2.8.5\",\"eslint\":\"^7.2.0\",\"eslint-config-airbnb-base\":\"^14.2.0\",\"eslint-plugin-import\":\"^2.22.1\",\"expect.js\":\"^0.3.1\",\"express\":\"^4.17.1\",\"mocha\":\"^8.1.3\",\"mocha-headless-chrome\":\"^2.0.3\",\"npm-run-all\":\"^4.1.5\",\"nyc\":\"^15.1.0\",\"rimraf\":\"^2.7.1\",\"wait-on\":\"^3.3.0\",\"webpack\":\"^4.44.2\",\"webpack-bundle-analyzer\":\"^3.6.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-middleware\":\"^3.7.2\"},\"homepage\":\"https://github.com/naptha/tesseract.js\",\"jsdelivr\":\"dist/tesseract.min.js\",\"license\":\"Apache-2.0\",\"main\":\"src/index.js\",\"name\":\"tesseract.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/naptha/tesseract.js.git\"},\"scripts\":{\"build\":\"rimraf dist && webpack --config scripts/webpack.config.prod.js\",\"lint\":\"eslint src\",\"lint:fix\":\"eslint --fix src\",\"postinstall\":\"opencollective-postinstall || true\",\"prepublishOnly\":\"npm run build\",\"profile:tesseract\":\"webpack-bundle-analyzer dist/tesseract-stats.json\",\"profile:worker\":\"webpack-bundle-analyzer dist/worker-stats.json\",\"start\":\"node scripts/server.js\",\"test\":\"npm-run-all -p -r start test:all\",\"test:all\":\"npm-run-all wait test:browser:* test:node:all\",\"test:browser-tpl\":\"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000\",\"test:browser:FS\":\"npm run test:browser-tpl -- -f ./tests/FS.test.html\",\"test:browser:detect\":\"npm run test:browser-tpl -- -f ./tests/detect.test.html\",\"test:browser:recognize\":\"npm run test:browser-tpl -- -f ./tests/recognize.test.html\",\"test:browser:scheduler\":\"npm run test:browser-tpl -- -f ./tests/scheduler.test.html\",\"test:node\":\"nyc mocha --exit --bail --require ./scripts/test-helper.js\",\"test:node:all\":\"npm run test:node -- ./tests/*.test.js\",\"wait\":\"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js\"},\"types\":\"src/index.d.ts\",\"unpkg\":\"dist/tesseract.min.js\",\"version\":\"2.1.5\"}");

/***/ }),

/***/ "./node_modules/tesseract.js/src/Tesseract.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createWorker = __webpack_require__(/*! ./createWorker */ "./node_modules/tesseract.js/src/createWorker.js");

const recognize = async (image, langs, options) => {
  const worker = createWorker(options);
  await worker.load();
  await worker.loadLanguage(langs);
  await worker.initialize(langs);
  return worker.recognize(image).finally(async () => {
    await worker.terminate();
  });
};

const detect = async (image, options) => {
  const worker = createWorker(options);
  await worker.load();
  await worker.loadLanguage('osd');
  await worker.initialize('osd');
  return worker.detect(image).finally(async () => {
    await worker.terminate();
  });
};

module.exports = {
  recognize,
  detect
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/OEM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * OEM = OCR Engine Mode, and there are 4 possible modes.
 *
 * By default tesseract.js uses LSTM_ONLY mode.
 *
 */
module.exports = {
  TESSERACT_ONLY: 0,
  LSTM_ONLY: 1,
  TESSERACT_LSTM_COMBINED: 2,
  DEFAULT: 3
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/PSM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * PSM = Page Segmentation Mode
 */
module.exports = {
  OSD_ONLY: '0',
  AUTO_OSD: '1',
  AUTO_ONLY: '2',
  AUTO: '3',
  SINGLE_COLUMN: '4',
  SINGLE_BLOCK_VERT_TEXT: '5',
  SINGLE_BLOCK: '6',
  SINGLE_LINE: '7',
  SINGLE_WORD: '8',
  CIRCLE_WORD: '9',
  SINGLE_CHAR: '10',
  SPARSE_TEXT: '11',
  SPARSE_TEXT_OSD: '12'
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const OEM = __webpack_require__(/*! ./OEM */ "./node_modules/tesseract.js/src/constants/OEM.js");

module.exports = {
  defaultOEM: OEM.DEFAULT
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/defaultOptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  /*
   * default path for downloading *.traineddata
   */
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',

  /*
   * Use BlobURL for worker script by default
   * TODO: remove this option
   *
   */
  workerBlobURL: true,
  logger: () => {}
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/languages.js":
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/languages.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * languages with existing tesseract traineddata
 * https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
 */

/**
 * @typedef {object} Languages
 * @property {string} AFR Afrikaans
 * @property {string} AMH Amharic
 * @property {string} ARA Arabic
 * @property {string} ASM Assamese
 * @property {string} AZE Azerbaijani
 * @property {string} AZE_CYRL Azerbaijani - Cyrillic
 * @property {string} BEL Belarusian
 * @property {string} BEN Bengali
 * @property {string} BOD Tibetan
 * @property {string} BOS Bosnian
 * @property {string} BUL Bulgarian
 * @property {string} CAT Catalan; Valencian
 * @property {string} CEB Cebuano
 * @property {string} CES Czech
 * @property {string} CHI_SIM Chinese - Simplified
 * @property {string} CHI_TRA Chinese - Traditional
 * @property {string} CHR Cherokee
 * @property {string} CYM Welsh
 * @property {string} DAN Danish
 * @property {string} DEU German
 * @property {string} DZO Dzongkha
 * @property {string} ELL Greek, Modern (1453-)
 * @property {string} ENG English
 * @property {string} ENM English, Middle (1100-1500)
 * @property {string} EPO Esperanto
 * @property {string} EST Estonian
 * @property {string} EUS Basque
 * @property {string} FAS Persian
 * @property {string} FIN Finnish
 * @property {string} FRA French
 * @property {string} FRK German Fraktur
 * @property {string} FRM French, Middle (ca. 1400-1600)
 * @property {string} GLE Irish
 * @property {string} GLG Galician
 * @property {string} GRC Greek, Ancient (-1453)
 * @property {string} GUJ Gujarati
 * @property {string} HAT Haitian; Haitian Creole
 * @property {string} HEB Hebrew
 * @property {string} HIN Hindi
 * @property {string} HRV Croatian
 * @property {string} HUN Hungarian
 * @property {string} IKU Inuktitut
 * @property {string} IND Indonesian
 * @property {string} ISL Icelandic
 * @property {string} ITA Italian
 * @property {string} ITA_OLD Italian - Old
 * @property {string} JAV Javanese
 * @property {string} JPN Japanese
 * @property {string} KAN Kannada
 * @property {string} KAT Georgian
 * @property {string} KAT_OLD Georgian - Old
 * @property {string} KAZ Kazakh
 * @property {string} KHM Central Khmer
 * @property {string} KIR Kirghiz; Kyrgyz
 * @property {string} KOR Korean
 * @property {string} KUR Kurdish
 * @property {string} LAO Lao
 * @property {string} LAT Latin
 * @property {string} LAV Latvian
 * @property {string} LIT Lithuanian
 * @property {string} MAL Malayalam
 * @property {string} MAR Marathi
 * @property {string} MKD Macedonian
 * @property {string} MLT Maltese
 * @property {string} MSA Malay
 * @property {string} MYA Burmese
 * @property {string} NEP Nepali
 * @property {string} NLD Dutch; Flemish
 * @property {string} NOR Norwegian
 * @property {string} ORI Oriya
 * @property {string} PAN Panjabi; Punjabi
 * @property {string} POL Polish
 * @property {string} POR Portuguese
 * @property {string} PUS Pushto; Pashto
 * @property {string} RON Romanian; Moldavian; Moldovan
 * @property {string} RUS Russian
 * @property {string} SAN Sanskrit
 * @property {string} SIN Sinhala; Sinhalese
 * @property {string} SLK Slovak
 * @property {string} SLV Slovenian
 * @property {string} SPA Spanish; Castilian
 * @property {string} SPA_OLD Spanish; Castilian - Old
 * @property {string} SQI Albanian
 * @property {string} SRP Serbian
 * @property {string} SRP_LATN Serbian - Latin
 * @property {string} SWA Swahili
 * @property {string} SWE Swedish
 * @property {string} SYR Syriac
 * @property {string} TAM Tamil
 * @property {string} TEL Telugu
 * @property {string} TGK Tajik
 * @property {string} TGL Tagalog
 * @property {string} THA Thai
 * @property {string} TIR Tigrinya
 * @property {string} TUR Turkish
 * @property {string} UIG Uighur; Uyghur
 * @property {string} UKR Ukrainian
 * @property {string} URD Urdu
 * @property {string} UZB Uzbek
 * @property {string} UZB_CYRL Uzbek - Cyrillic
 * @property {string} VIE Vietnamese
 * @property {string} YID Yiddish
 */

/**
  * @type {Languages}
  */
module.exports = {
  AFR: 'afr',
  AMH: 'amh',
  ARA: 'ara',
  ASM: 'asm',
  AZE: 'aze',
  AZE_CYRL: 'aze_cyrl',
  BEL: 'bel',
  BEN: 'ben',
  BOD: 'bod',
  BOS: 'bos',
  BUL: 'bul',
  CAT: 'cat',
  CEB: 'ceb',
  CES: 'ces',
  CHI_SIM: 'chi_sim',
  CHI_TRA: 'chi_tra',
  CHR: 'chr',
  CYM: 'cym',
  DAN: 'dan',
  DEU: 'deu',
  DZO: 'dzo',
  ELL: 'ell',
  ENG: 'eng',
  ENM: 'enm',
  EPO: 'epo',
  EST: 'est',
  EUS: 'eus',
  FAS: 'fas',
  FIN: 'fin',
  FRA: 'fra',
  FRK: 'frk',
  FRM: 'frm',
  GLE: 'gle',
  GLG: 'glg',
  GRC: 'grc',
  GUJ: 'guj',
  HAT: 'hat',
  HEB: 'heb',
  HIN: 'hin',
  HRV: 'hrv',
  HUN: 'hun',
  IKU: 'iku',
  IND: 'ind',
  ISL: 'isl',
  ITA: 'ita',
  ITA_OLD: 'ita_old',
  JAV: 'jav',
  JPN: 'jpn',
  KAN: 'kan',
  KAT: 'kat',
  KAT_OLD: 'kat_old',
  KAZ: 'kaz',
  KHM: 'khm',
  KIR: 'kir',
  KOR: 'kor',
  KUR: 'kur',
  LAO: 'lao',
  LAT: 'lat',
  LAV: 'lav',
  LIT: 'lit',
  MAL: 'mal',
  MAR: 'mar',
  MKD: 'mkd',
  MLT: 'mlt',
  MSA: 'msa',
  MYA: 'mya',
  NEP: 'nep',
  NLD: 'nld',
  NOR: 'nor',
  ORI: 'ori',
  PAN: 'pan',
  POL: 'pol',
  POR: 'por',
  PUS: 'pus',
  RON: 'ron',
  RUS: 'rus',
  SAN: 'san',
  SIN: 'sin',
  SLK: 'slk',
  SLV: 'slv',
  SPA: 'spa',
  SPA_OLD: 'spa_old',
  SQI: 'sqi',
  SRP: 'srp',
  SRP_LATN: 'srp_latn',
  SWA: 'swa',
  SWE: 'swe',
  SYR: 'syr',
  TAM: 'tam',
  TEL: 'tel',
  TGK: 'tgk',
  TGL: 'tgl',
  THA: 'tha',
  TIR: 'tir',
  TUR: 'tur',
  UIG: 'uig',
  UKR: 'ukr',
  URD: 'urd',
  UZB: 'uzb',
  UZB_CYRL: 'uzb_cyrl',
  VIE: 'vie',
  YID: 'yid'
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/createJob.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

let jobCounter = 0;

module.exports = ({
  id: _id,
  action,
  payload = {}
}) => {
  let id = _id;

  if (typeof id === 'undefined') {
    id = getId('Job', jobCounter);
    jobCounter += 1;
  }

  return {
    id,
    action,
    payload
  };
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/createScheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createJob = __webpack_require__(/*! ./createJob */ "./node_modules/tesseract.js/src/createJob.js");

const {
  log
} = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");

const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

let schedulerCounter = 0;

module.exports = () => {
  const id = getId('Scheduler', schedulerCounter);
  const workers = {};
  const runningWorkers = {};
  let jobQueue = [];
  schedulerCounter += 1;

  const getQueueLen = () => jobQueue.length;

  const getNumWorkers = () => Object.keys(workers).length;

  const dequeue = () => {
    if (jobQueue.length !== 0) {
      const wIds = Object.keys(workers);

      for (let i = 0; i < wIds.length; i += 1) {
        if (typeof runningWorkers[wIds[i]] === 'undefined') {
          jobQueue[0](workers[wIds[i]]);
          break;
        }
      }
    }
  };

  const queue = (action, payload) => new Promise((resolve, reject) => {
    const job = createJob({
      action,
      payload
    });
    jobQueue.push(async w => {
      jobQueue.shift();
      runningWorkers[w.id] = job;

      try {
        resolve(await w[action].apply(this, [...payload, job.id]));
      } catch (err) {
        reject(err);
      } finally {
        delete runningWorkers[w.id];
        dequeue();
      }
    });
    log(`[${id}]: Add ${job.id} to JobQueue`);
    log(`[${id}]: JobQueue length=${jobQueue.length}`);
    dequeue();
  });

  const addWorker = w => {
    workers[w.id] = w;
    log(`[${id}]: Add ${w.id}`);
    log(`[${id}]: Number of workers=${getNumWorkers()}`);
    dequeue();
    return w.id;
  };

  const addJob = async (action, ...payload) => {
    if (getNumWorkers() === 0) {
      throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
    }

    return queue(action, payload);
  };

  const terminate = async () => {
    Object.keys(workers).forEach(async wid => {
      await workers[wid].terminate();
    });
    jobQueue = [];
  };

  return {
    addWorker,
    addJob,
    terminate,
    getQueueLen,
    getNumWorkers
  };
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/createWorker.js":
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ "./node_modules/tesseract.js/src/utils/resolvePaths.js");

const circularize = __webpack_require__(/*! ./utils/circularize */ "./node_modules/tesseract.js/src/utils/circularize.js");

const createJob = __webpack_require__(/*! ./createJob */ "./node_modules/tesseract.js/src/createJob.js");

const {
  log
} = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");

const getId = __webpack_require__(/*! ./utils/getId */ "./node_modules/tesseract.js/src/utils/getId.js");

const {
  defaultOEM
} = __webpack_require__(/*! ./constants/config */ "./node_modules/tesseract.js/src/constants/config.js");

const {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  loadImage,
  send
} = __webpack_require__(/*! ./worker/node */ "./node_modules/tesseract.js/src/worker/browser/index.js");

let workerCounter = 0;

module.exports = (_options = {}) => {
  const id = getId('Worker', workerCounter);
  const {
    logger,
    errorHandler,
    ...options
  } = resolvePaths({ ...defaultOptions,
    ..._options
  });
  const resolves = {};
  const rejects = {};
  let worker = spawnWorker(options);
  workerCounter += 1;

  const setResolve = (action, res) => {
    resolves[action] = res;
  };

  const setReject = (action, rej) => {
    rejects[action] = rej;
  };

  const startJob = ({
    id: jobId,
    action,
    payload
  }) => new Promise((resolve, reject) => {
    log(`[${id}]: Start ${jobId}, action=${action}`);
    setResolve(action, resolve);
    setReject(action, reject);
    send(worker, {
      workerId: id,
      jobId,
      action,
      payload
    });
  });

  const load = jobId => startJob(createJob({
    id: jobId,
    action: 'load',
    payload: {
      options
    }
  }));

  const writeText = (path, text, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'writeFile',
      args: [path, text]
    }
  }));

  const readText = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'readFile',
      args: [path, {
        encoding: 'utf8'
      }]
    }
  }));

  const removeFile = (path, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method: 'unlink',
      args: [path]
    }
  }));

  const FS = (method, args, jobId) => startJob(createJob({
    id: jobId,
    action: 'FS',
    payload: {
      method,
      args
    }
  }));

  const loadLanguage = (langs = 'eng', jobId) => startJob(createJob({
    id: jobId,
    action: 'loadLanguage',
    payload: {
      langs,
      options
    }
  }));

  const initialize = (langs = 'eng', oem = defaultOEM, jobId) => startJob(createJob({
    id: jobId,
    action: 'initialize',
    payload: {
      langs,
      oem
    }
  }));

  const setParameters = (params = {}, jobId) => startJob(createJob({
    id: jobId,
    action: 'setParameters',
    payload: {
      params
    }
  }));

  const recognize = async (image, opts = {}, jobId) => startJob(createJob({
    id: jobId,
    action: 'recognize',
    payload: {
      image: await loadImage(image),
      options: opts
    }
  }));

  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => startJob(createJob({
    id: jobId,
    action: 'getPDF',
    payload: {
      title,
      textonly
    }
  }));

  const detect = async (image, jobId) => startJob(createJob({
    id: jobId,
    action: 'detect',
    payload: {
      image: await loadImage(image)
    }
  }));

  const terminate = async () => {
    if (worker !== null) {
      /*
      await startJob(createJob({
        id: jobId,
        action: 'terminate',
      }));
      */
      terminateWorker(worker);
      worker = null;
    }

    return Promise.resolve();
  };

  onMessage(worker, ({
    workerId,
    jobId,
    status,
    action,
    data
  }) => {
    if (status === 'resolve') {
      log(`[${workerId}]: Complete ${jobId}`);
      let d = data;

      if (action === 'recognize') {
        d = circularize(data);
      } else if (action === 'getPDF') {
        d = Array.from({ ...data,
          length: Object.keys(data).length
        });
      }

      resolves[action]({
        jobId,
        data: d
      });
    } else if (status === 'reject') {
      rejects[action](data);

      if (errorHandler) {
        errorHandler(data);
      } else {
        throw Error(data);
      }
    } else if (status === 'progress') {
      logger({ ...data,
        userJobId: jobId
      });
    }
  });
  return {
    id,
    worker,
    setResolve,
    setReject,
    load,
    writeText,
    readText,
    removeFile,
    FS,
    loadLanguage,
    initialize,
    setParameters,
    recognize,
    getPDF,
    detect,
    terminate
  };
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * Entry point for tesseract.js, should be the entry when bundling.
 *
 * @fileoverview entry point for tesseract.js
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

const createScheduler = __webpack_require__(/*! ./createScheduler */ "./node_modules/tesseract.js/src/createScheduler.js");

const createWorker = __webpack_require__(/*! ./createWorker */ "./node_modules/tesseract.js/src/createWorker.js");

const Tesseract = __webpack_require__(/*! ./Tesseract */ "./node_modules/tesseract.js/src/Tesseract.js");

const languages = __webpack_require__(/*! ./constants/languages */ "./node_modules/tesseract.js/src/constants/languages.js");

const OEM = __webpack_require__(/*! ./constants/OEM */ "./node_modules/tesseract.js/src/constants/OEM.js");

const PSM = __webpack_require__(/*! ./constants/PSM */ "./node_modules/tesseract.js/src/constants/PSM.js");

const {
  setLogging
} = __webpack_require__(/*! ./utils/log */ "./node_modules/tesseract.js/src/utils/log.js");

module.exports = {
  languages,
  OEM,
  PSM,
  createScheduler,
  createWorker,
  setLogging,
  ...Tesseract
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/circularize.js":
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * In the recognition result of tesseract, there
 * is a deep JSON object for details, it has around
 *
 * The result of dump.js is a big JSON tree
 * which can be easily serialized (for instance
 * to be sent from a webworker to the main app
 * or through Node's IPC), but we want
 * a (circular) DOM-like interface for walking
 * through the data.
 *
 * @fileoverview DOM-like interface for walking through data
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
module.exports = page => {
  const blocks = [];
  const paragraphs = [];
  const lines = [];
  const words = [];
  const symbols = [];
  page.blocks.forEach(block => {
    block.paragraphs.forEach(paragraph => {
      paragraph.lines.forEach(line => {
        line.words.forEach(word => {
          word.symbols.forEach(sym => {
            symbols.push({ ...sym,
              page,
              block,
              paragraph,
              line,
              word
            });
          });
          words.push({ ...word,
            page,
            block,
            paragraph,
            line
          });
        });
        lines.push({ ...line,
          page,
          block,
          paragraph
        });
      });
      paragraphs.push({ ...paragraph,
        page,
        block
      });
    });
    blocks.push({ ...block,
      page
    });
  });
  return { ...page,
    blocks,
    paragraphs,
    lines,
    words,
    symbols
  };
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getEnvironment.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const isElectron = __webpack_require__(/*! is-electron */ "./node_modules/is-electron/index.js");

module.exports = key => {
  const env = {};

  if (typeof WorkerGlobalScope !== 'undefined') {
    env.type = 'webworker';
  } else if (isElectron()) {
    env.type = 'electron';
  } else if (typeof window === 'object') {
    env.type = 'browser';
  } else if (typeof process === 'object' && "function" === 'function') {
    env.type = 'node';
  }

  if (typeof key === 'undefined') {
    return env;
  }

  return env[key];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getId.js":
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/log.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let logging = false;
exports.logging = logging;

exports.setLogging = _logging => {
  logging = _logging;
};

exports.log = (...args) => logging ? console.log.apply(this, args) : null;

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/resolvePaths.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isBrowser = __webpack_require__(/*! ./getEnvironment */ "./node_modules/tesseract.js/src/utils/getEnvironment.js")('type') === 'browser';
const resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js") : s => s; // eslint-disable-line

module.exports = options => {
  const opts = { ...options
  };
  ['corePath', 'workerPath', 'langPath'].forEach(key => {
    if (typeof options[key] !== 'undefined') {
      opts[key] = resolveURL(opts[key]);
    }
  });
  return opts;
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");

const {
  version,
  dependencies
} = __webpack_require__(/*! ../../../package.json */ "./node_modules/tesseract.js/package.json");

const defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ "./node_modules/tesseract.js/src/constants/defaultOptions.js");
/*
 * Default options for browser worker
 */


module.exports = { ...defaultOptions,
  workerPath: typeof process !== 'undefined' && process.env.TESS_ENV === 'development' ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`) : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,

  /*
   * If browser doesn't support WebAssembly,
   * load ASM version instead
   */
  corePath: `https://unpkg.com/tesseract.js-core@v${dependencies['tesseract.js-core'].substring(1)}/tesseract-core.${typeof WebAssembly === 'object' ? 'wasm' : 'asm'}.js`
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * Tesseract Worker adapter for browser
 *
 * @fileoverview Tesseract Worker adapter for browser
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */
const defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js");

const spawnWorker = __webpack_require__(/*! ./spawnWorker */ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js");

const terminateWorker = __webpack_require__(/*! ./terminateWorker */ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js");

const onMessage = __webpack_require__(/*! ./onMessage */ "./node_modules/tesseract.js/src/worker/browser/onMessage.js");

const send = __webpack_require__(/*! ./send */ "./node_modules/tesseract.js/src/worker/browser/send.js");

const loadImage = __webpack_require__(/*! ./loadImage */ "./node_modules/tesseract.js/src/worker/browser/loadImage.js");

module.exports = {
  defaultOptions,
  spawnWorker,
  terminateWorker,
  onMessage,
  send,
  loadImage
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/loadImage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const resolveURL = __webpack_require__(/*! resolve-url */ "./node_modules/resolve-url/resolve-url.js");

const blueimpLoadImage = __webpack_require__(/*! blueimp-load-image */ "./node_modules/blueimp-load-image/js/index.js");
/**
 * readFromBlobOrFile
 *
 * @name readFromBlobOrFile
 * @function
 * @access private
 */


const readFromBlobOrFile = blob => new Promise((resolve, reject) => {
  const fileReader = new FileReader();

  fileReader.onload = () => {
    resolve(fileReader.result);
  };

  fileReader.onerror = ({
    target: {
      error: {
        code
      }
    }
  }) => {
    reject(Error(`File could not be read! Code=${code}`));
  };

  fileReader.readAsArrayBuffer(blob);
});

const fixOrientationFromUrlOrBlobOrFile = blob => new Promise(resolve => {
  blueimpLoadImage(blob, img => img.toBlob(resolve), {
    orientation: true,
    canvas: true
  });
});
/**
 * loadImage
 *
 * @name loadImage
 * @function load image from different source
 * @access private
 */


const loadImage = async image => {
  let data = image;

  if (typeof image === 'undefined') {
    return 'undefined';
  }

  if (typeof image === 'string') {
    if (image.endsWith('.pbm')) {
      const resp = await fetch(resolveURL(image));
      data = await resp.arrayBuffer();
    } else {
      let img = image; // If not Base64 Image

      if (!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
        img = resolveURL(image);
      }

      data = await readFromBlobOrFile(await fixOrientationFromUrlOrBlobOrFile(img));
    }
  } else if (image instanceof HTMLElement) {
    if (image.tagName === 'IMG') {
      data = await loadImage(image.src);
    }

    if (image.tagName === 'VIDEO') {
      data = await loadImage(image.poster);
    }

    if (image.tagName === 'CANVAS') {
      await new Promise(resolve => {
        image.toBlob(async blob => {
          data = await readFromBlobOrFile(blob);
          resolve();
        });
      });
    }
  } else if (image instanceof File || image instanceof Blob) {
    let img = image;

    if (!image.name.endsWith('.pbm')) {
      img = await fixOrientationFromUrlOrBlobOrFile(img);
    }

    data = await readFromBlobOrFile(img);
  }

  return new Uint8Array(data);
};

module.exports = loadImage;

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/onMessage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (worker, handler) => {
  worker.onmessage = ({
    data
  }) => {
    // eslint-disable-line
    handler(data);
  };
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/send.js":
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * send
 *
 * @name send
 * @function send packet to worker and create a job
 * @access public
 */
module.exports = async (worker, packet) => {
  worker.postMessage(packet);
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * spawnWorker
 *
 * @name spawnWorker
 * @function create a new Worker in browser
 * @access public
 */
module.exports = ({
  workerPath,
  workerBlobURL
}) => {
  let worker;

  if (Blob && URL && workerBlobURL) {
    const blob = new Blob([`importScripts("${workerPath}");`], {
      type: 'application/javascript'
    });
    worker = new Worker(URL.createObjectURL(blob));
  } else {
    worker = new Worker(workerPath);
  }

  return worker;
};

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * terminateWorker
 *
 * @name terminateWorker
 * @function terminate worker
 * @access public
 */
module.exports = worker => {
  worker.terminate();
};

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tesseract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tesseract */ "./src/js/components/tesseract.js");


/***/ }),

/***/ "./src/js/components/tesseract.js":
/*!****************************************!*\
  !*** ./src/js/components/tesseract.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_0__);

tesseract_js__WEBPACK_IMPORTED_MODULE_0___default.a.recognize("dist/images/eng_bw.png", "eng", {
  logger: function logger(m) {
    return console.log(m);
  }
}).then(function (_ref) {
  var text = _ref.data.text;
  console.log(text);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JsdWVpbXAtbG9hZC1pbWFnZS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1sb2FkLWltYWdlL2pzL2xvYWQtaW1hZ2UtZXhpZi1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JsdWVpbXAtbG9hZC1pbWFnZS9qcy9sb2FkLWltYWdlLWV4aWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JsdWVpbXAtbG9hZC1pbWFnZS9qcy9sb2FkLWltYWdlLWZldGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ibHVlaW1wLWxvYWQtaW1hZ2UvanMvbG9hZC1pbWFnZS1pcHRjLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1sb2FkLWltYWdlL2pzL2xvYWQtaW1hZ2UtaXB0Yy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1sb2FkLWltYWdlL2pzL2xvYWQtaW1hZ2UtbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1sb2FkLWltYWdlL2pzL2xvYWQtaW1hZ2Utb3JpZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JsdWVpbXAtbG9hZC1pbWFnZS9qcy9sb2FkLWltYWdlLXNjYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ibHVlaW1wLWxvYWQtaW1hZ2UvanMvbG9hZC1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZWxlY3Ryb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC9yZXNvbHZlLXVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9UZXNzZXJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29uc3RhbnRzL09FTS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb25zdGFudHMvUFNNLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2NvbnN0YW50cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29uc3RhbnRzL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2NvbnN0YW50cy9sYW5ndWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY3JlYXRlSm9iLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL2NyZWF0ZVNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jcmVhdGVXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvdXRpbHMvY2lyY3VsYXJpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvdXRpbHMvZ2V0RW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvdXRpbHMvZ2V0SWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvdXRpbHMvbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3V0aWxzL3Jlc29sdmVQYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy93b3JrZXIvYnJvd3Nlci9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy93b3JrZXIvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy93b3JrZXIvYnJvd3Nlci9sb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvd29ya2VyL2Jyb3dzZXIvb25NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXNzZXJhY3QuanMvc3JjL3dvcmtlci9icm93c2VyL3NlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvd29ya2VyL2Jyb3dzZXIvc3Bhd25Xb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvd29ya2VyL2Jyb3dzZXIvdGVybWluYXRlV29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGVzc2VyYWN0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZmFjdG9yeSIsImRlZmluZSIsImxvYWRJbWFnZSIsIkV4aWZNYXBQcm90byIsIkV4aWZNYXAiLCJwcm90b3R5cGUiLCJ0YWdzIiwic3RyaW5nVmFsdWVzIiwiRXhwb3N1cmVQcm9ncmFtIiwiTWV0ZXJpbmdNb2RlIiwiTGlnaHRTb3VyY2UiLCJGbGFzaCIsIlNlbnNpbmdNZXRob2QiLCJTY2VuZUNhcHR1cmVUeXBlIiwiU2NlbmVUeXBlIiwiQ3VzdG9tUmVuZGVyZWQiLCJXaGl0ZUJhbGFuY2UiLCJHYWluQ29udHJvbCIsIkNvbnRyYXN0IiwiU2F0dXJhdGlvbiIsIlNoYXJwbmVzcyIsIlN1YmplY3REaXN0YW5jZVJhbmdlIiwiRmlsZVNvdXJjZSIsIkNvbXBvbmVudHNDb25maWd1cmF0aW9uIiwiT3JpZW50YXRpb24iLCJnZXRUZXh0IiwibmFtZSIsInZhbHVlIiwiZ2V0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZ2V0QWxsIiwibWFwIiwicHJvcCIsIm9iaiIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByaXZhdGVJRkRzIiwiZ2V0TmFtZSIsInRhZ0NvZGUiLCJwcml2YXRlSUZEIiwic3ViVGFncyIsIk51bWJlciIsImRlZmluZVByb3BlcnR5IiwiVGh1bWJuYWlsIiwiRXhpZiIsIkdQU0luZm8iLCJJbnRlcm9wZXJhYmlsaXR5IiwiaWQiLCJnZXRFeGlmVGh1bWJuYWlsIiwiZGF0YVZpZXciLCJvZmZzZXQiLCJsZW5ndGgiLCJieXRlTGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIkJsb2IiLCJidWZmZXIiLCJzbGljZSIsInR5cGUiLCJFeGlmVGFnVHlwZXMiLCJnZXRWYWx1ZSIsImRhdGFPZmZzZXQiLCJnZXRVaW50OCIsInNpemUiLCJhc2NpaSIsImxpdHRsZUVuZGlhbiIsImdldFVpbnQxNiIsImdldFVpbnQzMiIsImdldEludDMyIiwiZ2V0RXhpZlZhbHVlIiwidGlmZk9mZnNldCIsInRhZ1R5cGUiLCJ0YWdTaXplIiwidmFsdWVzIiwiaSIsInN0ciIsImMiLCJwYXJzZUV4aWZUYWdzIiwiZGlyT2Zmc2V0IiwidGFnT2Zmc2V0cyIsImluY2x1ZGVUYWdzIiwiZXhjbHVkZVRhZ3MiLCJ0YWdzTnVtYmVyIiwiZGlyRW5kT2Zmc2V0IiwidGFnT2Zmc2V0IiwidGFnTnVtYmVyIiwidGFnVmFsdWUiLCJwYXJzZUV4aWZQcml2YXRlSUZEIiwiZGF0YSIsImV4aWYiLCJleGlmT2Zmc2V0cyIsInBhcnNlRXhpZkRhdGEiLCJvcHRpb25zIiwiZGlzYWJsZUV4aWYiLCJpbmNsdWRlRXhpZlRhZ3MiLCJleGNsdWRlRXhpZlRhZ3MiLCJkaXNhYmxlRXhpZk9mZnNldHMiLCJleGlmVGlmZk9mZnNldCIsImV4aWZMaXR0bGVFbmRpYW4iLCJkaXNhYmxlRXhpZlRodW1ibmFpbCIsImtleXMiLCJmb3JFYWNoIiwibWV0YURhdGFQYXJzZXJzIiwianBlZyIsInB1c2giLCJleGlmV3JpdGVycyIsInZpZXciLCJEYXRhVmlldyIsInNldFVpbnQxNiIsIndyaXRlRXhpZkRhdGEiLCJmZXRjaCIsIlJlcXVlc3QiLCJmZXRjaEJsb2IiLCJ1cmwiLCJjYWxsYmFjayIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJjYXRjaCIsImVyciIsIlhNTEh0dHBSZXF1ZXN0IiwiUHJvZ3Jlc3NFdmVudCIsInJlcSIsIm9wZW4iLCJtZXRob2QiLCJoZWFkZXJzIiwia2V5Iiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJzZW5kIiwiYm9keSIsIklwdGNNYXBQcm90byIsIklwdGNNYXAiLCJhIiwiYiIsInAiLCJMIiwiUCIsIlMiLCJzdHJpbmdWYWx1ZSIsIk9iamVjdE5hbWUiLCJ0eXBlcyIsImdldFN0cmluZ1ZhbHVlIiwib3V0c3RyIiwiZW5kIiwibiIsImdldFRhZ1ZhbHVlIiwiY29tYmluZVRhZ1ZhbHVlcyIsIm5ld1ZhbHVlIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJwYXJzZUlwdGNUYWdzIiwic2VnbWVudE9mZnNldCIsInNlZ21lbnRMZW5ndGgiLCJzZWdtZW50RW5kIiwiZ2V0SW50MTYiLCJpcHRjIiwiaXB0Y09mZnNldHMiLCJpc1NlZ21lbnRTdGFydCIsImdldEhlYWRlckxlbmd0aCIsInBhcnNlSXB0Y0RhdGEiLCJkaXNhYmxlSXB0YyIsIm1hcmtlckxlbmd0aCIsImhlYWRlckxlbmd0aCIsImRpc2FibGVJcHRjT2Zmc2V0cyIsImluY2x1ZGVJcHRjVGFncyIsImV4Y2x1ZGVJcHRjVGFncyIsImhhc2Jsb2JTbGljZSIsIndlYmtpdFNsaWNlIiwibW96U2xpY2UiLCJibG9iU2xpY2UiLCJhcHBseSIsImFyZ3VtZW50cyIsInBhcnNlTWV0YURhdGEiLCJmaWxlIiwidGhhdCIsIm1heE1ldGFEYXRhU2l6ZSIsIm5vTWV0YURhdGEiLCJyZWFkRmlsZSIsImUiLCJ0YXJnZXQiLCJlcnJvciIsInJlc3VsdCIsIm1heE9mZnNldCIsImhlYWRMZW5ndGgiLCJtYXJrZXJCeXRlcyIsInBhcnNlcnMiLCJkaXNhYmxlTWV0YURhdGFQYXJzZXJzIiwiZGlzYWJsZUltYWdlSGVhZCIsImltYWdlSGVhZCIsIlVpbnQ4QXJyYXkiLCJzdWJhcnJheSIsInJlcGxhY2VIZWFkIiwiaGVhZCIsIm9yaWdpbmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiaW1nIiwiaGFzTWV0YU9wdGlvbiIsIm9yaWdpbmFsSGFzQ2FudmFzT3B0aW9uIiwiaGFzQ2FudmFzT3B0aW9uIiwib3JpZ2luYWxIYXNNZXRhT3B0aW9uIiwib3JpZ2luYWxUcmFuc2Zvcm1Db29yZGluYXRlcyIsInRyYW5zZm9ybUNvb3JkaW5hdGVzIiwib3JpZ2luYWxHZXRUcmFuc2Zvcm1lZE9wdGlvbnMiLCJnZXRUcmFuc2Zvcm1lZE9wdGlvbnMiLCJ0ZXN0SW1hZ2VVUkwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvcmllbnRhdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0eWxlV2lkdGgiLCJzdHlsZSIsInN0eWxlSGVpZ2h0IiwidHJhbnNsYXRlIiwic2NhbGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJvcHRzIiwibmV3T3B0aW9ucyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsImFzcGVjdFJhdGlvIiwiY3JvcCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZW5kZXJJbWFnZVRvQ2FudmFzIiwic291cmNlWCIsInNvdXJjZVkiLCJkZXN0WCIsImRlc3RZIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImltYWdlU21vb3RoaW5nUXVhbGl0eSIsImRyYXdJbWFnZSIsInVzZUNhbnZhcyIsInBpeGVsUmF0aW8iLCJkb3duc2FtcGxpbmdSYXRpbyIsInRtcCIsInNjYWxlVXAiLCJtYXgiLCJzY2FsZURvd24iLCJtaW4iLCJjb250YWluIiwiY292ZXIiLCIkIiwiZmV0Y2hCbG9iQ2FsbGJhY2siLCJpc0luc3RhbmNlT2YiLCJjcmVhdGVPYmplY3RVUkwiLCJjcm9zc09yaWdpbiIsImV2ZW50IiwidXJsQVBJIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwid2Via2l0VVJMIiwicmV2b2tlSGVscGVyIiwibm9SZXZva2UiLCJtZXRhIiwidG9TdHJpbmciLCJvcmlnaW5hbFdpZHRoIiwib3JpZ2luYWxIZWlnaHQiLCJGaWxlUmVhZGVyIiwiZmlsZVJlYWRlciIsIndpbmRvdyIsImlzRWxlY3Ryb24iLCJwcm9jZXNzIiwidmVyc2lvbnMiLCJlbGVjdHJvbiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwicnVudGltZSIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJyb290IiwicmVzb2x2ZVVybCIsIm51bVVybHMiLCJiYXNlIiwiaHJlZiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlc29sdmVkIiwiaW5kZXgiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVdvcmtlciIsInJlY29nbml6ZSIsImltYWdlIiwibGFuZ3MiLCJ3b3JrZXIiLCJsb2FkIiwibG9hZExhbmd1YWdlIiwiaW5pdGlhbGl6ZSIsImZpbmFsbHkiLCJ0ZXJtaW5hdGUiLCJkZXRlY3QiLCJURVNTRVJBQ1RfT05MWSIsIkxTVE1fT05MWSIsIlRFU1NFUkFDVF9MU1RNX0NPTUJJTkVEIiwiREVGQVVMVCIsIk9TRF9PTkxZIiwiQVVUT19PU0QiLCJBVVRPX09OTFkiLCJBVVRPIiwiU0lOR0xFX0NPTFVNTiIsIlNJTkdMRV9CTE9DS19WRVJUX1RFWFQiLCJTSU5HTEVfQkxPQ0siLCJTSU5HTEVfTElORSIsIlNJTkdMRV9XT1JEIiwiQ0lSQ0xFX1dPUkQiLCJTSU5HTEVfQ0hBUiIsIlNQQVJTRV9URVhUIiwiU1BBUlNFX1RFWFRfT1NEIiwiT0VNIiwiZGVmYXVsdE9FTSIsImxhbmdQYXRoIiwid29ya2VyQmxvYlVSTCIsImxvZ2dlciIsIkFGUiIsIkFNSCIsIkFSQSIsIkFTTSIsIkFaRSIsIkFaRV9DWVJMIiwiQkVMIiwiQkVOIiwiQk9EIiwiQk9TIiwiQlVMIiwiQ0FUIiwiQ0VCIiwiQ0VTIiwiQ0hJX1NJTSIsIkNISV9UUkEiLCJDSFIiLCJDWU0iLCJEQU4iLCJERVUiLCJEWk8iLCJFTEwiLCJFTkciLCJFTk0iLCJFUE8iLCJFU1QiLCJFVVMiLCJGQVMiLCJGSU4iLCJGUkEiLCJGUksiLCJGUk0iLCJHTEUiLCJHTEciLCJHUkMiLCJHVUoiLCJIQVQiLCJIRUIiLCJISU4iLCJIUlYiLCJIVU4iLCJJS1UiLCJJTkQiLCJJU0wiLCJJVEEiLCJJVEFfT0xEIiwiSkFWIiwiSlBOIiwiS0FOIiwiS0FUIiwiS0FUX09MRCIsIktBWiIsIktITSIsIktJUiIsIktPUiIsIktVUiIsIkxBTyIsIkxBVCIsIkxBViIsIkxJVCIsIk1BTCIsIk1BUiIsIk1LRCIsIk1MVCIsIk1TQSIsIk1ZQSIsIk5FUCIsIk5MRCIsIk5PUiIsIk9SSSIsIlBBTiIsIlBPTCIsIlBPUiIsIlBVUyIsIlJPTiIsIlJVUyIsIlNBTiIsIlNJTiIsIlNMSyIsIlNMViIsIlNQQSIsIlNQQV9PTEQiLCJTUUkiLCJTUlAiLCJTUlBfTEFUTiIsIlNXQSIsIlNXRSIsIlNZUiIsIlRBTSIsIlRFTCIsIlRHSyIsIlRHTCIsIlRIQSIsIlRJUiIsIlRVUiIsIlVJRyIsIlVLUiIsIlVSRCIsIlVaQiIsIlVaQl9DWVJMIiwiVklFIiwiWUlEIiwiZ2V0SWQiLCJqb2JDb3VudGVyIiwiX2lkIiwiYWN0aW9uIiwicGF5bG9hZCIsImNyZWF0ZUpvYiIsInNjaGVkdWxlckNvdW50ZXIiLCJ3b3JrZXJzIiwicnVubmluZ1dvcmtlcnMiLCJqb2JRdWV1ZSIsImdldFF1ZXVlTGVuIiwiZ2V0TnVtV29ya2VycyIsImRlcXVldWUiLCJ3SWRzIiwiam9iIiwidyIsInNoaWZ0IiwiYWRkV29ya2VyIiwiYWRkSm9iIiwid2lkIiwicmVzb2x2ZVBhdGhzIiwiY2lyY3VsYXJpemUiLCJkZWZhdWx0T3B0aW9ucyIsInNwYXduV29ya2VyIiwidGVybWluYXRlV29ya2VyIiwib25NZXNzYWdlIiwid29ya2VyQ291bnRlciIsIl9vcHRpb25zIiwiZXJyb3JIYW5kbGVyIiwicmVzb2x2ZXMiLCJyZWplY3RzIiwic2V0UmVzb2x2ZSIsInJlcyIsInNldFJlamVjdCIsInJlaiIsInN0YXJ0Sm9iIiwiam9iSWQiLCJ3b3JrZXJJZCIsIndyaXRlVGV4dCIsInBhdGgiLCJ0ZXh0IiwicmVhZFRleHQiLCJlbmNvZGluZyIsInJlbW92ZUZpbGUiLCJGUyIsIm9lbSIsInNldFBhcmFtZXRlcnMiLCJwYXJhbXMiLCJnZXRQREYiLCJ0ZXh0b25seSIsInN0YXR1cyIsImQiLCJmcm9tIiwidXNlckpvYklkIiwiY3JlYXRlU2NoZWR1bGVyIiwiVGVzc2VyYWN0IiwibGFuZ3VhZ2VzIiwiUFNNIiwic2V0TG9nZ2luZyIsInBhZ2UiLCJibG9ja3MiLCJwYXJhZ3JhcGhzIiwibGluZXMiLCJ3b3JkcyIsInN5bWJvbHMiLCJibG9jayIsInBhcmFncmFwaCIsImxpbmUiLCJ3b3JkIiwic3ltIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJwcmVmaXgiLCJjbnQiLCJyYW5kb20iLCJsb2dnaW5nIiwiX2xvZ2dpbmciLCJpc0Jyb3dzZXIiLCJyZXNvbHZlVVJMIiwicyIsImRlcGVuZGVuY2llcyIsIndvcmtlclBhdGgiLCJURVNTX0VOViIsImNvcmVQYXRoIiwic3Vic3RyaW5nIiwiV2ViQXNzZW1ibHkiLCJibHVlaW1wTG9hZEltYWdlIiwicmVhZEZyb21CbG9iT3JGaWxlIiwiY29kZSIsInJlYWRBc0FycmF5QnVmZmVyIiwiZml4T3JpZW50YXRpb25Gcm9tVXJsT3JCbG9iT3JGaWxlIiwidG9CbG9iIiwiZW5kc1dpdGgiLCJyZXNwIiwiYXJyYXlCdWZmZXIiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJ0YWdOYW1lIiwicG9zdGVyIiwiRmlsZSIsImhhbmRsZXIiLCJvbm1lc3NhZ2UiLCJwYWNrZXQiLCJwb3N0TWVzc2FnZSIsIldvcmtlciIsIm0iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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LENBWkQsQzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBN2QsTUFBTSxDQUFDQyxPQUFQLEdBQWtCNGQsTUFBRCxJQUFZO0FBQzNCQSxRQUFNLENBQUNLLFNBQVA7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBcUwsbURBQVMsQ0FBQzdMLFNBQVYsQ0FBb0Isd0JBQXBCLEVBQThDLEtBQTlDLEVBQXFEO0FBQ25EK0IsUUFBTSxFQUFFLGdCQUFDK00sQ0FBRDtBQUFBLFdBQU85b0IsT0FBTyxDQUFDQyxHQUFSLENBQVk2b0IsQ0FBWixDQUFQO0FBQUE7QUFEMkMsQ0FBckQsRUFFR2hsQixJQUZILENBRVEsZ0JBQXdCO0FBQUEsTUFBYmdoQixJQUFhLFFBQXJCM2lCLElBQXFCLENBQWIyaUIsSUFBYTtBQUM5QjlrQixTQUFPLENBQUNDLEdBQVIsQ0FBWTZrQixJQUFaO0FBQ0QsQ0FKRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsIi8qIGdsb2JhbCBtb2R1bGUsIHJlcXVpcmUgKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xvYWQtaW1hZ2UnKVxuXG5yZXF1aXJlKCcuL2xvYWQtaW1hZ2Utc2NhbGUnKVxucmVxdWlyZSgnLi9sb2FkLWltYWdlLW1ldGEnKVxucmVxdWlyZSgnLi9sb2FkLWltYWdlLWZldGNoJylcbnJlcXVpcmUoJy4vbG9hZC1pbWFnZS1leGlmJylcbnJlcXVpcmUoJy4vbG9hZC1pbWFnZS1leGlmLW1hcCcpXG5yZXF1aXJlKCcuL2xvYWQtaW1hZ2UtaXB0YycpXG5yZXF1aXJlKCcuL2xvYWQtaW1hZ2UtaXB0Yy1tYXAnKVxucmVxdWlyZSgnLi9sb2FkLWltYWdlLW9yaWVudGF0aW9uJylcbiIsIi8qXG4gKiBKYXZhU2NyaXB0IExvYWQgSW1hZ2UgRXhpZiBNYXBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuICpcbiAqIENvcHlyaWdodCAyMDEzLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogRXhpZiB0YWdzIG1hcHBpbmcgYmFzZWQgb25cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qc2VpZGVsaW4vZXhpZi1qc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgQU1EIG1vZHVsZTpcbiAgICBkZWZpbmUoWycuL2xvYWQtaW1hZ2UnLCAnLi9sb2FkLWltYWdlLWV4aWYnXSwgZmFjdG9yeSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnLi9sb2FkLWltYWdlJyksIHJlcXVpcmUoJy4vbG9hZC1pbWFnZS1leGlmJykpXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzOlxuICAgIGZhY3Rvcnkod2luZG93LmxvYWRJbWFnZSlcbiAgfVxufSkoZnVuY3Rpb24gKGxvYWRJbWFnZSkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgRXhpZk1hcFByb3RvID0gbG9hZEltYWdlLkV4aWZNYXAucHJvdG90eXBlXG5cbiAgRXhpZk1hcFByb3RvLnRhZ3MgPSB7XG4gICAgLy8gPT09PT09PT09PT09PT09PT1cbiAgICAvLyBUSUZGIHRhZ3MgKElGRDApOlxuICAgIC8vID09PT09PT09PT09PT09PT09XG4gICAgMHgwMTAwOiAnSW1hZ2VXaWR0aCcsXG4gICAgMHgwMTAxOiAnSW1hZ2VIZWlnaHQnLFxuICAgIDB4MDEwMjogJ0JpdHNQZXJTYW1wbGUnLFxuICAgIDB4MDEwMzogJ0NvbXByZXNzaW9uJyxcbiAgICAweDAxMDY6ICdQaG90b21ldHJpY0ludGVycHJldGF0aW9uJyxcbiAgICAweDAxMTI6ICdPcmllbnRhdGlvbicsXG4gICAgMHgwMTE1OiAnU2FtcGxlc1BlclBpeGVsJyxcbiAgICAweDAxMWM6ICdQbGFuYXJDb25maWd1cmF0aW9uJyxcbiAgICAweDAyMTI6ICdZQ2JDclN1YlNhbXBsaW5nJyxcbiAgICAweDAyMTM6ICdZQ2JDclBvc2l0aW9uaW5nJyxcbiAgICAweDAxMWE6ICdYUmVzb2x1dGlvbicsXG4gICAgMHgwMTFiOiAnWVJlc29sdXRpb24nLFxuICAgIDB4MDEyODogJ1Jlc29sdXRpb25Vbml0JyxcbiAgICAweDAxMTE6ICdTdHJpcE9mZnNldHMnLFxuICAgIDB4MDExNjogJ1Jvd3NQZXJTdHJpcCcsXG4gICAgMHgwMTE3OiAnU3RyaXBCeXRlQ291bnRzJyxcbiAgICAweDAyMDE6ICdKUEVHSW50ZXJjaGFuZ2VGb3JtYXQnLFxuICAgIDB4MDIwMjogJ0pQRUdJbnRlcmNoYW5nZUZvcm1hdExlbmd0aCcsXG4gICAgMHgwMTJkOiAnVHJhbnNmZXJGdW5jdGlvbicsXG4gICAgMHgwMTNlOiAnV2hpdGVQb2ludCcsXG4gICAgMHgwMTNmOiAnUHJpbWFyeUNocm9tYXRpY2l0aWVzJyxcbiAgICAweDAyMTE6ICdZQ2JDckNvZWZmaWNpZW50cycsXG4gICAgMHgwMjE0OiAnUmVmZXJlbmNlQmxhY2tXaGl0ZScsXG4gICAgMHgwMTMyOiAnRGF0ZVRpbWUnLFxuICAgIDB4MDEwZTogJ0ltYWdlRGVzY3JpcHRpb24nLFxuICAgIDB4MDEwZjogJ01ha2UnLFxuICAgIDB4MDExMDogJ01vZGVsJyxcbiAgICAweDAxMzE6ICdTb2Z0d2FyZScsXG4gICAgMHgwMTNiOiAnQXJ0aXN0JyxcbiAgICAweDgyOTg6ICdDb3B5cmlnaHQnLFxuICAgIDB4ODc2OToge1xuICAgICAgLy8gRXhpZklGRFBvaW50ZXJcbiAgICAgIDB4OTAwMDogJ0V4aWZWZXJzaW9uJywgLy8gRVhJRiB2ZXJzaW9uXG4gICAgICAweGEwMDA6ICdGbGFzaHBpeFZlcnNpb24nLCAvLyBGbGFzaHBpeCBmb3JtYXQgdmVyc2lvblxuICAgICAgMHhhMDAxOiAnQ29sb3JTcGFjZScsIC8vIENvbG9yIHNwYWNlIGluZm9ybWF0aW9uIHRhZ1xuICAgICAgMHhhMDAyOiAnUGl4ZWxYRGltZW5zaW9uJywgLy8gVmFsaWQgd2lkdGggb2YgbWVhbmluZ2Z1bCBpbWFnZVxuICAgICAgMHhhMDAzOiAnUGl4ZWxZRGltZW5zaW9uJywgLy8gVmFsaWQgaGVpZ2h0IG9mIG1lYW5pbmdmdWwgaW1hZ2VcbiAgICAgIDB4YTUwMDogJ0dhbW1hJyxcbiAgICAgIDB4OTEwMTogJ0NvbXBvbmVudHNDb25maWd1cmF0aW9uJywgLy8gSW5mb3JtYXRpb24gYWJvdXQgY2hhbm5lbHNcbiAgICAgIDB4OTEwMjogJ0NvbXByZXNzZWRCaXRzUGVyUGl4ZWwnLCAvLyBDb21wcmVzc2VkIGJpdHMgcGVyIHBpeGVsXG4gICAgICAweDkyN2M6ICdNYWtlck5vdGUnLCAvLyBBbnkgZGVzaXJlZCBpbmZvcm1hdGlvbiB3cml0dGVuIGJ5IHRoZSBtYW51ZmFjdHVyZXJcbiAgICAgIDB4OTI4NjogJ1VzZXJDb21tZW50JywgLy8gQ29tbWVudHMgYnkgdXNlclxuICAgICAgMHhhMDA0OiAnUmVsYXRlZFNvdW5kRmlsZScsIC8vIE5hbWUgb2YgcmVsYXRlZCBzb3VuZCBmaWxlXG4gICAgICAweDkwMDM6ICdEYXRlVGltZU9yaWdpbmFsJywgLy8gRGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBvcmlnaW5hbCBpbWFnZSB3YXMgZ2VuZXJhdGVkXG4gICAgICAweDkwMDQ6ICdEYXRlVGltZURpZ2l0aXplZCcsIC8vIERhdGUgYW5kIHRpbWUgd2hlbiB0aGUgaW1hZ2Ugd2FzIHN0b3JlZCBkaWdpdGFsbHlcbiAgICAgIDB4OTI5MDogJ1N1YlNlY1RpbWUnLCAvLyBGcmFjdGlvbnMgb2Ygc2Vjb25kcyBmb3IgRGF0ZVRpbWVcbiAgICAgIDB4OTI5MTogJ1N1YlNlY1RpbWVPcmlnaW5hbCcsIC8vIEZyYWN0aW9ucyBvZiBzZWNvbmRzIGZvciBEYXRlVGltZU9yaWdpbmFsXG4gICAgICAweDkyOTI6ICdTdWJTZWNUaW1lRGlnaXRpemVkJywgLy8gRnJhY3Rpb25zIG9mIHNlY29uZHMgZm9yIERhdGVUaW1lRGlnaXRpemVkXG4gICAgICAweDgyOWE6ICdFeHBvc3VyZVRpbWUnLCAvLyBFeHBvc3VyZSB0aW1lIChpbiBzZWNvbmRzKVxuICAgICAgMHg4MjlkOiAnRk51bWJlcicsXG4gICAgICAweDg4MjI6ICdFeHBvc3VyZVByb2dyYW0nLCAvLyBFeHBvc3VyZSBwcm9ncmFtXG4gICAgICAweDg4MjQ6ICdTcGVjdHJhbFNlbnNpdGl2aXR5JywgLy8gU3BlY3RyYWwgc2Vuc2l0aXZpdHlcbiAgICAgIDB4ODgyNzogJ1Bob3RvZ3JhcGhpY1NlbnNpdGl2aXR5JywgLy8gRVhJRiAyLjMsIElTT1NwZWVkUmF0aW5ncyBpbiBFWElGIDIuMlxuICAgICAgMHg4ODI4OiAnT0VDRicsIC8vIE9wdG9lbGVjdHJpYyBjb252ZXJzaW9uIGZhY3RvclxuICAgICAgMHg4ODMwOiAnU2Vuc2l0aXZpdHlUeXBlJyxcbiAgICAgIDB4ODgzMTogJ1N0YW5kYXJkT3V0cHV0U2Vuc2l0aXZpdHknLFxuICAgICAgMHg4ODMyOiAnUmVjb21tZW5kZWRFeHBvc3VyZUluZGV4JyxcbiAgICAgIDB4ODgzMzogJ0lTT1NwZWVkJyxcbiAgICAgIDB4ODgzNDogJ0lTT1NwZWVkTGF0aXR1ZGV5eXknLFxuICAgICAgMHg4ODM1OiAnSVNPU3BlZWRMYXRpdHVkZXp6eicsXG4gICAgICAweDkyMDE6ICdTaHV0dGVyU3BlZWRWYWx1ZScsIC8vIFNodXR0ZXIgc3BlZWRcbiAgICAgIDB4OTIwMjogJ0FwZXJ0dXJlVmFsdWUnLCAvLyBMZW5zIGFwZXJ0dXJlXG4gICAgICAweDkyMDM6ICdCcmlnaHRuZXNzVmFsdWUnLCAvLyBWYWx1ZSBvZiBicmlnaHRuZXNzXG4gICAgICAweDkyMDQ6ICdFeHBvc3VyZUJpYXMnLCAvLyBFeHBvc3VyZSBiaWFzXG4gICAgICAweDkyMDU6ICdNYXhBcGVydHVyZVZhbHVlJywgLy8gU21hbGxlc3QgRiBudW1iZXIgb2YgbGVuc1xuICAgICAgMHg5MjA2OiAnU3ViamVjdERpc3RhbmNlJywgLy8gRGlzdGFuY2UgdG8gc3ViamVjdCBpbiBtZXRlcnNcbiAgICAgIDB4OTIwNzogJ01ldGVyaW5nTW9kZScsIC8vIE1ldGVyaW5nIG1vZGVcbiAgICAgIDB4OTIwODogJ0xpZ2h0U291cmNlJywgLy8gS2luZCBvZiBsaWdodCBzb3VyY2VcbiAgICAgIDB4OTIwOTogJ0ZsYXNoJywgLy8gRmxhc2ggc3RhdHVzXG4gICAgICAweDkyMTQ6ICdTdWJqZWN0QXJlYScsIC8vIExvY2F0aW9uIGFuZCBhcmVhIG9mIG1haW4gc3ViamVjdFxuICAgICAgMHg5MjBhOiAnRm9jYWxMZW5ndGgnLCAvLyBGb2NhbCBsZW5ndGggb2YgdGhlIGxlbnMgaW4gbW1cbiAgICAgIDB4YTIwYjogJ0ZsYXNoRW5lcmd5JywgLy8gU3Ryb2JlIGVuZXJneSBpbiBCQ1BTXG4gICAgICAweGEyMGM6ICdTcGF0aWFsRnJlcXVlbmN5UmVzcG9uc2UnLFxuICAgICAgMHhhMjBlOiAnRm9jYWxQbGFuZVhSZXNvbHV0aW9uJywgLy8gTnVtYmVyIG9mIHBpeGVscyBpbiB3aWR0aCBkaXJlY3Rpb24gcGVyIEZQUlVuaXRcbiAgICAgIDB4YTIwZjogJ0ZvY2FsUGxhbmVZUmVzb2x1dGlvbicsIC8vIE51bWJlciBvZiBwaXhlbHMgaW4gaGVpZ2h0IGRpcmVjdGlvbiBwZXIgRlBSVW5pdFxuICAgICAgMHhhMjEwOiAnRm9jYWxQbGFuZVJlc29sdXRpb25Vbml0JywgLy8gVW5pdCBmb3IgbWVhc3VyaW5nIHRoZSBmb2NhbCBwbGFuZSByZXNvbHV0aW9uXG4gICAgICAweGEyMTQ6ICdTdWJqZWN0TG9jYXRpb24nLCAvLyBMb2NhdGlvbiBvZiBzdWJqZWN0IGluIGltYWdlXG4gICAgICAweGEyMTU6ICdFeHBvc3VyZUluZGV4JywgLy8gRXhwb3N1cmUgaW5kZXggc2VsZWN0ZWQgb24gY2FtZXJhXG4gICAgICAweGEyMTc6ICdTZW5zaW5nTWV0aG9kJywgLy8gSW1hZ2Ugc2Vuc29yIHR5cGVcbiAgICAgIDB4YTMwMDogJ0ZpbGVTb3VyY2UnLCAvLyBJbWFnZSBzb3VyY2UgKDMgPT0gRFNDKVxuICAgICAgMHhhMzAxOiAnU2NlbmVUeXBlJywgLy8gU2NlbmUgdHlwZSAoMSA9PSBkaXJlY3RseSBwaG90b2dyYXBoZWQpXG4gICAgICAweGEzMDI6ICdDRkFQYXR0ZXJuJywgLy8gQ29sb3IgZmlsdGVyIGFycmF5IGdlb21ldHJpYyBwYXR0ZXJuXG4gICAgICAweGE0MDE6ICdDdXN0b21SZW5kZXJlZCcsIC8vIFNwZWNpYWwgcHJvY2Vzc2luZ1xuICAgICAgMHhhNDAyOiAnRXhwb3N1cmVNb2RlJywgLy8gRXhwb3N1cmUgbW9kZVxuICAgICAgMHhhNDAzOiAnV2hpdGVCYWxhbmNlJywgLy8gMSA9IGF1dG8gd2hpdGUgYmFsYW5jZSwgMiA9IG1hbnVhbFxuICAgICAgMHhhNDA0OiAnRGlnaXRhbFpvb21SYXRpbycsIC8vIERpZ2l0YWwgem9vbSByYXRpb1xuICAgICAgMHhhNDA1OiAnRm9jYWxMZW5ndGhJbjM1bW1GaWxtJyxcbiAgICAgIDB4YTQwNjogJ1NjZW5lQ2FwdHVyZVR5cGUnLCAvLyBUeXBlIG9mIHNjZW5lXG4gICAgICAweGE0MDc6ICdHYWluQ29udHJvbCcsIC8vIERlZ3JlZSBvZiBvdmVyYWxsIGltYWdlIGdhaW4gYWRqdXN0bWVudFxuICAgICAgMHhhNDA4OiAnQ29udHJhc3QnLCAvLyBEaXJlY3Rpb24gb2YgY29udHJhc3QgcHJvY2Vzc2luZyBhcHBsaWVkIGJ5IGNhbWVyYVxuICAgICAgMHhhNDA5OiAnU2F0dXJhdGlvbicsIC8vIERpcmVjdGlvbiBvZiBzYXR1cmF0aW9uIHByb2Nlc3NpbmcgYXBwbGllZCBieSBjYW1lcmFcbiAgICAgIDB4YTQwYTogJ1NoYXJwbmVzcycsIC8vIERpcmVjdGlvbiBvZiBzaGFycG5lc3MgcHJvY2Vzc2luZyBhcHBsaWVkIGJ5IGNhbWVyYVxuICAgICAgMHhhNDBiOiAnRGV2aWNlU2V0dGluZ0Rlc2NyaXB0aW9uJyxcbiAgICAgIDB4YTQwYzogJ1N1YmplY3REaXN0YW5jZVJhbmdlJywgLy8gRGlzdGFuY2UgdG8gc3ViamVjdFxuICAgICAgMHhhNDIwOiAnSW1hZ2VVbmlxdWVJRCcsIC8vIElkZW50aWZpZXIgYXNzaWduZWQgdW5pcXVlbHkgdG8gZWFjaCBpbWFnZVxuICAgICAgMHhhNDMwOiAnQ2FtZXJhT3duZXJOYW1lJyxcbiAgICAgIDB4YTQzMTogJ0JvZHlTZXJpYWxOdW1iZXInLFxuICAgICAgMHhhNDMyOiAnTGVuc1NwZWNpZmljYXRpb24nLFxuICAgICAgMHhhNDMzOiAnTGVuc01ha2UnLFxuICAgICAgMHhhNDM0OiAnTGVuc01vZGVsJyxcbiAgICAgIDB4YTQzNTogJ0xlbnNTZXJpYWxOdW1iZXInXG4gICAgfSxcbiAgICAweDg4MjU6IHtcbiAgICAgIC8vIEdQU0luZm9JRkRQb2ludGVyXG4gICAgICAweDAwMDA6ICdHUFNWZXJzaW9uSUQnLFxuICAgICAgMHgwMDAxOiAnR1BTTGF0aXR1ZGVSZWYnLFxuICAgICAgMHgwMDAyOiAnR1BTTGF0aXR1ZGUnLFxuICAgICAgMHgwMDAzOiAnR1BTTG9uZ2l0dWRlUmVmJyxcbiAgICAgIDB4MDAwNDogJ0dQU0xvbmdpdHVkZScsXG4gICAgICAweDAwMDU6ICdHUFNBbHRpdHVkZVJlZicsXG4gICAgICAweDAwMDY6ICdHUFNBbHRpdHVkZScsXG4gICAgICAweDAwMDc6ICdHUFNUaW1lU3RhbXAnLFxuICAgICAgMHgwMDA4OiAnR1BTU2F0ZWxsaXRlcycsXG4gICAgICAweDAwMDk6ICdHUFNTdGF0dXMnLFxuICAgICAgMHgwMDBhOiAnR1BTTWVhc3VyZU1vZGUnLFxuICAgICAgMHgwMDBiOiAnR1BTRE9QJyxcbiAgICAgIDB4MDAwYzogJ0dQU1NwZWVkUmVmJyxcbiAgICAgIDB4MDAwZDogJ0dQU1NwZWVkJyxcbiAgICAgIDB4MDAwZTogJ0dQU1RyYWNrUmVmJyxcbiAgICAgIDB4MDAwZjogJ0dQU1RyYWNrJyxcbiAgICAgIDB4MDAxMDogJ0dQU0ltZ0RpcmVjdGlvblJlZicsXG4gICAgICAweDAwMTE6ICdHUFNJbWdEaXJlY3Rpb24nLFxuICAgICAgMHgwMDEyOiAnR1BTTWFwRGF0dW0nLFxuICAgICAgMHgwMDEzOiAnR1BTRGVzdExhdGl0dWRlUmVmJyxcbiAgICAgIDB4MDAxNDogJ0dQU0Rlc3RMYXRpdHVkZScsXG4gICAgICAweDAwMTU6ICdHUFNEZXN0TG9uZ2l0dWRlUmVmJyxcbiAgICAgIDB4MDAxNjogJ0dQU0Rlc3RMb25naXR1ZGUnLFxuICAgICAgMHgwMDE3OiAnR1BTRGVzdEJlYXJpbmdSZWYnLFxuICAgICAgMHgwMDE4OiAnR1BTRGVzdEJlYXJpbmcnLFxuICAgICAgMHgwMDE5OiAnR1BTRGVzdERpc3RhbmNlUmVmJyxcbiAgICAgIDB4MDAxYTogJ0dQU0Rlc3REaXN0YW5jZScsXG4gICAgICAweDAwMWI6ICdHUFNQcm9jZXNzaW5nTWV0aG9kJyxcbiAgICAgIDB4MDAxYzogJ0dQU0FyZWFJbmZvcm1hdGlvbicsXG4gICAgICAweDAwMWQ6ICdHUFNEYXRlU3RhbXAnLFxuICAgICAgMHgwMDFlOiAnR1BTRGlmZmVyZW50aWFsJyxcbiAgICAgIDB4MDAxZjogJ0dQU0hQb3NpdGlvbmluZ0Vycm9yJ1xuICAgIH0sXG4gICAgMHhhMDA1OiB7XG4gICAgICAvLyBJbnRlcm9wZXJhYmlsaXR5SUZEUG9pbnRlclxuICAgICAgMHgwMDAxOiAnSW50ZXJvcGVyYWJpbGl0eUluZGV4J1xuICAgIH1cbiAgfVxuXG4gIEV4aWZNYXBQcm90by5zdHJpbmdWYWx1ZXMgPSB7XG4gICAgRXhwb3N1cmVQcm9ncmFtOiB7XG4gICAgICAwOiAnVW5kZWZpbmVkJyxcbiAgICAgIDE6ICdNYW51YWwnLFxuICAgICAgMjogJ05vcm1hbCBwcm9ncmFtJyxcbiAgICAgIDM6ICdBcGVydHVyZSBwcmlvcml0eScsXG4gICAgICA0OiAnU2h1dHRlciBwcmlvcml0eScsXG4gICAgICA1OiAnQ3JlYXRpdmUgcHJvZ3JhbScsXG4gICAgICA2OiAnQWN0aW9uIHByb2dyYW0nLFxuICAgICAgNzogJ1BvcnRyYWl0IG1vZGUnLFxuICAgICAgODogJ0xhbmRzY2FwZSBtb2RlJ1xuICAgIH0sXG4gICAgTWV0ZXJpbmdNb2RlOiB7XG4gICAgICAwOiAnVW5rbm93bicsXG4gICAgICAxOiAnQXZlcmFnZScsXG4gICAgICAyOiAnQ2VudGVyV2VpZ2h0ZWRBdmVyYWdlJyxcbiAgICAgIDM6ICdTcG90JyxcbiAgICAgIDQ6ICdNdWx0aVNwb3QnLFxuICAgICAgNTogJ1BhdHRlcm4nLFxuICAgICAgNjogJ1BhcnRpYWwnLFxuICAgICAgMjU1OiAnT3RoZXInXG4gICAgfSxcbiAgICBMaWdodFNvdXJjZToge1xuICAgICAgMDogJ1Vua25vd24nLFxuICAgICAgMTogJ0RheWxpZ2h0JyxcbiAgICAgIDI6ICdGbHVvcmVzY2VudCcsXG4gICAgICAzOiAnVHVuZ3N0ZW4gKGluY2FuZGVzY2VudCBsaWdodCknLFxuICAgICAgNDogJ0ZsYXNoJyxcbiAgICAgIDk6ICdGaW5lIHdlYXRoZXInLFxuICAgICAgMTA6ICdDbG91ZHkgd2VhdGhlcicsXG4gICAgICAxMTogJ1NoYWRlJyxcbiAgICAgIDEyOiAnRGF5bGlnaHQgZmx1b3Jlc2NlbnQgKEQgNTcwMCAtIDcxMDBLKScsXG4gICAgICAxMzogJ0RheSB3aGl0ZSBmbHVvcmVzY2VudCAoTiA0NjAwIC0gNTQwMEspJyxcbiAgICAgIDE0OiAnQ29vbCB3aGl0ZSBmbHVvcmVzY2VudCAoVyAzOTAwIC0gNDUwMEspJyxcbiAgICAgIDE1OiAnV2hpdGUgZmx1b3Jlc2NlbnQgKFdXIDMyMDAgLSAzNzAwSyknLFxuICAgICAgMTc6ICdTdGFuZGFyZCBsaWdodCBBJyxcbiAgICAgIDE4OiAnU3RhbmRhcmQgbGlnaHQgQicsXG4gICAgICAxOTogJ1N0YW5kYXJkIGxpZ2h0IEMnLFxuICAgICAgMjA6ICdENTUnLFxuICAgICAgMjE6ICdENjUnLFxuICAgICAgMjI6ICdENzUnLFxuICAgICAgMjM6ICdENTAnLFxuICAgICAgMjQ6ICdJU08gc3R1ZGlvIHR1bmdzdGVuJyxcbiAgICAgIDI1NTogJ090aGVyJ1xuICAgIH0sXG4gICAgRmxhc2g6IHtcbiAgICAgIDB4MDAwMDogJ0ZsYXNoIGRpZCBub3QgZmlyZScsXG4gICAgICAweDAwMDE6ICdGbGFzaCBmaXJlZCcsXG4gICAgICAweDAwMDU6ICdTdHJvYmUgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCcsXG4gICAgICAweDAwMDc6ICdTdHJvYmUgcmV0dXJuIGxpZ2h0IGRldGVjdGVkJyxcbiAgICAgIDB4MDAwOTogJ0ZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUnLFxuICAgICAgMHgwMDBkOiAnRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCcsXG4gICAgICAweDAwMGY6ICdGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWQnLFxuICAgICAgMHgwMDEwOiAnRmxhc2ggZGlkIG5vdCBmaXJlLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUnLFxuICAgICAgMHgwMDE4OiAnRmxhc2ggZGlkIG5vdCBmaXJlLCBhdXRvIG1vZGUnLFxuICAgICAgMHgwMDE5OiAnRmxhc2ggZmlyZWQsIGF1dG8gbW9kZScsXG4gICAgICAweDAwMWQ6ICdGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkJyxcbiAgICAgIDB4MDAxZjogJ0ZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZCcsXG4gICAgICAweDAwMjA6ICdObyBmbGFzaCBmdW5jdGlvbicsXG4gICAgICAweDAwNDE6ICdGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZScsXG4gICAgICAweDAwNDU6ICdGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCcsXG4gICAgICAweDAwNDc6ICdGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkJyxcbiAgICAgIDB4MDA0OTogJ0ZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGUnLFxuICAgICAgMHgwMDRkOiAnRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZCcsXG4gICAgICAweDAwNGY6ICdGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWQnLFxuICAgICAgMHgwMDU5OiAnRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZScsXG4gICAgICAweDAwNWQ6ICdGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlJyxcbiAgICAgIDB4MDA1ZjogJ0ZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSdcbiAgICB9LFxuICAgIFNlbnNpbmdNZXRob2Q6IHtcbiAgICAgIDE6ICdVbmRlZmluZWQnLFxuICAgICAgMjogJ09uZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yJyxcbiAgICAgIDM6ICdUd28tY2hpcCBjb2xvciBhcmVhIHNlbnNvcicsXG4gICAgICA0OiAnVGhyZWUtY2hpcCBjb2xvciBhcmVhIHNlbnNvcicsXG4gICAgICA1OiAnQ29sb3Igc2VxdWVudGlhbCBhcmVhIHNlbnNvcicsXG4gICAgICA3OiAnVHJpbGluZWFyIHNlbnNvcicsXG4gICAgICA4OiAnQ29sb3Igc2VxdWVudGlhbCBsaW5lYXIgc2Vuc29yJ1xuICAgIH0sXG4gICAgU2NlbmVDYXB0dXJlVHlwZToge1xuICAgICAgMDogJ1N0YW5kYXJkJyxcbiAgICAgIDE6ICdMYW5kc2NhcGUnLFxuICAgICAgMjogJ1BvcnRyYWl0JyxcbiAgICAgIDM6ICdOaWdodCBzY2VuZSdcbiAgICB9LFxuICAgIFNjZW5lVHlwZToge1xuICAgICAgMTogJ0RpcmVjdGx5IHBob3RvZ3JhcGhlZCdcbiAgICB9LFxuICAgIEN1c3RvbVJlbmRlcmVkOiB7XG4gICAgICAwOiAnTm9ybWFsIHByb2Nlc3MnLFxuICAgICAgMTogJ0N1c3RvbSBwcm9jZXNzJ1xuICAgIH0sXG4gICAgV2hpdGVCYWxhbmNlOiB7XG4gICAgICAwOiAnQXV0byB3aGl0ZSBiYWxhbmNlJyxcbiAgICAgIDE6ICdNYW51YWwgd2hpdGUgYmFsYW5jZSdcbiAgICB9LFxuICAgIEdhaW5Db250cm9sOiB7XG4gICAgICAwOiAnTm9uZScsXG4gICAgICAxOiAnTG93IGdhaW4gdXAnLFxuICAgICAgMjogJ0hpZ2ggZ2FpbiB1cCcsXG4gICAgICAzOiAnTG93IGdhaW4gZG93bicsXG4gICAgICA0OiAnSGlnaCBnYWluIGRvd24nXG4gICAgfSxcbiAgICBDb250cmFzdDoge1xuICAgICAgMDogJ05vcm1hbCcsXG4gICAgICAxOiAnU29mdCcsXG4gICAgICAyOiAnSGFyZCdcbiAgICB9LFxuICAgIFNhdHVyYXRpb246IHtcbiAgICAgIDA6ICdOb3JtYWwnLFxuICAgICAgMTogJ0xvdyBzYXR1cmF0aW9uJyxcbiAgICAgIDI6ICdIaWdoIHNhdHVyYXRpb24nXG4gICAgfSxcbiAgICBTaGFycG5lc3M6IHtcbiAgICAgIDA6ICdOb3JtYWwnLFxuICAgICAgMTogJ1NvZnQnLFxuICAgICAgMjogJ0hhcmQnXG4gICAgfSxcbiAgICBTdWJqZWN0RGlzdGFuY2VSYW5nZToge1xuICAgICAgMDogJ1Vua25vd24nLFxuICAgICAgMTogJ01hY3JvJyxcbiAgICAgIDI6ICdDbG9zZSB2aWV3JyxcbiAgICAgIDM6ICdEaXN0YW50IHZpZXcnXG4gICAgfSxcbiAgICBGaWxlU291cmNlOiB7XG4gICAgICAzOiAnRFNDJ1xuICAgIH0sXG4gICAgQ29tcG9uZW50c0NvbmZpZ3VyYXRpb246IHtcbiAgICAgIDA6ICcnLFxuICAgICAgMTogJ1knLFxuICAgICAgMjogJ0NiJyxcbiAgICAgIDM6ICdDcicsXG4gICAgICA0OiAnUicsXG4gICAgICA1OiAnRycsXG4gICAgICA2OiAnQidcbiAgICB9LFxuICAgIE9yaWVudGF0aW9uOiB7XG4gICAgICAxOiAndG9wLWxlZnQnLFxuICAgICAgMjogJ3RvcC1yaWdodCcsXG4gICAgICAzOiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgIDQ6ICdib3R0b20tbGVmdCcsXG4gICAgICA1OiAnbGVmdC10b3AnLFxuICAgICAgNjogJ3JpZ2h0LXRvcCcsXG4gICAgICA3OiAncmlnaHQtYm90dG9tJyxcbiAgICAgIDg6ICdsZWZ0LWJvdHRvbSdcbiAgICB9XG4gIH1cblxuICBFeGlmTWFwUHJvdG8uZ2V0VGV4dCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQobmFtZSlcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ0xpZ2h0U291cmNlJzpcbiAgICAgIGNhc2UgJ0ZsYXNoJzpcbiAgICAgIGNhc2UgJ01ldGVyaW5nTW9kZSc6XG4gICAgICBjYXNlICdFeHBvc3VyZVByb2dyYW0nOlxuICAgICAgY2FzZSAnU2Vuc2luZ01ldGhvZCc6XG4gICAgICBjYXNlICdTY2VuZUNhcHR1cmVUeXBlJzpcbiAgICAgIGNhc2UgJ1NjZW5lVHlwZSc6XG4gICAgICBjYXNlICdDdXN0b21SZW5kZXJlZCc6XG4gICAgICBjYXNlICdXaGl0ZUJhbGFuY2UnOlxuICAgICAgY2FzZSAnR2FpbkNvbnRyb2wnOlxuICAgICAgY2FzZSAnQ29udHJhc3QnOlxuICAgICAgY2FzZSAnU2F0dXJhdGlvbic6XG4gICAgICBjYXNlICdTaGFycG5lc3MnOlxuICAgICAgY2FzZSAnU3ViamVjdERpc3RhbmNlUmFuZ2UnOlxuICAgICAgY2FzZSAnRmlsZVNvdXJjZSc6XG4gICAgICBjYXNlICdPcmllbnRhdGlvbic6XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1ZhbHVlc1tuYW1lXVt2YWx1ZV1cbiAgICAgIGNhc2UgJ0V4aWZWZXJzaW9uJzpcbiAgICAgIGNhc2UgJ0ZsYXNocGl4VmVyc2lvbic6XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVyblxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdLCB2YWx1ZVszXSlcbiAgICAgIGNhc2UgJ0NvbXBvbmVudHNDb25maWd1cmF0aW9uJzpcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy5zdHJpbmdWYWx1ZXNbbmFtZV1bdmFsdWVbMF1dICtcbiAgICAgICAgICB0aGlzLnN0cmluZ1ZhbHVlc1tuYW1lXVt2YWx1ZVsxXV0gK1xuICAgICAgICAgIHRoaXMuc3RyaW5nVmFsdWVzW25hbWVdW3ZhbHVlWzJdXSArXG4gICAgICAgICAgdGhpcy5zdHJpbmdWYWx1ZXNbbmFtZV1bdmFsdWVbM11dXG4gICAgICAgIClcbiAgICAgIGNhc2UgJ0dQU1ZlcnNpb25JRCc6XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVyblxuICAgICAgICByZXR1cm4gdmFsdWVbMF0gKyAnLicgKyB2YWx1ZVsxXSArICcuJyArIHZhbHVlWzJdICsgJy4nICsgdmFsdWVbM11cbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIEV4aWZNYXBQcm90by5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hcCA9IHt9XG4gICAgdmFyIHByb3BcbiAgICB2YXIgb2JqXG4gICAgdmFyIG5hbWVcbiAgICBmb3IgKHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBwcm9wKSkge1xuICAgICAgICBvYmogPSB0aGlzW3Byb3BdXG4gICAgICAgIGlmIChvYmogJiYgb2JqLmdldEFsbCkge1xuICAgICAgICAgIG1hcFt0aGlzLnByaXZhdGVJRkRzW3Byb3BdLm5hbWVdID0gb2JqLmdldEFsbCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZSA9IHRoaXMudGFnc1twcm9wXVxuICAgICAgICAgIGlmIChuYW1lKSBtYXBbbmFtZV0gPSB0aGlzLmdldFRleHQobmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwXG4gIH1cblxuICBFeGlmTWFwUHJvdG8uZ2V0TmFtZSA9IGZ1bmN0aW9uICh0YWdDb2RlKSB7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnRhZ3NbdGFnQ29kZV1cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSByZXR1cm4gdGhpcy5wcml2YXRlSUZEc1t0YWdDb2RlXS5uYW1lXG4gICAgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIC8vIEV4dGVuZCB0aGUgbWFwIG9mIHRhZyBuYW1lcyB0byB0YWcgY29kZXM6XG4gIDsoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0YWdzID0gRXhpZk1hcFByb3RvLnRhZ3NcbiAgICB2YXIgcHJvcFxuICAgIHZhciBwcml2YXRlSUZEXG4gICAgdmFyIHN1YlRhZ3NcbiAgICAvLyBNYXAgdGhlIHRhZyBuYW1lcyB0byB0YWdzOlxuICAgIGZvciAocHJvcCBpbiB0YWdzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhZ3MsIHByb3ApKSB7XG4gICAgICAgIHByaXZhdGVJRkQgPSBFeGlmTWFwUHJvdG8ucHJpdmF0ZUlGRHNbcHJvcF1cbiAgICAgICAgaWYgKHByaXZhdGVJRkQpIHtcbiAgICAgICAgICBzdWJUYWdzID0gdGFnc1twcm9wXVxuICAgICAgICAgIGZvciAocHJvcCBpbiBzdWJUYWdzKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN1YlRhZ3MsIHByb3ApKSB7XG4gICAgICAgICAgICAgIHByaXZhdGVJRkQubWFwW3N1YlRhZ3NbcHJvcF1dID0gTnVtYmVyKHByb3ApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEV4aWZNYXBQcm90by5tYXBbdGFnc1twcm9wXV0gPSBOdW1iZXIocHJvcClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxufSlcbiIsIi8qXG4gKiBKYXZhU2NyaXB0IExvYWQgSW1hZ2UgRXhpZiBQYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuICpcbiAqIENvcHlyaWdodCAyMDEzLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUsIERhdGFWaWV3ICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCdcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBBTUQgbW9kdWxlOlxuICAgIGRlZmluZShbJy4vbG9hZC1pbWFnZScsICcuL2xvYWQtaW1hZ2UtbWV0YSddLCBmYWN0b3J5KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKCcuL2xvYWQtaW1hZ2UnKSwgcmVxdWlyZSgnLi9sb2FkLWltYWdlLW1ldGEnKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHM6XG4gICAgZmFjdG9yeSh3aW5kb3cubG9hZEltYWdlKVxuICB9XG59KShmdW5jdGlvbiAobG9hZEltYWdlKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8qKlxuICAgKiBFeGlmIHRhZyBtYXBcbiAgICpcbiAgICogQG5hbWUgRXhpZk1hcFxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRhZ0NvZGUgUHJpdmF0ZSBJRkQgdGFnIGNvZGVcbiAgICovXG4gIGZ1bmN0aW9uIEV4aWZNYXAodGFnQ29kZSkge1xuICAgIGlmICh0YWdDb2RlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21hcCcsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMucHJpdmF0ZUlGRHNbdGFnQ29kZV0ubWFwXG4gICAgICB9KVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0YWdzJywge1xuICAgICAgICB2YWx1ZTogKHRoaXMudGFncyAmJiB0aGlzLnRhZ3NbdGFnQ29kZV0pIHx8IHt9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIEV4aWZNYXAucHJvdG90eXBlLm1hcCA9IHtcbiAgICBPcmllbnRhdGlvbjogMHgwMTEyLFxuICAgIFRodW1ibmFpbDogMHgwMjAxLFxuICAgIEV4aWY6IDB4ODc2OSxcbiAgICBHUFNJbmZvOiAweDg4MjUsXG4gICAgSW50ZXJvcGVyYWJpbGl0eTogMHhhMDA1XG4gIH1cblxuICBFeGlmTWFwLnByb3RvdHlwZS5wcml2YXRlSUZEcyA9IHtcbiAgICAweDg3Njk6IHsgbmFtZTogJ0V4aWYnLCBtYXA6IHt9IH0sXG4gICAgMHg4ODI1OiB7IG5hbWU6ICdHUFNJbmZvJywgbWFwOiB7fSB9LFxuICAgIDB4YTAwNTogeyBuYW1lOiAnSW50ZXJvcGVyYWJpbGl0eScsIG1hcDoge30gfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBleGlmIHRhZyB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGlkIEV4aWYgdGFnIGNvZGUgb3IgbmFtZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBFeGlmIHRhZyB2YWx1ZVxuICAgKi9cbiAgRXhpZk1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIHRoaXNbaWRdIHx8IHRoaXNbdGhpcy5tYXBbaWRdXVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEV4aWYgVGh1bWJuYWlsIGRhdGEgYXMgQmxvYi5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRhVmlld30gZGF0YVZpZXcgRGF0YSB2aWV3IGludGVyZmFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IFRodW1ibmFpbCBkYXRhIG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRodW1ibmFpbCBkYXRhIGxlbmd0aFxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfEJsb2J9IFJldHVybnMgdGhlIFRodW1ibmFpbCBCbG9iIG9yIHVuZGVmaW5lZFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXhpZlRodW1ibmFpbChkYXRhVmlldywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICBpZiAoIWxlbmd0aCB8fCBvZmZzZXQgKyBsZW5ndGggPiBkYXRhVmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBFeGlmIGRhdGE6IEludmFsaWQgdGh1bWJuYWlsIGRhdGEuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2RhdGFWaWV3LmJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCldLCB7XG4gICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICB9KVxuICB9XG5cbiAgdmFyIEV4aWZUYWdUeXBlcyA9IHtcbiAgICAvLyBieXRlLCA4LWJpdCB1bnNpZ25lZCBpbnQ6XG4gICAgMToge1xuICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChkYXRhVmlldywgZGF0YU9mZnNldCkge1xuICAgICAgICByZXR1cm4gZGF0YVZpZXcuZ2V0VWludDgoZGF0YU9mZnNldClcbiAgICAgIH0sXG4gICAgICBzaXplOiAxXG4gICAgfSxcbiAgICAvLyBhc2NpaSwgOC1iaXQgYnl0ZTpcbiAgICAyOiB7XG4gICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGRhdGFWaWV3LCBkYXRhT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGFWaWV3LmdldFVpbnQ4KGRhdGFPZmZzZXQpKVxuICAgICAgfSxcbiAgICAgIHNpemU6IDEsXG4gICAgICBhc2NpaTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gc2hvcnQsIDE2IGJpdCBpbnQ6XG4gICAgMzoge1xuICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChkYXRhVmlldywgZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiBkYXRhVmlldy5nZXRVaW50MTYoZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKVxuICAgICAgfSxcbiAgICAgIHNpemU6IDJcbiAgICB9LFxuICAgIC8vIGxvbmcsIDMyIGJpdCBpbnQ6XG4gICAgNDoge1xuICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChkYXRhVmlldywgZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiBkYXRhVmlldy5nZXRVaW50MzIoZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKVxuICAgICAgfSxcbiAgICAgIHNpemU6IDRcbiAgICB9LFxuICAgIC8vIHJhdGlvbmFsID0gdHdvIGxvbmcgdmFsdWVzLCBmaXJzdCBpcyBudW1lcmF0b3IsIHNlY29uZCBpcyBkZW5vbWluYXRvcjpcbiAgICA1OiB7XG4gICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGRhdGFWaWV3LCBkYXRhT2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBkYXRhVmlldy5nZXRVaW50MzIoZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKSAvXG4gICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDMyKGRhdGFPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBzaXplOiA4XG4gICAgfSxcbiAgICAvLyBzbG9uZywgMzIgYml0IHNpZ25lZCBpbnQ6XG4gICAgOToge1xuICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChkYXRhVmlldywgZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiBkYXRhVmlldy5nZXRJbnQzMihkYXRhT2Zmc2V0LCBsaXR0bGVFbmRpYW4pXG4gICAgICB9LFxuICAgICAgc2l6ZTogNFxuICAgIH0sXG4gICAgLy8gc3JhdGlvbmFsLCB0d28gc2xvbmdzLCBmaXJzdCBpcyBudW1lcmF0b3IsIHNlY29uZCBpcyBkZW5vbWluYXRvcjpcbiAgICAxMDoge1xuICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChkYXRhVmlldywgZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZGF0YVZpZXcuZ2V0SW50MzIoZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKSAvXG4gICAgICAgICAgZGF0YVZpZXcuZ2V0SW50MzIoZGF0YU9mZnNldCArIDQsIGxpdHRsZUVuZGlhbilcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHNpemU6IDhcbiAgICB9XG4gIH1cbiAgLy8gdW5kZWZpbmVkLCA4LWJpdCBieXRlLCB2YWx1ZSBkZXBlbmRpbmcgb24gZmllbGQ6XG4gIEV4aWZUYWdUeXBlc1s3XSA9IEV4aWZUYWdUeXBlc1sxXVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIEV4aWYgdGFnIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyBEYXRhIHZpZXcgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aWZmT2Zmc2V0IFRJRkYgb2Zmc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGFnIG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUYWcgdHlwZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRhZyBsZW5ndGhcbiAgICogQHBhcmFtIHtib29sZWFufSBsaXR0bGVFbmRpYW4gTGl0dGxlIGVuZGlhbiBlbmNvZGluZ1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBUYWcgdmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIGdldEV4aWZWYWx1ZShcbiAgICBkYXRhVmlldyxcbiAgICB0aWZmT2Zmc2V0LFxuICAgIG9mZnNldCxcbiAgICB0eXBlLFxuICAgIGxlbmd0aCxcbiAgICBsaXR0bGVFbmRpYW5cbiAgKSB7XG4gICAgdmFyIHRhZ1R5cGUgPSBFeGlmVGFnVHlwZXNbdHlwZV1cbiAgICB2YXIgdGFnU2l6ZVxuICAgIHZhciBkYXRhT2Zmc2V0XG4gICAgdmFyIHZhbHVlc1xuICAgIHZhciBpXG4gICAgdmFyIHN0clxuICAgIHZhciBjXG4gICAgaWYgKCF0YWdUeXBlKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBFeGlmIGRhdGE6IEludmFsaWQgdGFnIHR5cGUuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0YWdTaXplID0gdGFnVHlwZS5zaXplICogbGVuZ3RoXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSB2YWx1ZSBpcyBjb250YWluZWQgaW4gdGhlIGRhdGFPZmZzZXQgYnl0ZXMsXG4gICAgLy8gb3IgaWYgdGhlIHZhbHVlIGF0IHRoZSBkYXRhT2Zmc2V0IGlzIGEgcG9pbnRlciB0byB0aGUgYWN0dWFsIGRhdGE6XG4gICAgZGF0YU9mZnNldCA9XG4gICAgICB0YWdTaXplID4gNFxuICAgICAgICA/IHRpZmZPZmZzZXQgKyBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0ICsgOCwgbGl0dGxlRW5kaWFuKVxuICAgICAgICA6IG9mZnNldCArIDhcbiAgICBpZiAoZGF0YU9mZnNldCArIHRhZ1NpemUgPiBkYXRhVmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBFeGlmIGRhdGE6IEludmFsaWQgZGF0YSBvZmZzZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGFnVHlwZS5nZXRWYWx1ZShkYXRhVmlldywgZGF0YU9mZnNldCwgbGl0dGxlRW5kaWFuKVxuICAgIH1cbiAgICB2YWx1ZXMgPSBbXVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFsdWVzW2ldID0gdGFnVHlwZS5nZXRWYWx1ZShcbiAgICAgICAgZGF0YVZpZXcsXG4gICAgICAgIGRhdGFPZmZzZXQgKyBpICogdGFnVHlwZS5zaXplLFxuICAgICAgICBsaXR0bGVFbmRpYW5cbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHRhZ1R5cGUuYXNjaWkpIHtcbiAgICAgIHN0ciA9ICcnXG4gICAgICAvLyBDb25jYXRlbmF0ZSB0aGUgY2hhcnM6XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGMgPSB2YWx1ZXNbaV1cbiAgICAgICAgLy8gSWdub3JlIHRoZSB0ZXJtaW5hdGluZyBOVUxMIGJ5dGUocyk6XG4gICAgICAgIGlmIChjID09PSAnXFx1MDAwMCcpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHN0ciArPSBjXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXNcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgRXhpZiB0YWdzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyBEYXRhIHZpZXcgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aWZmT2Zmc2V0IFRJRkYgb2Zmc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJPZmZzZXQgRGlyZWN0b3J5IG9mZnNldFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxpdHRsZUVuZGlhbiBMaXR0bGUgZW5kaWFuIGVuY29kaW5nXG4gICAqIEBwYXJhbSB7RXhpZk1hcH0gdGFncyBNYXAgdG8gc3RvcmUgcGFyc2VkIGV4aWYgdGFnc1xuICAgKiBAcGFyYW0ge0V4aWZNYXB9IHRhZ09mZnNldHMgTWFwIHRvIHN0b3JlIHBhcnNlZCBleGlmIHRhZyBvZmZzZXRzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbmNsdWRlVGFncyBNYXAgb2YgdGFncyB0byBpbmNsdWRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBleGNsdWRlVGFncyBNYXAgb2YgdGFncyB0byBleGNsdWRlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IE5leHQgZGlyZWN0b3J5IG9mZnNldFxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VFeGlmVGFncyhcbiAgICBkYXRhVmlldyxcbiAgICB0aWZmT2Zmc2V0LFxuICAgIGRpck9mZnNldCxcbiAgICBsaXR0bGVFbmRpYW4sXG4gICAgdGFncyxcbiAgICB0YWdPZmZzZXRzLFxuICAgIGluY2x1ZGVUYWdzLFxuICAgIGV4Y2x1ZGVUYWdzXG4gICkge1xuICAgIHZhciB0YWdzTnVtYmVyLCBkaXJFbmRPZmZzZXQsIGksIHRhZ09mZnNldCwgdGFnTnVtYmVyLCB0YWdWYWx1ZVxuICAgIGlmIChkaXJPZmZzZXQgKyA2ID4gZGF0YVZpZXcuYnl0ZUxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgRXhpZiBkYXRhOiBJbnZhbGlkIGRpcmVjdG9yeSBvZmZzZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0YWdzTnVtYmVyID0gZGF0YVZpZXcuZ2V0VWludDE2KGRpck9mZnNldCwgbGl0dGxlRW5kaWFuKVxuICAgIGRpckVuZE9mZnNldCA9IGRpck9mZnNldCArIDIgKyAxMiAqIHRhZ3NOdW1iZXJcbiAgICBpZiAoZGlyRW5kT2Zmc2V0ICsgNCA+IGRhdGFWaWV3LmJ5dGVMZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIEV4aWYgZGF0YTogSW52YWxpZCBkaXJlY3Rvcnkgc2l6ZS4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWdzTnVtYmVyOyBpICs9IDEpIHtcbiAgICAgIHRhZ09mZnNldCA9IGRpck9mZnNldCArIDIgKyAxMiAqIGlcbiAgICAgIHRhZ051bWJlciA9IGRhdGFWaWV3LmdldFVpbnQxNih0YWdPZmZzZXQsIGxpdHRsZUVuZGlhbilcbiAgICAgIGlmIChpbmNsdWRlVGFncyAmJiAhaW5jbHVkZVRhZ3NbdGFnTnVtYmVyXSkgY29udGludWVcbiAgICAgIGlmIChleGNsdWRlVGFncyAmJiBleGNsdWRlVGFnc1t0YWdOdW1iZXJdID09PSB0cnVlKSBjb250aW51ZVxuICAgICAgdGFnVmFsdWUgPSBnZXRFeGlmVmFsdWUoXG4gICAgICAgIGRhdGFWaWV3LFxuICAgICAgICB0aWZmT2Zmc2V0LFxuICAgICAgICB0YWdPZmZzZXQsXG4gICAgICAgIGRhdGFWaWV3LmdldFVpbnQxNih0YWdPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pLCAvLyB0YWcgdHlwZVxuICAgICAgICBkYXRhVmlldy5nZXRVaW50MzIodGFnT2Zmc2V0ICsgNCwgbGl0dGxlRW5kaWFuKSwgLy8gdGFnIGxlbmd0aFxuICAgICAgICBsaXR0bGVFbmRpYW5cbiAgICAgIClcbiAgICAgIHRhZ3NbdGFnTnVtYmVyXSA9IHRhZ1ZhbHVlXG4gICAgICBpZiAodGFnT2Zmc2V0cykge1xuICAgICAgICB0YWdPZmZzZXRzW3RhZ051bWJlcl0gPSB0YWdPZmZzZXRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBvZmZzZXQgdG8gdGhlIG5leHQgZGlyZWN0b3J5OlxuICAgIHJldHVybiBkYXRhVmlldy5nZXRVaW50MzIoZGlyRW5kT2Zmc2V0LCBsaXR0bGVFbmRpYW4pXG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIFByaXZhdGUgSUZEIHRhZ3MuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIERhdGEgb2JqZWN0IHRvIHN0b3JlIGV4aWYgdGFncyBhbmQgb2Zmc2V0c1xuICAgKiBAcGFyYW0ge251bWJlcn0gdGFnQ29kZSBQcml2YXRlIElGRCB0YWcgY29kZVxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyBEYXRhIHZpZXcgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aWZmT2Zmc2V0IFRJRkYgb2Zmc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbGl0dGxlRW5kaWFuIExpdHRsZSBlbmRpYW4gZW5jb2RpbmdcbiAgICogQHBhcmFtIHtvYmplY3R9IGluY2x1ZGVUYWdzIE1hcCBvZiB0YWdzIHRvIGluY2x1ZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGV4Y2x1ZGVUYWdzIE1hcCBvZiB0YWdzIHRvIGV4Y2x1ZGVcbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlRXhpZlByaXZhdGVJRkQoXG4gICAgZGF0YSxcbiAgICB0YWdDb2RlLFxuICAgIGRhdGFWaWV3LFxuICAgIHRpZmZPZmZzZXQsXG4gICAgbGl0dGxlRW5kaWFuLFxuICAgIGluY2x1ZGVUYWdzLFxuICAgIGV4Y2x1ZGVUYWdzXG4gICkge1xuICAgIHZhciBkaXJPZmZzZXQgPSBkYXRhLmV4aWZbdGFnQ29kZV1cbiAgICBpZiAoZGlyT2Zmc2V0KSB7XG4gICAgICBkYXRhLmV4aWZbdGFnQ29kZV0gPSBuZXcgRXhpZk1hcCh0YWdDb2RlKVxuICAgICAgaWYgKGRhdGEuZXhpZk9mZnNldHMpIHtcbiAgICAgICAgZGF0YS5leGlmT2Zmc2V0c1t0YWdDb2RlXSA9IG5ldyBFeGlmTWFwKHRhZ0NvZGUpXG4gICAgICB9XG4gICAgICBwYXJzZUV4aWZUYWdzKFxuICAgICAgICBkYXRhVmlldyxcbiAgICAgICAgdGlmZk9mZnNldCxcbiAgICAgICAgdGlmZk9mZnNldCArIGRpck9mZnNldCxcbiAgICAgICAgbGl0dGxlRW5kaWFuLFxuICAgICAgICBkYXRhLmV4aWZbdGFnQ29kZV0sXG4gICAgICAgIGRhdGEuZXhpZk9mZnNldHMgJiYgZGF0YS5leGlmT2Zmc2V0c1t0YWdDb2RlXSxcbiAgICAgICAgaW5jbHVkZVRhZ3MgJiYgaW5jbHVkZVRhZ3NbdGFnQ29kZV0sXG4gICAgICAgIGV4Y2x1ZGVUYWdzICYmIGV4Y2x1ZGVUYWdzW3RhZ0NvZGVdXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlLnBhcnNlRXhpZkRhdGEgPSBmdW5jdGlvbiAoZGF0YVZpZXcsIG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGlzYWJsZUV4aWYpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgaW5jbHVkZVRhZ3MgPSBvcHRpb25zLmluY2x1ZGVFeGlmVGFnc1xuICAgIHZhciBleGNsdWRlVGFncyA9IG9wdGlvbnMuZXhjbHVkZUV4aWZUYWdzIHx8IHtcbiAgICAgIDB4ODc2OToge1xuICAgICAgICAvLyBFeGlmSUZEUG9pbnRlclxuICAgICAgICAweDkyN2M6IHRydWUgLy8gTWFrZXJOb3RlXG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0aWZmT2Zmc2V0ID0gb2Zmc2V0ICsgMTBcbiAgICB2YXIgbGl0dGxlRW5kaWFuXG4gICAgdmFyIGRpck9mZnNldFxuICAgIHZhciBwcml2YXRlSUZEc1xuICAgIC8vIENoZWNrIGZvciB0aGUgQVNDSUkgY29kZSBmb3IgXCJFeGlmXCIgKDB4NDU3ODY5NjYpOlxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0ICsgNCkgIT09IDB4NDU3ODY5NjYpIHtcbiAgICAgIC8vIE5vIEV4aWYgZGF0YSwgbWlnaHQgYmUgWE1QIGRhdGEgaW5zdGVhZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aWZmT2Zmc2V0ICsgOCA+IGRhdGFWaWV3LmJ5dGVMZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIEV4aWYgZGF0YTogSW52YWxpZCBzZWdtZW50IHNpemUuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgdGhlIHR3byBudWxsIGJ5dGVzOlxuICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgOCkgIT09IDB4MDAwMCkge1xuICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgRXhpZiBkYXRhOiBNaXNzaW5nIGJ5dGUgYWxpZ25tZW50IG9mZnNldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIENoZWNrIHRoZSBieXRlIGFsaWdubWVudDpcbiAgICBzd2l0Y2ggKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KSkge1xuICAgICAgY2FzZSAweDQ5NDk6XG4gICAgICAgIGxpdHRsZUVuZGlhbiA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMHg0ZDRkOlxuICAgICAgICBsaXR0bGVFbmRpYW4gPSBmYWxzZVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgRXhpZiBkYXRhOiBJbnZhbGlkIGJ5dGUgYWxpZ25tZW50IG1hcmtlci4nKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gQ2hlY2sgZm9yIHRoZSBUSUZGIHRhZyBtYXJrZXIgKDB4MDAyQSk6XG4gICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSAhPT0gMHgwMDJhKSB7XG4gICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBFeGlmIGRhdGE6IE1pc3NpbmcgVElGRiBtYXJrZXIuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBSZXRyaWV2ZSB0aGUgZGlyZWN0b3J5IG9mZnNldCBieXRlcywgdXN1YWxseSAweDAwMDAwMDA4IG9yIDggZGVjaW1hbDpcbiAgICBkaXJPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIodGlmZk9mZnNldCArIDQsIGxpdHRsZUVuZGlhbilcbiAgICAvLyBDcmVhdGUgdGhlIGV4aWYgb2JqZWN0IHRvIHN0b3JlIHRoZSB0YWdzOlxuICAgIGRhdGEuZXhpZiA9IG5ldyBFeGlmTWFwKClcbiAgICBpZiAoIW9wdGlvbnMuZGlzYWJsZUV4aWZPZmZzZXRzKSB7XG4gICAgICBkYXRhLmV4aWZPZmZzZXRzID0gbmV3IEV4aWZNYXAoKVxuICAgICAgZGF0YS5leGlmVGlmZk9mZnNldCA9IHRpZmZPZmZzZXRcbiAgICAgIGRhdGEuZXhpZkxpdHRsZUVuZGlhbiA9IGxpdHRsZUVuZGlhblxuICAgIH1cbiAgICAvLyBQYXJzZSB0aGUgdGFncyBvZiB0aGUgbWFpbiBpbWFnZSBkaXJlY3RvcnkgYW5kIHJldHJpZXZlIHRoZVxuICAgIC8vIG9mZnNldCB0byB0aGUgbmV4dCBkaXJlY3RvcnksIHVzdWFsbHkgdGhlIHRodW1ibmFpbCBkaXJlY3Rvcnk6XG4gICAgZGlyT2Zmc2V0ID0gcGFyc2VFeGlmVGFncyhcbiAgICAgIGRhdGFWaWV3LFxuICAgICAgdGlmZk9mZnNldCxcbiAgICAgIHRpZmZPZmZzZXQgKyBkaXJPZmZzZXQsXG4gICAgICBsaXR0bGVFbmRpYW4sXG4gICAgICBkYXRhLmV4aWYsXG4gICAgICBkYXRhLmV4aWZPZmZzZXRzLFxuICAgICAgaW5jbHVkZVRhZ3MsXG4gICAgICBleGNsdWRlVGFnc1xuICAgIClcbiAgICBpZiAoZGlyT2Zmc2V0ICYmICFvcHRpb25zLmRpc2FibGVFeGlmVGh1bWJuYWlsKSB7XG4gICAgICBkaXJPZmZzZXQgPSBwYXJzZUV4aWZUYWdzKFxuICAgICAgICBkYXRhVmlldyxcbiAgICAgICAgdGlmZk9mZnNldCxcbiAgICAgICAgdGlmZk9mZnNldCArIGRpck9mZnNldCxcbiAgICAgICAgbGl0dGxlRW5kaWFuLFxuICAgICAgICBkYXRhLmV4aWYsXG4gICAgICAgIGRhdGEuZXhpZk9mZnNldHMsXG4gICAgICAgIGluY2x1ZGVUYWdzLFxuICAgICAgICBleGNsdWRlVGFnc1xuICAgICAgKVxuICAgICAgLy8gQ2hlY2sgZm9yIEpQRUcgVGh1bWJuYWlsIG9mZnNldDpcbiAgICAgIGlmIChkYXRhLmV4aWZbMHgwMjAxXSAmJiBkYXRhLmV4aWZbMHgwMjAyXSkge1xuICAgICAgICBkYXRhLmV4aWZbMHgwMjAxXSA9IGdldEV4aWZUaHVtYm5haWwoXG4gICAgICAgICAgZGF0YVZpZXcsXG4gICAgICAgICAgdGlmZk9mZnNldCArIGRhdGEuZXhpZlsweDAyMDFdLFxuICAgICAgICAgIGRhdGEuZXhpZlsweDAyMDJdIC8vIFRodW1ibmFpbCBkYXRhIGxlbmd0aFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHByaXZhdGVJRkRzID0gT2JqZWN0LmtleXMoZGF0YS5leGlmLnByaXZhdGVJRkRzKVxuICAgIHByaXZhdGVJRkRzLmZvckVhY2goZnVuY3Rpb24gKHRhZ0NvZGUpIHtcbiAgICAgIHBhcnNlRXhpZlByaXZhdGVJRkQoXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHRhZ0NvZGUsXG4gICAgICAgIGRhdGFWaWV3LFxuICAgICAgICB0aWZmT2Zmc2V0LFxuICAgICAgICBsaXR0bGVFbmRpYW4sXG4gICAgICAgIGluY2x1ZGVUYWdzLFxuICAgICAgICBleGNsdWRlVGFnc1xuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICAvLyBSZWdpc3RlcnMgdGhlIEV4aWYgcGFyc2VyIGZvciB0aGUgQVBQMSBKUEVHIG1ldGEgZGF0YSBzZWdtZW50OlxuICBsb2FkSW1hZ2UubWV0YURhdGFQYXJzZXJzLmpwZWdbMHhmZmUxXS5wdXNoKGxvYWRJbWFnZS5wYXJzZUV4aWZEYXRhKVxuXG4gIGxvYWRJbWFnZS5leGlmV3JpdGVycyA9IHtcbiAgICAvLyBPcmllbnRhdGlvbiB3cml0ZXI6XG4gICAgMHgwMTEyOiBmdW5jdGlvbiAoYnVmZmVyLCBkYXRhLCB2YWx1ZSkge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCBkYXRhLmV4aWZPZmZzZXRzWzB4MDExMl0gKyA4LCAyKVxuICAgICAgdmlldy5zZXRVaW50MTYoMCwgdmFsdWUsIGRhdGEuZXhpZkxpdHRsZUVuZGlhbilcbiAgICAgIHJldHVybiBidWZmZXJcbiAgICB9XG4gIH1cblxuICBsb2FkSW1hZ2Uud3JpdGVFeGlmRGF0YSA9IGZ1bmN0aW9uIChidWZmZXIsIGRhdGEsIGlkLCB2YWx1ZSkge1xuICAgIGxvYWRJbWFnZS5leGlmV3JpdGVyc1tkYXRhLmV4aWYubWFwW2lkXV0oYnVmZmVyLCBkYXRhLCB2YWx1ZSlcbiAgfVxuXG4gIGxvYWRJbWFnZS5FeGlmTWFwID0gRXhpZk1hcFxuXG4gIC8vIEFkZHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHRvIHRoZSBwYXJzZU1ldGFEYXRhIGNhbGxiYWNrIGRhdGE6XG4gIC8vIC0gZXhpZjogVGhlIHBhcnNlZCBFeGlmIHRhZ3NcbiAgLy8gLSBleGlmT2Zmc2V0czogVGhlIHBhcnNlZCBFeGlmIHRhZyBvZmZzZXRzXG4gIC8vIC0gZXhpZlRpZmZPZmZzZXQ6IFRJRkYgaGVhZGVyIG9mZnNldCAodXNlZCBmb3Igb2Zmc2V0IHBvaW50ZXJzKVxuICAvLyAtIGV4aWZMaXR0bGVFbmRpYW46IGxpdHRsZSBlbmRpYW4gb3JkZXIgaWYgdHJ1ZSwgYmlnIGVuZGlhbiBpZiBmYWxzZVxuXG4gIC8vIEFkZHMgdGhlIGZvbGxvd2luZyBvcHRpb25zIHRvIHRoZSBwYXJzZU1ldGFEYXRhIG1ldGhvZDpcbiAgLy8gLSBkaXNhYmxlRXhpZjogRGlzYWJsZXMgRXhpZiBwYXJzaW5nIHdoZW4gdHJ1ZS5cbiAgLy8gLSBkaXNhYmxlRXhpZlRodW1ibmFpbDogRGlzYWJsZXMgcGFyc2luZyBvZiBUaHVtYm5haWwgZGF0YSB3aGVuIHRydWUuXG4gIC8vIC0gZGlzYWJsZUV4aWZPZmZzZXRzOiBEaXNhYmxlcyBzdG9yaW5nIEV4aWYgdGFnIG9mZnNldHMgd2hlbiB0cnVlLlxuICAvLyAtIGluY2x1ZGVFeGlmVGFnczogQSBtYXAgb2YgRXhpZiB0YWdzIHRvIGluY2x1ZGUgZm9yIHBhcnNpbmcuXG4gIC8vIC0gZXhjbHVkZUV4aWZUYWdzOiBBIG1hcCBvZiBFeGlmIHRhZ3MgdG8gZXhjbHVkZSBmcm9tIHBhcnNpbmcuXG59KVxuIiwiLypcbiAqIEphdmFTY3JpcHQgTG9hZCBJbWFnZSBGZXRjaFxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1Mb2FkLUltYWdlXG4gKlxuICogQ29weXJpZ2h0IDIwMTcsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIGdsb2JhbCBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICd1c2Ugc3RyaWN0J1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgZGVmaW5lKFsnLi9sb2FkLWltYWdlJ10sIGZhY3RvcnkpXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBmYWN0b3J5KHJlcXVpcmUoJy4vbG9hZC1pbWFnZScpKVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsczpcbiAgICBmYWN0b3J5KHdpbmRvdy5sb2FkSW1hZ2UpXG4gIH1cbn0pKGZ1bmN0aW9uIChsb2FkSW1hZ2UpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgaWYgKHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9hZEltYWdlLmZldGNoQmxvYiA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICBmZXRjaChuZXcgUmVxdWVzdCh1cmwsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNhbGxiYWNrKVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgLy8gQ2hlY2sgZm9yIFhIUjIgc3VwcG9ydDpcbiAgICB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIFByb2dyZXNzRXZlbnQgIT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIGxvYWRJbWFnZS5mZXRjaEJsb2IgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICByZXEub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnR0VUJywgdXJsKVxuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXEud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICByZXEub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhyZXEucmVzcG9uc2UpXG4gICAgICB9XG4gICAgICByZXEub25lcnJvciA9IHJlcS5vbmFib3J0ID0gcmVxLm9udGltZW91dCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZXJyKVxuICAgICAgfVxuICAgICAgcmVxLnNlbmQob3B0aW9ucy5ib2R5KVxuICAgIH1cbiAgfVxufSlcbiIsIi8qXG4gKiBKYXZhU2NyaXB0IExvYWQgSW1hZ2UgSVBUQyBNYXBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuICpcbiAqIENvcHlyaWdodCAyMDEzLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBDb3B5cmlnaHQgMjAxOCwgRGF2ZSBCZXZhblxuICpcbiAqIElQVEMgdGFncyBtYXBwaW5nIGJhc2VkIG9uXG4gKiBodHRwczovL2lwdGMub3JnL3N0YW5kYXJkcy9waG90by1tZXRhZGF0YVxuICogaHR0cHM6Ly9leGlmdG9vbC5vcmcvVGFnTmFtZXMvSVBUQy5odG1sXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCdcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBBTUQgbW9kdWxlOlxuICAgIGRlZmluZShbJy4vbG9hZC1pbWFnZScsICcuL2xvYWQtaW1hZ2UtaXB0YyddLCBmYWN0b3J5KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKCcuL2xvYWQtaW1hZ2UnKSwgcmVxdWlyZSgnLi9sb2FkLWltYWdlLWlwdGMnKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHM6XG4gICAgZmFjdG9yeSh3aW5kb3cubG9hZEltYWdlKVxuICB9XG59KShmdW5jdGlvbiAobG9hZEltYWdlKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIHZhciBJcHRjTWFwUHJvdG8gPSBsb2FkSW1hZ2UuSXB0Y01hcC5wcm90b3R5cGVcblxuICBJcHRjTWFwUHJvdG8udGFncyA9IHtcbiAgICAwOiAnQXBwbGljYXRpb25SZWNvcmRWZXJzaW9uJyxcbiAgICAzOiAnT2JqZWN0VHlwZVJlZmVyZW5jZScsXG4gICAgNDogJ09iamVjdEF0dHJpYnV0ZVJlZmVyZW5jZScsXG4gICAgNTogJ09iamVjdE5hbWUnLFxuICAgIDc6ICdFZGl0U3RhdHVzJyxcbiAgICA4OiAnRWRpdG9yaWFsVXBkYXRlJyxcbiAgICAxMDogJ1VyZ2VuY3knLFxuICAgIDEyOiAnU3ViamVjdFJlZmVyZW5jZScsXG4gICAgMTU6ICdDYXRlZ29yeScsXG4gICAgMjA6ICdTdXBwbGVtZW50YWxDYXRlZ29yaWVzJyxcbiAgICAyMjogJ0ZpeHR1cmVJZGVudGlmaWVyJyxcbiAgICAyNTogJ0tleXdvcmRzJyxcbiAgICAyNjogJ0NvbnRlbnRMb2NhdGlvbkNvZGUnLFxuICAgIDI3OiAnQ29udGVudExvY2F0aW9uTmFtZScsXG4gICAgMzA6ICdSZWxlYXNlRGF0ZScsXG4gICAgMzU6ICdSZWxlYXNlVGltZScsXG4gICAgMzc6ICdFeHBpcmF0aW9uRGF0ZScsXG4gICAgMzg6ICdFeHBpcmF0aW9uVGltZScsXG4gICAgNDA6ICdTcGVjaWFsSW5zdHJ1Y3Rpb25zJyxcbiAgICA0MjogJ0FjdGlvbkFkdmlzZWQnLFxuICAgIDQ1OiAnUmVmZXJlbmNlU2VydmljZScsXG4gICAgNDc6ICdSZWZlcmVuY2VEYXRlJyxcbiAgICA1MDogJ1JlZmVyZW5jZU51bWJlcicsXG4gICAgNTU6ICdEYXRlQ3JlYXRlZCcsXG4gICAgNjA6ICdUaW1lQ3JlYXRlZCcsXG4gICAgNjI6ICdEaWdpdGFsQ3JlYXRpb25EYXRlJyxcbiAgICA2MzogJ0RpZ2l0YWxDcmVhdGlvblRpbWUnLFxuICAgIDY1OiAnT3JpZ2luYXRpbmdQcm9ncmFtJyxcbiAgICA3MDogJ1Byb2dyYW1WZXJzaW9uJyxcbiAgICA3NTogJ09iamVjdEN5Y2xlJyxcbiAgICA4MDogJ0J5bGluZScsXG4gICAgODU6ICdCeWxpbmVUaXRsZScsXG4gICAgOTA6ICdDaXR5JyxcbiAgICA5MjogJ1N1YmxvY2F0aW9uJyxcbiAgICA5NTogJ1N0YXRlJyxcbiAgICAxMDA6ICdDb3VudHJ5Q29kZScsXG4gICAgMTAxOiAnQ291bnRyeScsXG4gICAgMTAzOiAnT3JpZ2luYWxUcmFuc21pc3Npb25SZWZlcmVuY2UnLFxuICAgIDEwNTogJ0hlYWRsaW5lJyxcbiAgICAxMTA6ICdDcmVkaXQnLFxuICAgIDExNTogJ1NvdXJjZScsXG4gICAgMTE2OiAnQ29weXJpZ2h0Tm90aWNlJyxcbiAgICAxMTg6ICdDb250YWN0JyxcbiAgICAxMjA6ICdDYXB0aW9uJyxcbiAgICAxMjE6ICdMb2NhbENhcHRpb24nLFxuICAgIDEyMjogJ1dyaXRlcicsXG4gICAgMTI1OiAnUmFzdGVyaXplZENhcHRpb24nLFxuICAgIDEzMDogJ0ltYWdlVHlwZScsXG4gICAgMTMxOiAnSW1hZ2VPcmllbnRhdGlvbicsXG4gICAgMTM1OiAnTGFuZ3VhZ2VJZGVudGlmaWVyJyxcbiAgICAxNTA6ICdBdWRpb1R5cGUnLFxuICAgIDE1MTogJ0F1ZGlvU2FtcGxpbmdSYXRlJyxcbiAgICAxNTI6ICdBdWRpb1NhbXBsaW5nUmVzb2x1dGlvbicsXG4gICAgMTUzOiAnQXVkaW9EdXJhdGlvbicsXG4gICAgMTU0OiAnQXVkaW9PdXRjdWUnLFxuICAgIDE4NDogJ0pvYklEJyxcbiAgICAxODU6ICdNYXN0ZXJEb2N1bWVudElEJyxcbiAgICAxODY6ICdTaG9ydERvY3VtZW50SUQnLFxuICAgIDE4NzogJ1VuaXF1ZURvY3VtZW50SUQnLFxuICAgIDE4ODogJ093bmVySUQnLFxuICAgIDIwMDogJ09iamVjdFByZXZpZXdGaWxlRm9ybWF0JyxcbiAgICAyMDE6ICdPYmplY3RQcmV2aWV3RmlsZVZlcnNpb24nLFxuICAgIDIwMjogJ09iamVjdFByZXZpZXdEYXRhJyxcbiAgICAyMjE6ICdQcmVmcycsXG4gICAgMjI1OiAnQ2xhc3NpZnlTdGF0ZScsXG4gICAgMjI4OiAnU2ltaWxhcml0eUluZGV4JyxcbiAgICAyMzA6ICdEb2N1bWVudE5vdGVzJyxcbiAgICAyMzE6ICdEb2N1bWVudEhpc3RvcnknLFxuICAgIDIzMjogJ0V4aWZDYW1lcmFJbmZvJyxcbiAgICAyNTU6ICdDYXRhbG9nU2V0cydcbiAgfVxuXG4gIElwdGNNYXBQcm90by5zdHJpbmdWYWx1ZXMgPSB7XG4gICAgMTA6IHtcbiAgICAgIDA6ICcwIChyZXNlcnZlZCknLFxuICAgICAgMTogJzEgKG1vc3QgdXJnZW50KScsXG4gICAgICAyOiAnMicsXG4gICAgICAzOiAnMycsXG4gICAgICA0OiAnNCcsXG4gICAgICA1OiAnNSAobm9ybWFsIHVyZ2VuY3kpJyxcbiAgICAgIDY6ICc2JyxcbiAgICAgIDc6ICc3JyxcbiAgICAgIDg6ICc4IChsZWFzdCB1cmdlbnQpJyxcbiAgICAgIDk6ICc5ICh1c2VyLWRlZmluZWQgcHJpb3JpdHkpJ1xuICAgIH0sXG4gICAgNzU6IHtcbiAgICAgIGE6ICdNb3JuaW5nJyxcbiAgICAgIGI6ICdCb3RoIE1vcm5pbmcgYW5kIEV2ZW5pbmcnLFxuICAgICAgcDogJ0V2ZW5pbmcnXG4gICAgfSxcbiAgICAxMzE6IHtcbiAgICAgIEw6ICdMYW5kc2NhcGUnLFxuICAgICAgUDogJ1BvcnRyYWl0JyxcbiAgICAgIFM6ICdTcXVhcmUnXG4gICAgfVxuICB9XG5cbiAgSXB0Y01hcFByb3RvLmdldFRleHQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldChpZClcbiAgICB2YXIgdGFnQ29kZSA9IHRoaXMubWFwW2lkXVxuICAgIHZhciBzdHJpbmdWYWx1ZSA9IHRoaXMuc3RyaW5nVmFsdWVzW3RhZ0NvZGVdXG4gICAgaWYgKHN0cmluZ1ZhbHVlKSByZXR1cm4gc3RyaW5nVmFsdWVbdmFsdWVdXG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIElwdGNNYXBQcm90by5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hcCA9IHt9XG4gICAgdmFyIHByb3BcbiAgICB2YXIgbmFtZVxuICAgIGZvciAocHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIHByb3ApKSB7XG4gICAgICAgIG5hbWUgPSB0aGlzLnRhZ3NbcHJvcF1cbiAgICAgICAgaWYgKG5hbWUpIG1hcFtuYW1lXSA9IHRoaXMuZ2V0VGV4dChuYW1lKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwXG4gIH1cblxuICBJcHRjTWFwUHJvdG8uZ2V0TmFtZSA9IGZ1bmN0aW9uICh0YWdDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMudGFnc1t0YWdDb2RlXVxuICB9XG5cbiAgLy8gRXh0ZW5kIHRoZSBtYXAgb2YgdGFnIG5hbWVzIHRvIHRhZyBjb2RlczpcbiAgOyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhZ3MgPSBJcHRjTWFwUHJvdG8udGFnc1xuICAgIHZhciBtYXAgPSBJcHRjTWFwUHJvdG8ubWFwIHx8IHt9XG4gICAgdmFyIHByb3BcbiAgICAvLyBNYXAgdGhlIHRhZyBuYW1lcyB0byB0YWdzOlxuICAgIGZvciAocHJvcCBpbiB0YWdzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhZ3MsIHByb3ApKSB7XG4gICAgICAgIG1hcFt0YWdzW3Byb3BdXSA9IE51bWJlcihwcm9wKVxuICAgICAgfVxuICAgIH1cbiAgfSkoKVxufSlcbiIsIi8qXG4gKiBKYXZhU2NyaXB0IExvYWQgSW1hZ2UgSVBUQyBQYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuICpcbiAqIENvcHlyaWdodCAyMDEzLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBDb3B5cmlnaHQgMjAxOCwgRGF2ZSBCZXZhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlLCBEYXRhVmlldyAqL1xuXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICd1c2Ugc3RyaWN0J1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgZGVmaW5lKFsnLi9sb2FkLWltYWdlJywgJy4vbG9hZC1pbWFnZS1tZXRhJ10sIGZhY3RvcnkpXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBmYWN0b3J5KHJlcXVpcmUoJy4vbG9hZC1pbWFnZScpLCByZXF1aXJlKCcuL2xvYWQtaW1hZ2UtbWV0YScpKVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsczpcbiAgICBmYWN0b3J5KHdpbmRvdy5sb2FkSW1hZ2UpXG4gIH1cbn0pKGZ1bmN0aW9uIChsb2FkSW1hZ2UpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgLyoqXG4gICAqIElQVEMgdGFnIG1hcFxuICAgKlxuICAgKiBAbmFtZSBJcHRjTWFwXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gSXB0Y01hcCgpIHt9XG5cbiAgSXB0Y01hcC5wcm90b3R5cGUubWFwID0ge1xuICAgIE9iamVjdE5hbWU6IDVcbiAgfVxuXG4gIElwdGNNYXAucHJvdG90eXBlLnR5cGVzID0ge1xuICAgIDA6ICdVaW50MTYnLCAvLyBBcHBsaWNhdGlvblJlY29yZFZlcnNpb25cbiAgICAyMDA6ICdVaW50MTYnLCAvLyBPYmplY3RQcmV2aWV3RmlsZUZvcm1hdFxuICAgIDIwMTogJ1VpbnQxNicsIC8vIE9iamVjdFByZXZpZXdGaWxlVmVyc2lvblxuICAgIDIwMjogJ2JpbmFyeScgLy8gT2JqZWN0UHJldmlld0RhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgSVBUQyB0YWcgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBpZCBJUFRDIHRhZyBjb2RlIG9yIG5hbWVcbiAgICogQHJldHVybnMge29iamVjdH0gSVBUQyB0YWcgdmFsdWVcbiAgICovXG4gIElwdGNNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiB0aGlzW2lkXSB8fCB0aGlzW3RoaXMubWFwW2lkXV1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gRGF0YVZpZXcgYW5kIHJhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3IERhdGEgdmlldyBpbnRlcmZhY2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQgc3RhcnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBPZmZzZXQgbGVuZ3RoXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyB2YWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nVmFsdWUoZGF0YVZpZXcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgdmFyIG91dHN0ciA9ICcnXG4gICAgdmFyIGVuZCA9IG9mZnNldCArIGxlbmd0aFxuICAgIGZvciAodmFyIG4gPSBvZmZzZXQ7IG4gPCBlbmQ7IG4gKz0gMSkge1xuICAgICAgb3V0c3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgobikpXG4gICAgfVxuICAgIHJldHVybiBvdXRzdHJcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4gRGF0YVZpZXcgYW5kIHJhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0YWdDb2RlIFByaXZhdGUgSUZEIHRhZyBjb2RlXG4gICAqIEBwYXJhbSB7SXB0Y01hcH0gbWFwIElQVEMgdGFnIG1hcFxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyBEYXRhIHZpZXcgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgUmFuZ2Ugc3RhcnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBSYW5nZSBsZW5ndGhcbiAgICogQHJldHVybnMge29iamVjdH0gVGFnIHZhbHVlXG4gICAqL1xuICBmdW5jdGlvbiBnZXRUYWdWYWx1ZSh0YWdDb2RlLCBtYXAsIGRhdGFWaWV3LCBvZmZzZXQsIGxlbmd0aCkge1xuICAgIGlmIChtYXAudHlwZXNbdGFnQ29kZV0gPT09ICdiaW5hcnknKSB7XG4gICAgICByZXR1cm4gbmV3IEJsb2IoW2RhdGFWaWV3LmJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCldKVxuICAgIH1cbiAgICBpZiAobWFwLnR5cGVzW3RhZ0NvZGVdID09PSAnVWludDE2Jykge1xuICAgICAgcmV0dXJuIGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQpXG4gICAgfVxuICAgIHJldHVybiBnZXRTdHJpbmdWYWx1ZShkYXRhVmlldywgb2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZXMgSVBUQyB2YWx1ZSB3aXRoIGV4aXN0aW5nIG9uZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSBFeGlzdGluZyBJUFRDIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXdWYWx1ZSBOZXcgSVBUQyBmaWVsZCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZXN1bHRpbmcgSVBUQyBmaWVsZCB2YWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gY29tYmluZVRhZ1ZhbHVlcyh2YWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG5ld1ZhbHVlXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHZhbHVlLnB1c2gobmV3VmFsdWUpXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgbmV3VmFsdWVdXG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIElQVEMgdGFncy5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRhVmlld30gZGF0YVZpZXcgRGF0YSB2aWV3IGludGVyZmFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VnbWVudE9mZnNldCBTZWdtZW50IG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VnbWVudExlbmd0aCBTZWdtZW50IGxlbmd0aFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBEYXRhIGV4cG9ydCBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R9IGluY2x1ZGVUYWdzIE1hcCBvZiB0YWdzIHRvIGluY2x1ZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGV4Y2x1ZGVUYWdzIE1hcCBvZiB0YWdzIHRvIGV4Y2x1ZGVcbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlSXB0Y1RhZ3MoXG4gICAgZGF0YVZpZXcsXG4gICAgc2VnbWVudE9mZnNldCxcbiAgICBzZWdtZW50TGVuZ3RoLFxuICAgIGRhdGEsXG4gICAgaW5jbHVkZVRhZ3MsXG4gICAgZXhjbHVkZVRhZ3NcbiAgKSB7XG4gICAgdmFyIHZhbHVlLCB0YWdTaXplLCB0YWdDb2RlXG4gICAgdmFyIHNlZ21lbnRFbmQgPSBzZWdtZW50T2Zmc2V0ICsgc2VnbWVudExlbmd0aFxuICAgIHZhciBvZmZzZXQgPSBzZWdtZW50T2Zmc2V0XG4gICAgd2hpbGUgKG9mZnNldCA8IHNlZ21lbnRFbmQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSA9PT0gMHgxYyAmJiAvLyB0YWcgbWFya2VyXG4gICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweDAyIC8vIHJlY29yZCBudW1iZXIsIG9ubHkgaGFuZGxlcyB2MlxuICAgICAgKSB7XG4gICAgICAgIHRhZ0NvZGUgPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAyKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgKCFpbmNsdWRlVGFncyB8fCBpbmNsdWRlVGFnc1t0YWdDb2RlXSkgJiZcbiAgICAgICAgICAoIWV4Y2x1ZGVUYWdzIHx8ICFleGNsdWRlVGFnc1t0YWdDb2RlXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFnU2l6ZSA9IGRhdGFWaWV3LmdldEludDE2KG9mZnNldCArIDMpXG4gICAgICAgICAgdmFsdWUgPSBnZXRUYWdWYWx1ZSh0YWdDb2RlLCBkYXRhLmlwdGMsIGRhdGFWaWV3LCBvZmZzZXQgKyA1LCB0YWdTaXplKVxuICAgICAgICAgIGRhdGEuaXB0Y1t0YWdDb2RlXSA9IGNvbWJpbmVUYWdWYWx1ZXMoZGF0YS5pcHRjW3RhZ0NvZGVdLCB2YWx1ZSlcbiAgICAgICAgICBpZiAoZGF0YS5pcHRjT2Zmc2V0cykge1xuICAgICAgICAgICAgZGF0YS5pcHRjT2Zmc2V0c1t0YWdDb2RlXSA9IG9mZnNldFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2Zmc2V0ICs9IDFcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGVzdHMgaWYgZmllbGQgc2VnbWVudCBzdGFydHMgYXQgb2Zmc2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyBEYXRhIHZpZXcgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgU2VnbWVudCBvZmZzZXRcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgJzhCSU08RU9UPjxFT1Q+JyBleGlzdHMgYXQgb2Zmc2V0XG4gICAqL1xuICBmdW5jdGlvbiBpc1NlZ21lbnRTdGFydChkYXRhVmlldywgb2Zmc2V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQpID09PSAweDM4NDI0OTRkICYmIC8vIFBob3Rvc2hvcCBzZWdtZW50IHN0YXJ0XG4gICAgICBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgNCkgPT09IDB4MDQwNCAvLyBJUFRDIHNlZ21lbnQgc3RhcnRcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBoZWFkZXIgbGVuZ3RoLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyBEYXRhIHZpZXcgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgU2VnbWVudCBvZmZzZXRcbiAgICogQHJldHVybnMge251bWJlcn0gSGVhZGVyIGxlbmd0aFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SGVhZGVyTGVuZ3RoKGRhdGFWaWV3LCBvZmZzZXQpIHtcbiAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgNylcbiAgICBpZiAobGVuZ3RoICUgMiAhPT0gMCkgbGVuZ3RoICs9IDFcbiAgICAvLyBDaGVjayBmb3IgcHJlIHBob3Rvc2hvcCA2IGZvcm1hdFxuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEFsd2F5cyA0XG4gICAgICBsZW5ndGggPSA0XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGhcbiAgfVxuXG4gIGxvYWRJbWFnZS5wYXJzZUlwdGNEYXRhID0gZnVuY3Rpb24gKGRhdGFWaWV3LCBvZmZzZXQsIGxlbmd0aCwgZGF0YSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmRpc2FibGVJcHRjKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG1hcmtlckxlbmd0aCA9IG9mZnNldCArIGxlbmd0aFxuICAgIHdoaWxlIChvZmZzZXQgKyA4IDwgbWFya2VyTGVuZ3RoKSB7XG4gICAgICBpZiAoaXNTZWdtZW50U3RhcnQoZGF0YVZpZXcsIG9mZnNldCkpIHtcbiAgICAgICAgdmFyIGhlYWRlckxlbmd0aCA9IGdldEhlYWRlckxlbmd0aChkYXRhVmlldywgb2Zmc2V0KVxuICAgICAgICB2YXIgc2VnbWVudE9mZnNldCA9IG9mZnNldCArIDggKyBoZWFkZXJMZW5ndGhcbiAgICAgICAgaWYgKHNlZ21lbnRPZmZzZXQgPiBtYXJrZXJMZW5ndGgpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIElQVEMgZGF0YTogSW52YWxpZCBzZWdtZW50IG9mZnNldC4nKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlZ21lbnRMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgNiArIGhlYWRlckxlbmd0aClcbiAgICAgICAgaWYgKG9mZnNldCArIHNlZ21lbnRMZW5ndGggPiBtYXJrZXJMZW5ndGgpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIElQVEMgZGF0YTogSW52YWxpZCBzZWdtZW50IHNpemUuJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaXB0YyBvYmplY3QgdG8gc3RvcmUgdGhlIHRhZ3M6XG4gICAgICAgIGRhdGEuaXB0YyA9IG5ldyBJcHRjTWFwKClcbiAgICAgICAgaWYgKCFvcHRpb25zLmRpc2FibGVJcHRjT2Zmc2V0cykge1xuICAgICAgICAgIGRhdGEuaXB0Y09mZnNldHMgPSBuZXcgSXB0Y01hcCgpXG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VJcHRjVGFncyhcbiAgICAgICAgICBkYXRhVmlldyxcbiAgICAgICAgICBzZWdtZW50T2Zmc2V0LFxuICAgICAgICAgIHNlZ21lbnRMZW5ndGgsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBvcHRpb25zLmluY2x1ZGVJcHRjVGFncyxcbiAgICAgICAgICBvcHRpb25zLmV4Y2x1ZGVJcHRjVGFncyB8fCB7IDIwMjogdHJ1ZSB9IC8vIE9iamVjdFByZXZpZXdEYXRhXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG9mZnNldCArPSAxXG4gICAgfVxuICB9XG5cbiAgLy8gUmVnaXN0ZXJzIHRoaXMgSVBUQyBwYXJzZXIgZm9yIHRoZSBBUFAxMyBKUEVHIG1ldGEgZGF0YSBzZWdtZW50OlxuICBsb2FkSW1hZ2UubWV0YURhdGFQYXJzZXJzLmpwZWdbMHhmZmVkXS5wdXNoKGxvYWRJbWFnZS5wYXJzZUlwdGNEYXRhKVxuXG4gIGxvYWRJbWFnZS5JcHRjTWFwID0gSXB0Y01hcFxuXG4gIC8vIEFkZHMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHRvIHRoZSBwYXJzZU1ldGFEYXRhIGNhbGxiYWNrIGRhdGE6XG4gIC8vIC0gaXB0YzogVGhlIGlwdGMgdGFncywgcGFyc2VkIGJ5IHRoZSBwYXJzZUlwdGNEYXRhIG1ldGhvZFxuXG4gIC8vIEFkZHMgdGhlIGZvbGxvd2luZyBvcHRpb25zIHRvIHRoZSBwYXJzZU1ldGFEYXRhIG1ldGhvZDpcbiAgLy8gLSBkaXNhYmxlSXB0YzogRGlzYWJsZXMgSVBUQyBwYXJzaW5nIHdoZW4gdHJ1ZS5cbiAgLy8gLSBkaXNhYmxlSXB0Y09mZnNldHM6IERpc2FibGVzIHN0b3JpbmcgSVBUQyB0YWcgb2Zmc2V0cyB3aGVuIHRydWUuXG4gIC8vIC0gaW5jbHVkZUlwdGNUYWdzOiBBIG1hcCBvZiBJUFRDIHRhZ3MgdG8gaW5jbHVkZSBmb3IgcGFyc2luZy5cbiAgLy8gLSBleGNsdWRlSXB0Y1RhZ3M6IEEgbWFwIG9mIElQVEMgdGFncyB0byBleGNsdWRlIGZyb20gcGFyc2luZy5cbn0pXG4iLCIvKlxuICogSmF2YVNjcmlwdCBMb2FkIEltYWdlIE1ldGFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuICpcbiAqIENvcHlyaWdodCAyMDEzLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogSW1hZ2UgbWV0YSBkYXRhIGhhbmRsaW5nIGltcGxlbWVudGF0aW9uXG4gKiBiYXNlZCBvbiB0aGUgaGVscCBhbmQgY29udHJpYnV0aW9uIG9mXG4gKiBBY2hpbSBTdMO2aHIuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUsIERhdGFWaWV3LCBVaW50OEFycmF5ICovXG5cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgQU1EIG1vZHVsZTpcbiAgICBkZWZpbmUoWycuL2xvYWQtaW1hZ2UnXSwgZmFjdG9yeSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnLi9sb2FkLWltYWdlJykpXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzOlxuICAgIGZhY3Rvcnkod2luZG93LmxvYWRJbWFnZSlcbiAgfVxufSkoZnVuY3Rpb24gKGxvYWRJbWFnZSkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgaGFzYmxvYlNsaWNlID1cbiAgICB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAoQmxvYi5wcm90b3R5cGUuc2xpY2UgfHxcbiAgICAgIEJsb2IucHJvdG90eXBlLndlYmtpdFNsaWNlIHx8XG4gICAgICBCbG9iLnByb3RvdHlwZS5tb3pTbGljZSlcblxuICBsb2FkSW1hZ2UuYmxvYlNsaWNlID1cbiAgICBoYXNibG9iU2xpY2UgJiZcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2xpY2UgPSB0aGlzLnNsaWNlIHx8IHRoaXMud2Via2l0U2xpY2UgfHwgdGhpcy5tb3pTbGljZVxuICAgICAgcmV0dXJuIHNsaWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgbG9hZEltYWdlLm1ldGFEYXRhUGFyc2VycyA9IHtcbiAgICBqcGVnOiB7XG4gICAgICAweGZmZTE6IFtdLCAvLyBBUFAxIG1hcmtlclxuICAgICAgMHhmZmVkOiBbXSAvLyBBUFAxMyBtYXJrZXJcbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZXMgaW1hZ2UgbWV0YSBkYXRhIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgd2l0aCBhbiBvYmplY3QgYXJndW1lbnRcbiAgLy8gd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gIC8vICogaW1hZ2VIZWFkOiBUaGUgY29tcGxldGUgaW1hZ2UgaGVhZCBhcyBBcnJheUJ1ZmZlciAoVWludDhBcnJheSBmb3IgSUUxMClcbiAgLy8gVGhlIG9wdGlvbnMgYXJndW1lbnQgYWNjZXB0cyBhbiBvYmplY3QgYW5kIHN1cHBvcnRzIHRoZSBmb2xsb3dpbmdcbiAgLy8gcHJvcGVydGllczpcbiAgLy8gKiBtYXhNZXRhRGF0YVNpemU6IERlZmluZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGJ5dGVzIHRvIHBhcnNlLlxuICAvLyAqIGRpc2FibGVJbWFnZUhlYWQ6IERpc2FibGVzIGNyZWF0aW5nIHRoZSBpbWFnZUhlYWQgcHJvcGVydHkuXG4gIGxvYWRJbWFnZS5wYXJzZU1ldGFEYXRhID0gZnVuY3Rpb24gKGZpbGUsIGNhbGxiYWNrLCBvcHRpb25zLCBkYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBkYXRhID0gZGF0YSB8fCB7fVxuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIC8vIDI1NiBLaUIgc2hvdWxkIGNvbnRhaW4gYWxsIEVYSUYvSUNDL0lQVEMgc2VnbWVudHM6XG4gICAgdmFyIG1heE1ldGFEYXRhU2l6ZSA9IG9wdGlvbnMubWF4TWV0YURhdGFTaXplIHx8IDI2MjE0NFxuICAgIHZhciBub01ldGFEYXRhID0gIShcbiAgICAgIHR5cGVvZiBEYXRhVmlldyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIGZpbGUgJiZcbiAgICAgIGZpbGUuc2l6ZSA+PSAxMiAmJlxuICAgICAgZmlsZS50eXBlID09PSAnaW1hZ2UvanBlZycgJiZcbiAgICAgIGxvYWRJbWFnZS5ibG9iU2xpY2VcbiAgICApXG4gICAgaWYgKFxuICAgICAgbm9NZXRhRGF0YSB8fFxuICAgICAgIWxvYWRJbWFnZS5yZWFkRmlsZShcbiAgICAgICAgbG9hZEltYWdlLmJsb2JTbGljZS5jYWxsKGZpbGUsIDAsIG1heE1ldGFEYXRhU2l6ZSksXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmVycm9yKSB7XG4gICAgICAgICAgICAvLyBGaWxlUmVhZGVyIGVycm9yXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZXJyb3IpXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE5vdGUgb24gZW5kaWFubmVzczpcbiAgICAgICAgICAvLyBTaW5jZSB0aGUgbWFya2VyIGFuZCBsZW5ndGggYnl0ZXMgaW4gSlBFRyBmaWxlcyBhcmUgYWx3YXlzXG4gICAgICAgICAgLy8gc3RvcmVkIGluIGJpZyBlbmRpYW4gb3JkZXIsIHdlIGNhbiBsZWF2ZSB0aGUgZW5kaWFuIHBhcmFtZXRlclxuICAgICAgICAgIC8vIG9mIHRoZSBEYXRhVmlldyBtZXRob2RzIHVuZGVmaW5lZCwgZGVmYXVsdGluZyB0byBiaWcgZW5kaWFuLlxuICAgICAgICAgIHZhciBidWZmZXIgPSBlLnRhcmdldC5yZXN1bHRcbiAgICAgICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKVxuICAgICAgICAgIHZhciBvZmZzZXQgPSAyXG4gICAgICAgICAgdmFyIG1heE9mZnNldCA9IGRhdGFWaWV3LmJ5dGVMZW5ndGggLSA0XG4gICAgICAgICAgdmFyIGhlYWRMZW5ndGggPSBvZmZzZXRcbiAgICAgICAgICB2YXIgbWFya2VyQnl0ZXNcbiAgICAgICAgICB2YXIgbWFya2VyTGVuZ3RoXG4gICAgICAgICAgdmFyIHBhcnNlcnNcbiAgICAgICAgICB2YXIgaVxuICAgICAgICAgIC8vIENoZWNrIGZvciB0aGUgSlBFRyBtYXJrZXIgKDB4ZmZkOCk6XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNigwKSA9PT0gMHhmZmQ4KSB7XG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgICAgIG1hcmtlckJ5dGVzID0gZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldClcbiAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBBUFBuICgweGZmZU4pIGFuZCBDT00gKDB4ZmZmZSkgbWFya2VycyxcbiAgICAgICAgICAgICAgLy8gd2hpY2ggY29udGFpbiBhcHBsaWNhdGlvbi1zcGVjaWZpYyBtZXRhLWRhdGEgbGlrZVxuICAgICAgICAgICAgICAvLyBFeGlmLCBJQ0MgYW5kIElQVEMgZGF0YSBhbmQgdGV4dCBjb21tZW50czpcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChtYXJrZXJCeXRlcyA+PSAweGZmZTAgJiYgbWFya2VyQnl0ZXMgPD0gMHhmZmVmKSB8fFxuICAgICAgICAgICAgICAgIG1hcmtlckJ5dGVzID09PSAweGZmZmVcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG1hcmtlciBieXRlcyAoMikgYXJlIGFsd2F5cyBmb2xsb3dlZCBieVxuICAgICAgICAgICAgICAgIC8vIHRoZSBsZW5ndGggYnl0ZXMgKDIpLCBpbmRpY2F0aW5nIHRoZSBsZW5ndGggb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gbWFya2VyIHNlZ21lbnQsIHdoaWNoIGluY2x1ZGVzIHRoZSBsZW5ndGggYnl0ZXMsXG4gICAgICAgICAgICAgICAgLy8gYnV0IG5vdCB0aGUgbWFya2VyIGJ5dGVzLCBzbyB3ZSBhZGQgMjpcbiAgICAgICAgICAgICAgICBtYXJrZXJMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMikgKyAyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCArIG1hcmtlckxlbmd0aCA+IGRhdGFWaWV3LmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBtZXRhIGRhdGE6IEludmFsaWQgc2VnbWVudCBzaXplLicpXG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJzZXJzID0gbG9hZEltYWdlLm1ldGFEYXRhUGFyc2Vycy5qcGVnW21hcmtlckJ5dGVzXVxuICAgICAgICAgICAgICAgIGlmIChwYXJzZXJzICYmICFvcHRpb25zLmRpc2FibGVNZXRhRGF0YVBhcnNlcnMpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlcnNbaV0uY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IG1hcmtlckxlbmd0aFxuICAgICAgICAgICAgICAgIGhlYWRMZW5ndGggPSBvZmZzZXRcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gQVBQbiBvciBDT00gbWFya2VyLCBwcm9iYWJseSBzYWZlIHRvXG4gICAgICAgICAgICAgICAgLy8gYXNzdW1lIHRoYXQgdGhpcyBpcyB0aGUgZW5kIG9mIHRoZSBtZXRhIGRhdGFcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNZXRhIGxlbmd0aCBtdXN0IGJlIGxvbmdlciB0aGFuIEpQRUcgbWFya2VyICgyKVxuICAgICAgICAgICAgLy8gcGx1cyBBUFBuIG1hcmtlciAoMiksIGZvbGxvd2VkIGJ5IGxlbmd0aCBieXRlcyAoMik6XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZGlzYWJsZUltYWdlSGVhZCAmJiBoZWFkTGVuZ3RoID4gNikge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyLnNsaWNlKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5pbWFnZUhlYWQgPSBidWZmZXIuc2xpY2UoMCwgaGVhZExlbmd0aClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBJRTEwLCB3aGljaCBkb2VzIG5vdCB5ZXRcbiAgICAgICAgICAgICAgICAvLyBzdXBwb3J0IEFycmF5QnVmZmVyLnNsaWNlOlxuICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2VIZWFkID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKS5zdWJhcnJheSgwLCBoZWFkTGVuZ3RoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBKUEVHIGZpbGU6IE1pc3NpbmcgSlBFRyBtYXJrZXIuJylcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgJ3JlYWRBc0FycmF5QnVmZmVyJ1xuICAgICAgKVxuICAgICkge1xuICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICB9XG4gIH1cblxuICAvLyBSZXBsYWNlcyB0aGUgaW1hZ2UgaGVhZCBvZiBhIEpQRUcgYmxvYiB3aXRoIHRoZSBnaXZlbiBvbmUuXG4gIC8vIENhbGxzIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBuZXcgQmxvYjpcbiAgbG9hZEltYWdlLnJlcGxhY2VIZWFkID0gZnVuY3Rpb24gKGJsb2IsIGhlYWQsIGNhbGxiYWNrKSB7XG4gICAgbG9hZEltYWdlLnBhcnNlTWV0YURhdGEoXG4gICAgICBibG9iLFxuICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgbmV3IEJsb2IoXG4gICAgICAgICAgICBbaGVhZCwgbG9hZEltYWdlLmJsb2JTbGljZS5jYWxsKGJsb2IsIGRhdGEuaW1hZ2VIZWFkLmJ5dGVMZW5ndGgpXSxcbiAgICAgICAgICAgIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICB7IG1heE1ldGFEYXRhU2l6ZTogMjU2LCBkaXNhYmxlTWV0YURhdGFQYXJzZXJzOiB0cnVlIH1cbiAgICApXG4gIH1cblxuICB2YXIgb3JpZ2luYWxUcmFuc2Zvcm0gPSBsb2FkSW1hZ2UudHJhbnNmb3JtXG4gIGxvYWRJbWFnZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoaW1nLCBvcHRpb25zLCBjYWxsYmFjaywgZmlsZSwgZGF0YSkge1xuICAgIGlmIChsb2FkSW1hZ2UuaGFzTWV0YU9wdGlvbihvcHRpb25zKSkge1xuICAgICAgbG9hZEltYWdlLnBhcnNlTWV0YURhdGEoXG4gICAgICAgIGZpbGUsXG4gICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgb3JpZ2luYWxUcmFuc2Zvcm0uY2FsbChsb2FkSW1hZ2UsIGltZywgb3B0aW9ucywgY2FsbGJhY2ssIGZpbGUsIGRhdGEpXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGRhdGFcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgb3JpZ2luYWxUcmFuc2Zvcm0uYXBwbHkobG9hZEltYWdlLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG59KVxuIiwiLypcbiAqIEphdmFTY3JpcHQgTG9hZCBJbWFnZSBPcmllbnRhdGlvblxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1Mb2FkLUltYWdlXG4gKlxuICogQ29weXJpZ2h0IDIwMTMsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIGdsb2JhbCBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICd1c2Ugc3RyaWN0J1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgZGVmaW5lKFsnLi9sb2FkLWltYWdlJywgJy4vbG9hZC1pbWFnZS1zY2FsZScsICcuL2xvYWQtaW1hZ2UtbWV0YSddLCBmYWN0b3J5KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJy4vbG9hZC1pbWFnZScpLFxuICAgICAgcmVxdWlyZSgnLi9sb2FkLWltYWdlLXNjYWxlJyksXG4gICAgICByZXF1aXJlKCcuL2xvYWQtaW1hZ2UtbWV0YScpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsczpcbiAgICBmYWN0b3J5KHdpbmRvdy5sb2FkSW1hZ2UpXG4gIH1cbn0pKGZ1bmN0aW9uIChsb2FkSW1hZ2UpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgdmFyIG9yaWdpbmFsSGFzQ2FudmFzT3B0aW9uID0gbG9hZEltYWdlLmhhc0NhbnZhc09wdGlvblxuICB2YXIgb3JpZ2luYWxIYXNNZXRhT3B0aW9uID0gbG9hZEltYWdlLmhhc01ldGFPcHRpb25cbiAgdmFyIG9yaWdpbmFsVHJhbnNmb3JtQ29vcmRpbmF0ZXMgPSBsb2FkSW1hZ2UudHJhbnNmb3JtQ29vcmRpbmF0ZXNcbiAgdmFyIG9yaWdpbmFsR2V0VHJhbnNmb3JtZWRPcHRpb25zID0gbG9hZEltYWdlLmdldFRyYW5zZm9ybWVkT3B0aW9uc1xuXG4gIDsoZnVuY3Rpb24gKCkge1xuICAgIC8vIGJsYWNrIDJ4MSBKUEVHLCB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0YSBpbmZvcm1hdGlvbiBzZXQ6XG4gICAgLy8gLSBFWElGIE9yaWVudGF0aW9uOiA2IChSb3RhdGVkIDkwwrAgQ0NXKVxuICAgIHZhciB0ZXN0SW1hZ2VVUkwgPVxuICAgICAgJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQWlSWGhwWmdBQVRVMEFLZ0FBQUFnQUFRRVNBQU1BQUFBQkFBWUFBQUEnICtcbiAgICAgICdBQUFELzJ3Q0VBQUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBJyArXG4gICAgICAnUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRScgK1xuICAgICAgJ0JBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQWYvQUFCRUlBQUVBQWdNQkVRQUNFUUVERVFIL3gnICtcbiAgICAgICdBQktBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUxFQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUVBQUFBQUFBQUFBQUFBQUFBJyArXG4gICAgICAnQUFBQUFFUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BREFNQkFBSVJBeEVBUHdBLzhILy8yUT09J1xuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDaGVjayBpZiBicm93c2VyIHN1cHBvcnRzIGF1dG9tYXRpYyBpbWFnZSBvcmllbnRhdGlvbjpcbiAgICAgIGxvYWRJbWFnZS5vcmllbnRhdGlvbiA9IGltZy53aWR0aCA9PT0gMSAmJiBpbWcuaGVpZ2h0ID09PSAyXG4gICAgfVxuICAgIGltZy5zcmMgPSB0ZXN0SW1hZ2VVUkxcbiAgfSkoKVxuXG4gIC8vIERldGVybWluZXMgaWYgdGhlIHRhcmdldCBpbWFnZSBzaG91bGQgYmUgYSBjYW52YXMgZWxlbWVudDpcbiAgbG9hZEltYWdlLmhhc0NhbnZhc09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICghIW9wdGlvbnMub3JpZW50YXRpb24gPT09IHRydWUgJiYgIWxvYWRJbWFnZS5vcmllbnRhdGlvbikgfHxcbiAgICAgIChvcHRpb25zLm9yaWVudGF0aW9uID4gMSAmJiBvcHRpb25zLm9yaWVudGF0aW9uIDwgOSkgfHxcbiAgICAgIG9yaWdpbmFsSGFzQ2FudmFzT3B0aW9uLmNhbGwobG9hZEltYWdlLCBvcHRpb25zKVxuICAgIClcbiAgfVxuXG4gIC8vIERldGVybWluZXMgaWYgbWV0YSBkYXRhIHNob3VsZCBiZSBsb2FkZWQgYXV0b21hdGljYWxseTpcbiAgbG9hZEltYWdlLmhhc01ldGFPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiAoXG4gICAgICAob3B0aW9ucyAmJiBvcHRpb25zLm9yaWVudGF0aW9uID09PSB0cnVlICYmICFsb2FkSW1hZ2Uub3JpZW50YXRpb24pIHx8XG4gICAgICBvcmlnaW5hbEhhc01ldGFPcHRpb24uY2FsbChsb2FkSW1hZ2UsIG9wdGlvbnMpXG4gICAgKVxuICB9XG5cbiAgLy8gVHJhbnNmb3JtIGltYWdlIG9yaWVudGF0aW9uIGJhc2VkIG9uXG4gIC8vIHRoZSBnaXZlbiBFWElGIG9yaWVudGF0aW9uIG9wdGlvbjpcbiAgbG9hZEltYWdlLnRyYW5zZm9ybUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKGNhbnZhcywgb3B0aW9ucykge1xuICAgIG9yaWdpbmFsVHJhbnNmb3JtQ29vcmRpbmF0ZXMuY2FsbChsb2FkSW1hZ2UsIGNhbnZhcywgb3B0aW9ucylcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB2YXIgd2lkdGggPSBjYW52YXMud2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gY2FudmFzLmhlaWdodFxuICAgIHZhciBzdHlsZVdpZHRoID0gY2FudmFzLnN0eWxlLndpZHRoXG4gICAgdmFyIHN0eWxlSGVpZ2h0ID0gY2FudmFzLnN0eWxlLmhlaWdodFxuICAgIHZhciBvcmllbnRhdGlvbiA9IG9wdGlvbnMub3JpZW50YXRpb25cbiAgICBpZiAoIShvcmllbnRhdGlvbiA+IDEgJiYgb3JpZW50YXRpb24gPCA5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA+IDQpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGhlaWdodFxuICAgICAgY2FudmFzLmhlaWdodCA9IHdpZHRoXG4gICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBzdHlsZUhlaWdodFxuICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHN0eWxlV2lkdGhcbiAgICB9XG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyBob3Jpem9udGFsIGZsaXBcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCwgMClcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAzOlxuICAgICAgICAvLyAxODDCsCByb3RhdGUgbGVmdFxuICAgICAgICBjdHgudHJhbnNsYXRlKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGN0eC5yb3RhdGUoTWF0aC5QSSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gdmVydGljYWwgZmxpcFxuICAgICAgICBjdHgudHJhbnNsYXRlKDAsIGhlaWdodClcbiAgICAgICAgY3R4LnNjYWxlKDEsIC0xKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA1OlxuICAgICAgICAvLyB2ZXJ0aWNhbCBmbGlwICsgOTAgcm90YXRlIHJpZ2h0XG4gICAgICAgIGN0eC5yb3RhdGUoMC41ICogTWF0aC5QSSlcbiAgICAgICAgY3R4LnNjYWxlKDEsIC0xKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA2OlxuICAgICAgICAvLyA5MMKwIHJvdGF0ZSByaWdodFxuICAgICAgICBjdHgucm90YXRlKDAuNSAqIE1hdGguUEkpXG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgLWhlaWdodClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBmbGlwICsgOTAgcm90YXRlIHJpZ2h0XG4gICAgICAgIGN0eC5yb3RhdGUoMC41ICogTWF0aC5QSSlcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCwgLWhlaWdodClcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA4OlxuICAgICAgICAvLyA5MMKwIHJvdGF0ZSBsZWZ0XG4gICAgICAgIGN0eC5yb3RhdGUoLTAuNSAqIE1hdGguUEkpXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXdpZHRoLCAwKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8vIFRyYW5zZm9ybXMgY29vcmRpbmF0ZSBhbmQgZGltZW5zaW9uIG9wdGlvbnNcbiAgLy8gYmFzZWQgb24gdGhlIGdpdmVuIG9yaWVudGF0aW9uIG9wdGlvbjpcbiAgbG9hZEltYWdlLmdldFRyYW5zZm9ybWVkT3B0aW9ucyA9IGZ1bmN0aW9uIChpbWcsIG9wdHMsIGRhdGEpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG9yaWdpbmFsR2V0VHJhbnNmb3JtZWRPcHRpb25zLmNhbGwobG9hZEltYWdlLCBpbWcsIG9wdHMpXG4gICAgdmFyIG9yaWVudGF0aW9uID0gb3B0aW9ucy5vcmllbnRhdGlvblxuICAgIHZhciBuZXdPcHRpb25zXG4gICAgdmFyIGlcbiAgICBpZiAob3JpZW50YXRpb24gPT09IHRydWUpIHtcbiAgICAgIGlmIChsb2FkSW1hZ2Uub3JpZW50YXRpb24pIHtcbiAgICAgICAgLy8gQnJvd3NlciBzdXBwb3J0cyBhdXRvbWF0aWMgaW1hZ2Ugb3JpZW50YXRpb25cbiAgICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICAgIH1cbiAgICAgIG9yaWVudGF0aW9uID0gZGF0YSAmJiBkYXRhLmV4aWYgJiYgZGF0YS5leGlmLmdldCgnT3JpZW50YXRpb24nKVxuICAgIH1cbiAgICBpZiAoIShvcmllbnRhdGlvbiA+IDEgJiYgb3JpZW50YXRpb24gPCA5KSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG4gICAgbmV3T3B0aW9ucyA9IHt9XG4gICAgZm9yIChpIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaSkpIHtcbiAgICAgICAgbmV3T3B0aW9uc1tpXSA9IG9wdGlvbnNbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgbmV3T3B0aW9ucy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uXG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyBob3Jpem9udGFsIGZsaXBcbiAgICAgICAgbmV3T3B0aW9ucy5sZWZ0ID0gb3B0aW9ucy5yaWdodFxuICAgICAgICBuZXdPcHRpb25zLnJpZ2h0ID0gb3B0aW9ucy5sZWZ0XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDM6XG4gICAgICAgIC8vIDE4MMKwIHJvdGF0ZSBsZWZ0XG4gICAgICAgIG5ld09wdGlvbnMubGVmdCA9IG9wdGlvbnMucmlnaHRcbiAgICAgICAgbmV3T3B0aW9ucy50b3AgPSBvcHRpb25zLmJvdHRvbVxuICAgICAgICBuZXdPcHRpb25zLnJpZ2h0ID0gb3B0aW9ucy5sZWZ0XG4gICAgICAgIG5ld09wdGlvbnMuYm90dG9tID0gb3B0aW9ucy50b3BcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gdmVydGljYWwgZmxpcFxuICAgICAgICBuZXdPcHRpb25zLnRvcCA9IG9wdGlvbnMuYm90dG9tXG4gICAgICAgIG5ld09wdGlvbnMuYm90dG9tID0gb3B0aW9ucy50b3BcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgLy8gdmVydGljYWwgZmxpcCArIDkwIHJvdGF0ZSByaWdodFxuICAgICAgICBuZXdPcHRpb25zLmxlZnQgPSBvcHRpb25zLnRvcFxuICAgICAgICBuZXdPcHRpb25zLnRvcCA9IG9wdGlvbnMubGVmdFxuICAgICAgICBuZXdPcHRpb25zLnJpZ2h0ID0gb3B0aW9ucy5ib3R0b21cbiAgICAgICAgbmV3T3B0aW9ucy5ib3R0b20gPSBvcHRpb25zLnJpZ2h0XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDY6XG4gICAgICAgIC8vIDkwwrAgcm90YXRlIHJpZ2h0XG4gICAgICAgIG5ld09wdGlvbnMubGVmdCA9IG9wdGlvbnMudG9wXG4gICAgICAgIG5ld09wdGlvbnMudG9wID0gb3B0aW9ucy5yaWdodFxuICAgICAgICBuZXdPcHRpb25zLnJpZ2h0ID0gb3B0aW9ucy5ib3R0b21cbiAgICAgICAgbmV3T3B0aW9ucy5ib3R0b20gPSBvcHRpb25zLmxlZnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBmbGlwICsgOTAgcm90YXRlIHJpZ2h0XG4gICAgICAgIG5ld09wdGlvbnMubGVmdCA9IG9wdGlvbnMuYm90dG9tXG4gICAgICAgIG5ld09wdGlvbnMudG9wID0gb3B0aW9ucy5yaWdodFxuICAgICAgICBuZXdPcHRpb25zLnJpZ2h0ID0gb3B0aW9ucy50b3BcbiAgICAgICAgbmV3T3B0aW9ucy5ib3R0b20gPSBvcHRpb25zLmxlZnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgLy8gOTDCsCByb3RhdGUgbGVmdFxuICAgICAgICBuZXdPcHRpb25zLmxlZnQgPSBvcHRpb25zLmJvdHRvbVxuICAgICAgICBuZXdPcHRpb25zLnRvcCA9IG9wdGlvbnMubGVmdFxuICAgICAgICBuZXdPcHRpb25zLnJpZ2h0ID0gb3B0aW9ucy50b3BcbiAgICAgICAgbmV3T3B0aW9ucy5ib3R0b20gPSBvcHRpb25zLnJpZ2h0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChuZXdPcHRpb25zLm9yaWVudGF0aW9uID4gNCkge1xuICAgICAgbmV3T3B0aW9ucy5tYXhXaWR0aCA9IG9wdGlvbnMubWF4SGVpZ2h0XG4gICAgICBuZXdPcHRpb25zLm1heEhlaWdodCA9IG9wdGlvbnMubWF4V2lkdGhcbiAgICAgIG5ld09wdGlvbnMubWluV2lkdGggPSBvcHRpb25zLm1pbkhlaWdodFxuICAgICAgbmV3T3B0aW9ucy5taW5IZWlnaHQgPSBvcHRpb25zLm1pbldpZHRoXG4gICAgICBuZXdPcHRpb25zLnNvdXJjZVdpZHRoID0gb3B0aW9ucy5zb3VyY2VIZWlnaHRcbiAgICAgIG5ld09wdGlvbnMuc291cmNlSGVpZ2h0ID0gb3B0aW9ucy5zb3VyY2VXaWR0aFxuICAgIH1cbiAgICByZXR1cm4gbmV3T3B0aW9uc1xuICB9XG59KVxuIiwiLypcbiAqIEphdmFTY3JpcHQgTG9hZCBJbWFnZSBTY2FsaW5nXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LUxvYWQtSW1hZ2VcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgQU1EIG1vZHVsZTpcbiAgICBkZWZpbmUoWycuL2xvYWQtaW1hZ2UnXSwgZmFjdG9yeSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnLi9sb2FkLWltYWdlJykpXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzOlxuICAgIGZhY3Rvcnkod2luZG93LmxvYWRJbWFnZSlcbiAgfVxufSkoZnVuY3Rpb24gKGxvYWRJbWFnZSkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgb3JpZ2luYWxUcmFuc2Zvcm0gPSBsb2FkSW1hZ2UudHJhbnNmb3JtXG5cbiAgbG9hZEltYWdlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChpbWcsIG9wdGlvbnMsIGNhbGxiYWNrLCBmaWxlLCBkYXRhKSB7XG4gICAgb3JpZ2luYWxUcmFuc2Zvcm0uY2FsbChcbiAgICAgIGxvYWRJbWFnZSxcbiAgICAgIGxvYWRJbWFnZS5zY2FsZShpbWcsIG9wdGlvbnMsIGRhdGEpLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgZmlsZSxcbiAgICAgIGRhdGFcbiAgICApXG4gIH1cblxuICAvLyBUcmFuc2Zvcm0gaW1hZ2UgY29vcmRpbmF0ZXMsIGFsbG93cyB0byBvdmVycmlkZSBlLmcuXG4gIC8vIHRoZSBjYW52YXMgb3JpZW50YXRpb24gYmFzZWQgb24gdGhlIG9yaWVudGF0aW9uIG9wdGlvbixcbiAgLy8gZ2V0cyBjYW52YXMsIG9wdGlvbnMgcGFzc2VkIGFzIGFyZ3VtZW50czpcbiAgbG9hZEltYWdlLnRyYW5zZm9ybUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKCkge31cblxuICAvLyBSZXR1cm5zIHRyYW5zZm9ybWVkIG9wdGlvbnMsIGFsbG93cyB0byBvdmVycmlkZSBlLmcuXG4gIC8vIG1heFdpZHRoLCBtYXhIZWlnaHQgYW5kIGNyb3Agb3B0aW9ucyBiYXNlZCBvbiB0aGUgYXNwZWN0UmF0aW8uXG4gIC8vIGdldHMgaW1nLCBvcHRpb25zIHBhc3NlZCBhcyBhcmd1bWVudHM6XG4gIGxvYWRJbWFnZS5nZXRUcmFuc2Zvcm1lZE9wdGlvbnMgPSBmdW5jdGlvbiAoaW1nLCBvcHRpb25zKSB7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpb1xuICAgIHZhciBuZXdPcHRpb25zXG4gICAgdmFyIGlcbiAgICB2YXIgd2lkdGhcbiAgICB2YXIgaGVpZ2h0XG4gICAgaWYgKCFhc3BlY3RSYXRpbykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG4gICAgbmV3T3B0aW9ucyA9IHt9XG4gICAgZm9yIChpIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaSkpIHtcbiAgICAgICAgbmV3T3B0aW9uc1tpXSA9IG9wdGlvbnNbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgbmV3T3B0aW9ucy5jcm9wID0gdHJ1ZVxuICAgIHdpZHRoID0gaW1nLm5hdHVyYWxXaWR0aCB8fCBpbWcud2lkdGhcbiAgICBoZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodCB8fCBpbWcuaGVpZ2h0XG4gICAgaWYgKHdpZHRoIC8gaGVpZ2h0ID4gYXNwZWN0UmF0aW8pIHtcbiAgICAgIG5ld09wdGlvbnMubWF4V2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpb1xuICAgICAgbmV3T3B0aW9ucy5tYXhIZWlnaHQgPSBoZWlnaHRcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3T3B0aW9ucy5tYXhXaWR0aCA9IHdpZHRoXG4gICAgICBuZXdPcHRpb25zLm1heEhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW9cbiAgICB9XG4gICAgcmV0dXJuIG5ld09wdGlvbnNcbiAgfVxuXG4gIC8vIENhbnZhcyByZW5kZXIgbWV0aG9kLCBhbGxvd3MgdG8gaW1wbGVtZW50IGEgZGlmZmVyZW50IHJlbmRlcmluZyBhbGdvcml0aG06XG4gIGxvYWRJbWFnZS5yZW5kZXJJbWFnZVRvQ2FudmFzID0gZnVuY3Rpb24gKFxuICAgIGNhbnZhcyxcbiAgICBpbWcsXG4gICAgc291cmNlWCxcbiAgICBzb3VyY2VZLFxuICAgIHNvdXJjZVdpZHRoLFxuICAgIHNvdXJjZUhlaWdodCxcbiAgICBkZXN0WCxcbiAgICBkZXN0WSxcbiAgICBkZXN0V2lkdGgsXG4gICAgZGVzdEhlaWdodCxcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGlmIChvcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbWFnZVNtb290aGluZ1F1YWxpdHkpIHtcbiAgICAgIGN0eC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBvcHRpb25zLmltYWdlU21vb3RoaW5nUXVhbGl0eVxuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgaW1nLFxuICAgICAgc291cmNlWCxcbiAgICAgIHNvdXJjZVksXG4gICAgICBzb3VyY2VXaWR0aCxcbiAgICAgIHNvdXJjZUhlaWdodCxcbiAgICAgIGRlc3RYLFxuICAgICAgZGVzdFksXG4gICAgICBkZXN0V2lkdGgsXG4gICAgICBkZXN0SGVpZ2h0XG4gICAgKVxuICAgIHJldHVybiBjYW52YXNcbiAgfVxuXG4gIC8vIERldGVybWluZXMgaWYgdGhlIHRhcmdldCBpbWFnZSBzaG91bGQgYmUgYSBjYW52YXMgZWxlbWVudDpcbiAgbG9hZEltYWdlLmhhc0NhbnZhc09wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuY2FudmFzIHx8IG9wdGlvbnMuY3JvcCB8fCAhIW9wdGlvbnMuYXNwZWN0UmF0aW9cbiAgfVxuXG4gIC8vIFNjYWxlcyBhbmQvb3IgY3JvcHMgdGhlIGdpdmVuIGltYWdlIChpbWcgb3IgY2FudmFzIEhUTUwgZWxlbWVudClcbiAgLy8gdXNpbmcgdGhlIGdpdmVuIG9wdGlvbnMuXG4gIC8vIFJldHVybnMgYSBjYW52YXMgb2JqZWN0IGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGNhbnZhc1xuICAvLyBhbmQgdGhlIGhhc0NhbnZhc09wdGlvbiBtZXRob2QgcmV0dXJucyB0cnVlIG9yIGEgY2FudmFzXG4gIC8vIG9iamVjdCBpcyBwYXNzZWQgYXMgaW1hZ2UsIGVsc2UgdGhlIHNjYWxlZCBpbWFnZTpcbiAgbG9hZEltYWdlLnNjYWxlID0gZnVuY3Rpb24gKGltZywgb3B0aW9ucywgZGF0YSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdmFyIHVzZUNhbnZhcyA9XG4gICAgICBpbWcuZ2V0Q29udGV4dCB8fFxuICAgICAgKGxvYWRJbWFnZS5oYXNDYW52YXNPcHRpb24ob3B0aW9ucykgJiYgY2FudmFzLmdldENvbnRleHQpXG4gICAgdmFyIHdpZHRoID0gaW1nLm5hdHVyYWxXaWR0aCB8fCBpbWcud2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gaW1nLm5hdHVyYWxIZWlnaHQgfHwgaW1nLmhlaWdodFxuICAgIHZhciBkZXN0V2lkdGggPSB3aWR0aFxuICAgIHZhciBkZXN0SGVpZ2h0ID0gaGVpZ2h0XG4gICAgdmFyIG1heFdpZHRoXG4gICAgdmFyIG1heEhlaWdodFxuICAgIHZhciBtaW5XaWR0aFxuICAgIHZhciBtaW5IZWlnaHRcbiAgICB2YXIgc291cmNlV2lkdGhcbiAgICB2YXIgc291cmNlSGVpZ2h0XG4gICAgdmFyIHNvdXJjZVhcbiAgICB2YXIgc291cmNlWVxuICAgIHZhciBwaXhlbFJhdGlvXG4gICAgdmFyIGRvd25zYW1wbGluZ1JhdGlvXG4gICAgdmFyIHRtcFxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB1cCBpbWFnZSBkaW1lbnNpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2NhbGVVcCgpIHtcbiAgICAgIHZhciBzY2FsZSA9IE1hdGgubWF4KFxuICAgICAgICAobWluV2lkdGggfHwgZGVzdFdpZHRoKSAvIGRlc3RXaWR0aCxcbiAgICAgICAgKG1pbkhlaWdodCB8fCBkZXN0SGVpZ2h0KSAvIGRlc3RIZWlnaHRcbiAgICAgIClcbiAgICAgIGlmIChzY2FsZSA+IDEpIHtcbiAgICAgICAgZGVzdFdpZHRoICo9IHNjYWxlXG4gICAgICAgIGRlc3RIZWlnaHQgKj0gc2NhbGVcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NhbGVzIGRvd24gaW1hZ2UgZGltZW5zaW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjYWxlRG93bigpIHtcbiAgICAgIHZhciBzY2FsZSA9IE1hdGgubWluKFxuICAgICAgICAobWF4V2lkdGggfHwgZGVzdFdpZHRoKSAvIGRlc3RXaWR0aCxcbiAgICAgICAgKG1heEhlaWdodCB8fCBkZXN0SGVpZ2h0KSAvIGRlc3RIZWlnaHRcbiAgICAgIClcbiAgICAgIGlmIChzY2FsZSA8IDEpIHtcbiAgICAgICAgZGVzdFdpZHRoICo9IHNjYWxlXG4gICAgICAgIGRlc3RIZWlnaHQgKj0gc2NhbGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVzZUNhbnZhcykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcHRpb25zID0gbG9hZEltYWdlLmdldFRyYW5zZm9ybWVkT3B0aW9ucyhpbWcsIG9wdGlvbnMsIGRhdGEpXG4gICAgICBzb3VyY2VYID0gb3B0aW9ucy5sZWZ0IHx8IDBcbiAgICAgIHNvdXJjZVkgPSBvcHRpb25zLnRvcCB8fCAwXG4gICAgICBpZiAob3B0aW9ucy5zb3VyY2VXaWR0aCkge1xuICAgICAgICBzb3VyY2VXaWR0aCA9IG9wdGlvbnMuc291cmNlV2lkdGhcbiAgICAgICAgaWYgKG9wdGlvbnMucmlnaHQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmxlZnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNvdXJjZVggPSB3aWR0aCAtIHNvdXJjZVdpZHRoIC0gb3B0aW9ucy5yaWdodFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VyY2VXaWR0aCA9IHdpZHRoIC0gc291cmNlWCAtIChvcHRpb25zLnJpZ2h0IHx8IDApXG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5zb3VyY2VIZWlnaHQpIHtcbiAgICAgICAgc291cmNlSGVpZ2h0ID0gb3B0aW9ucy5zb3VyY2VIZWlnaHRcbiAgICAgICAgaWYgKG9wdGlvbnMuYm90dG9tICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy50b3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNvdXJjZVkgPSBoZWlnaHQgLSBzb3VyY2VIZWlnaHQgLSBvcHRpb25zLmJvdHRvbVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VyY2VIZWlnaHQgPSBoZWlnaHQgLSBzb3VyY2VZIC0gKG9wdGlvbnMuYm90dG9tIHx8IDApXG4gICAgICB9XG4gICAgICBkZXN0V2lkdGggPSBzb3VyY2VXaWR0aFxuICAgICAgZGVzdEhlaWdodCA9IHNvdXJjZUhlaWdodFxuICAgIH1cbiAgICBtYXhXaWR0aCA9IG9wdGlvbnMubWF4V2lkdGhcbiAgICBtYXhIZWlnaHQgPSBvcHRpb25zLm1heEhlaWdodFxuICAgIG1pbldpZHRoID0gb3B0aW9ucy5taW5XaWR0aFxuICAgIG1pbkhlaWdodCA9IG9wdGlvbnMubWluSGVpZ2h0XG4gICAgaWYgKHVzZUNhbnZhcyAmJiBtYXhXaWR0aCAmJiBtYXhIZWlnaHQgJiYgb3B0aW9ucy5jcm9wKSB7XG4gICAgICBkZXN0V2lkdGggPSBtYXhXaWR0aFxuICAgICAgZGVzdEhlaWdodCA9IG1heEhlaWdodFxuICAgICAgdG1wID0gc291cmNlV2lkdGggLyBzb3VyY2VIZWlnaHQgLSBtYXhXaWR0aCAvIG1heEhlaWdodFxuICAgICAgaWYgKHRtcCA8IDApIHtcbiAgICAgICAgc291cmNlSGVpZ2h0ID0gKG1heEhlaWdodCAqIHNvdXJjZVdpZHRoKSAvIG1heFdpZHRoXG4gICAgICAgIGlmIChvcHRpb25zLnRvcCA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuYm90dG9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzb3VyY2VZID0gKGhlaWdodCAtIHNvdXJjZUhlaWdodCkgLyAyXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodG1wID4gMCkge1xuICAgICAgICBzb3VyY2VXaWR0aCA9IChtYXhXaWR0aCAqIHNvdXJjZUhlaWdodCkgLyBtYXhIZWlnaHRcbiAgICAgICAgaWYgKG9wdGlvbnMubGVmdCA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNvdXJjZVggPSAod2lkdGggLSBzb3VyY2VXaWR0aCkgLyAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuY29udGFpbiB8fCBvcHRpb25zLmNvdmVyKSB7XG4gICAgICAgIG1pbldpZHRoID0gbWF4V2lkdGggPSBtYXhXaWR0aCB8fCBtaW5XaWR0aFxuICAgICAgICBtaW5IZWlnaHQgPSBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgfHwgbWluSGVpZ2h0XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5jb3Zlcikge1xuICAgICAgICBzY2FsZURvd24oKVxuICAgICAgICBzY2FsZVVwKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlVXAoKVxuICAgICAgICBzY2FsZURvd24oKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlQ2FudmFzKSB7XG4gICAgICBwaXhlbFJhdGlvID0gb3B0aW9ucy5waXhlbFJhdGlvXG4gICAgICBpZiAocGl4ZWxSYXRpbyA+IDEpIHtcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gZGVzdFdpZHRoICsgJ3B4J1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gZGVzdEhlaWdodCArICdweCdcbiAgICAgICAgZGVzdFdpZHRoICo9IHBpeGVsUmF0aW9cbiAgICAgICAgZGVzdEhlaWdodCAqPSBwaXhlbFJhdGlvXG4gICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNjYWxlKHBpeGVsUmF0aW8sIHBpeGVsUmF0aW8pXG4gICAgICB9XG4gICAgICBkb3duc2FtcGxpbmdSYXRpbyA9IG9wdGlvbnMuZG93bnNhbXBsaW5nUmF0aW9cbiAgICAgIGlmIChcbiAgICAgICAgZG93bnNhbXBsaW5nUmF0aW8gPiAwICYmXG4gICAgICAgIGRvd25zYW1wbGluZ1JhdGlvIDwgMSAmJlxuICAgICAgICBkZXN0V2lkdGggPCBzb3VyY2VXaWR0aCAmJlxuICAgICAgICBkZXN0SGVpZ2h0IDwgc291cmNlSGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKHNvdXJjZVdpZHRoICogZG93bnNhbXBsaW5nUmF0aW8gPiBkZXN0V2lkdGgpIHtcbiAgICAgICAgICBjYW52YXMud2lkdGggPSBzb3VyY2VXaWR0aCAqIGRvd25zYW1wbGluZ1JhdGlvXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNvdXJjZUhlaWdodCAqIGRvd25zYW1wbGluZ1JhdGlvXG4gICAgICAgICAgbG9hZEltYWdlLnJlbmRlckltYWdlVG9DYW52YXMoXG4gICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICBpbWcsXG4gICAgICAgICAgICBzb3VyY2VYLFxuICAgICAgICAgICAgc291cmNlWSxcbiAgICAgICAgICAgIHNvdXJjZVdpZHRoLFxuICAgICAgICAgICAgc291cmNlSGVpZ2h0LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgIClcbiAgICAgICAgICBzb3VyY2VYID0gMFxuICAgICAgICAgIHNvdXJjZVkgPSAwXG4gICAgICAgICAgc291cmNlV2lkdGggPSBjYW52YXMud2lkdGhcbiAgICAgICAgICBzb3VyY2VIZWlnaHQgPSBjYW52YXMuaGVpZ2h0XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgICBpbWcud2lkdGggPSBzb3VyY2VXaWR0aFxuICAgICAgICAgIGltZy5oZWlnaHQgPSBzb3VyY2VIZWlnaHRcbiAgICAgICAgICBsb2FkSW1hZ2UucmVuZGVySW1hZ2VUb0NhbnZhcyhcbiAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgc291cmNlV2lkdGgsXG4gICAgICAgICAgICBzb3VyY2VIZWlnaHQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHNvdXJjZVdpZHRoLFxuICAgICAgICAgICAgc291cmNlSGVpZ2h0LFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FudmFzLndpZHRoID0gZGVzdFdpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZGVzdEhlaWdodFxuICAgICAgbG9hZEltYWdlLnRyYW5zZm9ybUNvb3JkaW5hdGVzKGNhbnZhcywgb3B0aW9ucylcbiAgICAgIHJldHVybiBsb2FkSW1hZ2UucmVuZGVySW1hZ2VUb0NhbnZhcyhcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBpbWcsXG4gICAgICAgIHNvdXJjZVgsXG4gICAgICAgIHNvdXJjZVksXG4gICAgICAgIHNvdXJjZVdpZHRoLFxuICAgICAgICBzb3VyY2VIZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGRlc3RXaWR0aCxcbiAgICAgICAgZGVzdEhlaWdodCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIH1cbiAgICBpbWcud2lkdGggPSBkZXN0V2lkdGhcbiAgICBpbWcuaGVpZ2h0ID0gZGVzdEhlaWdodFxuICAgIHJldHVybiBpbWdcbiAgfVxufSlcbiIsIi8qXG4gKiBKYXZhU2NyaXB0IExvYWQgSW1hZ2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCB3ZWJraXRVUkwsIG1vZHVsZSAqL1xuXG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBpbWFnZSBmb3IgYSBnaXZlbiBGaWxlIG9iamVjdC5cbiAgICogSW52b2tlcyB0aGUgY2FsbGJhY2sgd2l0aCBhbiBpbWcgb3Igb3B0aW9uYWwgY2FudmFzIGVsZW1lbnRcbiAgICogKGlmIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlcikgYXMgcGFyYW1ldGVyOi5cbiAgICpcbiAgICogQHBhcmFtIHtGaWxlfEJsb2J8c3RyaW5nfSBmaWxlIEZpbGUgb3IgQmxvYiBvYmplY3Qgb3IgaW1hZ2UgVVJMXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gSW1hZ2UgbG9hZCBldmVudCBjYWxsYmFja1xuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtIVE1MSW1hZ2VFbGVtZW50fEhUTUxDYW52YXNFbGVtZW50fEZpbGVSZWFkZXJ9IGltYWdlIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gbG9hZEltYWdlKGZpbGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgdmFyIHVybFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciB0aGUgZmV0Y2hCbG9iIGNhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jsb2J9IGJsb2IgQmxvYiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZmV0Y2hCbG9iQ2FsbGJhY2soYmxvYiwgZXJyKSB7XG4gICAgICBpZiAoZXJyKSBjb25zb2xlLmxvZyhlcnIpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgaWYgKGJsb2IgJiYgbG9hZEltYWdlLmlzSW5zdGFuY2VPZignQmxvYicsIGJsb2IpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBmaWxlID0gYmxvYlxuICAgICAgICB1cmwgPSBsb2FkSW1hZ2UuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSBmaWxlXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBvcHRpb25zLmNyb3NzT3JpZ2luXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGltZy5zcmMgPSB1cmxcbiAgICB9XG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBsb2FkSW1hZ2Uub25lcnJvcihpbWcsIGV2ZW50LCBmaWxlLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKVxuICAgIH1cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gbG9hZEltYWdlLm9ubG9hZChpbWcsIGV2ZW50LCBmaWxlLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAobG9hZEltYWdlLmhhc01ldGFPcHRpb24ob3B0aW9ucykpIHtcbiAgICAgICAgbG9hZEltYWdlLmZldGNoQmxvYihmaWxlLCBmZXRjaEJsb2JDYWxsYmFjaywgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZldGNoQmxvYkNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbWdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbG9hZEltYWdlLmlzSW5zdGFuY2VPZignQmxvYicsIGZpbGUpIHx8XG4gICAgICAvLyBGaWxlcyBhcmUgYWxzbyBCbG9iIGluc3RhbmNlcywgYnV0IHNvbWUgYnJvd3NlcnNcbiAgICAgIC8vIChGaXJlZm94IDMuNikgc3VwcG9ydCB0aGUgRmlsZSBBUEkgYnV0IG5vdCBCbG9iczpcbiAgICAgIGxvYWRJbWFnZS5pc0luc3RhbmNlT2YoJ0ZpbGUnLCBmaWxlKVxuICAgICkge1xuICAgICAgdXJsID0gbG9hZEltYWdlLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgICAgaWYgKHVybCkge1xuICAgICAgICBpbWcuc3JjID0gdXJsXG4gICAgICAgIHJldHVybiBpbWdcbiAgICAgIH1cbiAgICAgIHJldHVybiBsb2FkSW1hZ2UucmVhZEZpbGUoZmlsZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnJlc3VsdCkge1xuICAgICAgICAgIGltZy5zcmMgPSB0YXJnZXQucmVzdWx0XG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvLyBUaGUgY2hlY2sgZm9yIFVSTC5yZXZva2VPYmplY3RVUkwgZml4ZXMgYW4gaXNzdWUgd2l0aCBPcGVyYSAxMixcbiAgLy8gd2hpY2ggcHJvdmlkZXMgVVJMLmNyZWF0ZU9iamVjdFVSTCBidXQgZG9lc24ndCBwcm9wZXJseSBpbXBsZW1lbnQgaXQ6XG4gIHZhciB1cmxBUEkgPVxuICAgICgkLmNyZWF0ZU9iamVjdFVSTCAmJiAkKSB8fFxuICAgICgkLlVSTCAmJiBVUkwucmV2b2tlT2JqZWN0VVJMICYmIFVSTCkgfHxcbiAgICAoJC53ZWJraXRVUkwgJiYgd2Via2l0VVJMKVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV2b2tlIGFuIG9iamVjdCBVUkxcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBCbG9iIE9iamVjdCBVUkxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gcmV2b2tlSGVscGVyKHVybCwgb3B0aW9ucykge1xuICAgIGlmICh1cmwgJiYgdXJsLnNsaWNlKDAsIDUpID09PSAnYmxvYjonICYmICEob3B0aW9ucyAmJiBvcHRpb25zLm5vUmV2b2tlKSkge1xuICAgICAgbG9hZEltYWdlLnJldm9rZU9iamVjdFVSTCh1cmwpXG4gICAgfVxuICB9XG5cbiAgLy8gRGV0ZXJtaW5lcyBpZiBtZXRhIGRhdGEgc2hvdWxkIGJlIGxvYWRlZCBhdXRvbWF0aWNhbGx5LlxuICAvLyBSZXF1aXJlcyB0aGUgbG9hZCBpbWFnZSBtZXRhIGV4dGVuc2lvbiB0byBsb2FkIG1ldGEgZGF0YS5cbiAgbG9hZEltYWdlLmhhc01ldGFPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMubWV0YVxuICB9XG5cbiAgLy8gSWYgdGhlIGNhbGxiYWNrIGdpdmVuIHRvIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGJsb2IsIGl0IGlzIHVzZWQgYXMgaW1hZ2VcbiAgLy8gc291cmNlIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIHVybCBhbmQgb3ZlcnJpZGVzIHRoZSBmaWxlIGFyZ3VtZW50IHVzZWQgaW5cbiAgLy8gdGhlIG9ubG9hZCBhbmQgb25lcnJvciBldmVudCBjYWxsYmFja3M6XG4gIGxvYWRJbWFnZS5mZXRjaEJsb2IgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKClcbiAgfVxuXG4gIGxvYWRJbWFnZS5pc0luc3RhbmNlT2YgPSBmdW5jdGlvbiAodHlwZSwgb2JqKSB7XG4gICAgLy8gQ3Jvc3MtZnJhbWUgaW5zdGFuY2VvZiBjaGVja1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIHR5cGUgKyAnXSdcbiAgfVxuXG4gIGxvYWRJbWFnZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoaW1nLCBvcHRpb25zLCBjYWxsYmFjaywgZmlsZSwgZGF0YSkge1xuICAgIGNhbGxiYWNrKGltZywgZGF0YSlcbiAgfVxuXG4gIGxvYWRJbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKGltZywgZXZlbnQsIGZpbGUsIHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICByZXZva2VIZWxwZXIodXJsLCBvcHRpb25zKVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2suY2FsbChpbWcsIGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoaW1nLCBldmVudCwgZmlsZSwgdXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIHJldm9rZUhlbHBlcih1cmwsIG9wdGlvbnMpXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBsb2FkSW1hZ2UudHJhbnNmb3JtKGltZywgb3B0aW9ucywgY2FsbGJhY2ssIGZpbGUsIHtcbiAgICAgICAgb3JpZ2luYWxXaWR0aDogaW1nLm5hdHVyYWxXaWR0aCB8fCBpbWcud2lkdGgsXG4gICAgICAgIG9yaWdpbmFsSGVpZ2h0OiBpbWcubmF0dXJhbEhlaWdodCB8fCBpbWcuaGVpZ2h0XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGxvYWRJbWFnZS5jcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbiAoZmlsZSkge1xuICAgIHJldHVybiB1cmxBUEkgPyB1cmxBUEkuY3JlYXRlT2JqZWN0VVJMKGZpbGUpIDogZmFsc2VcbiAgfVxuXG4gIGxvYWRJbWFnZS5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgcmV0dXJuIHVybEFQSSA/IHVybEFQSS5yZXZva2VPYmplY3RVUkwodXJsKSA6IGZhbHNlXG4gIH1cblxuICAvLyBMb2FkcyBhIGdpdmVuIEZpbGUgb2JqZWN0IHZpYSBGaWxlUmVhZGVyIGludGVyZmFjZSxcbiAgLy8gaW52b2tlcyB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgZXZlbnQgb2JqZWN0IChsb2FkIG9yIGVycm9yKS5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgcmVhZCB2aWEgZXZlbnQudGFyZ2V0LnJlc3VsdDpcbiAgbG9hZEltYWdlLnJlYWRGaWxlID0gZnVuY3Rpb24gKGZpbGUsIGNhbGxiYWNrLCBtZXRob2QpIHtcbiAgICBpZiAoJC5GaWxlUmVhZGVyKSB7XG4gICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZmlsZVJlYWRlci5vbmVycm9yID0gY2FsbGJhY2tcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbWV0aG9kID0gbWV0aG9kIHx8ICdyZWFkQXNEYXRhVVJMJ1xuICAgICAgaWYgKGZpbGVSZWFkZXJbbWV0aG9kXSkge1xuICAgICAgICBmaWxlUmVhZGVyW21ldGhvZF0oZmlsZSlcbiAgICAgICAgcmV0dXJuIGZpbGVSZWFkZXJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBsb2FkSW1hZ2VcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBsb2FkSW1hZ2VcbiAgfSBlbHNlIHtcbiAgICAkLmxvYWRJbWFnZSA9IGxvYWRJbWFnZVxuICB9XG59KSgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCB0aGlzKVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uL2VsZWN0cm9uL2lzc3Vlcy8yMjg4XG5mdW5jdGlvbiBpc0VsZWN0cm9uKCkge1xuICAgIC8vIFJlbmRlcmVyIHByb2Nlc3NcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5wcm9jZXNzID09PSAnb2JqZWN0JyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIE1haW4gcHJvY2Vzc1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnICYmICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBEZXRlY3QgdGhlIHVzZXIgYWdlbnQgd2hlbiB0aGUgYG5vZGVJbnRlZ3JhdGlvbmAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50ID09PSAnc3RyaW5nJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0VsZWN0cm9uJykgPj0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVjdHJvbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxNCBTaW1vbiBMeWRlbGxcclxuLy8gWDExICjigJxNSVTigJ0pIExpY2Vuc2VkLiAoU2VlIExJQ0VOU0UuKVxyXG5cclxudm9pZCAoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKGZhY3RvcnkpXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdC5yZXNvbHZlVXJsID0gZmFjdG9yeSgpXHJcbiAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xyXG5cclxuICBmdW5jdGlvbiByZXNvbHZlVXJsKC8qIC4uLnVybHMgKi8pIHtcclxuICAgIHZhciBudW1VcmxzID0gYXJndW1lbnRzLmxlbmd0aFxyXG5cclxuICAgIGlmIChudW1VcmxzID09PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc29sdmVVcmwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50OyBnb3Qgbm9uZS5cIilcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpXHJcbiAgICBiYXNlLmhyZWYgPSBhcmd1bWVudHNbMF1cclxuXHJcbiAgICBpZiAobnVtVXJscyA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gYmFzZS5ocmVmXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF1cclxuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGJhc2UsIGhlYWQuZmlyc3RDaGlsZClcclxuXHJcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICB2YXIgcmVzb2x2ZWRcclxuXHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbnVtVXJsczsgaW5kZXgrKykge1xyXG4gICAgICBhLmhyZWYgPSBhcmd1bWVudHNbaW5kZXhdXHJcbiAgICAgIHJlc29sdmVkID0gYS5ocmVmXHJcbiAgICAgIGJhc2UuaHJlZiA9IHJlc29sdmVkXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZC5yZW1vdmVDaGlsZChiYXNlKVxyXG5cclxuICAgIHJldHVybiByZXNvbHZlZFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc29sdmVVcmxcclxuXHJcbn0pKTtcclxuIiwiY29uc3QgY3JlYXRlV29ya2VyID0gcmVxdWlyZSgnLi9jcmVhdGVXb3JrZXInKTtcblxuY29uc3QgcmVjb2duaXplID0gYXN5bmMgKGltYWdlLCBsYW5ncywgb3B0aW9ucykgPT4ge1xuICBjb25zdCB3b3JrZXIgPSBjcmVhdGVXb3JrZXIob3B0aW9ucyk7XG4gIGF3YWl0IHdvcmtlci5sb2FkKCk7XG4gIGF3YWl0IHdvcmtlci5sb2FkTGFuZ3VhZ2UobGFuZ3MpO1xuICBhd2FpdCB3b3JrZXIuaW5pdGlhbGl6ZShsYW5ncyk7XG4gIHJldHVybiB3b3JrZXIucmVjb2duaXplKGltYWdlKVxuICAgIC5maW5hbGx5KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGRldGVjdCA9IGFzeW5jIChpbWFnZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB3b3JrZXIgPSBjcmVhdGVXb3JrZXIob3B0aW9ucyk7XG4gIGF3YWl0IHdvcmtlci5sb2FkKCk7XG4gIGF3YWl0IHdvcmtlci5sb2FkTGFuZ3VhZ2UoJ29zZCcpO1xuICBhd2FpdCB3b3JrZXIuaW5pdGlhbGl6ZSgnb3NkJyk7XG4gIHJldHVybiB3b3JrZXIuZGV0ZWN0KGltYWdlKVxuICAgIC5maW5hbGx5KGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWNvZ25pemUsXG4gIGRldGVjdCxcbn07XG4iLCIvKlxuICogT0VNID0gT0NSIEVuZ2luZSBNb2RlLCBhbmQgdGhlcmUgYXJlIDQgcG9zc2libGUgbW9kZXMuXG4gKlxuICogQnkgZGVmYXVsdCB0ZXNzZXJhY3QuanMgdXNlcyBMU1RNX09OTFkgbW9kZS5cbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBURVNTRVJBQ1RfT05MWTogMCxcbiAgTFNUTV9PTkxZOiAxLFxuICBURVNTRVJBQ1RfTFNUTV9DT01CSU5FRDogMixcbiAgREVGQVVMVDogMyxcbn07XG4iLCIvKlxuICogUFNNID0gUGFnZSBTZWdtZW50YXRpb24gTW9kZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgT1NEX09OTFk6ICcwJyxcbiAgQVVUT19PU0Q6ICcxJyxcbiAgQVVUT19PTkxZOiAnMicsXG4gIEFVVE86ICczJyxcbiAgU0lOR0xFX0NPTFVNTjogJzQnLFxuICBTSU5HTEVfQkxPQ0tfVkVSVF9URVhUOiAnNScsXG4gIFNJTkdMRV9CTE9DSzogJzYnLFxuICBTSU5HTEVfTElORTogJzcnLFxuICBTSU5HTEVfV09SRDogJzgnLFxuICBDSVJDTEVfV09SRDogJzknLFxuICBTSU5HTEVfQ0hBUjogJzEwJyxcbiAgU1BBUlNFX1RFWFQ6ICcxMScsXG4gIFNQQVJTRV9URVhUX09TRDogJzEyJyxcbn07XG4iLCJjb25zdCBPRU0gPSByZXF1aXJlKCcuL09FTScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdE9FTTogT0VNLkRFRkFVTFQsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qXG4gICAqIGRlZmF1bHQgcGF0aCBmb3IgZG93bmxvYWRpbmcgKi50cmFpbmVkZGF0YVxuICAgKi9cbiAgbGFuZ1BhdGg6ICdodHRwczovL3Rlc3NkYXRhLnByb2plY3RuYXB0aGEuY29tLzQuMC4wJyxcbiAgLypcbiAgICogVXNlIEJsb2JVUkwgZm9yIHdvcmtlciBzY3JpcHQgYnkgZGVmYXVsdFxuICAgKiBUT0RPOiByZW1vdmUgdGhpcyBvcHRpb25cbiAgICpcbiAgICovXG4gIHdvcmtlckJsb2JVUkw6IHRydWUsXG4gIGxvZ2dlcjogKCkgPT4ge30sXG59O1xuIiwiLypcbiAqIGxhbmd1YWdlcyB3aXRoIGV4aXN0aW5nIHRlc3NlcmFjdCB0cmFpbmVkZGF0YVxuICogaHR0cHM6Ly90ZXNzZXJhY3Qtb2NyLmdpdGh1Yi5pby90ZXNzZG9jL0RhdGEtRmlsZXMjZGF0YS1maWxlcy1mb3ItdmVyc2lvbi00MDAtbm92ZW1iZXItMjktMjAxNlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gTGFuZ3VhZ2VzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUZSIEFmcmlrYWFuc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFNSCBBbWhhcmljXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVJBIEFyYWJpY1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFTTSBBc3NhbWVzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFaRSBBemVyYmFpamFuaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFaRV9DWVJMIEF6ZXJiYWlqYW5pIC0gQ3lyaWxsaWNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBCRUwgQmVsYXJ1c2lhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEJFTiBCZW5nYWxpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQk9EIFRpYmV0YW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBCT1MgQm9zbmlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEJVTCBCdWxnYXJpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQVQgQ2F0YWxhbjsgVmFsZW5jaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0VCIENlYnVhbm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDRVMgQ3plY2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDSElfU0lNIENoaW5lc2UgLSBTaW1wbGlmaWVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0hJX1RSQSBDaGluZXNlIC0gVHJhZGl0aW9uYWxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDSFIgQ2hlcm9rZWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDWU0gV2Vsc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBEQU4gRGFuaXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gREVVIEdlcm1hblxuICogQHByb3BlcnR5IHtzdHJpbmd9IERaTyBEem9uZ2toYVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEVMTCBHcmVlaywgTW9kZXJuICgxNDUzLSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBFTkcgRW5nbGlzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IEVOTSBFbmdsaXNoLCBNaWRkbGUgKDExMDAtMTUwMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBFUE8gRXNwZXJhbnRvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRVNUIEVzdG9uaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRVVTIEJhc3F1ZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZBUyBQZXJzaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRklOIEZpbm5pc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGUkEgRnJlbmNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlJLIEdlcm1hbiBGcmFrdHVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlJNIEZyZW5jaCwgTWlkZGxlIChjYS4gMTQwMC0xNjAwKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEdMRSBJcmlzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IEdMRyBHYWxpY2lhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEdSQyBHcmVlaywgQW5jaWVudCAoLTE0NTMpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR1VKIEd1amFyYXRpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSEFUIEhhaXRpYW47IEhhaXRpYW4gQ3Jlb2xlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSEVCIEhlYnJld1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEhJTiBIaW5kaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEhSViBDcm9hdGlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEhVTiBIdW5nYXJpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJS1UgSW51a3RpdHV0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gSU5EIEluZG9uZXNpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJU0wgSWNlbGFuZGljXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSVRBIEl0YWxpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJVEFfT0xEIEl0YWxpYW4gLSBPbGRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBKQVYgSmF2YW5lc2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBKUE4gSmFwYW5lc2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBLQU4gS2FubmFkYVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEtBVCBHZW9yZ2lhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEtBVF9PTEQgR2VvcmdpYW4gLSBPbGRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBLQVogS2F6YWtoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gS0hNIENlbnRyYWwgS2htZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBLSVIgS2lyZ2hpejsgS3lyZ3l6XG4gKiBAcHJvcGVydHkge3N0cmluZ30gS09SIEtvcmVhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IEtVUiBLdXJkaXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTEFPIExhb1xuICogQHByb3BlcnR5IHtzdHJpbmd9IExBVCBMYXRpblxuICogQHByb3BlcnR5IHtzdHJpbmd9IExBViBMYXR2aWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTElUIExpdGh1YW5pYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNQUwgTWFsYXlhbGFtXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUFSIE1hcmF0aGlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNS0QgTWFjZWRvbmlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1MVCBNYWx0ZXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTVNBIE1hbGF5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gTVlBIEJ1cm1lc2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBORVAgTmVwYWxpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTkxEIER1dGNoOyBGbGVtaXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTk9SIE5vcndlZ2lhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IE9SSSBPcml5YVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBTiBQYW5qYWJpOyBQdW5qYWJpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUE9MIFBvbGlzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBPUiBQb3J0dWd1ZXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUFVTIFB1c2h0bzsgUGFzaHRvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUk9OIFJvbWFuaWFuOyBNb2xkYXZpYW47IE1vbGRvdmFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUlVTIFJ1c3NpYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTQU4gU2Fuc2tyaXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTSU4gU2luaGFsYTsgU2luaGFsZXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0xLIFNsb3Zha1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFNMViBTbG92ZW5pYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTUEEgU3BhbmlzaDsgQ2FzdGlsaWFuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1BBX09MRCBTcGFuaXNoOyBDYXN0aWxpYW4gLSBPbGRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTUUkgQWxiYW5pYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTUlAgU2VyYmlhblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNSUF9MQVROIFNlcmJpYW4gLSBMYXRpblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNXQSBTd2FoaWxpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1dFIFN3ZWRpc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTWVIgU3lyaWFjXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVEFNIFRhbWlsXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVEVMIFRlbHVndVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFRHSyBUYWppa1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFRHTCBUYWdhbG9nXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVEhBIFRoYWlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUSVIgVGlncmlueWFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUVVIgVHVya2lzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVJRyBVaWdodXI7IFV5Z2h1clxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVLUiBVa3JhaW5pYW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVUkQgVXJkdVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVaQiBVemJla1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFVaQl9DWVJMIFV6YmVrIC0gQ3lyaWxsaWNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWSUUgVmlldG5hbWVzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFlJRCBZaWRkaXNoXG4gKi9cblxuLyoqXG4gICogQHR5cGUge0xhbmd1YWdlc31cbiAgKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBRlI6ICdhZnInLFxuICBBTUg6ICdhbWgnLFxuICBBUkE6ICdhcmEnLFxuICBBU006ICdhc20nLFxuICBBWkU6ICdhemUnLFxuICBBWkVfQ1lSTDogJ2F6ZV9jeXJsJyxcbiAgQkVMOiAnYmVsJyxcbiAgQkVOOiAnYmVuJyxcbiAgQk9EOiAnYm9kJyxcbiAgQk9TOiAnYm9zJyxcbiAgQlVMOiAnYnVsJyxcbiAgQ0FUOiAnY2F0JyxcbiAgQ0VCOiAnY2ViJyxcbiAgQ0VTOiAnY2VzJyxcbiAgQ0hJX1NJTTogJ2NoaV9zaW0nLFxuICBDSElfVFJBOiAnY2hpX3RyYScsXG4gIENIUjogJ2NocicsXG4gIENZTTogJ2N5bScsXG4gIERBTjogJ2RhbicsXG4gIERFVTogJ2RldScsXG4gIERaTzogJ2R6bycsXG4gIEVMTDogJ2VsbCcsXG4gIEVORzogJ2VuZycsXG4gIEVOTTogJ2VubScsXG4gIEVQTzogJ2VwbycsXG4gIEVTVDogJ2VzdCcsXG4gIEVVUzogJ2V1cycsXG4gIEZBUzogJ2ZhcycsXG4gIEZJTjogJ2ZpbicsXG4gIEZSQTogJ2ZyYScsXG4gIEZSSzogJ2ZyaycsXG4gIEZSTTogJ2ZybScsXG4gIEdMRTogJ2dsZScsXG4gIEdMRzogJ2dsZycsXG4gIEdSQzogJ2dyYycsXG4gIEdVSjogJ2d1aicsXG4gIEhBVDogJ2hhdCcsXG4gIEhFQjogJ2hlYicsXG4gIEhJTjogJ2hpbicsXG4gIEhSVjogJ2hydicsXG4gIEhVTjogJ2h1bicsXG4gIElLVTogJ2lrdScsXG4gIElORDogJ2luZCcsXG4gIElTTDogJ2lzbCcsXG4gIElUQTogJ2l0YScsXG4gIElUQV9PTEQ6ICdpdGFfb2xkJyxcbiAgSkFWOiAnamF2JyxcbiAgSlBOOiAnanBuJyxcbiAgS0FOOiAna2FuJyxcbiAgS0FUOiAna2F0JyxcbiAgS0FUX09MRDogJ2thdF9vbGQnLFxuICBLQVo6ICdrYXonLFxuICBLSE06ICdraG0nLFxuICBLSVI6ICdraXInLFxuICBLT1I6ICdrb3InLFxuICBLVVI6ICdrdXInLFxuICBMQU86ICdsYW8nLFxuICBMQVQ6ICdsYXQnLFxuICBMQVY6ICdsYXYnLFxuICBMSVQ6ICdsaXQnLFxuICBNQUw6ICdtYWwnLFxuICBNQVI6ICdtYXInLFxuICBNS0Q6ICdta2QnLFxuICBNTFQ6ICdtbHQnLFxuICBNU0E6ICdtc2EnLFxuICBNWUE6ICdteWEnLFxuICBORVA6ICduZXAnLFxuICBOTEQ6ICdubGQnLFxuICBOT1I6ICdub3InLFxuICBPUkk6ICdvcmknLFxuICBQQU46ICdwYW4nLFxuICBQT0w6ICdwb2wnLFxuICBQT1I6ICdwb3InLFxuICBQVVM6ICdwdXMnLFxuICBST046ICdyb24nLFxuICBSVVM6ICdydXMnLFxuICBTQU46ICdzYW4nLFxuICBTSU46ICdzaW4nLFxuICBTTEs6ICdzbGsnLFxuICBTTFY6ICdzbHYnLFxuICBTUEE6ICdzcGEnLFxuICBTUEFfT0xEOiAnc3BhX29sZCcsXG4gIFNRSTogJ3NxaScsXG4gIFNSUDogJ3NycCcsXG4gIFNSUF9MQVROOiAnc3JwX2xhdG4nLFxuICBTV0E6ICdzd2EnLFxuICBTV0U6ICdzd2UnLFxuICBTWVI6ICdzeXInLFxuICBUQU06ICd0YW0nLFxuICBURUw6ICd0ZWwnLFxuICBUR0s6ICd0Z2snLFxuICBUR0w6ICd0Z2wnLFxuICBUSEE6ICd0aGEnLFxuICBUSVI6ICd0aXInLFxuICBUVVI6ICd0dXInLFxuICBVSUc6ICd1aWcnLFxuICBVS1I6ICd1a3InLFxuICBVUkQ6ICd1cmQnLFxuICBVWkI6ICd1emInLFxuICBVWkJfQ1lSTDogJ3V6Yl9jeXJsJyxcbiAgVklFOiAndmllJyxcbiAgWUlEOiAneWlkJyxcbn07XG4iLCJjb25zdCBnZXRJZCA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0SWQnKTtcblxubGV0IGpvYkNvdW50ZXIgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7XG4gIGlkOiBfaWQsXG4gIGFjdGlvbixcbiAgcGF5bG9hZCA9IHt9LFxufSkgPT4ge1xuICBsZXQgaWQgPSBfaWQ7XG4gIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWQgPSBnZXRJZCgnSm9iJywgam9iQ291bnRlcik7XG4gICAgam9iQ291bnRlciArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBhY3Rpb24sXG4gICAgcGF5bG9hZCxcbiAgfTtcbn07XG4iLCJjb25zdCBjcmVhdGVKb2IgPSByZXF1aXJlKCcuL2NyZWF0ZUpvYicpO1xuY29uc3QgeyBsb2cgfSA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nJyk7XG5jb25zdCBnZXRJZCA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0SWQnKTtcblxubGV0IHNjaGVkdWxlckNvdW50ZXIgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgY29uc3QgaWQgPSBnZXRJZCgnU2NoZWR1bGVyJywgc2NoZWR1bGVyQ291bnRlcik7XG4gIGNvbnN0IHdvcmtlcnMgPSB7fTtcbiAgY29uc3QgcnVubmluZ1dvcmtlcnMgPSB7fTtcbiAgbGV0IGpvYlF1ZXVlID0gW107XG5cbiAgc2NoZWR1bGVyQ291bnRlciArPSAxO1xuXG4gIGNvbnN0IGdldFF1ZXVlTGVuID0gKCkgPT4gam9iUXVldWUubGVuZ3RoO1xuICBjb25zdCBnZXROdW1Xb3JrZXJzID0gKCkgPT4gT2JqZWN0LmtleXMod29ya2VycykubGVuZ3RoO1xuXG4gIGNvbnN0IGRlcXVldWUgPSAoKSA9PiB7XG4gICAgaWYgKGpvYlF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3Qgd0lkcyA9IE9iamVjdC5rZXlzKHdvcmtlcnMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3SWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcnVubmluZ1dvcmtlcnNbd0lkc1tpXV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgam9iUXVldWVbMF0od29ya2Vyc1t3SWRzW2ldXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcXVldWUgPSAoYWN0aW9uLCBwYXlsb2FkKSA9PiAoXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgam9iID0gY3JlYXRlSm9iKHsgYWN0aW9uLCBwYXlsb2FkIH0pO1xuICAgICAgam9iUXVldWUucHVzaChhc3luYyAodykgPT4ge1xuICAgICAgICBqb2JRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBydW5uaW5nV29ya2Vyc1t3LmlkXSA9IGpvYjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNvbHZlKGF3YWl0IHdbYWN0aW9uXS5hcHBseSh0aGlzLCBbLi4ucGF5bG9hZCwgam9iLmlkXSkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBkZWxldGUgcnVubmluZ1dvcmtlcnNbdy5pZF07XG4gICAgICAgICAgZGVxdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxvZyhgWyR7aWR9XTogQWRkICR7am9iLmlkfSB0byBKb2JRdWV1ZWApO1xuICAgICAgbG9nKGBbJHtpZH1dOiBKb2JRdWV1ZSBsZW5ndGg9JHtqb2JRdWV1ZS5sZW5ndGh9YCk7XG4gICAgICBkZXF1ZXVlKCk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdCBhZGRXb3JrZXIgPSAodykgPT4ge1xuICAgIHdvcmtlcnNbdy5pZF0gPSB3O1xuICAgIGxvZyhgWyR7aWR9XTogQWRkICR7dy5pZH1gKTtcbiAgICBsb2coYFske2lkfV06IE51bWJlciBvZiB3b3JrZXJzPSR7Z2V0TnVtV29ya2VycygpfWApO1xuICAgIGRlcXVldWUoKTtcbiAgICByZXR1cm4gdy5pZDtcbiAgfTtcblxuICBjb25zdCBhZGRKb2IgPSBhc3luYyAoYWN0aW9uLCAuLi5wYXlsb2FkKSA9PiB7XG4gICAgaWYgKGdldE51bVdvcmtlcnMoKSA9PT0gMCkge1xuICAgICAgdGhyb3cgRXJyb3IoYFske2lkfV06IFlvdSBuZWVkIHRvIGhhdmUgYXQgbGVhc3Qgb25lIHdvcmtlciBiZWZvcmUgYWRkaW5nIGpvYnNgKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXVlKGFjdGlvbiwgcGF5bG9hZCk7XG4gIH07XG5cbiAgY29uc3QgdGVybWluYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHdvcmtlcnMpLmZvckVhY2goYXN5bmMgKHdpZCkgPT4ge1xuICAgICAgYXdhaXQgd29ya2Vyc1t3aWRdLnRlcm1pbmF0ZSgpO1xuICAgIH0pO1xuICAgIGpvYlF1ZXVlID0gW107XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRXb3JrZXIsXG4gICAgYWRkSm9iLFxuICAgIHRlcm1pbmF0ZSxcbiAgICBnZXRRdWV1ZUxlbixcbiAgICBnZXROdW1Xb3JrZXJzLFxuICB9O1xufTtcbiIsImNvbnN0IHJlc29sdmVQYXRocyA9IHJlcXVpcmUoJy4vdXRpbHMvcmVzb2x2ZVBhdGhzJyk7XG5jb25zdCBjaXJjdWxhcml6ZSA9IHJlcXVpcmUoJy4vdXRpbHMvY2lyY3VsYXJpemUnKTtcbmNvbnN0IGNyZWF0ZUpvYiA9IHJlcXVpcmUoJy4vY3JlYXRlSm9iJyk7XG5jb25zdCB7IGxvZyB9ID0gcmVxdWlyZSgnLi91dGlscy9sb2cnKTtcbmNvbnN0IGdldElkID0gcmVxdWlyZSgnLi91dGlscy9nZXRJZCcpO1xuY29uc3QgeyBkZWZhdWx0T0VNIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy9jb25maWcnKTtcbmNvbnN0IHtcbiAgZGVmYXVsdE9wdGlvbnMsXG4gIHNwYXduV29ya2VyLFxuICB0ZXJtaW5hdGVXb3JrZXIsXG4gIG9uTWVzc2FnZSxcbiAgbG9hZEltYWdlLFxuICBzZW5kLFxufSA9IHJlcXVpcmUoJy4vd29ya2VyL25vZGUnKTtcblxubGV0IHdvcmtlckNvdW50ZXIgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChfb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGlkID0gZ2V0SWQoJ1dvcmtlcicsIHdvcmtlckNvdW50ZXIpO1xuICBjb25zdCB7XG4gICAgbG9nZ2VyLFxuICAgIGVycm9ySGFuZGxlcixcbiAgICAuLi5vcHRpb25zXG4gIH0gPSByZXNvbHZlUGF0aHMoe1xuICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgIC4uLl9vcHRpb25zLFxuICB9KTtcbiAgY29uc3QgcmVzb2x2ZXMgPSB7fTtcbiAgY29uc3QgcmVqZWN0cyA9IHt9O1xuICBsZXQgd29ya2VyID0gc3Bhd25Xb3JrZXIob3B0aW9ucyk7XG5cbiAgd29ya2VyQ291bnRlciArPSAxO1xuXG4gIGNvbnN0IHNldFJlc29sdmUgPSAoYWN0aW9uLCByZXMpID0+IHtcbiAgICByZXNvbHZlc1thY3Rpb25dID0gcmVzO1xuICB9O1xuXG4gIGNvbnN0IHNldFJlamVjdCA9IChhY3Rpb24sIHJlaikgPT4ge1xuICAgIHJlamVjdHNbYWN0aW9uXSA9IHJlajtcbiAgfTtcblxuICBjb25zdCBzdGFydEpvYiA9ICh7IGlkOiBqb2JJZCwgYWN0aW9uLCBwYXlsb2FkIH0pID0+IChcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2coYFske2lkfV06IFN0YXJ0ICR7am9iSWR9LCBhY3Rpb249JHthY3Rpb259YCk7XG4gICAgICBzZXRSZXNvbHZlKGFjdGlvbiwgcmVzb2x2ZSk7XG4gICAgICBzZXRSZWplY3QoYWN0aW9uLCByZWplY3QpO1xuICAgICAgc2VuZCh3b3JrZXIsIHtcbiAgICAgICAgd29ya2VySWQ6IGlkLFxuICAgICAgICBqb2JJZCxcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdCBsb2FkID0gKGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCwgYWN0aW9uOiAnbG9hZCcsIHBheWxvYWQ6IHsgb3B0aW9ucyB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IHdyaXRlVGV4dCA9IChwYXRoLCB0ZXh0LCBqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdGUycsXG4gICAgICBwYXlsb2FkOiB7IG1ldGhvZDogJ3dyaXRlRmlsZScsIGFyZ3M6IFtwYXRoLCB0ZXh0XSB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IHJlYWRUZXh0ID0gKHBhdGgsIGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCxcbiAgICAgIGFjdGlvbjogJ0ZTJyxcbiAgICAgIHBheWxvYWQ6IHsgbWV0aG9kOiAncmVhZEZpbGUnLCBhcmdzOiBbcGF0aCwgeyBlbmNvZGluZzogJ3V0ZjgnIH1dIH0sXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3QgcmVtb3ZlRmlsZSA9IChwYXRoLCBqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdGUycsXG4gICAgICBwYXlsb2FkOiB7IG1ldGhvZDogJ3VubGluaycsIGFyZ3M6IFtwYXRoXSB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IEZTID0gKG1ldGhvZCwgYXJncywgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAnRlMnLFxuICAgICAgcGF5bG9hZDogeyBtZXRob2QsIGFyZ3MgfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCBsb2FkTGFuZ3VhZ2UgPSAobGFuZ3MgPSAnZW5nJywgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAnbG9hZExhbmd1YWdlJyxcbiAgICAgIHBheWxvYWQ6IHsgbGFuZ3MsIG9wdGlvbnMgfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCBpbml0aWFsaXplID0gKGxhbmdzID0gJ2VuZycsIG9lbSA9IGRlZmF1bHRPRU0sIGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCxcbiAgICAgIGFjdGlvbjogJ2luaXRpYWxpemUnLFxuICAgICAgcGF5bG9hZDogeyBsYW5ncywgb2VtIH0sXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3Qgc2V0UGFyYW1ldGVycyA9IChwYXJhbXMgPSB7fSwgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAnc2V0UGFyYW1ldGVycycsXG4gICAgICBwYXlsb2FkOiB7IHBhcmFtcyB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IHJlY29nbml6ZSA9IGFzeW5jIChpbWFnZSwgb3B0cyA9IHt9LCBqb2JJZCkgPT4gKFxuICAgIHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICBpZDogam9iSWQsXG4gICAgICBhY3Rpb246ICdyZWNvZ25pemUnLFxuICAgICAgcGF5bG9hZDogeyBpbWFnZTogYXdhaXQgbG9hZEltYWdlKGltYWdlKSwgb3B0aW9uczogb3B0cyB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IGdldFBERiA9ICh0aXRsZSA9ICdUZXNzZXJhY3QgT0NSIFJlc3VsdCcsIHRleHRvbmx5ID0gZmFsc2UsIGpvYklkKSA9PiAoXG4gICAgc3RhcnRKb2IoY3JlYXRlSm9iKHtcbiAgICAgIGlkOiBqb2JJZCxcbiAgICAgIGFjdGlvbjogJ2dldFBERicsXG4gICAgICBwYXlsb2FkOiB7IHRpdGxlLCB0ZXh0b25seSB9LFxuICAgIH0pKVxuICApO1xuXG4gIGNvbnN0IGRldGVjdCA9IGFzeW5jIChpbWFnZSwgam9iSWQpID0+IChcbiAgICBzdGFydEpvYihjcmVhdGVKb2Ioe1xuICAgICAgaWQ6IGpvYklkLFxuICAgICAgYWN0aW9uOiAnZGV0ZWN0JyxcbiAgICAgIHBheWxvYWQ6IHsgaW1hZ2U6IGF3YWl0IGxvYWRJbWFnZShpbWFnZSkgfSxcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdvcmtlciAhPT0gbnVsbCkge1xuICAgICAgLypcbiAgICAgIGF3YWl0IHN0YXJ0Sm9iKGNyZWF0ZUpvYih7XG4gICAgICAgIGlkOiBqb2JJZCxcbiAgICAgICAgYWN0aW9uOiAndGVybWluYXRlJyxcbiAgICAgIH0pKTtcbiAgICAgICovXG4gICAgICB0ZXJtaW5hdGVXb3JrZXIod29ya2VyKTtcbiAgICAgIHdvcmtlciA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBvbk1lc3NhZ2Uod29ya2VyLCAoe1xuICAgIHdvcmtlcklkLCBqb2JJZCwgc3RhdHVzLCBhY3Rpb24sIGRhdGEsXG4gIH0pID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAncmVzb2x2ZScpIHtcbiAgICAgIGxvZyhgWyR7d29ya2VySWR9XTogQ29tcGxldGUgJHtqb2JJZH1gKTtcbiAgICAgIGxldCBkID0gZGF0YTtcbiAgICAgIGlmIChhY3Rpb24gPT09ICdyZWNvZ25pemUnKSB7XG4gICAgICAgIGQgPSBjaXJjdWxhcml6ZShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZ2V0UERGJykge1xuICAgICAgICBkID0gQXJyYXkuZnJvbSh7IC4uLmRhdGEsIGxlbmd0aDogT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoIH0pO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZXNbYWN0aW9uXSh7IGpvYklkLCBkYXRhOiBkIH0pO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAncmVqZWN0Jykge1xuICAgICAgcmVqZWN0c1thY3Rpb25dKGRhdGEpO1xuICAgICAgaWYgKGVycm9ySGFuZGxlcikge1xuICAgICAgICBlcnJvckhhbmRsZXIoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihkYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3Byb2dyZXNzJykge1xuICAgICAgbG9nZ2VyKHsgLi4uZGF0YSwgdXNlckpvYklkOiBqb2JJZCB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgd29ya2VyLFxuICAgIHNldFJlc29sdmUsXG4gICAgc2V0UmVqZWN0LFxuICAgIGxvYWQsXG4gICAgd3JpdGVUZXh0LFxuICAgIHJlYWRUZXh0LFxuICAgIHJlbW92ZUZpbGUsXG4gICAgRlMsXG4gICAgbG9hZExhbmd1YWdlLFxuICAgIGluaXRpYWxpemUsXG4gICAgc2V0UGFyYW1ldGVycyxcbiAgICByZWNvZ25pemUsXG4gICAgZ2V0UERGLFxuICAgIGRldGVjdCxcbiAgICB0ZXJtaW5hdGUsXG4gIH07XG59O1xuIiwiLyoqXG4gKlxuICogRW50cnkgcG9pbnQgZm9yIHRlc3NlcmFjdC5qcywgc2hvdWxkIGJlIHRoZSBlbnRyeSB3aGVuIGJ1bmRsaW5nLlxuICpcbiAqIEBmaWxlb3ZlcnZpZXcgZW50cnkgcG9pbnQgZm9yIHRlc3NlcmFjdC5qc1xuICogQGF1dGhvciBLZXZpbiBLd29rIDxhbnRpbWF0dGVyMTVAZ21haWwuY29tPlxuICogQGF1dGhvciBHdWlsbGVybW8gV2Vic3RlciA8Z3VpQG1pdC5lZHU+XG4gKiBAYXV0aG9yIEplcm9tZSBXdSA8amVyb21ld3VzQGdtYWlsLmNvbT5cbiAqL1xucmVxdWlyZSgncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJyk7XG5jb25zdCBjcmVhdGVTY2hlZHVsZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVNjaGVkdWxlcicpO1xuY29uc3QgY3JlYXRlV29ya2VyID0gcmVxdWlyZSgnLi9jcmVhdGVXb3JrZXInKTtcbmNvbnN0IFRlc3NlcmFjdCA9IHJlcXVpcmUoJy4vVGVzc2VyYWN0Jyk7XG5jb25zdCBsYW5ndWFnZXMgPSByZXF1aXJlKCcuL2NvbnN0YW50cy9sYW5ndWFnZXMnKTtcbmNvbnN0IE9FTSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzL09FTScpO1xuY29uc3QgUFNNID0gcmVxdWlyZSgnLi9jb25zdGFudHMvUFNNJyk7XG5jb25zdCB7IHNldExvZ2dpbmcgfSA9IHJlcXVpcmUoJy4vdXRpbHMvbG9nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsYW5ndWFnZXMsXG4gIE9FTSxcbiAgUFNNLFxuICBjcmVhdGVTY2hlZHVsZXIsXG4gIGNyZWF0ZVdvcmtlcixcbiAgc2V0TG9nZ2luZyxcbiAgLi4uVGVzc2VyYWN0LFxufTtcbiIsIi8qKlxuICogSW4gdGhlIHJlY29nbml0aW9uIHJlc3VsdCBvZiB0ZXNzZXJhY3QsIHRoZXJlXG4gKiBpcyBhIGRlZXAgSlNPTiBvYmplY3QgZm9yIGRldGFpbHMsIGl0IGhhcyBhcm91bmRcbiAqXG4gKiBUaGUgcmVzdWx0IG9mIGR1bXAuanMgaXMgYSBiaWcgSlNPTiB0cmVlXG4gKiB3aGljaCBjYW4gYmUgZWFzaWx5IHNlcmlhbGl6ZWQgKGZvciBpbnN0YW5jZVxuICogdG8gYmUgc2VudCBmcm9tIGEgd2Vid29ya2VyIHRvIHRoZSBtYWluIGFwcFxuICogb3IgdGhyb3VnaCBOb2RlJ3MgSVBDKSwgYnV0IHdlIHdhbnRcbiAqIGEgKGNpcmN1bGFyKSBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmdcbiAqIHRocm91Z2ggdGhlIGRhdGEuXG4gKlxuICogQGZpbGVvdmVydmlldyBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmcgdGhyb3VnaCBkYXRhXG4gKiBAYXV0aG9yIEtldmluIEt3b2sgPGFudGltYXR0ZXIxNUBnbWFpbC5jb20+XG4gKiBAYXV0aG9yIEd1aWxsZXJtbyBXZWJzdGVyIDxndWlAbWl0LmVkdT5cbiAqIEBhdXRob3IgSmVyb21lIFd1IDxqZXJvbWV3dXNAZ21haWwuY29tPlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gKHBhZ2UpID0+IHtcbiAgY29uc3QgYmxvY2tzID0gW107XG4gIGNvbnN0IHBhcmFncmFwaHMgPSBbXTtcbiAgY29uc3QgbGluZXMgPSBbXTtcbiAgY29uc3Qgd29yZHMgPSBbXTtcbiAgY29uc3Qgc3ltYm9scyA9IFtdO1xuXG4gIHBhZ2UuYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgYmxvY2sucGFyYWdyYXBocy5mb3JFYWNoKChwYXJhZ3JhcGgpID0+IHtcbiAgICAgIHBhcmFncmFwaC5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgIGxpbmUud29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgIHdvcmQuc3ltYm9scy5mb3JFYWNoKChzeW0pID0+IHtcbiAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgIC4uLnN5bSwgcGFnZSwgYmxvY2ssIHBhcmFncmFwaCwgbGluZSwgd29yZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHdvcmRzLnB1c2goe1xuICAgICAgICAgICAgLi4ud29yZCwgcGFnZSwgYmxvY2ssIHBhcmFncmFwaCwgbGluZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgIC4uLmxpbmUsIHBhZ2UsIGJsb2NrLCBwYXJhZ3JhcGgsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBwYXJhZ3JhcGhzLnB1c2goe1xuICAgICAgICAuLi5wYXJhZ3JhcGgsIHBhZ2UsIGJsb2NrLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYmxvY2tzLnB1c2goe1xuICAgICAgLi4uYmxvY2ssIHBhZ2UsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucGFnZSwgYmxvY2tzLCBwYXJhZ3JhcGhzLCBsaW5lcywgd29yZHMsIHN5bWJvbHMsXG4gIH07XG59O1xuIiwiY29uc3QgaXNFbGVjdHJvbiA9IHJlcXVpcmUoJ2lzLWVsZWN0cm9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGtleSkgPT4ge1xuICBjb25zdCBlbnYgPSB7fTtcblxuICBpZiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVudi50eXBlID0gJ3dlYndvcmtlcic7XG4gIH0gZWxzZSBpZiAoaXNFbGVjdHJvbigpKSB7XG4gICAgZW52LnR5cGUgPSAnZWxlY3Ryb24nO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgZW52LnR5cGUgPSAnYnJvd3Nlcic7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW52LnR5cGUgPSAnbm9kZSc7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZW52O1xuICB9XG5cbiAgcmV0dXJuIGVudltrZXldO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKHByZWZpeCwgY250KSA9PiAoXG4gIGAke3ByZWZpeH0tJHtjbnR9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMywgOCl9YFxuKTtcbiIsImxldCBsb2dnaW5nID0gZmFsc2U7XG5cbmV4cG9ydHMubG9nZ2luZyA9IGxvZ2dpbmc7XG5cbmV4cG9ydHMuc2V0TG9nZ2luZyA9IChfbG9nZ2luZykgPT4ge1xuICBsb2dnaW5nID0gX2xvZ2dpbmc7XG59O1xuXG5leHBvcnRzLmxvZyA9ICguLi5hcmdzKSA9PiAobG9nZ2luZyA/IGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIGFyZ3MpIDogbnVsbCk7XG4iLCJjb25zdCBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuL2dldEVudmlyb25tZW50JykoJ3R5cGUnKSA9PT0gJ2Jyb3dzZXInO1xuY29uc3QgcmVzb2x2ZVVSTCA9IGlzQnJvd3NlciA/IHJlcXVpcmUoJ3Jlc29sdmUtdXJsJykgOiBzID0+IHM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxubW9kdWxlLmV4cG9ydHMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCBvcHRzID0geyAuLi5vcHRpb25zIH07XG4gIFsnY29yZVBhdGgnLCAnd29ya2VyUGF0aCcsICdsYW5nUGF0aCddLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0c1trZXldID0gcmVzb2x2ZVVSTChvcHRzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcHRzO1xufTtcbiIsImNvbnN0IHJlc29sdmVVUkwgPSByZXF1aXJlKCdyZXNvbHZlLXVybCcpO1xuY29uc3QgeyB2ZXJzaW9uLCBkZXBlbmRlbmNpZXMgfSA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhY2thZ2UuanNvbicpO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvZGVmYXVsdE9wdGlvbnMnKTtcblxuLypcbiAqIERlZmF1bHQgb3B0aW9ucyBmb3IgYnJvd3NlciB3b3JrZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC4uLmRlZmF1bHRPcHRpb25zLFxuICB3b3JrZXJQYXRoOiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52LlRFU1NfRU5WID09PSAnZGV2ZWxvcG1lbnQnKVxuICAgID8gcmVzb2x2ZVVSTChgL2Rpc3Qvd29ya2VyLmRldi5qcz9ub2NhY2hlPSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMyl9YClcbiAgICA6IGBodHRwczovL3VucGtnLmNvbS90ZXNzZXJhY3QuanNAdiR7dmVyc2lvbn0vZGlzdC93b3JrZXIubWluLmpzYCxcbiAgLypcbiAgICogSWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgV2ViQXNzZW1ibHksXG4gICAqIGxvYWQgQVNNIHZlcnNpb24gaW5zdGVhZFxuICAgKi9cbiAgY29yZVBhdGg6IGBodHRwczovL3VucGtnLmNvbS90ZXNzZXJhY3QuanMtY29yZUB2JHtkZXBlbmRlbmNpZXNbJ3Rlc3NlcmFjdC5qcy1jb3JlJ10uc3Vic3RyaW5nKDEpfS90ZXNzZXJhY3QtY29yZS4ke3R5cGVvZiBXZWJBc3NlbWJseSA9PT0gJ29iamVjdCcgPyAnd2FzbScgOiAnYXNtJ30uanNgLFxufTtcbiIsIi8qKlxuICpcbiAqIFRlc3NlcmFjdCBXb3JrZXIgYWRhcHRlciBmb3IgYnJvd3NlclxuICpcbiAqIEBmaWxlb3ZlcnZpZXcgVGVzc2VyYWN0IFdvcmtlciBhZGFwdGVyIGZvciBicm93c2VyXG4gKiBAYXV0aG9yIEtldmluIEt3b2sgPGFudGltYXR0ZXIxNUBnbWFpbC5jb20+XG4gKiBAYXV0aG9yIEd1aWxsZXJtbyBXZWJzdGVyIDxndWlAbWl0LmVkdT5cbiAqIEBhdXRob3IgSmVyb21lIFd1IDxqZXJvbWV3dXNAZ21haWwuY29tPlxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdE9wdGlvbnMnKTtcbmNvbnN0IHNwYXduV29ya2VyID0gcmVxdWlyZSgnLi9zcGF3bldvcmtlcicpO1xuY29uc3QgdGVybWluYXRlV29ya2VyID0gcmVxdWlyZSgnLi90ZXJtaW5hdGVXb3JrZXInKTtcbmNvbnN0IG9uTWVzc2FnZSA9IHJlcXVpcmUoJy4vb25NZXNzYWdlJyk7XG5jb25zdCBzZW5kID0gcmVxdWlyZSgnLi9zZW5kJyk7XG5jb25zdCBsb2FkSW1hZ2UgPSByZXF1aXJlKCcuL2xvYWRJbWFnZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdE9wdGlvbnMsXG4gIHNwYXduV29ya2VyLFxuICB0ZXJtaW5hdGVXb3JrZXIsXG4gIG9uTWVzc2FnZSxcbiAgc2VuZCxcbiAgbG9hZEltYWdlLFxufTtcbiIsImNvbnN0IHJlc29sdmVVUkwgPSByZXF1aXJlKCdyZXNvbHZlLXVybCcpO1xuY29uc3QgYmx1ZWltcExvYWRJbWFnZSA9IHJlcXVpcmUoJ2JsdWVpbXAtbG9hZC1pbWFnZScpO1xuXG4vKipcbiAqIHJlYWRGcm9tQmxvYk9yRmlsZVxuICpcbiAqIEBuYW1lIHJlYWRGcm9tQmxvYk9yRmlsZVxuICogQGZ1bmN0aW9uXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqL1xuY29uc3QgcmVhZEZyb21CbG9iT3JGaWxlID0gKGJsb2IpID0+IChcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShmaWxlUmVhZGVyLnJlc3VsdCk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSAoeyB0YXJnZXQ6IHsgZXJyb3I6IHsgY29kZSB9IH0gfSkgPT4ge1xuICAgICAgcmVqZWN0KEVycm9yKGBGaWxlIGNvdWxkIG5vdCBiZSByZWFkISBDb2RlPSR7Y29kZX1gKSk7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICB9KVxuKTtcblxuY29uc3QgZml4T3JpZW50YXRpb25Gcm9tVXJsT3JCbG9iT3JGaWxlID0gKGJsb2IpID0+IChcbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBibHVlaW1wTG9hZEltYWdlKFxuICAgICAgYmxvYixcbiAgICAgIChpbWcpID0+IGltZy50b0Jsb2IocmVzb2x2ZSksXG4gICAgICB7XG4gICAgICAgIG9yaWVudGF0aW9uOiB0cnVlLFxuICAgICAgICBjYW52YXM6IHRydWUsXG4gICAgICB9LFxuICAgICk7XG4gIH0pXG4pO1xuXG4vKipcbiAqIGxvYWRJbWFnZVxuICpcbiAqIEBuYW1lIGxvYWRJbWFnZVxuICogQGZ1bmN0aW9uIGxvYWQgaW1hZ2UgZnJvbSBkaWZmZXJlbnQgc291cmNlXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqL1xuY29uc3QgbG9hZEltYWdlID0gYXN5bmMgKGltYWdlKSA9PiB7XG4gIGxldCBkYXRhID0gaW1hZ2U7XG4gIGlmICh0eXBlb2YgaW1hZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaW1hZ2UuZW5kc1dpdGgoJy5wYm0nKSkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHJlc29sdmVVUkwoaW1hZ2UpKTtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXNwLmFycmF5QnVmZmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpbWcgPSBpbWFnZTtcbiAgICAgIC8vIElmIG5vdCBCYXNlNjQgSW1hZ2VcbiAgICAgIGlmICghL2RhdGE6aW1hZ2VcXC8oW2EtekEtWl0qKTtiYXNlNjQsKFteXCJdKikvLnRlc3QoaW1hZ2UpKSB7XG4gICAgICAgIGltZyA9IHJlc29sdmVVUkwoaW1hZ2UpO1xuICAgICAgfVxuICAgICAgZGF0YSA9IGF3YWl0IHJlYWRGcm9tQmxvYk9yRmlsZShcbiAgICAgICAgYXdhaXQgZml4T3JpZW50YXRpb25Gcm9tVXJsT3JCbG9iT3JGaWxlKGltZyksXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGltYWdlLnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICBkYXRhID0gYXdhaXQgbG9hZEltYWdlKGltYWdlLnNyYyk7XG4gICAgfVxuICAgIGlmIChpbWFnZS50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICBkYXRhID0gYXdhaXQgbG9hZEltYWdlKGltYWdlLnBvc3Rlcik7XG4gICAgfVxuICAgIGlmIChpbWFnZS50YWdOYW1lID09PSAnQ0FOVkFTJykge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaW1hZ2UudG9CbG9iKGFzeW5jIChibG9iKSA9PiB7XG4gICAgICAgICAgZGF0YSA9IGF3YWl0IHJlYWRGcm9tQmxvYk9yRmlsZShibG9iKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGltYWdlIGluc3RhbmNlb2YgRmlsZSB8fCBpbWFnZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBsZXQgaW1nID0gaW1hZ2U7XG4gICAgaWYgKCFpbWFnZS5uYW1lLmVuZHNXaXRoKCcucGJtJykpIHtcbiAgICAgIGltZyA9IGF3YWl0IGZpeE9yaWVudGF0aW9uRnJvbVVybE9yQmxvYk9yRmlsZShpbWcpO1xuICAgIH1cbiAgICBkYXRhID0gYXdhaXQgcmVhZEZyb21CbG9iT3JGaWxlKGltZyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRJbWFnZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKHdvcmtlciwgaGFuZGxlcikgPT4ge1xuICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBoYW5kbGVyKGRhdGEpO1xuICB9O1xufTtcbiIsIi8qKlxuICogc2VuZFxuICpcbiAqIEBuYW1lIHNlbmRcbiAqIEBmdW5jdGlvbiBzZW5kIHBhY2tldCB0byB3b3JrZXIgYW5kIGNyZWF0ZSBhIGpvYlxuICogQGFjY2VzcyBwdWJsaWNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhc3luYyAod29ya2VyLCBwYWNrZXQpID0+IHtcbiAgd29ya2VyLnBvc3RNZXNzYWdlKHBhY2tldCk7XG59O1xuIiwiLyoqXG4gKiBzcGF3bldvcmtlclxuICpcbiAqIEBuYW1lIHNwYXduV29ya2VyXG4gKiBAZnVuY3Rpb24gY3JlYXRlIGEgbmV3IFdvcmtlciBpbiBicm93c2VyXG4gKiBAYWNjZXNzIHB1YmxpY1xuICovXG5tb2R1bGUuZXhwb3J0cyA9ICh7IHdvcmtlclBhdGgsIHdvcmtlckJsb2JVUkwgfSkgPT4ge1xuICBsZXQgd29ya2VyO1xuICBpZiAoQmxvYiAmJiBVUkwgJiYgd29ya2VyQmxvYlVSTCkge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYGltcG9ydFNjcmlwdHMoXCIke3dvcmtlclBhdGh9XCIpO2BdLCB7XG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgfSk7XG4gICAgd29ya2VyID0gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgfSBlbHNlIHtcbiAgICB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlclBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHdvcmtlcjtcbn07XG4iLCIvKipcbiAqIHRlcm1pbmF0ZVdvcmtlclxuICpcbiAqIEBuYW1lIHRlcm1pbmF0ZVdvcmtlclxuICogQGZ1bmN0aW9uIHRlcm1pbmF0ZSB3b3JrZXJcbiAqIEBhY2Nlc3MgcHVibGljXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKHdvcmtlcikgPT4ge1xuICB3b3JrZXIudGVybWluYXRlKCk7XG59O1xuIiwiaW1wb3J0IHRlc3NlcmFjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Rlc3NlcmFjdFwiO1xuIiwiaW1wb3J0IFRlc3NlcmFjdCBmcm9tIFwidGVzc2VyYWN0LmpzXCI7XG5cblRlc3NlcmFjdC5yZWNvZ25pemUoXCJkaXN0L2ltYWdlcy9lbmdfYncucG5nXCIsIFwiZW5nXCIsIHtcbiAgbG9nZ2VyOiAobSkgPT4gY29uc29sZS5sb2cobSksXG59KS50aGVuKCh7IGRhdGE6IHsgdGV4dCB9IH0pID0+IHtcbiAgY29uc29sZS5sb2codGV4dCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=