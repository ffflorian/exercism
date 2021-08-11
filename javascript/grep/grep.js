#!/usr/bin/env node
//@ts-check

const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

/**
 * @typedef {{
 *   caseInsensitive: boolean;
 *   entireLines: boolean;
 *   fileNamesOnly: boolean;
 *   inputFiles: string[];
 *   invertResults: boolean;
 *   lineNumbers: boolean;
 *   pattern: string;
 * }} Options
 */

/**
 * @type {Options}
 */
const options = {
  caseInsensitive: false,
  entireLines: false,
  fileNamesOnly: false,
  inputFiles: [],
  invertResults: false,
  lineNumbers: false,
  pattern: '',
};

/**
 * @param {number} [exitCode]
 * @returns {never}
 */
const printHelp = (exitCode = 0) => {
  console.log(`Usage: grep.js [OPTION]... PATTERNS [FILE]...
Search for PATTERNS in each FILE.
Example: grep.js -i 'hello world' menu.h main.c

Options:
  -n, --line-number         print line number with output lines
  -l, --files-with-matches  print only names of FILEs with selected lines
  -i, --ignore-case         ignore case distinctions
  -v, --invert-match        select non-matching lines
  -x, --line-regexp         match only whole lines`);
  process.exit(exitCode);
};

while (args.length) {
  const currentArgument = args[0];
  switch (currentArgument) {
  case '-h':
  case '--help': {
    printHelp();
    break;
  }
  case '-n':
  case '--line-number': {
    options.lineNumbers = true;
    args.shift();
    break;
  }
  case '-l':
  case '--files-with-matches': {
    options.fileNamesOnly = true;
    args.shift();
    break;
  }
  case '-i':
  case '--ignore-case': {
    options.caseInsensitive = true;
    args.shift();
    break;
  }
  case '-v':
  case '--invert-match': {
    options.invertResults = true;
    args.shift();
    break;
  }
  case '-x':
  case '--line-regexp': {
    options.entireLines = true;
    args.shift();
    break;
  }
  default: {
    if (currentArgument.startsWith('-')) {
      throw new Error(`Invalid flag "${currentArgument}"`);
    } else if (!options.pattern) {
      options.pattern = currentArgument;
    } else {
      options.inputFiles.push(currentArgument);
    }
    args.shift();
    break;
  }
  }
}

if (!options.pattern || !options.inputFiles.length) {
  printHelp(1);
}

if (options.entireLines) {
  options.pattern = `^${options.pattern}$`;
}

/**
 * @param {string} fileName
 * @param {string} fileContent
 * @returns {string[]}
 */
const walkFileContent = (fileName, fileContent) => {
  const result = [];
  const regexPattern = new RegExp(options.pattern, options.caseInsensitive ? 'i' : '');
  const linesArray = fileContent.split(/[\n\r]/);
  for (let lineIndex = 0; lineIndex < linesArray.length; lineIndex++) {
    const lineContent = linesArray[lineIndex];
    const regexResult = regexPattern.exec(lineContent);
    const shouldAdd = options.invertResults ? regexResult === null : regexResult !== null;
    if (shouldAdd) {
      const lineNumberMaybe = options.lineNumbers ? `${lineIndex + 1}:` : '';
      const resultContent = options.invertResults ? lineContent : regexResult.input;
      const fileNameMaybe = options.inputFiles.length > 1 ? `${fileName}:` : '';
      result.push(`${fileNameMaybe}${lineNumberMaybe}${resultContent}`);
      if (options.fileNamesOnly) {
        break;
      }
    }
  }
  return result;
};

for (const inputFile of options.inputFiles) {
  const resolvedPath = path.resolve(inputFile);
  const fileContent = fs.readFileSync(resolvedPath, 'utf-8');
  const results = walkFileContent(inputFile, fileContent);
  if (results.length > 0) {
    console.log(options.fileNamesOnly ? inputFile : results.join('\n'));
  }
}
