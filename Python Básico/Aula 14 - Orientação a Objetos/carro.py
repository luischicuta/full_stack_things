# ORIENTAÇÃO A OBJETOS EM PYTHON

class Carro:
    def __init__(self,marca,modelo,cor,combustivel): # Self é a mesma coisa que o "This" do Javascript
        self.marca = marca
        self.modelo = modelo
        self.cor = cor
        self.combustivel = combustivel
        self.ligado = False
        self.velocidade = 0

    def ligar(self):
        if self.ligado:
            print(f"{self.modelo} já está ligado, nada acontece.")
        else:
            print(f"{self.modelo} ligado.")
            self.ligado = True

    def desligar(self):
        if self.ligado:
            print(f"{self.modelo} desligado.")
            self.ligado = False
        else:
            print(f"{self.modelo} já está desligado, nada acontece.")

    def acelerar(self):
        if self.ligado:
            self.velocidade += 1
            print(f"Acelerando {self.modelo} para: {self.velocidade}Km/h.")
        else:
            print(f"{self.modelo} está desligado, não dá para acelerar.")

    def frear(self):
        if self.ligado:
            self.velocidade -= 1
            print(f"Reduzindo {self.modelo} para: {self.velocidade}Km/h.")
        else:
            print(f"{self.modelo} está desligado, não dá para frear.")