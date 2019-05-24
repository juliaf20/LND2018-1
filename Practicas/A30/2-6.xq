<table>
  <tr>
    <th style="text-align:left">Nombre</th>
    <th style="text-align:left">Profesor</th>
    <th style="text-align:left">PLazas</th>
  </tr>
  {
    for $x in doc("cursos.xml")//curso
    where $x/precio[@periodicidad="Mensual"]
    order by $x/plazas ascending
    return
  <tr>
    <td>{$x/nombre}</td>
    <td>{$x/profesor}</td>
    <td>{$x/plazas}</td>
  </tr>
  }
</table>