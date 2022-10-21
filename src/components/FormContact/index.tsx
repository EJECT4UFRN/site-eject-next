import { FormEvent, useState } from "react";

import { ModalFormContact } from "../ModalFormContact/index";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";

import { Form, Line } from "./styles";
import api from "../../services/api";

interface myFormProps {
  name: string;
  email: string;
  phone: string;
  textField: string;
}

export function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [annotation, setAnnotation] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal((prev) => !prev);
  }

  function onChangePhone(e: any): void {
    let tel = e.target.value;

    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d)/, "($1");
    tel = tel.replace(/(.{3})(\d)/, "$1) $2");

    if (tel.length === 13) tel = tel.replace(/(.{3})$/, "-$1");
    else if (tel.length >= 14) tel = tel.replace(/(.{4})$/, "-$1");

    setPhone(tel.substring(0, 15));
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (name.trim() === "" || phone.trim() === "" || annotation.trim() === "") {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      await api.post("form-contato", {
        name,
        email,
        phone,
        textField: annotation,
      });
      setName("");
      setEmail("");
      setAnnotation("");
      setPhone("");
    } catch (err) {
      return console.log(err);
    } finally {
      setLoading(false);
      setError(false);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Como a EJECT pode te ajudar?</h2>
        <Line>
          <label>Nome</label>
          <input
            placeholder="Digite o seu nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
            autoComplete="off"
          />
          {error && <small>Campo inválido</small>}
        </Line>
        <Line>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            autoComplete="off"
          />
          {error && <small>Campo inválido</small>}
        </Line>
        <Line>
          <label>Telefone</label>
          <input
            placeholder="Digite o seu telefone"
            value={phone}
            onChange={(e) => onChangePhone(e)}
            autoComplete="off"
          />
          {error && <small>Campo inválido</small>}
        </Line>
        <Line>
          <label>Como podemos ajudar?</label>
          <textarea
            placeholder="Digite um conteúdo"
            autoComplete="off"
            value={annotation}
            onChange={({ target }) => setAnnotation(target.value)}
          />
        </Line>
        {error && <small>Campo Inválido</small>}

        <button type="submit" disabled={loading}>
          {loading ? "Carregando" : "Enviar"}
        </button>
      </Form>
      <ModalFormContact showModal={showModal} setShowModal={openModal} />
    </>
  );
}
