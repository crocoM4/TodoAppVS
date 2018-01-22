Public Class CategoriesResponse
    Inherits BaseResponse

    Public Property categories As List(Of Category)

    Overloads Sub setSuccess(ByVal categories As List(Of Category))
        MyBase.setSuccess()
        Me.categories = categories
    End Sub

    Overloads Sub setError(ByVal message As String)
        MyBase.setError(message)
        categories = Nothing
    End Sub

End Class
