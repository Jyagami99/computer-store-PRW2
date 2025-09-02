import { useProducts } from '../../../context/ProductContext';
import { useProductForm } from '../hooks/useProductForm';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Select } from '../../../components/ui/Select';
import { BRANDS, getSectionNames } from '../../../utils/constants';
import { RadioGroup } from '../../../components/ui/RadioGroup';

const ProductForm = () => {
  const { addProduct } = useProducts();
  const { formData, updateField, handleSubmit } = useProductForm(addProduct);

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: '#f8fafc',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            marginBottom: '32px',
            textAlign: 'center',
            color: '#1f2937'
          }}
        >
          Cadastrar Novo Produto
        </h2>

        <Input
          label='Nome do Produto'
          placeholder='Digite o nome do produto'
          value={formData.nome}
          onChange={value => updateField('nome', value)}
          required
        />

        <Input
          label='Preço (R$)'
          placeholder='Ex: 1299.99'
          value={formData.preco}
          onChange={value => updateField('preco', value)}
          required
        />

        <Select
          label='Marca'
          options={BRANDS}
          value={formData.marca}
          onChange={value => updateField('marca', value)}
        />

        <Select
          label='Seção'
          options={getSectionNames()}
          value={formData.secao}
          onChange={value => updateField('secao', value)}
        />

        <RadioGroup
          label='Estado do Produto'
          name='condicao'
          options={[
            { value: 'novo', label: 'Novo' },
            { value: 'usado', label: 'Usado' }
          ]}
          value={formData.condicao}
          onChange={value => updateField('condicao', value)}
        />

        <div style={{ textAlign: 'center' }}>
          <Button onClick={handleSubmit}>Cadastrar Produto</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
