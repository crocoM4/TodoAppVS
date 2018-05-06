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
        Async Function FetchAllCategories(
                                        <Http.FromBody()> ByVal limit As Integer,
                                        <Http.FromBody()> ByVal skip As Integer
                                        ) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseDataResponse(Of List(Of Category))
            Dim query = New ParseQuery(Of ParseObject)(TableCategory.Name)
            If limit > 0 Then
                query = query.Limit(limit)
            End If
            If skip >= 0 Then
                query = query.Skip(skip)
            End If
            Try
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
        Async Function FetchArgumentsByCategory(
                                               <Http.FromBody()> ByVal categoriesId As List(Of String),
                                               <Http.FromBody()> ByVal completed As Boolean,
                                               <Http.FromBody()> ByVal limit As Integer,
                                               <Http.FromBody()> ByVal skip As Integer
                                               ) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseDataResponse(Of List(Of Argument))
            Dim query = New ParseQuery(Of ParseObject)(TableArgument.Name)
            If categoriesId IsNot Nothing Then
                Dim parseCategories = categoriesId.Where(Function(categoryId) categoryId IsNot Nothing And Not categoryId.Equals("0")).Select(
                Function(categoryId)
                    Return ParseObject.CreateWithoutData(TableCategory.Name, categoryId)
                End Function
                ).ToList()
                If parseCategories IsNot Nothing AndAlso parseCategories.Count > 0 Then
                    query = query.WhereContainedIn(Of ParseObject)(TableArgument.Columns.Category, parseCategories)
                End If
                query = query.WhereEqualTo(TableArgument.Columns.Completed, completed)
                If limit > 0 Then
                    query = query.Limit(limit)
                End If
                If skip >= 0 Then
                    query = query.Skip(skip)
                End If
                Try
                    Dim queryResult = New List(Of ParseObject)(Await query.FindAsync())
                    response.setSuccess(Argument.getList(queryResult))
                Catch ex As Exception
                    response.setError(Resources.Labels.msgErrorRead)
                End Try
            Else
                response.setError(Resources.Labels.msgSelectCategory)
            End If
            Return Json(response, JsonRequestBehavior.AllowGet)
        End Function

        <HttpPost()>
        <ValidateJsonAntiForgeryToken>
        <OutputCache(Location:=OutputCacheLocation.None)>
        Async Function DeleteCategory(<Http.FromBody> ByVal categoryId As String) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseResponse()
            Try
                If categoryId Is Nothing OrElse categoryId.Equals("0") Then
                    response.setError(Resources.Labels.msgCategoryIdRequired)
                    Return Json(response, JsonRequestBehavior.AllowGet)
                End If
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
                If todoArgumentId Is Nothing Then
                    response.setError(Resources.Labels.msgTodoArgumentIdRequired)
                    Return Json(response, JsonRequestBehavior.AllowGet)
                End If
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
            Dim response = New BaseDataResponse(Of Category)
            Dim parseCategory As ParseObject = New ParseObject(TableCategory.Name)
            parseCategory(TableCategory.Columns.Name) = name
            Try
                If name Is Nothing OrElse name.Equals("") Then
                    response.setError(Resources.Labels.msgCategoryNameRequired)
                    Return Json(response, JsonRequestBehavior.AllowGet)
                End If
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
        Async Function AddArgument(<Http.FromBody> ByVal title As String, <Http.FromBody> ByVal description As String, <Http.FromBody> ByVal categoryId As String, <Http.FromBody> ByVal todoWithin As Date) As Threading.Tasks.Task(Of ActionResult)
            Dim response = New BaseDataResponse(Of Argument)
            If title Is Nothing OrElse title.Equals("") Then
                response.setError(Resources.Labels.msgTodoArgumentTitleRequired)
                Return Json(response, JsonRequestBehavior.AllowGet)
            End If
            If description Is Nothing Then
                description = ""
            End If
            If categoryId Is Nothing OrElse categoryId.Equals("0") Then
                response.setError(Resources.Labels.msgCategoryIdRequired)
                Return Json(response, JsonRequestBehavior.AllowGet)
            End If
            If todoWithin.Equals(New Date?) Then
                response.setError(Resources.Labels.msgTodoWithinDateRequired)
                Return Json(response, JsonRequestBehavior.AllowGet)
            End If
            Dim parseArgument As ParseObject = New ParseObject(TableArgument.Name)
            parseArgument(TableArgument.Columns.Title) = title
            parseArgument(TableArgument.Columns.Description) = description
            parseArgument(TableArgument.Columns.Completed) = False
            parseArgument(TableArgument.Columns.TodoWithin) = todoWithin
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
            Dim response = New BaseDataResponse(Of Argument)
            If todoArgumentId Is Nothing OrElse todoArgumentId.Equals("0") Then
                response.setError(Resources.Labels.msgTodoArgumentIdRequired)
                Return Json(response, JsonRequestBehavior.AllowGet)
            End If
            If completed.Equals(New Boolean?) Then
                completed = False
            End If
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