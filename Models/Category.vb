Imports Parse

Public Class Category
    Public Property id As String
    Public Property name As String

    Public Sub New(ByVal id As String, ByVal name As String)
        Me.id = id
        Me.name = name
    End Sub

    Public Sub New(ByVal parseObject As ParseObject)
        Me.New(parseObject.ObjectId, parseObject.Get(Of String)(TableCategory.Columns.Name))
    End Sub

    Public Shared Function getList(ByVal listParseObjects As List(Of ParseObject)) As List(Of Category)
        Return listParseObjects.Select(Function(parseObject) New Category(parseObject)).ToList()
    End Function
End Class
