import { useEffect, useState } from "react";
import { ContainerMobile, Wrapper, FeedBox } from "./styles";

interface Data {
  id: number;
  nome: string;
  apelido?: string;
  comentario: string;
  imagem: string;
}

interface FeedBacksProps {
  depositions: Data[];
}

export function ContentMobile({ depositions }: FeedBacksProps) {
  const [first, second, three] = depositions;

  const [isSelectedOne, setIsSelectedOne] = useState(true);
  const [isSelectedTwo, setIsSelectedTwo] = useState(false);
  const [isSelectedThree, setIsSelectedThree] = useState(false);

  function handleSelectedOne() {
    setIsSelectedOne(true);
    setIsSelectedTwo(false);
    setIsSelectedThree(false);
  }

  function handleSelectedTwo() {
    setIsSelectedOne(false);
    setIsSelectedTwo(true);
    setIsSelectedThree(false);
  }
  function handleSelectedThree() {
    setIsSelectedOne(false);
    setIsSelectedTwo(false);
    setIsSelectedThree(true);
  }

  useEffect(() => {
    handleSelectedOne();
    handleSelectedTwo();
    handleSelectedThree();
  }, []);

  return (
    <ContainerMobile>
      <h1>O que os clientes acham do nosso serviço </h1>
      <Wrapper>
        <button
          onClick={handleSelectedOne}
          className={`${isSelectedOne && "selected"}`}
        >
          <img
            src={`${first.imagem}`}
            alt="profile"
          />
        </button>
        <button
          onClick={handleSelectedTwo}
          className={`${isSelectedTwo && "selected"}`}
        >
          <img
            src={`https://res.cloudinary.com/eject/${second.imagem}`}
            alt="profile"
          />
        </button>
        <button
          onClick={handleSelectedThree}
          className={`${isSelectedThree && "selected"}`}
        >
          <img
            src={`https://res.cloudinary.com/eject/${three.imagem}`}
            alt="profile"
          />
        </button>
        {isSelectedOne && (
          <FeedBox key={first.id}>
            <p>{first.comentario}</p>
            <h3>{first.nome}</h3>
          </FeedBox>
        )}
        {isSelectedTwo && (
          <FeedBox key={second.id}>
            <p>{second.comentario}</p>
            <h3>{second.nome}</h3>
          </FeedBox>
        )}

        {isSelectedThree && (
          <FeedBox key={three.id}>
            <p>{three.comentario}</p>
            <h3>{three.nome}</h3>
          </FeedBox>
        )}
      </Wrapper>
    </ContainerMobile>
  );
}

//export default ContentMobile;

/*
export function ContentMobile() {
  const [isSelectedOne, setIsSelectedOne] = useState(true);
  const [isSelectedTwo, setIsSelectedTwo] = useState(false);
  const [isSelectedThree, setIsSelectedThree] = useState(false);

  function handleSelectedOne() {
    setIsSelectedOne(true);
    setIsSelectedTwo(false);
    setIsSelectedThree(false);
  }
  function handleSelectedTwo() {
    setIsSelectedOne(false);
    setIsSelectedTwo(true);
    setIsSelectedThree(false);
  }
  function handleSelectedThree() {
    setIsSelectedOne(false);
    setIsSelectedTwo(false);
    setIsSelectedThree(true);
  }

  useEffect(() => {
    handleSelectedOne();
    handleSelectedTwo();
    handleSelectedThree();
  }, []);

  return (
    <ContainerMobile>
      <h1>O que os clientes acham do nosso serviço </h1>
      <Wrapper>
        <button
          onClick={handleSelectedOne}
          className={`${isSelectedOne && 'selected'}`}
        >
          <img src="" alt="profile" />
        </button>
        <button
          onClick={handleSelectedTwo}
          className={`${isSelectedTwo && 'selected'}`}
        >
          <img src="" alt="profile" />
        </button>
        <button
          onClick={handleSelectedThree}
          className={`${isSelectedThree && 'selected'}`}
        >
          <img src="" alt="profile" />
        </button>
        {isSelectedOne && (
          <FeedBox>
            <p>
              Um briefing bem definido conseguiu ser transformado em uma obra de
              arte que eu nunca conseguiria pensar igual.
            </p>
            <h3>My Name</h3>
          </FeedBox>
        )}
        {isSelectedTwo && (
          <FeedBox>
            <p>
              Um briefing bem definido conseguiu ser transformado em uma obra de
              arte que eu nunca conseguiria pensar igual.
            </p>
            <h3>My Name 2</h3>
          </FeedBox>
        )}
        {isSelectedThree && (
          <FeedBox>
            <p>
              Um briefing bem definido conseguiu ser transformado em uma obra de
              arte que eu nunca conseguiria pensar igual.
            </p>
            <h3>My Name 3</h3>
          </FeedBox>
        )}
      </Wrapper>
    </ContainerMobile>
  );
}
*/
