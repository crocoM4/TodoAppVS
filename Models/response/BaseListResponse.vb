Public Class BaseListResponse(Of T)
    Inherits BaseResponse

    Public Property list As List(Of T)

    Overloads Sub setSuccess(ByVal list As List(Of T))
        MyBase.setSuccess()
        Me.list = list
    End Sub

    Overloads Sub setError(ByVal message As String)
        MyBase.setError(message)
        list = Nothing
    End Sub
End Class
