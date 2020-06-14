<%@ page pageEncoding="utf-8" session="false"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<html>
    <head>
        <tiles:insertAttribute name="header" />
    </head>
    <body>
        <div class="container">
            <tiles:insertAttribute name="content" />
            <tiles:insertAttribute name="footer" />
            
        </div>
    </body>
</html>