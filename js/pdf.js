/**
 * Created by Administrator on 2017/3/22.
 */
'use strict';

var pdfjsVersion = PDFJSDev.eval('BUNDLE_VERSION');
var pdfjsBuild = PDFJSDev.eval('BUNDLE_BUILD');

var pdfjsSharedUtil = require('./shared/util.js');
var pdfjsDisplayGlobal = require('./display/global.js');
var pdfjsDisplayAPI = require('./display/api.js');
var pdfjsDisplayTextLayer = require('./display/text_layer.js');
var pdfjsDisplayAnnotationLayer = require('./display/annotation_layer.js');
var pdfjsDisplayDOMUtils = require('./display/dom_utils.js');
var pdfjsDisplaySVG = require('./display/svg.js');

exports.PDFJS = pdfjsDisplayGlobal.PDFJS;
exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.CustomStyle = pdfjsDisplayDOMUtils.CustomStyle;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.UnexpectedResponseException =
    pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.isValidUrl = pdfjsDisplayDOMUtils.isValidUrl;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.createBlob = pdfjsSharedUtil.createBlob;
exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;