import React, { useEffect, useState } from 'react'
import api from '../../servicos/api'
import { useHistory, useParams } from 'react-router-dom'
import { PrincipalContainer } from './estilo'

interface AllUsers {
  id: string;
  nome: string;
  telefone: string;
  email: string;
}

interface Params {
  id: string;
}

const Atualizar: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<Params>()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    buscarcliente(id)
    console.log(id)
  }, [])

  async function buscarcliente(id: string) {
    const buscarcliente = await api.get(`/clients/${id}`)
    setNome(buscarcliente.data.nome)
    setTelefone(buscarcliente.data.telefone)
    setEmail(buscarcliente.data.email)
  }


  async function clientupdate(event: any) {
    event.preventDefault()
    console.log(`Nome: ${nome}  Email: ${email}  Telefone: ${telefone}`)

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      return
    }
    await api.put(`/clients/${id}`, {
      nome,
      telefone,
      email
    })

    history.push('/')
  }

  return (
    <PrincipalContainer>
      <form onSubmit={clientupdate}>
        <input
          type='text'
          name='nome'
          defaultValue={nome}
          onChange={event => setNome(event.target.value)}
          placeholder='Nome cliente: ' />
        <input
          type='text'
          name='telefone'
          value={telefone}
          onChange={event => setTelefone(event.target.value)}
          placeholder='Telefone cliente: ' />
        <input
          type='text'
          name='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder='Email cliente: ' />
        <button type='submit'>Atualizar</button>
        <button type='button' onClick={() => {
          history.push('/')
        }}>Voltar</button>
      </form>
    </PrincipalContainer>
  )
}

export default Atualizar
