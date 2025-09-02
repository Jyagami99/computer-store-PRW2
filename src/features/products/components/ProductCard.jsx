const ProductCard = ({ nome, preco, logo, marca, condicao }) => {
  const CondicaoFooter = ({ condicao }) => {
    if (!condicao) return null;

    const isNovo = condicao === 'novo';

    return (
      <div
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          borderRadius: '12px',
          backgroundColor: isNovo ? '#ecfdf5' : '#fffbeb',
          border: `2px solid ${isNovo ? '#10b981' : '#f59e0b'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <span style={{ fontSize: '14px' }}>{isNovo ? '✨' : '🔄'}</span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: isNovo ? '#065f46' : '#92400e',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {isNovo ? 'Produto Novo' : 'Produto Usado'}
        </span>
      </div>
    );
  };

  return (
    <div
      style={{
        width: '280px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onFocus={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
      onBlur={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
    >
      <div
        style={{
          backgroundColor: '#f8fafc',
          padding: '20px',
          textAlign: 'center',
          minHeight: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '120px',
            height: '120px',
            backgroundColor: '#e2e8f0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            color: '#64748b'
          }}
        >
          📦
        </div>
      </div>

      <div
        style={{
          padding: '20px',
          textAlign: 'center'
        }}
      >
        <h4
          style={{
            color: '#1f2937',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '12px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '1.3'
          }}
        >
          {nome}
        </h4>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '16px',
            padding: '8px',
            backgroundColor: '#f8fafc',
            borderRadius: '8px'
          }}
        >
          <img
            src={logo}
            alt={`Logo ${marca}`}
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'contain',
              borderRadius: '4px'
            }}
            onError={e => {
              e.target.style.display = 'none';
            }}
          />
          <h5
            style={{
              fontSize: '16px',
              color: '#6b7280',
              fontWeight: '600',
              margin: 0
            }}
          >
            {marca}
          </h5>
        </div>

        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#059669',
            backgroundColor: '#d1fae5',
            padding: '12px 16px',
            borderRadius: '25px',
            display: 'inline-block',
            minWidth: '120px'
          }}
        >
          R${' '}
          {parseFloat(preco).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </div>

        <CondicaoFooter condicao={condicao} />
      </div>
    </div>
  );
};

export default ProductCard;
