
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

    <script src="@Url.Content("~/static/bundle.js")"></script>

</body>
</html>
