import { Container } from './styles';


interface Props{
  location: String,
}

export function Maps({location}:Props) {

  var nameAddress = location.split(" ");
  var nameWithoutAddress = location.substring(nameAddress[0].length+2, (location.length - 1) - nameAddress[nameAddress.length-1].length-1);
  var CEP = nameAddress[nameAddress.length-1];
  
  return (
    <Container>
      <div>
        <strong>{nameAddress[0]}</strong>
        <p>{nameWithoutAddress}</p>
        <p>{CEP}</p>
      </div>
      <main>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1644338665014!2d-35.20755528569912!3d-5.832429395773927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff9268f0e61d%3A0x85af869d288f334e!2sEmpresa%20J%C3%BAnior%20da%20Escola%20de%20Ci%C3%AAncias%20e%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1623418134269!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </main>
    </Container>
  );
}
