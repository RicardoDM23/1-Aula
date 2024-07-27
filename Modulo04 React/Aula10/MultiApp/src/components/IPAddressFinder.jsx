import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

//https://ipinfo.io/${ipText}/json
//https://ipapi.co/${ipText}/json

const IPAdressFinder = () => {
  const [ipData, setIPData] = useState("");
  const [ipText, setIPText] = useState("");

  const searchIP = async () => {
    try {
      const response = await axios.get(`https://ipapi.co/${ipText}/json`);
      setIPData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>IPAdressFinder</Title>
      <Input
        type="text"
        value={ipText}
        onChange={(event) => setIPText(event.target.value)}
        placeholder="Informe o IP"
      />
      <Button type="button" onClick={searchIP}>
        Search IP
      </Button>
      {ipData && (
        <div>
          <h1>IP Information</h1>
          <p>
            <strong>IP:</strong> {ipData.ip}
          </p>
          <p>
            <strong>City:</strong> {ipData.city}
          </p>
          <p>
            <strong>Region:</strong> {ipData.region}
          </p>
          <p>
            <strong>Country:</strong> {ipData.country}
          </p>
          <p>
            <strong>Location:</strong> {/* {ipData.loc} se ipinfo.io */}{" "}
            {ipData.latitude}, {ipData.longitude}
          </p>
          <p>
            <strong>Organization:</strong> {ipData.org}
          </p>
        </div>
      )}
    </Container>
  );
};

export default IPAdressFinder;
