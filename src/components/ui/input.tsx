'use client'
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  multiline?: boolean;
  error?: string;  // Add error prop here
};

const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  multiline = false,
  defaultValue = '',
  error,  // Accept error prop
}: InputProps) => {
  const {
    control,
  } = useFormContext();

  return (
    <div className="mb-4 tracking-wider">
      <label htmlFor={name} className="block text-md font-semibold font-medium text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) =>
          multiline ? (
            <textarea
              {...field}
              placeholder={placeholder}
              id={name}
              rows={4}
              className={`mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              id={name}
              className={`mt-1 block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${error ? 'border-red-500 focus-none' : 'border-gray-300'}`}
            />
          )
        }
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>  // Display error if present
      )}
    </div>
  );
};

export default Input;
