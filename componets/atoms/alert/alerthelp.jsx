import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function AlertHelp() {
    return (
        <Stack sx={{ width: "100%" }} spacing={2}>            
            <Alert severity="info">
                <AlertTitle>Lo sentimos</AlertTitle>
                No hay hoteles disponibles para la selección de filtros aplicada — <strong>¡Selecciona otras opciones!</strong>
            </Alert>           
        </Stack>
    );
}
