for $x in doc("recetas.xml")//ingrediente/text()
where starts-with($x,"P")
order by $x descending
return $x