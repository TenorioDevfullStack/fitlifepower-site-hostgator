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

# Enviar para o GitHub
echo "Enviando para o GitHub..."
git push origin master

echo "Deploy concluído! O cPanel irá automaticamente fazer o deploy dos arquivos." 