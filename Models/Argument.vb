Imports Parse
Public Class Argument

    Public Property id As String
    Public Property title As String
    Public Property completed As Boolean
    Public Property category As Category

    Public Sub New(ByVal id As String, ByVal title As String, ByVal completed As Boolean, ByVal category As Category)
        Me.id = id
        Me.title = title
        Me.completed = completed
        Me.category = category
    End Sub

    Public Sub New(ByVal parseObject As ParseObject)
        Me.New(parseObject.ObjectId, parseObject.Get(Of String)(TableArgument.Columns.Title), parseObject.Get(Of Boolean)(TableArgument.Columns.Completed), New Category(parseObject.Get(Of ParseObject)(TableArgument.Columns.Category)))
    End Sub

    Public Shared Function getList(ByVal listParseObjects As List(Of ParseObject)) As List(Of Argument)
        Return listParseObjects.Select(Function(parseObject) New Argument(parseObject)).ToList()
    End Function

End Class
