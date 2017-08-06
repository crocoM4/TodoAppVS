
@Code
    Layout = Nothing
End Code

<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="~/static/css/main.css" />
</head>
<body>

    @Html.AntiForgeryToken()

    <div id="root"> 
    </div>
    @*<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>*@
    @*<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js"></script>*@


    @*@Scripts.Render("~/bundles/main")
    @Html.ReactInitJavaScript()*@
    <script src="@Url.Content("~/static/bundle.js")"></script>
</body>
</html>
