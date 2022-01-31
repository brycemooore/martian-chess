# martian-chess

Martian Chess app

Make separate directories for each service

### Developers

`Bryce, Jake, and maybe Matteo`

### How to play

https://www.looneylabs.com/content/martian-chess

### FEN
String notation to denote current board position

count of / character should = 8

Q represents a queen
D reprents a drone
P represents a pawn
number reprents number of blank spaces
/ represents end of row


Starts at top left point of board and depicts each row

Since player score can inform strategy, current score for each player should be included in FEN. 

A represents player A and in brackets it notates piece type and number of pieces that player has won

example:
A[Q2D1P1]B[Q0D1P1]

starting postion of board would be:

QQD1/QDP1/DPP1/4/4/1PPD/1PDQ/1DQQ/A[Q0D0P0]B[Q0D0P0]