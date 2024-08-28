const express = require('express');
const app = express();
app.use(express.json());

// Estructura de datos en memoria para almacenar tareas
let tareas = [];
let idCounter = 1;

// Ruta para crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { titulo, completada } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }
    const nuevaTarea = { id: idCounter++, titulo, completada: completada || false, fechaCreacion: new Date() };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

// Ruta para leer todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Ruta para leer una tarea específica por ID
app.get('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(tarea);
});

// Ruta para actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
    const { titulo, completada } = req.body;
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    if (titulo) tarea.titulo = titulo;
    if (completada !== undefined) tarea.completada = completada;
    res.json(tarea);
});

// Ruta para eliminar una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
    const index = tareas.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    const tareaEliminada = tareas.splice(index, 1);
    res.json(tareaEliminada);
});

// Ruta para calcular estadísticas sobre las tareas
app.get('/tareas/estadisticas', (req, res) => {
    const totalTareas = tareas.length;
    const tareaMasReciente = tareas.reduce((a, b) => (a.fechaCreacion > b.fechaCreacion ? a : b), {});
    const tareaMasAntigua = tareas.reduce((a, b) => (a.fechaCreacion < b.fechaCreacion ? a : b), {});
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = totalTareas - completadas;

    res.json({
        totalTareas,
        tareaMasReciente,
        tareaMasAntigua,
        completadas,
        pendientes
    });
});

// Manejo de errores para rutas no definidas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
