import { FieldAttributes, useField } from 'formik';
import React from 'react';
import { TextField } from '@mui/material';
import { theme } from '../../utils/theme';

export const FormTextField: React.FC<FieldAttributes<{}>> = ({
    placeholder,
    className,
    type,
    ...props
}) => {
    const [field, meta] = useField<{}>(props);
    const errorText: string = meta.error && meta.touched ? meta.error : '';

    return (
        <TextField
            className={className}
            type={type}
            variant="outlined"
            required={true}
            placeholder={placeholder}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
};

export const FormDatePicker: React.FC<FieldAttributes<{}>> = ({
    placeholder,
    className,
    ...props
}) => {
    const [field, meta] = useField<{}>(props);
    const errorText: string = meta.error && meta.touched ? meta.error : '';

    return (
        <TextField
            className={className}
            type="date"
            variant="outlined"
            required={true}
            placeholder={placeholder}
            {...field}
            helperText={errorText}
            error={!!errorText}
            label="Date of birth"
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
};
