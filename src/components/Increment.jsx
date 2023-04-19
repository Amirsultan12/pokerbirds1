import React, { useState } from 'react';
import { Container, Button, Stack, } from '@mui/material';

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <Container>
            <div >
                <h2>Counter: {count}</h2>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    <Button variant='contained' size='small' onClick={increment} >+</Button>
                    <Button variant='contained' size='small' onClick={decrement} >-</Button>
                </Stack>
            </div>
        </Container>
    );
}

export default Counter;