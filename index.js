#!/usr/bin/env node
const mockTaxi = require('./mockTaxiOverview');

const fs = require('fs');

// console.log(fs)
mockTaxi.getMapJson();
