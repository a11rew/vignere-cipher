# Vignere's Cypher

Javascript implementation of Vignere's cypher.

## Intro

The Vigenère cipher (French pronunciation: ​[viʒnɛːʁ]) is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution.

First described by Giovan Battista Bellaso in 1553, the cipher is easy to understand and implement, but it resisted all attempts to break it until 1863, three centuries later. This earned it the description le chiffrage indéchiffrable (French for 'the indecipherable cipher').

[Wiki](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

## Usage

```
cipher.js <necrypt|decrypt> <text to be encrypted>
```

### Examples

```js
node cipher.js encrypt text //Encrypted output
```

```js
node cipher.js decrypt $ado3 //Decrypted output
```
