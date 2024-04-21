export const obtenerJuegos = async () => {
    try {
        const response = await fetch('http://localhost/juegos.php');
        if (!response.ok) {
            throw new Error(`Error al obtener la lista de juegos: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener juegos:', error);
        return [];
    }
};