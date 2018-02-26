Imports Parse
Public Class Argument

    Public Property id As String
    Public Property title As String
    Public Property description As String
    Public Property completed As Boolean
    Public Property category As Category
    Public Property todoWithin As Date?
    Public Property completedAt As Date?

    Public Sub New(
                  ByVal id As String,
                  ByVal title As String,
                  ByVal description As String,
                  ByVal completed As Boolean,
                  ByVal category As Category,
                  Optional ByVal todoWithin As Date? = Nothing,
                  Optional ByVal completedAt As Date? = Nothing
                  )
        Me.id = id
        Me.title = title
        Me.description = description
        Me.completed = completed
        Me.category = category
        Me.todoWithin = todoWithin
        Me.completedAt = completedAt
    End Sub

    Public Sub New(ByVal parseObject As ParseObject)
        Me.New(
            parseObject.ObjectId,
            parseObject.Get(Of String)(TableArgument.Columns.Title),
            parseObject.Get(Of String)(TableArgument.Columns.Description),
            parseObject.Get(Of Boolean)(TableArgument.Columns.Completed),
            New Category(parseObject.Get(Of ParseObject)(TableArgument.Columns.Category)),
            If(parseObject.Keys.Contains(TableArgument.Columns.TodoWithin), parseObject.Get(Of Date)(TableArgument.Columns.TodoWithin), Nothing),
            If(parseObject.Keys.Contains(TableArgument.Columns.CompletedAt), parseObject.Get(Of Date)(TableArgument.Columns.CompletedAt), Nothing)
            )
    End Sub

    Public Shared Function getList(ByVal listParseObjects As List(Of ParseObject)) As List(Of Argument)
        Return listParseObjects.Select(Function(parseObject) New Argument(parseObject)).ToList()
    End Function

End Class
