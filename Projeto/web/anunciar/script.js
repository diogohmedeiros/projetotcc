function cadastrarVaga() {
    let id_empresa = JSON.parse(localStorage.getItem("userdata")).id_empresa;
    let cargo = document.querySelector("#cargo").value;
    let cidade = document.querySelector("#cidade").value;
    let salario = document.querySelector("#salario").value;
    let quantidade_de_vagas = document.querySelector("#quantidade_de_vagas").value;
    let email_de_contato = document.querySelector("#email_de_contato").value;
    let data_encerramento_vaga = document.querySelector("#data_encerramento_vaga").value;
    let descricao = document.querySelector("#descricao").value;
    let requisitos = document.querySelector("#requisitos").value;
    let expediente = document.querySelector("#expediente").value;

    let data = {
        id_empresa: id_empresa,
        cargo: cargo,
        cidade: cidade,
        salario: salario,
        quantidade_de_vagas: quantidade_de_vagas,
        email_de_contato: email_de_contato,
        data_encerramento_vaga: data_encerramento_vaga,
        descricao: descricao,
        requisitos: requisitos,
        expediente: expediente
    }

    fetch("http://localhost:3000/cadastrar_vaga", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.id !== null) {
            alert("Vaga cadastrada com sucesso");
            window.location.href = "./";
        }else {
            alert("Erro ao cadastrar vaga");
        }
    })
}