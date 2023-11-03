import { useState } from 'react'

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      }
    })
  }

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initialInvestment'>Initial Investment</label>
          <input
            type='number'
            id='initialInvestment'
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='annualInvestment'>Annual Investment</label>
          <input
            type='number'
            id='annualInvestment'
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>

      <div className='input-group'>
        <p>
          <label htmlFor='expectReturn'>Expected Return</label>
          <input
            type='number'
            id='expectReturn'
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            id='duration'
            required
            value={userInput.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  )
}
