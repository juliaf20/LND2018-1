for $x in doc("cursos.xml")//curso
where $x/precio[@periodicidad="Trimestral"]
return $x/profesor