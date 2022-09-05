import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #edf2f7;
`;

export const FromWrapper = styled.div`
  width: 40%;
  height: 70%;
  margin-top: 5%;
  background: white;
  border: 1px solid #edf2f7;
  border-radius: 20px;
  @media screen and (max-width: 980px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 560px) {
    width: 90%;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: 100%;
  gap: 20px;
  align-items: inherit;
  justify-content: center;
`;
export const FromGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0.5rem 0rem;
`;

export const Input = styled.input`
  padding: 10px 30px;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  color: #f20408;
  font-size: 15px;
  padding: 0;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2e86c1;
  padding: 10px 15px;
  border: none;
  color: #fff;
  border: none;
  border-radius: 10px;
`;
