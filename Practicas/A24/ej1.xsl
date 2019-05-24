<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
  <body>
    <h2>Majada Marcial Vending Menu</h2>
    <table border="1">
     <tr bgcolor="#9acd32">
        <th style="text-align:left">Name</th>
        <th style="text-align:left">Price</th>
        <th style="text-align:left">Calories</th>
      </tr>
      <xsl:for-each select="breakfast_menu/food">
      <tr>
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="price"/></td>
        <td><xsl:value-of select="calories"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
