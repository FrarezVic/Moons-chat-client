import React, { useState, useEffect, useRef } from 'react';
import socket from './socket';
import '../App.css'

const Chat = ({nombre}) => {
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        socket.on('mensajes', mensaje => {
            setMensajes([...mensajes, mensaje]);
        })

        return () => {socket.off()}
    }, [mensajes]);

    useEffect(()=>{
        socket.emit('conectado', nombre)
    }, [nombre]);

    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({behavior: 'smooth'});
    })

    const enviar = (e) => {
        e.preventDefault();
        socket.emit('mensaje', nombre, mensaje);
        setMensaje("");
    };

    return (
        <div>
            <div className="chat">
                {mensajes.map((e,i) => <div key={i}>
                        <div>{e.nombre}: {e.mensaje}</div>
                    </div>)}
                <div ref={divRef}></div>
            </div>
            <form onSubmit={enviar}>
                <label htmlFor="">Mensaje: </label>
                <textarea name=""  id="" cols="30" rows="1" value={mensaje} onChange={e => setMensaje(e.target.value)}>
                </textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Chat;
