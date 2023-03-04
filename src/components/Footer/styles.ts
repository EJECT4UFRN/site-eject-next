import styled from 'styled-components';

export const Container = styled.footer`
  height: auto;
  width: 100%;
  background-color: #0a374e;
  padding: 0 4rem;

  > p {
    font-size: 1rem;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: 960px) {
    padding: 0;
    height: 150px;
    >p{
      padding-top: 2rem;
      padding-bottom:1rem;
      background-color: #0a374e;
    }
  }
  .bottom_cookie{
    linear-gradient(92.07deg,#0995db 1.84%,#11a7f1 100%);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem auto 0 auto;
  > div {
    img {
      width: 100%;
    }
  }
  > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
    h2 {
      text-transform: capitalize;
    }
    li {
      color: ${({ theme }) => theme.colors.gray100};
      line-height: 1.3rem;
      margin: 0.4rem 0;
      a {
        color: ${({ theme }) => theme.colors.gray100};
        &:hover {
          text-decoration: underline;
        }
      }
      #p_localizacao{
        width: 20vmax;
      }
    }
    span{
      display:flex;
      align-items: center;
    }
  }
  #social_youtube{
    margin-left:0.5rem;
    margin-rigth:0.5rem;
  }
  > ul:last-child {
    h2 {
      margin-bottom: 0.5rem;
    }
    li {
      line-height: 0.8rem;
    }
    span {
      margin-top: 1rem;
      a:nth-child(2) {
        margin: 0 0.7rem;
      }
    }
  }
 
  @media (max-width: 960px) {
    justify-content: center;
    margin: 1rem 0.5rem;
    > div {
      img {
        width: 75%;
      }
    }
    ul {
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        display: none;
      }
      &:last-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transform: translateX(-30px);

        > div {
          margin: 0 2rem;
        }
        span {
          margin: 0;
        }
      }
    }
    
  }
  @media (max-width: 580px) {
    justify-content: center;
    > div {
      width: 150px;
    }
    ul {
      &:last-child > {
        margin-right: auto;

        div {
          margin: 0 0.6rem;
        }
      }
    }
    
  }
  @media (max-width: 420px) {
    ul:last-child {
      transform: translate(-22px);
      span {
        display: flex;
        align-items: center;
        flex-direction: column;
        transform: translate3d(10px, 15px, 0);
        a:nth-child(2) {
          margin: 0.8rem 0;
        }
      }
    }
    #social_youtube{
      margin:0;
    }
  }
`;
