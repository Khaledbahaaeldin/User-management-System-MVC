'use client';

import Link from 'next/link';
import { Button, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the User Management System
      </Typography>
      <Button component={Link} href="/register" variant="contained" sx={{ marginRight: 2 }}>
        Register
      </Button>
      <Button component={Link} href="/login" variant="outlined">
        Login
      </Button>
    </div>
  );
}