import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-space-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="game-title mb-2">Universo em Evolução</h1>
          <p className="text-game-primary">Explore a história do cosmos</p>
        </div>
        <div className="game-card">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
