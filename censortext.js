﻿/* censortext.js */
var censoredWords = ["sad", "bad", "mad"];
var customerCensoredWords = [];

function censor(inStr){
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customerCensoredWords) {
        inStr = inStr.replace(customerCensoredWord[idx], "****");
    }
    return inStr;
}

function addCensoredWord(word){
    customerCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;