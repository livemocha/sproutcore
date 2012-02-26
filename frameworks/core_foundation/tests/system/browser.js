// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2012 Michael Krotscheck
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

test("Test single version number", function() {
  // Test a single digit version
  SC.browser.version = "2";

  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("2") == 0, "[2] Single matching numeric version must match");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("3") < 0, "[3] Single greater numeric version must be greater");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("1") > 0, "[1] Single smaller numeric version must be smaller");

  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("2", "0") == 0, "[2.0] Double matching numeric version must match");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("2", "1") == 0, "[2.1] Similar double greater numeric version must equal");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("3", "1") < 0, "[3.1] Double greater numeric version must be greater");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("1", "9") > 0, "[1.9] Double smaller numeric version must be smaller");

  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("2", "0", "0") == 0, "[2.0.0] Triple matching numeric version must match");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("2", "0", "1") == 0, "[2.0.1] Triple double greater numeric version must equal");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("3", "0", "1") < 0, "[3.0.1] Triple greater numeric version must be greater");
  delete SC.browser._versionSplit;
  ok(SC.browser.compareVersion("1", "9", "9") > 0, "[1.9.9] Triple smaller numeric version must be smaller");
});
