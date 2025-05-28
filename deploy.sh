#!/bin/bash

# Fazer build do projeto
echo "Fazendo build do projeto..."
pnpm build

# Adicionar alterações
echo "Adicionando alterações ao Git..."
git add .

# Criar commit
echo "Criando commit..."
git commit -m "Atualização do site: $(date)"

# Enviar para a Hostgator
echo "Enviando para a Hostgator..."
git push hostgator master

echo "Deploy concluído!" 