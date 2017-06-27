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

        var expresion = /\d+(?=\,)|\d+\/\d+(?=\,)/gi;

        var datoP = "";

        var productos=result.split("\n")

        console.log(productos.length)

        productos.forEach(function(producto) {

        	datoP = producto.match(expresion);

	        var datos = "<tr bgcolor=\"#76c2e0\">\n"+
			"<td height=\"16\">\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[4]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[5]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">"+datoP[6]+"</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
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
			"</tr>";



			var tabla = 
			"<table style=\"height: 60px;\" border=\"1\" width=\"100%\">\n"+
			"<tbody>\n"+
			"<tr bgcolor=\"#1B2735\">\n"+
			"<td style=\"text-align: center;\" colspan=\"2\" align=\"right\" height=\"80\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Capacidad de carga Elemental<img class=\"aligncenter wp-image-523\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-dimensiones.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"2\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Velocidad límite de giro para lubricación<img class=\"aligncenter wp-image-524\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-D.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" colspan=\"3\">\n"+
			"<h6><span style=\"color: #ffffff;\"><strong>Dimensiones<img class=\"aligncenter wp-image-521\" src=\"http://zkl.com.mx/wp-2017/wp-content/uploads/2017/05/zkl-velocidad.png\" alt=\"\" width=\"25\" height=\"25\"></strong></span></h6>\n"+
			"</td>\n"+
			"</tr>\n"+
			"<tr bgcolor=\"#848484\">\n"+
			"<td style=\"text-align: center;\" width=\"69\" height=\"16\">\n"+
			"<h6><strong><span style=\"color: #333333;\">Dinámica (Cr)</span></strong></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"100\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Estática (Cor)</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"55\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Grasa</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"80\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>Aceite</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"80\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>d</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"117\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>D</strong></span></h6>\n"+
			"</td>\n"+
			"<td style=\"text-align: center;\" width=\"76\">\n"+
			"<h6><span style=\"color: #333333;\"><strong>B</strong></span></h6>\n"+
			"</td>\n"+
			"</tr>\n"+
			"<tr bgcolor=\"#76c2e0\">\n"+
			"<td style=\"text-align: center;\" height=\"16\">\n"+
			"<h6><span style=\"color: #ffffff;\">kn</span></h6>\n"+
			"</td>\n"+
			"<td></td>\n"+
			"<td colspan=\"2\">\n"+
			"<h6 style=\"text-align: center;\"><span style=\"text-align: center; size: 14px; color: #ffffff;\">Para lubricación min</span></h6>\n"+
			"</td>\n"+
			"<td>\n"+
			"<h6 style=\"text-align: center;\"><span style=\"color: #ffffff;\">min</span></h6>\n"+
			"</td>\n"+
			"<td></td>\n"+
			"<td></td>\n"+
			"</tr>\n"+
			datos+
			"</tbody>\n"+
			"</table>\n";


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
					$("#tabla").append("<p>"+event.responseText+"</p>")
					$("#tabla").append("<p>"+tabla+"</p>")
					cuenta++;
					console.log(cuenta)
				}else {
					console.log(event.responseText)

				}

			})
			

        });

        
        

		/*var curL = result.find("\n")
		console.log(curL)*/

	})


    $texto.readAsText($arch[0].files[0]);

	

});

