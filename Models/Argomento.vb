Imports Parse
Public Class Argomento
    Dim mId As String
    Dim mDescrizione As String
    Dim mTitolo As String
    Dim mIsCompletato As Boolean
    Dim mIdCategoria As String

    Public Property Id As String
        Get
            Return mId
        End Get
        Set(value As String)
            mId = value
        End Set
    End Property
    Public Property Titolo As String
        Get
            Return mTitolo
        End Get
        Set(value As String)
            mTitolo = value
        End Set
    End Property
    Public Property Descrizione As String
        Get
            Return mDescrizione
        End Get
        Set(value As String)
            mDescrizione = value
        End Set
    End Property
    Public Property isCompletato As Boolean
        Get
            Return mIsCompletato
        End Get
        Set(value As Boolean)
            mIsCompletato = value
        End Set
    End Property
    Public Property IdCategoria As String
        Get
            Return mIdCategoria
        End Get
        Set(value As String)
            mIdCategoria = value
        End Set
    End Property


    Public Shared Function getArgomentoFromParseObject(ByVal obj As ParseObject) As Argomento
        Dim arg As Argomento = New Argomento
        arg.Id = obj.ObjectId
        If (obj.Get(Of String)("titolo") IsNot Nothing) Then
            arg.Titolo = obj.Get(Of String)("titolo")
        End If
        If (obj.Get(Of String)("descrizione") IsNot Nothing) Then
            arg.Descrizione = obj.Get(Of String)("descrizione")
        End If

        arg.isCompletato = obj.Get(Of Boolean)("completato")

        If (obj.Get(Of ParseObject)("categoria") IsNot Nothing) Then
            arg.IdCategoria = obj.Get(Of ParseObject)("categoria").ObjectId
        End If
        Return arg
    End Function

    Public Shared Function getListaArgomentiFromListaParseObject(ByVal lista As List(Of ParseObject)) As List(Of Argomento)
        Dim argList As List(Of Argomento) = New List(Of Argomento)
        For Each o In lista
            argList.Add(getArgomentoFromParseObject(o))
        Next
        Return argList
    End Function

End Class
