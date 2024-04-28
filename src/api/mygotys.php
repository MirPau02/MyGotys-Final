<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gotys";

// Crear una conexión a la base de datos utilizando MySQLi
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    $error_message = "Error de conexión: " . $conn->connect_error;
    error_log($error_message);
    die($error_message);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Ejecutar la consulta SQL para obtener los juegos
    $sql = "SELECT id, title, description, date, creator, platform, genre, trailer, image FROM juegos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $juegos = array();
        while ($row = $result->fetch_assoc()) {
            // Convertir la imagen BLOB a una representación base64 para enviarla como JSON
            $imageData = base64_encode($row['image']);
            $row['image'] = $imageData; // Reemplazar el dato BLOB con la representación base64
            $juegos[] = $row;
        }
        echo json_encode($juegos);
    } else {
        echo json_encode(array()); // Enviar un array vacío si no se encontraron juegos
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];
    $name = $_POST['name'];

    // Validar y escapar los datos (para prevenir inyecciones SQL)
    $email = $conn->real_escape_string($email);
    $name = $conn->real_escape_string($name);

    // Hashear la contraseña
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Crear la consulta SQL para insertar un nuevo usuario
    $sql = "INSERT INTO users (email, password, name) VALUES ('$email', '$hashedPassword', '$name')";

    // Ejecutar la consulta SQL
    if ($conn->query($sql) === TRUE) {
        // Éxito al insertar el usuario
        echo json_encode(array("message" => "Usuario registrado correctamente"));
    } else {
        // Error al insertar el usuario
        echo json_encode(array("error" => "Error al registrar el usuario: " . $conn->error));
    }
}
?>
