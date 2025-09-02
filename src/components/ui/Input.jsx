export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  required = false
}) => {
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
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #d1d5db',
          borderRadius: '8px',
          boxSizing: 'border-box',
          transition: 'border-color 0.3s',
          outline: 'none'
        }}
        onFocus={e => (e.target.style.borderColor = '#4338ca')}
        onBlur={e => (e.target.style.borderColor = '#d1d5db')}
      />
    </div>
  );
};
