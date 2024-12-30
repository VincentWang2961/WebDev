import sys

x = 10
y = 0

try:
    result = x / y
except ZeroDivisionError:
    print("Error, can not divide by 0.")
    sys.exit(1)

print(result)