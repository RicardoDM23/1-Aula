import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// https://api.mymemory.translated.net/get
/*
const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`
                }
            })
*/

//https://libretranslate.com/

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
const Div = styled.div`
  margin: 0.5rem;
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

const Label = styled.label`
  color: #555;
  margin-right: 0.4rem;
`;

const TranslatedText = styled.p`
  color: #333;
  border-radius: 18px;
  text-align: center;
`;

const LaguageTranslator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("pt");

  const translateText = async () => {
    try {
      // const response = await axios.get('https://api.mymemory.translated.net/get', {
      //     params: {
      //         q: text,
      //         langpair: `${sourceLang}|${targetLang}`
      //     }
      // })
      // setTranslatedText(response.data.responseData.translatedText)
      const response = await axios.get('https://libretranslate.de/translate', {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text',
      });

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Erro ao traduzir o texto: ", error);
    }
  };

  return (
    <Container>
      <Title>Laguage Translator</Title>
      <Div>
        <Label>Source Language</Label>
        <select
          value={sourceLang}
          onChange={(event) => setSourceLang(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </select>
      </Div>

      <Div>
        <Label>Target Language</Label>
        <select
          value={targetLang}
          onChange={(event) => setTargetLang(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </select>
      </Div>

      <Div>
        <Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Informe o texto que você quer traduzir"
        />
      </Div>

      <Div>
        <button onClick={translateText}>Translate</button>
      </Div>

      <Div>
        {/* se não for nulo */}
        {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
      </Div>
    </Container>
  );
};

export default LaguageTranslator;
