import React, { useState } from 'react';
import axios from 'axios';

function CadastroUsuario() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = () => {
        axios.post('http://localhost:3001/cadastrar-usuario', {
            username: username,
            password: password
        })
        .then(response => {
            console.log(response.data);
            alert('Usuário cadastrado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        });
    };

    return (
        <div>
            <h2>Cadastro de Usuário</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleCadastro}>Finalizar cadastro</button>
        </div>
    );
}

export default CadastroUsuario;
