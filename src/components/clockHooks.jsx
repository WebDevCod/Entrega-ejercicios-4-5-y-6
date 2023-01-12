import React, { useEffect, useState } from 'react'

export default function ClockHooks() {

    const dataUser = {
        fecha: new Date(),
        edad: 0,
        nombre: "Pablo",
        apellidos: "Aquino"
    };

    const [data, setData] = useState(dataUser);

    useEffect(() => {
        const timerID = setInterval(() => {
            setData({
                fecha: new Date(),
                edad: data.edad + 1,
            })
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    },);

    return (
        <div>
            <h2>
                Hora Actual: {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{dataUser.nombre} {dataUser.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    )
}
