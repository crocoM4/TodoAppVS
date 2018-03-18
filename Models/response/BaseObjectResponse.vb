Public Class BaseObjectResponse(Of T)
    Inherits BaseResponse

    Public Property obj As T

    Public Overloads Sub setSuccess(ByVal obj As T)
        success = True
        messageError = ""
        Me.obj = obj
    End Sub

    Public Overloads Sub setError(ByVal messageError As String)
        success = False
        Me.messageError = messageError
        obj = Nothing
    End Sub
End Class
