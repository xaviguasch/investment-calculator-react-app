export default function UserInput({ onChange, userInput }) {
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
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='annualInvestment'>Annual Investment</label>
          <input
            type='number'
            id='annualInvestment'
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
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
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            id='duration'
            required
            value={userInput.duration}
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  )
}
