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

Some domains such as github will make sure that if you do this type of program and make a save, despite the save coming up as 1 byte in the download box in the browser, it will be updated with parts of the page in question, to avoid this, create your own blank domain with just the word using `https://wordcopied` before going ahead and doing the process to the word


** Just be warned, the mass data programming is an orchestration based around the idea of a local BlockChain that brings up the value of a mathematical domain. Strategically this uses beepboop bang and gis, to instill the idea that these blockchains could be using geospatial intelligence satellites to track persons of interest down, electromagnetically pick up their signature, use the memory address of the signature in a blockchain that can not be forgotten, and well, do you bang? I knew a family friend who kept a Ship Cannon at his front door after a DirecTV hacker had gotten so many United Airlines employees targeted before 9/11 because he was making the equipment for carding DirecTV for infinite movie tokens and handing em out at work **
