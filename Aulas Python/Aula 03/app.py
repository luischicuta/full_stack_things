num1 = 5 # É uma variavel tipo Int
num2 = 3.5 # É uma variavel tipo Float
stringer = "String"

# Para saber o tipo da variavel, usando a função type(), conforme o exemplo abaixo:

print(type(num1))
print(type(num2))
print(type(stringer))

# Para converter a variavel em outro tipo de váriavel podemos fazer conforme os exemplos abaixo

# Int em Float:
a = float(num1)
print(a)

# Float em Int:
b = int(num2)
print(b)

# Matemática (Operadores Aritiméticos):

print(num1 + num2) # Soma
print(num1 - num2) # Subtração
print(num1 * num2) # Multiplicação
print(num1 / num2) # Divisão que pode retornar como Float
print(num1 % num2) # Mod (Resto da Divisão)
print(num1 ** num2) # Exponenciação exemplo se num1 foi 2 e num2 for 3, ele fará "2 * 2 * 2"
print(num1 // num2) # Divisão que retorna como Int

# Exemplo de equação complexa:

print(3 + 5 * 7 + 3) # Ele vai primeiro multiplicar e depois somar

# Exemplo 2:

print ((3 + 5) * (7 + 3))

# Funções matemáticas:

print(abs(-15)) # retorna um número absoluto
print(pow(3,3)) # retorna a exponenciação
print(max(1,5,8,10,3,9,2)) # Retorna o número do maior para o menor
print(min(1,5,-1,10,5,-5,0)) # Retorna o Número do menor para o maior