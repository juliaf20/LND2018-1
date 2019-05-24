<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <table border="1">
      <tr>
        <th/>
        <th>Nombre</th>
        <th>Puntuación</th>
      </tr>
      <xsl:for-each select="ajedrez/jugador">
        <xsl:sort order="descending" select="puntos"/>
        <tr>
          <td/>
          <td>
            <xsl:value-of select="nombre"/>
          </td>
          <xsl:if test="1500 &gt; puntos">
            <td bgcolor="#ff0000">
              <xsl:value-of select="puntos"/>
            </td>
          </xsl:if>
          <xsl:if test="puntos&gt;1500 and1700&gt;puntos">
            <td bgcolor="#0000ff">
              <xsl:value-of select="puntos"/>
            </td>
          </xsl:if>
          <xsl:if test="puntos&gt;1700">
            <td bgcolor="#00ff00">
              <xsl:value-of select="puntos"/>
            </td>
          </xsl:if>
        </tr>
      </xsl:for-each>
      <tr>
        <td>Media</td>
        <td/>
        <td>
          <xsl:value-of select="sum(ajedrez/jugador/puntos) div count(ajedrez/jugador/puntos)"/>
        </td>
      </tr>
    </table>
  </xsl:template>
</xsl:stylesheet>
