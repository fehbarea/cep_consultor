import { useForm } from 'react-hook-form';
import style from "./FormEndereco.module.css";
import Submit from "../Submit";
import Input from '../Input';
import Select from "../Select";

function FormEndereco() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const estadosBrasileiros = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' }
];

    function onSubmit() {

    }

    return (
        <section className={style.page}>
        <form id='FormCadastroOficina' className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <Select
                label='Estado'
                name='estado'
                register={register}
                errors={errors}
                options={estadosBrasileiros}
                validationRules={{ required: 'Campo Obrigatório' }}

            />
             <Input
                label='Cidade'
                name='CIdade'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Cidade deve ter pelo menos 3 caracteres' } }}
                register={register}

            />
            <Input
                label='Bairro'
                name='Bairro'
                errors={errors}
                validationRules={{ required: 'Campo Obrigatório', minLength: { value: 3, message: 'Bairro deve ter pelo menos 3 caracteres' } }}
                register={register}

            />
            <Submit
                label='Buscar Cep'
                type="button"
            />
        </form>
        </section>

    );
}

export default FormEndereco;