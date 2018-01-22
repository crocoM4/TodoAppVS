Public Class BaseResponse
    Public Property success As Boolean
    Public Property messageError As String

    Public Sub setSuccess()
        success = True
        messageError = ""
    End Sub

    Public Sub setError(ByVal messageError As String)
        success = False
        Me.messageError = messageError
    End Sub
End Class
