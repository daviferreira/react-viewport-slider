'use strict';

import { JSDOM } from 'jsdom';

// needed for animatedScrollTo
const { window } = new JSDOM(
  '<!doctype html><html><body></body></html>'
);

global.window = window;
global.navigator = window.navigator;
global.document = window.document;
