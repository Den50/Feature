class Animal:
  def __init__(self, name, surname):
    self.name = name
    self.surname = surname
  def getName(self):
    return self.name
  def getSurname(self):
    return self.surname
  def getSS(self):
    print(self.name + self.surname)
def main():
  pig = Animal("Joe", "io")
  print(pig.getName())
  print(pig.getSurname())


if __name__ == "__main__":
  main()