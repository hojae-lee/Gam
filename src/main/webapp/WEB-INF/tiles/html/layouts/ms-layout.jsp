<%@ page pageEncoding="utf-8" session="false"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<html>
    <head>
        <tiles:insertAttribute name="ms-header" />
    </head>
    <body>
        <div class="container">
            <tiles:insertAttribute name="ms-content" />
            <tiles:insertAttribute name="ms-footer" />
            
        </div>
    </body>
</html>