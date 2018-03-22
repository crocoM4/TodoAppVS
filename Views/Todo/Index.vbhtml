
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
</head>
<body>

    @Html.AntiForgeryToken()

    <div id="root">
    </div>

    <script src="@Url.Content("~/dist/vendor.js")"></script>
    <script src="@Url.Content("~/dist/main.js")"></script>

</body>
</html>
