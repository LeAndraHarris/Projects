 '''
Create a simple dice game whith two players. Each player will take turns rolling
dice. Add the dice total to each players score. The first one to 20 wins. If a
player rolls a double 3 or 6 the score is reset. Use classes for the users.
'''


import random
def dice():
    return random.randint(1,6)
#print(dice())

player_1 = 0
player_2 = 0

while player_1 < 20 and player_2 < 20:
    pause = input("Player 1 press enter to roll")
    player_1 += dice()
    print("player1 score is {}".format(player_1))
    pause = input("Player 2 press enter to roll")
    player_2 += dice()
    print("player2 score is {}".format(player_2))

else:
    if player1 >= 20:
        print("player1" congrats you won!!!")
    else:
        print("player2" congrats you won!!!")

    if random == 1:
        print ("[-----]")
        print ("[--O--]")
        print ("[-----]")

    if random == 2:
        print ("[-----]")
        print ("[-O-O-]")
        print ("[-----]")

     if random == 3:
         print("[-----]")
         print("[O----]")
         print("[  O  ]")
         print("[----O]")

     if random == 4:
         print("[-O-O-]")
         print("[     ]")
         print("[-O-O-]")

     if random == 5:
         print("[-O-O-]")
         print("[  O  ]")
         print("[-O-O-]")

     if random == 6:
         print("[-O-O-]")
         print("[ O O ]")
         print("[-O-O-]")
