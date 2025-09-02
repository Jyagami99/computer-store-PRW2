const Banner = () => {
  return (
    <header
      style={{
        backgroundImage: 'linear-gradient(90deg, #4338ca 0%, #6366f1 100%)',
        textAlign: 'center',
        padding: '80px 20px'
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          color: 'white',
          margin: '20px 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        Computer Store
      </h1>
      <h2
        style={{
          fontSize: '24px',
          color: '#e0e7ff',
          fontWeight: 'normal'
        }}
      >
        Sua loja de informática completa
      </h2>
    </header>
  );
};

export default Banner;
