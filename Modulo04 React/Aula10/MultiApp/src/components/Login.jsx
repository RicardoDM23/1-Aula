import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from './AuthContext'

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
`

const LoginContainer = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.cancel ? '#6c757d' : '#007bff'};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.cancel ? '#5a6268' : '#0056b3'};
  }
`

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
`

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useAuth()

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setError('');
            // alert('Login successful!')
            login()
            //REDIRECIONAR AQUI

        } else {
          if (username !== 'admin' && password !== 'admin'){
            setError('Invalid username or password')
          } else if(username !== 'admin' && password === 'admin'){
            setError('Invalid username')
          } else if(username === 'admin' && password !== 'admin'){
            setError('Invalid password')
          }
          setUsername('')
          setPassword('')  
        }
    };

    const handleCancel = () => {
        setUsername('')
        setPassword('')
        setError('')
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    }

    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>
                <Input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Password"
                />
                {error && <ErrorMsg>{error}</ErrorMsg>}
                <Button onClick={handleLogin}>Entrar</Button>
                <Button cancel onClick={handleCancel}>Cancelar</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login
