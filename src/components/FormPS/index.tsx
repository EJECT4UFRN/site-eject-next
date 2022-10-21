import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { schema } from '../FormContact/validation';
import Loader from '../Loader';
import { Container, InputContainer, Security } from './styles';

interface myFormProps {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}

export function FormPS() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<myFormProps>({
    resolver: yupResolver(schema),
  });

  function onChangePhone(e: any): void {
    let tel = e.target.value;

    tel = tel.replace(/\D/g, '');
    tel = tel.replace(/^(\d)/, '($1');
    tel = tel.replace(/(.{3})(\d)/, '$1) $2');

    if (tel.length === 13) tel = tel.replace(/(.{3})$/, '-$1');
    else if (tel.length >= 14) tel = tel.replace(/(.{4})$/, '-$1');

    setPhone(tel.substring(0, 15));
  }

  const onSubmit = async (data: myFormProps) => {
    try {
      setLoading(true);
      await api.post('prosempre', {
        name: data.name,
        lastname: data.lastName,
        email: data.email,
        phone: data.phone,
      });
      reset();
      setPhone('');
      router.push('/quem-somos/sucesso');
    } catch (err) {
      new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>Inscreva-se no ProSempre</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <input
            type="text"
            placeholder="Nome"
            {...register('name')}
            autoComplete="off"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#da8001"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </InputContainer>
        <small>{errors.name?.message}</small>
        <InputContainer>
          <input
            type="text"
            placeholder="Sobrenome"
            {...register('lastName')}
            autoComplete="off"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#da8001"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </InputContainer>
        <small>{errors.lastName?.message}</small>
        <InputContainer>
          <label></label>
          <input
            type="text"
            placeholder="E-mail"
            {...register('email')}
            autoComplete="off"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#da8001"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </InputContainer>
        <small>{errors.email?.message}</small>
        <InputContainer>
          <label></label>
          <input
            placeholder="Número"
            value={phone}
            {...register('phone')}
            onChange={(e) => onChangePhone(e)}
            autoComplete="off"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#da8001"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </InputContainer>
        <small>{errors.phone?.message}</small>
        <Security>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 22C12.5 22 21 18.2 21 12.5V5.85L12.5 3L4 5.85V12.5C4 18.2 12.5 22 12.5 22Z"
              stroke="#FF9E16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 10L11.8125 14L10 12.2222"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Suas informações estão seguras</span>
        </Security>

        <button disabled={!!loading} type="submit">
          {loading ? <Loader /> : 'Confirmar'}
        </button>
      </form>
    </Container>
  );
}
