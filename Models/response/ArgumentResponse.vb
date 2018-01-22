Public Class ArgumentResponse
    Inherits BaseResponse

    Public Property argument As Argument

    Overloads Sub setSuccess(ByVal argument As Argument)
        MyBase.setSuccess()
        Me.argument = argument
    End Sub

    Overloads Sub setError(ByVal message As String)
        MyBase.setError(message)
        argument = Nothing
    End Sub

End Class
