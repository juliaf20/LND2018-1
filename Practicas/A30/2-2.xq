for $x in doc("cursos.xml")//curso
let $y := //precio
where $x/sala=[2] and $y<10
return $x