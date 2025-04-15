# Missão 1: Restaurando as Regras Escolares
nota_aluno = float(input("Digite a nota do aluno: "))
if nota_aluno >= 6:
    print("Aprovado!")
else:
    print("Reprovado!")

# Missão 2: O Sistema Eleitoral Secreto
idade_usuario = int(input("Digite sua idade: "))
if idade_usuario >= 16:
    print("Você pode votar!")
else:
    print("Você não pode votar ainda.")

# Missão 3: Recuperando o Sistema de Notas
nota_estudante = int(input("Digite a nota do aluno: "))
if 90 <= nota_estudante <= 100:
    print("Parabéns, você tirou A!")
elif 80 <= nota_estudante <= 89:
    print("Muito bem, você tirou B.")
elif 70 <= nota_estudante <= 79:
    print("Bom trabalho, você tirou C.")
elif 60 <= nota_estudante <= 69:
    print("Fique atento, você tirou D.")
else:
    print("Estude um pouco mais, você tirou F.")

# Missão 4: Restaurando a Identificação de Números
valor1 = float(input("Digite o primeiro número: "))
valor2 = float(input("Digite o segundo número: "))
soma_valores = valor1 + valor2
print(f"A soma dos números é {soma_valores}")

# Missão 5: Recuperando o Cofre de Segurança 
senha_digitada = input("Digite a senha: ")
if senha_digitada == "Python123":
    print("Acesso concedido!")
else:
    print("Acesso negado!")

# Missão 6: Reforçando a Segurança e a Contagem do Sistema
contador = 1
while contador <= 10:
    print(contador)
    contador += 1

# Missão 7: Organizando a Lista
lista_numeros = [8, 3, 10, 1, 5]
lista_numeros.sort()
print("Números em ordem crescente:", lista_numeros)

# Missão 8: Acessando os Registros de Alunos
nomes_alunos = ("Ana", "Bruno", "Carla", "Daniel", "Eduardo")
print("Primeiro nome:", nomes_alunos[0])
print("Último nome:", nomes_alunos[-1])

# Missão 9: Calculando Dobro de um Número
def calcular_dobro(numero):
    return f"O dobro de {numero} é {numero * 2}"

numero_usuario = int(input("Digite um número para calcular o dobro: "))
print(calcular_dobro(numero_usuario))

# Missão 10: Contando Letras
def contar_letras(nome_digitado):
    return f"O nome {nome_digitado} tem {len(nome_digitado)} letras"

nome_usuario = input("Digite um nome: ")
print(contar_letras(nome_usuario))