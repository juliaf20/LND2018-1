<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  
    <html>
      <body>
        <!--TITULO-->
        <h2>Musiteca</h2>
        
        <!--TABLA-->
        <h3>Tabla de canciones</h3>
        <table border="1">
          <tr bgcolor="#981ceb">
            <th style="text-align:left">Nombre</th>
            <th style="text-align:left">Duracion</th>
            <th style="text-align:left">Artista</th>
            <th style="text-align:left">Genero</th>
            <th style="text-align:right">Comentarios</th>
          </tr>
          <xsl:for-each select="musiteca/track">
            <tr>
              <td>
                <xsl:value-of select="Nombre"/>
              </td>
              <td>
                <xsl:value-of select="Duracion"/>
              </td>
              <td>
                <xsl:value-of select="Artista"/>
              </td>
              <td>
                <xsl:value-of select="Genero"/>
              </td>
              <td>
                <xsl:value-of select="Comentarios"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
        
        <!--LISTA DE ALBUNES-->
        <h3>Listado de albumes</h3>
        <ol>
          <xsl:for-each select="musiteca/track">
            <xsl:sort select="Album"/>
            <li>
              Álbum: <xsl:value-of select="Album"/>, Canción: <xsl:value-of select="Nombre"/>
            </li>
          </xsl:for-each>
        </ol>
        
        <!--LISTA DE DURACION-->
        <h3>Listado de duración</h3>
        <ul style="list-style-type:none;">
          <xsl:for-each select="musiteca/track">
            <xsl:sort select="Duracion" order="ascending"/>
            <li>
              Canción: <xsl:value-of select="Nombre"/>, Duración: <xsl:value-of select="Duracion"/> , 
            </li>
          </xsl:for-each>
        </ul>
        
        <!--LISTA DE BIT RATE-->
        <h3>Listado de bit rate</h3>
        <ul>
          <xsl:for-each select="musiteca/track">
            <xsl:sort select="BitRate" order="descending"/>
            <li>
              Canción: <xsl:value-of select="Nombre"/>, Calidad: <xsl:value-of select="BitRate"/> , 
            </li>
          </xsl:for-each>
        </ul>
        
        <!--LISTA DE TIPO-->
        <h3>Listado de tipo de archivo</h3>
        <ul style="list-style-type:none;">
          <xsl:for-each select="musiteca/track">
            <xsl:sort select="TipoArchivo"/>
            <li>
              Canción: <xsl:value-of select="Nombre"/>, Tipo de archivo: <xsl:value-of select="TipoArchivo"/> , 
            </li>
          </xsl:for-each>
        </ul>
        
      </body>
    </html>
    
  </xsl:template>
</xsl:stylesheet>
