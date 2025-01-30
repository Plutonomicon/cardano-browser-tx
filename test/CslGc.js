import * as lib from "@mlabs-haskell/cardano-data-lite";

import process from "process";

export const testExternalMemLeakImpl = (config) => async () => {
  const debug = false;

  const debugLog = (...args) => {
    if (debug) {
      console.log(...args);
    }
  };

  const {
    numIterations,
    refIteration,
    smoothingWindowSize,
    maxError,
    delay,
    numArrays,
    arrSize
  } = config;

  if (refIteration >= numIterations) {
    throw new Error("refIteration must be less than numIterations.");
  }

  let externalMemUpperBound = null;
  let referenceExternalMem = null;

  const lastMeasurements = [];

  for (let i = 0; i < numIterations; i++) {
    debugLog(`\n--- Iteration ${i} ---`);

    for (let j = 0; j < numArrays; j++) {
      const bytes = new Uint8Array(Array(arrSize).fill(0));
      lib.PlutusData.new_bytes(bytes);
    }

    await new Promise(resolve => setTimeout(resolve, delay));

    const currentExternalMem = process.memoryUsage().external;
    lastMeasurements.push(currentExternalMem);

    if (lastMeasurements.length > smoothingWindowSize) {
      lastMeasurements.shift();
    }

    const avgExternalMem = lastMeasurements.reduce((a, b) => a + b, 0) / lastMeasurements.length;

    debugLog(`Current external memory: ${currentExternalMem}`);
    debugLog(`Rolling average external memory: ${avgExternalMem}`);

    if (i === refIteration) {
      referenceExternalMem = avgExternalMem;
      externalMemUpperBound = referenceExternalMem * (1 + maxError / 100);
      debugLog(
        `\nReference external memory set at iteration ${i}: ${referenceExternalMem}\n` +
        `Upper bound set to: ${externalMemUpperBound} (maxError ${maxError}%)`
      );
    }

    if (referenceExternalMem !== null && i > refIteration) {
      if (avgExternalMem > externalMemUpperBound) {
        console.error(
          `\n=== Potential Memory Leak Detected ===\n` +
          `Iteration: ${i}\n` +
          `Rolling average external usage (${avgExternalMem}) exceeded upper bound (${externalMemUpperBound}).`
        );
        throw new Error("External memory leak detected.");
      } else {
        debugLog(`Iteration ${i} within acceptable bounds.`);
      }
    }
  }

  debugLog(`\nAll ${numIterations} iterations completed without detecting a leak.`);
};

