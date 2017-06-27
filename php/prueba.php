<?php


$name_producto="36040";
//$name_producto="360/500";
if (!$name_producto) {
	echo "Dato no enviado";
	exit;
}


// Conectando, seleccionando la base de datos
$link = new mysqli("localhost", "root", "", "zklcom_p2713")or die('No se pudo conectar: ' . mysql_error());
echo 'Connected successfully';
mysqli_select_db($link,'zklcom_p2713') or die('No se pudo seleccionar la base de datos');

echo "${name_producto}";
// Realizar una consulta MySQL
$query = "SELECT post_excerpt FROM p43_posts WHERE post_title='${name_producto}'";
$result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysql_error());


// Imprimir los resultados en HTML
echo "<table>\n";
while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";


// Liberar resultados
mysqli_free_result($result);


// Cerrar la conexión
mysqli_close($link);
?>