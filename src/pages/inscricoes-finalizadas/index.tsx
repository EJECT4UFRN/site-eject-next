import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import React, { useEffect, useState } from "react";
import {TextTermsOfUse} from "../../components/TermsOfUseText/index";
import { Container, FinishedSubscribe } from "../../styles/templates/Inscricao";

export default function InscricoesFinalizadas() {
  return (
    <Container>
        <FinishedSubscribe>
          <h1>Periodo de inscrições finalizado!</h1>
          <img src="/images/foca.png" />
        </FinishedSubscribe>
    </Container>
  );
}
