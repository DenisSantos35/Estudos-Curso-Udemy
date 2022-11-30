quantidade = int(input())
print(quantidade)
for i in range(0,quantidade):
    a, b = int(input()), str(input()).upper()
    
    while b != 'C' and b != 'R' and b != 'S':
        b = str(input()).upper()