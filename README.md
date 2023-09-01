# POC-MassDataHack
Proof of Concept for undeletable Mass Data Hack

The idea is to use this program on a word on a webpage, consider that word to be the pivoting point, once the word is highlighted and this program is run go into your javascript console using ctrl + shift + c, and copy the word into the console as so

const wordcopied = "";

document.writeln(\`${wordcopied}\`);

this should give you a pure blank page which you can not right click from,

ctrl + s to save this file choosing the HTML only option for file type, which will save the file as 1 bit file which can not be opened, and does not exist on the file system.


This will assume that the string copied in is a source of all possible combinations of characters in unicode binary up to 45 characters long, which is the amount of the biggest word in the English Language.


For the POC it's just 0'd out, to make sure this doesn't have any actual effects with the result, feel free to remove the line 

`const change = (result * 0).toString().replace(/0/g, '');`
