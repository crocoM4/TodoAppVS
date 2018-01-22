Public Class CategoryResponse
    Inherits BaseResponse

    Public Property category As Category

    Overloads Sub setSuccess(ByVal category As Category)
        MyBase.setSuccess()
        Me.category = category
    End Sub

    Overloads Sub setError(ByVal message As String)
        MyBase.setError(message)
        category = Nothing
    End Sub
End Class
