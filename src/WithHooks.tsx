import React, { useState, useEffect } from 'react'

const useInput = (defaultValue: string) => {
	const [value, setValue] = useState(defaultValue)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
     setValue(e.target.value)
  }

  return {value, onChange}

}

const WithHooks: React.FC = () => {
  const name = useInput('webpack typescript react')
  const type = useInput('perfect')

  useEffect(() => {
    document.title = `${name.value} is ${type.value}`

  }, [name, type])

  return (
    <div>
      <input {...name} />
      <input {...type} />
    </div>
  )
}

export default WithHooks
