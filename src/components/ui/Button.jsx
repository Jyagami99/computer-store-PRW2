export const Button = ({ children, onClick, variant = 'primary' }) => {
  const styles = {
    primary: {
      backgroundColor: '#4338ca',
      color: 'white',
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px rgba(67, 56, 202, 0.3)',
      display: 'inline-block'
    }
  };

  return (
    <div
      role='button'
      onClick={onClick}
      onKeyUp={onClick}
      style={styles[variant]}
      onMouseOver={e => {
        e.target.style.backgroundColor = '#3730a3';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onFocus={e => {
        e.target.style.backgroundColor = '#3730a3';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = '#4338ca';
        e.target.style.transform = 'translateY(0)';
      }}
      onBlur={e => {
        e.target.style.backgroundColor = '#4338ca';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </div>
  );
};
