import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import React from 'react';
import { Container, Icon, Textarea, TextInput, Select, Button } from 'react-materialize';
export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const { theme } = useContext(ThemeContext)
    return (
        <Container style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color
        }}>
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit} style={{
                backgroundColor:
                    theme.backgroundColor,
                color: theme.color
            }}>
                <TextInput id="TextInput-38"
                    label='Your Name'
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color
                    }}></TextInput>
                <TextInput id="TextInput-39"
                    label='Your Phone' style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color
                    }}></TextInput>
                <TextInput email id="TextInput-41" label='Your content' validate style={{ backgroundColor: theme.backgroundColor, color: theme.color }}></TextInput>
                <Select id="Select-46" multiple={false}
                    onChange={function onRefCheck() { }} value="" >
                    <option disabled value="" >
                        Choose your a favorite nation
                    </option>
                    <option value="1">
                        VietNam
                    </option>
                    <option value="2">
                        Lao
                    </option>
                    <option value="3">
                        Campuchia
                    </option>
                </Select>
                <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28"
                    label='Your content' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}></Textarea>
                <Button>Submit</Button>
            </form>
        </Container>
    )
}