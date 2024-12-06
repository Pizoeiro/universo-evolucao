interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-game-primary mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2 rounded-xl
          bg-space-dark border border-space-accent
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-game-primary
          ${error ? 'border-game-danger' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-game-danger text-sm">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
