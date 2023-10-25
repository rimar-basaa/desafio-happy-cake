import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Contacto = () => {

    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const validar = (e) => {
        e.preventDefault();

        switch (true) {
            case correo === "":
            case mensaje === "":
                alert("Todos los campos son Obligatorios");
            break;
            case !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(correo):
                alert("Formato correo No valido. Debe ser 'tucorreo@dominio.com'");
                break;
            default:
                alert("Mensaje enviado");
                setCorreo("");
                setMensaje("");
            break;
        };
    };

    return (
        <Form className="form" onSubmit={validar}>
            <Form.Label className="formTitle mb-4">
                Cuentanos, ¿en que te podemos ayudar?
            </Form.Label>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="tucorreo@dominio.com" 
                    onChange={(e) => setCorreo(e.target.value)} 
                    value={correo} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Escribenos aqui..."
                    onChange={(e) => setMensaje(e.target.value)} 
                    value={mensaje} 
                />
            </Form.Group>
            <Button variant="danger" type="submit">Enviar</Button>
        </Form>
    );
};

export default Contacto;