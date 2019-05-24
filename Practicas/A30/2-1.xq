for $x in doc("cursos.xml")//sala
where $x=[1]
return $x/../nombre