Public Class ArgumentsResponse
    Inherits BaseResponse

    Public Property arguments As List(Of Argument)

    Overloads Sub setSuccess(ByVal arguments As List(Of Argument))
        MyBase.setSuccess()
        Me.arguments = arguments
    End Sub

    Overloads Sub setError(ByVal message As String)
        MyBase.setError(message)
        arguments = Nothing
    End Sub

End Class
