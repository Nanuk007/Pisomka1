// src/App.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        My Application
                    </Typography>
                    <Button color="inherit" href="/login">
                        Login
                    </Button>
                    <Button color="inherit" href="/register">
                        Sign In
                    </Button>
                </Toolbar>
            </AppBar>
            <div style={{ padding: '20px' }}>
                <h1>Welcome to My Application</h1>
                <p>This is a simple menu example using Material-UI.</p>
            </div>
        </div>
    );
};

export default App;