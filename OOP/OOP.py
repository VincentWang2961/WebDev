class Point():
    def __init__(self, input1, input2) -> None:
        self.x = input1
        self.y = input2

p = Point(2, 8)
print(p.x)
print(p.y)

class Flight():
    def __init__(self, capacity) -> None:
        self.capacity = capacity
        self.passengers = []
    
    def add_passernger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self):
        return self.capacity - len(self.passengers)


flight = Flight(3)
print(flight.capacity)
people = ['Harry', 'Ron', 'Hermione', 'Ginny']
for _ in people:
    print(flight.add_passernger(_))
print(flight.passengers)