import { cn } from '@/shared/lib/utils';
import React from 'react';
import { RequiredSymbol } from '../required-symbol';
import { Input } from '../../ui';
import { ClearButton, ErrorText } from '..';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  required?: boolean;
  name?: string;
}

const FormInput: React.FC<Props> = ({ className, label, required, name, ...props }) => {
  // const {} = useFormContext()

  return (
    <div className={cn('', className)}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} />
        <ClearButton onClick={() => console.log('clear')} />
      </div>

      <ErrorText text="Поле обязательно для заполнения" className="mt-2" />
    </div>
  );
};

export { FormInput };
