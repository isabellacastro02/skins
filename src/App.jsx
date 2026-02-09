import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <div className="auth-container">
        <div className="auth-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <h1 className='auth-title'>Bem-vindo</h1>
            <p className='auth-subtitle'>Entre para continuar</p>
          </div>

          <div className="form-group">
            <label htmlFor="usuario">Usuário</label>
            <input 
            type="text"
            id='usuario'
            name='usuario'
            placeholder='Escolha seu nome de usuario'
            required
            />
          </div>

            <div className="form-group">
            <label htmlFor="email">Usuário ou Email</label>
            <input 
            type="text"
            id='email'
            name='email'
            placeholder='Digite seu usuario ou email'
            required
            />
          </div>

            <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input 
            type="password"
            id='senha'
            name='senha'
            placeholder='**********'
            required
            />
          </div>

            <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input 
            type="text"
            id='confirmarSenha'
            name='confirmarSenha'
            placeholder='**********'
            required
            />
          </div>

          <div className="forgot-password">
            <a href="#esqueci">Esqueceu a senha?</a>
          </div>
          <button type='submit' className='submit-btn'>
          Entrar / Criar Conta
          </button>

          <div className="auth-footer">
            <p>
              <button className='toggle-btn'>
                Cadastre-se / Login
              </button>
            </p>
          </div>
          
        </div> {/* auth-card */}
      </div> {/* auth-container */}
    </>
  )
}

