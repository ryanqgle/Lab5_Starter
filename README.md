# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Ryan Le

## 1. 

Q: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

A: Yes, because you need to test if the message is even created. Once you ensure that the message is created, you still need to further test the feature and its functionality, like if it sends/receives correctly, is the message too big/empty, and edge cases. 

## 2. 

Q: Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

A: Yes, I would still unit test the max message length feature because there may be varying formats/languages. Some inputs may include characters that consume multiple or an incorrect amount of characters in the message. If the message contains too much data, which is what I'm guessing the threshold is to prevent, it will slow down the system. Moreover, we must also test edge cases, like: does it count 80 characters correctly, does it validate 79 characters, or 81, or empty. 

Explore: https://ryanqgle.github.io/Lab5_Starter/explore.html

Expose: https://ryanqgle.github.io/Lab5_Starter/expose.html
