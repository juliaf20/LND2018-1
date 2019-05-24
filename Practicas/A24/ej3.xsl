<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Majada Marcial Vending Products ordered alphabetically</h2>
        <ul style="list-style-type:none;">
          <xsl:for-each select="breakfast_menu/food">
            <xsl:sort select="name"/>
            <li>
              <xsl:value-of select="name"/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
