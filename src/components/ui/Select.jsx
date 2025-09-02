export const Select = ({ label, options, value, onChange }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <label
        style={{
          display: 'block',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#374151'
        }}
      >
        {label}
      </label>
      <select
        onChange={e => onChange(e.target.value)}
        value={value}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #d1d5db',
          borderRadius: '8px',
          backgroundColor: 'white',
          cursor: 'pointer',
          outline: 'none'
        }}
        onFocus={e => (e.target.style.borderColor = '#4338ca')}
        onBlur={e => (e.target.style.borderColor = '#d1d5db')}
      >
        <option value=''>Selecione uma opção...</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
