import { TextInput } from '@mantine/core';
import classes from './ContainedInput.module.css';
interface ContainedInputData {
    label: string;
    placeholder: string;
}
export function ContainedInputs({ label, placeholder }: ContainedInputData) {
    return (
        <>
            <TextInput label={label} placeholder="15329 Huston 21st" classNames={classes} />
        </>
    );
}