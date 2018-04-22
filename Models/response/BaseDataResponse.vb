Public Class BaseDataResponse(Of T)
    Inherits BaseResponse

    Public Property data As T

    Public Overloads Sub setSuccess(ByVal data As T)
        success = True
        messageError = ""
        Me.data = data
    End Sub

    Public Overloads Sub setError(ByVal messageError As String)
        success = False
        Me.messageError = messageError
        data = Nothing
    End Sub
End Class
