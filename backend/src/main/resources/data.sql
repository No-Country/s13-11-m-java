
INSERT INTO companies (id, email, password, address, phone, name)
VALUES (1, 'ejemplo@dominio.com', 'contrasena', 'Dirección de ejemplo', '1234567890', 'Nombre de la compañía')
ON CONFLICT (id) DO NOTHING
RETURNING id;
