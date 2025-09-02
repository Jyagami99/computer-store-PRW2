export const RadioGroup = ({ label, name, options, value, onChange }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <label
        style={{
          display: 'block',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#374151'
        }}
      >
        {label}
      </label>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        {options.map(option => (
          <label
            key={option.value}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#374151',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '2px solid #d1d5db',
              backgroundColor: value === option.value ? '#eff6ff' : 'white',
              borderColor: value === option.value ? '#4338ca' : '#d1d5db',
              transition: 'all 0.3s'
            }}
          >
            <input
              type='radio'
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={e => onChange(e.target.value)}
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#4338ca'
              }}
            />
            <span
              style={{ fontWeight: value === option.value ? 'bold' : 'normal' }}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
