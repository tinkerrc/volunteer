// import { useState } from 'react';
// import { Button, Group, TextInput } from '@mantine/core';
// import { IconAlertTriangle } from '@tabler/icons-react';
// import { useClient } from '@/utils/client';
// import classes from './InputValidation.module.css'; // ← your validation CSS

// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [email, setEmail] = useState('');

// const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string }>({});

// const validate = () => {
//   const newErrors: typeof errors = {};
//   if (!firstName.trim()) newErrors.firstName = 'First name is required';
//   if (!lastName.trim()) newErrors.lastName = 'Last name is required';
//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email';
//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };
// const handleSubmit = async () => {
//   if (!validate()) return;

//   try {
//     await client.createVolunteer({ firstName, lastName, email });
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setErrors({});
//     if (onSuccess) onSuccess();
//   } catch (err) {
//     console.error('Error creating volunteer:', err);
//   }
// };
