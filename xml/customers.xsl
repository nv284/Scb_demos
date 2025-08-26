<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/customers">
    <html>
      <body>
        <h2>Customer Info</h2>
        <table border="1">
          <tr>
            <th>Cust ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Balance</th>
          </tr>
          <xsl:for-each select="customer">
            <tr>
              <td><xsl:value-of select="custid"/></td>
              <td><xsl:value-of select="firstname"/> <xsl:value-of select="lastname"/></td>
              <td><xsl:value-of select="type"/></td>
              <td><xsl:value-of select="balance"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
