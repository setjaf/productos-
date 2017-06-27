<?php


$name_producto=$_POST["name_producto"];
//$name_producto="360/500";
$tabla = $_POST["tabla"];
if (!$name_producto) {
	echo "Dato no enviado";
	exit;
}


// Conectando, seleccionando la base de datos
$link = new mysqli("localhost", "root", "", "zklcom_p2713")or die('No se pudo conectar: ' . mysql_error());

mysqli_select_db($link,'zklcom_p2713') or die('No se pudo seleccionar la base de datos');

if (!mysqli_set_charset($link,"utf8")) {
    printf("Error cargando el conjunto de caracteres utf8: %s\n", $mysqli->error);
    exit();
}

// Realizar una consulta MySQL
$query = "UPDATE p43_posts SET post_excerpt='',post_content='${tabla}' WHERE post_title='${name_producto}' AND post_content!='${tabla}'";
//$query = "SELECT * FROM p43_posts WHERE post_title='${name_producto}'";
$result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysql_error());


// Imprimir los resultados en HTML
//echo "<table>\n";
//while ($line = mysqli_fetch_array($result, MYSQL_ASSOC)) {
//    echo "\t<tr>\n";
//    foreach ($line as $col_value) {
//        echo "\t\t<td>$col_value</td>\n";
//    }
//    echo "\t</tr>\n";
//}
//echo "</table>\n";



// Liberar resultados
//mysqli_free_result($result);

$query = "SELECT post_content FROM p43_posts WHERE post_title='${name_producto}'";

$result = mysqli_query($link,$query) or die('Consulta fallida: ' . mysql_error());

$line = mysqli_fetch_array($result, MYSQL_ASSOC);

foreach ($line as $col_value) {
        if ($col_value==$tabla) {
         	echo "Cambio correcto ${name_producto}";
         	echo $col_value;
         }else {
         	echo "No se realizó el cambio: ${name_producto}";
         }
    }

mysqli_free_result($result);

// Cerrar la conexión
mysqli_close($link);
?>