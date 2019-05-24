<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
  <body>
    <h2>Majada Marcial Vending Menu List</h2>
    <ol>
      <xsl:for-each select="breakfast_menu/food">
        <li><xsl:value-of select="name"/> --> <xsl:value-of select="description"/></li>
      </xsl:for-each>
    </ol>
  </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
