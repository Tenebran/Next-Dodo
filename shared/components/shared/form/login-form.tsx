import React from 'react';
import { useForm } from 'react-hook-form';
import { TFormLogin } from './schemas';

interface Props {
  onClose?: () => void;
}

const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLogin>({ defaultValues: { email: '', password: '' } });

  return (
    <div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export { LoginForm };
