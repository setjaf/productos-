if (!(window.File)) {
    console.log('La API File no está soportada');
}

var $bton=$('#boton'),
$arch,
$textoA,
$texto;

$bton.click(function(event) {
	$textoA=$('#textoA')

	$arch=$('#archivo')
	
	$texto =  new FileReader();

	var cuenta=0;

	$texto.onloadend = (function (argument) {

		var result = new String(argument.target.result)

        var expresion = /\d+\,\d+(?=\")|\w+(?=\,)|\d+\-\w+(?=\,)|\d+\s\d+(?=\,)|\-(?=\,)|\w+(?=\r\,)|\d+\,\d+(?="\r\,)/gi;

        var datoP = "";

        var productos=result.split("\n")

        console.log(productos.length);

        var cuenta=0;


        productos.forEach(function(producto) {

        	producto+=",";

        	producto = new String(producto);

        	datoP = producto.match(expresion);

	        var datos = "<tr bgcolor=\"#76c2e0\">\n"+
			"<td height=\"16\">\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[1]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[2]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[3]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[4]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[5]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[6]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[7]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[8]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[9]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[10]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[11]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[12]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[13]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[14]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[15]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[16]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[17]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[18]+"</span></h6>\n"+
			"</td>\n"+
			"</tr>";



			var tabla =	"<table style=\"height: 60px;\" border=\"1\" width=\"100%\">\n"+
			"<tbody>\n"+
			"<tr bgcolor=\"#1B2735\">\n"+
			"<td style=\"text-align: center;\" colspan=\"4\" align=\"right\" height=\"80\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Dimensiones<img class=\"aligncenter wp-image-523\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-dimensiones.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"2\" align=\"right\" height=\"80\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Capacidad básica<img class=\"aligncenter wp-image-523\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-dimensiones.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"2\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Velocidad límite de giro<img class=\"aligncenter wp-image-524\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-D.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"3\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Dimensiones de piezas adyacentes<img class=\"aligncenter wp-image-521\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-velocidad.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"2\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Peso<img class=\"aligncenter wp-image-521\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-velocidad.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"1\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Manguito de fijación<img class=\"aligncenter wp-image-521\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-velocidad.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"4\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Coeficiente<img class=\"aligncenter wp-image-521\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-velocidad.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"</tr>\n"+
			"<tr bgcolor=\"#848484\">\n"+
			"<td style=\"text-align: center;\" width=\"80\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>d</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"117\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>D</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>B</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>rs min</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"69\" height=\"16\">\n"+
			"<h6><strong><span style=\"color: #333333;\">C</span></strong></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"100\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Co</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"55\">\n"+
			"<h6><span style=\"color: #333333;\"><strong></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"80\">\n"+
			"<h6><span style=\"color: #333333;\"><strong></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"80\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>da max</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"117\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Da max</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>ra max</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>kg</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>K</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\"></td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>e</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Y1</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Y2</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Y0</strong></span></h6>\n"+
			"</td>\n"+
			"</tr>\n"+
			"<tr bgcolor=\"#76c2e0\">\n"+
			"<td style=\"text-align: center;\" height=\"16\">\n"+
			"<h6><span style=\"color: #ffffff;\">mm</span></h6>\n"+
			"</td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td style=\"text-align: center;\" height=\"16\">\n"+
			"<h6><span style=\"color: #ffffff;\">kn</span></h6>\n"+
			"</td>\n"+
			"<td></td>\n"+
			"<td colspan=\"2\">\n"+
			"<h6 style=\"text-align: center;\"><span style=\"text-align: center; size: 14px; color: #ffffff;\">Para lubricación min</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">mm</span></h6>\n"+
			"</td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"</tr>\n"+datos+
			"</tbody>\n"+
			"</table>";

			$.ajax({
				url: './php/stro.php',
				type: 'POST',
				dataType: 'json',
				data: {
					name_producto: datoP[0],
					tabla:tabla
				},
			})
			.catch(function(event) {

				if(event.responseText[0]=="C"){
					cuenta++;
					console.log(cuenta)
					$("#tabla").append("<p>"+event.responseText+"</p>")
					$("#tabla").append("<p>"+tabla+"</p>")
					cuenta++;
					console.log(cuenta)
				}else {
					alert(event.responseText)
					console.log(datoP[0])
				}	

			})
			

        });

        
        

		/*var curL = result.find("\n")
		console.log(curL)*/
	})

    $texto.readAsText($arch[0].files[0]);

	

});

