 $(document).ready(function() {
    $("#post005 .postdatacontainer").connections({ to: "#postone .postdatacontainer"});
    $("#postone .postdatacontainer").connections({ to: "#post005 .postdatacontainer"});
    $("#post005 .postdatacontainer").connections({ to: "#post002 .postdatacontainer"});
    $("#post002 .postdatacontainer").connections({ to: "#post005 .postdatacontainer"});
    $("#post003 .postdatacontainer").connections({ to: "#post002 .postdatacontainer"});
    $("#post002 .postdatacontainer").connections({ to: "#post003 .postdatacontainer"});
    $("#post003 .postdatacontainer").connections({ to: "#post004 .postdatacontainer"});
    $("#post004 .postdatacontainer").connections({ to: "#post003 .postdatacontainer"});
    $("connection:odd").addClass("odd");
    var connections = $("connection, inner");
    setInterval(function() {
      connections.connections("update");
    }, 100);
  });
