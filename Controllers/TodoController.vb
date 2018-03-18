Imports System.Web.Mvc
Imports Parse

Namespace Controllers
    Public Class TodoController
        Inherits Controller

        Public Sub New()

        End Sub

        ' GET: Todo
        Function Index() As ActionResult
            Return View()
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function FetchAllCategories() As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseListResponse(Of Category)
            Dim query = New ParseQuery(Of ParseObject)(TableCategory.Name)
            Try
                'Todo Cancella
                'Dim user = New ParseUser() With {.Email = "portapozze@libero.it", .Username = "portapozze@libero.it", .Password = "a"}
                'Await user.SignUpAsync()
                'Await ParseUser.RequestPasswordResetAsync("portapozze@libero.it")

                Dim queryResult = New List(Of ParseObject)(Await query.FindAsync())
                response.setSuccess(Category.getList(queryResult))
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorRead)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function FetchArgumentsByCategory(<Http.FromBody()> ByVal categoryId As String) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseListResponse(Of Argument)
            Dim query = New ParseQuery(Of ParseObject)(TableArgument.Name)
            If categoryId IsNot Nothing And Not categoryId.Equals("0") Then
                Dim parseCategory = ParseObject.CreateWithoutData(TableCategory.Name, categoryId)
                query = query.WhereEqualTo(TableArgument.Columns.Category, parseCategory)
            End If
            'query = query.Include(TableArgument.Columns.Category)

            Try
                Dim queryResult = New List(Of ParseObject)(Await query.FindAsync())
                response.setSuccess(Argument.getList(queryResult))
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorRead)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function DeleteCategory(<Http.FromBody> ByVal categoryId As String) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseResponse()
            Try
                Dim parseCategory As ParseObject = ParseObject.CreateWithoutData(TableCategory.Name, categoryId)
                Await parseCategory.DeleteAsync()
                response.setSuccess()
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorDelete)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function DeleteArgument(<Http.FromBody> ByVal todoArgumentId As String) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseResponse()
            Try
                Dim parseArgument As ParseObject = ParseObject.CreateWithoutData(TableArgument.Name, todoArgumentId)
                Await parseArgument.DeleteAsync()
                response.setSuccess()
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorDelete)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function AddCategory(<Http.FromBody> ByVal name As String) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseObjectResponse(Of Category)
            Dim parseCategory As ParseObject = New ParseObject(TableCategory.Name)
            parseCategory(TableCategory.Columns.Name) = name
            Try
                Await parseCategory.SaveAsync()
                response.setSuccess(New Category(parseCategory))
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorSave)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function AddArgument(<Http.FromBody> ByVal title As String, <Http.FromBody> ByVal description As String, <Http.FromBody> ByVal categoryId As String) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseObjectResponse(Of Argument)
            Dim parseArgument As ParseObject = New ParseObject(TableArgument.Name)
            parseArgument(TableArgument.Columns.Title) = title
            parseArgument(TableArgument.Columns.Description) = description
            parseArgument(TableArgument.Columns.Completed) = False
            Dim category = Await ParseObject.CreateWithoutData(TableCategory.Name, categoryId).FetchIfNeededAsync()
            parseArgument(TableArgument.Columns.Category) = category
            Try
                Await parseArgument.SaveAsync()
                response.setSuccess(New Argument(parseArgument))
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorSave)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function ToogleArgumentCompleted(<Http.FromBody> ByVal todoArgumentId As String, <Http.FromBody> ByVal completed As Boolean) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseObjectResponse(Of Argument)
            Dim parseArgument As ParseObject = Await ParseObject.CreateWithoutData(TableArgument.Name, todoArgumentId).FetchIfNeededAsync()
            parseArgument(TableArgument.Columns.Completed) = Not completed
            If Not completed Then
                parseArgument(TableArgument.Columns.CompletedAt) = Now
            Else
                parseArgument.Remove(TableArgument.Columns.CompletedAt)
            End If
            Try
                Await parseArgument.SaveAsync()
                response.setSuccess(New Argument(parseArgument))
            Catch ex As Exception
                response.setError(Resources.Labels.msgErrorSave)
            End Try
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

    End Class
End Namespace