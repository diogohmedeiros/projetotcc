

CREATE VIEW vw_empresa_usuario AS

select u.nome_usuario, u.foto_usuario, e.foto_de_perfil_empresa, e.nome_empresa,
e.telefone, e.email from usuarios u inner join empresas e where u.cnpj_empresa_atual = e.cnpj;
 