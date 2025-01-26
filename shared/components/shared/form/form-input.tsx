import { cn } from '@/shared/lib/utils';
import React from 'react';
import { RequiredSymbol } from '../required-symbol';
import { Input } from '../../ui';
import { ClearButton, ErrorText } from '..';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  required?: boolean;
  name: string;
}

const FormInput: React.FC<Props> = ({ className, label, required, name, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  return (
    <div className={cn('', className)}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={() => setValue(name, '', { shouldValidate: true })} />}
      </div>

      <ErrorText text={errorText} className="mt-2" />
    </div>
  );
};

export { FormInput };
