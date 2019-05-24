for $x in doc("cursos.xml")//curso
return concat('Nombre: ',$x/nombre,', ','Profesor: ',$x/profesor,', ','Plazas: ',$x/plazas)