
INSERT INTO companies (id, email, password, address, phone, name)
VALUES (1, 'ejemplo@dominio.com', 'contrasena', 'Dirección de ejemplo', '1234567890', 'Nombre de la compañía') RETURNING id;

INSERT INTO PRODUCT (name, instruction, description, total_production, state, is_active, time_estimated_completion, company_id)
VALUES ('Nombre del Producto', 'Instrucción del Producto', 'Descripción del Producto', 100, true, true, '2024-02-22', 1);