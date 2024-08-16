-- ALIMENTAR TABELA DE USUÁRIOS
INSERT INTO usuarios (name, surname, email, password) VALUES ('Lucas', 'Ferreira', 'lucas.ferreira@example.com', 'p@ssw0rd123'), ('Mariana', 'Silva', 'mariana.silva@example.com', 'M@ri4na2024'), ('Carlos', 'Souza', 'carlos.souza@example.com', 'C4rlos#1990'), ('Ana', 'Oliveira', 'ana.oliveira@example.com', 'A*naOl!ve'), ('Rafael', 'Almeida', 'rafael.almeida@example.com', 'R@f43lPass'), ('Júlio', 'Ferreira', 'julio@example.com', 'Ju5432q%'), ('Marcos', 'Castro', 'marcos.c@example.com', "mc789&wq"), ('Kevin', 'Costa', 'kevc@example.com', 'kc931*$2a');

-- ALIMENTAR TABELA DE CATEGORIAS
INSERT INTO categorias (name, slug) VALUES ('camisetas', 'camisetas'), ('tênis', 'tenis'), ('calcas', 'calcas'), ('bonés', 'bones'), ('equipamentos', 'equipamentos'), ('capacetes', 'capacetes'), ('luvas', 'luvas');

-- ALIMENTAR TABELA DE PRODUTOS
INSERT INTO produtos (name, slug, description, price, price_with_discount) VALUES ('K-Swiss V8 - Masculino', 'tenis', 'Tênis da nova coleção K-Swiss', 200.00, 149.00);

-- MODIFICAR COLUNAS createdAt e updatedAt
ALTER TABLE produtos MODIFY createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;